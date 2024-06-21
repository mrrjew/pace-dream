
'use client';
import React, { Fragment } from 'react';
import ButtonPrimary from '@/shared/ButtonPrimary';
import ButtonSecondary from '@/shared/ButtonSecondary';
// import { ListingDataType } from '@/types/types';
import Image from 'next/image';
import Link from 'next/link';
import { Bed, Place, Shower, Star } from '@mui/icons-material';
import { FaWifi, FaParking } from 'react-icons/fa';
import { FaKitchenSet } from 'react-icons/fa6';
import { RentableItem } from '@/types/rentalItems';
import { AMENITIES_DATA } from '@/data/amenities';



const PageAddListing5 = (
  {data,onBackToHost}:{onBackToHost:()=>void, data:Partial<RentableItem>}
) => {
  const [selectedImage, setSelectedImage] = React.useState<number>(0)
  

  const amenities = [
    {
      icon: <FaParking />,
      label: "Parking",
      id: "parking",
    },
    { icon: <FaWifi />, label: "Wifi", id: "wifi" },
    { icon: <FaKitchenSet />, label: "Kitchen", id: "kitchen" },
  ];

  return (

    <div className='rounded-lg bg-white p-2 md:p-2'>
      <div>
        <p className="text-lg font-medium py-4">
          You are viewing this page as a guest
        </p>
      </div>


      <div className='grid grid-cols-1 md:grid-cols-3 gap-4'>
          {/* image and description */}
          <div className='space-y-4 col-span-2'>
            <div className=''>
              <Image 
                  className='rounded-lg h-72 w-full object-cover'
                  src={data?.gallery?.images?.at(selectedImage) || ''}
                  alt="Picture of the author"
                  width={500}
                  height={360}
                />
            </div>
            {/* images */}
            <div className='flex gap-2 items-center flex-wrap'>
                {
                  data?.gallery?.images?.map((img,index)=>{
                    return (
                      <div key={index}
                        className={`rounded-xl border-2  cursor-pointer ${selectedImage === index ? 'border-primary-500' : 'border-transparent'}`}
                        >
                        <Image 
                          onClick={()=>setSelectedImage(index)}
                          className='rounded-lg h-14 w-14 object-cover'
                          src={img}
                          alt="Picture of the author"
                          width={90}
                          height={90}
                        />
                      </div>
                    )
                  })
                
                }
            </div>

            {/* description */}
            <div className='space-y-4'>
              <p className='text-lg font-semibold'>
                {data?.title}
              </p>
              <p className='text-neutral-500 dark:text-neutral-400'>
                    {data?.details?.description || data?.summary}
                </p>
              <p>
                <Link href='#' className='text-primary-500 underline'>
                        Read more
                  </Link>
              </p>
            </div>
          </div>

          {/* property details */}
          <div className='grid grid-cols-1 h-fit gap-4 rounded-xl ring-1 ring-gray-300 p-4'>
            {/* title and rate*/}
              <div className='flex items-center gap-4 justify-start'>
                <span className='text-xs capitalize rounded-md p-2 py-4 bg-black text-white font-semibold'>
                  {(window?.location?.pathname.split('/').pop() || 'Room Stays').replaceAll('-', ' ').toLowerCase()}
                </span>
                <span className='text-neutral-600 flex items-center'>
                  <Star className='h-4 w-4 text-yellow-500' />
                    0 (0 Review)
                  </span>
              </div>
              <hr className='bg-gray-400 w-full' />
              {/* price, bed,bath */}
            <div className='flex items-center justify-between'>
                <div className='flex items-center'>
                  <span className='text-2xl font-semibold'>$
                    {parseFloat(data?.price?.at(0)?.amount?.toString() || '0')}
                  </span>
                  <span className='text-neutral-600 capitalize'>
                    /{data?.price?.at(0)?.frequency || 'night'}
                  </span>
                </div>
                <hr className='bg-gray-400 w-[0.5px] h-4 ' />
              <div>
                  <Bed />
                <span className='text-neutral-600'>
                  {data?.details?.bedroom_count} Bed
                </span>
              </div>
                <hr className='bg-gray-400 w-[0.5px] h-4 ' />
              <div>
                  <Shower />
                  <span className='text-neutral-600'>
                    {data?.details?.bathroom_count} Bath
                  </span>
            </div>
            </div>
            <hr className='bg-gray-400 w-full' />
            {/* location and map link */}
            <div className='flex items-center justify-between flex-nowrap'>
            <div className='flex items-center gap-1'>
              <Place className='text-primary-400 h-4 w-4' />
              <span className='text-neutral-400 max-w-56 overflow-hidden text-xs truncate'>
                {data?.location?.address}
              </span>
            </div>
              <a 
                  href={ data?.location?.googlemap_link || '#'}
                  target='_blank'
                className='text-primary-500 underline text-xs truncate'>
                View map
              </a>
            </div>
          {Number(data?.details?.amenities?.length) > 0 &&  <hr className='bg-gray-400 w-full' />}
            {/* amenities */}
            <div className='flex items-center justify-between overflow-x-scroll flex-nowrap'>
                {
                  data?.details?.amenities?.map((_id:string,index:number,array:Array<string>)=>{
                    const amenity = AMENITIES_DATA.find((a)=>a.id === _id);
                    if(!amenity) return null;
                    return (
                      <Fragment key={index}>
                      <div key={index} className='flex items-center gap-1'>
                        <div className='text-neutral-500'>{amenity.icon}</div>
                        {array.length <= 3 && <span className='text-neutral-600'>{amenity.label}</span>}
                      </div>
                      { index < (data?.details?.amenities?.length - 1) && <hr className='bg-gray-400 w-[0.5px] h-4 ' />}
                      </Fragment>
                    )
                  })
                }
            </div>
            <hr className='bg-gray-400 w-full' />
            {/* rules */}
            {/* <div className='flex items-center gap-2'>
                <div className='flex items-center gap-1 text-neutral-600'>
                <IoIosCloseCircle className='text-red-600' />
                No smoking inside
                </div>
                <hr className='bg-gray-400 w-[0.5px] h-4 ' />
                <div className='flex items-center gap-1 text-neutral-600'>
                  <IoIosCloseCircle className='text-red-600' />
                  No pets allowed
                </div>
              </div>
            <hr className='bg-gray-400 w-full' /> */}

            {/* unorded list rules */}
            <ul className='list-disc list-outside p-4 py-0'>
              {/* rules */}
              {
                data?.details?.rule_description?.split('\n')?.map((rule:string,index:number)=>{
                  return (
                    <li key={index} className='text-neutral-600'>
                      {rule}
                    </li>
                  )
                })
              }
              {/* <li className='text-neutral-600'>
                No smoking inside
              </li>
              <li className='text-neutral-600'>
              You just need to know basic manners.
              </li> */}
            </ul>
            <hr className='border-none bg-transparent w-full' />
            {/* buttons */}
            <div className='grid gap-4'>
              <ButtonSecondary className='w-full rounded-lg ring-1 ring-primary-700 text-primary-700'>Contact Host</ButtonSecondary>
              <ButtonPrimary className='w-full rounded-lg'>Book now</ButtonPrimary>
            </div>

          </div>
      </div>
    </div>
  );
};

export default PageAddListing5;
