"use client";

import Heading from "@/shared/Heading";
import React, { FC } from "react";
import Image from "next/image";
import userImg1 from "@/assets/images/userDemoImages/user1.jpg";
import userImg2 from "@/assets/images/userDemoImages/user2.jpg";
import userImg3 from "@/assets/images/userDemoImages/user3.jpg";
import userImg4 from "@/assets/images/userDemoImages/user4.jpg";
import userImg5 from "@/assets/images/userDemoImages/user5.jpg";
import userImg6 from "@/assets/images/userDemoImages/user6.jpg";
import userImg7 from "@/assets/images/userDemoImages/user7.jpg";
import userImg8 from "@/assets/images/userDemoImages/user8.jpg";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";

// Booked user Data
const bookedUserData = [
  {
    id: 1,
    name: "Shajib",
    placeName: "Best Western Cedars Hotel",
    profileImg: userImg1,
  },
  {
    id: 2,
    name: "Usama",
    placeName: "Bell By Greene King Inns",
    profileImg: userImg2,
  },
  {
    id: 3,
    name: "Jhon",
    placeName: "Ship And Castle Hotel",
    profileImg: userImg3,
  },
  {
    id: 4,
    name: "Smith",
    placeName: "The Windmill Family & Commercial",
    profileImg: userImg4,
  },
  {
    id: 5,
    name: "Rakib",
    placeName: "Unicorn, Gunthorpe By Marstons",
    profileImg: userImg5,
  },
  {
    id: 6,
    name: "Sakil",
    placeName: "Holiday Inn Express Ramsgate",
    profileImg: userImg6,
  },
  {
    id: 7,
    name: "Nila",
    placeName: "White Horse Hotel By Greene King",
    profileImg: userImg7,
  },
  {
    id: 8,
    name: "Masud",
    placeName: "Half Moon, Sherborne By Marston",
    profileImg: userImg8,
  },
];

type Props = {};

const BookedUserList = (props: Props) => {
  // Slider Settings
  const settings = {
    dots: true,
    infinite: true,
    slidesToShow: 4,
    slidesToScroll: 1,
    autoplay: true,
    speed: 2000,
    autoplaySpeed: 4000,
    cssEase: "linear",
  };

  return (
    <>
      <div data-nc-id="SectionHowItWork">
        <Heading isCenter desc="Most Booked User list">
          Booked User List
        </Heading>

        <div className="">
          <Slider {...settings}>
            {bookedUserData.map((item, index) => (
              <div
                key={item.id}
                className="relative flex flex-col gap-3 justify-center items-center bg-white p-5 rounded-md mr-2 h-60"
              >
                <Image
                  className=" rounded-full h-20 w-20 text-center m-auto"
                  src={item.profileImg}
                  alt={item.name}
                  height={100}
                  width={100}
                />
                <p className="text-center pt-3">{item.name}</p>
                <p className="text-center">
                  <b>Place</b> : {item.placeName}
                </p>
              </div>
            ))}
          </Slider>
        </div>
      </div>
    </>
  );
};

export default BookedUserList;
