import { Route } from '@/routers/types';
import Logo from '@/shared/Logo';
import MenuBar from '@/shared/MenuBar';
import Link from 'next/link';
import { useProfile } from '@/context';
import { useSession } from '@/hooks/useSession';
import React, { FC, useState } from 'react';
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

  

  const openModalCurrency = () => {
    setIsModalOpenCurrency(true);
  };

  const openModalCountry = () => {
    setIsModalOpenCountry(true);
  };

  const closeModalCurrency = () => {
    setIsModalOpenCurrency(false);
  };

  const closeModalCountry = () => {
    setIsModalOpenCountry(false);
  };
  return (
    <header className={`MainNav2 relative z-10 ${className}`}>
      <section className="px-4 h-16 lg:container flex justify-between">
        <article className="hidden md:flex justify-between flex-1 space-x-3 sm:space-x-8 lg:space-x-10">
          <Logo className="w-34  self-center" />
          {/* <div className='hidden lg:block self-center h-10 border-l border-neutral-300 dark:border-neutral-500'> */}
          <div className="hidden lg:flex  justify-end ">
            <button className={`${btnStyle}`} onClick={openModalCurrency}>
              USD
            </button>
            <button className={`${btnStyle}`} onClick={openModalCountry}>
              <Image src={usaImg} className="w-6 h-6 rounded-full" alt="usa" />
            </button>
            {/* <Link href={"/help-center" as Route<string> } > */}
            <Link href={"/about-us" as Route<string>} className={`${btnStyle} mr-8`}>
              <svg
                xmlns='http://www.w3.org/2000/svg'
                fill='none'
                viewBox='0 0 24 24'

                strokeWidth={1.5}
                stroke="currentColor"
                className="w-6 h-6"
              >
                <path
                  strokeLinecap='round'
                  strokeLinejoin='round'
                  d='M9.879 7.519c1.171-1.025 3.071-1.025 4.242 0 1.172 1.025 1.172 2.687 0 3.712-.203.179-.43.326-.67.442-.745.361-1.45.999-1.45 1.827v.75M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Zm-9 5.25h.008v.008H12v-.008Z'
                />
              </svg>
            </Link>
            {/* </Link> */}
            {/* <Link href={"/help-center" as Route<string> } >
              <button className={`${btnStyle} mr-8`}>
                <svg
                xmlns='http://www.w3.org/2000/svg'
                fill='none'
                viewBox='0 0 24 24'
                strokeWidth={1.5}
                stroke='currentColor'
                className='w-6 h-6'>
                <path
                  strokeLinecap='round'
                  strokeLinejoin='round'
                  d='M9.879 7.519c1.171-1.025 3.071-1.025 4.242 0 1.172 1.025 1.172 2.687 0 3.712-.203.179-.43.326-.67.442-.745.361-1.45.999-1.45 1.827v.75M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Zm-9 5.25h.008v.008H12v-.008Z'
                  />
                </svg>
              </button>
            </Link> */}
          </div>
        </article>


        <NavbarMobile />


        <div className="hidden md:flex flex-shrink-0 justify-end flex-1 lg:flex-none text-neutral-700 dark:text-neutral-100">
          <div className="hidden lg:flex space-x-1">
          {token ? (
            <Link
              href={'/add-listing' as Route<String>}
              className="self-center text-opacity-90 group px-4 py-2 border border-neutral-300 hover:border-neutral-400 dark:border-neutral-700 rounded-full inline-flex items-center text-sm text-gray-700 dark:text-neutral-300 font-medium hover:text-opacity-100 focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-opacity-75"
            >
              List your property
            </Link>
          ) : (
            <Link
              href={'/auth/login'}
              className="self-center text-opacity-90 group px-4 py-2 border border-neutral-300 hover:border-neutral-400 dark:border-neutral-700 rounded-full inline-flex items-center text-sm text-gray-700 dark:text-neutral-300 font-medium hover:text-opacity-100 focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-opacity-75"
            >
              List your property
            </Link>
          )}

            <NotifyDropdown />
            <AvatarDropdown />
          </div>
          <div className="flex space-x-2 lg:hidden">
            <NotifyDropdown />
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
