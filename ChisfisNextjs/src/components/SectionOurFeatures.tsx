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
      className={`pr-24 pl-48 nc-SectionOurFeatures relative flex flex-col items-center ${
        type === "type1" ? "lg:flex-row" : "lg:flex-row-reverse"
      } ${className}`}
      data-nc-id="SectionOurFeatures"
    >
      <div className="max-w-md flex-grow">
        <h2 className="font-semibold text-4xl mt-5">Discover Your Perfect Roommate </h2>
        <h4 className="text-zinc-500 font-medium mt-4">Explore our new section and connect with the perfect roommate for a harmonious living experience. Your ideal match is just a click away!</h4>
        <ButtonPrimary href="/listing-stay-map" sizeClass="mt-10 px-5 py-4 sm:px-7">
            Discover Roommate
        </ButtonPrimary>
      </div>
      <div
        className={`max-w-4xl flex-shrink-0 mt-10 lg:mt-0 lg:max-w-2xl ml-16 ${
          type === "type1" ? "lg:pl-16" : "lg:pr-16"
        } ${className}`}
      >
        <Image src={rightImg} alt="" />
      </div>
    </div>
  );
};

export default SectionOurFeatures;
