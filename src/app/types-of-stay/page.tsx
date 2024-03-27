"use client"
import Image from "next/image";
import { FC, useState } from "react";
import natureHouse from "@/images/nature-house.jpg"
import NatureCard from "@/components/TypesOfStay/Card";
import { MdOutlinePersonAddAlt } from "react-icons/md";

const buttonClassTop =
    "h-[46px] border-[1px] rounded-full w-fit px-5 text-[#757575] hover:bg-[#632DF8] hover:text-white";
const buttonClass =
    "h-[46px] border-[1px] rounded-full text-base w-fit px-5 text-black hover:bg-[#632DF8] hover:text-white";
const searchButtonClass =
    "bg-[#632DF8] w-full h-[46px] lg:w-[46px] rounded-full flex justify-center items-center";


const TypesOfStay = () => {

    return (
        <div className="" >
            <div className="flex flex-col gap-4 pt-8 text-center bg-white " >
                <h1 className="text-4xl font-semibold tracking-tighter lg:text-5xl/none">Nature Stay Homes</h1>
                <p className=" text-center mx-auto max-w-[700px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
                    Find your perfect nature retreat. Book a cozy cabin, a lakeside cottage, or a mountain chalet.
                </p>
            </div>
            {/* Search bar */}
            <div className="relative flex justify-center pt-8 pb-8 bg-white lg:w-full sm:w-screen items-center">
                <div className="lg:flex gap-6 p-8 z-10 h-fit w-[320px] lg:h-[139px] lg:w-fit border-[0.5px] shadow-md rounded-3xl bg-white ">
                    <div className="flex flex-col gap-2  ">
                        <p className="font-medium text-lg">Where</p>
                        <input
                            type="text"
                            placeholder="Minamiuonuma, Niigata"
                            className="block  border-neutral-200 focus:border-primary-300 focus:ring focus:ring-primary-200 focus:ring-opacity-50 bg-white dark:border-neutral-700 dark:focus:ring-primary-6000 dark:focus:ring-opacity-25 dark:bg-neutral-900 h-[46px] px-4 py-3 lg:w-[444px] w:[288px] rounded-3xl "
                        />
                    </div>
                    <div className="flex flex-col gap-2 lg:mt-0 mt-6">
                        {/* <p>Budget</p> */}
                        <div className="flex gap-2">
                            <div className="flex flex-col gap-2">
                                <p className="font-medium text-lg ">From</p>
                                <input
                                    type="date"
                                    placeholder="12/04/24"
                                    className="block border-neutral-200 focus:border-primary-300 focus:ring focus:ring-primary-200 focus:ring-opacity-50 bg-white dark:border-neutral-700 dark:focus:ring-primary-6000 dark:focus:ring-opacity-25 dark:bg-neutral-900 h-[46px] px-4 py-3 w-[120px] rounded-3xl"
                                />
                            </div>
                            <div className="flex flex-col gap-2">
                                <p className="font-medium text-lg ">Until</p>
                                <input
                                    type="date"
                                    placeholder="16/04/24"
                                    className="block border-neutral-200 focus:border-primary-300 focus:ring focus:ring-primary-200 focus:ring-opacity-50 bg-white dark:border-neutral-700 dark:focus:ring-primary-6000 dark:focus:ring-opacity-25 dark:bg-neutral-900 h-[46px] px-4 py-3 w-[120px] rounded-3xl"
                                />
                            </div>
                        </div>
                    </div>
                    <div className="flex flex-col gap-2 lg:mt-0 mt-6">
                        <p className="font-medium text-lg">Guests</p>
                        <div className="flex gap-2">
                            <input type="text" placeholder="Add your guests" className="block border-neutral-200 focus:border-primary-300 focus:ring focus:ring-primary-200 focus:ring-opacity-50 bg-white dark:border-neutral-700 dark:focus:ring-primary-6000 dark:focus:ring-opacity-25 dark:bg-neutral-900 h-[46px] w-full px-4 py-3 lg:w-44 rounded-3xl" />
                        </div>
                    </div>
                    <div className="flex lg:justify-end pt-8">
                        <button className={searchButtonClass}>
                            <div>
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    stroke-width="1.5"
                                    stroke="currentColor"
                                    className="w-6 h-6 text-white hidden lg:block"
                                >
                                    <path
                                        stroke-linecap="round"
                                        stroke-linejoin="round"
                                        d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z"
                                    />
                                </svg>
                                <div className="lg:hidden">
                                    <p className="text-[17px] text-white">Search</p>
                                </div>
                            </div>
                        </button>
                    </div>
                </div>
            </div>
            <hr />
            {/* Cards */}
            {/* 296*416 */}
            <div className="lg:px-32 py-8 px-4 flex flex-col justify-center bg-white ">
                {/* <p className="text-3xl font font-semibold py-8">Nature Stay Homes</p>
                <p>Find your perfect nature retreat. Book a cozy cabin, a lakeside cottage, or a mountain chalet.</p> */}

                <div>
                    <div className="space-y-2 mb-8 ">
                        <h2 className="text-3xl font-semibold tracking-tighter md:text-4xl/tight">Featured Properties</h2>
                        <p className="max-w-[600px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
                            Discover beautiful homes surrounded by nature. Each property is a peaceful oasis.
                        </p>
                    </div>
                </div>
                <div>
                    <div className="grid grid-cols-1 gap-4 px-8 lg:px-0 lg:grid-cols-4 pb-8 mx-auto ">
                        {/* Cards */}
                        <NatureCard />
                        <NatureCard />
                        <NatureCard />
                        <NatureCard />
                    </div>
                </div>
                <button className="px-4 py-2 rounded-full mx-auto mb-8 text-white bg-[#632DF8]">
                    Load More
                </button>
                <hr />
                <div className="mb-8 mt-12 flex lg:flex-row items-center flex-col lg:gap-10 gap-8 " >
                    <Image src={natureHouse} alt="nature" height={420} width={500} className="rounded-lg object-contain" />
                    <div className="flex flex-col gap-4" >
                        <p className="text-5xl font-semibold">
                            Nature House Retreat
                        </p>
                        <p className="text-lg">
                            Immerse yourself in a lifestyle that harmonizes with nature at our Nature Houses. Tucked away amidst serene surroundings, these eco-friendly dwellings redefine modern living with a commitment to sustainability.Each residence is meticulously crafted to minimize environmental impact, boasting energy-efficient features and locally-sourced materials.
                        </p>
                        <p className="text-lg">Step outside and discover a world of natural wonders right on your doorstep. From lush gardens to tranquil trails, Nature Houses offer residents the opportunity to reconnect with the great outdoors.</p>
                    </div>
                </div>
            </div>
        </div >
    )
}

export default TypesOfStay