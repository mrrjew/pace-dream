import React, { FC, useState } from 'react';
import { PageAddingListing } from '@/types/types';
import Checkbox from '@/components/ListingComponents/Checkbox';
import Select from '@/shared/Select';
import FormItem from '../FormItem';
import Input from '@/shared/Input';
import NcInputNumber from '@/components/ListingComponents/NcInputNumber';

const PageAddListing3 = ({ input, setInput, handleInputChange }: PageAddingListing) => {
  const [createRoleValue, setCreateRoleValue] = useState('');

  // Add additional role handler
  const handleAddAdditionalRole = () => {
    if (Array.isArray(input.additionalRules) && createRoleValue) {
      const oldRole = [...input.additionalRules];
      oldRole.push(createRoleValue);
      setInput((prevState) => ({ ...prevState, additionalRules: oldRole }));
      setCreateRoleValue('');
    }
  };

  const renderRadio = (name: string, id: string, label: string, defaultChecked?: boolean) => {
    // Role change handler
    const handleRuleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
      setInput((prevState) => ({ ...prevState, [name]: e.target.value }));
    };

    return (
      <div className='flex items-center'>
        <input
          defaultChecked={defaultChecked}
          id={id + name}
          name={name}
          type='radio'
          value={label}
          onChange={handleRuleChange}
          className='focus:ring-primary-500 h-6 w-6 text-primary-500 border-neutral-300 !checked:bg-primary-500 bg-transparent'
        />
        <label
          htmlFor={id + name}
          className='ml-3 block text-sm font-medium text-neutral-700 dark:text-neutral-300'>
          {label}
        </label>
      </div>
    );
  };

  const renderNoInclude = (text: string, index: number) => {
    return (
      <div
        key={text + index}
        className='flex items-center justify-between py-3'>
        <span className='text-neutral-6000 dark:text-neutral-400 font-medium'>{text}</span>
        <i
          onClick={() => {
            if (Array.isArray(input?.additionalRules) && input.additionalRules.includes(text)) {
              const removeRule = input.additionalRules.filter((item) => item !== text);
              setInput((prevState) => ({ ...prevState, additionalRules: removeRule }));
            }
          }}
          className='text-2xl text-neutral-400 las la-times-circle hover:text-neutral-900 dark:hover:text-neutral-100 cursor-pointer'></i>
      </div>
    );
  };



  return (
    <>
      
      {/* FORM */}
      <div className='listingSection__wrap '>
        <div className='space-y-8'>
          {/* ITEM */}
          <div>
            <label
              className='text-lg font-semibold'
              htmlFor=''>
              Pet
            </label>
            <div className='mt-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5'>
            {renderRadio('petRole', 'Do not allow', 'Do not allow')}
            {renderRadio('petRole', 'Allow', 'Allow', true)}
            {renderRadio('petRole', 'Charge', 'Charge')}
              
            </div>
          </div>

          {/* ITEM */}
          <div>
            <label
              className='text-lg font-semibold'
              htmlFor=''>
              Smoking
            </label>
            <div className='mt-4 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5'>
            {renderRadio('smokingRole', 'Do not allow', 'Do not allow')}
            {renderRadio('smokingRole', 'Allow', 'Allow', true)}
            {renderRadio('smokingRole', 'Charge', 'Charge')}
              
            </div>
          </div>
        </div>
      </div>
      <div className='listingSection__wrap '>
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

    </>
  );
};

export default PageAddListing3;
