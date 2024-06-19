"use client";
import React from "react";
// import { ListingDataType } from "@/types/types";
import {DragDrop} from "./media/dag-drop-file";
import { RentableItem } from "@/types/rentalItems";
import { CheckboxGroup } from "@nextui-org/react";


const PageAddListing5 = ({data,updateData}:{updateData:(data:Partial<RentableItem>)=>void, data:Partial<RentableItem>}) => {


  return (
    <>
        {/* FORM */}
        <div className="bg-white  w-full rounded-lg p-2 md:p-6">
          <div className="mb-6">
            <label className="block text-gray-700 font-medium mb-2">
              Are there any specific rules for renters?
            </label>
            {/* <p className="text-gray-500 mb-2">E.G. No Smoking, Pets Allowed</p> */}
            <textarea
              className="border border-gray-300 rounded-md p-2 w-full"
              placeholder="E.G. No Smoking, Pets Allowed"
              value={data?.details?.rule_description}
              onChange={(e) => updateData({...data,details:{...data?.details,rule_description:e.target.value}})
              }
            />

          </div>
          <div className="mb-6">
            <label className="block text-gray-700 font-medium mb-2">
              Can you upload the rental terms?
            </label>
              <DragDrop 
                    type="document" 
                    isMultiple={false}
                    maxFiles={1}
                    media={data?.attachments?.map((val)=>val?.link) || []}
                    onUploaded={(urls)=>{
                      updateData({...data,attachments:urls?.map((url)=>({link:url,description:"",mime_type:"application/pdf"}))})
               }}/>
          </div>

          <div className="mb-6">
            <label className=" text-gray-700 font-medium mb-2">
              Pictures of the place
            </label>
            <div className="grid grid-cols-1 items-center">
               <DragDrop 
                    type="image" 
                    isMultiple maxFiles={6}
                    media={data?.gallery?.images || []}
                    onUploaded={(urls)=>{
                      // console.log("urls",urls)
                      updateData({...data,gallery:{...data?.gallery,images:urls||[],thumbnail:urls?.[0]}})
               }}/>
            </div>
            {/* <p className="text-gray-500 mt-2">
              Upload a file or drag and drop PNG, JPG, up to 10MB
            </p> */}
        </div>


          <div className="mb-2">
            <label className=" text-gray-700 font-medium mb-2">
              Video of the place
            </label>
            <div className="p-1 items-center grid grid-cols-1">
              <DragDrop 
                type="video" 
                isMultiple={false} 
                maxFiles={1} 
                media={data?.gallery?.videos || []}
                onUploaded={(urls)=>{
                  updateData({...data, gallery:{...data?.gallery,
                    videos:urls
                }})
                }}/>
            </div>
            {/* <p className="text-gray-500 mt-2">
              Upload a high quality video tour of the property
            </p> */}
        </div>
      </div>
    </>
  );
};

export default PageAddListing5;
