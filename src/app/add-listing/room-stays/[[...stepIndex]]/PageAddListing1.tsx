'use client';

import { MapPinIcon } from '@heroicons/react/24/solid';
import LocationMarker from '@/components/AnyReactComponent/LocationMarker';
import Label from '@/components/Label';
import GoogleMapReact from 'google-map-react';
import React, { FC, useEffect } from 'react';
import Input from '@/shared/Input';
import Select from '@/shared/Select';
import FormItem from '../FormItem';
import { PageAddingListing } from '@/types/types';


const PageAddListing1 = ({ input, setInput, handleInputChange }: PageAddingListing) => {
    return (
      <>
  
        <div className='w-14 border-b border-neutral-200 dark:border-neutral-700'></div>
        <div className='listingSection__wrap '>
          {/* FORM */}
  
          <div className='space-y-8'>
            <h2 className='text-lg font-semibold'>Choosing Listing Category</h2>
  
            <div className='grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-5'>
              <FormItem label=''>
                <Select
                  name='roomstays' placeholder='Room Stays'
                  value={input.roomstays as string | undefined}
                  onChange={handleInputChange}>
                  <option value='Room Stays'>Room Stays</option>
                  <option value='Time-Based'>Time-Based</option>
                  <option value='Hourly Rental Gear'>Hourly Rental Gear</option>
                  <option value='Find Roommate'>Find Roommate</option>
                  <option value='Experiences'>Experiences</option>
  
                </Select>
              </FormItem>
              <FormItem label=''>
                <Select
                  name='roomtype' placeholder='Room Type'
                  value={input.roomtype as string | undefined}
                  onChange={handleInputChange}>
                  <option value=''>Room Type</option>
                  <option value='Anytime'>Anytime</option>
                  <option value='Any type'>Any type</option>
                  <option value='Hostel'>Hostel</option>
                  <option value='Guesthouse'>Guesthouse</option>
                  <option value='Long term'>Long term</option>
                  <option value='Short Term'>Short Term</option>  
                </Select>
              </FormItem>
            </div>
            <h2 className='text-lg font-semibold'>Location</h2>
  
            <div className='grid md:grid-cols-2 gap-8 md:gap-5'>
              <FormItem label=''>
                <Input
                  name='location'
                  value={input.location as number | undefined}
                  onChange={handleInputChange}
                  type='text'
                  placeholder='Your Location'
                />
              </FormItem>
              <FormItem label=''>
                {/* <Select
                name='gps' placeholder='GPS Coordinates'
                value={input.country as string | undefined}
                onChange={handleInputChange}>
                <option value=''>GPS Coordinates</option>
  
              </Select> */}
                <Input
                  name='gps'
                  value={input.gps as number | undefined}
                  onChange={handleInputChange}
                  type='text'
                  placeholder='GPS Coordinates'
                />
              </FormItem>
              <FormItem label=''>
                <Input
                  name='city'
                  value={input.city as number | undefined}
                  onChange={handleInputChange}
                  type='text'
                  placeholder='City'
                />
              </FormItem>
              <FormItem label=''>
                <Input
                  name='street'
                  value={input.street as number | undefined}
                  onChange={handleInputChange}
                  type='text'
                  placeholder='Street'
                />
              </FormItem>
            </div>
            {/* <ButtonSecondary>
            <MapPinIcon className='w-5 h-5 text-neutral-500 dark:text-neutral-400' />
            <span className='ml-3'>Use current location</span>
          </ButtonSecondary> */}
            {/* ITEM */}
            {/* <FormItem label='Country/Region'>
            <Select
              name='country' placeholder='Room S'
              value={input.country as string | undefined}
              onChange={handleInputChange}>
              <option value=''>-Select-</option>
              <option value='Viet Nam'>Viet Nam</option>
              <option value='Thailand'>Thailand</option>
              <option value='France'>France</option>
              <option value='Singapore'>Singapore</option>
              <option value='Jappan'>Jappan</option>
              <option value='Korea'>Korea</option>
            </Select>
          </FormItem>
          <FormItem label='Street'>
            <Input
              name='street'
              value={input.street as string | undefined}
              onChange={handleInputChange}
              placeholder='type street'
            />
          </FormItem>
          <FormItem label='Room number (optional)'>
            <Input
              name='roomNumber'
              value={input.roomNumber as number | undefined}
              onChange={handleInputChange}
              placeholder='type room number'
              type='number'
            />
          </FormItem>
          <div className='grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-5'>
            <FormItem label='City'>
              <Input
                name='city'
                value={input.city as string | undefined}
                onChange={handleInputChange}
                type='text'
                placeholder='type city'
              />
            </FormItem>
            <FormItem label='State'>
              <Input
                name='state'
                value={input.state as string | undefined}
                onChange={handleInputChange}
                type='text'
                placeholder='type state'
              />
            </FormItem>
            <FormItem label='Postal code'>
              <Input
                name='postalCode'
                value={input.postalCode as number | undefined}
                onChange={handleInputChange}
                type='number'
                placeholder='type postal code'
              />
            </FormItem> */}
            {/* </div>
          <div>
            <Label>Detailed address</Label>
            <span className='block mt-1 text-sm text-neutral-500 dark:text-neutral-400'>1110 Pennsylvania Avenue NW, Washington, DC 20230</span>
            <div className='mt-4'>
              <div className='aspect-w-5 aspect-h-5 sm:aspect-h-3'>
                <div className='rounded-xl overflow-hidden'>
                  <GoogleMapReact
                    bootstrapURLKeys={{
                      key: 'AIzaSyAGVJfZMAKYfZ71nzL_v5i3LjTTWnCYwTY'
                    }}
                    yesIWantToUseGoogleMapApiInternals
                    defaultZoom={15}
                    defaultCenter={{
                      lat: 55.9607277,
                      lng: 36.2172614
                    }}>
                    <LocationMarker
                      lat={55.9607277}
                      lng={36.2172614}
                    />
                  </GoogleMapReact>
                </div>
              </div>
            </div>
          </div> */}
          </div>
        </div>
  
      </>
    );
  };
  
  export default PageAddListing1;
 
