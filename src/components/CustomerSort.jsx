import React from 'react'
import { IoIosArrowDown } from 'react-icons/io';

const CustomerSort = () => {
  return (
    <div className="flex justify-end">
      <div className="w-full max-w-sm  ">
        <div className="flex justify-center text-sm items-center bg-[#f6f6f7] shadow-md rounded-full overflow-hidden">
          <div>
            <input
              type="text"
              placeholder="Short by:"
              className=" p-2 pl-2 text-gray-700 outline-none bg-[#f6f6f7] w-24"
            />
          </div>

          <span className="text-black">Newest</span>
          <div className="px-2">
            <IoIosArrowDown />
          </div>
        </div>
      </div>
    </div>
  );
}

export default CustomerSort