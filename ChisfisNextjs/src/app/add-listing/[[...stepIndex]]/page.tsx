import React from "react";
import Image from "next/image";
// import Badge from '@/shared/custom/Badge';
import Input from "@/shared/Input";
// import Calendar from '@/shared/custom/Calendar';
import button from "@/shared/ButtonPrimary";
import mapImage from "../../../assets/images/userDemoImages/Map.png";

const FormItem = () => {
  return (
    <div className="bg-gray-100 min-h-screen">
      <main className="py-8 px-2 md:px-8">
        <div className="max-w-4xl mx-auto bg-white p-2 md:p-8 rounded-lg shadow">
          <h1 className="text-xl font-[900] leading-6  mb-4">
            {/* <span className="underline decoration-2 decoration-[#632DF8]">Create</span> a Listing */}
            <span>Create</span> a Listing
          </h1>
          <hr />
          <section>
            <h2 className="font-[700] text-[16px] mt-4 mb-2">Select Category</h2>
            <div className="flex flex-wrap gap-4 lg:justify-between mb-6">
              <button
                className=" py-3 px-6 hover:bg-[#632DF8] text-black border border-[F6F4F6] hover:text-white text-[14px] font-[500] rounded-[25px] lg:rounded-[50px]"
                type="button"
              >
                Room Stays
              </button>
              <button
                className=" py-3 px-6 hover:bg-[#632DF8] text-black border border-[F6F4F6] hover:text-white text-[14px] font-[500] rounded-[25px] lg:rounded-[50px]"
                type="button"
              >
                Time-Based
              </button>
              <button
                className=" py-3 px-6 hover:bg-[#632DF8] text-black border border-[F6F4F6] hover:text-white text-[14px] font-[500] rounded-[25px] lg:rounded-[50px]"
                type="button"
              >
                Hourly Rental Gear
              </button>
              <button
                className=" py-3 px-6 hover:bg-[#632DF8] text-black border border-[F6F4F6] hover:text-white text-[14px] font-[500] rounded-[25px] lg:rounded-[50px]"
                type="button"
              >
                Find Roommate
              </button>
              <button
                className=" py-3 px-6 hover:bg-[#632DF8] text-black border border-[F6F4F6] hover:text-white text-[14px] font-[500] rounded-[25px] lg:rounded-[50px]"
                type="button"
              >
                Experiences
              </button>
            </div>
            <h2 className=" font-[700] text-[16px] mb-2">Room Type</h2>
            <div className="flex flex-wrap gap-2 mb-6">
              <button
                className="px-4 py-2 hover:bg-[#632DF8] text-black border border-[F6F4F6] hover:text-white text-[12px] font-[400] rounded-[12px]"
                type="button"
              >
                Anytime
              </button>
              <button
                className="px-4 py-2 hover:bg-[#632DF8] text-black border border-[F6F4F6] hover:text-white text-[12px] font-[400] rounded-[12px]"
                type="button"
              >
                Any type
              </button>
              <button
                className="px-4 py-2 hover:bg-[#632DF8] text-black border border-[F6F4F6] hover:text-white text-[12px] font-[400] rounded-[12px]"
                type="button"
              >
                Hostel
              </button>
              <button
                className="px-4 py-2 hover:bg-[#632DF8] text-black border border-[F6F4F6] hover:text-white text-[12px] font-[400] rounded-[12px]"
                type="button"
              >
                Guesthouse
              </button>
              <button
                className="px-4 py-2 hover:bg-[#632DF8] text-black border border-[F6F4F6] hover:text-white text-[12px] font-[400] rounded-[12px]"
                type="button"
              >
                Long term
              </button>
              <button
                className="px-4 py-2 hover:bg-[#632DF8] text-black border border-[F6F4F6] hover:text-white text-[12px] font-[400] rounded-[12px]"
                type="button"
              >
                Short Term
              </button>
            </div>
            <div className=" flex justify-between">
              <div>
                <h2 className=" font-[700] text-[16px] mb-2">Add Location</h2>
                <Input className="mb-6" placeholder="Type your locations" />
              </div>
              <img src="/Images/map.png" />
            </div>
            <h2 className=" font-[700] text-[16px] mb-2">Description</h2>
            <Input className="mb-6" placeholder="Description of the space" />
            <h2 className=" font-[700] text-[16px] mb-2">
              Available Amenities
            </h2>
            <div className="flex flex-wrap lg:justify-between px-4 rounded-[8px] py-2 bg-[#F6F4F6] mb-6">
              <div className=" flex items-center gap-2">
                <input
                  type="checkbox"
                  className="h-[12px] w-[12px] rounded-full"
                ></input>
                <p className=" text-[16px] font-[500]"> Wi-Fi Access</p>
              </div>
              <div className=" flex items-center gap-2">
                <input
                  type="checkbox"
                  className="h-[12px] w-[12px] rounded-full"
                ></input>
                <p className=" text-[16px] font-[500]"> Air Conditioning</p>
              </div>
              <div className=" flex items-center gap-2">
                <input
                  type="checkbox"
                  className="h-[12px] w-[12px] rounded-full"
                ></input>
                <p className=" text-[16px] font-[500]">Free Parking</p>
              </div>
              <div className=" flex items-center gap-2">
                <input
                  type="checkbox"
                  className="h-[12px] w-[12px] rounded-full"
                ></input>
                <p className=" text-[16px] font-[500]"> Swimming Pool</p>
              </div>
              <div className=" flex items-center gap-2">
                <input
                  type="checkbox"
                  className="h-[12px] w-[12px] rounded-full"
                ></input>
                <p className=" text-[16px] font-[500]"> Gym/Fitness Center</p>
              </div>
              {/* <button
className=" py-3 px-6 hover:bg-[#632DF8] text-black border border-[F6F4F6] hover:text-white text-[14px] font-[500] rounded-[25px] lg:rounded-[50px]"
type="button"
>
Wi-Fi Access
</button>
<button
className=" py-3 px-6 hover:bg-[#632DF8] text-black border border-[F6F4F6] hover:text-white text-[14px] font-[500] rounded-[25px] lg:rounded-[50px]"
type="button"
>
Air Conditioning
</button>
<button
className=" py-3 px-6 hover:bg-[#632DF8] text-black border border-[F6F4F6] hover:text-white text-[14px] font-[500] rounded-[50px]"
type="button"
>
Free Parking
</button>
<button
className=" py-3 px-6 hover:bg-[#632DF8] text-black border border-[F6F4F6] hover:text-white text-[14px] font-[500] rounded-[50px]"
type="button"
>
Swimming Pool
</button>
<button
className=" py-3 px-6 hover:bg-[#632DF8] text-black border border-[F6F4F6] hover:text-white text-[14px] font-[500] rounded-[50px]"
type="button"
>
Gym/Fitness Center
</button> */}
            </div>
            <h2 className=" font-[700] text-[16px] mb-2">Price Per Night</h2>
            <Input className="mb-6" placeholder="$150.00" />
            <h2 className=" font-[700] text-[16px] mb-2">Availability Dates</h2>
            <div className="max-w-md mx-auto p-6 bg-white rounded-md shadow-md">
              <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4">
                <div className="flex flex-col w-full">
                  <label

                    className="text-lg font-medium text-gray-700 mb-2"
                  >
                    Start Date
                  </label>
                  <input
                    type="date"
                    id="startDate"
                    className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring focus:border-blue-300"
                  />
                </div>

                <div className="flex flex-col w-full">
                  <label

                    className="text-lg font-medium text-gray-700 mb-2"
                  >
                    End Date
                  </label>
                  <input
                    type="date"
                    id="endDate"
                    className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring focus:border-blue-300"
                  />
                </div>
              </div>
            </div>
            {/* <Calendar className="rounded-md border mb-6" mode="single" /> */}
            <h2 className=" font-[700] mt-4 text-[16px] mb-2">House Rules:</h2>
            <div className=" border p-3">
              <ol className="list-decimal pl-4 mb-6">
                <li>
                  No Smoking: Smoking is strictly prohibited inside the house.
                  Designate specific outdoor areas for smoking if necessary.
                </li>
                <li>
                  Quiet Hours: Respect quiet hours to ensure a peaceful
                  environment, typically from [Insert specific time] to [Insert
                  specific time].
                </li>
                <li>
                  Guest Policy: Notify the host in advance if you plan to have
                  guests, and limit the number of guests allowed. No overnight
                  guests without prior approval.
                </li>
                <li>
                  No Pets: Unless explicitly allowed, pets are not permitted on
                  the premises.
                </li>
              </ol>
            </div>
            {/* <div className=" mt-5 flex items-center gap-4">
              <h2 className=" font-[700] text-[16px] mb-2">Upload a file:</h2>
              <div className="flex items-center space-x-2">
                <input
                  type="text"
                  className=" p-2 rounded-[8px]"
                  placeholder="select a file or drag and drop"
                />
                <button type="button" className="bg-[#F6F4F6] p-3 rounde-[8px]">
                  Upload
                </button>
              </div>
            </div> */}
            <div className="max-w-md p-6 bg-white rounded-md shadow-md flex items-center">
              <div className="flex-1 mr-4">
                <label className="block text-lg font-medium text-gray-700 mb-2">
                  Choose a file to upload
                </label>

                <div className="relative border-dashed border-2 border-gray-400 p-6 flex items-center">
                  <input
                    id="fileInput"
                    type="file"
                    className="absolute w-full h-full opacity-0"
                  />
                  <div className="text-center">
                    <svg
                      className="mx-auto h-12 w-12 text-gray-400"
                      stroke="currentColor"
                      fill="none"
                      viewBox="0 0 48 48"
                    >
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2"
                        d="M9 14v6a3 3 0 0 0 3 3h0a3 3 0 0 0 3-3v-6m-6 0l6-6 6 6m-6-6v6a3 3 0 0 0 3 3h0a3 3 0 0 0 3-3v-6m-6 0l6-6 6 6m-12 6h24"
                      ></path>
                    </svg>
                    <p className="mt-1 text-sm text-gray-600">
                      Drag and drop your file here, or click to select
                    </p>
                  </div>
                </div>
              </div>

              <button className="px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600 focus:outline-none focus:ring focus:border-blue-300">
                Upload
              </button>
            </div>
            <div className="flex space-x-2 gap-2 mt-[2rem]">
              <img
                alt="Room Image"
                height="100"
                // src="/placeholder.svg"
                src="/Images/image1.png"
                style={{
                  aspectRatio: "150/100",
                  objectFit: "cover",
                }}
                width="150"
              />
              <img
                alt="Room Image"
                height="100"
                // src="/placeholder.svg"
                src="/Images/image2.png"
                style={{
                  aspectRatio: "150/100",
                  objectFit: "cover",
                }}
                width="150"
              />
              <img
                alt="Room Image"
                height="100"
                // src="/placeholder.svg"
                src="/Images/image3.png"
                style={{
                  aspectRatio: "150/100",
                  objectFit: "cover",
                }}
                width="150"
              />
            </div>
          </section>
          <div className="flex justify-center gap-5 mt-8">
            <button
              className=" py-3 px-6 hover:bg-[#047857] border bg-[#F6F4F6] text-[#64748B] hover:text-white text-[14px] font-[500] rounded-[12px]"
              type="button"
            >
              Cancel
            </button>
            <button
              className=" py-3 px-6 hover:bg-[#047857] border bg-[#F6F4F6] hover:text-white text-[14px] font-[500] rounded-[12px]"
              type="button"
            >
              Create Listing
            </button>
          </div>
        </div>
      </main>
    </div>
  );
};

