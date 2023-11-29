import { useEffect, useState } from "react";
import useAxiosPublic from "../../API/useAxiosPublic";
import { Link } from "react-router-dom";

const Blogs = () => {
  const [allBlogs, setAllBlogs] = useState([]);
  const axiosPublic = useAxiosPublic();
  useEffect(() => {
    axiosPublic
      .get(`/get-blog-data-public`)
      .then((res) => setAllBlogs(res.data.data));
  }, [axiosPublic]);
  return (
    <div className="w-[90%] lg:w-[90vw] m-auto shadow-lg  md:p-5 lg:p-10 rounded-lg lg:rounded-2xl ">
      <div className="h-1/4 text-center text-xl md:text-2xl lg:text-2xl font-semibold mb-10">
        <h1 className="text-center font-semibold text-xl md:text-2xl lg:text-4xl ">
          Blogs
        </h1>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-5 my-10">
        {allBlogs.map((i) => (
          <div
            key={i._id}
            className="card w-[320px] h-[490px] bg-base-100 shadow-xl outline-4 outline-transparent hover:outline-red-500"
          >
            <figure>
              <img src={i.photo} className="h-[250px] object-cover" />
            </figure>
            <div className="card-body">
              <h2 className="card-title">{i.title}</h2>
              <p>{i.content.replace(/<[^>]*>/g, "").slice(0, 30)}....</p>
              <div className="card-actions justify-end">
                <Link to={`/blogs/${i._id}`}>
                  <button className="px-4 py-2 bg-red-500 text-white font-semibold rounded-full transition-colors duration-700 hover:bg-green-500">
                    View Details
                  </button>
                </Link>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Blogs;
