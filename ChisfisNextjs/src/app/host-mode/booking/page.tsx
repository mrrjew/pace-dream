"use client";
import Link from "next/link";
import { useState } from "react";
import { BiFilterAlt } from "react-icons/bi";
import BookedComponent from "./BookedComponent";
import HistoryComponent from "./HistoryComponent";
import CalenderComponent from "./CalenderComponent";

const Booking = () => {
  const [activeMenuItem, setActiveMenuItem] = useState("Booked");

  const handleMenuItemClick = (menuItem: string) => {
    setActiveMenuItem(menuItem);
  };

  let activeComponent;
  if (activeMenuItem === "Booked") {
    activeComponent = <BookedComponent />;
  } else if (activeMenuItem === "History") {
    activeComponent = <HistoryComponent />;
  } else if (activeMenuItem === "Calender") {
    activeComponent = <CalenderComponent />;
  }

  return (
    <section>
      <div className="md:px-28">
        <Link href="/">
          <button className="btn mt-10 rounded-full border border-[#DAE0E6] font-medium px-5 py-2 btn-sm mobile-view">
            Back
          </button>
        </Link>

        <div className="flex mt-14 mb-10 items-center justify-between heading-alignment">
          <h2 className="text-3xl font-semibold sm:">Booking</h2>
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
                ${activeMenuItem === "Booked" ? " bg-[#cdcaf7] text-[#463ed6]" : "bg-[#F9F9FF] text-[#615e5e] cursor-pointer"}  curveBorder`}
                onClick={() => handleMenuItemClick("Booked")}
              >
                Booked
              </h1>

              <h1
                className={`btn font-medium px-9 py-3 
                ${activeMenuItem === "History" ? " bg-[#cdcaf7] text-[#463ed6]" : "bg-[#F9F9FF] text-[#615e5e] cursor-pointer"}`}
                onClick={() => handleMenuItemClick("History")}
              >
                History
              </h1>

              <h1
                className={`btn font-medium px-9 py-3 
                ${activeMenuItem === "Calender" ? " bg-[#cdcaf7] text-[#463ed6]" : "bg-[#F9F9FF] text-[#615e5e] cursor-pointer"} `}
                onClick={() => handleMenuItemClick("Calender")}
              >
                Calender
              </h1>
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

export default Booking;
