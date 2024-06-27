"use client";
import { useState } from "react";
import Image from "next/image";
import Slider from "react-slick";
import blob from "@/images/blobPattern.png";
import londonImg from "@/images/browseByDestination/london.jpg";
import { RentableItem } from "@/types/rentalItems";
import { useFetchData } from "@/hooks/useFetch";

const cardData = {
  TechGear: [
    {
      id: 1,
      img: londonImg,
      title: "Best Western Cedars",
      address: "1 Anzinger Court",
      price: "$250",
      buttonText: "Stock",
    },
    {
      id: 2,
      img: londonImg,
      title: "Luxury Suite",
      address: "5 Buckingham Palace Rd",
      price: "$500",
      buttonText: "Stock",
    },
    {
      id: 3,
      img: londonImg,
      title: "Cozy Apartment",
      address: "10 Hyde Park Place",
      price: "$150",
      buttonText: "Stock",
    },
    {
      id: 4,
      img: londonImg,
      title: "Elegant Mansion",
      address: "20 Kensington Gardens",
      price: "$800",
      buttonText: "Stock",
    },
    {
      id: 5,
      img: londonImg,
      title: "Modern Loft",
      address: "15 Mayfair St",
      price: "$300",
      buttonText: "Stock",
    },
  ],
  Music: [
    {
      id: 1,
      img: londonImg,
      title: "Restroom Alpha",
      address: "1 Restroom Ave",
      price: "$100",
      buttonText: "Stock",
    },
    {
      id: 2,
      img: londonImg,
      title: "Restroom Beta",
      address: "2 Restroom St",
      price: "$80",
      buttonText: "Stock",
    },
    {
      id: 3,
      img: londonImg,
      title: "Restroom Delta",
      address: "3 Restroom Ln",
      price: "$120",
      buttonText: "Stock",
    },
    {
      id: 4,
      img: londonImg,
      title: "Restroom Gamma",
      address: "4 Restroom Blvd",
      price: "$90",
      buttonText: "Stock",
    },
    {
      id: 5,
      img: londonImg,
      title: "Restroom Epsilon",
      address: "5 Restroom Rd",
      price: "$110",
      buttonText: "Stock",
    },
  ],
  Photography: [
    {
      id: 1,
      img: londonImg,
      title: "EV Parking 1",
      address: "1 EV Parking Dr",
      price: "$50",
      buttonText: "Stock",
    },
    {
      id: 2,
      img: londonImg,
      title: "EV Parking 2",
      address: "2 EV Parking Blvd",
      price: "$40",
      buttonText: "Stock",
    },
    {
      id: 3,
      img: londonImg,
      title: "EV Parking 3",
      address: "3 EV Parking Ln",
      price: "$60",
      buttonText: "Stock",
    },
    {
      id: 4,
      img: londonImg,
      title: "EV Parking 4",
      address: "4 EV Parking Rd",
      price: "$45",
      buttonText: "Stock",
    },
    {
      id: 5,
      img: londonImg,
      title: "EV Parking 5",
      address: "5 EV Parking Ave",
      price: "$55",
      buttonText: "Stock",
    },
  ],
  Fashion: [
    {
      id: 1,
      img: londonImg,
      title: "Parking Lot Alpha",
      address: "1 Parking Lot Ave",
      price: "$20",
      buttonText: "Stock",
    },
    {
      id: 2,
      img: londonImg,
      title: "Parking Lot Beta",
      address: "2 Parking Lot Blvd",
      price: "$15",
      buttonText: "Stock",
    },
    {
      id: 3,
      img: londonImg,
      title: "Parking Lot Delta",
      address: "3 Parking Lot St",
      price: "$25",
      buttonText: "Stock",
    },
    {
      id: 4,
      img: londonImg,
      title: "Parking Lot Gamma",
      address: "4 Parking Lot Rd",
      price: "$18",
      buttonText: "Stock",
    },
    {
      id: 5,
      img: londonImg,
      title: "Parking Lot Epsilon",
      address: "5 Parking Lot Ln",
      price: "$22",
      buttonText: "Stock",
    },
  ],
};

const property_types =  {
  // {id: 'tech gear', name: 'Tech Gear'},
// {id:"music gear", name: "Music Gear"},
// {id:"photography", name: "photography"},
// {id:"fashion", name: "Fashion"},
tech_gear: "Tech Gear",
music_gear: "Music Gear",
photography: "Photography",
fashion: "Fashion",
}

