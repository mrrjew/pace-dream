import { PathName } from "@/routers/types";
import Link from "next/link";
import React, { FC } from "react";
import EastTwoToneIcon from '@mui/icons-material/EastTwoTone';
interface Props {
  href?: PathName | string;
  as?: string
}

const ButtonSubmit: FC<Props> = ({ href = "/listing-stay-map/[id]", as = "/listing-stay-map/1" }) => {
  const urlObject = typeof href === "string" ? { pathname: href } : href;
  return (
    <Link
      href={urlObject}
      as={as}
      type="button"
      className="h-20 md:h-20 xl:h-20 w-20 xl:w-20 rounded-lg bg-primary-6000 hover:bg-primary-700 flex flex-col items-center justify-center text-neutral-50 focus:outline-none mt-1"
    >
      <span className="mt-1 mb-0">
        Search
      </span>
      
      <span className="mt-0 mb-1 h-6 w-6">
          <EastTwoToneIcon />
      </span>
    </Link>
  );
};

export default ButtonSubmit;
