"use client";

// import { usePathname, useRouter, useSearchParams } from "next/navigation";
import React, { ReactNode } from "react";
// import { imageGallery as listingStayImageGallery } from "./listing-stay-detail/[id]/constant";
// import { imageGallery as listingCarImageGallery } from  "@/utils/constant";
// import { imageGallery as listingExperienceImageGallery } from  "@/utils/constant";
// import { Route } from "next";

const DetailtLayout = ({ children }: { children: ReactNode }) => {
  // const router = useRouter();
  // const thisPathname = usePathname();
  // const searchParams = useSearchParams();
  // const modal = searchParams?.get("modal");

  // const handleCloseModalImageGallery = () => {
  //   let params = new URLSearchParams(document.location.search);
  //   params.delete("modal");
  //   router.push(`${thisPathname}/?${params.toString()}` as Route);
  // };

  // const getImageGalleryListing = () => {
  //   if (thisPathname?.includes("/listing-stay-detail")) {
  //     return listingStayImageGallery;
  //   }
  //   if (thisPathname?.includes("/listing-car-detail")) {
  //     return listingCarImageGallery;
  //   }
  //   if (thisPathname?.includes("/listing-experiences-detail")) {
  //     return listingExperienceImageGallery;
  //   }

  //   return [];
  // };

  return <div>{children}</div>;
};
/* <div className="ListingDetailPage bg-white">
      <ListingImageGallery
        isShowModal={modal === 'PHOTO_TOUR_SCROLLABLE'}
        onClose={handleCloseModalImageGallery}
        images={getImageGalleryListing()}
      /> */

/* OTHER SECTION */
/* <div className="container py-24 lg:py-32">
        <div className="relative py-16">
          <BackgroundSection />
          <SectionSliderNewCategories
            heading="Explore by types of stays"
            subHeading="Explore houses based on 10 types of stays"
            categoryCardType="card5"
            itemPerRow={5}
            sliderStyle="style2"
          />
        </div>
        <SectionSubscribe className="pt-24 lg:pt-32" />
      </div> */

/* STICKY FOOTER MOBILE */
/* <MobileFooterSticky />
    </div> */

export default DetailtLayout;
