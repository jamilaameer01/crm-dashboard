import React, { useState } from "react";
import { GiHamburgerMenu } from "react-icons/gi";
import Sidebar from "./Sidebar"; // Import your Sidebar component
import { Outlet } from "react-router-dom";

const Layout = () => {
  const [isVisible, setIsVisible] = useState(false);

  const toggleSidebar = () => {
    setIsVisible(!isVisible);
  };

  return (
    <div className="flex">
      <div className="lg:block">
        {/* Pass isVisible and toggleSidebar as props */}
        <Sidebar isVisible={isVisible} toggleSidebar={toggleSidebar} />
      </div>

      <main className="bg-[#D9D9D9] px-8 flex-1">
        {/* Hamburger icon only visible on small and medium screens */}
        <div className="lg:hidden p-4">
          <GiHamburgerMenu onClick={toggleSidebar} className="cursor-pointer" />
        </div>

        <Outlet />
      </main>
    </div>
  );
};

export default Layout;
