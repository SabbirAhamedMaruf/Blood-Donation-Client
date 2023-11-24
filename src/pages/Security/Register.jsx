import { Link } from "react-router-dom";
import registerlogo from "../../assets/register.png";

const Register = () => {
  return (
    <div>
      <div className="w-[90%] lg:w-[80vw] m-auto shadow-lg  md:p-5 lg:p-10 rounded-lg lg:rounded-2xl my-5 flex flex-col lg:flex-row gap-10 md:gap-5 lg:gap-20">
        <div className="lg:w-1/2">
          <img
            src={registerlogo}
            className="shadow-lg lg:shadow-xl rounded-lg"
          />
        </div>
        <div className="lg:w-1/2">
          <h1 className="text-center font-bold text-xl lg:text-4xl my-10">
            Register
          </h1>
          <form className="space-y-3 p-3 text-[12px] md:text-[15px]">
            <div className="grid grid-cols-3 md:grid-cols-5 lg:grid-cols-7">
              <label
                className="col-span-1 md:col-span-2 text-[15px] lg:text-xl font-semibold"
                htmlFor="name"
              >
                Name
              </label>
              <input
                className="col-span-2 md:col-span-3 lg:col-span-5 px-2 py-2 bg-red-50 outline-none"
                type="text"
                name="name"
                placeholder="Enter your name"
              />
            </div>

            <div className="grid grid-cols-3 md:grid-cols-5 lg:grid-cols-7">
              <label
                className="col-span-1 md:col-span-2 text-[15px] lg:text-xl font-semibold"
                htmlFor="name"
              >
                Email
              </label>
              <input
                className="col-span-2 md:col-span-3 lg:col-span-5 px-2 py-2 bg-red-50 outline-none"
                type="email"
                name="email"
                placeholder="Enter your email"
              />
            </div>

            <div className="grid grid-cols-3 md:grid-cols-5 lg:grid-cols-7">
              <label
                className="col-span-1 md:col-span-2 text-[15px] lg:text-xl font-semibold"
                htmlFor="password"
              >
                Password
              </label>
              <input
                className="col-span-2 md:col-span-3 lg:col-span-5 px-2 py-2 bg-red-50 outline-none"
                type="password"
                name="password"
                placeholder="Enter your password"
              />
            </div>

            <div className="grid grid-cols-3 md:grid-cols-5 lg:grid-cols-7">
              <label
                className="col-span-1 md:col-span-2 text-[15px] lg:text-xl font-semibold"
                htmlFor="confirmpassword"
              >
                Confirm Password
              </label>
              <input
                className="col-span-2 md:col-span-3 lg:col-span-5 px-2 py-2 bg-red-50 outline-none"
                type="password"
                name="confirmpassword"
                placeholder="Enter your password"
              />
            </div>

            <div className="grid grid-cols-3 md:grid-cols-5 lg:grid-cols-7">
              <label
                className="col-span-1 md:col-span-2 text-[15px] lg:text-xl font-semibold"
                htmlFor="photo"
              >
                Photo
              </label>
              <input
                type="file"
                className="py-2 px-2 col-span-2 md:col-span-3 lg:col-span-5   border-none bg-red-50"
              />
            </div>

            <div className="grid grid-cols-3 md:grid-cols-5 lg:grid-cols-7">
              <label
                className="col-span-1 md:col-span-2 text-[15px] lg:text-xl font-semibold"
                htmlFor="bloodgroup"
              >
                Blood Group
              </label>
              <select
                className="col-span-2 md:col-span-3 lg:col-span-5 text-[12px] md:text-[15px] px-2 py-3 bg-red-50 outline-none"
                name="bloodgroup"
              >
                <option value="none">Select Blood Group</option>
                <option value="A+">A+</option>
                <option value="A-">A-</option>
                <option value="B+">B+</option>
                <option value="B-">B-</option>
                <option value="AB+">AB+</option>
                <option value="AB-">AB-</option>
                <option value="O+">O+</option>
                <option value="O-">O-</option>
              </select>
            </div>

            <div className="grid grid-cols-3 md:grid-cols-5 lg:grid-cols-7">
              <label
                className="col-span-1 md:col-span-2 text-[15px] lg:text-xl font-semibold"
                htmlFor="district"
              >
                District
              </label>
              <select
                className="col-span-2 md:col-span-3 lg:col-span-5 text-[12px] md:text-[15px] px-2 py-3 bg-red-50 outline-none"
                name="bloodgroup"
              >
                <option value="none">Select your district</option>
                <option value="A+">A+</option>
                <option value="A-">A-</option>
                <option value="B+">B+</option>
                <option value="B-">B-</option>
                <option value="AB+">AB+</option>
                <option value="AB-">AB-</option>
                <option value="O+">O+</option>
                <option value="O-">O-</option>
              </select>
            </div>

            <div className="grid grid-cols-3 md:grid-cols-5 lg:grid-cols-7">
              <label
                className="col-span-1 md:col-span-2  text-[15px] lg:text-xl font-semibold"
                htmlFor="upazila"
              >
                Upazila
              </label>
              <select
                className="col-span-2 md:col-span-3 lg:col-span-5 text-[12px] md:text-[15px] px-2 py-3 bg-red-50 outline-none"
                name="bloodgroup"
              >
                <option value="none">Select your upazila</option>
                <option value="A+">A+</option>
                <option value="A-">A-</option>
                <option value="B+">B+</option>
                <option value="B-">B-</option>
                <option value="AB+">AB+</option>
                <option value="AB-">AB-</option>
                <option value="O+">O+</option>
                <option value="O-">O-</option>
              </select>
            </div>

            <input
              className="w-full text-center text-xl text-white font-bold rounded-full  py-1 lg:py-2 bg-red-500"
              type="submit"
              value="Register"
            />
          </form>
          <div className="text-center space-y-3 pb-10 md:pb-0">
            <p>Already registerd?<Link to="/login" className="ml-3 font-bold text-red-500">Click here</Link></p>
            <p className="font-bold text-red-500">Error message goes here</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Register;

// TODO : Work on design
