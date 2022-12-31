import React from "react";
import { Link } from "react-router-dom";
import BadgeWithIcon from "../badge/BadgeWithIcon";
import { useCollection } from "../../hooks/useCollection";
import { useFirestore } from "../../hooks/useFirestore";
import moment from "moment/moment";
import SkeletonWithPost from "../skeleton/SkeletonWithPost";

function PostCard() {
  const { updateDocument } = useFirestore("posts");
  const { documents: posts, error, isPending } = useCollection("posts");
  const handleViewsIncrement = (id) => {
    if (posts) {
      const res = posts.filter((post) => post.id == id);
      console.log(res);
      const currentViews = res[0].views;
      console.log(currentViews);
      updateDocument(id, { views: parseInt(currentViews) + 1 });
    }
  };
  return (
    <div>
      {isPending && (
        <div className="mt-10">
          <SkeletonWithPost />
          <SkeletonWithPost />
        </div>
      )}
      {posts &&
        posts.map((post) => (
          <Link
            onClick={() => {
              handleViewsIncrement(post.id);
            }}
            to={`/blogs/${post.linkTitle.replace(/\s+/g, "-")}`}
          >
            <div className="w-full rounded-lg bg-dark3 border p-5 border-dark4 mt-10">
              <div className="flex items-center justify-between">
                <div className="flex text-caption gap-3 items-center  ">
                  <img
                    src="https://firebasestorage.googleapis.com/v0/b/idesim-client.appspot.com/o/avatar%2F3Sn2kPZxalQTLtP4l90JRJyfEWA3%2F132464471_693697181293909_1048832398094905689_n.jpg?alt=media&token=c4c07201-9ab2-4591-a1b2-4a9ebc98d7ca"
                    className="w-[40px] h-[40px] object-cover rounded-xl"
                    alt="userPost"
                  />
                  <p className="font-700 text-body2">Tran Bao</p>
                </div>
                <div className="flex items-start gap-1">
                  <BadgeWithIcon
                    type="comment"
                    value={post.comments ? post.comments.length : 0}
                  />
                  <BadgeWithIcon
                    type="reaction"
                    value={post.likes ? post.likes.length : 0}
                  />
                </div>
              </div>
              <div>
                <p className="mt-5 font-700 text-headline6">
                  Hướng dẫn cách sử dụng merge trong powerpoint
                </p>
                <p className="mt-5 font-400 text-body2">
                  Trong bài viết lần này, mình sẽ hướng dẫn các bạn cách sử dụng
                  tính năng merge trong powerpoint
                </p>
              </div>
              <div className="flex flex-grow-0">
                <div className="flex items-center gap-1 mt-2">
                  <BadgeWithIcon
                    type="date"
                    value={moment(
                      post.createdAt.toDate().toLocaleDateString(),
                      "DD MM YYYY"
                    ).fromNow()}
                  />
                  <BadgeWithIcon type="views" value={post.views} />
                </div>
              </div>
            </div>
          </Link>
        ))}
    </div>
  );
}

export default PostCard;
