import { useSession } from "@/hooks/useSession";
import { AccountSettingSummary } from "./AccountSettingsSummary";
import LoginSecurity from "./LoginSecurity";
// import Notifications from "./Notifications";
import {PaymentMethods} from "./PaymentPayouts";
import {PersonalInformation} from "./PersonalInformation";
import Link from "next/link";
import { GlobalPreference } from "./GlobalPreference";
import { PrivacyAndSharing } from "./PrivacyAndSharing";
import { ChevronRight } from "@mui/icons-material";
export type AccountSettingPageType = "Account Settings" | "Personal Information" | "Login & Security" |"Payment"|"Privacy & Sharing"|"Global Preferences"
const AccountSettingMainContent = ({selected,onSelect}:{
    selected:AccountSettingPageType,
    onSelect:(val:AccountSettingPageType) =>void
}) => {
  const { getSession } = useSession()
  const { userInfo } = getSession()
  return (
    <div className="grid grid-cols-1 space-y-16">
      <div className="">
        {/* breadcrumb sttings > Personal Information */}
       {selected !== "Account Settings" && <p className="text-xs text-black opacity-65 font-bold flex items-center gap-1">
                    <Link href={'#'} className="cursor-pointer hover:underline" onClick={()=>onSelect("Account Settings")}>Settings</Link> 
                    <ChevronRight className="w-6 h-4 text-gray-800"/>
                    <span>{selected}</span>   
                </p> }
                <p className="text-2xl md:text-3xl font-semibold">{selected}</p>
          <div className="hidden lg:inline-flex flex-col items-start gap-3">
            {userInfo && selected === "Account Settings" &&  <p className="text-xs">
                {userInfo?.first_name},{" "}
              <span className="text-[#757575]">{userInfo?.email}</span> · <Link href={"/account"} className="underline" >Go to profile</Link>
              </p>}
      </div>
      </div>
      {selected === "Account Settings" && <AccountSettingSummary selected={selected} onSelect={onSelect}/>}
      {selected === "Personal Information" && <PersonalInformation />}
      {selected === "Login & Security" && <LoginSecurity />}
      {selected === "Payment" && <PaymentMethods />}
      {selected === "Global Preferences" && <GlobalPreference />}
      {selected === "Privacy & Sharing" && <PrivacyAndSharing />} 
    </div>
  );
};

export default AccountSettingMainContent;



