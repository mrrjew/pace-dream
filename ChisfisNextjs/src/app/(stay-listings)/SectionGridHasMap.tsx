"use client";

import React, { FC, useEffect, useState } from "react";
import AnyReactComponent from "@/components/AnyReactComponent/AnyReactComponent";
import SectionSliderGridHasMap from "@/components/SectionSliderGridHasMap";
import GoogleMapReact from "google-map-react";
import NoResult from "@/images/no-result.jpg";
// import {
//   DEMO_STAY_LISTINGS,
//   DEMO_LAST_LISTINGS,
//   DEMO_FLIGHT_LISTINGS,
//   DEMO_TIMEBASED_LISTINGS,
// } from "@/data/listings";
// import ButtonClose from "@/shared/ButtonClose";
import TabFilters from "./TabFilters";
import StayCard2 from "@/components/StayCard2";
// import { useSearchParams } from "next/navigation";
// import FlightCard2 from "@/components/FlightCard2";
// import { LastDataType, StayDataType, TimeBasedDataType } from "@/data/types";
import Image from "next/image";
import { useFetchData } from "@/hooks/useFetch";
import { RentableItem } from "@/types/rentalItems";

export interface SectionGridHasMapProps {
  guests?: number;
  checkIn?: string;
  checkOut?: string;
  city?: string;
}

