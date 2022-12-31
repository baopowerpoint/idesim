import React, { useEffect, useState } from "react";
import { RiSendPlane2Fill } from "react-icons/ri";
import Comment from "./post/Comment";
import { useAuthContext } from "../hooks/useAuthContext";
import { Link, useLocation } from "react-router-dom";
import { BsShieldFillExclamation } from "react-icons/bs";
import { useFirestore } from "../hooks/useFirestore";
import moment from "moment/moment";
import Breaker from "./Breaker";
import SkeletonWithComment from "./skeleton/SkeletonWithComment";

function Discuss({
  lessonId,
  sectionId,
  courseId,
  loading,
  error: err,
  course,
  comments,
}) {
  const { user } = useAuthContext();
  const location = useLocation();
  const { updateDocument, error, isPending } = useFirestore("courses");
  const [newComment, setNewComment] = useState({ content: "", user: null });
  const [isDisabled, setIsDisabled] = useState(true);

  const handleComment = () => {
    let payload = course;
    const sectionIndex = payload.courseContent.findIndex(
      (section) => section.sectionId == sectionId
    );
    const lessonIndex = payload.courseContent[
      sectionIndex
    ].sectionContent.findIndex((lesson) => lesson.lessonId == lessonId);

    const currentComment =
      payload.courseContent[sectionIndex].sectionContent[lessonIndex].comment;

    if (currentComment) {
      const updatedComment = [...currentComment, newComment];
      payload.courseContent[sectionIndex].sectionContent[lessonIndex].comment =
        updatedComment;
    } else {
      const updatedComment = [newComment];
      payload.courseContent[sectionIndex].sectionContent[lessonIndex].comment =
        updatedComment;
    }
    console.log(payload);
    console.log(courseId);
    updateDocument(courseId, { courseContent: payload.courseContent });
    if (error) {
      console.log(error);
    }
    setNewComment({ content: "", user: null });
  };

  useEffect(() => {
    if (newComment.content == "") {
      setIsDisabled(true);

      return;
    } else if (newComment) {
      if (!newComment.content.replace(/\s/g, "").length) {
        setIsDisabled(true);

        return;
      } else {
        setIsDisabled(false);

        return;
      }
    }
  }, [newComment]);
  return (
    <div className="mt-10 bg-dark2 p-2">
      <p className="text-headline6 font-500 ">Bình luận</p>
      {user && (
        <div className="rounded-lg flex my-10 items-center gap-2 border-[1px] border-dark4 p-2">
          <img
            src={
              user.photoURL ||
              "https://www.ucae.es/wp-content/uploads/2021/03/avatar-placeholder.png"
            }
            alt=""
            className="w-[50px] h-[50px] object-cover rounded-full border-[1px] border-med"
          />
          <div className="flex-1">
            {" "}
            <form>
              <input
                value={newComment.content}
                onChange={(e) => {
                  const time = moment().format();
                  setNewComment({
                    userImgUrl: user.photoURL
                      ? user.photoURL
                      : "https://www.ucae.es/wp-content/uploads/2021/03/avatar-placeholder.png",
                    userName: user.displayName,
                    createdAt: time,

                    content: e.target.value,
                  });
                }}
                type="text"
                placeholder="Để lại bình luận"
                className="w-full bg-dark3 rounded-lg border-none transition-all duration-300"
              />
            </form>
          </div>
          {!isDisabled && (
            <button
              onClick={() => {
                handleComment();
              }}
              className="p-2 bg-dark2 text-headline5 rounded-xl border border-dark4"
            >
              <RiSendPlane2Fill
                className={`${!isDisabled ? "text-light3" : "text-med"}`}
              />
            </button>
          )}
          {error && <p>{error}</p>}
        </div>
      )}

      <Breaker />

      {loading && <SkeletonWithComment />}
      {err && <p className="text-critical">{err}</p>}
      {comments &&
        comments.map((comment, idx) => (
          <div key={idx}>
            <Comment commentPayload={comment} />
          </div>
        ))}
      {!comments && (
        <p className="text-med">Hãy là người bình luận đầu tiên!</p>
      )}
    </div>
  );
}

export default Discuss;
