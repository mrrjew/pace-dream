import BackgroundSection from '@/components/BackgroundSection';
import BgGlassmorphism from '@/components/BgGlassmorphism';
import SectionGridAuthorBox from '@/components/SectionSliderAuthorBox';
import SectionSliderNewCategories from '@/components/SectionSliderNewCategories';
import SectionSubscribe2 from '@/components/SectionSubscribe2';
import heroRightImage from '@/images/hero-right-car.png';
import { ReactNode } from 'react';
import SectionHeroArchivePage from '../(server-components)/SectionHeroArchivePage';

const Layout = ({ children }: { children: ReactNode }) => {
  return (
    <div className={`nc-ListingCarMapPage relative `}>
      <BgGlassmorphism />

      {/* SECTION HERO */}
      <div className="container pt-10 pb-24 lg:pt-16 lg:pb-28">
        <SectionHeroArchivePage
          rightImage={heroRightImage}
          currentPage="Hourly"
          currentTab="Room Stays"
          listingType={
            <>
              <i className="text-2xl las la-car"></i>
              <span className="ml-2.5">1512 cars</span>
            </>
          }
        />
      </div>

      {/* SECTION */}
      {children}

      <div className="container overflow-hidden">
        {/* SECTION 1 */}
        <div className="relative py-16">
          <BackgroundSection />
          <SectionSliderNewCategories
            heading="Explore by types of stays"
            subHeading="Explore houses based on 10 types of stays"
            categoryCardType="card5"
            itemPerRow={5}
            sliderStyle="style2"
          />
        </div>

        {/* SECTION */}
        <SectionSubscribe2 />

        {/* SECTION */}
        <div className="relative py-16 mb-24 lg:mb-28">
          <BackgroundSection className="bg-orange-50 dark:bg-black dark:bg-opacity-20 " />
          <SectionGridAuthorBox />
        </div>
      </div>
    </div>
  );
};

export default Layout;
