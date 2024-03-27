"use client";

import React, { Fragment, useState } from "react";
import { FC } from "react";
import DatePicker from "react-datepicker";
import { Popover, Transition } from "@headlessui/react";
import { CalendarIcon } from "@heroicons/react/24/outline";
import DatePickerCustomHeaderTwoMonth from "@/components/DatePickerCustomHeaderTwoMonth";
import DatePickerCustomDay from "@/components/DatePickerCustomDay";
import ClearDataButton from "../ClearDataButton";

export interface ExperiencesDateSingleInputProps {
  className?: string;
  fieldClassName?: string;
  inputs?: string;
}

const ExperiencesDateSingleInput: FC<ExperiencesDateSingleInputProps> = ({
  className = "",
  fieldClassName = "",
  inputs = "",
}) => {
  const [startDate, setStartDate] = useState<Date | null>(
    new Date()
  );

  const renderInput = () => {
    return (
      <div className="flex-grow text-left max-md:mt-4">
        <span className="block xl:text-lg font-normal text-black md:font-semibold">
          From
        </span>
        <span className={`flex flex-row ${inputs ? inputs : 'max-md:w-[85vw]'} border lg:py-2 xl:py-2 p-2 md:p-2 w-full md:w-40 lg:w-40 rounded-2xl mt-1 text-xs text-neutral-400 items-center justify-between leading-none font-light`}>
          {startDate ? startDate?.toLocaleDateString("en-US") : `Add dates`}
          <CalendarIcon className="w-3 h-3 lg:w-4 lg:h-4 xl:w-3 xl:h-3 ml-4 text-black" />
        </span>
      </div>
    );
  };

  return (
    <>
      <Popover
        className={`ExperiencesDateSingleInput relative flex ${className}`}
      >
        {({ open }) => (
          <>
            <Popover.Button
              className={`flex z-10 flex-1 relative pl-4 md:pl-7 md:pr-4 xl:mr-4 lg:pr-3 lg:py-0 flex-shrink-0 items-center space-x-1 cursor-pointer focus:outline-none text-left`}
            >
              {renderInput()}
              {startDate && open && (
                <ClearDataButton onClick={() => setStartDate(null)} />
              )}
            </Popover.Button>

            {open && (
              <div className="h-8 absolute self-center top-1/2 -translate-y-1/2 z-0 -inset-x-0.5 bg-white dark:bg-neutral-800"></div>
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
              <Popover.Panel className="absolute left-1/2 z-10 mt-3 top-full w-screen max-w-sm -translate-x-1/2 transform px-4 sm:px-0 lg:max-w-3xl">
                <div className="overflow-hidden rounded-3xl shadow-lg ring-1 ring-black ring-opacity-5 bg-white dark:bg-neutral-800 p-8">
                  <DatePicker
                    selected={startDate}
                    onChange={(date: Date) => setStartDate(date)}
                    monthsShown={2}
                    showPopperArrow={false}
                    inline
                    renderCustomHeader={(p) => (
                      <DatePickerCustomHeaderTwoMonth {...p} />
                    )}
                    renderDayContents={(day, date) => (
                      <DatePickerCustomDay dayOfMonth={day} date={date} />
                    )}
                  />
                </div>
              </Popover.Panel>
            </Transition>
          </>
        )}
      </Popover>
    </>
  );
};

export default ExperiencesDateSingleInput;
