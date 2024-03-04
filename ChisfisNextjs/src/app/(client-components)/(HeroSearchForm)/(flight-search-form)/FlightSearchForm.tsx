"use client";

import NcInputNumber from "@/components/NcInputNumber";
import { Popover, Transition } from "@headlessui/react";
import ChevronDownIcon from "@heroicons/react/24/solid/ChevronDownIcon";
import { FC, Fragment, useState } from "react";
import StayDatesRangeInput from "../(stay-search-form)/StayDatesRangeInput";
import { GuestsObject } from "../../type";
import GuestsInput from "../GuestsInput";
import LocationInput from "../LocationInput";

export interface FlightSearchFormProps { }

const flightClass = [
  {
    name: "Economy",
    href: "##",
  },
  {
    name: "Business",
    href: "##",
  },
  {
    name: "Multiple",
    href: "##",
  },
];

export type TypeDropOffLocationType = "Male Only" | "Female Only" | "Any Gender";

const FlightSearchForm: FC<FlightSearchFormProps> = ({ }) => {
  const [dropOffLocationTypeLongTerm, setDropOffLocationTypeLongTerm] =
    useState<TypeDropOffLocationType | null>(null);
  const [dropOffLocationTypeShortTerm, setDropOffLocationTypeShortTerm] =
    useState<TypeDropOffLocationType | null>(null);
  const [flightClassState, setFlightClassState] = useState("Economy");

  const [guestAdultsInputValue, setGuestAdultsInputValue] = useState(2);
  const [guestChildrenInputValue, setGuestChildrenInputValue] = useState(1);
  const [guestInfantsInputValue, setGuestInfantsInputValue] = useState(1);

  const handleChangeData = (value: number, type: keyof GuestsObject) => {
    let newValue = {
      guestAdults: guestAdultsInputValue,
      guestChildren: guestChildrenInputValue,
      guestInfants: guestInfantsInputValue,
    };
    if (type === "guestAdults") {
      setGuestAdultsInputValue(value);
      newValue.guestAdults = value;
    }
    if (type === "guestChildren") {
      setGuestChildrenInputValue(value);
      newValue.guestChildren = value;
    }
    if (type === "guestInfants") {
      setGuestInfantsInputValue(value);
      newValue.guestInfants = value;
    }
  };

  const totalGuests =
    guestChildrenInputValue + guestAdultsInputValue + guestInfantsInputValue;

  const renderGuest = () => {
    return (
      <Popover className="relative">
        {({ open }) => (
          <>
            <Popover.Button
              as="button"
              className={`
           ${open ? "" : ""}
            px-4 py-1.5 rounded-md inline-flex items-center font-medium hover:text-opacity-100 focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-opacity-75 text-xs`}
            >
              <span>{`${totalGuests || ""} Guests`}</span>
              <ChevronDownIcon
                className={`${open ? "" : "text-opacity-70"
                  } ml-2 h-4 w-4 group-hover:text-opacity-80 transition ease-in-out duration-150`}
                aria-hidden="true"
              />
            </Popover.Button>
            <Transition
              as={Fragment}
              enter="transition ease-out duration-200"
              enterFrom="opacity-0 translate-y-1"
              enterTo="opacity-100 translate-y-0"
              leave="transition ease-in duration-150"
              leaveFrom="opacity-100 translate-y-0"
              leaveTo="opacity-0 translate-y-1"
            >
              <Popover.Panel className="absolute z-20 w-full sm:min-w-[340px] max-w-sm bg-white dark:bg-neutral-800 top-full mt-3 left-1/2 -translate-x-1/2  py-5 sm:py-6 px-4 sm:px-8 rounded-3xl shadow-xl ring-1 ring-black/5 dark:ring-white/10">
                <NcInputNumber
                  className="w-full"
                  defaultValue={guestAdultsInputValue}
                  onChange={(value) => handleChangeData(value, "guestAdults")}
                  max={10}
                  min={1}
                  label="Adults"
                  desc="Ages 13 or above"
                />
                <NcInputNumber
                  className="w-full mt-6"
                  defaultValue={guestChildrenInputValue}
                  onChange={(value) => handleChangeData(value, "guestChildren")}
                  max={4}
                  label="Children"
                  desc="Ages 2–12"
                />

                <NcInputNumber
                  className="w-full mt-6"
                  defaultValue={guestInfantsInputValue}
                  onChange={(value) => handleChangeData(value, "guestInfants")}
                  max={4}
                  label="Infants"
                  desc="Ages 0–2"
                />
              </Popover.Panel>
            </Transition>
          </>
        )}
      </Popover>
    );
  };

  const renderSelectClass = () => {
    return (
      <Popover className="relative">
        {({ open, close }) => (
          <>
            <Popover.Button
              className={`
           ${open ? "" : ""}
            px-4 py-1.5 rounded-md inline-flex items-center font-medium hover:text-opacity-100 focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-opacity-75 text-xs`}
            >
              <span>{`${flightClassState}`}</span>
              <ChevronDownIcon
                className={`${open ? "" : "text-opacity-70"
                  } ml-2 h-4 w-4 group-hover:text-opacity-80 transition ease-in-out duration-150`}
                aria-hidden="true"
              />
            </Popover.Button>
            <Transition
              as={Fragment}
              enter="transition ease-out duration-200"
              enterFrom="opacity-0 translate-y-1"
              enterTo="opacity-100 translate-y-0"
              leave="transition ease-in duration-150"
              leaveFrom="opacity-100 translate-y-0"
              leaveTo="opacity-0 translate-y-1"
            >
              <Popover.Panel className="absolute z-20 w-screen max-w-[200px] sm:max-w-[220px] px-4 top-full mt-3 transform -translate-x-1/2 left-1/2 sm:px-0  ">
                <div className="overflow-hidden rounded-2xl shadow-lg ring-1 ring-black/5 dark:ring-white/10 ">
                  <div className="relative grid gap-8 bg-white dark:bg-neutral-800 p-7 ">
                    {flightClass.map((item) => (
                      <a
                        key={item.name}
                        href={item.href}
                        onClick={(e) => {
                          e.preventDefault();
                          setFlightClassState(item.name);
                          close();
                        }}
                        className="flex items-center p-2 -m-3 transition duration-150 ease-in-out rounded-lg hover:bg-gray-50 dark:hover:bg-gray-700 focus:outline-none focus-visible:ring focus-visible:ring-orange-500 focus-visible:ring-opacity-50"
                      >
                        <p className="text-sm font-medium ">{item.name}</p>
                      </a>
                    ))}
                  </div>
                </div>
              </Popover.Panel>
            </Transition>
          </>
        )}
      </Popover>
    );
  };

  const renderRadioBtnLongTerm = () => {
    return (
      <div className="py-5 -mt-4 -mb-8 [ nc-hero-field-padding ] items-center flex flex-row flex-wrap">
        <span className="mr-4 text-sm font-semibold">Long-Term Stay:</span>
        <div
          className={`py-1.5 px-4 flex items-center rounded-full font-medium text-xs cursor-pointer mr-2 my-1 sm:mr-3 ${dropOffLocationTypeLongTerm === "Male Only"
            ? "bg-violet shadow-black/10 shadow-lg text-white"
            : "bg-neutral-100 border border-neutral-300 dark:border-neutral-700"
            }`}
          onClick={(e) => setDropOffLocationTypeLongTerm("Male Only")}
        >
          Male Only
        </div>
        <div
          className={`py-1.5 px-4 flex items-center rounded-full font-medium text-xs cursor-pointer mr-2 my-1 sm:mr-3 ${dropOffLocationTypeLongTerm === "Female Only"
            ? "bg-violet text-white shadow-black/10 shadow-lg"
            : "bg-neutral-100 border border-neutral-300 dark:border-neutral-700"
            }`}
          onClick={(e) => setDropOffLocationTypeLongTerm("Female Only")}
        >
          Female Only
        </div>
        <div
          className={`py-1.5 px-4 flex items-center rounded-full font-medium text-xs cursor-pointer mr-2 my-1 sm:mr-3 ${dropOffLocationTypeLongTerm === "Any Gender"
            ? "bg-violet text-white shadow-black/10 shadow-lg"
            : "bg-neutral-100 border border-neutral-300 dark:border-neutral-700"
            }`}
          onClick={(e) => setDropOffLocationTypeLongTerm("Any Gender")}
        >
          Any Gender
        </div>
      </div>
    );
  };
  const renderRadioBtnShortTerm = () => {
    return (
      <div className="py-5 -mt-4 -mb-8 [ nc-hero-field-padding ] items-center flex flex-row flex-wrap">
        <span className="mr-4 text-sm font-semibold">Short-Term Stay:</span>
        <div
          className={`py-1.5 px-4 flex items-center rounded-full font-medium text-xs cursor-pointer mr-2 my-1 sm:mr-3 ${dropOffLocationTypeShortTerm === "Male Only"
            ? "bg-violet shadow-black/10 shadow-lg text-white"
            : "bg-neutral-100 border border-neutral-300 dark:border-neutral-700"
            }`}
          onClick={(e) => setDropOffLocationTypeShortTerm("Male Only")}
        >
          Male Only
        </div>
        <div
          className={`py-1.5 px-4 flex items-center rounded-full font-medium text-xs cursor-pointer mr-2 my-1 sm:mr-3 ${dropOffLocationTypeShortTerm === "Female Only"
            ? "bg-violet text-white shadow-black/10 shadow-lg"
            : "bg-neutral-100 border border-neutral-300 dark:border-neutral-700"
            }`}
          onClick={(e) => setDropOffLocationTypeShortTerm("Female Only")}
        >
          Female Only
        </div>
        <div
          className={`py-1.5 px-4 flex items-center rounded-full font-medium text-xs cursor-pointer mr-2 my-1 sm:mr-3 ${dropOffLocationTypeShortTerm === "Any Gender"
            ? "bg-violet text-white shadow-black/10 shadow-lg"
            : "bg-neutral-100 border border-neutral-300 dark:border-neutral-700"
            }`}
          onClick={(e) => setDropOffLocationTypeShortTerm("Any Gender")}
        >
          Any Gender
        </div>
      </div >
    );
  };

  const renderForm = () => {
    return (
      <div className="pb-8">
        <form className="w-full relative mt-8">
          {renderRadioBtnLongTerm()}
          {renderRadioBtnShortTerm()}
          <div className="ml-4 mt-4 md:hidden">
            <h2 className="max-w-[75%] text-left font-semibold md:hidden text-3xl">
              Explore your PaceDream Book hotels, Car and more with ease!
            </h2>
          </div>
          <div className="flex flex-col flex-1 mx-8 mt-8 py-4 border items-center gap-4 md:flex-row rounded-lg">
            <LocationInput className="flex-[1.5]" />
            <StayDatesRangeInput className="flex-1" />
            <GuestsInput className="flex-[1.5]" buttonSubmitHref="/listing-stay-map/3" />
          </div>
        </form>
      </div>
    );
  };

  return renderForm();
};

export default FlightSearchForm;
