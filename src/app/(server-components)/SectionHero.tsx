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
        className={`nc-SectionHero flex flex-col-reverse md:flex-col md:pt-44 lg:pt-20 lg:pl-24 lg:pr-24 pt-4 md:max-w-[100%]`}
      >
        <div className="md:block w-max-[95vw] w-[93vw] xl:w-[80vw] lg:w-[90vw] flex md:pt-0 z-10 mb-12 ml-16 md:ml-0 lg:mb-0 md:mt-8 lg:-mt-16 md:max-w-full border-grey border bg-white rounded-2xl">
          <HeroSearchForm />
        </div>
      </section>
    </>
  );
};

export default SectionHero;
