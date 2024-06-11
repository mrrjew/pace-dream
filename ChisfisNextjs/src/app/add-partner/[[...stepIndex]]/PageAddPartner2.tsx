"use client";

import { MapPinIcon } from "@heroicons/react/24/solid";
import LocationMarker from "@/components/AnyReactComponent/LocationMarker";
import Label from "@/components/Label";
import GoogleMapReact from "google-map-react";
import React, { FC } from "react";
import ButtonSecondary from "@/shared/ButtonSecondary";
import Input from "@/shared/Input";
import Select from "@/shared/Select";
import FormItem from "../FormItem";

export interface PageAddPartner2Props {}

const PageAddPartner2: FC<PageAddPartner2Props> = () => {
  return (
    <>
      <div>
        <h2 className="text-2xl font-semibold">
          Tell about the booked room details.
        </h2>
        <p className="mt-4">
          In this step, we'll ask you which type of stays you have and if guests
          will book the entire place or just a room. Then let us know the
          location and how many guests can stay.
        </p>
      </div>
      <div className="flex gap-5">
        <button className=" rounded-3xl border h-12 w-12">-</button>
        <button className="rounded-full border px-12 py-2">
          USD $80/ per day
        </button>
        <button className=" rounded-3xl border h-12 w-12">+</button>
      </div>
      <p className="text-[#cac7c7]">His Bid rate is $75 to $90</p>
    </>
  );
};

export default PageAddPartner2;
