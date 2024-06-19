import NcInputNumber from "@/components/NcInputNumber";
import React, { FC } from "react";
import { MdApartment } from "react-icons/md";
import { FaDollyFlatbed } from "react-icons/fa";

export interface PageAddPartner7Props {}

const PageAddPartner7: FC<PageAddPartner7Props> = () => {
  return (
    <>
      <div>
        <h2 className="text-2xl font-semibold">Who will share the room?</h2>
        <p className="mt-4">
          You{'\''}ll add more details later, such as bed types.
        </p>
      </div>

      <div className="flex gap-5">
        <button className="flex rounded-full border lg:px-10 px-6 py-2 font-medium">
          <MdApartment className="mt-1 mr-3" />
          Only me
        </button>
        <button className="flex rounded-full border lg:px-10 px-6 py-2 font-medium">
          <FaDollyFlatbed className="mt-1 mr-3" />
          Multiple person
        </button>
      </div>
      <div className=" w-2/4">
        <div>
          <p className="text-[#b4b2b2]">Shareable details</p>
          <NcInputNumber label="Persons" className="mt-2" defaultValue={4} />
        </div>
        {/* FORM */}
        <div className="space-y-6">
          <p className="text-[#b4b2b2]">Shareable details</p>
          <NcInputNumber label="Bedroom" defaultValue={4} />
          <NcInputNumber label="Beds" defaultValue={4} />
          <NcInputNumber label="Bathroom" defaultValue={2} />
        </div>
      </div>
    </>
  );
};

export default PageAddPartner7;
