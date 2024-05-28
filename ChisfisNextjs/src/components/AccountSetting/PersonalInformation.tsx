"use client";
import { useFormik } from "formik";
import { PersonalInformationSchema } from "./Schemas/AccountSettingSchema";
import ProfileImageEdit from "../profile/ProfileImageEdit";

import { EyeIcon } from "@heroicons/react/24/solid";
import { Details, Shield, ShieldOutlined } from "@mui/icons-material";
import { Fragment } from "react";
import { BiDetail } from "react-icons/bi";
import { IoEyeOutline } from "react-icons/io5";

// const initialValues = {
//   firstname: "",
//   lastname: "",
//   email: "",
//   phonenumber: "",
//   dateofbirth: "",
//   towncity: "",
//   zipcode: "",
//   bio: "",
//   gender: "",
//   countryregion: "",
//   city: "",
//   streetaddress: "",
//   state: "",
// };

// const PersonalInformation = () => {
//   const {
//     values,
//     errors,
//     handleBlur,
//     handleChange,
//     handleSubmit,
//     touched,
//     resetForm,
//   } = useFormik({
//     initialValues: initialValues,
//     validationSchema: PersonalInformationSchema,
//     onSubmit: (values) => {
//       // console.log(values);
//     },
//   });
//   // console.log(values);
//   // console.log(errors);

//   return (
//     <form
//       onSubmit={handleSubmit}
//       className="flex lg:flex-col flex-row max-w-[852px] min-w-96"
//     >
//       {/* Personal Information */}
//       <div className="flex flex-col gap-7">
//         {/* <p className="text-[28px] font-semibold mt-2">Personal Information</p> */}
//         <div className="flex flex-col gap-10">
//           <div className="flex gap-7">
//             {/* firstname */}
//             <div className="flex flex-col lg:w-[407px] w-44">
//               <label htmlFor="">First name</label>
//               <input
//                 type="text"
//                 placeholder="First name"
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
//             {/* lastname */}
//             <div className="flex flex-col lg:w-[407px] w-44">
//               <label htmlFor="">Last name</label>
//               <input
//                 type="text"
//                 placeholder="Last name"
//                 name="lastname"
//                 className="rounded-lg px-5 py-3 border-[#DAE0E6]"
//                 value={values.lastname}
//                 onChange={handleChange}
//                 onBlur={handleBlur}
//               />
//               {errors.lastname && touched.lastname ? (
//                 <p className="text-red-500 text-sm">{errors.lastname}</p>
//               ) : null}
//             </div>
//           </div>

