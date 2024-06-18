"use client";

import React, { useRef } from "react";
import Slider from "react-slick";
import { GrNext } from "react-icons/gr";
import { GrPrevious } from "react-icons/gr";
import {
  LondonCityImage,
  NewYorkCityImage,
  TokyoCityImage,
  TorontoCityImage,
} from "public/assetsManager";
import Image from "next/image";

const BrowseByDestinationData = [
  {
    id: 1,
    img: LondonCityImage,
    destination: "London",
  },
  {
    id: 2,
    img: NewYorkCityImage,
    destination: "New York",
  },
  {
    id: 3,
    img: TokyoCityImage,
    destination: "Tokyo",
  },
  {
    id: 4,
    img: TorontoCityImage,
    destination: "Toronto",
  },
  {
    id: 4,
    img: TorontoCityImage,
    destination: "Toronto",
  },
  {
    id: 4,
    img: TorontoCityImage,
    destination: "Toronto",
  },
];

const BrowseByDestination = () => {
  let sliderRef = useRef<Slider>(null);
  const next = () => {
    sliderRef?.current?.slickNext();
  };
  const previous = () => {
    sliderRef?.current?.slickPrev();
  };
  const settings = {
    dots: true,
    infinite: false,
    slidesToShow: 4,
    // centerMode: true,
    slidesToScroll: 2,
    arrows: false,
    autoplay: false,
    speed: 500,
    cssEase: "linear",
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 430,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };
  return (
    <>
      <div className="w-screen  mt-[8rem] h-[30rem] font-rubrik ">
        <div className=" sm:w-[80%] w-[95%] mx-auto ">
          <div className=" flex flex-col gap-[.5rem] mx-2 mb-[2rem]">
            <div className="flex items-center justify-between">
              <p className="sm:text-[2.1rem] text-[1.2rem] font-[600]">
                Browse by Destination
              </p>
              <div>
                <div className="hidden sm:flex ">
                  <button
                    onClick={() => previous()}
                    className=" hover:bg-gray-200 rounded-full duration-300 size-[1.8rem] flex justify-center items-center "
                  >
                    <GrPrevious />
                  </button>
                  <button
                    onClick={() => next()}
                    className=" hover:bg-gray-200 rounded-full duration-300 size-[1.8rem] flex justify-center items-center "
                  >
                    <GrNext />
                  </button>
                </div>
                <p className="sm:hidden flex font-medium text-sm text-[#666666]">
                  View All
                </p>
              </div>
            </div>
            <p className="text-[#666666] sm:text-[.9rem] text-[.75rem] font-[400] ">
              Explore perfect places by destination.
            </p>
          </div>
          {/* <div className="flex flex-shrink-0 gap-3 overflow-x-scroll flex-nowrap"> */}
          <Slider ref={sliderRef} {...settings}>
            {BrowseByDestinationData.map((item) => (
              <div
                key={item.destination}
                className="h-[18rem] w-[15rem] bg-[#5527D7] rounded-2xl relative"
              >
                <Image
                  src={item.img}
                  fill
                  className="object-cover object-center rounded-2xl"
                  alt={item.destination}
                />
                <div className="absolute flex-col items-start  justify-end py-[.5rem]  bg-gradient-to-b from-transparent via-transparent to-black shadow-lg  bottom-0 flex  w-[100%] h-[5rem] font-medium text-white rounded-2xl  ">
                  <div className=" rounded-2xl flex items-center gap-1 px-[.5rem] font-medium text-white w-fit bottom-0 left-1">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      fill="currentColor"
                      className="w-5 h-5"
                    >
                      <path
                        fillRule="evenodd"
                        d="m11.54 22.351.07.04.028.016a.76.76 0 0 0 .723 0l.028-.015.071-.041a16.975 16.975 0 0 0 1.144-.742 19.58 19.58 0 0 0 2.683-2.282c1.944-1.99 3.963-4.98 3.963-8.827a8.25 8.25 0 0 0-16.5 0c0 3.846 2.02 6.837 3.963 8.827a19.58 19.58 0 0 0 2.682 2.282 16.975 16.975 0 0 0 1.145.742ZM12 13.5a3 3 0 1 0 0-6 3 3 0 0 0 0 6Z"
                        clipRule="evenodd"
                      />
                    </svg>
                    <p className="">{item.destination}</p>
                  </div>
                </div>
              </div>
            ))}
          </Slider>
        </div>
      </div>
    </>
  );
};

export default BrowseByDestination;
