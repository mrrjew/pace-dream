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
  const titles = ["Choosing Time-Based Rentals & Photos", "Rental Duration & Pricing, Other amenities & photos", ""];
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
    city: '',
    state: '',
    otherservices: '',
    description: '',    
    coverImage: '',
    placeImages: [],
    availabilityDate: []    
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

    
    setIsLoading(true);

    // Form Data
    const formData = new FormData();
    formData.append('propertyType', String(input.timebased));
    formData.append('roomType', String(input.roomtype));
    formData.append('location', String(input.location));    
    formData.append('city', String(input.city));
    formData.append('street', String(input.street));
    formData.append('rantalduration',String(input.rantalduration))
    formData.append('pricingmodel', String(input.pricingmodel));
    formData.append('startDate', String(input.startDate));
    formData.append('EndDate', String(input.EndDate));
    formData.append('hourlyrate', String(input.hourlyrate));
    formData.append('otherservices', String(input.otherservices));
    formData.append('description', String(input.description));
    

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
        <div>
          <span className='text-4xl font-semibold'>{titles[pageNumber - 1]}</span>
        </div>

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
        
      </form>
    </div>
  );
};

export default Page;
