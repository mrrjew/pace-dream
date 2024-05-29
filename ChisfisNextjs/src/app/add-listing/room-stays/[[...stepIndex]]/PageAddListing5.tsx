import React, { useState } from "react";
import Image from "next/image";
import { FaCloudUploadAlt, FaVideo } from "react-icons/fa";

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

        <div className="bg-white w-screen sm:w-full shadow-md rounded-lg p-6">
          <div className="mb-6">
            <label className="block text-gray-700 font-bold mb-2">
              Are there any specific rules for renters?
            </label>
            <p className="text-gray-500 mb-2">E.G. No Smoking, Pets Allowed</p>
            <textarea
              className="border border-gray-300 rounded-md p-2 w-full"
              placeholder="E.G. No Smoking, Pets Allowed"
              value={rentalRules}
              onChange={handleRentalRulesChange}
            />
          </div>

          <div className="mb-6">
            <label className="block text-gray-700 font-bold mb-2">
              Pictures of the place
            </label>
            <div className="flex items-center border border-gray-300 rounded-md p-2">
              <FaCloudUploadAlt className="text-gray-500 mr-2" />
              <input
                type="file"
                accept="image/png, image/jpeg, image/jpg"
                multiple
                onChange={handleImageUpload}
                className="flex-grow file:mr-4 file:py-2 file:px-4 file:rounded-full file:border-0 file:text-sm file:font-semibold file:bg-blue-50 file:text-blue-700 hover:file:bg-blue-100"
              />
            </div>
            <p className="text-gray-500 mt-2">
              Upload a file or drag and drop PNG, JPG, up to 10MB
            </p>
          </div>

          <div className="mb-6">
            <label className="block text-gray-700 font-bold mb-2">
              Video of the place
            </label>
            <div className="flex items-center border border-gray-300 rounded-md p-2">
              <FaVideo className="text-gray-500 mr-2" />
              <input
                type="file"
                accept="video/*"
                onChange={handleVideoUpload}
                className="flex-grow file:mr-4 file:py-2 file:px-4 file:rounded-full file:border-0 file:text-sm file:font-semibold file:bg-blue-50 file:text-blue-700 hover:file:bg-blue-100"
              />
            </div>
            <p className="text-gray-500 mt-2">
              Upload a high quality video tour of the property
            </p>
          </div>
        </div>
    </>
  );
};

export default PageAddListing5;
