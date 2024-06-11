import DynamicPageIndicator from "@/components/DynamicPageIndicator";
import money from "@/images/money.png";
import Image from "next/image";
import Link from "next/link";
import NewsLetter from "@/components/HelpCenter/NewsLetter";

const page = () => {
  return (
    <div className="w-full h-max p-8 bg-white text-gray-900/90">
      <div className="w-full max-w-7xl mx-auto mt-8 mb-8 p-4 py-8 md:py-20">
        <DynamicPageIndicator main={"Settings"} curr_route={"Payment"} />
        <h1 className="text-4xl font-semibold mt-2 text-gray-900/80">
          Payment
        </h1>

        <div className="flex space-x-10 gap-20 justify-between mb-10  mt-20">
          <div className="space-y-10 w-full">
            {/* payment */}
            <div className="w-full">
              <h1 className="text-xl font-semibold mt-2 mb-6">Your payments</h1>
              <div className="border-b-[1px] border-gray-400/70">
                <input
                  type="text"
                  name="text"
                  className="mt-2 bg-transparent pb-6 text-md border-0 placeholder:text-gray-900/50 text-gray-900/70 w-full focus:outline-none focus:ring focus:ring-gray-900/0"
                  placeholder="Keep track of all your payments and refund"
                />
              </div>
              <button
                type="button"
                className="mt-6 bg-slate-950/90 text-slate-50 p-2 rounded-md font-normal"
              >
                Manage Payments
              </button>
            </div>

            {/* payment methods */}
            <div className="w-full">
              <h1 className="text-xl font-semibold mt-2 mb-6">
                Payment Methods
              </h1>
              <div className="border-b-[1px] border-gray-400/70">
                <textarea
                  name="password"
                  className="mt-2 bg-transparent pb-4 text-md border-0 resize-none placeholder:text-gray-900/50 text-gray-900/70 w-full focus:outline-none focus:ring focus:ring-gray-900/0"
                  placeholder="Keep track of all your payments and refund"
                />
              </div>
              <button
                type="button"
                className="mt-6 bg-slate-950/90 text-slate-50 p-2 rounded-md font-normal"
              >
                Manage Payments
              </button>
            </div>

            {/* gift cards*/}
            <div className="w-full">
              <h1 className="text-xl font-semibold mt-2 mb-6">
                PaceDream gitft credit
              </h1>
              <button
                type="button"
                className="mt-6 bg-slate-950/90 text-slate-50 p-2 rounded-md font-normal"
              >
                Add gift card
              </button>
            </div>

            {/* payment */}
            <div className="w-full">
              <h1 className="text-xl font-semibold mt-2 mb-6">Coupons</h1>
              <div className="border-b-[1px] border-gray-400/70">
                <input
                  type="text"
                  name="coupons"
                  className="mt-2 bg-transparent pb-6 text-md border-0 placeholder:text-gray-900/50 text-gray-900/70 w-full focus:outline-none focus:ring focus:ring-gray-900/0"
                  placeholder="Your coupons"
                />
              </div>
              <button
                type="button"
                className="mt-6 bg-slate-950/90 text-slate-50 p-2 rounded-md font-normal"
              >
                Add coupon
              </button>
            </div>
          </div>

          {/* right card */}
          <div className="hidden w-2/4 h-max sm:flex flex-col p-10 rounded-md shadow-sm ring-1 ring-inset ring-gray-400/70">
            <Image src={money} alt="money" className="w-20 h-auto" />

            <h2 className="text-xl font-bold mb-4">
              Make all payments through PaceDream
            </h2>
            <p>
              Always pay and communicate through Airbnb to ensure you are
              protected under our
              <Link href="#" className="underline underline-offset-2">
                {" "}
                Terms of Service
              </Link>
              ,
              <Link href="#" className="underline underline-offset-2">
                {" "}
                Payment Terms of Service
              </Link>
              , cancellation and other safeguards.
              <Link href="#" className="underline underline-offset-2">
                {" "}
                Learn more
              </Link>
              ,
            </p>
          </div>
        </div>
      </div>
      <NewsLetter />
    </div>
  );
};

export default page;
