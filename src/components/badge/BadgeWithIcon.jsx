import React from "react";
import { RiTimeFill } from "react-icons/ri";
import { AiFillEye, AiFillHeart } from "react-icons/ai";
import { FaComment } from "react-icons/fa";

function BadgeWithIcon({ type }) {
  return (
    <div className="">
      {type === "date" && (
        <span className="bg-dark4 text-med text-caption font-500 inline-flex items-center px-2.5 py-0.5 rounded mr-2 ">
          <RiTimeFill className="mr-1" /> 3 days ago
        </span>
      )}
      {type === "views" && (
        <span className="bg-dark4 text-med text-caption font-500 inline-flex items-center px-2.5 py-0.5 rounded mr-2 ">
          <AiFillEye className="mr-1" /> 295 lượt xem
        </span>
      )}
      {type === "comment" && (
        <span className="bg-dark4 text-med text-caption font-500 inline-flex items-center px-2.5 py-0.5 rounded mr-2 ">
          <FaComment className="mr-1" /> 3
        </span>
      )}
      {type === "reaction" && (
        <span className="bg-dark4 text-med text-caption font-500 inline-flex items-center px-2.5 py-0.5 rounded mr-2 ">
          <AiFillHeart className="mr-1" /> 3
        </span>
      )}
    </div>
  );
}

export default BadgeWithIcon;
