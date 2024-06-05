import Link from "next/link";
import { useRouter, usePathname } from "next/navigation";
import { ListingOption } from "@/types/types";

const Sidebar = ({ options }: { options: Array<ListingOption> }) => {
  const router = useRouter();
  const pathname = usePathname();

  return (
    <div className="grid grid-cols-1 py-2 space-y-4 w-full h-fit bg-white">
      {options.map((option) => {
        const isActive = pathname === option.href;
        return (
          <Link
            href={option.href as any}
            key={option.href}
            className={`flex group hover:bg-primary-700 hover:text-white text-gray-600 gap-2 items-center w-full p-4 ${
              isActive ? "bg-primary-700 text-white" : "bg-white text-black"
            }`}
          >
           {/* <Image src={option.img} width={10} height={10} alt="img" /> */}
            {option.avatar}
           <span className="ml-2">{option.label}</span>
          </Link>
        );
      })}
    </div>
  );
};

export default Sidebar;
