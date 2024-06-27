"use client";
import { useState, useRef, useEffect } from "react";
import Image from "next/image";
import Slider from "react-slick";
import blob from "@/images/blobPattern.png";
// import londonImg from "@/images/browseByDestination/london.jpg";
import { GrNext } from "react-icons/gr";
import { GrPrevious } from "react-icons/gr";
import { HotelDemo1, HotelDemo2, HotelDemo3 } from "public/assetsManager";
import { MdBookmark } from "react-icons/md";
import { useFetchData } from "@/hooks/useFetch";
import { RentableItem, RentableItemType } from "@/types/rentalItems";

// const cardData = [
//   {
//     id: 1,
//     img: HotelDemo1,
//     title: "Best Western Cedars",
//     address: "1 Anzinger Court",
//     price: "$250",
//     buttonText: "Stock",
//   },
//   {
//     id: 2,
//     img: HotelDemo2,
//     title: "White Horse Hotel",
//     address: "35 Sherman Park",
//     price: "$500",
//     buttonText: "Stock",
//   },
//   {
//     id: 3,
//     img: HotelDemo3,
//     title: "Bell By Greene King",
//     address: "6 Chive Avenue",
//     price: "$150",
//     buttonText: "Stock",
//   },
//   {
//     id: 4,
//     img: HotelDemo1,
//     title: "Best Western Cedars",
//     address: "1 Anzinger Court",
//     price: "$250",
//     buttonText: "Stock",
//   },
//   {
//     id: 5,
//     img: HotelDemo2,
//     title: "White Horse Hotel",
//     address: "35 Sherman Park",
//     price: "$500",
//     buttonText: "Stock",
//   },
//   {
//     id: 6,
//     img: HotelDemo3,
//     title: "Bell By Greene King",
//     address: "6 Chive Avenue",
//     price: "$150",
//     buttonText: "Stock",
//   },
// ];

const TimeBased = () => {
  const [activeCategory, setActiveCategory] = useState<RentableItemType>("room");
  const {data} = useFetchData<Array<RentableItem>>({endpoint:`/property/get-all-properties-by-item-type/${activeCategory}`,queryKey:["properties-by-timebased-category",activeCategory]})

  // useEffect(() => {
  //   console.log(data);
  // }, [data]);
 
  const handleCategoryClick = (category: RentableItemType) => {
    setActiveCategory(category);
  };

  const renderBlobImage = (category: RentableItemType) => {
    if (category === activeCategory) {
      return <Image src={blob} alt="blob" className="h-[50px] w-[20px]" width={50} height={50} />;
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
          slidesToScroll: 3,
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
    <div className="w-screen my-[4rem] h-fit font-rubik ">
      <div className="sm:w-[80%] w-[85%] mx-auto">
        <div className=" flex flex-col gap-[.5rem] mx-2 mb-[2rem]">
          <div className="flex items-center justify-between">
            <p className="sm:text-[2.1rem] text-[1.2rem] font-[600]">
              Time Based
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
                  activeCategory !== "room" && "ml-4"
                }`}
              >
                {renderBlobImage("room")}
                <p
                  className={`lr -rotate-180 cursor-pointer ${
                    activeCategory === "room" && "font-bold"
                  }`}
                  onClick={() => handleCategoryClick("room")}
                >
                  Room
                </p>
              </div>
              <div
                className={`flex items-center ${
                  activeCategory !== "rest_room" && "ml-4"
                }`}
              >
                {renderBlobImage("rest_room")}
                <p
                  className={`lr -rotate-180 cursor-pointer  ${
                    activeCategory === "rest_room" && "font-bold"
                  }`}
                  onClick={() => handleCategoryClick("rest_room")}
                >
                  Restroom
                </p>
              </div>
              <div
                className={`flex items-center cursor-pointer ${
                  activeCategory !== "ev_parking" && "ml-4"
                }`}
              >
                {renderBlobImage("ev_parking")}
                <p
                  className={`lr -rotate-180 ${
                    activeCategory === "ev_parking" && "font-bold"
                  }`}
                  onClick={() => handleCategoryClick("ev_parking")}
                >
                  EV Parking
                </p>
              </div>
              <div
                className={`flex items-center cursor-pointer ${
                  activeCategory !== "parking" && "ml-4"
                }`}
              >
                {renderBlobImage("parking")}
                <p
                  className={`lr -rotate-180 ${
                    activeCategory === "parking" && "font-bold"
                  }`}
                  onClick={() => handleCategoryClick("parking")}
                >
                  Parking
                </p>
              </div>
            </div>
          </div>
          {/* Card */}
          <div className=" w-[100%] h-[293px]">
            <Slider ref={sliderRef} {...settings}>
              {/* render empty data */}
              {data?.length === 0 &&  <div className="h-72 grid place-content-center w-[20rem] text-gray-500 p-[1.1rem] rounded-2xl relative">
                      <p>No data found in <strong>{activeCategory.replaceAll('_',' ')}</strong></p>
                </div>}
              {data?.map((card) => (
                <div
                  key={card._id}
                  className="h-fit w-[20rem] p-[1.1rem] bg-white rounded-2xl relative"
                >
                  <div className="relative ">
                    <Image
                      src={card?.gallery?.thumbnail ?? ''}
                      onError={(e) => {
                        e.currentTarget.src = `https://placehold.co/600x400?text=no+image`;
                      }}
                      className="rounded-xl h-[159px] w-full object-cover"
                      alt="london"
                      width={90}
                      height={90}
                    />
                    <div className=" absolute size-[2rem] flex justify-center items-center right-[.7rem] bottom-[-.6rem] bg-white rounded-full  ">
                      <div className="flex justify-center items-center size-[1.8rem] bg-[#5527D7] rounded-full ">
                        <MdBookmark className="text-white text-[1.1rem] " />
                      </div>
                    </div>
                  </div>
                  <p className="mt-2 text-lg font-semibold">{card.title}</p>
                  <div className="flex items-center gap-1 mt-2">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                      className="w-5 h-5 text-[#5527D7]"
                    >
                      <path
                        fillRule="evenodd"
                        d="m9.69 18.933.003.001C9.89 19.02 10 19 10 19s.11.02.308-.066l.002-.001.006-.003.018-.008a5.741 5.741 0 0 0 .281-.14c.186-.096.446-.24.757-.433.62-.384 1.445-.966 2.274-1.765C15.302 14.988 17 12.493 17 9A7 7 0 1 0 3 9c0 3.492 1.698 5.988 3.355 7.584a13.731 13.731 0 0 0 2.273 1.765 11.842 11.842 0 0 0 .976.544l.062.029.018.008.006.003ZM10 11.25a2.25 2.25 0 1 0 0-4.5 2.25 2.25 0 0 0 0 4.5Z"
                        clipRule="evenodd"
                      />
                    </svg>
                    <p className="text-xs text-[#666666] font-thin">
                      {card?.location?.city ?? "No Address"}
                    </p>
                  </div>
                  <div className="flex items-center justify-between mt-3">
                    <p>
                      <span className="text-xl font-bold">{
                        card.price?.at(0)?.amount
                        }</span>
                      / {card.price?.at(0)?.frequency}
                    </p>
                    <button className="rounded-full font-semibold text-sm px-4 py-1 text-[#15813C] bg-[#E8F2EC] ">
                      {card.available ?  "Available" : "Not Available"}
                    </button>
                  </div>
                </div>
              ))}
            </Slider>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TimeBased;
