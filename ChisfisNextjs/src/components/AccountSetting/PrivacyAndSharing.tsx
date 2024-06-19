import { ChevronRight } from "@mui/icons-material";
import Link from "next/link";

export function PrivacyAndSharing() {
  const privacyData = [
    {
      title: "Request your personal data",
      description: "We’ll create a file for you to download your personal data",
      url: "/#",
    },
    {
      title: "Delete your account",
      description:
        "This will permanently delete your account and your data, in accordance with applicable law.",
      url: "/#",
    },
  ];

  return (
    <div className="grid grid-cols-1 md:grid-cols-3 space-y-8 md:space-y-0 space-x-0 md:space-x-20">
      <div className="col-span-1 md:col-span-2">
        <h2 className="text-md font-semibold mb-6">Manage your account data</h2>
        {privacyData.map((item, index, arr) => {
          return (
            <div key={index} className="mb-6">
              <Link
                href={item.url as any}
                className="flex justify-between items-center gap-1 w-fit"
              >
                <p className="text-sm">{item.title}</p>
                <ChevronRight className="w-4 h-6 text-gray-800" />
              </Link>
              <p className="text-sm text-gray-400">{item.description}</p>
            </div>
          );
        })}
      </div>
      <div className="ring-1 h-fit rounded-md ring-gray-300 col-span-1 md:col-span-1">
        <div className="bg-white/45 p-4 rounded-lg  min-h-28">
          {/* <div className="rounded-lg mb-2">
              <RoomPreferences className="w-16 h-16 fill-primary-700"/>
              </div> */}
          <div>
            <p className="text-md font-extrabold">{"Committed to privacy"}</p>
            <p className="text-sm text-[#757575] mt-2">
              {"PaceDream is committed to keeping your data protected."}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
