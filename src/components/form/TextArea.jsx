import React from "react";

function TextArea({ onFieldChange }) {
  return (
    <div>
      <label
        for="message"
        className="block mb-2 text-sm font-medium  text-white"
      >
        Your field
      </label>
      <textarea
        onChange={(e) => {
          onFieldChange(e.target.value);
        }}
        id="message"
        rows="4"
        className="block p-2.5 w-full text-sm  rounded-lg border bg-dark3 border-dark4 placeholder-gray-400 text-white focus:ring-blue-500 focus:border-blue-500"
        placeholder="Write your update field here"
      ></textarea>
    </div>
  );
}

export default TextArea;
