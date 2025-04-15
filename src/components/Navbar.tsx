"use client";

import React from "react";
import { FloatingDock } from "./ui/floating-dock";
import {
  IconMessage2 ,
  IconSchool ,
  IconFolderCode ,
  IconHome,
  IconAddressBook ,
} from "@tabler/icons-react";

const Navbar = () => {

  const links = [
    {
      title: "Home",
      icon: <IconHome className="h-full w-full text-gray-600" />,
      href: "#home",
    },
    {
      title: "About",
      icon: <IconAddressBook   className="h-full w-full text-gray-600" />,
      href: "#about",
    },
    {
      title: "Projects",
      icon: <IconFolderCode  className="h-full w-full text-gray-600" />,
      href: "#projects",
    },
    {
      title: "Skills & Education",
      icon: <IconSchool  className="h-full w-full text-gray-600" />,
      href: "#skillsEducation",
    },
    {
      title: "Contact",
      icon: <IconMessage2  className="h-full w-full text-gray-600" />,
      href: "#contact",
    },
  ];

  return (
    <>
      <div className="fixed top-6 inset-x-0 mx-auto flex justify-center z-40">
        <FloatingDock items={links} mobileClassName="translate-y-4" />
      </div>
    </>
  );
};

export default Navbar;
