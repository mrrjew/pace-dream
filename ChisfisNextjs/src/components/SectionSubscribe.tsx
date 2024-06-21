"use client";
import React, { FC, useState } from "react";
import ButtonCircle from "@/shared/ButtonCircle";
import Input from "@/shared/Input";
import axios, { AxiosError } from "axios";
import { cn } from "@/utils/tailwind-merger";

export interface SectionSubscribe {
  className?: string;
}

const SectionSubscribe: FC<SectionSubscribe> = ({ className = "" }) => {
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState<any>("");
  const [loading, setLoading] = useState(false);

  const handleSubscription = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);
    try {
      const response = await axios.post(
        `${process.env.NEXT_PUBLIC_BACKEND_URL}/newsletter/subscribe`,
        { email },
      );
      setMessage(response.data.message);
      setEmail("");
    } catch (error) {
      if (axios.isAxiosError(error)) {
        const axiosError = error as AxiosError;
        if (axiosError.response) {
          const errorData: any = axiosError.response.data;
          setMessage((errorData.data as { error: string }).error);
        } else {
          setMessage("Network Error: Please try again later.");
        }
      } else {
        setMessage("Unknown Error: Please try again later.");
      }
    } finally {
      setLoading(false);
      setTimeout(() => {
        setMessage("");
      }, 2000);
    }
  };

  return (
    <div className={cn("w-full container", className)}>
      <div
        className={`mb-[4rem] nc-SectionSubscribe flex flex-col mx-auto mt-10 bg-gradient-to-r from-[#5527D7] via-[#704BD7] to-[#5527D7] relative md:ml-auto md:mr-auto items-center border rounded-xl p-8 py-[4rem]`}
      >
        <h2 className="text-white leading-10  font-semibold text-[32px] text-center">
          Join our newsletter
        </h2>
        <span className="block text-center mt-5 text-white text-sm w-[75vw] md:max-w-[100%]">
          Read and share new perspectives on just about any topic. Everyone’s
          welcome.
        </span>
        <form className="mt-8 md:mt-14 w-full" onSubmit={handleSubscription}>
          <div className="flex gap-4 max-md:flex-col justify-center">
            <input
              type="email"
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Enter your email id to subscribe"
              className="font-normal mb-2 w-full md:w-[80%] lg:w-[60%] md:mb-0 rounded-full focus:border-white focus:text-white bg-transparent border text-white border-white placeholder-white"
            />
            <button
              type="submit"
              disabled={loading}
              className={`bg-white rounded-full text-violet py-2 md:w-fit px-4 font-semibold ${loading ? "opacity-50 cursor-not-allowed" : ""} `}
            >
              {loading ? (
                <div className="flex items-center">
                  <svg
                    className="animate-spin h-5 w-5 mr-3 text-violet"
                    viewBox="0 0 24 24"
                  >
                    <circle
                      className="opacity-25"
                      cx="12"
                      cy="12"
                      r="10"
                      stroke="currentColor"
                      strokeWidth="4"
                    ></circle>
                    <path
                      className="opacity-75"
                      fill="currentColor"
                      d="M4 12a8 8 0 018-8V0c4.418 0 8 3.582 8 8s-3.582 8-8 8a1 1 0 01-1-1c0-3.309-2.691-6-6-6s-6 2.691-6 6a1 1 0 01-2 0c0-4.418 3.582-8 8-8v4a1 1 0 01-1 1z"
                    ></path>
                  </svg>
                  Subscribing...
                </div>
              ) : (
                "Subscribe"
              )}
            </button>
          </div>
        </form>
        {message && (
          <p className="text-white font-semibold text-left w-full ml-64">
            {message}
          </p>
        )}
      </div>
    </div>
  );
};

export default SectionSubscribe;
