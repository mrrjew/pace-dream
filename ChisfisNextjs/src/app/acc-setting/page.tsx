"use client";

import NewsLetter from "@/components/HelpCenter/NewsLetter";
import { SETTINGS_CARD_DATA } from "@/data/settings";
import Link from "next/link";
import { FaArrowRight } from "react-icons/fa";

const AccountSetting = () => {
  return (
    <div className="w-full h-max p-4 px-8 bg-white">
      <div className="w-full max-w-7xl mx-auto mt-8 py-8 md:py-20">
        <h1 className="text-4xl font-semibold text-gray-900/90">
          Account settings
        </h1>
        <p className="flex items-center gap-2 mt-2 mb-4 text-gray-900/80 ">
          <span>User</span>
          <span>jwlarbi15@gmail.com</span>
          <Link
            href="/profile"
            className="underline text-gray-900/80 hover:text-gray-900"
          >
            Go to profile
          </Link>
        </p>

        <div className="hidden md:grid gap-6 md:grid-cols-3 my-14">
          {SETTINGS_CARD_DATA.map((card) => (
            <Link
              href={card.href as Object}
              className="space-y-4 rounded-md shadow-md ring-[0.1px] ring-inset ring-gray-300/80 p-4 py-10"
            >
              <i className="text-6xl mb-4 text-gray-900/90">{<card.icon />}</i>
              <h2 className="text-lg font-semibold">{card.title}</h2>
              <p className="text-md text-gray-900/80 ">{card.body} </p>
            </Link>
          ))}
        </div>

        {/* mobile */}

        <div className="md:hidden flex flex-col">
          {SETTINGS_CARD_DATA.map((card) => (
            <div>
              <Link
                href={card.href as Object}
                className="flex items-center justify-between rounded-md shadow-md ring-[0.1px] ring-inset ring-gray-300/80 p-4 py-6"
              >
                <div className="flex gap-4 items-center">
                  <i className="text-4xl mb-4 mt-4 ">{<card.icon />}</i>
                  <h2 className="text-md font-normal">{card.title}</h2>
                </div>

                <FaArrowRight className="text-gray-700/80 text-md" />
              </Link>
            </div>
          ))}
        </div>
        <NewsLetter />
      </div>
    </div>
  );
};

export default AccountSetting;