import React from 'react';
import { FiHome, FiUsers } from 'react-icons/fi'; // React Icons kütüphanesinden kullanacağımız iconlar
import { LiaHourglassStartSolid } from "react-icons/lia";
import { FaClock } from "react-icons/fa6";
import { RxIdCard } from "react-icons/rx";
import { PiClockCountdownFill } from "react-icons/pi";
import Link from 'next/link';
export default function Page() {
  return (
    <div className="max-w-md mx-auto my-10 p-6 bg-white rounded-lg shadow-md">
      <div className="text-center mb-6">
        <p className="font-bold text-xl">What Type of Place will guests have?</p>
        <div className="w-full h-[2px] font-bold bg-gray-300 mx-auto my-2"></div>
        <p className='text-gray-400 font-bold text-sm pb-2'>Choose what you would like to offer.</p>
      </div>
      <div className="flex items-center justify-center flex-col gap-2">
        <div className="flex flex-col md:flex-row gap-4">
          <Link href={"/add-listing/room-stay"} className="w-60 md:w-32 h-60 md:h-32 flex flex-col items-center justify-center gap-2 border-[1px] border-gray-300 hover:bg-violet hover:text-white text-xs font-bold px-2 rounded">
            <FiHome className=" text-red-400" size={25} />
            <span>Room Stay</span>
          </Link>
          <button className="w-60 md:w-32 h-60 md:h-32 flex flex-col items-center justify-center gap-2 border-[1px] border-gray-300 hover:bg-violet hover:text-white text-xs font-bold px-2 rounded">
            <FaClock className=" text-green-400" size={25} />
            <span >Time-Based</span>
          </button>
          <button className="w-60 md:w-32 h-60 md:h-32 flex flex-col items-center justify-center gap-2 border-[1px] border-gray-300 hover:bg-violet hover:text-white text-xs font-bold px-2 rounded">
            <LiaHourglassStartSolid className=" text-yellow-400" size={25} />
            <span >Hourly Rental Gear</span>
          </button>
        </div>
        <div className="flex flex-col md:flex-row gap-4">
            <button className="w-60 md:w-32 h-60 md:h-32 flex flex-col items-center justify-center gap-2 border-[1px] border-gray-300 hover:bg-violet hover:text-white text-xs font-bold px-2 rounded">
                <FiUsers className=" text-blue-400" size={25} />
                <span >Find Roommate</span>
            </button>
            <button className="w-60 md:w-32 h-60 md:h-32 flex flex-col items-center justify-center gap-2 border-[1px] border-gray-300 hover:bg-violet hover:text-white text-xs font-bold px-2 rounded">
                <RxIdCard className=" text-pink-400" size={25} />
                <span >Experiences</span>
            </button>
            <button className="w-60 md:w-32 h-60 md:h-32 flex flex-col items-center justify-center gap-2 border-[1px] border-gray-300 hover:bg-violet hover:text-white text-xs font-bold px-2 rounded">
                <PiClockCountdownFill className=" text-black-400" size={25} />
                <span >Last Minutes</span>
            </button>

        </div>
      </div>
    </div>
  );
}
