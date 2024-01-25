"use client";

import React, { FC, useState } from "react";
import AnyReactComponent from "@/components/AnyReactComponent/AnyReactComponent";
import GoogleMapReact from "google-map-react";
import { DEMO_STAY_LISTINGS } from "@/data/listings";
import ButtonClose from "@/shared/ButtonClose";
import TabFilters from "./TabFilters";
import StayCard2 from "@/components/StayCard2";

const DEMO_STAYS = DEMO_STAY_LISTINGS.filter((_, i) => i < 12);
export interface SectionGridHasMapProps {}

const SectionGridHasMap: FC<SectionGridHasMapProps> = () => {
  const [currentHoverID, setCurrentHoverID] = useState<string | number>(-1);
  const [showFullMapFixed, setShowFullMapFixed] = useState(false);
  const [map, setMap] = useState(true);

  return (
      <div className="relative flex min-h-screen">
        <div className="min-h-screen w-full md:w-[90vw]">
          <div className="mb-8 lg:mb-11 md:w-[90vw] flex">
            <TabFilters setMap={setMap}/>
          </div>
          <div className={`flex flex-row w-[90vw] ${map ? 'h-[92vw]' : 'h-full'} `}>
            <div className={`grid grid-cols-1 ${map ? 'sm:grid-cols-2' : 'sm:grid-cols-4'} gap-x-5 2xl:gap-x-6 gap-y-8 ${map ? 'max-w-[45vw]' : 'max-w-[90vw]'} ${map ? 'overflow-y-auto' : 'overflow-y-hidden'}`}>
              {DEMO_STAYS.map((item) => (
                <div
                  key={item.id}
                  onMouseEnter={() => setCurrentHoverID((_) => item.id)}
                  onMouseLeave={() => setCurrentHoverID((_) => -1)}
                >
                  <StayCard2 data={item} />
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
          className={`${
            showFullMapFixed ? "fixed inset-0 z-50" : "block"
          }`}
        >
          {showFullMapFixed && (
            <ButtonClose
              onClick={() => setShowFullMapFixed(false)}
              className="bg-white absolute z-50 left-3 top-3 shadow-lg rounded-xl w-10 h-10"
            />
          )}
          <div className={`w-full md:w-[45vw] md:pr-12 xl:pr-0 h-full rounded-md overflow-hidden ml-8 ${!map && 'hidden'}`}>
            <GoogleMapReact
              defaultZoom={12}
              defaultCenter={DEMO_STAYS[0].map}
              bootstrapURLKeys={{
                key: "AIzaSyAGVJfZMAKYfZ71nzL_v5i3LjTTWnCYwTY",
              }}
              yesIWantToUseGoogleMapApiInternals
            >
              {DEMO_STAYS.map((item) => (
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
  </div>
  );
};

export default SectionGridHasMap;
