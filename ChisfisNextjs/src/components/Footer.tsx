"use client";

import Logo from "@/shared/Logo";
import SocialsList1 from "@/shared/SocialsList1";
import { CustomLink } from "@/data/types";
import React from "react";
import FooterNav from "./FooterNav";
import Image from "next/image";
import PlayStore from "../images/download/google-play-store-badge-en.svg"
import Apple from "../images/download/download-on-the-app-store-apple-logo-svgrepo-com.svg"
import Facebook from "../images/logos/Facebook.svg"
import Google from "../images/logos/Google.svg"
import Instagram from "../images/logos/Instagram.svg"

export interface WidgetFooterMenu {
  id: string;
  title: string;
  menus: CustomLink[];
}

const widgetMenus: WidgetFooterMenu[] = [
  {
    id: "1",
    title: "PaceDream",
    menus: [
      { href: "#", label: "Your Space" },
      { href: "#", label: "Roommate" },
      { href: "#", label: "Gift Card" },
      { href: "#", label: "Experience" },
    ],
  },
  {
    id: "2",
    title: "Support",
    menus: [
      { href: "/about-us", label: "Help Center" },
      { href: "#", label: "Press" },
    ],
  },
  {
    id: "3",
    title: "Contact",
    menus: [
      { href: "/about-us", label: "About Us" },
      { href: "/contact-us", label: "Contact Us" },
    ],
  },
];

const Footer: React.FC = () => {
  const date=new Date();
  const year=date.getFullYear();
  const renderWidgetMenuItem = (menu: WidgetFooterMenu, index: number) => {
   
    return (
      <div key={index} className="text-sm bg-white">
        <h2 className="font-bold text-black">
          {menu.title}
        </h2>
        <ul className="mt-5 space-y-4">
          {menu.menus.map((item, index) => (
            <li key={index}>
              <a
                key={index}
                className="text-neutral-400 dark:text-neutral-300 hover:text-black"
                href={item.href}
              >
                {item.label}
              </a>
            </li>
          ))}
        </ul>
      </div>
    );
  };

  return (
    
    <div className="bg-white">
      <FooterNav />
      <div className="nc-Footer relative bg-white pt-24 lg:pt-24 pb-16 border-t border-neutral-200 max-md:ml-9">
        <div className="container grid grid-cols-2 gap-y-10 gap-x-2 sm:gap-x-8 md:grid-cols-4 lg:grid-cols-5 lg:gap-x-10 md:justify-items-end">
          {widgetMenus.map(renderWidgetMenuItem)}
          <div className="md:col-span-1">
            <h2 className="font-bold text-black">
              MobileApp
            </h2>
            <div className="relative w-[120px] h-[35px] md:w-[120px] md:h-[35px] md:mt-4 md:mb-2 my-2">
              <Image src={Apple} alt="Download on the AppStore" layout="fill" objectFit="cover" />
            </div>
            <Image src={PlayStore} alt="Get it on Google Play" width={120} height={35} />
          </div>
          {/* <SocialsList1 className="flex items-center space-x-3 lg:space-x-0 lg:flex-col lg:space-y-2.5 lg:items-start" /> */}
        </div>
      </div>
      <div className="flex m-auto bg-white border-t border-[#F0ECFC] lg:max-w-[80vw] py-8 justify-between max-md:flex-col">
        <div className="flex md:flex-row flex-col max-md:ml-8 max-md:mb-8">
          <h2 className="text-neutral-400">
            © {year} PaceDream. All Rights Reserved.
          </h2>
          <div className="flex">
            <h2 className="text-neutral-400 mx-2">
              Terms.
            </h2>
            <h2 className="text-neutral-400 mr-2">
              Sitemap.
            </h2>
            <h2 className="text-neutral-400">
              Privacy
            </h2>
          </div>
        </div>
        <div className="flex max-md:pb-12 max-md:ml-9">
          <a href="https://www.facebook.com/profile.php?id=61554764998573">
            <Image src={Facebook} alt="Facebook" width={24} />
          </a>
          <a href="#">
            <Image src={Google} alt="Google" width={24} className="mx-4" />
          </a>
          <a href="https://www.instagram.com/pacedream_official/">
            <Image src={Instagram} alt="Instagram" width={24} />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Footer;
