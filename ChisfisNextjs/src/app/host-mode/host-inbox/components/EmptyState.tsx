import React from "react";
import { LuLoader } from "react-icons/lu";

export default function EmptyState() {
  return (
    <div className="px-20 pt-5 pb-16">
      <div className="min-h-[50vh] text-[#9786f3] flex flex-col items-center justify-center">
        <p>
          <LuLoader size={35} className="" />
        </p>
        <p className="font-semibold">No message yet</p>
      </div>
    </div>
  );
}
