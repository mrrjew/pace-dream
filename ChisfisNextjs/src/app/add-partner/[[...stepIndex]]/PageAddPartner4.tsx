import React, { FC } from "react";
import Checkbox from "@/shared/Checkbox";
import { BiHotel } from "react-icons/bi";
import { BsFillHouseAddFill } from "react-icons/bs";
import { MdApartment } from "react-icons/md";
import { FaDollyFlatbed } from "react-icons/fa";

export interface PageAddPartner4Props {}

const PageAddPartner4: FC<PageAddPartner4Props> = () => {
  return (
    <>
      <div>
         <h2 className="text-2xl font-semibold">Which of these best describes your booked room?</h2>
         <p className="mt-4">In this step, we'll ask you which type of stays you have and if guests will book the entire place or just a room. Then let us know the location and how many guests can stay.</p>        
      </div>
      <div className="flex gap-5 flex-wrap">
        <button className="flex rounded-full border px-10 py-2 font-medium"><BiHotel className="mt-1 mr-3"/> Hotel</button>
        <button className="flex rounded-full border px-10 py-2 font-medium"><MdApartment className="mt-1 mr-3"/> Apartment</button>
        <button className="flex rounded-full border px-10 py-2 font-medium"><BsFillHouseAddFill className="mt-1 mr-3"/> House</button>
        <button className="flex rounded-full border lg:px-10 px-16 py-2 font-medium"><FaDollyFlatbed className="mt-1 mr-3"/> Flat</button>
      </div>
    </>
  );
};

export default PageAddPartner4;
