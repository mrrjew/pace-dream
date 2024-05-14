"use client";
import Slider from "react-slick";
import londonImg from "@/images/browseByDestination/london.jpg";
import Image from "next/image";

const BrowseByDestinationData = [
  {
    id: 1,
    img: londonImg,
    destination: "London",
  },
  {
    id: 2,
    img: londonImg,
    destination: "New York",
  },
  {
    id: 3,
    img: londonImg,
    destination: "Chicago",
  },
  {
    id: 4,
    img: londonImg,
    destination: "Los Angeles",
  },
  {
    id: 5,
    img: londonImg,
    destination: "Seattle",
  },
  {
    id: 6,
    img: londonImg,
    destination: "Las Vegas",
  },
  {
    id: 7,
    img: londonImg,
    destination: "New Orleans",
  },
  {
    id: 8,
    img: londonImg,
    destination: "San Diego",
  },
  {
    id: 9,
    img: londonImg,
    destination: "Nashville",
  },
  {
    id: 10,
    img: londonImg,
    destination: "Houston",
  },
];

const BrowseByDestinationMobile = () => {
  const settings = {
    dots: true,
    infinite: false,
    slidesToShow: 2,
    // centerMode: true,
    slidesToScroll: 2,
    arrows: false,
    autoplay: false,
    speed: 500,
    cssEase: "linear",
  };
  return (
    <div className="w-screen mx-auto my-20 h-fit ">
      <div className="mx-2 mb-4">
        <div className="flex items-center justify-between">
          <p className="text-xl font-bold">Browse by Destination</p>
          <p className="font-medium text-sm text-[#666666]">View All</p>
        </div>
        <p className="text-[#666666] text-[13px]">
          Explore perfect places by destination.
        </p>
      </div>
      {/* <div className="flex flex-shrink-0 gap-3 overflow-x-scroll flex-nowrap"> */}
      <Slider {...settings}>
        {BrowseByDestinationData.map((item) => (
          <div
            key={item.destination}
            className="h-[160px] w-[130px] bg-[#5527D7] rounded-lg relative"
          >
            <Image
              src={item.img}
              fill
              className="object-cover rounded-lg"
              alt={item.destination}
            />
            <div className="absolute flex items-center gap-1 font-medium text-white bottom-1 left-1">
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
        ))}
      </Slider>
    </div>
  );
};

export default BrowseByDestinationMobile;
