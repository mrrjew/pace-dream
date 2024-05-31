"use client";
import AccountSettingMainContent, { AccountSettingPageType } from "@/components/AccountSetting/AccountSettingMainContent";
import SubscriberFooter from "@/components/SubscriberFooter";

import { useState } from "react";


const AccountSetting = () => {
  const [selected, setSelected] = useState<AccountSettingPageType>("Account Settings");
  const handleOptionSelect = (label: AccountSettingPageType) => {
    setSelected(label);
  };
  return (
    <section className="w-full bg-white flex justify-center">
      <div className="lg:py-16 py-12 lg:px-16 px-6 container grid grid-cols-1 space-y-20">
        <div className="container">
            <AccountSettingMainContent selected={selected} onSelect={handleOptionSelect} />
        </div>
         <SubscriberFooter/>
      </div>
    </section>
  );
};

export default AccountSetting;