'use client'

import { ListingDataType } from "@/types/types"

export default function AddListingFindRoomatePage2(
    {data,updateData}:{updateData:(data:Partial<ListingDataType>)=>void, data:Partial<ListingDataType>}
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
            //   defaultValue={}
            //   onChange={(e)=>updateData({...data,propertyType:e?.currentTarget?.value})}
              name="gender" >
                <option value="">Desired gender</option>
                <option value="any">Any</option>
                <option value="male">Female</option>
                <option value="female">Male</option>
                <option value="other">
                    Prefer not to say
                </option>
            </select>
            <p>Desired roommate?</p>
            <select
                className="rounded-lg border-1 border-gray-400 focus:ring-0"
            //   defaultValue={data?.roomType}
            //   onChange={(e)=>updateData({...data,roomType:e?.target.value})} 
              name="age">
              <option value="">Age</option>
                <option value="18-25">18-25</option>
                <option value="25-35">25-35</option>
                <option value="35-45">35-45</option>
                <option value="45-55">45-55</option>
                <option value="55-65">55-65</option>
                <option value="65-120">Above 65</option>
            </select>
            <select
            className="rounded-lg border-1 border-gray-400 focus:ring-0"
            //   defaultValue={data?.roomType}
            //   onChange={(e)=>updateData({...data,roomType:e?.target.value})} 
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
  )
}