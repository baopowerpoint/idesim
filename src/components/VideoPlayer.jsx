import Vimeo from "@u-wave/react-vimeo";
import React, { useEffect, useState, useRef } from "react";
import { BsArrowsFullscreen } from "react-icons/bs";

function VideoPlayer({ url, userEmail, userName, onFullScreen }) {
  const [email, setEmail] = useState(userEmail);
  const _ref = useRef(null);

  const handleFullScreen = () => {
    let element = document.getElementById("video-container");
    const rfs =
      element.requestFullscreen ||
      element.webkitRequestFullScreen ||
      element.mozRequestFullScreen ||
      element.msRequestFullscreen;
    rfs.call(element);
  };
  useEffect(() => {
    const timeout = setTimeout(() => {
      {
        if (email == userEmail) {
          setEmail(userName);

          addUserLayer(email);
          return;
        }
        if (email == userName) {
          setEmail(userEmail);
          addUserLayer(email);
          return;
        }
      }
    }, 10000);
    return () => clearTimeout(timeout);
  }, [email]);
  const addUserLayer = (u) => {
    const user = document.createElement("div");

    user.className =
      "w-full h-fit absolute top-1/2 left-1/2 opacity-30 -translate-x-1/2";
    user.innerText = u;
    if (_ref.current.children.length == 3) {
      _ref.current.removeChild(_ref.current.children[2]);
    }
    _ref.current.appendChild(user);
  };
  return (
    <div id="video-container">
      <div ref={_ref} className="w-4/5 lg:w-full mx-auto relative">
        <Vimeo video={url} responsive showTitle={false} autoplay />
        <div
          onClick={handleFullScreen}
          className="w-full cursor-pointer mt-5 flex items-center  justify-center gap-3 p-2 bg-dark3 rounded-xl"
        >
          <BsArrowsFullscreen />
          <p className="text-caption">Chế độ toàn màn hình</p>
        </div>
      </div>
    </div>
  );
}

export default VideoPlayer;
