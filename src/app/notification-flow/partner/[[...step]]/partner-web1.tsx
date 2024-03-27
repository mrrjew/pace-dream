/** @format */
import Image from "next/image";
import React from "react";
import locationImage from "@/images/partner/location.svg";
import ButtonPrimary from "@/shared/ButtonPrimary";

const PartnerWeb1 = () => {
    return (
        <div className="text-neutral-700 dark:text-neutral-300">
            <div className="flex flex-col mt-8 gap-6">
                <h2 className="text-[2rem] md:text-[3.25rem] font-semibold leading[3.75rem] tracking-few-tight">
                    Enable Location
                </h2>
                <p className="text-base md:text-lg font-normal leading-[1.444445em] max-w[600px] tracking-few-tight">
                    Lorem ipsum dolor amet, consectetur adipiscing elit lorem
                </p>
            </div>
            <div className="mt-32 flex justify-center items-center">
                <div className="bg-primary-200 h-36 w-36 shrink-0 rounded-full inline-flex items-center justify-center relative before:absolute before:-inset-5 before:rounded-full before:bg-primary-150 before:-z-[1] before:animate-ping-slow after:absolute after:-inset-10 after:rounded-full after:bg-primary-50 after:-z-[2] after:animate-ping">
                    <Image
                        src={locationImage}
                        height={100}
                        width={100}
                        alt="location"
                        className="w-16 h-16"
                    />
                </div>
            </div>
            <div className="flex items-center justify-center text-center mt-20 ">
                <p className="text-xl md:text-[2rem] font-medium leading-normal md:leading-tight max-w-[800px] tracking-few-loos">
                    You will need to enable your location in order to looking
                    for a partner
                </p>
            </div>
            <div className="flex items-center justify-center text-center mt-24">
                <ButtonPrimary
                    type="button"
                    className="min-h-[3.75rem] inline-flex justify-center items-center px-11 py-0.5 text-xl font-semibold leading-snug w-full max-w-[23rem]"
                >
                    Allow Location
                </ButtonPrimary>
            </div>
        </div>
    );
};

export default PartnerWeb1;
