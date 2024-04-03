"use client";

import Heading from "@/shared/Heading";
import React, { FC, useEffect, useState } from "react";
import clientSayMain from "@/images/clientSayMain.png";
import clientSay1 from "@/images/clientSay1.png";
import clientSay2 from "@/images/clientSay2.png";
import clientSay3 from "@/images/clientSay3.png";
import clientSay4 from "@/images/clientSay4.png";
import clientSay5 from "@/images/clientSay5.png";
import clientSay6 from "@/images/clientSay6.png";
import quotationImg from "@/images/quotation.png";
import quotationImg2 from "@/images/quotation2.png";
import { MapPinIcon } from "@heroicons/react/24/outline";
import { AnimatePresence, motion, MotionConfig } from "framer-motion";
import Image from "next/image";
import { useSwipeable } from "react-swipeable";
import { variants } from "@/utils/animationVariants";
import { useWindowSize } from "react-use";

export interface SectionClientSayProps {
  className?: string;
  data?: typeof DEMO_DATA;
  itemPerRow?: 1 | 3 
}

const DEMO_DATA = [
  {
    id: 1,
    clientName: "Tiana Abie",
    clientAddress: "Malaysia",
    content:
      "This place is exactly like the picture posted on Chisfis. Great service, we had a great stay!",
    img: clientSayMain,
  },
  {
    id: 2,
    clientName: "Lennie Swiffan",
    clientAddress: "London",
    content:
      "This place is exactly like the picture posted on Chisfis. Great service, we had a great stay!",
    img: clientSay2,
  },
  {
    id: 3,
    clientName: "Berta Emili",
    clientAddress: "Tokyo",
    content:
      "This place is exactly like the picture posted on Chisfis. Great service, we had a great stay!",
    img: clientSay3,
  },
  {
    id: 4,
    clientName: "Tiana Abie",
    clientAddress: "Malaysia",
    content:
      "This place is exactly like the picture posted on Chisfis. Great service, we had a great stay!",
    img: clientSay4,
  },
  {
    id: 5,
    clientName: "Lennie Swiffan",
    clientAddress: "London",
    content:
      "This place is exactly like the picture posted on Chisfis. Great service, we had a great stay!",
    img: clientSay5,
  },
  {
    id: 6,
    clientName: "Berta Emili",
    clientAddress: "Tokyo",
    content:
      "This place is exactly like the picture posted on Chisfis. Great service, we had a great stay!",
    img: clientSay6,
  },
  {
    id: 7,
    clientName: "Tiana Abie",
    clientAddress: "Malaysia",
    content:
      "This place is exactly like the picture posted on Chisfis. Great service, we had a great stay!",
    img: clientSay1,
  },
  {
    id: 8,
    clientName: "Lennie Swiffan",
    clientAddress: "London",
    content:
      "This place is exactly like the picture posted on Chisfis. Great service, we had a great stay!",
    img: clientSay2,
  },
  {
    id: 9,
    clientName: "Berta Emili",
    clientAddress: "Tokyo",
    content:
      "This place is exactly like the picture posted on Chisfis. Great service, we had a great stay!",
    img: clientSay3,
  },
];

const SectionClientSay: FC<SectionClientSayProps> = ({
  className = "",
  data = DEMO_DATA,
  itemPerRow = 3,
}) => {
  const [index, setIndex] = useState(0);
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
    if (newVal > index) {
      setDirection(1);
    } else {
      setDirection(-1);
    }
    setIndex(newVal);
  }

  const handlers = useSwipeable({
    onSwipedLeft: () => {
      if (index < data?.length - 1) {
        changeItemId(index + 1);
      }
    },
    onSwipedRight: () => {
      if (index > 0) {
        changeItemId(index - 1);
      }
    },
    trackMouse: true,
  });

  return (
    <div className={`nc-SectionClientSay max-w-[100%] inline-block relative ${className} `}>
      <h1 className="flex justify-center font-bold text-3xl text-black">
        Good news form far away
      </h1>
        
      <div className="relative md:mb-16 max-w-full mx-auto lg:pl-24 lg:pr-24">
        
        <div className={`mt-12 lg:mt-16 relative `}>
          <MotionConfig
            transition={{
              x: { type: "spring", stiffness: 300, damping: 30 },
              opacity: { duration: 0.2 },
            }}
          >
            <div className={`relative pl-4 pr-4 flow-root overflow-hidden rounded-xl`} {...handlers}>
            <motion.ul
              initial={false}
              className="relative whitespace-nowrap"
            >
              <AnimatePresence initial={false} custom={direction} >
                {data.map((item, indx) => (
                  <motion.li
                    className={`relative mr-2 max-h-full h-60 max-w-[100%] inline-block px-2 lg:px-4 bg-white border rounded-2xl border-neutral-200`}
                    custom={direction}
                    initial={{
                      x: `${(index) * - 100}%`,
                    }}
                    animate={{
                      x: `${index * - 103.2}%`,
                    }}
                    variants={variants(200, 1)}
                    key={indx}
                    style={{
                      width: `calc(100% / ${itemPerRow} )`,
                    }}
                  >
                  <span className="block text-xs mt-4 text-pretty text-[#757575]">
                    {item.content}
                  </span>
                  
                  <div className="absolute bottom-0 left-0 flex items-center space-x-2 text-lg mt-2 text-neutral-400">
                    <Image className="-mb-4 ml-4 h-12 w-12" src={item.img} alt="" />
                    <div className="flex flex-col mb-4">
                      <span className="mt-8 text-lg text-black font-semibold">
                        {item.clientName}
                      </span>
                      <span className="text-sm">
                        {item.clientAddress}
                      </span>
                    </div>
                  </div>
                  </motion.li>
                ))}
              </AnimatePresence>
            </motion.ul>
            <div className="mt-10 flex items-center justify-center space-x-2">
                {data.map((item, i) => (
                  i  % (numberOfItems + 1) === 0 ?
                  <button
                    className={`w-2 h-2 rounded-full ${
                      i  === index ? "bg-black/70 w-2.5 h-2.5" : "bg-black/10 "
                    }`}
                    onClick={() => changeItemId(i)}
                    key={i}
                  />: null
                ))}
              </div>
            </div>
          </MotionConfig>
          </div>
        </div>
      </div>
  );
};

export default SectionClientSay;
