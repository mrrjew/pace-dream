'use client'
import { ListingDataType } from "@/types/types";
import React, { useEffect, useState } from "react";
import {
  FaWifi,
  FaTv,
  FaParking,
  FaSnowflake,
  FaSwimmingPool,
} from "react-icons/fa";
import { FaKitchenSet } from "react-icons/fa6";
import { MdRoomService } from "react-icons/md";

interface Amenity {
  icon?: React.ReactNode;
  label?: string;
  id: string;
}

const amenities: Amenity[] = [
  { icon: <FaWifi />, label: "Wifi", id: "wifi" },
  { icon: <FaTv />, label: "TV", id: "tv" },
  { icon: <FaKitchenSet />, label: "Kitchen", id: "kitchen" },
  {
    icon: <FaParking />,
    label: "Parking",
    id: "parking",
  },
  { icon: <FaSnowflake />, label: "AC", id: "ac" },
  {
    icon: <MdRoomService />,
    label: "Room Service",
    id: "room-service",
  },
  { icon: <FaSwimmingPool />, label: "Swimming Pool", id: "swimming-pool" },
];

const AmenityGrid: React.FC<{updateData:(data:Partial<ListingDataType>)=>void, data:Partial<ListingDataType>}> = (
  {updateData, data}
) => {
  const [selectedAmenities, setSelectedAmenities] = useState<string[]>(data?.generalAmenities || []);

  const handleAmenityClick = (amenityId: string) => {
      const _copySelectedAmenities = [...selectedAmenities];
      if (_copySelectedAmenities.includes(amenityId)) {
        _copySelectedAmenities.splice(_copySelectedAmenities.indexOf(amenityId), 1);
        setSelectedAmenities(_copySelectedAmenities);
      }else{
        setSelectedAmenities([...selectedAmenities, amenityId]);
      }
  };

  // update data with amenities
  const updateDataWithAmenities = () => {
    updateData({...data,generalAmenities:selectedAmenities})
  }

  // use callback to update data with amenities
  useEffect(() => {
    updateDataWithAmenities()
  }, [selectedAmenities])

  return (
    <>
      <div className="bg-white rounded-lg">
        <p className="flex-1 py-2">
          Tell guests what your place has to offer
        </p>
        {/* <p className="text-gray-600 mb-6">General Amenities</p> */}
        <div className="flex gap-2 md:gap-4 flex-wrap items-center">
          {amenities?.map((amenity) => (
            <div
              key={amenity?.id}
              className={`flex flex-col  text-blue-700 rounded-lg gap-2 py-1 justify-center items-center cursor-pointer`}
            >
              <div 
                onClick={() => handleAmenityClick(amenity.id || "")}
                className={`border text-primary-700 px-6 py-4 rounded-xl ${
                selectedAmenities.includes(amenity.id)
                  ? "border-primary-700"
                  : " border-primary-100"
              }`}>{amenity.icon}</div>
              <span className="text-center text-gray-600 text-xs font-medium">
                {amenity.label}
              </span>
            </div>
          ))}
        </div>
      </div>


      {/* <div className="bg-white rounded-lg p-6">
        <h2 className="text-xl font-bold mb-4">Safety Amenities</h2>
        <div className="grid grid-cols-2 sm:grid-cols-5 gap-4">
          {amenities.map((amenity) => (
            <div
              key={amenity.id}
              className={`flex flex-col border text-blue-700 border-slate-400 rounded-lg gap-3 py-4 justify-center items-center cursor-pointer ${
                selectedAmenities.includes(amenity.id || "")
                  ? "text-blue-500 ring-1 ring-blue-600"
                  : "text-gray-500"
              }`}
              onClick={() => handleAmenityClick(amenity.id || "")}
            >
              <div className="text-2xl">{amenity.icon}</div>
              <span className="text-center md:text-lg">{amenity.label}</span>
            </div>
          ))}
        </div>
      </div> */}

    </>
  );
};

export default AmenityGrid;
