import rightImgPng from "@/images/our-features.png";
import Badge from "@/shared/Badge";
import ButtonPrimary from "@/shared/ButtonPrimary";
import Image, { StaticImageData } from "next/image";
import { FC } from "react";

export interface SectionOurFeaturesProps {
  className?: string;
  rightImg?: StaticImageData;
  type?: "type1" | "type2";
}

const SectionOurFeatures: FC<SectionOurFeaturesProps> = ({
  className = "lg:py-14",
  rightImg = rightImgPng,
  type = "type1",
}) => {
  return (
    <div
      className={`md:pr-24 md:pl-48 nc-SectionOurFeatures relative flex flex-col items-center ${
        type === "type1" ? "lg:flex-row" : "lg:flex-row-reverse"
      } ${className}`}
      data-nc-id="SectionOurFeatures"
    >
      <div className="max-w-md flex-grow">
        <h2 className="font-semibold text-4xl mt-5">Discover Your Perfect Roommate </h2>
        <h4 className="text-zinc-500 font-medium mt-4">Explore our new section and connect with the perfect roommate for a harmonious living experience. Your ideal match is just a click away!</h4>
        <ButtonPrimary href="/listing-stay-map" sizeClass="my-10 px-5 py-4 sm:px-7">
            Discover Roommate
        </ButtonPrimary>
      </div>
    
    </div>
  );
};

export default SectionOurFeatures;
