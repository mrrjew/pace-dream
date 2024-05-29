import React, { FC } from "react";
import Select from "@/shared/Select";
import FormItem from "../FormItem";
import { PageAddingListing } from "@/types/types";
import NcInputNumber from "@/components/ListingComponents/NcInputNumber";
import Input from "@/shared/Input";

const PageAddListing2 = () => {
  return (
    <>
      {/* FORM */}
      <div className="listingSection__wrap ">
        {/* FORM */}

        <div className="space-y-4">
          <h2 className="text-xl font-semibold">Location Details</h2>

          <div className="grid grid-cols-1 gap-4 sm:gap-6">
            <FormItem label="">
              <Input name="cou try" type="text" placeholder="Country" />
            </FormItem>
          </div>
          <div className="grid sm:grid-cols-2 gap-4 sm:gap-6">
            <FormItem label="">
              <Input name="street" type="text" placeholder="Street" />
            </FormItem>
            <FormItem label="">
              <Input name="city" type="text" placeholder="City" />
            </FormItem>
          </div>
          <div className="grid sm:grid-cols-2 gap-4 sm:gap-6">
            <FormItem label="">
              <Input name="state" type="text" placeholder="State" />
            </FormItem>
            <FormItem label="">
              <Input name="zipcode" type="text" placeholder="Zip Code" />
            </FormItem>
          </div>
          <div className="grid grid-cols-1 gap-4 sm:gap-6">
            <FormItem label="">
              <Input
                name="cou try"
                type="text"
                placeholder="Transportation links near the property"
              />
            </FormItem>
          </div>
          <div className="w-full h-[200px] rounded-lg">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d387191.33750346623!2d-73.97968099999999!3d40.6974881!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c24fa5d33f083b%3A0xc80b8f06e177fe62!2sNew%20York%2C%20NY%2C%20USA!5e0!3m2!1sen!2sin!4v1716987280536!5m2!1sen!2sin"
              className="w-full h-full rounded-lg"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>

          <label className="inline-flex items-center cursor-pointer">
            <input type="checkbox" value="" className="sr-only peer" />
            <div className="relative w-11 h-6 bg-gray-200 rounded-full peer peer-focus:ring-4 peer-focus:ring-blue-300 dark:peer-focus:ring-blue-800 dark:bg-gray-700 peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-0.5 after:start-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-blue-600"></div>
            <span className="ms-3 text-sm font-medium text-gray-900 dark:text-gray-300">
              Show your current location
            </span>
          </label>
        </div>
      </div>
    </>
  );
};

export default PageAddListing2;
