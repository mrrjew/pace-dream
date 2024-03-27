"use client";

// import Logo from "@/shared/Logo";
// import SocialsList1 from "@/shared/SocialsList1";
// import { CustomLink } from "@/data/types";
// import React from "react";
// import FooterNav from "./FooterNav";
// import Image from "next/image";
// import PlayStore from "../images/download/google-play-store-badge-en.svg"
// import Apple from "../images/download/download-on-the-app-store-apple-logo-svgrepo-com.svg"
// import Facebook from "../images/logos/Facebook.svg"
// import Google from "../images/logos/Google.svg"
// import Instagram from "../images/logos/Instagram.svg"

// export interface WidgetFooterMenu {
//   id: string;
//   title: string;
//   menus: CustomLink[];
// }

// const widgetMenus: WidgetFooterMenu[] = [
//   {
//     id: "1",
//     title: "PaceDream",
//     menus: [
//       { href: "#", label: "Your Space" },
//       { href: "#", label: "Roommate" },
//       { href: "#", label: "Gift Card" },
//       { href: "#", label: "Experience" },
//     ],
//   },
//   {
//     id: "2",
//     title: "Support",
//     menus: [
//       { href: "/about-us", label: "Help Center" },
//       { href: "#", label: "Press" },
//     ],
//   },
//   {
//     id: "3",
//     title: "Contact",
//     menus: [
//       { href: "/about-us", label: "About Us" },
//       { href: "/contact-us", label: "Contact Us" },
//     ],
//   },
// ];

// const Footer: React.FC = () => {
//   const date=new Date();
//   const year=date.getFullYear();
//   const renderWidgetMenuItem = (menu: WidgetFooterMenu, index: number) => {
   
//     return (
//       <div key={index} className="text-sm bg-white">
//         <h2 className="font-bold text-black">
//           {menu.title}
//         </h2>
//         <ul className="mt-5 space-y-4">
//           {menu.menus.map((item, index) => (
//             <li key={index}>
//               <a
//                 key={index}
//                 className="text-neutral-400 dark:text-neutral-300 hover:text-black"
//                 href={item.href}
//               >
//                 {item.label}
//               </a>
//             </li>
//           ))}
//         </ul>
//       </div>
//     );
//   };

//   return (
    
//     <div className="bg-white">
//       <FooterNav />
//       <div className="nc-Footer relative bg-white pt-24 lg:pt-24 pb-16 border-t border-neutral-200 max-md:ml-9">
//         <div className="container grid grid-cols-2 gap-y-10 gap-x-2 sm:gap-x-8 md:grid-cols-4 lg:grid-cols-5 lg:gap-x-10 md:justify-items-end">
//           {widgetMenus.map(renderWidgetMenuItem)}
//           <div className="md:col-span-1">
//             <h2 className="font-bold text-black">
//               MobileApp
//             </h2>
//             <div className="relative w-[120px] h-[35px] md:w-[120px] md:h-[35px] md:mt-4 md:mb-2 my-2">
//               <Image src={Apple} alt="Download on the AppStore" layout="fill" objectFit="cover" />
//             </div>
//             <Image src={PlayStore} alt="Get it on Google Play" width={120} height={35} />
//           </div>
//           {/* <SocialsList1 className="flex items-center space-x-3 lg:space-x-0 lg:flex-col lg:space-y-2.5 lg:items-start" /> */}
//         </div>
//       </div>
//       <div className="flex m-auto bg-white border-t border-[#F0ECFC] lg:max-w-[80vw] py-8 justify-between max-md:flex-col">
//         <div className="flex md:flex-row flex-col max-md:ml-8 max-md:mb-8">
//           <h2 className="text-neutral-400">
//             © {year} PaceDream. All Rights Reserved.
//           </h2>
//           <div className="flex">
//             <h2 className="text-neutral-400 mx-2">
//               Terms.
//             </h2>
//             <h2 className="text-neutral-400 mr-2">
//               Sitemap.
//             </h2>
//             <h2 className="text-neutral-400">
//               Privacy
//             </h2>
//           </div>
//         </div>
//         <div className="flex max-md:pb-12 max-md:ml-9">
//           <a href="https://www.facebook.com/profile.php?id=61554764998573">
//             <Image src={Facebook} alt="Facebook" width={24} />
//           </a>
//           <a href="#">
//             <Image src={Google} alt="Google" width={24} className="mx-4" />
//           </a>
//           <a href="https://www.instagram.com/pacedream_official/">
//             <Image src={Instagram} alt="Instagram" width={24} />
//           </a>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Footer;
// "use client";

