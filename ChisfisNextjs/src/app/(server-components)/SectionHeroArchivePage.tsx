import { FC, ReactNode } from 'react';
import {
  SearchTab,
} from '../(client-components)/(HeroSearchForm)/HeroSearchForm';
import LocationInput from '../(client-components)/(HeroSearchForm)/LocationInput';
import StayDatesRangeInput from '../(client-components)/(HeroSearchForm)/(stay-search-form)/StayDatesRangeInput';
import GuestsInput from '../(client-components)/(HeroSearchForm)/GuestsInput';
import ExperiencesDateSingleInput from '../(client-components)/(HeroSearchForm)/(experiences-search-form)/ExperiencesDateSingleInput';

export interface SectionHeroArchivePageProps {
  className?: string;
  listingType?: ReactNode;
  currentPage: 'Room Stays' | 'Hourly Rental Space' | 'Hourly Rental Gear' | 'Find Roommate' | 'Experiences' | 'Last Minutes';
  currentTab: SearchTab;
}

const renderForm = (currentPage: String) => {
  const commonInputs = (
    <div className="flex flex-col flex-1 items-baseline md:flex-row rounded-full">
      <LocationInput className="flex-[1.5]" />
      <StayDatesRangeInput className="flex-1" />
      <GuestsInput className="flex-[1.5]" />
    </div>
  );

  switch (currentPage) {
    case "Room Stays":
    case "Find Roommate":
    case "Hourly Rental Space":
    case "Hourly Rental Gear":
    case "Last Minutes":
      return commonInputs;

    case "Experiences":
      return (
        <div className="flex flex-col items-baseline flex-1 md:flex-row  rounded-full">
          <LocationInput className="flex-[1.5]" />
          <ExperiencesDateSingleInput className="flex-1" />
          <GuestsInput className="flex-1" buttonSubmitHref="/listing-experiences" />
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
  
  return (
    <div
      className={`nc-SectionHeroArchivePage max-w-[70vw] w-[70vw] xl:w-[70vw] lg:w-[70vw] flex flex-col justify-center md:pt-0 z-10 mb-12 ml-16 md:ml-0 lg:mb-0 md:max-w-full border-grey border bg-white rounded-2xl ${className}`}
    >
      <div className='pt-6 pl-5'>
        <span className="ml-2.5">186 Results Found</span>
      </div>
      <div className="z-10 w-full">
        {renderForm(currentPage)}
      </div>
    </div>
  );
};

export default SectionHeroArchivePage;
