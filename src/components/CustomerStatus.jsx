import React from "react";
import { TiArrowDown, TiArrowUp } from "react-icons/ti";

const users = [
  { id: 1, Pic: "p2.svg" },
  { id: 2, Pic: "p3.svg" },
  { id: 3, Pic: "p4.svg" },
  { id: 4, Pic: "p5.svg" },
  { id: 5, Pic: "p6.svg" },
];

const CustomerStatus = () => {
  return (
    <div className="bg-white flex justify-between w-full  h-[151px] sm-custom:h-[240px] xxs-custom:h-[180px] p-6 rounded-3xl ">
      <div className="flex gap-4  md-custom:items-center">
        <div className="flex gap-3 items-center sm-custom:flex-col xxs-custom:flex-col  ">
          <div>
            <img src="userstatus.png" alt="" className="xxs-custom:w-14" />
          </div>
          <div className="sm-custom:flex sm-custom:flex-col sm-custom:items-center xxs-custom:flex xxs-custom:flex-col xxs-custom:items-center">
            <p className="text-[#ACACAC] lg:text-2xl text-[9px]">
              Total Customers
            </p>
            <p className="text-black lg:text-2xl text-[13px] font-semibold">
              5,423
            </p>
            <p className="flex items-center text-black lg:text-2xl text-[9px]">
              <TiArrowUp className="text-[#00AC4F]" />
              <span className="text-[#00AC4F] pr-2 ">16% </span> this month
            </p>
          </div>
        </div>
      </div>
      <div className="flex gap-4 ">
        <div className="flex gap-3 items-center sm-custom:flex-col xxs-custom:flex-col ">
          <div>
            <img src="usertick.svg" alt="" className="xxs-custom:w-14" />
          </div>
          <div className="sm-custom:flex sm-custom:flex-col sm-custom:items-center xxs-custom:flex xxs-custom:flex-col xxs-custom:items-center">
            <p className="text-[#ACACAC] lg:text-2xl text-[9px]">Members</p>
            <p className="text-black lg:text-2xl text-[13px] font-semibold">
              1,893
            </p>
            <p className="flex items-center text-black lg:text-2xl text-[9px]">
              <TiArrowDown className="text-[#D0004B]" />
              <span className="text-[#D0004B] pr-2">16% </span> this month
            </p>
          </div>
        </div>
        <div></div>
      </div>
      <div className="flex gap-4">
        <div className="flex gap-3 items-center sm-custom:flex-col xxs-custom:flex-col ">
          <div>
            <img src="laptop.svg" alt="" className="xxs-custom:w-14"/>
          </div>
          <div className="sm-custom:flex sm-custom:flex-col sm-custom:items-center xxs-custom:flex xxs-custom:flex-col xxs-custom:items-center">
            <p className="text-[#ACACAC] lg:text-2xl text-[9px]">Members</p>
            <p className="text-black lg:text-2xl text-[13px] font-semibold">
              189
            </p>
            <p className="flex items-center text-black">
              <div className="flex flex-wrap justify-center -space-x-5">
                {users.map((user) => (
                  <img
                    key={user.id}
                    src={user.Pic}
                    alt="profile"
                    className="lg:w-10 lg:h-10 "
                  />
                ))}
              </div>
            </p>
          </div>
        </div>
        <div></div>
      </div>
    </div>
  );
};

export default CustomerStatus;
