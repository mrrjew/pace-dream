"use client";

import { FC, useEffect } from "react";
import { useState } from "react";
// import RoomStayForm from "./TabForms/RoomStayForm";
// import TimeBasedForm from "./TabForms/TimeBasedForm";
// import HourlyRentalGear from "./TabForms/HourlyRentalGear";
// import LastMinutes from "./TabForms/LastMinutes";
// import FindRoommate from "./TabForms/FindRoommate";
// import ExperienceForm from "./TabForms/ExperienceForm";
import { PropertyCategory } from "@/types/rentalItems";
import ButtonSubmit from "@/app/(client-components)/(HeroSearchForm)/ButtonSubmit";
import DatesRangeForm from "./TabForms/DatesRangeForm";
import GuestForm from "./TabForms/GuestForm";
import LocationForm from "./TabForms/LocationForm";
import Link from "next/link";

export type SearchTab =
  | "Room Stays"
  | "Stays"
  | "Find Roommate"
  | "Experiences"
  | "Flights"
  | "Cars"
  | "Hourly"
  | "Stays"
  | "Time-Based"
  | "Hourly Rental Gear"
  | "Last Minutes";

export interface SearchFormPropsType {
  className?: string;
  currentTab?: PropertyCategory;
  currentPage?:
    | "Room Stays"
    | "Find Roommate"
    | "Experiences"
    | "Hourly"
    | "Stays"
    | "Time-Based"
    | "Hourly Rental Gear"
    | "Last Minutes";
}

const SearchForm: FC<SearchFormPropsType> = ({ currentTab = "room_stays" }) => {
  const tabs: Array<{ value: PropertyCategory; label: SearchTab }> = [
    { value: "room_stays", label: "Room Stays" },
    { value: "time_based", label: "Time-Based" },
    { value: "hourly_rental_gear", label: "Hourly Rental Gear" },
    { value: "find_roommate", label: "Find Roommate" },
    { value: "last_minutes", label: "Last Minutes" },
    { value: "experience", label: "Experiences" },
  ];
  const [tabActive, setTabActive] = useState<PropertyCategory>(currentTab);
  const [city, setCity] = useState<string>("");
  const [guestCount, setGuestCount] = useState<number>(1);
  const [checkIn, setCheckIn] = useState<Date | null>();
  const [checkOut, setCheckOut] = useState<Date | null>();
  const [queryParameters, setQueryParameters] = useState<string>("");

  // set query parameters
  useEffect(() => {
    // add non empty parameters
    const parameters = [];
    if (city) {
      parameters.push(`city=${city}`);
    }
    if (guestCount) {
      parameters.push(`guests=${guestCount}`);
    }
    if (checkIn) {
      // convert date to valid date string yyyy-mm-dd
      const date = checkIn.toISOString().split("T")[0];
      parameters.push(`checkIn=${date}`);
    }
    if (checkOut) {
      // convert date to valid date string yyyy-mm-dd
      const date = checkOut.toISOString().split("T")[0];
      parameters.push(`checkOut=${date}`);
    }
    // set query parameters
    setQueryParameters(parameters.length ? `?${parameters.join("&")}` : "");
  }, [city, guestCount, checkIn, checkOut]);

  const RenderTab = () => {
    return (
      <div className="w-full col-span-1">
        <select
          className="rounded-2xl  border border-gray-200 md:hidden w-[80vw] text-white"
          value={tabActive}
          onChange={(e) => setTabActive(e.target.value as PropertyCategory)}
        >
          {tabs.map((tab) => {
            return (
              <option value={tab.value} key={tab.value}>
                {tab.label}
              </option>
            );
          })}
        </select>
        <ul className="w-full hidden justify-between rounded-lg md:flex hiddenScrollbar h-18 rounded-tl-[.5rem] rounded-tr-[.5rem] ">
          {tabs.map((tab, index) => {
            const active = tab.value === tabActive;
            return (
              <li
                onClick={() => setTabActive(tab.value)}
                className={`px-5 flex-1 flex m-0 h-[50px] justify-center items-center cursor-pointer text-xs md:text-xs xl:text-sm font-medium ${
                  tab.value === tabActive
                    ? "text-violet bg-white  "
                    : "bg-black text-white bg-opacity-65 backdrop-blur-[2.05]  "
                }
                ${
                  index === 0
                    ? "rounded-tl-[.5rem]"
                    : index === tabs.length - 1
                      ? "rounded-tr-[.5rem]"
                      : ""
                }
                `}
                key={tab.value}
              >
                <span className="w-max">{tab.label}</span>
              </li>
            );
          })}
        </ul>
      </div>
    );
  };

  // const RenderForm = () => {
  //   switch (tabActive) {
  //     case "room_stays":
  //       return <RoomStayForm />;
  //     case "experience":
  //       return <ExperienceForm />;
  //     case "find_roommate":
  //       return <FindRoommate />;
  //     case "time_based":
  //       return <TimeBasedForm />;
  //     case "hourly_rental_gear":
  //       return <HourlyRentalGear />;
  //     case "last_minutes":
  //       return <LastMinutes />;
  //     default:
  //       return null;
  //   }
  // };

  return (
    <div className="grid grid-cols-1 w-full md:w-[72dvw] gap-0 absolute z-10 flex-wrap">
      <RenderTab />
      <div className="flex items-center gap-4 bg-white rounded-b-lg p-2">
        <LocationForm
          className="border border-[#D9D9D9] "
          onSelect={(address, placeId) => {
            setCity(address);
          }}
        />
        <GuestForm
          className="border border-[#D9D9D9]"
          onChange={(value) => {
            setGuestCount(value.totalGuests);
          }}
        />
        <DatesRangeForm
          className="flex-1"
          onChange={(val) => {
            const [start, end] = val;
            setCheckIn(start);
            setCheckOut(end);
            console.log({ start, end });
          }}
        />
        {/* <ButtonSubmit  href="/listing-stay-map/[room]/hello" /> */}
        <Link
          href={`/listing-stay-map/${tabActive}${queryParameters}`}
          type="button"
          className="flex flex-col  justify-center px-[1.5rem] py-[1.5rem] xl:ml-[2rem] ml-[1rem] rounded-[.6rem]  w-[8.5rem] bg-primary-6000 hover:bg-primary-700 text-neutral-50 focus:outline-none"
        >
          <div className="">Search</div>

          <div className=" w-[100%] ">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="75"
              height="15"
              viewBox="0 0 75 15"
              fill="none"
            >
              <path
                d="M74.5629 7.95752C74.9256 7.59481 74.9256 7.00675 74.5629 6.64404L68.6523 0.733359C68.2895 0.37065 67.7015 0.37065 67.3388 0.733359C66.9761 1.09607 66.9761 1.68413 67.3388 2.04684L72.5927 7.30078L67.3388 12.5547C66.9761 12.9174 66.9761 13.5055 67.3388 13.8682C67.7015 14.2309 68.2895 14.2309 68.6523 13.8682L74.5629 7.95752ZM0.727539 8.22956H73.9062V6.37201H0.727539V8.22956Z"
                fill="white"
              />
            </svg>
          </div>
        </Link>
      </div>
    </div>
  );
};

export default SearchForm;
