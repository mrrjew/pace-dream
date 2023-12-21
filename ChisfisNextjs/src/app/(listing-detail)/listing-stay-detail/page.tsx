'use client';

import React, { FC, Fragment, useState } from 'react';
import { Dialog, Transition } from '@headlessui/react';
import { ArrowRightIcon, Squares2X2Icon } from '@heroicons/react/24/outline';
import CommentListing from '@/components/CommentListing';
import FiveStartIconForRate from '@/components/FiveStartIconForRate';
import StartRating from '@/components/StartRating';
import Avatar from '@/shared/Avatar';
import Badge from '@/shared/Badge';
import ButtonCircle from '@/shared/ButtonCircle';
import ButtonPrimary from '@/shared/ButtonPrimary';
import ButtonSecondary from '@/shared/ButtonSecondary';
import ButtonClose from '@/shared/ButtonClose';
import Input from '@/shared/Input';
import LikeSaveBtns from '@/components/LikeSaveBtns';
import Image from 'next/image';
import { usePathname, useRouter } from 'next/navigation';
import { Amenities_demos, PHOTOS } from './constant';
import StayDatesRangeInput from './StayDatesRangeInput';
import GuestsInput from './GuestsInput';
import SectionDateRange from '../SectionDateRange';
import { Route } from 'next';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import { setLocalStorageItem } from '@/utils/localStorageUtil';
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa';
import { CustomHourInput } from './CustomHourInput';

export interface ListingStayDetailPageProps {}

export type TimeSlot = {
  hour: number;
  minute: number;
};

