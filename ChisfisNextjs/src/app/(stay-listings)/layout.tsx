import React, { ReactNode } from "react";
import SectionHeroArchivePage from "../(server-components)/SectionHeroArchivePage";

const Layout = ({ children }: { children: ReactNode }) => {
  return <div className={`nc-ListingStayPage relative`}>{children}</div>;
};

export default Layout;
