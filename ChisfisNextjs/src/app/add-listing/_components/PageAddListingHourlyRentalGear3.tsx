"use client";

import React, { useEffect, useState } from "react";
import { ListingDataType } from "@/types/types";
import FormItem from "../room-stays/FormItem";
import Input from "@/shared/Input";
import RoomCounter from "@/components/ListingComponents/RoomCounter";
import PageAddListing4 from "./PageAddListing4";
import { DateImputField,TimeSelector } from "@/components/ListingComponents/TimeAndDateSelecter";

const PageAddListingToHourlyRentalGear3 = (
  {data,updateData}:{updateData:(data:Partial<ListingDataType>)=>void, data:Partial<ListingDataType>}
) => {
  const [bedrooms, setBedrooms] = useState<number>((data?.bedroom as number) || 1);
  const [bathrooms, setBathrooms] = useState<number>((data?.bathroom as number) || 1);

  // update data with bedrooms and bathrooms
  const updateDataWithRooms = () => {
      updateData({...data,bedroom:bedrooms,bathroom:bathrooms})
  }

  // use callback to update data with bedrooms and bathrooms
  useEffect(() => {
    updateDataWithRooms()
  }, [bedrooms, bathrooms])

  return (
    <>
      {/* FORM */}
      <div className=" ">
        {/* FORM */}

        <div className="space-y-4">
            <div className="bg-white rounded-2xl p-6">
                <p className="flex-1 py-1">
                  How much do you charge per hour?
                </p>
              <div className="grid gap-4">
                <FormItem label="">
                  <Input
                    defaultValue={data?.hourlyrate}
                    onChange={(e)=>updateData({...data,hourlyrate:e?.currentTarget?.value})}
                  name="pricePerHour" type="text" placeholder="$10 Per Hour" />
                </FormItem>

                {/* <FormItem label="">
                  <Input 
                    defaultValue={data?.weeklyrate}
                    onChange={(e)=>updateData({...data,weeklyrate:e?.currentTarget?.value})}
                    name="weeklyRate" type="text" placeholder="$300 Weekly rent" />
                </FormItem>
                <FormItem label="">
                  <Input
                    defaultValue={data?.monthlyrate}
                    onChange={(e)=>updateData({...data,monthlyrate:e?.currentTarget?.value})}
                    name="monthlyRate"
                    type="text"
                    placeholder="$1250 Monthly rent"
                  />
                </FormItem> */}
                {/* <FormItem label="">
                  <Input
                    defaultValue={data?.cleaningfeesDaily}
                    onChange={(e)=>updateData({...data,cleaningfeesDaily:e?.currentTarget?.value})}
                    name="cleaningFeesDaily"
                    type="text"
                    placeholder="$15 cleaning fees daily"
                  />
                </FormItem> */}
              </div>
            </div>

            <div className="bg-white p-6 rounded-2xl grid grid-cols-1 space-y-6">
              
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <p className="col-span-2">Choose rental duration time</p>
                  <TimeSelector initialTime={{min:0,hour:0,amPm:'AM'}} onTimeChange={(val)=>{}} />
                  <TimeSelector initialTime={{min:0,hour:0,amPm:'AM'}} onTimeChange={(val)=>{}} />
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <p className="col-span-2">Choose rental duration date</p>
                  <DateImputField placeholder="Start Date" name="startDate" id={"startDate"} />
                  <DateImputField placeholder="End Date" name="endDate" id={"endDate"} />
                </div>
                 <PageAddListing4 data={data} updateData={updateData} />
            </div>
        </div>
      </div>
    </>
  );
};

export default PageAddListingToHourlyRentalGear3;
