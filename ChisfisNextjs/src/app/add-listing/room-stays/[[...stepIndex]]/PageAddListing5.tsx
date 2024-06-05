import React, { useState } from "react";
import { FaCloudUploadAlt, FaVideo } from "react-icons/fa";
import { FiUploadCloud } from "react-icons/fi";
import FormItem from "../FormItem";
import Input from "@/shared/Input";

const PageAddListing5 = () => {
  const [rentalRules, setRentalRules] = useState<string>("");
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
  return (
    <>
      {/* FORM */}

      <div className="listingSection__wrap">
        <h2 className="text-xl font-semibold">Rules and Images of the Place</h2>

        <div className="grid grid-cols-1 gap-4 sm:gap-6">
          <FormItem label="Are there any specific rules for renters?">
            <Input
              name="rentalTerms"
              type="text"
              placeholder="Eg: No Smoking, Pets Allowed"
            />
          </FormItem>
          <FormItem label="Can you upload the rental terms?">
            <Input
              name="rentalTermsUpload"
              type="text"
              placeholder="Eg: No Smoking, Pets Allowed"
            />
          </FormItem>
        </div>
        <div className="grid grid-cols-1 gap-2">
          <h2 className="text-xl font-semibold">Cover Image of the place</h2>
          <div className="flex items-center border text-center w-full border-gray-300 rounded-md p-2">
            <FiUploadCloud className="text-gray-500 size-6 mr-2 ml-4 shrink-0" />
            <input
              type="file"
              accept="image/png, image/jpeg, image/jpg"
              onChange={handleImageUpload}
              className="flex-grow file:mr-4 file:py-2 file:px-4 file:rounded-full file:border-0 file:text-sm file:font-semibold file:bg-blue-50 file:text-blue-700 hover:file:bg-blue-100"
            />
          </div>
          <p className="text-gray-500 text-sm">
            Upload a file or drag and drop PNG, JPG, up to 10MB
          </p>
        </div>
        <div className="grid md:grid-cols-2 gap-4">
          <div className="grid grid-cols-1 gap-2">
            <h2 className="text-xl font-semibold">Pictures of the place</h2>
            <div className="flex items-center border text-center w-full border-gray-300 rounded-md p-2">
              <FiUploadCloud className="text-gray-500 size-6 mr-2 ml-4 shrink-0" />
              <input
                type="file"
                accept="image/png, image/jpeg, image/jpg"
                multiple
                onChange={handleImageUpload}
                className="flex-grow file:mr-4 file:py-2 file:px-4 file:rounded-full file:border-0 file:text-sm file:font-semibold file:bg-blue-50 file:text-blue-700 hover:file:bg-blue-100"
              />
            </div>
            <p className="text-gray-500 text-sm">
              Upload a file or drag and drop PNG, JPG, up to 10MB
            </p>
          </div>

          <div className="grid grid-cols-1 gap-2">
            <h2 className="text-xl font-semibold">Video of the place</h2>
            <div className="flex items-center border border-gray-300 rounded-md p-2">
              <FaVideo className="text-gray-500 size-5 mr-2 shrink-0 ml-4" />
              <input
                type="file"
                accept="video/*"
                onChange={handleVideoUpload}
                className="flex-grow file:mr-4 file:py-2 file:px-4 file:rounded-full file:border-0 file:text-sm file:font-semibold file:bg-blue-50 file:text-blue-700 hover:file:bg-blue-100"
              />
            </div>
            <p className="text-gray-500 text-sm">
              Upload a high quality video tour of the property
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default PageAddListing5;

