"use client";

import React, { useState } from "react";
import FormItem from "../room-stays/FormItem";
import Input from "@/shared/Input";
import RoomCounter from "@/components/ListingComponents/RoomCounter";
import {DragDrop} from "./media/drag-drop-file";
import { Price, RentableItem } from "@/types/rentalItems";

const ExperiencePag3 = (
  {data,updateData}:{updateData:(data:Partial<RentableItem>)=>void, data:Partial<RentableItem>}
) => {
  const [expereineceDuration, setExpereineceDuration] = useState<number>(1);

  return (
    <>
      {/* FORM */}
      <div className=" ">
        {/* FORM */}

          <div className="space-y-4">
            <div className="gap-4 grid grid-cols-1 md:grid-cols-2">
                <div className="bg-white p-2 md:p-6 rounded-2xl grid grid-cols-1 space-y-6">
                    <RoomCounter
                        title="How long does the experience last?"
                        count={expereineceDuration}
                        setCount={setExpereineceDuration}
                    />
                </div>

                <div className="grid bg-white rounded-2xl p-4 md:p-6 place-items-center">
                        <FormItem label="What is the price for a person?"
                          className="w-full space-y-5"
                        >
                        <Input
                            className="w-full"
                            defaultValue={data?.price?.filter((p)=>p.frequency==="custom")?.[0]?.amount || ""}
                            onChange={(e)=>{
                                const _existing = data?.price?.filter((p)=>p.frequency!=="custom")?.[0];
                                const _price : Price =  _existing ?
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
                                      amount:parseInt(e.target.value)
                                    }
                                updateData({
                                    ...data,
                                    price:[_price]
                                })
                            }}
                        name="amountPerPerson" type="text" placeholder="$50 per person" />
                        </FormItem>
                </div>
            </div>
          <div>

            <div className="bg-white p-2 md:p-6 rounded-2xl grid grid-cols-1 space-y-6">
              <div className="mb-6">
                <label className="block text-gray-700 font-medium mb-2">
                  Pictures of the place
                </label>
                <div className="grid grid-cols-1 items-center">

                <DragDrop  type="image" isMultiple maxFiles={6} media={data?.gallery?.images || []} onUploaded={(urls)=>{
                    updateData({...data,gallery:{...data.gallery,thumbnail:urls[0],images:urls}})
                }}/>
                </div>
              </div>

            <div className="mb-6">
                    <label className="block text-gray-700 font-medium mb-2">
                    Video of the place
                    </label>
                    <div className="p-1 items-center grid grid-cols-1">
                    <DragDrop  type="video" isMultiple={false} maxFiles={1} media={
                      // get video from images
                      data?.gallery?.videos || []
                    } onUploaded={(urls)=>{
                        updateData({ ...data, gallery:{...data?.gallery, videos:urls}})
                        }}/>
                    </div>
            </div>
            </div>
          </div>
        </div>
      </div>
      {/* <PageAddListing4 data={data} updateData={updateData} /> */}
    </>
  );
};

export default ExperiencePag3;
