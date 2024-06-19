import ButtonPrimary from "@/shared/ButtonPrimary";
import Input from "@/shared/Input";

export default function SubscriberFooter() {
  return (
    <div className="grid md:container bg-primary-700 rounded-lg p-2 py-12 text-white">
      <div className="w-full grid place-content-center gap-4 text-center">
        <h1 className="text-sm md:text-4xl font-extrabold">
          Join our newsletter
        </h1>
        <p className="text-xs md:text-xl p-1 md:p-4 font-extralight">
          Read and share new perspectives on just about any <br /> topic
          Everyone’s welcome.
        </p>
        <div className="flex flex-wrap justify-between text-center items-center h-fit gap-4 w-full md:w-[42dvw]">
          <div className="flex-1 w-full">
            <Input
              placeholder="Enter your email id to subscribe"
              className="w-full h-fit !rounded-3xl ring-[0.09em] ring-gray-300 placeholder:text-gray-100 text-white outline-none !bg-transparent border-collapse border-none focus:border-none focus:ring-[0.1em] focus:ring-white"
            />
          </div>
          <div className="w-full md:w-fit">
            <ButtonPrimary className="!bg-gray-100 !text-black text-xs w-full !py-2">
              Subscribe
            </ButtonPrimary>
          </div>
        </div>
      </div>
    </div>
  );
}
