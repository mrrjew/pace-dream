"use client";
import AccountSettingMainContent from "@/components/AccountSetting/AccountSettingMainContent";
import AccountSettingSideBar from "@/components/AccountSetting/AccountSettingSideBar";
import { useState } from "react";

const AccountSetting = () => {
  const [selected, setSelected] = useState<string>("Personal Information");
  const handleOptionSelect = (label: string) => {
    setSelected(label);
  };
  return (
    <div className="lg:my-16 my-12 lg:mx-32 mx-5 ">
      <div className="hidden lg:inline-flex flex-col items-start gap-3">
        <p className="text-5xl font-semibold">Account</p>
        <p className="text-xl">
          MrrJew,{" "}
          <span className="text-[#757575]">jwlarbi15@gmail.com</span> · Go to
          profile
        </p>
      </div>
      <div className="flex gap-6 lg:flex-row flex-col mt-12">
        <AccountSettingSideBar
          selected={selected}
          onSelect={handleOptionSelect}
        />
        <AccountSettingMainContent selected={selected} />
      </div>
    </div>
  );
};

export default AccountSetting;
