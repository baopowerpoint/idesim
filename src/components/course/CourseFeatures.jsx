import React from "react";

import { Link } from "react-router-dom";
import { useCollection } from "../../hooks/useCollection";
import Course from "./CourseList";
function CourseFeatures() {
  const { documents: courses, error, isPending } = useCollection("courses");
  return (
    <div className="mt-10  ">
      <h1 className="text-headline4 text-center  font-700">
        Tự tạo project cho riêng mình thông qua việc học khoá học
      </h1>
      {courses &&
        courses.map((course, idx) => (
          <Link key={idx} to={`/courses/${course.eTitle.replace(/\s+/g, "-")}`}>
            <Course
              illSrc={course.thumbnail}
              conSrc={course.tutor.avatar}
              category={course.category}
              title={course.title}
              instructor={course.tutor.name}
            />
          </Link>
        ))}
    </div>
  );
}

export default CourseFeatures;
