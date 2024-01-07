import React from "react";
import { MagnifyingGlassIcon } from "@heroicons/react/24/outline";

export const SearchBox: React.FC<{}> = () => {
  return (
    <div className="mb-4 relative">
      <MagnifyingGlassIcon
        className="absolute top-2 left-2 text-gray-500"
        width={18}
        height={18}
      />
      <input
        type="text"
        placeholder="Search contacts"
        className="w-full pl-8 pr-2 py-1 border-none rounded-md shadow-lg"
      />
    </div>
  );
};
