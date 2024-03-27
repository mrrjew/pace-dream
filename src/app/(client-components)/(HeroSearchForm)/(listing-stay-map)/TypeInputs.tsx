"use client";

import { PathName } from "@/routers/types";
import ButtonSubmit from "../ButtonSubmit";
import React, { FC } from "react";


export interface TypeInputsProps {
  className?: string;
  fieldClassName?: string;
  dates?: string;
  inputs?: string;
  buttonSubmitHref?: PathName | string;
}

const TypeInputs: FC<TypeInputsProps> = ({
  className = "",
  fieldClassName = "",
  dates = "",
  inputs = "",
  buttonSubmitHref = '/listing-stay-map/1'
}) => {

  const renderInput = () => {
    return (
      <div className="flex-grow text-left max-md:mt-4 max-md:ml-4 md:mr-4">
        <span className="block xl:text-lg font-normal text-black md:font-semibold">
          Type
        </span>
        <span className={`flex flex-row border p-2 h-11 max-md:w-[85vw] md:p-2 lg:p-3 xl:p-2 ${dates} rounded-lg mt-1 text-base text-neutral-400 items-center justify-between leading-none cursor-pointer font-light`}>
          Male
        </span>
      </div>
    );
  };

  const renderOutput = () => {
    return (
      <div className="flex-grow text-left max-md:mt-2 max-md:ml-4">
        <span className={`flex flex-row border h-11 p-2 max-md:w-[85vw] md:p-2 lg:p-3 xl:p-2 ${dates} rounded-lg mt-1 text-base text-neutral-400 items-center px-4 cursor-pointer justify-between leading-none font-light`}>
          Female
        </span>
      </div>
    )
  }

  return (
    <div className="flex md:items-end max-md:flex-col max-md:w-[90vw]">
      {renderInput()}
      {renderOutput()}
      <div className="mr-4 md:ml-4 xl:pr-3 w-[60%] max-md:w-[90%] md:pt-4 max-md:m-auto max-md:mt-6 mt-2">
        <ButtonSubmit href='/listing-stay-map/[room]' as={buttonSubmitHref} />
      </div>
    </div>
  );
};

export default TypeInputs;
