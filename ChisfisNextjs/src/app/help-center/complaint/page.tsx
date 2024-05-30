import NewsLetter from "@/components/HelpCenter/NewsLetter"

const page = () => {
    return (
        <div className="bg-white p-4">
            <div className="mt-4 w-full max-w-7xl mx-auto py-10">
            <div className="py-10">
            <h1 className="font-semibold text-2xl sm:text-3xl ">Enter booking details</h1>
            <p className="mt-2 mb-6 ">We just need your confirmation number and PIN. You will find them at the top of the confirmation email</p>

            <div className="space-y-2 flex flex-col mb-2 mt-2">
                <label htmlFor="confirmationNumber" className="font-semibold">Confirmation Number <span className="text-red-400">*</span></label>
                <input type="number" placeholder="eg.123456789" className="bg-trasparent ring-[0.2px] ring-inset ring-gray-300/40 rounded-lg text-sm w-full sm:w-1/3"/> 
            </div>

            <div className="space-y-2 flex flex-col">
                <label htmlFor="pin" className="font-semibold">PIN <span className="text-red-400">*</span></label>
                <input type="number" placeholder="eg.1234" className="bg-trasparent ring-[0.2px] ring-inset ring-gray-300/40 rounded-lg text-sm w-full sm:w-1/3"/> 
            </div>

            <button className="bg-violet p-2 text-md font-semibold mt-4 text-white rounded-md">Continue</button>
            </div>

            <NewsLetter />
        </div>
        </div>
    )
}

export default page