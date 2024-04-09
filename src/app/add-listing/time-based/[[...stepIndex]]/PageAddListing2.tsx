import React, { FC } from 'react';
import Select from '@/shared/Select';
import Input from '@/shared/Input';
import FormItem from '../FormItem';
import { PageAddingListing } from '@/types/types';
import NcInputNumber from '@/components/ListingComponents/NcInputNumber';
import Checkbox from '@/components/ListingComponents/Checkbox';


const PageAddListing2 = ({ input, setInput, handleInputChange }: PageAddingListing) => {

    return (
        <>
            <div className='w-14 border-b border-neutral-200 dark:border-neutral-700'></div>
            <div className='listingSection__wrap '>
                <div className='space-y-8'>
                    <h2 className='text-lg font-semibold'>Available from</h2>
                    <div className='grid md:grid-cols-2 gap-8 md:gap-5'>
                        <input
                            type="date"
                            id="startDate" value={input.startDate as number | undefined}
                            className="w-full p-2 border border-gray-300 rounded-2xl focus:outline-none focus:ring focus:border-blue-300"
                        />
                        <input
                            type="date"
                            id="EndDate" value={input.EndDate as number | undefined}
                            onChange={handleInputChange}
                            className="w-full p-2 border border-gray-300 rounded-2xl focus:outline-none focus:ring focus:border-blue-300"
                        />
                    </div>
                    <h2 className='text-lg font-semibold'>Price your space</h2>
                    <div className='grid md:grid-cols-2 gap-8 md:gap-5'>
                        <FormItem label=''>
                            <Input
                                name='hourlyrate'
                                value={input.hourlyrate as number | undefined}
                                onChange={handleInputChange}
                                type='text'
                                placeholder='Hourly Rate'
                            />
                        </FormItem>
                        <FormItem label=''>
                            <Input
                                name='otherservices'
                                value={input.otherservices as number | undefined}
                                onChange={handleInputChange}
                                type='text'
                                placeholder='Other Services'
                            />
                        </FormItem>
                    </div>
                </div>
            </div>
            <div className='space-y-8 pt-5'>
                <div>
                    <textarea
                        name='description'
                        value={input.description as string | undefined}
                        onChange={handleInputChange}
                        className={`block w-full text-sm rounded-2xl border-neutral-200 focus:border-primary-300 focus:ring focus:ring-primary-200 focus:ring-opacity-50 bg-white dark:border-neutral-700 dark:focus:ring-primary-6000 dark:focus:ring-opacity-25 dark:bg-neutral-900 `}
                        rows={7}
                        placeholder='Description...'
                    />
                </div>
            </div>
        </>
    );
};

export default PageAddListing2;
