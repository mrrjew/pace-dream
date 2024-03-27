"use client"
import Input from "@/shared/Input";
import Select from "@/shared/Select";
import FormItem from "./FormItem";
import { PageAddingListing } from "@/types/types";
import React, { useEffect, useState, MouseEvent } from "react";
import RoomImg from '@/images/svg/Room Stays.svg';
import TimeImg from '@/images/svg/Time-Based.svg';
import HourlyImg from '@/images/svg/Hourly Rental Gear.svg';
import FindImg from '@/images/svg/Find Roommate.svg';
import LastminutesImg from '@/images/svg/time-fast 1.svg';
import ExperiencesImg from '@/images/svg/Experience.svg';
import Image from "next/image";
import RoomStays from "@/app/add-listing/room-stays/[[...stepIndex]]/PageAddListing1";
import TimeBased from "@/app/add-listing/time-based/[[...stepIndex]]/PageAddListing1";
import HourlyRentalGear from "@/app/add-listing/hourly-rental-gear/[[...stepIndex]]/PageAddListing1";
import FindRoommate from "@/app/add-listing/find-roommate/[[...stepIndex]]/PageAddListing1"
import Experience from "@/app/add-listing/experience/[[...stepIndex]]/PageAddListing1";
import LastMinutes from "@/app/add-listing/last-minutes/[[...stepIndex]]/PageAddListing1";
import { Route } from '@/routers/types';
import Link from 'next/link';



const ListingPage = () => {
    const handleButtonClick = (page: string) => (event: MouseEvent<HTMLButtonElement>) => {
        event.preventDefault();
        window.location.href = `/${page}`;
      };
    return (
        <>
            <div className={`nc-PageAddListing1 px-4 max-w-3xl mx-auto pb-24 pt-14 sm:py-24 lg:pb-32`}>
                <div className='listingSection'>
                    <div className="bg-gray-100 min-h-screen">
                        <main className="py-8 px-2 md:px-15">
                            <div className="max-w-4xl mx-auto bg-white p-2 md:p-8 rounded-lg shadow">
                                <h1 className="text-xl font-[1000] leading-6  mb-4 text-center">
                                    <span className="decoration-2 decoration-[#192946]  " >What Type of Place will guests have?</span>
                                </h1>
                                <hr />
                                <form >
                                    <section>
                                        <h2 className="font-[700] text-[16px] mt-1 mb-2 text-center text-opacity-80 text-slate-400 mb-8  ">
                                            Choose what you are like to offer.</h2>                                        
                                        <div className="flex  justify-center flex-wrap gap-4 lg:justify-between text-center mb-6">
                                            <Link style={{ width: '171px', height: '158px' }} 
                                                className=" py-10 px-6 hover:bg-[#632DF8] text-black border border-[F6F4F6] hover:text-white text-[14px] font-[500] rounded-[25px] lg:rounded-[9px]"
                                                href={"/add-listing/room-stays" as Route<string>}
                                                type="button"
                                            >
                                                <div className='content-center mb-4'>   
                                                    <Image className='object-center ml-10'
                                                        src={RoomImg}
                                                        width={40}
                                                        height={40}
                                                        alt="Room Stays"
                                                    />
                                                </div>
                                                <span className="leading-3 text-lg"> Room Stays</span>
                                            </Link>
                                            <Link style={{ width: '171px', height: '158px' }}
                                                className=" py-10 px-6 hover:bg-[#632DF8] text-black border border-[F6F4F6] hover:text-white text-[14px] font-[500] rounded-[25px] lg:rounded-[9px]"
                                                href={"/add-listing/time-based" as Route<string>}
                                                type="button" 
                                            >
                                                <div className='content-center mb-4'>
                                                    <Image className='object-center ml-10'
                                                        src={TimeImg}
                                                        width={40}
                                                        height={40}
                                                        alt="Time-Based"
                                                    />
                                                </div>
                                                <span className="leading-3 text-lg"> Time-Based </span>
                                            </Link>
                                            <Link style={{ width: '171px', height: '158px' }}
                                                className=" py-10 px-6 hover:bg-[#632DF8] text-black border border-[F6F4F6] hover:text-white text-[14px] font-[500] rounded-[25px] lg:rounded-[9px]"
                                                href={"/add-listing/hourly-rental-gear" as Route<string>}
                                                type="button"
                                            >
                                                <div className='content-center mb-4'>
                                                    <Image className='object-center ml-10'
                                                        src={HourlyImg}
                                                        width={40}
                                                        height={40}
                                                        alt="Hourly Rental Gear"
                                                    />
                                                </div>

                                                <span className="leading-3 text-lg"  >Hourly Rental Gear</span>
                                            </Link>
                                            <Link style={{ width: '171px', height: '158px' }}
                                                className=" py-10 px-6 hover:bg-[#632DF8] text-black border border-[F6F4F6] hover:text-white text-[14px] font-[500] rounded-[25px] lg:rounded-[9px]"
                                                href={"/add-listing/find-roommate" as Route<string>}
                                                type="button"
                                            >
                                                <div className='content-center mb-4'>
                                                    <Image className='object-center ml-10'
                                                        src={FindImg}
                                                        width={40}
                                                        height={40}
                                                        alt="Find Roommate"
                                                    />
                                                </div>

                                                <span className="leading-3 text-lg">Find Roommate</span>
                                            </Link>
                                            <Link style={{ width: '171px', height: '158px' }}
                                                className=" py-10 px-6 hover:bg-[#632DF8] text-black border border-[F6F4F6] hover:text-white text-[14px] font-[500] rounded-[25px] lg:rounded-[9px]"
                                                href={"/add-listing/experience" as Route<string>}
                                                type="button"
                                            >
                                                <div className='content-center mb-4'>
                                                    <Image className='object-center ml-10'
                                                        src={ExperiencesImg}
                                                        width={40}
                                                        height={40}
                                                        alt="Experiences"
                                                    />
                                                </div>
                                                <span className="leading-3 text-lg" >Experiences</span>
                                            </Link>
                                            <Link style={{ width: '171px', height: '158px' }}
                                                className=" py-10 px-6 hover:bg-[#632DF8] text-black border border-[F6F4F6] hover:text-white text-[14px] font-[500] rounded-[25px] lg:rounded-[9px]"
                                                href={"/add-listing/last-minutes" as Route<string>}
                                                type="button"
                                            >
                                                <div className='content-center mb-4'>
                                                    <Image className='object-center ml-10'
                                                        src={LastminutesImg}
                                                        width={40}
                                                        height={40}
                                                        alt="Last minutes"
                                                    />
                                                </div>
                                                <span className="leading-3 text-lg pt-5" >Last minutes</span>
                                            </Link>
                                        </div>
                                    </section>
                                </form>
                            </div>
                        </main >
                    </div >
                </div>
            </div>
        </>
    );
};

export default ListingPage;