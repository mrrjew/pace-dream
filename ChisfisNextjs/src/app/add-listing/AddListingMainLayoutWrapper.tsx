
import { RoomImg, TimeImg, HourlyImg, FindImg, ExperiencesImg, LastminutesImg } from "@/images";
// import Sidebar from "../SideBar";
import { Filter, Home, Timer, Watch } from "@mui/icons-material";
import { BriefcaseIcon, UsersIcon } from "@heroicons/react/24/solid";
import { Route } from "@/routers/types";
import { ListingOption } from "@/types/types";
import Sidebar from "./SideBar";



const options:Array<ListingOption> = [
  {
    href: "/add-listing/room-stays" as Route<string>,
    img: RoomImg,
    alt: "Room Stays",
    label: "Room Stays",
    avatar: <Home  className="w-5 h-5 text-gray-500 text-inherit"/>
  },
  {
    href: "/add-listing/time-based" as Route<string>,
    img: TimeImg,
    alt: "Time-Based",
    label: "Time-Based",
    avatar: <Watch  className="w-5 h-5 text-gray-500 text-inherit"/>
  },
  {
    href: "/add-listing/hourly-rental-gear" as Route<string>,
    img: HourlyImg,
    alt: "Hourly Rental Gear",
    label: "Hourly Rental Gear",
    avatar: <Filter  className="w-5 h-5 text-gray-500 text-inherit"/>
  },
  {
    href: "/add-listing/find-roommate" as Route<string>,
    img: FindImg,
    alt: "Find Roommate",
    label: "Find Roommate",
    avatar:<UsersIcon className="w-5 h-5 text-gray-500 text-inherit"/>
  },
  {
    href: "/add-listing/experience" as Route<string>,
    img: ExperiencesImg,
    alt: "Experiences",
    label: "Experiences",
    avatar: <BriefcaseIcon  className="w-5 h-5 text-gray-500 text-inherit"/>
  },
  {
    href: "/add-listing/last-minutes" as Route<string>,
    img: LastminutesImg,
    alt: "Last minutes",
    label: "Last minutes",
    avatar: <Timer className="w-5 h-5 text-gray-500 text-inherit"/>
  },
]

export default function AddListingMainLayoutWrapper(
    {children,
    hideBackBtn,
    onNext,
    onBack,
    isFirstStep,
    isLastStep,
    currentStep,
    submitBtnText

    }:{
      children:React.ReactNode,
      hideBackBtn?:boolean,
      onNext:()=>void,
      onBack:()=>void,
      isFirstStep:boolean,
      isLastStep:boolean,
      currentStep:number,
      submitBtnText:string
    }) {

  return (
    <div className="flex">
        <div className="w-60 bg-white h-screen hidden md:block">
            <Sidebar options={options} />
        </div>
        <div className="grid grid-cols-1 flex-1 p-4 px-4 md:px-8">
            <div className="col-span-2 h-fit md:h-[70dvh]">
                    {children}
            </div>
          
            <div className="w-full sticky bottom-0 md:static mt-4 bg-inherit">
                <div className="flex justify-between  md:justify-end gap-4 items-center p-2 md:p-1">
                  {!hideBackBtn &&  <button onClick={onBack} disabled={isFirstStep} className="bg-primary-100 text-black py-3 px-8 min-w-40 rounded-md disabled:opacity-40 disabled:cursor-not-allowed">Back</button>}
                    <button onClick={onNext} disabled={isLastStep} className="bg-primary-700 text-white py-3 px-4  min-w-40 rounded-md">
                      {submitBtnText}
                    </button>
                </div>
          </div>

        </div>
    </div>
  );
}