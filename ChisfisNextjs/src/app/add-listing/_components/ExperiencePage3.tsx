"use client";

import React, { useState } from "react";
import { ListingDataType } from "@/types/types";
import FormItem from "../room-stays/FormItem";
import Input from "@/shared/Input";
import RoomCounter from "@/components/ListingComponents/RoomCounter";
import DragDrop from "./dag-drop-file";

const ExperiencePag3 = (
  {data,updateData}:{updateData:(data:Partial<ListingDataType>)=>void, data:Partial<ListingDataType>}
) => {
  const [expereineceDuration, setExpereineceDuration] = useState<number>(1);
//   const [bathrooms, setBathrooms] = useState<number>((data?.bathroom as number) || 1);

  // update data with bedrooms and bathrooms
//   const updateDataWithRooms = () => {
//       updateData({...data,bedroom:bedrooms,bathroom:bathrooms})
//   }

//   // use callback to update data with bedrooms and bathrooms
//   useEffect(() => {
//     updateDataWithRooms()
//   }, [bedrooms, bathrooms])

  return (
    <>
      {/* FORM */}
        <div className=" ">
        {/* FORM */}

            <div className="space-y-4">
                <div className="bg-white p-2 md:p-6 rounded-2xl grid grid-cols-1 space-y-6">
                    <RoomCounter
                        title="How long does the experience last?"
                        count={expereineceDuration}
                        setCount={setExpereineceDuration}
                    />
                </div>
                <div className="grid bg-white rounded-2xl p-4 md:p-6">
                        <FormItem label="What is the price for a person?">
                        <Input
                            defaultValue={data?.hourlyrate}
                            onChange={(e)=>updateData({...data,hourlyrate:e?.currentTarget?.value})}
                        name="amountPerPerson" type="text" placeholder="$50 per person" />
                        </FormItem>
                </div>
                <div>
            <div className="bg-white p-2 md:p-6 rounded-2xl grid grid-cols-1 space-y-6">
                <div className="mb-6">
                <label className="block text-gray-700 font-medium mb-2">
                Pictures of the place
                </label>
                <div className="grid grid-cols-1 items-center">
                <DragDrop />
                </div>
            </div>

            <div className="mb-6">
                    <label className="block text-gray-700 font-medium mb-2">
                    Video of the place
                    </label>
                    <div className="p-1 items-center grid grid-cols-1">
                    <DragDrop isVideo />
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