//           <div className="flex lg:flex-row flex-col gap-7">
//             {/* email */}
//             <div className="flex flex-col lg:w-[407px] w-96">
//               <label htmlFor="">Email</label>
//               <input
//                 type="email"
//                 placeholder="Email"
//                 name="email"
//                 className="rounded-lg px-5 py-3 border-[#DAE0E6]"
//                 value={values.email}
//                 onChange={handleChange}
//                 onBlur={handleBlur}
//               />
//               {errors.email && touched.email ? (
//                 <p className="text-red-500 text-sm">{errors.email}</p>
//               ) : null}
//             </div>
//             {/* phone number */}
//             <div className="flex flex-col lg:w-[407px] w-96">
//               <label htmlFor="">Phone number</label>
//               <input
//                 type="tel"
//                 pattern="[0-9]{10}"
//                 placeholder="Phone number"
//                 name="phonenumber"
//                 className="rounded-lg px-5 py-3 border-[#DAE0E6]"
//                 value={values.phonenumber}
//                 onChange={handleChange}
//                 onBlur={handleBlur}
//               />
//               {errors.phonenumber && touched.phonenumber ? (
//                 <p className="text-red-500 text-sm">{errors.phonenumber}</p>
//               ) : null}
//             </div>
//           </div>
//           <div className="flex gap-7">
//             {/* Date of Birth */}
//             <div className="flex flex-col lg:w-[407px] w-44">
//               <label htmlFor="">Date of Birth</label>
//               <input
//                 type="date"
//                 placeholder="Date of Birth"
//                 name="dateofbirth"
//                 className="rounded-lg px-4 py-3 border-[#DAE0E6]"
//                 value={values.dateofbirth}
//                 onChange={handleChange}
//                 onBlur={handleBlur}
//               />
//               {errors.dateofbirth && touched.dateofbirth ? (
//                 <p className="text-red-500 text-sm">{errors.dateofbirth}</p>
//               ) : null}
//             </div>
//             {/* Town city */}
//             <div className="flex flex-col lg:w-[407px] w-44">
//               <label htmlFor="">Town/city</label>
//               <input
//                 type="text"
//                 placeholder="Town/city"
//                 name="towncity"
//                 className="rounded-lg px-5 py-3 border-[#DAE0E6]"
//                 value={values.towncity}
//                 onChange={handleChange}
//                 onBlur={handleBlur}
//               />
//               {errors.towncity && touched.towncity ? (
//                 <p className="text-red-500 text-sm">{errors.towncity}</p>
//               ) : null}
//             </div>
//           </div>
//           <div className="flex gap-7">
//             {/* Zip Code */}
//             <div className="flex flex-col lg:w-[407px] w-44">
//               <label htmlFor="">Zip code</label>
//               <input
//                 type="number"
//                 placeholder="Zip code"
//                 name="zipcode"
//                 className="rounded-lg px-4 py-3 border-[#DAE0E6]"
//                 value={values.zipcode}
//                 onChange={handleChange}
//                 onBlur={handleBlur}
//               />
//               {errors.zipcode && touched.zipcode ? (
//                 <p className="text-red-500 text-sm">{errors.zipcode}</p>
//               ) : null}
//             </div>
//             {/* Bio */}
//             <div className="flex flex-col lg:w-[407px] w-44">
//               <label htmlFor="">Bio</label>
//               <input
//                 type="text"
//                 placeholder="Bio"
//                 name="bio"
//                 className="rounded-lg px-5 py-3 border-[#DAE0E6]"
//                 value={values.bio}
//                 onChange={handleChange}
//                 onBlur={handleBlur}
//               />
//               {errors.bio && touched.bio ? (
//                 <p className="text-red-500 text-sm">{errors.bio}</p>
//               ) : null}
//             </div>
//           </div>
//           {/* Gender */}
//           <div>
//             <p className="mb-4">Gender</p>
//             <div className="flex gap-16">
//               <div className="flex gap-4 items-center">
//                 <input
//                   type="radio"
//                   name="gender"
//                   className="w-7 h-7 border-[#DAE0E6]"
//                   value={values.gender}
//                   onChange={handleChange}
//                   onBlur={handleBlur}
//                 />
//                 {/* {<p className="text-red-500 text-sm">{errors.gender}</p>} */}
//                 <span>Male</span>
//               </div>
//               <div className="flex gap-4 items-center">
//                 <input
//                   type="radio"
//                   name="gender"
//                   className="w-7 h-7 border-[#DAE0E6]"
//                   value={values.gender}
//                   onChange={handleChange}
//                   onBlur={handleBlur}
//                 />
//                 {/* {<p className="text-red-500 text-sm">{errors.gender}</p>} */}
//                 <span>Female</span>
//               </div>
//             </div>
//           </div>
//           <p className="text-[28px] font-semibold mt-2">Address</p>
//           <div className="flex gap-7">
//             {/* Country/region */}
//             <div className="flex flex-col lg:w-[407px] w-44">
//               <label htmlFor="">Country/region</label>
//               <input
//                 type="text"
//                 placeholder="Country/region"
//                 name="countryregion"
//                 className="rounded-lg px-5 py-3 border-[#DAE0E6]"
//                 value={values.countryregion}
//                 onChange={handleChange}
//                 onBlur={handleBlur}
//               />
//               {errors.countryregion && touched.countryregion ? (
//                 <p className="text-red-500 text-sm">{errors.countryregion}</p>
//               ) : null}
//             </div>
//             {/* City */}
//             <div className="flex flex-col lg:w-[407px] w-44">
//               <label htmlFor="">City</label>
//               <input
//                 type="text"
//                 placeholder="City"
//                 name="city"
//                 className="rounded-lg px-5 py-3 border-[#DAE0E6]"
//                 value={values.city}
//                 onChange={handleChange}
//                 onBlur={handleBlur}
//               />
//               {errors.city && touched.city ? (
//                 <p className="text-red-500 text-sm">{errors.city}</p>
//               ) : null}
//             </div>
//           </div>
//           <div className="flex gap-7">
//             {/* Street Address */}
//             <div className="flex flex-col lg:w-[407px] w-44">
//               <label htmlFor="">Street Address</label>
//               <input
//                 type="text"
//                 placeholder="Street Address"
//                 name="streetaddress"
//                 className="rounded-lg px-5 py-3 border-[#DAE0E6]"
//                 value={values.streetaddress}
//                 onChange={handleChange}
//                 onBlur={handleBlur}
//               />
//               {errors.streetaddress && touched.streetaddress ? (
//                 <p className="text-red-500 text-sm">{errors.streetaddress}</p>
//               ) : null}
//             </div>
//             {/* State */}
//             <div className="flex flex-col lg:w-[407px] w-44">
//               <label htmlFor="">State</label>
//               <input
//                 type="text"
//                 placeholder="State"
//                 name="state"
//                 className="rounded-lg px-5 py-3 border-[#DAE0E6]"
//                 value={values.state}
//                 onChange={handleChange}
//                 onBlur={handleBlur}
//               />
//               {errors.state && touched.state ? (
//                 <p className="text-red-500 text-sm">{errors.state}</p>
//               ) : null}
//             </div>
//           </div>
//           <div className="flex lg:gap-[555px] gap-7">
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
//         </div>
//       </div>
//     </form>
//   );
// };

