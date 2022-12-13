import React from "react";
import { Link } from "react-router-dom";
import BadgeWithIcon from "../badge/BadgeWithIcon";

function PostCard() {
  return (
    <Link to="/blogs/huong-dan-su-dung-merge">
      <div className="w-full rounded-lg bg-dark3 border p-5 border-dark4 mt-10">
        <div className="flex items-center justify-between">
          <div className="flex text-caption gap-3 items-center  ">
            <img
              src="https://images.unsplash.com/flagged/photo-1573740144655-bbb6e88fb18a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80"
              className="w-[40px] h-[40px] object-cover rounded-xl"
              alt="userPost"
            />
            <p className="font-700 text-body2">Tran Bao</p>
          </div>
          <div className="flex items-start gap-1">
            <BadgeWithIcon type="comment" />
            <BadgeWithIcon type="reaction" />
          </div>
        </div>
        <div>
          <p className="mt-5 font-700 text-headline6">
            Hướng dẫn cách sử dụng merge trong powerpoint
          </p>
          <p className="mt-5 font-400 text-body2">
            Trong bài viết lần này, mình sẽ hướng dẫn các bạn cách sử dụng tính
            năng merge trong powerpoint
          </p>
        </div>
        <div className="flex flex-grow-0">
          <div className="flex items-center gap-1 mt-2">
            <BadgeWithIcon type="date" />
            <BadgeWithIcon type="views" />
          </div>
        </div>
      </div>
    </Link>
  );
}

export default PostCard;
