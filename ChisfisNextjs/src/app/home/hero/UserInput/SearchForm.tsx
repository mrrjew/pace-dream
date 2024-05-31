"use client";

import { FC } from "react";
import { useState } from "react";
import RoomStayForm from "./TabForms/RoomStayForm";
import TimeBasedForm from "./TabForms/TimeBasedForm";
import HourlyRentalGear from "./TabForms/HourlyRentalGear";
import LastMinutes from "./TabForms/LastMinutes";
import FindRoommate from "./TabForms/FindRoommate";
import ExperienceForm from "./TabForms/ExperienceForm";

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
  currentTab?: SearchTab;
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

const SearchForm: FC<SearchFormPropsType> = ({ currentTab = "Room Stays" }) => {
  const tabs: SearchTab[] = [
    "Room Stays",
    "Time-Based",
    "Hourly Rental Gear",
    "Find Roommate",
    "Last Minutes",
    "Experiences",
  ];
  const [tabActive, setTabActive] = useState<SearchTab>(currentTab);

  const RenderTab = () => {
    return (
      <div className="flex justify-start">
        <select
          className="rounded-2xl  border border-gray-200 md:hidden w-[80vw] text-white"
          value={tabActive}
          onChange={(e) => setTabActive(e.target.value as SearchTab)}
        >
          {tabs.map((tab) => {
            return (
              <option value={tab} key={tab}>
                {tab}
              </option>
            );
          })}
        </select>
        <ul className="justify-start hidden rounded-lg md:flex hiddenScrollbar h-18 rounded-tl-[.5rem] rounded-tr-[.5rem] ">
          {tabs.map((tab, index) => {
            const active = tab === tabActive;
            return (
              <li
                onClick={() => setTabActive(tab)}
                className={`flex-shrink-0 px-5 z-[55]   flex m-0 h-[50px] items-center cursor-pointer text-xs md:text-xs xl:text-sm font-medium ${
                  tab === tabActive
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
                key={tab}
              >
                <span>{tab}</span>
              </li>
            );
          })}
        </ul>
      </div>
    );
  };

  const RenderForm = () => {
    switch (tabActive) {
      case "Room Stays":
        return <RoomStayForm />;
      case "Experiences":
        return <ExperienceForm />;
      case "Find Roommate":
        return <FindRoommate />;
      case "Time-Based":
        return <TimeBasedForm />;
      case "Hourly Rental Gear":
        return <HourlyRentalGear />;
      case "Last Minutes":
        return <LastMinutes />;
      default:
        return null;
    }
  };

  return (
    <>
      <RenderTab />
      <div className="relative">
        <div className=" absolute z-[55]">
          <RenderForm />
        </div>
      </div>
    </>
  );
};

export default SearchForm;
