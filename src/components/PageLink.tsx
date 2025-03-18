"use client";
import { useRouter } from "next/navigation";  // ✅ App Router ka import
import React, { useState, useEffect } from "react";

const active = [
  { id: 1, route: "hero" }, 
  { id: 2, route: "about" }, 
  { id: 3, route: "contact" }, 
  { id: 4, route: "upcommingWebinars" }, 
  { id: 5, route: "skillsEducation" }
];

const PageLink: React.FC = () => {
  const [state, setState] = useState<number>(1);  // ✅ State ko number rakho
  const router = useRouter();

  useEffect(() => {
    console.log("Updated State:", state);
  }, [state]);

  const handleClick = (id: number, route: string) => {
    setState(id); 
    router.push(`#${route}`);  // ✅ Direct section par scroll karega
  };

  return (
    <div className="flex gap-2 flex-col mr-2">
      {active.map((item) => (
        <div key={item.id}>
          <div
            onClick={() => handleClick(item.id, item.route)}
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
