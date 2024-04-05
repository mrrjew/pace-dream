import React, { FC } from 'react';
import Input from '@/components/ListingComponents/Input';
import Select from '@/shared/Select';
import FormItem from '../FormItem';
import { PageAddingListing } from '@/types/types';

export interface PageAddListing8Props {}

const PageAddListing8 = ({ input, setInput, handleInputChange }: PageAddingListing) => {
  return (
    <>
      <div>
        <h2 className='text-2xl font-semibold'>Price your space</h2>
        <span className='block mt-2 text-neutral-500 dark:text-neutral-400'>
          {` The host's revenue is directly dependent on the setting of rates and
            regulations on the number of guests, the number of nights, and the
            cancellation policy.`}
        </span>
      </div>
      <div className='w-14 border-b border-neutral-200 dark:border-neutral-700'></div>
      {/* FORM */}
      <div className='space-y-8'>
        {/* ITEM */}
        <FormItem label='Currency'>
          <Select
            name='currency'
            value={input.currency as string}
            onChange={handleInputChange}>
            <option value=''>-Select-</option>
            <option value='USD'>USD</option>
            <option value='VND'>VND</option>
            <option value='EURRO'>EURRO</option>
          </Select>
        </FormItem>
        <FormItem label='Base price  (Monday -Thuday)'>
          <div className='relative'>
            <div className='absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none'>
              <span className='text-gray-500'>$</span>
            </div>
            <Input
              className='!pl-8 !pr-10'
              placeholder='0.00'
              type='number'
              name='basePriceMonToThu'
              input={input}
              handleInputChange={handleInputChange}
            />
            <div className='absolute inset-y-0 right-0 pr-3 flex items-center pointer-events-none'>
              <span className='text-gray-500'>USD</span>
            </div>
          </div>
        </FormItem>
        {/* ----- */}
        <FormItem label='Base price  (Friday-Sunday)'>
          <div className='relative'>
            <div className='absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none'>
              <span className='text-gray-500'>$</span>
            </div>
            <Input
              className='!pl-8 !pr-10'
              placeholder='0.00'
              type='number'
              name='basePriceFriToSun'
              input={input}
              handleInputChange={handleInputChange}
            />
            <div className='absolute inset-y-0 right-0 pr-3 flex items-center pointer-events-none'>
              <span className='text-gray-500'>USD</span>
            </div>
          </div>
        </FormItem>
        {/* ----- */}
        <FormItem label='Long term price (Monthly discount) '>
          <div className='relative'>
            <div className='absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none'>
              <span className='text-gray-500'>%</span>
            </div>
            <Input
              className='!pl-8 !pr-10'
              placeholder='0.00'
              type='number'
              name='longTermPriceDiscount'
              input={input}
              handleInputChange={handleInputChange}
            />
            <div className='absolute inset-y-0 right-0 pr-3 flex items-center pointer-events-none'>
              <span className='text-gray-500'>every month</span>
            </div>
          </div>
        </FormItem>
      </div>
    </>
  );
};

export default PageAddListing8;
