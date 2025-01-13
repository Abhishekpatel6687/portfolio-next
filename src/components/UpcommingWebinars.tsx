"use client";
import Link from "next/link";
import { HoverEffect } from "./ui/card-hover-effect";

const data = [
    {
      id: 1,
      title: "Understanding Music Theory",
      description: "Dive deep into the fundamentals of music theory and enhance your musical skills.",
      slug: "understanding-music-theory",
      isFeatured: true,
    },
    {
      id: 2,
      title: "The Art of Digital Illustration",
      description: "Explore the techniques of digital painting and illustration to create captivating artwork.",
      slug: "the-art-of-digital-illustration",
      isFeatured: false,
    },
    {
      id: 3,
      title: "Mastering Frontend Development",
      description: "Learn advanced frontend development techniques with React, Redux, and Tailwind CSS.",
      slug: "mastering-frontend-development",
      isFeatured: true,
    },
    {
      id: 4,
      title: "Exploring the Wonders of Space",
      description: "Uncover the mysteries of the universe with insights into space exploration and technology.",
      slug: "exploring-the-wonders-of-space",
      isFeatured: false,
    },
    {
      id: 5,
      title: "Effective Time Management Tips",
      description: "Enhance your productivity with practical time management techniques for daily life.",
      slug: "effective-time-management-tips",
      isFeatured: true,
    },
    {
      id: 6,
      title: "Healthy Living Through Nutrition",
      description: "Discover the secrets of balanced nutrition to maintain a healthy and vibrant lifestyle.",
      slug: "healthy-living-through-nutrition",
      isFeatured: false,
    },
  ];
  

const UpcommingWebinars = () => {
  return (
    <div className=" bg-gray-900 p-12">
      <div className="  mx=auto px-4 sm:px-6">
        <div className=" text-center text-teal-600 font-semibold tracking-wide uppercase">
          <h2 className="text-base ">FEATURED WEBINARS</h2>
          <p className="mt-2 leading-8 text-3xl font-extrabold tracking-tight text-white">Enhance Your Musical Journey</p>
        </div>
        <div className=" mt-10">
        <HoverEffect items={data.map(data => (
            {
                title:data.title,
                description:data.description,
                link:'/'
            }
        ))} />
      </div>
      <div className="mt-10 text-center">
<Link href={"/"} className="rounded border border-neutral-600 px-4 py-2 text-neutral-700 bg-white hover:bg-gray-100 transition duration-200">
View all webinars
</Link>
      </div>
      </div>
    </div>
  );
};

export default UpcommingWebinars;
