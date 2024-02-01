"use client";

import { ClockIcon, MapPinIcon } from "@heroicons/react/24/outline";
import React, { useState, useRef, useEffect, FC } from "react";
import ClearDataButton from "./ClearDataButton";

export interface LocationInputProps {
  placeHolder?: string;
  desc?: string;
  className?: string;
  divHideVerticalLineClass?: string;
  autoFocus?: boolean;
  inputs?: string;
  input?: string;
}

const LocationInput: FC<LocationInputProps> = ({
  autoFocus = false,
  desc = "Location",
  placeHolder = "Minamiuonuma, Niigata ?",
  className = "nc-flex-1.5",
  divHideVerticalLineClass = "left-10 -right-0.5",
  inputs = "",
  input = "",
}) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  const [value, setValue] = useState("");
  const [showPopover, setShowPopover] = useState(autoFocus);

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
              <span className="block text-neutral-400">
                
              </span>
              <span className="block font-medium text-neutral-700">
                {item}
              </span>
            </span>
          ))}
        </div>
      </>
    );
  };

  const renderSearchValue = () => {
    return (
      <>
        {[
          "Ha Noi, Viet Nam",
          "San Diego, CA",
          "Humboldt Park, Chicago, IL",
          "Bangor, Northern Ireland",
        ].map((item) => (
          <span
            onClick={() => handleSelectLocation(item)}
            key={item}
            className="flex px-4 sm:px-8 items-center space-x-3 sm:space-x-4 py-4 hover:bg-neutral-100 cursor-pointer"
          >
            <span className="block text-neutral-400">
              <ClockIcon className="h-4 w-4 sm:h-6 sm:w-6" />
            </span>
            <span className="block font-medium text-neutral-700">
              {item}
            </span>
          </span>
        ))}
      </>
    );
  };

  return (
    <div className={`relative flex ${className} mt-4`} ref={containerRef}>
      <div
        onClick={() => setShowPopover(true)}
        className={`flex z-10 flex-1 relative pl-4 md:pl-7 md:pr-0 xl:mr-4 lg:pr-3 flex-shrink-0 items-center space-x-1 cursor-pointer focus:outline-none text-left`}
      >
        <div className="flex-grow ">
          
            <span className={`block w-full bg-transparent border-none focus:ring-0 p-0 focus:outline-none xl:text-lg font-normal md:font-semibold placeholder-black truncate`}>
              {desc}
            </span>
            <input
              className={`flex flex-row ${inputs ? inputs : 'max-md:w-[85vw]'} border border-[#e5e7eb] focus:border-[#e5e7eb] focus:ring-0 focus:outline-none lg:p-[11px] md:p-[7px] ${input ? input : 'max-lg:w-[10vw]'} xl:p-[7px] w-full rounded-2xl mt-1 text-xs text-neutral-400 items-center justify-between leading-none font-light line-clamp-1`}
              placeholder={placeHolder}
              value={value}
              autoFocus={showPopover}
              onChange={(e) => {
                setValue(e.currentTarget.value);
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
        </div>
      </div>

      {showPopover && (
        <div
          className={`h-8 absolute self-center top-1/2 -translate-y-1/2 z-0 bg-white ${divHideVerticalLineClass}`}
        ></div>
      )}

      {showPopover && (
        <div className="absolute left-0 border border-gray-200 z-40 w-full min-w-[300px] sm:min-w-[500px] bg-white top-full mt-3 py-3 sm:py-6 rounded-3xl shadow-xl max-h-96 overflow-y-auto">
          {value ? renderSearchValue() : renderRecentSearches()}
        </div>
      )}
    </div>
  );
};

export default LocationInput;
