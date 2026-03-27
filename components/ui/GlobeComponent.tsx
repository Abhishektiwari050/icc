"use client";

import React, { useEffect, useRef, useMemo } from "react";
import { Canvas, useFrame, ThreeElement } from "@react-three/fiber";
import * as THREE from "three";
import { OrbitControls, PerspectiveCamera, Float } from "@react-three/drei";

const GLOBE_CONFIG = {
  pointLight: "#ffffff",
  ambientLight: "#38bdf8",
  directionalLight: "#ffffff",
  baseColor: "#0f172a", // Slate-900 base
  glowColor: "#fbbf24", // Corporate Yellow
  markerColor: "#fbbf24",
  arcColor: "#fbbf24",
};

const HUBS = [
  { lat: 25.2048, lng: 55.2708, label: "Dubai" },
  { lat: 51.5074, lng: -0.1278, label: "London" },
  { lat: 40.7128, lng: -74.006, label: "New York" },
  { lat: 1.3521, lng: 103.8198, label: "Singapore" },
  { lat: -33.8688, lng: 151.2093, label: "Sydney" },
  { lat: 19.076, lng: 72.8777, label: "Mumbai" },
  { lat: 35.6762, lng: 139.6503, label: "Tokyo" },
  { lat: -23.5505, lng: -46.6333, label: "Sao Paulo" },
  { lat: -26.2041, lng: 28.0473, label: "Johannesburg" },
];

const Arcs = () => {
  const points = useMemo(() => {
    const arcPoints: THREE.Vector3[][] = [];
    const arcs = [
      [HUBS[0], HUBS[1]],
      [HUBS[0], HUBS[3]],
      [HUBS[1], HUBS[2]],
      [HUBS[3], HUBS[6]],
      [HUBS[3], HUBS[4]],
      [HUBS[2], HUBS[7]],
      [HUBS[8], HUBS[0]],
      [HUBS[5], HUBS[0]],
    ];

    arcs.forEach(([start, end]) => {
      const startVec = new THREE.Vector3().setFromSphericalCoords(
        2,
        Math.PI / 2 - (start.lat * Math.PI) / 180,
        (start.lng * Math.PI) / 180
      );
      const endVec = new THREE.Vector3().setFromSphericalCoords(
        2,
        Math.PI / 2 - (end.lat * Math.PI) / 180,
        (end.lng * Math.PI) / 180
      );

      // Create a curve
      const midVec = startVec.clone().lerp(endVec, 0.5).normalize().multiplyScalar(2.8);
      const curve = new THREE.QuadraticBezierCurve3(startVec, midVec, endVec);
      arcPoints.push(curve.getPoints(50));
    });
    return arcPoints;
  }, []);

  return (
    <group>
      {points.map((p, i) => (
        <line key={i}>
          <bufferGeometry attach="geometry" onUpdate={(self) => self.setFromPoints(p)} />
          <lineBasicMaterial attach="material" color={GLOBE_CONFIG.arcColor} transparent opacity={0.3} />
        </line>
      ))}
    </group>
  );
};

const Globe = () => {
  const globeRef = useRef<THREE.Group>(null);
  
  useFrame((state) => {
    if (globeRef.current) {
      globeRef.current.rotation.y += 0.002;
    }
  });

  return (
    <group ref={globeRef}>
      {/* Central Blue Core */}
      <mesh>
        <sphereGeometry args={[2, 64, 64]} />
        <meshPhongMaterial 
          color={GLOBE_CONFIG.baseColor} 
          emissive={GLOBE_CONFIG.baseColor} 
          emissiveIntensity={0.2}
          transparent 
          opacity={0.9} 
        />
      </mesh>

      {/* Atmospheric Glow */}
      <mesh scale={[1.15, 1.15, 1.15]}>
        <sphereGeometry args={[2, 64, 64]} />
        <meshPhongMaterial
          color={GLOBE_CONFIG.glowColor}
          transparent
          opacity={0.15}
          side={THREE.BackSide}
        />
      </mesh>

      {/* Hub Points */}
      {HUBS.map((hub, i) => {
        const pos = new THREE.Vector3().setFromSphericalCoords(
          2.02,
          Math.PI / 2 - (hub.lat * Math.PI) / 180,
          (hub.lng * Math.PI) / 180
        );
        return (
          <mesh position={pos} key={i}>
            <sphereGeometry args={[0.03, 16, 16]} />
            <meshBasicMaterial color={GLOBE_CONFIG.markerColor} />
            <pointLight distance={0.5} intensity={0.5} color={GLOBE_CONFIG.markerColor} />
          </mesh>
        );
      })}

      <Arcs />
    </group>
  );
};

export const GlobeComponent = () => {
  return (
    <div className="w-full h-full min-h-[500px] relative pointer-events-auto">
      <Canvas
        className="cursor-grab active:cursor-grabbing"
        gl={{ antialias: true, alpha: true }}
        camera={{ position: [0, 0, 8], fov: 40 }}
      >
        <PerspectiveCamera makeDefault position={[0, 0, 8]} />
        <ambientLight intensity={0.8} />
        <pointLight position={[10, 10, 10]} intensity={1.5} />
        <spotLight
          position={[-10, 10, 10]}
          angle={0.15}
          penumbra={1}
          intensity={1}
          castShadow
        />
        
        <Float speed={1.5} rotationIntensity={0.5} floatIntensity={0.5}>
          <Globe />
        </Float>
        
        <OrbitControls
          enableZoom={false}
          enablePan={false}
          autoRotate={false}
          minPolarAngle={Math.PI / 3.5}
          maxPolarAngle={Math.PI / 1.5}
        />
      </Canvas>
      
      {/* Dashboard Style Metadata Overlay */}
      <div className="absolute top-8 right-8 z-10 hidden md:block border-l border-yellow-400/30 pl-4 py-2 bg-slate-50/5 backdrop-blur-md rounded-r-lg">
        <p className="text-[10px] font-black uppercase tracking-[0.4em] text-slate-800">Global Coverage</p>
        <p className="text-[32px] font-black text-slate-900 -mt-1 tabular-nums">54+</p>
        <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-yellow-600">Active Countries</p>
      </div>

      <div className="absolute bottom-8 left-8 z-10 hidden md:block border-r border-slate-200/30 pr-4 py-2 bg-slate-50/5 backdrop-blur-md rounded-l-lg">
        <div className="flex items-center gap-2 mb-1">
          <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
          <span className="text-[10px] font-black uppercase tracking-[0.3em] text-slate-700">Real-Time Sync</span>
        </div>
        <p className="text-[8px] font-bold uppercase tracking-[0.15em] text-slate-400 max-w-[150px]">
          Global node architecture delivering sub-100ms latency on transit updates.
        </p>
      </div>
    </div>
  );
};
