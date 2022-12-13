import React from "react";
import { useCycle } from "framer-motion";
import { Link } from "react-router-dom";

function AvatarComp({ onLogout, displayName, email, imgUrl }) {
  const [isOpen, toggleOpen] = useCycle(false, true);

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
        <div className="py-3 px-4 text-body2 text-white">
          <div>{displayName}</div>
          <div className="font-medium truncate">{email}</div>
        </div>
        <ul
          className="py-1 text-body2 text-gray-200"
          aria-labelledby="avatarButton"
        >
          <li>
            <a
              href="#"
              className="block py-2 px-4 hover:bg-gray-600 dark:hover:text-white"
            >
              Mục yêu thích
            </a>
          </li>
          <li>
            <a
              href="#"
              className="block py-2 px-4 hover:bg-gray-600 dark:hover:text-white"
            >
              Khóa học của tôi
            </a>
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
