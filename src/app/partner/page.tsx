"use client";

import { useState } from "react";
import Image from "next/image";
import { debounce } from "lodash";
import { Divider } from "primereact/divider";
import searchSvg from "@/images/search-icon.svg";
import filterSvg from "@/images/filter.svg";
import dotMenuSvg from "@/images/dot-menu-icon.svg";
import notificationSvg from "@/images/notification-icon.svg";
import mapSvg from "@/images/map.svg";
import __partners from "../../data/jsons/__partners.json";
import PartnerList from "@/components/Partner/PartnerList";
import SectionSubscribe from "@/components/SectionSubscribe";
import RoomMate_Bg from "@/images/room-mate-filter-image.png";


const buttonClassTop =
  "h-[46px] border-[1px] rounded-full w-fit px-5 text-[#757575] hover:bg-[#632DF8] hover:text-white";
const buttonClass =
  "h-[46px] border-[1px] rounded-full text-base w-fit px-5 text-black hover:bg-[#632DF8] hover:text-white";
const searchButtonClass =
  "bg-[#632DF8] w-full h-[46px] lg:w-[46px] rounded-full flex justify-center items-center";

const page = () => {
  const [searchKey, setSearchKey] = useState<string>("");

  const handleSearchKeyChange = debounce((value) => {
    setSearchKey(value);
  }, 200);

  return (
    <div className="looking-partner-page">
      {/* Search Bar */}
      <div className="relative flex justify-center lg:w-full sm:w-screen items-center">
        <div className="lg:w-full w-screen">
          <Image
            src={RoomMate_Bg}
            alt="roommate-bg"
            className="lg:w-full w:340px lg:h-44 h-[454px]  object-cover"
          />
        </div>
        <div className="lg:flex gap-6 p-8 z-10 absolute h-[411px] w-[320px] lg:h-[139px] lg:w-fit rounded-3xl bg-white ">
          <div className="flex flex-col gap-2  ">
            <p>Where</p>
            <input
              type="text"
              placeholder="Minamiuonuma, Niigata"
              className="block  border-neutral-200 focus:border-primary-300 focus:ring focus:ring-primary-200 focus:ring-opacity-50 bg-white dark:border-neutral-700 dark:focus:ring-primary-6000 dark:focus:ring-opacity-25 dark:bg-neutral-900 h-[46px] px-4 py-3 lg:w-[444px] w:[288px] rounded-3xl "
            />
          </div>
          <div className="flex flex-col gap-2 lg:mt-0 mt-6">
            <p>Budget</p>
            <div className="flex gap-2">
              <input
                type="text"
                placeholder="Minimum"
                className="block border-neutral-200 focus:border-primary-300 focus:ring focus:ring-primary-200 focus:ring-opacity-50 bg-white dark:border-neutral-700 dark:focus:ring-primary-6000 dark:focus:ring-opacity-25 dark:bg-neutral-900 h-[46px] px-4 py-3 w-[110px] rounded-3xl"
              />
              <input
                type="text"
                placeholder="Maximum"
                className="block border-neutral-200 focus:border-primary-300 focus:ring focus:ring-primary-200 focus:ring-opacity-50 bg-white dark:border-neutral-700 dark:focus:ring-primary-6000 dark:focus:ring-opacity-25 dark:bg-neutral-900 h-[46px] px-4 py-3 w-[112px] rounded-3xl"
              />
            </div>
          </div>
          <div className="flex flex-col gap-2 lg:mt-0 mt-6">
            <p>Gender</p>
            <div className="flex gap-2">
              <button className={buttonClassTop}>Male</button>
              <button className={buttonClassTop}>Female</button>
            </div>
          </div>
          <div className="flex lg:justify-end pt-8">
            <button className={searchButtonClass}>
              <div>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke-width="1.5"
                  stroke="currentColor"
                  className="w-6 h-6 text-white hidden lg:block"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z"
                  />
                </svg>
                <div className="lg:hidden">
                  <p className="text-[17px] text-white">Search</p>
                </div>
              </div>
            </button>
          </div>
        </div>
      </div>
      <div className="filter-wrapper">
        <div className="flex items-center justify-center gap-2 flex-wrap">
          <div className="filter-wrapper__price">
            <select name="price" id="price">
              <option value="">Price</option>
              <option value="">Price 1</option>
              <option value="">Price 2</option>
              <option value="">Price 3</option>
            </select>
          </div>
          <div className="filter-wrapper__gender">
            <select name="gender" id="gender">
              <option value="">Gender</option>
              <option value="">Male</option>
              <option value="">Female</option>
              <option value="">Other</option>
            </select>
          </div>

          <Divider
            layout="vertical"
            className="w-[1px] h-[16px] bg-[#DAE0E6]"
          />

          <button type="button">Free Cancellation</button>
          <button type="button">Pet Lover</button>
          <button type="button">Single</button>
          <button type="button">Couples</button>
          <button type="button">Foot Baller</button>
          <button type="button">Student</button>
          <button type="button">Professional</button>
          <button type="button" className="flex items-center">
            <Image
              src={filterSvg}
              width={20}
              height={20}
              className="mr-2"
              alt="icon filter"
            />
            Filter
          </button>
          <button type="button" className="flex items-center">
            <Image
              src={mapSvg}
              width={20}
              height={20}
              className="mr-2"
              alt="icon filter"
            />
            Show In Map
          </button>
        </div>
      </div>

      <div className="filter-wrapper-mobile">
        <div className="search-box">
          <Image src={searchSvg} width={16} height={16} alt="menu" />
          <input
            type="text"
            className="search-box__input"
            placeholder="Find..."
            value={searchKey}
            onChange={(e) => handleSearchKeyChange(e.target.value)}
          />
          <button type="button" className="search-box__btn">
            Search
          </button>
        </div>
        <div className="filter">
          <Image src={filterSvg} width={20} height={20} alt="filter" />
        </div>
        <div className="menu">
          <Image src={dotMenuSvg} width={20} height={20} alt="menu" />
        </div>
        <div className="notification">
          <Image src={notificationSvg} width={24} height={24} alt="menu" />
        </div>
      </div>
      <div className="content-wrapper mt- lg:mt-0">
        <PartnerList partners={__partners} searchKey={searchKey} />
      </div>
      <SectionSubscribe className="mt-16 mb-16" />
    </div>
  );
};

export default page;
