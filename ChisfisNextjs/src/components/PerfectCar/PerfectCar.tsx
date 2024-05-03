import carImg from "@/images/cars/perfectCar.svg";
import Image from "next/image";
const PerfectCar = () => {
    return (
        <div className="h-fit my-20 mx-auto w-screen">
            <Image
                src={carImg}
                className="rounded-lg mx-auto object-cover"
                alt="car"
            />
            <div className="text-center">
                <p className="font-bold mt-2 text-xl">
                    Upgrade your vacation plans & <br />
                    Find the perfect car
                </p>
                <p className="text-[#666666] text-[13px]">
                    Skip the inconvenience of rental car counters and
                    discover the perfect vehicle to complement your
                    vacation vibe effortlessly.
                </p>
            </div>
            <div className="flex justify-center mt-4">
                <button className="bg-[#5527D7] rounded-full text-white px-4 py-2">Browse Now</button>
            </div>
        </div>
    );
};

export default PerfectCar;
