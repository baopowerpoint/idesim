import React from "react";
import ModalForm from "../components/form/ModalForm";
import { useAuthContext } from "../hooks/useAuthContext";
import UpdateProfileForm from "../components/form/UpdateProfileForm";
import moment from "moment";
function Settings() {
  const { user } = useAuthContext();
  return (
    <div className=" w-full p-3 mx-auto">
      <div>
        {" "}
        <h1 className="text-headline5 font-600">Cài đặt</h1>
        <div className="mt-5 rounded-lg border border-dark4 bg-dark3 p-5">
          <h1 className="my-2 text-headline6 font-600">Thông tin cá nhân</h1>
          <div className="flex px-5 items-center gap-5  ">
            <div>
              <img
                className=" w-16 h-16 object-cover rounded-xl  "
                src={user.photoURL}
                alt=""
              />
            </div>

            <div className="flex flex-col justify-between basis-10/12">
              <div>
                <h1 className="font-600 text-light">{user.displayName}</h1>
                <p className="text-body2 text-gray-400">{user.email}</p>
              </div>
              <p className="font-300 text-med text-caption">
                {" "}
                Là thành viên từ{" "}
                {moment(user.metadata.creationTime)
                  .fromNow(true)
                  .replace("days", "ngày")}{" "}
                trước
              </p>
            </div>
          </div>
          <div className=" w-1/2 my-5 mx-auto">
            <ModalForm action="Cập nhật">
              <UpdateProfileForm />
            </ModalForm>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Settings;
