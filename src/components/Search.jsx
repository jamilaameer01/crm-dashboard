import { IoSearchOutline } from "react-icons/io5";

const Search = () => {
  return (
    <div className="relative">
      <div className="flex lg:justify-end  justify-center pr-6">
        <div className="w-full max-w-md   p-4  ">
          <div className="flex items-center bg-white shadow-md rounded-full overflow-hidden">
            <div className="pl-4 text-gray-500">
              <IoSearchOutline />
            </div>

            <input
              type="text"
              placeholder="Search..."
              className="flex-1 p-2 pl-2 text-gray-700 outline-none"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Search;
