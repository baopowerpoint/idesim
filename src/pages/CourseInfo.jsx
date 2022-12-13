import React from "react";
import CourseContent from "../components/course/CourseContent";
import CourseDetail from "../components/course/CourseDetail";
import { useParams } from "react-router-dom";
import { useCollection } from "../hooks/useCollection";
import { useEffect, useState, useRef } from "react";
import SkeletonWithLesson from "../components/skeleton/SkeletonWithLesson";
import FadeInPage from "../components/animatePage/FadeInPage";

function CourseInfo() {
  const { documents: courses, error, isPending } = useCollection("courses");
  const { eTitle } = useParams();
  const [course, setCourse] = useState(null);

  useEffect(() => {
    if (courses) {
      const res = courses.filter(
        (course) => course.eTitle.replace(/\s+/g, "-") == eTitle
      );
      setCourse(res);
    }
  }, [courses]);

  return (
    <div className=" max-w-[600px] mx-auto p-3 z-40 ">
      {course &&
        course.map((course) => (
          <div key={course.id}>
            {" "}
            <FadeInPage>
              <CourseDetail
                title={course.title}
                thumbnail={course.thumbnail}
                category={course.category}
                isPremium={course.price == 0 ? "free" : "pro"}
                brief={course.desc}
                tutor={course.tutor}
                students={course.students}
                totalTime={course.totalTime}
              />
            </FadeInPage>
            {course.courseContent.map((courseContent) => (
              <div key={courseContent.sectionNumber}>
                {" "}
                <FadeInPage>
                  <CourseContent payload={courseContent} />
                </FadeInPage>
              </div>
            ))}
          </div>
        ))}
      {isPending && <SkeletonWithLesson />}
    </div>
  );
}

export default CourseInfo;
