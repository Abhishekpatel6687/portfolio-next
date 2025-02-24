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
        <div className=" xs:w-56 xs:h-56 md:w-64 md:h-64 lg:w-80 lg:h-80 bg-gradient-to-r from-green-100 to-white rounded-full mt-[-10rem]  lg:mt-[-12rem] ml-[-2rem] shadow-2xl" />

        {/* Small circular white div with shadow */}
        <div className=" hidden md:block w-16 h-16 bg-gradient-to-r from-green-100 to-white rounded-full md:ml-[20rem] lg:ml-[36rem] shadow-xl md:mb-20" />

        <div className="flex justify-center">
          {/* Small circle with a subtle shadow */}
          <div className="w-4 h-4 bg-gradient-to-r from-green-100 to-white rounded-full mr-1 shadow-md" />
          <h1 className="text-xl lg:text-3xl font-bold text-black">Hello,</h1>
          <h1 className="mt-8 text-4xl lg:text-5xl font-bold text-green-950">
            I am Abhishek <br />
            <span className="text-2xl">I am Developer</span>
          </h1>
        </div>

        {/* Larger circular element with shadow */}
        <div className="hidden md:block w-20 h-20 bg-gradient-to-r from-green-100 to-white rounded-full ml-16 mt-24 shadow-2xl" />

        {/* Smaller circle with shadow positioned far away */}
        <div className="hidden md:block w-8 h-8 bg-gradient-to-r from-green-100 to-white rounded-full md:ml-[18rem] lg:ml-[28rem] mt-20 shadow-lg" />
      </div>

      {/* Right Section with content */}
      {/* <div className="relative">  */}
      {/* display: flex;
    flex-wrap: wra */}
      {/* <div className="relative w-full md:w-[56%] bg-red-900 text-black sm:flex md:flex-none md:items-center-none md:justify-center-none sm:items-center sm:justify-center  "> */}
      <div className="relative w-full md:w-[56%] text-black xs:flex xs:justify-center md:block">
        <div className="w-20 h-20 md:w-64 md:h-64 lg:w-80 lg:h-80 bg-gradient-to-r from-green-100 to-white rounded-full ml-[26rem] md:ml-[26rem]   lg:ml-[44rem] shadow-2xl absolute" />
        <div className="w-16 h-16 md:w-24 md:h-24 lg:w-28 lg:h-28 bg-white rounded-full xs:ml-[-14rem] sm:ml-[-20rem] md:ml-[18rem] lg:ml-[25rem] mt-6 md:mt-[5rem] shadow-2xl absolute flex justify-center items-center">
          <img
            src="/logoImage/react.png"
            className="w-12 h-12 md:w-16 md:h-16 lg:w-20 lg:h-20"
          />
        </div>
        <div className="w-16 h-16 md:w-24 md:h-24 lg:w-28 lg:h-28 bg-white rounded-full xs:ml-[-16.4rem] sm:ml-[-22rem] md:ml-[20.6rem] lg:ml-[28rem] mt-28 md:mt-[13rem] lg:mt-[16rem] shadow-2xl absolute">
          <img
            src="/logoImage/js.png"
            className="w-14 h-14 md:w-24 md:h-24 lg:w-24 lg:h-24 md:pr-3 lg:pr-0 md:mt-[-0.8rem] lg:mt-[-0.6rem]"
          />
        </div>
        <div className="w-60 h-60 md:w-72 md:h-72 lg:w-96 lg:h-96 bg-gradient-to-r from-green-100 to-white rounded-full  shadow-2xl mt-[1rem] xs:ml-20 sm:ml-0 md:mt-28 absolute md:relative">
          <img
            src="/Image/my1.png"
            className="md:w-[22rem] lg:w-[24rem]  h-auto absolute ml-6 "
          />
        </div>
        <div className="w-16 h-16 md:w-24 md:h-24 lg:w-28 lg:h-28 bg-white rounded-full xs:-ml-56 sm:ml-[-19rem] absolute md:ml-[18rem] lg:ml-[24rem] shadow-2xl mt-48 md:mt-[-2.4rem] lg:mt-[-3rem] flex justify-center items-center">
          <img
            src="/logoImage/redux.png"
            className="w-10 h-10 md:w-16 md:h-16 lg:w-20 lg:h-20 "
          />
        </div>
        <div className="w-10 h-10 md:w-14 md:h-14 lg:w-16 lg:h-16 bg-gradient-to-r from-green-100 to-white rounded-full absolute xs:ml-[21rem] sm:ml-[26rem] mt-52 md:mt-14 md:ml-[23rem]  lg:mt-6 lg:ml-[42rem] shadow-2xl" />
      </div>
    </div>
  );
};

export default HeroSection;

//     {/* Right Section with content */}
//     <div className="relative bg-slate-400 flex items-center justify-center  ">
//     <div className="w-20 h-20 md:w-64 md:h-64 lg:w-80 lg:h-80 bg-gradient-to-r from-green-900 to-white rounded-full ml-[1rem] md:ml-[26rem]   lg:ml-[44rem] shadow-2xl absolute" />
//   <div className="w-16 h-16 md:w-24 md:h-24 lg:w-28 lg:h-28 bg-white rounded-full md:ml-[18rem] lg:ml-[25rem] mt-[5rem] shadow-2xl absolute flex justify-center items-center" >
//     <img src="/logoImage/react.png" className="w-6 h-6 md:w-16 md:h-16 lg:w-20 lg:h-20"/>
//     </div>
//     <div className="w-20 h-20 md:w-24 md:h-24 lg:w-28 lg:h-28 bg-white rounded-full md:ml-[20.6rem] lg:ml-[28rem] md:mt-[13rem] lg:mt-[16rem] shadow-2xl absolute">
//       <img src="/logoImage/js.png" className="w-20 h-20 md:w-24 md:h-24 lg:w-24 lg:h-24 md:pr-3 lg:pr-0 md:mt-[-0.8rem] lg:mt-[-0.6rem]"/>
//       </div>
//     <div className="w-60 h-60 md:w-72 md:h-72 lg:w-96 lg:h-96 bg-gradient-to-r from-green-100 to-white rounded-full  shadow-2xl  md:mt-28 absolute md:relative">
//     <img src="/Image/my1.png" className="md:w-[22rem] lg:w-[24rem]  h-auto absolute ml-6 " />
//     </div>
//     <div className="w-20 h-20 md:w-24 md:h-24 lg:w-28 lg:h-28 bg-white rounded-full md:ml-[18rem] lg:ml-[24rem] shadow-2xl md:mt-[-2.4rem] lg:mt-[-3rem] flex justify-center items-center" >
//     <img src="/logoImage/redux.png" className="md:w-16 md:h-16 lg:w-20 lg:h-20 "/>
//     </div>
//     <div className="w-10 h-10 md:w-14 md:h-14 lg:w-16 lg:h-16 bg-gradient-to-r from-green-100 to-white rounded-full ml-[38rem] shadow-2xl mt-[-10rem]" />
//     </div>
