import React from "react";
import SectionHero from "@/app/(server-components)/SectionHero";
import BgGlassmorphism from "@/components/BgGlassmorphism";
import { TaxonomyType } from "@/data/types";
import SectionSliderNewCategories from "@/components/SectionSliderNewCategories";
import SectionOurFeatures from "@/components/SectionOurFeatures";
import BackgroundSection from "@/components/BackgroundSection";
import SectionGridFeaturePlaces from "@/components/SectionGridFeaturePlaces";
import SectionHowItWork from "@/components/SectionHowItWork";
import SectionSubscribe2 from "@/components/SectionSubscribe2";
import SectionSliderAuthorBox from "@/components/SectionSliderAuthorBox";
import SectionGridCategoryBox from "@/components/SectionGridCategoryBox";
import SectionBecomeAnAuthor from "@/components/SectionBecomeAnAuthor";
import SectionVideos from "@/components/SectionVideos";
import SectionClientSay from "@/components/SectionClientSay";
import BookedUserList from "@/components/BookedUserList";
import SectionDiscoverPerfectRoomStay from "@/components/SectionDiscoverPerfectRoomStay";
import SectionSubscribe from "@/components/SectionSubscribe";
import SectionSliderFeaturePlaces from "@/components/SectionSliderFeaturePlaces";
import SectionClientSayMobile from "@/components/SectionClientSayMobile";
import SectionSliderAuthorBoxMobile from "@/components/SectionSliderAuthorBoxMobile";
import SectionSliderNewCategoriesMobile from "@/components/SectionSliderNewCategoriesMobile";

const DEMO_CATS: TaxonomyType[] = [
  {
    id: "1",
    href: "/listing-stay-map",
    name: "New Yourk",
    taxonomy: "category",
    count: 188288,
    thumbnail:
      "https://images.pexels.com/photos/64271/queen-of-liberty-statue-of-liberty-new-york-liberty-statue-64271.jpeg?auto=compress&cs=tinysrgb&dpr=3&h=750&w=1260",
  },
  {
    id: "2",
    href: "/listing-stay-map",
    name: "Singapore",
    taxonomy: "category",
    count: 188288,
    thumbnail:
      "https://images.pexels.com/photos/7740160/pexels-photo-7740160.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
  },
  {
    id: "3",
    href: "/listing-stay-map",
    name: "Paris",
    taxonomy: "category",
    count: 188288,
    thumbnail:
      "https://images.pexels.com/photos/739407/pexels-photo-739407.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
  },
  {
    id: "4",
    href: "/listing-stay-map",
    name: "London",
    taxonomy: "category",
    count: 188288,
    thumbnail:
      "https://images.pexels.com/photos/460672/pexels-photo-460672.jpeg?auto=compress&cs=tinysrgb&dpr=3&h=750&w=1260",
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
      {/* GLASSMOPHIN */}
      {/* <BgGlassmorphism /> */}

      <div className="container relative space-y-24 mb-24 lg:space-y-28 lg:mb-28">
        {/* SECTION HERO */}
        <div className="relative pb-16">
          <BackgroundSection className="bg-neutral-50 " />
          <SectionHero className="pt-10 lg:pt-16 lg:pb-16" />
        </div>
        {/* SECTION 1 */}
        <div className="relative py-16">
          <BackgroundSection className="bg-white " />
          <SectionSliderNewCategoriesMobile  
          className="md:hidden block"
          itemPerRow={1}
          />
          <SectionSliderNewCategories
          className="md:block hidden"
          itemPerRow={4}
        />
        </div>
        {/* Discover Perfect Room Stay */}
        <div className="relative">
          <BackgroundSection className="bg-neutral-50 max-w-[400px] md:max-w-[100%]" />
          <SectionOurFeatures />
          
          {/* Featured places */}
          <SectionSliderFeaturePlaces  
          className="md:hidden block"
          itemPerRow={1}
          />
          <SectionGridFeaturePlaces cardType="card2" className="md:block hidden md:mt-16" />
        
          <SectionDiscoverPerfectRoomStay cardType="card2" className="md:block hidden" />
        </div>
        <SectionSliderAuthorBox className="md:block hidden"
          itemPerRow={5}/>
        <SectionSliderAuthorBoxMobile className="md:hidden block"
          itemPerRow={1}/>

        {/* <SectionHowItWork /> */} 

        <div className="relative py-16">
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
        </div>

        <SectionBecomeAnAuthor />

        <div className="relative py-16">
        <BackgroundSection />
        <SectionClientSay className="md:block hidden" itemPerRow={3} />
        <SectionClientSayMobile className="block md:hidden" itemPerRow={1} />
        <SectionSubscribe />
        </div>
      </div>
    </main>
  );
}

export default PageHome;


