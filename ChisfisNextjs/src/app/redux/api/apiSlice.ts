"use client";
import { createApi } from "@reduxjs/toolkit/query/react";
import { hostMenuDropdownItemsTag } from "./apiTags";
import { staggeredBaseQuery } from "./apiSliceBaseQuery";


export const apiSlice = createApi({
  reducerPath: "api",
  baseQuery: staggeredBaseQuery,
  tagTypes: [
    hostMenuDropdownItemsTag,
  ],
  endpoints: () => ({}),
});

export const { endpoints } = apiSlice;
