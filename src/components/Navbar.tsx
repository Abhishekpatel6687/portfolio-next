"use client";
import React, { useState } from "react";
import { Menu, MenuItem } from "./ui/navbar-menu";
import { cn } from "@/lib/utils";
import Link from "next/link";

const Navbar = ({ className }: { className?: string }) => {
  const [active, setActive] = useState<string | null>(null);
  return (
    <div
      className={cn("fixed top-6 inset-x-0 max-w-2xl mx-auto z-50", className)}
    >
      <Menu setActive={setActive}>
        <Link href={"/"}>
          <MenuItem
            setActive={setActive}
            active={active}
            item="Home"
          ></MenuItem>
        </Link>
        {/* <MenuItem setActive={setActive} active={active} item="Our Courses">
          <div className="flex flex-col space-y-4 text-sm">
            <HoveredLink href="/courses">All Courses</HoveredLink>
            <HoveredLink href="/">Basic Music Theory</HoveredLink>
            <HoveredLink href="/">Advanced Composition</HoveredLink>
            <HoveredLink href="/">Songwriting</HoveredLink>
            <HoveredLink href="/">Music Production</HoveredLink>
          </div>
        </MenuItem> */}
            <Link href={"/about"}>
          <MenuItem
            setActive={setActive}
            active={active}
            item="About"
          ></MenuItem>
        </Link>
        <Link href={"/courses"}>
          <MenuItem
            setActive={setActive}
            active={active}
            item="Work"
          ></MenuItem>
        </Link>
        <Link href={"/skills"}>
          <MenuItem
            setActive={setActive}
            active={active}
            item="Skills"
          ></MenuItem>
        </Link>
        <Link href={"/contact"}>
          <MenuItem
            setActive={setActive}
            active={active}
            item="Contact"
          ></MenuItem>
        </Link>
      </Menu>
    </div>
  );
};

export default Navbar;
