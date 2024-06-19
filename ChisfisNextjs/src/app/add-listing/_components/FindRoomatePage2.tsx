"use client";

import { RentableItem } from "@/types/rentalItems"
// import { ListingDataType } from "@/types/types"

export default function AddListingFindRoomatePage2(
    {data,updateData}:{updateData:(data:Partial<RentableItem>)=>void, data:Partial<RentableItem>}
) {
  return (
    <>
      <div className="listingSection__wrap ">
        {/* FORM */}
        <div className="space-y-4 sm:space-y-8">
          {/* <h2 className="text-xl font-semibold">Property Details</h2> */}
          <div className="grid grid-cols-1 gap-4 sm:gap-6 bg-white rounded-2xl p-6">
            <p>Any specific gender?</p>
            <select

            className="rounded-lg border-1 border-gray-400 focus:ring-0"
              defaultValue={data?.details?.room_mate?.gender}
              onChange={(e)=>updateData({...data,details:{...data?.details,room_mate:{...data?.details?.room_mate,gender:e?.target.value}}})}
              name="gender" >
                <option value="">Desired gender</option>
                <option value="any">Any</option>
                <option value="male">Female</option>
                <option value="female">Male</option>
            </select>
            <p>Desired roommate?</p>
            <select
                className="rounded-lg border-1 border-gray-400 focus:ring-0"
                defaultValue={data?.details?.room_mate?.age}
                onChange={(e)=>updateData({...data,details:{...data?.details,room_mate:{...data?.details?.room_mate,age:e?.target.value}}})}
              name="age">
              <option value="">Age</option>
                <option value="18">18-25</option>
                <option value="25">25-35</option>
                <option value="35">35-45</option>
                <option value="45">45-55</option>
                <option value="55">55-65</option>
                <option value="65">Above 65</option>
            </select>
            <select
            className="rounded-lg border-1 border-gray-400 focus:ring-0"
              defaultValue={data?.details?.room_mate?.life_style}
              onChange={(e)=>updateData({...data,details:{...data?.details,room_mate:{...data?.details?.room_mate,life_style:e?.target.value}}})}
              name="lifeStyleHabit">
                   <option value="">Life Style Habit</option>
                    <option value="smoking">Smoking</option>
                    <option value="drinking">Drinking</option>
                    <option value="partying">Partying</option>
                    <option value="none">None</option>
                
            </select>
          </div>
        </div>
      </div>
    </>
  );
}
