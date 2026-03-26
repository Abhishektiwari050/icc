"use client";

import React, { Suspense } from "react";
import { Canvas } from "@react-three/fiber";
import { useGLTF, Stage, PresentationControls, PerspectiveCamera } from "@react-three/drei";

function Model(props: any) {
  // Using the Cesium Milk Truck as a proof of concept for 3D logistics models
  const { scene } = useGLTF(
    "https://raw.githubusercontent.com/keithclark/3d-model-element/master/examples/assets/models/glb/CesiumMilkTruck/CesiumMilkTruck.glb"
  );
  return <primitive object={scene} scale={0.015} {...props} />;
}

export function Truck3D() {
  return (
    <div className="w-full h-[400px] md:h-[600px] cursor-grab active:cursor-grabbing">
      <Canvas dpr={[1, 2]} shadows camera={{ fov: 45 }}>
        <color attach="background" args={["transparent"]} />
        <Suspense fallback={null}>
          <PresentationControls
            speed={1.5}
            global
            zoom={0.5}
            polar={[-0.1, Math.PI / 4]}
            azimuth={[-Math.PI / 4, Math.PI / 4]}
          >
            <Stage environment="city" intensity={0.6} contactShadow={false}>
              <Model rotation={[0, Math.PI / 2, 0]} />
            </Stage>
          </PresentationControls>
        </Suspense>
        <PerspectiveCamera makeDefault position={[0, 0, 10]} />
      </Canvas>
    </div>
  );
}
