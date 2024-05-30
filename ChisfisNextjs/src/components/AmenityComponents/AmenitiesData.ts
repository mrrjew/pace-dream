import React from "react";
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
import { Amenity } from "@/types/amenity"

export const amenities: Amenity[] = [
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

export const safetyAmenities: Amenity[] = [
  { icon: <MdSmokeFree />, label: "Smoke Alarm", id: "smoke-alarm" },
  { icon: <GrAidOption />, label: "First Aid Kit", id: "first-aid-kit" },
  { icon: <TbFireExtinguisher />, label: "Fire Extinguisher", id: "fire-extinguisher" },
];
