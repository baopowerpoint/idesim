import React from "react";

function SkeletonWithList() {
  return (
    <div
      role="status"
      className="p-4 space-y-4 w-full rounded border border-gray-700 divide-y divide-gray-700 shadow animate-pulse  md:p-6 "
    >
      <div className="flex justify-between items-center">
        <div>
          <div className="h-2.5 bg-gray-600 rounded-full  w-24 mb-2.5"></div>
          <div className="w-32 h-2 bg-gray-700 rounded-full "></div>
        </div>
        <div className="h-2.5 bg-gray-700 rounded-full  w-12"></div>
      </div>
      <div className="flex justify-between items-center pt-4">
        <div>
          <div className="h-2.5 bg-gray-600 rounded-full  w-24 mb-2.5"></div>
          <div className="w-32 h-2 bg-gray-700 rounded-full "></div>
        </div>
        <div className="h-2.5 bg-gray-700 rounded-full  w-12"></div>
      </div>
      <div className="flex justify-between items-center pt-4">
        <div>
          <div className="h-2.5 bg-gray-600 rounded-full  w-24 mb-2.5"></div>
          <div className="w-32 h-2 bg-gray-700 rounded-full "></div>
        </div>
        <div className="h-2.5 bg-gray-700 rounded-full  w-12"></div>
      </div>
      <div className="flex justify-between items-center pt-4">
        <div>
          <div className="h-2.5 bg-gray-600 rounded-full  w-24 mb-2.5"></div>
          <div className="w-32 h-2 bg-gray-700 rounded-full "></div>
        </div>
        <div className="h-2.5 bg-gray-700 rounded-full  w-12"></div>
      </div>
      <div className="flex justify-between items-center pt-4">
        <div>
          <div className="h-2.5 bg-gray-600 rounded-full  w-24 mb-2.5"></div>
          <div className="w-32 h-2 bg-gray-700 rounded-full "></div>
        </div>
        <div className="h-2.5 bg-gray-700 rounded-full  w-12"></div>
      </div>

      <span className="sr-only">Loading...</span>
    </div>
  );
}

export default SkeletonWithList;
