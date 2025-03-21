"use client";
import { AnimatedTooltip } from "./ui/animated-tooltip";
import { WavyBackground } from "./ui/wavy-background";

const people = [
  {
    id: 1, 
    name: "LinkedIn",
    link: "https://www.linkedin.com/in/abhishek-patel-2a6599240/",
    designation: "Software Engineer",
    image:"skill-icons:linkedin",
  },
  {
    id: 2,
    name: "Github",
    link: "https://github.com/Abhishekpatel6687",
    designation: "UI/UX Designer",
    image:"skill-icons:github-light",
  },
  {
    id: 3,
    name: "Instagram",
    link: "https://www.instagram.com/simple_boy_abhishek_6687/",
    designation: "Product Manager",
    image:"skill-icons:instagram",
  },
  {
    id: 4,
    name: "WhatsApp",
    link: "https://wa.me/917071326687",
    designation: "Data Scientist",
    image:"logos:whatsapp-icon",
  },
  {
    id: 5,
    name: "Facebook",
    link: "https://www.facebook.com/share/18UwsXTjdT/",
    designation: "Marketing Specialist",
    image:"logos:facebook",
  },
  // {
  //   id: 6,
  //   name: "Michael Wilson",
  //   designation: "DevOps Engineer",
  //   image:"https://images.unsplash.com/photo-1544717305-996b815c338c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80",
  // },
];

const instructors = () => {
  return (
    <div className="relative h-[18rem] overflow-hidden flex justify-center">
      <WavyBackground className="w-full max-w-7xl mx-auto flex flex-col  justify-center">
        <h2 className="text-2xl md:text-4xl lg:text-6xl text-white font-bold text-center mb-6">
          Frontend Developer
        </h2>
        <p className="text-base md:text-lg text-white text-center mb-4">
          I created a responsive, designer and complex web application.
        </p>
        <div className="flex flex-row  justify-center mb-10 w-full">
          <AnimatedTooltip items={people}/>
        </div>
      </WavyBackground>
    </div>
  );
};

export default instructors;
