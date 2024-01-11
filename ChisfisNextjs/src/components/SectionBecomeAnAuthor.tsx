import React, { FC } from "react";
import rightImgDemo from "@/images/BecomeAnAuthorImg.png";
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
  rightImg = rightImgDemo,
}) => {
  return (
    <div
      className={`nc-SectionBecomeAnAuthor relative flex flex-col lg:flex-row items-center pl-24 pr-24 ${className}`}
      data-nc-id="SectionBecomeAnAuthor"
    >
      <div className="flex-shrink-0 mb-16 lg:mb-0 lg:mr-10 lg:w-2/5">
        <Image alt="" src={rightImg} className="rounded-full relative h-[22rem] w-[22rem]" />
        <Image alt="" src={rightImg} className="absolute top-36 left-64 h-56 w-56" />
      </div>
      <div className="flex-grow">
      <h2 className="font-bold text-3xl sm:text-4xl mt-6 sm:mt-11">
          Why did you choose us?
        </h2>
        <span className="block text-lg max-w-[80%] mt-6 text-neutral-500 dark:text-neutral-400">
          Accompanying us, you have a trip full of experiences. With Chisfis,
          booking accommodation, resort villas, hotels, private houses,
          apartments... becomes fast, convenient and easy.
        </span>
        <ButtonPrimary className="h-10 leading-2 mt-10">
          Become an author
        </ButtonPrimary>
      </div>
    </div>
  );
};

export default SectionBecomeAnAuthor;
