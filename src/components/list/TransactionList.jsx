import React from "react";

function TransactionList() {
  return (
    <div className="overflow-x-auto relative shadow-md border rounded-lg border-dark4 sm:rounded-lg">
      <table className="w-full text-sm text-left text-light3 ">
        <thead className="text-xs text-light3 uppercase bg-dark3  ">
          <tr>
            <th scope="col" className="py-3 px-6">
              Product name
            </th>
            <th scope="col" className="py-3 px-6">
              <div className="flex items-center">Color</div>
            </th>
            <th scope="col" className="py-3 px-6">
              <div className="flex items-center">Category</div>
            </th>
            <th scope="col" className="py-3 px-6">
              <div className="flex items-center">Price</div>
            </th>
            <th scope="col" className="py-3 px-6">
              <span className="sr-only">Edit</span>
            </th>
          </tr>
        </thead>
        <tbody>
          <tr className="bg-dark3 border-b">
            <th
              scope="row"
              className="py-4 px-6 font-medium text-light3 whitespace-nowrap dark:text-white"
            >
              Apple MacBook Pro 17"
            </th>
            <td className="py-4 px-6">Sliver</td>
            <td className="py-4 px-6">Laptop</td>
            <td className="py-4 px-6">$2999</td>
            <td className="py-4 px-6 text-right">
              <a
                href="#"
                className="font-medium text-blue-600 dark:text-blue-500 hover:underline"
              >
                Edit
              </a>
            </td>
          </tr>
          <tr className="bg-dark3 border-b ">
            <th
              scope="row"
              className="py-4 px-6 font-medium text-light3 whitespace-nowrap dark:text-white"
            >
              Microsoft Surface Pro
            </th>
            <td className="py-4 px-6">White</td>
            <td className="py-4 px-6">Laptop PC</td>
            <td className="py-4 px-6">$1999</td>
            <td className="py-4 px-6 text-right">
              <a
                href="#"
                className="font-medium text-blue-600 dark:text-blue-500 hover:underline"
              >
                Edit
              </a>
            </td>
          </tr>
          <tr className="bg-dark3">
            <th
              scope="row"
              className="py-4 px-6 font-medium text-light3 whitespace-nowrap dark:text-white"
            >
              Magic Mouse 2
            </th>
            <td className="py-4 px-6">Black</td>
            <td className="py-4 px-6">Accessories</td>
            <td className="py-4 px-6">$99</td>
            <td className="py-4 px-6 text-right">
              <a
                href="#"
                className="font-medium text-blue-600 dark:text-blue-500 hover:underline"
              >
                Edit
              </a>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}

export default TransactionList;
