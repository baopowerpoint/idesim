import React from "react";
import { useState } from "react";
import { useFirestore } from "../../hooks/useFirestore";
import { useAuthContext } from "../../hooks/useAuthContext";

function AddBlogPostForm() {
  const { user } = useAuthContext();
  const [formContent, setFormContent] = useState([]);
  const [element, setElement] = useState("text");
  const [title, setTitle] = useState("");
  const { addDocument, response } = useFirestore("posts");
  const handleSelectChange = (id, e) => {
    const index = formContent.findIndex((element) => element.id === id);
    let newArr = [...formContent];
    console.log(newArr, index);
    newArr[index].type = e.target.value;
    setFormContent(newArr);
  };
  const handleInputChange = (id, e) => {
    const index = formContent.findIndex((element) => element.id === id);
    let newArr = [...formContent];
    console.log(newArr, index);
    newArr[index].content = e.target.value;
    setFormContent(newArr);
  };

  const handleAddElement = () => {
    const field = {
      name: `element ${formContent.length}`,

      type: element,
      id: Math.random(),
      content: "",
    };

    setFormContent([...formContent, field]);
  };
  const handlePost = () => {
    const confirmKey = prompt("Are you sure to post ? press any key");
    if (confirmKey && user) {
      console.log("run");
      addDocument(
        { payload: formContent, title, views: 0, likes: [], comments: [] },
        user.uid
      );
    } else {
      return;
    }
  };
  console.log(response);
  return (
    <div>
      <div className="my-5 text-headline5 font-600">
        <p>Add post</p>
      </div>
      <div className="bg-dark3 border border-dark4 rounded-lg ">
        <div className="m-3">
          <label>title</label>
          <input
            onChange={(e) => {
              setTitle(e.target.value);
            }}
            type="text"
            className="bg-dark3 border block border-dark4 rounded-lg"
          />
        </div>
        <div>
          {formContent &&
            formContent.map((element, index) => (
              <div key={element.id}>
                <div className="m-3 flex items-center gap-3">
                  <div>
                    <select
                      onChange={(e) => {
                        handleSelectChange(element.id, e);
                      }}
                      className="bg-dark3 border-dark4 rounded-lg"
                    >
                      <option value="text">text</option>
                      <option value="image">image</option>
                      <option value="link">link</option>
                    </select>
                  </div>
                  <input
                    onChange={(e) => {
                      handleInputChange(element.id, e);
                    }}
                    type="text"
                    className="bg-dark3 border block border-dark4 rounded-lg"
                  />
                </div>
              </div>
            ))}
        </div>
        <button
          onClick={handleAddElement}
          className="bg-primary block  m-3 px-4 py-1 rounded-lg font-500"
        >
          Add element
        </button>
        <button
          onClick={handlePost}
          className="bg-primary block  m-3 px-4 py-1 rounded-lg font-500"
        >
          Post
        </button>
      </div>
    </div>
  );
}

export default AddBlogPostForm;
