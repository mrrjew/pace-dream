import React, { FC } from "react";
import ButtonCircle from "@/shared/ButtonCircle";
import Input from "@/shared/Input";

export interface SectionSubscribe {
  className?: string;
}

const SectionSubscribe: FC<SectionSubscribe> = ({ className = "" }) => {
  return (
    <div
      className={`nc-SectionSubscribe ${className} z-10 flex flex-col max-w-[93vw] w-[93vw] md:max-w-[65%] mt-10 bg-violet relative md:ml-auto md:mr-auto items-center border rounded-2xl p-8`}
    >
      <h2 className="text-white font-semibold text-4xl text-center">
        Join our newsletter
      </h2>
      <span className="block text-center mt-5 text-white text-base w-[75vw] md:max-w-[100%]">
        Read and share new perspectives on just about any topic. Everyone’s
        welcome.
      </span>
      <form className="mt-2 md:mt-14 max-md:w-[80vw]">
        <div className="flex max-md:flex-col">
          <input
            type="email"
            required
            placeholder="Enter your email"
            className="mb-2 max-md:w-[80vw] md:mb-0 rounded-full focus:border-white focus:text-white bg-violet md:mr-4 border text-white border-white placeholder-white"
          />
          <button
            type="submit"
            className="bg-white rounded-full text-violet py-2 md:w-16 max-md:w-[80vw]"
          >
            Send
          </button>
        </div>
      </form>
    </div>
  );
};

export default SectionSubscribe;
