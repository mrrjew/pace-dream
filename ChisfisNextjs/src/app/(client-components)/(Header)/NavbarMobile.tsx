import Image from "next/image";

import { IoMenu } from "react-icons/io5";
import { IoMdClose } from "react-icons/io";
import LogoMobile from "@/images/paceDreamLogo-light.png";
import { useState } from "react";
import Link from "next/link";
import Avatar from '@/shared/Avatar';

const CollapsibleMenu = () => {
  return (
    <div className="fixed inset-0 h-72  w-full mt-[67px] bg-opacity-75 z-50 flex justify-end">
      <div className="flex flex-col h-ful rounded-md border-black mx-1 w-full px-36 bg-white shadow-xl">
        {/* Add your menu items here */}
        <div className="flex items-center mt-6 space-x-3 pb-4 border-b-2 ">
          <Avatar sizeClass="w-12 h-12" />
          <div className="flex-grow">
            <h4 className="font-semibold">
              John Doe
            </h4>
            {/* <p className="text-xs mt-0.5">{user?.email}</p> */}
          </div>
        </div>
        {/* <div className="mt-4">
          <button
            className="btn py-2 px-4 rounded-full text-white bg-[#5043d8] text-sm font-semibold "
          >
            Switch to host mode
          </button>
        </div> */}
        {/* My Account */}
        <Link
          href={'/account'}
          className="flex items-center mt-4 p-2 -m-3 transition duration-150 ease-in-out rounded-lg hover:bg-neutral-100 dark:hover:bg-neutral-700 focus:outline-none focus-visible:ring focus-visible:ring-orange-500 focus-visible:ring-opacity-50"
        >
          <div className="flex items-center justify-center flex-shrink-0 text-neutral-500 dark:text-neutral-300">
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M12.1601 10.87C12.0601 10.86 11.9401 10.86 11.8301 10.87C9.45006 10.79 7.56006 8.84 7.56006 6.44C7.56006 3.99 9.54006 2 12.0001 2C14.4501 2 16.4401 3.99 16.4401 6.44C16.4301 8.84 14.5401 10.79 12.1601 10.87Z"
                stroke="currentColor"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M7.15997 14.56C4.73997 16.18 4.73997 18.82 7.15997 20.43C9.90997 22.27 14.42 22.27 17.17 20.43C19.59 18.81 19.59 16.17 17.17 14.56C14.43 12.73 9.91997 12.73 7.15997 14.56Z"
                stroke="currentColor"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </div>
          <div className="ml-4">
            <p className="text-sm font-medium ">
              {'My Account'}
            </p>
          </div>
        </Link>
        {/* My Bookings */}
        <Link
          href={'/author'}
          className="flex items-center p-2 mt-4 -m-3 transition duration-150 ease-in-out rounded-lg hover:bg-neutral-100 dark:hover:bg-neutral-700 focus:outline-none focus-visible:ring focus-visible:ring-orange-500 focus-visible:ring-opacity-50"
        >
          <div className="flex items-center justify-center flex-shrink-0 text-neutral-500 dark:text-neutral-300">
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
            >
              <path
                d="M8 12.2H15"
                stroke="currentColor"
                strokeWidth="1.5"
                strokeMiterlimit="10"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M8 16.2H12.38"
                stroke="currentColor"
                strokeWidth="1.5"
                strokeMiterlimit="10"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M10 6H14C16 6 16 5 16 4C16 2 15 2 14 2H10C9 2 8 2 8 4C8 6 9 6 10 6Z"
                stroke="currentColor"
                strokeWidth="1.5"
                strokeMiterlimit="10"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M16 4.02002C19.33 4.20002 21 5.43002 21 10V16C21 20 20 22 15 22H9C4 22 3 20 3 16V10C3 5.44002 4.67 4.20002 8 4.02002"
                stroke="currentColor"
                strokeWidth="1.5"
                strokeMiterlimit="10"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </div>
          <div className="ml-4">
            <p className="text-sm font-medium ">
              {'My bookings'}
            </p>
          </div>
        </Link>
        {/* Wishlist */}
        <Link
          href={'/account-savelists'}
          className="flex items-center p-2 mt-4 -m-3 transition duration-150 ease-in-out rounded-lg hover:bg-neutral-100 dark:hover:bg-neutral-700 focus:outline-none focus-visible:ring focus-visible:ring-orange-500 focus-visible:ring-opacity-50"
        >
          <div className="flex items-center justify-center flex-shrink-0 text-neutral-500 dark:text-neutral-300">
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
            >
              <path
                d="M12.62 20.81C12.28 20.93 11.72 20.93 11.38 20.81C8.48 19.82 2 15.69 2 8.68998C2 5.59998 4.49 3.09998 7.56 3.09998C9.38 3.09998 10.99 3.97998 12 5.33998C13.01 3.97998 14.63 3.09998 16.44 3.09998C19.51 3.09998 22 5.59998 22 8.68998C22 15.69 15.52 19.82 12.62 20.81Z"
                stroke="currentColor"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </div>
          <div className="ml-4">
            <p className="text-sm font-medium ">{'Wishlist'}</p>
          </div>
        </Link>
        {/* Help */}
        <Link
          href={'/#'}
          className="flex items-center p-2 mt-4 -m-3 transition duration-150 ease-in-out rounded-lg hover:bg-neutral-100 dark:hover:bg-neutral-700 focus:outline-none focus-visible:ring focus-visible:ring-orange-500 focus-visible:ring-opacity-50"
        >
          <div className="flex items-center justify-center flex-shrink-0 text-neutral-500 dark:text-neutral-300">
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M11.97 22C17.4928 22 21.97 17.5228 21.97 12C21.97 6.47715 17.4928 2 11.97 2C6.44715 2 1.97 6.47715 1.97 12C1.97 17.5228 6.44715 22 11.97 22Z"
                stroke="currentColor"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M12 16.5C14.4853 16.5 16.5 14.4853 16.5 12C16.5 9.51472 14.4853 7.5 12 7.5C9.51472 7.5 7.5 9.51472 7.5 12C7.5 14.4853 9.51472 16.5 12 16.5Z"
                stroke="currentColor"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M4.89999 4.92993L8.43999 8.45993"
                stroke="currentColor"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M4.89999 19.07L8.43999 15.54"
                stroke="currentColor"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M19.05 19.07L15.51 15.54"
                stroke="currentColor"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M19.05 4.92993L15.51 8.45993"
                stroke="currentColor"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </div>
          <div className="ml-4">
            <p className="text-sm font-medium ">{'Help'}</p>
          </div>
        </Link>
      </div>
    </div >
  );
};


export default function NavbarMobile() {
  const [switchMenu, setSwitchMenu] = useState(false);
  const handlerSwitchMenu = () => setSwitchMenu(!switchMenu);


  return (
    <>
      <article className="w-full flex items-center justify-between md:hidden relative ">
        <Image src={LogoMobile} alt="logo" className="ml-4" />
        {
          !switchMenu ? (<IoMenu
            size={44}
            color="#000"
            className="rounded-full bg-[#F2F2F7] p-2 mr-4"
            onClick={handlerSwitchMenu}
          />) : (<IoMdClose
            size={44}
            color="#000"
            className="rounded-full bg-[#F2F2F7] p-2 mr-4"
            onClick={handlerSwitchMenu}
          />)
        }
      </article>
      {
        switchMenu && <CollapsibleMenu />
      }
    </>
  );
}
