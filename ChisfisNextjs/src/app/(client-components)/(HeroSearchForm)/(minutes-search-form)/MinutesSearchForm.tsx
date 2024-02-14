"use client";

import { FC, useState } from "react";
import GuestsInput from "../GuestsInput";
import LocationInput from "../LocationInput";
import StayDatesRangeInput from "../(stay-search-form)/StayDatesRangeInput";

export type TypeDropOffLocationMinutesType = "40" | "30" | "20" ;
const MinutesSearchForm: FC<{}> = ({}) => {
  const [dropOffLocationType, setDropOffLocationType] =
    useState<TypeDropOffLocationMinutesType>("40");
  const renderRadioBtn = () => {
    return (
      <div className="-mt-4 -mb-4 py-5 [ nc-hero-field-padding ] flex flex-row flex-wrap">
        {}
        <div
          className={`py-1.5 px-4 flex items-center rounded-full font-medium text-xs cursor-pointer mr-2 my-1 sm:mr-3 ${
            dropOffLocationType === "40"
              ? "bg-violet shadow-black/10 shadow-lg text-white"
              : "border bg-neutral-100 text-black border-neutral-300 dark:border-neutral-700"
          }`}
          onClick={(e) => setDropOffLocationType("40")}
        >
            40 minutes
        </div>
        <div
          className={`py-1.5 px-4 flex items-center rounded-full font-medium text-xs cursor-pointer mr-2 my-1 sm:mr-3 ${
            dropOffLocationType === "30"
              ? "bg-violet shadow-black/10 shadow-lg text-white"
              : "border bg-neutral-100 text-black border-neutral-300 dark:border-neutral-700"
          }`}
          onClick={(e) => setDropOffLocationType("30")}
        >
          30 minutes
        </div>
        <div
          className={`py-1.5 px-4 flex items-center rounded-full font-medium text-xs cursor-pointer mr-2 my-1 sm:mr-3 ${
            dropOffLocationType === "20"
              ? "bg-violet shadow-black/10 shadow-lg text-white"
              : "border bg-neutral-100 text-black border-neutral-300 dark:border-neutral-700"
          }`}
          onClick={(e) => setDropOffLocationType("20")}
        >
          20 minutes
        </div>
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
              Explore your PaceDream Book hotels, Car and more with ease!
            </h2>
          </div>
          <div className="flex flex-col items-baseline flex-1 md:flex-row rounded-full">
            <LocationInput className="flex-[1.5]" />
            <StayDatesRangeInput className="flex-1" />
            <GuestsInput className="flex-[1.5]" buttonSubmitHref={`/listing-stay-map/5?term=${dropOffLocationType}`}/>
          </div>
        </form>
      </div>
    );
  };

  return renderForm();
};

export default MinutesSearchForm;
