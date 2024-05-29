"use client";

import React, { useState } from "react";
import PageAddListing1 from "./PageAddListing1";
import PageAddListing2 from "./PageAddListing2";
import PageAddListing3 from "./PageAddListing3";
import PageAddListing4 from "./PageAddListing4";
import ButtonSecondary from "@/shared/ButtonSecondary";
import ButtonPrimary from "@/shared/ButtonPrimary";
import { useMultiStepForm } from "@/hooks/useMultiStepForm";
import {
  RoomImg,
  TimeImg,
  HourlyImg,
  FindImg,
  LastminutesImg,
  ExperiencesImg,
} from "@/images";
import Sidebar from "../../SideBar";
import Link from "next/link";

type FormData = {
  propertyType: string;
  placeName: string;
  rentalForm: string;
  hourlyrate: string;
  street: string;
  otherservices: string;
  city: string;
  state: string;
  postalCode: string;
  acreage: string;
  guests: number;
  bedroom: number;
  beds: number;
  bathroom: number;
  kitchen: number;
  generalAmenities: string[];
  otherAmenities: string[];
  safeAmenities: string[];
  smokingRole: string;
  petRole: string;
  partyOrganizingRole: string;
  cookingRole: string;
  additionalRules: string[];
  placeDescription: string;
  availability: boolean;
  capacity: number;
  currency: string;
  basePriceMonToThu: number;
  basePriceFriToSun: number;
  longTermPriceDiscount: number;
  stayNightMin: number;
  stayNightMax: number;
  coverImage: string;
  placeImages: string[];
  availabilityDate: string[];
};

const titles = [
  "Choosing Categories & Location",
  "General amenities, Other amenities & photos",
  "House rules for guest & Date & Pricing",
  "",
];

const options = [
  {
    href: "/add-listing/room-stays",
    img: RoomImg,
    alt: "Room Stays",
    label: "Room Stays",
  },
  {
    href: "/add-listing/time-based",
    img: TimeImg,
    alt: "Time-Based",
    label: "Time-Based",
  },
  {
    href: "/add-listing/hourly-rental-gear",
    img: HourlyImg,
    alt: "Hourly Rental Gear",
    label: "Hourly Rental Gear",
  },
  {
    href: "/add-listing/find-roommate",
    img: FindImg,
    alt: "Find Roommate",
    label: "Find Roommate",
  },
  {
    href: "/add-listing/experience",
    img: ExperiencesImg,
    alt: "Experiences",
    label: "Experiences",
  },
  {
    href: "/add-listing/last-minutes",
    img: LastminutesImg,
    alt: "Last minutes",
    label: "Last minutes",
  },
];

const InitialData: FormData = {
  propertyType: "",
  placeName: "",
  rentalForm: "",
  hourlyrate: "",
  street: "",
  otherservices: "",
  city: "",
  state: "",
  postalCode: "",
  acreage: "",
  guests: 0,
  bedroom: 0,
  beds: 0,
  bathroom: 0,
  kitchen: 0,
  generalAmenities: [],
  otherAmenities: [],
  safeAmenities: [],
  smokingRole: "",
  petRole: "",
  partyOrganizingRole: "",
  cookingRole: "",
  additionalRules: [],
  placeDescription: "",
  availability: true,
  capacity: 0,
  currency: "",
  basePriceMonToThu: 0,
  basePriceFriToSun: 0,
  longTermPriceDiscount: 0,
  stayNightMin: 0,
  stayNightMax: 0,
  coverImage: "",
  placeImages: [],
  availabilityDate: [],
};

