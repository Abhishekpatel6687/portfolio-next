"use client";

import React, { useEffect, useState } from "react";
import { InfiniteMovingCards } from "./ui/infinite-moving-cards";
import Multimedia from "./Multimedia";
import PageLink from "./PageLink";

const testimonials = [
  {
    name: "Netflix",
    title: "Hamlet",
    image: "/projects/netflix.png",
  },
  {
    name: "e-commarce",
    title: "Moby-Dick",
    image: "/netflixProject/login.png",
  },
  {
    name: "e-commarce",
    title: "Pride and Prejudice",
    image: "/netflixProject/show.png",
  },
  //==================
  {
    name: "college",
    title: "A Dream Within a Dream",
    image: "/projects/college.png",
  },
  {
    name: "college",
    title: "A Dream Within a Dream",
    image: "/collegeProject/founder.png",
  },
  //=======
  {
    name: "e-commarce",
    title: "Hamlet",
    image: "/projects/e-com.png",
  },
  {
    name: "e-commarce",
    title: "Moby-Dick",
    image: "/e-comProject/products.png",
  },
  {
    name: "e-commarce",
    title: "Pride and Prejudice",
    image: "/e-comProject/productDetails.png",
  },
  {
    name: "e-commarce",
    title: "A Dream Within a Dream",
    image: "/e-comProject/addToCart.png",
  },
  //=========================
];

const MovingCard = () => {
  return (
    <div className="relative h-[32rem] w-full  dark:bg-black dark:bg-grid-white/[0.2]">
      {/* Multimedia Section */}
      {/* <div className="absolute h-full flex justify-start items-end z-50">
        <Multimedia />
      </div>
      <div className=" text-black inset-x-0 bottom-0 absolute flex justify-end h-full items-center">
        <PageLink />
      </div> */}

      {/* Content Section */}
      <div className="relative flex flex-col pt-8 items-center justify-center overflow-hidden">
        {/* Title */}
        <h2 className="text-3xl font-bold text-center mb-8 z-10 text-gray-900 dark:text-white">
          Here are my creative web applications and projects.
        </h2>

        {/* Infinite Scroll Cards */}
        <div className="flex justify-center w-full overflow-hidden px-1 sm:px-4">
          <div className="w-full max-w-7xl">
            <InfiniteMovingCards
              items={testimonials}
              direction="right"
              speed="slow"
              // className="hover:scale-105 transition-transform duration-500 ease-in-out"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default MovingCard;
