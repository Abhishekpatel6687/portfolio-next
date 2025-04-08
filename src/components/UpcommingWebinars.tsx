
"use client";
import React, { useState } from "react";
import Image from "next/image";
import { PinContainer } from "./ui/3d-pin";
import Multimedia from "./Multimedia";
import PageLink from "./PageLink";

type Project = {
  id: number;
  projectName: string;
  link: string;
  github?: string;
  description: string;
  image: string;
  skills: string;
};
const projects: Project[] = [
  {
    id: 1,
    projectName: "E-Commerce",
    link: "https://spiffy-tarsier-01d793.netlify.app/",
    github: "https://github.com/Abhishekpatel6687/electro-com",
    description: "This is the best e-commerce site. Please check it out.",
    image: "/projects/e-com.png",
    skills: "HTML & CSS",
  },
  {
    id: 2,
    projectName: "Netflix Clone",
    link: "https://aaddyy.netlify.app/",
    github: "https://github.com/Abhishekpatel6687/Netflix-Clone",
    description:
      "A fully responsive Netflix Clone with movie streaming features.",
    image: "/projects/netflix.png",
    skills: "HTML & CSS",
  },
  {
    id: 3,
    projectName: "Portfolio Website",
    link: "https://collegemanagement6687.netlify.app/",
    github: "https://github.com/Abhishekpatel6687/CollegeManagement",
    description:
      "A personal portfolio website to showcase projects and skills.",
    image: "/projects/college.png",
    skills: "React Js",
  },
  {
    id: 4,
    projectName: "Chat Application",
    link: "https://todolist6687.netlify.app/",
    github: "https://github.com/Abhishekpatel6687/To-Do-List",
    description: "A real-time chat application built with React and Firebase.",
    image: "/projects/todo-list.png",
    skills: "HTML & CSS",
  },
  {
    id: 5,
    projectName: "Task Manager",
    link: "https://dainty-concha-e96c09.netlify.app/",
    description: "A productivity app to manage daily tasks efficiently.",
    image: "/projects/pricing.png",
    skills: "Web App",
  },
  {
    id: 6,
    projectName: "Weather App",
    link: "https://todo-task010.netlify.app/",
    description: "A weather forecasting app using OpenWeather API.",
    image: "/projects/todo.png",
    skills: "React Js",
  },
  {
    id: 7,
    projectName: "Weather App",
    link: "https://enchanting-gumption-a6ac06.netlify.app/",
    description: "A weather forecasting app using OpenWeather API.",
    image: "/projects/hospital.png",
    skills: "React Js",
  },
  {
    id: 8,
    projectName: "Weather App",
    link: "https://leafy-zabaione-426ebd.netlify.app/",
    description: "A weather forecasting app using OpenWeather API.",
    image: "/projects/portfolio.png",
    skills: "HTML & CSS",
  },
];

export default function UpcommingWebinars() {
  const projectSkills = ["HTML & CSS", "React Js", "Web App", "All"];

  const [activeButton, setActiveButton] = useState("All");
  const [showProject, setShowProject] = useState<Project[]>(projects);

  const handleProject = (item: string) => {
    const projectView = projects.filter((data) => data.skills === item);
    if (item === "All") {
      setShowProject(projects);
    } else {
      setShowProject(projectView);
    }
    setActiveButton(item);
  };

  return (
    <div className="min-h-screen w-full  gap-4 relative bg-green-100">
      <div className="hidden md:flex justify-start z-50 h-full  items-end absolute">
        <Multimedia />
      </div>
      <div className=" text-black inset-x-0 bottom-0 z-30 absolute flex justify-end h-full items-center">
        <PageLink id={3} />
      </div>
      <div className="flex flex-wrap justify-center pt-12">
        <div className="w-full sm:max-w-[34rem] md:max-w-[40rem] grid grid-cols-2  sm:grid-cols-4 gap-4 sm:gap-0 lg:gap-4 p-4">
          {projectSkills.map((item, index) => (
            <div key={index} className="flex justify-center">
              <button
                onClick={() => handleProject(item)}
                className={`${
                  activeButton === item ? "bg-green-900" : "bg-green-600"
                } z-50 text-sm md:text-md rounded-lg py-2 px-5 text-white hover:text-black hover:bg-green-500 transition duration-300`}
              >
                {item}
              </button>
            </div>
          ))}
        </div>
        <div className="min-h-screen w-full flex flex-wrap justify-evenly mb-6 px-8 py-4 md:mt-8">
          {showProject.map((item) => {
            return (
              <div key={item.id} className="mb-20">
                <PinContainer
                  title1="github Link"
                  href1={item.github}
                  title="project link"
                  href={item.link}
                >
                  <div className="flex basis-full flex-col p-4 tracking-tight text-slate-100/50 sm:basis-1/2  w-[16rem] h-[16rem] sm:w-[20rem] sm:h-[20rem] ">
                    <h3 className="max-w-xs !pb-2 !m-0 font-bold  text-base text-slate-100">
                      {item.projectName}
                    </h3>
                    <div className="text-base !m-0 !p-0 font-normal">
                      <span className="text-slate-500 ">
                        {item.description}
                      </span>
                    </div>
                    <div className="flex flex-1 w-full h-full rounded-lg mt-4 bg-gradient-to-br from-violet-500 via-purple-500 to-blue-500">
  <Image
    src={item.image}
    alt="project"
    width={200}
    height={200}
    className="object-contain"
  />
</div>
                  </div>
                </PinContainer>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
