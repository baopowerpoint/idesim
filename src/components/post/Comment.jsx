import React from "react";
import { useCollection } from "../../hooks/useCollection";
import moment from "moment/moment";

function Comment({ commentPayload }) {
  return (
    <div className="mt-5 w-full">
      {(commentPayload || commentPayload.length > 0) && (
        <div className="flex flex-1 items-start gap-3 ">
          <img
            src={commentPayload.userImgUrl}
            className="w-12 h-12 rounded-full my-2"
            alt=""
          />
          <div className="flex-auto w-full max-w-[600px] ">
            {" "}
            <div className="pr-10 bg-dark3 rounded-2xl pl-3 py-2">
              {" "}
              <p className="text-light inline text-caption2 font-600 ">
                {commentPayload.userName}
              </p>{" "}
              <p className="text-caption inline text-med">
                • {moment(commentPayload.createdAt).fromNow(true)} ago
              </p>
              <div className="w-full">
                <p className="text-caption break-all">
                  {commentPayload.content}
                </p>
              </div>
            </div>{" "}
          </div>
        </div>
      )}
    </div>
  );
}

export default Comment;