// import Logo from "@/shared/Logo";
// import SocialsList1 from "@/shared/SocialsList1";
// import { CustomLink } from "@/data/types";
// import React from "react";
// import FooterNav from "./FooterNav";
// import Image from "next/image";
// import PlayStore from "../images/download/google-play-store-badge-en.svg"
// import Apple from "../images/download/download-on-the-app-store-apple-logo-svgrepo-com.svg"
// import Facebook from "../images/logos/Facebook.svg"
// import Google from "../images/logos/Google.svg"
// import Instagram from "../images/logos/Instagram.svg"

// export interface WidgetFooterMenu {
//   id: string;
//   title: string;
//   menus: CustomLink[];
// }

// const widgetMenus: WidgetFooterMenu[] = [
//   {
//     id: "1",
//     title: "PaceDream",
//     menus: [
//       { href: "#", label: "Your Space" },
//       { href: "#", label: "Roommate" },
//       { href: "#", label: "Gift Card" },
//       { href: "#", label: "Experience" },
//     ],
//   },
//   {
//     id: "2",
//     title: "Support",
//     menus: [
//       { href: "#", label: "Help Center" },
//       { href: "#", label: "Press" },
//     ],
//   },
//   {
//     id: "3",
//     title: "Contact",
//     menus: [
//       { href: "#", label: "About Us" },
//       { href: "#", label: "Carrers" },
//     ],
//   },
// ];

// const Footer: React.FC = () => {
//   const renderWidgetMenuItem = (menu: WidgetFooterMenu, index: number) => {
//     return (
//       <div key={index} className="text-sm bg-white">
//         <h2 className="font-bold text-black">
//           {menu.title}
//         </h2>
//         <ul className="mt-5 space-y-4">
//           {menu.menus.map((item, index) => (
//             <li key={index}>
//               <a
//                 key={index}
//                 className="text-neutral-400 dark:text-neutral-300 hover:text-black"
//                 href={item.href}
//               >
//                 {item.label}
//               </a>
//             </li>
//           ))}
//         </ul>
//       </div>
//     );
//   };

//   return (
//     <div className="bg-white">
//       <FooterNav />
//       <div className="nc-Footer relative bg-white pt-24 lg:pt-24 pb-16 border-t border-neutral-200 max-md:ml-9">
//         <div className="container grid grid-cols-2 gap-y-10 gap-x-2 sm:gap-x-8 md:grid-cols-4 lg:grid-cols-5 lg:gap-x-10 md:justify-items-end">
//           {widgetMenus.map(renderWidgetMenuItem)}
//             <div className="md:col-span-1">
//               <h2 className="font-bold text-black">
//                 MobileApp
//               </h2>
//               <div className="relative w-[120px] h-[35px] md:w-[120px] md:h-[35px] md:mt-4 md:mb-2 my-2">
//                 <Image src={Apple} alt="Download on the AppStore" layout="fill" objectFit="cover"/>
//               </div>
//               <Image src={PlayStore} alt="Get it on Google Play" width={120} height={35}/>
//             </div>
//             {/* <SocialsList1 className="flex items-center space-x-3 lg:space-x-0 lg:flex-col lg:space-y-2.5 lg:items-start" /> */}
//           </div>
//         </div>
//         <div className="flex m-auto bg-white border-t border-[#F0ECFC] lg:max-w-[80vw] py-8 justify-between max-md:flex-col">
//           <div className="flex md:flex-row flex-col max-md:ml-8 max-md:mb-8">
//             <h2 className="text-neutral-400">
//               © 2023 PaceDream. All Rights Reserved.
//             </h2> 
//             <div className="flex">
//               <h2 className="text-neutral-400 mx-2">
//                 Terms.
//               </h2>
//               <h2 className="text-neutral-400 mr-2">
//                 Sitemap.
//               </h2>
//               <h2 className="text-neutral-400">
//                 Privacy
//               </h2>
//             </div>
//           </div>
//           <div className="flex max-md:pb-12 max-md:ml-9">
//             <a href="https://www.facebook.com/profile.php?id=61554764998573">
//               <Image src={Facebook} alt="Facebook" width={24}/>
//             </a>
//             <a href="#">
//               <Image src={Google} alt="Google" width={24} className="mx-4"/>
//             </a>
//             <a href="https://www.instagram.com/pacedream_official/">
//               <Image src={Instagram} alt="Instagram" width={24}/>
//             </a>
//           </div>
//         </div>
//       </div>
//   );
// };

