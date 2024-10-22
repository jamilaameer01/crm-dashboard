import React, { useState } from "react";
import { GiHamburgerMenu } from "react-icons/gi";
import { IoIosArrowDown } from "react-icons/io";
import { LuUserSquare2 } from "react-icons/lu";
import { MdArrowCircleRight, MdKeyboardArrowRight } from "react-icons/md";

const Sidebar = () => {
  const [isCollapsed, setIsCollapsed] = useState(true);
   const [isVisible, setIsVisible] = useState(false);
  const handleCollapse = () => {
    setIsCollapsed(!isCollapsed);
  };
  const toggleSidebar = () => {
    setIsVisible(!isVisible);
  };
  
  return (
    <div className="relative">
      <div className="lg:hidden">
        <GiHamburgerMenu onClick={toggleSidebar} className="cursor-pointer" />
      </div>
    <div
      className={`bg-white h-100vh overflow-hidden relative pt-6  transition-all duration-300 ${
        isCollapsed ? "w-11" : "w-64"
      }`}
    >
      <div>
        <MdArrowCircleRight
          className="w-11 h-11 absolute right-0 bottom-56"
          onClick={handleCollapse}
        />
      </div>

      <div className="flex gap-3 mb-8">
        <img src="dashboard.svg" alt="dashboard" />
        <span className="font-semibold text-[26px]">Dashboard</span>
      </div>

      <div className="flex flex-col h-[88vh] justify-between">
        <div className="flex flex-col  text-[#9197B3] text-[14px]">
          <div className="flex gap-7 items-center pb-4">
            <img src="key.jpg" alt="dashboard" className="w-[24px] h-[24px]" />
            <span>Dashboard</span>
          </div>
          <div className="flex gap-3 justify-between items-center">
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
          <div className="flex gap-3  justify-between items-center">
            <div className="flex gap-7 items-center">
              <LuUserSquare2 className="w-[24px] h-[24px]" />
              <span>Customers</span>
            </div>
            <div>
              <MdKeyboardArrowRight className="h-16 w-6" />
            </div>
          </div>
          <div className="flex gap-3  justify-between items-center">
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
          <div className="flex gap-3  justify-between items-center">
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
          <div className="flex gap-3  justify-between items-center">
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
            <IoIosArrowDown className="" />
          </div>
        </div>
      </div>
      </div>
      </div>
  );
};

export default Sidebar;
