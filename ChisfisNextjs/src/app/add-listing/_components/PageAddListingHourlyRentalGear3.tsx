"use client";

import React, { useEffect, useState } from "react";
import { ListingDataType } from "@/types/types";
import FormItem from "../room-stays/FormItem";
import Input from "@/shared/Input";
import RoomCounter from "@/components/ListingComponents/RoomCounter";
import PageAddListing4 from "./PageAddListing4";
import { DateImputField,TimeSelector } from "@/components/ListingComponents/TimeAndDateSelecter";
import { RentableItem } from "@/types/rentalItems";

const PageAddListingToHourlyRentalGear3 = (
  {data,updateData}:{updateData:(data:Partial<RentableItem>)=>void, data:Partial<RentableItem>}
) => {
  // const [bedrooms, setBedrooms] = useState<number>((data?.details?.bedroom_count || 1));
  // const [bathrooms, setBathrooms] = useState<number>((data?.details?.bathroom_count || 1));

  // update data with bedrooms and bathrooms
  // const updateDataWithRooms = () => {
  //     updateData({...data,details:{...data?.details,bedroom_count:bedrooms,bathroom_count:bathrooms}})
  // }

  // // use callback to update data with bedrooms and bathrooms
  // useEffect(() => {
  //   updateDataWithRooms()
  // }, [bedrooms, bathrooms])

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
                    defaultValue={data?.price?.filter((p)=>p.frequency==="hourly")?.[0]?.amount || ""}
                    onChange={(e)=>{
                      // const _others = data?.price?.filter((p)=>p.frequency!=="hourly") || [];
                      const _existing = data?.price?.find((p)=>p.frequency!=="hourly");
                      const _price =  _existing ?
                        {
                          ..._existing,
                          amount:parseFloat(e.target.value),
                          frequency:"hourly",
                          pricing_type:"base",
                          recurring_days:0,
                          discounts:[],
                          currency: "USD",
                          grace_period:0,
                        } :
                        {
                          frequency:'hourly',
                          grace_period:0,
                          pricing_type:"base",
                          currency:"USD",
                          recurring_days:0,
                          discounts:[],
                          amount:parseInt(e.target.value)
                        } as any
                      updateData({
                          ...data,
                          price:[_price]
                      })
                    }}
                  name="pricePerHour" type="text" placeholder="$10 Per Hour" />
                </FormItem>
              </div>
            </div>

            <div className="bg-white p-6 rounded-2xl grid grid-cols-1 space-y-6">
              
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <p className="col-span-2">Choose rental duration time</p>
                  <TimeSelector 
                    initialTime={{
                      min:data?.details?.hourlt_rental_time?.start_time?.split(':')?.[1] || 0,
                      hour:data?.details?.hourlt_rental_time?.start_time?.split(':')?.[0] || 0,
                      amPm:data?.details?.hourlt_rental_time?.start_time?.split(':')?.[2] || 'AM'
                     }}
                    onTimeChange={(val)=>{
                    updateData({...data,details:{...data?.details,hourlt_rental_time:{
                      ...data?.details?.hourlt_rental_time,
                      // convert object to string time format 00:00 AM
                      start_time:`${val.hour}:${val.min} ${val.amPm}`
                    }}})
                  }} />
                  <TimeSelector initialTime={{
                      min:data?.details?.hourlt_rental_time?.end_time?.split(':')?.[1] || 0,
                      hour:data?.details?.hourlt_rental_time?.end_time?.split(':')?.[0] || 0,
                      amPm:data?.details?.hourlt_rental_time?.end_time?.split(':')?.[2] || 'AM'
                  }} onTimeChange={(val)=>{
                    updateData({...data,details:{...data?.details,hourlt_rental_time:{
                      ...data?.details?.hourlt_rental_time,
                      // convert object to string time format 00:00 AM
                      end_time:`${val.hour}:${val.min} ${val.amPm}`
                    }}})
                  }} />
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <p className="col-span-2">Choose rental duration date</p>
                  <DateImputField placeholder="Start Date" name="startDate" id={"startDate"}
                    defaultValue={data?.details?.hourlt_rental_time?.start_date}
                    onChange={(date)=>{
                      updateData({...data,details:{...data?.details,hourlt_rental_time:{
                        ...data?.details?.hourlt_rental_time,
                        start_date:date
                      }}})
                    }}
                  />
                  <DateImputField placeholder="End Date" name="endDate" id={"endDate"}
                    defaultValue={data?.details?.hourlt_rental_time?.end_date}
                    onChange={(date)=>{
                      updateData({...data,details:{...data?.details,hourlt_rental_time:{
                        ...data?.details?.hourlt_rental_time,
                        end_date:date
                      }}})
                    }}
                  />
                </div>
                 <PageAddListing4 data={data} updateData={updateData} />
            </div>
        </div>
      </div>
    </>
  );
};

export default PageAddListingToHourlyRentalGear3;
