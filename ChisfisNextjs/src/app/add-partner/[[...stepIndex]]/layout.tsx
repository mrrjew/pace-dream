"use client";

import React, { useEffect, useState } from "react";
import { FC } from "react";
import ButtonPrimary from "@/shared/ButtonPrimary";
import ButtonSecondary from "@/shared/ButtonSecondary";
import { Route } from "@/routers/types";
import {
  getLocalStorageItem,
  setLocalStorageItem,
} from "@/utils/localStorageUtil";

export interface CommonLayoutProps {
  children: React.ReactNode;
  params: {
    stepIndex: string;
  };
}

const CommonLayout: FC<CommonLayoutProps> = ({ children, params }) => {
  const [nextHref, setNextHref] = useState<Route | any>(null);
  const index = Number(params.stepIndex) || 1;

  const handleClick = () => {
    if (index == 10) {
      setLocalStorageItem("showGreeting", "greeting");
    }
  };

  useEffect(() => {
    const prevUrl = getLocalStorageItem("currentPath");

    const nextHref = (
      index < 10 ? `/add-partner/${index + 1}` : prevUrl
    ) as Route;
    setNextHref(nextHref);
  }, []);

  const backHref = (
    index > 1 ? `/add-partner/${index - 1}` : `/add-partner/${1}`
  ) as Route;

  const nextBtnText = index > 9 ? "Submit Proposal" : "Next";
  return (
    <div
      className={`nc-PageAddListing1 px-4 max-w-3xl mx-auto pb-24 pt-14 sm:py-24 lg:pb-32`}
    >
      <div className="space-y-11">
        {/* --------------------- */}
        <div className="listingSection__wrap ">{children}</div>

        {/* --------------------- */}
        <div className="flex justify-between space-x-5">
          <ButtonSecondary href={backHref}> back</ButtonSecondary>
          <ButtonPrimary onClick={handleClick} href={nextHref}>
            {nextBtnText || "Next"}
          </ButtonPrimary>
        </div>
      </div>
    </div>
  );
};

export default CommonLayout;
