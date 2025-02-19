import Link from "next/link";
import { Button } from "./ui/moving-border";
import { Spotlight } from "./ui/Spotlight";

const HeroSection = () => {
  return (
    <div className="min-h-screen w-full bg-green-100 flex flex-col overflow-hidden md:flex-row">
    {/* Spotlight component */}
    {/* <Spotlight
      className="-top-40 left-0 md:left-60 md:-top-20"
      fill="white"
    /> */}

    <div className="w-full md:w-[44%] relative">
      {/* Large circular white div with shadow */}
      <div className="w-64 h-64 lg:w-80 lg:h-80 bg-gradient-to-r from-green-100 to-white rounded-full mt-[-10rem]  lg:mt-[-12rem] ml-[-2rem] shadow-2xl" />

      {/* Small circular white div with shadow */}
      <div className="w-16 h-16 bg-gradient-to-r from-green-100 to-white rounded-full md:ml-[20rem] lg:ml-[36rem] shadow-xl md:mb-20" />

      <div className="flex md:justify-center bg-red-400">
        {/* Small circle with a subtle shadow */}
        <div className="w-4 h-4 bg-gradient-to-r from-green-100 to-white rounded-full mr-1 shadow-md" />
        <h1 className="text-xl lg:text-3xl font-bold text-black">Hello,</h1>
        <h1 className="mt-8 text-4xl lg:text-5xl font-bold text-green-950">
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
    <div className="relative hidden md:block ">
    <div className=" md:w-64 md:h-64 lg:w-80 lg:h-80 bg-gradient-to-r from-green-100 to-white rounded-full md:ml-[26rem]  lg:ml-[44rem] shadow-2xl absolute" />
    <div className="md:w-24 md:h-24 lg:w-28 lg:h-28 bg-white rounded-full md:ml-[18rem] lg:ml-[25rem] mt-[5rem] shadow-2xl absolute flex justify-center items-center" >
    <img src="/logoImage/react.png" className="md:w-16 md:h-16 lg:w-20 lg:h-20"/>
    </div>
    <div className="md:w-24 md:h-24 lg:w-28 lg:h-28 bg-white rounded-full md:ml-[20.6rem] lg:ml-[28rem] md:mt-[13rem] lg:mt-[16rem] shadow-2xl absolute">
      <img src="/logoImage/js.png" className="md:w-24 md:h-24 lg:w-24 lg:h-24 md:pr-3 lg:pr-0 md:mt-[-0.8rem] lg:mt-[-0.6rem]"/>
      </div>
    <div className="md:w-72 md:h-72 lg:w-96 lg:h-96 bg-gradient-to-r from-green-100 to-white rounded-full  shadow-2xl  mt-28 relative">
    <img src="/Image/my1.png" className="md:w-[22rem] lg:w-[24rem]  h-auto absolute ml-6 " />
    </div>
    <div className="md:w-24 md:h-24 lg:w-28 lg:h-28 bg-white rounded-full md:ml-[18rem] lg:ml-[24rem] shadow-2xl md:mt-[-2.4rem] lg:mt-[-3rem] flex justify-center items-center" >
    <img src="/logoImage/redux.png" className="md:w-16 md:h-16 lg:w-20 lg:h-20 "/>
    </div>
    <div className="md:w-14 md:h-14 lg:w-16 lg:h-16 bg-gradient-to-r from-green-100 to-white rounded-full ml-[38rem] shadow-2xl mt-[-10rem]" />
    </div> 
    
  </div>
  );
};

export default HeroSection;
