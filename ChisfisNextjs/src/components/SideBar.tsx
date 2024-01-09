"use client";

import {
  HeartIcon,
  EnvelopeIcon,
  HomeIcon,
  CalendarIcon,
  CogIcon,
} from "@heroicons/react/24/outline";
import React, {useState} from "react";

interface SidebarOptionProps {
  icon: React.ReactElement;
  label: string;
  selected: string;
}

const SidebarOption: React.FC<SidebarOptionProps> = ({
  icon,
  label,
  selected,
}) => (
  <div
    className={`flex items-start mb-1 mt-1 p-2 pl-3 cursor-pointer w-full ${
      label === selected
        ? "bg-[#F9F8FB] text-[#632DF8] border-l-4 border-indigo-500"
        : "text-black"
    } `}
  >
    {icon}
    <p
      className={`text-md ml-2 pt-1 ${
        label === selected ? "text-[#632DF8]" : "text-black"
      }`}
    >
      {label}
    </p>
  </div>
);

const SideBar = () => {
 const [selected, setSelected] = useState('Inbox');
  return (
    <div className="left-0 lg:h-[90vh] w-400 min-w-[250px] text-black flex flex-col items-start border-r">
      <SidebarOption
        icon={<EnvelopeIcon className="w-8 h-8" />}
        label="Inbox"
        selected={selected}
      />
      <SidebarOption
        icon={<HomeIcon className="w-8 h-8" />}
        label="Listings"
        selected={selected}
      />
      <SidebarOption
        icon={<CalendarIcon className="w-8 h-8" />}
        label="Bookings"
        selected={selected}
      />
      <SidebarOption
        icon={<HeartIcon className="w-8 h-8" />}
        label="Wishlist"
        selected={selected}
      />
      <SidebarOption
        icon={<CogIcon className="w-8 h-8" />}
        label="Settings"
        selected={selected}
      />
    </div>
  );
};

export default SideBar;
