"use client";

import { MapPinIcon } from "@heroicons/react/24/solid";
import LocationMarker from "@/components/AnyReactComponent/LocationMarker";
import Label from "@/components/Label";
import GoogleMapReact from "google-map-react";
import React, { FC, useEffect } from "react";
import Input from "@/shared/Input";
import Select from "@/shared/Select";
import FormItem from "../FormItem";

const PageAddListing1 = ({}) => {
  return (
    <>
      <div className="listingSection__wrap ">
        {/* FORM */}

        <div className="space-y-8">
          <h2 className="text-xl font-semibold">Choosing Listing Category</h2>

          <div className="grid grid-cols-1 gap-8 md:gap-5">
            <FormItem label="What is the name of your property?">
              <Input name="location" type="text" placeholder="Property Name" />
            </FormItem>
            <FormItem label="Can you tell us a bit about your property?">
              <Input name="location" type="text" placeholder="Property Name" />
            </FormItem>
          </div>
          <div className="grid grid-cols-1 gap-8 md:gap-5">
            <FormItem label="What type of property are you listing?">
              <Select name="roomstays">
                <option value="">Property Type</option>
                <option value="apartment">Apartment</option>
                <option value="house">House</option>
                <option value="studio">Studio</option>
              </Select>
            </FormItem>
            <FormItem label="Is this a long-term or short-term rental?">
              <Select name="roomtype">
                <option value="">Room Type</option>
                <option value="Any type">Any type</option>
                <option value="Hostel">Hostel</option>
                <option value="Guesthouse">Guesthouse</option>
                <option value="Long term">Long term</option>
                <option value="Short Term">Short Term</option>
              </Select>
            </FormItem>
          </div>
        </div>
      </div>
    </>
  );
};

export default PageAddListing1;
