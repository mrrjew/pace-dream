"use client";

import React, { Fragment, useEffect, useState } from "react";
import { Popover, Transition } from "@headlessui/react";
import NcInputNumber from "@/components/NcInputNumber";
import { FC } from "react";
import ClearDataButton from "./ClearDataButton";
import ButtonSubmit from "./ButtonSubmit";
import { PathName } from "@/routers/types";
import { UserPlusIcon } from "@heroicons/react/24/outline";
import { GuestsObject } from "../type";

export interface GuestsInputProps {
  fieldClassName?: string;
  className?: string;
  buttonSubmitHref?: PathName;
  hasButtonSubmit?: boolean;
  inputs?: string;
}

const GuestsInput: FC<GuestsInputProps> = ({
  fieldClassName = "",
  className = "[ nc-flex-1 ]",
  buttonSubmitHref = "/listing-stay-map",
  hasButtonSubmit = true,
  inputs= "",
}) => {
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

  return (
    <Popover className={`flex relative ${className}`}>
      {({ open }) => (
        <>
          <Popover.Button
            className={`flex z-10 flex-1 flex-col md:flex-row relative pl-4 md:pl-7 md:pr-4 xl:mr-4 lg:pr-3 flex-shrink-0 items-center space-x-1 cursor-pointer focus:outline-none text-left`}
          >
              <div className="flex-grow max-md:mt-4 md:mr-4">
                <span className="block xl:text-lg font-normal text-left text-black md:font-semibold">
                  Guests
                </span>
                <span className={`flex flex-row ${inputs ? inputs : 'max-md:w-[85vw]'} border lg:py-2.5 xl:py-2 p-2 md:p-2 w-full md:w-40 lg:w-40 rounded-2xl mt-1 text-xs text-neutral-400 items-center justify-between leading-none font-light`}>
                  Add your guests
                  <UserPlusIcon className="w-3 h-3 lg:w-4 lg:h-4 xl:w-3 xl:h-3 md:flex text-black ml-4" />
                </span>
              </div>
              {!!totalGuests && open && (
                <ClearDataButton
                  onClick={() => {
                    setGuestAdultsInputValue(0);
                    setGuestChildrenInputValue(0);
                    setGuestInfantsInputValue(0);
                  }}
                />
              )}
              {hasButtonSubmit && (
              <div className="mr-4 md:ml-4 xl:pr-3 w-[60%] max-md:w-[90%] md:pt-4 justify-center max-md:mt-6 mt-2">
                <ButtonSubmit href={buttonSubmitHref}/>
              </div>
            )}
            </Popover.Button>
          {open && (
            <div className="h-8  hidden absolute self-center top-1/2 -translate-y-1/2 z-0 -inset-x-0.5 bg-white"></div>
          )}
          <Transition
            as={Fragment}
            enter="transition ease-out duration-200"
            enterFrom="opacity-0 translate-y-1"
            enterTo="opacity-100 translate-y-0"
            leave="transition ease-in duration-150"
            leaveFrom="opacity-100 translate-y-0"
            leaveTo="opacity-0 translate-y-1"
          >
            <Popover.Panel className="absolute mt-3 right-0 z-10 w-full border border-gray-200 sm:min-w-[340px] max-w-sm bg-white top-full py-5 sm:py-6 px-4 sm:px-8 rounded-3xl shadow-xl">
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

export default GuestsInput;
