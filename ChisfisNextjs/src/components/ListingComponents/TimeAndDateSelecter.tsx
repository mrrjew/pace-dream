/* eslint-disable react-hooks/exhaustive-deps */
"use client";

import { useEffect, useState } from "react";
import Input from "./Input";
import moment from "moment";

type TimeData = {
  hour: number;
  min: number;
  amPm: "AM" | "PM";
};
export function TimeSelector({
  onTimeChange,
  initialTime,
}: {
  onTimeChange: (val: TimeData) => void;
  initialTime: TimeData;
}) {
  const [selectedTime, setSelectedTime] = useState<TimeData>(
    initialTime || {
      hour: 0,
      min: 0,
      amPm: "AM",
    },
  );

  // listem to date change
  useEffect(() => {
    onTimeChange(selectedTime);
  }, [selectedTime]);

  // border-none focus:ring-0
  return (
    <div className="flex flex-col gap-4">
      {/* <p className="flex-1 py-2">{title}</p> */}
      <div className="flex flex-1 items-center gap-2 ring-1 ring-gray-300 rounded-lg px-2">
        {/* 12 hour selector */}
        <select
          defaultValue={selectedTime.hour}
          onChange={(e) => {
            setSelectedTime({
              ...selectedTime,
              hour: Number(e.currentTarget.value),
            });
          }}
          name="hour"
          id="hour"
          className="border-none focus:ring-0 text-gray-500"
        >
          {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12].map((time, index) => {
            return <option key={index} value={time}>{`${time} H`}</option>;
          })}
        </select>
        <div>
          <hr className="bg-gray-400 h-4 w-[0.5px]" />
        </div>

        {/* minutes in 30 minutes interval */}
        <select
          defaultValue={selectedTime.min}
          onChange={(e) => {
            setSelectedTime({
              ...selectedTime,
              min: Number(e.currentTarget.value),
            });
          }}
          name="minutes"
          id="minutes"
          className="border-none focus:ring-0 text-gray-500"
        >
          {[0, 30].map((time, index) => {
            return <option key={index} value={time}>{`${time} M`}</option>;
          })}
        </select>
        <div className="flex-1">
          <hr className="bg-gray-400 h-4 w-[0.5px]" />
        </div>

        {/* AM,PM */}
        <select
          onChange={(e) => {
            setSelectedTime({
              ...selectedTime,
              amPm: e.currentTarget.value as any,
            });
          }}
          defaultValue={"AM"}
          name="amPm"
          id="amPm"
          className="border-none focus:ring-0 text-gray-500"
        >
          {["AM", "PM"].map((time, index) => {
            return (
              <option key={index} value={time}>
                {time}
              </option>
            );
          })}
        </select>
      </div>
    </div>
  );
}

export function DateImputField({
  defaultValue,
  onChange,
  placeholder,
  name,
  id,
}: {
  defaultValue?: string;
  onChange?: (val: Date | null) => void;
  placeholder?: string;
  name?: string;
  id?: string;
}) {
  const [isFocused, setIsFocused] = useState<boolean>(false);
  const [value, setValue] = useState<string | undefined>(undefined);

  return (
    <input
      className="border-1 rounded-lg focus:ring-0 text-gray-500 w-full"
      defaultValue={defaultValue}
      onChange={(e) => {
        // check if it's valid date
        if (
          moment(e.currentTarget.valueAsDate, moment.defaultFormatUtc).isValid()
        ) {
          setValue(moment(e.currentTarget.valueAsDate).format("DD/MM/YYYY"));
          onChange && onChange(e.currentTarget.valueAsDate);
          setIsFocused(false);
        }
      }}
      // value={value}
      onFocus={() => setIsFocused(true)}
      // onBlur={()=>setIsFocused(false)}
      type={isFocused ? "date" : "text"}
      name={name}
      id={id}
      placeholder={placeholder}
    />
  );
}
