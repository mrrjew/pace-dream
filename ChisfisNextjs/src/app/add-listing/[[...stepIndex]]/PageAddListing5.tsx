import React, { FC, useState } from 'react';
import ButtonPrimary from '@/shared/ButtonPrimary';
import { PageAddingListing } from '@/types/types';
import Input from '@/components/ListingComponents/Input';

const PageAddListing5 = ({ input, setInput, handleInputChange }: PageAddingListing) => {
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
      <div>
        <h2 className='text-2xl font-semibold'>Set house rules for your guests </h2>
        <span className='block mt-2 text-neutral-500 dark:text-neutral-400'>Guests must agree to your house rules before they book.</span>
      </div>
      <div className='w-14 border-b border-neutral-200 dark:border-neutral-700'></div>
      {/* FORM */}
      <div className='space-y-8'>
        {/* ITEM */}
        <div>
          <label
            className='text-lg font-semibold'
            htmlFor=''>
            Smoking
          </label>
          <div className='mt-4 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5'>
            {renderRadio('smokingRole', 'Do', 'Do not allow')}
            {renderRadio('smokingRole', 'Allow', 'Allow', true)}
            {renderRadio('smokingRole', 'Charge', 'Charge')}
          </div>
        </div>

        {/* ITEM */}
        <div>
          <label
            className='text-lg font-semibold'
            htmlFor=''>
            Pet
          </label>
          <div className='mt-4 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5'>
            {renderRadio('petRole', 'Do', 'Do not allow')}
            {renderRadio('petRole', 'Allow', 'Allow', true)}
            {renderRadio('petRole', 'Charge', 'Charge')}
          </div>
        </div>

        {/* ITEM */}
        <div>
          <label
            className='text-lg font-semibold'
            htmlFor=''>
            Party organizing
          </label>
          <div className='mt-4 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5'>
            {renderRadio('partyOrganizingRole', 'Do', 'Do not allow')}
            {renderRadio('partyOrganizingRole', 'Allow', 'Allow', true)}
            {renderRadio('partyOrganizingRole', 'Charge', 'Charge')}
          </div>
        </div>

        {/* ITEM */}
        <div>
          <label
            className='text-lg font-semibold'
            htmlFor=''>
            Cooking
          </label>
          <div className='mt-4 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5'>
            {renderRadio('cookingRole', 'Do', 'Do not allow')}
            {renderRadio('cookingRole', 'Allow', 'Allow', true)}
            {renderRadio('cookingRole', 'Charge', 'Charge')}
          </div>
        </div>

        {/* ------ Additional Role----- */}
        <div className=' border-b border-neutral-200 dark:border-neutral-700'></div>
        <span className='block text-lg font-semibold'>Additional rules</span>
        <div className='flow-root'>
          <div className='-my-3 divide-y divide-neutral-100 dark:divide-neutral-800'>
            {Array.isArray(input?.additionalRules) &&
              input?.additionalRules.map((item: string, index: number) => {
                return renderNoInclude(item, index);
              })}
          </div>
        </div>
        <div className='flex flex-col sm:flex-row sm:justify-between space-y-3 sm:space-y-0 sm:space-x-5'>
          <Input
            value={createRoleValue}
            onChange={(e) => setCreateRoleValue(e.target.value)}
            className='!h-full'
            placeholder='type your role...'
          />
          <ButtonPrimary
            type='button'
            onClick={handleAddAdditionalRole}
            className='flex-shrink-0'>
            <i className='text-xl las la-plus'></i>
            <span className='ml-3'>Add role</span>
          </ButtonPrimary>
        </div>
      </div>
    </>
  );
};

export default PageAddListing5;
