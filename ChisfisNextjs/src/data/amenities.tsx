import { Bed, Place, Shower, Star } from "@mui/icons-material";
import { FaWifi, FaParking, FaSnowflake, FaTv } from "react-icons/fa";
import { FaKitchenSet } from "react-icons/fa6";
import { IoIosCloseCircle } from "react-icons/io";
import { MdRoomService, MdSmokeFree } from "react-icons/md";
import { GrAidOption } from "react-icons/gr";
import { TbFireExtinguisher, TbSofa } from "react-icons/tb";
import { GiFireplace, GiGrandPiano } from "react-icons/gi";
import { RentableItem } from "@/types/rentalItems";

export const AMENITIES_DATA = [
  { icon: <TbSofa />, label: "Furnished", id: "furnished" },
  { icon: <FaWifi />, label: "Wifi", id: "wifi" },
  { icon: <FaTv />, label: "TV", id: "tv" },
  { icon: <FaKitchenSet />, label: "Kitchen", id: "kitchen" },
  { icon: <GiGrandPiano />, label: "Piano", id: "piano" },
  { icon: <FaParking />, label: "Parking", id: "parking" },
  { icon: <FaSnowflake />, label: "AC", id: "ac" },
  { icon: <MdRoomService />, label: "Room Service", id: "room-service" },
  { icon: <GiFireplace />, label: "Fire Pit", id: "fire-pit" },
];
