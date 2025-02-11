"use client";
import Link from "next/link";
import courseData from "../data/music_courses.json";
import { BackgroundGradient } from "./ui/background-gradient";

interface Course {
  id: number;
  title: string;
  slug: string;
  description: string;
  price: number;
  instructor: string;
  category: string;
  isFeatured: boolean;
  // image: "/courses/guitar.jpg"
}
const About = () => {
  const featuredCourses = courseData.courses.filter(
    (course: Course) => course.isFeatured
  );

  return (
    <div className="py-12 bg-green-50">
      <div>
        <div className="text-center">
          <h2 className="text-lg text-teal-800 font-semibold tracking-wide">
          I Know that Good Design
                                      
          </h2>
          <p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-black">
          means Good Business  
          </p>
        </div>
      </div>
      <div className="mt-10 ">
        <div className=" grid grid-cols-1 sm:grid-cols-4 lg:grid-cols-5 gap-2 justify-center">
          {featuredCourses.map((course: Course) => (
            <div key={course.id} className="flex justify-center">
              <BackgroundGradient className="flex flex-col rounded-[22px]  dark:bg-white overflow-hidden h-full max-w-60">
                <div className="p-4 sm:p-6 flex flex-col items-center text-center flex-grow">
                  <p className="text-lg sm:text-xl text-black mt-4 mb-2 dark:text-neutral-200">{course.title}</p>
                  <p className="text-sm text-neutral-600 dark:text-neutral-400 flex-grow mb-4 ">{course.description}</p>
                  <Link href={`/courses/${course.slug}`}>Learn More</Link>
                </div>
              </BackgroundGradient>
            </div>
          ))}
        </div>
      </div>
      <div className="mt-20 text-center">
        <Link
          href={"/courses"}
          className="px-4 py-2 rounded border border-neutral-600 text-neutral-700 bg-white hover:bg-gray-100
            transition duration-200"
        >
          View all courses
        </Link>
      </div>
    </div>
  );
};

export default About;