export default FormItem;


// 'use client';

// import React, { useEffect, useState } from 'react';
// import PageAddListing1 from './PageAddListing1';
// import PageAddListing10 from './PageAddListing10';
// import PageAddListing2 from './PageAddListing2';
// import PageAddListing3 from './PageAddListing3';
// import PageAddListing4 from './PageAddListing4';
// import PageAddListing5 from './PageAddListing5';
// import PageAddListing6 from './PageAddListing6';
// import PageAddListing7 from './PageAddListing7';
// import PageAddListing8 from './PageAddListing8';
// import PageAddListing9 from './PageAddListing9';
// import ButtonSecondary from '@/shared/ButtonSecondary';
// import ButtonPrimary from '@/shared/ButtonPrimary';
// import useFormFields from '@/hooks/useFormFields';
// import { RxCross1 } from 'react-icons/rx';
// import { createToast } from '@/utils/createToast';
// import axios from 'axios';
// import Cookies from 'js-cookie';
// import { useRouter } from 'next/navigation';
// import { boolean } from 'yup';
// import { number } from 'prop-types';

// const Page = ({ params, searchParams }: { params: { stepIndex: string }; searchParams?: { [key: string]: string | string[] | undefined | Boolean} }) => {
//   const [pageNumber, setPageNumber] = useState(1);
//   const userdata = Cookies.get('user_info');
//   const user = userdata ? JSON.parse(userdata) : null;
//   const token = Cookies.get('auth-token');
//   const { input, setInput, handleInputChange } = useFormFields({
//     propertyType: '',
//     placeName: '',
//     rentalForm: '',
//     country: '',
//     street: '',
//     roomNumber: '',
//     city: '',
//     state: '',
//     postalCode: '',
//     acreage: '',
//     guests: 0,
//     bedroom: 0,
//     beds: 0,
//     bathroom: 0,
//     kitchen: 0,
//     generalAmenities: [],
//     otherAmenities: [],
//     safeAmenities: [],
//     smokingRole: '',
//     petRole: '',
//     partyOrganizingRole: '',
//     cookingRole: '',
//     additionalRules: [],
//     placeDescription: '',
//       availability: true,
//       capacity: 0,
//     currency: '',
//     basePriceMonToThu: 0,
//     basePriceFriToSun: 0,
//     longTermPriceDiscount: 0,
//     stayNightMin: 0,
//     stayNightMax: 0,
//     coverImage: '',
//     placeImages: [],
//     availabilityDate: []
//   });
//   const [errorMessage, setErrorMessage] = useState('');
//   const router = useRouter();
//   const [loading, setIsLoading] = useState(false);
//   let ContentComponent = PageAddListing1;
//   switch (Number(pageNumber)) {
//     case 1:
//       ContentComponent = PageAddListing1;
//       break;
//     case 2:
//       ContentComponent = PageAddListing2;
//       break;
//     case 3:
//       ContentComponent = PageAddListing3;
//       break;
//     case 4:
//       ContentComponent = PageAddListing4;
//       break;
//     case 5:
//       ContentComponent = PageAddListing5;
//       break;
//     case 6:
//       ContentComponent = PageAddListing6;
//       break;
//     case 7:
//       ContentComponent = PageAddListing7;
//       break;
//     case 8:
//       ContentComponent = PageAddListing8;
//       break;
//     case 9:
//       ContentComponent = PageAddListing9;
//       break;
//     case 10:
//       ContentComponent = PageAddListing10;
//       break;

