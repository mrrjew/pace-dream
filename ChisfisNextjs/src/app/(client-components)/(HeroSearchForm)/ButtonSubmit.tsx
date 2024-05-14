import { PathName } from "@/routers/types";
import Link from "next/link";
import React, { FC } from "react";
import EastTwoToneIcon from "@mui/icons-material/EastTwoTone";
interface Props {
  href?: PathName | string;
  as?: string;
}

const ButtonSubmit: FC<Props> = ({
  href = "/listing-stay-map/[id]",
  as = "/listing-stay-map/1",
}) => {
  const urlObject = typeof href === "string" ? { pathname: href } : href;
  return (
    <Link
      href={urlObject}
      as={as}
      type="button"
      className="flex flex-col  justify-center px-[1.5rem] py-[1.5rem] xl:ml-[2rem] ml-[1rem] rounded-[.6rem]  w-[8.5rem] bg-primary-6000 hover:bg-primary-700 text-neutral-50 focus:outline-none"
    >
      <div className="">Search</div>

      <div className=" w-[100%] ">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="75"
          height="15"
          viewBox="0 0 75 15"
          fill="none"
        >
          <path
            d="M74.5629 7.95752C74.9256 7.59481 74.9256 7.00675 74.5629 6.64404L68.6523 0.733359C68.2895 0.37065 67.7015 0.37065 67.3388 0.733359C66.9761 1.09607 66.9761 1.68413 67.3388 2.04684L72.5927 7.30078L67.3388 12.5547C66.9761 12.9174 66.9761 13.5055 67.3388 13.8682C67.7015 14.2309 68.2895 14.2309 68.6523 13.8682L74.5629 7.95752ZM0.727539 8.22956H73.9062V6.37201H0.727539V8.22956Z"
            fill="white"
          />
        </svg>
      </div>
    </Link>
  );
};

export default ButtonSubmit;
