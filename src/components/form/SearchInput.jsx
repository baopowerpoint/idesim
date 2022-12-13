import React from "react";

function SearchInput({ onInputChange }) {
  return (
    <div>
      <form>
        <div className="relative w-full">
          <input
            type="search"
            id="search-dropdown"
            className="bg-dark3 border border-dark4  text-caption rounded-lg  block w-full   "
            placeholder="Tìm kiếm chủ đề"
            required
            onChange={(e) => {
              onInputChange(e.target.value);
            }}
          />
          <button
            type="submit"
            className="absolute top-0 right-0 p-2.5 text-sm font-500 text-med rounded-lg  "
          >
            <svg
              aria-hidden="true"
              className="w-5 h-5"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
              ></path>
            </svg>
            <span className="sr-only">Search</span>
          </button>
        </div>
      </form>
    </div>
  );
}

export default SearchInput;
