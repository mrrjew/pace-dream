import Image from "next/image";

import { IoMenu } from "react-icons/io5";
import LogoMobile from "@/images/paceDreamLogo-light.png";
import { useState } from "react";
import MobileSelectFindRoommate from "./MobileSelectFindRoommate";
import MobileSelectRoomStay from "./MobileSelectRoomStay";
import MobileSelectExperiences from "./MobileSelectExperiences";

export default function NavbarMobile() {
  interface SelectOptionState {
    hotel: boolean;
    longTerm: boolean;
    shortTerm: boolean;
  }

  const [switchMenu, setSwitchMenu] = useState(false);
  const [nameRender, setNameRender] = useState("Room Stay");
  const [selectOption, setSelectOption] = useState<SelectOptionState>(
    {
      hotel: false,
      longTerm: false,
      shortTerm: false
    }
  )
  const handlerSwitchMenu = () => setSwitchMenu(!switchMenu);

  const renderOpcion = () => {
    switch (nameRender) {
      case "Room Stay":
        return <MobileSelectRoomStay />
      case "Find Roommate":
        return <MobileSelectFindRoommate />
      case "Experiences":
        return <MobileSelectExperiences />
      default:
        return <MobileSelectRoomStay />
    }
  };

  const handlerSelectLi = (key: string) => setNameRender(key);

  const handlerSelectOption = (optionKey: "hotel" | "longTerm" | "shortTerm") => {
    setSelectOption((prevOptions) => ({
      ...prevOptions,
      [optionKey]: !prevOptions[optionKey]
    }));
  };

  return (
    <article className="  w-full flex items-center justify-between md:hidden relative ">
      <Image src={LogoMobile} alt="logo" className="ml-4" />
      <IoMenu
        size={44}
        color="#000"
        className="rounded-full bg-[#F2F2F7] p-2 mr-4"
        onClick={handlerSwitchMenu}
      />
      {switchMenu && (
        <section className="w-full flex justify-center items-center absolute top-24">
          <article className=" bg-white rounded-xl w-[98%] py-8 flex flex-col gap-10 ">
            <ul className="flex items-center justify-evenly px-4 ">
              <li onClick={() => handlerSelectLi("Room Stay")}>
                <input type="radio" id="roomStay" name="options" className="invisible" />
                <label htmlFor="roomStay"
               className={`${
                nameRender === "Room Stay" && "text-[#632DF8]" 
              }`}
                >Room Stay</label>
              </li>
              <li onClick={() => handlerSelectLi("Find Roommate")}>
                <input type="radio" id="findRoommate" name="options" className="invisible" />
                <label htmlFor="findRoommate"
                className={`${
                  nameRender === "Find Roommate" && "text-[#632DF8] " 
                }`}
                >Find Roommate</label>
              </li>
              <li onClick={() => handlerSelectLi("Experiences")}>
                <input type="radio" id="experiences" name="options" className="invisible" />
                <label htmlFor="experiences"
                 className={`${
                  nameRender === "Experiences" && "text-[#632DF8] "
                }`}
                >Experiences</label>
              </li>
            </ul>
           <div className="flex justify-center items-center" >
           <div className={` w-[160px] h-1 ${
                  nameRender === "Room Stay" ? "bg-[#632DF8] " : "bg-[#EAEBF0]"
                }`} />
            <div className={` w-[190px] h-1 ${
                  nameRender === "Find Roommate" ? "bg-[#632DF8] " : "bg-[#EAEBF0]"
                }`} />
            <div className={` w-[165px] h-1 ${
                  nameRender === "Experiences" ? "bg-[#632DF8] " : "bg-[#EAEBF0]"
                }`} />
           </div>
            <article>
              <ul className="flex item-center justify-center gap-1 " >
                <li  onClick={() => handlerSelectOption("hotel")}
                 className={`  border py-1 px-4 rounded-full ${
                  selectOption.hotel === true ? "text-white bg-[#632DF8] border-[#632DF8] " : "text-[#272D37] bg-[#EFEFF1]  border-[#DAE0E6]" 
                }`}
                 >Hotel</li>
                <li  onClick={() => handlerSelectOption("longTerm")}
                className={`  border py-1 px-3 rounded-full ${
                  selectOption.longTerm === true ? "text-white bg-[#632DF8] border-[#632DF8] " : "text-[#272D37] bg-[#EFEFF1]  border-[#DAE0E6]" 
                }`}
                >Long term</li>
                <li  onClick={() => handlerSelectOption("shortTerm")} 
                 className={` border py-1 px-3 rounded-full  ${
                  selectOption.shortTerm === true ? "text-white bg-[#632DF8] border-[#632DF8] " : "text-[#272D37] bg-[#EFEFF1]  border-[#DAE0E6]" 
                }`}
                >Short term</li>
              </ul>
              {renderOpcion()}
            </article>
          </article>
        </section>
      )}
    </article>
  );
}
