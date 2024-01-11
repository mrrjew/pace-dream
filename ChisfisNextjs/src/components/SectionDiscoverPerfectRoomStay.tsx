"use client"
import React, { FC, ReactNode, useEffect, useState } from "react";
import { DEMO_STAY_LISTINGS } from "@/data/listings";
import { StayDataType } from "@/data/types";
import ButtonPrimary from "@/shared/ButtonPrimary";
import HeaderFilter from "./HeaderFilter";
import StayCard from "./StayCard";
import StayCard2 from "./StayCard2";
import { useWindowSize } from "react-use";
import { useSwipeable } from "react-swipeable";
import Heading from "@/shared/Heading";
import { AnimatePresence, MotionConfig, motion } from "framer-motion";
import PrevBtn from "./PrevBtn";
import NextBtn from "./NextBtn";
import { variants } from "@/utils/animationVariants";

// OTHER DEMO WILL PASS PROPS
const DEMO_DATA: StayDataType[] = DEMO_STAY_LISTINGS.filter((_, i) => i < 8);

//
export interface SectionDiscoverPerfectRoomStayProps {
  stayListings?: StayDataType[];
  heading?: ReactNode;
  subHeading?: ReactNode;
  headingIsCenter?: boolean;
  itemPerRow?: 4 | 5;
  tabs?: string[];
  cardType?: "card1" | "card2";
  sliderStyle?: "style1" | "style2";
}

const SectionDiscoverPerfectRoomStay: FC<SectionDiscoverPerfectRoomStayProps> = ({
  stayListings = DEMO_DATA,
  heading = "Discover Perfect Room Stay",
  subHeading = "Popular Long term Stay & Short term Stay places to recommends for you",
  headingIsCenter,
  itemPerRow = 4,
  tabs = ["All", "Hotel", "Long term Stay", "Short term Stay"],
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
  const renderCard = (stay: StayDataType) => {
    let CardName = StayCard;
    switch (cardType) {
      case "card1":
        CardName = StayCard;
        break;
      case "card2":
        CardName = StayCard2;
        break;

      default:
        CardName = StayCard;
    }
    if (!numberOfItems) return null;
    return <CardName key={stay.id} data={stay} />;
  };

  return (
    <div className={`nc-SectionDiscoverPerfectRoomStay pr-24 pl-24 pb-20`}>
      <HeaderFilter
        tabActive={"All"}
        tabs={tabs}
        heading={heading}
        subHeading={subHeading}
      />
      <MotionConfig
        transition={{
          x: { type: "spring", stiffness: 300, damping: 30 },
          opacity: { duration: 0.2 },
        }}
      >
        <div className={`relative flow-root`} {...handlers}>
        {currentIndex ? (
            <PrevBtn
              onClick={() => changeItemId(currentIndex - 1)}
              className="ml-[93%] font-black text-black text-lg -translate-y-1/2 z-[1]"
            />
          ) : <PrevBtn
          className="bg-neutral-100 text-neutral-100 ml-[93%] text-lg -translate-y-1/2 z-[1]"
        />}
          {stayListings.length > currentIndex + numberOfItems ? (
            <NextBtn
              onClick={() => changeItemId(currentIndex + 1)}
              className="ml-2 order-first font-black text-black text-lg -translate-y-1/2 z-[1]"
            />
          ) : <NextBtn
          className="ml-2 bg-neutral-100 text-neutral-100 text-lg -translate-y-1/2 z-[1]"
        />}
          <div className={`flow-root overflow-hidden rounded-xl`}>
            <motion.ul
              initial={false}
              className="relative whitespace-nowrap -mx-2 xl:-mx-4"
            >
              <AnimatePresence initial={false} custom={direction}>
                {stayListings.map((item, indx) => (
                  <motion.li
                    className={`relative inline-block px-4 xl:px-4 truncate`}
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
                    {renderCard(item)}
                  </motion.li>
                ))}
              </AnimatePresence>
            </motion.ul>
          </div>
        </div>
      </MotionConfig>
      {/* <div className="nc-SectionDiscoverPerfectRoomStay pr-24 pl-24 relative">
      <HeaderFilter
        tabActive={"All"}
        tabs={tabs}
        heading={heading}
        subHeading={subHeading}
      />
      <div
        className={`grid gap-6 md:gap-8 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4`}
      >
        {stayListings.map((stay, i) => (
  (i + 1) % 2 === 0 ? renderCard(stay) : null
))}
      </div>
    </div> */}
    </div>
    
  );
};

export default SectionDiscoverPerfectRoomStay;