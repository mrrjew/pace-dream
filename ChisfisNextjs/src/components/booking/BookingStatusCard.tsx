import { FC } from "react";
import Image from "next/image";
import { MdLocationOn } from "react-icons/md";

export interface StaticImageData {
  src: string;
  height: number;
  width: number;
  blurDataURL?: string;
  blurWidth?: number;
  blurHeight?: number;
}

export interface BookingStatusType {
  id: string | number;
  cInDate?: string;
  cOutdate?: string;
  title: string;
  featuredImage: StaticImageData | string;
  address: string;
  price: string;
  priceDay: string;
  priceHour: string;
}

const BookingStatusCard: FC<{
  BookingStatusData: BookingStatusType;
  isCompleted: Boolean;
}> = ({ BookingStatusData, isCompleted }) => {
  const {
    id,
    cInDate,
    cOutdate,
    title,
    featuredImage,
    address,
    price,
    priceDay,
    priceHour,
  } = BookingStatusData;

  return (
    <div className=" flex md:flex-row flex-col md:justify-between md:w-[100%]  w-[100%]  border-2 border-[#E2E4E7] rounded-[.5rem]  sm:px-[1.2rem] px-[.8rem] sm:py-[1.2rem] py-[.8rem] md:gap-0 gap-[1rem]  ">
      <div className=" flex flex-col md:gap-[.5rem] gap-[.9rem]  ">
        <div className="flex items-center justify-between ">
          <h2 className=" text-[#0C051D] text-[.9rem] font-[500] ">
            {"ID: 3232223445"}
          </h2>
          <div className="flex md:justify-end md:hidden ">
            {isCompleted ? (
              <button className=" md:px-[1.5rem] px-[.9rem] md:py-[.5rem] py-[.2rem] rounded-full bg-[#E8F2EC] bg-opacity-1 text-[#15813C] md:text-[.95rem] text-[.75rem] ">
                Completed
              </button>
            ) : (
              <button className=" md:px-[1.5rem] px-[.9rem] md:py-[.5rem] py-[.2rem] rounded-full bg-[#FFE6E6]  bg-opacity-1 text-[#FF4A4A] md:text-[.95rem] text-[.75rem] ">
                Cancelled
              </button>
            )}
          </div>
        </div>
        <div className="flex md:justify-start justify-between sm:gap-[1.6rem] gap-[.7rem]  ">
          <div className="">
            <Image
              src={featuredImage}
              alt="image"
              width={200}
              height={200}
              className=" w-[12rem] h-[10rem]  aspect-square rounded-[.5rem] object-cover "
            />
          </div>
          <div className=" flex w-fit flex-col gap-[.5rem] ">
            <h2 className=" text-[#353646] sm:text-[1.12rem] text-[.89rem] font-[600] line-clamp-2 ">
              {title}
            </h2>
            <div className=" flex items-center gap-[.4rem]  ">
              <MdLocationOn className=" text-[#5527D7]  " />
              <h2 className=" text-[#353646] text-[.85rem] line-clamp-1 ">
                {address}
              </h2>
            </div>
            <h2 className=" flex gap-[.2rem] py-[.4rem] ">
              <span className=" text-[#353646] text-[1.4rem] font-[600] ">
                {price}
              </span>
              /day
            </h2>

            <div className=" flex xl:gap-[2.5rem] sm:gap-[1.2rem] gap-[.5rem] ">
              <div className="flex flex-col ">
                <h2 className=" text-[#757575] sm:text-[.85rem] text-[.75rem] ">
                  Check In
                </h2>
                <h2 className=" sm:text-[.85rem] text-[.75rem] text-[#0C051D] ">
                  {cInDate ? cInDate : "01 Apr 24"}
                </h2>
              </div>
              <div className="flex flex-col ">
                <h2 className=" text-[#757575] sm:text-[.85rem] text-[.75rem] ">
                  Check Out
                </h2>
                <h2 className=" sm:text-[.85rem] text-[.75rem] text-[#0C051D] ">
                  {cOutdate ? cOutdate : "03 Apr 24"}
                </h2>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="flex flex-col justify-between shrink-0">
        <div className="justify-end hidden md:flex ">
          {isCompleted ? (
            <button className=" px-[1.5rem] py-[.5rem] rounded-full bg-[#E8F2EC] bg-opacity-1 text-[#15813C] text-[.95rem] ">
              Completed
            </button>
          ) : (
            <button className=" px-[1.5rem] py-[.5rem] rounded-full bg-[#FFE6E6]  bg-opacity-1 text-[#FF4A4A] text-[.95rem] ">
              Cancelled
            </button>
          )}
        </div>
        <div className=" flex md:justify-start justify-center xl:gap-[1.3rem] gap-[.5rem] ">
          <div>
            {isCompleted ? (
              <button className=" sm:px-[1.5rem] px-[.6rem] py-[.5rem] rounded-full border-2 border-[#E2E4E7] text-[#666666] sm:text-[.95rem] text-[.75rem] flex justify-center sm:gap-[.35rem] gap-[.13rem] ">
                <span className="md:hidden sm:block sm:text-[1rem]   lg:block">
                  Submit your
                </span>
                review
              </button>
            ) : null}
          </div>

          <button
            className={`sm:px-[1.5rem] px-[.6rem] py-[.5rem] rounded-full bg-[#632DF8] text-[#FFFFFF] sm:text-[.95rem] text-[.75rem]  ${
              isCompleted ? "" : " w-full  "
            } `}
          >
            Manage booking
          </button>
        </div>
      </div>
    </div>
  );
};

export default BookingStatusCard;