//     default:
//       ContentComponent = PageAddListing1;
//       break;
//   }

//   // Continue Button Handler
//   const handleContinueButton = () => {
//     if (pageNumber >= 10) return setPageNumber(10);

//     setPageNumber(pageNumber + 1);
//   };
//   // Back Button Handler
//   const handleBackButton = () => {
//     if (pageNumber <= 1) return setPageNumber(1);

//     setPageNumber(pageNumber - 1);
//   };

//   // Form Submit Handler
//   const handleFormSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
//     e.preventDefault();

//     // Form Validation
//     if (!input.propertyType) return createToast('Select a Property Type!');
//     if (!input.placeName) return createToast('Place Name is required!');
//     if (!input.rentalForm) return createToast('Select a Rental Form!');
//     if (!input.country) return createToast('Select your country!');
//     if (!input.street) return createToast('Street is required!');
//     if (!input.city) return createToast('City is required!');
//     if (!input.state) return createToast('State is required!');
//     if (!input.postalCode) return createToast('Postal Code is required!');
//     if (!input.acreage) return createToast('Acreage is required!');
//     if (!input.guests) return createToast('Guests Number is required!');
//     if (!input.bedroom) return createToast('Bedroom Number is required!');
//     if (!input.beds) return createToast('Beds Number is required!');
//     if (!input.bathroom) return createToast('Bathroom Number is required!');
//     if (!input.kitchen) return createToast('Kitchen Number is required!');
//     if (!Array.isArray(input?.generalAmenities) || input.generalAmenities.length < 1) {
//       return createToast('Select Any General Amenities!');
//     }
//     if (!Array.isArray(input?.otherAmenities) || input.otherAmenities.length < 1) {
//       return createToast('Select Any Other Amenities!');
//     }
//     if (!Array.isArray(input?.safeAmenities) || input.safeAmenities.length < 1) {
//       return setErrorMessage('Select Any Safe Amenities!');
//     }
//     if (!input.smokingRole) return createToast('Select smoking role!');
//     if (!input.petRole) return createToast('Select pet role!');
//     if (!input.partyOrganizingRole) return createToast('Select Party Organizing role!');
//     if (!input.cookingRole) return createToast('Select Cooking role!');
//     if (!input.placeDescription) return createToast('Place Description is required!');
//     if (!input.coverImage) return createToast('Cover Image is required!');
//     if (!Array.isArray(input?.placeImages) || input.placeImages.length < 1) {
//       return createToast('Place Image is required!');
//     }
//     if (!input.currency) return createToast('Select a currency!');
//     if (!input.basePriceMonToThu) return createToast('Set Base Price!');
//     if (!input.basePriceFriToSun) return createToast('Set Base Price!');
//     if (!input.longTermPriceDiscount) return createToast('Set Long Term Price Discount!');
//     if (!input.stayNightMin) return createToast('Set Stay Night Minimum number!');
//     if (!input.stayNightMax) return createToast('Set Stay Night Maximum number!');

