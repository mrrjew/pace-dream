"use client";
import { useFormik } from "formik";
import { PersonalInformationSchema } from "./Schemas/AccountSettingSchema";
import ProfileImageEdit from "../profile/ProfileImageEdit";

const initialValues = {
  firstname: "",
  lastname: "",
  email: "",
  phonenumber: "",
  dateofbirth: "",
  towncity: "",
  zipcode: "",
  bio: "",
  gender: "",
  countryregion: "",
  city: "",
  streetaddress: "",
  state: "",
};

const PersonalInformation = () => {
  const {
    values,
    errors,
    handleBlur,
    handleChange,
    handleSubmit,
    touched,
    resetForm,
  } = useFormik({
    initialValues: initialValues,
    validationSchema: PersonalInformationSchema,
    onSubmit: (values) => {
      // console.log(values);
    },
  });
  // console.log(values);
  // console.log(errors);

  return (
    <form
      onSubmit={handleSubmit}
      className="flex lg:flex-col flex-row max-w-[852px] min-w-96"
    >
      {/* Personal Information */}
      <div className="flex flex-col gap-7">
        <p className="text-[28px] font-semibold mt-2">Personal Information</p>
        <div className="flex flex-col gap-10">
            <ProfileImageEdit />
          <div className="flex gap-7">
            {/* firstname */}
            <div className="flex flex-col lg:w-[407px] w-44">
              <label htmlFor="firstname">First name</label>
              <input
                type="text"
                placeholder="First name"
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
            {/* lastname */}
            <div className="flex flex-col lg:w-[407px] w-44">
              <label htmlFor="lastname">Last name</label>
              <input
                type="text"
                placeholder="Last name"
                name="lastname"
                className="rounded-lg px-5 py-3 border-[#DAE0E6]"
                value={values.lastname}
                onChange={handleChange}
                onBlur={handleBlur}
              />
              {errors.lastname && touched.lastname ? (
                <p className="text-red-500 text-sm">{errors.lastname}</p>
              ) : null}
            </div>
          </div>
          <div className="flex lg:flex-row flex-col gap-7">
            {/* email */}
            <div className="flex flex-col lg:w-[407px] w-96">
              <label htmlFor="email">Email</label>
              <input
                type="email"
                placeholder="Email"
                name="email"
                className="rounded-lg px-5 py-3 border-[#DAE0E6]"
                value={values.email}
                onChange={handleChange}
                onBlur={handleBlur}
              />
              {errors.email && touched.email ? (
                <p className="text-red-500 text-sm">{errors.email}</p>
              ) : null}
            </div>
            {/* phone number */}
            <div className="flex flex-col lg:w-[407px] w-96">
              <label htmlFor="phonenumber">Phone number</label>
              <input
                type="tel"
                pattern="[0-9]{10}"
                placeholder="Phone number"
                name="phonenumber"
                className="rounded-lg px-5 py-3 border-[#DAE0E6]"
                value={values.phonenumber}
                onChange={handleChange}
                onBlur={handleBlur}
              />
              {errors.phonenumber && touched.phonenumber ? (
                <p className="text-red-500 text-sm">{errors.phonenumber}</p>
              ) : null}
            </div>
          </div>
          <div className="flex gap-7">
            {/* Date of Birth */}
            <div className="flex flex-col lg:w-[407px] w-44">
              <label htmlFor="dateofbirth">Date of Birth</label>
              <input
                type="date"
                placeholder="Date of Birth"
                name="dateofbirth"
                className="rounded-lg px-4 py-3 border-[#DAE0E6]"
                value={values.dateofbirth}
                onChange={handleChange}
                onBlur={handleBlur}
              />
              {errors.dateofbirth && touched.dateofbirth ? (
                <p className="text-red-500 text-sm">{errors.dateofbirth}</p>
              ) : null}
            </div>
            {/* Town city */}
            <div className="flex flex-col lg:w-[407px] w-44">
              <label htmlFor="towncity">Town/city</label>
              <input
                type="text"
                placeholder="Town/city"
                name="towncity"
                className="rounded-lg px-5 py-3 border-[#DAE0E6]"
                value={values.towncity}
                onChange={handleChange}
                onBlur={handleBlur}
              />
              {errors.towncity && touched.towncity ? (
                <p className="text-red-500 text-sm">{errors.towncity}</p>
              ) : null}
            </div>
          </div>
          <div className="flex gap-7">
            {/* Zip Code */}
            <div className="flex flex-col lg:w-[407px] w-44">
              <label htmlFor="zipcode">Zip code</label>
              <input
                type="number"
                placeholder="Zip code"
                name="zipcode"
                className="rounded-lg px-4 py-3 border-[#DAE0E6]"
                value={values.zipcode}
                onChange={handleChange}
                onBlur={handleBlur}
              />
              {errors.zipcode && touched.zipcode ? (
                <p className="text-red-500 text-sm">{errors.zipcode}</p>
              ) : null}
            </div>
            {/* Bio */}
            <div className="flex flex-col lg:w-[407px] w-44">
              <label htmlFor="bio">Bio</label>
              <input
                type="text"
                placeholder="Bio"
                name="bio"
                className="rounded-lg px-5 py-3 border-[#DAE0E6]"
                value={values.bio}
                onChange={handleChange}
                onBlur={handleBlur}
              />
              {errors.bio && touched.bio ? (
                <p className="text-red-500 text-sm">{errors.bio}</p>
              ) : null}
            </div>
          </div>
          {/* Gender */}
          <div>
            <p className="mb-4">Gender</p>
            <div className="flex gap-16">
              <div className="flex gap-4 items-center">
                <input
                  type="radio"
                  name="gender"
                  className="w-7 h-7 border-[#DAE0E6]"
                  value={values.gender}
                  onChange={handleChange}
                  onBlur={handleBlur}
                />
                {/* {<p className="text-red-500 text-sm">{errors.gender}</p>} */}
                <span>Male</span>
              </div>
              <div className="flex gap-4 items-center">
                <input
                  type="radio"
                  name="gender"
                  className="w-7 h-7 border-[#DAE0E6]"
                  value={values.gender}
                  onChange={handleChange}
                  onBlur={handleBlur}
                />
                {/* {<p className="text-red-500 text-sm">{errors.gender}</p>} */}
                <span>Female</span>
              </div>
            </div>
          </div>
          <p className="text-[28px] font-semibold mt-2">Address</p>
          <div className="flex gap-7">
            {/* Country/region */}
            <div className="flex flex-col lg:w-[407px] w-44">
              <label htmlFor="countryregion">Country/region</label>
              <input
                type="text"
                placeholder="Country/region"
                name="countryregion"
                className="rounded-lg px-5 py-3 border-[#DAE0E6]"
                value={values.countryregion}
                onChange={handleChange}
                onBlur={handleBlur}
              />
              {errors.countryregion && touched.countryregion ? (
                <p className="text-red-500 text-sm">{errors.countryregion}</p>
              ) : null}
            </div>
            {/* City */}
            <div className="flex flex-col lg:w-[407px] w-44">
              <label htmlFor="city">City</label>
              <input
                type="text"
                placeholder="City"
                name="city"
                className="rounded-lg px-5 py-3 border-[#DAE0E6]"
                value={values.city}
                onChange={handleChange}
                onBlur={handleBlur}
              />
              {errors.city && touched.city ? (
                <p className="text-red-500 text-sm">{errors.city}</p>
              ) : null}
            </div>
          </div>
          <div className="flex gap-7">
            {/* Street Address */}
            <div className="flex flex-col lg:w-[407px] w-44">
              <label htmlFor="streetaddress">Street Address</label>
              <input
                type="text"
                placeholder="Street Address"
                name="streetaddress"
                className="rounded-lg px-5 py-3 border-[#DAE0E6]"
                value={values.streetaddress}
                onChange={handleChange}
                onBlur={handleBlur}
              />
              {errors.streetaddress && touched.streetaddress ? (
                <p className="text-red-500 text-sm">{errors.streetaddress}</p>
              ) : null}
            </div>
            {/* State */}
            <div className="flex flex-col lg:w-[407px] w-44">
              <label htmlFor="state">State</label>
              <input
                type="text"
                placeholder="State"
                name="state"
                className="rounded-lg px-5 py-3 border-[#DAE0E6]"
                value={values.state}
                onChange={handleChange}
                onBlur={handleBlur}
              />
              {errors.state && touched.state ? (
                <p className="text-red-500 text-sm">{errors.state}</p>
              ) : null}
            </div>
          </div>
          <div className="flex lg:gap-[555px] gap-7">
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
        </div>
      </div>
    </form>
  );
};

export default PersonalInformation;
