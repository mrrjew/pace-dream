"use client";

import React, { Fragment, useState, FC } from "react";
import { Popover, Transition } from "@headlessui/react";
import DatePickerCustomHeaderTwoMonth from "@/components/DatePickerCustomHeaderTwoMonth";
import DatePickerCustomDay from "@/components/DatePickerCustomDay";
import DatePicker from "react-datepicker";
import ClearDataButton from "@/app/(client-components)/(HeroSearchForm)/ClearDataButton";
import Image from "next/image";
import { CalendarImage } from "public/assetsManager";

interface StayDatesRangeInputProps {
  className?: string;
  fieldClassName?: string;
  dates?: string;
  inputs?: string;
}

const DatesRangeForm: FC<StayDatesRangeInputProps> = ({
  className = "",
  fieldClassName = "",
  dates = "",
  inputs = "",
}) => {
  const [startDate, setStartDate] = useState<Date | null>(null);
  const [endDate, setEndDate] = useState<Date | null>(null);
  const [selectedRange, setSelectedRange] = useState<
    [Date | null, Date | null]
  >([null, null]);

  const [currentDate, setCurrentDate] = useState(new Date());
  const [tomorrowDate, setTomorrowDate] = useState(() => {
    const tomorrow = new Date(currentDate);
    tomorrow.setDate(tomorrow.getDate() + 1); // Get tomorrow's date
    return tomorrow;
  });

  const handleChange = (
    date: [Date | null, Date | null],
    event: React.SyntheticEvent<any, Event> | undefined,
  ) => {
    setSelectedRange(date);
    console.log(selectedRange);
    const [startDate, endDate] = date;
  };

  const onChangeDate = (dates: [Date | null, Date | null]) => {
    const [start, end] = dates;
    setStartDate(start);
    setEndDate(end);
  };

  const handleCurrentDateChange = (action: "prev" | "next"): void => {
    const newDate: Date = new Date(currentDate);
    if (action === "prev") {
      newDate.setDate(newDate.getDate() - 1); // Subtract one day
    } else {
      newDate.setDate(newDate.getDate() + 1); // Add one day
    }
    setCurrentDate(newDate);
    // Update tomorrow's date accordingly
    setTomorrowDate((prevTomorrow: Date) => {
      const nextTomorrow: Date = new Date(newDate);
      nextTomorrow.setDate(nextTomorrow.getDate() + 1); // Get tomorrow's date
      return nextTomorrow;
    });
  };

  function getCurrentDate() {
    const currentDate = new Date();
    const options: Intl.DateTimeFormatOptions = {
      weekday: "short",
      day: "numeric",
      month: "short",
    };
    const formattedDate = currentDate.toLocaleDateString("en-US", options);
    // Extract the first three characters of the day
    const day = formattedDate.split(",")[0];
    return `${day.slice(0, 3)},${formattedDate.split(",")[1]}`;
  }

  const handleTomorrowDateChange = (action: "prev" | "next"): void => {
    const newTomorrowDate: Date = new Date(tomorrowDate);
    if (action === "prev") {
      newTomorrowDate.setDate(newTomorrowDate.getDate() - 1); // Subtract one day
    } else {
      newTomorrowDate.setDate(newTomorrowDate.getDate() + 1); // Add one day
    }
    setTomorrowDate(newTomorrowDate);
  };

  function getTomorrowDate() {
    const tomorrow = new Date();
    tomorrow.setDate(tomorrow.getDate() + 1); // Get tomorrow's date
    const options: Intl.DateTimeFormatOptions = {
      weekday: "short",
      day: "numeric",
      month: "short",
    };
    const formattedDate = tomorrow.toLocaleDateString("en-US", options);
    // Extract the first three characters of the day
    const day = formattedDate.split(",")[0];
    return `${day.slice(0, 3)},${formattedDate.split(",")[1]}`;
  }

  const RenderInput = () => {
    return (
      <div className="flex-grow text-left">
        <div className="font-rubik text-[.6rem] font-[400]">From</div>
        <div
          className={`flex  justify-between items-center p-0   border-none text-[1.13rem] font-rubik font-[700]  text-black  w-[8.2rem] h-[2rem]  line-clamp-1`}
        >
          {selectedRange[0]
            ? selectedRange[0]?.toLocaleDateString("en-US")
            : `${getCurrentDate()}`}
          <Image
            src={CalendarImage}
            alt="Calendar"
            className="shrink-0 size-5 flex items-center "
          />

          {/* <CalendarDaysIcon className="w-6 h-6 ml-4 text-black lg:w-6 lg:h-6 xl:w-6 xl:h-6" /> */}
        </div>
        <div className="flex leading-[1.1] text-[.75rem] font-rubik font-[400] justify-start">
          <button
            onClick={() => handleCurrentDateChange("prev")}
            className="mr-2 text-gray-700 bg-transparent rounded hover:underline"
          >
            Previous
          </button>
          <button
            onClick={() => handleCurrentDateChange("next")}
            className="text-gray-700 bg-transparent rounded hover:underline"
          >
            Next
          </button>
        </div>
      </div>
    );
  };

  const renderOutput = () => {
    return (
      <div className="flex-grow text-left border-none max-md:mt-4 max-md:ml-4">
        <div className="font-rubik text-[.6rem] font-[400]">Until</div>
        <div
          className={`flex justify-between items-center p-0  bg-transparent border-none text-[1.13rem] font-rubik font-[700] placeholder:text-black text-black  focus:ring-0 focus:outline-none w-[8.2rem] h-[2rem]  line-clamp-1`}
        >
          {selectedRange[1]
            ? selectedRange[1]?.toLocaleDateString("en-US")
            : `${getTomorrowDate()}`}
          <Image
            src={CalendarImage}
            alt="Calendar"
            className="shrink-0 size-5 flex items-center"
          />
        </div>
        <div className="flex leading-[1.1] text-[.75rem] font-rubik font-[400] justify-start">
          <button
            onClick={() => handleCurrentDateChange("prev")}
            className="mr-2 text-gray-700 bg-transparent rounded hover:underline"
          >
            Previous
          </button>
          <button
            onClick={() => handleCurrentDateChange("next")}
            className="text-gray-700 bg-transparent rounded hover:underline"
          >
            Next
          </button>
        </div>
      </div>
    );
  };

  return (
    <div
      className={`border-[1px] border-[#D9D9D9] bg-transparent flex gap-[2.5rem] rounded-[.7rem] p-[1rem]  ${className}`}
    >
      <Popover
        className={`StayDatesRangeInput z-50 bg-transparent relative flex ${className}`}
      >
        {({ open }) => (
          <>
            <Popover.Button
              as="div"
              className={`flex-1 z-10 flex relative ${fieldClassName}  items-center   focus:outline-none`}
            >
              {<RenderInput />}
              {startDate && open && (
                <ClearDataButton onClick={() => onChangeDate([null, null])} />
              )}
            </Popover.Button>

            {open && (
              <div className="h-8 absolute self-center top-1/2 -translate-y-1/2 z-0 -inset-x-0.5 "></div>
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
              <Popover.Button as={"div"} className="absolute z-50 w-screen max-w-sm mt-3 transform bg-white rounded-3xl left-full top-full -translate-x-96 md:-translate-x-1/2 lg:max-w-3xl">
                <div className="p-2 overflow-hidden bg-white shadow-lg rounded-3xl ring-1 ring-black sm:p-4 ring-opacity-5">
                  <DatePicker
                    onChange={handleChange}
                    startDate={selectedRange[0]}
                    endDate={selectedRange[1]}
                    selectsRange
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
              </Popover.Button>
            </Transition>
          </>
        )}
      </Popover>
      <Popover
        className={`StayDatesRangeInput  z-49 relative flex ${className}`}
      >
        {({ open }) => (
          <>
            <Popover.Button
              as="div"
              className={`flex-1 z-10 flex relative ${fieldClassName}  items-center space-x-1 focus:outline-none`}
            >
              {renderOutput()}
              {endDate && open && (
                <ClearDataButton onClick={() => onChangeDate([null, null])} />
              )}
            </Popover.Button>

            {open && (
              <div className="h-8 absolute self-center top-1/2 -translate-y-1/2 z-0 -inset-x-0.5 "></div>
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
              <Popover.Button as="div" className="absolute z-50 w-screen max-w-sm mt-3 transform left-full top-full -translate-x-96 md:-translate-x-1/2 lg:max-w-3xl">
                <div className="p-2 overflow-hidden bg-white shadow-lg rounded-3xl ring-1 ring-black sm:p-4 ring-opacity-5">
                  <DatePicker
                    onChange={handleChange}
                    startDate={selectedRange[0]}
                    endDate={selectedRange[1]}
                    selectsRange
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
              </Popover.Button>
            </Transition>
          </>
        )}
        {/* <Popover.Button
        className={`flex-1 z-10 flex relative ${fieldClassName} xl:pr-4 xl:pl-4 items-center space-x-1 focus:outline-none`}
        >
        {renderOutput()}
        
      </Popover.Button> */}
      </Popover>
    </div>
  );
};
export default DatesRangeForm;
