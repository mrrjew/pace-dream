"use client";

import React from "react";
import { GoDotFill } from "react-icons/go";
import { useState } from "react";
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
      icon: <RestRoomIcon />,
      notActive: <RestRoomNotActive />,
      title: "Restroom",
    },
    {
      id: 2,
      icon: <EvParkingIcon />,
      notActive: <EvParkingIconNotActive />,
      title: "EV parking spot",
    },
    {
      id: 3,
      icon: <StorageIconRoom />,
      notActive: <StorageIconRoomNotActive />,
      title: "Storage Room",
    },
    {
      id: 4,
      icon: <ParkingSpotIcon />,
      notActive: <ParkingSpotIconNotActive />,
      title: "Parking Spot",
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
        <div className=" md:flex hidden items-center justify-center py-4 mx-auto mt-[3rem] ">
          {/* RestRoom Web */}
          <div className="flex flex-col items-center justify-center">
            <div className=" flex items-center justify-center size-[62px] bg-[#5527D7] rounded-lg">
              <RestRoomIcon />
            </div>
            <p className="mt-2 text-base font-semibold">Restroom</p>
          </div>

          {/* Dot Fill */}
          <div className="flex items-center mt-[-1.4rem] ">
            <GoDotFill className="text-[#5527D7]" />
            <div className="text-[#5527D7]">---------</div>
            <GoDotFill className="text-[#5527D7]" />
          </div>

          {/* EV Parking Spot */}
          <div className="flex flex-col items-center justify-center">
            <div className=" flex items-center justify-center size-[62px] bg-[#5527D7] rounded-lg">
              <EvParkingIcon />
            </div>
            <p className="mt-2 text-base font-semibold">EV parking spot</p>
          </div>

          {/* Dot Fill */}
          <div className="flex items-center mt-[-1.4rem] ">
            <GoDotFill className="text-[#5527D7]" />
            <div className="text-[#5527D7]">---------</div>
            <GoDotFill className="text-[#5527D7]" />
          </div>

          {/* Storage Room */}
          <div className="flex flex-col items-center justify-center">
            <div className=" flex items-center justify-center size-[62px] bg-[#5527D7] rounded-lg">
              <StorageIconRoom />
            </div>
            <p className="mt-2 text-base font-semibold">Storage Room</p>
          </div>

          {/* Dot Fill */}
          <div className="flex items-center mt-[-1.4rem] ">
            <GoDotFill className="text-[#5527D7]" />
            <div className="text-[#5527D7]">---------</div>
            <GoDotFill className="text-[#5527D7]" />
          </div>

          {/* Parking Spot */}
          <div className="flex flex-col items-center justify-center">
            <div className=" flex items-center justify-center size-[62px] bg-[#5527D7] rounded-lg">
              <ParkingSpotIcon />
            </div>
            <p className="mt-2 text-base font-semibold">Parking Spot</p>
          </div>
        </div>

        {/* mobile view */}
        <div className=" w-[100vw] md:hidden flex mt-[2rem]   ">
          <div className="  overflow-x-auto ml-[1.5rem] flex mx-auto gap-[2rem] ">
            {catData.map((data, index) => {
              let id = data.id;
              return (
                <div
                  onClick={() => setCatActive(data.id)}
                  className={`flex flex-col gap-[.5rem] p-[1rem] px-[2rem]  items-center  border-2 font-rubik shrink-0 ${
                    id == catActive
                      ? "bg-[#5527D7] border-transparent text-white "
                      : " border-[#D9D9D9] text-[#939393] "
                  }   rounded-lg justify-center`}
                  key={index}
                >
                  <div className={` mt-[.8rem]  `}>
                    {id == catActive ? data.icon : data.notActive}
                  </div>
                  <p className=" text-[.65rem] font-[400]">{data.title}</p>
                </div>
              );
            })}
            <div className=" w-[1rem] bg-transparent "></div>
          </div>
        </div>
      </div>
    </>
  );
};

export default BrowseByCategories;
