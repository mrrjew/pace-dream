"use client";

import React, { FC, useEffect, useState } from "react";
import { TaxonomyType, StayDataType } from "@/data/types";
import StayCard2 from "./StayCard2";
import { DEMO_STAY_LISTINGS } from "@/data/listings";
import { AnimatePresence, motion, MotionConfig } from "framer-motion";
import { useSwipeable } from "react-swipeable";
import PrevBtn from "./PrevBtn";
import NextBtn from "./NextBtn";
import { variants } from "@/utils/animationVariants";
import { useWindowSize } from "react-use";

export interface SectionSliderGridHasMapProps {
  className?: string;
  itemClassName?: string;
  categories?: StayDataType[];
  categoryCardType?: "card1";
  itemPerRow?: 1;
  sliderStyle?: "style1" | "style2";
}

const DEMO_STAYS = DEMO_STAY_LISTINGS.filter((_, i) => i < 12);

const SectionSliderGridHasMap: FC<SectionSliderGridHasMapProps> = ({
  className = "",
  itemClassName = "",
  categories = DEMO_STAYS,
  itemPerRow = 1,
  categoryCardType = "card3",
  sliderStyle = "style1",
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
    switch (categoryCardType) {
      case "card1":
        <StayCard2 data={item} />;
      default:
        return <StayCard2 data={item} />;
    }
  };

  if (!numberOfItems) return null;

  return (
    <div className={` md:px-24 ${className} inline-block ml-6`}>
      <MotionConfig
        transition={{
          x: { type: "spring", stiffness: 300, damping: 30 },
          opacity: { duration: 0.2 },
        }}
      >
        <div className={`relative flow-root`} {...handlers}>
          <div className={`flow-root overflow-hidden rounded-xl`}>
            <motion.ul
              initial={false}
              className="relative whitespace-nowrap -mx-2 xl:-mx-4"
            >
              <AnimatePresence initial={false} custom={direction}>
                {categories.map((item, indx) => (
                  <motion.li
                    className={`relative mr-[1px] md:mr-0px inline-block px-2 xl:px-4 ${itemClassName} `}
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

export default SectionSliderGridHasMap;
