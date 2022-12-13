import React from "react";
import { Select, Label } from "flowbite-react";

function SelectInput() {
  return (
    <div id="select" className=" w-full">
      <select
        id="countries"
        className="bg-dark3 border border-dark4  text-caption rounded-lg  block w-full "
      >
        <option>Chủ đề</option>
      </select>
    </div>
  );
}

export default SelectInput;
