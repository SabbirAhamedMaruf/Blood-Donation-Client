import { useEffect, useState } from "react";
import Marquee from "react-fast-marquee";

import SingleFeaturedData from "../../../Components/SingleFeaturedData";
import useAxiosPublic from "../../../API/useAxiosPublic";

const UpcomingFeaturedCampaign = () => {
  const [featuredBlogData, setFeaturedBlogData] = useState([]);
  const axiosPublic = useAxiosPublic();

  
  // Home page testimonial
  useEffect(() => {
    axiosPublic
      .get("/get-all-featured-blogs")
      .then((result) => setFeaturedBlogData(result.data.data));
  }, [axiosPublic]);


console.log("Featued",featuredBlogData)
  return (
    <div className="w-full">
      <Marquee speed={100} pauseOnHover={true}>
        {featuredBlogData?.map((i) => (
          <SingleFeaturedData
            key={i._id}
            data={i}
          ></SingleFeaturedData>
        ))}
      </Marquee>
    </div>
  );
};

export default UpcomingFeaturedCampaign;

