"use client";

import { useEffect, useState } from "react";
import { CustomTab } from "./components/tabs";
import { MyBookings } from "./components/my-bookings";
import { MyListings } from "./components/my-listings";
import { AddOffer } from "./components/add-offer";
import NewsLetter from "@/components/NewsLetter";
import JoinOurCommunity from "@/components/common/JoinOurCommunity";
import Image from "next/image";
import { useSession } from "@/hooks/useSession";

export default function BookingAndListingPage() {
  const { getSession } = useSession();
  const { userInfo } = getSession();
  const [selectedtab, setSelectedTab] = useState(0);
  const [isItemSelected, setItemIsSelected] = useState<boolean>(false);
  const tabs = ["My Bookings", "My Listings"];
  const tabPageTitles = [
    {
      title: "All Bookings",
      subTitle: "Manage your bookings",
      component: <MyBookings setSelectedItem={setItemIsSelected} />,
    },
    {
      title: "All Listings",
      subTitle: "Manage your listings",
      component: <MyListings setSelectedItem={setItemIsSelected} />,
    },
    {
      title: "Add Offer",
      subTitle: "Run discount offer",
      component: <AddOffer />,
    },
  ];

  useEffect(() => {
    if (isItemSelected) {
      setSelectedTab(2);
    } else {
      setSelectedTab(0);
    }
  }, [isItemSelected]);

  console.log(userInfo);

  return (
    <div className="bg-white min-h-screen">
      {/* container */}
      {/* header */}
      <div className="container py-10 flex justify-between items-center flex-wrap-reverse">
        <div>
          <h1 className="text-md md:text-3xl font-bold">
            {"Welcome to host mode"}
          </h1>
          <p className="py-1 text-sm font-semibold">
            {"Manage your bookings and listings"}
          </p>
        </div>
        <div className="flex gap-2 items-center">
          <Image
            className="rounded-full"
            src={userInfo?.profilePic}
            width={90}
            height={90}
            alt="You"
          />
          <div>
            <h3 className="text-xs md:text-xl font-bold">{`${userInfo?.first_name ?? "You"} ${userInfo?.last_name ?? ""}`}</h3>
            <p className="text-xs md:text-lg font-normal">{"Host Account"}</p>
          </div>
        </div>
      </div>

      {/* tabs */}
      <div className="w-full h-fit bg-primary-500">
        <div className="container pt-8">
          <CustomTab
            tabs={tabs}
            onTabChange={(val) => {
              setSelectedTab(val);
              setItemIsSelected(false);
            }}
          />
        </div>
      </div>
      {/* selected tab title */}
      <div className="container w-full py-8">
        <h2 className="text-sm md:text-4xl font-bold">
          {tabPageTitles[selectedtab].title}
        </h2>
        <p className="text-xs md:text-sm font-bold">
          {tabPageTitles[selectedtab].subTitle}
        </p>
      </div>

      {/* selected tab content */}
      <div className="container">{tabPageTitles[selectedtab].component}</div>
      <div className="mt-24">
        <JoinOurCommunity />
      </div>
    </div>
  );
}
