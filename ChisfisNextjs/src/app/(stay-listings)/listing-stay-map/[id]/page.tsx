"use client";

import React, { FC, useState } from "react";
import SectionGridHasMap from "../../SectionGridHasMap";
import { useParams, useRouter } from "next/navigation";
import FilterBar from "@/app/(stay-listings)/FliterBar";
import { useSearchParams } from "next/navigation";
import { PropertyCategory } from "@/types/rentalItems";
// guests=1&checkIn=2024-04-02&checkOut=2024-05-07

type SearchParamType = {
  guests?: number;
  checkIn?: string;
  checkOut?: string;
  city?: string;
};

const ListingStayMapPage = () => {
  const router = useRouter();
  const { id } = useParams();
  const search = useSearchParams();
  // const categories:Array<PropertyCategory> = ['room_stays','time_based','hourly_rental_gear','find_roommate','last_minutes','experience']
  const [searchParams, setSearchParams] = useState<Partial<SearchParamType>>({
    guests: Number(search.get("guests")) || 1,
    checkIn: search.get("checkIn") || "",
    checkOut: search.get("checkOut") || "",
    city: search.get("city") || "",
  });
  // console.log(id);
  // let room:
  //   | "Room Stays"
  //   | "Experiences"
  //   | "Find Roommate"
  //   | "Time-Based"
  //   | "Hourly Rental Gear"
  //   | "Last Minutes" = "Room Stays";
  // switch (id) {
  //   case "1":
  //     room = "Room Stays";
  //     break;
  //   case "2":
  //     room = "Experiences";
  //     break;
  //   case "3":
  //     // room = 'Find Roommate'
  //     router.push("/partner");
  //     return null;
  //     break;
  //   case "4":
  //     room = "Hourly Rental Gear";
  //     break;
  //   case "5":
  //     room = "Last Minutes";
  //     break;
  //   case "6":
  //     room = "Time-Based";
  //     break;
  //   default:
  //     room = "Room Stays";
  //     break;
  // }
  return (
    <>
      <div className="w-full bg-slate-600 py-16">
        <FilterBar
          params={{
            guests: searchParams.guests || 1,
            city: searchParams.city || "",
            startDate: searchParams.checkIn
              ? new Date(searchParams.checkIn)
              : null,
            endDate: searchParams.checkOut
              ? new Date(searchParams.checkOut)
              : null,
          }}
          onParamChanges={(params) => {
            setSearchParams({
              guests: Number(params?.guests),
              city: params?.city || "",
              checkIn: params?.startDate
                ? params?.startDate?.toISOString().split("T")[0] || ""
                : "",
              checkOut: params?.endDate
                ? params?.endDate?.toISOString().split("T")[0] || ""
                : "",
            });
          }}
        />
      </div>
      <div className="container px-2">
        <SectionGridHasMap
          params={{
            ...searchParams,
          }}
        />
      </div>
    </>
  );
};

export default ListingStayMapPage;
