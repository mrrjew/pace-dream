"use client";

import { FC, useState } from "react";
import ExperiencesSearchForm from "./(experiences-search-form)/ExperiencesSearchForm";
import FlightSearchForm from "./(flight-search-form)/FlightSearchForm";
import StaySearchForm from "./(stay-search-form)/StaySearchForm";
import HourlySearchForm from "./(hourly-search-form)/HourlySearchForm";
import MinutesSearchForm from "./(minutes-search-form)/MinutesSearchForm";
import TimeBasedForm from "./(hourly-search-form)/TimeBasedForm"
import Input from "@/shared/Input";
import Button from "@/shared/Button";

export type SearchTab = "Room Stays" | "Stays" | "Find Roommate" | "Experiences" | "Flights" | "Cars" | "Hourly" | "Stays" | "Time-Based" | "Hourly Rental Gear" | "Last Minutes";

export interface HeroSearchFormProps {
  className?: string;
  currentTab?: SearchTab;
  currentPage?: "Room Stays" | "Find Roommate" | "Experiences" | "Hourly" | "Stays" | "Time-Based" | "Hourly Rental Gear" | "Last Minutes";
}

const HeroSearchForm: FC<HeroSearchFormProps> = ({
  className = "",
  currentTab = "Room Stays",
  currentPage,
}) => {
  const tabs: SearchTab[] = ["Room Stays", "Time-Based", "Hourly Rental Gear", "Find Roommate", "Experiences", "Last Minutes"];
  const [tabActive, setTabActive] = useState<SearchTab>(currentTab);

  const renderTab = () => {
    return (
      <div className="ml-2 flex md:block   justify-center">
        <select className="rounded-2xl  border border-gray-200 md:hidden w-[80vw] text-black"
          value={tabActive}
          onChange={(e) => setTabActive(e.target.value as SearchTab)}>
          {tabs.map((tab) => {
            return (
              <option
                value={tab}
                key={tab}>
                {tab}
              </option>
            )
          })}
        </select>
        <ul className="ml-4 md:ml-8 mt-4 md:mt-8 md:flex hidden     space-x-10 sm:space-x-5 lg:space-x-14 xl:space-x-20 overflow-x-auto hiddenScrollbar">
          {tabs.map((tab) => {
            const active = tab === tabActive;
            return (
              <li
                onClick={() => setTabActive(tab)}
                className={`flex-shrink-0 flex items-center   cursor-pointer text-xs md:text-xs xl:text-sm font-medium ${active
                  ? "text-violet pb-8"
                  : "text-neutral-500 hover:text-violet pb-8"
                  } `}
                key={tab}
              >
                <span>{tab}</span>

              </li>
            );
          })}
        </ul>
        {/* <div className=" border border-[#EAEBF0] w-[95%] mx-auto">
{tabs.map((tab, i) =>{
  const active = tab === tabActive;
  
          if(i === 0){
            return(
              <div className={`    ${
                active ? " underline underline-offset-8 decoration-sky-500 border border-[#632DF8] " : "border"
              }`} />
            )
          } 
          else if(i === 1){
            return(
              <div className={`  ${
                active ? "border border-[#632DF8]  " : "border"
              }`} />
            )
          }
})}
        </div> */}
        <ul className="ml-2 md:ml-8    w-full flex space-x-5 sm:space-x-8 lg:space-x-11 overflow-x-auto hiddenScrollbar">
          <div className="md:flex justify-center  items-center hidden " >
            {tabs.map((tab, i) => {
              const active = tab === tabActive;
              if (i === 0) {
                return (
                  <div className={` xl:w-[105px] lg:w-[88px] md:w-[80px] h-0.5 ${active ? "bg-[#632DF8] " : "bg-[#EAEBF0]"
                    }`} />
                )
              } else if (i === 1) {
                return (
                  <div className={` xl:w-[170px]  lg:w-[115px] md:w-[108px] h-0.5 ${active ? "bg-[#632DF8] " : "bg-[#EAEBF0]"
                    }`} />
                )
              } else if (i === 2) {
                return (
                  <div className={` xl:w-[225px] lg:w-[145px] md:w-[130px] h-0.5 ${active ? "bg-[#632DF8] " : "bg-[#EAEBF0]"
                    }`} />
                )
              } else if (i === 3) {
                return (
                  <div className={` xl:w-[195px] lg:w-[125px] md:w-[120px] h-0.5 ${active ? "bg-[#632DF8] " : "bg-[#EAEBF0]"
                    }`} />
                )
              } else if (i === 4) {
                return (
                  <div className={` xl:w-[150px] lg:w-[110px] md:w-[90px] h-0.5 ${active ? "bg-[#632DF8] " : "bg-[#EAEBF0]"
                    }`} />
                )
              } else if (i === 5) {
                return (
                  <div className={` xl:w-[155px] lg:w-[100px] md:w-[90px] h-0.5 ${active ? "bg-[#632DF8] " : "bg-[#EAEBF0]"
                    }`} />
                )
              }
            })
            }
          </div>
        </ul>
      </div>
    );
  };

  const renderForm = () => {
    switch (tabActive) {
      case "Room Stays":
        return <StaySearchForm />;
      case "Experiences":
        return <ExperiencesSearchForm />;
      case "Find Roommate":
        return <FlightSearchForm />;
      case "Time-Based":
        return <TimeBasedForm />;
      case "Hourly Rental Gear":
        return <HourlySearchForm />;
      case "Last Minutes":
        return <MinutesSearchForm />;
      default:
        return null;
    }
  };

  return (
    <div
      className={`nc-HeroSearchForm flex flex-col md:block md:mr-8 max-w-[90vw] w-[90vw] md:max-w-full py-5 lg:py-0 ${className}`}
    >
      {renderTab()}
      {renderForm()}

    </div>
  );
};
function CalendarIcon(props: any) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <rect width="18" height="18" x="3" y="4" rx="2" ry="2" />
      <line x1="16" x2="16" y1="2" y2="6" />
      <line x1="8" x2="8" y1="2" y2="6" />
      <line x1="3" x2="21" y1="10" y2="10" />
    </svg>
  )
}


function MapPinIcon(props: any) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z" />
      <circle cx="12" cy="10" r="3" />
    </svg>
  )
}


function SearchIcon(props: any) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <circle cx="11" cy="11" r="8" />
      <path d="m21 21-4.3-4.3" />
    </svg>
  )
}


function UserPlusIcon(props: any) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" />
      <circle cx="9" cy="7" r="4" />
      <line x1="19" x2="19" y1="8" y2="14" />
      <line x1="22" x2="16" y1="11" y2="11" />
    </svg>
  )
}

export default HeroSearchForm;