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
    className={`flex lg:items-start items-center lg:w-[347px] lg:h-20 h-16 w-40 mb-1 mt-1 lg:px-5 lg:py-6 px-2 py-1 cursor-pointer border-[1px] lg:rounded-2xl rounded-2xl  ${
      label === selected
        ? "bg-[#F9F8FB] text-[#632DF8]  lg:border-l-2   border-indigo-500"
        : "text-black"
    } `}
    onClick={(event) => onSelect(event, label)}
  >
    <p
      className={`lg:text-xl text-base font-normal ml-2 pt-1 ${
        label === selected ? "text-[#632DF8]" : "text-black"
      }`}
    >
      {label}
    </p>
  </div>
);

const HelpCenterSideBar = ({ selected, onSelect }: any) => {
  return (
    <div className="left-0 lg:h-[90vh] lg:gap-0 gap-8 items-center lg:justify-normal lg:w-[400px] text-black flex lg:flex-col lg:items-start sticky ">
      <div className="flex lg:flex-col flex-col items-center ">
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
      </div>
      <div className="flex lg:flex-col flex-col items-center ">
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
    </div>
  );
};

export default HelpCenterSideBar;
