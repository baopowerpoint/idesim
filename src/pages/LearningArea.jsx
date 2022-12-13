import React from "react";
import ReactPlayer from "react-player";
import "../customCss/customPlayer.css";
import { MdOutlineMenuOpen } from "react-icons/md";
import { FiChevronRight, FiChevronLeft } from "react-icons/fi";
import CourseContent from "../components/course/CourseContent";
import Discuss from "../components/Discuss";
function LearningArea() {
  return (
    <div className="flex  justify-center">
      {" "}
      <div className="mt-20 p-3 max-w-[800px] basis-full ">
        {" "}
        <div className="player-wrapper">
          <ReactPlayer
            className="react-player"
            url="https://www.youtube.com/watch?v=ysz5S6PUM-U"
            width="100%"
            height="100%"
            controls
          />
        </div>
        <div className="mt-5">
          <p>Giới thiệu về React.js</p>
        </div>
        <div className="w-full mt-5 flex items-center justify-center gap-3 p-2 bg-dark3 rounded-xl">
          <p className="text-caption">Mở danh sách bài giảng</p>
          <MdOutlineMenuOpen />
        </div>
        <div className="flex justify-between mt-2 gap-5">
          <div className="w-full  flex items-center  justify-center gap-3 p-2 bg-dark3 rounded-xl">
            <FiChevronLeft />
          </div>
          <div className="w-full  flex items-center  justify-center gap-3 p-2 bg-dark3 rounded-xl">
            <FiChevronRight />
          </div>
        </div>
        <Discuss />
      </div>
      <div className="hidden mt-20 lg:block">
        <CourseContent />
      </div>
    </div>
  );
}

export default LearningArea;
