import Link from "next/link";
import { Button } from "./ui/moving-border";
import { Spotlight } from "./ui/Spotlight";

const HeroSection = () => {
  return (
    // <div className="h-auto md:h-[40rem]  w-full rounded-md flex flex-col items-center justify-center relative overflow-hidden mx-auto py-10 md:py-0">
    //   <div className="p-4 relative z-10 w-full text-center">
    //     <Spotlight
    //       className="-top-40 left-0 md:left-60 md:-top-20"
    //       fill="white"
    //     />
    //     <h1 className="mt-20 md:mt-0 text-4xl md:text-7xl font-bold bg-clip-text text-transparent bg-gradient-to-b from-neutral-50 to-neutral-400">
    //       Master the Art of Music
    //     </h1>
    //     <p className="mt-4 font-normal text-base md:text-lg text-neutral-300 max-w-lg mx-auto">
    //       Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam,
    //       aliquam. Numquam, deleniti? Commodi, sed quasi quisquam.
    //     </p>
    //     <div className="mt-4">
    //       <Link href={"/courses"}>
    //         <Button
    //           borderRadius="1.75rem"
    //           className="bg-white dark:bg-slate-900 text-black dark:text-white border-neutral-200 dark:border-slate-800"
    //         >
    //           Explore courses
    //         </Button>
    //       </Link>
    //     </div>
    //   </div>
    // </div>
    <div className="min-h-screen w-full bg-red-100 flex text-black">
    {/* Spotlight component */}
    <Spotlight
      className="-top-40 left-0 md:left-60 md:-top-20"
      fill="white"
    />

    <div className="w-1/2 relative">
      {/* Large circular white div with shadow */}
      <div className="w-80 h-80 bg-backColor rounded-full mt-[-12rem] ml-[-2rem] shadow-2xl" />

      {/* Small circular white div with shadow */}
      <div className="w-16 h-16 bg-backColor rounded-full ml-[36rem] shadow-xl mb-20" />

      <div className="flex justify-center ">
        {/* Small circle with a subtle shadow */}
        <div className="w-4 h-4 bg-backColor rounded-full mr-1 shadow-md" />
        <h1 className="text-3xl font-bold text-black">Hello,</h1>
        <h1 className="mt-8 text-5xl font-bold text-green-950">
          I am Abhishek <br />
          <span className="text-2xl">I am Developer</span>
        </h1>
      </div>

      {/* Larger circular element with shadow */}
      <div className="w-20 h-20 bg-backColor rounded-full ml-16 mt-24 shadow-2xl" />

      {/* Smaller circle with shadow positioned far away */}
      <div className="w-8 h-8 bg-backColor rounded-full ml-[28rem] mt-20 shadow-lg" />
    </div>

    {/* Right Section with content */}
    <div className="w-1/2 relative">
    <div className="w-80 h-80 bg-backColor rounded-full mt-[-12rem] ml-[38rem] shadow-2xl absolute" />
    <div className="w-28 h-28 bg-backColor rounded-full ml-[25rem] mt-[5rem] shadow-2xl absolute flex justify-center items-center" >
    <img src="/logoImage/react.png" className="w-20 h-20"/>
    </div>
    <div className="w-28 h-28 bg-backColor rounded-full ml-[28rem] mt-[16rem] shadow-2xl absolute">
      <img src="/logoImage/js.png" className="w-24 h-24 mt-[-0.6rem]"/>
      </div>
    <div className="w-96 h-96 bg-backColor rounded-full  shadow-2xl  mt-28 relative">
    <img src="/Image/my1.png" className="w-[24rem]  h-auto absolute ml-6 " />
    </div>
    <div className="w-28 h-28 bg-backColor rounded-full ml-[24rem] shadow-2xl mt-[-3rem] flex justify-center items-center" >
    <img src="/logoImage/redux.png" className="w-20 h-20 "/>
    </div>
    <div className="w-16 h-16 bg-backColor rounded-full ml-[40rem] shadow-2xl mt-[-10rem]" />

    </div>
  </div>
  );
};

export default HeroSection;
