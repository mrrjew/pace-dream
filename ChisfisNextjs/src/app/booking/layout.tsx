"use client";
import { Nav } from "./(components)/Nav";
import LeftPanel from "@/components/common/LeftPanel";
import { Route, PathName } from "@/routers/types";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React, { useState } from "react";
import { AiOutlineLike } from "react-icons/ai";
import { PiFileTextDuotone } from "react-icons/pi";
import { LuMail } from "react-icons/lu";
import { LuLayout, LuSettings } from "react-icons/lu";
import { BiSupport } from "react-icons/bi";
import { ReactNode, FC } from "react";
import NewsLetter from "@/components/NewsLetter";
import JoinOurCommunity from "@/components/common/JoinOurCommunity";
import { LuFilter } from "react-icons/lu";

export interface CommonLayoutProps {
  children?: React.ReactNode;
}

const CommonLayout: FC<CommonLayoutProps> = ({ children }) => {
  const [showLeftpanel, setShowLeftpanel] = useState(false);
  const multiLinksData = [
    {
      title: "Inbox",
      icon: <LuMail />,
      id: 1,
      links: [
        {
          name: "Primary",
          path: "/inbox/primary" as PathName,
        },
        {
          name: "Social",
          path: "/inbox/social" as PathName,
        },
        {
          name: "Promotions",
          path: "/inbox/promotions" as PathName,
        },
      ],
    },
    {
      title: "Listings",
      icon: <LuLayout />,
      id: 2,
      links: [
        {
          name: "Active",
          path: "/listings/active" as PathName, 
        },
        {
          name: "Draft",
          path: "/listings/draft" as PathName,
        },
        {
          name: "Expired",
          path: "/listings/expired" as PathName,
        },
        {
          name: "Sold",
          path: "/listings/sold" as PathName,
        },
      ],
    },
    {
      title: "Booking",
      icon: <PiFileTextDuotone />,
      id: 3,
      links: [
        {
          name: "Room Stays",
          path: "/booking/room-stays" as PathName,
          icon: <AiOutlineLike />,
        },
        {
          name: "Hourly Rental",
          path: "/booking/hourly-rental" as PathName,
        },
        {
          name: "Space Hourly",
          path: "/booking/space-hourly" as PathName,
        },
        {
          name: "Rental Gear",
          path: "/booking/rental-gear" as PathName,
        },
        {
          name: "Roommate",
          path: "/booking/roommate" as PathName,
        },
        {
          name: "Experiences",
          path: "/booking/experiences" as PathName,
        },
        {
          name: "Last Minutes",
          path: "/booking/last-minutes" as PathName,
        },
      ],
    },
  ];

  const singleLinkData = [
    {
      title: "Setting",
      icon: <LuSettings />,
      id: 4,
      links: "/setting" as PathName, // Change 'path' to 'links'
    },
    {
      title: "Need Help",
      icon: <BiSupport />,
      id: 5,
      links: "/help" as PathName, // Change 'path' to 'links'
    },
  ]

  return (
    <div className="bg-white w-[100%] ">
      <div className="relative flex ">
        <LeftPanel
          multiLinksData={multiLinksData}
          singleLinkData={singleLinkData}
          show={showLeftpanel}
          setLeftPanelShow={setShowLeftpanel}
        />
        <div className="flex flex-col w-[100%] ">
          <div className="w-[100%] bg-white border-b ">
            <Nav show={showLeftpanel} setLeftPanelShow={setShowLeftpanel} />
          </div>
          <div className="w-[100%] bg-white  ">{children}</div>
        </div>
      </div>
      <JoinOurCommunity />
    </div>
  );
};

export default CommonLayout;
