/* eslint-disable react-hooks/exhaustive-deps */
"use client";

import React, { useEffect, useState } from "react";
import FormItem from "../room-stays/FormItem";
import Input from "@/shared/Input";
import RoomCounter from "@/components/ListingComponents/RoomCounter";
import PageAddListing4 from "./PageAddListing4";
import { RentableItem } from "@/types/rentalItems";

const PageAddListing3 = (
  {data,updateData}:{updateData:(data:Partial<RentableItem>)=>void, data:Partial<RentableItem>}
) => {
  const [bedrooms, setBedrooms] = useState<number>((data?.details?.bedroom_count as number) || 1);
  const [bathrooms, setBathrooms] = useState<number>((data?.details?.bathroom_count as number) || 1);

  // update data with bedrooms and bathrooms
  const updateDataWithRooms = () => {
      updateData({...data,details:{...data?.details,bedroom_count:bedrooms,bathroom_count:bathrooms}})
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
                  What is the rental price per month?
                </p>
              <div className="grid sm:grid-cols-2 gap-4 md:gap-4">
                <FormItem label="">
                  <Input
                    defaultValue={data?.price?.filter((p)=>p.frequency==="daily")?.[0]?.amount || ""}
                    onChange={(e)=>{
                      const _others = data?.price?.filter((p)=>p.frequency!=="daily") || [];
                      const _existing = data?.price?.find((p)=>p.frequency!=="daily");
                      const _price =  _existing ?
                        {
                          ..._existing,
                          amount:parseFloat(e.target.value),
                          frequency:"daily",
                          pricing_type:"base",
                          recurring_days:0,
                          discounts:[],
                          currency: "USD",
                          grace_period:0,
                        } :
                        {
                          frequency:'daily',
                          grace_period:0,
                          pricing_type:"base",
                          currency:"USD",
                          recurring_days:0,
                          discounts:[],
                          amount:parseFloat(e.target.value)
                        } as any
                      updateData({
                        ...data,
                        price:[_price,..._others]
                      })
                    }}
                  name="daily_rent" type="number" placeholder="$50 Daily rent" />
                </FormItem>
                <FormItem label="">
                  <Input 
                    defaultValue={data?.price?.filter((p)=>p.frequency==="weekly")?.[0]?.amount || ""}
                    onChange={(e)=>{
                      const _others = data?.price?.filter((p)=>p.frequency!=="weekly") || [];
                      const _existing = data?.price?.find((p)=>p.frequency!=="weekly");
                      const _price =  _existing ?
                        {
                          ..._existing,
                          amount:parseFloat(e.target.value),
                          frequency:"weekly",
                          pricing_type:"base",
                          recurring_days:0,
                          discounts:[],
                          currency: "USD",
                          grace_period:0,
                        } :
                        {
                          frequency:'weekly',
                          grace_period:0,
                          pricing_type:"base",
                          currency:"USD",
                          recurring_days:0,
                          discounts:[],
                          amount:parseFloat(e.target.value)
                        } as any
                      updateData({
                        ...data,
                        price:[_price,..._others]
                      })
                    }}
                    name="weeklyRate"
                    type="number"
                    placeholder="$300 Weekly rent" />
                </FormItem>
                <FormItem label="">
                  <Input
                    defaultValue={data?.price?.filter((p)=>p.frequency==="monthly")?.[0]?.amount || ""}
                    onChange={(e)=>{
                      const _others = data?.price?.filter((p)=>p.frequency!=="monthly") || [];
                      const _existing = data?.price?.find((p)=>p.frequency!=="monthly");
                      const _price =  _existing ?
                        {
                          ..._existing,
                          amount:parseFloat(e.target.value),
                          frequency:"monthly",
                          pricing_type:"base",
                          recurring_days:0,
                          discounts:[],
                          currency: "USD",
                          grace_period:0,
                        } :
                        {
                          frequency:'monthly',
                          grace_period:0,
                          pricing_type:"base",
                          currency:"USD",
                          recurring_days:0,
                          discounts:[],
                          amount:parseFloat(e.target.value)
                        } as any
                      updateData({
                        ...data,
                        price:[_price,..._others]
                      })
                    }}
                    name="monthlyRate"
                    type="number"
                    placeholder="$1250 Monthly rent"
                  />
                </FormItem>
                <FormItem label="">
                  <Input
                    defaultValue={data?.price?.filter((p)=>p.frequency==="custom")?.[0]?.amount || ""}
                    onChange={(e)=>{
                      const _others = data?.price?.filter((p)=>p.frequency!=="custom") || [];
                      const _existing = data?.price?.find((p)=>p.frequency!=="custom");
                      const _price =  _existing ?
                        {
                          ..._existing,
                          amount:parseFloat(e.target.value),
                          frequency:"custom",
                          pricing_type:"base",
                          recurring_days:0,
                          discounts:[],
                          currency: "USD",
                          grace_period:0,
                        } :
                        {
                          frequency:'custom',
                          grace_period:0,
                          pricing_type:"base",
                          currency:"USD",
                          recurring_days:0,
                          discounts:[],
                          amount:parseFloat(e.target.value)
                        } as any
                      updateData({
                        ...data,
                        price:[_price,..._others]
                      })
                    }}
                    name="cleaningFeesDaily"
                    type="number"
                    placeholder="$15 cleaning fees daily"
                  />
                </FormItem>
              </div>
            </div>

            <div className="bg-white p-6 rounded-2xl grid grid-cols-1 space-y-6">
               <RoomCounter
                  title="How many bedrooms do you have?"
                  count={bedrooms}
                  setCount={setBedrooms}
                  placeholder="Bedrooms"
                />
                <RoomCounter
                  title="How many bathrooms do you have?"
                  count={bathrooms}
                  setCount={setBathrooms}
                  placeholder="Bathrooms"
                />
                 <PageAddListing4 data={data} updateData={updateData} />
            </div>
            {/* <div>
             
            </div> */}
        </div>
      </div>
    </>
  );
};

export default PageAddListing3;