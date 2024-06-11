"use client";
import React, { useState } from "react";
import { Message, Phone } from "@mui/icons-material";
import Link from "next/link";
import { Disclosure } from "@headlessui/react";
import { faq } from "@/data/faq";
import NewsLetter from "@/components/HelpCenter/NewsLetter";

const HelpCenterLayout = () => {
  const [selected, setSelected] = useState<string>("Contact Us");

  const handleOptionSelect = (label: string) => {
    setSelected(label);
  };

  return (
    <div className="w-full h-max bg-white p-8 pb-7">
      <div className="mx-4 max-w-7xl mx-auto justify-center w-full">
        <div className="md:ml-0 pt-7 pb-7 w-full grid col-span-1">
          <p className="flex flex-col gap-2 w-full">
            <span className="font-bold text-3xl leading-[32px]">
              Hi, how can we help?
            </span>
            <p className="text-[15px] mt-2 text-gray-700/80 tracking-[0.1px]">
              Sign in to contact Customer Service - we're available 24 hours a
              day
            </p>
          </p>

          <div className=" p-6 ring-1 shadow-sm mt-6 ring-gray-300/50 rounded-md">
            <div className="flex flex-col sm:gap-20 mb-4 sm:flex-row sm:justify-center">
              <div className="flex gap-6 items-start">
                <Message className="text-gray-900/80 mt-2" />
                <div className="flex flex-col gap-2">
                  <p className="font-semibold leading-[32px] text-sm text-gray-900/80">
                    Send us a message
                  </p>
                  <p className="text-[15px] text-gray-700/80 tracking-[0.1px]">
                    Contact our agents about your booking and we will reply as
                    soon as possible
                  </p>
                </div>
              </div>
              <div className="flex gap-6 items-start">
                <Phone className="text-gray-900/80 mt-2" />
                <div className="flex flex-col gap-2">
                  <p className="font-semibold leading-[32px] text-sm text-gray-900/80">
                    Call us
                  </p>
                  <p className="text-[15px] text-gray-700/80 tracking-[0.1px]">
                    For anything urgent you can call 24/7 at a local or
                    international number
                  </p>
                </div>
              </div>
            </div>

            <div className="flex flex-col space-y-4 mt-4 text-center">
              <Link
                href={"/auth/login"}
                className="w-full p-2 rounded-lg bg-violet text-slate-50 font-semibold hover:bg-violet/80"
              >
                Sign in
              </Link>

              <Link
                href={"#"}
                className="w-full p-2 text-sm text-violet decoration hover:decoration-underline bg-purple-100/30"
              >
                Continue without an account
              </Link>
            </div>
          </div>
          {/* frequently asked question */}
          <div className="space-y-2 mt-8 ring-1 rounded-md ring-gray-300/50 p-4">
            <h2 className="text-xl font-semibold">Frequently asked question</h2>

            {faq.map((_faq, i) => {
              return (
                <Disclosure defaultOpen={i == 0 && true} key={i}>
                  {({ open }) => (
                    <div
                      className={`p-4 w-full ${i != faq.length - 1 && "border-b ring-inset ring-gray-900"}`}
                    >
                      <Disclosure.Button
                        className={`w-full flex justify-between text-left items-center p-2 font-semibold ${open ? "text-violet" : "text-gray-900/70"}`}
                      >
                        <p>{_faq.question} </p>
                        <p>{open ? "-" : "+"}</p>
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
        </div>
        <NewsLetter />
      </div>
    </div>
  );
};

export default HelpCenterLayout;
