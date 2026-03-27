"use client";

import React, { Suspense, useRef } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { 
  OrbitControls, 
  Stage, 
  useGLTF, 
  PerspectiveCamera,
  Float,
  ContactShadows,
  Environment
} from "@react-three/drei";
import * as THREE from "three";

function TruckModel({ url }: { url: string }) {
  // @ts-ignore
  const { scene, nodes, materials } = useGLTF(url);
  const group = useRef<THREE.Group>(null);

  // Apply Yellow/Black/White colors to the meshes
  React.useLayoutEffect(() => {
    scene.traverse((obj: any) => {
      if (obj.isMesh) {
        obj.castShadow = true;
        obj.receiveShadow = true;
        
        // Retexture logic based on common naming or index
        if (obj.name.toLowerCase().includes("body") || obj.name.toLowerCase().includes("cabin")) {
            obj.material.color.set("#ffcc00"); // Corporate Yellow
        } else if (obj.name.toLowerCase().includes("tire") || obj.name.toLowerCase().includes("wheel")) {
            obj.material.color.set("#1a1a1a"); // Matte Black
        } else if (obj.name.toLowerCase().includes("trailer")) {
            obj.material.color.set("#ffffff"); // Gloss White
        }
      }
    });
  }, [scene]);

  return <primitive ref={group} object={scene} scale={0.015} position={[0, -0.5, 0]} />;
}

export const ThreeTruck = () => {
  return (
    <div className="w-full h-[500px] relative cursor-grab active:cursor-grabbing">
      <Canvas shadows dpr={[1, 2]} camera={{ position: [0, 0, 5], fov: 45 }}>
        <Suspense fallback={null}>
          <Stage environment="city" intensity={0.6} shadows="contact">
            <Float speed={1.5} rotationIntensity={0.5} floatIntensity={0.5}>
              <TruckModel url="https://vazxmixjsiawhamofees.supabase.co/storage/v1/object/public/models/delivery-truck/model.gltf" />
            </Float>
          </Stage>
          
          <OrbitControls 
            makeDefault 
            enableZoom={false}
            minPolarAngle={0} 
            maxPolarAngle={Math.PI / 1.75}
            autoRotate
            autoRotateSpeed={0.5}
          />
          
          <Environment preset="city" />
          <ContactShadows resolution={1024} scale={10} blur={2} opacity={0.25} far={10} color="#000000" position={[0, -0.6, 0]} />
        </Suspense>
      </Canvas>
      
      <div className="absolute top-4 right-4 z-20 flex flex-col items-end opacity-40 pointer-events-none">
        <span className="text-[10px] font-black uppercase tracking-[0.4em] text-slate-900 border-b border-slate-900/10 pb-1">
          Real-Time 3D Engine
        </span>
        <span className="text-[8px] font-bold uppercase tracking-[0.2em] text-slate-500 mt-1">
          PhysX Enabled • 60FPS Interactivity
        </span>
      </div>
    </div>
  );
};
