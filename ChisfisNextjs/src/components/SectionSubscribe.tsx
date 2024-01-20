import React from "react";
import ButtonCircle from "@/shared/ButtonCircle";
import Input from "@/shared/Input";

const SectionSubscribe = () => {
    return(
    <div className={`nc-SectionClientSay flex flex-col max-w-[630px] w-[95vw] md:max-w-[100%] mt-10 bg-violet relative items-center border rounded-2xl p-8 lg:mr-52`}>
        <h2 className="text-white font-semibold text-4xl">Join our newsletter</h2>
        <span className="block text-xs text-center mt-5 text-white dark:text-white max-w-[45%] md:max-w-[100%]">
          Read and share new perspectives on just about any topic. Everyone’s
          welcome.
        </span>
        <form className="mt-10">
            <div className="flex">
                <input type="email" required placeholder="Enter your email" className="rounded-full bg-violet mr-4 border border-white placeholder-white" />
                <button
                    type="submit"
                    className="bg-white rounded-full text-violet w-32"
                >
                    Send
                </button>
            </div>
        </form>
    </div>
)}


export default SectionSubscribe;