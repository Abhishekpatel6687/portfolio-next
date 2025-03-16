"use client";
import { AnimatedTooltip } from "./ui/animated-tooltip";
import { WavyBackground } from "./ui/wavy-background";

const people = [
  {
    id: 1, 
    name: "LinkedIn",
    designation: "Software Engineer",
    image:"https://images.unsplash.com/photo-1599566150163-29194dcaad36?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=3387&q=80",
  },
  {
    id: 2,
    name: "Github",
    designation: "UI/UX Designer",
    image:"https://images.unsplash.com/photo-1524504388940-b1c1722653e1?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80",
  },
  {
    id: 3,
    name: "Instagram",
    designation: "Product Manager",
    image:"https://images.unsplash.com/photo-1544717305-996b815c338c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80",
  },
  {
    id: 4,
    name: "WhatsApp",
    designation: "Data Scientist",
    image:"https://images.unsplash.com/photo-1599566150163-29194dcaad36?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=3387&q=80",
  },
  {
    id: 5,
    name: "Facebook",
    designation: "Marketing Specialist",
    image:"https://images.unsplash.com/photo-1524504388940-b1c1722653e1?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80",
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
        <h2 className="text-2xl md:text-4xl lg:text-7xl text-white font-bold text-center mb-8">
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
