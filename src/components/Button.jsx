import React from "react";

function Button({ color, title }) {
  return (
    <button
      className={`w-full px-5 py-2 whitespace-nowrap bg-${color} text-button font-600 text-light rounded-lg`}
    >
      {title}
    </button>
  );
}

export default Button;
