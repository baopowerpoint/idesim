import React from "react";

function SearchBar() {
  return (
    <div>
      <form action="">
        <input
          type="text"
          className="block mx-auto w-2/3 bg-dark border-b-[1px] border-b-dark4"
          placeholder="Nhập để tìm kiếm..."
        />
      </form>
    </div>
  );
}

export default SearchBar;
