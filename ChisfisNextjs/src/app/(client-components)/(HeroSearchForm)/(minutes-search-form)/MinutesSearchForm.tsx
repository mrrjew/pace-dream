"use client";

import { FC, useState } from "react";
import GuestsInput from "../GuestsInput";
import LocationInput from "../LocationInput";
import StayDatesRangeInput from "../(stay-search-form)/StayDatesRangeInput";

export type TypeDropOffLocationMinutesType =
  | "40 minutes"
  | "30 minutes"
  | "20 minutes";
const tabs: TypeDropOffLocationMinutesType[] = [
  "40 minutes",
  "30 minutes",
  "20 minutes",
];
export type TypeDropOffLocationMinutesOptionType =
  | "Hotel Booking"
  | "Flight Booking";
const tabsOption: TypeDropOffLocationMinutesOptionType[] = [
  "Hotel Booking",
  "Flight Booking",
];
const MinutesSearchForm: FC<{}> = ({}) => {
  const [dropOffLocationType, setDropOffLocationType] =
    useState<TypeDropOffLocationMinutesType>("40 minutes");
  const [dropOffLocationTypeOption, setDropOffLocationTypeOption] =
    useState<TypeDropOffLocationMinutesOptionType>("Hotel Booking");
  const renderRadioBtn = () => {
    return (
      <>
        {/* <div className="-mt-4 -mb-0 py-5 [ nc-hero-field-padding ] flex flex-row flex-wrap">
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
        </div> */}
        <div className="-mt-4 -mb-4 py-5 [ nc-hero-field-padding ] flex flex-row flex-wrap">
          {
            // Option
            tabsOption.map((tab) => {
              return (
                <div
                  className={`py-1.5 px-4 flex items-center rounded-full font-medium text-xs cursor-pointer mr-2 my-1 sm:mr-3 ${
                    dropOffLocationTypeOption === tab
                      ? "bg-violet shadow-black/10 shadow-lg text-white"
                      : "border bg-neutral-100 text-black border-neutral-300 dark:border-neutral-700"
                  }`}
                  onClick={(e) => setDropOffLocationTypeOption(tab)}
                >
                  {tab}
                </div>
              );
            })
          }
        </div>
      </>
    );
  };
  const renderForm = () => {
    return (
      <div className="pb-8">
        <form className="w-full relative mt-8">
          {renderRadioBtn()}
          <div className="ml-4 mt-4 md:hidden">
            <h2 className="max-w-[75%] text-left font-semibold md:hidden text-3xl">
              Explore your PaceDream Book hotels, Car and more with ease!
            </h2>
          </div>
          <div className="flex flex-col items-baseline flex-1 md:flex-row rounded-full">
            <LocationInput className="flex-[1.5]" />
            <StayDatesRangeInput className="flex-1" />
            <GuestsInput
              className="flex-[1.5]"
              buttonSubmitHref="/listing-stay-map/5"
            />
          </div>
        </form>
      </div>
    );
  };

  return renderForm();
};

export default MinutesSearchForm;
