import { FC, useState } from "react";
import GuestsInput from "../GuestsInput";
import LocationInput from "../LocationInput";
import StayDatesRangeInput from "./StayDatesRangeInput";

export type TypeDropOffLocationType = "Hotel" | "Long term" | "Short term";
const StaySearchForm: FC<{}> = ({}) => {
  const [dropOffLocationType, setDropOffLocationType] =
    useState<TypeDropOffLocationType>("Hotel");
  const renderRadioBtn = () => {
    return (
      <div className=" py-5 [ nc-hero-field-padding ] flex flex-row flex-wrap border-b border-neutral-100 dark:border-neutral-700">
        <div
          className={`py-1.5 px-4 flex items-center rounded-full font-medium text-xs cursor-pointer mr-2 my-1 sm:mr-3 ${
            dropOffLocationType === "Hotel"
              ? "bg-violet shadow-black/10 shadow-lg text-white"
              : "border bg-neutral-100 text-black border-neutral-300 dark:border-neutral-700"
          }`}
          onClick={(e) => setDropOffLocationType("Hotel")}
        >
          Hotel
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
            : "border bg-neutral-100 text-black border-neutral-300 dark:border-neutral-700"
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
      <form className="w-full relative mt-8 rounded-[40px] xl:rounded-[49px] rounded-t-2xl xl:rounded-t-3xl shadow-xl dark:shadow-2xl bg-white dark:bg-neutral-800">
        {renderRadioBtn()}
        <div className="flex flex-1 rounded-full">
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
