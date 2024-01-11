"use client";

import {
  HeartIcon,
  EnvelopeIcon,
  HomeIcon,
  CalendarIcon,
  CogIcon,
  ChevronDoubleLeftIcon,
  ChevronDoubleRightIcon,
} from "@heroicons/react/24/outline";
import { on } from "events";
import React, { useState } from "react";

interface SidebarOptionProps {
  icon: React.ReactElement;
  label: string;
  selected: string;
  collapse: boolean;
}

const SidebarOption: React.FC<SidebarOptionProps> = ({
  icon,
  label,
  selected,
  collapse,
}) => (
  <div
    className={`flex mb-1 mt-1 p-2 pl-3 cursor-pointer w-full ${
      label === selected
        ? "bg-[#F9F8FB] text-[#632DF8] border-l-4 border-indigo-500"
        : "text-black"
    } ${collapse ? 'justify-center':'justify-start'}`}
  >
    {icon}
    {collapse ? null : (
      <p
        className={`text-md ml-2 pt-1 ${
          label === selected ? "text-[#632DF8]" : "text-black"
        }`}
      >
        {label}
      </p>
    )}
  </div>
);

const Collapse = ({ collapse }: { collapse: boolean }) => (
  <div
    className={`flex mb-1 mt-1 p-2 pl-3 cursor-pointer w-full bg-[#F9F8FB] text-[#632DF8] border border-indigo-500 rounded-md items-center`}
  >
    {collapse ? (
      <ChevronDoubleRightIcon className="w-8 h-8" />
    ) : (
      <>
        <ChevronDoubleLeftIcon className="w-8 h-8" />
        <p className={`text-md ml-2 pt-1 text-[#632DF8]`}>Collapse</p>
      </>
    )}
  </div>
);

const SideBar = () => {
  const [selected, setSelected] = useState("Inbox");
  const [collapse, setCollapse] = useState(true);
  const clickCollapse = () => {
    setCollapse(!collapse);
  };
  return (
    <div className={`left-0 lg:h-[90vh]  text-black flex flex-col justify-between border-r ${collapse ? 'w-70':'w-200 min-w-[200px]'}`}>
      <div className="flex flex-col items-start">
        <SidebarOption
          icon={<EnvelopeIcon className="w-8 h-8" />}
          collapse={collapse}
          label="Inbox"
          selected={selected}
        />
        <SidebarOption
          icon={<HomeIcon className="w-8 h-8" />}
          collapse={collapse}
          label="Listings"
          selected={selected}
        />
        <SidebarOption
          icon={<CalendarIcon className="w-8 h-8" />}
          collapse={collapse}
          label="Bookings"
          selected={selected}
        />
        <SidebarOption
          icon={<HeartIcon className="w-8 h-8" />}
          collapse={collapse}
          label="Wishlist"
          selected={selected}
        />
        <SidebarOption
          icon={<CogIcon className="w-8 h-8" />}
          collapse={collapse}
          label="Settings"
          selected={selected}
        />
      </div>
      <div className="m-2 p-2" onClick={()=>clickCollapse()}>
        <Collapse collapse={collapse} />
      </div>
    </div>
  );
};

export default SideBar;
