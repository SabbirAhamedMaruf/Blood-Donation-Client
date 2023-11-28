import { createBrowserRouter } from "react-router-dom";
import Root from "../layouts/Root";
import Errorpage from "../pages/Error/Errorpage";
import Home from "../pages/Home/Home";
import Login from "../pages/Security/Login";
import Register from "../pages/Security/Register";
import Dashboard from "../layouts/Dashboard";
import PrivateRoutes from "./PrivateRoutes";
import DonorHome from "../pages/Dashboard/Donor/DonorHome";
import DonorCreateDonation from "../pages/Dashboard/Donor/DonorCreateDonation";
import DonorDonation from "../pages/Dashboard/Donor/DonorDonation";
import UpdateDonationData from "../pages/Dashboard/Donor/UpdateDonationData";
import DonorFundForOrganization from "../pages/Dashboard/Donor/DonorFundForOrganization";
import ViewDonationDetails from "../pages/Dashboard/Donor/ViewDonationDetails";
import Profile from "../pages/Dashboard/Shared/Profile";
import AdminHome from "../pages/Dashboard/Admin/AdminHome";
import VolunteerHome from "../pages/Dashboard/Volunteer/VolunteerHome";


const routes = createBrowserRouter([
  // Normal Routes
  {
    path: "/",
    element: <Root />,
    errorElement: <Errorpage />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path:"/login",
        element:<Login/>
      },
      {
        path:"/register",
        element:<Register/>
      }
    ],
  },

  // Dashboard Routes
  {
    path:"/dashboard",
    element:<PrivateRoutes><Dashboard/></PrivateRoutes>,
    children:[
      // Shared Rotues
      {
        path:"/dashboard/profile",
        element:<PrivateRoutes><Profile/></PrivateRoutes>
      },



      // Admin Routes
      {
        path:"/dashboard/adminhome",
        element: <PrivateRoutes><AdminHome/></PrivateRoutes>
      },






      // Donor Routes
      {
        path:"/dashboard/donorhome",
        element: <PrivateRoutes><DonorHome/></PrivateRoutes>
      },
      {
        path:"/dashboard/my-donation-requests",
        element: <PrivateRoutes><DonorDonation/></PrivateRoutes>
      },
      {
        path:"/dashboard/create-donation-request",
        element: <PrivateRoutes><DonorCreateDonation/></PrivateRoutes>
      },
      {
        path:"/dashboard/update-donation-request/:id",
        element: <PrivateRoutes><UpdateDonationData/></PrivateRoutes>
      },
      {
        path:"/dashboard/donorfundfororganization",
        element:<DonorFundForOrganization/>
      },
      {
        path:"/dashboard/view-donation-details/:id",
        element:<ViewDonationDetails/>
      },
      
      // Volunteer Routes
      {
        path: "/dashboard/volunteerhome",
        element:<PrivateRoutes><VolunteerHome/></PrivateRoutes>
      }
    ]
  }
]);

export default routes;
