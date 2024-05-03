import React, { useRef } from "react";
import SectionHero from "@/app/(server-components)/SectionHero";
import { TaxonomyType } from "@/data/types";
import SectionSliderNewCategories from "@/components/SectionSliderNewCategories";
import SectionOurFeatures from "@/components/SectionOurFeatures";
import BackgroundSection from "@/components/BackgroundSection";
import SectionGridFeaturePlaces from "@/components/SectionGridFeaturePlaces";
import SectionSliderAuthorBox from "@/components/SectionSliderAuthorBox";
import SectionBecomeAnAuthor from "@/components/SectionBecomeAnAuthor";
import SectionClientSay from "@/components/SectionClientSay";
import SectionDiscoverPerfectRoomStay from "@/components/SectionDiscoverPerfectRoomStay";
import SectionSubscribe from "@/components/SectionSubscribe";
import SectionSliderFeaturePlaces from "@/components/SectionSliderFeaturePlaces";
import SectionClientSayMobile from "@/components/SectionClientSayMobile";
import SectionSliderAuthorBoxMobile from "@/components/SectionSliderAuthorBoxMobile";
import SectionSliderNewCategoriesMobile from "@/components/SectionSliderNewCategoriesMobile";
import adventure from "@/images/adventure.jpg";
import roomStaysImg from "@/images/room-stays.jpg";
import timeBasedImg from "@/images/wellness-fitness.jpg";
import musicalInstrumentsImg from "@/images/musicalInstruments.jpg";
import FrequentlyAskedQuestion from "@/components/FrequentlyAskedQuestions";
import FrequentlyAskedQuestionsMobile from "@/components/FrequentlyAskedQuestionsMobile";
import BrowseByDestination from "@/components/BrowseByDestination";
import Hero from "@/components/Hero";
import SectionSliderHourlyPlaces from "@/components/SectionSliderHourlyPlaces";
import heroMobile from "@/images/mobile/hero.svg";
import { FaCarAlt } from "react-icons/fa";
import { MdOutlineElectricCar } from "react-icons/md";
import { FaRestroom } from "react-icons/fa";
import { SiHomeassistantcommunitystore } from "react-icons/si";
import { GoDotFill } from "react-icons/go";
import connector from "@/images/browseByCategories/connector.png";
import Image from "next/image";
import BrowseByDestinationMobile from "@/components/BrowseByDestinationMobile/BrowseByDestinationMobile";
import TImeBasedMobile from "@/components/TimeBasedMobile/TImeBasedMobile";

const DEMO_CATS: TaxonomyType[] = [
  {
    id: "1",
    href: "/listing-stay-map",
    name: "Room Stays",
    taxonomy: "category",
    count: 1882,
    thumbnail: roomStaysImg.src,
  },
  {
    id: "2",
    href: "/listing-stay-map",
    name: "Time Based",
    taxonomy: "category",
    count: 1145,
    thumbnail: timeBasedImg.src,
  },
  {
    id: "3",
    href: "/listing-stay-map",
    name: "Hourly Rental Gears",
    taxonomy: "category",
    count: 4578,
    thumbnail: musicalInstrumentsImg.src,
  },
  {
    id: "4",
    href: "/listing-stay-map",
    name: "Experiences",
    taxonomy: "category",
    count: 188288,
    thumbnail: adventure.src,
  },
  {
    id: "5",
    href: "/listing-stay-map",
    name: "Tokyo",
    taxonomy: "category",
    count: 188288,
    thumbnail:
      "https://images.pexels.com/photos/4151484/pexels-photo-4151484.jpeg?auto=compress&cs=tinysrgb&dpr=3&h=750&w=1260",
  },
  {
    id: "6",
    href: "/listing-stay-map",
    name: "Maldives",
    taxonomy: "category",
    count: 188288,
    thumbnail:
      "https://images.pexels.com/photos/3250613/pexels-photo-3250613.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
  },
  {
    id: "7",
    href: "/listing-stay-map",
    name: "Italy",
    taxonomy: "category",
    count: 188288,
    thumbnail:
      "https://images.pexels.com/photos/7740160/pexels-photo-7740160.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
  },
];

