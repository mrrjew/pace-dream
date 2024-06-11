"use client";
import React, { useState } from "react";

const NewsLetter = () => {
  return (
    <div className="w-full py-10 md-py-20 text-slate-50 flex flex-col items-center justify-center bg-violet rounded-lg space-y-2 sm:space-y-6">
      <h1 className="text-2xl sm:text-3xl font-semibold">
        Join our newsletter
      </h1>
      <p className="sm:w-1/3 text-sm md:text-md p-2 text-center">
        Read and share new perspectives on just about any topics. Everyone's
        welcome.
      </p>

      <div className="flex gap-2 items-center w-full p-2 sm:w-1/3">
        <input
          type="text"
          placeholder="Enter your email to subscribe"
          className="bg-transparent w-full ring-1 ring-slate-50 placeholder:text-slate-50 placeholder:text-sm rounded-full text-xs sm:text-sm"
        />
        <button className="rounded-full bg-slate-50 text-gray-900/70 p-2 text-xs">
          Subscribe
        </button>
      </div>
    </div>
  );
};

export default NewsLetter;
