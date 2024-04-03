/** @format */
"use client";

import {
    PartnerDestinationTypes,
    PartnerGenderTypes,
    _PartnerDestinations,
    _PartnerGenders,
} from "@/data/partner";
import ButtonPrimary from "@/shared/ButtonPrimary";
import ButtonSecondary from "@/shared/ButtonSecondary";
import Image from "next/image";
import React, { useState } from "react";

export interface PartnerTypes {
    gender: string;
    destination: string;
}

export interface PartnerInputTypes {
    genders: PartnerGenderTypes[];
    destinations: PartnerDestinationTypes[];
}

const PartnerWeb2 = () => {
    const [partner, setPartner] = useState<PartnerTypes>({
        gender: "",
        destination: "",
    });

    const [partnerInput, setPartnerInput] = useState<PartnerInputTypes>({
        genders: _PartnerGenders,
        destinations: _PartnerDestinations,
    });

    const handleGenderSelect = (value: string) => {
        setPartner((prev) => ({ ...prev, gender: value }));
        setPartnerInput((prev) => ({
            ...prev,
            genders: updateTheSelected(prev.genders, value),
        }));
    };
    const handleDestinationSelect = (value: string) => {
        setPartner((prev) => ({ ...prev, destination: value }));
        setPartnerInput((prev) => ({
            ...prev,
            destinations: updateTheSelected(prev.destinations, value),
        }));
    };

    const updateTheSelected = (
        arrays: PartnerGenderTypes[] | PartnerDestinationTypes[],
        value: string
    ): PartnerGenderTypes[] | PartnerDestinationTypes[] => {
        return arrays.map((item) => {
            if (item.value === value) {
                item.isSelected = true;
            } else {
                item.isSelected = false;
            }
            return item;
        });
    };

    return (
        <div className="text-neutral-700 dark:text-neutral-300">
            <div className="flex flex-col mt-8 gap-6">
                <h2 className="text-[2rem] md:text-[3.25rem] font-semibold leading[3.75rem] tracking-few-tight">
                    I am looking for
                </h2>
                <p className="text-base md:text-lg font-normal leading-[1.444445em] max-w[600px] tracking-few-tight">
                    Lorem ipsum dolor amet, consectetur adipiscing elit
                </p>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 items-center justify-start gap-5 flex-wrap mt-14">
                {partnerInput.genders.map((item: PartnerGenderTypes) => (
                    <div
                        key={item.value}
                        onClick={() => handleGenderSelect(item.value)}
                        className={`flex rounded-[1.25rem] overflow-hidden relative drop-shadow-image cursor-pointer ${
                            item.isSelected && "partner-section-gender-active"
                        }`}
                    >
                        <Image
                            src={item.image}
                            height={500}
                            width={800}
                            alt="Image"
                            className="max-w-full h-auto"
                        />
                        <p className="absolute bottom-5 left-2 text-sm text-white font-normal leading-tight">
                            {item.title}
                        </p>
                    </div>
                ))}
            </div>
            <div className="flex flex-col justify-center mt-11 gap-1">
                <h4 className="text-[1.75rem] md:text-[2rem] font-bold leading-tight tracking-few-loos">
                    Select your destination
                </h4>
                <p className="text-base md:text-xl font-medium leading-tight max-w-[800px] tracking-few-loos">
                    Suggested destinations
                </p>
            </div>
            <div className="flex flex-wrap gap-4 md:gap-6 mt-6 justify-start items-end max-w-[900px]">
                {partnerInput.destinations.map((destination) => {
                    if (destination.isSelected) {
                        return (
                            <ButtonPrimary
                                key={destination.value}
                                type="button"
                                onClick={() =>
                                    handleDestinationSelect(destination.value)
                                }
                            >
                                {destination.title}
                            </ButtonPrimary>
                        );
                    } else {
                        return (
                            <ButtonSecondary
                                key={destination.value}
                                type="button"
                                onClick={() =>
                                    handleDestinationSelect(destination.value)
                                }
                            >
                                {destination.title}
                            </ButtonSecondary>
                        );
                    }
                })}
            </div>
            <div className="mt-6 max-w-[900px]">
                <textarea
                    name=""
                    id=""
                    rows={3}
                    className="bg-primary-50 border-none p-8 w-full resize-none rounded-[10px] text-dark-700 placeholder text-xl font-medium focus-visible:border-none focus-visible:shadow-none focus-visible:outline-none"
                    placeholder="Enter Your Description"
                />
            </div>
        </div>
    );
};

export default PartnerWeb2;
