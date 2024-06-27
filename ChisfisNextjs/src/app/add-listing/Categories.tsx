"use client";
import React from "react";
import ListingOption from "./ListingOption";
import {
  RoomImg,
  TimeImg,
  HourlyImg,
  FindImg,
  LastminutesImg,
  ExperiencesImg,
} from "@/images";

const options = [
  {
    href: "/add-listing/room-stays",
    img: RoomImg,
    alt: "Room Stays",
    label: "Room Stays",
  },
  {
    href: "/add-listing/time-based",
    img: TimeImg,
    alt: "Time-Based",
    label: "Time-Based",
  },
  {
    href: "/add-listing/hourly-rental-gear",
    img: HourlyImg,
    alt: "Hourly Rental Gear",
    label: "Hourly Rental Gear",
  },
  {
    href: "/add-listing/find-roommate",
    img: FindImg,
    alt: "Find Roommate",
    label: "Find Roommate",
  },
  {
    href: "/add-listing/experience",
    img: ExperiencesImg,
    alt: "Experiences",
    label: "Experiences",
  },
  {
    href: "/add-listing/last-minutes",
    img: LastminutesImg,
    alt: "Last minutes",
    label: "Last minutes",
  },
];

const ListingCategoriesPage = () => {
  return (
    <>
      <div className="flex-col text-center">
        <h1 className="font-[1000] leading-6 text-center mb-4">
          <span className="text-sm md:text-xl decoration-2 decoration-[#192946]">
            What Type of Place will guests have?
          </span>
        </h1>
        <hr className=" w-full  border-[#192946] border-opacity-20" />
        <h2 className="font-[700] text-[16px] text-opacity-80 text-center  text-slate-400 my-4  ">
          Choose what you are like to offer.
        </h2>
        {/* <div className="container flex justify-center flex-col"> */}
        <div className="grid grid-cols-2 md:grid-cols-3 col-auto gap-4 w-fit py-6 h-fit md:w-[520px] m-0 md:m-auto">
          {options?.map((option) => (
            <ListingOption
              key={option.href}
              {...option}
              className="px-1 text-center text-[8px] md:text-sm"
            />
          ))}
          {/* </div> */}
        </div>
      </div>
      {/* <div className={`nc-PageAddListing1 max-w-screen pb-4 mt-24`}>
        <div className="listingSection">
          <div className="bg-gray-100 min-h-screen">
            <main className=" flex border md:px-15">
              <div className="sm:block hidden w-48 text-center max-h-screen border-r-2">
                <button className="w-full p-4 bg-blue-600 text-white">
                  Choose Category
                </button>
              </div>
              <div className="max-w-3xl sm:ml-16 p-4 md:mt-8 md:p-8 mt-0  rounded-lg">
                <h1 className="text-sm md:xl font-[1000] leading-6 text-center mb-4">
                  <span className="decoration-2 decoration-[#192946]">
                    What Type of Place will guests have?
                  </span>
                </h1>
                <hr />
                  <section>
                    <h2 className="font-[700] text-[16px] text-opacity-80 text-center  text-slate-400 my-4  ">
                      Choose what you are like to offer.
                    </h2>
                    <div className="grid grid-cols-2 md:grid-cols-3 gap-4 md:gap-10 lg:justify-around text-center">
                      {options.map((option) => (
                        <ListingOption key={option.href} {...option} />
                      ))}
                    </div>
                  </section>
              </div>
            </main>
          </div>
        </div>
      </div> */}
    </>
  );
};
export default ListingCategoriesPage;
