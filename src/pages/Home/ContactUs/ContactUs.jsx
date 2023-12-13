import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";
import { Map, Marker } from "pigeon-maps";

const ContactUs = () => {
  useEffect(() => {
    setTimeout(() => {
      AOS.init({ once: true });
    }, 1000);
  }, []);

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 my-20 p-5 bg-red-500">
      <div className="col-span-1">
        <Map metaWheelZoom={true} height={300} defaultCenter={[23.77318, 90.36701]} defaultZoom={11}>
          <Marker width={50} anchor={[23.77318, 90.36701]} />
        </Map>
      </div>
      <div className="grid justify-left p-10 bg-red-500 text-white text-center">
        <h1 className="lg:text-3xl font-bold">Contact Us</h1>
        <div className="ml-5 lg:space-y-2 text-xl">
          <p>+1 (555) 123-4567</p>
          <p>HelpLine</p>
          <p>lifeflow@gmail.com</p>
        </div>
      </div>
    </div>
  );
};

export default ContactUs;

// TODO : Take input from here and save inside admin dashboard (see requirment first)
