import React, { FC } from 'react';
import Input from '@/shared/Input';
import Select from '@/shared/Select';
import FormItem from '../FormItem';
import { PageAddingListing } from '@/types/types';

const PageAddListing6 = ({ input, setInput, handleInputChange }: PageAddingListing) => {
  return (
    <>
      <div>
        <h2 className='text-2xl font-semibold'>Your place description for client</h2>
        <span className='block mt-2 text-neutral-500 dark:text-neutral-400'>Mention the best features of your accommodation, any special amenities like fast Wi-Fi or parking, as well as things you like about the neighborhood.</span>
      </div>

      <textarea
        name='placeDescription'
        value={input.placeDescription as string | undefined}
        onChange={handleInputChange}
        className={`block w-full text-sm rounded-2xl border-neutral-200 focus:border-primary-300 focus:ring focus:ring-primary-200 focus:ring-opacity-50 bg-white dark:border-neutral-700 dark:focus:ring-primary-6000 dark:focus:ring-opacity-25 dark:bg-neutral-900 `}
        rows={14}
        placeholder='Type Place Description...'
      />
      <div>
      <h2 className='text-2xl font-semibold'>Parking</h2>
      </div>
       <FormItem
          label='Parking Availability'>
          <Select
            name='availability'
            value={input.availability as any}
            onChange={handleInputChange}>
            <option value=''>-Select-</option>
            <option value='Yes'>Yes</option>
            <option value='No'>No</option>
          </Select>
        </FormItem>
        <FormItem
          label='Parking capacity'>
          <Input
            name='capacity'
            value={input.capacity as number | undefined}
            onChange={handleInputChange}
            placeholder='Parking capacity'
          />
        </FormItem>
    </>
  );
};

export default PageAddListing6;
