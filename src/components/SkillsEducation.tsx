import { image } from "framer-motion/client";
import React from "react";

const skills = [
  { id: 1, name: "HTML", image: "/logoImage/html.png" },
  { id: 2, name: "CSS", image: "/logoImage/cssLogo.png" },
  { id: 3, name: "JAVASCRIPT", image: "/logoImage/jsLogo.png" },
  { id: 5, name: "REDUX", image: "/logoImage/redux.png" },
  { id: 6, name: "TAILWIND CSS", image: "/logoImage/tailwind1.png" },
  { id: 8, name: "GIT & GITHUB", image: "/logoImage/git1.png" },
  { id: 10, name: "TYPESCRIPT", image: "/logoImage/typeScript1.png" },
  { id: 7, name: "MATERIAL UI", image: "/logoImage/react.png" },
  { id: 4, name: "REACT", image: "/logoImage/reactLogo.png" },
  { id: 9, name: "SCSS", image: "/logoImage/reactLogo1.png" },
  { id: 11, name: "NEXT JS", image: "/logoImage/reactreact.png" },
];

const education = [
  {
    id: 1,
    date: "2022 - till",
    role: "SDE (Full time + Internship) Stanverse Technology Pvt. Ltd.",
  },
  {
    id: 2,
    date: "2021 - 2022",
    role: "Software Developer Intern at ABC Tech Solutions",
  },
  {
    id: 3,
    date: "2020 - 2021",
    role: "Frontend Developer Intern at XYZ Innovations",
  },
  { id: 4, date: "2019 - 2020", role: "Web Development Intern at WebX Studio" },
  { id: 5, date: "2018 - 2019", role: "Machine Learning Trainee at AI Labs" },
  {
    id: 6,
    date: "2017 - 2018",
    role: "Full Stack Developer Intern at CodeCrafters",
  },
];

const SkillsEducation = () => {
  return (
    <div className="min-h-screen w-full py-4 bg-gray-200 text-black">
      <div className="flex justify-center items-center">
        <h1 className="text-4xl">Skills & Education</h1>
      </div>
      <div className="flex px-8 mt-8">
        <div className="w-1/2 flex flex-wrap px-12 gap-8 bg-red-200 ">
          {skills.map((item) => {
            return (
              <div className=" w-32 h-32 flex items-center justify-center flex-col ">
                <div className="w-24 h-24 flex  items-center justify-center bg-white rounded-full relative ">
                  <img
                    src={item.image}
                    className=" absolute"
                    height={60}
                    width={60}
                    alt="html"
                  />
                </div>
                <div className="mt-2">
                  <p>{item.name}</p>
                </div>
              </div>
            );
          })}
        </div>
        <div className="w-1/2 bg-green-500">
          <div className="flex">
            {education.map((item) => {
              return (
                <div className="flex">
                  <h1>{item.date}</h1>
                  <p>
                    {item.role}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default SkillsEducation;
