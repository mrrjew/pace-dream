"use client"
import React, { ReactNode,useState } from 'react';
import HelpCenterSideBar from '@/components/HelpCenterSideBar';
import HelpCenter from './page';

interface HelpCenterLayoutProps {
  children: ReactNode;
}

const HelpCenterLayout: React.FC<HelpCenterLayoutProps> = ({ children }) => {
    const [selected, setSelected] = useState('Contact Us');

  const handleOptionSelect = (label: string) => {
    setSelected(label);
  };
  return (
    <div>
      <div className='mt-4 ml-4' >
        <p className="flex gap-2">Help center 
        <span><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-4 h-4 mt-1 ">
              <path strokeLinecap="round" strokeLinejoin="round" d="m8.25 4.5 7.5 7.5-7.5 7.5" />
              </svg>
        </span> 
        {selected} 
        </p>
      </div>
      <div className='flex mt-[60px] mr-[213px]'>
        <HelpCenterSideBar selected={selected} onSelect={handleOptionSelect} />
        <HelpCenter selected={selected} />
      </div>
    </div>
  );
};

export default HelpCenterLayout;