"use client";

import React, { FC } from "react";


export interface BudgetsProps {
  className?: string;
  fieldClassName?: string;
  dates?: string;
  inputs?: string;
}

const Budgets: FC<BudgetsProps> = ({
  className = "",
  fieldClassName = "",
  dates = "",
  inputs= "",
}) => {

  const renderInput = () => {
    return (
        <div className="flex-grow text-left max-md:mt-4 max-md:ml-2 md:mr-4">
          <span className="block xl:text-lg font-normal text-black md:font-semibold">
            Budget
          </span>
          <span className={`flex flex-row border p-2 md:p-1.5 w-full ${dates} rounded-2xl mt-1 text-xs text-neutral-400 items-center justify-between leading-none font-light`}>
            Minimum
          </span>
        </div>
    );
  };

  const renderOutput = () => {
    return(
        <div className="flex-grow text-left max-md:mt-4 max-md:ml-4">
            <span className={`flex flex-row border p-2 md:p-1.5 w-full ${dates} rounded-2xl mt-1 text-xs text-neutral-400 items-center justify-between leading-none font-light`}>
                Maximum
            </span>
        </div>
    )
  }

  return (
    <div className="flex items-end md:mr-8">
      {renderInput()}
      {renderOutput()}
    </div>
  );
};

export default Budgets;
