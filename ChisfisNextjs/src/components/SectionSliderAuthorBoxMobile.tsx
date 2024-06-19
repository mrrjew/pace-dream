"use client";

import CardAuthorBox from "@/components/CardAuthorBox";
import CardAuthorBox2 from "@/components/CardAuthorBox2";
import Heading from "@/shared/Heading";
import { DEMO_AUTHORS } from "@/data/authors";
import { AuthorType } from "@/data/types";
import React, { FC, useEffect, useState } from "react";
import { useWindowSize } from "react-use";
import { useSwipeable } from "react-swipeable";
import { AnimatePresence, MotionConfig, motion } from "framer-motion";
import PrevBtn from "./PrevBtn";
import NextBtn from "./NextBtn";
import { variants } from "@/utils/animationVariants";
import WidgetCategories from "@/app/blog/WidgetCategories";

export interface SectionSliderAuthorMobileProps {
  className?: string;
  itemClassName?: string;
  boxCard?: "box1" | "box2";
  authors?: AuthorType[];
  itemPerRow?: 1;
  sliderStyle?: "style1" | "style2";
}

const DEMO_DATA = DEMO_AUTHORS.filter((_, i) => i < 10);

const SectionSliderAuthorBoxMobile: FC<SectionSliderAuthorMobileProps> = ({
  className = "",
  itemClassName = "",
  authors = DEMO_DATA,
  boxCard = "box1",
  itemPerRow = 1,
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
      if (currentIndex < authors?.length - 1) {
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

  const renderCard = (item: AuthorType) => {
    switch (boxCard) {
      case "box1":
        return <CardAuthorBox author={item} className="border-[#F0ECFC]" />;
      case "box2":
        return <CardAuthorBox2 author={item} />;
      default:
        return <CardAuthorBox2 author={item} />;
    }
  };
  if (!numberOfItems) return null;
  return (
    <div className={`md:px-24 ${className} inline-block w-[95vw]`}>
      <Heading
        desc="Rating based on customer reviews"
        isCenter={sliderStyle === "style2"}
        className="w-[95vw] text-center mb-16"
      >
        Top 10 author of the month
      </Heading>
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
              className="relative whitespace-nowrap -mx-2 xl:-mx-4 w-max-[100vw] w-[95vw]"
            >
              <AnimatePresence initial={false} custom={direction}>
                {authors.map((item, indx) => (
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
                      width: `95vw`,
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
                  {authors.length > currentIndex + numberOfItems ? (
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

export default SectionSliderAuthorBoxMobile;
