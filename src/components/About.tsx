"use client";
// import Link from "next/link";
import Image from "next/image";
import courseData from "../data/music_courses.json";
import { BackgroundGradient } from "./ui/background-gradient";
import Multimedia from "./Multimedia";
import PageLink from "./PageLink";
import SlideIn, { cardVariants } from "./SlideIn";
import { motion } from "framer-motion";

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
    <div className="bg-green-50 relative overflow-hidden">
      {/* Multimedia only on md+ screens */}
      <div className="hidden md:flex justify-start z-50 h-full items-end absolute">
        <Multimedia />
      </div>

      {/* Page link hidden on small screens to avoid overlap */}
      <div className=" text-black inset-x-0 bottom-0 z-30 absolute flex justify-end h-full items-center">
        <PageLink id={2} />
      </div>

      {/* Headings */}
      <div className="pt-12 text-center px-2">
        <h2 className="text-lg text-teal-800 font-semibold tracking-wide">
          I Know that Good Design
        </h2>
        <p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-black">
          means Good Business
        </p>
      </div>

      {/* Cards Section */}
      <div className="py-12">
        <SlideIn direction="stagger">
          <div className="grid z-50 grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4 xxl:grid-cols-8 px-10 md:px-20 gap-8 justify-center">
            {featuredCourses.map((course: Course) => (
              <motion.div
                key={course.id}
                variants={cardVariants}
                className="flex justify-center"
              >
                <BackgroundGradient className="flex flex-col rounded-[22px] z-50 dark:bg-white overflow-hidden h-full max-w-72 w-full">
                  <div className="p-4 sm:p-6 flex flex-col items-center text-center flex-grow">
                    <Image
                      src={course.image || "/logoImage/react.png"}
                      alt={course.title}
                      width={96}
                      height={96}
                      className="w-20 h-20 sm:w-24 sm:h-24 object-contain"
                    />
                    <p className="text-lg sm:text-xl text-black mt-4 mb-2 font-bold">
                      {course.title}
                    </p>
                    <p className="text-sm text-neutral-600 dark:text-neutral-400 flex-grow mb-4">
                      {course.description}
                    </p>
                    {/* <Link className="text-black" href={`/courses/${course.slug}`}>Learn More</Link> */}
                  </div>
                </BackgroundGradient>
              </motion.div>
            ))}
          </div>
        </SlideIn>
      </div>
    </div>
  );
};

export default About;
