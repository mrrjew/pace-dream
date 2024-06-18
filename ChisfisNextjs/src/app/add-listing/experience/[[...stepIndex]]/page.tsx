"use client";
import { useMultiStepForm } from "@/hooks/useMultiStepForm";
import { ListingDataType } from "@/types/types";
import { useState } from "react";
import PageAddListing1 from "../../_components/PageAddListing1";
import PageAddListing2 from "../../_components/PageAddListing2";
import PageAddListing6 from "../../_components/PageAddListing6";
import PageAddListing7 from "../../_components/PageAddListing7";
import PageAddListing8 from "../../_components/PageAddListing8";
import AddListingExperienceWrapper from "../ExperiencePageWrapper";
import ExperiencePag3 from "../../_components/ExperiencePage3";
import ExperiencePage4 from "../../_components/ExperiencePage4";
import { RentableItem } from "@/types/rentalItems";

<<<<<<< HEAD
const InitialData: ListingDataType = {
  propertyType: "",
  roomType: "",
  placeName: "",
  rentalForm: "",
  hourlyrate: "",
  dailyrate: "",
  weeklyrate: "",
  monthlyrate: "",
  cleaningfeesDaily: "",
  street: "",
  country: "",
  location: {
    link: "",
    address: "",
    latitude: 0,
    longitude: 0,
  },
  otherservices: "",
  city: "",
  state: "",
  postalCode: "",
  acreage: "",
  guests: 0,
  bedroom: 0,
  beds: 0,
  bathroom: 0,
  kitchen: 0,
  generalAmenities: [],
  otherAmenities: [],
  safeAmenities: [],
  smokingRole: "",
  petRole: "",
  partyOrganizingRole: "",
  cookingRole: "",
  additionalRules: [],
  placeDescription: "",
  availability: true,
  capacity: 0,
  currency: "",
  basePriceMonToThu: 0,
  basePriceFriToSun: 0,
  longTermPriceDiscount: 0,
  stayNightMin: 0,
  stayNightMax: 0,
  coverImage: "",
  placeImages: [],
  placeVideo: "",
  availabilityDate: [],
=======

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
    item_type:'room',
    price: [],
    rules: {},
    rating:0,
    owner:"",
    createdAt: new Date(),
    updatedAt: new Date(),
>>>>>>> main1
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
<<<<<<< HEAD
    <PageAddListing1  key="page1"data={data} updateData={updateData} />,
    <PageAddListing2  key="page2"data={data} updateData={updateData} />,
    <ExperiencePag3  key="page3"data={data} updateData={updateData} />, //change page 3
    // <PageAddListing4 data={data4} updateData={updateData} />,
    <ExperiencePage4  key="page5"data={data} updateData={updateData} />, // change page 4
    <PageAddListing6
      data={data} key="page6"
      onPreview={() => {
        next();
      }}
    />,
    <PageAddListing7
      data={data} key="page7"
      onBackToHost={() => {
        back();
      }}
    />,
    <PageAddListing8
      data={data} key="page8"
      onBackToHost={() => {
        back();
      }}
    />,
=======
    <PageAddListing1 data={data} updateData={updateData} />,
    <PageAddListing2 data={data} updateData={updateData} />,
    <ExperiencePag3 data={data} updateData={updateData} />, //change page 3
    // <PageAddListing4 data={data} updateData={updateData} />,
    <ExperiencePage4 data={data} updateData={updateData}/>, // change page 4
    <PageAddListing6 data={data} onPreview={()=>{next()}} />,
    <PageAddListing7 data={data} onBackToHost={()=>{back()}}/>,
    <PageAddListing8 data={data} onBackToHost={()=>{back()}}/>
>>>>>>> main1
  ]);

  return (
    <AddListingExperienceWrapper
      onNext={next}
      onBack={back}
      isFirstStep={isFirstStep}
      isLastStep={isLastStep}
      currentStep={currentStepIndex}
    >
      {step}
    </AddListingExperienceWrapper>
  );
};

export default Page;
