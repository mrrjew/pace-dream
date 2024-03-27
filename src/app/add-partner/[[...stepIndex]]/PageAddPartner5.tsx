import React, { FC } from "react";
import ButtonPrimary from "@/shared/ButtonPrimary";
import Input from "@/shared/Input";
import { MdApartment } from "react-icons/md";
import { FaDollyFlatbed } from "react-icons/fa";

export interface PageAddPartner5Props {}

const PageAddPartner5: FC<PageAddPartner5Props> = () => {

  return (
    <>
      <div>
         <h2 className="text-2xl font-semibold">What type of place will roommate have?</h2>
         <p className="mt-4">In this step, we'll ask you which type of stays you have and if guests will book the entire place or just a room. Then let us know the location and how many guests can stay.</p>        
      </div>
      <div className="flex gap-5">
        <button className="flex rounded-full border lg:px-10 px-6 py-2 font-medium"><MdApartment className="mt-1 mr-3"/>Shared room</button>
        <button className="flex rounded-full border lg:px-10 px-6 py-2 font-medium"><FaDollyFlatbed className="mt-1 mr-3"/> Single room</button>
      </div>
    </>
  );
};

export default PageAddPartner5;
