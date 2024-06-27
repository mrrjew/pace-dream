"use client";

import React, { FC, useEffect, useState } from "react";
import Heading from "@/shared/Heading";
import { AnimatePresence, motion, MotionConfig } from "framer-motion";
import { useSwipeable } from "react-swipeable";
import PrevBtn from "./PrevBtn";
import NextBtn from "./NextBtn";
import { variants } from "@/utils/animationVariants";
import { useWindowSize } from "react-use";
import { DEMO_STAY_LISTINGS } from "@/data/listings";
import { StayDataType } from "@/data/types";
import StayCard from "./StayCard";
import StayCard2 from "./StayCard2";

const DEMO_DATA: StayDataType[] = DEMO_STAY_LISTINGS.filter((_, i) => i < 18);
export type Tab =
  | "Tech Gadgets"
  | "Musical Instruments"
  | "Photography"
  | "Fashion";

export interface SectionSliderHourlyPlaces {
  className?: string;
  itemClassName?: string;
  heading?: string;
  subHeading?: string;
  categories?: StayDataType[];
  categoryCardType?: "card1" | "card2" | "card3" | "card4" | "card5";
  itemPerRow?: 1 | 4 | 5;
  sliderStyle?: "style1" | "style2";
  currentTab?: Tab;
}

const SectionSliderHourlyPlaces: FC<SectionSliderHourlyPlaces> = ({
  heading = "Hourly Rental Gear",
  subHeading = "",
  className = "",
  itemClassName = "",
  categories = DEMO_DATA,
  itemPerRow = 1,
  categoryCardType = "card2",
  sliderStyle = "style1",
  currentTab = "Tech Gadgets",
}) => {
  const tabs: Tab[] = [
    "Tech Gadgets",
    "Musical Instruments",
    "Photography",
    "Fashion",
  ];
  const [tabActive, setTabActive] = useState<Tab>(currentTab);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [direction, setDirection] = useState(0);
  const [numberOfItems, setNumberOfitem] = useState(0);
  const windowWidth = useWindowSize().width;
  useEffect(() => {
    if (windowWidth < 320) {
      return setNumberOfitem(1);
    }
    if (windowWidth < 500) {
      return setNumberOfitem(itemPerRow - 3);
    }
    if (windowWidth < 1024) {
      return setNumberOfitem(itemPerRow - 2);
    }
    if (windowWidth < 1280) {
      return setNumberOfitem(itemPerRow - 1);
    }

    setNumberOfitem(itemPerRow);
  }, [itemPerRow, windowWidth]);

  function changeItemId(newVal: number) {
    if (newVal > currentIndex) {
      setDirection(1);
    } else {
      setDirection(-1);
    }
    setCurrentIndex(newVal);
  }

  const handlers = useSwipeable({
    onSwipedLeft: () => {
      if (currentIndex < categories?.length - 1) {
        changeItemId(currentIndex + 1);
      }
    },
    onSwipedRight: () => {
      if (currentIndex > 0) {
        changeItemId(currentIndex - 1);
      }
    },
    trackMouse: true,
  });

  const renderCard = (item: StayDataType) => {
    let CardName = StayCard2;
    switch (categoryCardType) {
      case "card1":
        CardName = StayCard2;
        break;
      case "card2":
        CardName = StayCard2;
        break;
      default:
        CardName = StayCard2;
    }
    // return <CardName key={item.id} data={item} />;
    return <></>
  };

  if (!numberOfItems) return null;

  return (
    <div className={` md:px-24 ${className} inline-block`}>
      <Heading
        desc={subHeading}
        isCenter={sliderStyle === "style2"}
        className="w-[80vw] ml-4 mb-8"
      >
        {heading}
      </Heading>
      <ul className="ml-4 md:ml-8 flex space-x-5 sm:space-x-8 lg:space-x-11 overflow-x-auto hiddenScrollbar">
        {tabs.map((tab) => {
          const active = tab === tabActive;
          return (
            <li
              onClick={() => setTabActive(tab)}
              className={`flex-shrink-0 flex items-center cursor-pointer text-base md:text-sm font-medium ${
                active
                  ? "text-violet pb-8"
                  : "text-neutral-500 hover:text-violet pb-8"
              } `}
              key={tab}
            >
              <span>{tab}</span>
            </li>
          );
        })}
      </ul>
      <ul className="ml-4 md:ml-8 flex space-x-5 sm:space-x-8 lg:space-x-11 overflow-x-auto hiddenScrollbar ">
        <div className="flex justify-center items-center mb-8">
          {tabs.map((tab, i) => {
            const active = tab === tabActive;
            if (i === 0) {
              return (
                <div
                  key={tab}
                  className={` md:w-[100px] w-[75px] h-0.5 ${
                    active ? "bg-[#632DF8] " : "bg-[#EAEBF0]"
                  }`}
                />
              );
            } else if (i === 1) {
              return (
                <div
                  key={tab}
                  className={` md:w-[85px] w-[50px] h-0.5 ${
                    active ? "bg-[#632DF8] " : "bg-[#EAEBF0]"
                  }`}
                />
              );
            } else if (i === 2) {
              return (
                <div
                  key={tab}
                  className={` md:w-[140px] w-[70px] h-0.5 ${
                    active ? "bg-[#632DF8] " : "bg-[#EAEBF0]"
                  }`}
                />
              );
            } else if (i === 3) {
              return (
                <div
                  key={tab}
                  className={` md:w-[140px] w-[70px] h-0.5 ${
                    active ? "bg-[#632DF8] " : "bg-[#EAEBF0]"
                  }`}
                />
              );
            } else {
              return null;
            }
          })}
        </div>
      </ul>
      <MotionConfig
        transition={{
          x: { type: "spring", stiffness: 300, damping: 30 },
          opacity: { duration: 0.2 },
        }}
      >
        <div className={`relative flow-root ml-2 `} {...handlers}>
          <div className={`flow-root overflow-hidden p-2 rounded-xl`}>
            <motion.ul
              initial={false}
              className="relative whitespace-nowrap -mx-2 xl:-mx-4 w-max-[630px] w-[90vw]"
            >
              <AnimatePresence initial={false} custom={direction}>
                {categories.map((item, indx) => (
                  <motion.li
                    className={`relative mr-[1px] inline-block px-2 xl:px-4 ${itemClassName} `}
                    custom={direction}
                    initial={{
                      x: `${(currentIndex - 1) * -100}%`,
                    }}
                    animate={{
                      x: `${currentIndex * -100}%`,
                    }}
                    variants={variants(200, 1)}
                    key={indx}
                    style={{
                      width: `100%`,
                    }}
                  >
                    {renderCard(item)}
                  </motion.li>
                ))}
                <div className="w-[95vw] mt-8 flex justify-center">
                  {currentIndex ? (
                    <PrevBtn
                      onClick={() => changeItemId(currentIndex - 1)}
                      className="font-black mr-8 text-black text-xl -translate-y-1/2 z-[1]"
                    />
                  ) : (
                    <PrevBtn className="bg-neutral-100 mr-8 text-neutral-100 text-xl -translate-y-1/2 z-[1]" />
                  )}
                  {categories.length > currentIndex + numberOfItems ? (
                    <NextBtn
                      onClick={() => changeItemId(currentIndex + 1)}
                      className="ml-8 font-black text-black text-xl -translate-y-1/2 z-[1]"
                    />
                  ) : (
                    <NextBtn className="ml-8 bg-neutral-100 text-neutral-100 text-xl -translate-y-1/2" />
                  )}
                </div>
              </AnimatePresence>
            </motion.ul>
          </div>
        </div>
      </MotionConfig>
    </div>
  );
};

export default SectionSliderHourlyPlaces;
