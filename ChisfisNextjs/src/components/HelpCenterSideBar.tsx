"use client";
import React from "react";
interface SidebarOptionProps {
  label: string;
  selected: string;
  onSelect: (
    event: React.MouseEvent<HTMLDivElement, MouseEvent>,
    label: string
  ) => string;
}

const SidebarOption: React.FC<SidebarOptionProps> = ({
  label,
  selected,
  onSelect,
}) => (
  <div
    className={`flex items-start w-[347px] mb-1 mt-1 px-5 py-7 pl-3 cursor-pointer  ${
      label === selected
        ? "bg-[#F9F8FB] text-[#632DF8] border-l-2 border-indigo-500"
        : "text-black"
    } `}
    onClick={(event) => onSelect(event, label)}
  >
    <p
      className={`text-xl font-normal ml-2 pt-1 ${
        label === selected ? "text-[#632DF8]" : "text-black"
      }`}
    >
      {label}
    </p>
  </div>
);

const HelpCenterSideBar = ({ selected, onSelect }:any) => {
  return (
    <div className="left-0 lg:h-[90vh] w-400 min-w-[400px] text-black flex flex-col items-start sticky ">
      <SidebarOption
        label="Contact Us"
        selected={selected}
        onSelect={(event, label) => onSelect(label)}
        // onSelect={() => onSelect("Contact Us")}
      />
      <SidebarOption
        label="Contacting us for support"
        selected={selected}
        onSelect={(event, label) => onSelect(label)}
        // onSelect={() => onSelect("Contacting us for support")}
      />
      <SidebarOption
        label="Where you can reach us"
        selected={selected}
        onSelect={(event, label) => onSelect(label)}
        // onSelect={() => onSelect("Where you can reach us")}
      />
      <SidebarOption
        label="See all"
        selected={selected}
        onSelect={(event, label) => onSelect(label)}
        // onSelect={() => onSelect("See all")}
      />
    </div>
  );
};

export default HelpCenterSideBar;
