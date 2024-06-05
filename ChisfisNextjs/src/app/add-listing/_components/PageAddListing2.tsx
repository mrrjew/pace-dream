import React from "react";
import FormItem from "../room-stays/FormItem";
import { ListingDataType } from "@/types/types";
import Input from "@/shared/Input";

const PageAddListing2 = (
  {data,updateData}:{updateData:(data:Partial<ListingDataType>)=>void, data:Partial<ListingDataType>}
) => {
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
                defaultValue={data?.country}
                onChange={(e)=>updateData({...data,country:e?.currentTarget?.value})}
              name="country" type="text" placeholder="Country" />
            </FormItem>
          </div>
          <div className="grid sm:grid-cols-2 gap-4 sm:gap-6">
            <FormItem label="">
              <Input 
                defaultValue={data?.street}
                onChange={(e)=>updateData({...data,street:e?.currentTarget?.value})}
                name="street" type="text" placeholder="Street" />
            </FormItem>
            <FormItem label="">
              <Input
                defaultValue={data?.city}
                onChange={(e)=>updateData({...data,city:e?.currentTarget?.value})}
              name="city" type="text" placeholder="City" />
            </FormItem>
          </div>
          <div className="grid sm:grid-cols-2 gap-4 sm:gap-6">
            <FormItem label="">
              <Input 
                defaultValue={data?.state}
                onChange={(e)=>updateData({...data,state:e?.currentTarget?.value})}
              name="state" type="text" placeholder="State" />
            </FormItem>
            <FormItem label="">
              <Input 
                defaultValue={data?.postalCode}
                onChange={(e)=>updateData({...data,postalCode:e?.currentTarget?.value})}
              name="zipcode" type="text" placeholder="Zip Code" />
            </FormItem>
          </div>
          <div className="grid grid-cols-1 gap-4 sm:gap-6">
            <FormItem label="">
              <Input
                defaultValue={data?.location?.link}
                onChange={(e)=>{
                  const link = e?.currentTarget?.value;
                  // extract latitude and longitude from the link such as google map link https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d387191.33750346623!2d-73.97968099999999!3d40.6974881!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c24fa5d33f083b%3A0xc80b8f06e177fe62!2sNew%20York%2C%20NY%2C%20USA!5e0!3m2!1sen!2sin!4v1716987280536!5m2!1sen!2sin using regex
                    const regex = /!3d(-?\d+\.\d+)+!2m3/;
                    const lat = link?.match(regex)?.[0]?.replace(/!3d/,'');
                    const lng = link?.match(regex)?.[1]?.replace(/!2m3/,'');
                    const address = link?.split('!2s')[1]?.split('!3d')[0]?.replace(/%20/g,' ');
                    updateData({...data,location:{...data.location,address,link:e?.currentTarget?.value,latitude:Number(lat),longitude:Number(lng)}})
                }}
                name="location"
                type="text"
                placeholder="Transportation links near the property"
              />
            </FormItem>
          </div>
          <div className="w-full h-[200px] rounded-lg">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d387191.33750346623!2d-73.97968099999999!3d40.6974881!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c24fa5d33f083b%3A0xc80b8f06e177fe62!2sNew%20York%2C%20NY%2C%20USA!5e0!3m2!1sen!2sin!4v1716987280536!5m2!1sen!2sin"
              className="w-full h-full rounded-lg"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>

          <label className="inline-flex items-center cursor-pointer">
            <input type="checkbox" value="" className="sr-only peer" />
            <div className="relative w-11 h-6 bg-gray-200 rounded-full peer peer-focus:ring-4 peer-focus:ring-blue-300 dark:peer-focus:ring-blue-800 dark:bg-gray-700 peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-0.5 after:start-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-blue-600"></div>
            <span className="ms-3 text-sm font-medium text-gray-900 dark:text-gray-300">
              Show your current location
            </span>
          </label>
        </div>
      </div>
    </>
  );
};

export default PageAddListing2;
