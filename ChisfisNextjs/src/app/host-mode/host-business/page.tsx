'use client'
import Link from "next/link";
import { BiFilterAlt } from "react-icons/bi";
import ChartComponent from "./ChartComponent";
import { useState } from "react";
import ReviewComponent from "./ReviewComponent";

const hostBusiness = () => {
  const [activeMenuItem, setActiveMenuItem] = useState('Business')


  const handleMenuItemClick = (menuItem:string) => {
    setActiveMenuItem(menuItem);
  };


  let activeComponent;
  if (activeMenuItem === "Business") {
    activeComponent = <ChartComponent></ChartComponent>
  } else if (activeMenuItem === "Review") {
    activeComponent = <ReviewComponent/>}


  return (
    <section>
      <div className="md:px-28">
      <Link href="/">
        <button className="btn mt-10 rounded-full border border-[#DAE0E6] font-medium px-5 py-2 btn-sm mobile-view">Back</button>      
       </Link>


        <div className="flex mt-14 mb-10 items-center justify-between heading-alignment">
          <h2 className="text-3xl font-semibold">Business</h2>
              <div className="mr-24 mobile-view">
                <Link href="/">
                <button className="btn rounded-full bg-[#564ef5] text-[#fcfcfc] border-none px-7 py-2 btn-sm">
                  <div className="flex gap-2 font-medium">
                    <BiFilterAlt size={18} className="mt-0.5" />
                        <p> Filter</p>
                  </div>
                 
                </button>
                </Link>
              </div>

        </div>
        <div>

          <div className="card bg-[#F9F9FF] shadow-2xl mb-14 rounded-t-2xl">
            <nav className="flex gap-2 border-b-2">
                <h1 
                className={`btn font-medium px-9 py-3 
                ${ activeMenuItem === "Business" ? " bg-[#cdcaf7] text-[#463ed6]" : "bg-[#F9F9FF] text-[#615e5e] cursor-pointer" }  curveBorder`}
                          onClick={() => handleMenuItemClick("Business")}>Earnings</h1>


                <h1 className={`btn font-medium px-9 py-3 
                ${ activeMenuItem === "Review" ? " bg-[#cdcaf7] text-[#463ed6]" : "bg-[#F9F9FF] text-[#615e5e] cursor-pointer" }`}
                          onClick={() => handleMenuItemClick("Review")}>Review</h1>
            </nav>

            <div className="pt-5 pb-16 md:px-20">
                {activeComponent}  
                                       
            <div className="my-24 text-center desktop-view">
                <Link href="/">
                <button className="btn rounded-full bg-[#564ef5] text-[#fcfcfc] border-none px-10 py-4 ">
                  <div className="flex gap-2 font-medium">
                    <BiFilterAlt size={18} className="mt-0.5" />
                        <p> Filter</p>
                  </div>
                 
                </button>
                </Link>
            </div>
          
            </div>

          </div>
        </div>
      </div>
    </section>
  );
};

export default hostBusiness;
