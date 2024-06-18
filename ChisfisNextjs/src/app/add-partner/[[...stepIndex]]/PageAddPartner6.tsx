"use client";

import LocationMarker from "@/components/AnyReactComponent/LocationMarker";
import GoogleMapReact from "google-map-react";
import React, { FC } from "react";

export interface pageAddPartner6Props {}

const pageAddPartner6: FC<pageAddPartner6Props> = () => {
  return (
    <>
      <div>
        <h2 className="text-2xl font-semibold">Where{'\''}s your place located?</h2>
        <p className="mt-4">
          Your address is only shared with guests after they’ve made a
          reservation.
        </p>
      </div>
      <div className="space-y-8">
        <div className="mt-4">
          <div className="aspect-w-5 aspect-h-5 sm:aspect-h-3">
            <div className="rounded-xl overflow-hidden">
              <GoogleMapReact
                bootstrapURLKeys={{
                  key: "AIzaSyAGVJfZMAKYfZ71nzL_v5i3LjTTWnCYwTY",
                }}
                yesIWantToUseGoogleMapApiInternals
                defaultZoom={15}
                defaultCenter={{
                  lat: 55.9607277,
                  lng: 36.2172614,
                }}
              >
                <LocationMarker lat={55.9607277} lng={36.2172614} />
              </GoogleMapReact>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default pageAddPartner6;
