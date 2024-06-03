import { ChevronLeftIcon, ChevronRightIcon } from "@heroicons/react/24/outline";
import React from "react";
import { ReactDatePickerCustomHeaderProps } from "react-datepicker";

export const DatePickerCustomHeaderOneMonth = ({
  monthDate,
//   customHeaderCount,
  decreaseMonth,
  increaseMonth,
}: ReactDatePickerCustomHeaderProps) => {
  return (
    <div className="flex justify-between items-center">
        <span className="react-datepicker__current-month">
        {monthDate.toLocaleString("en-US", {
          month: "long",
          year: "numeric",
        })}
      </span>

     <div className="flex justify-end items-center">
        <button
            aria-label="Previous Month"
            className={
            "react-datepicker__navigation react-datepicker__navigation--previous flex items-center justify-center p-2 rounded-full hover:bg-gray-100 dark:hover:bg-gray-700"
            }
            // style={customHeaderCount === 1 ? { visibility: "hidden" } : {}}
            onClick={decreaseMonth}
            type="button"
        >
            <span className="react-datepicker__navigation-icon react-datepicker__navigation-icon--previous">
            <ChevronLeftIcon className="w-5 h-5" />
            </span>
        </button>
        <button
            aria-label="Next Month"
            className="react-datepicker__navigation react-datepicker__navigation--next flex items-center justify-center p-2 hover:bg-gray-100 dark:hover:bg-gray-700 rounded-full"
            // style={customHeaderCount === 0 ? { visibility: "hidden" } : {}}
            type="button"
            onClick={increaseMonth}
        >
            <span className="react-datepicker__navigation-icon react-datepicker__navigation-icon--next">
            <ChevronRightIcon className="w-5 h-5" />
            </span>
        </button>
        </div>

        </div>
  );
};

