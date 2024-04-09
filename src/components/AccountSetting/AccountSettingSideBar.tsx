"use client";
import React from "react";
import { FiUser } from "react-icons/fi";
import { LuShieldCheck } from "react-icons/lu";
import { TbReceipt } from "react-icons/tb";
import { BiBell } from "react-icons/bi";

interface SidebarOptionProps {
  label: string;
  selected: string;
  icon: any;
  onSelect: (
    event: React.MouseEvent<HTMLDivElement, MouseEvent>,
    label: string
  ) => string;
}

const SidebarOption: React.FC<SidebarOptionProps> = ({
  label,
  selected,
  icon,
  onSelect,
}) => (
  <div
    className={`w-full px-8 py-[14px] flex items-center gap-2 lg:text-left text-center rounded-xl cursor-pointer ${
      label === selected ? "bg-[#632DF8]" : "text-black"
    } `}
    onClick={(event) => onSelect(event, label)}
  >
    <span className={`${label === selected ? "text-white" : "text-black"}`}>
      {icon}
    </span>
    <p
      className={`lg:text-xl text-xl font-normal ml-2 pt-1 ${
        label === selected ? "text-white" : "text-black"
      }`}
    >
      {label}
    </p>
  </div>
);

const AccountSettingSideBar = ({ selected, onSelect }: any) => {
  return (
    <div className="w-96">
      <SidebarOption
        label="Personal Information"
        icon={<FiUser className={`h-6 w-6`} />}
        selected={selected}
        onSelect={(event, label) => onSelect(label)}
      />
      <SidebarOption
        label="Login & Security"
        icon={<LuShieldCheck className={`h-6 w-6`} />}
        selected={selected}
        onSelect={(event, label) => onSelect(label)}
      />
      <SidebarOption
        label="Payments & Payouts"
        icon={<TbReceipt className={`h-6 w-6`} />}
        selected={selected}
        onSelect={(event, label) => onSelect(label)}
      />
      <SidebarOption
        label="Notifications"
        icon={<BiBell className={`h-6 w-6`} />}
        selected={selected}
        onSelect={(event, label) => onSelect(label)}
      />
    </div>
  );
};

export default AccountSettingSideBar;
