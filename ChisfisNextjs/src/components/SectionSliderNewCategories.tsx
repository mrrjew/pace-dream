"use client";

import React, { FC, useEffect, useState } from "react";
import { TaxonomyType } from "@/data/types";
import CardCategory3 from "@/components/CardCategory3";
import CardCategory4 from "@/components/CardCategory4";
import CardCategory5 from "@/components/CardCategory5";
import Heading from "@/shared/Heading";
import { AnimatePresence, motion, MotionConfig } from "framer-motion";
import { useSwipeable } from "react-swipeable";
import PrevBtn from "./PrevBtn";
import NextBtn from "./NextBtn";
import { variants } from "@/utils/animationVariants";
import { useWindowSize } from "react-use";

export interface SectionSliderNewCategoriesProps {
  className?: string;
  itemClassName?: string;
  heading?: string;
  subHeading?: string;
  categories?: TaxonomyType[];
  categoryCardType?: "card3" | "card4" | "card5";
  itemPerRow?: 1 | 4 | 5;
  sliderStyle?: "style1" | "style2";
}

const DEMO_CATS: TaxonomyType[] = [
  {
    id: "1",
    href: "/listing-stay-map",
    name: "Nature House",
    taxonomy: "category",
    count: 17288,
    thumbnail:
      "https://images.pexels.com/photos/2581922/pexels-photo-2581922.jpeg?auto=compress&cs=tinysrgb&dpr=3&h=750&w=1260",
  },
  {
    id: "2",
    href: "/listing-stay-map",
    name: "Wooden house",
    taxonomy: "category",
    count: 2118,
    thumbnail:
      "https://images.pexels.com/photos/2351649/pexels-photo-2351649.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
  },
  {
    id: "3",
    href: "/listing-stay-map",
    name: "Houseboat",
    taxonomy: "category",
    count: 36612,
    thumbnail:
      "https://images.pexels.com/photos/962464/pexels-photo-962464.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
  },
  {
    id: "4",
    href: "/listing-stay-map",
    name: "Farm House",
    taxonomy: "category",
    count: 18188,
    thumbnail:
      "https://images.pexels.com/photos/248837/pexels-photo-248837.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
  },
  {
    id: "5",
    href: "/listing-stay-map",
    name: "Dome House",
    taxonomy: "category",
    count: 22288,
    thumbnail:
      "https://images.pexels.com/photos/3613236/pexels-photo-3613236.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
  },
  {
    id: "6",
    href: "/listing-stay-map",
    name: "Dome House",
    taxonomy: "category",
    count: 188288,
    thumbnail:
      "https://images.pexels.com/photos/14534337/pexels-photo-14534337.jpeg?auto=compress&cs=tinysrgb&w=1600&lazy=load",
  },
  {
    id: "7",
    href: "/listing-stay-map",
    name: "Wooden house",
    taxonomy: "category",
    count: 2118,
    thumbnail:
      "https://images.pexels.com/photos/2351649/pexels-photo-2351649.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
  },
  {
    id: "8",
    href: "/listing-stay-map",
    name: "Wooden Dome",
    taxonomy: "category",
    count: 515,
    thumbnail:
      "https://images.pexels.com/photos/9039238/pexels-photo-9039238.jpeg?auto=compress&cs=tinysrgb&w=1600&lazy=load",
  },
];

const SectionSliderNewCategories: FC<SectionSliderNewCategoriesProps> = ({
  heading = "Suggestions for Hourly Rooms",
  subHeading = "Popular places to stay that Chisfis recommends for you",
  className = "",
  itemClassName = "",
  categories = DEMO_CATS,
  itemPerRow = 4,
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

  const renderCard = (item: TaxonomyType) => {
    switch (categoryCardType) {
      case "card3":
        return <CardCategory3 taxonomy={item} />;
      case "card4":
        return <CardCategory4 taxonomy={item} />;
      case "card5":
        return <CardCategory5 taxonomy={item} />;
      default:
        return <CardCategory3 taxonomy={item} />;
    }
  };

  if (!numberOfItems) return null;

  return (
    <div className={` md:px-24 ${className} lg:mb-16 lg:pt-16 inline-block`}>
      <Heading desc={subHeading}>
        {heading}
      </Heading>
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
          {categories.length > currentIndex + numberOfItems ? (
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
                {categories.map((item, indx) => (
                  <motion.li
                    className={`relative md:mr-0px inline-block px-2 xl:px-4 ${itemClassName} `}
                    custom={direction}
                    initial={{
                      x: `${(currentIndex - 1) * - 100}%`,
                    }}
                    animate={{
                      x: `${currentIndex * - 100}%`,
                    }}
                    variants={variants(200, 1)}
                    key={indx}
                    style={{
                      width: `25%`,
                    }}
                  >
                    {renderCard(item)}
                  </motion.li>
                ))}
                <div className="relative ml-[188px] mt-4">
                {currentIndex ? (
            <PrevBtn
              onClick={() => changeItemId(currentIndex - 1)}
              className="md:hidden font-black order-first text-black text-lg -translate-y-1/2 z-[1]"
            />
          ) : <PrevBtn
          className="md:hidden bg-neutral-100 text-neutral-100 text-lg -translate-y-1/2 z-[1]"
        />}
          {categories.length > currentIndex + numberOfItems ? (
            <NextBtn
              onClick={() => changeItemId(currentIndex + 1)}
              className="md:hidden ml-2 order-first font-black text-black text-lg -translate-y-1/2 z-[1]"
            />
          ) : <NextBtn
          className="md:hidden ml-2 bg-neutral-100 text-neutral-100 text-lg -translate-y-1/2 z-[1]"
        />}
        </div>
              </AnimatePresence>
            </motion.ul>
          </div>
        </div>
      </MotionConfig>
    </div>
  );
};

export default SectionSliderNewCategories;
