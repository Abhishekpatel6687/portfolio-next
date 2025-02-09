// import React from "react";
// import { Meteors } from "@/components/ui/meteors";

// export default function page() {
//   return (
//     <div className="relative min-h-screen flex justify-center bg-black text-white">
//       <Meteors number={60} className="z-10 bg-white" />
//       <div className="z-20  max-w-xl mt-36 flex flex-wrap flex-col">
//         <h1 className="text-5xl font-bold mb-4 text-center">Contact Us</h1>
//         <p className="text-gray-400 text-center">
//           Lorem ipsum dolor sit amet consectetur adipisicing elit. Distinctio
//           non quas tempore tempora consequuntur debitis praesentium
//           reprehenderit dolor, consequatur asperiores?
//         </p>
//         <form className=" mt-10">
//           <input
//             type="text"
//             placeholder="Your email address"
//             className="w-full h-9 py-6 pl-4 mb-4 bg-gray-900 rounded-md"
//           />
//           <textarea
//             placeholder="Your message"
//             className="w-full h-44 px-4 py-2 mb-4 bg-gray-900 rounded-md text-white"
//           />
//           <button className="bg-green-600 hover:bg-green-700 text-white font-bold py-2 px-4 rounded-md  ">
//             Get Started
//           </button>
//         </form>
//       </div>
//     </div>
//   );
// }
import React from "react";
import { Meteors } from "@/components/ui/meteors";

export default function Page() {
  return (
    <div className="relative min-h-screen flex justify-center items-center 
    bg-gradient-to-br to-green-950 from-black text-white">
      {/* Meteors background effect */}
      <Meteors number={60} className="z-10" />

      {/* Main content */}
      {/* <div className="z-20 max-w-lg p-8 mt-12 bg-white bg-opacity-30 backdrop-blur-lg rounded-lg shadow-lg text-center"> */}
      <div className="z-20 max-w-lg  p-8 mt-12    text-center">
        <h1 className="text-4xl md:text-6xl font-bold mb-6  text-white">Contact Us</h1>
        <p className="text-lg md:text-xl text-gray-400 mb-8">
          We're here to help! Drop us a message and we'll get back to you soon.
        </p>
        
        {/* Form */}
        <form className="space-y-4 text-start">
          {/* Email input */}
          <input
            type="email"
            placeholder="Your email address"
            className="w-full h-12 px-4 bg-white bg-opacity-80 rounded-md text-gray-600 focus:outline-none focus:ring-2 focus:ring-green-900"
            required
          />

          {/* Message textarea */}
          <textarea
            placeholder="Your message"
            className="w-full h-32 px-4 py-2 bg-white bg-opacity-80 rounded-md text-gray-600 focus:outline-none focus:ring-2 focus:ring-green-900"
            required
          ></textarea>

          {/* Submit button */}
          <button
            type="submit"
            className=" bg-green-700 hover:bg-green-900 text-white font-bold py-2 px-4 rounded-md transition duration-300 ease-in-out transform hover:scale-105"
          >
            Send Message
          </button>
        </form>
      </div>
    </div>
  );
}
