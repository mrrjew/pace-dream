"use client";
import DatePickerCustomDay from "@/components/DatePickerCustomDay";
import DatePickerCustomHeaderTwoMonth from "@/components/DatePickerCustomHeaderTwoMonth";
import React, { FC, useState } from "react";
import DatePicker from "react-datepicker";

export interface PageAddPartner3Props {}

const PageAddPartner3: FC<PageAddPartner3Props> = () => {
  const [dates, setDates] = useState<number[]>([
    new Date("2023/02/06").getTime(),
    new Date("2023/02/09").getTime(),
    new Date("2023/02/15").getTime(),
  ]);

  return (
    <>
      <div>
        <h2 className="text-2xl font-semibold">Set your availability</h2>
        <p className="mt-4">
          Short titles work best. Have fun with it – you can always change it
          later.
        </p>
      </div>
      <div className="w-full border rounded-lg flex">
        <div className=" w-1/4 h-full border-r-2 my-2">
          <h2 className="px-5 py-2">Week</h2>
          <h2 className="px-5 py-2 border-l-4 border-[#444ff3] text-[#3734ee] bg-[#f5f3f3]">
            Month
          </h2>
          <h2 className="px-5 py-2">Year</h2>
          <h2 className="px-5 py-2">Free select</h2>
        </div>
        <div className=" w-4/6 ml-6">
          <DatePicker
            onChange={(date) => {
              let newDates = [];

              if (!date) {
                return;
              }
              const newTime = date.getTime();
              if (dates.includes(newTime)) {
                newDates = dates.filter((item) => item !== newTime);
              } else {
                newDates = [...dates, newTime];
              }
              setDates(newDates);
            }}
            // selected={startDate}
            monthsShown={2}
            showPopperArrow={false}
            excludeDates={dates.filter(Boolean).map((item) => new Date(item))}
            inline
            renderCustomHeader={(p) => (
              <DatePickerCustomHeaderTwoMonth {...p} />
            )}
            renderDayContents={(day, date) => (
              <DatePickerCustomDay dayOfMonth={day} date={date} />
            )}
          />
        </div>
      </div>
    </>
  );
};

export default PageAddPartner3;
