import twFocusClass from "@/utils/twFocusClass";
import React, { ButtonHTMLAttributes, FC } from "react";

interface Props extends ButtonHTMLAttributes<HTMLButtonElement> {}

const PrevBtn: FC<Props> = ({ className = "w-12 h-12 text-lg font-extrabold", ...args }) => {
  return (
    <button
      className={`PrevBtn ${className} bg-white rounded-full inline-flex items-center justify-center ${twFocusClass()}`}
      {...args}
    >
      <i className="las la-angle-left"></i>
    </button>
  );
};

export default PrevBtn;
