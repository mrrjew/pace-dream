"use client";
import mastercard from "@/images/masterCard-payment.png";
import paypal from "@/images/paypal.png";
import visa from "@/images/visa.png";
import Image from "next/image";
import { PaymentPayoutsSchema } from "./Schemas/AccountSettingSchema";
import { useFormik } from "formik";

const initialValues = {
  firstname: "",
  card_number: "",
  expiry_date: "",
  cvv: "",
};

const PaymentPayouts = () => {
  const { values, errors, touched, handleChange, handleBlur, handleSubmit } =
    useFormik({
      initialValues,
      validationSchema: PaymentPayoutsSchema,
      onSubmit: (values) => {
        console.log(values);
      },
    });
  return (
    <div className="flex flex-col gap-10 max-w-[852px] min-w-96 ">
      {/* Payment Methd */}
      <div className="flex flex-col gap-5">
        <p className="text-[28px] font-semibold mt-2">Payment Methods</p>
        <div className="flex flex-col gap-4">
          {/* Payment 1 */}
          <div className="border-2 flex justify-between lg:gap-[460px] items-center bg-[#FFFFFF] p-5 rounded-xl">
            <label htmlFor="payment-1">
              <div className="flex items-center gap-5 ">
                <Image src={visa} className="h-14 w-14" alt="mastercard" />
                <div>
                  <p className="text-xl font-medium">Visa ending in 3233</p>
                  <p className="text-[#757575]">20/11/28</p>
                  <p className="text-[#757575]">Default Card</p>
                </div>
              </div>
            </label>
            <input
              type="checkbox"
              name=""
              id="payment-1"
              className="h-8 w-8 rounded-lg"
            />
          </div>
          {/* Payment 2 */}
          <div className="border-2 flex justify-between lg:gap-[460px] items-center bg-[#FFFFFF] p-5 rounded-xl">
            <label htmlFor="payment-1">
              <div className="flex items-center gap-5 ">
                <Image
                  src={mastercard}
                  className="h-14 w-14"
                  alt="mastercard"
                />
                <div>
                  <p className="text-xl font-medium">
                    Mastercard ending in 3322
                  </p>
                  <p className="text-[#757575]">20/11/28</p>
                  <p className="text-[#757575]">Default Card</p>
                </div>
              </div>
            </label>
            <input
              type="checkbox"
              name=""
              id="payment-1"
              className="h-8 w-8 rounded-lg"
            />
          </div>
          {/* Payment 3 */}
          <div className="border-2 flex justify-between lg:gap-[460px] items-center bg-[#FFFFFF] p-5 rounded-xl">
            <label htmlFor="payment-1">
              <div className="flex items-center gap-5 ">
                <Image src={paypal} className="h-14 w-14" alt="mastercard" />
                <div>
                  <p className="text-xl font-medium">PayPal ending in 2433</p>
                  <p className="text-[#757575]">20/11/28</p>
                  <p className="text-[#757575]">Default Card</p>
                </div>
              </div>
            </label>
            <input
              type="checkbox"
              name=""
              id="payment-1"
              className="h-8 w-8 rounded-lg"
            />
          </div>
        </div>
      </div>
      {/* Add New Payment Method */}
      <div className="flex flex-col gap-5">
        <p className="text-[28px] font-semibold mt-2">Add New Payment Method</p>
        <form onSubmit={handleSubmit} className="flex flex-col gap-7">
          <div className="flex lg:flex-row flex-col gap-7">
            {/* Fullname */}
            <div className="flex flex-col lg:w-[407px] w-96">
              <label htmlFor="">Full name</label>
              <input
                type="text"
                placeholder="Fullname"
                name="firstname"
                className="rounded-lg px-5 py-3 border-[#DAE0E6]"
                value={values.firstname}
                onChange={handleChange}
                onBlur={handleBlur}
              />
              {errors.firstname && touched.firstname ? (
                <p className="text-red-500 text-sm">{errors.firstname}</p>
              ) : null}
            </div>
            {/* Card number */}
            <div className="flex flex-col lg:w-[407px] w-96">
              <label htmlFor="">Card number</label>
              <input
                type="tel"
                pattern="[0-9]{16}"
                placeholder="Card number"
                name="card_number"
                className="rounded-lg px-5 py-3 border-[#DAE0E6]"
                value={values.card_number}
                onChange={handleChange}
                onBlur={handleBlur}
              />
              {errors.card_number && touched.card_number ? (
                <p className="text-red-500 text-sm">{errors.card_number}</p>
              ) : null}
            </div>
          </div>
          <div className="flex gap-7">
            {/* Expiry Date */}
            <div className="flex flex-col lg:w-[407px] w-44">
              <label htmlFor="">Expiry date</label>
              <input
                type="date"
                placeholder="Expiry date"
                name="expiry_date"
                className="rounded-lg px-5 py-3 border-[#DAE0E6]"
                value={values.expiry_date}
                onChange={handleChange}
                onBlur={handleBlur}
              />
              {errors.expiry_date && touched.expiry_date ? (
                <p className="text-red-500 text-sm">{errors.expiry_date}</p>
              ) : null}
            </div>
            {/* CVV */}
            <div className="flex flex-col lg:w-[407px] w-44">
              <label htmlFor="">CVV</label>
              <input
                type="password"
                placeholder="CVV"
                name="cvv"
                className="rounded-lg px-5 py-3 border-[#DAE0E6]"
                value={values.cvv}
                onChange={handleChange}
                onBlur={handleBlur}
              />
              {errors.cvv && touched.cvv ? (
                <p className="text-red-500 text-sm">{errors.cvv}</p>
              ) : null}
            </div>
          </div>
          <div className="flex lg:gap-[555px] gap-7 mt-4">
            <button type="reset" className="w-44 px-5 py-3 border-2 rounded-xl">
              Cancel
            </button>
            <button
              type="submit"
              className="w-44 px-5 py-3 border rounded-xl bg-[#632DF8] text-white"
            >
              Save
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default PaymentPayouts;
