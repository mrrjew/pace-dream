import { SETTINGS_NAV } from "@/data/navigation";
import { Route } from "next";
import Link from "next/link";

const page = () => {
  return (
    <div className="w-max h-screen flex flex-col py-8 px-2 pt-8 bg-slate-50/90 rounded-md">
      <div className="w-max flex flex-col gap-2 space-y-2 px-4 py-10">
        {SETTINGS_NAV.map((nav) => {
          return (
            <Link
              href={nav.href as Route}
              key={nav.name}
              className="hover:bg-slate-100  p-2 rounded-md"
            >
              {nav.icon}
              {nav.name}
            </Link>
          );
        })}
      </div>
    </div>
  );
};

export default page;
