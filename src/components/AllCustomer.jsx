import React from "react";
import Search from "./Search";
import CustomerSort from "./Customersort";
import Table from "./Table";

const AllCustomer = () => {
  return (
    <div className="bg-white w-full mx-auto p-6 rounded-3xl">
      <div className="lg:flex lg:justify-between lg:flex-row flex flex-col items-center">
        <div>
          <p className="lg:text-[22px] font-semibold">All Customers</p>
          <p className="text-sm text-[#16C098] ">Active Members</p>
        </div>
        <div className="flex items-center sm-custom:flex-col  xxs-custom:flex-col">
          <div className="">
            <Search />
          </div>

          <CustomerSort />
        </div>
      </div>
      <div>
        <Table />
      </div>
    </div>
  );
};

export default AllCustomer;
