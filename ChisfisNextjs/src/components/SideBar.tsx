'use client';

import {
  CalendarIcon,
  ChevronDoubleLeftIcon,
  ChevronDoubleRightIcon,
  CogIcon,
  EnvelopeIcon,
  HeartIcon,
  HomeIcon,
} from '@heroicons/react/24/outline';
import Link from 'next/link';
import React, { useState } from 'react';

interface SidebarOptionProps {
  icon: React.ReactElement;
  label: string;
  selected: string;
  collapse: boolean;
  link: string;
}

const SidebarOption: React.FC<SidebarOptionProps> = ({
  icon,
  label,
  selected,
  collapse,
  link,
}) => (
  <div
    className={`flex mb-1 mt-1 p-2 pl-3 cursor-pointer w-full ${
      label === selected
        ? 'bg-[#F9F8FB] text-[#632DF8] border-l-4 border-indigo-500'
        : 'text-black'
    } ${collapse ? 'justify-center' : 'justify-start'}`}
  >
    {icon}
    {collapse ? null : (
      <Link href={{ pathname: link }}>
        <p
          className={`text-md ml-2 pt-1 ${
            label === selected ? 'text-[#632DF8]' : 'text-black'
          }`}
        >
          {label}
        </p>
      </Link>
    )}
  </div>
);

const Collapse = ({ collapse }: { collapse: boolean }) => (
  <div
    className={`flex mb-1 mt-1 p-2 pl-3 cursor-pointer w-full bg-[#F9F8FB] text-[#632DF8] border border-indigo-500 rounded-md items-center`}
  >
    {collapse ? (
      <ChevronDoubleRightIcon className="w-8 h-8" />
    ) : (
      <>
        <ChevronDoubleLeftIcon className="w-8 h-8" />
        <p className={`text-md ml-2 pt-1 text-[#632DF8]`}>Collapse</p>
      </>
    )}
  </div>
);

const SideBar = () => {
  const [selected, setSelected] = useState('Inbox');
  const [collapse, setCollapse] = useState(true);
  const clickCollapse = () => {
    setCollapse(!collapse);
  };
  return (
    <div
      className={`left-0 lg:h-[90vh]  text-black flex flex-col justify-between border-r ${
        collapse ? 'w-70' : 'w-200 min-w-[200px]'
      }`}
    >
      <div className="flex flex-col items-start">
        <SidebarOption
          icon={<EnvelopeIcon className="w-8 h-8" />}
          collapse={collapse}
          label="Inbox"
          selected={selected}
          link="/inbox"
        />
        <SidebarOption
          icon={<HomeIcon className="w-8 h-8" />}
          collapse={collapse}
          label="Listings"
          selected={selected}
          link="/listings"
        />
        <SidebarOption
          icon={<CalendarIcon className="w-8 h-8" />}
          collapse={collapse}
          label="Bookings"
          selected={selected}
          link="/bookings"
        />
        <SidebarOption
          icon={<HeartIcon className="w-8 h-8" />}
          collapse={collapse}
          label="Wishlist"
          selected={selected}
          link="/wishlist"
        />
        <SidebarOption
          icon={<CogIcon className="w-8 h-8" />}
          collapse={collapse}
          label="Settings"
          selected={selected}
          link="/settings"
        />
      </div>
      <div className="m-2 p-2" onClick={() => clickCollapse()}>
        <Collapse collapse={collapse} />
      </div>
    </div>
  );
};

export default SideBar;
