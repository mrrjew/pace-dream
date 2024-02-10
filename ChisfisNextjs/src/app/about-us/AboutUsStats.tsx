import Image from "next/image";
import img from "@/images/aboutUsStats.jpg";

const AboutUsStats = () => {
  return (
    <div className="bg-white lg:px-36 px-4 lg:py-20 py-12 flex lg:flex-row lg:gap-10 gap-4 flex-col-reverse ">
      <div className="relative flex-1 lg:mt-0 mt-8">
        <Image
          src={img}
          width={600}
          height={600}
          alt="stats"
          className="rounded-2xl"
        />
      </div>
      <div className="flex-1 px-8">
        <p className="text-[#632DF8] font-semibold mt-8">
          Build better, launch faster
        </p>
        <p className="mt-8 lg:text-4xl  text-3xl font-semibold">
          We're only just getting started on our journey
        </p>
        <div className="grid lg:grid-cols-2 grid-cols-1 gap-12 mt-16">
          <div className="">
            <p className="text-4xl text-[#632df8] font-semibold">400+</p>
            <p className="mt-4">Projects completed</p>
          </div>
          <div className="">
            <p className="text-4xl text-[#632df8] font-semibold">600%</p>
            <p className="mt-4">Return on investment</p>
          </div>
          <div className="">
            <p className="text-4xl text-[#632df8] font-semibold">10k</p>
            <p className="mt-4">Global downloads</p>
          </div>
          <div className="">
            <p className="text-4xl text-[#632df8] font-semibold">200+</p>
            <p className="mt-4">5-star reviews</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutUsStats;
