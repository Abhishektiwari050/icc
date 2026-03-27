"use client";

import React from "react";
import { motion } from "framer-motion";

// major global hubs for ICC Logistics (approximate SVG coords)
const HUBS = [
  { id: "dubai", x: 620, y: 220, label: "Dubai (HQ)" },
  { id: "london", x: 480, y: 150, label: "London" },
  { id: "newyork", x: 250, y: 180, label: "New York" },
  { id: "singapore", x: 780, y: 310, label: "Singapore" },
  { id: "sydney", x: 880, y: 450, label: "Sydney" },
  { id: "mumbai", x: 680, y: 260, label: "Mumbai" },
  { id: "tokyo", x: 850, y: 180, label: "Tokyo" },
  { id: "saopaulo", x: 340, y: 400, label: "Sao Paulo" },
  { id: "johannesburg", x: 550, y: 420, label: "Johannesburg" },
];

// Routes connecting hubs
const ROUTES = [
  { from: "dubai", to: "london" },
  { from: "dubai", to: "singapore" },
  { from: "dubai", to: "mumbai" },
  { from: "london", to: "newyork" },
  { from: "singapore", to: "tokyo" },
  { from: "singapore", to: "sydney" },
  { from: "newyork", to: "saopaulo" },
  { from: "johannesburg", to: "dubai" },
];

export const LogisticsGrid = () => {
  return (
    <div className="w-full h-full min-h-[500px] flex items-center justify-center relative overflow-hidden bg-slate-50/30 rounded-3xl border border-slate-200/50 shadow-2xl backdrop-blur-sm">
      <svg
        viewBox="0 0 1000 600"
        className="w-full h-full opacity-80 select-none"
        xmlns="http://www.w3.org/2000/svg"
      >
        {/* Subtle Grid Background */}
        <defs>
          <pattern id="grid" width="40" height="40" patternUnits="userSpaceOnUse">
            <path d="M 40 0 L 0 0 0 40" fill="none" stroke="currentColor" strokeWidth="0.5" className="text-slate-200" />
          </pattern>
        </defs>
        <rect width="100%" height="100%" fill="url(#grid)" />

        {/* Global Connections (Arcs) */}
        {ROUTES.map((route, i) => {
          const fromHub = HUBS.find((h) => h.id === route.from);
          const toHub = HUBS.find((h) => h.id === route.to);
          if (!fromHub || !toHub) return null;

          // Create a simple arc path
          const midpointX = (fromHub.x + toHub.x) / 2;
          const midpointY = Math.min(fromHub.y, toHub.y) - 50;
          const path = `M ${fromHub.x} ${fromHub.y} Q ${midpointX} ${midpointY} ${toHub.x} ${toHub.y}`;

          return (
            <g key={`route-${i}`}>
              <path
                d={path}
                fill="none"
                stroke="currentColor"
                strokeWidth="1"
                className="text-slate-300"
                strokeDasharray="4 4"
              />
              <motion.path
                d={path}
                fill="none"
                stroke="#ffcc00"
                strokeWidth="2"
                strokeDasharray="10 100"
                initial={{ strokeDashoffset: 110 }}
                animate={{ strokeDashoffset: 0 }}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                  ease: "linear",
                  delay: i * 0.5,
                }}
              />
            </g>
          );
        })}

        {/* Major Hubs (Pulse Points) */}
        {HUBS.map((hub) => (
          <g key={hub.id}>
            {/* Outer Pulse */}
            <motion.circle
              cx={hub.x}
              cy={hub.y}
              r={12}
              fill="#ffcc00"
              initial={{ opacity: 0.4, scale: 0.8 }}
              animate={{ opacity: 0, scale: 2.5 }}
              transition={{
                duration: 2,
                repeat: Infinity,
                ease: "easeOut",
              }}
            />
            {/* Inner Core */}
            <circle cx={hub.x} cy={hub.y} r={4} fill="#ffcc00" className="shadow-lg" />
            
            {/* Hub Label */}
            <text
              x={hub.x}
              y={hub.y + 20}
              textAnchor="middle"
              className="text-[10px] font-black uppercase tracking-[0.1em] fill-slate-500 pointer-events-none"
            >
              {hub.label}
            </text>
          </g>
        ))}
      </svg>

      {/* Hero Technical Overlay */}
      <div className="absolute top-6 right-6 z-20 flex flex-col items-end opacity-60">
        <div className="flex items-center gap-2 mb-1">
          <div className="w-2 h-2 rounded-full bg-yellow-400 animate-pulse" />
          <span className="text-[10px] font-black uppercase tracking-[0.4em] text-slate-900 border-b border-slate-900/10 pb-1">
            GLOBAL NETWORK v4.0
          </span>
        </div>
        <span className="text-[8px] font-bold uppercase tracking-[0.2em] text-slate-500 mt-1">
          Active Transits: 4,892 • APAC / EMEA / AMER
        </span>
      </div>
      
      {/* Decorative Corner Borders */}
      <div className="absolute top-0 left-0 w-8 h-8 border-t-2 border-l-2 border-yellow-400/30 rounded-tl-3xl" />
      <div className="absolute bottom-0 right-0 w-8 h-8 border-b-2 border-r-2 border-yellow-400/30 rounded-br-3xl" />
    </div>
  );
};
