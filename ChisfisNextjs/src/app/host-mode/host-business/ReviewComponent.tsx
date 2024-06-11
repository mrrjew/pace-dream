import React from "react";
import { AiFillStar } from "react-icons/ai";

const ReviewComponent = () => {
  return (
    <>
      <div className=" flex flex-wrap gap-x-9">
        <div className=" text-gray-50 mt-10 md:w-[48%] shadow-xl">
          <div className="flex items-start border-b border-[#D9D9D9] pb-6 resBookComp">
            <div className="mx-5">
              <img
                src="https://i.ibb.co/QmWKH5K/image.png"
                className="w-40 h-36 rounded-xl"
                alt=""
              />
            </div>
            <div>
              <h3 className="text-[#272D37] font-bold text-xl">
                Cerulean Tower Tokyu Hotel
              </h3>
              <p className="text-xl mt-1 font-medium text-[#919BA7]">
                2 rooms available
              </p>
              <p className="flex mt-2 items-center text-[#797676] font-bold">
                <span className="flex items-center ml-1">
                  {" "}
                  <AiFillStar size={25} className="text-[#EBB759]" />{" "}
                  <AiFillStar size={25} className="text-[#EBB759]" />
                  <AiFillStar size={25} className="text-[#EBB759]" />
                  <AiFillStar size={25} className="text-[#EBB759]" />
                  <AiFillStar size={25} className="text-[#EBB759]" />{" "}
                </span>{" "}
                <span className="mt-1"> {" ( 5.0 ) "} </span>
              </p>
              <h5 className="text-xl mt-2 font-bold text-[#4C4C4C]">
                75$ / Night
              </h5>
            </div>
          </div>
        </div>

        <div className=" text-gray-50 mt-10 md:w-[48%] shadow-xl">
          <div className="flex items-start border-b border-[#D9D9D9] pb-6 resBookComp">
            <div className="mx-5">
              <img
                src="https://i.ibb.co/QmWKH5K/image.png"
                className="w-40 h-36 rounded-xl"
                alt=""
              />
            </div>
            <div>
              <h3 className="text-[#272D37] font-bold text-xl">
                Cerulean Tower Tokyu Hotel
              </h3>
              <p className="text-xl mt-1 font-medium text-[#919BA7]">
                2 rooms available
              </p>
              <p className="flex mt-2 items-center text-[#797676] font-bold">
                <span className="flex items-center ml-1">
                  {" "}
                  <AiFillStar size={25} className="text-[#EBB759]" />{" "}
                  <AiFillStar size={25} className="text-[#EBB759]" />
                  <AiFillStar size={25} className="text-[#EBB759]" />
                  <AiFillStar size={25} className="text-[#EBB759]" />
                  <AiFillStar size={25} className="text-[#EBB759]" />{" "}
                </span>{" "}
                <span className="mt-1"> {" ( 5.0 ) "} </span>
              </p>
              <h5 className="text-xl mt-2 font-bold text-[#4C4C4C]">
                75$ / Night
              </h5>
            </div>
          </div>
        </div>

        <div className=" text-gray-50 mt-10 md:w-[48%] shadow-xl">
          <div className="flex items-start border-b border-[#D9D9D9] pb-6 resBookComp">
            <div className="mx-5">
              <img
                src="https://i.ibb.co/QmWKH5K/image.png"
                className="w-40 h-36 rounded-xl"
                alt=""
              />
            </div>
            <div>
              <h3 className="text-[#272D37] font-bold text-xl">
                Cerulean Tower Tokyu Hotel
              </h3>
              <p className="text-xl mt-1 font-medium text-[#919BA7]">
                2 rooms available
              </p>
              <p className="flex mt-2 items-center text-[#797676] font-bold">
                <span className="flex items-center ml-1">
                  {" "}
                  <AiFillStar size={25} className="text-[#EBB759]" />{" "}
                  <AiFillStar size={25} className="text-[#EBB759]" />
                  <AiFillStar size={25} className="text-[#EBB759]" />
                  <AiFillStar size={25} className="text-[#EBB759]" />
                  <AiFillStar size={25} className="text-[#EBB759]" />{" "}
                </span>{" "}
                <span className="mt-1"> {" ( 5.0 ) "} </span>
              </p>
              <h5 className="text-xl mt-2 font-bold text-[#4C4C4C]">
                75$ / Night
              </h5>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ReviewComponent;
