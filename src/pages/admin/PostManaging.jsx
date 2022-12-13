import React from "react";
import AddBlogPostForm from "../../components/form/AddBlogPostForm";
import SearchInput from "../../components/form/SearchInput";
import PostList from "../../components/list/PostList";
import { useCollection } from "../../hooks/useCollection";
import SkeletonWithList from "../../components/skeleton/SkeletonWithList";

function PostManaging() {
  const { documents: posts, error, isPending } = useCollection("posts");
  return (
    <div className="mt-20 max-w-[800px] mx-auto px-5">
      <h1 className="text-center text-headline4 font-700 ">Quản lý bài viết</h1>
      <div className=" mt-10 sm:flex sm:gap-3 sm:items-center ">
        <div className="basis-10/12 ">
          <SearchInput />
        </div>
      </div>
      <div>
        <AddBlogPostForm />
      </div>
      <div className="mt-5">
        {posts && <PostList posts={posts} />}
        {isPending && <SkeletonWithList />}
      </div>
    </div>
  );
}

export default PostManaging;
