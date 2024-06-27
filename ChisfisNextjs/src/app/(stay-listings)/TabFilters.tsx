"use client";

import React, { Dispatch, Fragment, SetStateAction, useState } from "react";
import { Popover, Transition } from "@headlessui/react";
import ButtonPrimary from "@/shared/ButtonPrimary";
import ButtonThird from "@/shared/ButtonThird";
import ButtonClose from "@/shared/ButtonClose";
import Slider from "rc-slider";
import convertNumbThousand from "@/utils/convertNumbThousand";
import {
  SvgAir,
  SvgBBQ,
  SvgExercise,
  SvgFire,
  SvgParking,
  SvgPatio,
  SvgPatioAir,
  SvgPool,
  SvgShower,
  SvgTub,
  SvgTv,
  SvgWashing,
  SvgWifi,
  SvgWorkspaces,
} from "@/shared/TabFilterSvgs";

interface TabFiltersProps {
  setMap: Dispatch<SetStateAction<boolean>>;
}

interface Filter {
  name: string;
  defaultChecked?: boolean;
  svg?: () => JSX.Element;
}

type TypeDropOffLocationHourlyType =
  | "Free Cancelation"
  | "Pet Lover"
  | "Single"
  | "Couples"
  | "Dancer"
  | "Foot Baller"
  | "Student"
  | "Professional";
const tabs: TypeDropOffLocationHourlyType[] = [
  "Free Cancelation",
  "Pet Lover",
  "Single",
  "Couples",
  "Dancer",
  "Foot Baller",
  "Student",
  "Professional",
];
const RenderRadioBtn = () => {
  const [dropOffLocationType, setDropOffLocationType] =
    useState<TypeDropOffLocationHourlyType>();
  return (
    <div className="py-5 pl-4 flex flex-row flex-wrap max-[906px]:hidden">
      {tabs.map((tab) => {
        return (
          <div
          key={tab}
            className={`py-2.5 xl:mr-3 min-[1035px]:px-2.5 md:px-1 flex items-center rounded-full font-medium text-xs cursor-pointer my-1 md:mr-1 ${
              dropOffLocationType === tab
                ? "bg-violet shadow-black/10 shadow-lg text-white "
                : "border bg-white text-black border-neutral-300"
            }`}
            onClick={(e) => setDropOffLocationType(tab)}
          >
            {tab}
          </div>
        );
      })}
    </div>
  );
};

