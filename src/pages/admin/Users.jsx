import React from "react";
import ModalForm from "../../components/form/ModalForm";
import UserList from "../../components/list/UserList";
import { useCollection } from "../../hooks/useCollection";
import SkeletonWithList from "../../components/skeleton/SkeletonWithList";

function Users() {
  const { documents: users, error, isPending } = useCollection("users");
  return (
    <div className="mt-20 max-w-[800px] mx-auto px-5">
      <h1 className="text-center text-headline4 font-700 ">
        Quản lý người dùng
      </h1>
      <div className="mt-5">
        {isPending && <SkeletonWithList />}
        {users && <UserList userPayload={users} />}
        {error && <h1>{error}</h1>}
      </div>
    </div>
  );
}

export default Users;
