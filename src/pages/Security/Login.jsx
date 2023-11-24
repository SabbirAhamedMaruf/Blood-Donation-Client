import login from "../../assets/login.png";
import { FaGoogle } from "react-icons/fa";
const Login = () => {
  return (
    <div>
      <div className="w-[90%] lg:w-[80vw] m-auto shadow-lg  md:p-5 lg:p-10 rounded-lg lg:rounded-2xl my-5  flex flex-col lg:flex-row gap-10 md:gap-5 lg:gap-20 items-center">
        <div className="md:w-1/2 p-5 lg:p-0">
          <img src={login} className="shadow-lg lg:shadow-xl rounded-lg" />
        </div>
        <div className="md:w-1/2 space-y-5">
          <h1 className="text-center font-bold text-xl lg:text-4xl">Login</h1>
          <form className="flex flex-col space-y-5 lg:space-y-10">
            <div className="flex items-center gap-4 md:grid grid-cols-5 lg:grid-cols-7">
              <label
                className="text-[15px] lg:text-xl font-semibold"
                htmlFor="email"
              >
                Email
              </label>
              <input
                className="ml-6 col-span-4 lg:col-span-6 px-2 py-2 bg-red-50 outline-none"
                type="email"
                name="email"
                placeholder="Enter your email"
              />
            </div>

            <div className="flex items-center gap-4 md:grid grid-cols-4 lg:grid-cols-7">
              <label
                className="text-[15px] lg:text-xl font-semibold"
                htmlFor="password"
              >
                Password
              </label>
              <input
                className="md:ml-2 lg:ml-5 col-span-3 lg:col-span-6 px-2 py-2 bg-red-50 outline-none"
                type="password"
                name="password"
                placeholder="Enter your password"
              />
            </div>

            <input
              className="text-center text-xl text-white font-bold rounded-full  py-1 lg:py-2 bg-red-500"
              type="submit"
              value="Login"
            />
          </form>

          <div className="text-center space-y-10 pb-10 md:pb-0">
            <button className="w-full py-1  lg:py-2  text-2xl text-white font-bold rounded-full bg-red-500">
              <FaGoogle className="m-auto" />
            </button>
            <p className="font-bold text-red-500">Error message goes here</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
