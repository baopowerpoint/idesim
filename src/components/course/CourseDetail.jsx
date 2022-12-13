import React from "react";
import Badge from "../badge/Badge";

import CourseContent from "./CourseContent";
import { Link } from "react-router-dom";
import ColoredShadow from "../button/ColoredShadow";
import DefaultButton from "../button/DefaultButton";
import { FaUser } from "react-icons/fa";
import { MdAccessTimeFilled } from "react-icons/md";

function CourseDetail({
  title,
  brief,
  isPremium,
  category,
  thumbnail,
  tutor,
  students,
  totalTime,
}) {
  return (
    <div className=" mt-10">
      <img src={thumbnail} className="w-2/3 mx-auto " alt="" />
      <p className="text-headline4 font-700 text-left">{title}</p>
      <div className="flex items-center gap-3 my-3">
        <img
          src={tutor.avatar}
          className="w-12 h-12 rounded-full object-cover"
          alt=""
        />
        <div>
          {" "}
          <p className="text-med text-caption font-400 ">instructor</p>
          <p className="text-body font-600 text-med">{tutor.name}</p>
        </div>
      </div>

      <div className="flex mx-auto justify-start ">
        {" "}
        <Badge category={category} type="dark4" />
        <Badge category={isPremium} type="primary" />
      </div>
      <div className="flex mt-2 items-center gap-2 border border-dark3 rounded-lg py-3">
        <FaUser />
        <p>{students.length} người tham gia</p>
      </div>
      <div className="flex mt-2 items-center gap-2 border border-dark3 rounded-lg py-3">
        <MdAccessTimeFilled />
        <p>Tổng thời lượng: {totalTime}</p>
      </div>
      <p className="my-4">{brief}</p>
      <Link to="/learning/name/lesson">
        <div className="mt-2">
          <ColoredShadow name="Học ngay" />
        </div>
      </Link>
      <div className="mt-2">
        <DefaultButton name="Thêm vào xem sau" />
      </div>
    </div>
  );
}

export default CourseDetail;
