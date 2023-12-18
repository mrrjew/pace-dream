"use client";
import { getLocalStorageItem } from "@/utils/localStorageUtil";
import axios from "axios";
import { createContext, useContext, useEffect, useState } from "react";

const UserContext = createContext({
  user: null,
  setUser: null,
});

const useProfile = () => useContext(UserContext);

const UserProvider = ({ children }: any) => {
  const userdata = getLocalStorageItem("user_info");
  const user = userdata ? JSON.parse(userdata) : null;
  const token = getLocalStorageItem("auth-token");

  const [userState, setUserState] = useState(user);

  const updateProfile = async (data: any) => {
    axios.put(`${process.env.NEXT_PUBLIC_BACKEND_URL}/profile`, data, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    }).then((res) => {
      setUserState(res.data.data);
      console.log(res);
    }
    ).catch((err) => {
      console.log(err);
    })
  };

  const getUser = async () => {
    const response = await fetch(`${process.env.NEXT_PUBLIC_BACKEND_URL}/profile`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
    });
    const data = await response.json();
    setUserState(data.data);
  };

  useEffect(() => {
    if (token) {
      getUser();
    }
  }, [token]);

  const values: any = {
    user: userState,
    updateProfile,
    getUser,
  };

  return <UserContext.Provider value={values}>{children}</UserContext.Provider>;
};

export { useProfile };

export default UserProvider;
