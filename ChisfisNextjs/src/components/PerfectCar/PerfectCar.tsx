import carImg from "@/images/cars/perfectCar.svg";
import Image from "next/image";
const PerfectCar = () => {
  return (
    <div className="w-screen mx-auto my-20 h-fit">
      <Image
        src={carImg}
        className="object-cover mx-auto rounded-lg"
        alt="car"
      />
      <div className="text-center">
        <p className="mt-2 text-xl font-bold">
          Upgrade your vacation plans & <br />
          Find the perfect car
        </p>
        <p className="text-[#666666] text-[13px]">
          Skip the inconvenience of rental car counters and discover the perfect
          vehicle to complement your vacation vibe effortlessly.
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

export default PerfectCar;
