const NewsLetter = () => {
  return (
    <div className="flex flex-col justify-center items-center mt-[50px] mb-[90px] mx-auto rounded-3xl gap-[30px] lg:h-[316px] lg:w-[953px] h-[361px] w-[320px] bg-[#632DF8] ">
      <div className="flex flex-col justify-center text-center items-center lg:w-[500px] gap-5">
        <p className="text-[44px] text-white font-medium lg:font-semibold lg:leading-none leading-[45px]">
          Join our newsletter
        </p>
        <p className="text-[17px] text-white lg:p-0 px-6  ">
          Read and share new perspectives on just about any topic. Everyone’s
          welcome.
        </p>
      </div>
      <div className=" lg:flex lg:flex-row flex flex-col justify-center mx-auto items-center lg:gap-2  w-[280px] lg:w-[487px] px-[28px]">
        <input
          type="text"
          placeholder="Enter your email"
          className="block border-neutral-200 focus:border-primary-300 focus:ring focus:ring-primary-200 focus:ring-opacity-50 bg-white dark:border-neutral-700 dark:focus:ring-primary-6000 dark:focus:ring-opacity-25 dark:bg-neutral-900 h-[46px] px-[20px] w-[280px] lg:w-[308px] mb-4 lg:mb-0 rounded-3xl"
        />
        <button className="text-base px-5 py-[10px] lg:w-[116px] w-[280px] text-[#632DF8] bg-white rounded-full">
          Send
        </button>
      </div>
    </div>
  );
};

export default NewsLetter;
