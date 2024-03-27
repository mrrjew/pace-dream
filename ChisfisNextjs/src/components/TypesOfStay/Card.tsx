import Image from "next/image"
import natureHouse1 from "@/images/nature-house-1.jpg"
import { SlLocationPin } from "react-icons/sl";
import { IoCalendarClearOutline } from "react-icons/io5";
import { IoIosStar } from "react-icons/io";

const NatureCard = () => {
    return (
        <div><div className="lg:w-[296px] rounded-lg w-[340px] h-fit shadow-md cursor-pointer ">
            <Image src={natureHouse1} alt="nature" width={340} className="rounded-t-lg" />
            <div className="flex flex-col gap-1 p-2 mt-2">
                <p className="text-gray-600 font-medium" >Entire Cabin - 12 beds</p>
                <p className="text-lg font-semibold" >Bell By Greene King Inns</p>
                <div className="flex items-center gap-1" >
                    <SlLocationPin className=" font-semibold h-5 w-5" />
                    <p className="text-gray-600 font-medium">200m away</p>
                </div>
                <div className="flex items-center gap-1" >
                    <IoCalendarClearOutline className=" font-semibold h-5 w-5" />
                    <p className="text-gray-600 font-medium">01 Apr 23 - 07 Apr 23</p>
                </div>
                <div className="mt-2 flex justify-between items-center" >
                    <p className="text-gray-600 text-lg font-medium">Per Day <span className="line-through">$64</span>{" "} <span className="text-xl text-[#632DF8] font-semibold">$32</span> </p>
                    <div className="flex mr-1 items-center">
                        <IoIosStar className="text-yellow-400 font-semibold text-xl" />
                        <p className="font-semibold text-gray-700">4.2(24)</p>
                    </div>
                </div>

            </div>
        </div></div>
    )
}


export default NatureCard;