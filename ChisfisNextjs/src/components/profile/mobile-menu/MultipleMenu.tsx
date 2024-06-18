/** @format */
"use client";

import Image from "next/image";
import React, { useState } from "react";
import arrowIcon from "../../../images/profile/icons/account/arrow.png";
import { MenuItemPropsType } from "./SinlgleMenu";
import Link from "next/link";
import { AiOutlineDown } from "react-icons/ai";

const MultipleMenu = ({
  item,
  activePosition,
  setActivePosition,
}: MenuItemPropsType) => {
  const [isSubMenuActive, setSubMenuActive] = useState("");
  return (
    <li
      key={item.title}
      className="flex flex-col gap-3 py-3 cursor-pointer transition duration-150 ease-in-out"
    >
      <div
        onClick={() => setActivePosition(item.id)}
        className={`flex justify-between items-center ${
          activePosition === item.id
            ? "text-blue-600 dark:text-blue-600"
            : "text-neutral-700 dark:text-neutral-300"
        }`}
      >
        <div className="flex flex-row items-center gap-3">
          <div className="w-[24px] h-[24px]">{item.icon}</div>
          <span className="font-normal text-[1rem]">{item.title}</span>
        </div>

        <AiOutlineDown
          className={activePosition === item.id ? "rotate-0" : "rotate-90"}
          width={13.31}
          height={7.67}
        />
      </div>
      {/* sub menu items */}
      {item.child && item.child.length && activePosition === item.id && (
        <div className="pl-8 transition duration-150 ease-in-out">
          <ul className="">
            {item.child.map((item) => (
              <li
                key={item.title}
                className="flex flex-col gap-3 py-3 cursor-pointer"
              >
                <Link
                  onClick={() => setSubMenuActive(item.url)}
                  href={{
                    pathname: item.url,
                  }}
                  className={`flex flex-row items-center gap-3 ${
                    isSubMenuActive === item.url
                      ? "text-blue-600 dark:text-blue-600"
                      : "text-neutral-700 dark:text-neutral-300"
                  }`}
                >
                  {item.icon}
                  <span className="font-normal text-[1rem]">{item.title}</span>
                </Link>
              </li>
            ))}
          </ul>
        </div>
      )}
    </li>
  );
};

export default MultipleMenu;
