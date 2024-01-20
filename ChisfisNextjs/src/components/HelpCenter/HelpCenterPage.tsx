import ContactUsPage from "./ContactUsPage";
import ReachUsPage from "./ReachUsPage";
import SeeAllPage from "./SeeAllPage";
import SupportPage from "./SupportPage";

const HelpCenterPage: React.FC<{ selected: string }> = ({ selected }) => {
  return (
    <div className="pb-30">
      {selected === "Contact Us" && <ContactUsPage />}
      {selected === "Contacting us for support" && <SupportPage />}
      {selected === "Where you can reach us" && <ReachUsPage />}
      {selected === "See all" && <SeeAllPage />}
    </div>
  );
};

export default HelpCenterPage;
