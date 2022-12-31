import React from "react";
import { Toast } from "flowbite-react";
import { HiCheck, HiX, HiExclamation } from "react-icons/hi";

function ToastComp({ message, status }) {
  return (
    <div className="flex flex-col gap-4 ">
      {status === "success" && (
        <Toast className="!bg-dark4">
          <div className="inline-flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-green-800 text-green-200 ">
            <HiCheck className="h-5 w-5" />
          </div>
          <div className="ml-3 text-caption text-green-200 font-500">
            {message}
          </div>
          <Toast.Toggle className="bg-dark4" />
        </Toast>
      )}
      {status === "failed" && (
        <Toast className="!bg-dark4">
          <div className="inline-flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-red-800 text-red-200">
            <HiX className="h-5 w-5" />
          </div>
          <div className="ml-3 text-caption text-red-200 font-500">
            {message}
          </div>
          <Toast.Toggle className="bg-dark4" />
        </Toast>
      )}
      {status === "warning" && (
        <Toast>
          <div className="inline-flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-orange-100 text-orange-500 dark:bg-orange-700 dark:text-orange-200">
            <HiExclamation className="h-5 w-5" />
          </div>
          <div className="ml-3 text-sm font-normal">{message}</div>
          <Toast.Toggle />
        </Toast>
      )}
    </div>
  );
}

export default ToastComp;
