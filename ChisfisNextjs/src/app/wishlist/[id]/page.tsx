import SectionGridHasMapWishList from "@/components/wishlist/SectionGridHasMapWishList";
import Link from "next/link";

const page = () => {
  return (
    <div className="lg:mx-16 mx-5">
      {/* Navigation for Back and Next */}
      <div className="flex justify-between lg:gap-0 gap-5 items-center h-20">
        <Link href="/wishlist">
          <button className="px-5 py-3 lg:w-20 w-36 border-2 rounded-full">
            Back
          </button>
        </Link>
        <button className="px-5 py-3 lg:w-20 w-36 border-2 rounded-full bg-[#574EFA] text-white ">
          Next
        </button>
      </div>
      <div className="flex flex-col gap-8">
        <div className="h-10 mt-8 text-4xl font-semibold">Countryside 2024</div>
        <div className="flex gap-3">
          <button className="px-5 font-medium hover:bg-[#574efa] hover:text-white py-3 lg:w-fit w-36 border-2 rounded-full">
            Add Date
          </button>
          <button className="px-5 font-medium hover:bg-[#574efa] hover:text-white py-3 lg:w-fit w-36 border-2 rounded-full">
            3 Guests
          </button>
        </div>
        <div className="w-80 lg:w-full mt-8 mb-8">
          <SectionGridHasMapWishList />
        </div>
      </div>
    </div>
  );
};

export default page;
