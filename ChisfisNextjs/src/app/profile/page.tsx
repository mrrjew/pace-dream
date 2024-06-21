/** @format */

import ButtonSecondary from "@/shared/ButtonSecondary";
import Image from "next/image";
import React from "react";
import profileImage from "../../images/avatars/profile.png";
import Link from "next/link";
import ButtonPrimary from "@/shared/ButtonPrimary";
import MobileMenu from "@/components/profile/mobile-menu";
import { BiEdit } from "react-icons/bi";
import { ProfileMenuItems } from "@/data/profile";
const page = () => {
  return (
    <div className="lg:container px-4 mx-auto pb-24 pt-4 sm:py-10 lg:pb-32 text-neutral-700 dark:text-neutral-300">
      <div className="space-y-4 hidden md:block">
        <div className="flex-end">
          <ButtonSecondary>Back</ButtonSecondary>
        </div>
        {/* --------------------- */}
        <div className="flex flex-col space-y-6 xl:space-y-7 relative rounded-b-[30px] pb-4 mb-2 shadow">
          <div className="w-full h-[6rem] bg-gradient-to-r from-[#8A84FF]  to-[#FFDB98] rounded-t-[30px]"></div>
          <div className="rounded-full w-[115px] h-[115px] flex items-center justify-center absolute left-20 top-2">
            <Image
              alt="profile-image"
              className="rounded-full w-[95px] h-[95px]"
              height={80}
              width={80}
              src={profileImage}
            />
          </div>
          <div className="px-20 pt-8 flex justify-between items-center">
            <div className="tracking-[-0.1px] space-y-2">
              <h1 className="font-semibold text-2xl ">Sihyun Chae</h1>
              <p className="font-medium text-xl">sihyunchae@gmail.com</p>
            </div>
            <ButtonSecondary
              href="/profile/edit"
              className="flex flex-row gap-2 items-center"
            >
              <BiEdit width={19} height={19} />
              <span>Edit</span>
            </ButtonSecondary>
          </div>
        </div>

        {/* ----------menu item link----------- */}
        <div className="mt-4 px-20 py-10 rounded-[30px]">
          <div>
            <ul>
              {ProfileMenuItems.map((item, index) => (
                <li
                  key={item.title}
                  className="flex flex-col gap-3 py-3 cursor-pointer"
                >
                  <div className="flex flex-row items-center gap-3">
                    {item.icon}
                    <span className="font-normal text-2xl">{item.title}</span>
                  </div>
                  {index !== ProfileMenuItems.length - 1 && (
                    <hr className="bt-2" />
                  )}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      {/* mobile device */}
      <div className="space-y-4 block md:hidden">
        {/* --------------------- */}
        <div className="py-2 flex flex-row items-center gap-3">
          <Image
            alt="profile-image"
            className="rounded-full w-[53px] h-[53px]"
            height={53}
            width={53}
            src={profileImage}
          />
          <div className="tracking-[-0.1px] space-y-2">
            <h1 className="font-semibold text-[1rem]">Sihyun Chae</h1>
            <Link
              href={{ pathname: "/profile/edit" }}
              className="text-sm font-medium text-[#665CFD] dark:text-white dark:hover:text-gray-100"
            >
              View and Edit Profile
            </Link>
          </div>
        </div>
        <hr />

        {/* switching button */}
        <ButtonPrimary className="w-full">Switch to guest mode</ButtonPrimary>

        {/* ----------menu item link----------- */}
        <div className="mt-4 py-10">
          <MobileMenu />
        </div>
      </div>
    </div>
  );
};

export default page;
