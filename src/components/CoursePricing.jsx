import React from "react";
import Calendar from "../imgs/pngs/calendar.png";
import { BsCheck2 } from "react-icons/bs";
import Button from "./Button";
import ChoosePlanButton from "./button/ChoosePlanButton";
import PricingCard from "./card/PricingCard";
function CoursePricing() {
  return (
    <div className="mt-10 text-center ">
      <h1 className="text-headline4  font-700">
        Tìm một sự lựa chọn phù hợp với bạn!
      </h1>
      <p className="my-5 font-500">
        Quá trình thanh toán được diễn ra tự động chỉ với một lần nhấp chuột.
        Bạn sẽ không phải chờ đợi và toàn bộ nội dung khoá học sẽ được mở khoá
        sau khi thanh toán hoàn tất
      </p>
      <div className="flex justify-center gap-5">
        <button className="py-1 text-headline6 font-600 border-b-4 border-b-primary disabled:border-b-med disabled:text-med">
          Cá nhân
        </button>
        {/* <button
          disabled
          className="py-1 text-headline6 font-600 border-b-4 border-b-primary disabled:border-b-med disabled:text-med"
        >
          Nhóm
        </button> */}
      </div>
      <div className="grid grid-flow-row md:grid-cols-2 gap-4">
        {" "}
        <div className="max-w-[300px] mx-auto mt-5">
          <PricingCard term="basic" />
        </div>
        <div className="max-w-[300px] mx-auto mt-5">
          <PricingCard term="popular" />
        </div>
        <div className="max-w-[300px] mx-auto mt-5">
          <PricingCard term="anual" />
        </div>
      </div>

      {/* <div className=" max-w-[370px]  mx-auto bg-gradient-to-r w-full rounded-lg mt-10 from-dark2 to-dark4 p-5 text-headline6 text-light font-600">
        <div className="flex justify-between">
          <h1>Trọn đời</h1>
          <h1 className=""></h1>
        </div>
        <img className="w-full" src={Calendar} />
        <ul className="font-500 text-left my-3">
          <li>
            <div className="flex gap-4 items-center">
              <BsCheck2 className="shrink-0" />
              <p className="text-body1">Toàn quyền truy cập vào khoá học</p>
            </div>
          </li>
          <li>
            <div className="flex gap-4 items-center">
              <BsCheck2 className="shrink-0" />
              <p className="text-body1">Học mọi lúc mọi nơi</p>
            </div>
          </li>
          <li>
            <div className="flex gap-4 items-center">
              <BsCheck2 className="shrink-0" />
              <p className="text-body1">Video ngắn gọn nhưng đủ ý, dễ hiểu</p>
            </div>
          </li>
          <li>
            <div className="flex gap-4 items-center">
              <BsCheck2 className="shrink-0" />
              <p className="text-body1">Hỗ trợ tận tình</p>
            </div>
          </li>
          <li>
            <div className="flex gap-4 items-center">
              <BsCheck2 className="shrink-0" />
              <p className="text-body1">Sở hữu trọn đời</p>
            </div>
          </li>
        </ul>
        <Button color="primary" title="Thanh toán" />
      </div> */}
    </div>
  );
}

export default CoursePricing;
