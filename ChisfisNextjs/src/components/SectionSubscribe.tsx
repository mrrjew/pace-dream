import React, { FC } from "react";
import ButtonCircle from "@/shared/ButtonCircle";
import Input from "@/shared/Input";

export interface SectionSubscribe {
  className?: string;
}

const SectionSubscribe: FC<SectionSubscribe> = ({ className = "" }) => {
  return (
    <div
      className={`mb-[4rem] nc-SectionSubscribe ${className} z-10 flex flex-col max-w-[93vw] w-[97%] mx-auto md:max-w-[75%] lg:max-w-[70%] xl:max-w-[65%] mt-10 bg-gradient-to-r from-[#5527D7] via-[#704BD7] to-[#5527D7] relative md:ml-auto md:mr-auto items-center border rounded-xl p-8 py-[4rem]`}
    >
      <h2 className="text-white font-semibold text-[32px] text-center">
        Join our newsletter
      </h2>
      <span className="block text-center mt-5 text-white text-sm w-[75vw] md:max-w-[100%]">
        Read and share new perspectives on just about any topic. Everyone’s
        welcome.
      </span>
      <form className="mt-8 md:mt-14 w-full">
        <div className="flex gap-4 max-md:flex-col justify-center">
          <input
            type="email"
            required
            placeholder="Enter your email id to subscribe"
            className="font-normal mb-2 w-full md:w-[80%] lg:w-[60%] md:mb-0 rounded-full focus:border-white focus:text-white bg-transparent border text-white border-white placeholder-white"
          />
          <button
            type="submit"
            className="bg-white rounded-full text-violet py-2 md:w-[7rem] font-semibold"
          >
            Subscribe
          </button>
        </div>
      </form>
    </div>
  );
};

export default SectionSubscribe;