import { NavLink } from "react-router-dom";
import { HiMenuAlt1 } from "react-icons/hi";
import useUserType from "../API/useUserType";
import { useContext } from "react";
import { SecurityContext } from "../Provider/SecurityProvider";

const DashboardNavbar = () => {
  const { user } = useContext(SecurityContext);
  // getting user data from user state
  const [userType] = useUserType();
  console.log(userType);

  return (
    <div className="pt-2 shadow-lg">
      <div className="navbar  w-[90%] m-auto">
        <div className="navbar-start">
          {/* Drawer */}
          <div className="drawer">
            <input id="my-drawer" type="checkbox" className="drawer-toggle" />
            <div className="drawer-content">
              {/* Page content here */}
              <label htmlFor="my-drawer" className=" drawer-button">
                <HiMenuAlt1 className="text-2xl" />
              </label>
            </div>

            <div className="drawer-side">
              <label
                htmlFor="my-drawer"
                aria-label="close sidebar"
                className="drawer-overlay"
              ></label>

              {/* Sidebar menu content */}
              <div className="text-center menu p-4 w-80 min-h-full bg-white text-base-content">
                <h1 className="font-bold text-3xl lg:text-3xl">Dashboard</h1>
                <div className="my-5 flex justify-between items-center bg-red-500 p-3 rounded-2xl">
                  <h1 className="text-2xl text-white font-bold">
                    {user?.displayName}
                  </h1>
                  <img src={user?.photoURL} className="w-16" />
                </div>
                <div className="space-y-3 mt-5 pt-5 text-[16px] font-bold  shadow-slate-200">
                  <ul className="dashboardSideBar text-center">





                    
                    {/* Admin routes */}
                    {userType === "admin" ? (
                      <NavLink to="/dashboard/adminhome">
                        <button className="w-full py-2 rounded-full text-black transition-all duration-300 hover:text-white hover:bg-red-500">
                          Profile
                        </button>
                      </NavLink>
                    ) : 







                    // user routes
                    userType === "donor" ? (
                      <NavLink to="/dashboard/userprofile">
                        <button className="w-full py-2 rounded-full text-black transition-all duration-300 hover:text-white hover:bg-red-500">
                          Profile
                        </button>
                      </NavLink>
                    ) :
                    
                    









                    // Volunteer  routes
                    userType === "volunteer" ? (
                      <p>volentier</p>
                    ) : 
                    // else method
                    (
                      <></>
                    )}

                    {/* {
                      if(userType === "admin"){
                        `
                        
                        
                        `
                      }else{
                        `
                        
                        `
                      }
                    } */}
                  </ul>
                  <div className="border-b-2 border-black opacity-25 w-[80%] m-auto"></div>
                  <ul>
                    <NavLink to="/">
                      <button className="w-full py-2 rounded-full text-black transition-all duration-300 hover:text-white hover:bg-red-500">
                        Home
                      </button>
                    </NavLink>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="navbar-center hidden lg:flex"></div>
        <div className="navbar-end gap-5">
          <h1 className="text-xl font-bold">{user.displayName}</h1>
          <img src={user?.photoURL} className="w-10" />
        </div>
      </div>
    </div>
  );
};

export default DashboardNavbar;