// export default Footer;
"use client";
import Link from "next/link";
import Logo from "@/shared/Logo";
export default function Component() {
  return (
    <footer className="bg-white text-gray-600 min-h-[20rem] border border-transparent">
      <div className="px-[1rem] md:px-[0.5rem] sm:w-[95%] container min-h-[12rem] mx-auto lg:px-6 my-10 md:flex md:justify-between md:items-start">
        <div className="mb-6 md:mb-0 md:w-full lg:w-1/4">
          <h2 className="text-lg font-semibold text-gray-700">About the company</h2>
          <p className="mt-4 text-sm text-gray-500">A Large group Product based company launched in North America.</p>
          <div className="flex items-center mt-4 text-gray-700">
            <div className="h-7 w-7 rounded-[4rem] flex justify-center items-center border-2 border-[#5527D7] cursor-pointer">
              <PhoneIcon className="h-4 w-4" color='#5527D7'/>
            </div>
            <span className="ml-3 text-sm">979-968-89787</span>
          </div>
          <div className="flex items-center mt-2 text-gray-700">
            <div className="h-7 w-7 rounded-[4rem] flex justify-center items-center border-2 border-[#5527D7] cursor-pointer">
                <LocateIcon className="h-4 w-4" color='#5527D7'/>
            </div>
            <span className="ml-3 text-sm">California, USA</span>
          </div>
        </div>
        <div className="mb-6 md:mb-0 md:w-full lg:w-1/4">
          <h2 className="text-lg font-semibold text-gray-700">Products</h2>
          <nav className="mt-4">
            <ul className="text-sm text-gray-500">
              <li className="mt-2">
                <Link className="hover:underline" href="#">
                  Notes
                </Link>
              </li>
              <li className="mt-2">
                <Link className="hover:underline" href="#">
                  Project Manage
                </Link>
              </li>
              <li className="mt-2">
                <Link className="hover:underline" href="#">
                  News
                </Link>
              </li>
              <li className="mt-2">
                <Link className="hover:underline" href="#">
                  Updates
                </Link>
              </li>
            </ul>
          </nav>
        </div>
        <div className="mb-6 md:mb-0 md:w-full lg:w-1/4">
          <h2 className="text-lg font-semibold text-gray-700">Get Started</h2>
          <nav className="mt-4">
            <ul className="text-sm text-gray-500">
              <li className="mt-2">
                <Link className="hover:underline" href="#">
                  Career
                </Link>
              </li>
              <li className="mt-2">
                <Link className="hover:underline" href="#">
                  Business
                </Link>
              </li>
              <li className="mt-2">
                <Link className="hover:underline" href="#">
                  Partner with Us
                </Link>
              </li>
              <li className="mt-2">
                <Link className="hover:underline" href="#">
                  Tutorials
                </Link>
              </li>
              <li className="mt-2">
                <Link className="hover:underline" href="#">
                  Buy Premium
                </Link>
              </li>
            </ul>
          </nav>
        </div>
        <div className="mb-6 md:mb-0 md:w-full lg:w-1/4">
          <h2 className="text-lg font-semibold text-gray-700">About</h2>
          <nav className="mt-4">
            <ul className="text-sm text-gray-500">
              <li className="mt-2">
                <Link className="hover:underline" href="#">
                  Privicy Policy
                </Link>
              </li>
              <li className="mt-2">
                <Link className="hover:underline" href="#">
                  Terms and Conditions
                </Link>
              </li>
              <li className="mt-2">
                <Link className="hover:underline" href="#">
                  Disclaimer
                </Link>
              </li>
              <li className="mt-2">
                <Link className="hover:underline" href="#">
                  Investor Relations
                </Link>
              </li>
            </ul>
          </nav>
        </div>
        <div className="text-gray-700 md:w-full lg:w-1/4 pt-[3rem]">
          <div>
            <Logo className="w-full ml-7"/>
          </div>
          <div className="flex mt-[2rem] justify-center gap-4">
            //Facebook
            <Link className="text-gray-500 hover:text-purple-600" href="https://www.facebook.com/profile.php?id=61554764998573">
              <FacebookIcon className="h-5 w-5" color='#5527D7'/>
            </Link>
            //Youtube
            <Link className="text-gray-500 hover:text-purple-600" href="https://www.youtube.com/channel/UCqj0k3Sy-2o1UVqNEKOMrhA">
              <YoutubeIcon className="h-5 w-5" color='#5527D7' />
            </Link>
            //Linkedin
            <Link className="text-gray-500 hover:text-purple-600" href="#">
              <LinkedinIcon className="h-5 w-5" color='#5527D7' />
            </Link>
            //Mail
            <Link className="text-gray-500 hover:text-purple-600" href="mailto:Jim@pacedrea.com">
              <MailIcon className="h-5 w-5" color='#5527D7' />
            </Link>
            //Instagram
            <Link className="text-gray-500 hover:text-purple-600" href="https://www.instagram.com/pacedream_official/">
              <InstagramIcon className="h-5 w-5" color='#5527D7' />
            </Link>
          </div>
        </div>
      </div>
      {/* <div className="flex m-auto bg-white border-t border-[#F0ECFC] lg:max-w-[80vw] py-8 justify-between max-md:flex-col">
          <div className="flex md:flex-row flex-col max-md:ml-8 max-md:mb-8">
            <h2 className="text-neutral-400">
              © 2023 PaceDream. All Rights Reserved.
            </h2> 
            <div className="flex">
              <h2 className="text-neutral-400 mx-2">
                Terms.
              </h2>
              <h2 className="text-neutral-400 mr-2">
                Sitemap.
              </h2>
              <h2 className="text-neutral-400">
                Privacy
               </h2>
             </div>
         </div>
         </div> */}
    </footer>
  );
}

