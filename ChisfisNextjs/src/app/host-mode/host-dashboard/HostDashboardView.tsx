/* eslint-disable react-hooks/exhaustive-deps */
"use client";
import { useProfile } from "@/context";
import { useFetch } from "@/hooks/useFetch";
import React, { useEffect, useState } from "react";
import { AiOutlineGift, AiOutlineUser } from "react-icons/ai";
import { BsClipboard } from "react-icons/bs";
import { RiHeadphoneLine } from "react-icons/ri";

function HostDashboardView() {
  const [menuItems, setMenuItems] = useState<Array<any>>([]);
  const [loaded, setLoaded] = useState(false);
  const { user }: any = useProfile();
  console.log(user);
  const { fetchData } = useFetch({
    url: `${process.env.NEXT_PUBLIC_BACKEND_URL}/host_dashboard_seed/get-host-dashboard`,
    queryKey: ["hostDashboard"],
    enabled: true,
  });
  useEffect(() => {
    const data = async () => {
      const result = await fetchData();
      console.log(result.data, "Fetch Data");
      const new_menu = result.data.map((elem: any) => {
        // const IconComponent = elem.icon;
        console.log(elem.icon);
        let icon;
        switch (elem.icon) {
          case "AiOutlineGift":
            icon = <AiOutlineGift size={30} />;
            break;
          case "AiOutlineUser":
            icon = <AiOutlineUser size={30} />;
            break;
          case "BsClipboard":
            icon = <BsClipboard size={30} />;
            break;
          case "RiHeadphoneLine":
            icon = <RiHeadphoneLine size={30} />;
            break;
        }
        return {
          ...elem,
          icon: icon,
        };
      });

      setMenuItems(new_menu);
      //   console.log(new_menu,"New Menu")
      setLoaded(true);
    };
    data();
  }, [loaded]);
  const dashboardMenuItems: {
    name: string;
    icon: any;
    url: string;
  }[] = menuItems;
  // }[] = [
  //   {
  //     title: "Account",
  //     icon: <AiOutlineUser size={30} />,
  //     url: ""
  //   },
  //   {
  //     title: "Transaction history",
  //     icon: <BsClipboard size={30} />,
  //     url: ""
  //   },
  //   // {
  //   //   title: "Tax information",
  //   //   icon: <BsFileEarmarkMinus size={30} />,
  //   // },
  //   {
  //     title: "Gift card",
  //     icon: <AiOutlineGift size={30} />,
  //     url: ""
  //   },
  //   // {
  //   //   title: "How Totel works",
  //   //   icon: <FiKey size={30} />,
  //   // },
  //   {
  //     title: "Contact support",
  //     icon: <RiHeadphoneLine size={30} />,
  //     url: ""
  //   },
  //   // {
  //   //   title: "Legal",
  //   //   icon: <BsFileCheck size={30} />,
  //   // },
  // ];
  return (
    <>
      <div>
        <div className="card bg-[#F9F9FF] shadow-xl mb-14">
          <div className="pt-5 pb-7 px-20">
            <ul className="menu rounded-box">
              {dashboardMenuItems.map((item, i) => (
                <li
                  key={i}
                  className={`flex gap-4 text-[#525151] flex-row py-5 hover:bg-[#f0f0f0] ${
                    i !== 6 && "border-b"
                  } border-[#6269DF33] items-center`}
                >
                  <span>{item.icon}</span>
                  <a href={`${item.url}`}>
                    <p className="text-2xl mt-1">{item.name}</p>
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </>
  );
}

export default HostDashboardView;
