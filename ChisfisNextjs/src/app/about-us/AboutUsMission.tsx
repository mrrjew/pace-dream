import React from 'react'
import Image from "next/image";
import img from "@/images/aboutUsStats.jpg";

const AboutUsMission = () => {
return (
    <div>
        <div className="lg:grid grid-cols-2 px-8 sm:flex justify-center items-center">
        <div className="h-[551.11px] flex justify-center items-center flex-col">
        <h3 className="text-2xl font-semibold">Our Mission</h3>
        <br />
        <p className="opacity-30">
        At Pace Dream, we strive to simplify and enhance the way you live, work, and connect.
        <br />Our platform is designed to bring flexibility and convenience into everyday tasks and interactions, 
        <br />transforming how users engage with spaces and each other in a dynamic world.
        </p>
        </div>
        </div>
        <div className="relative">
        {/* <Image
        src={img}
        width={600}
        height={600}
        alt="stats"
        className="rounded-2xl"
        /> */}
    </div>
    </div>
)
}

export default AboutUsMission