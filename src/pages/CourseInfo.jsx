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
    <div className=" max-w-[600px] w-full mx-auto p-3 z-40 ">
      {isPending && (
        <div className="w-full">
          <SkeletonWithLesson />
        </div>
      )}
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
            {course.courseContent.map((section) => (
              <div key={section.sectionNumber}>
                {" "}
                <FadeInPage>
                  <CourseContent payload={section} eTitle={course.eTitle} />
                </FadeInPage>
              </div>
            ))}
          </div>
        ))}
    </div>
  );
}

export default CourseInfo;
