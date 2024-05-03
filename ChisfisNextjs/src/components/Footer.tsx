"use client";

import Link from "next/link";
import Logo from "@/shared/Logo";
import FacebookOutlinedIcon from '@mui/icons-material/FacebookOutlined';
import SmartDisplayOutlinedIcon from '@mui/icons-material/SmartDisplayOutlined';
import EmailOutlinedIcon from '@mui/icons-material/EmailOutlined';
import PhotoCameraOutlinedIcon from '@mui/icons-material/PhotoCameraOutlined';

export default function Component() {
  return (
    <footer className="bg-white text-gray-600 sm:text-center lg:mt-2 min-h-[20rem] border border-transparent">
      <div className="px-[1rem] md:px-[0.5rem] sm:w-[95%] container min-h-[12rem] mx-auto lg:px-6 my-10 md:flex md:justify-between md:items-start">
        <div className="text-gray-700 md:w-full text-center lg:w-1/4 pt-[3rem]">

          <div className="text-center">
            <Logo className="sm:w-1/2 md:w-full mx-auto" />
          </div>
          <br />

          <div>
            <p className="text-base text-gray-500 text-center">
              An all-in-one platform that helps you to find
              what you needed.
            </p>
          </div>
          <br />

          <div className="flex mt-2 justify-center gap-4 sm:pr-14">
            <Link className="text-blue-600" href="https://www.facebook.com/profile.php?id=61554764998573">
              <FacebookOutlinedIcon />
            </Link>
            <Link className="text-rose-600" href="https://www.youtube.com/channel/UCqj0k3Sy-2o1UVqNEKOMrhA">
              <SmartDisplayOutlinedIcon />
            </Link>
            <Link className="text-rose-900" href="mailto:Jim@pacedrea.com">
              <EmailOutlinedIcon />
            </Link>
            <Link className="text-rose-800" href="https://www.instagram.com/pacedream_official/">
              <PhotoCameraOutlinedIcon />
            </Link>
          </div>
          <br />

          <div>
            <p className="text-sm text-center text-gray-500">&copy; 2024 PaceDrem. All Rights Reserved.</p>
          </div>

        </div>

        <div className="pt-8 md:mb-0 md:w-full lg:w-1/4">
          <h2 className="text-2xl text-center font-semibold text-gray-700">Contact</h2>
          <p className="mt-4 text-sm text-center text-gray-500">
            8521 Leesburg Pike, Vienna, VA 22182 Virginia, USA
          </p>
          <p className="mt-4 text-sm text-center text-gray-500">
            info@pacedream.com
          </p>
          <p className="mt-4 text-sm text-center text-gray-500">
            703-869-2029
          </p>
        </div>

      </div>
    </footer>
  );
}

function FacebookIcon(props: any) {
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


function InstagramIcon(props: any) {
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


function LinkedinIcon(props: any) {
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


function LocateIcon(props: any) {
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


function MailIcon(props: any) {
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


function PhoneIcon(props: any) {
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


function YoutubeIcon(props: any) {
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
  )
}

