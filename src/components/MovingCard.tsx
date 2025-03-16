"use client";

import React, { useEffect, useState } from "react";
import { InfiniteMovingCards } from "./ui/infinite-moving-cards";

const testimonials = [
  {
   name: "e-commarce",
    title: "A Tale of Two Cities",
    image: "/projects/e-com.png",
  },
  {
   name: "e-commarce",
    title: "Hamlet",
    image: "/projects/e-com.png",
  },
  {
  name: "e-commarce",
    title: "A Dream Within a Dream",
    image: "/projects/e-com.png",
  },
  {
    name: "e-commarce",
    title: "Pride and Prejudice",
    image: "/projects/e-com.png",
  },
  {
   name: "e-commarce",
    title: "Moby-Dick",
    image: "/projects/e-com.png",
  },
];

const MovingCard = () => {
  return (
    <div className="h-[32rem] w-full dark:bg-black dark:bg-grid-white/[0.2] relative flex flex-col items-center justify-center overflow-hidden">
      <h2 className=" text-3xl font-bold text-center mb-8 z-10">
       Here my creative web applications and Projects.
      </h2>
      <div className="flex justify-center w-full overflow-hidden px-1 sm:px-4">
        <div className="w-full max-w-6xl ">
          <InfiniteMovingCards
            items={testimonials}
            direction="right"
            speed="slow"
          />
        </div>
      </div>
    </div>
  );
};

export default MovingCard;
