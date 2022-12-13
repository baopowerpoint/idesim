import React from "react";

function PostList({ posts }) {
  return (
    <div className="overflow-x-auto relative shadow-md rounded-lg border-dark4 border">
      <table className="w-full text-caption2 text-left text-gray-500 ">
        <thead className="text-caption text-light3  bg-dark3">
          <tr>
            <th scope="col" className="py-3 px-6">
              Title
            </th>
            <th scope="col" className="py-3 px-6">
              views
            </th>
            <th scope="col" className="py-3 px-6">
              likes
            </th>

            <th scope="col" className="py-3 px-6">
              Action
            </th>
          </tr>
        </thead>
        <tbody>
          {posts &&
            posts.map((post) => (
              <tr className="bg-dark3 whitespace-nowrap ">
                <th scope="row" className="py-4 px-6 font-500 text-light3 ">
                  {post.title}
                </th>
                <td className="py-4 px-6">{post.views}</td>
                <td className="py-4 px-6">
                  {post.likes ? post.likes.length : "0"}
                </td>

                <td className="flex items-center py-4 px-6 space-x-3">
                  <button className="font-500 text-light4 bg-primary px-3 py-1/2 rounded-lg">
                    Edit
                  </button>
                  <button className="font-500 text-light3 bg-critical dark:text-red-500 px-3 py-1/2 rounded-lg">
                    Remove
                  </button>
                </td>
              </tr>
            ))}
        </tbody>
      </table>
    </div>
  );
}

export default PostList;
