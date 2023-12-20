'use client';

import React, { useEffect, useState } from 'react';
import PageAddListing1 from './PageAddListing1';
import PageAddListing10 from './PageAddListing10';
import PageAddListing2 from './PageAddListing2';
import PageAddListing3 from './PageAddListing3';
import PageAddListing4 from './PageAddListing4';
import PageAddListing5 from './PageAddListing5';
import PageAddListing6 from './PageAddListing6';
import PageAddListing7 from './PageAddListing7';
import PageAddListing8 from './PageAddListing8';
import PageAddListing9 from './PageAddListing9';
import ButtonSecondary from '@/shared/ButtonSecondary';
import ButtonPrimary from '@/shared/ButtonPrimary';
import useFormFields from '@/hooks/useFormFields';
import { RxCross1 } from 'react-icons/rx';
import { createToast } from '@/utils/createToast';

const Page = ({ params, searchParams }: { params: { stepIndex: string }; searchParams?: { [key: string]: string | string[] | undefined } }) => {
  const [pageNumber, setPageNumber] = useState(1);
  const { input, setInput, handleInputChange } = useFormFields({
    propertyType: '',
    placeName: '',
    rentalForm: '',
    country: '',
    street: '',
    roomNumber: '',
    city: '',
    state: '',
    postalCode: '',
    acreage: '',
    guests: 0,
    bedroom: 0,
    beds: 0,
    bathroom: 0,
    kitchen: 0,
    generalAmenities: [],
    otherAmenities: [],
    safeAmenities: [],
    smokingRole: 'Allow',
    petRole: 'Allow',
    partyOrganizingRole: 'Allow',
    cookingRole: 'Allow',
    additionalRules: [],
    placeDescription: '',
    currency: '',
    basePriceMonToThu: 0,
    basePriceFriToSun: 0,
    longTermPriceDiscount: 0,
    stayNightMin: 0,
    stayNightMax: 0,
    coverImage: '',
    placeImages: [],
    availabilityDate: []
  });
  const [errorMessage, setErrorMessage] = useState('');

  let ContentComponent = PageAddListing1;
  switch (Number(pageNumber)) {
    case 1:
      ContentComponent = PageAddListing1;
      break;
    case 2:
      ContentComponent = PageAddListing2;
      break;
    case 3:
      ContentComponent = PageAddListing3;
      break;
    case 4:
      ContentComponent = PageAddListing4;
      break;
    case 5:
      ContentComponent = PageAddListing5;
      break;
    case 6:
      ContentComponent = PageAddListing6;
      break;
    case 7:
      ContentComponent = PageAddListing7;
      break;
    case 8:
      ContentComponent = PageAddListing8;
      break;
    case 9:
      ContentComponent = PageAddListing9;
      break;
    case 10:
      ContentComponent = PageAddListing10;
      break;

    default:
      ContentComponent = PageAddListing1;
      break;
  }

  // Continue Button Handler
  const handleContinueButton = () => {
    if (pageNumber >= 10) return setPageNumber(10);

    setPageNumber(pageNumber + 1);
  };
  // Back Button Handler
  const handleBackButton = () => {
    if (pageNumber <= 1) return setPageNumber(1);

    setPageNumber(pageNumber - 1);
  };

  // Form Submit Handler
  const handleFormSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    // Form Validation
    if (!input.propertyType) return createToast('Select a Property Type!');
    if (!input.placeName) return createToast('Place Name is required!');
    if (!input.rentalForm) return createToast('Select a Rental Form!');
    if (!input.country) return createToast('Select your country!');
    if (!input.street) return createToast('Street is required!');
    if (!input.city) return createToast('City is required!');
    if (!input.state) return createToast('State is required!');
    if (!input.postalCode) return createToast('Postal Code is required!');
    if (!input.acreage) return createToast('Acreage is required!');
    if (!input.guests) return createToast('Guests Number is required!');
    if (!input.bedroom) return createToast('Bedroom Number is required!');
    if (!input.beds) return createToast('Beds Number is required!');
    if (!input.bathroom) return createToast('Bathroom Number is required!');
    if (!input.kitchen) return createToast('Kitchen Number is required!');
    if (!Array.isArray(input?.generalAmenities) || input.generalAmenities.length < 1) {
      return createToast('Select Any General Amenities!');
    }
    if (!Array.isArray(input?.otherAmenities) || input.otherAmenities.length < 1) {
      return createToast('Select Any Other Amenities!');
    }
    if (!Array.isArray(input?.safeAmenities) || input.safeAmenities.length < 1) {
      return setErrorMessage('Select Any Safe Amenities!');
    }
    if (!input.smokingRole) return createToast('Select smoking role!');
    if (!input.petRole) return createToast('Select pet role!');
    if (!input.partyOrganizingRole) return createToast('Select Party Organizing role!');
    if (!input.cookingRole) return createToast('Select Cooking role!');
    if (!input.placeDescription) return createToast('Place Description is required!');
    if (!input.coverImage) return createToast('Cover Image is required!');
    if (!Array.isArray(input?.placeImages) || input.placeImages.length < 1) {
      return createToast('Place Image is required!');
    }
    if (!input.currency) return createToast('Select a currency!');
    if (!input.basePriceMonToThu) return createToast('Set Base Price!');
    if (!input.basePriceFriToSun) return createToast('Set Base Price!');
    if (!input.longTermPriceDiscount) return createToast('Set Long Term Price Discount!');
    if (!input.stayNightMin) return createToast('Set Stay Night Minimum number!');
    if (!input.stayNightMax) return createToast('Set Stay Night Maximum number!');
  };

  // handle negative number now allowed
  useEffect(() => {
    if (Number(input?.roomNumber) < 0) {
      setInput((prevInput) => ({ ...prevInput, roomNumber: 0 }));
    }
    if (Number(input?.postalCode) < 0) {
      setInput((prevInput) => ({ ...prevInput, postalCode: 0 }));
    }

    if (Number(input?.basePriceMonToThu) < 0) {
      setInput((prevInput) => ({ ...prevInput, basePriceMonToThu: 0 }));
    }
    if (Number(input?.basePriceFriToSun) < 0) {
      setInput((prevInput) => ({ ...prevInput, basePriceFriToSun: 0 }));
    }
    if (Number(input?.longTermPriceDiscount) < 0) {
      setInput((prevInput) => ({ ...prevInput, longTermPriceDiscount: 0 }));
    }
    if (Number(input?.stayNightMin) < 0) {
      setInput((prevInput) => ({ ...prevInput, stayNightMin: 0 }));
    }
    if (Number(input?.stayNightMax) < 0) {
      setInput((prevInput) => ({ ...prevInput, stayNightMax: 0 }));
    }
  }, [input]);

  return (
    <div className={`nc-PageAddListing1 px-4 max-w-3xl mx-auto pb-24 pt-14 sm:py-24 lg:pb-32`}>
      <form
        onSubmit={handleFormSubmit}
        className='space-y-11'>
        <div>
          <span className='text-4xl font-semibold'>{pageNumber}</span> <span className='text-lg text-neutral-500 dark:text-neutral-400'>/ 10</span>
        </div>

        {/* --------------------- */}
        <div className='listingSection__wrap '>
          <ContentComponent
            input={input}
            setInput={setInput}
            handleInputChange={handleInputChange}
            setPageNumber={setPageNumber}
          />
        </div>

        {/* --------------------- */}
        <div className='flex justify-end space-x-5'>
          <ButtonSecondary
            type='button'
            onClick={handleBackButton}>
            Go back
          </ButtonSecondary>
          {pageNumber > 9 ? (
            <button
              type='submit'
              className='nc-Button relative h-auto inline-flex items-center justify-center rounded-full transition-colors text-sm sm:text-base font-medium px-4 py-3 sm:px-6  ttnc-ButtonPrimary disabled:bg-opacity-70 bg-primary-6000 hover:bg-primary-700 text-neutral-50  '>
              Publish listing
            </button>
          ) : (
            <ButtonPrimary
              type='button'
              onClick={handleContinueButton}>
              Continue
            </ButtonPrimary>
          )}
        </div>

        {/* <!-- Error Alert --> */}
        {/* {errorMessage && (
          <div className='flex justify-between px-6 border py-2  rounded-xl   '>
            <p className='    text-red-500 text-base'>{errorMessage}</p>

            <RxCross1
              onClick={() => setErrorMessage('')}
              className='text-black group-hover:text-red-500 cursor-pointer'
            />
          </div>
        )} */}
      </form>
    </div>
  );
};

export default Page;
