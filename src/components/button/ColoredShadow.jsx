import React from "react";

function ColoredShadow({ name, isDisabled }) {
  return (
    <button
      type="button"
      disabled={isDisabled}
      className="text-white w-full bg-gradient-to-r from-blue-500 via-blue-600 to-blue-700 hover:bg-gradient-to-br focus:ring-4 focus:outline-none  focus:ring-blue-800 shadow-lg shadow-blue-800/80 font-medium rounded-lg text-sm px-5 py-2.5 disabled:cursor-not-allowed text-center mr-2 mb-2 "
    >
      {name}
    </button>
  );
}

export default ColoredShadow;
