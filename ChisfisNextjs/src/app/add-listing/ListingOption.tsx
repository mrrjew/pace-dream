import { Route } from "@/routers/types";
import Image from "next/image";
import Link from "next/link";

interface ListingOptionProps {
  href: string;
  img: string;
  alt: string;
  label: string;
}

const ListingOption = ({ href, img, alt, label }: ListingOptionProps) => {
  return (
    <Link
      className="p-4 hover:bg-[#632DF8] flex flex-col justify-center items-center sm:w-44 h-40 w-auto text-black border shadow-md border-[F6F4F6] hover:text-white text-[14px] font-[500] rounded-[25px] lg:rounded-[9px]"
      href={href as Route}
      type="button"
    >
      <div className="content-center mb-4">
        <Image
          className="object-center"
          src={img}
          width={40}
          height={40}
          alt={alt}
        />
      </div>
      <span className="sm:text-lg text-base"> {label}</span>
    </Link>
  );
};

export default ListingOption;
