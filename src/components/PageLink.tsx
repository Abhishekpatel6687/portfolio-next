"use client";
import { useRouter } from "next/navigation";
// import React, { useState, useEffect } from "react";

const active = [
  { id: 1, route: "/" }, 
  { id: 2, route: "about" }, 
  { id: 3, route: "upcommingWebinars" }, 
  { id: 4, route: "skillsEducation" }, 
  { id: 5, route: "contact" }, 
  // { id: 6, route: "movingCard" },
  // { id: 7, route: "instructors" },
];
interface PageLinkProps {
  id: number;
}

const PageLink: React.FC<PageLinkProps> = ({ id }) => {  
  const state = id; 
  // console.log("state", state)
  const router = useRouter();


  const handleClick = (route: string) => {
    router.push(`#${route}`); 
  };

  return (
    <div className="flex gap-2 flex-col mr-2">
      {active.map((item) => (
        <div key={item.id}>
          <div
            onClick={() => handleClick(item.route)}
            className={`w-3 h-3 rounded-full shadow-xl cursor-pointer transition-all duration-300 ${
              state === item.id ? "bg-green-800" : "bg-gray-400"
            }`}
          />
        </div>
      ))}
    </div>
  );
};

export default PageLink;
