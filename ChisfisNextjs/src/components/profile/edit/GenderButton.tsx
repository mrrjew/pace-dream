/** @format */

import Button, { ButtonProps } from "@/shared/Button";
import React from "react";

export interface GenderButtonPropsType extends ButtonProps {}
const GenderButton: React.FC<GenderButtonPropsType> = ({ ...args }) => {
  return (
    <Button
      {...args}
      className="py-2 px-4 rounded-full bg-[#EBEBF599] hover:bg-primary-700 text-neutral-700 hover:text-white dark:text-white dark:hover:text-neutral-100"
    />
  );
};

export default GenderButton;
