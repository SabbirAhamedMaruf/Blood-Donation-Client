import { Link, NavLink } from "react-router-dom";
import logo from "../../assets/logo.png";
import { FaSun } from "react-icons/fa6";
// import { IoMoon } from "react-icons/io5";

const Navbar = () => {
  return (
    <div className="px-2 md:px-10 lg:py-2 font-bold  w-full ">
      <div className="navbar">
        <div className="navbar-start">
          <div className="dropdown">
            <label tabIndex={0} className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </label>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow  rounded-box w-52 text-xl lg:text-2xl"
            >
              <NavLink to="/">Home</NavLink>
              <NavLink to="/menu">Blog</NavLink>
              <NavLink to="/contact">Donation Request</NavLink>
              <NavLink to="/contact">Dashboard</NavLink>
              <NavLink to="/contact">Fundings</NavLink>
            </ul>
          </div>

          <ul className="hidden lg:flex nav menu menu-horizontal text-[18px] space-x-5">
            <NavLink to="/">Home</NavLink>
            <NavLink to="/menu">Blog</NavLink>
            <NavLink to="/contact">Donation Request</NavLink>
            <NavLink to="/contact">Dashboard</NavLink>
            <NavLink to="/contact">Fundings</NavLink>
          </ul>
        </div>

        <div className="navbar-center flex items-end gap-2">
          <img src={logo} className="w-10 lg:w-[56px]" />
          <h1 className="text-xl lg:text-3xl">Life Flow</h1>
        </div>

        <div className="navbar-end gap-5">
          <button>
            <FaSun className="text-3xl md:text-[18px] p-2 md:p-0 bg-red-500 md:bg-transparent text-white md:text-black rounded-full md:rounded-none" />
          </button>
          <Link>
            <button className="hidden md:block md:px-2 md:py-1 lg:px-6 lg:py-2 bg-red-500 text-white rounded-full text-[18px]">
              Login
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Navbar;


// TODO : will have logo, donation requests, blog, login, registration link before logged in. and will have dashboard, and fundings links addition to those links.