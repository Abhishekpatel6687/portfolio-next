import React from "react";
import { Icon } from "@iconify/react";
import Link from "next/link";

const Multimedia = () => {
  const people = [
    {
      id: 1,
      name: "LinkedIn",
      link: "https://www.linkedin.com/in/abhishek-patel-2a6599240/",
      designation: "Software Engineer",
      image: "mage:linkedin",
    },
    {
      id: 2,
      name: "Github",
      link: "https://github.com/Abhishekpatel6687",
      designation: "UI/UX Designer",
      image: "akar-icons:github-fill",
    },
    {
      id: 3,
      name: "Instagram",
      link: "https://www.instagram.com/simple_boy_abhishek_6687/",
      designation: "Product Manager",
      image: "lineicons:instagram",
    },
    {
      id: 4,
      name: "WhatsApp",
      link: "https://wa.me/917071326687",
      designation: "Data Scientist",
      image: "ph:whatsapp-logo-light",
    },
    {
      id: 5,
      name: "Facebook",
      link: "https://www.facebook.com/share/18UwsXTjdT/",
      designation: "Marketing Specialist",
      image: "formkit:facebook",
    },
  ];
  return (
    <div className="flex gap-1 mx-2 flex-col text-black">
      {people.map((item, i) => (
        <div
          key={i}
          className="h-10 w-10 flex items-center justify-center bg-white hover:bg-green-400 rounded-full 
                   border border-gray-300 shadow-md transition-all duration-300 
                   hover:scale-110 hover:shadow-lg hover:border-white"
        >
          <Link href={item.link || "/"}>
            <Icon
              width={36}
              icon={item.image}
              className="rounded-full cursor-pointer text-gray-500 bg-white p-1 
                   transition-all duration-300 ease-in-out 
                   hover:text-white hover:bg-gray-400"
            />
          </Link>
        </div>
      ))}
    </div>
  );
};

export default Multimedia;
