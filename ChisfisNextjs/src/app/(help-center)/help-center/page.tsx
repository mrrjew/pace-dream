import ContactUsPage from "@/components/HelpCenter/ContactUsPage";
import ReachUsPage from "@/components/HelpCenter/ReachUsPage";
import SeeAllPage from "@/components/HelpCenter/SeeAllPage";
import SupportPage from "@/components/HelpCenter/SupportPage";

interface HelpCenterProps {
    selected: string;
  }

  const HelpCenter: React.FC<HelpCenterProps> = ({ selected }) => {  return (
    <div className="pb-30">
      {selected === 'Contact Us' && <ContactUsPage />}
      {selected === 'Contacting us for support' && <SupportPage />}
      {selected === 'Where you can reach us' && <ReachUsPage />}
      {selected === 'See all' && <SeeAllPage />}
    </div>
  )
}

export default HelpCenter;