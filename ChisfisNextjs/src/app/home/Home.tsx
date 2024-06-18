
import Hero from "./hero/Hero";
import BrowseByCategories from "./BrowseByCategories";
import BrowseByDestination from "./BrowseByDestination";
import TimeBased from "./TimeBased";
import PerfectCar from "./PerfectCar";
import HourlyRentalGear from "./HourlyRentalGear";
import ParkingSpot from "./ParkingSpot";
import LastMinuteDeals from "./LastMinuteDeals";
import JoinOurCommunity from "@/components/common/JoinOurCommunity";
import Faq from "./Faq";

const Home = () => {
  return (
    <div className="w-full h-full scrollbar-thin">
      <Hero />
      <BrowseByCategories />
      <BrowseByDestination />
      <TimeBased />
      <PerfectCar />
      <HourlyRentalGear />
      <ParkingSpot />
      <LastMinuteDeals />
      <Faq />
      <JoinOurCommunity />
    </div>
  );
};

export default Home;
