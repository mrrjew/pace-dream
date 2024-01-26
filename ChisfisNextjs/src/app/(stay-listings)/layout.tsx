import React, { ReactNode } from 'react';
import SectionHeroArchivePage from '../(server-components)/SectionHeroArchivePage';

const Layout = ({ children }: { children: ReactNode }) => {
  return (
    <div className={`nc-ListingStayPage relative`}>
      <div className="pb-14 pt-14 flex justify-center max-w-[100vw] bg-center bg-no-repeat bg-cover bg-rectangle">
        <SectionHeroArchivePage currentPage="Room Stays" currentTab="Room Stays"/>
      </div>
      {children}
    </div>
  );
};

export default Layout;
