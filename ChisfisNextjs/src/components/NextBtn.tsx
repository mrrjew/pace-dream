import twFocusClass from "@/utils/twFocusClass";
import React, { ButtonHTMLAttributes, FC } from "react";

interface Props extends ButtonHTMLAttributes<HTMLButtonElement> {}

const NextBtn: FC<Props> = ({ className = "w-10 h-10 text-lg", ...args }) => {
  return (
    <button
      className={`NextBtn ${className} bg-white rounded-full inline-flex items-center justify-center ${twFocusClass()}`}
      {...args}
    >
      <i className="las la-angle-right"></i>
    </button>
  );
};

export default NextBtn;
