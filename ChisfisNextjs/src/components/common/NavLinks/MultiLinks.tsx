import { ReactNode, FC, useState, useEffect } from "react";
import { PathName } from "@/routers/types";
import { IoIosArrowDown } from "react-icons/io";
import Link from "next/link";

interface Link {
  path: PathName;
  name: string;
  icon?: ReactNode;
}

interface LinkData {
  title: string;
  id: number;
  links: Link[];
  icon?: ReactNode;
}

export interface MultiLinksProps {
  linkData: LinkData;
  isOpen: boolean;
  toggleSubLinks: (linkId: number) => void;
}

const MultiLinks: FC<MultiLinksProps> = ({
  linkData,
  isOpen,
  toggleSubLinks,
}) => {
  const { title = "", links = [], icon, id } = linkData;

  return (
    <div className="w-full ">
      <div
        onClick={() => toggleSubLinks(id)}
        className={`flex gap-[1rem] px-[.5rem] items-center cursor-pointer font-[400] border-[0px] border-l-[4px] border hover:bg-[#F0ECFC] ${
          isOpen
            ? "text-[#632DF8] border-[#632DF8] bg-[#F0ECFC] "
            : "text-neutral-500 border-transparent"
        }`}
      >
        <div className="flex justify-between px-[.8rem] py-[.6rem] w-full">
          <div className="flex gap-[.5rem] items-center">
            <div className="text-[1.2rem] my-auto">{icon}</div>
            <h2 className=" text-[.95rem] ">{title}</h2>
          </div>
          <div
            className={`my-auto duration-300 ${
              isOpen ? "rotate-[180deg]" : ""
            }`}
          >
            <IoIosArrowDown />
          </div>
        </div>
      </div>

      <div>
        <div
          className={`flex flex-col duration-300 ${
            isOpen ? "max-h-[30rem] flex " : "max-h-0 hidden"
          }  `}
        >
          {links.map((link: Link, index: number) => (
            <Link
              key={String(index)}
              href={link.path}
              className="text-neutral-500 hover:text-[#632DF8]"
            >
              <div className="flex justify-between px-[1.2rem] pl-[1.7rem] py-[.5rem] w-full">
                <div className="flex gap-[.5rem] items-center text-[.9rem]">
                  <div className=" my-auto text-[1.2rem] ">{link.icon}</div>
                  <span className={`${link?.icon ? "" : "pl-[1.2rem]"}  `}>
                    {link.name}
                  </span>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};

export default MultiLinks;
