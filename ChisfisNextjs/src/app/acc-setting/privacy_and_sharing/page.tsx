
import DynamicPageIndicator from "@/components/DynamicPageIndicator";
import NewsLetter from "@/components/HelpCenter/NewsLetter";
import { FaChevronRight } from "react-icons/fa6";

const page = () => {
  return (
    <div className="w-full h-max p-8 bg-white text-gray-900/90">
      <div className="w-full max-w-7xl mx-auto mt-8 mb-8 p-4 py-8 md:py-20">
        <DynamicPageIndicator
          main={"Settings"}
          curr_route={"Privacy & Sharing"}
        />
        <h1 className="text-4xl font-semibold mt-2 text-gray-900/80">
          Privacy & Sharing
        </h1>

        <div className="flex space-x-10 gap-20 justify-between mb-10  mt-20">
          <div className="space-y-10 w-full">
            {/* account management */}
            <div className="w-full space-y-6">
              <h1 className="text-xl font-semibold mt-2 mb-6">
                Manage your account
              </h1>

              <div>
                <button
                  type="button"
                  className="mb-2 flex justify-between items-center gap-6"
                >
                  Request your personal data{" "}
                  <FaChevronRight className="text-sm" />
                </button>
                <p className="text-gray-600/80">
                  We will create a file for you to download your personal data.{" "}
                </p>
              </div>

              <div>
                <button
                  type="button"
                  className="mb-2 flex justify-between items-center gap-6"
                >
                  Delete your account <FaChevronRight className="text-sm" />
                </button>
                <p className="text-gray-600/80">
                  We will permanently delete your account and data in accordance
                  with applicable law.{" "}
                </p>
              </div>
            </div>
          </div>

          {/* right card */}
          <div className="hidden w-2/4 h-max sm:flex flex-col p-10 rounded-md shadow-sm ring-1 ring-inset ring-gray-400/70">
            <h2 className="text-xl font-bold mb-4">Committed to privacy</h2>
            <p>PaceDream is committed to keeping your data protected</p>
          </div>
        </div>
      </div>
      <NewsLetter />
    </div>
  );
};

export default page;
