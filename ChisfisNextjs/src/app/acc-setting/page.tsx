"use client";
import AccountSettingMainContent, {
  AccountSettingPageType,
} from "@/components/AccountSetting/AccountSettingMainContent";
import ButtonPrimary from "@/shared/ButtonPrimary";
import Input from "@/shared/Input";
import AccountSettingSideBar from "@/components/AccountSetting/AccountSettingSideBar";
import Link from "next/link";
import { useState } from "react";

const AccountSetting = () => {
  const [selected, setSelected] =
    useState<AccountSettingPageType>("Account Settings");
  const handleOptionSelect = (label: AccountSettingPageType) => {
    setSelected(label);
  };
  return (
    <div className="lg:my-16 my-12 lg:mx-32 mx-5 ">
      <div className="hidden lg:inline-flex flex-col items-start gap-3">
        <p className="text-5xl font-semibold">Account</p>
        <p className="text-xl">
          MrrJew, <span className="text-[#757575]">jwlarbi15@gmail.com</span> ·
          Go to profile
        </p>
      </div>
      <div className="flex gap-6 lg:flex-row flex-col mt-12">
        <AccountSettingSideBar
          selected={selected}
          onSelect={handleOptionSelect}
        />
        <AccountSettingMainContent selected={selected} onSelect={function (val: AccountSettingPageType): void {
          throw new Error("Function not implemented.");
        } } />
      </div>

      <div className="bg-white">
        <div className="lg:py-16 py-12 lg:px-16 px-6 container">
          {/* lg:my-16 my-12 lg:mx-32 mx-5 bg-white */}
          {/* <div className="flex gap-6 lg:flex-row flex-col mt-12">
          <AccountSettingSideBar
            selected={selected}
            onSelect={handleOptionSelect}
          />
          <AccountSettingMainContent selected={selected} />
        </div> */}
          <div className="container">
            <AccountSettingMainContent
              selected={selected}
              onSelect={handleOptionSelect}
            />
          </div>
          {/* footer */}
          <div className="container">
            <div className="bg-blue-600 rounded-lg text-center min-h-72 text-white flex justify-center my-16">
              <div className="w-full md:w-[40em] grid place-content-center gap-4">
                <h1 className="text-sm md:text-4xl font-extrabold">
                  Join our newsletter
                </h1>
                <p className="text-xs md:text-md p-1 md:p-4 font-normal">
                  Read and share new perspectives on just about any topic.{" "}
                  <br />
                  Everyone’s welcome.
                </p>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  <div className="col-span-2">
                    <Input
                      placeholder="Enter your email id to subscribe"
                      className=" rounded-3xl ring-1 ring-white placeholder:text-gray-300 text-white outline-none !bg-blue-600 border-collapse border-none focus:border-none focus:ring-1 focus:ring-white"
                    />
                  </div>
                  <div>
                    <ButtonPrimary className="!bg-gray-100 !text-black ml-2 md:ml-0 text-xs w-full md:w-fit">
                      Subscribe
                    </ButtonPrimary>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AccountSetting;