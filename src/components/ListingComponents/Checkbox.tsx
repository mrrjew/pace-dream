'use client';

import { formFieldInitialStateType } from '@/types/types';
import React, { FC } from 'react';

export interface CheckboxProps {
  label?: string;
  subLabel?: string;
  className?: string;
  name?: string;
  defaultChecked?: boolean;
  key: number;
  input: formFieldInitialStateType;
  setInput: React.Dispatch<React.SetStateAction<formFieldInitialStateType>>;
  inputName: string;
}

const Checkbox: FC<CheckboxProps> = ({ subLabel = '', label = '', name, className = '', defaultChecked, key, input, setInput, inputName }) => {
  // <!-- handle form checkbox -->
  const handleCheckBoxChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const val = e.target.value;
    const currentList = Array.isArray(input[inputName]) ? input[inputName] : [];

    // Type assertion to treat currentList as an array
    const updateList = [...(currentList as any[])];

    if (Array.isArray(currentList) && currentList.includes(val)) {
      updateList.splice(currentList.indexOf(val), 1);
    } else {
      updateList.push(val);
    }

    setInput((prevState) => ({ ...prevState, [inputName]: updateList }));
  };

  //   const currentList = Array.isArray(input[checkboxName]) ? input[checkboxName] : [];

  //   const updateList = [...currentList];

  //   if (currentList.includes(val)) {
  //     updateList.splice(currentList.indexOf(val), 1);
  //   } else {
  //     updateList.push(val);
  //   }

  //   setInput((prevState) => ({ ...prevState, [checkboxName]: updateList }));
  // };

  return (
    <div
      key={key}
      className={`flex text-sm sm:text-base ${className}`}>
      <input
        id={name}
        name={name}
        value={label}
        type='checkbox'
        className='focus:ring-action-primary h-6 w-6 text-primary-500 border-primary rounded border-neutral-500 bg-white dark:bg-neutral-700  dark:checked:bg-primary-500 focus:ring-primary-500'
        defaultChecked={defaultChecked}
        onChange={handleCheckBoxChange}
      />
      {label && (
        <label
          htmlFor={name}
          className='ml-3.5 flex flex-col flex-1 justify-center'>
          <span className=' text-neutral-900 dark:text-neutral-100'>{label}</span>
          {subLabel && <p className='mt-1 text-neutral-500 dark:text-neutral-400 text-sm font-light'>{subLabel}</p>}
        </label>
      )}
    </div>
  );
};

export default Checkbox;
