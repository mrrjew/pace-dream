import React, { FC } from "react";

const JoinOurCommunity = () => {
  return (
    <div className=" flex md:flex-row flex-col md:justify-around justify-center items-center md:gap-0 gap-[1.5rem] w-[100%] bg-[#5527D7] sm:h-[24rem]  sm:px-0 px-[.8rem] sm:py-0 py-[2rem] mt-[2rem] ">
      <div className=" flex flex-col gap-[1rem]    ">
        <h3 className=" md:text-left text-center text-[#FDFDFF] text-[1.2rem] font-[500] ">
          Newsletter
        </h3>
        <h2 className=" md:text-left text-center text-[#FDFDFF] sm:text-[2.4rem] text-[1.7rem] font-[500] my-[.5rem] ">
          Join Our Community
        </h2>
        <p className=" md:text-left text-center sm:w-[25rem] w-[100%]  text-white sm:text-[.9rem] text-[.75rem] opacity-[.7] ">
          Become a part of a growing community that values flexibility,
          convenience, and connectivity. Whether you are looking to manage
          living costs, find a temporary workspace, or grab that last-minute
          vacation deal, Pacedream is your go-to platform.
        </p>
      </div>
      <div className=" flex flex-col items-center justify-end w-[10rem] ">
        <button className=" hover:bg-white hover:text-black hover:border-transparent duration-300 bg-transparent border-[1px] border-[#FFF] text-white rounded-[.4rem] w-[12rem] h-[3.5rem] flex justify-center items-center px-[1.5rem] py-[.6rem] ">
          Get Started
        </button>
      </div>
    </div>
  );
};

export default JoinOurCommunity;
