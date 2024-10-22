import React from "react";
import Search from "./Search";
import CustomerSort from "./Customersort";
import Table from "./Table";

const AllCustomer = () => {
  return (
    <div className="bg-white w-full mx-auto p-6 rounded-3xl">
      <div className="flex justify-between">
        <div>
          <p className="text-[22px] font-semibold">All Customers</p>
          <p className="text-sm text-[#16C098]">Active Members</p>
        </div>
        <div className="flex items-center sm-custom:flex-col">
          <Search />
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