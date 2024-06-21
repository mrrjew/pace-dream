/* eslint-disable react-hooks/exhaustive-deps */
"use client";
import React, { useEffect } from "react";
import Input from "@/shared/Input";
import Select from "@/shared/Select";
import FormItem from "../room-stays/FormItem";

import { RentableItem } from "@/types/rentalItems";
import { usePathname } from "next/navigation";
const PageAddListing1 = (
  {data,updateData}:{updateData:(data:Partial<RentableItem>)=>void, data:Partial<RentableItem>}
) => {
  const path = usePathname();
  const [propertyTypes, setPropertyTypes] = React.useState<{title:string,options:{id:string,name?:string}[]}>({title:'',options:[]});
  const [roomTypes, setRoomTypes] = React.useState<{title:string,options:{id:string,name?:string}[]}>({title:'',options:[]});

  const slectionData = {
    propertyType: [
      { id: "apartment", name: "Apartment" },
      { id: "house", name: "House" },
      { id: "studio", name: "Studio" },
    ],
    roomType: [
      { id: "any type", name: "Any type" },
      { id: "hostel", name: "Hostel" },
      { id: "guest house", name: "Guesthouse" },
      { id: "logn term", name: "Long term" },
      { id: "short term", name: "Short term" },
    ],
    hourlyGearType: [
      {id: 'tech gear', name: 'Tech Gear'},
      {id:"music gear", name: "Music Gear"},
      {id:"photography", name: "photography"},
      {id:"fashion", name: "Fashion"},
    ],
    hourlyGearProucts: [
      {id: 'd70 camera', name: 'D70 Camera'},
      {id: 'Camping tent', name: 'Comping Tent'},
      {id: 'mi foldable electric bike', name: 'MI Foldable Electric Bike'},
    ],
    offeringExperience: [
      {id: 'cooking class', name: 'Cooking Class'},
      {id: 'guided hike', name: 'Guided Hike'},
      {id: 'photography tour', name: 'Photography Tour'},
    ]

  }


  // set property types and room types based on the current path
  useEffect(() => {
    const _path = (window?.location?.pathname.split('/').pop() || 'Room Stays').replaceAll('-', ' ').toLowerCase().replace(/\b\w/g, l => l.toLowerCase());
    console.log('path', _path," (absolute: ", path);
    if(['room stays','time based','find roommate'].includes(_path)){
      setPropertyTypes({
        title: 'Select Property Type',
        options: slectionData.propertyType
      });
      setRoomTypes(
        {
          title: 'Select Room Type',
          options: slectionData.roomType
        }
      );
      return;
    }
    if(_path === 'hourly rental gear'){
      setPropertyTypes({ title: 'Select Gear Type', options: slectionData.hourlyGearType });
      setRoomTypes({title: 'Select Rental Gear Product', options: slectionData.hourlyGearProucts });
      return;
    }
    if(_path === 'experience'){
      setPropertyTypes({ title: 'What kind of experience are you offering?', options: slectionData.offeringExperience });
      setRoomTypes({title: 'Select Experience', options: []});
    }
  }, [path])

  return (
    <>
      <div className="listingSection__wrap ">
        {/* FORM */}
        <div className="space-y-4 sm:space-y-8">
          {/* <h2 className="text-xl font-semibold">Property Details</h2> */}
          <div className="grid grid-cols-1 gap-4 sm:gap-6 bg-white rounded-2xl p-6">
            <FormItem label="What is the name of your property?">
              <Input

                 defaultValue={data?.title}
                onChange={(e)=>updateData({...data,title:e?.currentTarget?.value})}
                name="propertyName" type="text" placeholder="Property Name" />
            </FormItem>
            <FormItem label="Can you tell us a bit about your property?">
              <Input 
                defaultValue={data?.details?.description}
                onChange={(e)=>updateData({...data,details:{...(data?.details||{}),description:e?.currentTarget?.value}}) }
                name="propertyDescription" 
                type="text" 
              placeholder="Property Description" />
            </FormItem>
          </div>
        { (Number(propertyTypes?.options?.length) + Number(roomTypes.options.length)) >0 && <div className="grid grid-cols-1 gap-4 sm:gap-6 bg-white rounded-2xl p-6">
           {Number(propertyTypes?.options?.length)> 0 && <FormItem label={propertyTypes.title}>
              <Select
                defaultValue={data?.details?.property_type}
                onChange={(e)=>{
                   // if selected is undefined
                   if(e.currentTarget.value === undefined){
                     return
                   }
                   updateData({...data,details:{...(data?.details||{}),property_type:e?.currentTarget?.value as any}})
                }}
                name="roomstays" 
                >
                {/* <option value={undefined}>Property Type</option>
                <option value="apartment">Apartment</option>
                <option value="house">House</option>
                <option value="studio">Studio</option> */}
                {propertyTypes?.options?.map((item,index)=>(
                  <option key={index} value={item.id}>{item.name}</option>
                ))}
              </Select>
            </FormItem>}
            {(Number(roomTypes.options.length) > 0) && <FormItem label={roomTypes.title}>
              <Select

                defaultValue={data?.details?.room_type}
                onChange={(e)=>{
                  if(e.currentTarget.value === undefined){
                    return
                  }
                  updateData({...data,details:{...(data?.details||{}),room_type:e?.currentTarget?.value}})
                }}
                name="roomtype">
                {/* <option value={undefined}>Room Type</option>
                <option value="any type">Any type</option>
                <option value="hostel">Hostel</option>
                <option value="guest house">Guesthouse</option>
                <option value="long term">Long term</option>
                <option value="short term">Short Term</option> */}
                {roomTypes?.options?.map((item,index)=>(
                  <option key={index} value={item.id}>{item.name}</option>
                ))}
              </Select>
            </FormItem>}
          </div>}
        </div>
      </div>
    </>
  );
};

export default PageAddListing1;
