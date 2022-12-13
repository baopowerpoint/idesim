import React from "react";

function DefaultInput() {
  return (
    <div className="w-full">
      <input
        type="text"
        id="small-input"
        placeholder="Viết bình luận"
        className="block w-full p-2  border  rounded-lg  sm:text-xs  bg-dark3 border-dark4 placeholder-gray-400 text-white focus:ring-blue-500 focus:border-blue-500"
      />
    </div>
  );
}

export default DefaultInput;