const Page = () => {
  const [data, setData] = useState(InitialData);
  const {
    steps,
    currentStepIndex,
    step,
    next,
    back,
    goToStep,
    isFirstStep,
    isLastStep,
  } = useMultiStepForm([
    <PageAddListing1 />,
    <PageAddListing2 />,
    <PageAddListing3 />,
    <PageAddListing4 />,
  ]);

  return (
    <div className={`nc-PageAddListing1 max-w-screen flex pb-24 lg:pb-32`}>
      <Sidebar options={options} />
      <form className="space-y-4 md:ml-16 md:mr-48 p-4 sm:mt-8 md:p-4 w-full">
        {/* <div>
          <span className="text-2xl sm:text-4xl mb-8 font-semibold">
            {titles[currentStepIndex]}
          </span>
        </div> */}
        {step}
        <div className="flex justify-end space-x-5">
          {!isFirstStep && (
            <ButtonSecondary type="button" onClick={back}>
              Go back
            </ButtonSecondary>
          )}
          {isFirstStep && (
            <Link href="/add-listing">
              <ButtonSecondary type="button">Go back</ButtonSecondary>
            </Link>
          )}

          {isLastStep ? (
            <button
              type="submit"
              className="nc-Button relative h-auto inline-flex items-center justify-center rounded-full transition-colors text-sm sm:text-base font-medium px-4 py-3 sm:px-6  ttnc-ButtonPrimary disabled:bg-opacity-70 bg-primary-6000 hover:bg-primary-700 text-neutral-50  "
            >
              {
                // loading ? "Loading..." :
                "Publish listing"
              }
            </button>
          ) : (
            <ButtonPrimary type="button" onClick={next}>
              Next
            </ButtonPrimary>
          )}
        </div>
      </form>
    </div>
  );
};

export default Page;

// const Page = () => {
//   // const [pageNumber, setPageNumber] = useState(1);
//   // const titles = ["Choosing Categories & Location", "General amenities, Other amenities & photos", "House rules for guest & Date & Pricing", ""];
//   // const userdata = Cookies.get('user_info');
//   // const user = userdata ? JSON.parse(userdata) : null;
//   // const token = Cookies.get('auth-token');
//   // const { input, setInput, handleInputChange } = useFormFields({
//   //   propertyType: '',
//   //   placeName: '',
//   //   rentalForm: '',
//   //   hourlyrate: '',
//   //   street: '',
//   //   otherservices: '',
//   //   city: '',
//   //   state: '',
//   //   postalCode: '',
//   //   acreage: '',
//   //   guests: 0,
//   //   bedroom: 0,
//   //   beds: 0,
//   //   bathroom: 0,
//   //   kitchen: 0,
//   //   generalAmenities: [],
//   //   otherAmenities: [],
//   //   safeAmenities: [],
//   //   smokingRole: '',
//   //   petRole: '',
//   //   partyOrganizingRole: '',
//   //   cookingRole: '',
//   //   additionalRules: [],
//   //   placeDescription: '',
//   //     availability: true,
//   //     capacity: 0,
//   //   currency: '',
//   //   basePriceMonToThu: 0,
//   //   basePriceFriToSun: 0,
//   //   longTermPriceDiscount: 0,
//   //   stayNightMin: 0,
//   //   stayNightMax: 0,
//   //   coverImage: '',
//   //   placeImages: [],
//   //   availabilityDate: []
//   // });
//   // const handlePropertyTypeSelection = (type: string) => {
//   //   setInput({ ...input, propertyType: type });
//   // };

//   // const [errorMessage, setErrorMessage] = useState('');
//   // const router = useRouter();
//   // const [loading, setIsLoading] = useState(false);
//   // let ContentComponent = PageAddListing1;
//   // switch (Number(pageNumber)) {
//   //   case 1:
//   //     ContentComponent = PageAddListing1;
//   //     break;
//   //   case 2:
//   //     ContentComponent = PageAddListing2;
//   //     break;
//   //   case 3:
//   //     ContentComponent = PageAddListing3;
//   //     break;
//   //   case 4:
//   //     ContentComponent = PageAddListing4;
//   //     break;

//   //   default:
//   //     ContentComponent = PageAddListing1;
//   //     break;
//   // }

//   // Continue Button Handler
//   // const handleContinueButton = () => {
//   //   if (pageNumber >= 4) return setPageNumber(5);

//   //   setPageNumber(pageNumber + 1);
//   // };
//   // Back Button Handler
//   // const handleBackButton = () => {
//   //   if (pageNumber <= 1) return setPageNumber(1);

//   //   setPageNumber(pageNumber - 1);
//   // };

//   // Form Submit Handler
// //   const handleFormSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
// //     e.preventDefault();

// //     setIsLoading(true);

