import React from "react";
import CourseList from "../components/course/CourseList";
import SearchInput from "../components/form/SearchInput";
import { Link } from "react-router-dom";
import SkeletonWithItem from "../components/skeleton/SkeletonWithItem";
import { useCollection } from "../hooks/useCollection";
import { useEffect } from "react";
import { useState } from "react";
import { useDebounce } from "../hooks/useDebounce";
function Courses() {
  const [childData, setChildData] = useState("");
  const { debounceValue } = useDebounce(childData, 500);
  const { documents: courses, error, isPending } = useCollection("courses");
  const [foundCourse, setFoundCourse] = useState(courses);

  useEffect(() => {
    if (courses) {
      const res = courses.filter((course) =>
        course.title.toLowerCase().includes(debounceValue)
      );
      setFoundCourse(res);
      console.log(res);
    }
    console.log(debounceValue);
  }, [debounceValue, courses]);
  return (
    <div className="mt-20 max-w-[600px] p-3 mx-auto">
      <p className="text-center font-600 mb-10 text-headline4">
        Tất cả khoá học
      </p>
      <SearchInput onInputChange={setChildData} />
      <div>
        {isPending && (
          <div>
            <SkeletonWithItem />
            <SkeletonWithItem />
            <SkeletonWithItem />
          </div>
        )}
        {foundCourse &&
          foundCourse.map((course, idx) => (
            <Link
              key={idx}
              to={`/courses/${
                course.eTitle ? course.eTitle.replace(/\s+/g, "-") : undefined
              }`}
            >
              <CourseList
                id={course.id}
                illSrc={course.thumbnail}
                conSrc={course.tutor.avatar}
                category={course.category}
                title={course.title}
                instructor={course.tutor.name}
                eTitle={course.eTitle}
                payload={course.courseContent}
              />
            </Link>
          ))}
        {foundCourse && foundCourse.length == 0 && (
          <p className="text-headline6 mt-4">Không tìm thấy khóa học !</p>
        )}
      </div>
    </div>
  );
}

export default Courses;
