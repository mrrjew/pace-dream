"use client";

import ButtonPrimary from "@/shared/ButtonPrimary";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { Fragment } from "react";
import { FaMoneyCheckDollar } from "react-icons/fa6";

// import mastercard from "@/images/masterCard-payment.png";
// import paypal from "@/images/paypal.png";
// import visa from "@/images/visa.png";
// import Image from "next/image";
// import { PaymentPayoutsSchema } from "./Schemas/AccountSettingSchema";
// import { useFormik } from "formik";

// const initialValues = {
//   firstname: "",
//   card_number: "",
//   expiry_date: "",
//   cvv: "",
// };

// const PaymentPayouts = () => {
//   const { values, errors, touched, handleChange, handleBlur, handleSubmit } =
//     useFormik({
//       initialValues,
//       validationSchema: PaymentPayoutsSchema,
//       onSubmit: (values) => {
//         console.log(values);
//       },
//     });
//   return (
//     <div className="flex flex-col gap-10 max-w-[852px] min-w-96 ">
//       {/* Payment Methd */}
//       <div className="flex flex-col gap-5">
//         <p className="text-[28px] font-semibold mt-2">Payment Methods</p>
//         <div className="flex flex-col gap-4">
//           {/* Payment 1 */}
//           <div className="border-2 flex justify-between lg:gap-[460px] items-center bg-[#FFFFFF] p-5 rounded-xl">
//             <label htmlFor="payment-1">
//               <div className="flex items-center gap-5 ">
//                 <Image src={visa} className="h-14 w-14" alt="mastercard" />
//                 <div>
//                   <p className="text-xl font-medium">Visa ending in 3233</p>
//                   <p className="text-[#757575]">20/11/28</p>
//                   <p className="text-[#757575]">Default Card</p>
//                 </div>
//               </div>
//             </label>
//             <input
//               type="checkbox"
//               name=""
//               id="payment-1"
//               className="h-8 w-8 rounded-lg"
//             />
//           </div>
//           {/* Payment 2 */}
//           <div className="border-2 flex justify-between lg:gap-[460px] items-center bg-[#FFFFFF] p-5 rounded-xl">
//             <label htmlFor="payment-1">
//               <div className="flex items-center gap-5 ">
//                 <Image
//                   src={mastercard}
//                   className="h-14 w-14"
//                   alt="mastercard"
//                 />
//                 <div>
//                   <p className="text-xl font-medium">
//                     Mastercard ending in 3322
//                   </p>
//                   <p className="text-[#757575]">20/11/28</p>
//                   <p className="text-[#757575]">Default Card</p>
//                 </div>
//               </div>
//             </label>
//             <input
//               type="checkbox"
//               name=""
//               id="payment-1"
//               className="h-8 w-8 rounded-lg"
//             />
//           </div>
//           {/* Payment 3 */}
//           <div className="border-2 flex justify-between lg:gap-[460px] items-center bg-[#FFFFFF] p-5 rounded-xl">
//             <label htmlFor="payment-1">
//               <div className="flex items-center gap-5 ">
//                 <Image src={paypal} className="h-14 w-14" alt="mastercard" />
//                 <div>
//                   <p className="text-xl font-medium">PayPal ending in 2433</p>
//                   <p className="text-[#757575]">20/11/28</p>
//                   <p className="text-[#757575]">Default Card</p>
//                 </div>
//               </div>
//             </label>
//             <input
//               type="checkbox"
//               name=""
//               id="payment-1"
//               className="h-8 w-8 rounded-lg"
//             />
//           </div>
//         </div>
//       </div>
//       {/* Add New Payment Method */}
//       <div className="flex flex-col gap-5">
//         <p className="text-[28px] font-semibold mt-2">Add New Payment Method</p>
//         <form onSubmit={handleSubmit} className="flex flex-col gap-7">
//           <div className="flex lg:flex-row flex-col gap-7">
//             {/* Fullname */}
//             <div className="flex flex-col lg:w-[407px] w-96">
//               <label htmlFor="">Full name</label>
//               <input
//                 type="text"
//                 placeholder="Fullname"
//                 name="firstname"
//                 className="rounded-lg px-5 py-3 border-[#DAE0E6]"
//                 value={values.firstname}
//                 onChange={handleChange}
//                 onBlur={handleBlur}
//               />
//               {errors.firstname && touched.firstname ? (
//                 <p className="text-red-500 text-sm">{errors.firstname}</p>
//               ) : null}
//             </div>
//             {/* Card number */}
//             <div className="flex flex-col lg:w-[407px] w-96">
//               <label htmlFor="">Card number</label>
//               <input
//                 type="tel"
//                 pattern="[0-9]{16}"
//                 placeholder="Card number"
//                 name="card_number"
//                 className="rounded-lg px-5 py-3 border-[#DAE0E6]"
//                 value={values.card_number}
//                 onChange={handleChange}
//                 onBlur={handleBlur}
//               />
//               {errors.card_number && touched.card_number ? (
//                 <p className="text-red-500 text-sm">{errors.card_number}</p>
//               ) : null}
//             </div>
//           </div>
//           <div className="flex gap-7">
//             {/* Expiry Date */}
//             <div className="flex flex-col lg:w-[407px] w-44">
//               <label htmlFor="">Expiry date</label>
//               <input
//                 type="date"
//                 placeholder="Expiry date"
//                 name="expiry_date"
//                 className="rounded-lg px-5 py-3 border-[#DAE0E6]"
//                 value={values.expiry_date}
//                 onChange={handleChange}
//                 onBlur={handleBlur}
//               />
//               {errors.expiry_date && touched.expiry_date ? (
//                 <p className="text-red-500 text-sm">{errors.expiry_date}</p>
//               ) : null}
//             </div>
//             {/* CVV */}
//             <div className="flex flex-col lg:w-[407px] w-44">
//               <label htmlFor="">CVV</label>
//               <input
//                 type="password"
//                 placeholder="CVV"
//                 name="cvv"
//                 className="rounded-lg px-5 py-3 border-[#DAE0E6]"
//                 value={values.cvv}
//                 onChange={handleChange}
//                 onBlur={handleBlur}
//               />
//               {errors.cvv && touched.cvv ? (
//                 <p className="text-red-500 text-sm">{errors.cvv}</p>
//               ) : null}
//             </div>
//           </div>
//           <div className="flex lg:gap-[555px] gap-7 mt-4">
//             <button type="reset" className="w-44 px-5 py-3 border-2 rounded-xl">
//               Cancel
//             </button>
//             <button
//               type="submit"
//               className="w-44 px-5 py-3 border rounded-xl bg-[#632DF8] text-white"
//             >
//               Save
//             </button>
//           </div>
//         </form>
//       </div>
//     </div>
//   );
// };

