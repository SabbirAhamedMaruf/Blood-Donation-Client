import { createBrowserRouter } from "react-router-dom";
import Root from "../layouts/Root";
import Errorpage from "../pages/Error/Errorpage";
import Home from "../pages/Home/Home";
import Login from "../pages/Security/Login";
import Register from "../pages/Security/Register";

const routes = createBrowserRouter([
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
]);

export default routes;