//     setIsLoading(true);

//     // Form Data
//     const formData = new FormData();
//     formData.append('propertyType', String(input.propertyType));
//     formData.append('placeName', String(input.placeName));
//     formData.append('rentalForm', String(input.rentalForm));
//     formData.append('country', String(input.country));
//     formData.append('street', String(input.street));
//     formData.append('availibility', String(input.parking));
//     formData.append('capacity',String(input.parking))
//     formData.append('roomNumber', String(input.roomNumber));
//     formData.append('city', String(input.city));
//     formData.append('state', String(input.state));
//     formData.append('postalCode', String(input.postalCode));
//     formData.append('acreage', String(input.acreage));
//     formData.append('guests', String(input.guests));
//     formData.append('bedroom', String(input.bedroom));
//     formData.append('beds', String(input.beds));
//     formData.append('bathroom', String(input.bathroom));
//     formData.append('kitchen', String(input.kitchen));
//     input.generalAmenities.forEach((item) => {
//       formData.append('generalAmenities', item);
//     });
//     input.otherAmenities.forEach((item) => {
//       formData.append('otherAmenities', item);
//     });
//     input.safeAmenities.forEach((item) => {
//       formData.append('safeAmenities', item);
//     });
//     formData.append('smokingRole', String(input.smokingRole));
//     formData.append('petRole', String(input.petRole));
//     formData.append('partyOrganizingRole', String(input.partyOrganizingRole));
//     formData.append('cookingRole', String(input.cookingRole));
//     Array.isArray(input.additionalRules) &&
//       input.additionalRules.forEach((item) => {
//         formData.append('additionalRules', item);
//       });
//     formData.append('placeDescription', String(input.placeDescription));
//     formData.append('currency', String(input.currency));
//     formData.append('basePriceMonToThu', String(input.basePriceMonToThu));
//     formData.append('basePriceFriToSun', String(input.basePriceFriToSun));
//     formData.append('longTermPriceDiscount', String(input.longTermPriceDiscount));
//     formData.append('stayNightMin', String(input.stayNightMin));
//     formData.append('stayNightMax', String(input.stayNightMax));
//     Array.isArray(input?.availabilityDate) &&
//       input?.availabilityDate?.forEach((item) => {
//         formData.append('availabilityDate', item);
//       });

