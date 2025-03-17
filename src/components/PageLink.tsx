"use client";
import React, { useEffect, useState } from "react";

const active = [{ id: 1 }, { id: 2 }, { id: 3 }, { id: 4 }, { id: 5 }];

interface PageLinkProps {
  id: number;
}

const PageLink: React.FC<PageLinkProps> = ({ id }) => {
  console.log(id, "id");

  const [state, setState] = useState<number>(Number(id));

  useEffect(() => {
    console.log("Updated State:", state);
  }, [state]);
  
  return (
    <div className="flex gap-2 flex-col mr-2">
      {active.map((item) => (
        <div key={item.id}>
          <div
            onClick={() => setState(item.id)}
            className={`w-3 h-3 rounded-full shadow-xl cursor-pointer ${
              state === item.id ? "bg-green-800" : "bg-gray-400"
            }`}
          />
        </div>
      ))}
    </div>
  );
};

export default PageLink;
