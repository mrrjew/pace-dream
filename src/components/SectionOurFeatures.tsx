import rightImgPng from "@/images/DiscoverYourPerfectRoommate.png";
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
      className={`lg:pr-8 pb-8 lg:pl-24 nc-SectionOurFeatures relative flex flex-col w-max-[90vw] w-[90vw] md:max-w-[100%] md:w-[100%] items-center ${
        type === "type1" ? "lg:flex-row" : "lg:flex-row-reverse"
      } ${className}`}
      data-nc-id="SectionOurFeatures"
    >
      <div className="max-w-[40rem] flex-grow mr-12 pt-12">
        <h2 className="font-semibold text-3xl mt-5">Discover Your Perfect Roommate </h2>
        <h4 className="text-zinc-500 font-medium text-base mt-4">Explore our new section and connect with the perfect roommate for a harmonious living experience. Your ideal match is just a click away!</h4>
        <ButtonPrimary href="/listing-stay-map" sizeClass="my-10 px-5 py-4 sm:px-7">
            Discover Roommate
        </ButtonPrimary>
      </div>
      <div>
        <Image src={rightImg} alt="img"></Image>
      </div>
    
    </div>
  );
};

export default SectionOurFeatures;
