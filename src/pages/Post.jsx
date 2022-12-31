import React, { useEffect, useState } from "react";
import PostArticle from "../components/post/PostArticle";
import PostLikeAndComment from "../components/post/PostLikeAndComment";
import { useCollection } from "../hooks/useCollection";
import { useParams } from "react-router-dom";
function Post() {
  const { documents: posts, error, isPending } = useCollection("posts");
  const [post, setPost] = useState(null);
  const { title } = useParams();
  useEffect(() => {
    if (posts) {
      const res = posts.filter((post) => post.title == "test");
      setPost(res);
    }
  }, [posts]);
  return (
    <div className=" max-w-[600px] mx-auto p-3 z-40 ">
      {post &&
        post.map((post) => (
          <div>
            <PostArticle />
            <PostLikeAndComment comments={post.comments} />
          </div>
        ))}
    </div>
  );
}

export default Post;
