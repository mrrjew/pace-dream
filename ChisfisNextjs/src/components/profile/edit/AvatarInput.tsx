/** @format */
"use client";
import Image from "next/image";
import React, { useRef, useState } from "react";
import profileImage from "../../../images/avatars/profile.png";
import { BiEdit } from "react-icons/bi";

const AvatarInput = () => {
    const ref = useRef<HTMLInputElement>(null);
    const [image, setImage] = useState<any>();
    const handleImageImportClick = () => {
        ref.current?.click();
    };

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const files = Array.from(e.currentTarget.files ?? []);
        setImage(files[0]);
    };
    return (
        <div className="rounded-full w-[197px] h-[197px] bg-white flex items-center justify-center md:absolute md:left-[32.063rem] md:-top-12">
            <Image
                alt="profile-image"
                className="rounded-full w-[162.76px] h-[162.76px]"
                height={162.74}
                width={162.74}
                src={image ? URL.createObjectURL(image) : profileImage}
            />
            <div
                onClick={handleImageImportClick}
                className="absolute right-[150px] bottom-[105px] md:right-[40px] md:bottom-[24px]"
            >
                <BiEdit width={19} height={19} />
            </div>
            <input
                type="file"
                ref={ref}
                className="hidden"
                onChange={handleChange}
            />
        </div>
    );
};

export default AvatarInput;
