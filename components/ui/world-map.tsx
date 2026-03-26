"use client";

import { motion } from "motion/react";
import React, { useRef } from "react";
import { cn } from "@/lib/utils";

interface WorldMapProps {
  dots?: {
    start: { lat: number; lng: number; label?: string };
    end: { lat: number; lng: number; label?: string };
  }[];
  lineColor?: string;
}

export const WorldMap = ({
  dots = [],
  lineColor = "#F5C842",
}: WorldMapProps) => {
  const svgRef = useRef<SVGSVGElement>(null);

  const projectPoint = (lat: number, lng: number) => {
    const x = (lng + 180) * (800 / 360);
    const y = (90 - lat) * (400 / 180);
    return { x, y };
  };

  const createCurvedPath = (
    start: { x: number; y: number },
    end: { x: number; y: number }
  ) => {
    const midX = (start.x + end.x) / 2;
    const midY = Math.min(start.y, end.y) - 50;
    return `M ${start.x} ${start.y} Q ${midX} ${midY} ${end.x} ${end.y}`;
  };

  return (
    <div className="w-full aspect-[2/1] relative bg-transparent overflow-hidden">
      <svg
        ref={svgRef}
        viewBox="0 0 800 400"
        className="w-full h-full stroke-white/10 fill-white/5"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M150,140 L160,130 L180,135 L200,120 L220,130 L250,140 L240,160 L220,180 L200,200 L180,220 L160,200 L150,180 Z M400,120 L420,110 L450,115 L480,130 L500,150 L520,180 L500,220 L450,250 L400,240 L380,200 L370,160 Z M600,180 L620,170 L650,175 L680,190 L700,220 L680,250 L630,260 L600,240 Z"
          className="fill-zinc-800/20 stroke-zinc-700/30"
        />
        {/* Hub Dots */}
        {dots.map((dot, i) => {
          const startPoint = projectPoint(dot.start.lat, dot.start.lng);
          const endPoint = projectPoint(dot.end.lat, dot.end.lng);
          return (
            <g key={i}>
              <circle
                cx={startPoint.x}
                cy={startPoint.y}
                r="2"
                fill={lineColor}
                className="animate-pulse"
              />
              <circle
                cx={endPoint.x}
                cy={endPoint.y}
                r="2"
                fill={lineColor}
                className="animate-pulse"
              />
              <motion.path
                d={createCurvedPath(startPoint, endPoint)}
                fill="none"
                stroke={lineColor}
                strokeWidth="1"
                strokeDasharray="1, 10"
                initial={{ pathLength: 0 }}
                animate={{ pathLength: 1 }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                  ease: "linear",
                  repeatDelay: 0.5,
                }}
              />
            </g>
          );
        })}
      </svg>
      <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-background pointer-events-none" />
    </div>
  );
};
