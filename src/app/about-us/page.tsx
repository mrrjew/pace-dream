import AboutUsHero from "./AboutUsHero";
import AboutUsOffices from "./AboutUsOffices";
import AboutUsStats from "./AboutUsStats";
import AboutUsTeamMembers from "./AboutUsTeamMembers";
import AboutUsValues from "./AboutUsValues";

const AboutUs = () => {
  return (
    <div className="flex flex-col gap-20">
      <AboutUsHero />
      <AboutUsStats />
      <AboutUsTeamMembers />
      <AboutUsValues />
      <AboutUsOffices />
    </div>
  );
};

export default AboutUs;
