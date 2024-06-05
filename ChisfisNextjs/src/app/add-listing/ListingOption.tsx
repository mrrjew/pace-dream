import { Route } from "@/routers/types";
import { cn } from "@/utils/tailwind-merger";
import Image from "next/image";
import Link from "next/link";

interface ListingOptionProps {
  href: string;
  img: string;
  alt: string;
  label: string;
  className?: string;
}

const ListingOption = ({ href, img, alt, label,className }: ListingOptionProps) => {
  return (
    <Link
      className={cn(['py-10 px-6 hover:bg-[#632DF8] flex flex-col items-center sm:w-44 h-40 w-40 text-black border shadow-md border-[F6F4F6] hover:text-white text-[14px] font-[500] rounded-[25px] lg:rounded-[9px]',className])}
      href={href as Route<string>}
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
