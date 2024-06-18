"use client";

import React, { FC, useEffect, useState } from "react";
import AnyReactComponent from "@/components/AnyReactComponent/AnyReactComponent";
// import GoogleMapReact from "google-map-react";
import { DEMO_STAY_LISTINGS } from "@/data/listings";
import StayCard2 from "@/components/StayCard2";

const DEMO_STAYS = DEMO_STAY_LISTINGS.filter((_, i) => i < 6);
export interface SectionGridHasMapProps {}

const SectionGridHasMap: FC<SectionGridHasMapProps> = () => {
  const [currentHoverID, setCurrentHoverID] = useState<string | number>(-1);
  return (
    <div>
      <div className="relative flex flex-col">
        {/* CARDSSSS */}
        <div className="min-h-screen lg:flex-shrink-0  xl:px-8 ">
          <div className="grid grid-cols-1 justify-center lg:grid-cols-3 gap-x-5 2xl:gap-x-6 gap-y-8">
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
        </div>
        {/* <div className="xl:flex-1 xl:static xl:block inset-0">
          <div className="fixed xl:sticky top-0 xl:top-[88px] left-0 w-full h-full xl:h-[calc(100vh-88px)] rounded-md overflow-hidden"> */}

        {/* MAP */}
        {/* <div className="w-full mt-8 lg:mt-0">
          <div className="sm:w-80 h-[500px]  lg:w-full lg:h-full rounded-md overflow-hidden">
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
        </div> */}
      </div>
    </div>
  );
};

export default SectionGridHasMap;
