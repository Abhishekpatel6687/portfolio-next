import { image } from "framer-motion/client";
import React from "react";
import Multimedia from "./Multimedia";
import PageLink from "./PageLink";

const skills = [
  { id: 1, name: "HTML", image: "/logoImage/html.png" },
  { id: 2, name: "CSS", image: "/logoImage/cssLogo.png" },
  { id: 3, name: "JAVASCRIPT", image: "/logoImage/jsLogo.png" },
  { id: 4, name: "REDUX", image: "/logoImage/redux.png" },
  { id: 5, name: "TAILWIND CSS", image: "/logoImage/tailwind1.png" },
  { id: 6, name: "GIT & GITHUB", image: "/logoImage/git1.png" },
  { id: 7, name: "TYPESCRIPT", image: "/logoImage/typeScript1.png" },
  { id: 8, name: "MATERIAL UI", image: "/logoImage/react.png" },
  { id: 9, name: "REACT", image: "/logoImage/reactLogo.png" },
  { id: 10, name: "SCSS", image: "/logoImage/reactLogo1.png" },
  { id: 11, name: "NEXT JS", image: "/logoImage/reactreact.png" },
];

const education = [
  {
    id: 1,
    date: "Dec 2023 - Present",
    role: "Full-time Internship →  Job",
    description: "Ibest Multiple Works Pvt. Ltd.",
  },
  {
    id: 2,
    date: "Feb 2023 - Nov 2023",
    role: "Summer Training",
    description: "Digicoders Technology Pvt. Ltd. (Lucknow)",
  },
  {
    id: 3,
    date: "July 2019 - July 2023",
    role: "B.Tech in Computer Science and Technology",
    description: "Goel Institute of Technology and Management",
  },
  {
    id: 4,
    date: "July 2018 - June 2019",
    role: "12th Standard",
    description: "Lucknow Model Public College",
  },
  {
    id: 5,
    date: "July 2016 - June 2017",
    role: "10th Standard",
    description: "Lucknow Model Public College",
  },
];

const SkillsEducation = () => {
  return (
    <div className="min-h-min w-full bg-green-200 relative text-black">
    <div className="hidden md:flex justify-start z-50 h-full  items-end absolute">
      <Multimedia />
        </div>
        <div className=" text-black inset-x-0 bottom-0 z-30 absolute flex justify-end h-full items-center">
      <PageLink id ={4} />
        </div>

    <div className="flex flex-col justify-center items-center pt-12">
    <h1 className="text-4xl">Skills & Education</h1>
      <div className="w-[22rem] h-1 relative flex justify-center">
        
       <div className="absolute inset-x-10 top-0 bg-gradient-to-r from-transparent via-green-600 to-transparent h-[2px] w-3/4 blur-sm" />
        <div className="absolute inset-x-10 top-0 bg-gradient-to-r from-transparent via-green-600 to-transparent h-px w-3/4" />
        <div className="absolute top-0 bg-gradient-to-r from-transparent via-green-600 to-transparent h-[5px] w-1/4 blur-md" />
        <div className="absolute inset-x-50 top-0 bg-gradient-to-r from-transparent via-green-950 to-transparent h-px w-1/4" /> 
 
      </div>
    </div>

      <div className="lg:flex px-8 pb-12 mt-8">
        <div className="w-full lg:w-1/2 flex flex-wrap xs:px-1 sm:px-4 xl:px-12 py-6 gap-8">
          {skills.map((item) => {
            return (
              <div key={item.id} className=" w-32 h-32 flex items-center justify-center flex-col ">
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
        <div className="w-full lg:w-1/2 flex py-6 md:px-5 lg:px-0">
          <div className="w-[0.1rem] lg:h-full ml-2 bg-black relative rounded-full">
            {/* <div className="w-4 h-4 mt-4 bg-white rounded-full absolute left-1/2 -translate-x-1/2 top-0" /> */}
          </div>
          <div className="flex flex-col w-full h-full gap-6">
            {education.map((i) => (
              <div key={i.id} className="flex items-start gap-4">
                <div className="w-1 h-full relative rounded-full">
                  <div className="w-4 h-4 mt-4 mr-20 bg-green-800 rounded-full absolute -translate-x-1/2 top-0" />
                </div>
                <div className="p-3 flex w-full justify-between mr-6">
                  <div>
                    <p className="font-bold">{i.role}</p>
                    <p className="xs:block sm:hidden text-sm text-gray-800">
                      {i.date}
                    </p>
                    <p className="text-sm mt-1">{i.description}</p>
                  </div>
                  <p className="xs:hidden sm:block  text-sm text-gray-800">
                    {i.date}
                  </p>
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
