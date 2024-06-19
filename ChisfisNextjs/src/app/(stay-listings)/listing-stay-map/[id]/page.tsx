"use client";

import React, { FC } from "react";
import SectionGridHasMap from "../../SectionGridHasMap";
import { useParams, useRouter } from "next/navigation";
import FilterBar from "@/app/(stay-listings)/FliterBar";

const ListingStayMapPage = () => {
  const router = useRouter();
  const { id } = useParams();
  console.log(id);
  let room:
    | "Room Stays"
    | "Experiences"
    | "Find Roommate"
    | "Time-Based"
    | "Hourly Rental Gear"
    | "Last Minutes" = "Room Stays";
  switch (id) {
    case "1":
      room = "Room Stays";
      break;
    case "2":
      room = "Experiences";
      break;
    case "3":
      // room = 'Find Roommate'
      router.push("/partner");
      return null;
      break;
    case "4":
      room = "Hourly Rental Gear";
      break;
    case "5":
      room = "Last Minutes";
      break;
    case "6":
      room = "Time-Based";
      break;
    default:
      room = "Room Stays";
      break;
  }
  return (
    <>
      <div className="pb-14 lg:pb-18 mt-14 w-full lg:w-[90%] lg:mx-auto">
        <FilterBar />
      </div>
      <div className="pb-24 lg:pb-28 md:ml-16">
        <SectionGridHasMap />
      </div>
    </>
  );
};

export default ListingStayMapPage;
