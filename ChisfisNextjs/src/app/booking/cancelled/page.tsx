"use client";
import BookingStatusCard from "@/components/booking/BookingStatusCard";
import { DEMO_STAY_LISTINGS } from "@/data/listings";
import React, { Fragment, useState } from "react";
const Cancelled = () => {
  const data = DEMO_STAY_LISTINGS[0];

  return (
    <div className="flex flex-col gap-[1.5rem] w-[100%] xl:px-[3rem] sm:px-[1.5rem] px-[.5rem] my-[2rem] ">
      <div className="flex flex-col gap-[2rem]">
        {DEMO_STAY_LISTINGS.filter((_, i) => i < 8).map((data) => (
          <div
            key="page"
            className="flex flex-col items-center md:justify-start "
          >
            <div className="flex flex-col justify-center gap-[1rem] md:w-[100%] sm:w-[30rem] w-[19rem] ">
              <div className="flex md:flex-col flex-row md:justify-start justify-between  gap-[.2rem] ">
                <h2 className=" text-[1.4rem] font-[600] ">London</h2>
                <h3 className=" text-[#757575]"> Fri,01 Apr</h3>
              </div>
              <BookingStatusCard BookingStatusData={data} isCompleted={false} />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Cancelled;
