import React from "react";
import CourseFeatures from "../components/course/CourseFeatures";
import CourseIntro from "../components/course/CourseIntro";
import CoursePricing from "../components/CoursePricing";
import StagePr from "../components/3D/Stage";

function Home() {
  return (
    <>
      <div className=" max-w-[600px] mx-auto p-3 z-40 ">
        <StagePr />
        <CourseIntro />
        <CourseFeatures />
        <CoursePricing />
      </div>
    </>
  );
}

export default Home;
