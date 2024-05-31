import React, { useState } from "react";
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
  id?: string;
}

const amenities: Amenity[] = [
  { icon: <FaWifi />, label: "Wifi", id: "wifi" },
  { icon: <FaSwimmingPool />, label: "Swimming Pool", id: "swimming-pool" },
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
];

const AmenityGrid: React.FC = () => {
  const [selectedAmenities, setSelectedAmenities] = useState<string[]>([]);

  const handleAmenityClick = (amenityId: string) => {
    setSelectedAmenities((prevSelectedAmenities) => {
      if (prevSelectedAmenities.includes(amenityId)) {
        return prevSelectedAmenities.filter((id) => id !== amenityId);
      } else {
        return [...prevSelectedAmenities, amenityId];
      }
    });
  };

  return (
    <>
      <div className="bg-white rounded-lg p-6">
        <h2 className="text-xl font-bold mb-4">
          Tell guests what your place has to offer
        </h2>
        <p className="text-gray-600 mb-6">General Amenities</p>
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
              <span className="text-center md:text-lg font-medium">
                {amenity.label}
              </span>
            </div>
          ))}
        </div>
      </div>
      <div className="bg-white rounded-lg p-6">
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
      </div>
    </>
  );
};

export default AmenityGrid;
