import React, { useContext } from "react";
import { UserContext } from "../context/UserContext";
import Navbar from "../components/Navbar";
import SideMenu from "../components/SideMenu";
import { useUserAuth } from "../hooks/useUserAuth";

const DashboardLayout = ({ children, activeMenu }) => {
  useUserAuth(); // Prevent from "user == null" after refreshing the page

  const { user } = useContext(UserContext);
  return (
    <div>
      <Navbar activeMenu={activeMenu} />

      {user && (
        <div className="flex">
          <div className="max-[1080px]:hidden">
            <SideMenu activeMenu={activeMenu} />
          </div>
          <div className="flex-1 mx-5">{children}</div>
        </div>
      )}
    </div>
  );
};

export default DashboardLayout;
