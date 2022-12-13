import React from "react";

function Badge({ category, type }) {
  return (
    <div className="flex justify-center">
      {" "}
      <span
        className={`text-[10px] bg-${type} inline-block m-1 px-2 py-1 font-600 w-fit rounded-full `}
      >
        {category}
      </span>
    </div>
  );
}

export default Badge;
