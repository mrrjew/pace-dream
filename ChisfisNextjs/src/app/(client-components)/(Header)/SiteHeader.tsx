"use client";
import Logo from "@/shared/Logo";
import MenuBar from "@/shared/MenuBar";
import Link from "next/link";
import { useSession } from "@/hooks/useSession";
import React, { useEffect, useState } from "react";
import AvatarDropdown from "./AvatarDropdown";
import NotifyDropdown from "./NotifyDropdown";
import Image from "next/image";
import usaImg from "@/images/country/usa.png";
import CurrencyModal from "./NewCurrencyModal";
import LanguageModal from "./LanguageModal";
import NavbarMobile from "./NavbarMobile";

export interface MainNav2Props {
  className?: string;
}

const btnStyle =
  "group self-center w-10 h-10 sm:w-12 sm:h-12 hover:bg-gray-100 dark:hover:bg-neutral-800 rounded-full inline-flex items-center justify-center text-base font-medium hover:text-opacity-100 focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-opacity-75 relative";

export default function SiteHeader() {
  const [isModalOpenCurrency, setIsModalOpenCurrency] = useState(false);
  const [isModalOpenCountry, setIsModalOpenCountry] = useState(false);

  const { getSession } = useSession();
  const { token } = getSession();
  const [currency, setCurrency] = useState<string | null>("USD");

  useEffect(() => {
    if (typeof window !== "undefined" && window.localStorage) {
      let localCurrency = localStorage.getItem("currency");
      setCurrency(localCurrency);
    }
  }, []);

  const openModalCurrency = () => {
    setIsModalOpenCurrency(true);
  };

  const openModalCountry = () => {
    setIsModalOpenCountry(true);
  };

  const closeModalCurrency = () => {
    setIsModalOpenCurrency(false);
    window.location.reload();
  };

  const closeModalCountry = () => {
    setIsModalOpenCountry(false);
    window.location.reload();
  };
  return (
    <header
      className={`fixed bg-white/70 dark:bg-neutral-900/60 backdrop-blur-2xl backdrop-filter top-0 w-full left-0 right-0 z-[100] shadow-sm dark:border-b dark:border-neutral-700`}
    >
      <section className="flex justify-between h-16 px-4 lg:container">
        <article className="justify-start flex-1 hidden space-x-3 md:flex sm:space-x-8 lg:space-x-10 gap-14">
          <Logo className={`self-center w-34 ml-6`} />
          <div className="items-center justify-end hidden lg:flex ">
            <ol className="flex items-center gap-4 ml-48">
              <li>
                <Link href={"/roommate"}>Find Roomate &nbsp; /</Link>
              </li>
              <li>
                <Link href={"/about-us"}>About &nbsp; /</Link>
              </li>
              <li>
                <Link href={"/contact-us"}>Contact &nbsp; /</Link>
              </li>
              <div className="flex items-center gap-1 "></div>
            </ol>
            <button className={`${btnStyle}`} onClick={openModalCurrency}>
              {currency || "USD"}
            </button>
            <button className={`${btnStyle}`} onClick={openModalCountry}>
              <Image src={usaImg} className="w-4 h-4 rounded-full" alt="usa" />
            </button>
          </div>
        </article>

        <NavbarMobile />

        <div className="justify-end flex-1 flex-shrink-0 hidden md:flex lg:flex-none text-neutral-700 dark:text-neutral-100">
          <div className="hidden space-x-1 lg:flex">
            <Link
              // href="/auth/login"
              href={token ? "/add-listing" : "/auth/login"}
              as={token ? "/add-listing" : "/auth/login"}
              className="inline-flex items-center self-center px-4 py-2 text-sm font-medium text-gray-700 border rounded-full text-opacity-90 group border-neutral-300 hover:border-neutral-400 dark:border-neutral-700 dark:text-neutral-300 hover:text-opacity-100 focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-opacity-75"
            >
              Post a Listing
            </Link>
            <AvatarDropdown />
          </div>
          <div className="flex space-x-2 lg:hidden">
            <NotifyDropdown />
            <AvatarDropdown />
            <MenuBar />
          </div>
        </div>
      </section>

      <CurrencyModal
        isOpen={isModalOpenCurrency}
        onClose={closeModalCurrency}
      />
      <LanguageModal isOpen={isModalOpenCountry} onClose={closeModalCountry} />
    </header>
  );
}
