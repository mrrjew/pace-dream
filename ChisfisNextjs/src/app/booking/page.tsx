"use client";

import { Tab } from "@headlessui/react";
import CarCard from "@/components/CarCard";
import ExperiencesCard from "@/components/ExperiencesCard";
import StayCard from "@/components/StayCard";
import {
  DEMO_CAR_LISTINGS,
  DEMO_EXPERIENCES_LISTINGS,
  DEMO_STAY_LISTINGS,
} from "@/data/listings";
import React, { Fragment, useState } from "react";
import ButtonSecondary from "@/shared/ButtonSecondary";

const Booking = () => {
  let [categories] = useState(["Stays", "Experiences", "Cars"]);

  const renderSection1 = () => {
    return <>Hello from Booking main page</>;
  };

  return renderSection1();
};

export default Booking;
