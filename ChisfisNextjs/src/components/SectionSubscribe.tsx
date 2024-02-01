import React, { FC } from "react";
import ButtonCircle from "@/shared/ButtonCircle";
import Input from "@/shared/Input";

export interface SectionSubscribe {
    className?: string
}

const SectionSubscribe: FC<SectionSubscribe> = ({
    className = ""
}) => {
    return(
    <div className={`nc-SectionClientSay ${className} flex-col bg-violet relative items-center border rounded-2xl p-8 mr-52 ml-52`}>
        <h2 className="text-white font-semibold text-4xl">Join our newsletter</h2>
        <span className="block text-xs text-center mt-5 text-white dark:text-white max-w-[45%]">
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