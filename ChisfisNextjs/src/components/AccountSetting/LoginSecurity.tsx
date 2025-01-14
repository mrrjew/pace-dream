"use client";

import { Fragment } from "react";
import { FaqSideComponent } from "./FrequentlyAskedQuestions";

// import { useFormik } from "formik";
// import { LoginSecutirySchema } from "./Schemas/AccountSettingSchema";
// import { CiMobile2 } from "react-icons/ci";
// import { HiOutlineComputerDesktop } from "react-icons/hi2";

// const initialValues = {
//   current_password: "",
//   new_password: "",
//   confirm_password: "",
// };

// const LoginSecurity = () => {
//   const { values, errors, handleBlur, handleChange, handleSubmit, touched } =
//     useFormik({
//       initialValues: initialValues,
//       validationSchema: LoginSecutirySchema,
//       onSubmit: (values) => {
//         console.log(values);
//       },
//     });
//   return (
//     <div className="flex flex-col gap-10 max-w-[852px] min-w-96 ">
//       <form onSubmit={handleSubmit} className="flex flex-col gap-7">
//         <p className="text-[28px] font-semibold mt-2">Change Password</p>
//         <div className="flex flex-col gap-10">
//           <div className="flex flex-col lg:flex-row gap-7">
//             {/* Current password */}
//             <div className="flex flex-col lg:w-[407px] w-96">
//               <label htmlFor="">Current password</label>
//               <input
//                 type="password"
//                 placeholder="Current password"
//                 name="current_password"
//                 className="rounded-lg px-5 py-3 border-[#DAE0E6]"
//                 value={values.current_password}
//                 onChange={handleChange}
//                 onBlur={handleBlur}
//               />
//               {errors.current_password && touched.current_password ? (
//                 <p className="text-red-500 text-sm">
//                   {errors.current_password}
//                 </p>
//               ) : null}
//             </div>
//             {/* New password */}
//             <div className="flex flex-col lg:w-[407px] w-96">
//               <label htmlFor="">New password</label>
//               <input
//                 type="password"
//                 placeholder="New password"
//                 name="new_password"
//                 className="rounded-lg px-5 py-3 border-[#DAE0E6]"
//                 value={values.new_password}
//                 onChange={handleChange}
//                 onBlur={handleBlur}
//               />
//               {errors.new_password && touched.new_password ? (
//                 <p className="text-red-500 text-sm">{errors.new_password}</p>
//               ) : null}
//             </div>
//             {/* Confirm password */}
//           </div>
//           <div className="flex flex-col lg:w-[407px] w-96">
//             <label htmlFor="">Confirm password</label>
//             <input
//               type="password"
//               placeholder="Confirm password"
//               name="confirm_password"
//               className="rounded-lg px-5 py-3 border-[#DAE0E6]"
//               value={values.confirm_password}
//               onChange={handleChange}
//               onBlur={handleBlur}
//             />
//             {errors.confirm_password && touched.confirm_password ? (
//               <p className="text-red-500 text-sm">{errors.confirm_password}</p>
//             ) : null}
//           </div>
//           {/* Update Password Button */}
//           <button
//             type="submit"
//             className="w-96 lg:w-48 px-5 py-3 border rounded-xl bg-[#632DF8] text-white"
//           >
//             Update Password
//           </button>
//         </div>
//       </form>
//       {/* Social Account */}
//       <div className="flex flex-col gap-5">
//         <p className="text-[28px] font-semibold mt-2">Social Account</p>
//         {/* Google */}
//         <div>
//           <div className="border-2 flex justify-between p-5 rounded-xl">
//             <div className="flex flex-col">
//               <p className="text-xl font-medium">Google</p>
//               <p className="text-[#757575]">Connected</p>
//             </div>
//             <button className="px-5 py-3 border-2 min-w-36 rounded-xl">
//               Disconnect
//             </button>
//           </div>
//         </div>
//         <div>
//           <div className="border-2 flex justify-between p-5 rounded-xl">
//             <div className="flex flex-col">
//               <p className="text-xl font-medium">Facebook</p>
//               <p className="text-[#757575]">Connected</p>
//             </div>
//             <button className="px-5 py-3 border-2 min-w-36 rounded-xl">
//               Disconnect
//             </button>
//           </div>
//         </div>
//         <div>
//           <div className="border-2 flex justify-between p-5 rounded-xl">
//             <div className="flex flex-col">
//               <p className="text-xl font-medium">Github</p>
//               <p className="text-[#757575]">Connected</p>
//             </div>
//             <button className="px-5 py-3 border-2 min-w-36 text-white rounded-xl bg-[#632DF8]">
//               Connect
//             </button>
//           </div>
//         </div>
//       </div>
//       {/* Device history */}
//       <div className="flex flex-col gap-5">
//         <p className="text-[28px] font-semibold mt-2">Social Account</p>
//         {/* 1 */}
//         <div>
//           <div className="border-2 flex lg:flex-row flex-col lg:justify-between gap-3 p-5 rounded-xl">
//             <div className="flex items-center gap-3">
//               <div>
//                 <CiMobile2 className="w-10 h-10" />
//               </div>
//               <div className="flex flex-col ">
//                 <p className="text-xl font-medium">Windows 10.0 . Chrome</p>
//                 <p className="text-[#757575]">
//                   Santa Maria Maggiore, Milazzo . November 22, 2022 At 12:15
//                 </p>
//               </div>
//             </div>
//             <button className="px-5 py-3 border-2 min-w-36 rounded-xl">
//               Log Out
//             </button>
//           </div>
//         </div>
//         <div>
//           <div className="border-2 flex lg:flex-row flex-col lg:justify-between gap-3 p-5 rounded-xl">
//             <div className="flex items-center gap-3">
//               <div>
//                 <HiOutlineComputerDesktop className="w-10 h-10" />
//               </div>
//               <div className="flex flex-col ">
//                 <p className="text-xl font-medium">Mac OS. Safari</p>
//                 <p className="text-[#757575]">
//                   Santa Maria Maggiore, Milazzo . November 22, 2022 At 12:15
//                 </p>
//               </div>
//             </div>
//             <button className="px-5 py-3 border-2 min-w-36 rounded-xl">
//               Log Out
//             </button>
//           </div>
//         </div>
//         <div>
//           <div className="border-2 flex lg:flex-row flex-col lg:justify-between gap-3 p-5 rounded-xl">
//             <div className="flex items-center gap-3">
//               <div>
//                 <CiMobile2 className="w-10 h-10" />
//               </div>
//               <div className="flex flex-col ">
//                 <p className="text-xl font-medium">Windows 10.0 . Chrome</p>
//                 <p className="text-[#757575]">
//                   Santa Maria Maggiore, Milazzo . November 22, 2022 At 12:15
//                 </p>
//               </div>
//             </div>
//             <button className="px-5 py-3 border-2 min-w-36 rounded-xl">
//               Log Out
//             </button>
//           </div>
//         </div>
//       </div>
//       {/* Account */}
//       <div className="flex flex-col gap-5">
//         <p className="text-[28px] font-semibold mt-2">Social Account</p>
//         <div>
//           <div className="border-2 flex lg:flex-row flex-col items-center  justify-between p-5 rounded-xl">
//             <p className="text-[20px] font-medium">Deactivate Your Account</p>
//             <button className="px-5 py-3 border-2 min-w-36 lg:mt-0 mt-7 bg-[#EFEFF1] rounded-xl">
//               Delete
//             </button>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default LoginSecurity;

