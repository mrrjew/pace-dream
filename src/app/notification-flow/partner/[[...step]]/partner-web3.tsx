/** @format */
"use client";

import Image from "next/image";
import React, { useState } from "react";
import "swiper/css/bundle";
import { Navigation, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import love from "@/images/partner/love.svg";
import close from "@/images/partner/close.svg";
import { _PartnerSwipersDemoData } from "@/data/partner";

const PartnerWeb3 = () => {
    const [currentSlideIndex, setCurrentSlideIndex] = useState(0);

    return (
        <div className="text-neutral-700 dark:text-neutral-300">
            <div className="flex flex-col mt-8 gap-6">
                <h2 className="text-[2rem] md:text-[3.25rem] font-semibold leading[3.75rem] tracking-few-tight">
                    Select your partner
                </h2>
                <p className="text-base md:text-lg font-normal leading-[1.444445em] max-w[600px] tracking-few-tight">
                    Lorem ipsum dolor amet, consectetur adipiscing elit
                </p>
            </div>

            <div className="flex items-center justify-center mt-8 flex-col">
                <Swiper
                    modules={[Navigation, Pagination]}
                    slidesPerView={1}
                    navigation
                    pagination={{ type: "progressbar" }}
                    onSwiper={(swiper) =>
                        setCurrentSlideIndex(swiper?.activeIndex)
                    }
                    onSlideChange={(swiper) =>
                        setCurrentSlideIndex(swiper?.activeIndex)
                    }
                    className="w-full max-w-[550px] customer-slider rounded-2xl overflow-hidden"
                >
                    {_PartnerSwipersDemoData?.map((person) => (
                        <SwiperSlide key={Math.random()}>
                            <div className="relative w-full max-w-[550px]">
                                <Image
                                    src={person.image}
                                    alt={person?.name}
                                    height="700"
                                    width="550"
                                    className="w-full h-auto"
                                />
                                <div className="absolute inset-0 flex flex-col items-start justify-end px-8 py-5 text-white">
                                    <div className="flex items-center gap-4 mb-4">
                                        <h3 className="text-3xl font-extrabold leading-tight tracking-few-loos">
                                            {person?.name}
                                        </h3>
                                        <p className="text-2xl font-semibold leading-tight tracking-few-loos">
                                            {person?.age}y
                                        </p>
                                    </div>
                                    <p className="text-xl font-semibold leading-tight tracking-few-loos mb-2">
                                        {person?.budget}
                                    </p>
                                    <p className="text-xl font-semibold leading-tight tracking-few-loos mb-2">
                                        Available from: {person?.availableFrom}
                                    </p>
                                    <p className="text-base font-normal leading-snug tracking-few-tight">
                                        {person?.description}
                                    </p>
                                    <div className="flex justify-center items-center mt-5 gap-12 w-full">
                                        <div className="inline-flex">
                                            <Image
                                                src={close}
                                                alt="close"
                                                height={52}
                                                width={52}
                                            />
                                        </div>
                                        <div className="inline-flex">
                                            <Image
                                                src={love}
                                                alt="close"
                                                height={52}
                                                width={52}
                                            />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </SwiperSlide>
                    ))}
                </Swiper>
            </div>
        </div>
    );
};

export default PartnerWeb3;