//     // Image Upload
//     input.coverImage instanceof File && formData.append('coverImage', input.coverImage);

//     input.placeImages.forEach((file) => {
//       formData.append('placeImages', file);
//     });

//     const response = await axios
//       .post(`${process.env.NEXT_PUBLIC_BACKEND_URL}/property/add`, formData,{
//         headers: {
//           Authorization: ` ${token}`,
//         },
//       })
//       .then((res) => {
//         console.log(res.data);
//         setIsLoading(false);
//         createToast(res.data.message, 'success');

//         router.push('/');
//       })
//       .catch((error) => {
//         console.log(error.response.data.message);
//         setIsLoading(false);

//         createToast(error.response.data.message);
//       });
//   };

//   // handle negative number now allowed
//   useEffect(() => {
//     if (Number(input?.roomNumber) < 0) {
//       setInput((prevInput) => ({ ...prevInput, roomNumber: 0 }));
//     }
//     if (Number(input?.postalCode) < 0) {
//       setInput((prevInput) => ({ ...prevInput, postalCode: 0 }));
//     }

//     if (Number(input?.basePriceMonToThu) < 0) {
//       setInput((prevInput) => ({ ...prevInput, basePriceMonToThu: 0 }));
//     }
//     if (Number(input?.basePriceFriToSun) < 0) {
//       setInput((prevInput) => ({ ...prevInput, basePriceFriToSun: 0 }));
//     }
//     if (Number(input?.longTermPriceDiscount) < 0) {
//       setInput((prevInput) => ({ ...prevInput, longTermPriceDiscount: 0 }));
//     }
//     if (Number(input?.stayNightMin) < 0) {
//       setInput((prevInput) => ({ ...prevInput, stayNightMin: 0 }));
//     }
//     if (Number(input?.stayNightMax) < 0) {
//       setInput((prevInput) => ({ ...prevInput, stayNightMax: 0 }));
//     }
//   }, [input]);

