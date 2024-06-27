"use client";

import { HeroBgMaskImage, HeroImage } from "public/assetsManager";
import Image from "next/image";
import { Rubik } from "next/font/google";
import SearchForm from "./UserInput/SearchForm";

const rubik = Rubik({
  subsets: ["latin"],
  display: "swap",
  adjustFontFallback: false,
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-rubik",
});

const Hero = () => {
  return (
    // using this as bg
    <div
      className={` ${rubik.variable} md:my-[2.3rem] md:pt-0 pt-[1rem]  md:rounded-[1.1rem] md:w-[90%] w-[100%] mx-auto md:h-[82vh] md:bg-[#5527D7] relative `}
    >
      <div className="relative hidden md:flex h-full" >
        <Image
          src={HeroBgMaskImage}

          alt="Hero Imagge Bg -mask"
          className=" w-[100%] object-cover md:h-[82vh] h-[100%] select-none  absolute z-[1] opacity-50"
          width={1920}
          height={1080}
        />
        <div className=" relative w-full flex justify-between px-[1rem] py-[1rem] z-[5] ">
          <div className=" flex flex-col justify-end lg:w-[48%] w-[50%]  h-[54vh] xl:ml-[2.5rem] ml-[.7rem] pb-[4.7rem] ">
            <div className=" text-white flex flex-col gap-[1.9rem] py-[1rem] mb-[1rem] ">
              <h3 className=" font-rubik lg:text-[2.8rem] text-[2.2rem] font-[400] leading-[3rem] ">
                Find your ideal stay,
              </h3>
              <h2 className=" font-rubik lg:text-[2.8rem] text-[2.4rem] font-[600] leading-[3rem] ">
                Perfectly suited to you!
              </h2>
              <p className=" font-rubik text-[1.5rem] font-[400]  ">
                An all-in-one platform that helps you to find what you needed.
              </p>
            </div>
            <div className="relative">
              <SearchForm  />
            </div>
          </div>

          <Image
            src={HeroImage}
            alt="Hero Image"
            className=" xl:w-[36rem] lg:w-[30rem] w-[50%] h-[86%] shrink-0 select-none "
            width={400}
            height={320}
          />
        </div>
      </div>

      {/* mobile view */}

      <div className="flex md:hidden font-rubik bg-[#5527D7] ">
        <div className="w-screen pt-4 space-y-3 ">
          <form className="flex flex-col gap-[1.2rem] p-3 mx-4 bg-white rounded-lg h-fit">
            <div className="flex text-[#5B5B5B] flex-col">
              <label htmlFor="where-input" className="text-[.6rem] font-[400] ">
                Where
              </label>
              <input
                type="text"
                name=""
                placeholder="Hamptons, Suffolk County, NY"
                id="where-input"
                className="p-0 py-[.2rem] text-[.75rem]  placeholder-[#131313] font-[500] border-0 border-b-2 border-[#D9D9D9] focus:ring-0 focus:border-primary "
              />
            </div>
            <div className="flex text-[#5B5B5B] flex-col ">
              <label htmlFor="" className="text-[.6rem] font-[400] ">
                Guests
              </label>
              <input
                type="text"
                name=""
                placeholder="Add Guests"
                id=""
                className="p-0 py-[.2rem] text-[.75rem]  placeholder-[#131313] font-[500] border-0 border-b-2 border-[#D9D9D9] focus:ring-0 focus:border-primary "
              />
            </div>
            <div className="flex text-[#5B5B5B] flex-row gap-2 justify-between ">
              <div className="flex text-[#5B5B5B] w-1/2 flex-col h-[4.3rem] ">
                <label htmlFor="" className="text-[.6rem] font-[400] ">
                  From
                </label>
                <input
                  type="date"
                  name=""
                  placeholder="Sun, 07 Feb"
                  id=""
                  className="p-0 py-[.2rem] text-[.75rem]  placeholder-[#131313] font-[500] border-0 border-b-2 border-[#D9D9D9] focus:ring-0 focus:border-primary "
                />
              </div>
              <div className="flex text-[#5B5B5B] w-1/2 h-[4.3rem]  flex-col ">
                <label htmlFor="" className="text-[.6rem] font-[400]">
                  Untill
                </label>
                <input
                  type="date"
                  name=""
                  placeholder="Sun, 07 Feb"
                  id=""
                  className="p-0 py-[.2rem] text-[.75rem]  placeholder-[#131313] font-[500] border-0 border-b-2 border-[#D9D9D9] focus:ring-0 focus:border-primary "
                />
              </div>
            </div>
            <div className="flex text-[#5B5B5B] flex-col">
              <select className=" py-[.2rem] text-[.75rem]  placeholder-[#131313] font-[500] border-0 border-b-2 border-[#D9D9D9] focus:ring-0 focus:border-primary ">
                <option>Select Categories </option>
                <option value="2">2</option>
                <option value="3">3</option>
                <option value="4">4</option>
                <option value="5">5</option>
                <option value="6">6</option>
                <option value="7">7</option>
                <option value="8">8</option>
                <option value="9">9</option>
                <option value="10">10</option>
              </select>
            </div>
            <button
              type="submit"
              className="bg-[#5527D7] rounded-full text-white py-3 mt-[1rem]"
            >
              Search Now
            </button>
          </form>

          <div>
            <div className="flex flex-col p-4 mx-4 bg-white rounded-lg h-fit">
              <div className="flex items-center justify-between">
                <h3 className="text-sm font-semibold">Recent Searches</h3>
                <button className="text-[.65rem] font-[#2E2E2E] font-[500] ">
                  View All
                </button>
              </div>
              <div className="flex items-center gap-3 mt-2">
                <div className="bg-[#5527D7]  rounded-full">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="46"
                    height="46"
                    viewBox="0 0 46 46"
                    fill="none"
                  >
                    <circle cx="23" cy="23" r="23" fill="#5527D7" />
                    <path
                      d="M22.7124 14C19.0053 14 16 17.0845 16 20.8905C16 23.9667 20.387 29.5748 22.0679 31.6103C22.1467 31.7072 22.2453 31.7851 22.3566 31.8385C22.468 31.892 22.5894 31.9197 22.7124 31.9197C22.8353 31.9197 22.9567 31.892 23.0681 31.8385C23.1795 31.7851 23.278 31.7072 23.3569 31.6103C25.0377 29.5748 29.4247 23.9676 29.4247 20.8905C29.4247 17.0845 26.4194 14 22.7124 14ZM22.7124 22.9596C21.507 22.9596 20.5307 21.9563 20.5307 20.7197C20.5307 19.4822 21.5079 18.4798 22.7124 18.4798C23.9168 18.4798 24.8941 19.4822 24.8941 20.7197C24.8941 21.9563 23.9168 22.9596 22.7124 22.9596Z"
                      fill="white"
                    />
                  </svg>
                </div>
                <div>
                  <h3 className="text-[1.4rem] text-[#2E2E2E] font-[500]">
                    The Lakes Inn
                  </h3>
                  <h3 className="text-[.8rem] text-[#2E2E2E] opacity-[.8] font-[400]">
                    Nekosa, Wisconsin, USA
                  </h3>
                </div>
              </div>
            </div>
            <div className="relative mb-[-8rem] mt-[1rem] ">
              <Image
                src={HeroImage}
                alt="adventure"
                className="relative w-full h-auto select none"
                width={1920}
                height={1080}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