type LoginAndSecurityData = {
  title: string;
  data: Array<{
    label: string;
    value: string;
    actionlabel: string;
    onEdit: () => void;
  }>;
};

function LoginAndSecurityItem(props: LoginAndSecurityData) {
  const { title, data } = props;
  return (
    <div>
      <h2 className="text-lg font-semibold mb-4">{title}</h2>
      {data.map(({ label, value, actionlabel, onEdit }, index) => {
        return (
          <Fragment key={`${label}${index}`}>
            <div className="flex justify-between gap-8">
              <div className="flex flex-col gap-1">
                <p className="text-sm">{label}</p>
                <p className="text-sm text-gray-400">{value}</p>
              </div>
              <button
                onClick={onEdit}
                className="text-xs text-primary-800 font-semibold"
              >
                {actionlabel}
              </button>
            </div>
            <hr className="my-6 bg-gray-300" />
          </Fragment>
        );
      })}
    </div>
  );
}

export default function LoginAndSecurity() {
  const loginAndSecurityData: Array<LoginAndSecurityData> = [
    {
      title: "Login",
      data: [
        {
          label: "Password",
          value: "Last updated a day ago",
          actionlabel: "Update",
          onEdit: () => {},
        },
      ],
    },
    {
      title: "Social Accounts",
      data: [
        {
          label: "Facebook",
          value: "Not connected",
          actionlabel: "Connect",
          onEdit: () => {},
        },
        {
          label: "Google",
          value: "Not connected",
          actionlabel: "Connect",
          onEdit: () => {},
        },
      ],
    },
    {
      title: "Account",
      data: [
        {
          label: "Deactivate",
          value: "Deactivate your account",
          actionlabel: "Deactivate",
          onEdit: () => {},
        },
      ],
    },
  ];

  return (
    <div className="grid grid-cols-1 md:grid-cols-3 space-y-8 md:space-y-0 space-x-0 md:space-x-20">
      <div className="col-span-1 md:col-span-2">
        {loginAndSecurityData.map((val, index) => {
          return <LoginAndSecurityItem key={index} {...val} />;
        })}
      </div>
      <div className="col-span-1 md:col-span-1">
        <FaqSideComponent />
      </div>
    </div>
  );
}
