import { Route } from '@/routers/types';
import Logo from '@/shared/Logo';
import MenuBar from '@/shared/MenuBar';
import Link from 'next/link';
import { useProfile } from '@/context';
import { useSession } from '@/hooks/useSession';
import React, {FC, useEffect, useState} from 'react';
import HeroSearchForm2MobileFactory from '../(HeroSearchForm2Mobile)/HeroSearchForm2MobileFactory';
import AvatarDropdown from './AvatarDropdown';
import NotifyDropdown from './NotifyDropdown';
import Image from 'next/image';
import usaImg from '@/images/country/usa.png';
import CurrencyModal from './NewCurrencyModal';
import LanguageModal from './LanguageModal';
import CountryModal from "./CountryModal";
import NavbarMobile from "./NavbarMobile";
import Button from '@/shared/Button';
import { RiArrowDownSLine } from "react-icons/ri";

export interface MainNav2Props {
  className?: string;
}

const btnStyle =
  "group self-center w-10 h-10 sm:w-12 sm:h-12 hover:bg-gray-100 dark:hover:bg-neutral-800 rounded-full inline-flex items-center justify-center text-base font-medium hover:text-opacity-100 focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-opacity-75 relative";
const MainNav2: FC<MainNav2Props> = ({ className = "" }) => {
  const [isModalOpenCurrency, setIsModalOpenCurrency] = useState(false);
  const [isModalOpenCountry, setIsModalOpenCountry] = useState(false);

  const { getSession, clearSession } = useSession();
  const { clearUser }: any = useProfile();
  const { token, userInfo } = getSession();
  const [currency, setCurrency] = useState<string | null>('USD');

  useEffect(() => {
    if(typeof window !== "undefined" && window.localStorage){
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
    <header className={`MainNav2 relative z-10 ${className}`}>
      <section className="flex justify-between h-16 px-4 lg:container">
        <article className="justify-between flex-1 hidden space-x-3 md:flex sm:space-x-8 lg:space-x-10">
          <Logo className="self-center w-34" />
          <div className="items-center justify-end hidden lg:flex ">
          <ol className='flex items-center gap-4 '>
              <li>About</li>
              <li>Contact</li>
              <div className='flex items-center gap-1 '>
              <li>More </li>
              <RiArrowDownSLine />
              </div>
              

            </ol>
            <button className={`${btnStyle}`} onClick={openModalCurrency}>
              {currency}
            </button>
            <button className={`${btnStyle}`} onClick={openModalCountry}>
              <Image src={usaImg} className="w-6 h-6 rounded-full" alt="usa" />
            </button>
          </div>
        </article>


        <NavbarMobile />


        <div className="justify-end flex-1 flex-shrink-0 hidden md:flex lg:flex-none text-neutral-700 dark:text-neutral-100">
          <div className="hidden space-x-1 lg:flex">
            <Link
            href={token ? '/add-listing' : '/auth/login' as any}

              as={token ? '/add-listing' : '/auth/login'}
              className="inline-flex items-center self-center px-4 py-2 text-sm font-medium text-gray-700 border rounded-full text-opacity-90 group border-neutral-300 hover:border-neutral-400 dark:border-neutral-700 dark:text-neutral-300 hover:text-opacity-100 focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-opacity-75"
            >
              List your property
            </Link>

            <NotifyDropdown className='' />
            <AvatarDropdown />
          </div>
          <div className="flex space-x-2 lg:hidden">
            {/* <NotifyDropdown /> */}
            <AvatarDropdown />
            <MenuBar />
          </div>
        </div>
      </section>
      <CurrencyModal isOpen={isModalOpenCurrency} onClose={closeModalCurrency} />
      <LanguageModal isOpen={isModalOpenCountry} onClose={closeModalCountry} />
    </header>
  );
};

export default MainNav2;