import React, { useState } from "react";
import { IoIosArrowDown } from "react-icons/io";
import { LuUserSquare2 } from "react-icons/lu";
import { MdArrowCircleRight, MdKeyboardArrowRight } from "react-icons/md";

const Sidebar = ({ isVisible, toggleSidebar }) => {
  const [isCollapsed, setIsCollapsed] = useState(true);

  const sidebarWidth = isVisible || !isCollapsed ? "w-64" : "w-11";

  const handleCollapse = () => {
    if (window.innerWidth < 1023) {
      toggleSidebar();
    } else {
      setIsCollapsed(!isCollapsed);
    }
  };

  const handleLinkClick = () => {
    if (window.innerWidth < 1023) {
      toggleSidebar();
    }
  };

  return (
    <> <div
        className={`fixed inset-0 bg-black bg-opacity-50 z-10 lg:hidden ${
          isVisible ? "block" : "hidden"
        }`}
        onClick={toggleSidebar}
      ></div>

      <div
        className={`fixed lg:relative bg-white h-full overflow-hidden z-20 lg:z-0 transition-all duration-300 ${sidebarWidth} ${
          isVisible ? "left-0" : "-left-full"
        } lg:left-0`}
      >
       
        <div>
          <MdArrowCircleRight
            className="w-11 h-11 absolute right-0  top-1/2 transform -translate-y-1/2 cursor-pointer"
            onClick={handleCollapse} 
          />
        </div>

        <div className="flex gap-3 mb-8">
          <img src="dashboard.svg" alt="dashboard" />
          <span className="font-semibold text-[26px]">Dashboard</span>
        </div>

        <div className="flex flex-col h-[88vh] justify-between">
          <div className="flex flex-col text-[#9197B3] text-[14px]">
            <div
              className="flex gap-7 items-center pb-4"
              onClick={handleLinkClick}
            >
              <img
                src="key.jpg"
                alt="dashboard"
                className="w-[24px] h-[24px]"
              />
              <span>Dashboard</span>
            </div>
            <div
              className="flex gap-3 justify-between items-center"
              onClick={handleLinkClick}
            >
              <div className="flex gap-7 items-center">
                <img
                  src="square.png"
                  alt="dashboard"
                  className="w-[24px] h-[24px]"
                />
                <span>Product</span>
              </div>
              <div>
                <MdKeyboardArrowRight className="h-16 w-6" />
              </div>
            </div>
            <div
              className="flex gap-3 justify-between items-center"
              onClick={handleLinkClick}
            >
              <div className="flex gap-7 items-center">
                <LuUserSquare2 className="w-[24px] h-[24px]" />
                <span>Customers</span>
              </div>
              <div>
                <MdKeyboardArrowRight className="h-16 w-6" />
              </div>
            </div>
            <div
              className="flex gap-3 justify-between items-center"
              onClick={handleLinkClick}
            >
              <div className="flex gap-7 items-center">
                <img
                  src="money.png"
                  alt="dashboard"
                  className="w-[24px] h-[24px]"
                />
                <span>Income</span>
              </div>
              <div>
                <MdKeyboardArrowRight className="h-16 w-6" />
              </div>
            </div>
            <div
              className="flex gap-3 justify-between items-center"
              onClick={handleLinkClick}
            >
              <div className="flex gap-7 items-center">
                <img
                  src="discount.png"
                  alt="dashboard"
                  className="w-[24px] h-[24px]"
                />
                <span>Promote</span>
              </div>
              <div>
                <MdKeyboardArrowRight className="h-16 w-6" />
              </div>
            </div>
            <div
              className="flex gap-3 justify-between items-center"
              onClick={handleLinkClick}
            >
              <div className="flex gap-7 items-center">
                <img
                  src="help.png"
                  alt="dashboard"
                  className="w-[24px] h-[24px]"
                />
                <span>Help</span>
              </div>
              <div>
                <MdKeyboardArrowRight className="h-16 w-6" />
              </div>
            </div>
          </div>

          <div className="flex justify-between items-center h-[12vh] ">
            <div className="flex gap-2">
              <img src="person1.svg" alt="person" />
              <div>
                <span className="text-black font-semibold">Evano</span>
                <p className="text-[#757575]"> Project Manager</p>
              </div>
            </div>
            <div>
              <IoIosArrowDown />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Sidebar;
