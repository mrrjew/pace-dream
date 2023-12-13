import React from 'react';
import { LuLoader } from 'react-icons/lu';

const CalenderComponent = () => {
    return (

     <div className="pt-5 pb-16 px-20">
        <div className="min-h-[50vh] text-[#9786f3] flex flex-col items-center justify-center">
          <p>
            <LuLoader size={35} className="" />
          </p>
          <p className="font-semibold">No data found</p>
        </div>
      </div>
    );
};

export default CalenderComponent;