// //     // Form Data
// //     const formData = new FormData();
// //     formData.append('propertyType', String(input.roomstays));
// //     formData.append('roomType', String(input.roomtype));
// //     formData.append('location', String(input.location));
// //     formData.append('gps', String(input.gps));
// //     formData.append('city', String(input.city));
// //     formData.append('street', String(input.street));
// //     formData.append('startDate',String(input.startDate))
// //     formData.append('endDate', String(input.endDate));
// //     formData.append('hourlyrate', String(input.hourlyrate));
// //     formData.append('otherservices', String(input.otherservices));

// //     // Image Upload
// //     input.coverImage instanceof File && formData.append('coverImage', input.coverImage);

// //     // input.placeImages.forEach((file) => {
// //     //   formData.append('placeImages', file);
// //     // });
// // console.log(formData);
// //     const response = await axios
// //       .post(`${process.env.NEXT_PUBLIC_BACKEND_URL}/roommate/add/room`, formData,{
// //         headers: {
// //           Authorization: ` ${token}`,
// //         },
// //       })
// //       .then((res) => {
// //         console.log(res.data);
// //         setIsLoading(false);
// //         createToast(res.data.message, 'success');

// //         router.push('/');
// //       })
// //       .catch((error) => {
// //         console.log(error.response.data.message);
// //         setIsLoading(false);

// //         createToast(error.response.data.message);
// //       });
// //   };

//   // handle negative number now allowed
//   // useEffect(() => {
//   //   if (Number(input?.roomNumber) < 0) {
//   //     setInput((prevInput) => ({ ...prevInput, roomNumber: 0 }));
//   //   }
//   //   if (Number(input?.postalCode) < 0) {
//   //     setInput((prevInput) => ({ ...prevInput, postalCode: 0 }));
//   //   }

//   //   if (Number(input?.basePriceMonToThu) < 0) {
//   //     setInput((prevInput) => ({ ...prevInput, basePriceMonToThu: 0 }));
//   //   }
//   //   if (Number(input?.basePriceFriToSun) < 0) {
//   //     setInput((prevInput) => ({ ...prevInput, basePriceFriToSun: 0 }));
//   //   }
//   //   if (Number(input?.longTermPriceDiscount) < 0) {
//   //     setInput((prevInput) => ({ ...prevInput, longTermPriceDiscount: 0 }));
//   //   }
//   //   if (Number(input?.stayNightMin) < 0) {
//   //     setInput((prevInput) => ({ ...prevInput, stayNightMin: 0 }));
//   //   }
//   //   if (Number(input?.stayNightMax) < 0) {
//   //     setInput((prevInput) => ({ ...prevInput, stayNightMax: 0 }));
//   //   }
//   // }, [input]);

//   return (
//     <div className={`nc-PageAddListing1 px-4 max-w-3xl mx-auto pb-24 pt-14 sm:py-24 lg:pb-32`}>
//       <form
//         // onSubmit={handleFormSubmit}
//         className='space-y-11'>
//         {/* <div>
//           <span className='text-4xl font-semibold'>{titles[pageNumber - 1]}</span>
//         </div> */}

//         {/* --------------------- */}
//         {/* <div className='listingSection'>
//           <ContentComponent
//             input={input}
//             setInput={setInput}
//             handleInputChange={handleInputChange}
//             setPageNumber={setPageNumber}
//           />
//         </div> */}

//         {/* --------------------- */}
//         {/* <div className='flex justify-end space-x-5'>
//           <ButtonSecondary
//             type='button'
//             onClick={handleBackButton}>
//             Go back
//           </ButtonSecondary>
//           {pageNumber > 3 ? (
//             <button
//               type='submit'
//               className='nc-Button relative h-auto inline-flex items-center justify-center rounded-full transition-colors text-sm sm:text-base font-medium px-4 py-3 sm:px-6  ttnc-ButtonPrimary disabled:bg-opacity-70 bg-primary-6000 hover:bg-primary-700 text-neutral-50  '>
//               {loading ? 'Loading...' : 'Publish listing'}
//             </button>
//           ) : (
//             <ButtonPrimary
//               type='button'
//               onClick={handleContinueButton}>
//               Next
//             </ButtonPrimary>
//           )}
//         </div> */}

//       </form>
//     </div>
//   );
// };

// export default Page;
