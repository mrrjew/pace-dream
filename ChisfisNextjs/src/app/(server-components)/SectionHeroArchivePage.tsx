import { FC, ReactNode } from 'react';
import {
  SearchTab,
} from '../(client-components)/(HeroSearchForm)/HeroSearchForm';
import LocationInput from '../(client-components)/(HeroSearchForm)/LocationInput';
import StayDatesRangeInput from '../(client-components)/(HeroSearchForm)/(stay-search-form)/StayDatesRangeInput';
import GuestsInput from '../(client-components)/(HeroSearchForm)/GuestsInput';
import ExperiencesDateSingleInput from '../(client-components)/(HeroSearchForm)/(experiences-search-form)/ExperiencesDateSingleInput';
import Budgets from '../(client-components)/(HeroSearchForm)/(listing-stay-map)/Budgets';
import TypeInputs from '../(client-components)/(HeroSearchForm)/(listing-stay-map)/TypeInputs';
import { StaticImageData } from 'next/image';

export interface SectionHeroArchivePageProps {
  className?: string;
  listingType?: ReactNode;
  currentPage: "Room Stays" | "Experiences" | "Find Roommate" | "Time-Based" | "Hourly Rental Gear" | "Last Minutes";
  currentTab: SearchTab;
  rightImage?: StaticImageData;
}

const renderForm = (currentPage: String) => {
  const commonInputs = (
    <div className="flex flex-col items-baseline md:flex-row overflow-hidden">
      <LocationInput className="flex-[1.5] pr-4" />
      <StayDatesRangeInput className="flex-1" dates="md:w-[100%]" />
      <GuestsInput className="lg:flex-[1.5]" buttonSubmitHref="/listing-experiences" />
    </div>
  );

  switch (currentPage) {
    case "Room Stays":
      return commonInputs;

    case "Experiences":
    case "Find Roommate":
    case "Time-Based":
    case "Hourly Rental Gear":
    case "Last Minutes":
      return (
        <div className="flex flex-col items-baseline md:flex-row rounded-full">
          <LocationInput className="flex pr-4" typeInput='md:w-[45%]' />
          <Budgets className="flex" />
          <TypeInputs className="flex" />
        </div>
      );

    default:
      return null;
  }
};

const SectionHeroArchivePage: FC<SectionHeroArchivePageProps> = ({
  className = '',
  listingType,
  currentPage,
  currentTab,
}) => {

  let vw;

  if (currentPage === 'Room Stays') {
    vw = 'md:w-[85vw] w-[92vw] xl:w-[70vw] lg:w-[80vw]';
  } else {
    vw = 'md:w-[80vw] w-[92vw] xl:w-[60vw] lg:w-[60vw]';
  }

  return (
    <div
      className={`max-w-[95vw] pb-6 ${vw} flex flex-col justify-center md:pt-0 z-10 mb-12 md:ml-0 lg:mb-0 md:max-w-full border-grey border bg-white rounded-2xl`}
    >
      <div className='pt-6 md:pl-5'>
        <span className="md:ml-2.5 ml-4 font-semibold text-lg mb-8">186 Results Found</span>
      </div>
      {renderForm(currentPage)}
    </div>
  );
};

export default SectionHeroArchivePage;
