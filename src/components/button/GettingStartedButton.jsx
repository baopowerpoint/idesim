import React from "react";

function GettingStartedButton() {
  return (
    <button className="w-full inline-flex items-center justify-center p-0.5 mb-2 mr-2 overflow-hidden text-body font-600  rounded-lg group bg-gradient-to-br from-cyan-500 to-blue-500 group-hover:from-cyan-500 group-hover:to-blue-500 hover:text-white text-white focus:ring-4 focus:outline-none focus:ring-cyan-800 ">
      <span className="relative px-5 py-2.5 transition-all ease-in duration-75bg-gray-900 rounded-md group-hover:bg-opacity-0">
        Tìm hiểu thêm
      </span>
    </button>
  );
}

export default GettingStartedButton;