const DEMO_CATS_2: TaxonomyType[] = [
  {
    id: "1",
    href: "/listing-stay-map",
    name: "Enjoy the great cold",
    taxonomy: "category",
    count: 188288,
    thumbnail:
      "https://images.pexels.com/photos/5764100/pexels-photo-5764100.jpeg?auto=compress&cs=tinysrgb&dpr=3&h=750&w=1260",
  },
  {
    id: "2",
    href: "/listing-stay-map",
    name: "Sleep in a floating way",
    taxonomy: "category",
    count: 188288,
    thumbnail:
      "https://images.pexels.com/photos/2869499/pexels-photo-2869499.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
  },
  {
    id: "3",
    href: "/listing-stay-map",
    name: "In the billionaire's house",
    taxonomy: "category",
    count: 188288,
    thumbnail:
      "https://images.pexels.com/photos/7031413/pexels-photo-7031413.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
  },
  {
    id: "4",
    href: "/listing-stay-map",
    name: "Cool in the deep forest",
    taxonomy: "category",
    count: 188288,
    thumbnail:
      "https://images.pexels.com/photos/247532/pexels-photo-247532.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
  },
  {
    id: "5",
    href: "/listing-stay-map",
    name: "In the billionaire's house",
    taxonomy: "category",
    count: 188288,
    thumbnail:
      "https://images.pexels.com/photos/7031413/pexels-photo-7031413.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
  },
  {
    id: "6",
    href: "/listing-stay-map",
    name: "In the billionaire's house",
    taxonomy: "category",
    count: 188288,
    thumbnail:
      "https://images.pexels.com/photos/9828170/pexels-photo-9828170.jpeg?auto=compress&cs=tinysrgb&w=1600&lazy=load",
  },
  {
    id: "7",
    href: "/listing-stay-map",
    name: "Cool in the deep forest",
    taxonomy: "category",
    count: 188288,
    thumbnail:
      "https://images.pexels.com/photos/247532/pexels-photo-247532.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
  },
];

