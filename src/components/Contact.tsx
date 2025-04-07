"use client";

import React, { useState } from "react";
import { Meteors } from "@/components/ui/meteors";
import Multimedia from "./Multimedia";
import PageLink from "./PageLink";

export default function Page() {
  // const [data, setData] = useState(name:"name", email:"email", message:"message")
  // function Submit(data) {
  //   console.log(data,"data")
  //   try{
  //     console.log("abhishek")
  //     alert("submited success")
  //   } catch(error){
  //     alert('If you\'d like your volume saved, turn on cookies')
  //   }
    
  // }

  return (
    <div className="relative min-h-screen bg-gradient-to-br to-green-950 from-black text-white">
      <div className=" flex justify-start z-10 h-full  items-end absolute">
        <Multimedia />
      </div>
     
      <div className="flex justify-between items-center">
        {/* Meteors background effect */}
        <Meteors number={60} className="z-10" />

        {/* Main content */}
      <div className="w-[96%] min-h-screen flex justify-center items-center ">
        <div className="z-20 p-6 sm:p-8 w-[80rem] mt-4 text-center ">
          <h1 className="text-2xl sm:text-4xl font-bold mb-4  text-white">
            Take a coffee & chat with me
          </h1>
          <p className="xl:block hidden text-sm text-gray-400 mb-8">
            We're here to help! Drop us a message and we'll get back to you
            soon.
          </p>

          <div className="flex md:gap-12 flex-col rounded-2xl xl:mt-16 md:flex-row md:py-5">
            <div className="text-black flex md:w-1/2  p-4  rounded-xl flex-col gap-4 mb-4 ">
              <div className="flex flex-wrap justify-between gap-4">
                <a
                  href="mailto:abhishekpatel6687@gmail.com"
                  className="flex gap-2 px-2 py-2 rounded-lg bg-pink-50 items-center  hover:bg-pink-100"
                  aria-label="Send email to Abhishek Patel"
                >
                  <img src="/Image/gmail.png" width={34} alt="Gmail Icon" />
                  <p className="text-sm">abhishekpatel6687@gmail.com</p>
                </a>

                <a
                  href="tel:+917071326687"
                  className="flex gap-1 pr-24 pl-1 py-2 rounded-lg bg-green-100 items-center  hover:bg-green-200"
                  aria-label="Call Abhishek Patel"
                >
                  <img src="/Image/mobile.png" width={34} alt="Phone Icon" />
                  <p className="text-sm">+91 7071326687</p>
                </a>
              </div>

              <div className="flex gap-1 px-2 py-2 rounded-lg bg-green-50 items-center  hover:bg-green-100">
                <img src="/Image/mobile.png" width={34} alt="Phone Icon" />
                <p className="text-sm text-start">
                  Dwarika sector-8, Delhi, 110077
                </p>
              </div>
              <div className="rounded-lg overflow-hidden ">
                <iframe
                  className="w-full h-48 rounded-lg"
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3560.979465468172!2d81.01013577425218!3d26.808782464551367!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x399bfb177ba59213%3A0xfd12dad33afbc85d!2sPhoenix%20Palassio!5e0!3m2!1sen!2sin!4v1695056337657!5m2!1sen!2sin"
                  allowFullScreen
                  loading="lazy"
                ></iframe>
              </div>
            </div>
            <form
  action="https://formsubmit.co/abhishekpatel6687@gmail.com"
  method="POST"
  className="space-y-4 text-start text-black flex md:w-1/2 p-4 rounded-xl flex-col"
>
  <input type="hidden" name="_captcha" value="false" />
  <input type="hidden" name="_next" value="https://yourwebsite.com/thank-you" />
  <input type="text" name="_honey" style={{ display: "none" }} />

  <p className="text-sm block xl:hidden text-gray-400 mb-2 md:mb-4">
    We're here to help! Drop us a message and we'll get back to you soon.
  </p>

  <input
    type="text"
    name="name"
    placeholder="Your Name"
    className="w-full h-12 px-4 bg-white bg-opacity-80 rounded-md text-gray-600 focus:outline-none focus:ring-2 focus:ring-green-900"
    required
  />
  <input
    type="email"
    name="email"
    placeholder="Your Email"
    className="w-full h-12 px-4 bg-white bg-opacity-80 rounded-md text-gray-600 focus:outline-none focus:ring-2 focus:ring-green-900"
    required
  />
  <textarea
    name="message"
    placeholder="Your Message"
    className="w-full h-32 px-4 py-2 bg-white bg-opacity-80 rounded-md text-gray-600 focus:outline-none focus:ring-2 focus:ring-green-900"
    required
  ></textarea>

  <button
    type="submit"
    className="bg-green-700 w-40 hover:bg-green-900 text-white font-bold py-2 px-4 rounded-md transition duration-300 ease-in-out transform hover:scale-105"
  >
    Send Message
  </button>
</form>

          </div>
        </div>
      </div>
        
        <div className="text-black z-10 flex justify-end items-center">
        <PageLink id={5} />
      </div>
      </div>

    </div>
  );
}
