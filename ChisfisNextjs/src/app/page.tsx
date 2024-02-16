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
import adventure from "@/images/adventure.jpg"
import roomStaysImg from "@/images/room-stays.jpg"
import timeBasedImg from "@/images/wellness-fitness.jpg"
import musicalInstrumentsImg from "@/images/musicalInstruments.jpg"

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
  return (
    <main className="nc-PageHome relative overflow-hidden">
      <div className="container relative space-y-24 mb-24 lg:space-y-28 lg:mb-28">
        <div
          className={`relative pb-6 -ml-16 md:ml-0 bg-[url('../images/backgroundMobile.png')] bg-no-repeat bg-cover md:bg-none`}
        >
          <BackgroundSection className="bg-[#F6F4F6]" />
          <SectionHero className="pt-10 lg:pt-16 lg:pb-16" />
        </div>
        {/* SECTION 1 */}
        <div className="relative py-2 md:py-16">
          <BackgroundSection className="bg-white " />
          <SectionSliderNewCategoriesMobile
            className="md:hidden block"
            itemPerRow={1}
            categories={DEMO_CATS}
          />
          <SectionSliderNewCategories
            className="md:block hidden"
            itemPerRow={4}
            categories={DEMO_CATS}
          />
        </div>
        <div className="relative">
          <BackgroundSection className="bg-[#F6F4F6] md:max-w-[100%]" />
          <SectionOurFeatures />
          <div className="relative pt-12">
            <BackgroundSection className="bg-[#FAFAFA] md:max-w-[100%]" />
            <SectionSliderFeaturePlaces
              className="md:hidden block"
              itemPerRow={1}
            />
            <SectionGridFeaturePlaces
              cardType="card2"
              className="md:block hidden md:mt-16"
            />
            <SectionDiscoverPerfectRoomStay
              cardType="card2"
              className="md:block hidden"
            />
            <div className="relative pt-16 md:mb-4">
              {/*<BackgroundSection className="bg-[white] md:max-w-[100%]" />
               <SectionSliderAuthorBox className="md:block hidden"
              itemPerRow={5}/>
              <SectionSliderAuthorBoxMobile className="md:hidden block"
              itemPerRow={1}/> */}
              <div className="relative md:pt-8">
                <BackgroundSection className="bg-neutral-50" />
                <SectionSliderNewCategories
                  className="md:block hidden"
                  heading="Explore by types of stays"
                  subHeading="Explore houses based on 10 types of stays"
                  itemPerRow={5}
                />
                <SectionSliderNewCategoriesMobile
                  className="md:hidden block"
                  heading="Explore by types of stays"
                  subHeading="Explore houses based on 10 types of stays"
                  itemPerRow={1}
                />
                <div className="relative md:py-16 mb-0">
                  <BackgroundSection className="bg-white" />
                  <SectionBecomeAnAuthor />
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="relative pb-8">
          <BackgroundSection />
          {/* <SectionClientSay className="md:block hidden" itemPerRow={3} />
        <SectionClientSayMobile className="block md:hidden" itemPerRow={1} /> */}
          <SectionSubscribe />
        </div>
      </div>
    </main>
  );
}

export default PageHome;
