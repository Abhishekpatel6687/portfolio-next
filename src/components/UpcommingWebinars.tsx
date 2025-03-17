// "use client";
// import Link from "next/link";
// import { HoverEffect } from "./ui/card-hover-effect";

// const data = [
//     {
//       id: 1,
//       title: "Understanding Music Theory",
//       description: "Dive deep into the fundamentals of music theory and enhance your musical skills.",
//       slug: "understanding-music-theory",
//       isFeatured: true,
//     },
//     {
//       id: 2,
//       title: "The Art of Digital Illustration",
//       description: "Explore the techniques of digital painting and illustration to create captivating artwork.",
//       slug: "the-art-of-digital-illustration",
//       isFeatured: false,
//     },
//     {
//       id: 3,
//       title: "Mastering Frontend Development",
//       description: "Learn advanced frontend development techniques with React, Redux, and Tailwind CSS.",
//       slug: "mastering-frontend-development",
//       isFeatured: true,
//     },
//     {
//       id: 4,
//       title: "Exploring the Wonders of Space",
//       description: "Uncover the mysteries of the universe with insights into space exploration and technology.",
//       slug: "exploring-the-wonders-of-space",
//       isFeatured: false,
//     },
//     {
//       id: 5,
//       title: "Effective Time Management Tips",
//       description: "Enhance your productivity with practical time management techniques for daily life.",
//       slug: "effective-time-management-tips",
//       isFeatured: true,
//     },
//     {
//       id: 6,
//       title: "Healthy Living Through Nutrition",
//       description: "Discover the secrets of balanced nutrition to maintain a healthy and vibrant lifestyle.",
//       slug: "healthy-living-through-nutrition",
//       isFeatured: false,
//     },
//   ];

// const UpcommingWebinars = () => {
//   return (
//     <div className=" bg-gray-900 p-12">
//       <div className="  mx=auto px-4 sm:px-6">
//         <div className=" text-center text-teal-600 font-semibold tracking-wide uppercase">
//           <h2 className="text-base ">My Creative Portfolio Section</h2>
//           <p className="mt-2 leading-8 text-3xl font-extrabold tracking-tight text-white">Enhance Your Musical Journey</p>
//         </div>
//         <div className=" mt-10">
//         <HoverEffect items={data.map(data => (
//             {
//                 title:data.title,
//                 description:data.description,
//                 link:'/'
//             }
//         ))} />
//       </div>
//       <div className="mt-10 text-center">
// <Link href={"/"} className="rounded border border-neutral-600 px-4 py-2 text-neutral-700 bg-white hover:bg-gray-100 transition duration-200">
// View all webinars
// </Link>
//       </div>
//       </div>
//     </div>
//   );
// };

// export default UpcommingWebinars;

"use client";
import React, { useState } from "react";
import { PinContainer } from "./ui/3d-pin";
import Multimedia from "./Multimedia";
import PageLink from "./PageLink";

const projects = [
  {
    id: 1,
    projectName: "E-Commerce",
    link: "https://spiffy-tarsier-01d793.netlify.app/",
    github: "https://github.com/Abhishekpatel6687/electro-com",
    description: "This is the best e-commerce site. Please check it out.",
    image: "/projects/e-com.png",
  },
  {
    id: 2,
    projectName: "Netflix Clone",
    link: "https://aaddyy.netlify.app/",
    github: "https://github.com/Abhishekpatel6687/Netflix-Clone",
    description:
      "A fully responsive Netflix Clone with movie streaming features.",
    image: "/projects/netflix.png",
  },
  {
    id: 3,
    projectName: "Portfolio Website",
    link: "https://collegemanagement6687.netlify.app/",
    github: "https://github.com/Abhishekpatel6687/CollegeManagement",
    description:
      "A personal portfolio website to showcase projects and skills.",
    image: "/projects/college.png",
  },
  {
    id: 4,
    projectName: "Chat Application",
    link: "https://todolist6687.netlify.app/",
    github: "https://github.com/Abhishekpatel6687/To-Do-List",
    description: "A real-time chat application built with React and Firebase.",
    image: "/projects/todo-list.png",
  },
  {
    id: 5,
    projectName: "Task Manager",
    link: "https://dainty-concha-e96c09.netlify.app/",
    description: "A productivity app to manage daily tasks efficiently.",
    image: "/projects/pricing.png",

  },
  {
    id: 6,
    projectName: "weather app",
    link: "https://todo-task010.netlify.app/",
    description: "A weather forecasting app using OpenWeather API.",
    image: "/projects/todo.png",

  },
  {
    id: 7,
    projectName: "weather app",
    link: "https://enchanting-gumption-a6ac06.netlify.app/",
    description: "A weather forecasting app using OpenWeather API.",
    image: "/projects/hospital.png",

  },
  {
    id: 8,
    projectName: "weather app",
    link: "https://leafy-zabaione-426ebd.netlify.app/",
    description: "A weather forecasting app using OpenWeather API.",
    image: "/projects/portfolio.png",

  },
];

export default function UpcommingWebinars() {
  const projectSkills = ["HTML & CSS", "React Js", "Web App", "All"];
  return (
    <div className="min-h-screen w-full  gap-4 relative bg-green-100">
      <div className=" flex justify-start z-50 h-full  items-end absolute">
      <Multimedia />
        </div>
        <div className=" text-black inset-x-0 bottom-0 z-30 absolute flex justify-end h-full items-center">
      <PageLink id ={3} />
        </div>
      <div className="flex flex-wrap justify-center pt-12">
   <div className="w-full sm:max-w-[34rem] md:max-w-[40rem] grid grid-cols-2  sm:grid-cols-4 gap-4 sm:gap-0 lg:gap-4 p-4">
  {projectSkills.map((item, index) => (
    <div key={index} className="flex justify-center">
      <button className="bg-green-800 text-sm md:text-md rounded-lg py-2 px-5 text-white hover:text-black hover:bg-green-500 transition duration-300">
        {item}
      </button>
    </div>
  ))}
</div>
      <div className="min-h-screen w-full flex flex-wrap justify-evenly    mb-6 p-8 md:p-0 lg:p-8 ">
        {projects.map((item) => {
          return (
            <div className="mb-20">
            <PinContainer title1="github Link" href1={item.github} title="project link" href={item.link}>
              <div className="flex basis-full flex-col p-4 tracking-tight text-slate-100/50 sm:basis-1/2  w-[16rem] h-[16rem] sm:w-[20rem] sm:h-[20rem] ">
                <h3 className="max-w-xs !pb-2 !m-0 font-bold  text-base text-slate-100">
                  {item.projectName}
                </h3>
                <div className="text-base !m-0 !p-0 font-normal">
                  <span className="text-slate-500 ">{item.description}</span>
                </div>
                <div className="flex flex-1 w-full rounded-lg mt-4 bg-gradient-to-br from-violet-500 via-purple-500 to-blue-500">
                  <img src={item.image} alt="netflix" />
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
