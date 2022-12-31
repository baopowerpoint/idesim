import React from "react";
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
    </div>
  );
}

export default CoursePricing;
