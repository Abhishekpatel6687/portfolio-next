"use client";
import SlideIn from "./SlideIn";
import { AnimatedTooltip } from "./ui/animated-tooltip";
import { WavyBackground } from "./ui/wavy-background";

const people = [
  {
    id: 1,
    name: "LinkedIn",
    link: "https://www.linkedin.com/in/abhishek-patel-2a6599240/",
    designation: "Software Engineer",
    image: "skill-icons:linkedin",
  },
  {
    id: 2,
    name: "Github",
    link: "https://github.com/Abhishekpatel6687",
    designation: "UI/UX Designer",
    image: "skill-icons:github-light",
  },
  {
    id: 3,
    name: "Instagram",
    link: "https://www.instagram.com/simple_boy_abhishek_6687/",
    designation: "Product Manager",
    image: "skill-icons:instagram",
  },
  {
    id: 4,
    name: "WhatsApp",
    link: "https://wa.me/917071326687",
    designation: "Data Scientist",
    image: "logos:whatsapp-icon",
  },
  {
    id: 5,
    name: "Facebook",
    link: "https://www.facebook.com/share/18UwsXTjdT/",
    designation: "Marketing Specialist",
    image: "logos:facebook",
  },
];

const Footer = () => {
  return (
    <div className="relative h-[18rem] overflow-hidden flex justify-center">
      <WavyBackground className="w-full max-w-7xl mx-auto flex flex-col justify-center">
        {/* SlideIn for "Frontend Developer" */}
        <SlideIn direction="right">
          <div>
            <h2 className="text-2xl md:text-4xl lg:text-5xl px-4 font-bold text-center mb-6 bg-clip-text text-transparent bg-gradient-to-r from-purple-500 via-violet-500 to-pink-500 [text-shadow:0_0_rgba(0,0,0,0.1)]">
            Frontend Engineer | React Specialist
            </h2> 
          </div>
        </SlideIn>

        {/* Description text */}
        <p className="text-base md:text-lg text-white text-center px-4 mb-4">
        I build modern, responsive, and user-friendly web applications with clean UI and smooth UX.
        </p>
        {/* AnimatedTooltip with social links */}
        <div className="flex flex-row justify-center mb-10 w-full">
          <AnimatedTooltip items={people} />
        </div>
      </WavyBackground>
    </div>
  );
};

export default Footer;
