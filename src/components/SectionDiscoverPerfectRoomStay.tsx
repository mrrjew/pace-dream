"use client"
import React, { FC, ReactNode, useEffect, useState } from "react";
import { DEMO_STAY_LISTINGS, DEMO_LAST_LISTINGS } from "@/data/listings";
import { StayDataType, FlightDataType, LastDataType } from "@/data/types";
import ButtonPrimary from "@/shared/ButtonPrimary";
import HeaderFilter from "./HeaderFilter";
import FlightCard from "./FlightCard";
import StayCard2 from "./StayCard2";
import { useWindowSize } from "react-use";
import { useSwipeable } from "react-swipeable";
import Heading from "@/shared/Heading";
import { AnimatePresence, MotionConfig, motion } from "framer-motion";
import PrevBtn from "./PrevBtn";
import NextBtn from "./NextBtn";
import { variants } from "@/utils/animationVariants";
import HeaderFilterDiscover from "./HeaderFilterDiscover";
import ButtonShowMore from "@/shared/ButtonShowMore";
import { RiArrowDownSLine } from "react-icons/ri";

// OTHER DEMO WILL PASS PROPS
/* const DEMO_DATA: StayDataType[] = DEMO_STAY_LISTINGS.filter((_, i) => i < 8); */
let DEMO_LAST: LastDataType[] = DEMO_LAST_LISTINGS.filter((_, i) => i < 8);
//
export interface SectionDiscoverPerfectRoomStayProps {
  className?: string;
  stayListings?: LastDataType[];
  heading?: ReactNode;
  subHeading?: ReactNode;
  headingIsCenter?: boolean;
  itemPerRow?: 4 | 5;
  tabs?: string[];
  cardType?: "card1" | "card2";
  sliderStyle?: "style1" | "style2";
}

const SectionDiscoverPerfectRoomStay: FC<SectionDiscoverPerfectRoomStayProps> = ({
  className = "",
  stayListings = DEMO_LAST,
  heading = "Hourly Rental Gear",
  // subHeading = "Explore Exclusive Last-Minute Deals on Hotels and Flights",
  headingIsCenter,
  itemPerRow = 4,
  tabs = ["Tech Gadgets", "Musical Instruments","Photography", "Fashion"],
  cardType = "card2",
  sliderStyle= "style1"
}) => {
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
      if (currentIndex < stayListings?.length - 1) {
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

  return (
    <div className={`nc-SectionDiscoverPerfectRoomStay md:px-24  ${className}`}>
      <HeaderFilterDiscover
        tabActive={"Tech Gadgets"}
        tabs={tabs}
        heading={heading}
        // subHeading={subHeading}
      />
      <MotionConfig
        transition={{
          x: { type: "spring", stiffness: 300, damping: 30 },
          opacity: { duration: 0.2 },
        }}
      >
        <div className={`relative flow-root`} {...handlers}>
        <div className="-mt-20 mb-20">
        {currentIndex ? (
            <PrevBtn
              onClick={() => changeItemId(currentIndex - 1)}
              className="xl:ml-[90%] md:ml-[87%] font-black text-black text-xl -translate-y-1/2 z-[1]"
            />
          ) : <PrevBtn
          className="bg-neutral-100 text-neutral-100 xl:ml-[90%] md:ml-[87%] text-xl -translate-y-1/2 z-[1]"
        />}
          {stayListings.length > currentIndex + numberOfItems ? (
            <NextBtn
              onClick={() => changeItemId(currentIndex + 1)}
              className="ml-8 order-first font-black text-black text-xl -translate-y-1/2 z-[1]"
            />
          ) : <NextBtn
          className="ml-8 bg-neutral-100 text-neutral-100 text-xl -translate-y-1/2 z-[1]"
        />}
        </div>
          <div className={`flow-root overflow-hidden rounded-xl`}>
            <motion.ul
              initial={false}
              className="relative whitespace-nowrap -mx-2 xl:-mx-4"
            >
              <AnimatePresence initial={false} custom={direction}>
                {stayListings.map((item, indx) => (
                  <motion.li
                    className={`relative md:inline-block px-4 xl:px-4 truncate`}
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
                      width: `calc(1/${numberOfItems} * 100%)`,
                    }}
                  >
                    
                <StayCard2 className="py-2 px-3 rounded-[8px] bg-[#f9f5f5] border " key={item.id} data={item} />

                  </motion.li>
                ))}
              </AnimatePresence>
            </motion.ul>
          </div>

        </div>
      </MotionConfig>
      <div className="flex my-16 justify-center items-center">
        <ButtonShowMore>view more</ButtonShowMore>
      </div>
    </div>
    
  );
};

export default SectionDiscoverPerfectRoomStay;