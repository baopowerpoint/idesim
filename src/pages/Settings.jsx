import React from "react";
import UserList from "../components/list/UserList";
import ModalForm from "../components/form/ModalForm";
import { useAuthContext } from "../hooks/useAuthContext";
import UpdateProfileForm from "../components/form/UpdateProfileForm";
function Settings() {
  const { user } = useAuthContext();
  return (
    <div className="mt-20 max-w-[600px] p-3 mx-auto">
      <h1 className="text-headline5 font-600">Cài đặt</h1>
      <div className="mt-5 rounded-lg border border-dark4 bg-dark3">
        <h1 className="my-2 text-headline6 text-center">Thông tin cá nhân</h1>
        <div className="flex p-5 items-start gap-5 bg-dark ">
          <div>
            <img
              className=" w-16 h-16 object-cover rounded-xl  "
              src={user.photoURL}
              alt=""
            />
          </div>

          <div className=" basis-10/12">
            <h1 className="font-600 text-light">{user.displayName}</h1>
            <p className="text-body2 text-gray-400">{user.email}</p>
          </div>
        </div>
        <div className=" w-1/2 my-5 mx-auto">
          <ModalForm action="Cập nhật">
            <UpdateProfileForm />
          </ModalForm>
        </div>
      </div>
    </div>
  );
}

export default Settings;