// export default PaymentPayouts;

type PaymentItemsProps = {
  title: string;
  description: string;
  btnLabel: string;
  onBtnClick: () => void;
  value?: string;
  hideDivider?: boolean;
};

function PaymentItems({
  title,
  description,
  onBtnClick,
  btnLabel,
  value,
  hideDivider,
}: PaymentItemsProps) {
  return (
    <div className="mb-3">
      <h2 className={`text-md font-bold ${hideDivider ? "my-4" : ""}`}>
        {title}
      </h2>
      <Fragment>
        <div className="flex justify-between gap-4 mt-1">
          <p className="text-sm text-gray-400">{description}</p>
          <p className="text-sm text-gray-400">{value}</p>
        </div>
        <div className="grid grid-cols-1 space-y-0">
          <hr
            className={`my-4 ${hideDivider ? "bg-transparent border-transparent my-0" : "bg-gray-300"}`}
          />
          <ButtonPrimary
            onClick={onBtnClick}
            className="!text-xs !bg-black !text-white rounded-md font-semibold !p-2 w-fit"
          >
            {btnLabel}
          </ButtonPrimary>
        </div>
      </Fragment>
    </div>
  );
}

export function PaymentMethods() {
  const router = useRouter();

  const paymentItems: Array<PaymentItemsProps> = [
    {
      title: "Your Payments",
      description: "Keep track of all your payments and refunds.",
      btnLabel: "Manage Payments",
      onBtnClick: () => {},
    },
    {
      title: "Payment Methods",
      description:
        "Add a payment method using our secure payment system, then start planning your next trip.",
      btnLabel: "Add Payment Method",
      onBtnClick: () => {},
    },
    {
      title: "PaceDream gift credit",
      description: "",
      btnLabel: "Add Gift Card",
      onBtnClick: () => {
        router.push("/gift-card/redeen");
      },
      hideDivider: true,
    },
    {
      title: "Coupons",
      description: "Your coupons",
      value: "0",
      btnLabel: "Add Coupon",
      onBtnClick: () => {},
    },
  ];

  return (
    <div className="grid grid-cols-1 md:grid-cols-3 space-y-8 md:space-y-0 space-x-0 md:space-x-20">
      <div className="col-span-1 md:col-span-2">
        {paymentItems.map((item, index) => (
          <PaymentItems
            key={index}
            hideDivider={item?.hideDivider}
            title={item.title}
            description={item?.description}
            btnLabel={item.btnLabel}
            onBtnClick={item?.onBtnClick}
            value={item?.value}
          />
        ))}
      </div>
      <div className="ring-1 h-fit rounded-md ring-gray-300 col-span-1 md:col-span-1">
        <div className="bg-white/45 p-4 rounded-lg  min-h-44">
          <div className="rounded-lg mb-2">
            <FaMoneyCheckDollar className="w-16 h-16 fill-primary-700" />
          </div>
          <div>
            <p className="text-lg font-extrabold">
              {"Make all payments through PaceDream"}
            </p>
            <p className="text-sm text-[#757575] mt-2">
              Always pay and communicate through Airbnb to ensure you{"'"}re
              protected under our 
              <Link
                className="underline text-black"
                target="_blank"
                href={"/#"}
              >
                Terms of Service
              </Link>
              , 
              <Link
                className="underline text-black"
                target="_blank"
                href={"/#"}
              >
                Payment Terms of Service
              </Link>
              , cancellation, and other safeguards.{" "}
              <Link
                className="underline text-black"
                target="_blank"
                href={"/#"}
              >
                Learn more
              </Link>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
