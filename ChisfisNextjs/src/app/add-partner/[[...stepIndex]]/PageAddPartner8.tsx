import React, { FC } from "react";
import { MdApartment } from "react-icons/md";

export interface PageAddPartner8Props {}

const PageAddPartner8: FC<PageAddPartner8Props> = () => {
  return (
    <>
      <div>
        <h2 className="text-2xl font-semibold">
          What are the amenities that room have have?
        </h2>
        <span className="block mt-2 text-neutral-500 dark:text-neutral-400">
          You'll add more details later, such as bed types.
        </span>
      </div>
      <div className="w-14 border-b border-neutral-200 dark:border-neutral-700"></div>
      {/* FORM */}
      <div className="space-y-8">
        {/* ITEM */}
        <div>
          <p className="text-[#c0c0c0] font-semibold">Who can stay there?</p>
          <div className="mt-6 flex flex-wrap gap-4">
            <h2 className=" flex text-black rounded-full border lg:px-10 px-6 py-2 font-medium">
              {" "}
              <MdApartment className="mt-1 mr-3" />
              Free parking{" "}
            </h2>
            <h2 className=" flex text-black rounded-full border lg:px-10 px-6 py-2 font-medium">
              {" "}
              <MdApartment className="mt-1 mr-3" /> Tv
            </h2>
            <h2 className=" flex text-black rounded-full border lg:px-10 px-6 py-2 font-medium">
              {" "}
              <MdApartment className="mt-1 mr-3" /> Air conditioning
            </h2>
            <h2 className=" flex text-black rounded-full border lg:px-10 px-6 py-2 font-medium">
              {" "}
              <MdApartment className="mt-1 mr-3" /> Clothes dryer
            </h2>
            <h2 className=" flex text-black rounded-full border lg:px-10 px-6 py-2 font-medium">
              {" "}
              <MdApartment className="mt-1 mr-3" /> Baby cot{" "}
            </h2>
            <h2 className=" flex text-black rounded-full border lg:px-10 px-6 py-2 font-medium">
              {" "}
              <MdApartment className="mt-1 mr-3" /> Desk{" "}
            </h2>
            <h2 className=" flex text-black rounded-full border lg:px-10 px-6 py-2 font-medium">
              {" "}
              <MdApartment className="mt-1 mr-3" /> Fridge
            </h2>
            <h2 className=" flex text-black rounded-full border lg:px-10 px-6 py-2 font-medium">
              {" "}
              <MdApartment className="mt-1 mr-3" /> Dryer
            </h2>
          </div>
        </div>

        {/* ITEM */}
        <div>
          <p className="text-[#c0c0c0] font-semibold">Other amenities</p>
          <div className="mt-6 flex flex-wrap gap-4">
            <h2 className=" flex text-black rounded-full border lg:px-10 px-6 py-2 font-medium">
              {" "}
              <MdApartment className="mt-1 mr-3" />
              Wardrobe{" "}
            </h2>
            <h2 className=" flex text-black rounded-full border lg:px-10 px-6 py-2 font-medium">
              {" "}
              <MdApartment className="mt-1 mr-3" /> Cloth hook
            </h2>
            <h2 className=" flex text-black rounded-full border lg:px-10 px-6 py-2 font-medium">
              {" "}
              <MdApartment className="mt-1 mr-3" /> Gas stove
            </h2>
            <h2 className=" flex text-black rounded-full border lg:px-10 px-6 py-2 font-medium">
              {" "}
              <MdApartment className="mt-1 mr-3" />
              Toilet paper{" "}
            </h2>
            <h2 className=" flex text-black rounded-full border lg:px-10 px-6 py-2 font-medium">
              {" "}
              <MdApartment className="mt-1 mr-3" /> Free toiletries
            </h2>
            <h2 className=" flex text-black rounded-full border lg:px-10 px-6 py-2 font-medium">
              {" "}
              <MdApartment className="mt-1 mr-3" />
              Makeup table{" "}
            </h2>
            <h2 className=" flex text-black rounded-full border lg:px-10 px-6 py-2 font-medium">
              {" "}
              <MdApartment className="mt-1 mr-3" /> Dishwasher
            </h2>
            <h2 className=" flex text-black rounded-full border lg:px-10 px-6 py-2 font-medium">
              {" "}
              <MdApartment className="mt-1 mr-3" />
              BBQ grill{" "}
            </h2>
            <h2 className=" flex text-black rounded-full border lg:px-10 px-6 py-2 font-medium">
              {" "}
              <MdApartment className="mt-1 mr-3" />
              Toaster{" "}
            </h2>
            <h2 className=" flex text-black rounded-full border lg:px-10 px-6 py-2 font-medium">
              {" "}
              <MdApartment className="mt-1 mr-3" /> Towel{" "}
            </h2>
            <h2 className=" flex text-black rounded-full border lg:px-10 px-6 py-2 font-medium">
              {" "}
              <MdApartment className="mt-1 mr-3" />
              Dining table
            </h2>
          </div>
        </div>

        {/* ITEM */}
        <div>
          <p className="text-[#c0c0c0] font-semibold">
            Any standout amenities?
          </p>
          <div className="mt-6 flex flex-wrap gap-4">
            <h2 className=" flex text-black rounded-full border lg:px-10 px-6 py-2 font-medium">
              {" "}
              <MdApartment className="mt-1 mr-3" /> BBQ Grill
            </h2>
            <h2 className=" flex text-black rounded-full border lg:px-10 px-6 py-2 font-medium">
              {" "}
              <MdApartment className="mt-1 mr-3" /> Pool
            </h2>
            <h2 className=" flex text-black rounded-full border lg:px-10 px-6 py-2 font-medium">
              {" "}
              <MdApartment className="mt-1 mr-3" /> Patio
            </h2>
            <h2 className=" flex text-black rounded-full border lg:px-10 px-6 py-2 font-medium">
              {" "}
              <MdApartment className="mt-1 mr-3" /> Hot tub
            </h2>
          </div>
        </div>
      </div>
    </>
  );
};

export default PageAddPartner8;
