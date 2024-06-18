'use client';
import React from 'react';
// import { ListingDataType } from '@/types/types';
import Image from 'next/image';
import { Bed, MoreHorizOutlined, Place, Shower, Star } from '@mui/icons-material';
import { RentableItem } from '@/types/rentalItems';
import { GoogleMapLayout } from '@/components/GoogleMap';
import { useSession } from '@/hooks/useSession';
import { useRouter } from 'next/navigation';
import { useMutateData } from '@/hooks/useMutate';



const PageAddListing4 = (
  {data,onPreview}:{onPreview:()=>void, data:Partial<RentableItem>}
) => {
  const route = useRouter();
  const {getSession} = useSession();
  const {userId} = getSession();
  const mutate = useMutateData<typeof data>({endpoint:'/property/add',queryKey:['publishProperty'],body:{
    data: {...data,owner:userId,status:'draft',
    // set first line of description as summary
    summary: data?.details?.description?.split('\n')[0] || '',
   },
  }});

  function handleSaveDraft(){
    mutate.mutateAsync().then((res)=>{
      console.log("response : ",res);
      if(res?.status == true){
        route.replace('/add-listing')
      }
    }).catch((error)=>{
      console.log("error : ",error);
    } );
  }
  
  return (
    <div className='bg-white rounded-xl h-fit p-2 md:p-8'>
      <div>
        <p className='text-lg py-4 font-medium'>It's time to publish property!</p>
        {/* <span className='block mt-2 text-neutral-500 dark:text-neutral-400'>Excellent, congratulations on completing the listing, it is waiting to be reviewed for publication</span> */}
      </div>
      {/* <div className=' border-b border-neutral-200 dark:border-neutral-700'></div> */}
      {/* FORM */}
      <div className='grid grid-cols-1 md:grid-cols-3 gap-8'>
        <div className='col-span-1 md:col-span-2 space-y-6 rounded-lg'>
          <Image 
            className='rounded-t-lg h-72 w-full object-cover'
            src={data?.gallery?.thumbnail || ''}
            alt="Picture of the author"
            width={500}
            height={360}
          />
         <div className='p-4 space-y-4 shadow-lg rounded-b-2xl'>
           {/* review and address */}
            <div className='flex items-center justify-between'>
                {/* <p className='text-neutral-500 flex-1 dark:text-neutral-400 w-full'>Room Stays</p> */}
                <div className='flex items-center gap-4 justify-start'>
                  <span className='text-xs capitalize rounded-md p-2 py-4 bg-black text-white font-semibold'>
                    {(window?.location?.pathname.split('/').pop() || 'Room Stays').replaceAll('-', ' ').toLowerCase()}
                  </span>
                  <span className='text-neutral-600 flex items-center'>
                    <Star className='h-4 w-4 text-yellow-500' />
                      0 (0 Review)
                    </span>
                </div>
                  <MoreHorizOutlined className='h-6 w-6 text-gray-500 ring rounded-full ring-primary-100' />
              </div>
          <div>
              <h2 className='text-xl'>
                {data?.title}
              </h2>
              {/* location */}
              <div className='flex items-center gap-2 py-2'>
                 <Place className='text-primary-400 h-4 w-4' />
                  <span className='text-neutral-500 dark:text-neutral-400 text-xs'>
                     {data?.location?.address}
                  </span>
              </div>
          </div>
          <hr className='bg-gray-500 w-full h-[0.5px]' />
          {/* price, bed,bath */}
          <div className='flex items-center justify-between'>
            <div className='flex items-center'>
              <span className='text-2xl'>
                $ {parseFloat(data?.price?.at(0)?.amount?.toString() || '0')}
              </span>
              <span className='text-neutral-500 dark:text-neutral-400'>/night</span>
            </div>
            <hr className='bg-gray-500 w-[0.5px] h-4 ' />
           <div>
              <Bed />
             <span className='text-neutral-500 dark:text-neutral-400'>
                {data?.details?.bedroom_count} Bed
             </span>
           </div>
            <hr className='bg-gray-500 w-[0.5px] h-4 ' />
            <div>
              <Shower />
              <span className='text-neutral-500 dark:text-neutral-400'>
                {data?.details?.bathroom_count} Bath
              </span>
           </div>
          </div>
         </div>
        </div>
        {/* map */}
        <div className='grid grid-cols-1'>
          <GoogleMapLayout
            isMapOnly
            init={{
              center: {lat:data?.location?.latitude || 0,lng:data?.location?.longitude || 0},
              place: data.location?.address || "",
            }}
            className='h-[350px] w-full rounded-lg'
          />
              {/* <iframe 
                width="100%" 
                height="350" 
                loading="lazy" 
                allowFullScreen
                className='rounded-lg'
                // src={data?.location?.googlemap_link || ''}
                src={"https://www.google.com/maps/?pb=!1m14!1m12!1m3!1d15883.860440917622!2d-74.05644989999999!3d41.1912507!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1en!2sgh!4v1717982745573!5m2!1en!2sgh"}
                >
              </iframe> */}
          <div className='flex  space-y-2 justify-center py-8'>
              <div className='grid grid-cols-1 space-y-4 py-4'>
              <button 
                onClick={handleSaveDraft}
                disabled={mutate.isLoading}
                className={`bg-primary-100 w-60 text-gray-700 p-2 rounded-lg ${mutate.isLoading ? 'cursor-progress' :'cursor-pointer'}`}>
                  {mutate.isLoading ? 'Saving Draft...' : 'Save Draft'}
                </button>
              <button 
                onClick={onPreview}
                className='ring-1 ring-gray-300 w-60 text-primary-700 p-2 rounded-lg'>Show Preview</button>
              </div>
          </div>

        </div>

      </div>
    </div>
  );
};

export default PageAddListing4;
