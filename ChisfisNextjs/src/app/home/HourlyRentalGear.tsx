"use client";
import { useState, useRef } from "react";
import Image from "next/image";
import Slider from "react-slick";
import blob from "@/images/blobPattern.png";
import londonImg from "@/images/browseByDestination/london.jpg";
import { GrNext } from "react-icons/gr";
import { GrPrevious } from "react-icons/gr";
import {
  HotelDemo1,
  HotelDemo2,
  HotelDemo3,
  GearDemo1,
  GearDemo2,
  GearDemo3,
} from "public/assetsManager";
import { MdBookmark } from "react-icons/md";

const cardData = [
  {
    id: 1,
    img: GearDemo1,
    title: "D70 Camera",
    desc: "$30 Refundable Deposit",
    price: "$99.99",
    buttonText: "Stock",
  },
  {
    id: 2,
    img: GearDemo2,
    title: "Camping Tent",
    desc: "$20 Refundable Deposit",
    price: "$59.99",
    buttonText: "Stock",
  },
  {
    id: 3,
    img: GearDemo3,
    title: "MI Foldable electric bike",
    desc: "$120 Refundable Deposit",
    price: "$49.99",
    buttonText: "Stock",
  },
  {
    id: 4,
    img: GearDemo1,
    title: "D70 Camera",
    desc: "$30 Refundable Deposit",
    price: "$99.99",
    buttonText: "Stock",
  },
  {
    id: 5,
    img: GearDemo2,
    title: "Camping Tent",
    desc: "$20 Refundable Deposit",
    price: "$59.99",
    buttonText: "Stock",
  },
  {
    id: 6,
    img: GearDemo3,
    title: "MI Foldable electric bike",
    desc: "$120 Refundable Deposit",
    price: "$49.99",
    buttonText: "Stock",
  },
];

const HourlyRentalGear = () => {
  const [activeCategory, setActiveCategory] = useState("Tech Gear");

  const handleCategoryClick = (category: string) => {
    setActiveCategory(category);
  };

  const renderBlobImage = (category: string) => {
    if (category === activeCategory) {
      return <Image src={blob} alt="blob" className="h-[50px] w-[20px]" />;
    } else {
      return null;
    }
  };

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
        breakpoint: 1224,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 930,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 550,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <div className="w-screen mx-auto my-[4rem] h-fit font-rubik ">
      <div className="sm:w-[80%] w-[85%] mx-auto">
        <div className=" flex flex-col gap-[.5rem] mx-2 mb-[2rem]">
          <div className="flex items-center justify-between">
            <p className="sm:text-[2.1rem] text-[1.2rem] font-[600]">
              Hourly Rental Gear
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
            Help you to find what you needed.
          </p>
        </div>

        <div className="flex gap-4 mx-auto mt-4">
          <div className="sm:ml-[-3rem] ml-[-1.8rem] ">
            <div className="flex flex-col -ml-1 gap-4 w-[35px] text-[#666666] text-sm font-semibold">
              <div
                className={`flex items-center h-fit ${
                  activeCategory !== "Tech Gear" && "ml-4"
                }`}
              >
                {renderBlobImage("Tech Gear")}
                <p
                  className={`lr -rotate-180 cursor-pointer ${
                    activeCategory === "Tech Gear" && "font-bold"
                  }`}
                  onClick={() => handleCategoryClick("Tech Gear")}
                >
                  Tech Gear
                </p>
              </div>
              <div
                className={`flex items-center ${
                  activeCategory !== "Music Gear" && "ml-4"
                }`}
              >
                {renderBlobImage("Music Gear")}
                <p
                  className={`lr -rotate-180 cursor-pointer  ${
                    activeCategory === "Music Gear" && "font-bold"
                  }`}
                  onClick={() => handleCategoryClick("Music Gear")}
                >
                  Music Gear
                </p>
              </div>
              <div
                className={`flex items-center cursor-pointer ${
                  activeCategory !== "Photography" && "ml-4"
                }`}
              >
                {renderBlobImage("Photography")}
                <p
                  className={`lr -rotate-180 ${
                    activeCategory === "Photography" && "font-bold"
                  }`}
                  onClick={() => handleCategoryClick("Photography")}
                >
                  Photography
                </p>
              </div>
              <div
                className={`flex items-center cursor-pointer ${
                  activeCategory !== "Fashion" && "ml-4"
                }`}
              >
                {renderBlobImage("Fashion")}
                <p
                  className={`lr -rotate-180 ${
                    activeCategory === "Fashion" && "font-bold"
                  }`}
                  onClick={() => handleCategoryClick("Fashion")}
                >
                  Fashion
                </p>
              </div>
            </div>
          </div>
          {/* Card */}
          <div className=" font-rubik  w-[100%] h-[293px]">
            <Slider ref={sliderRef} {...settings}>
              {cardData?.map((card) => (
                <div
                  key={card.id}
                  className="h-fit  w-[20rem] p-[1.1rem] bg-white rounded-2xl relative"
                >
                  <div className="relative ">
                    <Image
                      src={card.img}
                      className="rounded-xl h-[159px] object-cover"
                      alt="london"
                    />
                    <div className=" absolute size-[2rem] flex justify-center items-center right-[.7rem] bottom-[-.6rem] bg-white rounded-full  ">
                      <div className="flex justify-center items-center size-[1.8rem] bg-[#5527D7] hover-bg-[#5508d9] rounded-full ">
                        <MdBookmark className="text-white text-[1.1rem] " />
                      </div>
                    </div>
                  </div>
                  <p className="mt-2 text-lg font-semibold">{card.title}</p>
                  <div className="flex items-center gap-1 mt-2">
                    <p className="text-[15px] text-[#353646] opacity-[.4] font-medium">
                      {card.desc}
                    </p>
                  </div>
                  <div className="flex items-center justify-between mt-3">
                    <p>
                      <span className="text-xl font-bold font-rubik">
                        {card.price}
                      </span>
                      /hour
                    </p>
                    <button className="rounded-full font-semibold text-sm px-4 py-1 text-[#15813C] bg-[#E8F2EC] ">
                      {card.buttonText}
                    </button>
                  </div>
                  <button className=" mt-[1rem] rounded-full w-[100%] h-[2.5rem] flex justify-center items-center  font-semibold text-sm px-4 py-1 text-[#fff] font-rubik bg-[#5527D7] ">
                    Rent Now
                  </button>
                </div>
              ))}
            </Slider>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HourlyRentalGear;
