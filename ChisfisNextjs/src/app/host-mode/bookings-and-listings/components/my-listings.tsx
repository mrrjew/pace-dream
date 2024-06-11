"use client";

import { BookingAndListingCard } from "./booking-and-listing-card";
import { BookingAndListingGridLayout } from "./grid-layout";

export function MyListings({
  setSelectedItem,
}: {
  setSelectedItem: (value: boolean) => void;
}) {
  return (
    <BookingAndListingGridLayout>
      {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((_, index) => (
        <BookingAndListingCard
          key={index}
          setSelectedItem={setSelectedItem}
          menus={[
            {
              title: "Add discount",
              onClick: () => console.log("Add discount"),
            },
            {
              title: "Pause The Listing",
              onClick: () => console.log("Pause The Listing"),
            },
            {
              title: "Delete",
              onClick: () => console.log("Edit"),
              className: "text-red-500",
            },
          ]}
        />
      ))}
    </BookingAndListingGridLayout>
  );
}
