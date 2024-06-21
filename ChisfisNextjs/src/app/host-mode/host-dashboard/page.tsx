import Link from "next/link";
import { AiOutlineGift, AiOutlineUser } from "react-icons/ai";
import { BiEdit } from "react-icons/bi";
import { BsClipboard, BsFileCheck, BsFileEarmarkMinus } from "react-icons/bs";
import { FiKey } from "react-icons/fi";
import { RiHeadphoneLine } from "react-icons/ri";
import UserProfilePreview from "./UserProfilePreview";
import { useFetch } from "@/hooks/useFetch";
import { useProfile } from "@/context";
import HostDashboardView from "./HostDashboardView";
const HostDashboard = () => {
  return (
    <section>
      <div className="md:px-28">
        <Link href="/">
          <button className="btn mt-10 rounded-full border border-[#DAE0E6] font-medium px-5 py-2 btn-sm mobile-view">
            Back
          </button>
        </Link>
        <UserProfilePreview />

        <HostDashboardView />
      </div>
    </section>
  );
};

export default HostDashboard;
