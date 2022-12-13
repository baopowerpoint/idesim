import React from "react";

function Discuss() {
  return (
    <div className="mt-10">
      <p className="text-headline5 font-600 ">Bình luận</p>
      <div className="rounded-lg flex my-10 items-center gap-2 border-[1px] border-dark4 p-2">
        <img
          src="/img/avatar.png"
          alt=""
          className="w-[50px] h-[50px] object-cover rounded-full border-[1px] border-med"
        />
        <form>
          <input
            type="text"
            placeholder="Để lại bình luận"
            className="bg-dark  w-full focus:outline-none"
          />
        </form>
      </div>
    </div>
  );
}

export default Discuss;
