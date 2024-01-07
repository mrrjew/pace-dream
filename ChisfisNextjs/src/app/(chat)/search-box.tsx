import React from "react";
import { MagnifyingGlassIcon } from "@heroicons/react/24/outline";

export const SearchBox: React.FC<{}> = () => {
  return (
    <div className="mb-4 relative">
      <MagnifyingGlassIcon
        className="absolute top-3 left-3 text-gray-500 mr-2"
        width={18}
        height={18}
      />
      <input
        type="text"
        placeholder="Search contacts"
        className="w-full px-4 py-2 border rounded-full shadow-lg border-gray-200 outline-none pl-10"
      />
    </div>
  );
};
