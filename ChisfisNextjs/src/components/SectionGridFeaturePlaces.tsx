"use client";
import React, { FC, ReactNode, useEffect, useState } from "react";
import { DEMO_STAY_LISTINGS } from "@/data/listings";
import { StayDataType } from "@/data/types";
import HeaderFilter from "./HeaderFilter";
import StayCard from "./StayCard";
import StayCard2 from "./StayCard2";
import ButtonShowMore from "@/shared/ButtonShowMore";
import { useWindowSize } from "react-use";
import { useSwipeable } from "react-swipeable";
import HeaderFilterDiscover from "./HeaderFilterDiscover";
import { AnimatePresence, MotionConfig, motion } from "framer-motion";
import PrevBtn from "./PrevBtn";
import NextBtn from "./NextBtn";
import { variants } from "@/utils/animationVariants";

// OTHER DEMO WILL PASS PROPS
const DEMO_DATA: StayDataType[] = DEMO_STAY_LISTINGS.filter((_, i) => i < 8);

//
export interface SectionGridFeaturePlacesProps {
  className?: string;
  stayListings?: StayDataType[];
  gridClass?: string;
  itemPerRow?: number;
  heading?: ReactNode;
  headingIsCenter?: boolean;
  tabs?: string[];
  cardType?: "card1" | "card2";
}

const SectionGridFeaturePlaces: FC<SectionGridFeaturePlacesProps> = ({
  className = "",
  stayListings = DEMO_DATA,
  gridClass = "",
  itemPerRow = 4,
  heading = "Time Based",
  headingIsCenter,
  tabs = ["Room", "Parking", "EV Parking", "Restroom"],
  cardType = "card2",
}) => {
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

    return (
      <CardName
        className="py-2 px-3 rounded-[8px] bg-[#f9f5f5] border"
        key={stay.id}
        data={stay}
      />
    );
  };
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
  const sortedStayListings = stayListings
    .slice()
    .sort((a, b) => b.reviewStart - a.reviewStart);
  return (
    <div className={`nc-SectionGridFeaturePlaces md:px-24  ${className}`}>
      <HeaderFilterDiscover
        tabActive={"Room"}
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
            ) : (
              <PrevBtn className="bg-neutral-100 text-neutral-100 xl:ml-[90%] md:ml-[87%] text-xl -translate-y-1/2 z-[1]" />
            )}
            {sortedStayListings.length > currentIndex + numberOfItems ? (
              <NextBtn
                onClick={() => changeItemId(currentIndex + 1)}
                className="ml-8 order-first font-black text-black text-xl -translate-y-1/2 z-[1]"
              />
            ) : (
              <NextBtn className="ml-8 bg-neutral-100 text-neutral-100 text-xl -translate-y-1/2 z-[1]" />
            )}
          </div>
          <div className={`flow-root overflow-hidden rounded-xl`}>
            <motion.ul
              initial={false}
              className="relative whitespace-nowrap -mx-2 xl:-mx-4"
            >
              <AnimatePresence initial={false} custom={direction}>
                {sortedStayListings.map((item, indx) => (
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
                    <StayCard2
                      className="py-2 px-3 rounded-[8px] bg-[#f9f5f5] border "
                      key={item.id}
                      data={item}
                    />
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

export default SectionGridFeaturePlaces;
