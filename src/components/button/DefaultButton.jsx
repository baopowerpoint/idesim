import React from "react";

function DefaultButton({ name, color, isDisabled }) {
  return (
    <button
      type="button"
      disabled={isDisabled}
      className={`text-white w-full focus:outline-none focus:ring-4 font-medium rounded-lg text-caption2 bg-dark3 border border-dark4 py-2   `}
    >
      {name}
    </button>
  );
}

export default DefaultButton;
