"use client";
import AccountSettingMainContent, { AccountSettingPageType } from "@/components/AccountSetting/AccountSettingMainContent";
import ButtonPrimary from "@/shared/ButtonPrimary";
import Input from "@/shared/Input";
// import AccountSettingSideBar from "@/components/AccountSetting/AccountSettingSideBar";
import Link from "next/link";
import { useState } from "react";


const AccountSetting = () => {
  const [selected, setSelected] = useState<AccountSettingPageType>("Account Settings");
  const handleOptionSelect = (label: AccountSettingPageType) => {
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
    <div className="bg-white">
      <div className="lg:py-16 py-12 lg:px-16 px-6 container grid grid-cols-1 space-y-20">
        {/* lg:my-16 my-12 lg:mx-32 mx-5 bg-white */}
        {/* <div className="flex gap-6 lg:flex-row flex-col mt-12">
          <AccountSettingSideBar
            selected={selected}
            onSelect={handleOptionSelect}
          />
          <AccountSettingMainContent selected={selected} />
        </div> */}
        <div className="container">
            <AccountSettingMainContent selected={selected} onSelect={handleOptionSelect} />
        </div>
          {/* footer */}
        <div className="grid md:container bg-primary-700 rounded-md p-2 py-12 text-white">
        <div className="w-full grid place-content-center gap-4 text-center">
              <h1 className="text-sm md:text-4xl font-extrabold">Join our newsletter</h1>
              <p className="text-xs md:text-xl p-1 md:p-4 font-extralight">
                Read and share new perspectives on just about any <br/> topic Everyone’s welcome.
              </p>
              <div className="flex flex-wrap justify-between text-center items-center h-fit gap-4 w-full md:w-[42dvw]">
                <div className="flex-1 w-full">
                  <Input
                    placeholder="Enter your email id to subscribe"
                    className="w-full h-fit rounded-3xl ring-[0.09em] ring-gray-300 placeholder:text-gray-100 text-white outline-none !bg-transparent border-collapse border-none focus:border-none focus:ring-[0.1em] focus:ring-white" />
                </div>
               <div className="w-full md:w-fit">
                  <ButtonPrimary className="!bg-gray-100 !text-black text-xs w-full !py-2">Subscribe</ButtonPrimary>
               </div>
              </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AccountSetting;
