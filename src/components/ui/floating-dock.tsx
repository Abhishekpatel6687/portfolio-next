"use client";

import { cn } from "@/lib/utils";
import { IconLayoutNavbarCollapse } from "@tabler/icons-react";
import {
  AnimatePresence,
  MotionValue,
  motion,
  useMotionValue,
  useSpring,
  useTransform,
} from "framer-motion";
import Link from "next/link";
import { useRef, useState } from "react";

export const FloatingDock = ({
  items,
  desktopClassName,
  mobileClassName,
}: {
  items: { title: string; icon: React.ReactNode; href: string }[];
  desktopClassName?: string;
  mobileClassName?: string;
}) => {
  return (
    <>
      <FloatingDockDesktop items={items} className={desktopClassName} />
      <FloatingDockMobile items={items} className={mobileClassName} />
    </>
  );
};

const FloatingDockMobile = ({
  items,
  className,
}: {
  items: { title: string; icon: React.ReactNode; href: string }[];
  className?: string;
}) => {
  const [open, setOpen] = useState(false);

  return (
    <div className={cn("relative block md:hidden ", className)}>
      {/* Button */}
      <div className="flex w-screen justify-end items-center -mt-6 px-6">
        <button
          onClick={() => setOpen(!open)}
          className="h-10 w-10  z-50 rounded-full bg-white/50 backdrop-blur-md z- dark:bg-white/10 flex items-center justify-center shadow-lg"
        >
          <motion.div
            animate={{ rotate: open ? 180 : 0 }}
            transition={{ duration: 0.3 }}
          >
            <IconLayoutNavbarCollapse className="h-5 w-5 text-gray-600" />
          </motion.div>
        </button>
      </div>

      {/* Dropdown */}
      <AnimatePresence>
        {open && (
          <motion.div
            layoutId="nav"
            className="absolute top-full mt-2 right-6 flex flex-col items-end gap-2 z-50"
          >
            {items.map((item, idx) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{
                  opacity: 0,
                  y: 10,
                  transition: { delay: idx * 0.05 },
                }}
                transition={{ delay: (items.length - 1 - idx) * 0.05 }}
              >
                <Link href={item.href}>
                  <div className="h-10 w-10 rounded-full bg-white/10 backdrop-blur-md dark:bg-white/10 flex items-center justify-center shadow-md">
                    <div className="h-4 w-4 text-white">{item.icon}</div>
                  </div>
                </Link>
              </motion.div>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

const FloatingDockDesktop = ({
  items,
  className,
}: {
  items: { title: string; icon: React.ReactNode; href: string }[];
  className?: string;
}) => {
  const mouseX = useMotionValue(Infinity);

  return (
    <motion.div
      onMouseMove={(e) => mouseX.set(e.pageX)}
      onMouseLeave={() => mouseX.set(Infinity)}
      className={cn(
        "fixed bottom-6 left-1/2 -translate-x-1/2 z-50 hidden md:flex h-16 w-full max-w-sm justify-center gap-6 items-end rounded-2xl bg-[#d1f5d1]/30 backdrop-blur-md shadow-lg px-6 pb-3",
        className
      )}
    >
      {items.map((item) => (
        <IconContainer key={item.title} mouseX={mouseX} {...item} />
      ))}
    </motion.div>
  );
};

function IconContainer({
  mouseX,
  title,
  icon,
  href,
}: {
  mouseX: MotionValue;
  title: string;
  icon: React.ReactNode;
  href: string;
}) {
  const ref = useRef<HTMLDivElement>(null);

  const distance = useTransform(mouseX, (val) => {
    const bounds = ref.current?.getBoundingClientRect() ?? { x: 0, width: 0 };
    return val - bounds.x - bounds.width / 2;
  });

  const width = useSpring(
    useTransform(distance, [-150, 0, 150], [40, 80, 40]),
    {
      mass: 0.1,
      stiffness: 150,
      damping: 12,
    }
  );

  const height = useSpring(
    useTransform(distance, [-150, 0, 150], [40, 80, 40]),
    {
      mass: 0.1,
      stiffness: 150,
      damping: 12,
    }
  );

  const widthIcon = useSpring(
    useTransform(distance, [-150, 0, 150], [20, 40, 20]),
    {
      mass: 0.1,
      stiffness: 150,
      damping: 12,
    }
  );

  const heightIcon = useSpring(
    useTransform(distance, [-150, 0, 150], [20, 40, 20]),
    {
      mass: 0.1,
      stiffness: 150,
      damping: 12,
    }
  );

  const [hovered, setHovered] = useState(false);

  return (
    <Link href={href} scroll={true} onClick={() => console.log('Navigating to:', href)}>
      <motion.div
        ref={ref}
        style={{ width, height }}
        onMouseEnter={() => setHovered(true)}
        onMouseLeave={() => setHovered(false)}
        className="aspect-square rounded-full bg-white/40 backdrop-blur-sm flex items-center justify-center relative shadow-2xl"
      >
        <AnimatePresence>
          {hovered && (
            <motion.div
              initial={{ opacity: 0, y: 10, x: "-50%" }}
              animate={{ opacity: 1, y: 0, x: "-50%" }}
              exit={{ opacity: 0, y: 2, x: "-50%" }}
              className="px-2 py-0.5 whitespace-pre rounded-md bg-black/80 text-white absolute left-1/2 -translate-x-1/2 -top-8 w-fit text-xs shadow-sm"
            >
              {title}
            </motion.div>
          )}
        </AnimatePresence>
        <motion.div
          style={{ width: widthIcon, height: heightIcon }}
          className="flex items-center justify-center text-white"
        >
          {icon}
        </motion.div>
      </motion.div>
    </Link>
  );
}
