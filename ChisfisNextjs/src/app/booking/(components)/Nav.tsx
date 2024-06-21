"use client";

import { FC } from "react";
import { Route } from "@/routers/types";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";
import { MdSearch } from "react-icons/md";
import { LuFilter } from "react-icons/lu";

export interface NavPropsType {
  show: boolean;
  setLeftPanelShow: (value: boolean) => void;
}

export const Nav: FC<NavPropsType> = ({ show, setLeftPanelShow }) => {
  const pathname = usePathname();

  const listNav: Route[] = ["/booking/completed", "/booking/cancelled"];

  return (
    <div className="flex md:flex-row flex-col lg:px-[3rem] sm:px-[1.5rem] px-[.5rem] md:pt-0 pt-[1rem] md:gap-0 gap-[.5rem] ">
      <div className=" flex justify-between sm:gap-[2rem] gap-[.3rem] ">
        <div
          onClick={() => setLeftPanelShow(!show)}
          className={` cursor-pointer select-none  flex lg:hidden border-2 border-[#DAE0E6] text-[#757575] items-center justify-center my-auto px-[1rem] py-[.4rem] gap-[.2rem] rounded-full sm:mr-[2rem] `}
        >
          <div>
            <LuFilter />
          </div>
          <h2>Filter</h2>
        </div>
        <div className=" relative  my-auto text-[#757575] md:hidden flex  sm:w-[16rem] w-[13.5rem] items-center py-[.5rem] h-[2.5rem] gap-[.5rem] rounded-full  border-2  sm:mr-[1rem] ">
          <div className=" absolute my-auto left-[1rem] z-[10] ">
            <MdSearch className=" text-[1.5rem]  " />
          </div>
          <input
            type="text"
            placeholder="Search by booking ID"
            className="border-[#DAE0E6] sm:px-[3rem] pl-[3rem] outline-none z-[1] bg-transparent sm:w-[16rem] w-[13.5rem] rounded-full h-[2.2rem] text-[.9rem] focus:border-[1px] border-transparent"
          />
        </div>
      </div>
      <div className="flex items-center justify-between w-[100%] ">
        <div className="flex sm:gap-[2rem]    ">
          {listNav.map((item) => {
            const isActive = pathname === item;
            const displayName = item.split("/").pop();
            return (
              <Link
                key={item}
                href={item}
                className={` py-[1.2rem]  border-b-2  capitalize px-[2rem] ${
                  isActive
                    ? "border-primary-500 font-medium"
                    : "border-transparent"
                }`}
              >
                {displayName}
              </Link>
            );
          })}
        </div>
      </div>
      <div className=" relative  my-auto text-[#757575] md:flex hidden w-[16rem]  items-center py-[.5rem] h-[2.5rem] gap-[.5rem] rounded-full  border-2  sm:mr-[1rem] ">
        <div className=" absolute my-auto left-[1rem] z-[10] ">
          <MdSearch className=" text-[1.5rem]  " />
        </div>
        <input
          type="text"
          placeholder="Search by booking ID"
          className="border-[#DAE0E6] px-[3rem] outline-none z-[1] bg-transparent w-[16rem] rounded-full h-[2.2rem] text-[.9rem] focus:border-[1px] border-transparent"
        />
      </div>
    </div>
  );
};
