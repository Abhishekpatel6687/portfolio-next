"use client";
import React, { useState, useEffect } from "react";
import Image from "next/image";
// import { motion, AnimatePresence } from "framer-motion";
// import Link from "next/link";
// import { Button } from "./ui/moving-border";
import { Spotlight } from "./ui/Spotlight";
import Multimedia from "./Multimedia";
import PageLink from "./PageLink";

const textColor = [
  { id: 0, color: "text-red-400" },
  { id: 1, color: "text-green-400" },
  { id: 2, color: "text-yellow-400" },
];

const HeroSection = () => {
  const profession = [
    "I am React Developer",
    "I am Designer",
    "I am photographer",
  ];
  const [index, setIndex] = useState(0);
  const [displayText, setDisplayText] = useState("");
  const [charIndex, setCharIndex] = useState(0);
  // console.log(index, "displayText");

  const currentColor =
    textColor.find((item) => item.id === index)?.color || "text-gray-700";
  // console.log(currentColor, "currentColor");

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
        }, 1500);
      }
    }, 100);

    return () => clearTimeout(timeout);
  }, [charIndex, index]);
  return (
    // <div className="min-h-screen w-full bg-green-100 flex flex-col overflow-hidden md:flex-row">
    <div className=" min-h-[38rem] relative md:min-h-screen w-full bg-green-100 flex flex-col md:flex-row  overflow-hidden">
      {/* Spotlight component */}
      <Spotlight
        className="-top-40 left-0 md:left-60 md:-top-20 z-50"
        fill="green"
      />
      <div className="hidden md:flex justify-start z-50 h-full  items-end absolute">
        <Multimedia />
      </div>
      <div className=" text-black inset-x-0 bottom-0 z-30 absolute flex justify-end h-full items-center">
        <PageLink id={1} />
      </div>

      {/* Left Section */}
      <div className="w-full md:w-[44%] relative">
        {/* Large Circular Shape */}
        <div className="w-56 h-56 md:w-64 md:h-64 lg:w-80 lg:h-80 bg-gradient-to-r from-green-100  flex justify-center  to-white rounded-full mt-[-10rem] lg:mt-[-12rem] ml-[-2rem] shadow-2xl">
        <Image
  src="/logoImage/Logo3.png"
  alt="Logo 3"
  width={224}
  height={192}
  className="w-32 h-28 sm:w-28 md:w-44 lg:w-56 sm:h-32 md:h-44 lg:h-48 mt-[8.6rem] sm:mt-[8rem] md:mt-[7.4rem] lg:mt-[9.6rem] ml-4 sm:ml-6 sticky top-0"
/>
        </div>

        {/* Small Circular Shape (Hidden on Small Screens) */}
        <div className="hidden md:block w-16 h-16 bg-gradient-to-r from-green-100 to-white rounded-full md:ml-[20rem] lg:ml-[36rem] shadow-xl md:mb-20" />

        {/* Text Section */}
        <div className="flex justify-center xs:mt-4">
          <div className="w-4 h-4 bg-gradient-to-r from-green-100 to-white rounded-full mr-1 shadow-md" />
          <h1 className="text-xl lg:text-3xl font-bold text-black">Hello,</h1>
          <h1 className="xs:mt-5 lg:mt-7 text-4xl lg:text-5xl font-bold text-green-800">
            I am Abhishek <br />
            <span className="text-2xl relative top-[-10px]">
              {/* <div className={`${textColor.map((item)=> item.id === index) && `{item.color}`} text-2xl font-semibold text-start mt-6 h-10`}> */}
              <div
                className={`${currentColor} text-2xl font-semibold text-start mt-6 h-10`}
              >
                {/* <div className=`${index === 0 ? "bg-red-800" :"bg-green-700"}, "text-2xl text-red-700 font-semibold text-start mt-6 h-10"`> */}
                {displayText}
                <span className="animate-pulse">|</span>
              </div>
            </span>
          </h1>
        </div>

        {/* Additional Circular Shapes */}
        <div className="hidden md:block w-20 h-20 bg-gradient-to-r from-green-100 to-white rounded-full ml-16 mt-24 shadow-2xl" />
        <div className="hidden md:block w-8 h-8 bg-gradient-to-r from-green-100 to-white rounded-full md:ml-[18rem] lg:ml-[28rem] mt-20 shadow-lg" />
      </div>

      {/* Right Section */}
      <div className="relative w-full md:w-[56%] flex justify-center md:block">
        {/* Large Circular Shape */}
        <div className="w-20 h-20 md:w-64 md:h-64 lg:w-80 lg:h-80 bg-gradient-to-r from-green-100 to-white rounded-full ml-[26rem] md:ml-[26rem] lg:ml-[44rem] shadow-2xl absolute" />

        {/* React Logo */}
        <div className="w-16 h-16 md:w-24 md:h-24 lg:w-28 lg:h-28 bg-white rounded-full flex justify-center items-center shadow-2xl absolute ml-[-14.2rem] sm:ml-[-20rem] md:ml-[18rem] lg:ml-[24rem] mt-5 md:mt-[5rem]">
        <Image
  src="/logoImage/react.png"
  alt="React Logo"
  width={48} // w-12 = 48px
  height={48} // h-12 = 48px
  className="w-12 h-12 md:w-16 md:h-16 lg:w-20 lg:h-20"
/>
        </div>

        {/* JavaScript Logo */}
        <div className="w-16 h-16 md:w-24 md:h-24 lg:w-28 lg:h-28 bg-white rounded-full shadow-2xl absolute ml-[-17.4rem] sm:ml-[-22rem] md:ml-[20.6rem] lg:ml-[28rem] mt-28 md:mt-[13rem] lg:mt-[16rem]">
        <Image
  src="/logoImage/js.png"
  alt="JavaScript Logo"
  width={56} // w-14 = 56px
  height={56} // h-14 = 56px
  className="w-14 h-14 md:w-24 md:h-24 lg:w-24 lg:h-24 md:pr-3 lg:pr-0 md:mt-[-0.8rem] lg:mt-[-0.6rem]"
/>
        </div>

        {/* Profile Image Section */}
        <div className="w-60 h-60 md:w-72 md:h-72 lg:w-96 lg:h-96 bg-gradient-to-r from-green-100 to-white rounded-full shadow-2xl mt-[1rem] ml-20 sm:ml-0 md:mt-28 absolute md:relative">
        <Image
  src="/Image/my1.png"
  alt="My Image"
  width={384}
  height={288} // for a 4:3 aspect ratio
  className="w-[22rem] lg:w-[24rem] h-auto absolute ml-6"
/>
        </div>

        {/* Redux Logo */}
        <div className="w-16 h-16 md:w-24 md:h-24 lg:w-28 lg:h-28 bg-white rounded-full flex justify-center items-center shadow-2xl absolute ml-[-13.4rem] sm:ml-[-19rem] md:ml-[18rem] lg:ml-[23.8rem] mt-52 md:mt-[-2.4rem] lg:mt-[-3.8rem]">
        <Image
  src="/logoImage/redux.png"
  alt="Redux Logo"
  width={80} // lg:w-20 = 80px (use largest width to avoid resizing issues)
  height={80}
  className="w-10 h-10 md:w-16 md:h-16 lg:w-20 lg:h-20"
/>
        </div>

        {/* Small Decorative Circle */}
        <div className="w-10 h-10 md:w-14 md:h-14 lg:w-16 lg:h-16 bg-gradient-to-r from-green-100 to-white rounded-full shadow-2xl absolute ml-[21rem] sm:ml-[26rem] mt-52 md:mt-14 md:ml-[23rem] lg:mt-6 lg:ml-[42rem]" />
      </div>
    </div>
  );
};

export default HeroSection;
