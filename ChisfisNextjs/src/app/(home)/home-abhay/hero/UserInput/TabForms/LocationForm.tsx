import { ClockIcon, MapPinIcon } from "@heroicons/react/24/outline";
import React, { useState, useRef, useEffect, FC } from "react";
import ClearDataButton from "@/app/(client-components)/(HeroSearchForm)/ClearDataButton";
import PinDropIcon from "@mui/icons-material/PinDrop";
import Image from "next/image";
import { LocationIconImage } from "public/assetsManager";

export interface LocationInputProps {
  placeHolder?: string;
  desc?: string;
  className?: string;
  divHideVerticalLineClass?: string;
  autoFocus?: boolean;
  inputs?: string;
  input?: string;
  typeInput?: string;
}

const LocationForm: FC<LocationInputProps> = ({
  autoFocus = false,
  desc = "Location",
  placeHolder = "Select Location",
  className = "nc-flex-1.5",
  divHideVerticalLineClass = "left-10 -right-0.5",
  inputs = "",
  input = "",
  typeInput = "",
}) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);
  const [value, setValue] = useState("");
  const [showPopover, setShowPopover] = useState(autoFocus);
  const [suggestions, setSuggestions] = useState<string[]>([]);
  const [currentLocation, setCurrentLocation] = useState<string | null>(null);
  const [readableLocation, setReadableLocation] = useState<string | null>(null);

  useEffect(() => {
    setShowPopover(autoFocus);
  }, [autoFocus]);

  useEffect(() => {
    if (eventClickOutsideDiv) {
      document.removeEventListener("click", eventClickOutsideDiv);
    }
    showPopover && document.addEventListener("click", eventClickOutsideDiv);
    return () => {
      document.removeEventListener("click", eventClickOutsideDiv);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [showPopover]);

  useEffect(() => {
    if (showPopover && inputRef.current) {
      inputRef.current.focus();
    }
  }, [showPopover]);

  useEffect(() => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          const { latitude, longitude } = position.coords;
          setCurrentLocation(`Latitude: ${latitude}, Longitude: ${longitude}`);

          // Reverse Geocoding to get human-readable address
          fetch(
            `https://nominatim.openstreetmap.org/reverse?format=jsonv2&lat=${latitude}&lon=${longitude}`
          )
            .then((response) => response.json())
            .then((data) => {
              const address = data.address;
              let readableLocation = "";

              if (address.city) {
                readableLocation = address.city;
              } else if (address.town) {
                readableLocation = address.town;
              } else if (address.village) {
                readableLocation = address.village;
              } else if (address.hamlet) {
                readableLocation = address.hamlet;
              }

              // Append state or country if available
              if (address.state) {
                readableLocation += ` ${address.state}`;
              } else if (address.country) {
                readableLocation += `, ${address.country}`;
              }

              // Slice pincode and district
              if (address.postcode) {
                // const pincode = address.postcode;
                const district =
                  address.suburb ||
                  address.county ||
                  address.city_district ||
                  "";
                readableLocation += `, ${district}`;
              }

              setReadableLocation(readableLocation);
            })
            .catch((error) => {
              console.error("Error getting readable location:", error);
            });
        },
        (error) => {
          console.error("Error getting current location:", error);
        }
      );
    } else {
      console.error("Geolocation is not supported by this browser.");
    }
  }, []);

  const eventClickOutsideDiv = (event: MouseEvent) => {
    if (!containerRef.current) return;
    // CLICK IN_SIDE
    if (!showPopover || containerRef.current.contains(event.target as Node)) {
      return;
    }
    // CLICK OUT_SIDE
    setShowPopover(false);
  };

  const handleSelectLocation = (item: string) => {
    setValue(item);
    setShowPopover(false);
  };

  const handleInputChange = (e: any) => {
    const inputValue = e.currentTarget.value;
    setValue(inputValue);
    const filteredSuggestions = [
      "Hamptons, Suffolk County, NY",
      "Las Vegas, NV, United States",
      "Ueno, Taito, Tokyo",
      "Ikebukuro, Toshima, Tokyo",
      "New York City",
      "Los Angeles",
      "Chicago",
      "Houston",
      "Phoenix",
      "Philadelphia",
      "San Antonio",
      "San Diego",
      "Dallas",
      "San Jose",
      "Austin",
      "Jacksonville",
      "San Francisco",
      "Indianapolis",
      "Columbus",
      "Fort Worth",
      "Charlotte",
      "Seattle",
      "Denver",
      "El Paso",
      "Detroit",
      "Washington, D.C.",
      "Boston",
      "Memphis",
      "Nashville",
      "Portland",
      "Oklahoma City",
      "Las Vegas",
      "Baltimore",
      "Louisville",
      "Milwaukee",
      "Albuquerque",
      "Tucson",
      "Fresno",
      "Sacramento",
      "Kansas City",
      "Long Beach",
      "Mesa",
      "Atlanta",
      "Colorado Springs",
      "Virginia Beach",
      "Raleigh",
      "Omaha",
      "Miami",
      "Oakland",
      "Minneapolis",
      "Tulsa",
      "Wichita",
      "New Orleans",
      "Arlington",
      "Tokyo",
      "Yokohama",
      "Osaka",
      "Nagoya",
      "Sapporo",
      "Fukuoka",
      "Kobe",
      "Kyoto",
      "Kawasaki",
      "Saitama",
      "Hiroshima",
      "Sendai",
      "Chiba",
      "Kitakyushu",
      "Nara",
      "Shizuoka",
      "Kumamoto",
      "Okayama",
      "Nagasaki",
      "Kagoshima",
      "Kanazawa",
      "Kochi",
      "Akita",
      "Naha",
      "Oita",
      "London",
      "Paris",
      "Berlin",
      "Madrid",
      "Rome",
      "Moscow",
      "Vienna",
      "Amsterdam",
      "Dublin",
      "Brussels",
      "Munich",
      "Zurich",
      "Stockholm",
      "Oslo",
      "Copenhagen",
      "Athens",
      "Prague",
      "Warsaw",
      "Budapest",
      "Lisbon",
      "Helsinki",
      "Bratislava",
      "Ljubljana",
      "Luxembourg City",
      "Reykjavik",
      "Birmingham",
      "Manchester",
      "Glasgow",
      "Liverpool",
      "Newcastle",
      "Sheffield",
      "Bristol",
      "Leeds",
      "Edinburgh",
      "Leicester",
      "Coventry",
      "Belfast",
      "Cardiff",
      "Nottingham",
      "Southampton",
      "Aberdeen",
      "Portsmouth",
      "York",
      "Cambridge",
      "Oxford",
      "Dundee",
      "Inverness",
      "Brighton",
      "Plymouth",
    ].filter((place) => place.toLowerCase().includes(inputValue.toLowerCase()));
    setSuggestions(filteredSuggestions);
  };

  const RenderRecentSearches = () => {
    return (
      <>
        <h3 className="block px-4 mt-2 text-base font-semibold sm:mt-0 sm:px-8 sm:text-lg text-neutral-800">
          Recent searches
        </h3>
        <div className="mt-2">
          {[
            "Hamptons, Suffolk County, NY",
            "Las Vegas, NV, United States",
            "Ueno, Taito, Tokyo",
            "Ikebukuro, Toshima, Tokyo",
          ].map((item) => (
            <span
              onClick={() => handleSelectLocation(item)}
              key={item}
              className="flex items-center px-4 py-4 space-x-3 cursor-pointer sm:px-8 sm:space-x-4"
            >
              <span className="block text-neutral-400"></span>
              <span className="block font-medium text-neutral-700">{item}</span>
            </span>
          ))}
        </div>
      </>
    );
  };

  const RenderSearchValue = () => {
    return (
      <>
        {suggestions.map((item) => (
          <span
            onClick={() => handleSelectLocation(item)}
            key={item}
            className="flex items-center px-4 py-4 space-x-3 cursor-pointer sm:px-8 sm:space-x-4 hover:bg-neutral-100 "
          >
            <span className="block text-neutral-400">
              <ClockIcon className="w-4 h-4 sm:h-6 sm:w-6" />
            </span>
            <span className="block font-medium text-neutral-700">{item}</span>
          </span>
        ))}
      </>
    );
  };

  return (
    <div
      className={` p-[1rem] relative flex rounded-[.7rem]  ${className} ${typeInput}`}
      ref={containerRef}
    >
      <div
        onClick={() => setShowPopover(true)}
        className={`flex  h-[100%] items-center  relative  flex-shrink-0 items-center  cursor-pointer focus:outline-none text-left`}
      >
        <div className="">
          <div className={` font-rubik text-[.6rem] font-[400] `}>{desc}</div>
          <div className="relative flex ">
            <input
              className={`flex p-0  bg-transparent border-none text-[1.13rem] font-rubik font-[700] placeholder:text-black text-black  focus:ring-0 focus:outline-none w-[9.2rem] h-[2rem]  line-clamp-1`}
              placeholder={placeHolder}
              value={value}
              autoFocus={showPopover}
              onChange={(e) => {
                handleInputChange(e);
              }}
              ref={inputRef}
            />
            <div className="flex items-center ">
              <Image
                src={LocationIconImage}
                alt="location"
                className=" w-[1.02rem] "
              />
              {/* <PinDropIcon className=" text-[1.2rem] " /> */}
            </div>
            {value && showPopover && (
              <div className=" absolute right-[.5rem] top-[1rem] ">
                <ClearDataButton
                  onClick={() => {
                    setValue("");
                  }}
                />
              </div>
            )}
          </div>
          <div className=" min-h-[1rem] ">
            {readableLocation && (
              <div className="flex gap-[.2rem] leading-[.7rem] text-neutral-500">
                <MapPinIcon className=" w-[.5rem] " />
                <div className=" font-rubik text-[.6rem] font-[400]  w-[10rem] line-clamp-1 ">
                  {readableLocation}
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
      {/* {showPopover && (
        <div
          className={`h-8 absolute self-center top-1/2 -translate-y-1/2 z-0 bg-white ${divHideVerticalLineClass}`}
        ></div>
      )} */}

      {showPopover && (
        <div className="absolute  py-3 mt-[7.5rem] ml-[-1rem] overflow-y-auto bg-white shadow-xl  sm:py-6 rounded-[.5rem] max-h-[20rem] w-[15rem] ">
          {value ? <RenderSearchValue /> : <RenderRecentSearches />}
        </div>
      )}
    </div>
  );
};

export default LocationForm;
