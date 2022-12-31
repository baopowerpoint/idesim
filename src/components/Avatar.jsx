import React, { useEffect, useState } from "react";
import { useCycle } from "framer-motion";
import { Link } from "react-router-dom";
import { useCollection } from "../hooks/useCollection";

function AvatarComp({ onLogout, displayName, uid, imgUrl }) {
  const [isOpen, toggleOpen] = useCycle(false, true);
  const [currentUser, setCurrentUser] = useState(null);
  const { users } = useCollection("users");

  useEffect(() => {
    if (users) {
      const u = users.find((user) => user.uid === uid);
      setCurrentUser(u);
    }
  }, [users]);

  return (
    <div>
      <img
        id="avatarButton"
        onClick={toggleOpen}
        type="button"
        className="w-6 h-6 rounded-full object-cover cursor-pointer"
        src={
          imgUrl
            ? imgUrl
            : "https://upload.wikimedia.org/wikipedia/commons/7/7c/Profile_avatar_placeholder_large.png?20150327203541"
        }
      />

      <div
        onClick={toggleOpen}
        className={`${
          isOpen ? "" : "hidden"
        } absolute top-0 right-0 mt-12  z-10 w-[150px]  rounded divide-y  shadow bg-dark4 divide-gray-600`}
      >
        <Link to="/profile">
          <div className="cursor-pointer py-3 px-4 text-body2 text-white">
            <div>{displayName}</div>
          </div>
        </Link>
        <ul
          className="py-1 text-body2 text-gray-200"
          aria-labelledby="avatarButton"
        >
          <li>
            <Link
              to="/carts"
              className="block py-2 px-4 hover:bg-gray-600 dark:hover:text-white"
            >
              Giỏ hàng
            </Link>
          </li>
          <li>
            <Link
              to="/watch"
              className="block py-2 px-4 hover:bg-gray-600 dark:hover:text-white"
            >
              Xem sau
            </Link>
          </li>
          <li>
            <Link
              to="my-courses"
              className="block py-2 px-4 hover:bg-gray-600 dark:hover:text-white"
            >
              Khóa học của tôi
            </Link>
          </li>
          <li>
            <Link
              to="/settings"
              className="block py-2 px-4 hover:bg-gray-600 dark:hover:text-white"
            >
              Settings
            </Link>
          </li>
        </ul>
        <div className="py-1">
          <button
            onClick={onLogout}
            className="block py-2 px-4 text-body2 font-700 hover:bg-gray-600 text-gray-200 dark:hover:text-white"
          >
            Đăng xuất
          </button>
        </div>
      </div>
    </div>
  );
}

export default AvatarComp;
