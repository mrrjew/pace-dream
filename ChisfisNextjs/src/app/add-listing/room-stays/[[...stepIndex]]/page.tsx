"use client";

import React, { useState } from "react";
import PageAddListing1 from "../../_components/PageAddListing1";
import PageAddListing2 from "../../_components/PageAddListing2";
import PageAddListing3 from "../../_components/PageAddListing3";
import PageAddListing5 from "../../_components/PageAddListing5";
// import PageAddListing6 from "./PageAddListing6";
// import PageAddListing7 from "./PageAddListing7";
import { useMultiStepForm } from "@/hooks/useMultiStepForm";
import { ListingDataType } from "@/types/types";
import PageAddListing6 from "../../_components/PageAddListing6";
import PageAddListing7 from "../../_components/PageAddListing7";
import PageAddListing8 from "../../_components/PageAddListing8";
import AddListingRoomStayWrapper from "../RoomStayWrapper";
import { RentableItem } from "@/types/rentalItems";

const initialData: Partial<RentableItem> = {
  title: "",
  summary: "",
  details: {
    amenities: [],
    rules: [],
    room_type: "any type",
    property_type: "",
    hourly_rental_time: {
      startDate: undefined,
      endDate: undefined,
      startTime: "",
      endTime: "",
    },
  },
  location: {
    address: "",
    longitude: 0,
    latitude: 0,
    zipcode: "",
    city: "",
    state: "",
    country: "",
    street_address: "",
    googlemap_link: "",
  },
  gallery: {
    thumbnail: "",
    images: [],
    videos: [],
  },
  attachments: [],
  item_type: "room",
  price: [],
  rules: {},
  rating: 0,
  owner: "",
  createdAt: new Date(),
  updatedAt: new Date(),
};

const Page = () => {
  const [data, setData] = useState<typeof initialData>(initialData);
  // update data from child component
  const updateData = (newData: Partial<typeof initialData>) => {
    setData((prev) => ({ ...prev, ...newData }));
  };

  const {
    steps,
    currentStepIndex,
    step,
    next,
    back,
    goToStep,
    isFirstStep,
    isLastStep,
  } = useMultiStepForm([
    <PageAddListing1 key="page" data={data} updateData={updateData} />,
    <PageAddListing2 key="page" data={data} updateData={updateData} />,
    <PageAddListing3 key="page" data={data} updateData={updateData} />,
    // <PageAddListing4 data={data} updateData={updateData} />,
    <PageAddListing5 key="page" data={data} updateData={updateData} />,
    <PageAddListing6
      data={data}
      key="page"
      onPreview={() => {
        next();
      }}
    />,
    <PageAddListing7
      data={data}
      key="page"
      onBackToHost={() => {
        back();
      }}
    />,
    <PageAddListing8
      data={data}
      key="page"
      onBackToHost={() => {
        back();
      }}
    />,
  ]);

  return (
    <AddListingRoomStayWrapper
      onNext={next}
      onBack={back}
      isFirstStep={isFirstStep}
      isLastStep={isLastStep}
      currentStep={currentStepIndex}
      data={data}
      totalSteps={steps?.length}
    >
      {step}
    </AddListingRoomStayWrapper>
  );
};

export default Page;
