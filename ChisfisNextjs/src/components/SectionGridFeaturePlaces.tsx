import React, { FC, ReactNode } from "react";
import { DEMO_STAY_LISTINGS } from "@/data/listings";
import { StayDataType } from "@/data/types";
import HeaderFilter from "./HeaderFilter";
import StayCard from "./StayCard";
import StayCard2 from "./StayCard2";
import ButtonShowMore from "@/shared/ButtonShowMore";

// OTHER DEMO WILL PASS PROPS
const DEMO_DATA: StayDataType[] = DEMO_STAY_LISTINGS.filter((_, i) => i < 8);

//
export interface SectionGridFeaturePlacesProps {
  className?: string;
  stayListings?: StayDataType[];
  gridClass?: string;
  heading?: ReactNode;
  headingIsCenter?: boolean;
  tabs?: string[];
  cardType?: "card1" | "card2";
}

const SectionGridFeaturePlaces: FC<SectionGridFeaturePlacesProps> = ({
  className = "",
  stayListings = DEMO_DATA,
  gridClass = "",
  heading = "Time Based",
  headingIsCenter,
  tabs = ["Room", "Parking", "EV Parking", "Restroom"],
  cardType = "card2",
}) => {
  
  const renderCard = (stay: StayDataType) => {
    let CardName = StayCard;
    switch (cardType) {
      case "card1":
        CardName = StayCard;
        break;
      case "card2":
        CardName = StayCard2;
        break;

      default:
        CardName = StayCard;
    }

    return <CardName className="py-2 px-3 rounded-[8px] bg-[#f9f5f5] border"key={stay.id} data={stay} />;
  };
  const sortedStayListings = stayListings.slice().sort((a, b) => b.reviewStart - a.reviewStart);
  console.log(sortedStayListings)
  return (
    <div className={`nc-SectionGridFeaturePlaces md:pr-24 md:pl-24 relative ${className}`} >
      <HeaderFilter
        tabActive={"Room"}
        tabs={tabs}
        heading={heading}
      />
      <div
        className={`grid gap-6 md:gap-8 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 ${gridClass}`}
      >
        {sortedStayListings.map((stay) => renderCard(stay))}
      </div>
      <div className="flex my-6 justify-center items-center">
        <ButtonShowMore>Show more</ButtonShowMore>
      </div>
    </div>
  );
};

export default SectionGridFeaturePlaces;
