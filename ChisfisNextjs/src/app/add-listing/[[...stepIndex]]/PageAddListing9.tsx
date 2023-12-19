'use client';

import DatePickerCustomDay from '@/components/DatePickerCustomDay';
import DatePickerCustomHeaderTwoMonth from '@/components/DatePickerCustomHeaderTwoMonth';
import NcInputNumber from '@/components/NcInputNumber';
import { PageAddingListing } from '@/types/types';
import React, { useState } from 'react';
import DatePicker from 'react-datepicker';

export interface PageAddListing9Props {}

const PageAddListing9 = ({ input, setInput, handleInputChange }: PageAddingListing) => {
  const [dates, setDates] = useState<number[]>([]);

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
          onChange={(date) => {
            let newDates = [];

            if (!date) {
              return;
            }
            const newTime = date.getTime();
            if (dates.includes(newTime)) {
              newDates = dates.filter((item) => item !== newTime);
            } else {
              newDates = [...dates, newTime];
            }
            setDates(newDates);
          }}
          // selected={dates}
          minDate={new Date()}
          monthsShown={2}
          showPopperArrow={false}
          excludeDates={dates.filter(Boolean).map((item) => new Date(item))}
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
