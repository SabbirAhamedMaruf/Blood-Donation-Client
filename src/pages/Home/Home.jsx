import Banner from "./Banner/Banner";
import ContactUs from "./ContactUs/ContactUs";
import Footer from "../Shared/Footer";
import OurBestServices from "./OurBestServices/OurBestServices";
const Home = () => {
  return (
    <div>
      <Banner />
      <OurBestServices />
      <ContactUs />
      <Footer />
    </div>
  );
};

export default Home;
