/** @format */

import Image, { StaticImageData } from "next/image";
import React, { FC } from "react";

export interface ProfileImagePropsType {
  src: StaticImageData | string;
  height: number;
  width: number;
  alt: string;
}
const ProfileImage: FC<ProfileImagePropsType> = ({
  src,
  height,
  width,
  alt,
}) => {
  return (
    <Image
      className={`rounded-full w-[${width}px] h-[${height}px]`}
      src={src}
      width={width}
      height={height}
      alt={alt}
    />
  );
};

export default ProfileImage;
