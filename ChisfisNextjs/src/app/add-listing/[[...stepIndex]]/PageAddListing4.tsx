import React, { FC } from 'react';
import Checkbox from '@/shared/Checkbox';
import { PageAddingListing } from '@/types/types';

const PageAddListing4 = ({ input, setInput, handleInputChange }: PageAddingListing) => {
  // General Amenities list
  const generalAmentiesList = [
    {
      label: 'Wifi',
      name: 'Wifi'
    },
    {
      label: 'Internet',
      name: 'Internet'
    },
    {
      label: 'TV',
      name: 'TV'
    },
    {
      label: 'Air conditioning',
      name: 'Air conditioning'
    },
    {
      label: 'Fan',
      name: 'Fan'
    },
    {
      label: 'Private entrance',
      name: 'Private entrance'
    },
    {
      label: 'Dryer',
      name: 'Dryer'
    },
    {
      label: 'Heater',
      name: 'Heater'
    },
    {
      label: 'Washing machine',
      name: 'Washing machine'
    },
    {
      label: 'Detergent',
      name: 'Detergent'
    },
    {
      label: 'Clothes dryer',
      name: 'Clothes dryer'
    },
    {
      label: 'Baby cot',
      name: 'Baby cot'
    },
    {
      label: 'Desk',
      name: 'Desk '
    },
    {
      label: 'Fridge',
      name: 'Fridge'
    },
    {
      label: 'Dryer',
      name: 'Dryer'
    }
  ];
  // Other Amenities list
  const otherAmentiesList = [
    {
      label: 'Wardrobe',
      name: 'Wardrobe'
    },
    {
      label: 'Cloth hook',
      name: 'Cloth hook'
    },
    {
      label: 'Extra cushion',
      name: 'Extra cushion'
    },
    {
      label: 'Gas stove',
      name: 'Gas stove'
    },
    {
      label: 'Toilet paper',
      name: 'Toilet paper'
    },
    {
      label: 'Free toiletries',
      name: 'Free toiletries'
    },
    {
      label: 'Makeup table',
      name: 'Makeup table'
    },
    {
      label: 'Hot pot',
      name: 'Hot pot'
    },
    {
      label: 'Bathroom heaters',
      name: 'Bathroom heaters'
    },
    {
      label: 'Kettle',
      name: 'Kettle'
    },
    {
      label: 'Dishwasher',
      name: 'Dishwasher'
    },
    {
      label: 'BBQ grill',
      name: 'BBQ grill'
    },
    {
      label: 'Toaster',
      name: 'Toaster'
    },
    {
      label: 'Towel',
      name: 'Towel'
    },
    {
      label: 'Dining table',
      name: 'Dining table'
    }
  ];

  // Safe Amenities list
  const safeAmentiesList = [
    {
      label: 'Fire siren',
      name: 'Fire siren'
    },
    {
      label: 'Fire extinguisher',
      name: 'Fire extinguisher'
    },
    {
      label: 'Anti-theft key',
      name: 'Anti-theft key'
    },
    {
      label: 'Safe vault',
      name: 'Safe vault'
    }
  ];

  return (
    <>
      <div>
        <h2 className='text-2xl font-semibold'>Amenities </h2>
        <span className='block mt-2 text-neutral-500 dark:text-neutral-400'>Many customers have searched for accommodation based on amenities criteria</span>
      </div>
      <div className='w-14 border-b border-neutral-200 dark:border-neutral-700'></div>
      {/* FORM */}
      <div className='space-y-8'>
        {/* ITEM */}
        <div>
          <label
            className='text-lg font-semibold'
            htmlFor=''>
            General amenities
          </label>
          <div className='mt-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5'>
            {generalAmentiesList?.map((item, index) => (
              <Checkbox
                inputName='generalAmenities'
                key={index}
                label={item.label}
                name={item.name}
                defaultChecked={Array.isArray(input?.generalAmenities) && input.generalAmenities.includes(item.name)}
                input={input}
                setInput={setInput}
              />
            ))}
          </div>
        </div>

        {/* ITEM */}
        <div>
          <label
            className='text-lg font-semibold'
            htmlFor=''>
            Other amenities
          </label>
          <div className='mt-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5'>
            {otherAmentiesList?.map((item, index) => (
              <Checkbox
                inputName='otherAmenities'
                key={index}
                label={item.label}
                name={item.name}
                defaultChecked={Array.isArray(input?.otherAmenities) && input.otherAmenities.includes(item.name)}
                input={input}
                setInput={setInput}
              />
            ))}
          </div>
        </div>

        {/* ITEM */}
        <div>
          <label
            className='text-lg font-semibold'
            htmlFor=''>
            Safe amenities
          </label>
          <div className='mt-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5'>
            {safeAmentiesList?.map((item, index) => (
              <Checkbox
                inputName='safeAmenities'
                key={index}
                label={item.label}
                name={item.name}
                defaultChecked={Array.isArray(input?.safeAmenities) && input.safeAmenities.includes(item.name)}
                input={input}
                setInput={setInput}
              />
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default PageAddListing4;
