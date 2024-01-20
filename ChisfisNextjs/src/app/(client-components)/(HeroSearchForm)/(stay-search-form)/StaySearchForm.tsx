import { FC, useState } from "react";
import GuestsInput from "../GuestsInput";
import LocationInput from "../LocationInput";
import StayDatesRangeInput from "./StayDatesRangeInput";

export type TypeDropOffLocationType = "Anytime" | "Any type" | "Hostel" |"Guesthouse" | "Long term" | "Short term";
const StaySearchForm: FC<{}> = ({}) => {
  const [dropOffLocationType, setDropOffLocationType] =
    useState<TypeDropOffLocationType>("Anytime");
  const renderRadioBtn = () => {
    return (
      <div className="py-5 -mt-4 md:-mb-4 [ nc-hero-field-padding ] overflow-auto flex flex-wrap ounded-[40px]">
        <div
          className={`py-1.5 px-4 flex items-center rounded-full font-medium text-xs cursor-pointer mr-2 my-1 sm:mr-3 ${
            dropOffLocationType === "Anytime"
              ? "bg-violet shadow-black/10 shadow-lg text-white"
              : "border bg-neutral-100 text-black border-neutral-300"
          }`}
          onClick={(e) => setDropOffLocationType("Anytime")}
        >
          Anytime
        </div>
        <div
          className={`py-1.5 px-4 flex items-center rounded-full font-medium text-xs cursor-pointer mr-2 my-1 sm:mr-3 ${
            dropOffLocationType === "Any type"
              ? "bg-violet shadow-black/10 shadow-lg text-white"
              : "border bg-neutral-100 text-black border-neutral-300 dark:border-neutral-700"
          }`}
          onClick={(e) => setDropOffLocationType("Any type")}
        >
          Any type
        </div>
        <div
          className={`py-1.5 px-4 flex items-center rounded-full font-medium text-xs cursor-pointer mr-2 my-1 sm:mr-3 ${
            dropOffLocationType === "Hostel"
              ? "bg-violet shadow-black/10 shadow-lg text-white"
              : "border bg-neutral-100 text-black border-neutral-300 dark:border-neutral-700"
          }`}
          onClick={(e) => setDropOffLocationType("Hostel")}
        >
          Hostel
        </div>
        <div
          className={`py-1.5 px-4 flex items-center rounded-full font-medium text-xs cursor-pointer mr-2 my-1 sm:mr-3 ${
            dropOffLocationType === "Guesthouse"
              ? "bg-violet shadow-black/10 shadow-lg text-white"
              : "border bg-neutral-100 text-black border-neutral-300 dark:border-neutral-700"
          }`}
          onClick={(e) => setDropOffLocationType("Guesthouse")}
        >
          Guesthouse
        </div>
        <div
          className={`py-1.5 px-4 flex items-center rounded-full font-medium text-xs cursor-pointer mr-2 my-1 sm:mr-3 ${
            dropOffLocationType === "Long term"
              ? "bg-violet text-white shadow-black/10 shadow-lg"
              : "border bg-neutral-100 text-black border-neutral-300 dark:border-neutral-700"
          }`}
          onClick={(e) => setDropOffLocationType("Long term")}
        >
          Long term
        </div>
        <div
        className={`py-1.5 px-4 flex items-center rounded-full font-medium text-xs cursor-pointer mr-2 my-1 sm:mr-3 ${
          dropOffLocationType === "Short term"
            ? "bg-violet text-white shadow-black/10 shadow-lg"
            : "border bg-neutral-100 text-black border-neutral-300"
        }`}
        onClick={(e) => setDropOffLocationType("Short term")}
      >
        Short term
      </div>
      </div>
    );
  };
  const renderForm = () => {
    return (
      <form className="md:w-full md:relative block mt-8 ">
        {renderRadioBtn()}
        <div className="ml-4 mt-4 md:hidden">
          <h2 className="text-left font-semibold md:hidden text-3xl">
            Explore your PaceDream Book hotels, Car and more with ease!
          </h2>
        </div>
        <div className="flex flex-col flex-1 md:flex-row rounded-full">
          <LocationInput className="flex-[1.5]" />
          <StayDatesRangeInput className="flex-1" />
          <GuestsInput className="flex-[1.5]" />
        </div>
      </form>
    );
  };

  return renderForm();
};

export default StaySearchForm;
