import Image from 'next/image'

import { IoMenu } from 'react-icons/io5'
import LogoMobile from "@/images/paceDreamLogo-light.png";
import { useState } from 'react';

export default function NavbarMobile() {
  const [switchMenu, setSwitchMenu] = useState(false);

  const handlerSwitchMenu = () => setSwitchMenu(!switchMenu)
  return (
    <article className=" px-4 w-full flex items-center justify-between md:hidden " >
         <Image src={LogoMobile} alt="logo" />
          <IoMenu size={44} color="#000" className="rounded-full bg-[#F2F2F7] p-2" 
          onClick={handlerSwitchMenu}
          />
    </article>
  )
}
