import React, { FC } from "react";
// import { DEMO_STAY_LISTINGS } from "@/data/listings";
// import { StayDataType } from "@/data/types";
import StartRating from "@/components/StartRating";
import BtnLikeIcon from "@/components/BtnLikeIcon";
import SaleOffBadge from "@/components/SaleOffBadge";
import Badge from "@/shared/Badge";
import Link from "next/link";
import GallerySlider from "./GallerySlider";
import { RentableItem } from "@/types/rentalItems";

export interface StayCardProps {
  className?: string;
  data?: RentableItem;
  size?: "default" | "small";
}

// const DEMO_DATA = DEMO_STAY_LISTINGS[0];

const StayCard: FC<StayCardProps> = ({
  size = "default",
  className = "",
  data,
}) => {

  const renderSliderGallery = () => {
    return (
      <div className="relative w-full">
        <GallerySlider
          uniqueID={`StayCard_${data?._id}`}
          ratioClass="aspect-w-4 aspect-h-3 "
          galleryImgs={data?.gallery?.images || []}
          href={'/listing-stay-detail/' + data?._id}
          galleryClass={size === "default" ? undefined : ""}
        />
        <BtnLikeIcon isLiked={false} className="absolute right-3 top-3 z-[1]" />
        <SaleOffBadge className="absolute left-3 top-3"  desc="10%"/>
      </div>
    );
  };

  const renderContent = () => {
    return (
      <div className={size === "default" ? "p-4 space-y-4" : "p-3 space-y-1"}>
        <div className={size === "default" ? "space-y-2" : "space-y-1"}>
          <span className="text-sm text-neutral-500 dark:text-neutral-400 capitalize">
            {data?.details?.property_type}  {data?.details.bathroom_count} {data?.details.bathroom_count > 0 ?'Beds':""}
          </span>
          <div className="flex items-center space-x-2">
            <Badge name="ADS" color="green" />
            <h2
              className={`font-semibold capitalize text-neutral-900 dark:text-white ${
                size === "default" ? "text-base" : "text-base"
              }`}
            >
              <span className="line-clamp-1">{data?.title}</span>
            </h2>
          </div>
          <div className="flex items-center text-neutral-500 dark:text-neutral-400 text-sm space-x-1.5">
            {size === "default" && (
              <svg
                className="w-4 h-4"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={1.5}
                  d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                />
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={1.5}
                  d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                />
              </svg>
            )}
            <span className="">{data?.location?.city}</span>
          </div>
        </div>
        <div className="border-b w-14 border-neutral-100 dark:border-neutral-800"></div>
        <div className="flex items-center justify-between">
          <span className="text-base font-semibold">
            {data?.price?.at(0)?.currency || "USD"} {' '} {data?.price?.at(0)?.amount || 0}
            {` `}
              <span className="text-sm font-normal text-neutral-500 dark:text-neutral-400">
                / {data?.price?.at(0)?.frequency || "hour"}
              </span>
          </span>
            <StartRating reviewCount={data?.rating || 0} point={data?.rating||0} />
        </div>
      </div>
    );
  };

  return (
    <div
      className={`nc-StayCard group relative bg-white dark:bg-neutral-900 ${
        size === "default"
          ? "border border-neutral-100 dark:border-neutral-800 "
          : ""
      } rounded-2xl overflow-hidden hover:shadow-xl transition-shadow ${className}`}
      data-nc-id="StayCard"
    >
      {renderSliderGallery()}
      <Link  href={'/listing-stay-detail/' + data?._id as any}>{renderContent()}</Link>
    </div>
  );
};

export default StayCard;
