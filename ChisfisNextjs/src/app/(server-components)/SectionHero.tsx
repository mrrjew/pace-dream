import React, { FC } from "react";
import imagePng from "@/images/hero-right.png";
import rightImgDemo from "@/images/BecomeAnAuthorImg.png";
import HeroSearchForm from "../(client-components)/(HeroSearchForm)/HeroSearchForm";
import Image from "next/image";
import ButtonPrimary from "@/shared/ButtonPrimary";

export interface SectionHeroProps {
  className?: string;
}

const SectionHero: FC<SectionHeroProps> = () => {
  return (
    <div
      className={`nc-SectionHero flex flex-col-reverse lg:flex-col xl:ml-24 xl:mr-24`}
    >
      <div className="flex flex-col lg:flex-row lg:items-center z-10">
        <div className="flex-shrink-0 lg:w-1/2 flex flex-col items-start space-y-8 sm:space-y-10 pb-14 lg:pb-64 xl:pr-14 lg:mr-10 xl:mr-0">
          <h2 className="font-semibold text-2xl md:text-3xl xl:text-4xl !leading-[114%] mt-20 ">
            Explore your PaceDream Book hotels, Car and more with ease!
          </h2>
          <ButtonPrimary href="/listing-stay-map" sizeClass="bg-violet px-5 py-4 sm:px-7">
            Start your search
          </ButtonPrimary>
        </div>
        <div className="flex-shrink-0 mb-16 lg:mb-0 lg:mr-10 lg:w-2/5">
        <Image alt="" src={imagePng} className="rounded-full relative h-[22rem] w-[22rem]" />
        <Image alt="" src={rightImgDemo} className="absolute top-80 right-56 h-56 w-56" />
      </div>
      </div>
      <div className="hidden lg:block pt-9 z-10 mb-12 lg:mb-0 lg:mt-2 w-full bg-white rounded-2xl">
        <HeroSearchForm  />
      </div>
    </div>
  );
};

export default SectionHero;
