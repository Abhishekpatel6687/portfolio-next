import React from 'react'
import { Icon } from "@iconify/react";

const Multimedia = () => {
  const people = [
    {
      id: 1, 
      name: "LinkedIn",
      designation: "Software Engineer",
      image:"mage:linkedin",
    },
    {
      id: 2,
      name: "Github",
      designation: "UI/UX Designer",
      image:"akar-icons:github-fill",
    },
    {
      id: 3,
      name: "Instagram",
      designation: "Product Manager",
      image:"lineicons:instagram",
    },
    {
      id: 4,
      name: "WhatsApp",
      designation: "Data Scientist",
      image:"ph:whatsapp-logo-light",
    },
    {
      id: 5,
      name: "Facebook",
      designation: "Marketing Specialist",
      image:"formkit:facebook",
    },
    // {
    //   id: 6,
    //   name: "Michael Wilson",
    //   designation: "DevOps Engineer",
    //   image:"https://images.unsplash.com/photo-1544717305-996b815c338c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80",
    // },
  ];
  return (
    <div className="flex gap-1 ml-2 flex-col text-black">
    {people.map((item, i) => (
      <div
        key={i}
        className="h-10 w-10 flex items-center justify-center bg-white hover:bg-gray-400 rounded-full 
                   border border-gray-300 shadow-md transition-all duration-300 
                   hover:scale-110 hover:shadow-lg hover:border-white"
      >
        <Icon
          width={28}
          icon={item.image}
          className="rounded-full cursor-pointer text-gray-500 bg-white p-1 
                     transition-all duration-300 ease-in-out 
                     hover:text-white hover:bg-gray-400"
        />
      </div>
    ))}
  </div>
  )
}

export default Multimedia