import React, { FC } from "react";
import Image from "next/image";
import { LocationIconImage } from "public/assetsManager";
import { PlacesAutocompleteInput } from "@/components/GoogleMap";

export interface LocationInputProps {
  placeHolder?: string;
  desc?: string;
  className?: string;
  divHideVerticalLineClass?: string;
  autoFocus?: boolean;
  inputs?: string;
  input?: string;
  typeInput?: string;
  onSelect?: (address: string, placeId: string) => void;
}

const LocationForm: FC<LocationInputProps> = ({
  onSelect,
}) => {
  // const containerRef = useRef<HTMLDivElement>(null);
  // const inputRef = useRef<HTMLInputElement>(null);
  // const [value, setValue] = useState("");
  // const [showPopover, setShowPopover] = useState(autoFocus);
  // const [suggestions, setSuggestions] = useState<string[]>([]);
  // const [currentLocation, setCurrentLocation] = useState<string | null>(null);
  // const [readableLocation, setReadableLocation] = useState<string | null>(null);

  // useEffect(() => {
  //   setShowPopover(autoFocus);
  // }, [autoFocus]);

  // useEffect(() => {
  //   if (eventClickOutsideDiv) {
  //     document.removeEventListener("click", eventClickOutsideDiv);
  //   }
  //   showPopover && document.addEventListener("click", eventClickOutsideDiv);
  //   return () => {
  //     document.removeEventListener("click", eventClickOutsideDiv);
  //   };
  //   // eslint-disable-next-line react-hooks/exhaustive-deps
  // }, [showPopover]);

  // useEffect(() => {
  //   if (showPopover && inputRef.current) {
  //     inputRef.current.focus();
  //   }
  // }, [showPopover]);

  // useEffect(() => {
  //   if (navigator.geolocation) {
  //     navigator.geolocation.getCurrentPosition(
  //       (position) => {
  //         const { latitude, longitude } = position.coords;
  //         setCurrentLocation(`Latitude: ${latitude}, Longitude: ${longitude}`);

  //         // Reverse Geocoding to get human-readable address
  //         fetch(
  //           `https://nominatim.openstreetmap.org/reverse?format=jsonv2&lat=${latitude}&lon=${longitude}`,
  //         )
  //           .then((response) => response.json())
  //           .then((data) => {
  //             const address = data.address;
  //             let readableLocation = "";

  //             if (address.city) {
  //               readableLocation = address.city;
  //             } else if (address.town) {
  //               readableLocation = address.town;
  //             } else if (address.village) {
  //               readableLocation = address.village;
  //             } else if (address.hamlet) {
  //               readableLocation = address.hamlet;
  //             }

  //             // Append state or country if available
  //             if (address.state) {
  //               readableLocation += ` ${address.state}`;
  //             } else if (address.country) {
  //               readableLocation += `, ${address.country}`;
  //             }

  //             // Slice pincode and district
  //             if (address.postcode) {
  //               // const pincode = address.postcode;
  //               const district =
  //                 address.suburb ||
  //                 address.county ||
  //                 address.city_district ||
  //                 "";
  //               readableLocation += `, ${district}`;
  //             }

  //             setReadableLocation(readableLocation);
  //           })
  //           .catch((error) => {
  //             console.error("Error getting readable location:", error);
  //           });
  //       },
  //       (error) => {
  //         console.error("Error getting current location:", error);
  //       },
  //     );
  //   } else {
  //     console.error("Geolocation is not supported by this browser.");
  //   }
  // }, []);

  // const eventClickOutsideDiv = (event: MouseEvent) => {
  //   if (!containerRef.current) return;
  //   // CLICK IN_SIDE
  //   if (!showPopover || containerRef.current.contains(event.target as Node)) {
  //     return;
  //   }
  //   // CLICK OUT_SIDE
  //   setShowPopover(false);
  // };

  // const handleSelectLocation = (item: string) => {
  //   setValue(item);
  //   setShowPopover(false);
  // };

  // set value as a query param

  // const handleInputChange = (e: any) => {
  //   const inputValue = e.currentTarget.value;
  //   setValue(inputValue);
  //   const filteredSuggestions = [
  //     "Hamptons, Suffolk County, NY",
  //     "Las Vegas, NV, United States",
  //     "Ueno, Taito, Tokyo",
  //     "Ikebukuro, Toshima, Tokyo",
  //     "New York City",
  //     "Los Angeles",
  //     "Chicago",
  //     "Houston",
  //     "Phoenix",
  //     "Philadelphia",
  //     "San Antonio",
  //     "San Diego",
  //     "Dallas",
  //     "San Jose",
  //     "Austin",
  //     "Jacksonville",
  //     "San Francisco",
  //     "Indianapolis",
  //     "Columbus",
  //     "Fort Worth",
  //     "Charlotte",
  //     "Seattle",
  //     "Denver",
  //     "El Paso",
  //     "Detroit",
  //     "Washington, D.C.",
  //     "Boston",
  //     "Memphis",
  //     "Nashville",
  //     "Portland",
  //     "Oklahoma City",
  //     "Las Vegas",
  //     "Baltimore",
  //     "Louisville",
  //     "Milwaukee",
  //     "Albuquerque",
  //     "Tucson",
  //     "Fresno",
  //     "Sacramento",
  //     "Kansas City",
  //     "Long Beach",
  //     "Mesa",
  //     "Atlanta",
  //     "Colorado Springs",
  //     "Virginia Beach",
  //     "Raleigh",
  //     "Omaha",
  //     "Miami",
  //     "Oakland",
  //     "Minneapolis",
  //     "Tulsa",
  //     "Wichita",
  //     "New Orleans",
  //     "Arlington",
  //     "Tokyo",
  //     "Yokohama",
  //     "Osaka",
  //     "Nagoya",
  //     "Sapporo",
  //     "Fukuoka",
  //     "Kobe",
  //     "Kyoto",
  //     "Kawasaki",
  //     "Saitama",
  //     "Hiroshima",
  //     "Sendai",
  //     "Chiba",
  //     "Kitakyushu",
  //     "Nara",
  //     "Shizuoka",
  //     "Kumamoto",
  //     "Okayama",
  //     "Nagasaki",
  //     "Kagoshima",
  //     "Kanazawa",
  //     "Kochi",
  //     "Akita",
  //     "Naha",
  //     "Oita",
  //     "London",
  //     "Paris",
  //     "Berlin",
  //     "Madrid",
  //     "Rome",
  //     "Moscow",
  //     "Vienna",
  //     "Amsterdam",
  //     "Dublin",
  //     "Brussels",
  //     "Munich",
  //     "Zurich",
  //     "Stockholm",
  //     "Oslo",
  //     "Copenhagen",
  //     "Athens",
  //     "Prague",
  //     "Warsaw",
  //     "Budapest",
  //     "Lisbon",
  //     "Helsinki",
  //     "Bratislava",
  //     "Ljubljana",
  //     "Luxembourg City",
  //     "Reykjavik",
  //     "Birmingham",
  //     "Manchester",
  //     "Glasgow",
  //     "Liverpool",
  //     "Newcastle",
  //     "Sheffield",
  //     "Bristol",
  //     "Leeds",
  //     "Edinburgh",
  //     "Leicester",
  //     "Coventry",
  //     "Belfast",
  //     "Cardiff",
  //     "Nottingham",
  //     "Southampton",
  //     "Aberdeen",
  //     "Portsmouth",
  //     "York",
  //     "Cambridge",
  //     "Oxford",
  //     "Dundee",
  //     "Inverness",
  //     "Brighton",
  //     "Plymouth",
  //   ].filter((place) => place.toLowerCase().includes(inputValue.toLowerCase()));
  //   setSuggestions(filteredSuggestions);
  // };

  // const RenderRecentSearches = () => {
  //   return (
  //     <>
  //       <h3 className="block px-4 mt-2 text-base font-semibold sm:mt-0 sm:px-8 sm:text-lg text-neutral-800">
  //         Recent searches
  //       </h3>
  //       <div className="mt-2">
  //         {[
  //           "Hamptons, Suffolk County, NY",
  //           "Las Vegas, NV, United States",
  //           "Ueno, Taito, Tokyo",
  //           "Ikebukuro, Toshima, Tokyo",
  //         ].map((item) => (
  //           <span
  //             onClick={() => handleSelectLocation(item)}
  //             key={item}
  //             className="flex items-center px-4 py-4 space-x-3 cursor-pointer sm:px-8 sm:space-x-4"
  //           >
  //             <span className="block text-neutral-400"></span>
  //             <span className="block font-medium text-neutral-700">{item}</span>
  //           </span>
  //         ))}
  //       </div>
  //     </>
  //   );
  // };

  // const RenderSearchValue = () => {
  //   return (
  //     <>
  //       {suggestions.map((item) => (
  //         <span
  //           onClick={() => handleSelectLocation(item)}
  //           key={item}
  //           className="flex items-center px-4 py-4 space-x-3 cursor-pointer sm:px-8 sm:space-x-4 hover:bg-neutral-100 "
  //         >
  //           <span className="block text-neutral-400">
  //             <ClockIcon className="w-4 h-4 sm:h-6 sm:w-6" />
  //           </span>
  //           <span className="block font-medium text-neutral-700">{item}</span>
  //         </span>
  //       ))}
  //     </>
  //   );
  // };

  return (
    <div className="relative gap-1 pr-3 items-center w-[15.2rem] flex ring-1 ring-gray-200 rounded-lg">
      <PlacesAutocompleteInput
        className={`flex-1 h-24 border-none focus:ring-0`}
        onSelect={(address,placeId)=>{
          onSelect && onSelect(address,placeId)
        }}
        val=""
      />
      <div className="items-center ">
        <Image
          src={LocationIconImage}
          alt="location"
          className="shrink-0 size-4 flex items-center "
          width={24}
          height={24}
        />
      </div>
  </div>
  );
};

export default LocationForm;
