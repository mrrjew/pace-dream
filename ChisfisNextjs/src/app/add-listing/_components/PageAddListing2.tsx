'use client';
import React, { useEffect } from "react";
import FormItem from "../room-stays/FormItem";
// import { ListingDataType } from "@/types/types";
import Input from "@/shared/Input";
import {GoogleMapLayout} from "@/components/GoogleMap";
import { RentableItem } from "@/types/rentalItems";


const PageAddListing2 = (
  {data,updateData}:{updateData:(data:Partial<RentableItem>)=>void, data:Partial<RentableItem>}
) => {
  // const [address, setAddress] = React.useState<{
  //   country: string;
  //   street: string;
  //   city: string;
  //   state: string;
  //   zipcode: string;
  //   link?: string;
  //   place?: string;
  // }>({
  //   country:data?.location?.address?.split(',')?.at(0) || "",
  //   street: data?.location?.address?.split(',')?.at(1) || "",
  //   city: data?.location?.address?.split(',')?.at(2) || "",
  //   state: data?.location?.address?.split(',')?.at(3) || "",
  //   zipcode: data?.location?.address?.split(',')?.at(4) || "",
  //   link: data?.location?.link || "",
  //   place: data?.location?.place || ""
  // });

  // useEffect(()=>{
  //   // convert address object to string
  //   const addressString = Object.values(address).join(',');
  //   // update data
  //   updateData({...data,location:{...data.location,address:addressString}})
  // },[address])

  return (
    <>
      {/* FORM */}
      <div className="listingSection__wrap bg-white rounded-2xl ">
        {/* FORM */}
        <div className="space-y-6 p-5 pb-0">
          <h2 className="text-xl font-semibold">Location Details</h2>
          <div className="grid grid-cols-1 gap-4 sm:gap-6">
            <FormItem label="">

              <Input 
                defaultValue={data?.location?.country}
                onChange={(e)=>
                  updateData({...data,location:{...data?.location,country:e?.currentTarget?.value}} as RentableItem
                )}
              name="country" type="text" placeholder="Country" />
            </FormItem>
          </div>
          <div className="grid sm:grid-cols-2 gap-4 sm:gap-6">
            <FormItem label="">

              <Input 
                defaultValue={data?.location?.street_address}
                onChange={(e)=>updateData({...data,location:{...data?.location,street_address:e?.currentTarget?.value}} as RentableItem)}
                name="street" type="text" placeholder="Street" />
            </FormItem>
            <FormItem label="">
              <Input
                defaultValue={data?.location?.city}
                onChange={(e)=>updateData({...data,location:{...data?.location,city:e?.currentTarget?.value}} as RentableItem)}
              name="city" type="text" placeholder="City" />
            </FormItem>
          </div>
          <div className="grid sm:grid-cols-2 gap-4 sm:gap-6">
            <FormItem label="">

              <Input 
                defaultValue={data?.location?.state}
                onChange={(e)=>updateData({...data,location:{...data.location,state:e?.currentTarget?.value}} as RentableItem)}
              name="state" type="text" placeholder="State" />
            </FormItem>
            <FormItem label="">
              <Input 
                defaultValue={data?.location?.zipcode}
                onChange={(e)=>updateData({...data,location:{...data.location,zipcode:e?.currentTarget?.value}} as RentableItem)}
              name="zipcode" type="text" placeholder="Zip Code" />
            </FormItem>
          </div>
          {/* <div className="grid grid-cols-1 gap-4 sm:gap-6">
            <FormItem label="">
              <Input

                defaultValue={data?.location?.address}
                onChange={(e)=>{
                  const link = e?.currentTarget?.value;
                  // extract latitude and longitude from the link such as google map link https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d387191.33750346623!2d-73.97968099999999!3d40.6974881!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c24fa5d33f083b%3A0xc80b8f06e177fe62!2sNew%20York%2C%20NY%2C%20USA!5e0!3m2!1sen!2sin!4v1716987280536!5m2!1sen!2sin using regex
                    const regex = /!3d(-?\d+\.\d+)+!2m3/;
                    const lat = link?.match(regex)?.[0]?.replace(/!3d/,'');
                    const lng = link?.match(regex)?.[1]?.replace(/!2m3/,'');
                    // const address = link?.split('!2s')[1]?.split('!3d')[0]?.replace(/%20/g,' ');
                    updateData({...data,location:{...data.location,link:link,latitude:parseFloat(lat),longitude:parseFloat(lng)}} as RentableItem)
                }}
                name="location"
                type="text"
                placeholder="Transportation links near the property"
              />
            </FormItem>
          </div> */}
          <div className="w-full h-[260px] rounded-lg">
            <GoogleMapLayout 
              init={{
                center:{lat:data?.location?.latitude || 0,lng:data?.location?.longitude || 0},
                place: data.location?.address || "",
              }}
              onChange={(lat,lng,link,address)=>{
                updateData({...data,location:{...data?.location,latitude:lat,longitude:lng,googlemap_link:link,address:address}} as RentableItem)
              }}
            />
          </div>

          {/* <label className="inline-flex items-center cursor-pointer">
            <input type="checkbox" value="" className="sr-only peer" />
            <div className="relative w-11 h-6 bg-gray-200 rounded-full peer peer-focus:ring-4 peer-focus:ring-blue-300 dark:peer-focus:ring-blue-800 dark:bg-gray-700 peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-0.5 after:start-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-blue-600"></div>
            <span className="ms-3 text-sm font-medium text-gray-900 dark:text-gray-300">
              Show your current location
            </span>
          </label> */}
        </div>
      </div>
    </>
  );
};

export default PageAddListing2;
