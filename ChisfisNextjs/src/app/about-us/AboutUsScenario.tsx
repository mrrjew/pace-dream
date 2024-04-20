import React from 'react'
import { CalendarDaysIcon, ClipboardDocumentListIcon } from '@heroicons/react/24/outline';

const AboutUsScenario = () => {
return (
    <div className=' bg-slate-100'>
        <h3 className='text-center text-3xl font-bold m-auto p-4'>Scenarios We Cater To:</h3>
        <br />
        <div className="grid gap-5 grid-cols-2 px-[50px] p-7">
            <div className='border-4 left-[100px]'>
                <br />
                <CalendarDaysIcon className='h-[45px] w-[100px]'/>
                <br />
                <h3 className='pl-[80px] text-xl font-semibold'>Pre-Booked Split </h3>
                <br />
                <p className='pl-[80px] pr-2 text-base'>Book and split the cost of accommodations seamlessly with other
                    verified users.</p>
                <br />
            </div>
            <div className='border-4'>
                <br />
                <ClipboardDocumentListIcon className='h-[45px] w-[100px]'/>
                <br />
                <h3 className='pl-[80px] text-xl font-semibold'>Wishlist Collaboration</h3>
                <br />
                <p className='pl-[80px] pr-2 text-base'>Share your travel aspirations on your wishlist and find like-minded
                    travelers to make bookings together.</p>
                <br />
            </div>
        </div>
    </div>
)
}

export default AboutUsScenario