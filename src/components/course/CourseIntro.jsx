import React from "react";
import Button from "../Button";
import { GrReactjs } from "react-icons/gr";
import { TbBrandCss3, TbBrandHtml5 } from "react-icons/tb";
import {
  SiFigma,
  SiTailwindcss,
  SiBootstrap,
  SiFlutter,
  SiAdobepremierepro,
  SiAdobephotoshop,
  SiAdobeillustrator,
  SiNotion,
  SiJavascript,
  SiMicrosoftpowerpoint,
} from "react-icons/si";
import { FaFileExcel } from "react-icons/fa";
import GettingStartedButton from "../button/GettingStartedButton";
function CourseIntro() {
  const courses = [
    { name: "React.js", icon: <GrReactjs className="inline-block" /> },
    { name: "Html5", icon: <TbBrandHtml5 className="inline-block" /> },
    { name: "Css3", icon: <TbBrandCss3 className="inline-block" /> },
    { name: "Figma", icon: <SiFigma className="inline-block" /> },
    // { name: "TailwindCss", icon: <SiTailwindcss className="inline-block" /> },
    // { name: "Bootstrap", icon: <SiBootstrap className="inline-block" /> },
    { name: "Excel", icon: <FaFileExcel className="inline-block" /> },
    // { name: "Flutter", icon: <SiFlutter className="inline-block" /> },
    { name: "Premiere", icon: <SiAdobepremierepro className="inline-block" /> },
    { name: "Photoshop", icon: <SiAdobephotoshop className="inline-block" /> },
    {
      name: "PowerPoint",
      mark: true,
      icon: <SiMicrosoftpowerpoint className="inline-block text-warning" />,
    },
    {
      name: "Illustrator",
      icon: <SiAdobeillustrator className="inline-block" />,
    },
    // { name: "Notion API", icon: <SiNotion className="inline-block" /> },
    { name: "Javascript", icon: <SiJavascript className="inline-block" /> },
  ];
  return (
    <div className="mt-10 text-center ">
      <h1 className="text-headline4  font-700">
        Khám phá toàn bộ khoá học trên iDesim.
      </h1>
      <p className="my-5 text-body font-400 ">
        iDesim cung cấp khoá học theo chủ đề, giúp bạn dễ dàng hơn trong việc
        lựa chọn học cái gì, học ngôn ngữ lập trình nào, phần mềm thiết kế nào .
      </p>
      <div className="flex flex-wrap justify-center gap-5 text-headline6">
        {courses.map((course, idx) => (
          <div key={idx}>
            {course.icon}
            <p
              className={`ml-1 inline-block text-body1  ${
                course.mark ? "text-warning font-700" : "font-500"
              }`}
            >
              {course.name}
            </p>
          </div>
        ))}
      </div>
      <div className="mt-5">
        <GettingStartedButton />
      </div>
    </div>
  );
}

export default CourseIntro;
