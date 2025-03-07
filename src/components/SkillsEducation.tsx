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
    date: "2023 - Present",
    role: "Full-time Internship →  Job",
    description: "Ibest Multiple Works Pvt. Ltd."
  },
  {
    id: 2,
    date: "2023 - 2023",
    role: "Summer Training",
    description: "Digicoders Technology Pvt. Ltd. (Lucknow)"
  },
  {
    id: 3,
    date: "2019 - 2023",
    role: "B.Tech in Computer Science and Technology",
    description: "Goel Institute of Technology and Management"
  },
  {
    id: 4,
    date: "2018 - 2019",
    role: "12th Standard",
    description: "Lucknow Model Public College"
  },
  {
    id: 5,
    date: "2016 - 2017",
    role: "10th Standard",
    description: "Lucknow Model Public College"
  }
];


const SkillsEducation = () => {
  return (
    <div className="min-h-min w-full py-12 bg-green-200 text-black">
      <div className="flex justify-center items-center">
        <h1 className="text-4xl">Skills & Education</h1>
      </div>
      <div className="flex px-8 mt-8">
        <div className="w-1/2 flex flex-wrap px-12 py-6 gap-8">
          {skills.map((item) => {
            return (
              <div className=" w-32 h-32 flex items-center justify-center flex-col ">
                <div className="w-24 h-24 flex  items-center justify-center bg-white rounded-full relative ">
                  <img
                    src={item.image}
                    className=" absolute"
                    height={50}
                    width={50}
                    alt="html"
                  />
                </div>
                <div className="mt-2">
                  <p className="text-sm font-medium">{item.name}</p>
                </div>
              </div>
            );
          })}
        </div>
        <div className="w-1/2 flex py-6">
          <div className="w-[0.1rem] h-full ml-2 bg-black relative rounded-full">
            {/* <div className="w-4 h-4 mt-4 bg-white rounded-full absolute left-1/2 -translate-x-1/2 top-0" /> */}
          </div>
          <div className="flex flex-col w-full h-full gap-6">
            {education.map((i) => (
              <div key={i.id} className="flex items-start gap-4">
                <div className="w-1 h-full relative rounded-full">
                  <div className="w-4 h-4 mt-4 mr-20 bg-green-800 rounded-full absolute -translate-x-1/2 top-0" />
                </div>
                <div className="p-3 flex w-full justify-between mr-6">
                  <div className="">
                  <p className="font-bold">{i.role}</p>
                  <p className="text-sm mt-1">{i.description}</p>
                  </div>
                  <p className="text-sm text-gray-800">{i.date}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default SkillsEducation;
