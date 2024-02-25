import StayCard from '@/components/StayCard';
import { DEMO_STAY_LISTINGS } from '@/data/listings';
import React from 'react';
import ButtonPrimary from '@/shared/ButtonPrimary';
import ButtonSecondary from '@/shared/ButtonSecondary';
import { EyeIcon, PencilSquareIcon } from '@heroicons/react/24/outline';
import { Route } from '@/routers/types';
import { PageAddingListing } from '@/types/types';
import useFormFields from '@/hooks/useFormFields';

const PageAddListing10 = ({ input, setInput, handleInputChange, setPageNumber }: PageAddingListing) => {
  
  return (
    <>
      <div>
        <h2 className='text-2xl font-semibold'>Congratulations 🎉</h2>
        <span className='block mt-2 text-neutral-500 dark:text-neutral-400'>Excellent, congratulations on completing the listing, it is waiting to be reviewed for publication</span>
      </div>
      <div className='w-14 border-b border-neutral-200 dark:border-neutral-700'></div>
      {/* FORM */}
      <div>
        <h3 className='text-lg font-semibold'>This is your listing</h3>
        <div className='max-w-xs'>
          <h1>{!input.propertyType}</h1>
          <StayCard
            className='mt-8'
            data={{ ...DEMO_STAY_LISTINGS[0], reviewStart: 0 }}
          />
        </div>
        <div className='flex items-center space-x-5 mt-8'>
          <ButtonSecondary onClick={() => setPageNumber && setPageNumber(1)}>
            <PencilSquareIcon className='h-5 w-5' />
            <span className='ml-3'>Edit</span>
          </ButtonSecondary>

          <ButtonPrimary>
            <EyeIcon className='h-5 w-5' />
            <span className='ml-3'>Preview</span>
          </ButtonPrimary>
        </div>
      </div>
      {/*  */}
    </>
  );
};

export default PageAddListing10;
