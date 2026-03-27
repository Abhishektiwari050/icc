"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { CardBody, CardContainer, CardItem } from "@/components/ui/3d-card";
import { WobbleCard } from "@/components/ui/wobble-card";

export const CargoTruck3D = ({ src }: { src: string }) => {
  return (
    <div className="relative w-full">
      <motion.div
        animate={{
          y: [0, -10, 0],
        }}
        transition={{
          duration: 4,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      >
        <CardContainer className="inter-var w-full lg:translate-x-12">
          <CardBody className="bg-white/80 backdrop-blur-sm relative group/card border-slate-200/50 w-full h-auto rounded-3xl p-8 border shadow-2xl transition-all duration-500 hover:scale-[1.02]">
            <CardItem
              translateZ="50"
              className="text-2xl font-black text-slate-900 uppercase tracking-tight"
            >
              Premium Freight Fleet
            </CardItem>
            <CardItem
              as="p"
              translateZ="60"
              className="text-slate-500 text-sm mt-1 font-bold uppercase tracking-widest opacity-60"
            >
              Next-Gen Architectural Logistics
            </CardItem>
            <CardItem translateZ="100" className="w-full mt-8">
              <WobbleCard containerClassName="bg-slate-100/30 border border-slate-200/50 overflow-hidden rounded-2xl relative shadow-inner">
                <Image
                  src={src}
                  alt="3D Cargo Truck"
                  width={800}
                  height={600}
                  priority
                  className="object-cover rounded-xl transition-all duration-700 scale-110 group-hover/card:scale-100 filter drop-shadow-2xl"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-white/20 to-transparent pointer-events-none" />
              </WobbleCard>
            </CardItem>
            <CardItem
              translateZ="20"
              className="mt-6 flex justify-between items-center w-full"
            >
              <span className="text-[10px] font-black uppercase tracking-[0.3em] text-primary opacity-40">
                Studio Rendered • 4K
              </span>
              <div className="flex gap-1">
                 {[1,2,3].map(i => <div key={i} className="w-1 h-1 rounded-full bg-primary/20" />)}
              </div>
            </CardItem>
          </CardBody>
        </CardContainer>
      </motion.div>
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.1 }}
        transition={{ delay: 1 }}
        className="absolute -bottom-10 right-0 left-0 h-4 bg-slate-900/10 blur-xl rounded-full scale-x-75 mx-auto" 
      />
    </div>
  );
};
