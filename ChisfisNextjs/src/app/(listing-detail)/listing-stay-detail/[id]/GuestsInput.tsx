"use client";

import React, { Fragment, FC, useState } from "react";
import { Popover, Transition } from "@headlessui/react";
import NcInputNumber from "@/components/NcInputNumber";
import { UserPlusIcon } from "@heroicons/react/24/outline";
import ClearDataButton from "@/app/(client-components)/(HeroSearchForm)/ClearDataButton";
import { GuestsObject } from "@/app/(client-components)/type";
import { setLocalStorageItem } from "@/utils/localStorageUtil";

export interface GuestsInputProps {
  className?: string;
  guestAdultsInputValue: number;
  setGuestAdultsInputValue: (value: number) => void;
  guestChildrenInputValue: number;
  setGuestChildrenInputValue: (value: number) => void;
  guestInfantsInputValue: number;
  setGuestInfantsInputValue: (value: number) => void;
}

const GuestsInput: FC<GuestsInputProps> = ({
  guestAdultsInputValue,
  setGuestAdultsInputValue,
  guestChildrenInputValue,
  setGuestChildrenInputValue,
  guestInfantsInputValue,
  setGuestInfantsInputValue,
  className = "flex-1",
}) => {
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
  setLocalStorageItem("totalGuest", totalGuests.toString());

  return (
    <Popover className={`flex relative ${className}`}>
      {({ open }) => (
        <>
          <div
            className={`flex-1 flex items-center focus:outline-none rounded-b-3xl ${
              open ? "shadow-lg" : ""
            }`}
          >
            <Popover.Button
              className={`relative z-10 border-2 rounded-full flex-1 flex text-left items-center py-1 px-4 focus:outline-none`}
            >
              <div className="flex justify-between w-full">
                <p className="text-[#878787]">
                  {totalGuests ? `${totalGuests} Guests` : "Add Guests"}
                </p>
                {!!totalGuests && open ? (
                  <ClearDataButton
                    onClick={() => {
                      setGuestAdultsInputValue(0);
                      setGuestChildrenInputValue(0);
                      setGuestInfantsInputValue(0);
                    }}
                  />
                ) : (
                  <div>
                    <UserPlusIcon className="w-5 h-5 lg:w-7 lg:h-7" />
                  </div>
                )}
              </div>
              {/* <div className="flex-grow">
                <span className="block xl:text-lg font-semibold">
                  {totalGuests || ''} Guests
                </span>
                <span className="block mt-1 text-sm text-neutral-400 leading-none font-light">
                  {totalGuests ? 'Guests' : 'Add guests'}
                </span>
              </div> */}
            </Popover.Button>
          </div>

          <Transition
            as={Fragment}
            enter="transition ease-out duration-200"
            enterFrom="opacity-0 translate-y-1"
            enterTo="opacity-100 translate-y-0"
            leave="transition ease-in duration-150"
            leaveFrom="opacity-100 translate-y-0"
            leaveTo="opacity-0 translate-y-1"
          >
            <Popover.Panel className="absolute right-0 z-10 w-full sm:min-w-[340px] max-w-sm bg-white dark:bg-neutral-800 top-full mt-3 py-5 sm:py-6 px-4 sm:px-8 rounded-3xl shadow-xl ring-1 ring-black ring-opacity-5 ">
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
