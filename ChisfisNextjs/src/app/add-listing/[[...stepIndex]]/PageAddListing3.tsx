import React, { FC } from 'react';
import Select from '@/shared/Select';
import FormItem from '../FormItem';
import { PageAddingListing } from '@/types/types';
import NcInputNumber from '@/components/ListingComponents/NcInputNumber';

const PageAddListing3 = ({ input, setInput, handleInputChange }: PageAddingListing) => {
  return (
    <>
      <h2 className='text-2xl font-semibold'>Size of your location</h2>
      <div className='w-14 border-b border-neutral-200 dark:border-neutral-700'></div>
      {/* FORM */}
      <div className='space-y-8'>
        {/* ITEM */}
        <FormItem label='Acreage (m2)'>
          <Select
            name='acreage'
            value={input.acreage as string | undefined}
            onChange={handleInputChange}>
            <option value=''>-Select-</option>
            <option value='100'>100</option>
            <option value='200'>200</option>
            <option value='300'>300</option>
            <option value='400'>400</option>
            <option value='500'>500</option>
          </Select>
        </FormItem>
        <NcInputNumber
          label='Guests'
          name='guests'
          value={input.guests as number | undefined}
          setInput={setInput}
        />
        <NcInputNumber
          label='Bedroom'
          name='bedroom'
          value={input.bedroom as number | undefined}
          setInput={setInput}
        />
        <NcInputNumber
          label='Beds'
          name='beds'
          value={input.beds as number | undefined}
          setInput={setInput}
        />
        <NcInputNumber
          label='Bathroom'
          name='bathroom'
          value={input.bathroom as number | undefined}
          setInput={setInput}
        />
        <NcInputNumber
          label='Kitchen'
          name='kitchen'
          value={input.kitchen as number | undefined}
          setInput={setInput}
        />
      </div>
    </>
  );
};

export default PageAddListing3;
