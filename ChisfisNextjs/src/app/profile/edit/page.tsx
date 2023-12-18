/** @format */
"use client";

import ButtonSecondary from "@/shared/ButtonSecondary";
import React from "react";
import AvatarInput from "../../../components/profile/edit/AvatarInput";
import InputGroup from "@/components/profile/edit/InputGroup";
import GenderButton from "@/components/profile/edit/GenderButton";
import Input from "@/shared/Input";
import Textarea from "@/shared/Textarea";
import Select from "@/shared/Select";
import { AiOutlineMail } from "react-icons/ai";

const page = () => {
  return (
    <div className={`lg:container px-4 mx-auto pb-24 pt-4 sm:py-10 lg:pb-32 text-neutral-700 dark:text-neutral-300`}>
      <div className="space-y-4">
        <div className="flex-end hidden md:block">
          <ButtonSecondary>Back</ButtonSecondary>
        </div>
        {/* --------------------- */}
        <div className="flex items-centers justify-center md:hidden w-full ">
          <AvatarInput />
        </div>
        <div className="h-[164px] relative rounded-b-[30px] pb-4 mb-2 shadow hidden md:block">
          <div className="w-full h-[58.7px] bg-gradient-to-r from-[#8A84FF]  to-[#FFDB98] rounded-t-[30px]"></div>
          {/* avatar input field */}
          <AvatarInput />
        </div>

        {/* ----------menu item link----------- */}
        <div className="mt-4 py-10">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
            <InputGroup label="First Name" placeholder="Enter your first name." name="first_name" />
            <InputGroup label="Last Name" placeholder="Enter your Last name" name="last_name" />
            <InputGroup label="Date of Birth?">
              <div className="flex flex-row gap-3">
                <Input name="day" placeholder="day" />
                <Input name="month" placeholder="month" />
                <Input name="year" placeholder="year" />
              </div>
            </InputGroup>
            <InputGroup label="Gender">
              <div className="flex flex-row gap-3">
                <GenderButton>Male</GenderButton>
                <GenderButton>Female</GenderButton>
                <GenderButton>Prefer not to say</GenderButton>
              </div>
            </InputGroup>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-3 mt-3">
            <InputGroup label="Vio">
              <div className="">
                <Textarea name="bio" id="" rows={7} />
              </div>
            </InputGroup>
            <div className="flex flex-col gap-3">
              <InputGroup label="Email">
                <div className="relative">
                  <div className="absolute left-4 top-3 w-[32px] h-[32px]">
                    <AiOutlineMail width={26.67} height={21.33} />
                  </div>
                  <Input name="email" placeholder="Enter your email." className="pl-14" />
                </div>
              </InputGroup>
              <InputGroup label="Phone">
                <div className="flex flex-row items-center gap-4">
                  <div className="w-[100px]">
                    <Select className="w-full">
                      <option value="">+1</option>
                    </Select>
                  </div>
                  <Input name="phone" placeholder="Enter your phone number." />
                </div>
              </InputGroup>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default page;
