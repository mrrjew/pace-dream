"use client";

import React, { Fragment, useState } from "react";
import { Popover, Transition } from "@headlessui/react";
import NcInputNumber from "@/components/NcInputNumber";
import { FC } from "react";
import ClearDataButton from "@/app/(client-components)/(HeroSearchForm)/ClearDataButton";
import { PathName } from "@/routers/types";
import { GuestsObject } from "@/app/(client-components)/type";
import Image from "next/image";
import { AddGuestIconImage } from "public/assetsManager";

export interface GuestsInputProps {
  currentTab?: string;
  className?: string;
  buttonSubmitHref?: PathName | string;
  hasButtonSubmit?: boolean;
  inputs?: string;
}

const GuestForm: FC<GuestsInputProps> = ({
  currentTab = "Room Stays",
  className = "[ nc-flex-1 ]",
  buttonSubmitHref = "/listing-stay-map/1",
  hasButtonSubmit = true,
  inputs = "",
}) => {
  const [guestAdultsInputValue, setGuestAdultsInputValue] = useState(2);
  const [guestChildrenInputValue, setGuestChildrenInputValue] = useState(1);
  const [guestInfantsInputValue, setGuestInfantsInputValue] = useState(1);
  const [guestCount, setGuestCount] = useState(1);

  const incrementGuestCount = () => {
    setGuestCount((prevCount) => prevCount + 1);
  };

  const decrementGuestCount = () => {
    if (guestCount > 1) {
      setGuestCount((prevCount) => prevCount - 1);
    }
  };

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
    <Popover
      className={`p-[1rem] relative xl:flex hidden rounded-[.7rem] ${className}`}
    >
      {({ open }) => (
        <>
          <Popover.Panel
            className={`flex pr-[1rem] z-10 h-[100%]  flex-col md:flex-row relative flex-shrink-0  cursor-pointer focus:outline-none text-left`}
          >
            <div className="">
              <div className="font-rubik text-[.6rem] font-[400]">Guests</div>

              <div className="relative flex items-center ">
                <div
                  className={`flex items-center p-0 pr-[1.5rem] bg-transparent border-none text-[1.13rem] font-rubik font-[700] placeholder:text-black text-black  focus:ring-0 focus:outline-none w-[8.5rem] h-[2rem]  line-clamp-1`}
                >
                  Add Guests
                </div>
                <div className="flex items-center ">
                  <Image
                    src={AddGuestIconImage}
                    alt="Add guest"
                    className="shrink-0 size-5 flex items-center "
                  />
                  {/* <UserPlusIcon className=" w-[1.2rem] " /> */}
                </div>
                {!!totalGuests && open && (
                  <div className=" absolute right-[.5rem] top-[1rem] ">
                    <ClearDataButton
                      onClick={() => {
                        setGuestAdultsInputValue(0);
                        setGuestChildrenInputValue(0);
                        setGuestInfantsInputValue(0);
                        setGuestCount(1);
                      }}
                    />
                  </div>
                )}
              </div>

              {/* <span
                className={`flex flex-grow ${
                  inputs ? inputs : "max-md:w-[85vw]"
                } w-full md:w-40 lg:w-40 rounded-lg h-10 text-black items-center justify-between leading-none font-light md:font-semibold text-lg gap-0 ml-1`}
              >
                Add Guests
                <UserPlusIcon className="w-6 h-6 mr-5 text-gray-500 lg:w-6 lg:h-6 xl:w-6 xl:h-6 md:flex" />
              </span> */}
              <div className="flex flex-row items-center text-[.7rem] h-[1rem] leadding-[.5rem] ">
                <button onClick={decrementGuestCount}>- &nbsp; </button>
                  <span>
                  {guestCount} &nbsp;
                  <button onClick={incrementGuestCount}>+</button>
                </span>
              </div>
            </div>

            {/* {hasButtonSubmit && (
              <div className="mr-4 md:ml-4 xl:pr-3 w-[60%] max-md:w-[90%] md:pt-4 justify-center max-md:mt-6 mt-2">
                <ButtonSubmit href='/listing-stay-map/[room]' as={buttonSubmitHref} />
              </div>
            )} */}
          </Popover.Panel>
          {/* Simple number counter */}

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

export default GuestForm;
