"use client";

import React, { FC, useEffect, useState } from "react";
import { MinusIcon, PlusIcon } from "@heroicons/react/24/solid";
import { formFieldInitialStateType } from "@/types/types";

export interface NcInputNumberProps {
  className?: string;
  min?: number;
  max?: number;
  onChange?: (value: number) => void;
  label?: string;
  desc?: string;
  name: string;
  value: number | undefined;
  setInput: React.Dispatch<React.SetStateAction<formFieldInitialStateType>>;
}

const NcInputNumber: FC<NcInputNumberProps> = ({
  className = "w-full",
  min = 0,
  max,
  onChange,
  label,
  desc,
  name,
  value,
  setInput,
}) => {
  // const [value, setValue] = useState(defaultValue);

  // useEffect(() => {
  //   setInput((prevState) => ({ ...prevState }));
  // }, [defaultValue]);

  const handleClickDecrement = () => {
    const currentValue = typeof value === "number" ? value : 0;

    if (min >= currentValue) return;

    setInput((prevState) => ({
      ...prevState,
      [name]: currentValue - 1,
    }));

    onChange && onChange(currentValue - 1);

    // if (typeof value === 'number' && min >= value) return;
    // setInput((prevState) => ({
    //   ...prevState,
    //   name: value - 1
    // }));
    // onChange && onChange(value - 1);
  };
  const handleClickIncrement = () => {
    const currentValue = typeof value === "number" ? value : 0;

    if (max && max <= currentValue) return;
    setInput((prevState) => ({
      ...prevState,
      [name]: currentValue + 1,
    }));

    onChange && onChange(currentValue + 1);
  };

  const renderLabel = () => {
    return (
      <div className="flex flex-col">
        <span className="font-medium text-neutral-800 dark:text-neutral-200">
          {label}
        </span>
        {desc && (
          <span className="text-xs text-neutral-500 dark:text-neutral-400 font-normal">
            {desc}
          </span>
        )}
      </div>
    );
  };

  return (
    <div
      className={`nc-NcInputNumber flex items-center justify-between space-x-5 ${className}`}
      data-nc-id="NcInputNumber"
    >
      {label && renderLabel()}

      <div
        className={`nc-NcInputNumber flex items-center justify-between w-28`}
      >
        <button
          className="w-8 h-8 rounded-full flex items-center justify-center border border-neutral-400 dark:border-neutral-500 bg-white dark:bg-neutral-900 focus:outline-none hover:border-neutral-700 disabled:hover:border-neutral-400 dark:disabled:hover:border-neutral-500 disabled:opacity-50 disabled:cursor-default"
          type="button"
          name={name}
          onClick={handleClickDecrement}
          disabled={min >= (value ?? 0)}
        >
          <MinusIcon className="w-4 h-4" />
        </button>
        <span>{value}</span>
        <button
          className="w-8 h-8 rounded-full flex items-center justify-center border border-neutral-400 dark:border-neutral-500 bg-white dark:bg-neutral-900 focus:outline-none hover:border-neutral-700 disabled:hover:border-neutral-400 dark:disabled:hover:border-neutral-500 disabled:opacity-50 disabled:cursor-default"
          type="button"
          onClick={handleClickIncrement}
          disabled={max ? max <= (value ?? 0) : false}
        >
          <PlusIcon className="w-4 h-4" />
        </button>
      </div>
    </div>
  );
};

export default NcInputNumber;
