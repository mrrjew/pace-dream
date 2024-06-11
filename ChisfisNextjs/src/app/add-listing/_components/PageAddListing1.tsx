"use client";

import { MapPinIcon } from "@heroicons/react/24/solid";
import LocationMarker from "@/components/AnyReactComponent/LocationMarker";
import Label from "@/components/Label";
import GoogleMapReact from "google-map-react";
import React from "react";
import Input from "@/shared/Input";
import Select from "@/shared/Select";
import FormItem from "../room-stays/FormItem";
import { ListingDataType } from "@/types/types";

const PageAddListing1 = ({
  data,
  updateData,
}: {
  updateData: (data: Partial<ListingDataType>) => void;
  data: Partial<ListingDataType>;
}) => {
  return (
    <>
      <div className="listingSection__wrap ">
        {/* FORM */}
        <div className="space-y-4 sm:space-y-8">
          {/* <h2 className="text-xl font-semibold">Property Details</h2> */}
          <div className="grid grid-cols-1 gap-4 sm:gap-6 bg-white rounded-2xl p-6">
            <FormItem label="What is the name of your property?">
              <Input
                defaultValue={data?.placeName}
                onChange={(e) =>
                  updateData({ ...data, placeName: e?.currentTarget?.value })
                }
                name="propertyName"
                type="text"
                placeholder="Property Name"
              />
            </FormItem>
            <FormItem label="Can you tell us a bit about your property?">
              <Input
                defaultValue={data?.placeDescription}
                onChange={(e) =>
                  updateData({
                    ...data,
                    placeDescription: e?.currentTarget?.value,
                  })
                }
                name="propertyDescription"
                type="text"
                placeholder="Property Description"
              />
            </FormItem>
          </div>
          <div className="grid grid-cols-1 gap-4 sm:gap-6 bg-white rounded-2xl p-6">
            <FormItem label="What type of property are you listing?">
              <Select
                defaultValue={data?.propertyType}
                onChange={(e) =>
                  updateData({ ...data, propertyType: e?.currentTarget?.value })
                }
                name="roomstays"
              >
                <option value="">Property Type</option>
                <option value="apartment">Apartment</option>
                <option value="house">House</option>
                <option value="studio">Studio</option>
              </Select>
            </FormItem>
            <FormItem label="Is this a long-term or short-term rental?">
              <Select
                defaultValue={data?.roomType}
                onChange={(e) =>
                  updateData({ ...data, roomType: e?.currentTarget?.value })
                }
                name="roomtype"
              >
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
