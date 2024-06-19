import React, { FC } from "react";
import Image from "next/image";
import { DEMO_FLIGHT_LISTINGS } from "@/data/listings";
import { FlightDataType, StayDataType } from "@/data/types";
import SaleOffBadge from "@/components/SaleOffBadge";
import Badge from "@/shared/Badge";
import Flight from "@/images/flight.webp";
import Link from "next/link";

export interface FlightCard2Props {
  className?: string;
  data?: FlightDataType;
  nameFlight?: string;
  size?: "default" | "small";
  term?: string;
}

const DEMO_DATA = DEMO_FLIGHT_LISTINGS[0];

const FlightCard2: FC<FlightCard2Props> = ({
  size = "default",
  className = "",
  data = DEMO_DATA,
  nameFlight = "New York",
  term = "",
}) => {
  const {
    price,
    saleOff,
    airlines: { logo, name },
    id,
  } = data;

  const renderSliderGallery = () => {
    return (
      <div className="relative md:w-full w-[82vw]">
        <Link href={`/listing-stay-detail/${id}?term=${term}`}>
          <Image
            src={Flight}
            alt="vuelo"
            width={300}
            height={300}
            className="rounded-xl"
          />
          {saleOff && (
            <SaleOffBadge desc={saleOff} className="absolute left-3 top-3" />
          )}
        </Link>
      </div>
    );
  };

  const renderContent = () => {
    return (
      <div className={size === "default" ? "mt-3 space-y-3" : "mt-2 space-y-2"}>
        <div className="space-y-2">
          <span className="text-sm text-neutral-500">{nameFlight}</span>
          <div className="flex items-center  space-x-2 w-[280px] sm:w-full">
            {/* {isAds && <Badge name="ADS" color="green" />} */}
            <h2
              className={`font-semibold capitalize text-neutral-900 dark:text-white overflow-hidden ${
                size === "default" && "text-base"
              }`}
            >
              <span className="line-clamp-1 truncate">{nameFlight}</span>
            </h2>
          </div>
          <div className="flex items-center text-neutral-500 text-sm space-x-1.5">
            {size === "default" && (
              <Image src={logo} alt="logo" width={16} height={16} />
            )}
            <span className="">{name}</span>
          </div>
        </div>
        <div className="w-14 border-b border-neutral-100 dark:border-neutral-800"></div>
        <div className="flex justify-between items-center">
          <span className="text-base font-semibold">{price}!</span>
        </div>
      </div>
    );
  };

  return (
    <div className={`nc-FlightCard2 group relative mt-4 ${className}`}>
      {renderSliderGallery()}
      <Link href={`/listing-stay-detail/${id}?term=${term}`}>
        {renderContent()}
      </Link>
    </div>
  );
};

export default FlightCard2;
