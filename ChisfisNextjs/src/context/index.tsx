'use client';
import axios from 'axios';
import Cookies from 'js-cookie';
import { createContext, useContext, useEffect, useState } from 'react';

const UserContext = createContext({
  user: null,
  setUser: null,
});

const useProfile = () => useContext(UserContext);

const UserProvider = ({ children }: any) => {
  const userdata = Cookies.get('user_info');
  const user = userdata ? JSON.parse(userdata) : null;
  const token = Cookies.get('auth-token');

  const [userState, setUserState] = useState(user);

  const clearUser = () => {
    setUserState(null);
  };

  const updateProfile = async (data: any) => {
    axios
      .put(`${process.env.NEXT_PUBLIC_BACKEND_URL}/auth/profile`, data, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      .then((res) => {
        setUserState(res.data.data);
        console.log(res);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const getUser = async () => {
    const response = await fetch(
      `${process.env.NEXT_PUBLIC_BACKEND_URL}/auth/profile`,
      {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${token}`,
        },
      }
    );
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
    clearUser,
  };

  return <UserContext.Provider value={values}>{children}</UserContext.Provider>;
};

export { useProfile };

export default UserProvider;
