import React from "react";

function UserList({ userPayload }) {
  return (
    <div className="overflow-x-auto relative shadow-md rounded-lg border border-dark4">
      <table className="w-full text-sm text-left text-gray-400">
        <thead className="text-xs  uppercase bg-gray-700 text-gray-400">
          <tr>
            <th scope="col" className="py-3 px-6">
              Name
            </th>
            <th scope="col" className="py-3 px-6">
              Balance
            </th>
            <th scope="col" className="py-3 px-6">
              Status
            </th>
            <th scope="col" className="py-3 px-6">
              Action
            </th>
          </tr>
        </thead>
        <tbody>
          {userPayload &&
            userPayload.map((user) => (
              <tr
                key={user.id}
                className="border-b bg-gray-800  border-gray-700 hover:bg-gray-600"
              >
                <th
                  scope="row"
                  className="flex items-center py-4 pr-6 pl-1  whitespace-nowrap text-white"
                >
                  <img
                    className="w-10 flex-none min-w-10 h-10 rounded-full"
                    src={
                      user.imgUrl
                        ? user.imgUrl
                        : "https://images.unsplash.com/photo-1531746020798-e6953c6e8e04?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NHx8cG9ydHJhaXR8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60"
                    }
                  />
                  <div className="pl-3 grow">
                    <div className="text-base font-semibold">
                      {user.displayName}
                    </div>
                    <div className="font-normal text-gray-500">
                      {user.email}
                    </div>
                  </div>
                </th>
                <td className="py-4 px-6">{user.balances} VNĐ</td>
                <td className="py-4 px-6">
                  <div className="flex items-center">
                    <div
                      className={`h-2.5 w-2.5 rounded-full ${
                        user.isOnline ? "bg-green-400" : "bg-gray-400"
                      } mr-2`}
                    >
                      {" "}
                    </div>{" "}
                    {user.isOnline ? "Online" : "Offline"}
                  </div>
                </td>
                <td className="py-4 px-6">
                  <button className="font-medium text-primary">
                    Edit user
                  </button>
                </td>
              </tr>
            ))}
        </tbody>
      </table>
    </div>
  );
}

export default UserList;
