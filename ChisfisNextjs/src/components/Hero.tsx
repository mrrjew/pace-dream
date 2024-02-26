import Image from "next/image";
import { FaArrowRight } from "react-icons/fa6";
import { FiYoutube } from "react-icons/fi";
import arrowBg from "@/images/Group 10.png"
import ellipse from "@/images/Ellipse 1.png"
import HeroImg from "@/images/Hero-Right-New.png"
import HeroImg1 from "@/images/Hero-Right-New-1.png"
import HeroImg2 from "@/images/Hero-Right-New-2.png"
import Vector from "@/images/Vector.png"

const Hero = () => {
    return (
        <div className="flex justify-center lg:gap-16 gap-2 md:flex-row flex-col-reverse text mx-auto bg-white md:py-20 py-8" >
            <div className="relative lg:mx-0 md:w-[550px] w-screen ml-4  ">
                <Image src={arrowBg} alt="arrowBg" className="h-20 w-60 object-contain absolute md:top-28 top-20 right-2 md:-right-10 " />
                <Image src={ellipse} alt="ellipse" className="object-contain absolute -left-40 -top-14 " />
                <p className="md:block hidden text-4xl font-semibold">
                    Discover Your Perfect <br /> Match: Book Rooms, Find <br /> Roommates, and Secure <br /> Last-Minute Deals <br /><span className="underline">Effortlessl</span>y!
                </p>
                <p className="md:hidden block text-4xl font-semibold">
                    Discover Your Perfect <br />  Match: Book Rooms, <br /> Find  Roommates, <br /> and Secure <br />  Last-Minute Deals <span className="underline">Effortlessl</span>y!
                </p>
                <p className=" md:block hidden text-lg mt-8 font font-medium" >
                    An all-in-one platform that helps you to find <br /> what you needed.
                </p>
                <p className="md:hidden block text-lg mt-8 font font-medium" >
                    An all-in-one platform that helps you to find what you needed.
                </p>
                <div className="flex md:gap-4 gap-4 mt-8">
                    <button className=" bg-[#5527D7] font-medium rounded-full md:px-8 md:py-4 px-4 py-4 text-white flex gap-4 items-center">Start your search <FaArrowRight /> </button>
                    <button className="flex rounded-full  md:px-8 md:py-4 px-4 py-4 gap-2 font-medium items-center text-[#5527D7] "><FiYoutube /> How it works</button>
                </div>
                <div className="mt-10 grid grid-cols-3 gap-8 w-96">
                    <div className="flex gap-2 flex-col">
                        <p className="font-bold text-2xl text-center text-[#5527D7]">8,00,00+</p>
                        <hr className="w-full h-[3px] bg-gray-300 border-0 rounded dark:bg-gray-700" />
                        <p className="text-[15px] text-center font-medium">Hourly Rental Gears</p>
                    </div>
                    <div className="flex gap-2 flex-col">
                        <p className="font-bold text-2xl text-center text-[#5527D7]">1210+</p>
                        <hr className="w-full h-[3px] bg-gray-300 border-0 rounded dark:bg-gray-700" />
                        <p className="text-[15px] text-center font-medium">Hourly Places</p>
                    </div>
                    <div className="flex gap-2 flex-col">
                        <p className="font-bold text-2xl text-center text-[#5527D7]">1100+</p>
                        <hr className="h-[3px] bg-gray-300 border-0 rounded dark:bg-gray-700" />
                        <p className="text-[15px] text-center font-medium">Experiences</p>
                    </div>
                </div>
            </div>
            <div className="lg:w-[520px] h-[500px] w-96 lg:mx-0 ml-5 relative">
                <Image src={Vector} alt="Hero-right" fill className="absolute z-0" />
                <Image src={HeroImg} alt="Hero-right" fill className="object-contain  z-1 " />
                <Image src={HeroImg1} alt="Hero-right" className="hidden md:block object-contain absolute bottom-[136px] -left-14 h-44 w-44" />
                <Image src={HeroImg2} alt="Hero-right" className="hidden md:block object-contain absolute bottom-8 left-[10px] h-[215px] w-[215px]" />
            </div>
        </div>
    )
}

export default Hero;