const ListingStayDetailPage: FC<ListingStayDetailPageProps> = ({}) => {
  // time slot state

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

  // Function to check if a time slot is selected for a specific day

  const isTimeSlotSelected = (day: string, timeSlot: string) => {
    return (selectedTimeSlots[day] || []).includes(timeSlot);
  };

  //  Date value state

  const [startDate, setStartDate] = useState<Date | any>(new Date());
  const [endDate, setEndDate] = useState<Date | any>(new Date());

  const timeDifference = endDate - startDate;
  const numberOfDays = timeDifference / (1000 * 60 * 60 * 24);
  setLocalStorageItem('bookedDay', numberOfDays.toString() || '');

  // Guest value state

  const [guestAdultsInputValue, setGuestAdultsInputValue] = useState(0);
  const [guestChildrenInputValue, setGuestChildrenInputValue] = useState(0);
  const [guestInfantsInputValue, setGuestInfantsInputValue] = useState(0);

  let [isOpenModalAmenities, setIsOpenModalAmenities] = useState(false);

  const [isDay, setIsDay] = useState('Day');

  const handleDayHourToggle = (clickedItem: string) => {
    setIsDay(clickedItem);
  };

  let headingComponent: React.JSX.Element;
  if (isDay === 'Day') {
    headingComponent = (
      <h3 className="text-2xl font-semibold">
        {' '}
        $75 <span className="font-normal"> / Night</span>{' '}
      </h3>
    );
  } else if (isDay === 'Hour') {
    headingComponent = (
      <h3 className="text-2xl font-semibold">
        {' '}
        $5 <span className="font-normal"> / hour</span>{' '}
      </h3>
    );
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

  const weekDays = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];

  const thisPathname = usePathname();
  const router = useRouter();

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
      dayName: 'Monday',
      date: '21',
      dayTimeSlots: [
        '7:00 AM',
        '7:30 AM',
        '8:00 AM',
        '8:30 AM',
        '9:00 AM',
        '9:30 AM',
        '10:00 AM',
        '10:30 AM',
      ],
    },
    {
      dayName: 'Tuesday',
      date: '22',
      dayTimeSlots: [
        '7:00 AM',
        '7:30 AM',
        '8:00 AM',
        '8:30 AM',
        '9:00 AM',
        '9:30 AM',
        '10:00 AM',
        '10:30 AM',
      ],
    },
    {
      dayName: 'Wednesday',
      date: '23',
      dayTimeSlots: [
        '7:00 AM',
        '7:30 AM',
        '8:00 AM',
        '8:30 AM',
        '9:00 AM',
        '9:30 AM',
        '10:00 AM',
        '10:30 AM',
      ],
    },
    {
      dayName: 'Thursday',
      date: '24',
      dayTimeSlots: [
        '7:00 AM',
        '7:30 AM',
        '8:00 AM',
        '8:30 AM',
        '9:00 AM',
        '9:30 AM',
        '10:00 AM',
        '10:30 AM',
      ],
    },
    {
      dayName: 'Friday',
      date: '25',
      dayTimeSlots: [
        '7:00 AM',
        '7:30 AM',
        '8:00 AM',
        '8:30 AM',
        '9:00 AM',
        '9:30 AM',
        '10:00 AM',
        '10:30 AM',
      ],
    },
    {
      dayName: 'Saturday',
      date: '26',
      dayTimeSlots: [
        '7:00 AM',
        '7:30 AM',
        '8:00 AM',
        '8:30 AM',
        '9:00 AM',
        '9:30 AM',
        '10:00 AM',
        '10:30 AM',
      ],
    },

    {
      dayName: 'Sunday',
      date: '27',
      dayTimeSlots: [
        '7:00 AM',
        '7:30 AM',
        '8:00 AM',
        '8:30 AM',
        '9:00 AM',
        '9:30 AM',
        '10:00 AM',
        '10:30 AM',
      ],
    },
  ];

  const renderSection1 = () => {
    return (
      <div className="listingSection__wrap !space-y-6">
        {/* 1 */}
        <div className="flex justify-between items-center">
          <Badge name="Wooden house" />
          <LikeSaveBtns />
        </div>

        {/* 2 */}
        <h2 className="text-2xl sm:text-3xl lg:text-4xl font-semibold">
          Beach House in Collingwood
        </h2>

        {/* 3 */}
        <div className="flex items-center space-x-4">
          <StartRating />
          <span>·</span>
          <span>
            <i className="las la-map-marker-alt"></i>
            <span className="ml-1"> Tokyo, Jappan</span>
          </span>
        </div>

        {/* 4 */}
        <div className="flex items-center">
          <Avatar hasChecked sizeClass="h-10 w-10" radius="rounded-full" />
          <span className="ml-2.5 text-neutral-500 dark:text-neutral-400">
            Hosted by{' '}
            <span className="text-neutral-900 dark:text-neutral-200 font-medium">
              Kevin Francis
            </span>
          </span>
        </div>

        {/* 5 */}
        <div className="w-full border-b border-neutral-100 dark:border-neutral-700" />

        {/* 6 */}
        <div className="flex items-center justify-between xl:justify-start space-x-8 xl:space-x-12 text-sm text-neutral-700 dark:text-neutral-300">
          <div className="flex items-center space-x-3 ">
            <i className=" las la-user text-2xl "></i>
            <span className="">
              6 <span className="hidden sm:inline-block">guests</span>
            </span>
          </div>
          <div className="flex items-center space-x-3">
            <i className=" las la-bed text-2xl"></i>
            <span className=" ">
              6 <span className="hidden sm:inline-block">beds</span>
            </span>
          </div>
          <div className="flex items-center space-x-3">
            <i className=" las la-bath text-2xl"></i>
            <span className=" ">
              3 <span className="hidden sm:inline-block">baths</span>
            </span>
          </div>
          <div className="flex items-center space-x-3">
            <i className=" las la-door-open text-2xl"></i>
            <span className=" ">
              2 <span className="hidden sm:inline-block">bedrooms</span>
            </span>
          </div>
        </div>
      </div>
    );
  };

  const renderSection2 = () => {
    return (
      <div className="listingSection__wrap">
        <h2 className="text-2xl font-semibold">Stay information</h2>
        <div className="w-14 border-b border-neutral-200 dark:border-neutral-700"></div>
        <div className="text-neutral-6000 dark:text-neutral-300">
          <span>
            Providing lake views, The Symphony 9 Tam Coc in Ninh Binh provides
            accommodation, an outdoor swimming pool, a bar, a shared lounge, a
            garden and barbecue facilities. Complimentary WiFi is provided.
          </span>
          <br />
          <br />
          <span>
            There is a private bathroom with bidet in all units, along with a
            hairdryer and free toiletries.
          </span>
          <br /> <br />
          <span>
            The Symphony 9 Tam Coc offers a terrace. Both a bicycle rental
            service and a car rental service are available at the accommodation,
            while cycling can be enjoyed nearby.
          </span>
        </div>
      </div>
    );
  };

  const renderSection3 = () => {
    return (
      <div className="listingSection__wrap">
        <div>
          <h2 className="text-2xl font-semibold">Amenities </h2>
          <span className="block mt-2 text-neutral-500 dark:text-neutral-400">
            {` About the property's amenities and services`}
          </span>
        </div>
        <div className="w-14 border-b border-neutral-200 dark:border-neutral-700"></div>
        {/* 6 */}
        <div className="grid grid-cols-1 xl:grid-cols-3 gap-6 text-sm text-neutral-700 dark:text-neutral-300 ">
          {Amenities_demos.filter((_, i) => i < 12).map((item) => (
            <div key={item.name} className="flex items-center space-x-3">
              <i className={`text-3xl las ${item.icon}`}></i>
              <span className=" ">{item.name}</span>
            </div>
          ))}
        </div>

        {/* ----- */}
        <div className="w-14 border-b border-neutral-200"></div>
        <div>
          <ButtonSecondary onClick={openModalAmenities}>
            View more 20 amenities
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

  const renderSection4 = () => {
    return (
      <div className="listingSection__wrap">
        {/* HEADING */}
        <div>
          <h2 className="text-2xl font-semibold">Room Rates </h2>
          <span className="block mt-2 text-neutral-500 dark:text-neutral-400">
            Prices may increase on weekends or holidays
          </span>
        </div>
        <div className="w-14 border-b border-neutral-200 dark:border-neutral-700"></div>
        {/* CONTENT */}
        <div className="flow-root">
          <div className="text-sm sm:text-base text-neutral-6000 dark:text-neutral-300 -mb-4">
            <div className="p-4 bg-neutral-100 dark:bg-neutral-800 flex justify-between items-center space-x-4 rounded-lg">
              <span>Monday - Thursday</span>
              <span>$199</span>
            </div>
            <div className="p-4  flex justify-between items-center space-x-4 rounded-lg">
              <span>Monday - Thursday</span>
              <span>$199</span>
            </div>
            <div className="p-4 bg-neutral-100 dark:bg-neutral-800 flex justify-between items-center space-x-4 rounded-lg">
              <span>Friday - Sunday</span>
              <span>$219</span>
            </div>
            <div className="p-4 flex justify-between items-center space-x-4 rounded-lg">
              <span>Rent by month</span>
              <span>-8.34 %</span>
            </div>
            <div className="p-4 bg-neutral-100 dark:bg-neutral-800 flex justify-between items-center space-x-4 rounded-lg">
              <span>Minimum number of nights</span>
              <span>1 night</span>
            </div>
            <div className="p-4 flex justify-between items-center space-x-4 rounded-lg">
              <span>Max number of nights</span>
              <span>90 nights</span>
            </div>
          </div>
        </div>
      </div>
    );
  };

  const renderSection5 = () => {
    return (
      <div className="listingSection__wrap">
        {/* HEADING */}
        <h2 className="text-2xl font-semibold">Host Information</h2>
        <div className="w-14 border-b border-neutral-200 dark:border-neutral-700"></div>

        {/* host */}
        <div className="flex items-center space-x-4">
          <Avatar
            hasChecked
            hasCheckedClass="w-4 h-4 -top-0.5 right-0.5"
            sizeClass="h-14 w-14"
            radius="rounded-full"
          />
          <div>
            <a className="block text-xl font-medium" href="##">
              Kevin Francis
            </a>
            <div className="mt-1.5 flex items-center text-sm text-neutral-500 dark:text-neutral-400">
              <StartRating />
              <span className="mx-2">·</span>
              <span> 12 places</span>
            </div>
          </div>
        </div>

        {/* desc */}
        <span className="block text-neutral-6000 dark:text-neutral-300">
          Providing lake views, The Symphony 9 Tam Coc in Ninh Binh provides
          accommodation, an outdoor swimming pool, a bar, a shared lounge, a
          garden and barbecue facilities...
        </span>

        {/* info */}
        <div className="block text-neutral-500 dark:text-neutral-400 space-y-2.5">
          <div className="flex items-center space-x-3">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={1.5}
                d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
              />
            </svg>
            <span>Joined in March 2016</span>
          </div>
          <div className="flex items-center space-x-3">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={1.5}
                d="M7 8h10M7 12h4m1 8l-4-4H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-3l-4 4z"
              />
            </svg>
            <span>Response rate - 100%</span>
          </div>
          <div className="flex items-center space-x-3">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={1.5}
                d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
              />
            </svg>

            <span>Fast response - within a few hours</span>
          </div>
        </div>

        {/* == */}
        <div className="w-14 border-b border-neutral-200 dark:border-neutral-700"></div>
        <div>
          <ButtonSecondary href="/author">See host profile</ButtonSecondary>
        </div>
      </div>
    );
  };

  const renderSection6 = () => {
    return (
      <div className="listingSection__wrap">
        {/* HEADING */}
        <h2 className="text-2xl font-semibold">Reviews (23 reviews)</h2>
        <div className="w-14 border-b border-neutral-200 dark:border-neutral-700"></div>

        {/* Content */}
        <div className="space-y-5">
          <FiveStartIconForRate iconClass="w-6 h-6" className="space-x-0.5" />
          <div className="relative">
            <Input
              fontClass=""
              sizeClass="h-16 px-4 py-3"
              rounded="rounded-3xl"
              placeholder="Share your thoughts ..."
            />
            <ButtonCircle
              className="absolute right-2 top-1/2 transform -translate-y-1/2"
              size=" w-12 h-12 "
            >
              <ArrowRightIcon className="w-5 h-5" />
            </ButtonCircle>
          </div>
        </div>

        {/* comment */}
        <div className="divide-y divide-neutral-100 dark:divide-neutral-800">
          <CommentListing className="py-8" />
          <CommentListing className="py-8" />
          <CommentListing className="py-8" />
          <CommentListing className="py-8" />
          <div className="pt-8">
            <ButtonSecondary>View more 20 reviews</ButtonSecondary>
          </div>
        </div>
      </div>
    );
  };

  const renderSection7 = () => {
    return (
      <div className="listingSection__wrap">
        {/* HEADING */}
        <div>
          <h2 className="text-2xl font-semibold">Location</h2>
          <span className="block mt-2 text-neutral-500 dark:text-neutral-400">
            San Diego, CA, United States of America (SAN-San Diego Intl.)
          </span>
        </div>
        <div className="w-14 border-b border-neutral-200 dark:border-neutral-700" />

        {/* MAP */}
        <div className="aspect-w-5 aspect-h-5 sm:aspect-h-3 ring-1 ring-black/10 rounded-xl z-0">
          <div className="rounded-xl overflow-hidden z-0">
            <iframe
              width="100%"
              height="100%"
              loading="lazy"
              allowFullScreen
              referrerPolicy="no-referrer-when-downgrade"
              src="https://www.google.com/maps/embed/v1/place?key=AIzaSyAGVJfZMAKYfZ71nzL_v5i3LjTTWnCYwTY&q=Eiffel+Tower,Paris+France"
            ></iframe>
          </div>
        </div>
      </div>
    );
  };

  const renderSection8 = () => {
    return (
      <div className="listingSection__wrap">
        {/* HEADING */}
        <h2 className="text-2xl font-semibold">Things to know</h2>
        <div className="w-14 border-b border-neutral-200 dark:border-neutral-700" />

        {/* CONTENT */}
        <div>
          <h4 className="text-lg font-semibold">Cancellation policy</h4>
          <span className="block mt-3 text-neutral-500 dark:text-neutral-400">
            Refund 50% of the booking value when customers cancel the room
            within 48 hours after successful booking and 14 days before the
            check-in time. <br />
            Then, cancel the room 14 days before the check-in time, get a 50%
            refund of the total amount paid (minus the service fee).
          </span>
        </div>
        <div className="w-14 border-b border-neutral-200 dark:border-neutral-700" />

        {/* CONTENT */}
        <div>
          <h4 className="text-lg font-semibold">Check-in time</h4>
          <div className="mt-3 text-neutral-500 dark:text-neutral-400 max-w-md text-sm sm:text-base">
            <div className="flex space-x-10 justify-between p-3 bg-neutral-100 dark:bg-neutral-800 rounded-lg">
              <span>Check-in</span>
              <span>08:00 am - 12:00 am</span>
            </div>
            <div className="flex space-x-10 justify-between p-3">
              <span>Check-out</span>
              <span>02:00 pm - 04:00 pm</span>
            </div>
          </div>
        </div>
        <div className="w-14 border-b border-neutral-200 dark:border-neutral-700" />

        {/* CONTENT */}
        <div>
          <h4 className="text-lg font-semibold">Special Note</h4>
          <div className="prose sm:prose">
            <ul className="mt-3 text-neutral-500 dark:text-neutral-400 space-y-2">
              <li>
                Ban and I will work together to keep the landscape and
                environment green and clean by not littering, not using
                stimulants and respecting people around.
              </li>
              <li>Do not sing karaoke past 11:30</li>
            </ul>
          </div>
        </div>
      </div>
    );
  };

  const renderSidebar = () => {
    return (
      <div className="listingSectionSidebar__wrap shadow-xl">
        <Tabs
          selectedTabClassName="text-white bg-[#574EFA]"
          selectedIndex={isDay === 'Hour' ? 0 : 1}
        >
          <div className="card">
            <div className="card-body">
              {headingComponent}
              <div className="mt-5">
                <TabList className="border-0">
                  <div className="border-card border rounded-full flex w-full h-[44px]">
                    <Tab
                      className={` py-2 rounded-full text-[#49556D]  text-[15px] font-[600] flex-1 ${
                        isDay === 'Day' ? 'bg-[#F8F9FB]' : ''
                      }`}
                    >
                      <button
                        onClick={() => handleDayHourToggle('Hour')}
                        className="w-full text-center"
                      >
                        Hour
                      </button>
                    </Tab>
                    <Tab
                      className={`py-2 rounded-full text-[#49556D]  text-[15px] font-[600] flex-1 ${
                        isDay === 'Hour' ? 'bg-[#F8F9FB]' : ''
                      }`}
                    >
                      <button
                        onClick={() => handleDayHourToggle('Day')}
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
                            ? 'bg-[#574EFA] border-[#574EFA]'
                            : ''
                        }`}
                        onClick={() => setSelectedHour(hour)}
                      >
                        <p
                          className={`text-sm md:text-lg text-center transition-all ease-in-out ${
                            selectedHour === hour
                              ? 'text-white'
                              : 'text-[#878787] '
                          }`}
                        >
                          {hour}
                        </p>
                        <span
                          className={`text-[10px] sm:text-xs transition-all ease-in-out ${
                            selectedHour === hour
                              ? 'text-white'
                              : 'text-[#9B9B9B]'
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
                                ? 'bg-[#574EFA] border-[#574EFA]'
                                : ''
                            }`}
                            onClick={() => setSelectedDay(day)}
                          >
                            <span
                              className={`text-xs transition-all ease-in-out ${
                                selectedDay === day
                                  ? 'text-white'
                                  : 'text-[#9B9B9B]'
                              }`}
                            >
                              {weekDays[day.getDay()]}
                            </span>
                            <p
                              className={`text-xl text-center transition-all ease-in-out ${
                                selectedDay === day
                                  ? 'text-white'
                                  : 'text-[#878787] '
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
                            ? 'bg-[#574EFA] text-white'
                            : 'bg-[#F2F2F7]'
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
                            ? 'bg-[#574EFA] text-white'
                            : 'bg-[#F2F2F7]'
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
                            ? 'bg-[#574EFA] text-white'
                            : 'bg-[#F2F2F7]'
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
                            ? 'bg-[#574EFA] text-white'
                            : 'bg-[#F2F2F7]'
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

                  <ButtonPrimary href={'/checkout'} className="w-full mt-4">
                    Send Proposal
                  </ButtonPrimary>

                  <p className="mt-4 text-[#9DA1AB] text-sm text-center">
                    You won't be charged yet
                  </p>

                  <div className="flex justify-between items-center mt-4">
                    <p>$5 x 2 hours</p>
                    <p>$10</p>
                  </div>
                  <hr className="mt-4" />
                  <div className="flex justify-between items-center mt-4">
                    <p>Total</p>
                    <p>$10</p>
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
                                {' '}
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
                                {' '}
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
                                {' '}
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
                                {' '}
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
                                                  dayTime
                                                )
                                                  ? 'text-[#4845f7]'
                                                  : 'text-[#929292]'
                                              } lg:bg-transparent lg:border-none lg:px-0 lg:py-0 bg-[#F2F2F7] rounded-full lg:min-w-0 min-w-[110px] py-2 px-3`}
                                              onClick={() =>
                                                toggleTimeSlotSelection(
                                                  bookingTime.dayName,
                                                  dayTime
                                                )
                                              }
                                            >
                                              {dayTime}
                                            </button>
                                          </div>
                                        );
                                      }
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
                          <p>$75 x {numberOfDays} nights</p>
                        </div>
                        <div>
                          <p>${75 * numberOfDays}</p>
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
                            $ {75 * numberOfDays}{' '}
                          </p>
                        )}
                      </div>
                    </div>
                  </div>
                  <ButtonPrimary href={'/checkout'} className="w-full">
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
    <div className="nc-ListingStayDetailPage">
      {/*  HEADER */}
      <header className="rounded-md sm:rounded-xl">
        <div className="relative grid grid-cols-3 sm:grid-cols-4 gap-1 sm:gap-2">
          <div
            className="col-span-2 row-span-3 sm:row-span-2 relative rounded-md sm:rounded-xl overflow-hidden cursor-pointer"
            onClick={handleOpenModalImageGallery}
          >
            <Image
              fill
              className="object-cover rounded-md sm:rounded-xl"
              src={PHOTOS[0]}
              alt=""
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 50vw"
            />
            <div className="absolute inset-0 bg-neutral-900 bg-opacity-20 opacity-0 hover:opacity-100 transition-opacity"></div>
          </div>
          {PHOTOS.filter((_, i) => i >= 1 && i < 5).map((item, index) => (
            <div
              key={index}
              className={`relative rounded-md sm:rounded-xl overflow-hidden ${
                index >= 3 ? 'hidden sm:block' : ''
              }`}
            >
              <div className="aspect-w-4 aspect-h-3 sm:aspect-w-6 sm:aspect-h-5">
                <Image
                  fill
                  className="object-cover rounded-md sm:rounded-xl "
                  src={item || ''}
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
      </header>

      {/* MAIN */}
      <main className=" relative z-10 mt-11 flex flex-col lg:flex-row ">
        {/* CONTENT */}
        <div className="w-full lg:w-3/5 xl:w-2/3 space-y-8 lg:space-y-10 lg:pr-10">
          {renderSection1()}
          {renderSection2()}
          {renderSection3()}
          {renderSection4()}
          <SectionDateRange />
          {renderSection5()}
          {renderSection6()}
          {renderSection7()}
          {renderSection8()}
        </div>

        {/* SIDEBAR */}
        <div className="flex-grow mt-14 lg:mt-0">
          <div className="top-28">{renderSidebar()}</div>
        </div>
      </main>
    </div>
  );
};

export default ListingStayDetailPage;
