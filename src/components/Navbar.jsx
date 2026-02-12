import React, { useState } from "react";
import { HiOutlineMenu, HiOutlineX } from "react-icons/hi";
import ExpenseLogo from "../assets/images/expense-transparent-logo.png";
import SideMenu from "./SideMenu";

const Navbar = ({ activeMenu }) => {
  const [openSideMenu, setOpenSideMenu] = useState(false);
  return (
    <div className="flex gap-5 bg-white border-b border-gray-200/50 backdrop-blur-[2px] py-4 px-7 sticky top-0 z-30">
      <button
        className="block lg:hidden text-black cursor-pointer"
        onClick={() => {
          setOpenSideMenu(!openSideMenu);
        }}
      >
        {openSideMenu ? (
          <HiOutlineX className="text-2xl" />
        ) : (
          <HiOutlineMenu className="text-2xl" />
        )}
      </button>

      <div className="flex items-center">
        <img
          src={ExpenseLogo}
          className="w-10"
          alt="Expense Tracker Web App Logo"
          loading="lazy"
        />
        <h2 className="text-xl font-medium text-black flex">
          Expense <p className="text-primary font-semibold">IQ</p>
        </h2>
      </div>

      {openSideMenu && (
        <div className="fixed top-17.5 -ml-7 bg-white">
          <SideMenu activeMenu={activeMenu} />
        </div>
      )}
    </div>
  );
};

export default Navbar;
