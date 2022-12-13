import React from "react";
import Calendar from "../../imgs/pngs/calendar.png";

function PricingCard({ term }) {
  return (
    <div className="w-full relative max-w-sm p-4  border rounded-lg shadow-md sm:p-8 bg-gray-800 border-gray-700">
      {term === "popular" && (
        <h1 className="bg-dark3 absolute top-0 right-1/2 translate-x-1/2 border border-gray-600 mx-auto rounded-b-lg border-t-0 text-warning w-1/2 font-600 mb-5">
          Best choice
        </h1>
      )}
      <h5 className="mb-4 text-headline5 font-600 text-gray-400">
        {term === "basic"
          ? "Cơ bản"
          : term === "popular"
          ? "Tiêu chuẩn"
          : "Gói năm"}
      </h5>
      <img className="w-full" src={Calendar} />
      <div className="flex items-baseline text-white">
        <span className="text-headline4 font-extrabold tracking-tight">
          {term === "basic"
            ? "249.000đ"
            : term === "popular"
            ? "299.000đ"
            : "1.990.000đ"}
        </span>
        <span className="ml-1 text-xl font-500 text-gray-400">/tháng</span>
      </div>

      <ul role="list" className="space-y-5 my-7 text-left">
        <li className="flex space-x-3">
          <svg
            aria-hidden="true"
            className="flex-shrink-0 w-5 h-5 text-blue-500"
            fill="currentColor"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
          >
            <title>Check icon</title>
            <path
              fillRule="evenodd"
              d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
              clipRule="evenodd"
            ></path>
          </svg>
          <span className="text-body2 font-500 leading-tight text-gray-400">
            Toàn quyền truy cập vào khoá học
          </span>
        </li>
        <li className="flex space-x-3">
          <svg
            aria-hidden="true"
            className="flex-shrink-0 w-5 h-5 text-blue-500"
            fill="currentColor"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
          >
            <title>Check icon</title>
            <path
              fillRule="evenodd"
              d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
              clipRule="evenodd"
            ></path>
          </svg>
          <span className="text-body2 font-500 leading-tight text-gray-400">
            Học mọi lúc mọi nơi
          </span>
        </li>
        <li className="flex text-left space-x-3">
          <svg
            aria-hidden="true"
            className="flex-shrink-0 w-5 h-5 text-blue-500"
            fill="currentColor"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
          >
            <title>Check icon</title>
            <path
              fillRule="evenodd"
              d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
              clipRule="evenodd"
            ></path>
          </svg>
          <span className="text-body2 font-500 leading-tight text-gray-400">
            Video ngắn gọn nhưng đủ ý, dễ hiểu
          </span>
        </li>
        {(term === "basic" || term === "popular") && (
          <li className={`flex space-x-3  decoration-gray-500  `}>
            <svg
              aria-hidden="true"
              className={`flex-shrink-0 w-5 h-5 text-blue-500 `}
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <title>Check icon</title>
              <path
                fillRule="evenodd"
                d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                clipRule="evenodd"
              ></path>
            </svg>
            <span className="text-body2 font-500 leading-tight text-gray-400">
              Hỗ trợ cài đặt office 365
            </span>
          </li>
        )}
        <li
          className={`flex space-x-3 ${
            term === "basic" ? "line-through decoration-gray-500 " : ""
          } `}
        >
          <svg
            aria-hidden="true"
            className={`flex-shrink-0 w-5 h-5 ${
              term === "basic" ? "text-gray-400" : "text-blue-500"
            } `}
            fill="currentColor"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
          >
            <title>Check icon</title>
            <path
              fillRule="evenodd"
              d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
              clipRule="evenodd"
            ></path>
          </svg>
          <span className="text-body2 font-500 leading-tight text-gray-400">
            Mở khóa templates premium
          </span>
        </li>
        <li
          className={`flex space-x-3 ${
            term === "basic" ? "line-through decoration-gray-500 " : ""
          } `}
        >
          <svg
            aria-hidden="true"
            className={`flex-shrink-0 w-5 h-5 ${
              term === "basic" ? "text-gray-400" : "text-blue-500"
            } `}
            fill="currentColor"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
          >
            <title>Check icon</title>
            <path
              fillRule="evenodd"
              d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
              clipRule="evenodd"
            ></path>
          </svg>
          <span className="text-body2 font-500 leading-tight text-gray-400">
            Mở khóa kho icon premium
          </span>
        </li>
        <li
          className={`flex space-x-3 ${
            term === "basic" ? "line-through decoration-gray-500 " : ""
          } `}
        >
          <svg
            aria-hidden="true"
            className={`flex-shrink-0 w-5 h-5 ${
              term === "basic" ? "text-gray-400" : "text-blue-500"
            } `}
            fill="currentColor"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
          >
            <title>Check icon</title>
            <path
              fillRule="evenodd"
              d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
              clipRule="evenodd"
            ></path>
          </svg>
          <span className="text-body2 font-500 leading-tight text-gray-400">
            Mở khóa kho font premium
          </span>
        </li>
        <li
          className={`flex space-x-3 ${
            term === "anual" ? " " : "line-through decoration-gray-500"
          } `}
        >
          <svg
            aria-hidden="true"
            className={`flex-shrink-0 w-5 h-5 ${
              term === "anual" ? "text-blue-500" : "text-gray-400"
            } `}
            fill="currentColor"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
          >
            <title>Check icon</title>
            <path
              fillRule="evenodd"
              d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
              clipRule="evenodd"
            ></path>
          </svg>
          <span className="text-body2 font-500 leading-tight text-gray-400">
            Sở hữu office 365 bản quyền
          </span>
        </li>
        <li
          className={`flex space-x-3 ${
            term === "anual" ? " " : "line-through decoration-gray-500"
          } `}
        >
          <svg
            aria-hidden="true"
            className={`flex-shrink-0 w-5 h-5 ${
              term === "anual" ? "text-blue-500" : "text-gray-400"
            } `}
            fill="currentColor"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
          >
            <title>Check icon</title>
            <path
              fillRule="evenodd"
              d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
              clipRule="evenodd"
            ></path>
          </svg>
          <span className="text-body2 font-500 leading-tight text-gray-400">
            Tiết kiệm tới 1.600.000 VNĐ
          </span>
        </li>
      </ul>
      <button
        type="button"
        className="text-white font-600  bg-blue-600 hover:bg-blue-700 focus:ring-4 focus:outline-none focus:ring-blue-200 dark:focus:ring-blue-900 font-medium rounded-lg text-sm px-5 py-2.5 inline-flex justify-center w-full text-center"
      >
        Nâng cấp
      </button>
    </div>
  );
}

export default PricingCard;
