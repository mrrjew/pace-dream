import { FC, useState } from "react";
import GuestsInput from "../GuestsInput";
import LocationInput from "../LocationInput";
import StayDatesRangeInput from "../(stay-search-form)/StayDatesRangeInput";

export type TypeDropOffLocationHourlyType = "Anytime" | "Anytype" | "Event spaces" | "Parking" | "Longterm" | "Short term" | "Electrics Charging";
const HourlySearchForm: FC<{}> = ({}) => {
  const [dropOffLocationType, setDropOffLocationType] =
    useState<TypeDropOffLocationHourlyType>("Anytime");
  const renderRadioBtn = () => {
    return (
      <div className="-mt-4 -mb-4 py-5 [ nc-hero-field-padding ] flex flex-row flex-wrap">
        <div
          className={`py-1.5 px-4 flex items-center rounded-full font-medium text-xs cursor-pointer mr-2 my-1 sm:mr-3 ${
            dropOffLocationType === "Anytime"
              ? "bg-violet shadow-black/10 shadow-lg text-white"
              : "border bg-neutral-100 text-black border-neutral-300 dark:border-neutral-700"
          }`}
          onClick={(e) => setDropOffLocationType("Anytime")}
        >
          Anytime
        </div>
        <div
          className={`py-1.5 px-4 flex items-center rounded-full font-medium text-xs cursor-pointer mr-2 my-1 sm:mr-3 ${
            dropOffLocationType === "Anytype"
              ? "bg-violet shadow-black/10 shadow-lg text-white"
              : "border bg-neutral-100 text-black border-neutral-300 dark:border-neutral-700"
          }`}
          onClick={(e) => setDropOffLocationType("Anytype")}
        >
          Any type
        </div>
        <div
          className={`py-1.5 px-4 flex items-center rounded-full font-medium text-xs cursor-pointer mr-2 my-1 sm:mr-3 ${
            dropOffLocationType === "Event spaces"
              ? "bg-violet shadow-black/10 shadow-lg text-white"
              : "border bg-neutral-100 text-black border-neutral-300 dark:border-neutral-700"
          }`}
          onClick={(e) => setDropOffLocationType("Event spaces")}
        >
          Event spaces
        </div>
        <div
          className={`py-1.5 px-4 flex items-center rounded-full font-medium text-xs cursor-pointer mr-2 my-1 sm:mr-3 ${
            dropOffLocationType === "Parking"
              ? "bg-violet shadow-black/10 shadow-lg text-white"
              : "border bg-neutral-100 text-black border-neutral-300 dark:border-neutral-700"
          }`}
          onClick={(e) => setDropOffLocationType("Parking")}
        >
          Parking
        </div>
        <div
          className={`py-1.5 px-4 flex items-center rounded-full font-medium text-xs cursor-pointer mr-2 my-1 sm:mr-3 ${
            dropOffLocationType === "Longterm"
              ? "bg-violet text-white shadow-black/10 shadow-lg"
              : "border bg-neutral-100 text-black border-neutral-300 dark:border-neutral-700"
          }`}
          onClick={(e) => setDropOffLocationType("Longterm")}
        >
          Longterm
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
      <div
          className={`py-1.5 px-4 flex items-center rounded-full font-medium text-xs cursor-pointer mr-2 my-1 sm:mr-3 ${
            dropOffLocationType === "Electrics Charging"
              ? "bg-violet shadow-black/10 shadow-lg text-white"
              : "border bg-neutral-100 text-black border-neutral-300 dark:border-neutral-700"
          }`}
          onClick={(e) => setDropOffLocationType("Electrics Charging")}
        >
          Electrics Charging
        </div>
      </div>
    );
  };
  const renderForm = () => {
    return (
      <form className="w-full relative mt-8 rounded-[40px] xl:rounded-[49px] rounded-t-2xl xl:rounded-t-3xl shadow-xl bg-white">
        {renderRadioBtn()}
        <div className="ml-4 mt-4 md:hidden">
          <h2 className="max-w-[75%] text-left font-semibold md:hidden text-3xl">
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

export default HourlySearchForm;
