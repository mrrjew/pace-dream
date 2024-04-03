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
                    <h2 className='text-lg font-semibold'>Roommate Details</h2>

                    <div className='grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-5'>
                        <FormItem label=''>
                            <Select
                                name='roomstays' placeholder='Time based'
                                value={input.roomstays as string | undefined}
                                onChange={handleInputChange}>
                                <option value='Find Roommate'>Find Roommate</option>
                                <option value='Time-Based'>Time-Based</option>
                                <option value='Room Stays'>Room Stays</option>
                                <option value='Hourly Rental Gear'>Hourly Rental Gear</option>
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
                    <h2 className='text-lg font-semibold'>Location & Accommadation Type</h2>
                    <div>
                        <div className='grid md:grid-cols-1 gap-8 md:gap-5'>
                            <FormItem label=''>
                                <Input
                                    name='location'
                                    value={input.location as number | undefined}
                                    onChange={handleInputChange}
                                    type='text'
                                    placeholder='Your Location'
                                />
                            </FormItem>
                        </div>
                    </div>

                    <div className='grid md:grid-cols-2 gap-8 md:gap-5'>
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
                        <FormItem label=''>
                        <Select
                                name='gender' placeholder='Gender'
                                value={input.gender as string | undefined}
                                onChange={handleInputChange}>
                                <option value=''>Gender</option>
                                <option value='Male'>Male</option>
                                <option value='Female'>Female</option>                               
                            </Select>
                        </FormItem>
                        <FormItem label=''>
                            <Input
                                name='habits'
                                value={input.habits as number | undefined}
                                onChange={handleInputChange}
                                type='text'
                                placeholder='habits'
                            />
                        </FormItem>
                    </div>
                </div>
            </div >
            <div className='space-y-8'>
                <div>
                    <label
                        className='text-lg font-semibold'
                        htmlFor=''>
                        Pictures of the place
                    </label>
                    <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2 mt-5">
                            Upload the place photos
                        </label>
                    </div>

                    <div className='mt-5 '>
                        <div className='mt-1 flex justify-center px-6 pt-5 pb-6 border-2 border-neutral-300 dark:border-neutral-6000 border-dashed rounded-md'>
                            <div className='space-y-1 text-center'>
                                <svg
                                    className='mx-auto h-12 w-12 text-neutral-400'
                                    stroke='currentColor'
                                    fill='none'
                                    viewBox='0 0 48 48'
                                    aria-hidden='true'>
                                    <path
                                        d='M28 8H12a4 4 0 00-4 4v20m32-12v8m0 0v8a4 4 0 01-4 4H12a4 4 0 01-4-4v-4m32-4l-3.172-3.172a4 4 0 00-5.656 0L28 28M8 32l9.172-9.172a4 4 0 015.656 0L28 28m0 0l4 4m4-24h8m-4-4v8m-12 4h.02'
                                        strokeWidth='2'
                                        strokeLinecap='round'
                                        strokeLinejoin='round'></path>
                                </svg>

                                {input?.coverImage instanceof File && input?.coverImage.name && <p className='text-xs text-neutral-500 dark:text-neutral-400'>{input.coverImage.name}</p>}

                                <div className='flex text-sm text-neutral-6000 dark:text-neutral-300'>
                                    <label
                                        htmlFor='file-upload'
                                        className='relative cursor-pointer  rounded-md font-medium text-primary-6000 hover:text-primary-500 focus-within:outline-none focus-within:ring-2 focus-within:ring-offset-2 focus-within:ring-primary-500'>
                                        <span>Upload a file</span>
                                        <input
                                            id='file-upload'
                                            name='coverImage'
                                            onChange={(e) => {
                                                setInput((prevState) => ({ ...prevState, coverImage: e?.target?.files?.[0] }));
                                            }}
                                            accept='.jpg, .jpeg, .png,.gif'
                                            type='file'
                                            className='sr-only'
                                        />
                                    </label>
                                    <p className='pl-1'>or drag and drop</p>
                                </div>
                                <p className='text-xs text-neutral-500 dark:text-neutral-400'>PNG,JPEG, JPG, GIF up to 10MB</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default PageAddListing1;
