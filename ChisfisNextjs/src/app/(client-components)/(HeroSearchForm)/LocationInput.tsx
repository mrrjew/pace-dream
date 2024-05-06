"use client";

import { ClockIcon, MapPinIcon } from "@heroicons/react/24/outline";
import React, { useState, useRef, useEffect, FC } from "react";
import ClearDataButton from "./ClearDataButton";
import PinDropIcon from '@mui/icons-material/PinDrop';

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

const LocationInput: FC<LocationInputProps> = ({
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
          fetch(`https://nominatim.openstreetmap.org/reverse?format=jsonv2&lat=${latitude}&lon=${longitude}`)
            .then(response => response.json())
            .then(data => {
              const address = data.address;
              let readableLocation = '';
  
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
                const district = address.suburb || address.county || address.city_district || '';
                readableLocation += `, ${district}`;
              }
  
              setReadableLocation(readableLocation);
            })
            .catch(error => {
              console.error('Error getting readable location:', error);
            });
        },
        (error) => {
          console.error('Error getting current location:', error);
        }
      );
    } else {
      console.error('Geolocation is not supported by this browser.');
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

  const renderRecentSearches = () => {
    return (
      <>
        <h3 className="block mt-2 sm:mt-0 px-4 sm:px-8 font-semibold text-base sm:text-lg text-neutral-800">
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
              className="flex px-4 sm:px-8 items-center space-x-3 sm:space-x-4 py-4 cursor-pointer"
            >
              <span className="block text-neutral-400"></span>
              <span className="block font-medium text-neutral-700">{item}</span>
            </span>
          ))}
        </div>
      </>
    );
  };

  const renderSearchValue = () => {
    return (
      <>
        {suggestions.map((item) => (
          <span
            onClick={() => handleSelectLocation(item)}
            key={item}
            className="flex px-4 sm:px-8 items-center space-x-3 sm:space-x-4 py-4 hover:bg-neutral-100 cursor-pointer"
          >
            <span className="block text-neutral-400">
              <ClockIcon className="h-4 w-4 sm:h-6 sm:w-6" />
            </span>
            <span className="block font-medium text-neutral-700">{item}</span>
          </span>
        ))}
      </>
    );
  };

  return (
    <div
      className={`relative flex rounded-xl h-[130px] ${className} ${typeInput}`}
      ref={containerRef}
    >
      <div
        onClick={() => setShowPopover(true)}
        className={`flex flex-1 h-[110px] relative pl-4 md:pl-7 md:pr-0 xl:mr-4 lg:pr-3 flex-shrink-0 items-center space-x-1 cursor-pointer focus:outline-none text-left`}
      >
        <div className="flex-grow ">
          <span
            className={`bg-transparent border-none focus:ring-0 p-1 focus:outline-none xl:text-base font-normal md: placeholder-black truncate ml-1`}
          >
            {desc}
          </span>
          <input
            className={`flex font-semibold ${inputs ? inputs : "max-md:w-[190px]"
              } border-none text-lg focus:ring-0 focus:outline-none lg:p-[9px] md:p-[5px] ${input ? input : "max-lg:[190px]"
              } xl:p-[5px] w-[190px] h-11 rounded-lg text-xl items-center justify-between leading-none line-clamp-1`}
            placeholder={placeHolder}
            value={value}
            autoFocus={showPopover}
            onChange={(e) => {
              handleInputChange(e);
            }}
            ref={inputRef}
          />
          {value && showPopover && (
            <ClearDataButton
              onClick={() => {
                setValue("");
              }}
            />
          )}
          {readableLocation && (
      <span className="absolute left-0 right-0 bottom-[0.5] bg-transparent px-4 sm:px-8 text-sm text-neutral-500">
        <MapPinIcon className="h-4 w-4 inline-block mr-0" />
        {readableLocation}
      </span>
      )}
        </div>
          <div className="absolute right-3 top-14 pt-3 transform -translate-y-1/2">
            <PinDropIcon />
          </div>
      </div>
      {showPopover && (
        <div
          className={`h-8 absolute self-center top-1/2 -translate-y-1/2 z-0 bg-white ${divHideVerticalLineClass}`}
        ></div>
      )}

      {showPopover && (
        <div className="absolute top-full mt-3 py-3 sm:py-6 rounded-3xl shadow-xl max-h-96 overflow-y-auto">
          {value ? renderSearchValue() : renderRecentSearches()}
        </div>
      )}

      

    </div>
  );
};

export default LocationInput;
