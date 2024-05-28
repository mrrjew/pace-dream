import { useSession } from "@/hooks/useSession";
import { AccountSettingSummary } from "./AccountSettingsSummary";
import LoginSecurity from "./LoginSecurity";
// import Notifications from "./Notifications";
import PaymentPayouts from "./PaymentPayouts";
import {PersonalInformation} from "./PersonalInformation";
import Link from "next/link";
export type AccountSettingPageType = "Account Settings" | "Personal Information" | "Login & Security" |"Payments"|"Privacy & Sharing"|"Global Preferences"
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
       {selected !== "Account Settings" && <p className="text-xs text-black opacity-65 font-bold">
                    <Link href={'#'} className="cursor-pointer hover:underline" onClick={()=>onSelect("Account Settings")}>Settings</Link> 
                    <span className="mx-1">{">"}</span>
                    <span>{selected}</span>   
                </p> }
                <p className="text-3xl font-semibold">{selected}</p>
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
      {selected === "Payments" && <PaymentPayouts />}
      {/* {selected === "Notifications" && <Notifications />} */}
    </div>
  );
};

export default AccountSettingMainContent;



