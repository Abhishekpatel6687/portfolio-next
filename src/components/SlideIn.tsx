"use client";
import { motion, Variants } from "framer-motion";
import React, { useEffect, useState } from "react";

// Define Direction Types
type DirectionType =
  | "up"
  | "down"
  | "left"
  | "right"
  | "inner"
  | "bounce"
  | "stagger"
  | "combo-bounce-left";

// Props definition
type Props = {
  children: React.ReactNode;
  direction?: DirectionType;
  delay?: number;
};

// Variants for slide-in animations
const getVariants = (direction: DirectionType, delay: number = 0): Variants => {
  const dist = 100;
  const directions = {
    up: { y: dist, x: 0 },
    down: { y: -dist, x: 0 }, // Comes in from above
    left: { y: 0, x: dist },
    right: { y: 0, x: -dist },
    inner: { y: 0, x: 0 },
    bounce: { y: 0, x: 0 },
    stagger: { y: 0, x: 0 },
  };

  if (direction === "bounce") {
    return {
      hidden: { y: 0 },
      visible: {
        y: [0, -20, 0],
        transition: {
          duration: 1.5,
          repeat: Infinity,
          ease: "easeInOut",
          delay,
        },
      },
    };
  }

  if (direction === "combo-bounce-left") {
    return {
      hidden: { opacity: 0, x: 100, y: 0, scale: 1 },
      visible: {
        opacity: 1,
        x: 0,
        y: [0, -8, 0],
        scale: 1,
        transition: {
          x: { duration: 0.8, ease: "easeOut" },
          y: {
            duration: 1.5,
            repeat: Infinity,
            ease: "easeInOut",
          },
          opacity: { duration: 0.8, ease: "easeOut" },
          delay,
        },
      },
    };
  }

  if (direction === "stagger") {
    return {
      hidden: {},
      visible: {
        transition: {
          staggerChildren: 0.3,
          delayChildren: delay,
        },
      },
    };
  }

  const isInner = direction === "inner";

  return {
    hidden: {
      opacity: 0,
      scale: isInner ? 0 : 1,
      ...directions[direction],
    },
    visible: {
      opacity: 1,
      scale: 1,
      x: 0,
      y: 0,
      transition: {
        duration: 1.2,
        delay,
        ease: "easeOut",
      },
    },
  };
};

// Card animation variant for separate use
export const cardVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: "easeOut",
    },
  },
};

// SlideIn component
const SlideIn = ({ children, direction = "up", delay = 0 }: Props) => {
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true); // Ensure rendering only on client-side
  }, []);

  if (!isClient) return null;

  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once: false, amount: 0.2 }}
      variants={getVariants(direction, delay)}
    >
      {children}
    </motion.div>
  );
};

export default SlideIn;
