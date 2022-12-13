import React from "react";

function Comment() {
  return (
    <div className="mt-5">
      <div className="text-headline6 font-500 ">Comment</div>
      <div>
        <div className="flex mt-5 rounded-lg border border-dark4 p-5">
          <div className="flex items-center gap-3">
            <img
              src="https://images.unsplash.com/photo-1670681160553-7695645afc40?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwzOHx8fGVufDB8fHx8&auto=format&fit=crop&w=500&q=60"
              className="w-12 h-12 rounded-full"
              alt=""
            />
            <div className="">
              {" "}
              <p className="text-light font-600 ">Trần Bảo</p>
              <span className="">test!!!</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Comment;
