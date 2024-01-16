import Image from "next/image";

import { IoMenu } from "react-icons/io5";
import LogoMobile from "@/images/paceDreamLogo-light.png";
import { useState } from "react";

export default function NavbarMobile() {
  const [switchMenu, setSwitchMenu] = useState(false);
  const [nameRender, setNameRender] = useState("Room Stay");
  const handlerSwitchMenu = () => setSwitchMenu(!switchMenu);

  const renderOpcion = () => {
    switch (nameRender) {
      case "Room Stay":
        return <h2>Room stay</h2>;
      case "Find Roommate":
        return <h2>Find roommate</h2>;
      case "Experiences":
        return <h2>Experiences</h2>;
      default:
        return <h2>Room stay</h2>;
    }
  };

  const handlerSelectLi = (key: string) => {
    setNameRender(key);
  };
  return (
    <article className=" px-4 w-full flex items-center justify-between md:hidden relative ">
      <Image src={LogoMobile} alt="logo" />
      <IoMenu
        size={44}
        color="#000"
        className="rounded-full bg-[#F2F2F7] p-2"
        onClick={handlerSwitchMenu}
      />
      {switchMenu && (
        <section className="w-full flex justify-center items-center absolute top-24">
          <article className=" bg-white rounded-xl w-[85%] py-8 ">
            <ul className="flex gap-6 ">
              <li onClick={() => handlerSelectLi("Room Stay")}>
                <input type="radio" id="roomStay" name="options" className="invisible" />
                <label htmlFor="roomStay"
               className={`cursor-pointer ${
                nameRender === "Room Stay" && "text-blue-500" 
              }`}
                >Room Stay</label>
              </li>
              <li onClick={() => handlerSelectLi("Find Roommate")}>
                <input type="radio" id="findRoommate" name="options" className="invisible" />
                <label htmlFor="findRoommate"
                className={`cursor-pointer ${
                  nameRender === "Find Roommate" && "text-blue-500" 
                }`}
                >Find Roommate</label>
              </li>
              <li onClick={() => handlerSelectLi("Experiences")}>
                <input type="radio" id="experiences" name="options" className="invisible" />
                <label htmlFor="experiences"
                 className={`cursor-pointer ${
                  nameRender === "Experiences" && "text-blue-500" 
                }`}
                >Experiences</label>
              </li>
            </ul>
            <article>{renderOpcion()}</article>
          </article>
        </section>
      )}
    </article>
  );
}
