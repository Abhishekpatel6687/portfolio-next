import Link from "next/link";
import { Button } from "./ui/moving-border";
import { Spotlight } from "./ui/Spotlight";

const HeroSection = () => {
  return (
    <div className="min-h-screen w-full bg-green-100 flex ">
    {/* Spotlight component */}
    <Spotlight
      className="-top-40 left-0 md:left-60 md:-top-20"
      fill="white"
    />

    <div className="w-1/2 relative">
      {/* Large circular white div with shadow */}
      <div className="w-80 h-80 bg-gradient-to-r from-green-100 to-white rounded-full mt-[-12rem] ml-[-2rem] shadow-2xl" />

      {/* Small circular white div with shadow */}
      <div className="w-16 h-16 bg-gradient-to-r from-green-100 to-white rounded-full ml-[36rem] shadow-xl mb-20" />

      <div className="flex justify-center ">
        {/* Small circle with a subtle shadow */}
        <div className="w-4 h-4 bg-gradient-to-r from-green-100 to-white rounded-full mr-1 shadow-md" />
        <h1 className="text-3xl font-bold text-black">Hello,</h1>
        <h1 className="mt-8 text-5xl font-bold text-green-950">
          I am Abhishek <br />
          <span className="text-2xl">I am Developer</span>
        </h1>
      </div>

      {/* Larger circular element with shadow */}
      <div className="w-20 h-20 bg-gradient-to-r from-green-100 to-white rounded-full ml-16 mt-24 shadow-2xl" />


      {/* Smaller circle with shadow positioned far away */}
      <div className="w-8 h-8 bg-gradient-to-r from-green-100 to-white rounded-full ml-[28rem] mt-20 shadow-lg" />
    </div>

    {/* Right Section with content */}
    <div className="w-1/2 relative">
    <div className="w-80 h-80 bg-gradient-to-r from-green-100 to-white rounded-full mt-[-12rem] ml-[38rem] shadow-2xl absolute" />
    <div className="w-28 h-28 bg-white rounded-full ml-[25rem] mt-[5rem] shadow-2xl absolute flex justify-center items-center" >
    <img src="/logoImage/react.png" className="w-20 h-20"/>
    </div>
    <div className="w-28 h-28 bg-white rounded-full ml-[28rem] mt-[16rem] shadow-2xl absolute">
      <img src="/logoImage/js.png" className="w-24 h-24 mt-[-0.6rem]"/>
      </div>
    <div className="w-96 h-96 bg-gradient-to-r from-green-100 to-white rounded-full  shadow-2xl  mt-28 relative">
    <img src="/Image/my1.png" className="w-[24rem]  h-auto absolute ml-6 " />
    </div>
    <div className="w-28 h-28 bg-white rounded-full ml-[24rem] shadow-2xl mt-[-3rem] flex justify-center items-center" >
    <img src="/logoImage/redux.png" className="w-20 h-20 "/>
    </div>
    <div className="w-16 h-16 bg-gradient-to-r from-green-100 to-white rounded-full ml-[40rem] shadow-2xl mt-[-10rem]" />

    </div>
  </div>
  );
};

export default HeroSection;
