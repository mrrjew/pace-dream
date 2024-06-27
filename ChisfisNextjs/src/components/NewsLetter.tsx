import Link from "next/link";

const NewsLetter = () => {
  return (
    <div className=" py-24 font-rubik text-white w-full bg-violet mt-8 -mb-8">
      <div className="mx-2 md:mx-40 flex flex-col md:flex-row justify-between items-center">
          <div className="flex space-y-6 w-full md:w-1/3 flex-col">
              <h2 className="text-white">Newsletter</h2>
              <h1 className="text-slate-50 text-4xl font-normal">Join Our Community</h1>
              <p className="text-thin text-sm md:text-md ">Become a part of a growing community that values flexibility, convenience and connectivity. Whether you are looking to manage living costs, find a temporary workspace , or grab that last-minuite vacation deal. PaceDream is a go-to platform.</p>
          </div>

          <Link href="/auth/login" className="mt-6 md:mt-0 ring-[1px] ring-white py-4 px-8 rounded-lg text-slate-50">
            Get Started
          </Link>
      </div>
    </div>
  );
};

export default NewsLetter;
