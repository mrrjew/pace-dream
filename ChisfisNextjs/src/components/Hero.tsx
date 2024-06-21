import Image from "next/image";
import { FaArrowRight } from "react-icons/fa6";
import { FiYoutube } from "react-icons/fi";
import arrowBg from "@/images/Group 10.png";
import ellipse from "@/images/Ellipse 1.png";
// import HeroImg from "@/images/Hero-Right-New.png"
import HeroImg1 from "@/images/Hero-Right-New-1.png";
import HeroImg2 from "@/images/Hero-Right-New-2.png";
import Vector from "@/images/Vector.png";
import homePage from "@/assets/images/userDemoImages/homePage.png";
import HeroSearchForm from "@/app/(client-components)/(HeroSearchForm)/HeroSearchForm";

const Hero = () => {
  return (
    <div className="flex flex-col-reverse justify-center gap-2 py-8 mx-auto lg:gap-16 md:flex-row text md:py-20">
      <div className="relative lg:mx-0 md:w-[550px]  md:bg-transparent w-screen ml-16">
        {/* <Image src={arrowBg} alt="arrowBg" className="absolute object-contain h-20 w-60 md:top-28 top-20 right-2 md:-right-10 " /> */}
        {/* <Image src={ellipse} alt="ellipse" className="absolute object-contain -left-40 -top-14 " /> */}
        <p className="text-4xl font-light text-white text-left leading-relaxed tracking-wider md:text-5xl lg:text-[40px]">
          Find Your Ideal Stay,
        </p>
        <p className="text-4xl mt-2 font-semibold text-left leading-relaxed tracking-wider md:text-5xl lg:text-[40px] text-white">
          Perfectly Suited To You!
        </p>
        {/* <p className="block text-4xl font-semibold md:hidden ">
                    An all-in-one platform that helps you to find <br /> what you needed.
                </p> */}
        <p className="hidden mt-5 text-lg font-medium md:block font text-white">
          An all-in-one platform that helps you to find <br /> what you needed.
        </p>
        {/* <p className="block mt-8 text-lg font-medium md:hidden font" >
                    An all-in-one platform that helps you to find what you needed.
                </p> */}
        <section
          className={`nc-SectionHero flex flex-col-reverse md:flex-col md:pt-44 lg:pt-20 lg:lg:pr-24 pt-4 md:max-w-[100%]`}
        >
          <div className="md:block h-[70px] w-[80vw] xl:w-[80vw] lg:w-[70vw] flex md:pt-0 mb-12 md:ml-0 lg:mb-0 md:mt-8 lg:-mt-10 md:w-8/12 rounded-2xl z-30">
            <HeroSearchForm />
          </div>
        </section>
        {/* <div className="flex gap-4 mt-8 ml-4 md:gap-4 md:ml-0">
                    <button className=" bg-[#5527D7] font-medium rounded-full md:px-8 md:py-4 px-4 py-4 text-white flex gap-4 items-center">Start your search <FaArrowRight /> </button>
                    <button className="flex rounded-full  md:px-8 md:py-4 px-4 py-4 gap-2 font-medium items-center text-[#5527D7] "><FiYoutube /> How it works</button>
                </div> */}
        {/* <div className="grid grid-cols-3 gap-8 mt-10 ml-4 md:ml-2 w-96">
                    <div className="flex flex-col gap-2">
                        <p className="font-bold text-2xl text-center text-[#5527D7]">8,00,00+</p>
                        <hr className="w-full h-[3px] bg-gray-300 border-0 rounded dark:bg-gray-700" />
                        <p className="text-[15px] text-center font-medium">Hourly Rental Gears</p>
                    </div>
                    <div className="flex flex-col gap-2">
                        <p className="font-bold text-2xl text-center text-[#5527D7]">1210+</p>
                        <hr className="w-full h-[3px] bg-gray-300 border-0 rounded dark:bg-gray-700" />
                        <p className="text-[15px] text-center font-medium">Hourly Places</p>
                    </div>
                    <div className="flex flex-col gap-2">
                        <p className="font-bold text-2xl text-center text-[#5527D7]">1100+</p>
                        <hr className="h-[3px] bg-gray-300 border-0 rounded dark:bg-gray-700" />
                        <p className="text-[15px] text-center font-medium">Experiences</p>
                    </div>
                </div> */}
      </div>
      <div className="lg:w-[520px] h-[540px] w-96 lg:mx-0 ml-[72px] mb-[70px] relative right-0">
        <Image
          src="/_next/static/media/hero.152cd109.svg"
          alt="Hero-right"
          fill
          className="object-cover z-20 mt-[75px] ml-[60px]"
        />
      </div>
      <br />
    </div>
  );
};

export default Hero;