function FacebookIcon(props:any) {
  const { color, ...restProps } = props;
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke={color}
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
    </svg>
  )
}


function InstagramIcon(props:any) {
  const { color, ...restProps } = props;
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke={color}
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
      <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
      <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
    </svg>
  )
}


function LinkedinIcon(props:any) {
  const { color, ...restProps } = props;
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke={color}
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
      <rect width="4" height="12" x="2" y="9" />
      <circle cx="4" cy="4" r="2" />
    </svg>
  )
}


function LocateIcon(props:any) {
  const { color, ...restProps } = props;
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke={color}
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <line x1="2" x2="5" y1="12" y2="12" />
      <line x1="19" x2="22" y1="12" y2="12" />
      <line x1="12" x2="12" y1="2" y2="5" />
      <line x1="12" x2="12" y1="19" y2="22" />
      <circle cx="12" cy="12" r="7" />
    </svg>
  )
}


function MailIcon(props:any) {
  const { color, ...restProps } = props;
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke={color}
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <rect width="20" height="16" x="2" y="4" rx="2" />
      <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
    </svg>
  )
}


function PhoneIcon(props:any) {
  const { color, ...restProps } = props;
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke={color}
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
    </svg>
  )
}


function YoutubeIcon(props:any) {
  const { color, ...restProps } = props;
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke={color}
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M2.5 17a24.12 24.12 0 0 1 0-10 2 2 0 0 1 1.4-1.4 49.56 49.56 0 0 1 16.2 0A2 2 0 0 1 21.5 7a24.12 24.12 0 0 1 0 10 2 2 0 0 1-1.4 1.4 49.55 49.55 0 0 1-16.2 0A2 2 0 0 1 2.5 17" />
      <path d="m10 15 5-3-5-3z" />
    </svg>
  )}

