"use client";
import React from "react";
import Image from "next/image"
import { Disclosure } from "@headlessui/react";
import { faq } from "@/data/faq";
import { HeroBgMaskImage, HeroImage } from "public/assetsManager";
import restRoom from "@/images/categories/1.png";
import evPack from "@/images/categories/2.png";
import storage from "@/images/categories/3.png";
import spot from "@/images/categories/4.png";
import workspace from "@/images/categories/5.png";
import es from "@/images/categories/6.png";
import hrg from "@/images/categories/7.png";
import leisure from "@/images/categories/8.png";
import mail from "@/images/categories/mail.png";

import Link from "next/link";
import NewsLetter from "@/components/NewsLetter";

const page = () => {

    
    const catData = [
        {
          id: 1,
          icon: (
            <>
              {" "}
              <Image src={restRoom} width={80} height={80} alt="cat" />{" "}
            </>
          ),
          title: "Restroom",
          color: "text-blue-300",
          tintColor: "bg-[#e4f8ff]",
        },
        {
          id: 2,
          icon: (
            <>
              {" "}
              <Image src={evPack} width={80} height={80} alt="cat" />{" "}
            </>
          ),
          title: "EV parking spot",
          color: "text-purple-300",
          tintColor: "bg-[#fbefff]",
        },
        {
          id: 3,
          icon: (
            <>
              {" "}
              <Image src={storage} width={80} height={80} alt="cat" />{" "}
            </>
          ),
          title: "Storage Room",
          color: "text-purple-300",
          tintColor: "bg-[#ecf5ff]",
        },
        {
          id: 4,
          icon: (
            <>
              {" "}
              <Image src={spot} width={80} height={80} alt="cat" />{" "}
            </>
          ),
          title: "Parking Spot",
          color: "text-blue-400",
          tintColor: "bg-[#ecf5ff]",
        },
        {
          id: 5,
          icon: (
            <>
              {" "}
              <Image src={workspace} width={80} height={80} alt="cat" />{" "}
            </>
          ),
          title: "Workspaces",
          color: "text-blue-400",
          tintColor: "bg-[#fffaf2]",
        },
        {
          id: 6,
          icon: (
            <>
              {" "}
              <Image src={es} width={80} height={80} alt="cat" />{" "}
            </>
          ),
          title: "Event & Spaces",
          color: "text-blue-400",
          tintColor: "bg-[#fff5f8]",
        },
        {
          id: 7,
          icon: (
            <>
              {" "}
              <Image src={hrg} width={80} height={80} alt="cat" />{" "}
            </>
          ),
          title: "Hourly Rental Gear",
          color: "text-blue-400",
          tintColor: "bg-[#f7fff4]",
        },
        {
          id: 8,
          icon: (
            <>
              {" "}
              <Image src={leisure} width={80} height={80} alt="cat" />{" "}
            </>
          ),
          title: "Leasure Spaces",
          color: "text-blue-400",
          tintColor: "bg-[#f3fcff]",
        },
      ];

      // direct mail
      const shootDirectmail = () => {
        //
      }

    return (
        <div>
            
            <div className="w-full py-12 md:py-24 px-14 rounded-b-xl bg-violet relative">
            <Image 
                src={HeroBgMaskImage} 
                alt="categories" 
                layout="fill" 
                objectFit="cover" 
                className="select-none absolute z-[1] opacity-50 md:opacity-35"
            />
            <h1 className="text-white font-medium text-2xl my-4">All Categories</h1>
            <p className="text-white my-4 text-sm">Home / Categories</p>
        </div>

            {/* Categories web */}
        <div className=" md:flex hidden flex-wrap items-center justify-center px-28 py-4 mx-auto mt-[3rem] ">
          {catData.map((cat: any) => {
            return (
              <Link
                href="#"
                key={cat.title}
                className={`${cat.tintColor} py-12 px-14 w-1/5 h-max space-y-1 m-6 rounded-lg flex flex-col items-center`}
              >
                <p className={`text-4xl ${cat.color} text-blue-200`}>
                  {cat.icon}
                </p>
                <p className="font-bold text-sm lg:text-xl text-gray-900 text-center">{cat.title}</p>
              </Link>
            );
          })}
        </div>

        {/* mobile view */}
        <div className=" w-full md:hidden grid place-items-center mt-[2rem] gap-6 p-4 grid-cols-2 justify-center items-center">
        {catData.map((cat: any,i) => {
            return (
              <Link
                href="#"
                key={cat.title}
                className={`${cat.tintColor} py-8  cursor-pointer w-full ${i > 1 && '-mt-6'} h-max m-4 rounded-lg flex flex-col items-center`}
              >
                <p className={`text-4xl ${cat.color} text-blue-200`}>
                  {cat.icon}
                </p>
                <p className="font-bold text-sm lg:text-xl text-center text-gray-900">{cat.title}</p>
              </Link>
            );
          })}
        </div>

        <center className="mt-8">
          <h2 className="text-lg md:text-3xl font-semibold">Frequently asked question</h2>
        </center>
        <div className="flex md:flex-row mx-1 md:mx-40 flex-col items-center gap-10 p-2 md:p-4">
          {/* frequently asked question */}
          <div className="space-y-4 mt-4 md:mt-8 md:p-4">

            {faq.map((_faq, i) => {
              return (
                <Disclosure defaultOpen={i == 0 && true} key={i} >
                  {({ open }) => (
                    <div
                      className={`p-4 w-full border-[0.3px] border-gray-400/50 rounded-full"`}
                    >
                      <Disclosure.Button
                        className={`w-full flex justify-between text-left items-center rounded-full p-2 font-bold ${open ? "text-violet" : "text-gray-950"}`}
                      >
                        <p>{_faq.question} </p>
                        <p className="text-2xl font-normal">{open ? "-" : "+"}</p>
                      </Disclosure.Button>
                      <Disclosure.Panel className="text-[15px] text-gray-700/80 px-2 py-4">
                        {_faq.answer}
                      </Disclosure.Panel>
                    </div>
                  )}
                </Disclosure>
              );
            })}
          </div>

          <div
                      className={`p-4 lg:p-8 w-full lg:w-1/3 space-y-8 border-[0.3px] border-gray-400/50 rounded-lg flex flex-col items-center`}
                    >
                      <Image src={mail} alt="mail"/>
                      <h1 className="font-bold text-lg lg:text-2xl my-4 text-center">Do you have more questions?</h1>
                      <p className="text-md text-center">An all-emcompassing and user-friendly platform that seamlessly connects you with precisely what you{'\''}re looking for, streamlining your search process effortlessly</p>
                    
                      <button onClick={shootDirectmail} className="px-8 py-2 md:py-4 mt-14 rounded-full bg-violet font-semibold text-white sm text-sm md:text-lg">Shoot a Direct Mail</button>
                    </div>
        </div>

        <NewsLetter />
        </div>
    )
}
export default page;