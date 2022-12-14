import React from "react";
import BadgeWithIcon from "../badge/BadgeWithIcon";

function PostArticle({ payload }) {
  return (
    <div className=" max-w-[600px] mx-auto p-3 mt-20 z-40 rounded-lg border border-dark4 bg-dark3">
      <div className="flex justify-between items-center ">
        <div className="flex items-center gap-3">
          <img
            src="https://images.unsplash.com/photo-1670681160553-7695645afc40?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwzOHx8fGVufDB8fHx8&auto=format&fit=crop&w=500&q=60"
            className="w-12 h-12 rounded-xl"
            alt=""
          />
          <div>
            {" "}
            <p className="text-light font-600 ">Trần Bảo</p>
            <p className="text-caption font-400 text-med"> 5 giờ trước</p>
          </div>
        </div>
        <div>
          <BadgeWithIcon type="views" />
        </div>
      </div>
      <div className="bg-dark4 rounded-lg p-2 mt-5">
        <p className="text-headline6 font-500 ">
          Hướng dẫn sử dụng merge trong powerpoint
        </p>
      </div>
      <div className=" mt-3">
        <p className="text-body font-400 ">
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nemo
          exercitationem aut cumque vel impedit molestiae aperiam ad doloribus
          obcaecati amet!
        </p>
        <img
          src="https://plus.unsplash.com/premium_photo-1663013625960-b54f861e4074?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw0M3x8fGVufDB8fHx8&auto=format&fit=crop&w=500&q=60"
          className="rounded-lg mt-2 w-full"
          alt=""
        />
        <p className="text-body font-400 ">
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nemo
          exercitationem aut cumque vel impedit molestiae aperiam ad doloribus
          obcaecati amet!
        </p>
        <img
          src="https://plus.unsplash.com/premium_photo-1663013625960-b54f861e4074?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw0M3x8fGVufDB8fHx8&auto=format&fit=crop&w=500&q=60"
          className="rounded-lg mt-2 w-full"
          alt=""
        />
      </div>
    </div>
  );
}

export default PostArticle;
