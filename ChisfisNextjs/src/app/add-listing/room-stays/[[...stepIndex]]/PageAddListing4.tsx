import React, { useState } from "react";
import {
  FaWifi,
  FaTv,
  FaParking,
  FaSnowflake,
  FaSwimmingPool,
  FaDumbbell,
} from "react-icons/fa";
import { FaKitchenSet } from "react-icons/fa6";
import { MdRoomService, MdSmokeFree } from "react-icons/md";
import { GrAidOption } from "react-icons/gr";
import { TbFireExtinguisher, TbSofa } from "react-icons/tb";
import { GiFireplace, GiGrandPiano } from "react-icons/gi";

interface Amenity {
  icon?: React.ReactNode;
  label?: string;
  id?: string;
}

const amenities: Amenity[] = [
  { icon: <TbSofa />, label: "Furnished", id: "furnished" },
  { icon: <FaWifi />, label: "Wifi", id: "wifi" },
  { icon: <FaDumbbell />, label: "Gym", id: "gym" },
  { icon: <FaSwimmingPool />, label: "Swimming Pool", id: "swimming-pool" },
  { icon: <FaTv />, label: "TV", id: "tv" },
  { icon: <FaKitchenSet />, label: "Kitchen", id: "kitchen" },
  { icon: <GiGrandPiano />, label: "Piano", id: "piano" },
  { icon: <FaParking />, label: "Parking", id: "parking" },
  { icon: <FaSnowflake />, label: "AC", id: "ac" },
  { icon: <MdRoomService />, label: "Room Service", id: "room-service" },
  { icon: <GiFireplace />, label: "Fire Pit", id: "fire-pit" },
];

const safetyAmenities: Amenity[] = [
  { icon: <MdSmokeFree />, label: "Smoke Alarm", id: "smoke-alarm" },
  { icon: <GrAidOption />, label: "First Aid Kit", id: "first-aid-kit" },
  {
    icon: <TbFireExtinguisher />,
    label: "Fire Extinguisher",
    id: "fire-extinguisher",
  },
];

const AmenityGrid: React.FC = () => {
  const [selectedGeneralAmenities, setSelectedGeneralAmenities] = useState<
    string[]
  >([]);
  const [selectedSafetyAmenities, setSelectedSafetyAmenities] = useState<
    string[]
  >([]);

  const handleGeneralAmenityClick = (amenityId: string) => {
    setSelectedGeneralAmenities((prevSelectedAmenities) => {
      if (prevSelectedAmenities.includes(amenityId)) {
        return prevSelectedAmenities.filter((id) => id !== amenityId);
      } else {
        return [...prevSelectedAmenities, amenityId];
      }
    });
  };

  const handleSafetyAmenityClick = (amenityId: string) => {
    setSelectedSafetyAmenities((prevSelectedAmenities) => {
      if (prevSelectedAmenities.includes(amenityId)) {
        return prevSelectedAmenities.filter((id) => id !== amenityId);
      } else {
        return [...prevSelectedAmenities, amenityId];
      }
    });
  };

  return (
    <div>
      <h2 className="text-2xl text-center font-semibold mb-4">
        Tell guests what your place has to offer
      </h2>

      <h2 className="text-xl font-semibold text-center mb-4">
        General Amenities
      </h2>
      <div className="grid grid-cols-2 sm:grid-cols-5 gap-4 mb-6">
        {amenities.map((amenity) => (
          <div
            key={amenity.id}
            className={`flex flex-col border-[0.5px] shadow-sm hover:shadow-lg rounded-lg gap-3 py-4 justify-center items-center cursor-pointer ${
              selectedGeneralAmenities.includes(amenity.id || "")
                ? "bg-blue-500 text-white"
                : "text-gray-700"
            }`}
            onClick={() => handleGeneralAmenityClick(amenity.id || "")}
          >
            <div className="text-2xl">{amenity.icon}</div>
            <span className="text-center md:text-lg font-medium">
              {amenity.label}
            </span>
          </div>
        ))}
      </div>

      <hr />

      <h2 className="text-xl mt-4 font-semibold text-center mb-4">
        Safety Amenities
      </h2>
      <div className="grid grid-cols-2 sm:grid-cols-5 gap-4">
        {safetyAmenities.map((amenity) => (
          <div
            key={amenity.id}
            className={`flex flex-col border-[0.5px] shadow-sm hover:shadow-lg rounded-lg gap-3 py-4 justify-center items-center cursor-pointer ${
              selectedSafetyAmenities.includes(amenity.id || "")
                ? "bg-blue-700 text-white"
                : "text-gray-700"
            }`}
            onClick={() => handleSafetyAmenityClick(amenity.id || "")}
          >
            <div className="text-2xl">{amenity.icon}</div>
            <span className="text-center md:text-lg font-medium">
              {amenity.label}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AmenityGrid;
