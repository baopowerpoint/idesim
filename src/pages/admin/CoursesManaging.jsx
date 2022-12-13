import React from "react";
import AddCourseForm from "../../components/form/AddCourseForm";
import ModalForm from "../../components/form/ModalForm";
import SearchInput from "../../components/form/SearchInput";
import TextArea from "../../components/form/TextArea";
import CourseList from "../../components/list/CourseList";
import SkeletonWithList from "../../components/skeleton/SkeletonWithList";
import { useCollection } from "../../hooks/useCollection";
import { useState, useEffect } from "react";
function CoursesManaging() {
  const [field, setField] = useState(null);
  const handleUpdate = (id) => {
    console.log(id);
  };
  useEffect(() => {
    console.log(field);
  }, [field]);
  const { documents: courses, error, isPending } = useCollection("courses");
  return (
    <div className="mt-20 max-w-[800px] mx-auto px-5">
      <h1 className="text-center text-headline4 font-700 ">Quản lý khóa học</h1>
      <div className=" mt-10 sm:flex sm:gap-3 sm:items-center ">
        <div className="basis-10/12 ">
          <SearchInput />
        </div>

        <div className="mt-2 sm:mt-0">
          <ModalForm action="Tạo mới">
            <AddCourseForm />
          </ModalForm>
        </div>
      </div>
      <div>
        <TextArea onFieldChange={setField} />
      </div>
      <div className="mt-5">
        {isPending && <SkeletonWithList />}
        {courses && <CourseList docs={courses} />}
        {error && <h1>{error}</h1>}
      </div>
    </div>
  );
}

export default CoursesManaging;
