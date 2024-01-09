"use client";

import { FC, useState } from "react";
import ExperiencesSearchForm from "./(experiences-search-form)/ExperiencesSearchForm";
import FlightSearchForm from "./(flight-search-form)/FlightSearchForm";
import StaySearchForm from "./(stay-search-form)/StaySearchForm";

export type SearchTab = "Room Stays" | "Find Roommate" | "Experiences" | "Flights" | "Cars";

export interface HeroSearchFormProps {
  className?: string;
  currentTab?: SearchTab;
  currentPage?: "Room Stays" | "Find Roommate" | "Experiences";
}

const HeroSearchForm: FC<HeroSearchFormProps> = ({
  className = "",
  currentTab = "Room Stays",
  currentPage,
}) => {
  const tabs: SearchTab[] = ["Room Stays", "Find Roommate", "Experiences"];
  const [tabActive, setTabActive] = useState<SearchTab>(currentTab);

  const renderTab = () => {
    return (
      <div>
        <ul className="ml-2 sm:ml-6 md:ml-12 flex space-x-5 sm:space-x-8 lg:space-x-11 overflow-x-auto hiddenScrollbar">
          {tabs.map((tab) => {
            const active = tab === tabActive;
            return (
              <li
                onClick={() => setTabActive(tab)}
                className={`flex-shrink-0 flex items-center cursor-pointer text-sm lg:text-base font-medium ${
                  active
                    ? "text-violet border-b-2 border-violet pb-8"
                    : "text-neutral-500 hover:text-violet dark:hover:text-violet pb-8"
                } `}
                key={tab}
              >
                <span>{tab}</span>
              </li>
            );
          })}
        </ul>
        <ul className="ml-2 sm:ml-6 md:ml-12 flex space-x-5 sm:space-x-8 lg:space-x-11 overflow-x-auto hiddenScrollbar">

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

      default:
        return null;
    }
  };

  return (
    <div
      className={`nc-HeroSearchForm w-full max-w-6xl py-5 lg:py-0 ${className}`}
    >
      {renderTab()}
      {renderForm()}
    </div>
  );
};

export default HeroSearchForm;
