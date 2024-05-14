"use client";

import { FC, useState } from "react";
import GuestsInput from "../GuestsInput";
import LocationInput from "../LocationInput";
import StayDatesRangeInput from "./StayDatesRangeInput";
import ButtonSubmit from "../ButtonSubmit";

export type TypeDropOffLocationType =
  | "anytime"
  | "anytype"
  | "hostel"
  | "guesthouse"
  | "long"
  | "short";
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
        <form className="block mt-8 md:w-full md:relative ">
          {renderRadioBtn()}
          <div className="mt-4 ml-4 md:hidden">
            <h2 className="text-3xl font-semibold text-left md:hidden">
              Discover Your Perfect Match: Book Rooms, Find Roommates, and
              Secure Last-Minute Deals Effortlessly!
            </h2>
          </div>
          <div className="flex flex-col items-center flex-1 gap-4 py-4 mx-8 mt-8 rounded-lg md:flex-row">
            <LocationInput className="md:border" />
            <GuestsInput
              className="md:border"
              buttonSubmitHref={`/listing-stay-map/1?term=${dropOffLocationType}`}
            />
            <StayDatesRangeInput />

            <div className="mr-4 md:ml-4 xl:pr-3 w-[60%] max-md:w-[90%] md:pt-4 justify-center max-md:mt-6 mt-2">
              <ButtonSubmit href="/listing-stay-map/[room]" />
            </div>
          </div>
        </form>
      </div>
    );
  };

  return renderForm();
};

export default StaySearchForm;
