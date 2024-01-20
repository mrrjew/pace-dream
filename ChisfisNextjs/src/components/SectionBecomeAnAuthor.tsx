import React, { FC } from "react";
import ImgBecome from "@/images/BecomeAnAuthorImage .png"
import ButtonPrimary from "@/shared/ButtonPrimary";
import Logo from "@/shared/Logo";
import Image from "next/image";
import Button from "@/shared/Button";

export interface SectionBecomeAnAuthorProps {
  className?: string;
  rightImg?: string;
}

const SectionBecomeAnAuthor: FC<SectionBecomeAnAuthorProps> = ({
  className = "",
  rightImg = ImgBecome,
}) => {
  return (
    <div
      className={`z-10 w-max-[630px] w-[90vw] md:max-w-[100%] md:w-[100%] md:flex flex flex-col-reverse md:flex-col lg:flex-row items-center md:pl-24 md:pr-24 ${className}`}
    >
      <div className="relative flex-shrink-0 mb-16 lg:ml-32 lg:mb-0 lg:w-1/2 mt-4 md:mt-0 mr-8">
        <Image alt="" src={rightImg} className="rounded-full relative h-[22rem] w-[22rem]" />
      </div>
      <div className="z-10 flex-grow lg:-ml-32 text-[#192946]">
      <h2 className="font-bold text-4xl md:text-3xl mt-6 ">
          Why did you choose us?
      </h2>
      <span className="block text-lg max-w-[80%] mt-6 text-neutral-500 dark:text-neutral-400">
          Accompanying us, you have a trip full of experiences. With Chisfis,
          booking accommodation, resort villas, hotels, private houses,
          apartments... becomes fast, convenient and easy.
        </span>
        <ButtonPrimary className="h-6 leading-2 mt-10">
          Become an author
        </ButtonPrimary>
      </div>
    </div>
  );
};

export default SectionBecomeAnAuthor;
