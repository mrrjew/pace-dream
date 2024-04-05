import React, { FC } from "react";
import { DEMO_RENTAL_LISTING } from "@/data/listings";
import { StayDataType } from "@/data/types";
import BtnLikeIcon from "@/components/BtnLikeIcon";
import SaleOffBadge from "@/components/SaleOffBadge";
// import use from ""
import Link from "next/link";
import Image from "next/image";

export interface StayCard2Props {
  className?: string;
  data?: StayDataType;
  size?: "default" | "small";
  term?: string;
}

const gradientColors = [
  "#CEBDFF, #D3DAFF",
  "#BDFFCC, #D3FFEF",
  "#BDE7FF, #D3F7FF",
  "#FFD5BD, #FFF0D3",
  "#ff9a9e, #fad0c4",
  "#fdcbf1, #e6dee9",
  "#d4fc79, #96e6a1",
  "#cfd9df, #e2ebf0"
]

const DEMO_DATA = DEMO_RENTAL_LISTING[0];
const StayCard3: FC<StayCard2Props> = ({
  size = "default",
  className = "",
  data = DEMO_DATA,
  term = "",
}) => {
  const {
    image,
    listingCategory,
    address,
    title,
    bedrooms,
    shared,
    href,
    like,
    saleOff,
    isAds,
    price,
    stock,
    deposit,
    id,
  } = data;

  const renderSliderGallery = () => {
    const randomGradientIndex = Math.floor(Math.random() * gradientColors.length);
    const randomGradient = gradientColors[randomGradientIndex];
    return (
      // <>
      // {/* <img src="/Map.png" alt="" /> */}
      // <p>sjhbdvjvdh</p>
      // </>
      <div className="relative md:w-full w-[82vw]">
        <Link href={`/listing-stay-detail/${id}?term=${term}`}>
        {/* <GallerySlider
            uniqueID={`StayCard2_${id}`}
            ratioClass="aspect-w-12 aspect-h-11"
            galleryImgs={galleryImgs}
            imageClass="rounded-lg"
          /> */}
          <div className="border border-white rounded-[8px] relative">
              <div className="w-48 h-44 relative z-10">
                  <Image src={image} alt="img1" className="w-full h-full object-contain" width={100} height={100} />
              </div>
              <div 
                  className="top-0 w-full h-full absolute z-0 rounded-xl"
                  style={{
                      backgroundImage: `linear-gradient(to top right, ${randomGradient})`,
                      backgroundSize: 'cover',
                      backgroundPosition: 'center',
                  }}
              />
          </div>


          <div>

            <BtnLikeIcon
              isLiked={like}
              className="absolute right-1 bottom-1 z-[1]"
            />
          </div>
          {saleOff && (
            <SaleOffBadge desc={saleOff} className="absolute right-1 top-1 bg-orange-500" />
          )}
        </Link>
      </div>
    );
  };

  const renderContent = () => {
    let priceNum;
    let sharedNum;
    if (term === "long" || term === "short") {
      if (shared !== undefined && price !== undefined) {
        priceNum = parseInt(price.replace("$", ""), 10);
        sharedNum = parseInt(shared, 10);
        sharedNum = sharedNum + 1;
      }
    }
    return (
      // <>

      // <p>jhvdsjsjdh</p>
      // </>

      <div className={size === "default" ? "mt-3 space-y-3" : "mt-2 space-y-2"}>
        <div className="flex justify-between items-center">
          {term === "long" || term === "short" ? (
            <div>
              <span className="text-base font-semibold line-through">
                {price}
                {` `}
                {size === "default" && (
                  <span className="text-sm text-neutral-500 dark:text-neutral-400 font-normal">
                    /hour
                  </span>
                )}
              </span>
              {priceNum && sharedNum ? (
                <span className="text-base font-semibold">
                  {" "}
                  ${Math.round(priceNum / sharedNum)}
                  {` `}
                  <span className="text-sm text-neutral-500 dark:text-neutral-400 font-normal">
                    /person
                  </span>
                </span>
              ) : (
                ""
              )}
            </div>
          ) : (
            <span className="text-base font-semibold text-[#5527D7]">
              {price}
              {` `}
              {size === "default" && (
                <span className="text-sm text-neutral-500 dark:text-neutral-400 font-normal">
                  /hour
                </span>
              )}
            </span>
          )}
          {
            <div className=" items-center p-2 bg-[#E8E8E8] flex justify-between w-24 rounded-[8px]">
              <p className="text-[14px] font-[600]">Stock</p>
              <div className={`w-3 h-3 rounded-full ${stock===0 ?'bg-red-800':'bg-green-700'}`}>

              </div>
            </div>
          }
        </div>


        <div className="space-y-2">
          <div className="flex items-center  space-x-2 w-[280px] sm:w-full">
            <h2
              className={`font-semibold capitalize text-neutral-900 dark:text-white overflow-hidden ${
                size === "default" && "text-base"
              }`}
            >
              <span className="line-clamp-1 truncate">{title}</span>
            </h2>
          </div>
          <span className="text-xs text-neutral-400">
            {deposit} Refundable Deposit
          </span>
          {/* <div className="flex items-center text-neutral-500 text-sm space-x-1.5">
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
            
          </div> */}
        </div>
        <div className="w-14 border-b border-neutral-100 dark:border-neutral-800"></div>
        <button className=" bg-[#5527D7] text-white text-[16px] font-[400] rounded-[8px] flex justify-center items-center w-full py-2 px-4">
          Rent Now
        </button>
      </div>
    );
  };

  return (
    <div className={`nc-StayCard2 group relative ${className}`}>
      {renderSliderGallery()}
      <Link href={`/listing-stay-detail/${id}?term=${term}`}>
        {renderContent()}
      </Link>
    </div>
  );
};

export default StayCard3;
