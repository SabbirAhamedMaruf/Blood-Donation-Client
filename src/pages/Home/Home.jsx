import Banner from "./Banner/Banner";
import ContactUs from "./ContactUs/ContactUs";
import Footer from "../Shared/Footer";
import OurBestServices from "./OurBestServices/OurBestServices";
import UpcomingCampaign from "./UpcomingCampaign/UpcomingCampaign";
import Teams from "./Teams/Teams";
const Home = () => {
  return (
    <div>
      <Banner />
      <OurBestServices />
      <ContactUs />
      <UpcomingCampaign />
      <div>
        <h1 className="text-center font-semibold text-3xl">Team Members</h1>
        <Teams />
      </div>
      <Footer />
    </div>
  );
};

export default Home;
