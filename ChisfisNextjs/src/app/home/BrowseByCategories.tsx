"use client";

import React from "react";
import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import restRoom from "@/images/categories/rest room.png";
import evPack from "@/images/categories/EV parking.png";
import storage from "@/images/categories/storage.png";
import spot from "@/images/categories/parking spot.png";
import {
  RestRoomIcon,
  RestRoomNotActive,
  EvParkingIcon,
  EvParkingIconNotActive,
  StorageIconRoom,
  StorageIconRoomNotActive,
  ParkingSpotIcon,
  ParkingSpotIconNotActive,
} from "./BrowseCategoriesComponent/Icons";

const BrowseByCategories = () => {
  const [catActive, setCatActive] = useState(1);
  const catData = [
    {
      id: 1,
      icon: (
        <>
          {" "}
          <Image src={restRoom} width={80} height={80} alt="cat" />{" "}
        </>
      ),
      notActive: <RestRoomNotActive />,
      title: "Restroom",
      color: "text-blue-300",
      tintColor: "bg-[#e4f8ff]",
    },
    {
      id: 2,
      icon: (
        <>
          {" "}
          <Image src={evPack} width={80} height={80} alt="cat" />{" "}
        </>
      ),
      notActive: <EvParkingIconNotActive />,
      title: "EV parking spot",
      color: "text-purple-300",
      tintColor: "bg-[#fbefff]",
    },
    {
      id: 3,
      icon: (
        <>
          {" "}
          <Image src={storage} width={80} height={80} alt="cat" />{" "}
        </>
      ),
      notActive: <StorageIconRoomNotActive />,
      title: "Storage Room",
      color: "text-purple-300",
      tintColor: "bg-[#ecf5ff]",
    },
    {
      id: 4,
      icon: (
        <>
          {" "}
          <Image src={spot} width={80} height={80} alt="cat" />{" "}
        </>
      ),
      notActive: <ParkingSpotIconNotActive />,
      title: "Parking Spot",
      color: "text-blue-400",
      tintColor: "bg-[#ecf5ff]",
    },
  ];
  return (
    <>
      <div className="w-screen md:mt-[10rem] mt-[11rem] mb-[5rem]  text-center  font-rubik">
        <div className="flex flex-col sm:items-center items-start gap-[1.6rem] py-[1rem]  ">
          <p className="text-[2.4rem] sm:flex hidden font-[600]">
            Browse by Categories
          </p>
          <p className="text-[#666666] sm:flex hidden text-[1.2rem] font-[400] ">
            Help you to find what you needed.
          </p>
          <div className="flex items-center px-[2rem] w-[100%] justify-between  sm:hidden sm:hiddem">
            <h2 className=" text-black text-[1.15rem] font-[600] ">
              Categories
            </h2>
            <p className=" text-[#ACACAC] text-[.7rem] font-[400] ">View All</p>
          </div>
        </div>

        {/* Categories web */}
        <div className=" md:flex grid-cols-2 md:grid-cols-4 gap-8 space-x-4 hidden items-center justify-center px-28 py-4 mx-auto mt-[3rem] ">
          {catData.map((cat: any) => {
            return (
              <Link
                href="#"
                key={cat.title}
                className={`${cat.tintColor} py-12 w-1/4  cursor-pointer h-max space-y-2 m-4 rounded-md flex flex-col items-center`}
              >
                <p className={`text-4xl ${cat.color} text-blue-200`}>
                  {cat.icon}
                </p>
                <p className="font-bold text-sm lg:text-xl text-gray-900">
                  {cat.title}
                </p>
              </Link>
            );
          })}
        </div>
        <div className="w-full hidden md:flex items-right my-4 -ml-28">
          <Link
            href="/categories"
            className=" text-xl underline text-right w-full mt-8"
          >
            Browse All
          </Link>
        </div>

        {/* mobile view */}
        <div className=" w-full md:hidden grid place-items-center mt-[2rem] gap-6 p-4 grid-cols-2 justify-center items-center">
          {catData.map((cat: any, i) => {
            return (
              <Link
                href="#"
                key={cat.title}
                className={`${cat.tintColor} py-8  cursor-pointer w-full ${i > 1 && "-mt-6"} h-max m-4 rounded-lg flex flex-col items-center`}
              >
                <p className={`text-4xl ${cat.color} text-blue-200`}>
                  {cat.icon}
                </p>
                <p className="font-bold text-sm lg:text-xl text-center text-gray-900">
                  {cat.title}
                </p>
              </Link>
            );
          })}
        </div>
        <div className="w-full md:hidden flex items-right -ml-8">
          <Link
            href="/categories"
            className=" text-xl underline text-right w-full "
          >
            Browse All
          </Link>
        </div>
      </div>
    </>
  );
};

export default BrowseByCategories;
