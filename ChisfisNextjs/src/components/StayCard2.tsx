"use client"
import React, { FC, useState, useEffect, useMemo } from "react";
import GallerySlider from "@/components/GallerySlider";
import { DEMO_STAY_LISTINGS } from "@/data/listings";
import { StayDataType } from "@/data/types";
import StartRating from "@/components/StartRating";
import BtnLikeIcon from "@/components/BtnLikeIcon";
import SaleOffBadge from "@/components/SaleOffBadge";
import Badge from "@/shared/Badge";
import Link from "next/link";
import {getStoredCurrency} from "@/utils/localStorageUtil";

export interface StayCard2Props {
  className?: string;
  data?: StayDataType;
  size?: "default" | "small";
  term?: string;
}

const DEMO_DATA = DEMO_STAY_LISTINGS[0];

const StayCard2: FC<StayCard2Props> = ({
  size = "default",
  className = "",
  data = DEMO_DATA,
  term = ""
}) => {


  const [rates, setRates] = useState<Record<string, number>>({});
  const [ratesFetched, setRatesFetched] = useState(false);
  const currency = getStoredCurrency();

  const [convertedAmount, setConvertedAmount] = useState<number | null>(null);

  const [key, setKey] = useState(0);

  useEffect(() => {
    const getRates = async () => {
      try {
        const storedRatesString = localStorage.getItem('exchangeRates');
        if (storedRatesString) {
          const storedRates = JSON.parse(storedRatesString);
          const { timestamp, data } = storedRates;

          const currentTime = new Date().getTime();
          const timeDifference = currentTime - timestamp;
          const hoursDifference = timeDifference / (1000 * 3600);

          if (hoursDifference < 24) {
            setRates(data);
            setRatesFetched(true);
            return;
          }
        }

        const response = await fetch(process.env.NEXT_PUBLIC_EXCHANGE_RATE_API_KEY!).then((res) => res.json());

        if (response.result === 'success') {
          const currentRates = response.conversion_rates;

          const currentTime = new Date().getTime();
          const newRatesData = { timestamp: currentTime, data: currentRates };
          localStorage.setItem('exchangeRates', JSON.stringify(newRatesData));

          setRates(currentRates);
          setRatesFetched(true);
        }
      } catch (error) {
        console.log('Error:', error);
      }
    };

    if (!ratesFetched) {
      getRates().then(r => r);
    }
  }, [ratesFetched, key]);

  useEffect(() => {
    setKey((prevKey) => prevKey + 1);
  }, []);

  const convert = useMemo(() => {
    return (amount: number, toCurrency: string) => {
      const rate = rates[toCurrency];
      setConvertedAmount(Math.round(amount * rate));
      return Math.round(amount * rate);
    };
  }, [rates]);


  useEffect(() => {
    if (ratesFetched) {
      const amountNum = parseInt(data.price.replace("$", ""), 10);
      const convertedAmountValue = convert(amountNum, currency);
      setConvertedAmount(convertedAmountValue);
    }
  }, [ratesFetched, data, convert, currency]);


  const convertedAmountStringWithCurrency = useMemo(() => {
    if (convertedAmount !== null) {
      return `${currency} ${convertedAmount}`;
    }
    return data.price;
  }, [convertedAmount, currency]);


  const {
    galleryImgs,
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
    reviewStart,
    reviewCount,
    id,
  } = data;

  const renderSliderGallery = () => {
    
    return (
      <div className="relative md:w-full w-[82vw]">
        <Link href={`/listing-stay-detail/${id}?term=${term}`}>
          <GallerySlider
            uniqueID={`StayCard2_${id}`}
            ratioClass="aspect-w-12 aspect-h-11"
            galleryImgs={galleryImgs}
            imageClass="rounded-lg"
          />
          <BtnLikeIcon isLiked={like} className="absolute right-3 top-3 z-[1]" />
          {saleOff && <SaleOffBadge desc={saleOff} className="absolute left-3 top-3" />}
        </Link>
      </div>
    );
  };

  const renderContent = () => {
    let priceNum;
    let sharedNum;
    if(term === "long" || term === "short"){
        if(shared !== undefined && convertedAmountStringWithCurrency !== undefined){
        priceNum = parseInt(convertedAmountStringWithCurrency.replace("$", ""), 10);
        sharedNum = parseInt(shared , 10)
        sharedNum = sharedNum + 1
      }
    }
    return (
      <div className={size === "default" ? "mt-3 space-y-3" : "mt-2 space-y-2"}>
        <div className="space-y-2">
          <span className="text-sm text-neutral-500">
            {listingCategory.name} · {bedrooms} beds {term === 'long' || term === 'short' ? '· ' + shared + ' beds occupied' : ''}
          </span>
          <div className="flex items-center  space-x-2 w-[280px] sm:w-full">
            {isAds && <Badge name="ADS" color="green" />}
            <h2
              className={`font-semibold capitalize text-neutral-900 dark:text-white overflow-hidden ${
                size === "default" && "text-base"
              }`}
            >
              <span className="line-clamp-1 truncate">{title}</span>
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
            <span className="">{address}</span>
          </div>
        </div>
        <div className="w-14 border-b border-neutral-100 dark:border-neutral-800"></div>
        <div className="flex justify-between items-center">
        {term === 'long' || term === 'short' ? (
          <div>
            <span className="text-base font-semibold line-through">
              {convertedAmountStringWithCurrency}
              {` `}
              {size === "default" && (
                <span className="text-sm text-neutral-500 dark:text-neutral-400 font-normal">
                  /night
                </span>
              )}
            </span>
            {priceNum && sharedNum ? (<span className="text-base font-semibold"> ${Math.round(priceNum / sharedNum)}{` `}<span className="text-sm text-neutral-500 dark:text-neutral-400 font-normal">
                  /person
                </span></span>) : ''}
            
          </div>
        ) : (
          <span className="text-base font-semibold">
            {convertedAmountStringWithCurrency}
            {` `}
            {size === "default" && (
              <span className="text-sm text-neutral-500 dark:text-neutral-400 font-normal">
                /night
              </span>
            )}
          </span>
        )}
          {!!reviewStart && (
            <StartRating reviewCount={reviewCount} point={reviewStart} />
          )}
        </div>
      </div>
    );
  };

  return (
    <div className={`nc-StayCard2 group relative ${className}`}>
      {renderSliderGallery()}
      <Link href={`/listing-stay-detail/${id}?term=${term}`}>{renderContent()}</Link>
    </div>
  );
};

export default StayCard2;
