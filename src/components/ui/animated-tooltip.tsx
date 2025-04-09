"use client";
import React, { useState } from "react";
import { Icon } from "@iconify/react";
import {
  motion,
  useTransform,
  AnimatePresence,
  useMotionValue,
  useSpring,
} from "framer-motion";
import Link from "next/link";
import SlideIn from "@/components/SlideIn";

type TooltipItem = {
  id: number;
  link: string;
  name: string;
  designation: string;
  image: string;
};

export const AnimatedTooltip = ({ items }: { items: TooltipItem[] }) => {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  const springConfig = { stiffness: 100, damping: 5 };
  const x = useMotionValue(0);

  const rotate = useSpring(
    useTransform(x, [-100, 100], [-45, 45]),
    springConfig
  );

  const translateX = useSpring(
    useTransform(x, [-100, 100], [-50, 50]),
    springConfig
  );

  const handleMouseMove = (event: React.MouseEvent<SVGSVGElement>) => {
    const target = event.currentTarget as unknown as HTMLElement;
    const halfWidth = target.offsetWidth / 2;
    x.set(event.nativeEvent.offsetX - halfWidth);
  };

  return (
    <>
      {items.map((item, index) => (
        <SlideIn key={item.name} direction="down" delay={index * 0.4}>
          <div
            className="-mr-4 relative group"
            onMouseEnter={() => setHoveredIndex(item.id)}
            onMouseLeave={() => setHoveredIndex(null)}
          >
            <AnimatePresence mode="popLayout">
              {hoveredIndex === item.id && (
                <motion.div
                  initial={{ opacity: 0, y: 20, scale: 0.6 }}
                  animate={{
                    opacity: 1,
                    y: 0,
                    scale: 1,
                    transition: {
                      type: "spring",
                      stiffness: 260,
                      damping: 10,
                    },
                  }}
                  exit={{ opacity: 0, y: 20, scale: 0.6 }}
                  style={{
                    translateX: translateX,
                    rotate: rotate,
                    whiteSpace: "nowrap",
                  }}
                  className="absolute -top-10 -left-16 translate-x-1/2 flex text-xs flex-col items-center justify-center rounded-md bg-black z-50 shadow-xl px-4 py-1"
                >
                  <div className="font-bold text-white relative z-30 text-base">
                    <Link href={item.link || "/"}>{item.name}</Link>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>

            <Icon
              onMouseMove={handleMouseMove}
              height={100}
              width={100}
              icon={item.image}
              className="object-cover !m-0 !p-0 object-top rounded-full h-12 w-12 border-2 group-hover:scale-105 group-hover:z-30 border-white relative transition duration-500"
            />
          </div>
        </SlideIn>
      ))}
    </>
  );
};
