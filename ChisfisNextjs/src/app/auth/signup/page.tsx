'use client';
import React, { FC, useState } from 'react';
import facebookSvg from '@/images/Facebook.svg';
import appleSvg from '@/images/Apple.svg';
import googleSvg from '@/images/Google.svg';
import Input from '@/shared/Input';
import ButtonPrimary from '@/shared/ButtonPrimary';
import Image from 'next/image';
import Link from 'next/link';
import { useGoogleLogin } from '@/hooks/providers/useGoogleLogin';
import { useAppleLogin } from '@/hooks/providers/useAppleLogin';
import { useFacebookLogin } from '@/hooks/providers/useFacebookLogin';
import { createUserWithEmailAndPassword } from 'firebase/auth';
import { getAuth } from 'firebase/auth';
import { app } from 'config/firebase';
import axios from 'axios';
import { useSession } from '@/hooks/useSession';
import { useRouter } from 'next/navigation';

export interface PageSignUpProps {}

const PageSignUp: FC<PageSignUpProps> = ({}) => {
  const { googleLogin, isLoading: googleLoggining } = useGoogleLogin();
  const { appleLogin, isLoading: appleLoading } = useAppleLogin();
  const { facebookLogin, isLoading: facebookLoading } = useFacebookLogin();
  const [userDetails, setUserDetails] = useState({ email: '', password: '' });

  const { setSession } = useSession();

  const router = useRouter();

  const createAccount = async (e: React.FormEvent<HTMLFormElement>) => {
    const auth = getAuth(app);
    e.preventDefault();
    try {
      const userCredential = await createUserWithEmailAndPassword(
        auth,
        userDetails.email,
        userDetails.password
      );
      const user = userCredential.user;
      const token = await user?.getIdToken();
      const response = await axios.post(
        `${process.env.NEXT_PUBLIC_BACKEND_URL}/auth/signup`,
        {
          email: userDetails.email,
          password: userDetails.password,
        }
      );
      const newUser = response.data.data;
      setSession(newUser.token, newUser, newUser.user_id);
      setTimeout(() => {
        router.push('/');
      }, 500);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className={`nc-PageSignUp  `}>
      <div className="container mb-24 lg:mb-32">
        <h2 className="my-20 flex items-center text-3xl leading-[115%] md:text-5xl md:leading-[115%] font-semibold text-neutral-900 dark:text-neutral-100 justify-center">
          Signup
        </h2>
        <div className="max-w-md mx-auto space-y-6 ">
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
          </div>
          {/* OR */}
          <div className="relative text-center">
            <span className="relative z-10 inline-block px-4 font-medium text-sm bg-white dark:text-neutral-400 dark:bg-neutral-900">
              OR
            </span>
            <div className="absolute left-0 w-full top-1/2 transform -translate-y-1/2 border border-neutral-100 dark:border-neutral-800"></div>
          </div>
          {/* FORM */}
          <form
            className="grid grid-cols-1 gap-6"
            action="#"
            method="post"
            onSubmit={createAccount}
          >
            <label className="block">
              <span className="text-neutral-800 dark:text-neutral-200">
                Email address
              </span>
              <Input
                type="email"
                placeholder="example@example.com"
                className="mt-1"
                onChange={(e) =>
                  setUserDetails({ ...userDetails, email: e.target.value })
                }
                value={userDetails.email}
              />
            </label>
            <label className="block">
              <span className="flex justify-between items-center text-neutral-800 dark:text-neutral-200">
                Password
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

          {/* ==== */}
          <span className="block text-center text-neutral-700 dark:text-neutral-300">
            Already have an account?
            <Link href="/auth/login" className="font-semibold underline">
              Sign in
            </Link>
          </span>
        </div>
      </div>
    </div>
  );
};

export default PageSignUp;
