import React from "react";
import PostArticle from "../components/post/PostArticle";
import PostLikeAndComment from "../components/post/PostLikeAndComment";

function Post() {
  return (
    <div className=" max-w-[600px] mx-auto p-3 z-40 ">
      <PostArticle />
      <PostLikeAndComment />
    </div>
  );
}

export default Post;
