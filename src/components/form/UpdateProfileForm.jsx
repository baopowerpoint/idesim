import { FileInput } from "flowbite-react";
import React from "react";
import Button from "../Button";
import { useAuthContext } from "../../hooks/useAuthContext";
import { useState } from "react";
import { useFirestore } from "../../hooks/useFirestore";
import ToastComp from "../Toast";
import { useEffect } from "react";

function AddProductForm() {
  const [thumbnail, setThumbnail] = useState(null);
  const [thumbnailError, setThumbnailError] = useState(null);
  const { user } = useAuthContext();
  const { updateAvatar, response, progress } = useFirestore("users");
  const [status, setStatus] = useState(null);
  const handleFileChange = (e) => {
    setThumbnail(null);
    let selected = e.target.files[0];
    if (!selected) {
      setThumbnailError("Vui lòng chọn ảnh");
      return;
    }
    if (!selected.type.includes("image")) {
      setThumbnailError("Vui lòng chọn đúng định dạng");
      return;
    }
    if (!selected.size > 5000000) {
      setThumbnailError("Vui lòng chọn ảnh nhỏ hơn 5MB");
      return;
    }
    setThumbnailError(null);
    setThumbnail(selected);
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    setStatus(null);
    updateAvatar(user.uid, user, thumbnail);
  };

  useEffect(() => {
    if (response.success) {
      setStatus("success");
    } else if (response.error) {
      setStatus("failed");
    }
    console.log(response);
  }, [response]);
  useEffect(() => {
    console.log(progress);
  }, [progress]);
  return (
    <section className="bg-dark2 text-light3">
      <div className="py-8 px-4 mx-auto max-w-2xl lg:py-16">
        <h2 className="mb-4 text-xl font-700 text-headline5">
          Cập nhật Ảnh Đại Diện
        </h2>
        <form onSubmit={handleSubmit}>
          <div className="grid gap-4 sm:grid-cols-2 sm:gap-6"></div>
          <div className="mt-5">
            <div className="flex items-center justify-center w-full">
              <label
                htmlFor="dropzone-file"
                className="flex flex-col items-center justify-center w-full h-64 border-2 border-dark4 border-dashed rounded-lg cursor-pointer bg-dark3 hover:bg-dark4 "
              >
                <div className="flex flex-col items-center justify-center pt-5 pb-6">
                  <svg
                    aria-hidden="true"
                    className="w-10 h-10 mb-3 text-gray-400"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12"
                    ></path>
                  </svg>
                  <p className="mb-2 text-sm text-gray-500 dark:text-gray-400">
                    <span className="font-semibold">Click to upload</span> or
                    drag and drop
                  </p>
                  <p className="text-xs text-gray-500 dark:text-gray-400">
                    SVG, PNG, JPG or GIF (MAX. 800x400px)
                  </p>
                  {thumbnailError && (
                    <p className="text-xs text-critical dark:text-gray-400">
                      {thumbnailError}
                    </p>
                  )}
                  {thumbnail && (
                    <p className="text-xs text-primary dark:text-gray-400">
                      Đã chọn một ảnh
                    </p>
                  )}
                </div>
                <input
                  onChange={(e) => {
                    handleFileChange(e);
                  }}
                  id="dropzone-file"
                  type="file"
                  className="hidden"
                />
              </label>
            </div>
          </div>
          {status && status === "success" && (
            <div className="mt-5">
              <ToastComp message="Thêm sản phẩm thành công" status={status} />
            </div>
          )}
          {status && status === "failed" && (
            <div className="mt-5">
              <ToastComp message={response.error} status={status} />
            </div>
          )}
          <div className="mt-5">
            <Button title="Thêm" color="primary" />
          </div>
        </form>
      </div>
    </section>
  );
}

export default AddProductForm;
