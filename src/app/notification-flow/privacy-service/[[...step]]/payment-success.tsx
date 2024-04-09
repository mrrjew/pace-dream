/** @format */

import Image from "next/image";
import React from "react";
import paymentImg from "@/images/partner/payment.png";
import ButtonPrimary from "@/shared/ButtonPrimary";
import ButtonSecondary from "@/shared/ButtonSecondary";

const PaymentSuccess = () => {
    return (
        <div className="trams-service-payment-container">
            <div className="w-full md:w-[405px] md:rounded-[50px] my-10">
                <div className="text-center font-medium md:font-semibold text-2xl md:text-4xl py-2">
                    <p>
                        Payment Successfully <br />
                        Completed
                    </p>
                </div>

                {/* payment image showing */}
                <div className="flex items-center justify-center  my-3 md:my-6">
                    <Image
                        src={paymentImg}
                        alt="trams_service_payment_image"
                        height="700"
                        width="550"
                        className="w-[217px] h-[185.13px] md:w-[397px] md:h-[362.48px]"
                    />
                </div>

                <div className="text-center py-3">
                    <p className="font-normal text-sm md:text-2xl">
                        Booking Number : SD846DCS45
                    </p>
                </div>

                <ButtonPrimary className="w-full h-[46px] md:h-[60px] bg-[#574EFA] text-white my-4">
                    Download Recipt
                </ButtonPrimary>

                <ButtonSecondary className="w-full h-[46px] md:h-[60px] my-4">
                    Skip
                </ButtonSecondary>
            </div>
        </div>
    );
};

export default PaymentSuccess;
