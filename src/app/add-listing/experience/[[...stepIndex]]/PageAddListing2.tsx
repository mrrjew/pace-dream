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
                    <h2 className='text-lg font-semibold'>Availability & Pricing Details</h2>
                    <div className='grid md:grid-cols-2 gap-8 md:gap-5'>
                    <input
                            type="date"
                            id="availabledate" value={input.availabledate as number | undefined}
                            className="w-full p-2 border border-gray-300 rounded-2xl focus:outline-none focus:ring focus:border-blue-300"
                        /> 
                    <FormItem label=''>
                            <Input
                                name='time'
                                value={input.time as number | undefined}
                                onChange={handleInputChange}
                                type='text'
                                placeholder='Time'
                            />
                        </FormItem>                                                                     
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
            
        </>
    );
};

export default PageAddListing2;
