'use client';

import React, { useEffect, useState } from 'react';
import PageAddListing1 from './PageAddListing1';
import PageAddListing2 from './PageAddListing2';
import PageAddListing3 from './PageAddListing3';
import ButtonSecondary from '@/shared/ButtonSecondary';
import ButtonPrimary from '@/shared/ButtonPrimary';
import useFormFields from '@/hooks/useFormFields';
import { RxCross1 } from 'react-icons/rx';
import { createToast } from '@/utils/createToast';
import axios from 'axios';
import Cookies from 'js-cookie';
import { useRouter } from 'next/navigation';
import { boolean } from 'yup';
import { number } from 'prop-types';




const Page = ({ params, searchParams }: { params: { stepIndex: string }; searchParams?: { [key: string]: string | string[] | undefined | Boolean} }) => {
  const [pageNumber, setPageNumber] = useState(1);
  const userdata = Cookies.get('user_info');
  const user = userdata ? JSON.parse(userdata) : null;
  const token = Cookies.get('auth-token');
  const { input, setInput, handleInputChange } = useFormFields({
    propertyType: '',
    roomtype: '',
    placeName: '',
    rantalduration: '',
    pricingmodel: '',
    street: '',
    hourlyrate: '',
    gender:'',
    habits: '',
    agreement: '',
    picklocation:'',
    city: '',
    state: '',
    otherservices: '',
    description: '',    
    coverImage: '',
    placeImages: [],
    availabledate: []    
  });
  const handlePropertyTypeSelection = (type: string) => {
    setInput({ ...input, propertyType: type });
  };
  
  const [errorMessage, setErrorMessage] = useState('');
  const router = useRouter();
  const [loading, setIsLoading] = useState(false);
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
    // case 4:
    //   ContentComponent = PageAddListing4;
    //   break;
    // case 5:
    //   ContentComponent = PageAddListing5;
    //   break;
    // case 6:
    //   ContentComponent = PageAddListing6;
    //   break;
    // case 7:
    //   ContentComponent = PageAddListing7;
    //   break;
    // case 8:
    //   ContentComponent = PageAddListing8;
    //   break;
    // case 9:
    //   ContentComponent = PageAddListing9;
    //   break;
    // case 10:
    //   ContentComponent = PageAddListing10;
    //   break;

    default:
      ContentComponent = PageAddListing1;
      break;
  }

  // Continue Button Handler
  const handleContinueButton = () => {
    if (pageNumber >= 3) return setPageNumber(3);

    setPageNumber(pageNumber + 1);
  };
  // Back Button Handler
  const handleBackButton = () => {
    if (pageNumber <= 1) return setPageNumber(1);

    setPageNumber(pageNumber - 1);
  };

  // Form Submit Handler
  const handleFormSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    // Form Validation
    // if (!input.roomstays) return createToast('Select a Property Type!');
    // if (!input.roomtype) return createToast('Select a Room Type!');
    // if (!input.location) return createToast('Location is required!');
    // if (!input.gps) return createToast('GPS is required!');
    // if (!input.city) return createToast('City is required!');
    // if (!input.street) return createToast('Street is required!');
    // if (!input.startDate) return createToast('Select a Start date');
    // if (!input.endDate) return createToast('PSelect a End date!');
    // if (!input.hourlyrate) return createToast('Hourly Rate is required!');
    // if (!input.otherservices) return createToast('Other Services is required!');
    // if (!input.bedroom) return createToast('Bedroom Number is required!');
    // if (!input.beds) return createToast('Beds Number is required!');
    // if (!input.bathroom) return createToast('Bathroom Number is required!');
    // if (!input.kitchen) return createToast('Kitchen Number is required!');
    // if (!Array.isArray(input?.generalAmenities) || input.generalAmenities.length < 1) {
    //   return createToast('Select Any General Amenities!');
    // }
    // if (!Array.isArray(input?.otherAmenities) || input.otherAmenities.length < 1) {
    //   return createToast('Select Any Other Amenities!');
    // }
    // if (!Array.isArray(input?.smokingList) || input.smokingList.length < 1) {
    //   return setErrorMessage('Select Any Smoking Rule!');
    // }
    // if (!Array.isArray(input?.petList) || input.petList.length < 1) {
    //   return setErrorMessage('Select Any Pet Rule!');
    // }
    // if (!input.smokingRole) return createToast('Select smoking role!');
    // if (!input.petRole) return createToast('Select pet role!');
    // if (!input.partyOrganizingRole) return createToast('Select Party Organizing role!');
    // if (!input.cookingRole) return createToast('Select Cooking role!');
    // if (!input.placeDescription) return createToast('Place Description is required!');
    // if (!input.coverImage) return createToast('Cover Image is required!');
    // if (!Array.isArray(input?.placeImages) || input.placeImages.length < 1) {
    //   return createToast('Place Image is required!');
    // }
    // if (!input.currency) return createToast('Select a currency!');
    // if (!input.basePriceMonToThu) return createToast('Set Base Price!');
    // if (!input.basePriceFriToSun) return createToast('Set Base Price!');
    // if (!input.longTermPriceDiscount) return createToast('Set Long Term Price Discount!');
    // if (!input.stayNightMin) return createToast('Set Stay Night Minimum number!');
    // if (!input.stayNightMax) return createToast('Set Stay Night Maximum number!');

    setIsLoading(true);

    // Form Data
    const formData = new FormData();
    formData.append('propertyType', String(input.roomstays));
    formData.append('roomType', String(input.roomtype));
    formData.append('location', String(input.location));    
    formData.append('city', String(input.city));
    formData.append('street', String(input.street));
    formData.append('gender',String(input.gender))
    formData.append('habits', String(input.habits));
    formData.append('agreement', String(input.agreement));    
    formData.append('availabledate', String(input.availabledate));
    formData.append('hourlyrate', String(input.hourlyrate));
    formData.append('otherservices', String(input.otherservices));
    // formData.append('bedroom', String(input.bedroom));
    // formData.append('beds', String(input.beds));
    // formData.append('bathroom', String(input.bathroom));
    // formData.append('kitchen', String(input.kitchen));
    // input.generalAmenities.forEach((item) => {
    //   formData.append('generalAmenities', item);
    // });
    // input.otherAmenities.forEach((item) => {
    //   formData.append('otherAmenities', item);
    // });
    // input.smokingList.forEach((item) => {
    //   formData.append('smokingAmenities', item);
    // });
    // input.petList.forEach((item) => {
    //   formData.append('petAmenities', item);
    // });
    // formData.append('smokingRole', String(input.smokingRole));
    // formData.append('petRole', String(input.petRole));
    // formData.append('partyOrganizingRole', String(input.partyOrganizingRole));
    // formData.append('cookingRole', String(input.cookingRole));
    // Array.isArray(input.additionalRules) &&
    //   input.additionalRules.forEach((item) => {
    //     formData.append('additionalRules', item);
    //   });
    // formData.append('placeDescription', String(input.placeDescription));
    // formData.append('currency', String(input.currency));
    // formData.append('basePriceMonToThu', String(input.basePriceMonToThu));
    // formData.append('basePriceFriToSun', String(input.basePriceFriToSun));
    // formData.append('longTermPriceDiscount', String(input.longTermPriceDiscount));
    // formData.append('stayNightMin', String(input.stayNightMin));
    // formData.append('stayNightMax', String(input.stayNightMax));
    // Array.isArray(input?.availabilityDate) &&
    //   input?.availabilityDate?.forEach((item) => {
    //     formData.append('availabilityDate', item);
    //   });

    // Image Upload
    input.coverImage instanceof File && formData.append('coverImage', input.coverImage);

    // input.placeImages.forEach((file) => {
    //   formData.append('placeImages', file);
    // });
