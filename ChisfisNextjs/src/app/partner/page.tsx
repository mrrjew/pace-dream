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

const page = () => {
  const [searchKey, setSearchKey] = useState<string>("");

  const handleSearchKeyChange = debounce((value) => {
    setSearchKey(value);
  }, 200);

  return (
    <div className="looking-partner-page">
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
