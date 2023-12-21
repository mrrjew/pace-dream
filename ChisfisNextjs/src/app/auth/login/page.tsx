'use client';
import React, { FC, useState } from 'react';
import facebookSvg from '@/images/Facebook.svg';
import googleSvg from '@/images/Google.svg';
import appleSvg from '@/images/Apple.svg';
import Input from '@/shared/Input';
import ButtonPrimary from '@/shared/ButtonPrimary';
import Image from 'next/image';
import Link from 'next/link';
import { useGoogleLogin } from '@/hooks/providers/useGoogleLogin';
import { useAppleLogin } from '@/hooks/providers/useAppleLogin';
import { useFacebookLogin } from '@/hooks/providers/useFacebookLogin';
import { getAuth, signInWithEmailAndPassword } from 'firebase/auth';
import { app } from 'config/firebase';
import axios, { AxiosError } from 'axios';
import { useSession } from '@/hooks/useSession';
import { useRouter } from 'next/navigation';
import { SignupMethod } from '@/utils/types/SignupMethod';

export interface PageLoginProps {}

const PageLogin: FC<PageLoginProps> = ({}) => {
  const { googleLogin, isLoading: googleLoggining } = useGoogleLogin();
  const { appleLogin, isLoading: appleLoading } = useAppleLogin();
  const { facebookLogin, isLoading: facebookLoading } = useFacebookLogin();
  const [userDetails, setUserDetails] = useState({ email: '', password: '' });
  const [loading, setLoading] = useState(false);
  const [mobile, setMobile] = useState('');
  const [otp, setOtp] = useState('');
  const [showVerifyOtp, setShowVerifyOtp] = useState(false);
  const [loginMethod, setLoginMethod] = useState<SignupMethod>(
    SignupMethod.EMAIL
  );

  const { setSession } = useSession();

  const router = useRouter();

  const loginUser = async (e: React.FormEvent<HTMLFormElement>) => {
    const auth = getAuth(app);
    e.preventDefault();
    try {
      const userCredential = await signInWithEmailAndPassword(
        auth,
        userDetails.email,
        userDetails.password
      );
      const user = userCredential.user;
      const token = await user?.getIdToken();

      const response = await axios.post(
        `${process.env.NEXT_PUBLIC_BACKEND_URL}/auth/login`,
        {
          email: userDetails.email,
          password: userDetails.password,
        }
      );
      const loggedInUser = response.data.data;
      setSession(loggedInUser.token, loggedInUser, loggedInUser.user_id);
      setTimeout(() => {
        console.log('pushing');
        router.push('/');
      }, 500);
    } catch (error) {
      console.log(error);
    }
  };

  const checkMobile = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);
    try {
      const response = await axios.post(
        `${process.env.NEXT_PUBLIC_BACKEND_URL}/auth/send-otp`,
        {
          mobile,
        }
      );
      if (response.status === 200) {
        setShowVerifyOtp(true);
      }
    } catch (err) {
      const error = err as AxiosError;
      console.log(error);
    }
    setLoading(false);
  };

  const verifyOtp = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);
    try {
      const response = await axios.post(
        `${process.env.NEXT_PUBLIC_BACKEND_URL}/auth/verify-otp`,
        {
          mobile,
          otp,
        }
      );
      // check if user already exists
      if (response.data.data?.token) {
        setSession(
          response.data.data.token,
          response.data.data,
          response.data.data.user_id
        );
        setTimeout(() => {
          router.push('/');
        }, 200);
        return;
      }
    } catch (err) {
      const error = err as AxiosError;
    }
    setLoading(false);
  };

  return (
    <div className={`nc-PageLogin`}>
      <div className="container mb-24 lg:mb-32">
        <h2 className="my-20 flex items-center text-3xl leading-[115%] md:text-5xl md:leading-[115%] font-semibold text-neutral-900 dark:text-neutral-100 justify-center">
          Login
        </h2>
        <div className="max-w-md mx-auto space-y-6">
          <div className="grid gap-3">
            <button
              className="nc-will-change-transform flex w-full rounded-lg bg-primary-50 dark:bg-neutral-800 px-4 py-3 transform transition-transform sm:px-6 hover:translate-y-[-2px]"
              onClick={() => googleLogin()}
              disabled={googleLoggining}
            >
              <Image
                className="flex-shrink-0"
                src={googleSvg}
                alt="Continue with Google"
              />
              <h3 className="flex-grow text-center text-sm font-medium text-neutral-700 dark:text-neutral-300 sm:text-sm">
                {googleLoggining ? (
                  <div className="flex items-center justify-center">
                    <div className="w-4 h-4 border-t-2 border-r-2 border-gray-900 rounded-full animate-spin"></div>
                  </div>
                ) : (
                  'Continue with Google'
                )}
              </h3>
            </button>
            <button
              className="nc-will-change-transform flex w-full rounded-lg bg-primary-50 dark:bg-neutral-800 px-4 py-3 transform transition-transform sm:px-6 hover:translate-y-[-2px]"
              onClick={() => facebookLogin()}
              disabled={facebookLoading}
            >
              <Image
                className="flex-shrink-0"
                src={facebookSvg}
                alt="Continue with Facebook"
              />
              <h3 className="flex-grow text-center text-sm font-medium text-neutral-700 dark:text-neutral-300 sm:text-sm">
                {facebookLoading ? (
                  <div className="flex items-center justify-center">
                    <div className="w-4 h-4 border-t-2 border-r-2 border-gray-900 rounded-full animate-spin"></div>
                  </div>
                ) : (
                  'Continue with Facebook'
                )}
              </h3>
            </button>
            <button
              className="nc-will-change-transform flex w-full rounded-lg bg-primary-50 dark:bg-neutral-800 px-4 py-3 transform transition-transform sm:px-6 hover:translate-y-[-2px]"
              onClick={() => appleLogin()}
              disabled={appleLoading}
            >
              <Image
                className="flex-shrink-0"
                src={appleSvg}
                alt="Continue with Apple"
              />
              <h3 className="flex-grow text-center text-sm font-medium text-neutral-700 dark:text-neutral-300 sm:text-sm">
                {appleLoading ? (
                  <div className="flex items-center justify-center">
                    <div className="w-4 h-4 border-t-2 border-r-2 border-gray-900 rounded-full animate-spin"></div>
                  </div>
                ) : (
                  'Continue with Apple'
                )}
              </h3>
            </button>
            {loginMethod === SignupMethod.EMAIL ? (
              <button
                className="nc-will-change-transform flex w-full rounded-lg bg-primary-50 dark:bg-neutral-800 px-4 py-3 transform transition-transform sm:px-6 hover:translate-y-[-2px]"
                onClick={() => setLoginMethod(SignupMethod.MOBILE)}
              >
                <Image
                  className="flex-shrink-0"
                  src={appleSvg}
                  alt="Continue with Apple"
                />
                <h3 className="flex-grow text-center text-sm font-medium text-neutral-700 dark:text-neutral-300 sm:text-sm">
                  Continue with Mobile
                </h3>
              </button>
            ) : (
              <button
                className="nc-will-change-transform flex w-full rounded-lg bg-primary-50 dark:bg-neutral-800 px-4 py-3 transform transition-transform sm:px-6 hover:translate-y-[-2px]"
                onClick={() => setLoginMethod(SignupMethod.EMAIL)}
              >
                <Image
                  className="flex-shrink-0"
                  src={appleSvg}
                  alt="Continue with Apple"
                />
                <h3 className="flex-grow text-center text-sm font-medium text-neutral-700 dark:text-neutral-300 sm:text-sm">
                  Continue with Email
                </h3>
              </button>
            )}
          </div>
          {/* OR */}
          <div className="relative text-center">
            <span className="relative z-10 inline-block px-4 font-medium text-sm bg-white dark:text-neutral-400 dark:bg-neutral-900">
              OR
            </span>
            <div className="absolute left-0 w-full top-1/2 transform -translate-y-1/2 border border-neutral-100 dark:border-neutral-800"></div>
          </div>
          {/* FORM */}
          {loginMethod === SignupMethod.EMAIL ? (
            <form
              className="grid grid-cols-1 gap-6"
              onSubmit={loginUser}
              method="post"
            >
              <label className="block">
                <span className="text-neutral-800 dark:text-neutral-200">
                  Email address
                </span>
                <Input
                  type="email"
                  onChange={(e) =>
                    setUserDetails({ ...userDetails, email: e.target.value })
                  }
                  value={userDetails.email}
                  placeholder="example@example.com"
                  className="mt-1"
                />
              </label>
              <label className="block">
                <span className="flex justify-between items-center text-neutral-800 dark:text-neutral-200">
                  Password
                  <Link
                    href="/auth/login"
                    className="text-sm underline font-medium"
                  >
                    Forgot password?
                  </Link>
                </span>
                <Input
                  type="password"
                  className="mt-1"
                  onChange={(e) =>
                    setUserDetails({ ...userDetails, password: e.target.value })
                  }
                  value={userDetails.password}
                />
              </label>
              <ButtonPrimary type="submit">Continue</ButtonPrimary>
            </form>
          ) : (
            <form
              className="grid grid-cols-1 gap-6"
              action="#"
              method="post"
              onSubmit={showVerifyOtp ? verifyOtp : checkMobile}
            >
              <label className="block">
                <span className="text-neutral-800 dark:text-neutral-200">
                  Mobile Number
                </span>
                <Input
                  type="tel"
                  placeholder="Enter your mobile number along with country code"
                  className="mt-1"
                  onChange={(e) => setMobile(e.target.value)}
                  value={mobile}
                  disabled={showVerifyOtp}
                />
              </label>
              {showVerifyOtp && (
                <label className="block">
                  <span className="text-neutral-800 dark:text-neutral-200">
                    OTP
                  </span>
                  <Input
                    type="tel"
                    placeholder="Enter OTP"
                    className="mt-1"
                    onChange={(e) => setOtp(e.target.value)}
                    value={otp}
                  />
                </label>
              )}
              <ButtonPrimary type="submit" loading={loading}>
                Continue
              </ButtonPrimary>
            </form>
          )}

          {/* ==== */}
          <span className="block text-center text-neutral-700 dark:text-neutral-300">
            New user? {` `}
            <Link href="/auth/signup" className="font-semibold underline">
              Create an account
            </Link>
          </span>
        </div>
      </div>
    </div>
  );
};

export default PageLogin;
