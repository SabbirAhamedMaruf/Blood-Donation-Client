import { Outlet } from "react-router-dom";

const Root = () => {
  return (
    <div className="font-josefin-sans">
      <Outlet />
    </div>
  );
};

export default Root;