function PageHome() {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 3
  };
  return (
    <>
      {/* Web */}
      <main className="nc-PageHome sm:block hidden relative overflow-hidden">
        <div className="container relative space-y-10 mb-24 lg:space-y-28 lg:mb-28">
          <div className={`relative -ml-16 md:ml-0`}>
            <BackgroundSection className="bg-[#F6F4F6]" />
            {/* <Hero /> */}
            <SectionHero className="md:pt-10 lg:pt-16 lg:pb-16" />
          </div>
          <div className="relative py-2 md:py-8 bg-white rounded-[8px]">
            <BrowseByDestination />
          </div>
          {/* Time based for mobile */}
          <SectionSliderFeaturePlaces
            className="md:hidden block"
            itemPerRow={1}
          />
          <SectionSliderHourlyPlaces
            className="md:hidden block"
            itemPerRow={1}
          />
          {/* Time based for Web */}
          <div className="relative md:block hidden py-2 md:py-16 bg-white rounded-[8px]">
            <SectionGridFeaturePlaces
              cardType="card2"
              className="md:block hidden md:mt-16"
            />
          </div>
          <div className="relative md:block hidden py-2 md:py-16 bg-white rounded-[8px]">
            <SectionDiscoverPerfectRoomStay className="md:block hidden" />
          </div>
        </div>
        <div className="relative pb-8">
          <BackgroundSection />
          <SectionSubscribe />
        </div>
        <div className="md:mb-24 mb-8 ml-5 md:ml-0 pt-4  ">
          <FrequentlyAskedQuestion />
          <FrequentlyAskedQuestionsMobile />
        </div>
      </main>
      {/* Mobile */}
      <main className="sm:hidden block max-w-[430px]">
        {/* Section Hero Mobile */}
        <div className="bg-[#5527D7] pt-4 w-screen space-y-3 h-[760px]">
          {/* Search form Mobile */}
          <form className="h-fit mx-4 p-3 flex flex-col gap-6 rounded-lg bg-white">
            <div className="flex text-[#5B5B5B] flex-col h-[35px]">
              <label htmlFor="" className="text-xs font-semibold">
                Where
              </label>
              <input
                type="text"
                name=""
                placeholder="Hamptons, Suffolk County, NY"
                id=""
                className="border-0 p-0 mt-2 font-medium"
              />
              <div className="h-2 border"></div>
            </div>
            <div className="flex text-[#5B5B5B] flex-col h-[35px]">
              <label htmlFor="" className="text-xs font-semibold">
                Guests
              </label>
              <input
                type="text"
                name=""
                placeholder="Add Guests"
                id=""
                className="border-0 p-0 mt-2 font-medium"
              />
              <div className="h-2 border"></div>
            </div>
            <div className="flex text-[#5B5B5B] flex-row gap-2 justify-between h-[35px]">
              <div className="flex text-[#5B5B5B] w-[45%] flex-col h-[35px]">
                <label htmlFor="" className="text-xs font-semibold">
                  From
                </label>
                <input
                  type="date"
                  name=""
                  placeholder="Sun, 07 Feb"
                  id=""
                  className="border-0 px-0 mt-2 font-medium"
                />
                <div className="h-2 border mt-2"></div>
              </div>
              <div className="flex text-[#5B5B5B] w-1/2  flex-col h-[35px]">
                <label htmlFor="" className="text-xs font-semibold">
                  Untill
                </label>
                <input
                  type="date"
                  name=""
                  placeholder="Sun, 07 Feb"
                  id=""
                  className="border-0 px-0 mt-2 font-medium"
                />
                <div className="h-2 border mt-2"></div>
              </div>
            </div>
            <button
              type="submit"
              className="bg-[#5527D7] rounded-lg text-white py-3"
            >
              Search Now
            </button>
          </form>
          {/* Recent Searches */}
          <div>
            <div className="h-fit p-4 mx-4 flex flex-col rounded-lg bg-white">
              <div className="flex justify-between items-center">
                <h3 className="text-sm font-semibold">Recent Searches</h3>
                <button className="text-sm font-semibold">View All</button>
              </div>
              <div className="flex gap-3 items-center mt-2">
                <div className="bg-[#5527D7] p-4 rounded-full">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="currentColor"
                    className="w-8 h-8 text-white"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M15 10.5a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z"
                    />
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1 1 15 0Z"
                    />
                  </svg>
                </div>
                <div>
                  <h3 className="text-xl font-semibold">The Lakes Inn</h3>
                  <h3 className="text-base text-[#5B5B5B] font-semibold">
                    Nekosa, Wisconsin, USA
                  </h3>
                </div>
              </div>
            </div>
            <div className="mt-4">
              <Image
                src={heroMobile}
                alt="adventure"
                className="w-full relative h-auto"
              />
            </div>
          </div>
        </div>
        {/* Browse by Categories */}
        <div className="h-fit mt-32 mb-20 w-screen text-center">
          <p className="font-bold text-xl">Browse by Categories</p>
          <p className="text-[#666666] text-[13px]">
            Help you to find what you needed.
          </p>
          <div className="mx-auto px-4 ">
            <div className="flex items-center px-2 items-center justify-around mt-10">
              <div className="flex flex-col items-center justify-center">
                <div className=" flex items-center justify-center size-[62px] bg-[#5527D7] rounded-lg">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="currentColor"
                    className="w-7 h-7 text-white"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M3.75 21h16.5M4.5 3h15M5.25 3v18m13.5-18v18M9 6.75h1.5m-1.5 3h1.5m-1.5 3h1.5m3-6H15m-1.5 3H15m-1.5 3H15M9 21v-3.375c0-.621.504-1.125 1.125-1.125h3.75c.621 0 1.125.504 1.125 1.125V21"
                    />
                  </svg>
                </div>
                <p className="font-semibold text-base mt-2">Restroom</p>
              </div>
              <div className="flex items-center">
                <GoDotFill className="text-[#5527D7]" />
                <div className="text-[#5527D7]">---------</div>
                <GoDotFill className="text-[#5527D7]" />
              </div>
              <div className="flex flex-col items-center justify-center">
                <div className=" flex items-center justify-center size-[62px] bg-[#5527D7] rounded-lg">
                  <MdOutlineElectricCar className="text-white size-7" />
                </div>
                <p className="font-semibold text-base mt-2">EV Parking</p>
              </div>
            </div>
            <div className="flex items-center pr-2 justify-around mt-10">
              <div className="flex flex-col items-center justify-center">
                <div className=" flex items-center justify-center size-[62px] bg-[#5527D7] rounded-lg">
                  <SiHomeassistantcommunitystore className="text-white size-7" />
                </div>
                <p className="font-semibold text-base mt-2">Storage Room</p>
              </div>
              <div className="flex items-center">
                <GoDotFill className="text-[#5527D7]" />
                <div className="text-[#5527D7]">---------</div>
                <GoDotFill className="text-[#5527D7]" />
              </div>
              <div className="flex flex-col items-center justify-center">
                <div className=" flex items-center justify-center size-[62px] bg-[#5527D7] rounded-lg">
                  <MdOutlineElectricCar className="text-white size-7" />
                </div>
                <p className="font-semibold text-base mt-2">Parking Spot</p>
              </div>
            </div>
          </div>
        </div>
        {/* Browse by Destination */}
        <BrowseByDestinationMobile />
        {/* Time Based */}
        <TImeBasedMobile />
      </main>
    </>
  );
}

export default PageHome;
