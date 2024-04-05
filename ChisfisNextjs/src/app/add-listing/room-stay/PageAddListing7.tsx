import { PageAddingListing } from '@/types/types';
import Image from 'next/image';
import React, { FC } from 'react';

export interface PageAddListing7Props {}

const PageAddListing7 = ({ input, setInput, handleInputChange }: PageAddingListing) => {
  // Remove place image handler
  const handleRemoveFile = (file: File) => {
    const oldPlaceImage = [...(input.placeImages as [])];
    const removeFile = oldPlaceImage?.filter((item) => item !== file);
    setInput((prevState) => ({ ...prevState, placeImages: removeFile }));
  };

  return (
    <>
      <div>
        <h2 className='text-2xl font-semibold'>Pictures of the place</h2>
        <span className='block mt-2 text-neutral-500 dark:text-neutral-400'>A few beautiful photos will help customers have more sympathy for your property.</span>
      </div>

      <div className='w-14 border-b border-neutral-200 dark:border-neutral-700'></div>
      {/* FORM */}
      <div className='space-y-8'>
        <div>
          <span className='text-lg font-semibold'>Cover image</span>

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
        {/* ----------------- */}
        <div>
          <span className='text-lg font-semibold'>Pictures of the place</span>
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
                <div className='flex text-sm text-neutral-6000 dark:text-neutral-300'>
                  <label
                    htmlFor='file-upload-2'
                    className='relative cursor-pointer  rounded-md font-medium text-primary-6000 hover:text-primary-500 focus-within:outline-none focus-within:ring-2 focus-within:ring-offset-2 focus-within:ring-primary-500'>
                    <span>Upload a file</span>
                    <input
                      id='file-upload-2'
                      name='placeImages'
                     
                      onChange={(e) => {
                        const uploadedFiles = Array.from((e.target.files as FileList) || []);
                        setInput((prevState) => ({ ...prevState, placeImages: [...(prevState.placeImages as FileList), ...uploadedFiles] }));
                      }}
                      type='file'
                      className='sr-only'
                      multiple
                      accept='.jpg, .jpeg, .png,.gif'
                    />
                  </label>
                  <p className='pl-1'>or drag and drop</p>
                </div>
                <p className='text-xs text-neutral-500 dark:text-neutral-400'>PNG, JPG, GIF up to 10MB</p>
              </div>
            </div>

            {/* <!-- Preview Place Image --> */}
            <div className='mt-4 flex flex-wrap gap-4 justify-around'>
              {Array.isArray(input?.placeImages) &&
                input?.placeImages?.map((item, index) => (
                  <div
                    key={index}
                    className='relative w-32'>
                    <Image
                      src={URL.createObjectURL(item as File)}
                      width={200}
                      height={200}
                      alt='cover_image'
                      className='rounded-lg'
                    />

                    <i
                      onClick={() => handleRemoveFile(item)}
                      className='text-2xl text-red-500 bg-[#dddddd5b]  las la-times-circle hover:text-neutral-900 dark:hover:text-neutral-100 cursor-pointer absolute top-1 right-1'></i>
                  </div>
                ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default PageAddListing7;
