import React from "react";

const Table = () => {
 
  const data = [
    {
      CustomerName: "Jane Cooper",
      Company: "Microsoft",
      PhoneNumber: "(225) 555-0118",
      Email: "jane@microsoft.com",
      Country: "United States",
      Status: "Inactive",
    },
    {
      CustomerName: "Jane Cooper",
      Company: "Microsoft",
      PhoneNumber: "(225) 555-0118",
      Email: "jane@microsoft.com",
      Country: "United States",
      Status: "Active",
    },
    {
      CustomerName: "Jane Cooper",
      Company: "Microsoft",
      PhoneNumber: "(225) 555-0118",
      Email: "jane@microsoft.com",
      Country: "United States",
      Status: "Active",
    },
    {
      CustomerName: "Jane Cooper",
      Company: "Microsoft",
      PhoneNumber: "(225) 555-0118",
      Email: "jane@microsoft.com",
      Country: "United States",
      Status: "Inactive",
    },
    {
      CustomerName: "Jane Cooper",
      Company: "Microsoft",
      PhoneNumber: "(225) 555-0118",
      Email: "jane@microsoft.com",
      Country: "United States",
      Status: "Active",
    },
    {
      CustomerName: "Jane Cooper",
      Company: "Microsoft",
      PhoneNumber: "(225) 555-0118",
      Email: "jane@microsoft.com",
      Country: "United States",
      Status: "Active",
    },
    {
      CustomerName: "Jane Cooper",
      Company: "Microsoft",
      PhoneNumber: "(225) 555-0118",
      Email: "jane@microsoft.com",
      Country: "United States",
      Status: "Inactive",
    },
    {
      CustomerName: "Jane Cooper",
      Company: "Microsoft",
      PhoneNumber: "(225) 555-0118",
      Email: "jane@microsoft.com",
      Country: "United States",
      Status: "Active",
    },
    {
      CustomerName: "Jane Cooper",
      Company: "Microsoft",
      PhoneNumber: "(225) 555-0118",
      Email: "jane@microsoft.com",
      Country: "United States",
      Status: "Active",
    },
    {
      CustomerName: "Jane Cooper",
      Company: "Microsoft",
      PhoneNumber: "(225) 555-0118",
      Email: "jane@microsoft.com",
      Country: "United States",
      Status: "Active",
    },
    {
      CustomerName: "Jane Cooper",
      Company: "Microsoft",
      PhoneNumber: "(225) 555-0118",
      Email: "jane@microsoft.com",
      Country: "United States",
      Status: "Active",
    },
    {
      CustomerName: "Jane Cooper",
      Company: "Microsoft",
      PhoneNumber: "(225) 555-0118",
      Email: "jane@microsoft.com",
      Country: "United States",
      Status: "Active",
    },
    {
      CustomerName: "Jane Cooper",
      Company: "Microsoft",
      PhoneNumber: "(225) 555-0118",
      Email: "jane@microsoft.com",
      Country: "United States",
      Status: "Active",
    },
    {
      CustomerName: "Jane Cooper",
      Company: "Microsoft",
      PhoneNumber: "(225) 555-0118",
      Email: "jane@microsoft.com",
      Country: "United States",
      Status: "Active",
    },
    {
      CustomerName: "Jane Cooper",
      Company: "Microsoft",
      PhoneNumber: "(225) 555-0118",
      Email: "jane@microsoft.com",
      Country: "United States",
      Status: "Active",
    },
    {
      CustomerName: "Jane Cooper",
      Company: "Microsoft",
      PhoneNumber: "(225) 555-0118",
      Email: "jane@microsoft.com",
      Country: "United States",
      Status: "Active",
    },
    {
      CustomerName: "Jane Cooper",
      Company: "Microsoft",
      PhoneNumber: "(225) 555-0118",
      Email: "jane@microsoft.com",
      Country: "United States",
      Status: "Active",
    },
    {
      CustomerName: "Jane Cooper",
      Company: "Microsoft",
      PhoneNumber: "(225) 555-0118",
      Email: "jane@microsoft.com",
      Country: "United States",
      Status: "Active",
    },
    {
      CustomerName: "Jane Cooper",
      Company: "Microsoft",
      PhoneNumber: "(225) 555-0118",
      Email: "jane@microsoft.com",
      Country: "United States",
      Status: "Active",
    },
    {
      CustomerName: "Jane Cooper",
      Company: "Microsoft",
      PhoneNumber: "(225) 555-0118",
      Email: "jane@microsoft.com",
      Country: "United States",
      Status: "Active",
    },
    {
      CustomerName: "Jane Cooper",
      Company: "Microsoft",
      PhoneNumber: "(225) 555-0118",
      Email: "jane@microsoft.com",
      Country: "United States",
      Status: "Active",
    },
    {
      CustomerName: "Jane Cooper",
      Company: "Microsoft",
      PhoneNumber: "(225) 555-0118",
      Email: "jane@microsoft.com",
      Country: "United States",
      Status: "Active",
    },
    {
      CustomerName: "Jane Cooper",
      Company: "Microsoft",
      PhoneNumber: "(225) 555-0118",
      Email: "jane@microsoft.com",
      Country: "United States",
      Status: "Active",
    },
    {
      CustomerName: "Jane Cooper",
      Company: "Microsoft",
      PhoneNumber: "(225) 555-0118",
      Email: "jane@microsoft.com",
      Country: "United States",
      Status: "Active",
    },
    {
      CustomerName: "Jamila",
      Company: "Microsoft",
      PhoneNumber: "(225) 555-0118",
      Email: "jane@microsoft.com",
      Country: "United States",
      Status: "Active",
    },
  
  ];

  return (
    <div className="overflow-x-auto">
      <div className="hidden lg:block">
        <table className="w-full">
          <thead>
            <tr className="text-[#B5B7C0] border-b text-sm sm:hidden">
              <th className="py-5  font-medium">Customer Name</th>
              <th className="py-5  font-medium">Company</th>
              <th className="py-5  font-medium">Phone Number</th>
              <th className="py-5  font-medium">Email</th>
              <th className="py-5  font-medium">Country</th>
              <th className="py-5  font-medium">Status</th>
            </tr>
          </thead>
          <tbody>
            {data.map((user) => (
              <tr key={user.id} className="text-sm font-medium">
                <td className="py-5 pl-4 ">{user.CustomerName}</td>
                <td className="py-5  pl-7">{user.Company}</td>
                <td className="py-5  pl-7">{user.PhoneNumber}</td>
                <td className="py-5  pl-7">{user.Email}</td>
                <td className="py-5  pl-">{user.Country}</td>
                <td className="py-5 text-center">
                  <button
                    className={`w-20 px-3 rounded hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-300 ${
                      user.Status === "Active"
                        ? "bg-[#79e7cd] border-2 border-[#008767] text-[#008767]"
                        : "bg-[#FFC5C5] border-2 border-[#DF0404] text-[#DF0404]"
                    }`}
                  >
                    {user.Status}
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* cards */}
      <div className="lg:hidden block">
        {data.map((user) => (
          <div
            key={user.id}
            className="bg-white shadow-md rounded-lg p-5 mb-5 gap-y-5  "
          >
            <div className="flex flex-wrap text-sm gap-y-4  gap-x-32 pt-4">
              <div className=" lg:text-[16px]">
                <span className="font-semibold ">Customer Name:</span>{" "}
                {user.CustomerName}
              </div>
              <div className="">
                <span className="font-semibold ">Company:</span> {user.Company}
              </div>
              <div>
                <span className="font-semibold">Phone Number:</span>{" "}
                {user.PhoneNumber}
              </div>
              <div className="">
                <span className="font-semibold ">Email:</span> {user.Email}
              </div>
              <div>
                <span className="font-semibold">Country:</span> {user.Country}
              </div>
            </div>
            <div className="text-center mt-5 lg:text-[16px] text-sm ">
              <button
                className={`w-20 px-2 rounded hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-300 ${
                  user.Status === "Active"
                    ? "bg-[#79e7cd] border-2 border-[#008767] text-[#008767]"
                    : "bg-[#FFC5C5] border-2 border-[#DF0404] text-[#DF0404]"
                }`}
              >
                {user.Status}
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Table;
