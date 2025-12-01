import React from "react";
import { assets } from "../assets/assets";
import { useNavigate } from "react-router-dom";

const Navbar = () => {
  const navigate = useNavigate();
  return (
    <div className="flex justify-between items-center py-5 px-6 sm:px-12">
      {/* logo */}
      <img
        src={assets.logo}
        alt="logo"
        className="w-32 sm:w-44 cursor-pointer"
        onClick={() => navigate("/")}
      />

      {/* login button */}
      <button
        onClick={() => navigate("/login")}
        className="flex items-center gap-2  rounded-full text-sm cursor-pointer bg-primary text-white px-10 py-2.5 "
      >
        Login
        <img src={assets.arrow} alt="arrow" className="w-3" />
      </button>
    </div>
  );
};

export default Navbar;
