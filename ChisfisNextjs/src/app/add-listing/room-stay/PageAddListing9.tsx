'use client';

import DatePickerCustomDay from '@/components/DatePickerCustomDay';
import DatePickerCustomHeaderTwoMonth from '@/components/DatePickerCustomHeaderTwoMonth';
import NcInputNumber from '@/components/ListingComponents/NcInputNumber';
import { PageAddingListing } from '@/types/types';
import React from 'react';
import DatePicker from 'react-datepicker';

export interface PageAddListing9Props {}

const PageAddListing9 = ({ input, setInput, handleInputChange }: PageAddingListing) => {

  return (
    <>
      <div>
        <h2 className='text-2xl font-semibold'>How long can guests stay?</h2>
        <span className='block mt-2 text-neutral-500 dark:text-neutral-400'>
          {` Shorter trips can mean more reservations, but you'll turn over your
          space more often.`}
        </span>
      </div>
      <div className='w-14 border-b border-neutral-200 dark:border-neutral-700'></div>
      {/* FORM */}
      <div className='space-y-7'>
        {/* ITEM */}
        <NcInputNumber
          label='Nights min'
          name='stayNightMin'
          value={input.stayNightMin as number | undefined}
          setInput={setInput}
        />
        <NcInputNumber
          label='Nights max'
          name='stayNightMax'
          value={input.stayNightMax as number | undefined}
          setInput={setInput}
        />
      </div>

      {/*  */}
      <div>
        <h2 className='text-2xl font-semibold'>Set your availability</h2>
        <span className='block mt-2 text-neutral-500 dark:text-neutral-400'>Editing your calendar is easy—just select a date to block or unblock it. You can always make changes after you publish.</span>
      </div>

      <div className='addListingDatePickerExclude'>
        <DatePicker
          // onChange={(date) => {
          //   let newDates = [];

          //   if (!date) {
          //     return;
          //   }
          //   const newTime = date.getTime();
          //   if (input.availabilityDate.includes(newTime)) {
          //     newDates = input.availabilityDate.filter((item) => item !== newTime);
          //   } else {
          //     newDates = [...input.availabilityDate, newTime];
          //   }
          //   setInput((prevState) => ({ ...prevState, availabilityDate: newDates }));
          // }}
          onChange={(date) => {
            let newDates: number[] = [];

            if (!date) {
              return;
            }

            const newTime = date.getTime();

            // Use optional chaining to check if input.availabilityDate is defined
            if (Array.isArray(input?.availabilityDate) && input?.availabilityDate?.includes(newTime)) {
              newDates = input.availabilityDate.filter((item) => item !== newTime);
            } else {
              // If input.availabilityDate is undefined, default to an empty array
              newDates = [...(input.availabilityDate as []), newTime];
            }

            setInput((prevState) => ({ ...prevState, availabilityDate: newDates }));
          }}
          // selected={dates}
          minDate={new Date()}
          monthsShown={2}
          showPopperArrow={false}
          excludeDates={Array.isArray(input?.availabilityDate) ? input?.availabilityDate.filter(Boolean)?.map((item) => new Date(item)) : []}
          inline
          renderCustomHeader={(p) => <DatePickerCustomHeaderTwoMonth {...p} />}
          renderDayContents={(day, date) => (
            <DatePickerCustomDay
              dayOfMonth={day}
              date={date}
            />
          )}
        />
      </div>
    </>
  );
};

export default PageAddListing9;
