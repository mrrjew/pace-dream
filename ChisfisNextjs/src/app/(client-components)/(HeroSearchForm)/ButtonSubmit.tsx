import { PathName } from "@/routers/types";
import Link from "next/link";
import React, { FC } from "react";

interface Props {
  href?: PathName | string ;
  as?: string
}

const ButtonSubmit: FC<Props> = ({ href = "/listing-stay-map/[id]", as = "/listing-stay-map/1" }) => {
  const urlObject = typeof href === "string" ? { pathname: href } : href;
  return (
    <Link
      href={urlObject}
      as={as}
      type="button"
      className="h-14 md:h-8 md:w-8 xl:h-8 w-full xl:w-8 rounded-full bg-primary-6000 hover:bg-primary-700 flex items-center justify-center text-neutral-50 focus:outline-none"
    >
      <span className="mr-3 md:hidden">Search</span>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="hidden md:flex h-6 w-6"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={1.5}
          d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
        />
      </svg>
    </Link>
  );
};

export default ButtonSubmit;
