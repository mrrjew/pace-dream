"use client"
import React, { FC } from "react";
import imagePng from "@/images/img-header.png";
import rightImgDemo from "@/images/BecomeAnAuthorImg.png";
import HeroSearchForm from "../(client-components)/(HeroSearchForm)/HeroSearchForm";
import Image from "next/image";
import ButtonPrimary from "@/shared/ButtonPrimary";
import Hero from "@/components/Hero";

export interface SectionHeroProps {
  className?: string;
}

const SectionHero: FC<SectionHeroProps> = () => {
  const handleButtonClick = () => {
    window.scrollBy({ top: 1000, behavior: 'smooth' });
  };
  return (
    <>

      <Hero />
      <section
        className={`nc-SectionHero flex flex-col-reverse md:flex-col md:pt-44 lg:pt-20 lg:pl-24 lg:pr-24 pt-20 md:max-w-[100%]`}
      >
        {/* <article className="md:flex flex-col md:flex-row hidden md:items-center z-10">
        <div className="flex-shrink-0 md:w-1/2 flex flex-col justify-center items-start space-y-8 sm:space-y-10 pb-14 lg:pb-64 xl:pr-14 lg:mr-8 xl:mr-0">
          <h2 className="lg:font-semibold font-semibold text-bold md:text-3xl lg:text-4xl lg:pr-12">
          Discover Your Perfect Match: Book Rooms, Find Roommates, and Secure Last-Minute Deals Effortlessly!
          </h2>
          <ButtonPrimary onClick={handleButtonClick} sizeClass="bg-violet px-5 py-4 sm:px-7 ">
            Start your search
          </ButtonPrimary>
        </div>
        <div className="flex-shrink-0 mb-16 md:-mt-28 md:mb-0 md:mr-10 md:w-1/2">
          <Image alt="" src={imagePng} className="h-[26rem] w-[32rem] lg:h-[28rem] lg:w-auto" />
        </div>
      </article> */}
        <div className="md:block w-max-[95vw] w-[93vw] xl:w-[80vw] lg:w-[90vw] flex md:pt-0 z-10 mb-12 ml-16 md:ml-0 lg:mb-0 md:mt-8 lg:-mt-16 md:max-w-full border-grey border bg-white rounded-2xl">
          <HeroSearchForm />
        </div>
      </section>
    </>
  );
};

export default SectionHero;
