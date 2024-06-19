import React, { useState } from "react";
import blob from "@/images/blobPattern.png";
import Image from "next/image";

export function CustomTab({
  tabs,
  onTabChange,
}: {
  tabs: string[];
  // set state type here
  onTabChange: (index: number) => void;
}) {
  const [activeTab, setActiveTab] = useState(0);

  // change tab on click
  const changeTab = (index: number) => {
    setActiveTab(index);
    onTabChange(index);
  };

  return (
    <div className="flex items-center relative overflow-y-hidden overflow-x-scroll  space-x-8 w-full h-fit ">
      {tabs.map((tab, index) => (
        <div
          key={index}
          className={`text-white cursor-pointer h-12 grid grid-cols-1  place-items-center transition-all duration-700 relative `}
          onClick={() => changeTab(index)}
        >
          <div
            className={`select-none ${activeTab === index ? "font-semibold " : "font-normal"}`}
          >
            {tab}
          </div>
          <div className="h-4"></div>
          <Image
            src={blob}
            alt="blob"
            className={`w-5 absolute top-2 -rotate-90 transition-opacity duration-700 ${activeTab === index ? "opacity-100" : "opacity-0"}`}
          />
        </div>
      ))}
    </div>
  );
}
