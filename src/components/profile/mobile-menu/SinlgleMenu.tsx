/** @format */

import { ProfileMenuItemsTypes } from "@/data/profile";
import Image from "next/image";
import Link from "next/link";
import React from "react";

export interface MenuItemPropsType {
    item: ProfileMenuItemsTypes;
    activePosition: number | undefined;
    setActivePosition: (position: number | undefined) => void;
}
const SingleMenu = ({
    item,
    activePosition,
    setActivePosition,
}: MenuItemPropsType) => {
    return (
        <li
            key={item.title}
            className="flex flex-col gap-3 py-3 cursor-pointer"
        >
            <Link
                onClick={() => setActivePosition(item.id)}
                href={{
                    pathname: item.url,
                }}
                className={`flex flex-row items-center gap-3 ${
                    activePosition === item.id
                        ? "text-blue-600 dark:text-blue-600"
                        : "text-neutral-700 dark:text-neutral-300"
                }`}
            >
                {item.icon}
                <span className="font-normal text-[1rem]">{item.title}</span>
            </Link>
        </li>
    );
};

export default SingleMenu;
