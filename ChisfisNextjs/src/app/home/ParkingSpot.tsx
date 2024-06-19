import carImg from "@/images/cars/parkingSpot.svg";
import Image from "next/image";

const ParkingSpot = () => {
  return (
    <>
      <div className="flex lg:flex-row-reverse gap-[1rem] flex-col justify-center items-center w-[80%] mx-auto mt-[9rem] mb-[5rem] font-rubik ">
        <div className=" lg:w-[45%] w-[100%] ">
          <Image
            src={carImg}
            className=" w-[100%] mx-auto rounded-lg"
            alt="car"
          />
        </div>
        <div className=" lg:w-[50%] sm:w-[80%] w-[100%] lg:pl-[2rem] flex flex-col sm:gap-[2rem] gap-[1rem] justify-center ">
          <div className="flex flex-col gap-[.5rem]">
            <p className="lg:text-left text-center sm:text-[2.1rem] text-[1.2rem] text-black font-[600] sm:leading-[2.5rem] leading-[1.5rem] ">
              Find the Ideal Parking Spot for Your Favorite EV.
            </p>
            <p className="lg:text-left text-center  text-[#666666] text-[.7rem] font-[400] ">
              Are you looking for the ultimate parking spot tailored for your
              beloved electric vehicle (EV)? We{'\''}ve got you covered! Finding the
              best parking spot for your favorite EV involves more than just any
              ordinary space.
            </p>
          </div>
          <div className="flex justify-center mx-auto lg:mx-0 lg:justify-start w-fit ">
            <button className="bg-[#5527D7] rounded-full text-white px-[1.5rem] py-2">
              Find parking
            </button>
          </div>
        </div>
      </div>
    </>
  );
};
export default ParkingSpot;
