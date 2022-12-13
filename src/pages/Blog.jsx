import React from "react";
import SelectInput from "../components/form/SelectInput";
import SearchInput from "../components/form/SearchInput";
import PostCard from "../components/card/PostCard";
function Blog() {
  return (
    <div className=" max-w-[600px] mx-auto p-3 mt-20 z-40">
      <h1 className="text-center font-600 mb-10 text-headline4">Blog</h1>
      <div>
        <div className="flex items-center justify-center gap-5">
          <SelectInput />
          <SelectInput />
        </div>
        <div className="mt-2">
          <SearchInput />
        </div>
      </div>
      <div>
        <PostCard />
      </div>
    </div>
  );
}

export default Blog;
