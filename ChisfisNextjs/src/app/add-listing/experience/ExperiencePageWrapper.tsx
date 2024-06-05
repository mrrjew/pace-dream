"use client";
import { RoomImg, TimeImg, HourlyImg, FindImg, ExperiencesImg, LastminutesImg } from "@/images";
import Sidebar from "../SideBar";
import { Filter, Home, Timer, Watch } from "@mui/icons-material";
import { BriefcaseIcon, UsersIcon } from "@heroicons/react/24/solid";
import { Route } from "@/routers/types";
import { ListingOption } from "@/types/types";
import { useEffect, useState } from "react";
import AddListingMainLayoutWrapper from "../AddListingMainLayoutWrapper";



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

export default function AddListingExperienceWrapper(
    {children,
    onNext,
    onBack,
    isFirstStep,
    isLastStep,
    currentStep
    }:{children:React.ReactNode,onNext:()=>void,onBack:()=>void,isFirstStep:boolean,isLastStep:boolean,currentStep:number}
) {

  const [submitBtnText, setSubmitBtnText] = useState<string>("Next");
  const [hidBackBtn, setHideBackBtn] = useState<boolean>(false);
  // list to current step if step is 4,5:publish, 6:Go back to home
  useEffect(() => {
    setHideBackBtn(false);
    if(currentStep === 4 || currentStep === 5){
      setSubmitBtnText("Publish")
      return;
    }
    if(currentStep === 6 || currentStep === 7){
      setSubmitBtnText("Go back to home");
      setHideBackBtn(true);
      return;
    }
    setSubmitBtnText("Next");  
  }, [currentStep])


  return (
        <AddListingMainLayoutWrapper
            onBack={onBack}
            onNext={onNext}
            isFirstStep={isFirstStep}
            isLastStep={isLastStep}
            currentStep={currentStep}
            submitBtnText={submitBtnText}
            hideBackBtn={hidBackBtn}>
            {children}
        </AddListingMainLayoutWrapper>
 );
}