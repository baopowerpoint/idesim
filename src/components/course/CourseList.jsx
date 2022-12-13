import React from "react";

function CourseList({ illSrc, conSrc, category, title, instructor }) {
  return (
    <div>
      <div className="bg-dark3 flex items-center border border-dark4 rounded-2xl mt-5 p-2 hover:bg-dark4 cursor-pointer transition-all duration-300">
        <img
          src={illSrc}
          className="w-[100px] h-full  rounded-2xl border-[1px] border-dark4"
          alt=""
        />
        <div className="p-2">
          <p className="category text-[10px] text-med">{category}</p>
          <p className="title font-700">{title}</p>
          <div className="flex gap-2 mt-2">
            {conSrc && (
              <img
                src={conSrc}
                alt=""
                className="w-[25px] h-[25px]  rounded-2xl border-[1px] border-dark4"
              />
            )}
            <p className="name">{instructor}</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CourseList;
