"use client";

import React, { useEffect, useRef, useState } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import * as THREE from "three";
import ThreeGlobe from "three-globe";
import { OrbitControls, PerspectiveCamera } from "@react-three/drei";

export interface GlobeMarker {
  lat: number;
  lng: number;
  src: string;
  label: string;
}

interface Globe3DProps {
  markers: GlobeMarker[];
  config?: {
    atmosphereColor?: string;
    atmosphereIntensity?: number;
    bumpScale?: number;
    autoRotateSpeed?: number;
  };
  onMarkerClick?: (marker: GlobeMarker) => void;
  onMarkerHover?: (marker: GlobeMarker | null) => void;
}

const GlobeInner = ({ markers, config, onMarkerClick, onMarkerHover }: Globe3DProps) => {
  const globeRef = useRef<THREE.Group>(null);
  const [globeData, setGlobeData] = useState<any>(null);

  useEffect(() => {
    const globe = new ThreeGlobe()
      .globeImageUrl("//unpkg.com/three-globe/example/img/earth-dark.jpg") // Fallback stable texture
      .bumpImageUrl("//unpkg.com/three-globe/example/img/earth-topology.png")
      .atmosphereColor(config?.atmosphereColor || "#4da6ff")
      .atmosphereIntensity(config?.atmosphereIntensity || 0.1)
      .showAtmosphere(true)
      .pointsData(markers)
      .pointColor(() => "#fbbf24")
      .pointAltitude(0.05)
      .pointRadius(0.05);

    // Add Arcs (simplified for demo)
    const arcs = markers.slice(0, 10).map((m, i) => ({
      startLat: markers[0].lat,
      startLng: markers[0].lng,
      endLat: m.lat,
      endLng: m.lng,
      color: "#fbbf24",
    }));

    globe.arcsData(arcs)
      .arcColor("color")
      .arcDashLength(0.4)
      .arcDashGap(2)
      .arcDashAnimateTime(2000);

    setGlobeData(globe);
  }, [markers, config]);

  useFrame(() => {
    if (globeRef.current && config?.autoRotateSpeed) {
      globeRef.current.rotation.y += (config.autoRotateSpeed * 0.01);
    }
  });

  if (!globeData) return null;

  return (
    <primitive object={globeData} ref={globeRef} />
  );
};

export const Globe3D = (props: Globe3DProps) => {
  return (
    <div className="w-full h-full min-h-[500px] relative">
      <Canvas gl={{ antialias: true, alpha: true }}>
        <PerspectiveCamera makeDefault position={[0, 0, 350]} fov={45} />
        <ambientLight intensity={1.5} />
        <pointLight position={[10, 10, 10]} intensity={2} />
        <GlobeInner {...props} />
        <OrbitControls
          enableZoom={false}
          enablePan={false}
          autoRotate={false}
        />
      </Canvas>
    </div>
  );
};
