"use client"
import React, { FC } from "react";
import GallerySlider from "@/components/GallerySlider";
// import { DEMO_STAY_LISTINGS } from "@/data/listings";
import BtnLikeIcon from "@/components/BtnLikeIcon";
import SaleOffBadge from "@/components/SaleOffBadge";
import Badge from "@/shared/Badge";
// import use from ""
import Link from "next/link";
import { RentableItem } from "@/types/rentalItems";
import { useRouter } from "next/navigation";

export interface StayCard2Props {
  className?: string;
  data?: RentableItem;
  size?: "default" | "small";
}

// const DEMO_DATA = DEMO_STAY_LISTINGS[0];

const StayCard2: FC<StayCard2Props> = ({
  size = "default",
  className = "",
  data,
}) => {

  const router = useRouter();
  const _prices = data?.price || [];
  // console.log('prices: ',_prices);
  const hasDiscount =_prices?.findIndex((item) => Number(item?.discounts?.length || 0) > 0) > -1;

  const renderSliderGallery = () => {
    return (
      // <>
      // {/* <img src="/Map.png" alt="" /> */}
      // <p>sjhbdvjvdh</p>
      // </>
      <div className="relative md:w-full w-full">
        <div 
        onClick={(e) => {
          // e.stopPropagation();
          router.push(`/listing-stay-detail/${data?._id}?term=${data?.details?.room_type}`);
        }}
        // href={`/listing-stay-detail/${data?._id}?term=${data?.details?.room_type}`}
        >
          <div className="cursor-pointer">
            <GallerySlider
              uniqueID={`StayCard2_${data?._id}`}
              ratioClass="aspect-w-12 aspect-h-11"
              galleryImgs={data?.gallery?.images || []}
              imageClass="rounded-lg"
            />
            <BtnLikeIcon
              
              isLiked={false}
              className="absolute right-3 top-3 z-[1]"
            />
              <SaleOffBadge desc={"10%"} className="absolute left-3 top-3" />
          </div>
        </div>
      </div>
    );
  };

  const renderContent = () => {
    // let priceNum;
    // let sharedNum;
    // if (data?.details?.room_type === "long term" || data?.details?.room_type === "short term") {
    //   if (shared !== undefined && price !== undefined) {
    //     priceNum = parseInt(price.replace("$", ""), 10);
    //     sharedNum = parseInt(shared, 10);
    //     sharedNum = sharedNum + 1;
    //   }
    // }
    // const isPriceArray = Array.isArray(data?.price);
 

    return (
      <div className={size === "default" ? "mt-3 space-y-3" : "mt-2 space-y-2"}>
        <div className="flex justify-between items-center">
          <span className={`text-base font-semibold ${hasDiscount ? 'line-through' :''}`}>
              {data?.price?.at(0)?.currency || 'USD'} {data?.price?.at(0)?.amount || 0}
              {` `}
              {size === "default" && (
                <span className="text-sm text-neutral-500 dark:text-neutral-400 font-normal">
                  / {data?.price?.at(0)?.frequency || "hour"}
                </span>
              )}
            </span>
           
          {
            <div className=" items-center p-2 bg-[#E8E8E8] flex justify-between w-24 rounded-[8px]">
              <p className="text-[14px] font-[600]">Stock</p>
              <div className=" w-3 h-3 rounded-full bg-green-700"></div>
            </div>
          }
        </div>

        <div className="space-y-2">
          <span className="text-sm text-neutral-500 capitalize">
             {data?.details?.property_type?.replaceAll('_',' ')} · {data?.details?.bedroom_count} {data?.details?.bedroom_count > 0 ? "Beds" :""}
            {/* {data?.details?.room_type === "long term" || data?.details?.room_type === "short term"
              ? "· " + shared + " beds occupied"
              : ""} */}
          </span>
          <div className="flex items-center  space-x-2 w-[280px] sm:w-full">
           <Badge name="ADS" color="green" />
            <h2
              className={`font-semibold capitalize text-neutral-900 dark:text-white overflow-hidden ${
                size === "default" && "text-base"
              }`}
            >
              <span className="line-clamp-1 truncate">{data?.title}</span>
            </h2>
          </div>
          <div className="flex items-center text-neutral-500 text-sm space-x-1.5">
            {size === "default" && (
              <svg
                className="h-4 w-4"
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
          <div className="w-14 border-b border-neutral-100 dark:border-neutral-800"></div>
        <button className=" bg-[#5527D7] text-white text-[16px] font-[400] rounded-[8px] flex justify-center items-center w-full py-2 px-4">
          Rent Now
        </button>
      </div>
    );
  };

  return (
    <div className={`nc-StayCard2 group w-full bg-white p-2 rounded-lg relative ${className} hover:shadow-2xl`}>
      {renderSliderGallery()}
      <Link href={`/listing-stay-detail/${data?._id}?term=${data?.details?.room_type}`}>
        {renderContent()}
      </Link>
    </div>
  );
};

export default StayCard2;
