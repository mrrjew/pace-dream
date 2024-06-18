import carImg from "@/images/cars/parkingSpot.svg";
import Image from "next/image";
const ParkingSpotMobile = () => {
  return (
    <div className="h-fit my-20 mx-auto w-screen">
      <Image
        src={carImg}
        className="rounded-lg mx-auto object-cover"
        alt="car"
      />
      <div className="text-center">
        <p className="font-bold mt-2 text-xl">
          Find the Ideal Parking Spot for <br />
          Your Favorite EV.
        </p>
        <p className="text-[#666666] text-[13px]">
          Are you looking for the ultimate parking spot tailored for your
          beloved electric vehicle (EV)? We{'\''}ve got you covered! Finding the best
          parking spot for your favorite EV involves more than just any ordinary
          space.
        </p>
      </div>
      <div className="flex justify-center mt-4">
        <button className="bg-[#5527D7] rounded-full text-white px-4 py-2">
          Browse Now
        </button>
      </div>
    </div>
  );
};

export default ParkingSpotMobile;
