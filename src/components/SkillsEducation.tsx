import { image } from "framer-motion/client";
import React from "react";

const skills = [
  { id: 1, name: "HTML", image: "/logoImage/react.png" },
  { id: 2, name: "CSS", image: "/logoImage/react.png" },
  { id: 3, name: "JAVASCRIPT", image: "/logoImage/react.png" },
  { id: 4, name: "REACT", image: "/logoImage/react.png" },
  { id: 5, name: "REDUX", image: "/logoImage/react.png" },
  { id: 6, name: "TAILWIND CSS", image: "/logoImage/react.png" },
  { id: 7, name: "MATERIAL UI", image: "/logoImage/react.png" },
  { id: 8, name: "GIT & GITHUB", image: "/logoImage/react.png" },
  { id: 9, name: "SCSS", image: "/logoImage/react.png" },
  { id: 10, name: "TYPESCRIPT", image: "/logoImage/react.png" },
  { id: 11, name: "NEXT JS", image: "/logoImage/react.png" },



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
              <div className=" w-32 h-32 flex items-center justify-center flex-col "   >
                <div className="w-24 h-24 flex  items-center justify-center bg-white rounded-full relative ">
                  <img src={item.image} className=" absolute" height={60} width={60} alt="html" />
                </div>
                <div className="mt-2">
                  <p>{item.name}</p>
                </div>
              </div>
            );
          })}
        </div>
        <div className="w-1/2 bg-green-500">patel</div>
      </div>
    </div>
  );
};

export default SkillsEducation;
