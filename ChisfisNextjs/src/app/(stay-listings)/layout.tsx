import BackgroundSection from '@/components/BackgroundSection';
import BgGlassmorphism from '@/components/BgGlassmorphism';
import SectionGridAuthorBox from '@/components/SectionSliderAuthorBox';
import SectionSliderNewCategories from '@/components/SectionSliderNewCategories';
import SectionSubscribe2 from '@/components/SectionSubscribe2';
import React, { ReactNode } from 'react';
import SectionHeroArchivePage from '../(server-components)/SectionHeroArchivePage';

const Layout = ({ children }: { children: ReactNode }) => {
  return (
    <div className={`nc-ListingStayPage relative `}>
      <div className="mb-14 mt-14 flex justify-center max-w-[100vw]">
        <SectionHeroArchivePage currentPage="Room Stays" currentTab="Room Stays" />
      </div>
      {children}
    </div>
  );
};

export default Layout;
