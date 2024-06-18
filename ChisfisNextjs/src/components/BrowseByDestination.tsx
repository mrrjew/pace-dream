"use client";
import image1 from "@/images/Rectangle 3033.png";
import image2 from "@/images/Rectangle 3034.png";
import image3 from "@/images/Rectangle 3035.png";
import image4 from "@/images/Rectangle 3036.png";
import image5 from "@/images/Rectangle 3037.png";
import image6 from "@/images/Rectangle 3038.png";
import image7 from "@/images/Rectangle 3039.png";
import image8 from "@/images/Rectangle 3040.png";
import { AnimatePresence, MotionConfig, motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { ReactNode, useEffect, useState } from "react";
import { useSwipeable } from "react-swipeable";
import { useWindowSize } from "react-use";
import PrevBtn from "./PrevBtn";
import NextBtn from "./NextBtn";
import { variants } from "@/utils/animationVariants";
import StayCard2 from "./StayCard2";
interface BrowseByDestinationProps {
  className?: string;
  heading?: ReactNode;
  subHeading?: ReactNode;
  headingIsCenter?: boolean;
  itemPerRow?: 4 | 5;
  cardType?: "card1" | "card2";
  sliderStyle?: "style1" | "style2";
}
const images = [
  {
    src: image1,
    alt: "New York",
  },
  {
    src: image2,
    alt: "London",
  },
  {
    src: image3,
    alt: "Tokyo",
  },
  {
    src: image4,
    alt: "Toronto",
  },
  {
    src: image5,
    alt: "San Francisco",
  },
  {
    src: image6,
    alt: "Miami",
  },
  {
    src: image7,
    alt: "Honolulu",
  },
  {
    src: image8,
    alt: "Sydney",
  },
];
const BrowseByDestination: React.FC<BrowseByDestinationProps> = ({
  className,
  heading = "Browse By Destination",
  // subHeading = "Explore Exclusive Last-Minute Deals on Hotels and Flights",
  headingIsCenter,
  itemPerRow = 4,
  cardType = "card2",
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
      if (currentIndex < images?.length - 1) {
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
    <div className={`container md:px-20 md:pb-0  ${className}`}>
      <h2 className="text-3xl font-extrabold tracking-tight sm:text-4xl">
        Browse by Destination
      </h2>
      <p className="mt-3 max-w-2xl text-xl text-gray-500 sm:mt-4">
        Explore perfect places by destination
      </p>
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
            {images.length > currentIndex + numberOfItems ? (
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
                {images.map((item, indx) => (
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
                    <Link href="/listing-stay" key={indx}>
                      <div key={indx} className="flex flex-col items-center">
                        <Image
                          alt={item.alt}
                          className="w-32 h-32 sm:w-40 sm:h-40 rounded-full object-cover"
                          height="160"
                          src={item.src}
                          style={{
                            width: "146px",
                            height: "243px",
                            borderRadius: "73px",
                            aspectRatio: "160/160",
                            objectFit: "cover",
                          }}
                          width="160"
                        />
                        <p className="mt-3 text-sm font-medium text-gray-700">
                          {item.alt}
                        </p>
                      </div>
                    </Link>
                  </motion.li>
                ))}
              </AnimatePresence>
            </motion.ul>
          </div>
        </div>
      </MotionConfig>
      <div className="flex my-5 justify-center items-center"></div>
    </div>
  );
};

export default BrowseByDestination;
