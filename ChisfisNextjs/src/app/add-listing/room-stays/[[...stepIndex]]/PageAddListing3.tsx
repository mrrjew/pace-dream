import React, { FC, useState } from "react";
import { PageAddingListing } from "@/types/types";
import Checkbox from "@/components/ListingComponents/Checkbox";
import Select from "@/shared/Select";
import FormItem from "../FormItem";
import Input from "@/shared/Input";
import NcInputNumber from "@/components/ListingComponents/NcInputNumber";
import RoomCounter from "@/components/ListingComponents/RoomCounter";

const PageAddListing3 = () => {
  const [bedrooms, setBedrooms] = useState<number>(1);
  const [bathrooms, setBathrooms] = useState<number>(1);
  return (
    <>
      {/* FORM */}
      <div className="listingSection__wrap ">
        {/* FORM */}

        <div className="space-y-4">
          <h2 className="text-xl font-semibold">Rental Details</h2>
          <div className="grid sm:grid-cols-2 gap-4 md:gap-6">
            <FormItem label="Daily Rent">
              <Input name="street" type="text" placeholder="$50 Daily rent" />
            </FormItem>
            <FormItem label="Weekly Rent">
              <Input name="city" type="text" placeholder="$300 Weekly rent" />
            </FormItem>
            <FormItem label="Monthly Rent">
              <Input
                name="street"
                type="text"
                placeholder="$1250 Monthly rent"
              />
            </FormItem>
            <FormItem label="Cleaning Fees Daily">
              <Input
                name="city"
                type="text"
                placeholder="$15 cleaning fees daily"
              />
            </FormItem>
          </div>
          <div className="grid sm:grid-cols-2 gap-4 items-center md:gap-6">
            <RoomCounter
              title="No of Bedrooms"
              count={bedrooms}
              setCount={setBedrooms}
            />
            <RoomCounter
              title="No of Bathrooms"
              count={bathrooms}
              setCount={setBathrooms}
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default PageAddListing3;
