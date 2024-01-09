import React, { FC } from "react";
import imagePng from "@/images/hero-right.png";
import HeroSearchForm from "../(client-components)/(HeroSearchForm)/HeroSearchForm";
import Image from "next/image";
import ButtonPrimary from "@/shared/ButtonPrimary";

export interface SectionHeroProps {
  className?: string;
}

const SectionHero: FC<SectionHeroProps> = ({ className = "" }) => {
  return (
    <div
      className={`nc-SectionHero flex flex-col-reverse lg:flex-col xl:ml-24 xl:mr-24`}
    >
      <div className="flex flex-col lg:flex-row lg:items-center">
        <div className="flex-shrink-0 lg:w-1/2 flex flex-col items-start space-y-8 sm:space-y-10 pb-14 lg:pb-64 xl:pr-14 lg:mr-10 xl:mr-0">
          <h2 className="font-semibold text-2xl md:text-3xl xl:text-4xl !leading-[114%] ">
            Explore your PaceDream Book hotels, Car and more with ease!
          </h2>
          <ButtonPrimary href="/listing-stay-map" sizeClass="px-5 py-4 sm:px-7">
            Start your search
          </ButtonPrimary>
        </div>
        <div className="flex-grow">
          <Image className="w-full rounded-full pr-4 max-h-80 overflow-hidden" src={imagePng} alt="hero" priority />
        </div>
      </div>

      <div className="hidden lg:block pt-9 z-10 mb-12 lg:mb-0 lg:mt-2 w-full bg-white rounded-2xl">
        <HeroSearchForm />
      </div>
    </div>
  );
};

export default SectionHero;
