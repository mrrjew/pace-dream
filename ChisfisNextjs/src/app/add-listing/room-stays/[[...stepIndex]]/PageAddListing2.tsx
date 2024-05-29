import React, { FC } from "react";
import Select from "@/shared/Select";
import FormItem from "../FormItem";
import { PageAddingListing } from "@/types/types";
import NcInputNumber from "@/components/ListingComponents/NcInputNumber";
import Checkbox from "@/components/ListingComponents/Checkbox";

const PageAddListing2 = () => {
  const generalAmentiesList = [
    {
      label: "Wifi",
      name: "Wifi",
    },
    {
      label: "Parking",
      name: "Parking",
    },
    {
      label: "Breakfast",
      name: "Breakfast",
    },
  ];
  const otherAmentiesList = [
    {
      label: "Fan",
      name: "Fan",
    },
    {
      label: "TV",
      name: "TV",
    },
    {
      label: "Desk",
      name: "Desk",
    },
    {
      label: "Fridge",
      name: "Fridge",
    },
    {
      label: "Clothes dryer",
      name: "Clothes dryer",
    },
    {
      label: "Air conditioning",
      name: "Air conditioning",
    },
  ];

  return (
    <>
      {/* FORM */}
      <div className="listingSection__wrap ">
        <div className="space-y-8">
          <label className="text-lg font-semibold" htmlFor="">
            General amenities
          </label>
          {/* ITEM */}
          <div>
            <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
              {generalAmentiesList?.map((item, index) => (
                <Checkbox
                  inputName="generalAmenities"
                  key={index}
                  label={item.label}
                  name={item.name}
                />
              ))}
            </div>
          </div>
        </div>
      </div>

      <div className="listingSection__wrap my-5">
        <div className="space-y-8">
          <div>
            <label className="text-lg font-semibold" htmlFor="">
              Other amenities
            </label>
            <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
              {otherAmentiesList?.map((item, index) => (
                <Checkbox
                  inputName="otherAmenties"
                  key={index}
                  label={item.label}
                  name={item.name}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
      <div className="space-y-8">
        <div>
          <label className="text-lg font-semibold" htmlFor="">
            Additional amenities
          </label>
          <div className="flex flex-wrap gap-2 mb-6">
            {["Parking", "Washing", "Gaming"].map((type) => (
              <button
                key={type}
                // className={`px-4 py-2 hover:bg-[#632DF8] text-black border border-gray-400 hover:text-white text-[12px] font-[400] rounded-full ${
                //   input.propertyType === type ? "bg-[#632DF8] text-white" : ""
                // }`}
                type="button"
                // onClick={() => handlePropertyTypeSelection(type)}
              >
                {type}
              </button>
            ))}
          </div>
        </div>
        <div>
          <label className="text-lg font-semibold" htmlFor="">
            Pictures of the place
          </label>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2 mt-5">
              Upload the place photos
            </label>
          </div>

          <div className="mt-5 ">
            <div className="mt-1 flex justify-center px-6 pt-5 pb-6 border-2 border-neutral-300 dark:border-neutral-6000 border-dashed rounded-md">
              <div className="space-y-1 text-center">
                <svg
                  className="mx-auto h-12 w-12 text-neutral-400"
                  stroke="currentColor"
                  fill="none"
                  viewBox="0 0 48 48"
                  aria-hidden="true"
                >
                  <path
                    d="M28 8H12a4 4 0 00-4 4v20m32-12v8m0 0v8a4 4 0 01-4 4H12a4 4 0 01-4-4v-4m32-4l-3.172-3.172a4 4 0 00-5.656 0L28 28M8 32l9.172-9.172a4 4 0 015.656 0L28 28m0 0l4 4m4-24h8m-4-4v8m-12 4h.02"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  ></path>
                </svg>

                {/* {input?.coverImage instanceof File &&
                  input?.coverImage.name && (
                    <p className="text-xs text-neutral-500 dark:text-neutral-400">
                      {input.coverImage.name}
                    </p>
                  )} */}

                <div className="flex text-sm text-neutral-6000 dark:text-neutral-300">
                  <label
                    htmlFor="file-upload"
                    className="relative cursor-pointer rounded-md font-medium text-primary-6000 hover:text-primary-500 focus-within:outline-none focus-within:ring-2 focus-within:ring-offset-2 focus-within:ring-primary-500"
                  >
                    <span>Upload a file</span>
                    <input
                      id="file-upload"
                      name="coverImage"
                      // onChange={(e) => {
                      //   setInput((prevState) => ({
                      //     ...prevState,
                      //     coverImage: e?.target?.files?.[0],
                      //   }));
                      // }}
                      accept=".jpg, .jpeg, .png,.gif"
                      type="file"
                      className="sr-only"
                    />
                  </label>
                  <p className="pl-1">or drag and drop</p>
                </div>
                <p className="text-xs text-neutral-500 dark:text-neutral-400">
                  PNG,JPEG, JPG, GIF up to 10MB
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default PageAddListing2;
