import { LiaBusinessTimeSolid } from "react-icons/lia";
import React, { FC } from "react";

export interface PageAddPartner1Props {}

const PageAddPartner1: FC<PageAddPartner1Props> = () => {
  return (
    <>
      <div>
        <h2 className="text-2xl font-semibold">Give your availability</h2>
        <p className="mt-4">
          In this step, we{'\''}ll ask you which type of stays you have and if guests
          will book the entire place or just a room. Then let us know the
          location and how many guests can stay.
        </p>
      </div>

      <div>
        <nav className="rounded-full border w-44 flex justify-between">
          <button className="rounded-full px-5 py-3">Hour</button>
          <button className="rounded-full bg-[#574cf3] text-white px-6 py-3">
            Day
          </button>
        </nav>
        <div className="mt-6 flex lg:gap-4 gap-2">
          <div>
            <h3>From</h3>
            <div>
              <button className="rounded-full border lg:px-12 lg:py-3 px-7 py-3 flex justify-between">
                4/13/2023
                <LiaBusinessTimeSolid className="ml-6 text-2xl" />
              </button>
            </div>
          </div>
          <div>
            <h3>Until</h3>
            <div>
              <button className="rounded-full border lg:px-12 lg:py-3 px-7 py-3 flex justify-between">
                6/13/2023
                <LiaBusinessTimeSolid className="ml-6 text-2xl" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default PageAddPartner1;
