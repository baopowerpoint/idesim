import React from "react";
import { Link } from "react-router-dom";
import { useParams } from "react-router-dom";

function CourseContent({ payload, eTitle }) {
  const { id } = useParams();

  return (
    <div className="mt-5">
      <div className="bg-dark3 border border-primary  mt-5 p-3 rounded-2xl text-primary text-headline5 font-700">
        Section {payload.sectionNumber}{" "}
        <span className="text-headline6 text-primary font-600">
          {payload.sectionTitle}
        </span>
      </div>
      {payload.sectionContent &&
        payload.sectionContent.map((lessonContent) => (
          <Link
            key={lessonContent.lessonId}
            to={`/courses/${eTitle ? eTitle.replace(/\s+/g, "-") : undefined}/${
              payload.sectionNumber
            }/${lessonContent.lessonId}`}
          >
            <div
              className={`p-5 flex  items-center gap-5 ${
                id == lessonContent.lessonId ? "bg-primary" : "bg-dark2"
              } rounded-2xl border border-dark3 mt-3`}
            >
              <p
                className={`text-headline4 shrink-0 whitespace-nowrap w-[70px] h-[70px] rounded-full ${
                  id == lessonContent.lessonId ? "bg-blue-500" : "bg-dark2"
                } flex items-center justify-center`}
              >
                {lessonContent.lessonNumber < 10
                  ? `0${lessonContent.lessonNumber}`
                  : lessonContent.lessonNumber}
              </p>
              <div>
                <p className="text-body font-400">
                  {lessonContent.lessonTitle}
                </p>
                <p className="text-body2 font-400 mt-2 text-med">
                  {lessonContent.lessonRunTime}
                </p>
              </div>
            </div>
          </Link>
        ))}
    </div>
  );
}

export default CourseContent;