const HourlyGearsMobile = () => {
  const [activeCategory, setActiveCategory] = useState<keyof typeof property_types>("tech_gear");
  // room_type
 // property_type

  const {data} = useFetchData<Array<RentableItem>>({endpoint:`/property/get-all-properties-by-property-type/${activeCategory?.replaceAll('_'," ")}`,queryKey:["properties-by-gear-category",activeCategory],})

  const handleCategoryClick = (category:keyof typeof property_types ) => {
    setActiveCategory(category);
  };


  const renderBlobImage = (category: string) => {
    if (category === activeCategory) {
      return <Image src={blob} alt="blob" className="h-[50px] w-[20px]" width={20} height={50} />;
    } else {
      return null;
    }
  };

  const settings = {
    dots: true,
    infinite: false,
    slidesToShow: 1,
    centerMode: false,
    slidesToScroll: 1,
    arrows: false,
    autoplay: false,
    speed: 500,
    cssEase: "linear",
  };

  return (
    <div className="h-fit my-20 mx-auto w-screen ">
      <div className="mx-2">
        <div className="flex items-center justify-between">
          <p className="font-bold text-xl">Hourly Rental Gears</p>
          <p className="font-medium text-sm text-[#666666]">View All</p>
        </div>
        <p className="text-[#666666] text-[13px]">
          Help you to find what you needed.
        </p>
      </div>
      {/* Categories */}
      <div className="flex mt-4 gap-4">
        <div className="-mt-1">
          <div className="flex flex-col -ml-1 gap-4 w-[35px] text-[#666666] text-sm font-semibold">
            <div
              className={`flex items-center h-fit ${activeCategory !== "tech_gear" && "ml-4"}`}
            >
              {renderBlobImage("TechGear")}
              <p
                className={`lr -rotate-180 ${activeCategory === "tech_gear" && "font-bold"}`}
                onClick={() => handleCategoryClick("tech_gear")}
              >
                TechGear
              </p>
            </div>
            <div
              className={`flex items-center ${activeCategory !== "music_gear" && "ml-4"}`}
            >
              {renderBlobImage("Music")}
              <p
                className={`lr -rotate-180  ${activeCategory === "music_gear" && "font-bold"}`}
                onClick={() => handleCategoryClick("music_gear")}
              >
                Music
              </p>
            </div>
            <div
              className={`flex items-center ${activeCategory !== "photography" && "ml-4"}`}
            >
              {renderBlobImage("Photography")}
              <p
                className={`lr -rotate-180 ${activeCategory === "photography" && "font-bold"}`}
                onClick={() => handleCategoryClick("photography")}
              >
                Photography
              </p>
            </div>
            <div
              className={`flex items-center ${activeCategory !== "fashion" && "ml-4"}`}
            >
              {renderBlobImage("Fashion")}
              <p
                className={`lr -rotate-180 ${activeCategory === "fashion" && "font-bold"}`}
                onClick={() => handleCategoryClick("fashion")}
              >
                Fashion
              </p>
            </div>
          </div>
        </div>
        {/* Card */}
        <div className="w-4/5 h-[293px]">
          <Slider {...settings}>

            {data?.map((card) => (
              <div
                key={card._id}
                className="h-[293px] w-[310px] p-3 bg-white rounded-2xl relative"
              >
                <Image
                  src={card.gallery.thumbnail || ""}
                  className="rounded-lg h-[159px] object-cover"
                  alt="london"
                  width={310}
                  height={159}
                  onError={(e) => {
                    e.currentTarget.src = 'https://placehold.co/600x400?text=no+image'
                  }}
                />
                <p className="text-lg font-semibold mt-2">{card.title}</p>
                <div className="flex mt-2 gap-1 items-center">
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
                  <p className="text-[15px] text-[#666666] font-medium">
                    {card.location?.city}
                  </p>
                </div>
                <div className="flex mt-3 justify-between items-center">
                  <p>
                    <span className="text-xl font-bold">{
                      card.price?.at(0)?.amount || 0
                      }</span>/ {card.price?.at(0)?.frequency}
                  </p>
                  <button className="rounded-full font-semibold text-sm px-4 py-1 text-[#15813C] bg-[#87DDA6]">
                    Rent Now
                  </button>
                </div>
              </div>
            ))}
          </Slider>
        </div>
      </div>
    </div>
  );
};

export default HourlyGearsMobile;
