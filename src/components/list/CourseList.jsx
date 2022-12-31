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
          lessonTitle: "Tổng quan về thiết kế",
        },
      ],
      sectionDesc: "abc",
      sectionNumber: 1,
      sectionTitle: "Giới thiệu chung",
      sectionId: 1,
    },
    {
      sectionContent: [
        {
          lessonVideoUrl: "",
          lessonDesc: "Describe about lesson",
          lessonId: "2",
          lessonNumber: "2",
          lessonRuntime: "3p",
          lessonTitle: "Phân biệt Typeface và Font",
        },
        {
          lessonVideoUrl: "",
          lessonDesc: "Describe about lesson",
          lessonId: "3",
          lessonNumber: "3",
          lessonRuntime: "3p",
          lessonTitle: "Type hierarchy",
        },
        {
          lessonVideoUrl: "",
          lessonDesc: "Describe about lesson",
          lessonId: "4",
          lessonNumber: "4",
          lessonRuntime: "4p",
          lessonTitle: "Lựa chọn các cặp font phù hợp với nhau",
        },
      ],
      sectionDesc: "abc",
      sectionNumber: 2,
      sectionTitle: "Typography",
      sectionId: 2,
    },
    {
      sectionContent: [
        {
          lessonVideoUrl: "",
          lessonDesc: "Describe about lesson",
          lessonId: "5",
          lessonNumber: "5",
          lessonRuntime: "4p",
          lessonTitle: "Tổng quan về màu sắc",
        },
        {
          lessonVideoUrl: "",
          lessonDesc: "Describe about lesson",
          lessonId: "6",
          lessonNumber: "6",
          lessonRuntime: "4p",
          lessonTitle: "3 yếu tố ảnh hưởng đến màu sắc",
        },
        {
          lessonVideoUrl: "",
          lessonDesc: "Describe about lesson",
          lessonId: "7",
          lessonNumber: "7",
          lessonRuntime: "4p",
          lessonTitle: "Vòng tròn thuần sắc - Color wheel",
        },
        {
          lessonVideoUrl: "",
          lessonDesc: "Describe about lesson",
          lessonId: "8",
          lessonNumber: "8",
          lessonRuntime: "4p",
          lessonTitle: "4 kiểu phối màu cơ bản",
        },
      ],
      sectionDesc: "abc",
      sectionNumber: 3,
      sectionTitle: "Màu sắc",
      sectionId: 3,
    },
    {
      sectionContent: [
        {
          lessonVideoUrl: "",
          lessonDesc: "Describe about lesson",
          lessonId: "9",
          lessonNumber: "9",
          lessonRuntime: "4p",
          lessonTitle: "Giới thiệu về Shape",
        },
        {
          lessonVideoUrl: "",
          lessonDesc: "Describe about lesson",
          lessonId: "10",
          lessonNumber: "10",
          lessonRuntime: "4p",
          lessonTitle: "Ý nghĩa của từng loại shape",
        },
      ],
      sectionDesc: "abc",
      sectionNumber: 4,
      sectionTitle: "Shape",
      sectionId: 4,
    },
    {
      sectionContent: [
        {
          lessonVideoUrl: "",
          lessonDesc: "Describe about lesson",
          lessonId: "11",
          lessonNumber: "11",
          lessonRuntime: "4p",
          lessonTitle: "Sự cân bằng",
        },
        {
          lessonVideoUrl: "",
          lessonDesc: "Describe about lesson",
          lessonId: "12",
          lessonNumber: "12",
          lessonRuntime: "4p",
          lessonTitle: "Sự liên quan",
        },
        {
          lessonVideoUrl: "",
          lessonDesc: "Describe about lesson",
          lessonId: "13",
          lessonNumber: "13",
          lessonRuntime: "4p",
          lessonTitle: "Sự sắp xếp",
        },
        {
          lessonVideoUrl: "",
          lessonDesc: "Describe about lesson",
          lessonId: "14",
          lessonNumber: "14",
          lessonRuntime: "4p",
          lessonTitle: "Sự lặp lại",
        },
        {
          lessonVideoUrl: "",
          lessonDesc: "Describe about lesson",
          lessonId: "15",
          lessonNumber: "15",
          lessonRuntime: "4p",
          lessonTitle: "Sự tương phản",
        },
        {
          lessonVideoUrl: "",
          lessonDesc: "Describe about lesson",
          lessonId: "16",
          lessonNumber: "16",
          lessonRuntime: "4p",
          lessonTitle: "Sự phân cấp",
        },
      ],
      sectionDesc: "abc",
      sectionNumber: 5,
      sectionTitle: "6 từ khóa thiết kế",
      sectionId: 5,
    },
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
