"use client";

import { FC, useState } from "react";
import GuestsInput from "../../../../../(client-components)/(HeroSearchForm)/GuestsInput";
import LocationInput from "../../../../../(client-components)/(HeroSearchForm)/LocationInput";
import StayDatesRangeInput from "../../../../../(client-components)/(HeroSearchForm)/(stay-search-form)/StayDatesRangeInput";
import ButtonSubmit from "../../../../../(client-components)/(HeroSearchForm)/ButtonSubmit";
import LocationForm from "./LocationForm";
import GuestForm from "./GuestForm";
import DatesRangeForm from "./DatesRangeForm";

import React from "react";

const FindRoommate: FC<{}> = ({}) => {
  const RenderForm = () => {
    return (
      <div className=" rounded-bl-[.6rem] rounded-tr-[.6rem] rounded-br-[.6rem] bg-white bg-opacity-[.93] shadow-[0px 11.554px 23.109px 0px rgba(0, 0, 0, 0.05)] backdrop-blur-[4px]">
        <form className="block md:w-full md:relative ">
          <div className="flex flex-col items-center p-[1rem] gap-4 rounded-lg md:flex-row">
            <LocationForm className="border border-[#D9D9D9] " />
            <DatesRangeForm />
            <GuestForm className="border border-[#D9D9D9]" />

            <div className="">
              <ButtonSubmit href="/listing-stay-map/[room]" />
            </div>
          </div>
        </form>
      </div>
    );
  };

  return (
    <>
      <RenderForm />
    </>
  );
};

export default FindRoommate;
