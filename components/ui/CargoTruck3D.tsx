"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { CardBody, CardContainer, CardItem } from "@/components/ui/3d-card";

export const CargoTruck3D = ({ src }: { src: string }) => {
  return (
    <div className="relative w-full group">
      <motion.div
        animate={{
          y: [0, -20, 0],
        }}
        transition={{
          duration: 5,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="relative z-20"
      >
        <CardContainer className="inter-var w-full transform-gpu">
          <CardBody className="relative w-full h-auto rounded-3xl transition-all duration-700">
            <CardItem translateZ="100" className="w-full relative">
              <div className="relative overflow-visible p-4">
                <Image
                  src={src}
                  alt="3D Cargo Truck Render"
                  width={1000}
                  height={800}
                  priority
                  className="w-full h-auto object-contain drop-shadow-[0_25px_25px_rgba(0,0,0,0.15)] transition-all duration-700 group-hover:scale-[1.05]"
                  referrerPolicy="no-referrer"
                />
                
                <div className="absolute inset-0 bg-gradient-to-tr from-white/10 to-transparent pointer-events-none rounded-3xl" />
              </div>
            </CardItem>
            
            <CardItem
              translateZ="20"
              className="mt-4 flex flex-col items-end opacity-20 group-hover:opacity-40 transition-opacity pr-8"
            >
              <span className="text-[10px] font-black uppercase tracking-[0.5em] text-slate-900 border-b border-slate-900/10 pb-1">
                4K Raw Render
              </span>
              <span className="text-[8px] font-bold uppercase tracking-[0.3em] text-slate-500 mt-1">
                Blender Standard • PhysX Path
              </span>
            </CardItem>
          </CardBody>
        </CardContainer>
      </motion.div>
      
      <motion.div 
        animate={{
            scaleX: [0.7, 0.85, 0.7],
            opacity: [0.1, 0.2, 0.1],
        }}
        transition={{
            duration: 5,
            repeat: Infinity,
            ease: "easeInOut",
        }}
        className="absolute -bottom-16 right-0 left-0 h-12 bg-slate-950/20 blur-3xl rounded-full mx-auto w-[60%] pointer-events-none" 
      />
    </div>
  );
};
