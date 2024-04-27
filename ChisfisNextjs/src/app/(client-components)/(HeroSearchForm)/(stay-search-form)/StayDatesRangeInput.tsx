"use client";

import React, { Fragment, useState, FC } from "react";
import { Popover, Transition } from "@headlessui/react";
import { CalendarDaysIcon } from "@heroicons/react/24/outline";
import DatePickerCustomHeaderTwoMonth from "@/components/DatePickerCustomHeaderTwoMonth";
import DatePickerCustomDay from "@/components/DatePickerCustomDay";
import DatePicker from "react-datepicker";
import ClearDataButton from "../ClearDataButton";

export interface StayDatesRangeInputProps {
  className?: string;
  fieldClassName?: string;
  dates?: string;
  inputs?: string;
}

const StayDatesRangeInput: FC<StayDatesRangeInputProps> = ({
  className = "",
  fieldClassName = "",
  dates = "",
  inputs = "",
}) => {
  const [startDate, setStartDate] = useState<Date | null>(null);
  const [endDate, setEndDate] = useState<Date | null>(null);
  const [selectedRange, setSelectedRange] = useState<[Date | null, Date | null]>([null, null]);

  const [currentDate, setCurrentDate] = useState(new Date());
  const [tomorrowDate, setTomorrowDate] = useState(() => {
    const tomorrow = new Date(currentDate);
    tomorrow.setDate(tomorrow.getDate() + 1); // Get tomorrow's date
    return tomorrow;
  });

  const handleChange = (date: [Date | null, Date | null], event: React.SyntheticEvent<any, Event> | undefined) => {
    setSelectedRange(date);
    console.log(selectedRange)
    const [startDate, endDate] = date;
  };

  const onChangeDate = (dates: [Date | null, Date | null]) => {
    const [start, end] = dates;
    setStartDate(start);
    setEndDate(end);
  };

  const handleCurrentDateChange = (action) => {
    const newDate = new Date(currentDate);
    if (action === 'prev') {
      newDate.setDate(newDate.getDate() - 1); // Subtract one day
    } else {
      newDate.setDate(newDate.getDate() + 1); // Add one day
    }
    setCurrentDate(newDate);
    // Update tomorrow's date accordingly
    setTomorrowDate((prevTomorrow) => {
      const nextTomorrow = new Date(newDate);
      nextTomorrow.setDate(nextTomorrow.getDate() + 1); // Get tomorrow's date
      return nextTomorrow;
    });
  };

  function getCurrentDate() {
    const currentDate = new Date();
    const options = { weekday: 'short', day: 'numeric', month: 'short' };
    const formattedDate = currentDate.toLocaleDateString('en-US', options);
    // Extract the first three characters of the day
    const day = formattedDate.split(',')[0];
    return `${day.slice(0, 3)},${formattedDate.split(',')[1]}`;
  }

  const handleTomorrowDateChange = (action) => {
    const newTomorrowDate = new Date(tomorrowDate);
    if (action === 'prev') {
      newTomorrowDate.setDate(newTomorrowDate.getDate() - 1); // Subtract one day
    } else {
      newTomorrowDate.setDate(newTomorrowDate.getDate() + 1); // Add one day
    }
    setTomorrowDate(newTomorrowDate);
  };

  function getTomorrowDate() {
    const tomorrow = new Date();
    tomorrow.setDate(tomorrow.getDate() + 1); // Get tomorrow's date
    const options = { weekday: 'short', day: 'numeric', month: 'short' };
    const formattedDate = tomorrow.toLocaleDateString('en-US', options);
    // Extract the first three characters of the day
    const day = formattedDate.split(',')[0];
    return `${day.slice(0, 3)},${formattedDate.split(',')[1]}`;
  }

  const renderInput = () => {
    return (
      <div className="flex-grow border-none text-left max-md:mt-4 max-md:ml-2">
        <span className="block xl:text-lg">
          From
        </span>
        <span className={`flex flex-row ${inputs ? inputs : 'max-md:w-[85vw]'} p-2 md:p-2 w-full ${dates} md:w-36 lg:w-40 rounded-lg mt-1 text-base h-11 font-semibold items-center justify-between leading-none`}>
          {selectedRange[0] ? selectedRange[0]?.toLocaleDateString("en-US") : `${getCurrentDate()}`}
          <CalendarDaysIcon className="w-6 h-6 lg:w-6 lg:h-6 xl:w-6 xl:h-6 ml-4 text-black" />
        </span>
        <div className="flex justify-center mt-2">
          <button onClick={() => handleCurrentDateChange('prev')} className="px-2 py-1 mr-2 bg-transparent hover:bg-gray-300 text-gray-700 rounded">Previous</button>
          <button onClick={() => handleCurrentDateChange('next')} className="px-2 py-1 bg-transparent hover:bg-gray-300 text-gray-700 rounded">Next</button>
        </div>
      </div>
    );
  };

  const renderOutput = () => {
    return (
      <div className="flex-grow border-none text-left max-md:mt-4 max-md:ml-4">
        <span className="block xl:text-lg">
          Until
        </span>
        <span className={`flex flex-row ${inputs ? inputs : 'max-md:w-[85vw]'} p-2 md:p-2 w-full ${dates} md:w-48 lg:w-48 rounded-lg mt-1 text-base h-11 items-center justify-between leading-none font-semibold`}>
          {selectedRange[1] ? selectedRange[1]?.toLocaleDateString("en-US") : `${getTomorrowDate()}`}
          <CalendarDaysIcon className="w-6 h-6 lg:w-6 lg:h-6 xl:w-6 xl:h-6 ml-4 text-black" />
        </span>
        <div className="flex justify-center mt-2">
          <button onClick={() => handleCurrentDateChange('prev')} className="px-2 py-1 mr-2 bg-transparent hover:bg-gray-300 text-gray-700 rounded">Previous</button>
          <button onClick={() => handleCurrentDateChange('next')} className="px-2 py-1 bg-transparent hover:bg-gray-300 text-gray-700 rounded">Next</button>
        </div>
      </div>
    )
  }

  return (
    <div className={`border flex rounded-3xl h-[130px] ${className}`}>
      <Popover className={`StayDatesRangeInput z-50 relative flex ${className}`}>
        {({ open }) => (
          <>
            <Popover.Button
              className={`flex-1 z-10 flex relative ${fieldClassName} pr-4 pl-2 md:pl-7 items-center space-x-1 focus:outline-none`}
            >
              {renderInput()}
              {startDate && open && (
                <ClearDataButton onClick={() => onChangeDate([null, null])} />
              )}
            </Popover.Button>

            {open && (
              <div className="h-8 absolute self-center top-1/2 -translate-y-1/2 z-0 -inset-x-0.5 bg-white"></div>
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
              <Popover.Panel className="absolute left-full z-50 mt-3 top-full w-screen max-w-sm  bg-white -translate-x-96  md:-translate-x-1/2 transform px-4 sm:px-0 lg:max-w-3xl">
                <div className="overflow-hidden rounded-3xl shadow-lg ring-1 ring-black ring-opacity-5 bg-white">
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
              </Popover.Panel>
            </Transition>
          </>
        )}
      </Popover>
      <Popover className={`StayDatesRangeInput z-49 relative flex ${className}`}>
        {({ open }) => (
          <>
            <Popover.Button
              className={`flex-1 z-10 flex relative ${fieldClassName} xl:pr-4 xl:pl-4 items-center space-x-1 focus:outline-none`}
            >
              {renderOutput()}
              {endDate && open && (
                <ClearDataButton onClick={() => onChangeDate([null, null])} />
              )}
            </Popover.Button>

            {open && (
              <div className="h-8 absolute self-center top-1/2 -translate-y-1/2 z-0 -inset-x-0.5 bg-white"></div>
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
              <Popover.Panel className="absolute left-full z-50 mt-3 top-full w-screen max-w-sm -translate-x-96  md:-translate-x-1/2 transform px-4 sm:px-0 lg:max-w-3xl">
                <div className="overflow-hidden rounded-3xl shadow-lg ring-1 ring-black ring-opacity-5 bg-white">
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
              </Popover.Panel>
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

export default StayDatesRangeInput;