//   return (
//     <div className={`nc-PageAddListing1 px-4 max-w-3xl mx-auto pb-24 pt-14 sm:py-24 lg:pb-32`}>
//       <form
//         onSubmit={handleFormSubmit}
//         className='space-y-11'>
//         <div>
//           <span className='text-4xl font-semibold'>{pageNumber}</span> <span className='text-lg text-neutral-500 dark:text-neutral-400'>/ 10</span>
//         </div>

//         {/* --------------------- */}
//         <div className='listingSection__wrap '>
//           <ContentComponent
//             input={input}
//             setInput={setInput}
//             handleInputChange={handleInputChange}
//             setPageNumber={setPageNumber}
//           />
//         </div>

//         {/* --------------------- */}
//         <div className='flex justify-end space-x-5'>
//           <ButtonSecondary
//             type='button'
//             onClick={handleBackButton}>
//             Go back
//           </ButtonSecondary>
//           {pageNumber > 9 ? (
//             <button
//               type='submit'
//               className='nc-Button relative h-auto inline-flex items-center justify-center rounded-full transition-colors text-sm sm:text-base font-medium px-4 py-3 sm:px-6  ttnc-ButtonPrimary disabled:bg-opacity-70 bg-primary-6000 hover:bg-primary-700 text-neutral-50  '>
//               {loading ? 'Loading...' : 'Publish listing'}
//             </button>
//           ) : (
//             <ButtonPrimary
//               type='button'
//               onClick={handleContinueButton}>
//               Continue
//             </ButtonPrimary>
//           )}
//         </div>

//         {/* <!-- Error Alert --> */}
//         {/* {errorMessage && (
//           <div className='flex justify-between px-6 border py-2  rounded-xl   '>
//             <p className='    text-red-500 text-base'>{errorMessage}</p>

//             <RxCross1
//               onClick={() => setErrorMessage('')}
//               className='text-black group-hover:text-red-500 cursor-pointer'
//             />
//           </div>
//         )} */}
//       </form>
//     </div>
//   );
// };

// export default Page;
// pages/CreateListing.js
