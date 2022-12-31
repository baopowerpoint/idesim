import React, { useEffect, useState } from "react";
import { AiOutlineHeart } from "react-icons/ai";
import { FaRegComment } from "react-icons/fa";
import { RiShareForwardLine } from "react-icons/ri";
import { BsThreeDotsVertical } from "react-icons/bs";
import { RiSendPlane2Fill } from "react-icons/ri";
import DefaultInput from "../form/DefaultInput";
import Comment from "./Comment";
import Breaker from "../Breaker";

function PostLikeAndComment({ payload }) {
  return (
    <div className=" max-w-[600px] mx-auto p-3 mt-5 z-40 rounded-lg border border-dark4 bg-dark3">
      <div>
        {" "}
        <div className="flex justify-between items-center ">
          <div className="flex gap-2 ">
            {" "}
            <button className="p-3 bg-dark2 text-headline5 rounded-xl border border-dark4">
              <AiOutlineHeart />
            </button>
            <button className="p-3 bg-dark2 text-headline5 rounded-xl border border-dark4">
              <FaRegComment />
            </button>
            <button className="p-3 bg-dark2 text-headline5 rounded-xl border border-dark4">
              <RiShareForwardLine />
            </button>
          </div>
          <div className=" ">
            <button className="p-3 bg-dark2 text-headline5 rounded-xl border border-dark4">
              <BsThreeDotsVertical />
            </button>
          </div>
        </div>
        <div className="text-headline6 mt-5 font-500 ">Comment</div>
        <div className="mt-5 flex gap-2 justify-between items-center">
          <img
            src="https://images.unsplash.com/photo-1670681160553-7695645afc40?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwzOHx8fGVufDB8fHx8&auto=format&fit=crop&w=500&q=60"
            className="w-12 h-12 rounded-full object-cover whitespace-nowrap shrink-0"
            alt=""
          />
          <DefaultInput />
          <div className=" ">
            <button className="p-2 bg-dark2 text-headline5 rounded-xl border border-dark4">
              <RiSendPlane2Fill />
            </button>
          </div>
        </div>
        <Breaker />
        {payload &&
          payload.map((post) => (
            <div>
              {" "}
              {post.comments.length > 0 && (
                <Comment commentPayload={post.comments} />
              )}
            </div>
          ))}
        {!payload && (
          <p className="text-med">Hãy là người bình luận đầu tiên!</p>
        )}
      </div>
    </div>
  );
}

export default PostLikeAndComment;
