import React, { FC } from "react";
import imagePng from "@/images/img-header.png";
import rightImgDemo from "@/images/BecomeAnAuthorImg.png";
import HeroSearchForm from "../(client-components)/(HeroSearchForm)/HeroSearchForm";
import Image from "next/image";
import ButtonPrimary from "@/shared/ButtonPrimary";

export interface SectionHeroProps {
  className?: string;
}

const SectionHero: FC<SectionHeroProps> = () => {
  return (
    <section
      className={`nc-SectionHero flex flex-col-reverse md:flex-col lg:pl-24 lg:pr-24 pt-20 md:max-w-[100%]`}
    >
      <article className="md:flex flex-col md:flex-row hidden md:items-center z-10">
        <div className="flex-shrink-0 md:w-1/2 flex flex-col justify-center items-start space-y-8 sm:space-y-10 pb-14 lg:pb-64 xl:pr-14 lg:mr-10 xl:mr-0">
          <h2 className="font-semibold text-xl md:text-3xl xl:text-4xl">
            Explore your PaceDream Book hotels, Car and more with ease!
          </h2>
          <ButtonPrimary href="/listing-stay-map" sizeClass="bg-violet px-5 py-4 sm:px-7 ">
            Start your search
          </ButtonPrimary>
        </div>
        <div className="relative flex-shrink-0 mb-16  md:mb-0 md:mr-10 md:w-1/2">
        <Image alt="" src={imagePng} className="h-[22rem] w-[22rem] md:mt-18" />
      </div>
      </article>
      <div className="md:block w-max-[630px] w-[90vw] flex pt-9 z-10 mb-12 lg:mb-0 md:mt-2 lg:mt-2 md:max-w-full border-grey border bg-white rounded-2xl">
        <HeroSearchForm  />
      </div>
    </section>
  );
};

export default SectionHero;
