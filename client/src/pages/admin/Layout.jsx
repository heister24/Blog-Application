import React from "react";
import { assets } from "../../assets/assets";
import { Outlet, useNavigate } from "react-router-dom";
import Sidebar from "../../components/admin/Sidebar";
import { useAppContext } from "../../Context/AppContext";

const Layout = () => {
  const { axios, setToken, navigate } = useAppContext();

  const handleLogout = () => {
    localStorage.removeItem("token");
    axios.defaults.headers.common["Authorization"] = null;
    setToken(null);
    navigate("/");
  };
  return (
    <>
      {/* header */}
      <div className="flex items-center justify-between py-2 h-[70px] px-4 border-b border-gray-200">
        <img
          src={assets.logo}
          alt=""
          className="w-32 cursor-pointer"
          onClick={() => navigate("/")}
        />
        <button
          className="text-sm bg-primary py-2 px-8 rounded-full cursor-pointer text-white right"
          onClick={handleLogout}
        >
          Logout
        </button>
      </div>

      {/* detaisl */}
      <div className="flex h-[calc(100vh-70px)]">
        <Sidebar />
        <Outlet />
      </div>
    </>
  );
};

export default Layout;
