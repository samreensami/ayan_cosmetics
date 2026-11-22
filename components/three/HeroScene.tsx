"use client";

/**
 * Static 3D still-life for the hero arch — used when the scroll-driven stage is off
 * (prefers-reduced-motion). No idle animation; renders on demand only.
 */

import { Suspense } from "react";
import { Canvas } from "@react-three/fiber";
import { ContactShadows } from "@react-three/drei";
import { Lipstick, SerumBottle, Studio, type SceneColors } from "@/components/three/objects";

export default function HeroScene({ colors }: { colors: SceneColors }) {
  return (
    <div className="absolute inset-0" aria-hidden="true">
      <Canvas
        shadows
        dpr={[1, 1.5]}
        frameloop="demand"
        camera={{ position: [0, 0.3, 6.6], fov: 30 }}
        gl={{ antialias: true, alpha: true }}
        style={{ background: "transparent" }}
      >
        <Suspense fallback={null}>
          <Studio colors={colors} />
          <group scale={0.84} position={[0, -0.2, 0]}>
            <group position={[-0.42, -1.15, 0]} rotation={[0, 0.4, 0.06]}>
              <SerumBottle colors={colors} />
            </group>
            <group position={[0.62, -1.12, 0.4]} rotation={[0.1, -0.5, -0.16]} scale={0.95}>
              <Lipstick colors={colors} />
            </group>
          </group>
          <ContactShadows position={[0, -1.2, 0]} opacity={0.38} scale={6} blur={2.6} far={2.5} color={colors.shadow} />
        </Suspense>
      </Canvas>
    </div>
  );
}
