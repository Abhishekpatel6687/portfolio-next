"use client";
import Link from "next/link";
import courseData from "../data/music_courses.json";
import { BackgroundGradient } from "./ui/background-gradient";
import Multimedia from "./Multimedia";
import PageLink from "./PageLink";

interface Course {
  id: number;
  title: string;
  slug: string;
  description: string;
  price: number;
  instructor: string;
  category: string;
  isFeatured: boolean;
  image: string;
}
const About = () => {
  const featuredCourses = courseData.courses.filter(
    (course: Course) => course.isFeatured
  );

  return (
    <div className="bg-green-50 relative">
     {/* <div className="absolute flex justify-start h-full items-end">
    <Multimedia />
  </div> */}
  <div className=" flex justify-start z-50 h-full  items-end absolute">
      <Multimedia />
        </div>
        <div className=" text-black inset-x-0 bottom-0 z-30 absolute flex justify-end h-full items-center">
      <PageLink id ={2} />
        </div>
      <div className="pt-12">
        <div className="text-center">
          <h2 className="text-lg text-teal-800 font-semibold tracking-wide">
            I Know that Good Design
          </h2>
          <p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-black">
            means Good Business
          </p>
        </div>
      </div>
      <div className="py-12">
        <div className=" grid z-50 grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4 xxl:grid-cols-8 px-10 md:px-20  gap-8 justify-center">
          {featuredCourses.map((course: Course) => (
            <div key={course.id} className="flex justify-center">
              <BackgroundGradient className="flex flex-col rounded-[22px] z-50 dark:bg-white overflow-hidden h-full max-w-72">
                <div className="p-4 sm:p-6 flex flex-col md:flex-4  items-center text-center flex-grow">
                  <img
                    src={course.image}
                    alt="img"
                    className="w-24 h-24 object-cover"
                  />
                  <p className="text-lg sm:text-xl text-black mt-4 mb-2 font-bold">
                    {course.title}
                  </p>
                  <p className="text-sm text-neutral-600 dark:text-neutral-400 flex-grow mb-4 ">
                    {course.description}
                  </p>
                  <Link href={`/courses/${course.slug}`}>Learn More</Link>
                </div>
              </BackgroundGradient>
            </div>
          ))}
        </div>
      </div>
      {/* <div className="mt-20 text-center">
        <Link
          href={"/courses"}
          className="px-4 py-2 rounded border border-neutral-600 text-neutral-700 bg-white hover:bg-gray-100
            transition duration-200"
        >
          View all courses
        </Link>
      </div> */}
    </div>
  );
};

export default About;
