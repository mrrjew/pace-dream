/** @format */
"use client";

import React from "react";
import { FC } from "react";
import ButtonPrimary from "@/shared/ButtonPrimary";
import ButtonSecondary from "@/shared/ButtonSecondary";
import { Route } from "@/routers/types";

export interface CommonLayoutProps {
    children: React.ReactNode;
    params: {
        step: string;
    };
}

const CommonLayout: FC<CommonLayoutProps> = ({ children, params }) => {
    const index = Number(params.step) || 1;

    const nextHref = (
        index < 3
            ? `/notification-flow/privacy-service/${index + 1}`
            : `/notification-flow/privacy-service/${1}`
    ) as Route;
    const backHref = (
        index > 1
            ? `/notification-flow/privacy-service/${index - 1}`
            : `/notification-flow/privacy-service/${1}`
    ) as Route;
    const nextBtnText = index > 2 ? "Save All" : "Next";

    const handleSaveStep = () => {
        console.log(index);
    };

    return (
        <div
            className={`privacyService_page px-4 max-w-3xl mx-auto pb-24 pt-14 sm:py-24 lg:pb-32`}
        >
            <div className="space-y-11">
                <div className="flex justify-between items-center">
                    <div>
                        <span className="text-4xl font-semibold">{index}</span>{" "}
                        <span className="text-lg text-neutral-500 dark:text-neutral-400">
                            / 3
                        </span>
                    </div>
                    <ButtonSecondary onClick={handleSaveStep}>
                        Save & Exit
                    </ButtonSecondary>
                </div>

                {/* --------------------- */}
                <div className="privacyService_wrap">{children}</div>

                {/* --------------------- */}
                <div
                    className={`flex ${
                        index > 1 ? "justify-between " : "justify-end"
                    } items-center`}
                >
                    {index > 1 && (
                        <ButtonSecondary href={backHref}>back</ButtonSecondary>
                    )}
                    <ButtonPrimary href={nextHref}>
                        {nextBtnText || "Continue"}
                    </ButtonPrimary>
                </div>
            </div>
        </div>
    );
};

export default CommonLayout;
