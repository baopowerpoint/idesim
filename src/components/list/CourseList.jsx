import React, { useState, useEffect } from "react";
import { useCollection } from "../../hooks/useCollection";
import { useFirestore } from "../../hooks/useFirestore";

function CourseList({ docs, onUpdate }) {
  const courseContent = [
    {
      sectionContent: [
        {
          lessonVideoUrl: "",
          lessonDesc: "Describe about lesson",
          lessonId: "1",
          lessonNumber: "1",
          lessonRuntime: "3p",
          lessonTitle: "Tổng quan về Javascript",
        },
        {
          lessonVideoUrl: "",
          lessonDesc: "Describe about lesson",
          lessonId: "2",
          lessonNumber: "2",
          lessonRuntime: "3p",
          lessonTitle: "Code Editor: Visual studio code",
        },
        {
          lessonVideoUrl: "",
          lessonDesc: "Describe about lesson",
          lessonId: "3",
          lessonNumber: "3",
          lessonRuntime: "3p",
          lessonTitle: "Các extension cần thiết",
        },
      ],
      sectionDesc: "abc",
      sectionNumber: 1,
      sectionTitle: "Giới thiệu và cài đặt",
      sectionId: 1,
    },
    // {
    //   sectionContent: [
    //     {
    //       lessonVideoUrl: "",
    //       lessonDesc: "Describe about lesson",
    //       lessonId: "3",
    //       lessonNumber: "3",
    //       lessonRuntime: "3p",
    //       lessonTitle: "Các thành phần của một file html",
    //     },
    //   ],
    //   sectionDesc: "abc",
    //   sectionNumber: 2,
    //   sectionTitle: "HTML cơ bản",
    //   sectionId: 2,
    // },
    // {
    //   sectionContent: [
    //     {
    //       lessonVideoUrl: "",
    //       lessonDesc: "Describe about lesson",
    //       lessonId: "4",
    //       lessonNumber: "4",
    //       lessonRuntime: "3p",
    //       lessonTitle:
    //         "Cái nhìn tổng quan về các đối tượng bên trong slide powerpoint",
    //     },
    //     {
    //       lessonVideoUrl: "",
    //       lessonDesc: "Describe about lesson",
    //       lessonId: "5",
    //       lessonNumber: "5",
    //       lessonRuntime: "4p",
    //       lessonTitle: "Những thứ mình hay dùng nhất khi thiết kế slide",
    //     },
    //     {
    //       lessonVideoUrl: "",
    //       lessonDesc: "Describe about lesson",
    //       lessonId: "6",
    //       lessonNumber: "6",
    //       lessonRuntime: "4p",
    //       lessonTitle: '"Cái hộp vô hình"-bounding box',
    //     },
    //     {
    //       lessonVideoUrl: "",
    //       lessonDesc: "Describe about lesson",
    //       lessonId: "7",
    //       lessonNumber: "7",
    //       lessonRuntime: "4p",
    //       lessonTitle: "Context tab",
    //     },
    //     {
    //       lessonVideoUrl: "",
    //       lessonDesc: "Describe about lesson",
    //       lessonId: "8",
    //       lessonNumber: "8",
    //       lessonRuntime: "4p",
    //       lessonTitle: "Chèn text vào slide",
    //     },
    //     {
    //       lessonVideoUrl: "",
    //       lessonDesc: "Describe about lesson",
    //       lessonId: "9",
    //       lessonNumber: "9",
    //       lessonRuntime: "4p",
    //       lessonTitle: "Format text",
    //     },
    //     {
    //       lessonVideoUrl: "",
    //       lessonDesc: "Describe about lesson",
    //       lessonId: "10",
    //       lessonNumber: "10",
    //       lessonRuntime: "4p",
    //       lessonTitle: "Chèn shape vào slide",
    //     },
    //     {
    //       lessonVideoUrl: "",
    //       lessonDesc: "Describe about lesson",
    //       lessonId: "10.1",
    //       lessonNumber: "10.1",
    //       lessonRuntime: "4p",
    //       lessonTitle: "Control và shift trong powerpoint",
    //     },
    //     {
    //       lessonVideoUrl: "",
    //       lessonDesc: "Describe about lesson",
    //       lessonId: "11",
    //       lessonNumber: "11",
    //       lessonRuntime: "4p",
    //       lessonTitle: "Format shape",
    //     },
    //     {
    //       lessonVideoUrl: "",
    //       lessonDesc: "Describe about lesson",
    //       lessonId: "12",
    //       lessonNumber: "12",
    //       lessonRuntime: "4p",
    //       lessonTitle: "Chèn ảnh vào slide",
    //     },
    //     {
    //       lessonVideoUrl: "",
    //       lessonDesc: "Describe about lesson",
    //       lessonId: "13",
    //       lessonNumber: "13",
    //       lessonRuntime: "4p",
    //       lessonTitle: "Format ảnh",
    //     },
    //     {
    //       lessonVideoUrl: "",
    //       lessonDesc: "Describe about lesson",
    //       lessonId: "14",
    //       lessonNumber: "14",
    //       lessonRuntime: "4p",
    //       lessonTitle: "Chèn icon vào slide",
    //     },
    //     {
    //       lessonVideoUrl: "",
    //       lessonDesc: "Describe about lesson",
    //       lessonId: "15",
    //       lessonNumber: "15",
    //       lessonRuntime: "4p",
    //       lessonTitle: "Chèn video vào slide",
    //     },
    //     {
    //       lessonVideoUrl: "",
    //       lessonDesc: "Describe about lesson",
    //       lessonId: "16",
    //       lessonNumber: "16",
    //       lessonRuntime: "4p",
    //       lessonTitle: "Format video",
    //     },
    //     {
    //       lessonVideoUrl: "",
    //       lessonDesc: "Describe about lesson",
    //       lessonId: "17",
    //       lessonNumber: "17",
    //       lessonRuntime: "4p",
    //       lessonTitle: "Chèn audio vào slide",
    //     },
    //     {
    //       lessonVideoUrl: "",
    //       lessonDesc: "Describe about lesson",
    //       lessonId: "18",
    //       lessonNumber: "18",
    //       lessonRuntime: "4p",
    //       lessonTitle: "Format audio",
    //     },
    //   ],
    //   sectionDesc: "abc",
    //   sectionNumber: 3,
    //   sectionTitle: "Làm việc với các đối tượng bên trong powerpoint",
    //   sectionId: 3,
    // },
  ];
  const { response, deleteDocument, updateDocument } = useFirestore("courses");
  const { documents: courses, error, isPending } = useCollection("courses");
  const [status, setStatus] = useState(null);
  const handleUpdateDoc = (id) => {
    const targetCourse = courses.filter((course) => course.id == id);
    const acceptKey = prompt(
      "Xác nhận rằng bạn đang update" + targetCourse[0].category
    );
    if (targetCourse[0].category == acceptKey) {
      updateDocument(id, { courseContent });
    }
  };
  const handleDelete = (id) => {
    const acceptKey = prompt('Để chắc chắn, gõ "yes"');
    if (acceptKey === "yes") {
      setStatus(null);
      deleteDocument(id);
    } else {
      return;
    }
  };
  useEffect(() => {
    console.log(response);
  }, [response]);
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
              title
            </th>
            <th scope="col" className="py-3 px-6">
              Price
            </th>
            <th scope="col" className="py-3 px-6">
              Student
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
                <td className="py-4 px-6">{doc.price}</td>
                <td className="py-4 px-6">{doc.students.length} PP</td>

                <td className="flex items-center py-4 px-6 space-x-3">
                  <button
                    onClick={() => {
                      handleUpdateDoc(doc.id);
                    }}
                    className="font-500 text-light4 bg-primary px-3 py-1/2 rounded-lg"
                  >
                    Update
                  </button>
                  {/* <button
                    onClick={() => {
                      handleDelete(doc.id);
                    }}
                    className="font-500 text-light3 bg-critical dark:text-red-500 px-3 py-1/2 rounded-lg"
                  >
                    Xóa
                  </button> */}
                </td>
              </tr>
            ))}
        </tbody>
      </table>
    </div>
  );
}

export default CourseList;
