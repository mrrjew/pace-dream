import DynamicPageIndicator from "@/components/DynamicPageIndicator";
import NewsLetter from "@/components/HelpCenter/NewsLetter";
import { PERSONAL_SETTINGS_CARD_DATA } from "@/data/settings";

const page = () => {
  return (
    <div className="w-full h-max p-8 bg-white">
      <div className="w-full max-w-7xl mx-auto mt-8 mb-8 p-4 py-8 md:py-20">
        <DynamicPageIndicator
          main={"Settings"}
          curr_route={"Login & Security"}
        />
        <h1 className="text-4xl font-semibold mt-2 text-gray-900/90">
          Login & Security
        </h1>

        <div className="flex space-x-10 gap-20 justify-between mb-10  mt-20">
          <div className="space-y-10 w-full">
            {/* login */}
            <div className="w-full">
              <h1 className="text-xl font-semibold mt-2 mb-6">Login</h1>
              <label
                htmlFor="password"
                className="flex justify-between items-center w-full"
              >
                Password{" "}
                <span className="font-semibold underline-offset-2 underline hover:text-violet text-violet hover:cursor-pointer">
                  Update
                </span>
              </label>
              <div className="border-b-[1px] border-gray-400/70">
                <input
                  type="text"
                  name="password"
                  className="mt-2 bg-transparent pb-6 text-md border-0 placeholder:text-gray-900/50 text-gray-900/70 w-full focus:outline-none focus:ring focus:ring-gray-900/0"
                  placeholder="Last updated a day ago"
                />
              </div>
            </div>

            {/* social */}
            <div className="w-full">
              <h1 className="text-xl font-semibold mt-2 mb-6">
                Social Accounts
              </h1>
              <label
                htmlFor="password"
                className="flex justify-between items-center w-full"
              >
                Facebook{" "}
                <span className="font-semibold underline-offset-2 underline hover:text-violet text-violet hover:cursor-pointer">
                  Connect
                </span>
              </label>
              <div className="border-b-[1px] border-gray-400/70">
                <input
                  type="text"
                  name="accounts"
                  className="mt-2 bg-transparent pb-6 text-md border-0 placeholder:text-gray-900/50 text-gray-900/70 w-full focus:outline-none focus:ring focus:ring-gray-900/0"
                  placeholder="Not connected"
                />
              </div>

              <label
                htmlFor="password"
                className="mt-6 flex justify-between items-center w-full"
              >
                Google{" "}
                <span className="font-semibold underline-offset-2 underline hover:text-violet text-violet hover:cursor-pointer">
                  Connect
                </span>
              </label>
              <div className="border-b-[1px] border-gray-400/70">
                <input
                  type="text"
                  name="accounts"
                  className="mt-2 bg-transparent pb-6 text-md border-0 placeholder:text-gray-900/50 text-gray-900/70 w-full focus:outline-none focus:ring focus:ring-gray-900/0"
                  placeholder="Not connected"
                />
              </div>
            </div>

            {/* account */}
            <div className="w-full">
              <h1 className="text-xl font-semibold mt-2 mb-6">Account</h1>
              <label
                htmlFor="password"
                className="flex justify-between items-center w-full"
              ></label>
              <div className="flex justify-between items-center border-b-[1px] border-gray-400/70">
                <input
                  type="text"
                  name="password"
                  className="mt-2 bg-transparent pb-6 text-md border-0 placeholder:text-gray-900/50 text-gray-900/70 w-full focus:outline-none focus:ring focus:ring-gray-900/0"
                  placeholder="Deactivate your account"
                />
                <span className="font-semibold underline-offset-2 underline hover:text-violet text-violet hover:cursor-pointer">
                  Deactivate
                </span>
              </div>
            </div>
          </div>

          {/* account */}

          <div className="hidden w-2/4 sm:flex flex-col p-8 rounded-md shadow-sm ring-1 ring-inset ring-gray-400/70">
            {PERSONAL_SETTINGS_CARD_DATA.map((card: any, i: any) => (
              <div
              key={card.title}
                className={`space-y-4 ${i != PERSONAL_SETTINGS_CARD_DATA.length - 1 && "border-b-[1px]"} border-gray-400/70 p-2 py-10`}
              >
                <i className="text-6xl text-violet mb-4">{<card.icon />}</i>
                <h2 className="text-lg font-semibold">{card.title}</h2>
                <p className="text-md text-gray-900/80 ">{card.body} </p>
              </div>
            ))}
          </div>
        </div>
        <NewsLetter />
      </div>
    </div>
  );
};

export default page;
