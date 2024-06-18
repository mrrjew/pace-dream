"use client";

import React, { FC, Fragment, useEffect, useState } from "react";
import { Dialog, Transition } from "@headlessui/react";
import { Squares2X2Icon } from "@heroicons/react/24/outline";
import Comment from "@/components/Comment";
import Avatar from "@/shared/Avatar";
import Badge from "@/shared/Badge";
import ButtonPrimary from "@/shared/ButtonPrimary";
import ButtonSecondary from "@/shared/ButtonSecondary";
import ButtonClose from "@/shared/ButtonClose";
import LikeSaveBtns from "@/components/LikeSaveBtns";
import Image from "next/image";
import {
  useParams,
  usePathname,
  useRouter,
  useSearchParams,
} from "next/navigation";
import { Amenities_demos, PHOTOS } from "./constant";
import StayDatesRangeInput from "./StayDatesRangeInput";
import GuestsInput from "./GuestsInput";
import { Route } from "next";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";
import { setLocalStorageItem } from "@/utils/localStorageUtil";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
import { CustomHourInput } from "./CustomHourInput";
import Verificaty from "../../../../images/svg/Status Icon.svg";
import Protect from "../../../../images/svg/Protect.svg";
import { StarIcon } from "@heroicons/react/24/solid";
import Dot from "../../../../images/svg/Dot.svg";
import { DEMO_STAY_LISTINGS } from "@/data/listings";
import { DEMO_AUTHORS } from "@/data/authors";
import StayCard2 from "@/components/StayCard2";
import Link from "next/link";

const DEMO_STAYS = DEMO_STAY_LISTINGS.filter((_, i) => i < 4);

export interface ListingStayDetailPageProps {}

export type TimeSlot = {
  hour: number;
  minute: number;
};

