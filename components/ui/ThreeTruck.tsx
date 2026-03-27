"use client";

import React, { Suspense, useRef, useMemo } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { 
  OrbitControls, 
  Stage, 
  PerspectiveCamera,
  Float,
  ContactShadows,
  Environment,
  Text,
  MeshWobbleMaterial
} from "@react-three/drei";
import * as THREE from "three";
import { motion } from "framer-motion";

// Procedural Truck Component - 100% Code-Driven
function ProceduralTruck() {
  const group = useRef<THREE.Group>(null);
  
  // Animate wheels
  useFrame((state) => {
    if (!group.current) return;
    const time = state.clock.getElapsedTime();
    // Subtle rocking animation
    group.current.rotation.y = Math.sin(time * 0.5) * 0.05;
  });

  return (
    <group ref={group} dispose={null} scale={1.2}>
      {/* 1. MAIN CHASSIS (Black) */}
      <mesh position={[0, 0.2, 0]} castShadow receiveShadow>
        <boxGeometry args={[0.8, 0.15, 4.8]} />
        <meshStandardMaterial color="#111111" roughness={0.2} metalness={0.8} />
      </mesh>

      {/* 2. THE CABIN (Corporate Yellow) */}
      <group position={[0, 0.7, 1.8]}>
        {/* Main Body */}
        <mesh castShadow receiveShadow>
          <boxGeometry args={[1.1, 1.0, 1.2]} />
          <meshStandardMaterial color="#ffcc00" roughness={0.3} metalness={0.5} />
        </mesh>
        {/* Windshield */}
        <mesh position={[0, 0.2, 0.61]} castShadow>
          <boxGeometry args={[0.9, 0.4, 0.05]} />
          <meshStandardMaterial color="#000000" emissive="#111111" roughness={0} />
        </mesh>
        {/* Roof */}
        <mesh position={[0, 0.55, 0]}>
            <boxGeometry args={[1.15, 0.1, 1.25]} />
            <meshStandardMaterial color="#ffcc00" />
        </mesh>
      </group>

      {/* 3. THE CARGO TRAILER (White with Wireframe) */}
      <group position={[0, 0.95, -0.8]}>
        {/* Trailer Body */}
        <mesh castShadow receiveShadow>
          <boxGeometry args={[1.2, 1.6, 3.8]} />
          <meshStandardMaterial 
            color="#ffffff" 
            roughness={0.1} 
            metalness={0.1} 
            transparent 
            opacity={0.95} 
          />
        </mesh>
        
        {/* Glowing Wireframe Overlay (Atlas Aesthetic) */}
        <mesh>
          <boxGeometry args={[1.21, 1.61, 3.81]} />
          <meshBasicMaterial color="#ffcc00" wireframe transparent opacity={0.15} />
        </mesh>

        {/* ICC BRANDING */}
        <Text
          position={[0.61, 0, 0]}
          rotation={[0, Math.PI / 2, 0]}
          fontSize={0.4}
          color="#111111"
          font="/fonts/Inter-Bold.ttf"
          anchorX="center"
          anchorY="middle"
        >
          ICC
        </Text>
        <Text
          position={[-0.61, 0, 0]}
          rotation={[0, -Math.PI / 2, 0]}
          fontSize={0.4}
          color="#111111"
          font="/fonts/Inter-Bold.ttf"
          anchorX="center"
          anchorY="middle"
        >
          ICC
        </Text>
      </group>

      {/* 4. WHEELS (Spinning Black) */}
      {[
        [-0.45, 0.1, 1.8], [0.45, 0.1, 1.8], // Front
        [-0.45, 0.1, -1.2], [0.45, 0.1, -1.2], // Rear set 1
        [-0.45, 0.1, -2.0], [0.45, 0.1, -2.0], // Rear set 2
      ].map((pos, i) => (
        <mesh key={i} position={pos as [number, number, number]} rotation={[0, 0, Math.PI / 2]} castShadow>
          <cylinderGeometry args={[0.3, 0.3, 0.2, 24]} />
          <meshStandardMaterial color="#1a1a1a" roughness={0.8} />
        </mesh>
      ))}

      {/* 5. ACCENT LIGHTS */}
      <pointLight position={[0.5, 0.5, 2.4]} intensity={0.5} color="#ffcc00" />
      <pointLight position={[-0.5, 0.5, 2.4]} intensity={0.5} color="#ffcc00" />
    </group>
  );
}

export const ThreeTruck = () => {
  return (
    <div className="w-full h-[500px] relative cursor-grab active:cursor-grabbing">
      <Canvas 
        shadows 
        dpr={[1, 2]} 
        camera={{ position: [5, 5, 5], fov: 35 }}
      >
        <Suspense fallback={null}>
          <Stage environment="city" intensity={0.5} shadows="contact" adjustCamera={false}>
            <Float speed={2} rotationIntensity={0.2} floatIntensity={0.5}>
              <ProceduralTruck />
            </Float>
          </Stage>
          
          <OrbitControls 
            makeDefault 
            enableZoom={false}
            minPolarAngle={Math.PI / 4} 
            maxPolarAngle={Math.PI / 2}
            autoRotate
            autoRotateSpeed={0.8}
          />
          
          <Environment preset="night" />
          <ContactShadows 
            resolution={1024} 
            scale={12} 
            blur={2.5} 
            opacity={0.4} 
            far={10} 
            color="#000000" 
            position={[0, -0.01, 0]} 
          />
        </Suspense>
      </Canvas>
      
      {/* Technical Overlay */}
      <div className="absolute top-4 right-4 z-20 flex flex-col items-end opacity-40 pointer-events-none">
        <div className="flex items-center gap-2 mb-1">
          <div className="w-2 h-2 rounded-full bg-yellow-400 animate-pulse" />
          <span className="text-[10px] font-black uppercase tracking-[0.4em] text-slate-900 border-b border-slate-900/10 pb-1">
            Procedural 3D Engine v2
          </span>
        </div>
        <span className="text-[8px] font-bold uppercase tracking-[0.2em] text-slate-500 mt-1">
          Atlas Synthesis • Zero Latency Fetch
        </span>
      </div>
    </div>
  );
};
