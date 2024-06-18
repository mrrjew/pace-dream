"use client";

import {  MoreHorizOutlined, Place } from "@mui/icons-material"
import Image from "next/image"
import { BsEye } from "react-icons/bs"
import { FaRegEdit } from "react-icons/fa"
import { Menu, MenuItem } from '@szhsin/react-menu';
import '@szhsin/react-menu/dist/index.css';
import '@szhsin/react-menu/dist/transitions/slide.css';
import { Fragment } from "react"
import { RentableItem } from "@/types/rentalItems"


export function BookingAndListingCard({menus,setSelectedItem,data}:{
    setSelectedItem: (value: boolean) => void,
    menus: { title: string, onClick: () => void, className?: string }[],
   data:RentableItem
}){


    return (
        <div className="grid grid-cols-3 gap-4 p-4 w-full rounded-2xl">
            <Image 
                className="rounded-xl h-40 w-44 object-cover col-span-1"
                src={data?.gallery?.thumbnail || 'https://placehold.co/600x400@3x.png?text=Pace Dream'} 
                alt="HotelDemo1" width={300} height={300} />
            <div className="grid grid-cols-1 col-span-2">
                <div className="flex items-center justify-between ">
                    <h2 className="text-xs md:text-lg line-clamp-1 font-semibold">
                        {data?.title}
                    </h2>
                    <Menu menuStyle={{
                        borderRadius: '0.5rem',
                    }} menuButton={ <MoreHorizOutlined className="ring-1 rounded-full" />}>
                        {
                            menus.map((item, index,arr) => (
                                <Fragment key={index}>
                                <MenuItem style={{
                                    fontSize: '0.8rem',
                                    padding: '0.5rem 1rem'
                                }}  onClick={item.onClick} className={item.className}>{item.title}</MenuItem>
                                {(index < arr.length-1) && <hr className="border-gray-200" />}
                                </Fragment>
                            ))
                        }
                    </Menu>
                </div>
                <div>
                    <Place className="text-primary-800" />
                    <span className="text-sm font-extralight text-gray-300">
                        {data?.location?.address}
                    </span>
                </div>
                <div className="flex justify-between h-fit">
                    <span><span className="text-sm font-bold">
                      ${parseFloat(data?.price?.at(0)?.amount?.toString() || '0')}
                    </span> <span className="text-xs text-gray-500">
                      /{data?.price?.at(0)?.frequency || 'hour'}
                    </span></span>
                    <span className="text-sm p-2 px-5 bg-green-100 text-green-500 font-semibold rounded-lg">{"Stock"}</span>
                </div>
                <div className="flex justify-between gap-6">
                    <button className="text-sm w-full py-1 px-4 bg-gray-300 justify-center rounded-lg text-gray-500 flex items-center gap-1 font-thin">
                      <FaRegEdit />
                    {"Edit"}
                    </button>
                    <button 
                        onClick={() => setSelectedItem(true)}
                        className="text-sm w-full py-1 px-4 bg-primary-700 justify-center rounded-lg text-white flex items-center gap-1 font-thin">
                      <BsEye />
                    {"Preview"}
                    </button>
                </div>
                
            </div>
        </div>
        <div>
          <Place className="text-primary-800" />
          <span className="text-sm font-extralight text-gray-300">
            1 Anzinger Court
          </span>
        </div>
        <div className="flex justify-between h-fit">
          <span>
            <span className="text-sm font-bold">$250</span>{" "}
            <span className="text-xs text-gray-500">/hour</span>
          </span>
          <span className="text-sm p-2 px-5 bg-green-100 text-green-500 font-semibold rounded-lg">
            {"Stock"}
          </span>
        </div>
        <div className="flex justify-between gap-6">
          <button className="text-sm w-full py-1 px-4 bg-gray-300 justify-center rounded-lg text-gray-500 flex items-center gap-1 font-thin">
            <FaRegEdit />
            {"Edit"}
          </button>
          <button
            onClick={() => setSelectedItem(true)}
            className="text-sm w-full py-1 px-4 bg-primary-700 justify-center rounded-lg text-white flex items-center gap-1 font-thin"
          >
            <BsEye />
            {"Preview"}
          </button>
        </div>
      </div>
    </div>
  );
}

// vertical card
export function BookingAndListingVerticalCard({
  menus,
  setSelectedItem,
}: {
  setSelectedItem: (value: boolean) => void;
  menus: { title: string; onClick: () => void; className?: string }[];
}) {
  return (
    <div className="grid grid-cols-1 gap-4 p-4 w-full rounded-2xl">
      <Image
        className="rounded-xl min-h-44 w-full object-cover col-span-1"
        src="https://a0.muscache.com/im/pictures/81dca5d6-5a86-49bc-8eca-4a8610a07d27.jpg?im_w=1920"
        alt="HotelDemo1"
        width={300}
        height={360}
      />
      <div className="grid grid-cols-1 col-span-2 gap-4">
        <div className="flex items-center justify-between ">
          <h2 className="text-xs md:text-lg line-clamp-1 font-semibold">
            Best Western Cedars{" "}
          </h2>
          <Menu
            menuStyle={{
              borderRadius: "0.5rem",
            }}
            menuButton={<MoreHorizOutlined className="ring-1 rounded-full" />}
          >
            {menus.map((item, index, arr) => (
              <Fragment key={index}>
                <MenuItem
                  style={{
                    fontSize: "0.8rem",
                    padding: "0.5rem 1rem",
                  }}
                  onClick={item.onClick}
                  className={item.className}
                >
                  {item.title}
                </MenuItem>
                {index < arr.length - 1 && <hr className="border-gray-200" />}
              </Fragment>
            ))}
          </Menu>
        </div>
        <div>
          <Place className="text-primary-800" />
          <span className="text-sm font-light text-gray-500">
            1 Anzinger Court
          </span>
        </div>
        <div className="flex justify-between h-fit">
          <span>
            <span className="text-sm font-bold">$250</span>{" "}
            <span className="text-xs text-gray-500">/hour</span>
          </span>
          <span className="text-sm p-2 px-5 bg-green-100 text-green-500 font-semibold rounded-lg">
            {"Stock"}
          </span>
        </div>
        <div className="flex justify-between gap-6">
          <button
            className="text-sm w-full py-2 px-4 bg-gray-300 justify-center rounded-lg text-gray-500 flex
                    items-center gap-1 font-thin"
          >
            <FaRegEdit />
            {"Edit"}
          </button>
          <button
            onClick={() => setSelectedItem(true)}
            className="text-sm w-full py-2 px-4 bg-primary-700 justify-center rounded-lg text-white flex items-center gap-1 font-thin"
          >
            <BsEye />
            {"Preview"}
          </button>
        </div>
      </div>
    </div>
  );
}
