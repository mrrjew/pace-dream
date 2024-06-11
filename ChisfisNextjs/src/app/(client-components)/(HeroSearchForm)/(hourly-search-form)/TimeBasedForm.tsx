"use client";

import { FC, useState } from "react";
import GuestsInput from "../GuestsInput";
import LocationInput from "../LocationInput";
import StayDatesRangeInput from "../(stay-search-form)/StayDatesRangeInput";

export type TypeDropOffLocationTimeBased =
  | "Any type"
  | "Event Spaces"
  | "Workspaces"
  | "Creative Spaces"
  | "Wellness and Fitness Spaces"
  | "Leisure and Recreational Spaces"
  | "Educational Spaces"
  | "Outdoor Spaces"
  | "Specialty Spaces"
  | "Restrooms"
  | "Parking Spaces"
  | "EV Charging Stations"
  | "Storage Locker"
  | "Room"
  | "Storage"
  | "Parking"
  | "EV Parking"
  | "Restroom";
const tabs: TypeDropOffLocationTimeBased[] = [
  "Any type",
  "Event Spaces",
  "Workspaces",
  "Creative Spaces",
  "Wellness and Fitness Spaces",
  "Leisure and Recreational Spaces",
  "Educational Spaces",
  "Outdoor Spaces",
  "Specialty Spaces",
  "Room",
  "Storage",
  "Parking",
  "EV Parking",
  "Restroom",
];

const TimeBasedForm: FC<{}> = ({}) => {
  const [dropOffLocationType, setDropOffLocationType] =
    useState<TypeDropOffLocationTimeBased>("Any type");
  const renderRadioBtn = () => {
    return (
      <div className="-mt-4 -mb-4 py-5 [ nc-hero-field-padding ] flex flex-row flex-wrap">
        {tabs.map((tab) => {
          return (
            <div
              className={`py-1.5 px-4 flex items-center rounded-full font-medium text-xs cursor-pointer mr-2 my-1 sm:mr-3 ${
                dropOffLocationType === tab
                  ? "bg-violet shadow-black/10 shadow-lg text-white"
                  : "border bg-neutral-100 text-black border-neutral-300 dark:border-neutral-700"
              }`}
              onClick={(e) => setDropOffLocationType(tab)}
            >
              {tab}
            </div>
          );
        })}
      </div>
    );
  };
  const renderForm = () => {
    return (
      <div className="pb-8">
        <form className="w-full relative mt-8">
          {renderRadioBtn()}
          <div className="ml-4 mt-4 md:hidden">
            <h2 className="max-w-[75%] text-left font-semibold md:hidden text-3xl">
              Discover Your Perfect Match: Book Rooms, Find Roommates, and
              Secure Last-Minute Deals Effortlessly!
            </h2>
          </div>
          <div className="flex flex-col flex-1 mx-8 mt-8 py-4 md:border items-center gap-4 md:flex-row rounded-lg">
            <LocationInput className="flex-[1.5]" />
            <StayDatesRangeInput className="flex-1" />
            <GuestsInput
              className="flex-[1.5]"
              buttonSubmitHref={`/listing-stay-map/4?term=Hourly&option=${dropOffLocationType}`}
            />
          </div>
        </form>
      </div>
    );
  };

  return renderForm();
};

export default TimeBasedForm;
