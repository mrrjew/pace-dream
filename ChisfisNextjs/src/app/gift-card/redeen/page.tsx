import SubscriberFooter from "@/components/SubscriberFooter";
import { GiftIcon } from "@heroicons/react/24/solid";
import { Input } from "@mui/material";
import Link from "next/link";

export default function RedeemGiftCardPage() {
    return (
        <section className="bg-white min-h-screen flex justify-center p-4">
            <div className="container py-8">
                <div className="flex flex-row justify-between flex-wrap-reverse gap-6 md:space-x-44 mb-24">
                    
                    <div className="grid grid-cols-1 w-full md:w-96 gap-6">
                        <h1 className="text-xl md:text-5xl text-left font-semibold grid grid-cols-1">
                            <span>Let’s Redeem</span>
                            <span>your gift card</span>
                        </h1>
                        <input placeholder="PIN" className="ring-1 h-10 rounded-md placeholder:text-gray-500 ring-gray-300" />
                        <p className="text-xs font-medium text-left">
                            By redeeming, you agree to the <Link href={"#"} className="underline" >PaceDream Gift <br /> Card Terms</Link>.
                        </p>
                        <button className="bg-primary-700 text-white rounded-md w-full py-2 mt-4">Redeem gift card</button>
                    </div>

                    <div className="h-64 w-full md:w-[400px] bg-primary-700 grid place-content-center shadow-2xl shadow-gray-600 rounded-xl">
                        <GiftIcon className="text-white h-12" />
                    </div>
                </div>
                <SubscriberFooter/>
            </div>
        </section>
    )
}