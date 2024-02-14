"use client"

import { FC, useState } from "react";
import GuestsInput from "../GuestsInput";
import LocationInput from "../LocationInput";
import StayDatesRangeInput from "./StayDatesRangeInput";

export type TypeDropOffLocationType = "anytime" | "anytype" | "hostel" |"guesthouse" | "long" | "short";
const StaySearchForm: FC<{}> = ({}) => {
  const [dropOffLocationType, setDropOffLocationType] =
    useState<TypeDropOffLocationType>("anytime");
  const renderRadioBtn = () => {
    return (
      <div className="py-5 -mt-4 md:-mb-4 [ nc-hero-field-padding ] overflow-auto flex flex-wrap ounded-[40px]">
        <div
          className={`py-1.5 px-4 flex items-center rounded-full font-medium text-xs cursor-pointer mr-2 my-1 sm:mr-3 ${
            dropOffLocationType === "anytime"
              ? "bg-violet shadow-black/10 shadow-lg text-white"
              : "border bg-neutral-100 text-black border-neutral-300"
          }`}
          onClick={(e) => setDropOffLocationType("anytime")}
        >
          Anytime
        </div>
        <div
          className={`py-1.5 px-4 flex items-center rounded-full font-medium text-xs cursor-pointer mr-2 my-1 sm:mr-3 ${
            dropOffLocationType === "anytype"
              ? "bg-violet shadow-black/10 shadow-lg text-white"
              : "border bg-neutral-100 text-black border-neutral-300 dark:border-neutral-700"
          }`}
          onClick={(e) => setDropOffLocationType("anytype")}
        >
          Any type
        </div>
        <div
          className={`py-1.5 px-4 flex items-center rounded-full font-medium text-xs cursor-pointer mr-2 my-1 sm:mr-3 ${
            dropOffLocationType === "hostel"
              ? "bg-violet shadow-black/10 shadow-lg text-white"
              : "border bg-neutral-100 text-black border-neutral-300 dark:border-neutral-700"
          }`}
          onClick={(e) => setDropOffLocationType("hostel")}
        >
          Hostel
        </div>
        <div
          className={`py-1.5 px-4 flex items-center rounded-full font-medium text-xs cursor-pointer mr-2 my-1 sm:mr-3 ${
            dropOffLocationType === "guesthouse"
              ? "bg-violet shadow-black/10 shadow-lg text-white"
              : "border bg-neutral-100 text-black border-neutral-300 dark:border-neutral-700"
          }`}
          onClick={(e) => setDropOffLocationType("guesthouse")}
        >
          Guesthouse
        </div>
        <div
          className={`py-1.5 px-4 flex items-center rounded-full font-medium text-xs cursor-pointer mr-2 my-1 sm:mr-3 ${
            dropOffLocationType === "long"
              ? "bg-violet text-white shadow-black/10 shadow-lg"
              : "border bg-neutral-100 text-black border-neutral-300 dark:border-neutral-700"
          }`}
          onClick={(e) => setDropOffLocationType("long")}
        >
          Long term
        </div>
        <div
        className={`py-1.5 px-4 flex items-center rounded-full font-medium text-xs cursor-pointer mr-2 my-1 sm:mr-3 ${
          dropOffLocationType === "short"
            ? "bg-violet text-white shadow-black/10 shadow-lg"
            : "border bg-neutral-100 text-black border-neutral-300"
        }`}
        onClick={(e) => setDropOffLocationType("short")}
      >
        Short term
      </div>
      </div>
    );
  };
  const renderForm = () => {
    return (
      <div className="pb-8">
        <form className="md:w-full md:relative block mt-8 ">
          {renderRadioBtn()}
          <div className="ml-4 mt-4 md:hidden">
            <h2 className="text-left font-semibold md:hidden text-3xl">
              Explore your PaceDream Book hotels, Car and more with ease!
            </h2>
          </div>
          <div className="flex flex-col flex-1 items-baseline md:flex-row rounded-full">
            <LocationInput className="flex-[1.5]" />
            <StayDatesRangeInput className="flex-1" />
            <GuestsInput className="flex-[1.5]" buttonSubmitHref={`/listing-stay-map/1?term=${dropOffLocationType}`}/>
          </div>
        </form>
      </div>
    );
  };

  return renderForm();
};

export default StaySearchForm;
