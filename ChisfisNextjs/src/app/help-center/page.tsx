"use client";
import React, { useState } from "react";
import HelpCenterSideBar from "@/components/HelpCenterSideBar";
// import HelpCenter from "./page";
import HelpCenterPage from "@/components/HelpCenter/HelpCenterPage";

const HelpCenterLayout = () => {
  const [selected, setSelected] = useState<string>("Contact Us");

  const handleOptionSelect = (label: string) => {
    setSelected(label);
  };
  return (
    <div className="lg:ml-28 mx-4">
      <div className="pt-7 pb-7">
        <p className="flex gap-2">
          Help center
          <span>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-4 h-4 mt-1 "
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="m8.25 4.5 7.5 7.5-7.5 7.5"
              />
            </svg>
          </span>
          {selected}
        </p>
      </div>
      <div className="flex lg:gap-4 lg:flex-row flex-col">
        <HelpCenterSideBar selected={selected} onSelect={handleOptionSelect} />
        <HelpCenterPage selected={selected} />
      </div>
    </div>
  );
};

export default HelpCenterLayout;
