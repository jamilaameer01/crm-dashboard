import React, { useState, useEffect } from "react";
import { GiHamburgerMenu } from "react-icons/gi";
import Sidebar from "./Sidebar";
import { Outlet } from "react-router-dom";

const Layout = () => {
  const [isVisible, setIsVisible] = useState(false);

  const toggleSidebar = () => {
    setIsVisible(!isVisible);
  };

  useEffect(() => {
    if (isVisible && window.innerWidth < 1000) {
      document.body.classList.add("overflow-hidden");
    } else {
      document.body.classList.remove("overflow-hidden");
    }

    return () => {
      document.body.classList.remove("overflow-hidden");
    };
  }, [isVisible]);

  return (
    <div className="flex">
      <div className="lg:block lg:px-5">
        <Sidebar isVisible={isVisible} toggleSidebar={toggleSidebar} />
      </div>

      <main className="bg-[#D9D9D9] px-8 flex-1 overflow-y-auto">
        <div className="lg:hidden ml-[-43px] mt-5">
          <GiHamburgerMenu
            onClick={toggleSidebar}
            className="cursor-pointer h-9 w-20"
          />
        </div>

        <Outlet />
      </main>
    </div>
  );
};

export default Layout;
