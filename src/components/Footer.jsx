/** @format */

import { useContext } from "react";
import { AppContext } from "../context/Context";

const Footer = () => {
  const { page, totalPages, handlePageChange } = useContext(AppContext);
  console.log(page);
  return (
    <div className=" fixed bg-white bottom-0 left-0 w-full  flex justify-center items-center py-5 ">
      <div className=" w-175 mx-auto flex justify-between items-center">
        <div className=" flex  gap-x-10 ">
          {page > 1 && (
            <button
              onClick={() => handlePageChange(page - 1)}
              className="border px-5 py-2 rounded-2xl hover:bg-slate-200 transition-all duration-300 cursor-pointer"
            >
              Previous
            </button>
          )}
          {page < totalPages && (
            <button
              onClick={() => handlePageChange(page + 1)}
              className="border px-5 py-2 rounded-2xl hover:bg-slate-200 transition-all duration-300 cursor-pointer"
            >
              Next
            </button>
          )}
        </div>
        <div>
          Page <span>{page}</span> of <span>{totalPages}</span>
        </div>
      </div>
    </div>
  );
};

export default Footer;
