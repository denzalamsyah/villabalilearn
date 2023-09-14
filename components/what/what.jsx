import React from "react";
import { BiSearch } from "react-icons/bi";
const What = () => {
  return (
    <>
      <div className="flex flex-col justify-center items-center mt-[62px]">
        <div className="mt-what text-f-40 text-custom-coklat font-medium">
          What content are you in the mood for?
        </div>
        <div className="flex rounded-full bg-[#FFF] justify-center items-center border-1 border-solid border-[#E9E9E9] w-[884px] h-[71px] mt-4">
          <input
            type="text"
            autoFocus
            name="search"
            id="search"
            placeholder="Search by villa"
            className="py-2 px-3 rounded-l-full focus:outline-none text-[#ABB2C2] font-poppins text-[18px] font-normal w-[584px] h-[25px]"
          />
          <button className="bg-custom-coklat text-white px-4 py-2 rounded-r-full hover:bg-blue-600 focus:outline-none">
            <BiSearch className="w-w-icon-search h-h-icon-search" />
          </button>
        </div>
      </div>
    </>
  );
};

export default What;
