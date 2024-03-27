"use client"

import CardAuthorBox from "@/components/CardAuthorBox";
import CardAuthorBox2 from "@/components/CardAuthorBox2";
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
import Heading4 from "@/shared/Heading4";

export interface SectionSliderAuthorProps {
  className?: string;
  itemClassName?: string;
  boxCard?: "box1" | "box2";
  authors?: AuthorType[];
  itemPerRow?: 1 | 5;
  sliderStyle?: "style1" | "style2";
}

const DEMO_DATA = DEMO_AUTHORS.filter((_, i) => i < 10);

const SectionSliderAuthorBox: FC<SectionSliderAuthorProps> = ({
  className = "",
  itemClassName = "",
  authors = DEMO_DATA,
  boxCard = "box1",
  itemPerRow = 5,
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

  const renderCard = (item: AuthorType, indx:any) => {
    switch (boxCard) {
      case "box1":
        return <CardAuthorBox author={item} index={indx+1}/>;
      case "box2":
        return <CardAuthorBox2 author={item} />;
      default:
        return <CardAuthorBox author={item} />;
    }
  };
  if (!numberOfItems) return null;
  return (
    <div
      className={`md:px-24 ${className} inline-block`}
    >
      <div className="flex justify-center">
        <Heading4 desc="Rating based on customer reviews" isCenter={sliderStyle === "style2"}>
          Top 10 author of the month
        </Heading4>
      </div>
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
                {authors.map((item, indx) => (
                  <motion.li
                    className={`relative mr-[1px] max-w-[420px] md:mr-0px inline-block px-2 xl:px-4 ${itemClassName} `}
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
                    {renderCard(item, indx)}
                  </motion.li>
                ))}
          </AnimatePresence>
          </motion.ul>
          <div className="flex items-center justify-center space-x-2 mt-10">
                {authors.map((item, i) => (
                  i  % (numberOfItems + 1) === 0 ?
                  <button
                    className={`w-2 h-2 rounded-full ${
                      i  === currentIndex ? "bg-black/70 w-2.5 h-2.5" : "bg-black/10 "
                    }`}
                    onClick={() => changeItemId(i)}
                    key={i}
                  />: null
                ))}
              </div>
          </div>
        </div>
      </MotionConfig>
    </div>
  );
};

export default SectionSliderAuthorBox;
