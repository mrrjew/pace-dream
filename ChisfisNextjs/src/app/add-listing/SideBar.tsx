import Link from "next/link";
import { useRouter, usePathname } from "next/navigation";

const Sidebar = ({ options }: { options: any }) => {
  const router = useRouter();
  const pathname = usePathname();

  return (
    <div className="sm:block shrink-0 hidden w-48 text-center max-h-screen border-r-2">
      {options.map((option: { href: any; label: any }) => {
        const isActive = pathname === option.href;

        return (
          <Link
            href={option.href}
            key={option.href}
            className={`block w-full p-4 ${
              isActive ? "bg-blue-600 text-white" : "bg-white text-black"
            }`}
          >
            {option.label}
          </Link>
        );
      })}
    </div>
  );
};

export default Sidebar;
