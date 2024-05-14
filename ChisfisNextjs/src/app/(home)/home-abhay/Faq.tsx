"use client";
import React, { useState } from "react";
import { MdOutlineArrowBackIos } from "react-icons/md";
import { MdAdd, MdRemove } from "react-icons/md";

const faqData = [
  {
    question: "What types of spaces can I rent hourly?",
    answer: `Our Hourly Place Service offers a wide range of spaces for rent on an hourly basis, including restrooms,
      individual rooms, and parking spots, catering to a variety of needs and preferences.`,
  },
  {
    question: "How does the Roommate Feature work?",
    answer: `Our Hourly Place Service offers a wide range of spaces for rent on an hourly basis, including restrooms,
    individual rooms, and parking spots, catering to a variety of needs and preferences.`,
  },
  {
    question: "How do Last-Minute Deals work?",
    answer: `Our Hourly Place Service offers a wide range of spaces for rent on an hourly basis, including restrooms,
      individual rooms, and parking spots, catering to a variety of needs and preferences.`,
  },
  {
    question:
      "Is it necessary to log in to book hotels or access Last-Minute Deals?",
    answer: `Our Hourly Place Service offers a wide range of spaces for rent on an hourly basis, including restrooms,
    individual rooms, and parking spots, catering to a variety of needs and preferences.`,
  },
  {
    question: "Can I cancel a roommate arrangement or hourly rental booking?",
    answer: `Our Hourly Place Service offers a wide range of spaces for rent on an hourly basis, including restrooms,
    individual rooms, and parking spots, catering to a variety of needs and preferences.`,
  },
];
const Faq = () => {
  const [answerActive, setAnswerActive] = useState(0);

  const faqHandler = (index: any) => {
    if (answerActive === index) {
      setAnswerActive(-1);
    } else {
      setAnswerActive(index);
    }
  };
  return (
    <div className=" flex flex-col sm:w-[80%] w-[90%] font-rubik mx-auto mt-[8rem] ">
      <h1 className="sm:text-[2.2rem] text-[1.4rem] font-[600] leading-[3.5rem] mx-auto  ">
        Frequently Asked Question
      </h1>

      <div className=" flex lg:flex-row flex-col justify-center lg:gap-[2rem] gap-[0rem] w-[100%]  ">
        <div className="lg:w-[50%] w-[100%]  flex flex-col items-center   mb-[2rem] lg_phone:pt-[5rem] pt-[3rem] lg_phone:pb-[4rem] pb-[1rem] ">
          <div className="flex flex-col gap-[1.5rem]  w-[100%]  ">
            {faqData?.map((data, index) => (
              <div key={index}>
                <div className=" select-none lg:px-[1.5rem] px-[1rem] lg_phone:py-[.8rem] py-[.4rem] border-[1px] border-[#CFCFCF] rounded-md">
                  <div
                    onClick={() => faqHandler(index)}
                    className="flex items-center justify-between cursor-pointer"
                  >
                    <h2 className="  font-[600] text-[1rem] ">
                      {data.question}
                    </h2>
                    <div
                      className={` ${
                        answerActive === index ? "hidden" : "flex "
                      } cursor-pointer  justify-center items-center  duration-300 px-[.5rem] py-[.5rem] rounded-md`}
                    >
                      <MdAdd className=" text-[1.52rem" />
                    </div>
                    <div
                      className={` ${
                        answerActive === index ? "flex" : "hidden "
                      } cursor-pointer  justify-center items-center  duration-300 px-[.5rem] py-[.5rem] rounded-md`}
                    >
                      <MdRemove className="" />
                    </div>
                  </div>
                  <p
                    className={` ${
                      answerActive === index
                        ? "flex max-h-[10rem] "
                        : " hidden h-[0rem] "
                    } text-[#666666] duration-300  font-nunito font-[400] text-[.8rem]  pr-[1rem]   py-[.5rem] transition-[height]  `}
                  >
                    {data.answer}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className=" lg:mx-0 mx-auto w-[22rem]  ">
          <div className="mx-auto my-10 ">
            <div className=" min-h-[22rem] mx-4 border-2 py-[2rem] px-6 border-[#CFCFCF] rounded-xl flex flex-col justify-between ">
              <div className="mx-auto ">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="68"
                  height="63"
                  viewBox="0 0 68 63"
                  fill="none"
                >
                  <path
                    d="M13.7977 52.0866L0.5 63V0H67.5V52.0866H13.7977Z"
                    fill="black"
                  />
                </svg>
              </div>
              <div className="flex flex-col gap-[.5rem] items-center text-center ">
                <p className="mt-2 text-[1.1rem] font-bold  ">
                  Do you have more questions?
                </p>
                <p className="text-[#666666] text-[.7rem] font-[300]  ">
                  An all-encompassing and user-friendly platform that seamlessly
                  connects you with precisely what you're looking for,
                  streamlining your search process effortlessly.
                </p>
              </div>
              <div className="flex justify-center mt-4">
                <a
                  href="mailto:chaejimmy1@gmail.com"
                  className="bg-[#5527D7] w-full text-center rounded-full text-white px-4 py-[.6rem] "
                >
                  Shoot a Direct Mail
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Faq;
