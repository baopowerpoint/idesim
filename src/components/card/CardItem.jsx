import React from "react";
import { useCollection } from "../../hooks/useCollection";
import { AiOutlineDownload, AiOutlineHeart, AiFillHeart } from "react-icons/ai";
import { useState } from "react";
import { useAuthContext } from "../../hooks/useAuthContext";
import { useEffect } from "react";

function CardItem({
  imgUrl,
  price,
  productId,
  title,
  userPosted,
  itemDownloadUrl,
  likes,
  onLike,
  onDislike,
  onDownload,
  requireLogin,
  downloads,
}) {
  const [currentUser, setCurrentUser] = useState(null);
  const { user: owner } = useAuthContext();
  const { documents: users } = useCollection("users");

  useEffect(() => {
    if (users && owner) {
      setCurrentUser(users.find((user) => user.id === owner.uid));
    }
  }, [users, owner, currentUser]);
  return (
    <div className="">
      <div className=" max-w-[300px] h-[400px] mt-5 bg-gradient-to-r from-dark2 to-dark4 rounded-lg pb-5 ">
        <img
          src={imgUrl}
          className="rounded-t-lg w-full h-[250px] object-cover"
          alt=""
        />
        <div className="p-5 h-[150px] flex flex-col justify-between ">
          <div className="flex justify-between gap-5 items-start mt-2 ">
            <h1 className="title font-700 text-left text-body ">{title}</h1>
            <span
              className={`text-caption whitespace-nowrap mt-1 font-500 ${
                price == 0 ? "text-light bg-free" : "bg-primary"
              } px-2 py-0.5 rounded-full`}
            >
              {price == 0 ? "Miễn phí" : price}
            </span>
          </div>
          <div className="flex justify-between gap-4 items-center mt-2">
            <h1 className="text-left font-600 text-caption text-med">
              Người đăng: {userPosted}
            </h1>
            <div className="text-headline6 flex justify-start items-center gap-3">
              <div className="flex items-center gap-1 bg-dark3 p-1 rounded-lg border border-dark4">
                {" "}
                {!currentUser && (
                  <button className=" ">
                    <AiOutlineHeart
                      onClick={requireLogin}
                      className="text-gray-100"
                    />
                  </button>
                )}
                {currentUser && productId && (
                  <button className=" ">
                    {currentUser.likes.includes(productId) ? (
                      <AiFillHeart
                        onClick={onDislike}
                        className="text-gray-100"
                      />
                    ) : (
                      <AiOutlineHeart
                        onClick={onLike}
                        className="text-gray-100"
                      />
                    )}
                  </button>
                )}
                <span className="text-light text-[14px]">{likes}</span>
              </div>
              <div className="flex items-center bg-dark3 p-1 rounded-lg border border-dark4">
                {" "}
                <a
                  onClick={onDownload}
                  target="_blank"
                  className=""
                  href={itemDownloadUrl}
                >
                  <AiOutlineDownload className="" />
                </a>
                <span className="text-[14px] ">{downloads}</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CardItem;
