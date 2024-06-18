"use client"

import Logo from "@/shared/Logo";
import SiteHeader from "../(client-components)/(Header)/SiteHeader";
import ListingHeader from "./listing_header";
import Sidebar from "./SideBar";
import { ListingOption } from "@/types/types";
import { RoomImg, TimeImg, HourlyImg, FindImg, ExperiencesImg, LastminutesImg } from "@/images";
import { UsersIcon, BriefcaseIcon } from "@heroicons/react/24/solid";
import { Home, Watch, Filter, Timer,Category } from "@mui/icons-material";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import MainNav2 from "../(client-components)/(Header)/MainNav2";


// export const metadata = {
//   title: "PaceDream - Add listing",
//   description: "Add listing page for PaceDream",
// };

const options:Array<ListingOption> = [
  {
    href: "/add-listing/room-stays",
    img: RoomImg,
    alt: "Room Stays",
    label: "Room Stays",
    avatar: <Home  className="w-5 h-5 text-gray-500 text-inherit"/>
  },
  {
    href: "/add-listing/time-based",
    img: TimeImg,
    alt: "Time-Based",
    label: "Time-Based",
    avatar: <Watch  className="w-5 h-5 text-gray-500 text-inherit"/>
  },
  {
    href: "/add-listing/hourly-rental-gear",
    img: HourlyImg,
    alt: "Hourly Rental Gear",
    label: "Hourly Rental Gear",
    avatar: <Filter  className="w-5 h-5 text-gray-500 text-inherit"/>
  },
  {
    href: "/add-listing/find-roommate",
    img: FindImg,
    alt: "Find Roommate",
    label: "Find Roommate",
    avatar:<UsersIcon className="w-5 h-5 text-gray-500 text-inherit"/>
  },
  {
    href: "/add-listing/experience",
    img: ExperiencesImg,
    alt: "Experiences",
    label: "Experiences",
    avatar: <BriefcaseIcon  className="w-5 h-5 text-gray-500 text-inherit"/>
  },
  {
    href: "/add-listing/last-minutes",
    img: LastminutesImg,
    alt: "Last minutes",
    label: "Last minutes",
    avatar: <Timer className="w-5 h-5 text-gray-500 text-inherit"/>
  },
]

export default function AddListingRootLayout({
  children,
}: {
  children: React.ReactNode;
}) {

  const path = usePathname();
  const [sideOptions, setSideOptions] = useState<Array<ListingOption>>(options);
  
  useEffect(() => {
    if(path === '/add-listing'){
      setSideOptions([
        {
          href: "/add-listing",
          img: RoomImg,
          alt: "Categories",
          label: "Categories",
          avatar: <Category  className="w-5 h-5 text-gray-500 text-inherit"/>
        },
      ])
    }else{
      setSideOptions(options);
    }
  }, [path])

  return (
      <section className="flex-col w-full">
         {/* <ListingHeader /> */}
         <MainNav2 hideLogo  className="bg-gray-50 border-b-2 fixed top-0 right-0 left-0 md:left-60 pr-0 md:pr-60 w-full" />
         <main className="flex">
            <aside className="hidden md:block w-60 text-center max-h-screen border-r-2">
                  <div className="w-60 h-full fixed">
                    <div className=" h-full bg-white">
                      <div className=" h-full top-0">
                          <div className="flex items-center justify-center">
                            <Logo  className="w-40 h-20 mt-6"/>
                          </div>
                          <Sidebar options={sideOptions} />
                      </div>
                    </div>
                </div>
            </aside>
            <div className="flex-1 pt-24 px-2 md:px-4 pb-44">
                {children}
            </div>
          </main>
      </section>
  );
}
