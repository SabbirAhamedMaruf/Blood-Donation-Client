import Footer from "../Shared/Footer";
import Navbar from "../Shared/Navbar";
import Banner from "./Banner/Banner";
import ContactUs from "./ContactUs/ContactUs";

const Home = () => {
    return (
        <div>
            <Navbar/>
            <Banner/>
            <ContactUs/>
            <Footer/>
        </div>
    );
};

export default Home;