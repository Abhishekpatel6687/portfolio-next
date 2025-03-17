"use client";
import React, { useState } from "react";

const active = [{ id: 1 }, { id: 2 }, { id: 3 }, { id: 4 }, { id: 5 }];

interface PageLinkProps {
  id: number;
}

const PageLink: React.FC<PageLinkProps> = ({ id }) => {
  const [state, setState] = useState<number>(Number(id));
  console.log(state, "state");

  return (
    <div className="flex gap-2 flex-col mr-2">
      {active.map((item) => (  // `id` ki jagah `item` use karo
        <div key={item.id}>  {/* Missing `key` prop fix */}
          <div
            onClick={() => setState(item.id)} // Click pe `state` update hoga
            className={`w-3 h-3 rounded-full shadow-xl ${
              state === item.id ? "bg-green-800" : "bg-gray-400"
            }`}
          />
        </div>
      ))}
    </div>
  );
};

export default PageLink;
