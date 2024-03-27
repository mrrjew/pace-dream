import LoginSecurity from "./LoginSecurity";
import Notifications from "./Notifications";
import PaymentPayouts from "./PaymentPayouts";
import PersonalInformation from "./PersonalInformation";

const AccountSettingMainContent: React.FC<{ selected: string }> = ({
  selected,
}) => {
  return (
    <div>
      {selected === "Personal Information" && <PersonalInformation />}
      {selected === "Login & Security" && <LoginSecurity />}
      {selected === "Payments & Payouts" && <PaymentPayouts />}
      {selected === "Notifications" && <Notifications />}
    </div>
  );
};

export default AccountSettingMainContent;
