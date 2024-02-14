'use client'

import React, { FC } from "react";
import SectionGridHasMap from "../../SectionGridHasMap";
import { useParams } from "next/navigation";
import SectionHeroArchivePage from "@/app/(server-components)/SectionHeroArchivePage";
import { PathName } from "@/routers/types";



const ListingStayMapPage = () => {
  const { id } = useParams()
  console.log(id);
  let room: "Room Stays" | "Experiences" | "Find Roommate" | "Time-Based" | "Hourly Rental Gear" | "Last Minutes" = 'Room Stays';
  switch (id) {
    case "1":
      room  = 'Room Stays'
      break;
    case "2":
      room = 'Experiences'
      break;
    case "3":
      room = 'Find Roommate'
      break;
    case "4": 
      room = 'Hourly Rental Gear'
      break;
    case "5":
      room = 'Last Minutes'
      break;
    case "6":
      room = 'Time-Based'
      break;
    default:
      room = 'Room Stays'
      break;
  }
  return (
    <>
      <div className="md:pb-14 pt-10 pb-2 md:pt-14 flex justify-center max-w-[100vw] bg-center bg-no-repeat bg-cover bg-mobile md:bg-rectangle">
          <SectionHeroArchivePage currentPage={room} currentTab={room} />
        </div>
      <div className="pb-24 lg:pb-28 md:ml-16">
        <SectionGridHasMap/>
      </div>
    </>
  );
};

export default ListingStayMapPage;
