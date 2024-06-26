"use client";

import { CarPage } from "@/components/ListingComponents/CarPage";
import React, { Suspense } from "react";

export default function Page() {
  // USE STATE

  return (
    <Suspense fallback={<div>Loading...</div>}>
      <CarPage />
    </Suspense>
  );
}
