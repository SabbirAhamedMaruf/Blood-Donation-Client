
import errorLogo from "../../assets/errorlogo.jpg";
import {  useRouteError } from "react-router-dom";
import Navbar from "../Shared/Navbar";

const Errorpage = () => {
  const error = useRouteError();
  console.log(error);
  return (
    <div className="font-josefin-sans h-[100vh] bg-white ">
      <div>
        <Navbar />
        <div className="grid justify-center items-center">
          <div className="pt-24 text-center text-xl font-semibold text-[#ce3232]">
            <img src={errorLogo} alt="errorlogo" className="w-[36rem]" />
            {error.status ? (
              <div>
                <h3>Error Code: {error.status}</h3>
                <h3>Error Code: {error.statusText}</h3>
                <h3>Error Code: {error.data}</h3>
              </div>
            ) : (
              <h3>An unknown error occured</h3>
            )}
          </div>
          <div className="relative mt-4 m-auto">
            <button  className="inline py-2 px-4 w-max  font-semibold text-white  bg-red-500 rounded-full">Find Home</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Errorpage;
