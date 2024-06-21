import { ReactNode, FC } from "react";
import Link from "next/link";
import { PathName } from "@/routers/types";

interface LinkData {
  title: string;
  id: number;
  links: PathName;
  icon?: ReactNode;
}

export interface SingleLinksProps {
  singleLinkData: LinkData;
  isOpen: boolean;
  toggleSubLinks: (linkId: number) => void;
}

const SingleLinks: FC<SingleLinksProps> = ({
  singleLinkData,
  isOpen,
  toggleSubLinks,
}) => {
  const { title = "", links, icon, id } = singleLinkData;

  return (
    <Link
      href={links}
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
      </div>
    </Link>
  );
};

export default SingleLinks;
