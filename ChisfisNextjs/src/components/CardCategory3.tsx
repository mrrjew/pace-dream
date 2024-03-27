import React, { FC } from "react";
import { TaxonomyType } from "@/data/types";
import convertNumbThousand from "@/utils/convertNumbThousand";
import Link from "next/link";
import Image from "next/image";

export interface CardCategory3Props {
  className?: string;
  taxonomy: TaxonomyType;
}

const CardCategory3: FC<CardCategory3Props> = ({
  className = "",
  taxonomy,
}) => {
  const { count, name, href = "/", thumbnail } = taxonomy;
  const urlObject = typeof href === "string" ? { pathname: href } : href;
  return (
    <Link href={urlObject} className={`nc-CardCategory3 flex flex-col ${className}`}>
      <div
        className={`flex-shrink-0 relative w-max-[630px] w-[90vw] h-max-[100%] h-[300px] md:w-full md:aspect-w-5 md:aspect-h-5 sm:aspect-h-6 md:h-0 rounded-2xl overflow-hidden group`}
      >
        <Image
          src={thumbnail || ""}
          className="object-cover w-full h-full md:w-full md:h-full rounded-2xl"
          alt="places"
          fill
        />
        <span className="opacity-0 group-hover:opacity-100 absolute inset-0 bg-black bg-opacity-10 transition-opacity"></span>
      </div>
      <div className="mt-4 truncate">
        <h2
          className={`text-base sm:text-lg text-neutral-900 font-bold md:font-bold truncate`}
        >
          {name}
        </h2>
        <span
          className={`block mt-1.5 text-sm text-[#757575]`}
        >
          {convertNumbThousand(count || 0)} properties
        </span>
      </div>
    </Link>
  );
};

export default CardCategory3;
