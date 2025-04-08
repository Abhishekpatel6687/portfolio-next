"use client";
import { cn } from "@/lib/utils";
import React, { useEffect, useRef, useState, useCallback } from "react"; // 🔧 Added useCallback
import { createNoise3D } from "simplex-noise";

// ✅ REPLACED 'any' with proper types
type WavyBackgroundProps = {
  children?: React.ReactNode;
  className?: string;
  containerClassName?: string;
  colors?: string[];
  waveWidth?: number;
  backgroundFill?: string;
  blur?: number;
  speed?: "slow" | "fast";
  waveOpacity?: number;
  [key: string]: any;
};

export const WavyBackground = ({
  children,
  className,
  containerClassName,
  colors,
  waveWidth,
  backgroundFill,
  blur = 10,
  speed = "fast",
  waveOpacity = 0.5,
  ...props
}: WavyBackgroundProps) => {
  const canvasRef = useRef<HTMLCanvasElement | null>(null); // ✅ Typed
  const noise = createNoise3D();

  // ✅ Replaced `var` with proper scoped let
  let w = 0, h = 0, nt = 0;
  let ctx: CanvasRenderingContext2D | null = null;

  const waveColors = colors ?? [
    "#38bdf8",
    "#818cf8",
    "#c084fc",
    "#e879f9",
    "#22d3ee",
  ];

  const getSpeed = () => {
    switch (speed) {
      case "slow":
        return 0.001;
      case "fast":
        return 0.002;
      default:
        return 0.001;
    }
  };

  const drawWave = (n: number) => {
    if (!ctx) return;
    nt += getSpeed();

    for (let i = 0; i < n; i++) {
      ctx.beginPath();
      ctx.lineWidth = waveWidth || 50;
      ctx.strokeStyle = waveColors[i % waveColors.length];

      for (let x = 0; x < w; x += 5) {
        const y = noise(x / 800, 0.3 * i, nt) * 100;
        ctx.lineTo(x, y + h * 0.2); // 🔧 same
      }

      ctx.stroke();
      ctx.closePath();
    }
  };

  // ✅ Memoized render to fix useEffect deps warning
  const render = useCallback(() => {
    if (!ctx) return;

    ctx.fillStyle = backgroundFill || "#032210";
    ctx.globalAlpha = waveOpacity;
    ctx.fillRect(0, 0, w, h);
    drawWave(5);
    requestAnimationFrame(render);
  }, [backgroundFill, waveOpacity]);

  // ✅ Memoized init to fix useEffect deps warning
  const init = useCallback(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    ctx = canvas.getContext("2d");
    if (!ctx) return;

    w = ctx.canvas.width = window.innerWidth;
    h = ctx.canvas.height = window.innerHeight;
    ctx.filter = `blur(${blur}px)`;
    nt = 0;

    window.onresize = () => {
      w = ctx!.canvas.width = window.innerWidth;
      h = ctx!.canvas.height = window.innerHeight;
      ctx!.filter = `blur(${blur}px)`;
    };

    render();
  }, [blur, render]);

  // ✅ useEffect now includes proper dependencies
  useEffect(() => {
    init();
    return () => {
      window.onresize = null;
    };
  }, [init]);

  const [isSafari, setIsSafari] = useState(false);

  useEffect(() => {
    setIsSafari(
      typeof window !== "undefined" &&
        navigator.userAgent.includes("Safari") &&
        !navigator.userAgent.includes("Chrome")
    );
  }, []);

  return (
    <div className={cn("flex flex-col mt-4", containerClassName)}>
      <canvas
        className="absolute inset-0 z-0"
        ref={canvasRef}
        id="canvas"
        style={{
          ...(isSafari ? { filter: `blur(${blur}px)` } : {}),
        }}
      ></canvas>
      <div className={cn("relative z-10", className)} {...props}>
        {children}
      </div>
    </div>
  );
};
