import React, { useEffect, useRef, useState } from "react";

import "../customCss/customPlayer.css";
import { MdOutlineMenuOpen } from "react-icons/md";
import SpinnerLight from "../components/spinner/SpinnerLight";
import { BsShieldFillExclamation, BsArrowsFullscreen } from "react-icons/bs";
import CourseContent from "../components/course/CourseContent";
import Discuss from "../components/Discuss";
import { useCollection } from "../hooks/useCollection";
import { Link, useLocation, useParams } from "react-router-dom";
import VideoPlayer from "../components/VideoPlayer";

import { useAuthContext } from "../hooks/useAuthContext";

function LearningArea() {
  const { documents: courses, error, isPending } = useCollection("courses");
  const { eTitle, id: lessonId, section: section_num } = useParams();
  const [course, setCourse] = useState(null);
  const [lessonName, setLessonName] = useState(null);
  const [lessonIdentifier, setLessonIdentifier] = useState(null);
  const [sectionIdentifier, setSectionIdentifier] = useState(null);
  const [courseIdentifier, setCourseIdentifier] = useState(null);
  const [sections, setSections] = useState(null);
  const [lessonUrl, setLessonUrl] = useState("");
  const [comment, setComment] = useState(null);
  const _course = useRef(course).current;
  const { user } = useAuthContext();
  const [isLoaded, setIsLoaded] = useState(false);
  const [isCourseListOpen, setIsCourseListOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    if (courses) {
      const res = courses.filter(
        (course) => course.eTitle.replace(/\s+/g, "-") == eTitle
      );
      setCourse(res);
      setCourseIdentifier(res[0].id);
      setSections(res[0].courseContent);

      const filteredSection = res[0].courseContent.filter(
        (section) => section.sectionNumber == section_num
      );
      const filteredLesson = filteredSection[0].sectionContent.filter(
        (lesson) => lesson.lessonId == lessonId
      );
      console.log(filteredLesson[0]);
      setComment(filteredLesson[0].comment);
      setLessonName(filteredLesson[0].lessonTitle);
      setLessonUrl(filteredLesson[0].lessonVideoUrl);
      setLessonIdentifier(filteredLesson[0].lessonId);
      setSectionIdentifier(filteredSection[0].sectionId);
    }
  }, [courses, lessonId, _course]);

  return (
    <div className="w-full flex relative max-w-[1200px] justify-between mx-auto">
      {" "}
      <div className="mt-20 p-3  basis-full ">
        {" "}
        {!user && (
          <div className="w-full  ">
            <img
              src="https://firebasestorage.googleapis.com/v0/b/idesim-client.appspot.com/o/thumbnails%2Fasset_for_web%2Flogin_required.png?alt=media&token=0266018f-dc2d-44a2-b6af-47f6d3b61127"
              className={`${isLoaded ? "" : "hidden"}`}
              onLoad={() => {
                setIsLoaded(true);
              }}
              alt="login_required_illustration"
            />
            <Link to="/login" state={{ from: location.pathname }}>
              <div className="flex items-center gap-1">
                <BsShieldFillExclamation className="text-warning" />
                <p className="text-med">
                  Vui lòng <span className="text-blue-500">Đăng nhập</span> để
                  xem video và viết bình luận
                </p>
              </div>
            </Link>

            {!isLoaded && (
              <div className="flex justify-center">
                <SpinnerLight />
              </div>
            )}
          </div>
        )}
        <div className="mt-5 text-headline5 font-600">
          {lessonName && <p>{lessonName}</p>}
        </div>
        {lessonUrl && user && (
          <VideoPlayer
            url={lessonUrl}
            userEmail={user.email}
            userName={user.displayName}
          />
        )}
        <div
          onClick={() => {
            setIsCourseListOpen(true);
          }}
          className="w-full cursor-pointer mt-5 flex items-center lg:hidden justify-center gap-3 p-2 bg-dark3 rounded-xl"
        >
          <MdOutlineMenuOpen />
          <p className="text-caption">Mở danh sách bài giảng</p>
        </div>
        <Discuss
          courseId={courseIdentifier}
          lessonId={lessonIdentifier}
          sectionId={sectionIdentifier}
          course={course && course[0]}
          sections={sections}
          comments={comment}
          loading={isPending}
          error={error}
        />
      </div>
      <div className="hidden lg:mt-36 bg-dark3 lg:h-[870px] lg:overflow-y-scroll lg:px-2 lg:scrollbar lg:block lg;absolute lg:top-0 lg:right-0">
        {course &&
          course.map((course) => (
            <div key={course.id}>
              {course.courseContent.map((courseContent) => (
                <div key={courseContent.sectionNumber}>
                  {" "}
                  <CourseContent
                    payload={courseContent}
                    eTitle={course.eTitle}
                  />
                </div>
              ))}
            </div>
          ))}
      </div>
      <div
        className={`absolute top-0 right-0 w-full over-flow-hidden h-screen ${
          isCourseListOpen ? "translate-x-0" : "-translate-x-full"
        } transition-all ease-out duration-300 mt-20 bg-dark3  overflow-y-scroll px-2 scrollbar lg:hidden`}
      >
        <div
          onClick={() => {
            setIsCourseListOpen(false);
          }}
          className="w-full mt-5 sticky cursor-pointer top-0 flex items-center lg:hidden justify-center gap-3 p-2 bg-dark3 "
        >
          <p className="text-caption ">Đóng danh sách bài giảng</p>
          <MdOutlineMenuOpen />
        </div>
        {course &&
          course.map((course) => (
            <div key={course.id}>
              {course.courseContent.map((courseContent) => (
                <div key={courseContent.sectionNumber}>
                  {" "}
                  <CourseContent
                    payload={courseContent}
                    eTitle={course.eTitle}
                  />
                </div>
              ))}
            </div>
          ))}
      </div>
    </div>
  );
}

export default LearningArea;
