"use client"


import DynamicPageIndicator from "@/components/DynamicPageIndicator";
import money from "@/images/money.png";
import Image from "next/image";
import NewsLetter from "@/components/HelpCenter/NewsLetter";
import { GiSettingsKnobs } from "react-icons/gi";

const page = () => {
  return (
    <div className="w-full h-max p-8 bg-white text-gray-900/90">
      <div className="w-full max-w-7xl mx-auto mt-8 mb-8 p-4 py-8 md:py-20">
        <DynamicPageIndicator
          main={"Settings"}
          curr_route={"Global Preference"}
        />
        <h1 className="text-4xl font-semibold mt-2 text-gray-900/80">
          Global Preference
        </h1>

        <div className="flex space-x-10 gap-20 justify-between mb-10  mt-20">
          <div className="space-y-10 w-full">
            {/* preferred language */}
            <div className="w-full">
              <label
                htmlFor="language"
                className="flex justify-between items-center w-full"
              >
                Preferred language{" "}
                <span className="underline hover:text-gray-900/70 hover:cursor-pointer">
                  Edit
                </span>
              </label>
              <div className="border-b-[1px] border-gray-400/70">
                <input
                  type="text"
                  name="language"
                  className="mt-2 bg-transparent pb-6 text-md border-0 placeholder:text-gray-900/50 text-gray-900/70 w-full focus:outline-none focus:ring focus:ring-gray-900/0"
                  placeholder="English"
                />
              </div>
            </div>

            {/* preferred currency */}
            <div className="w-full">
              <label
                htmlFor="currency"
                className="flex justify-between items-center w-full"
              >
                Preferred Currency{" "}
                <span className="underline hover:text-gray-900/70 hover:cursor-pointer">
                  Edit
                </span>
              </label>
              <div className="border-b-[1px] border-gray-400/70">
                <textarea
                  name="currency"
                  className="mt-2 bg-transparent pb-4 text-md border-0 resize-none placeholder:text-gray-900/50 text-gray-900/70 w-full focus:outline-none focus:ring focus:ring-gray-900/0"
                  placeholder="Not provided"
                />
              </div>
            </div>

            {/* payment */}
            <div className="w-full">
              <label
                htmlFor="time_zone"
                className="flex justify-between items-center w-full"
              >
                Time zone{" "}
                <span className="underline hover:text-gray-900/70 hover:cursor-pointer">
                  Edit
                </span>
              </label>
              <div className="border-b-[1px] border-gray-400/70">
                <input
                  type="text"
                  name="time-zone"
                  className="mt-2 bg-transparent pb-4 text-md border-0 placeholder:text-gray-900/50 text-gray-900/70 w-full focus:outline-none focus:ring focus:ring-gray-900/0"
                />
              </div>
            </div>
          </div>

          {/* right card */}
          <div className="hidden w-2/4 h-max sm:flex flex-col p-10 rounded-md shadow-sm ring-1 ring-inset ring-gray-400/70">
            <GiSettingsKnobs className="text-violet text-6xl py-2" />

            <h2 className="text-xl font-bold mb-4">Your global preferences</h2>
            <p>
              Changing your currency updates how you see prices. You can change
              how you get payments preferences.
            </p>
          </div>
        </div>
      </div>
      <NewsLetter />
    </div>
  );
};

export default page;
