import React, { FC } from "react";
import SectionGridFilterCard from "../SectionGridFilterCard";

export interface ListingStayPageProps {}

const ListingStayPage: FC<ListingStayPageProps> = () => {
  return <SectionGridFilterCard className="container mt-8 pb-24 lg:pb-28" />;
};

export default ListingStayPage;
