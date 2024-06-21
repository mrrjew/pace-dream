"use client";

import React, { FC, useState } from "react";
import AnyReactComponent from "@/components/AnyReactComponent/AnyReactComponent";
import SectionSliderGridHasMap from "@/components/SectionSliderGridHasMap";
import GoogleMapReact from "google-map-react";
import NoResult from "@/images/no-result.jpg";
import {
  DEMO_STAY_LISTINGS,
  DEMO_LAST_LISTINGS,
  DEMO_FLIGHT_LISTINGS,
  DEMO_TIMEBASED_LISTINGS,
} from "@/data/listings";
import ButtonClose from "@/shared/ButtonClose";
import TabFilters from "./TabFilters";
import StayCard2 from "@/components/StayCard2";
import { useSearchParams } from "next/navigation";
import FlightCard2 from "@/components/FlightCard2";
import { LastDataType, StayDataType, TimeBasedDataType } from "@/data/types";
import Image from "next/image";

export interface SectionGridHasMapProps {}

const SectionGridHasMap: FC<SectionGridHasMapProps> = () => {
  const [currentHoverID, setCurrentHoverID] = useState<string | number>(-1);
  const [showFullMapFixed, setShowFullMapFixed] = useState(false);
  const [map, setMap] = useState(true);
  const searchParams = useSearchParams();
  const option = searchParams.get("option");
  const terms = searchParams.get("term");
  const location = searchParams.get("location");
  const guests = searchParams.get("guests");

  function filterListings(listings: any, { guests, location, terms }: any) {
    return listings.filter((listing: any) => {
      const matchesAddress = location
        ? listing.address.toLowerCase().includes(location.toLowerCase())
        : true;
      const matchesGuests = guests
        ? listing.maxGuests === parseInt(guests)
        : true;
      const matchesTerm = terms ? listing.term === terms : true;

      return matchesAddress && matchesGuests && matchesTerm;
    });
  }

  // Filter the listings
  const DEMO_STAYS = filterListings(DEMO_STAY_LISTINGS, {
    guests,
    location,
    terms,
  });

  return (
    <div className="relative flex min-h-screen">
      <div className="min-h-screen w-full md:w-[90vw]">
        <div className="mb-8 lg:mb-11 md:w-[90vw] w-[98vw] flex ml-5 md:ml-0">
          <TabFilters setMap={setMap} />
        </div>
        <div
          className={`hidden md:flex flex-row w-[90vw] ${map ? "h-[92vw]" : "h-full"} `}
        >
          {DEMO_STAYS.length == 0 && (
            <div className="w-full flex flex-col items-center h-max py-40">
              <Image
                src={NoResult}
                alt="not found"
                width={600}
                height={600}
                className="rounded-md text-center"
              />
              <h1 className="text-gray-600 text-2xl my-8 font-rubik">
                No Result Found
              </h1>
            </div>
          )}
          <div
            className={`hidden md:grid grid-cols-1 ${map ? "sm:grid-cols-2" : "sm:grid-cols-4"} gap-x-5 2xl:gap-x-6 gap-y-8 ${map ? "max-w-[45vw]" : "max-w-[90vw]"} ${map ? "overflow-y-auto scrollbar-webkit scrollbar-thin" : "overflow-y-hidden"}`}
          >
            {DEMO_STAYS.map((item: StayDataType) => (
              <div
                key={item.id}
                onMouseEnter={() => setCurrentHoverID(item.id)}
                onMouseLeave={() => setCurrentHoverID(-1)}
                className="pr-4"
              >
                {terms === "long" || terms === "short" ? (
                  <StayCard2 data={item} term={terms} />
                ) : (
                  <>
                    {terms === "40" || terms === "30" || terms === "20" ? (
                      <>
                        <StayCard2 data={item} term={terms} />
                        <FlightCard2
                          data={DEMO_FLIGHT_LISTINGS.find(
                            (i) => i.id === item.id,
                          )}
                          term={terms}
                        />
                      </>
                    ) : (
                      <StayCard2 data={item} />
                    )}
                  </>
                )}
              </div>
            ))}
          </div>
          {!showFullMapFixed && (
            <div
              className={`flex md:hidden items-center justify-center fixed bottom-16 md:bottom-8 left-1/2 transform -translate-x-1/2 px-6 py-2 bg-neutral-900 text-white shadow-2xl rounded-full z-30 space-x-3 text-sm cursor-pointer`}
              onClick={() => setShowFullMapFixed(true)}
            >
              <i className="text-lg las la-map"></i>
              <span>Show map</span>
            </div>
          )}
          <div
            className={`${showFullMapFixed ? "fixed inset-0 z-50" : "block"}`}
          >
            {showFullMapFixed && (
              <ButtonClose
                onClick={() => setShowFullMapFixed(false)}
                className="bg-white absolute z-50 left-3 top-3 shadow-lg rounded-xl w-10 h-10"
              />
            )}
            <div
              className={`w-full md:w-[45vw] md:pr-12 xl:pr-0 h-full rounded-md overflow-hidden ml-8 ${!map && "hidden"}`}
            >
              <GoogleMapReact
                defaultZoom={12}
                defaultCenter={DEMO_STAYS[0]?.map}
                bootstrapURLKeys={{
                  key: "AIzaSyAGVJfZMAKYfZ71nzL_v5i3LjTTWnCYwTY",
                }}
                yesIWantToUseGoogleMapApiInternals
              >
                {DEMO_STAYS.map((item: StayDataType) => (
                  <AnyReactComponent
                    isSelected={currentHoverID === item.id}
                    key={item.id}
                    lat={item.map.lat}
                    lng={item.map.lng}
                    listing={item}
                  />
                ))}
              </GoogleMapReact>
            </div>
          </div>
        </div>
        <div
          className={`flex flex-col md:hidden ${map ? "sm:grid-cols-2" : "sm:grid-cols-4"}`}
        >
          <SectionSliderGridHasMap />
          <div
            className={`w-[100vw] h-[100vw] rounded-md overflow-hidden mt-4 ${!map && "hidden"}`}
          >
            <GoogleMapReact
              defaultZoom={12}
              defaultCenter={DEMO_STAYS[0]?.map}
              bootstrapURLKeys={{
                key: "AIzaSyAGVJfZMAKYfZ71nzL_v5i3LjTTWnCYwTY",
              }}
              yesIWantToUseGoogleMapApiInternals
            >
              {DEMO_STAYS.map((item: StayDataType) => (
                <AnyReactComponent
                  isSelected={currentHoverID === item.id}
                  key={item.id}
                  lat={item.map.lat}
                  lng={item.map.lng}
                  listing={item}
                />
              ))}
            </GoogleMapReact>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SectionGridHasMap;
