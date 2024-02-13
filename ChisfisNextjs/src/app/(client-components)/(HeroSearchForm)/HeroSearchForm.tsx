"use client";

import { FC, useState } from "react";
import ExperiencesSearchForm from "./(experiences-search-form)/ExperiencesSearchForm";
import FlightSearchForm from "./(flight-search-form)/FlightSearchForm";
import StaySearchForm from "./(stay-search-form)/StaySearchForm";
import HourlySearchForm from "./(hourly-search-form)/HourlySearchForm";
import MinutesSearchForm from "./(minutes-search-form)/MinutesSearchForm";
import TimeBasedForm from "./(hourly-search-form)/TimeBasedForm"

export type SearchTab =  "Room Stays" | "Stays" | "Find Roommate" | "Experiences" | "Flights" | "Cars" | "Hourly" | "Stays" | "Time-Based" | "Hourly Rental Gear" | "Last Minutes";

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
  const tabs: SearchTab[] = ["Room Stays", "Time-Based" , "Hourly Rental Gear" , "Find Roommate" , "Experiences" , "Last Minutes"];
  const [tabActive, setTabActive] = useState<SearchTab>(currentTab);

  const renderTab = () => {
    return (
      <div className="ml-2 flex md:block justify-center">
        <select className="rounded-2xl border border-gray-200 md:hidden w-[80vw] text-black" 
        value={tabActive}
        onChange={(e) => setTabActive(e.target.value as SearchTab)}>
          {tabs.map((tab) => {
            return(
              <option 
              value={tab}
              key={tab}>
                {tab}
              </option>
            )
          })}
        </select>
        <ul className="ml-4 md:ml-8 mt-4 md:mt-8 md:flex hidden space-x-5 sm:space-x-5 lg:space-x-8 xl:space-x-11 overflow-x-auto hiddenScrollbar">
          {tabs.map((tab) => {
            const active = tab === tabActive;
            return (
              <li
                onClick={() => setTabActive(tab)}
                className={`flex-shrink-0 flex items-center cursor-pointer text-xs md:text-xs xl:text-sm font-medium ${
                  active
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
        <ul className="ml-2 md:ml-8 flex space-x-5 sm:space-x-8 lg:space-x-11 overflow-x-auto hiddenScrollbar">
        <div className="md:flex justify-center items-center hidden " >
        {tabs.map((tab, i) => {
          const active = tab === tabActive;
          if(i === 0){
            return(
              <div className={` xl:w-[105px] lg:w-[88px] md:w-[80px] h-0.5 ${
                active ? "bg-[#632DF8] " : "bg-[#EAEBF0]"
              }`} />
            )
          } else if(i === 1){
            return(
              <div className={` xl:w-[140px] lg:w-[115px] md:w-[108px] h-0.5 ${
                active ? "bg-[#632DF8] " : "bg-[#EAEBF0]"
              }`} />
            )
          } else if(i === 2){
            return(
              <div className={` xl:w-[175px] lg:w-[145px] md:w-[130px] h-0.5 ${
                active ? "bg-[#632DF8] " : "bg-[#EAEBF0]"
              }`} />
            )
          } else if(i === 3){
            return(
              <div className={` xl:w-[155px] lg:w-[125px] md:w-[120px] h-0.5 ${
                active ? "bg-[#632DF8] " : "bg-[#EAEBF0]"
              }`} />
            )
          } else if(i === 4){
            return(
              <div className={` xl:w-[130px] lg:w-[110px] md:w-[90px] h-0.5 ${
                active ? "bg-[#632DF8] " : "bg-[#EAEBF0]"
              }`} />
            )
          } else if(i === 5){
            return(
              <div className={` xl:w-[125px] lg:w-[100px] md:w-[90px] h-0.5 ${
                active ? "bg-[#632DF8] " : "bg-[#EAEBF0]"
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

export default HeroSearchForm;