const ListingStayDetailPage: FC<ListingStayDetailPageProps> = ({}) => {
  // time slot state
  const { id } = useParams();
  const filteredData = DEMO_STAY_LISTINGS.filter((item) => item.id === id);
  const priceDayNumber = parseFloat(filteredData[0]?.priceDay?.replace("$", ""));
  const priceHourNumber = parseFloat(
    filteredData[0]?.priceHour?.replace("$", ""),
  );
  const filteredAuthors = DEMO_AUTHORS.filter(
    (item) => item.id === filteredData[0]?.authorId,
  );
  const searchParams = useSearchParams();
  const terms = searchParams.get("term");

  const [selectedTimeSlots, setSelectedTimeSlots] = useState<{
    [day: string]: string[];
  }>({});
  // Function to toggle a time slot's selection for a specific day

  const toggleTimeSlotSelection = (day: string, timeSlot: string) => {
    setSelectedTimeSlots((prevSelectedTimeSlots) => {
      const selectedSlotsForDay = prevSelectedTimeSlots[day] || [];
      const updatedSlots = selectedSlotsForDay.includes(timeSlot)
        ? selectedSlotsForDay.filter((slot) => slot !== timeSlot)
        : [...selectedSlotsForDay, timeSlot];
      return { ...prevSelectedTimeSlots, [day]: updatedSlots };
    });
  };
  let sharedNumber: number;
  let sharedExpensesDayNumber: number;
  let sharedExpensesHourNumber: number;
  if (filteredData[0]?.shared !== undefined) {
    sharedNumber = parseInt(filteredData[0]?.shared, 10);
    sharedNumber = sharedNumber + 1;
    sharedExpensesDayNumber = Math.round(priceDayNumber / sharedNumber);
    sharedExpensesHourNumber = Math.round(priceHourNumber / sharedNumber);
  }
  // Function to check if a time slot is selected for a specific day

  const isTimeSlotSelected = (day: string, timeSlot: string) => {
    return (selectedTimeSlots[day] || []).includes(timeSlot);
  };

  //  Date value state
  const [currentHoverID, setCurrentHoverID] = useState<string | number>(-1);
  const [startDate, setStartDate] = useState<Date | any>(new Date());
  const [endDate, setEndDate] = useState<Date | any>(new Date());

  const timeDifference = endDate - startDate;
  const numberOfDays = timeDifference / (1000 * 60 * 60 * 24);
  setLocalStorageItem("bookedDay", numberOfDays.toString() || "");

  // Guest value state

  const [guestAdultsInputValue, setGuestAdultsInputValue] = useState(0);
  const [guestChildrenInputValue, setGuestChildrenInputValue] = useState(0);
  const [guestInfantsInputValue, setGuestInfantsInputValue] = useState(0);

  let [isOpenModalAmenities, setIsOpenModalAmenities] = useState(false);

  const [isDay, setIsDay] = useState("Day");

  const handleDayHourToggle = (clickedItem: string) => {
    setIsDay(clickedItem);
  };

  let headingComponent: React.JSX.Element;
  if (isDay === "Day") {
    if (terms === "long" || terms === "short") {
      if (
        filteredData[0]?.shared !== undefined &&
        filteredData[0]?.priceDay !== undefined &&
        filteredData[0]?.priceHour !== undefined
      ) {
        let priceDayNum = parseInt(
          filteredData[0]?.priceDay.replace("$", ""),
          10,
        );
        let sharedNum = parseInt(filteredData[0]?.shared, 10);
        sharedNum = sharedNum + 1;
        headingComponent = (
          <h3 className="text-2xl font-semibold">
            ${Math.round(priceDayNum / sharedNum)}{" "}
            <span className="font-normal text-base">
              {" "}
              / Night whit shared expenses
            </span>
          </h3>
        );
      }
    } else {
      headingComponent = (
        <h3 className="text-2xl font-semibold">
          {filteredData[0]?.priceDay}{" "}
          <span className="font-normal"> / Night</span>
        </h3>
      );
    }
  } else if (isDay === "Hour") {
    if (terms === "long" || terms === "short") {
      if (
        filteredData[0]?.shared !== undefined &&
        filteredData[0]?.priceDay !== undefined &&
        filteredData[0]?.priceHour !== undefined
      ) {
        let priceHourNum = parseInt(
          filteredData[0]?.priceHour.replace("$", ""),
          10,
        );
        let sharedNum = parseInt(filteredData[0]?.shared, 10);
        sharedNum = sharedNum + 1;
        headingComponent = (
          <h3 className="text-2xl font-semibold">
            ${Math.round(priceHourNum / sharedNum)}{" "}
            <span className="font-normal text-base">
              {" "}
              / Hour whit shared expenses
            </span>
          </h3>
        );
      }
    } else {
      headingComponent = (
        <h3 className="text-2xl font-semibold">
          {" "}
          {filteredData[0]?.priceHour}{" "}
          <span className="font-normal"> / Hour</span>{" "}
        </h3>
      );
    }
  }

  const [selectedHour, setSelectedHour] = useState(1);
  const [hourDuration, setHourDuration] = useState<{
    startHour: TimeSlot | null;
    endHour: TimeSlot | null;
  }>({ startHour: { hour: 7, minute: 0 }, endHour: { hour: 10, minute: 0 } });

  const handleTimeSlotSelection = (timeSlot: TimeSlot) => {
    if (!hourDuration.startHour && !hourDuration.endHour) {
      setHourDuration({ ...hourDuration, startHour: timeSlot });
    } else if (!hourDuration.endHour) {
      setHourDuration({ ...hourDuration, endHour: timeSlot });
    } else {
      setHourDuration({ startHour: null, endHour: null });
    }
  };

  const checkIfSlotIsSelected = (timeSlot: TimeSlot) => {
    // first check with start hour
    if (
      hourDuration.startHour &&
      timeSlot.hour === hourDuration.startHour.hour &&
      timeSlot.minute === hourDuration.startHour.minute
    ) {
      return true;
    }

    // then check with end hour
    if (
      hourDuration.endHour &&
      timeSlot.hour === hourDuration.endHour.hour &&
      timeSlot.minute === hourDuration.endHour.minute
    ) {
      return true;
    }

    return false;
  };

  const today = new Date();
  today.setHours(0, 0, 0, 0);

  const daysArray = Array.from({ length: 7 }, (_, i) => {
    const date = new Date(today);
    date.setDate(today.getDate() + i);
    return date;
  });

  const [daysList, setDaysList] = useState(daysArray);
  const [selectedDay, setSelectedDay] = useState(daysList[1]);

  const getNextSevenDays = () => {
    const nextSevenDays = daysList.map((day) => {
      const date = new Date(day);
      date.setDate(day.getDate() + 7);
      return date;
    });
    setDaysList(nextSevenDays);
  };

  const getPrevSevenDaysUntilToday = () => {
    if (daysList[0] <= today) return;
    const prevSevenDays = daysList.map((day) => {
      const date = new Date(day);
      date.setDate(day.getDate() - 7);
      return date;
    });
    setDaysList(prevSevenDays.filter((day) => day >= today));
  };

  const weekDays = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];

  const thisPathname = usePathname();
  const router = useRouter();

  const handleGoBack = () => {
    router.back();
  };

  function closeModalAmenities() {
    setIsOpenModalAmenities(false);
  }

  function openModalAmenities() {
    setIsOpenModalAmenities(true);
  }

  const handleOpenModalImageGallery = () => {
    router.push(`${thisPathname}/?modal=PHOTO_TOUR_SCROLLABLE` as Route);
  };

  const [isSeeMoreDetailsOpen, setIsSeeMoreDetailsOpen] = useState(false);

  const openPopup = () => {
    setIsSeeMoreDetailsOpen(true);
  };

  const closePopup = () => {
    setIsSeeMoreDetailsOpen(false);
  };

  const bookingTimeSlots = [
    {
      dayName: "Monday",
      date: "21",
      dayTimeSlots: [
        "7:00 AM",
        "7:30 AM",
        "8:00 AM",
        "8:30 AM",
        "9:00 AM",
        "9:30 AM",
        "10:00 AM",
        "10:30 AM",
      ],
    },
    {
      dayName: "Tuesday",
      date: "22",
      dayTimeSlots: [
        "7:00 AM",
        "7:30 AM",
        "8:00 AM",
        "8:30 AM",
        "9:00 AM",
        "9:30 AM",
        "10:00 AM",
        "10:30 AM",
      ],
    },
    {
      dayName: "Wednesday",
      date: "23",
      dayTimeSlots: [
        "7:00 AM",
        "7:30 AM",
        "8:00 AM",
        "8:30 AM",
        "9:00 AM",
        "9:30 AM",
        "10:00 AM",
        "10:30 AM",
      ],
    },
    {
      dayName: "Thursday",
      date: "24",
      dayTimeSlots: [
        "7:00 AM",
        "7:30 AM",
        "8:00 AM",
        "8:30 AM",
        "9:00 AM",
        "9:30 AM",
        "10:00 AM",
        "10:30 AM",
      ],
    },
    {
      dayName: "Friday",
      date: "25",
      dayTimeSlots: [
        "7:00 AM",
        "7:30 AM",
        "8:00 AM",
        "8:30 AM",
        "9:00 AM",
        "9:30 AM",
        "10:00 AM",
        "10:30 AM",
      ],
    },
    {
      dayName: "Saturday",
      date: "26",
      dayTimeSlots: [
        "7:00 AM",
        "7:30 AM",
        "8:00 AM",
        "8:30 AM",
        "9:00 AM",
        "9:30 AM",
        "10:00 AM",
        "10:30 AM",
      ],
    },

    {
      dayName: "Sunday",
      date: "27",
      dayTimeSlots: [
        "7:00 AM",
        "7:30 AM",
        "8:00 AM",
        "8:30 AM",
        "9:00 AM",
        "9:30 AM",
        "10:00 AM",
        "10:30 AM",
      ],
    },
  ];

  const renderSection1 = () => {
    return (
      <div className="min-sm:!space-y-6">
        <div className="max-sm:hidden py-6 border-y border-gray-200">
          <Link href="/listing-stay">
            <button
              className="bg-white border rounded-full py-2 px-4 border-gray-200 ml-20"
              onClick={handleGoBack}
            >
              Back
            </button>
          </Link>
        </div>
        <div className="max-sm:pt-4 pt-4 flex justify-between items-center ml-4 sm:ml-20">
          <Badge name="Wooden house" />
        </div>
        <div>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-semibold ml-4 sm:ml-20">
            {filteredData[0]?.title}
          </h2>
          <div className="flex items-center space-x-4 mt-2 mx-4 sm:mx-20 justify-between  mb-8">
            <span className="text-gray-500"> Tokyo, Jappan</span>
            <LikeSaveBtns />
          </div>
        </div>
      </div>
    );
  };

  const renderSection2 = () => {
    return (
      <div>
        <h2 className="text-2xl font-semibold">Description</h2>
        <div className="text-gray-500 dark:text-neutral-300 mt-4">
          <span>
            Providing lake views, The Symphony 9 Tam Coc in Ninh Binh provides
            accommodation, an outdoor swimming pool, a bar, a shared lounge, a
            garden and barbecue facilities. Complimentary WiFi is provided.
            There is a private bathroom with bidet in all units, along with a
            hairdryer and free toiletries. The Symphony 9 Tam Coc offers a
            terrace. Both a bicycle rental service and a car rental service are
            available at the accommodation, while cycling can be enjoyed nearby.
          </span>
        </div>
        <button className="mt-4 border rounded-full border-gray-200 px-4 py-2">
          Show more
        </button>
      </div>
    );
  };

  const renderSection3 = () => {
    return (
      <div>
        <h2 className="text-2xl font-semibold">Offered Amenities </h2>
        <div className="mt-4 grid grid-cols-1 md:grid-cols-2 gap-6 text-sm text-neutral-700">
          {Amenities_demos.filter((_, i) => i < 10).map((item) => (
            <div key={item.name} className="flex items-center space-x-3">
              <i className={`text-3xl las ${item.icon}`}></i>
              <span className="font-semibold">{item.name}</span>
            </div>
          ))}
        </div>
        <div className="mt-4">
          <ButtonSecondary onClick={openModalAmenities}>
            Show more amenities
          </ButtonSecondary>
        </div>
        {renderMotalAmenities()}
      </div>
    );
  };

  const renderMotalAmenities = () => {
    return (
      <Transition appear show={isOpenModalAmenities} as={Fragment}>
        <Dialog
          as="div"
          className="fixed inset-0 z-50 overflow-y-auto"
          onClose={closeModalAmenities}
        >
          <div className="min-h-screen px-4 text-center">
            <Transition.Child
              as={Fragment}
              enter="ease-out duration-300"
              enterFrom="opacity-0"
              enterTo="opacity-100"
              leave="ease-in duration-200"
              leaveFrom="opacity-100"
              leaveTo="opacity-0"
            >
              <Dialog.Overlay className="fixed inset-0 bg-black bg-opacity-40" />
            </Transition.Child>

            {/* This element is to trick the browser into centering the modal contents. */}
            <span
              className="inline-block h-screen align-middle"
              aria-hidden="true"
            >
              &#8203;
            </span>
            <Transition.Child
              as={Fragment}
              enter="ease-out duration-300"
              enterFrom="opacity-0 scale-95"
              enterTo="opacity-100 scale-100"
              leave="ease-in duration-200"
              leaveFrom="opacity-100 scale-100"
              leaveTo="opacity-0 scale-95"
            >
              <div className="inline-block py-8 h-screen w-full max-w-4xl">
                <div className="inline-flex pb-2 flex-col w-full text-left align-middle transition-all transform overflow-hidden rounded-2xl bg-white dark:bg-neutral-900 dark:border dark:border-neutral-700 dark:text-neutral-100 shadow-xl h-full">
                  <div className="relative flex-shrink-0 px-6 py-4 border-b border-neutral-200 dark:border-neutral-800 text-center">
                    <h3
                      className="text-lg font-medium leading-6 text-gray-900"
                      id="headlessui-dialog-title-70"
                    >
                      Amenities
                    </h3>
                    <span className="absolute left-3 top-3">
                      <ButtonClose onClick={closeModalAmenities} />
                    </span>
                  </div>
                  <div className="px-8 overflow-auto text-neutral-700 dark:text-neutral-300 divide-y divide-neutral-200">
                    {Amenities_demos.filter((_, i) => i < 1212).map((item) => (
                      <div
                        key={item.name}
                        className="flex items-center py-2.5 sm:py-4 lg:py-5 space-x-5 lg:space-x-8"
                      >
                        <i
                          className={`text-4xl text-neutral-6000 las ${item.icon}`}
                        ></i>
                        <span>{item.name}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </Transition.Child>
          </div>
        </Dialog>
      </Transition>
    );
  };

  const renderSection5 = () => {
    return (
      <div>
        <div className="flex items-center justify-between space-x-4">
          <div className="flex">
            <Avatar
              hasChecked
              hasCheckedClass="w-4 h-4 -top-0.5 right-0.5"
              sizeClass="h-14 w-14"
              radius="rounded-full"
            />
            <div>
              <div className="mt-1.5 ml-4 flex items-center text-sm text-neutral-500 dark:text-neutral-400">
                <Image src={Verificaty} alt="verificaty" width={16}></Image>
                <h2>Identify Verified</h2>
              </div>
              <a className="block text-xl font-black ml-4" href="/author">
                Hosted By{" "}
                {filteredAuthors[0]?.firstName +
                  " " +
                  filteredAuthors[0]?.lastName}
              </a>
            </div>
          </div>
          <div>
            <ButtonSecondary href="/author" className="font-semibold">
              View profile
            </ButtonSecondary>
          </div>
        </div>
        <div className="flex min-sm:w-[40vw] w-[90vw]">
          <Image src={Protect} alt="Protect" width={24}></Image>
          <h2 className="mt-4 ml-4">
            To protect your payment, never transfer money or communicate outside
            of the Airbnb website or app
          </h2>
        </div>
      </div>
    );
  };

  const renderSection6 = () => {
    return (
      <div>
        <div className="flex items-center">
          <StarIcon className={`text-yellow-500 w-6 h-6`} />
          <h2 className="text-2xl font-bold">5.0</h2>
          <div className="ml-2 mb-1 flex">
            <Image src={Dot} alt="dot" width={4}></Image>
            <h2 className="text-lg font-semibold ml-1">12 Reviews</h2>
          </div>
        </div>
        <div className="grid sm:grid-cols-3 sm:gap-8">
          <Comment className="py-8" />
          <Comment className="py-8 max-sm:hidden" />
          <Comment className="py-8 max-sm:hidden" />
        </div>
        <div className="pb-8 pt-4">
          <ButtonSecondary>Show more reviews</ButtonSecondary>
        </div>
      </div>
    );
  };

  const renderSection7 = () => {
    return (
      <div className="my-14">
        <h2 className="text-2xl font-semibold">Where you’ll be</h2>
        <div className="aspect-w-5 aspect-h-5 sm:aspect-h-3 ring-1 ring-black/10 rounded-xl z-0 mt-6">
          <div className="rounded-xl overflow-hidden z-0">
            <iframe
              width="100%"
              height="100%"
              loading="lazy"
              allowFullScreen
              referrerPolicy="no-referrer-when-downgrade"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2624.999781829875!2d2.2920969260003203!3d48.85821455071963!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47e66e2964e34e2d%3A0x8ddca9ee380ef7e0!2sEiffel%20Tower!5e0!3m2!1sen!2sin!4v1708333221439!5m2!1sen!2sin"
            ></iframe>
          </div>
        </div>
        <div className="mt-6">
          <h2>
            Very dynamic and appreciated district by the people of Bordeaux
            thanks to rue St James and place Fernand Lafargue. Home to many
            historical monuments such as the Grosse Cloche, the Porte de
            Bourgogne and the Porte Cailhau, and cultural sites such as the
            Aquitaine Museum.
          </h2>
          <button className="my-4 border rounded-full border-gray-200 px-4 py-2">
            Show more
          </button>
        </div>
      </div>
    );
  };

  const renderSidebar = () => {
    return (
      <div className="listingSectionSidebar__wrap shadow-xl">
        <Tabs
          selectedTabClassName="text-white bg-[#574EFA]"
          selectedIndex={isDay === "Hour" ? 0 : 1}
        >
          <div className="card">
            <div className="card-body">
              {headingComponent}
              <div className="mt-5">
                <TabList className="border-0">
                  <div className="border-card border rounded-full flex w-full h-[44px]">
                    <Tab
                      className={` py-2 rounded-full text-[#49556D]  text-[15px] font-[600] flex-1 ${
                        isDay === "Day" ? "bg-[#F8F9FB]" : ""
                      }`}
                    >
                      <button
                        onClick={() => handleDayHourToggle("Hour")}
                        className="w-full text-center"
                      >
                        Hour
                      </button>
                    </Tab>
                    <Tab
                      className={`py-2 rounded-full text-[#49556D]  text-[15px] font-[600] flex-1 ${
                        isDay === "Hour" ? "bg-[#F8F9FB]" : ""
                      }`}
                    >
                      <button
                        onClick={() => handleDayHourToggle("Day")}
                        className="text-center w-full"
                      >
                        Day
                      </button>
                    </Tab>
                  </div>
                </TabList>

                {/* hour tab pannel  */}
                <TabPanel>
                  <div className="flex justify-between items-center mt-4">
                    <div>
                      <span className="text-sm text-[#868686]">Select</span>
                      <p>Duration</p>
                    </div>
                  </div>
                  <div className="flex mt-4 justify-around relative">
                    {[1, 2, 3, 4, 12, 24].map((hour) => (
                      <div
                        key={hour}
                        className={`rounded-3xl border-2 p-2 sm:mr-1 cursor-pointer transition-all ease-in-out ${
                          hour === selectedHour
                            ? "bg-[#574EFA] border-[#574EFA]"
                            : ""
                        }`}
                        onClick={() => setSelectedHour(hour)}
                      >
                        <p
                          className={`text-sm md:text-lg text-center transition-all ease-in-out ${
                            selectedHour === hour
                              ? "text-white"
                              : "text-[#878787] "
                          }`}
                        >
                          {hour}
                        </p>
                        <span
                          className={`text-[10px] sm:text-xs transition-all ease-in-out ${
                            selectedHour === hour
                              ? "text-white"
                              : "text-[#9B9B9B]"
                          }`}
                        >
                          Hour
                        </span>
                      </div>
                    ))}
                    <CustomHourInput />
                  </div>
                  <div className="mt-4">
                    <p className="text-lg">Guests</p>
                    <GuestsInput
                      className="mt-4"
                      guestAdultsInputValue={guestAdultsInputValue}
                      setGuestAdultsInputValue={setGuestAdultsInputValue}
                      guestChildrenInputValue={guestChildrenInputValue}
                      setGuestChildrenInputValue={setGuestChildrenInputValue}
                      guestInfantsInputValue={guestInfantsInputValue}
                      setGuestInfantsInputValue={setGuestInfantsInputValue}
                    />
                  </div>

                  <div className="flex justify-between items-center mt-4">
                    <div>
                      <span className="text-sm text-[#868686]">Select</span>
                      <p>Day</p>
                    </div>
                    <div className="flex gap-2">
                      {/* //TODO: disable prev and next button after few switches - think of when */}
                      <span className="">
                        <FaChevronLeft
                          onClick={getPrevSevenDaysUntilToday}
                          className="cursor-pointer"
                        />
                      </span>
                      <span className="">
                        <FaChevronRight
                          onClick={getNextSevenDays}
                          className="cursor-pointer"
                        />
                      </span>
                    </div>
                  </div>
                  <div className="flex mt-4 justify-between">
                    {daysList.map((day, index) => {
                      if (day >= today) {
                        return (
                          <div
                            key={index}
                            className={`rounded-3xl border-2 px-2 py-2 cursor-pointer transition-all ease-in-out ${
                              day === selectedDay
                                ? "bg-[#574EFA] border-[#574EFA]"
                                : ""
                            }`}
                            onClick={() => setSelectedDay(day)}
                          >
                            <span
                              className={`text-xs transition-all ease-in-out ${
                                selectedDay === day
                                  ? "text-white"
                                  : "text-[#9B9B9B]"
                              }`}
                            >
                              {weekDays[day.getDay()]}
                            </span>
                            <p
                              className={`text-xl text-center transition-all ease-in-out ${
                                selectedDay === day
                                  ? "text-white"
                                  : "text-[#878787] "
                              }`}
                            >
                              {day.getDate()}
                            </p>
                          </div>
                        );
                      }
                    })}
                  </div>
                  <div className="mt-4 w-full">
                    <p className="text-[#878787] text-sm">Select Time</p>
                    <div className="mt-4 grid grid-rows-2 grid-flow-col gap-4 w-full">
                      <div
                        className={`rounded-full cursor-pointer text-center  py-2 ${
                          checkIfSlotIsSelected({ hour: 7, minute: 0 })
                            ? "bg-[#574EFA] text-white"
                            : "bg-[#F2F2F7]"
                        }`}
                        onClick={() =>
                          handleTimeSlotSelection({ hour: 7, minute: 0 })
                        }
                      >
                        <p>7:00 AM</p>
                      </div>
                      <div
                        className={`rounded-full cursor-pointer text-center py-2 ${
                          checkIfSlotIsSelected({ hour: 8, minute: 0 })
                            ? "bg-[#574EFA] text-white"
                            : "bg-[#F2F2F7]"
                        }`}
                        onClick={() =>
                          handleTimeSlotSelection({ hour: 8, minute: 0 })
                        }
                      >
                        <p>8:00 AM</p>
                      </div>
                      <div
                        className={`rounded-full cursor-pointer text-center  py-2 ${
                          checkIfSlotIsSelected({ hour: 9, minute: 0 })
                            ? "bg-[#574EFA] text-white"
                            : "bg-[#F2F2F7]"
                        }`}
                        onClick={() =>
                          handleTimeSlotSelection({ hour: 9, minute: 0 })
                        }
                      >
                        <p>9:00 AM</p>
                      </div>
                      <div
                        className={`rounded-full cursor-pointer text-center py-2 ${
                          checkIfSlotIsSelected({ hour: 10, minute: 0 })
                            ? "bg-[#574EFA] text-white"
                            : "bg-[#F2F2F7]"
                        }`}
                        onClick={() =>
                          handleTimeSlotSelection({ hour: 10, minute: 0 })
                        }
                      >
                        <p>10:00 AM</p>
                      </div>
                    </div>
                    <div
                      className="mt-6 cursor-pointer"
                      onClick={() => setIsSeeMoreDetailsOpen(true)}
                    >
                      <p className="text-lg text-center">View More...</p>
                    </div>
                  </div>

                  <ButtonPrimary href={"/checkout"} className="w-full mt-4">
                    Send Proposal
                  </ButtonPrimary>

                  <p className="mt-4 text-[#9DA1AB] text-sm text-center">
                    You won't be charged yet
                  </p>

                  <div className="flex justify-between items-center mt-4">
                    <p>
                      {terms === "long" || terms === "short"
                        ? sharedExpensesHourNumber +
                          " x " +
                          selectedHour +
                          " hours"
                        : filteredData[0]?.priceHour +
                          " x " +
                          selectedHour +
                          " hours"}
                    </p>
                    <p>
                      {terms === "long" || terms === "short"
                        ? "$" + sharedExpensesHourNumber * selectedHour
                        : "$" + priceHourNumber * selectedHour}
                    </p>
                  </div>
                  <hr className="mt-4" />
                  <div className="flex justify-between items-center mt-4">
                    <p>Total</p>
                    <p>
                      {terms === "long" || terms === "short"
                        ? "$" + sharedExpensesHourNumber * selectedHour
                        : "$" + priceHourNumber * selectedHour}
                    </p>
                  </div>
                  {isSeeMoreDetailsOpen && (
                    <div className="fixed top-28 lg:left-40 w-3/4 h-[80%] flex justify-center items-center shadow-2xl bg-opacity-50 z-50 ">
                      <div className="lg:overflow-hidden overflow-auto bg-white rounded-lg p-6 pt-3 my-5 max-w-[1293px] lg:h-[1034px] w-full  h-auto  max-h-full py-10 mx-4 relative">
                        <button
                          onClick={closePopup}
                          className="absolute lg:top-9 lg:right-10 top-1 right-4 border-2 font-bold text-black h-8 w-8 flex justify-center items-center bg-gray-200 rounded-full p-1"
                        >
                          &#10005;
                        </button>
                        <div className="">
                          <div className="select-area grid lg:grid-cols-4 md:grid-cols-2 grid-cols-1 justify-start">
                            <div>
                              <p className="ml-2 mb-1 text-[#272D37] text-[16px] font-medium">
                                Select Duration
                              </p>
                              <select className="select border border-card focus:outline-none w-[206px] rounded-full mt-2 mb-4  max-w-xs">
                                {" "}
                                <option disabled selected>
                                  1 Hour
                                </option>
                                <option>1 hour 30 minutes</option>
                                <option>2 hours</option>
                                <option>2 hours 30 minutes</option>
                                <option>3 hours</option>
                                <option>3 hours 30 minutes</option>
                                <option>4 hours</option>
                                <option>4 hours 30 minutes</option>
                                <option>5 hours</option>
                                <option>5 hours 30 minutes</option>
                              </select>
                            </div>

                            <div>
                              <p className="ml-2 mb-1 text-[#272D37] text-[16px] font-medium">
                                Year
                              </p>
                              <select className="w-[206px] select border border-card focus:outline-none rounded-full mt-2 mb-4  max-w-xs">
                                {" "}
                                <option disabled selected>
                                  2023
                                </option>
                                <option>2023</option>
                                <option>2024</option>
                                <option>2025</option>
                                <option>2026</option>
                                <option>2027</option>
                              </select>
                            </div>

                            <div>
                              <p className="ml-2 mb-1 text-[#272D37] text-[16px] font-medium">
                                Month
                              </p>
                              <select className="select border border-card focus:outline-none w-[206px] rounded-full mt-2 mb-4  max-w-xs">
                                {" "}
                                <option disabled selected>
                                  Month
                                </option>
                                <option>January</option>
                                <option>February</option>
                                <option>March</option>
                                <option>April</option>
                                <option>May</option>
                                <option>June</option>
                                <option>July</option>
                                <option>August</option>
                                <option>September</option>
                                <option>October</option>
                                <option>November</option>
                                <option>December</option>
                              </select>
                            </div>

                            <div>
                              <p className="ml-2 mb-1 text-[#272D37] text-[16px] font-medium">
                                Week
                              </p>
                              <select className="select border border-card focus:outline-none w-[206px] rounded-full mt-2 mb-4  max-w-xs">
                                {" "}
                                <option disabled selected>
                                  Week
                                </option>
                                <option>Week</option>
                                <option>21st - 27st</option>
                                <option>31st - 37st</option>
                                <option>41st - 47st</option>
                                <option>51st - 57st</option>
                                <option>11st - 17st</option>
                              </select>
                            </div>
                          </div>
                        </div>

                        <div className="flex justify-between overflow-auto mt-5 lg:gap-1 md:gap-4 gap-7">
                          {bookingTimeSlots.map((bookingTime, idx) => {
                            return (
                              <div key={idx} className="">
                                <div className="text-center">
                                  <div className="lg:border-t-8 border-[#685df8] lg:rounded-xl lg:bg-[#ECEBFF] text-[#473bf0] lg:text-[14px] font-semibold lg:py-1 flex lg:flex-col flex-row text-[14px] lg:px-7 lg:mb- mb-2">
                                    <h1 className="">{bookingTime.dayName}</h1>
                                    <p className=" lg:text-center text-left">
                                      {bookingTime.date}
                                    </p>
                                  </div>
                                  <div className="flex flex-col">
                                    {bookingTime.dayTimeSlots.map(
                                      (dayTime, idx) => {
                                        return (
                                          <div
                                            className="text-center flex mb-1"
                                            key={idx}
                                          >
                                            <button
                                              className={`block lg:mt-3 mt-4 mx-auto text-[16px] font-medium ${
                                                isTimeSlotSelected(
                                                  bookingTime.dayName,
                                                  dayTime,
                                                )
                                                  ? "text-[#4845f7]"
                                                  : "text-[#929292]"
                                              } lg:bg-transparent lg:border-none lg:px-0 lg:py-0 bg-[#F2F2F7] rounded-full lg:min-w-0 min-w-[110px] py-2 px-3`}
                                              onClick={() =>
                                                toggleTimeSlotSelection(
                                                  bookingTime.dayName,
                                                  dayTime,
                                                )
                                              }
                                            >
                                              {dayTime}
                                            </button>
                                          </div>
                                        );
                                      },
                                    )}
                                  </div>
                                </div>
                              </div>
                            );
                          })}
                        </div>

                        <div>
                          <div className="lg:flex hidden mt-4 h-[10px] mx-6 rounded-full bg-gradient-to-b from-[#827BFF] to-[#DDDBFF]"></div>
                          <div className="lg:flex block justify-between items-center mt-3 ">
                            <div className="lg:flex gap-7 items-center  mx-6 hidden">
                              <button className="text-[16px] font-medium text-purple">
                                Available times
                              </button>
                              <button className="text-[16px] font-medium text-[#ABABBB]">
                                Booked times
                              </button>
                            </div>

                            <div className="gap-4 lg:flex">
                              <button
                                onClick={closePopup}
                                className="bg-[#F3F2FF] px-5 py-3  font-semibold text-black text-sm rounded-full lg:flex hidden"
                              >
                                Back
                              </button>
                              <button className="bg-[#414df3] px-5 py-3 font-semibold text-white text-sm rounded-full w-full">
                                Book time
                              </button>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  )}
                </TabPanel>

                {/* day tab pannel  */}
                <TabPanel>
                  <div className="mt-3">
                    <StayDatesRangeInput
                      startDate={startDate}
                      endDate={endDate}
                      setStartDate={setStartDate}
                      setEndDate={setEndDate}
                    />

                    <div className="mt-2">
                      <GuestsInput
                        guestAdultsInputValue={guestAdultsInputValue}
                        setGuestAdultsInputValue={setGuestAdultsInputValue}
                        guestChildrenInputValue={guestChildrenInputValue}
                        setGuestChildrenInputValue={setGuestChildrenInputValue}
                        guestInfantsInputValue={guestInfantsInputValue}
                        setGuestInfantsInputValue={setGuestInfantsInputValue}
                      />
                    </div>

                    <div className="mt-4">
                      <div className="flex items-center justify-between">
                        <div>
                          <p>
                            {terms === "long" || terms === "short"
                              ? sharedExpensesDayNumber +
                                " x " +
                                numberOfDays +
                                " nights"
                              : filteredData[0]?.priceDay +
                                " x " +
                                numberOfDays +
                                " nights"}
                          </p>
                        </div>
                        <div>
                          <p>
                            {terms === "long" || terms === "short"
                              ? "$" + sharedExpensesDayNumber * numberOfDays
                              : "$" + priceDayNumber * numberOfDays}
                          </p>
                        </div>
                      </div>
                      <div className="flex items-center justify-between">
                        <div>
                          <p>Cleaning fees</p>
                        </div>
                        <div>
                          <p>$0</p>
                        </div>
                      </div>
                      <div className="flex items-center justify-between">
                        <div>
                          <p>Weekly discount</p>
                        </div>
                        <div>
                          <p className="text-[#10B981]">-$0</p>
                        </div>
                      </div>
                    </div>
                    <div className="border border-light-primary my-4"></div>
                    <div className="flex items-center justify-between">
                      <div>
                        <p className="font-semibold">Total</p>
                      </div>
                      <div>
                        {numberOfDays && (
                          <p className="font-semibold">
                            {terms === "long" || terms === "short"
                              ? "$" + sharedExpensesDayNumber * numberOfDays
                              : "$" + priceDayNumber * numberOfDays}
                          </p>
                        )}
                      </div>
                    </div>
                  </div>
                  <ButtonPrimary href={"/checkout"} className="w-full">
                    Send Proposal
                  </ButtonPrimary>
                </TabPanel>
              </div>
            </div>
          </div>
        </Tabs>
      </div>
    );
  };

  return (
    <div className="bg-white w-full sm:w-[100vw]">
      {/*  HEADER */}
      <header>{renderSection1()}</header>
      <div className="rounded-md sm:rounded-xl sm:mx-20 mx-4">
        <div className="relative grid grid-cols-3 sm:grid-cols-4 gap-1 sm:gap-2">
          <div
            className="col-span-2 row-span-3 sm:row-span-2 relative rounded-md sm:rounded-xl overflow-hidden cursor-pointer"
            onClick={handleOpenModalImageGallery}
          >
            <Image
              fill
              className="object-cover rounded-md sm:rounded-xl"
              src={filteredData[0]?.featuredImage}
              alt=""
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 50vw"
            />
            <div className="absolute inset-0 bg-neutral-900 bg-opacity-20 opacity-0 hover:opacity-100 transition-opacity"></div>
          </div>
          {filteredData[0]?.galleryImgs
            .filter((_, i) => i >= 0 && i < 4)
            .map((item, index) => (
              <div
                key={index}
                className={`relative rounded-md sm:rounded-xl overflow-hidden ${
                  index >= 3 ? "hidden sm:block" : ""
                }`}
              >
                <div className="aspect-w-4 aspect-h-3 sm:aspect-w-6 sm:aspect-h-5">
                  <Image
                    fill
                    className="object-cover rounded-md sm:rounded-xl "
                    src={item || ""}
                    alt=""
                    sizes="400px"
                  />
                </div>

                {/* OVERLAY */}
                <div
                  className="absolute inset-0 bg-neutral-900 bg-opacity-20 opacity-0 hover:opacity-100 transition-opacity cursor-pointer"
                  onClick={handleOpenModalImageGallery}
                />
              </div>
            ))}
          <button
            className="absolute hidden md:flex md:items-center md:justify-center left-3 bottom-3 px-4 py-2 rounded-xl bg-neutral-100 text-neutral-500 hover:bg-neutral-200 z-10"
            onClick={handleOpenModalImageGallery}
          >
            <Squares2X2Icon className="w-5 h-5" />
            <span className="ml-2 text-neutral-800 text-sm font-medium">
              Show all photos
            </span>
          </button>
        </div>
      </div>

      {/* MAIN */}
      <main className=" relative z-10 mt-11 flex flex-col lg:flex-row sm:mx-20 mx-4">
        {/* CONTENT */}
        <div className="w-full lg:w-3/5 xl:w-2/3 space-y-8 lg:space-y-10 lg:pr-10 ">
          {renderSection5()}
          {renderSection2()}
          {renderSection3()}
        </div>
        <div className="flex-grow mt-14 lg:mt-0">
          <div className="top-28">{renderSidebar()}</div>
        </div>
      </main>
      <div className="sm:mx-20 mx-4">
        {renderSection7()}
        {renderSection6()}
      </div>
      <div className="bg-[#F9F9F9] pb-12">
        <div className="sm:mx-20 mx-4 pt-16">
          <div className="flex justify-between items-center mb-12">
            <div className="w-[60%]">
              <h2 className="text-black font-bold text-2xl mb-4">
                Nearby Hotels
              </h2>
              <h2 className="text-[#757575]">
                You can find places and stay with hotels and home-stays ranked
                by travellers. What fun could we have more than having roommate
                with similar interest.
              </h2>
            </div>
            <div>
              <Link href={"/listing-stay-map/1" as Route}>
                <button className="border rounded-full bg-white font-medium border-gray-200 px-4 py-2">
                  Show more
                </button>
              </Link>
            </div>
          </div>
          <div
            className={`hidden sm:mx-20 mx-4 sm:grid sm:grid-cols-4 gap-x-8 2xl:gap-x-6 gap-y-8 `}
          >
            {DEMO_STAYS.map((item) => (
              <div
                key={item.id}
                onMouseEnter={() => setCurrentHoverID((_) => item.id)}
                onMouseLeave={() => setCurrentHoverID((_) => -1)}
                className="p-1 bg-white rounded-xl"
              >
                <StayCard2 data={item} />
              </div>
            ))}
          </div>
          <div className={`grid grid-cols-1 sm:mx-20 mx-4 sm:grid-cols-4`}>
            <div
              key={DEMO_STAYS[0].id}
              onMouseEnter={() => setCurrentHoverID((_) => DEMO_STAYS[0].id)}
              onMouseLeave={() => setCurrentHoverID((_) => -1)}
              className="bg-white rounded-xl"
            >
              <StayCard2 data={DEMO_STAYS[0]} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ListingStayDetailPage;
