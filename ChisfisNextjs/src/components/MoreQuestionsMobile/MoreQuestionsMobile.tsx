const MoreQuestionsMobile = () => {
  return (
    <div className="w-screen mx-auto my-10 h-fit ">
      <div className="mx-4 border py-8 px-6 border-[#666666] rounded-xl flex flex-col justify-center">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          fill="currentColor"
          className="h-[60px] mx-auto w-[60px]"
        >
          <path d="M1.5 8.67v8.58a3 3 0 0 0 3 3h15a3 3 0 0 0 3-3V8.67l-8.928 5.493a3 3 0 0 1-3.144 0L1.5 8.67Z" />
          <path d="M22.5 6.908V6.75a3 3 0 0 0-3-3h-15a3 3 0 0 0-3 3v.158l9.714 5.978a1.5 1.5 0 0 0 1.572 0L22.5 6.908Z" />
        </svg>
        <div className="text-center">
          <p className="mt-2 text-xl font-bold">Do you have more questions?</p>
          <p className="text-[#666666] text-[13px]">
            An all-encompassing and user-friendly platform that seamlessly
            connects you with precisely what you{"'"}re looking for,
            streamlining your search process effortlessly.
          </p>
        </div>
        <div className="flex justify-center mt-4">
          <a
            href="mailto:chaejimmy1@gmail.com"
            className="bg-[#5527D7] w-full text-center rounded-full text-white px-4 py-2"
          >
            Shoot a Direct Mail
          </a>
        </div>
      </div>
    </div>
  );
};

export default MoreQuestionsMobile;
