"use client";
import { cn } from "@/lib/utils";
import React, { useEffect, useRef, useState, useCallback } from "react";
import { createNoise3D } from "simplex-noise";

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
  [key: string]: unknown; // ✅ Replace 'any' with 'unknown'
};

export const WavyBackground = ({
  children,
  className,
  containerClassName,
  colors,
  waveWidth = 50,
  backgroundFill = "#032210",
  blur = 10,
  speed = "fast",
  waveOpacity = 0.5,
  ...props
}: WavyBackgroundProps) => {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const ctx = useRef<CanvasRenderingContext2D | null>(null);
  const w = useRef(0);
  const h = useRef(0);
  const nt = useRef(0);

  const noise = createNoise3D();

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
    if (!ctx.current) return;
    nt.current += getSpeed();

    for (let i = 0; i < n; i++) {
      ctx.current.beginPath();
      ctx.current.lineWidth = waveWidth;
      ctx.current.strokeStyle = waveColors[i % waveColors.length];

      for (let x = 0; x < w.current; x += 5) {
        const y = noise(x / 800, 0.3 * i, nt.current) * 100;
        ctx.current.lineTo(x, y + h.current * 0.2);
      }

      ctx.current.stroke();
      ctx.current.closePath();
    }
  };

  const render = useCallback(() => {
    if (!ctx.current) return;

    ctx.current.fillStyle = backgroundFill;
    ctx.current.globalAlpha = waveOpacity;
    ctx.current.fillRect(0, 0, w.current, h.current);
    drawWave(5);
    requestAnimationFrame(render);
  }, [backgroundFill, waveOpacity]);

  const init = useCallback(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    ctx.current = canvas.getContext("2d");
    if (!ctx.current) return;

    w.current = ctx.current.canvas.width = window.innerWidth;
    h.current = ctx.current.canvas.height = window.innerHeight;
    ctx.current.filter = `blur(${blur}px)`;
    nt.current = 0;

    window.onresize = () => {
      if (!ctx.current) return;
      w.current = ctx.current.canvas.width = window.innerWidth;
      h.current = ctx.current.canvas.height = window.innerHeight;
      ctx.current.filter = `blur(${blur}px)`;
    };

    render();
  }, [blur, render]);

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
        style={isSafari ? { filter: `blur(${blur}px)` } : {}}
      />
      <div className={cn("relative z-10", className)} {...props}>
        {children}
      </div>
    </div>
  );
};
