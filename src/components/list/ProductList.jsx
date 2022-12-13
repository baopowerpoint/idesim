import React, { useState, useEffect } from "react";
import { useFirestore } from "../../hooks/useFirestore";

function ProductList({ docs }) {
  const { response, deleteDocument } = useFirestore("products");
  const [status, setStatus] = useState(null);
  const handleDelete = (id) => {
    setStatus(null);
    deleteDocument(id);
  };

  return (
    <div className="overflow-x-auto relative shadow-md rounded-lg border-dark4 border">
      {status && status === "failed" && (
        <div className="mt-5">
          <h1>{response.error}</h1>
        </div>
      )}
      <table className="w-full text-caption2 text-left text-gray-500 ">
        <thead className="text-caption text-light3  bg-dark3">
          <tr>
            <th scope="col" className="py-3 px-6">
              Name
            </th>
            <th scope="col" className="py-3 px-6">
              Price
            </th>
            <th scope="col" className="py-3 px-6">
              category
            </th>

            <th scope="col" className="py-3 px-6">
              Action
            </th>
          </tr>
        </thead>
        <tbody>
          {docs &&
            docs.map((doc) => (
              <tr key={doc.id} className="bg-dark3 whitespace-nowrap ">
                <th scope="row" className="py-4 px-6 font-500 text-light3 ">
                  {doc.title}
                </th>
                <td className="py-4 px-6">
                  {parseInt(doc.price) === 0 ? "free" : doc.price}
                </td>
                <td className="py-4 px-6">{doc.category}</td>

                <td className="flex items-center py-4 px-6 space-x-3">
                  <button className="font-500 text-light4 bg-primary px-3 py-1/2 rounded-lg">
                    Edit
                  </button>
                  <button
                    onClick={() => {
                      handleDelete(doc.id);
                    }}
                    className="font-500 text-light3 bg-critical dark:text-red-500 px-3 py-1/2 rounded-lg"
                  >
                    Xóa
                  </button>
                </td>
              </tr>
            ))}
        </tbody>
      </table>
    </div>
  );
}

export default ProductList;
