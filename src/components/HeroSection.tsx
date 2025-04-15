"use client";
import React, { useState, useEffect } from "react";
import SlideIn from "./SlideIn";
import Image from "next/image";
import { motion } from "framer-motion";
import { Button } from "./ui/moving-border";
import { Spotlight } from "./ui/Spotlight";
import Multimedia from "./Multimedia";
import PageLink from "./PageLink";

const textColor = [
  { id: 0, color: "text-pink-400" },
  { id: 1, color: "text-blue-400" },
  { id: 2, color: "text-red-400" },
  { id: 3, color: "text-purple-400" },
  { id: 4, color: "text-green-400" },
  { id: 5, color: "text-orange-400" },
  { id: 6, color: "text-yellow-400" },
];

const HeroSection = () => {

  const profession = [
    "I am a Frontend Web Developer.",
    "I build responsive UIs.",
    "I create modern web pages.",
    "I am a React.js Expert.",
    "I craft clean & functional designs.",
    "I develop pixel-perfect websites.",
    "I love building with Tailwind CSS.",
  ];

  const [index, setIndex] = useState(0);
  const [displayText, setDisplayText] = useState("");
  const [charIndex, setCharIndex] = useState(0);
  // console.log(index, "displayText");

  const currentColor =
    textColor.find((item) => item.id === index)?.color || "text-gray-700";
  // console.log(currentColor, "currentColor");

  const downloadResume = () => {
    
  window.open("/resume/AbhishekPatel.pdf", "_blank");
    const link = document.createElement("a");
    link.href = "/resume/AbhishekPatel.pdf";
    link.download = "Abhishek_Resume.pdf";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  useEffect(() => {
    const currentText = profession[index];

    const timeout = setTimeout(() => {
      if (charIndex < currentText.length) {
        // console.log(charIndex,'charIndex')
        setDisplayText((prev) => prev + currentText.charAt(charIndex));
        setCharIndex(charIndex + 1);
      } else {
        setTimeout(() => {
          setDisplayText("");
          setCharIndex(0);
          setIndex((prevIndex) => (prevIndex + 1) % profession.length);
        }, 1000);
      }
    }, 10);

    return () => clearTimeout(timeout);
  }, [charIndex, index]);
  return (
    <div className=" min-h-[38rem] relative md:min-h-screen w-full bg-green-100 flex flex-col md:flex-row  overflow-hidden">
      <Spotlight
        className="-top-40 left-0 md:left-60 md:-top-20 z-50"
        fill="green"
      />
      <div className="hidden py-2 md:flex justify-start z-50 h-full  items-end absolute">
        <Multimedia />
      </div>
      <div className=" text-black inset-x-0 bottom-0 z-30 absolute flex justify-end h-full items-center">
        <PageLink id={1} />
      </div>

      <div className="w-full md:w-[44%] relative">
        <div className="w-56 h-56 md:w-64 md:h-64 lg:w-80 lg:h-80 bg-gradient-to-r from-green-100  flex justify-center  to-white rounded-full mt-[-10rem] lg:mt-[-12rem] ml-[-2rem] shadow-2xl">
          <Image
            src="/logoImage/Logo3.png"
            alt="Logo 3"
            width={224}
            height={192}
            className="w-32 h-28 sm:w-28 md:w-44 lg:w-56 sm:h-32 md:h-44 lg:h-48 mt-[8.6rem] sm:mt-[8rem] md:mt-[7.4rem] lg:mt-[9.6rem] ml-4 sm:ml-6 sticky top-0"
          />
        </div>

        <div className="hidden md:block w-16 h-16 bg-gradient-to-r from-green-100 to-white rounded-full md:ml-[20rem] lg:ml-[36rem] shadow-xl md:mb-20" />
        <div className="flex justify-center mt-6">
          <div className="w-4 h-4 bg-gradient-to-r from-green-100 to-white rounded-full mr-1 shadow-md" />
          <SlideIn direction="right">
            <h1 className="text-xl lg:text-3xl font-bold text-black">Hello,</h1>
          </SlideIn>

          <SlideIn direction="right">
            <h1 className="mt-5 lg:mt-8 text-4xl lg:text-5xl font-bold text-green-800">
              I am Abhishek <br />
              <div className="text-2xl relative w-64 sm:w-96 md:w-64 lg:w-[21.1rem] -mt-2 h-20">
                <div
                  className={`${currentColor} text-sm sm:text-lg lg:text-xl font-semibold text-start -ml-1 whitespace-normal break-words p-2 h-20`}
                >
                  {displayText}
                  <span className="animate-pulse">|</span>
                </div>
              </div>
            </h1>
        <div className=" -mt-8 md:mt-0 mb-6 md:mb-0">
        <Button
        borderRadius="1.75rem"
        onClick={downloadResume}
        className="bg-balck cursor-pointer z-50 dark:bg-green-700 text-white dark:text-white border-neutral-200 dark:border-blue-900 h-9 w-32 md:h-10 md:w-36"
      >
        Resume
      </Button>
    </div>
          </SlideIn>
        </div>

        <div className="hidden md:block w-20 h-20 bg-gradient-to-r from-green-100 to-white rounded-full ml-16 mt-24 shadow-2xl" />
        <div className="hidden md:block w-8 h-8 bg-gradient-to-r from-green-100 to-white rounded-full md:ml-[18rem] lg:ml-[28rem] mt-20 shadow-lg" />
      </div>

      <div className="relative w-full mt-0 md:mt-6   md:w-[56%] flex justify-center md:block">
        <div className="w-20 h-20 md:w-64 md:h-64 lg:w-80 lg:h-80 bg-gradient-to-r from-green-100 to-white rounded-full ml-[26rem] md:ml-[26rem] lg:ml-[44rem] shadow-2xl absolute" />
        <SlideIn direction="left">
          <motion.div
            animate={{ y: [0, -10, 0] }}
            transition={{
              duration: 1.5,
              ease: "easeInOut",
              repeat: Infinity,
            }}
          >
            <div className="w-16 h-16 md:w-20 md:h-20 lg:w-24 lg:h-24 bg-white rounded-full flex justify-center items-center shadow-2xl absolute ml-[-9rem] sm:ml-[-10rem] md:ml-[17rem] lg:ml-[24rem] mt-5 md:mt-[5rem]">
              <Image
                src="/logoImage/react.png"
                alt="React Logo"
                width={48}
                height={48}
                className="w-12 h-12 md:w-14 md:h-14 lg:w-16 lg:h-16  "
              />
            </div>
          </motion.div>
        </SlideIn>

        <SlideIn direction="left">
          <motion.div
            animate={{ y: [0, -10, 0] }}
            transition={{
              duration: 1.5,
              ease: "easeInOut",
              repeat: Infinity,
            }}
          >
            <div className="w-16 h-16 md:w-20 md:h-20 lg:w-24 lg:h-24 flex items-center justify-center bg-white rounded-full shadow-2xl absolute ml-[-10.8rem] sm:ml-[-12rem] md:ml-[19.6rem] lg:ml-[28rem] mt-28 md:mt-[13rem] lg:mt-[16rem]">
              <Image
                src="/logoImage/javascript1.png"
                alt="JavaScript Logo"
                width={56}
                height={66}
                className="w-11 h-11 md:w-14 md:h-14 lg:w-[3.8rem] lg:h-16  "
              />
            </div>
          </motion.div>
        </SlideIn>

        <SlideIn direction="inner">
          <div className="origin-center w-60 h-60 md:w-72 md:h-72 lg:w-96 lg:h-96 bg-gradient-to-r from-green-100 to-white rounded-full shadow-2xl mt-[1rem]  -ml-20 md:ml-0 md:mt-28  absolute md:relative">
            <Image
              src="/Image/my1.png"
              alt="My Image"
              width={384}
              height={288}
              className="w-[22rem] lg:w-[24rem] h-auto absolute ml-6"
            />
          </div>
        </SlideIn>

        <SlideIn direction="left">
          <motion.div
            animate={{ y: [0, -10, 0] }}
            transition={{
              duration: 1.5,
              ease: "easeInOut",
              repeat: Infinity,
            }}
          >
            <div className="w-16 h-16 md:w-20 md:h-20 lg:w-24 lg:h-24 bg-white rounded-full flex justify-center items-center shadow-2xl absolute ml-[-9rem] sm:ml-[-10rem] md:ml-[18rem] lg:ml-[23.8rem] mt-52 md:mt-[-2.4rem] lg:mt-[-3.8rem]">
              <Image
                src="/logoImage/redux.png"
                alt="Redux Logo"
                width={80}
                height={80}
                className="w-10 h-10 md:w-12 md:h-12 lg:w-16 lg:h-16  "
              />
            </div>
          </motion.div>
        </SlideIn>

        <div className="w-10 h-10 md:w-14 md:h-14 lg:w-16 lg:h-16 bg-gradient-to-r from-green-100 to-white rounded-full shadow-2xl absolute ml-[21rem] sm:ml-[26rem] mt-52 md:mt-14 md:ml-[23rem] lg:mt-6 lg:ml-[42rem]" />
      </div>
    </div>
  );
};

export default HeroSection;