console.log(formData);
    const response = await axios
      .post(`${process.env.NEXT_PUBLIC_BACKEND_URL}/roommate/add/room`, formData,{
        headers: {
          Authorization: ` ${token}`,
        },
      })
      .then((res) => {
        console.log(res.data);
        setIsLoading(false);
        createToast(res.data.message, 'success');

        router.push('/');
      })
      .catch((error) => {
        console.log(error.response.data.message);
        setIsLoading(false);

        createToast(error.response.data.message);
      });
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
        {/* <div>
          <span className='text-4xl font-semibold'>{pageNumber}</span> <span className='text-lg text-neutral-500 dark:text-neutral-400'>/ 10</span>
        </div> */}

        {/* --------------------- */}
        <div className='listingSection'>
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
          {pageNumber > 2 ? (
            <button
              type='submit'
              className='nc-Button relative h-auto inline-flex items-center justify-center rounded-full transition-colors text-sm sm:text-base font-medium px-4 py-3 sm:px-6  ttnc-ButtonPrimary disabled:bg-opacity-70 bg-primary-6000 hover:bg-primary-700 text-neutral-50  '>
              {loading ? 'Loading...' : 'Publish listing'}
            </button>
          ) : (
            <ButtonPrimary
              type='button'
              onClick={handleContinueButton}>
              Next
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