// export default PersonalInformation;

type PersonalInfoIntem = {title:string,value:string,actionlabel:string,onEdit:()=>void}


function PersonalInfoItem(props:PersonalInfoIntem){
  const {title,value,actionlabel,onEdit} = props
  return (
    <div className="flex justify-between gap-8">
      <div className="flex flex-col gap-2">
        <p className="text-sm">{title}</p>
        <p className="text-sm text-gray-400">{value}</p>
      </div>
      <button onClick={onEdit} className="text-sm text-gray-800 underline">{actionlabel}</button>
    </div>
  )
}

function PersonalInfoCardItem(props:{title:string,description:string,icon:any}){

  return (
    <div className="bg-white/45 p-6 rounded-lg  min-h-44 w-fill">
      <div className=" rounded-lg mb-2">
        {props.icon}
      </div>
      <div>
        <p className="text-lg font-extrabold">{props.title}</p>
        <p className="text-xs text-[#757575] mt-2">{props.description}</p>
      </div>
    </div>
  )
}


export function PersonalInformation(){
  const iconclassName = "w-12 h-12 text-gray-500 fill-primary-800 text-primary-800 stroke-primary-800 stroke-0";

  const profileInfo : Array<PersonalInfoIntem> = [
    {
      title: "Legal Name",
      value: "John Smith",
      actionlabel: "Edit",
      onEdit: ()=>{}
    },
    {
      title: "Prefered Name",
      value: "Not provided",
      actionlabel: "Add",
      onEdit: ()=>{}
    },
    {
      title: "Phone Number",
      value: "Add a number so confirmed guests and Airbnb can get in touch. You can add other numbers and choose how they’re used",
      actionlabel: "Add",
      onEdit: ()=>{}
    },
    {
      title: "Government ID",
      value: "Not Provided",
      actionlabel: "Add",
      onEdit: ()=>{}
    },
    {
      title: "Address",
      value: "Not Provided",
      actionlabel: "Add",
      onEdit: ()=>{}
    },
    {
      title: "Emergency Contact",
      value: "Not Provided",
      actionlabel: "Add",
      onEdit: ()=>{}
    },

  ];

  const personalInfoCardItems = [
      {
          title: "Why isn’t my info shown here?",
          description: "We’re hiding some account details to protect your identity.",
          icon: <ShieldOutlined className={iconclassName} />
      },
      {
          title: "Which details can be edited?",
          description: "Contact info and personal details can be edited. If this info was used to verify your identity, you’ll need to get verified again the next time you book—or to continue hosting.",
          icon: <BiDetail className={iconclassName} />
      },
      {
          title: "What info is shared with others?",
          description: "PaceDream only releases contact information for Hosts and guests after a reservation is confirmed.",
          icon:  <IoEyeOutline className={iconclassName} stroke="2" />
      }
  ]

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
      <div className="grid gap-24 grid-cols-1 md:grid-cols-3">
        <div className="grid grid-cols-1 gap-4 col-span-3 md:col-span-2">
           {
              profileInfo.map((item,index) => (
                <Fragment key={index} >
                  <PersonalInfoItem title={item.title} value={item.value} actionlabel={item.actionlabel} onEdit={item.onEdit} />
                  <hr className="my-3 bg-gray-300"/>
                </Fragment>
              ))
           }
        </div>
        <div className="ring-1 ring-gray-300 rounded-md col-span-3 md:col-span-1"> 
            {
              personalInfoCardItems.map((item,index,arr) => (
                <Fragment key={index}>
                  <PersonalInfoCardItem title={item.title} description={item.description} icon={item.icon} />
                  {index < (arr.length-1) && <hr className="my-3 bg-gray-300"/>}
                </Fragment>
              ))
            }
        </div>
      </div>
  )
}
