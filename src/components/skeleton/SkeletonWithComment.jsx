import React from "react";
import { FaUser } from "react-icons/fa";

function SkeletonWithComment() {
  return (
    <div className="animate-pulse">
      <div className="flex items-start mt-4 space-x-3">
        <div className="flex justify-center items-center mb-4 h-10 w-10 rounded-full bg-gray-700">
          <FaUser className="text-gray-600" />
        </div>
        <div className="flex-1 w-full">
          <div className="h-2.5  rounded-full bg-gray-700 w-32 mb-2"></div>
          <div className="w-full max-w-[600px] h-2  rounded-full bg-gray-800"></div>
          <div className="w-full max-w-[600px] h-2 mt-1  rounded-full bg-gray-800"></div>
        </div>
      </div>
    </div>
  );
}

export default SkeletonWithComment;
