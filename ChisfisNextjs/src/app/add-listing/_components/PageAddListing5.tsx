"use client";
import React, { useEffect, useState } from "react";
import Image from "next/image";
import { FaCloudUploadAlt, FaVideo } from "react-icons/fa";
import { ListingDataType } from "@/types/types";
import DragDrop from "./dag-drop-file";

const PageAddListing5 = ({
  data,
  updateData,
}: {
  updateData: (data: Partial<ListingDataType>) => void;
  data: Partial<ListingDataType>;
}) => {
  const [rentalRules, setRentalRules] = useState<string>("");
  const [terms, setTerms] = useState<string>("");
  const [rentalImages, setRentalImages] = useState<File[]>([]);
  const [rentalVideo, setRentalVideo] = useState<File | null>(null);

  const handleRentalRulesChange = (
    e: React.ChangeEvent<HTMLTextAreaElement>,
  ) => {
    setRentalRules(e.target.value);
  };

  const handleImageUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const files = e.target.files ? Array.from(e.target.files) : [];
    setRentalImages((prevImages) => [...prevImages, ...files]);
  };

  const handleVideoUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0] || null;
    setRentalVideo(file);
  };

  // update data with rental rules, images and video
  const updateDataWithRentalDetails = () => {
    updateData({
      ...data,
      additionalRules: [rentalRules],
      placeImages: rentalImages.map((f) => f?.webkitRelativePath),
      placeVideo: rentalVideo?.webkitRelativePath,
    });
  };

  // use callback to update data with rental rules, images and video
  useEffect(() => {
    updateDataWithRentalDetails();
  }, [rentalRules, rentalImages, rentalVideo]);

  return (
    <>
      {/* FORM */}
      <div className="bg-white  w-full rounded-lg p-2 md:p-12">
        <div className="mb-6">
          <label className="block text-gray-700 font-medium mb-2">
            Are there any specific rules for renters?
          </label>
          {/* <p className="text-gray-500 mb-2">E.G. No Smoking, Pets Allowed</p> */}
          <textarea
            className="border border-gray-300 rounded-md p-2 w-full"
            placeholder="E.G. No Smoking, Pets Allowed"
            value={rentalRules}
            onChange={handleRentalRulesChange}
          />
        </div>
        <div className="mb-6">
          <label className="block text-gray-700 font-medium mb-2">
            Can you upload the rental terms?
          </label>
          {/* <p className="text-gray-500 mb-2">E.G. No Smoking, Pets Allowed</p> */}
          <textarea
            className="border border-gray-300 rounded-md p-2 w-full"
            placeholder="E.G. No Smoking, Pets Allowed"
            value={terms}
            defaultValue={terms}
            onChange={(e) => setTerms(e.target.value)}
          />
        </div>

        <div className="mb-6">
          <label className=" text-gray-700 font-medium mb-2">
            Pictures of the place
          </label>
          <div className="grid grid-cols-1 items-center">
            <DragDrop />
          </div>
          {/* <p className="text-gray-500 mt-2">
              Upload a file or drag and drop PNG, JPG, up to 10MB
            </p> */}
        </div>

        <div className="mb-6">
          <label className=" text-gray-700 font-medium mb-2">
            Video of the place
          </label>
          <div className="p-1 items-center grid grid-cols-1">
            {/* <FaVideo className="text-gray-500 mr-2" />
              <input
                type="file"
                accept="video/*"
                multiple={false}
                onChange={handleVideoUpload}
                className="flex-grow file:mr-4 file:py-2 file:px-4 file:rounded-full file:border-0 file:text-sm file:font-semibold file:bg-blue-50 file:text-blue-700 hover:file:bg-blue-100"
              /> */}
            <DragDrop isVideo />
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
