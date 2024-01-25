import React, { FC } from "react";
import SectionGridHasMap from "../SectionGridHasMap";


export interface ListingStayMapPageProps {}

const ListingStayMapPage: FC<ListingStayMapPageProps> = ({}) => {
  return (
    <div className="pb-24 lg:pb-28 ml-16">
      <SectionGridHasMap />
    </div>
  );
};

export default ListingStayMapPage;