const TabFilters: React.FC<TabFiltersProps> = ({ setMap }) => {
  const [rangePrices, setRangePrices] = useState([0, 0]);
  const [map, localSetMap] = useState(true);

  const handleMapToggle = () => {
    localSetMap(!map);
    setMap(!map);
  };

  const renderFilterSvg = () => {
    return (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="11"
        height="11"
        viewBox="0 0 11 11"
        fill="none"
        className="mr-2"
      >
        <path
          d="M9.6163 0.625H1.38407C0.82725 0.625 0.548396 1.29821 0.942124 1.69194L4.06712 4.81694C4.18433 4.93415 4.25018 5.09312 4.25018 5.25888V7.8125C4.25018 8.00922 4.3428 8.19447 4.50018 8.3125L6.25018 9.625C6.45619 9.77951 6.75018 9.63251 6.75018 9.375V5.25888C6.75018 5.09312 6.81603 4.93415 6.93324 4.81694L10.0582 1.69194C10.452 1.29821 10.1731 0.625 9.6163 0.625Z"
          stroke="#272D37"
          strokeWidth="1.2"
          strokeLinecap="round"
        />
      </svg>
    );
  };

  const renderMapSvg = () => {
    return (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="15"
        height="15"
        viewBox="0 0 21 21"
        fill="none"
        className="mr-2"
      >
        <path
          d="M8 7.16577V17.1658M13 3.83244V13.8324M4.36682 4.13812L6.93303 6.27663C7.5511 6.79169 8.4489 6.79169 9.06697 6.27663L11.933 3.88825C12.5511 3.37319 13.4489 3.37319 14.067 3.88825L17.4003 6.66603C17.7803 6.98269 18 7.45176 18 7.9464V16.2199C18 16.9264 17.176 17.3124 16.6332 16.8601L14.067 14.7216C13.4489 14.2065 12.5511 14.2065 11.933 14.7216L9.06697 17.11C8.4489 17.625 7.5511 17.625 6.93303 17.11L3.59969 14.3322C3.2197 14.0155 3 13.5464 3 13.0518V4.77831C3 4.07178 3.82405 3.68581 4.36682 4.13812Z"
          stroke={map === true ? "white " : "black"}
          strokeWidth="1.67"
          strokeLinecap="round"
        />
      </svg>
    );
  };

  const renderXClear = (f: any) => {
    return (
      <span
        onClick={() => {
          close;
          f();
        }}
        className="w-4 h-4 rounded-full bg-primary-500 text-white flex items-center justify-center ml-3 cursor-pointer"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-3 w-3"
          viewBox="0 0 20 20"
          fill="currentColor"
        >
          <path
            fillRule="evenodd"
            d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
            clipRule="evenodd"
          />
        </svg>
      </span>
    );
  };

  const renderTabsPriceRage = () => {
    const clearPrices = () => {
      setRangePrices([0, 0]);
    };
    return (
      <Popover className="relative min-[907px]:-mr-8">
        {({ open, close }) => (
          <>
            <Popover.Button
              className={`flex items-center justify-center py-1.5 md:py-0.5 xl:px-2 md:px-1 px-4
              my-1 xl:mr-12 sm:mr-3 text-sm rounded-full border border-neutral-300 bg-white text-black font-medium focus:outline-none `}
            >
              <span className="md:py-1.5 lg:px-2 flex flex-row">
                {rangePrices[1] !== null && rangePrices[1] !== 0
                  ? `$${convertNumbThousand(rangePrices[0])} - $${convertNumbThousand(rangePrices[1])}`
                  : "Price"}
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="21"
                  height="21"
                  viewBox="0 0 21 21"
                  fill="none"
                  className="ml-1"
                >
                  <path
                    d="M15.5 8.83398L11.0893 13.2447C10.7638 13.5702 10.2362 13.5702 9.91074 13.2447L5.5 8.83398"
                    stroke="#272D37"
                    strokeWidth="1.67"
                    strokeLinecap="round"
                  />
                </svg>
              </span>
              {rangePrices[1] !== null && rangePrices[1] !== 0
                ? renderXClear(clearPrices)
                : null}
            </Popover.Button>
            <Transition
              as={Fragment}
              enter="transition ease-out duration-200"
              enterFrom="opacity-0 translate-y-1"
              enterTo="opacity-100 translate-y-0"
              leave="transition ease-in duration-150"
              leaveFrom="opacity-100 translate-y-0"
              leaveTo="opacity-0 translate-y-1"
            >
              <Popover.Panel className="absolute z-10 w-screen max-w-sm px-4 mt-3 left-0 sm:px-0 ">
                <div className="overflow-hidden rounded-2xl shadow-xl bg-white border border-neutral-200">
                  <div className="relative flex flex-col px-5 py-6 space-y-8">
                    <div className="space-y-5">
                      <span className="font-medium">Price per day</span>
                      <Slider
                        range
                        className="text-red-400 "
                        min={0}
                        max={2000}
                        defaultValue={[rangePrices[0], rangePrices[1]]}
                        allowCross={false}
                        onChange={(e) => setRangePrices(e as number[])}
                      />
                    </div>

                    <div className="flex justify-between space-x-5">
                      <div>
                        <label
                          htmlFor="minPrice"
                          className="block text-sm font-medium text-neutral-700 dark:text-neutral-300"
                        >
                          Min price
                        </label>
                        <div className="mt-1 relative rounded-md">
                          <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                            <span className="text-neutral-500 sm:text-sm">
                              $
                            </span>
                          </div>
                          <input
                            type="text"
                            name="minPrice"
                            disabled
                            id="minPrice"
                            className="focus:ring-indigo-500 focus:border-indigo-500 block w-full pl-7 pr-3 sm:text-sm border-neutral-200 rounded-full text-neutral-900"
                            value={rangePrices[0]}
                          />
                        </div>
                      </div>
                      <div>
                        <label
                          htmlFor="maxPrice"
                          className="block text-sm font-medium text-neutral-700 dark:text-neutral-300"
                        >
                          Max price
                        </label>
                        <div className="mt-1 relative rounded-md">
                          <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                            <span className="text-neutral-500 sm:text-sm">
                              $
                            </span>
                          </div>
                          <input
                            type="text"
                            disabled
                            name="maxPrice"
                            id="maxPrice"
                            className="focus:ring-indigo-500 focus:border-indigo-500 block w-full pl-7 pr-3 sm:text-sm border-neutral-200 rounded-full text-neutral-900"
                            value={rangePrices[1]}
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="p-5 bg-neutral-50 dark:bg-neutral-900 dark:border-t dark:border-neutral-800 flex items-center justify-between">
                    <ButtonThird
                      onClick={() => {
                        close;
                        clearPrices();
                      }}
                      sizeClass="px-4 py-2 sm:px-5"
                    >
                      Clear
                    </ButtonThird>
                    <ButtonPrimary
                      onClick={close}
                      sizeClass="px-4 py-2 sm:px-5"
                    >
                      Apply
                    </ButtonPrimary>
                  </div>
                </div>
              </Popover.Panel>
            </Transition>
          </>
        )}
      </Popover>
    );
  };

  const RenderTabMoreFilter = () => {
    const toggleDefaultChecked = (index: number, filterSet: number) => {
      let updatedFilters;
      switch (filterSet) {
        case 1:
          updatedFilters = [...moreFilter1];
          updatedFilters[index].defaultChecked =
            !updatedFilters[index].defaultChecked;
          setMoreFilter1(updatedFilters);
          break;
        default:
          updatedFilters = [...moreFilter1];
          updatedFilters[index].defaultChecked =
            !updatedFilters[index].defaultChecked;
          setMoreFilter1(updatedFilters);
          break;
      }
    };

    const [moreFilter1, setMoreFilter1] = useState([
      {
        name: "Free parking on premise",
        defaultChecked: false,
        svg: SvgParking,
      },
      { name: "TV", defaultChecked: false, svg: SvgTv },
      { name: "Wifi", defaultChecked: false, svg: SvgWifi },
      {
        name: "Dedicated workspace",
        defaultChecked: false,
        svg: SvgWorkspaces,
      },
      { name: "Air conditioning", defaultChecked: false, svg: SvgAir },
      { name: "Washing Machine", defaultChecked: false, svg: SvgWashing },
      { name: "Exercise Equipment", defaultChecked: false, svg: SvgExercise },
      { name: "Patio", defaultChecked: false, svg: SvgPatio },
      { name: "BBQ grill", defaultChecked: false, svg: SvgBBQ },
      { name: "Outdoor shower", defaultChecked: false, svg: SvgShower },
      { name: "Pool", defaultChecked: false, svg: SvgPool },
      { name: "Hot tub", defaultChecked: false, svg: SvgTub },
      { name: "Patio", defaultChecked: false, svg: SvgPatioAir },
      { name: "Fire Fit", defaultChecked: false, svg: SvgFire },
    ]);

    const countCheckedFilters = (filterArray: Filter[]) => {
      return filterArray.filter((item) => item.defaultChecked === true).length;
    };

    const clearAllFilters = () => {
      setMoreFilter1((prevFilters) =>
        prevFilters.map((filter) => ({ ...filter, defaultChecked: false })),
      );
      setFilters(0);
    };

    const countCheckedFiltersMoreFilter = countCheckedFilters(moreFilter1);
    const [dayOrHourly, setDayOrHourly] = useState(false);
    const [rangePricesDay, setRangePricesDay] = useState([0, 0]);
    const [rangePricesHourly, setRangePricesHourly] = useState([0, 0]);
    const [filters, setFilters] = useState(0);
    const [filterPrices, setFilterPrices] = useState("");

    const renderMoreFilterItemDeskopt = (
      data: {
        name: string;
        defaultChecked?: boolean;
      }[],
      filterSet: number,
    ) => {
      return (
        <div className="py-5 pl-4 flex flex-row flex-wrap">
          {moreFilter1.map((tab, index) => {
            return (
              <div
                key="filter"
                className={`py-2.5 xl:pr-5 px-2.5 md:px-2 flex items-center rounded-full font-medium text-xs cursor-pointer my-1 md:mr-2 ${
                  tab.defaultChecked === true
                    ? "bg-violet shadow-black/10 shadow-lg text-white "
                    : "border bg-white text-black border-neutral-300"
                }`}
                onClick={(e) => toggleDefaultChecked(index, filterSet)}
              >
                {tab.svg()}
                {tab.name}
              </div>
            );
          })}
        </div>
      );
    };

    return (
      <div>
        <Popover className={`flex relative`}>
          {({ open, close }) => (
            <>
              <Popover.Button
                className={`md:flex hidden py-1.5 lg:px-2 md:px-1
            md:-ml-2 my-1 xl:mr-3 md:text-[12px] rounded-full border border-neutral-300 bg-white text-black font-medium focus:outline-none cursor-pointer" : ""
            }`}
              >
                {filters !== 0 ? (
                  <>
                    <span className="flex flex-row items-center lg:px-2">
                      {renderFilterSvg()}Filter ({filters})
                    </span>
                    {renderXClear(clearAllFilters)}
                  </>
                ) : (
                  <span className="flex flex-row items-center lg:px-2">
                    {renderFilterSvg()}Filter{" "}
                  </span>
                )}
              </Popover.Button>
              {open && (
                <div className="h-8 hidden absolute self-center top-1/2 -translate-y-1/2 z-0 -inset-x-0.5 bg-white"></div>
              )}
              <Transition
                as={Fragment}
                enter="transition ease-out duration-200"
                enterFrom="opacity-0 translate-y-1"
                enterTo="opacity-100 translate-y-0"
                leave="transition ease-in duration-150"
                leaveFrom="opacity-100 translate-y-0"
                leaveTo="opacity-0 translate-y-1"
              >
                <Popover.Panel className="absolute min-[907px]:right-0 z-10 w-full min-[908px]:min-w-[35vw] max-[907px]:min-w-[55vw] max-w-sm bg-white border border-gray-200 top-full mt-3 rounded-xl shadow-xl">
                  <div className="border-b border-gray-200 py-3 pl-8">
                    <h1>Filter</h1>
                    <span className="absolute right-3 top-2">
                      <ButtonClose
                        onClick={() => {
                          close();
                          clearAllFilters();
                        }}
                      />
                    </span>
                  </div>
                  <div className="flex-grow overflow-y-auto px-4">
                    <div className="py-7">
                      <h3 className="text-sm text-[#919BA7] font-normal ml-2">
                        Pricing Limit
                      </h3>
                      <div className="mt-2 relative">
                        <div className="flex mb-2 ml-4">
                          <div
                            className={`py-2.5 xl:mr-3 min-[1035px]:px-2.5 md:px-1 flex items-center rounded-full font-medium text-xs cursor-pointer my-1 md:mr-1 ${
                              dayOrHourly === false
                                ? "bg-violet shadow-black/10 shadow-lg text-white "
                                : "border bg-white text-black border-neutral-300"
                            }`}
                            onClick={(e) => setDayOrHourly(!dayOrHourly)}
                          >
                            Day Basis
                          </div>
                          <div
                            className={`py-2.5 xl:mr-3 min-[1035px]:px-2.5 md:px-1 flex items-center rounded-full font-medium text-xs cursor-pointer my-1 md:mr-1 ${
                              dayOrHourly === true
                                ? "bg-violet shadow-black/10 shadow-lg text-white "
                                : "border bg-white text-black border-neutral-300"
                            }`}
                            onClick={(e) => setDayOrHourly(!dayOrHourly)}
                          >
                            Hourly Basis
                          </div>
                        </div>
                        <div className="relative flex flex-col space-y-8">
                          <div className="space-y-5 px-4">
                            <Slider
                              range
                              className="text-black flex flex-row"
                              min={0}
                              max={2000}
                              defaultValue={[0, 1000]}
                              value={
                                dayOrHourly ? rangePricesHourly : rangePricesDay
                              }
                              allowCross={false}
                              styles={{
                                track: { background: "#574EFA" },
                                handle: {
                                  background: "#574EFA",
                                  opacity: 1,
                                  border: "1px solid white",
                                },
                              }}
                              onChange={(e) =>
                                dayOrHourly === false
                                  ? setRangePricesDay(e as number[])
                                  : setRangePricesHourly(e as number[])
                              }
                            />
                          </div>
                          <div className="flex justify-between space-x-5 ml-2">
                            <div>
                              <label
                                htmlFor="minPrice"
                                className="block text-sm font-medium text-neutral-700 dark:text-neutral-300"
                              >
                                Min price
                              </label>
                              <div className="mt-1 relative rounded-md">
                                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                                  <span className="text-neutral-500 sm:text-sm">
                                    $
                                  </span>
                                </div>
                                <input
                                  type="text"
                                  name="minPrice"
                                  disabled
                                  id="minPrice"
                                  className="focus:ring-indigo-500 focus:border-indigo-500 block w-full pl-7 pr-3 sm:text-sm border-neutral-200 rounded-full text-neutral-900"
                                  value={
                                    dayOrHourly === false
                                      ? rangePricesDay[0]
                                      : rangePricesHourly[0]
                                  }
                                />
                              </div>
                            </div>
                            <div>
                              <label
                                htmlFor="maxPrice"
                                className="block text-sm font-medium text-neutral-700 dark:text-neutral-300"
                              >
                                Max price
                              </label>
                              <div className="mt-1 relative rounded-md">
                                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                                  <span className="text-neutral-500 sm:text-sm">
                                    $
                                  </span>
                                </div>
                                <input
                                  type="text"
                                  disabled
                                  name="maxPrice"
                                  id="maxPrice"
                                  className="focus:ring-indigo-500 focus:border-indigo-500 block w-full pl-7 pr-3 sm:text-sm border-neutral-200 rounded-full text-neutral-900"
                                  value={
                                    dayOrHourly === false
                                      ? rangePricesDay[1]
                                      : rangePricesHourly[1]
                                  }
                                />
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <h3 className="text-sm text-[#919BA7] font-normal ml-2">
                      Pricing
                    </h3>
                    <div className="flex ml-4">
                      <div
                        className={`py-2.5 xl:mr-3 min-[1035px]:px-2.5 md:px-1 flex items-center rounded-full font-medium text-xs cursor-pointer my-1 md:mr-1 ${
                          filterPrices === "Highest Price"
                            ? "bg-violet shadow-black/10 shadow-lg text-white "
                            : "border bg-white text-black border-neutral-300"
                        }`}
                        onClick={(e) => setFilterPrices("Highest Price")}
                      >
                        Highest Price
                      </div>
                      <div
                        className={`py-2.5 xl:mr-3 min-[1035px]:px-2.5 md:px-1 flex items-center rounded-full font-medium text-xs cursor-pointer my-1 md:mr-1 ${
                          filterPrices === "Lowest Price"
                            ? "bg-violet shadow-black/10 shadow-lg text-white "
                            : "border bg-white text-black border-neutral-300"
                        }`}
                        onClick={(e) => setFilterPrices("Lowest Price")}
                      >
                        Lowest Price
                      </div>
                      <div
                        className={`py-2.5 xl:mr-3 min-[1035px]:px-2.5 md:px-1 flex items-center rounded-full font-medium text-xs cursor-pointer my-1 md:mr-1 ${
                          filterPrices === "Recommended"
                            ? "bg-violet shadow-black/10 shadow-lg text-white "
                            : "border bg-white text-black border-neutral-300"
                        }`}
                        onClick={(e) => setFilterPrices("Recommended")}
                      >
                        Recommended
                      </div>
                    </div>
                    <div className="divide-y divide-neutral-200">
                      <div className="py-7">
                        <h3 className="text-sm text-[#919BA7] font-normal ml-2">
                          Any standout amenities?
                        </h3>
                        <div className="relative ">
                          {renderMoreFilterItemDeskopt(moreFilter1, 1)}
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="p-4 sm:p-6 flex-shrink-0 border-t border-gray-200 flex items-center justify-between">
                    <ButtonThird
                      onClick={() => {
                        clearAllFilters();
                        close();
                      }}
                      sizeClass="px-4 py-2 sm:px-5"
                    >
                      Clear
                    </ButtonThird>
                    <ButtonPrimary
                      onClick={() => {
                        close();
                        setFilters(countCheckedFiltersMoreFilter);
                      }}
                      sizeClass="px-4 py-2 sm:px-5"
                    >
                      Apply
                    </ButtonPrimary>
                  </div>
                </Popover.Panel>
              </Transition>
            </>
          )}
        </Popover>
      </div>
    );
  };

  const RenderTabMoreFilterMobile = () => {
    const toggleDefaultChecked = (index: number, filterSet: number) => {
      let updatedFilters;
      switch (filterSet) {
        case 1:
          updatedFilters = [...moreFilter1];
          updatedFilters[index].defaultChecked =
            !updatedFilters[index].defaultChecked;
          setMoreFilter1(updatedFilters);
          break;
        default:
          updatedFilters = [...moreFilter1];
          updatedFilters[index].defaultChecked =
            !updatedFilters[index].defaultChecked;
          setMoreFilter1(updatedFilters);
          break;
      }
    };

    const [moreFilter1, setMoreFilter1] = useState([
      {
        name: "Free parking on premise",
        defaultChecked: false,
        svg: SvgParking,
      },
      { name: "TV", defaultChecked: false, svg: SvgTv },
      { name: "Wifi", defaultChecked: false, svg: SvgWifi },
      {
        name: "Dedicated workspace",
        defaultChecked: false,
        svg: SvgWorkspaces,
      },
      { name: "Air conditioning", defaultChecked: false, svg: SvgAir },
      { name: "Washing Machine", defaultChecked: false, svg: SvgWashing },
      { name: "Exercise Equipment", defaultChecked: false, svg: SvgExercise },
      { name: "Patio", defaultChecked: false, svg: SvgPatio },
      { name: "BBQ grill", defaultChecked: false, svg: SvgBBQ },
      { name: "Outdoor shower", defaultChecked: false, svg: SvgShower },
      { name: "Pool", defaultChecked: false, svg: SvgPool },
      { name: "Hot tub", defaultChecked: false, svg: SvgTub },
      { name: "Patio", defaultChecked: false, svg: SvgPatioAir },
      { name: "Fire Fit", defaultChecked: false, svg: SvgFire },
    ]);

    const countCheckedFilters = (filterArray: Filter[]) => {
      return filterArray.filter((item) => item.defaultChecked === true).length;
    };

    const clearAllFilters = () => {
      setMoreFilter1((prevFilters) =>
        prevFilters.map((filter) => ({ ...filter, defaultChecked: false })),
      );
      setFilters(0);
    };

    const countCheckedFiltersMoreFilter = countCheckedFilters(moreFilter1);
    const [dayOrHourly, setDayOrHourly] = useState(false);
    const [rangePricesDay, setRangePricesDay] = useState([0, 0]);
    const [rangePricesHourly, setRangePricesHourly] = useState([0, 0]);
    const [filters, setFilters] = useState(0);
    const [filterPrices, setFilterPrices] = useState("");

    const renderMoreFilterItemDeskopt = (
      data: {
        name: string;
        defaultChecked?: boolean;
      }[],
      filterSet: number,
    ) => {
      return (
        <div className="py-5 pl-4 flex flex-row flex-wrap">
          {moreFilter1.map((tab, index) => {
            return (
              <div 
              key="filter"
                className={`py-2.5 mx-1 xl:pr-5 px-2.5 md:px-2 flex items-center rounded-full font-medium text-xs cursor-pointer my-1 md:mr-2 ${
                  tab.defaultChecked === true
                    ? "bg-violet shadow-black/10 shadow-lg text-white "
                    : "border bg-white text-black border-neutral-300"
                }`}
                onClick={(e) => toggleDefaultChecked(index, filterSet)}
              >
                {tab.svg()}
                {tab.name}
              </div>
            );
          })}
        </div>
      );
    };

    return (
      <div className="mx-2">
        <Popover className={`flex relative`}>
          {({ open, close }) => (
            <>
              <Popover.Button
                className={`flex py-[5px] px-2 lg:px-2 md:px-1
            md:-ml-2 my-1 xl:mr-3 md:text-[12px] rounded-full border border-neutral-300 bg-white text-black font-medium focus:outline-none cursor-pointer" : ""
            }`}
              >
                {filters !== 0 ? (
                  <>
                    <span className="flex flex-row items-center lg:px-2">
                      {renderFilterSvg()}Filter ({filters})
                    </span>
                    {renderXClear(clearAllFilters)}
                  </>
                ) : (
                  <span className="flex flex-row items-center lg:px-2">
                    {renderFilterSvg()}Filter{" "}
                  </span>
                )}
              </Popover.Button>
              {open && (
                <div className="h-8 hidden absolute self-center top-1/2 -translate-y-1/2 z-0 -inset-x-0.5 bg-white"></div>
              )}
              <Transition
                as={Fragment}
                enter="transition ease-out duration-200"
                enterFrom="opacity-0 translate-y-1"
                enterTo="opacity-100 translate-y-0"
                leave="transition ease-in duration-150"
                leaveFrom="opacity-100 translate-y-0"
                leaveTo="opacity-0 translate-y-1"
              >
                <Popover.Panel className="absolute min-[907px]:right-0 min-[460px]:left-[-18vw] min-[435px]:left-[-20vw] min-[362px]:left-[-24vw] left-[-27vw] z-10 w-full min-w-[80vw] sm:min-w-[55vw] bg-white border border-gray-200 top-full mt-3 rounded-xl shadow-xl">
                  <div className="border-b border-gray-200 py-3 pl-8">
                    <h1>Filter</h1>
                    <span className="absolute right-3 top-2">
                      <ButtonClose
                        onClick={() => {
                          close();
                          clearAllFilters();
                        }}
                      />
                    </span>
                  </div>
                  <div className="flex-grow overflow-y-auto px-4">
                    <div className="py-7">
                      <h3 className="text-sm text-[#919BA7] font-normal ml-2">
                        Pricing Limit
                      </h3>
                      <div className="mt-2 relative">
                        <div className="flex mb-2 ml-4">
                          <div
                            className={`py-2.5 px-2 mx-2 xl:mr-3 min-[1035px]:px-2.5 md:px-1 flex items-center rounded-full font-medium text-xs cursor-pointer my-1 md:mr-1 ${
                              dayOrHourly === false
                                ? "bg-violet shadow-black/10 shadow-lg text-white "
                                : "border bg-white text-black border-neutral-300"
                            }`}
                            onClick={(e) => setDayOrHourly(!dayOrHourly)}
                          >
                            Day Basis
                          </div>
                          <div
                            className={`py-2.5 px-2 xl:mr-3 min-[1035px]:px-2.5 md:px-1 flex items-center rounded-full font-medium text-xs cursor-pointer my-1 md:mr-1 ${
                              dayOrHourly === true
                                ? "bg-violet shadow-black/10 shadow-lg text-white "
                                : "border bg-white text-black border-neutral-300"
                            }`}
                            onClick={(e) => setDayOrHourly(!dayOrHourly)}
                          >
                            Hourly Basis
                          </div>
                        </div>
                        <div className="relative flex flex-col space-y-8">
                          <div className="space-y-5 px-4">
                            <Slider
                              range
                              className="text-black flex flex-row"
                              min={0}
                              max={2000}
                              defaultValue={[0, 1000]}
                              value={
                                dayOrHourly ? rangePricesHourly : rangePricesDay
                              }
                              allowCross={false}
                              styles={{
                                track: { background: "#574EFA" },
                                handle: {
                                  background: "#574EFA",
                                  opacity: 1,
                                  border: "1px solid white",
                                },
                              }}
                              onChange={(e) =>
                                dayOrHourly === false
                                  ? setRangePricesDay(e as number[])
                                  : setRangePricesHourly(e as number[])
                              }
                            />
                          </div>
                          <div className="flex justify-between space-x-5 ml-2">
                            <div>
                              <label
                                htmlFor="minPrice"
                                className="block text-sm font-medium text-neutral-700 dark:text-neutral-300"
                              >
                                Min price
                              </label>
                              <div className="mt-1 relative rounded-md">
                                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                                  <span className="text-neutral-500 sm:text-sm">
                                    $
                                  </span>
                                </div>
                                <input
                                  type="text"
                                  name="minPrice"
                                  disabled
                                  id="minPrice"
                                  className="focus:ring-indigo-500 focus:border-indigo-500 block w-full pl-7 pr-3 sm:text-sm border-neutral-200 rounded-full text-neutral-900"
                                  value={
                                    dayOrHourly === false
                                      ? rangePricesDay[0]
                                      : rangePricesHourly[0]
                                  }
                                />
                              </div>
                            </div>
                            <div>
                              <label
                                htmlFor="maxPrice"
                                className="block text-sm font-medium text-neutral-700"
                              >
                                Max price
                              </label>
                              <div className="mt-1 relative rounded-md">
                                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                                  <span className="text-neutral-500 sm:text-sm">
                                    $
                                  </span>
                                </div>
                                <input
                                  type="text"
                                  disabled
                                  name="maxPrice"
                                  id="maxPrice"
                                  className="focus:ring-indigo-500 focus:border-indigo-500 block w-full pl-7 pr-3 sm:text-sm border-neutral-200 rounded-full text-neutral-900"
                                  value={
                                    dayOrHourly === false
                                      ? rangePricesDay[1]
                                      : rangePricesHourly[1]
                                  }
                                />
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <h3 className="text-sm text-[#919BA7] font-normal ml-2">
                      Pricing
                    </h3>
                    <div className="flex ml-4">
                      <div
                        className={`py-2.5 px-2 xl:mr-3 min-[1035px]:px-2.5 md:px-1 flex items-center rounded-full font-medium text-xs cursor-pointer my-1 md:mr-1 ${
                          filterPrices === "Highest Price"
                            ? "bg-violet shadow-black/10 shadow-lg text-white "
                            : "border bg-white text-black border-neutral-300"
                        }`}
                        onClick={(e) => setFilterPrices("Highest Price")}
                      >
                        Highest Price
                      </div>
                      <div
                        className={`py-2.5 px-2 mx-2 xl:mr-3 min-[1035px]:px-2.5 md:px-1 flex items-center rounded-full font-medium text-xs cursor-pointer my-1 md:mr-1 ${
                          filterPrices === "Lowest Price"
                            ? "bg-violet shadow-black/10 shadow-lg text-white "
                            : "border bg-white text-black border-neutral-300"
                        }`}
                        onClick={(e) => setFilterPrices("Lowest Price")}
                      >
                        Lowest Price
                      </div>
                      <div
                        className={`py-2.5 px-2 xl:mr-3 min-[1035px]:px-2.5 md:px-1 flex items-center rounded-full font-medium text-xs cursor-pointer my-1 md:mr-1 ${
                          filterPrices === "Recommended"
                            ? "bg-violet shadow-black/10 shadow-lg text-white "
                            : "border bg-white text-black border-neutral-300"
                        }`}
                        onClick={(e) => setFilterPrices("Recommended")}
                      >
                        Recommended
                      </div>
                    </div>
                    <div className="divide-y divide-neutral-200">
                      <div className="py-7">
                        <h3 className="text-sm text-[#919BA7] font-normal ml-2">
                          Any standout amenities?
                        </h3>
                        <div className="relative ">
                          {renderMoreFilterItemDeskopt(moreFilter1, 1)}
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="p-4 sm:p-6 flex-shrink-0 border-t border-gray-200 flex items-center justify-between">
                    <ButtonThird
                      onClick={() => {
                        clearAllFilters();
                        close();
                      }}
                      sizeClass="px-4 py-2 sm:px-5"
                    >
                      Clear
                    </ButtonThird>
                    <ButtonPrimary
                      onClick={() => {
                        close();
                        setFilters(countCheckedFiltersMoreFilter);
                      }}
                      sizeClass="px-4 py-2 sm:px-5"
                    >
                      Apply
                    </ButtonPrimary>
                  </div>
                </Popover.Panel>
              </Transition>
            </>
          )}
        </Popover>
      </div>
    );
  };

  return (
    <div className="flex space-x-2 md:mt-0 mt-4 justify-start">
      <div className="hidden md:flex justify-start items-center lg:ml-8 space-x-2 w-[90vw]">
        {renderTabsPriceRage()}
        {RenderRadioBtn()}
        {RenderTabMoreFilter()}
        <div
          className={`py-1.5 md:py-2 lg:px-2.5 flex items-center rounded-full font-medium cursor-pointer text-sm my-1 mr-8 ${
            map === true
              ? "bg-violet shadow-black/10 shadow-lg text-white "
              : "border bg-white text-black border-neutral-300"
          }`}
          onClick={handleMapToggle}
        >
          {renderMapSvg()} Show in map
        </div>
      </div>
      <div className="flex md:hidden">
        {renderTabsPriceRage()}
        {RenderTabMoreFilterMobile()}
        <div
          className={`py-1 px-4 text-sm md:hidden flex items-center rounded-full font-medium cursor-pointer my-1 ${
            map === true
              ? "bg-violet shadow-black/10 shadow-lg text-white "
              : "border bg-white text-black border-neutral-300"
          }`}
          onClick={handleMapToggle}
        >
          {renderMapSvg()} Show in map
        </div>
      </div>
    </div>
  );
};

export default TabFilters;