const SectionGridHasMap: FC<{ params?: SectionGridHasMapProps }> = ({
  params,
}) => {
  const [currentHoverID, setCurrentHoverID] = useState<string | number>(-1);
  // const [showFullMapFixed, setShowFullMapFixed] = useState(false);
  const [map, setMap] = useState(true);
  // const searchParams = useSearchParams();
  // const option = searchParams.get("option");
  // const terms = searchParams.get("term");
  // const location = searchParams.get("location");
  // const guests = searchParams.get("guests");
  const { data, isLoading, refetch } = useFetchData<Array<RentableItem>>({
    endpoint: `/property/get-all-properties`,
    queryKey: ["properties"],
    queryParams: {
      // category:searchParams.get("category") || 'room_stays',
      ...(params || {}),
      guests: `${params?.guests || 1}`,
    },
  });

  useEffect(() => {
    refetch();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [params]);

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

  return (
    <div className="relative flex min-h-screen">
      <div className="min-h-screen w-full">
        <div className="py-6 flex">
          <TabFilters setMap={setMap} />
        </div>

        {/* loading grid cards */}
        {isLoading && (
          <div className="grid grid-cols-4 gap-8">
            {Array.from([1, 2, 3, 4]).map((item) => {
              return (
                <div
                  key={item}
                  className="w-full animate-pulse h-[360px] bg-white rounded-lg p-4"
                >
                  <div className="animate-pulse w-full h-[70%] bg-gray-300 rounded-lg"></div>
                  {/* item name and details */}
                  <div className="w-full h-1/3  p-4 px-2 rounded-b-lg">
                    <div className="w-3/4 h-3/4 animate-pulse bg-gray-300 rounded-lg mb-2"></div>
                    <div className="w-1/2 h-1/4 animate-pulse bg-gray-300 rounded-lg"></div>
                  </div>
                </div>
              );
            })}
          </div>
        )}

        {!isLoading && (
          <div
            className={`hidden md:grid md:${map ? "grid-cols-2" : "grid-cols-1"} gap-4`}
          >
            {/* empty data */}
            {data?.length == 0 && (
              <div className="w-full flex flex-col items-center h-max py-4">
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
              className={`grid ${map ? "col-span-1 grid-cols-2" : "col-span-2 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4"} gap-5`}
            >
              {data?.map((item) => (
                <div
                  key={item._id}
                  onMouseEnter={() => setCurrentHoverID(item?._id)}
                  onMouseLeave={() => setCurrentHoverID(-1)}
                  className="w-full"
                >
                  <StayCard2 data={item} />
                  {/* {item.details?.room_type === "long term" || item.details?.room_type === "short term" ? (
                          <StayCard2 data={item} />
                        ) : (
                          <>
                            {terms === "40" || terms === "30" || terms === "20" ? (
                              <>
                                <StayCard2 data={item} />
                                <FlightCard2
                                  data={DEMO_FLIGHT_LISTINGS.find(
                                    (i) => i.id === item?._id,
                                  )}
                                  term={terms}
                                />
                              </>
                            ) : (
                              <StayCard2 data={item} />
                            )}
                          </>
                        )} */}
                </div>
              ))}
            </div>

            {/* {!showFullMapFixed && (
              <div
                className={`flex md:hidden items-center justify-center fixed bottom-16 md:bottom-8 left-1/2 transform -translate-x-1/2 px-6 py-2 bg-neutral-900 text-white shadow-2xl rounded-full z-30 space-x-3 text-sm cursor-pointer`}
                onClick={() => setShowFullMapFixed(true)}
              >
                <i className="text-lg las la-map"></i>
                <span>Show map</span>
              </div>
            )} */}

            {/* desktop map */}
            {map && (
              <div className={`relative`}>
                {/* {showFullMapFixed && (
                  <ButtonClose
                    onClick={() => setShowFullMapFixed(false)}
                    className="bg-white absolute z-50 left-3 top-3 shadow-lg rounded-xl w-10 h-10"
                  />
                )} */}

                {Number(data?.length) > 0 && (
                  <div
                    className={`h-[74dvh] w-full sticky top-24 rounded-lg p-4 shadow-lg bg-slate-700`}
                  >
                    <GoogleMapReact
                      defaultZoom={12}
                      defaultCenter={{
                        // get the first none 0 lat and lng from the data
                        // lng: Number(data?.at(0)?.location?.longitude || 0) ||  -101.40066541876617,
                        // lat: Number(data?.at(0)?.location?.latitude || 0) || 39.771147263483414
                        lng:
                          data?.find((item) => item?.location?.longitude !== 0)
                            ?.location?.longitude || -101.40066541876617,
                        lat:
                          data?.find((item) => item?.location?.latitude !== 0)
                            ?.location?.latitude || 39.771147263483414,
                      }}
                      center={{
                        lat:
                          data?.find((item) => item?.location?.latitude !== 0)
                            ?.location?.latitude || 39.771147263483414,
                        lng:
                          data?.find((item) => item?.location?.longitude !== 0)
                            ?.location?.longitude || -101.40066541876617,
                      }}
                      bootstrapURLKeys={{
                        key: process.env.NEXT_PUBLIC_FIREBASE_API_KEY || "",
                      }}
                      yesIWantToUseGoogleMapApiInternals
                      style={{
                        height: "100%",
                        width: "100%",
                        borderRadius: "5rem",
                      }}
                    >
                      {!isLoading &&
                        data?.map((item) => (
                          <AnyReactComponent
                            isSelected={currentHoverID === item?._id}
                            key={item?._id}
                            lat={item?.location?.latitude || 0}
                            lng={item?.location?.longitude || 0}
                            listing={item}
                          />
                        ))}
                    </GoogleMapReact>
                  </div>
                )}
              </div>
            )}
          </div>
        )}

        {/* mobile view */}
        <div
          className={`flex flex-col md:hidden ${map ? "sm:grid-cols-2" : "sm:grid-cols-4"}`}
        >
          <SectionSliderGridHasMap data={data || []} />
          <div
            className={`w-[100vw] h-[100vw] rounded-md overflow-hidden mt-4 ${!map && "hidden"}`}
          >
            <GoogleMapReact
              defaultZoom={12}
              defaultCenter={{
                lat: data?.at(0)?.location?.latitude || 0,
                lng: data?.at(0)?.location?.longitude || 0,
              }}
              bootstrapURLKeys={{
                key: process.env.NEXT_PUBLIC_FIREBASE_API_KEY || "",
              }}
              yesIWantToUseGoogleMapApiInternals
            >
              {data?.map((item) => (
                <AnyReactComponent
                  isSelected={currentHoverID === item._id}
                  key={item._id}
                  lat={item?.location?.latitude || 0}
                  lng={item?.location?.longitude || 0}
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
