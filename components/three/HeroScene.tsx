"use client";

/**
 * Procedural 3D hero: a glass serum dropper bottle, a lipstick and a few dew drops.
 * No external models or HDR files — everything is built from geometry, and the
 * reflections come from an in-scene Lightformer environment (works offline, ~0 KB of assets).
 *
 * Loaded only on the client via next/dynamic (see components/Hero.tsx).
 */

import { Suspense, useEffect, useMemo, useRef, useState } from "react";
import * as THREE from "three";
import { Canvas, useFrame } from "@react-three/fiber";
import {
  ContactShadows,
  Environment,
  Float,
  Lightformer,
  PerformanceMonitor,
  Sparkles,
} from "@react-three/drei";
import type { ThemeMeta } from "@/lib/themes";

type SceneColors = ThemeMeta["scene"];

interface HeroSceneProps {
  colors: SceneColors;
  /** When true: no idle animation, no pointer/scroll response (prefers-reduced-motion) */
  still?: boolean;
}

/* ───────────────────────── Geometry helpers ───────────────────────── */

/** Lathe profile for a squat, round-shouldered serum bottle (radius, height pairs). */
function useBottleGeometry() {
  return useMemo(() => {
    const pts: THREE.Vector2[] = [];
    const add = (x: number, y: number) => pts.push(new THREE.Vector2(x, y));
    add(0.0, 0.0);
    add(0.5, 0.0);
    add(0.56, 0.04);
    add(0.58, 0.12);
    add(0.58, 1.05);
    add(0.55, 1.2);
    add(0.45, 1.32);
    add(0.26, 1.4);
    add(0.2, 1.44);
    add(0.2, 1.56);
    return new THREE.LatheGeometry(pts, 64);
  }, []);
}

function useLiquidGeometry() {
  return useMemo(() => {
    const pts: THREE.Vector2[] = [];
    const add = (x: number, y: number) => pts.push(new THREE.Vector2(x, y));
    add(0.0, 0.06);
    add(0.5, 0.06);
    add(0.53, 0.1);
    add(0.53, 0.82);
    add(0.0, 0.82);
    return new THREE.LatheGeometry(pts, 48);
  }, []);
}

/** Lipstick bullet: a cylinder whose top is cut at an angle, with a rounded tip. */
function useBulletGeometry() {
  return useMemo(() => {
    const g = new THREE.CylinderGeometry(0.17, 0.17, 0.62, 48, 12);
    const pos = g.attributes.position;
    const v = new THREE.Vector3();
    for (let i = 0; i < pos.count; i++) {
      v.fromBufferAttribute(pos, i);
      if (v.y > 0) {
        // slant the upper half: higher on +x side
        const t = v.y / 0.31;
        v.y = v.y - (0.17 - v.x) * 0.9 * t;
      }
      pos.setXYZ(i, v.x, v.y, v.z);
    }
    g.computeVertexNormals();
    return g;
  }, []);
}

/* ───────────────────────── Objects ───────────────────────── */

function SerumBottle({ colors }: { colors: SceneColors }) {
  const bottle = useBottleGeometry();
  const liquid = useLiquidGeometry();

  return (
    <group>
      {/* Glass */}
      <mesh geometry={bottle} castShadow>
        <meshPhysicalMaterial
          color="#ffffff"
          transmission={1}
          thickness={0.6}
          roughness={0.04}
          ior={1.46}
          clearcoat={1}
          clearcoatRoughness={0.05}
          attenuationColor={colors.liquid}
          attenuationDistance={3}
          transparent
          side={THREE.DoubleSide}
        />
      </mesh>

      {/* Serum */}
      <mesh geometry={liquid}>
        <meshPhysicalMaterial
          color={colors.liquid}
          transmission={0.6}
          thickness={1}
          roughness={0.15}
          ior={1.33}
          transparent
          opacity={0.92}
        />
      </mesh>

      {/* Gold collar */}
      <mesh position={[0, 1.62, 0]} castShadow>
        <cylinderGeometry args={[0.24, 0.24, 0.16, 48]} />
        <meshStandardMaterial color={colors.metal} metalness={1} roughness={0.22} />
      </mesh>

      {/* Dropper bulb */}
      <mesh position={[0, 1.92, 0]} scale={[1, 1.55, 1]} castShadow>
        <sphereGeometry args={[0.19, 48, 32]} />
        <meshPhysicalMaterial color={colors.lipstick} roughness={0.45} clearcoat={0.6} />
      </mesh>

      {/* Glass pipette inside */}
      <mesh position={[0, 0.95, 0]}>
        <cylinderGeometry args={[0.035, 0.02, 1.3, 16]} />
        <meshPhysicalMaterial color="#ffffff" transmission={1} roughness={0.05} thickness={0.1} transparent />
      </mesh>
    </group>
  );
}

function Lipstick({ colors }: { colors: SceneColors }) {
  const bullet = useBulletGeometry();
  return (
    <group>
      {/* Case */}
      <mesh position={[0, 0.34, 0]} castShadow>
        <cylinderGeometry args={[0.25, 0.25, 0.68, 48]} />
        <meshStandardMaterial color={colors.metal} metalness={1} roughness={0.18} />
      </mesh>
      {/* Groove ring */}
      <mesh position={[0, 0.69, 0]}>
        <cylinderGeometry args={[0.255, 0.255, 0.03, 48]} />
        <meshStandardMaterial color={colors.shadow} metalness={0.6} roughness={0.5} />
      </mesh>
      {/* Inner sleeve */}
      <mesh position={[0, 0.85, 0]} castShadow>
        <cylinderGeometry args={[0.2, 0.2, 0.3, 48]} />
        <meshStandardMaterial color={colors.metal} metalness={1} roughness={0.3} />
      </mesh>
      {/* Bullet */}
      <mesh geometry={bullet} position={[0, 1.28, 0]} castShadow>
        <meshPhysicalMaterial color={colors.lipstick} roughness={0.32} clearcoat={0.8} clearcoatRoughness={0.25} sheen={0.4} />
      </mesh>
    </group>
  );
}


/* ───────────────────────── Rig: pointer + scroll response ───────────────────────── */

function Rig({ still, children }: { still: boolean; children: React.ReactNode }) {
  const group = useRef<THREE.Group>(null);
  const pointer = useRef({ x: 0, y: 0 });

  useEffect(() => {
    if (still) return;
    const onMove = (e: PointerEvent) => {
      pointer.current.x = (e.clientX / window.innerWidth) * 2 - 1;
      pointer.current.y = (e.clientY / window.innerHeight) * 2 - 1;
    };
    window.addEventListener("pointermove", onMove, { passive: true });
    return () => window.removeEventListener("pointermove", onMove);
  }, [still]);

  useFrame((state, delta) => {
    const g = group.current;
    if (!g || still) return;
    const scroll = Math.min(window.scrollY / window.innerHeight, 1.2);
    const targetY = pointer.current.x * 0.35 + scroll * 1.1;
    const targetX = pointer.current.y * 0.12;
    g.rotation.y = THREE.MathUtils.damp(g.rotation.y, targetY, 3, delta);
    g.rotation.x = THREE.MathUtils.damp(g.rotation.x, targetX, 3, delta);
    g.position.y = THREE.MathUtils.damp(g.position.y, -scroll * 0.6, 3, delta);
  });

  return <group ref={group}>{children}</group>;
}

function Scene({ colors, still }: Required<HeroSceneProps>) {
  const floatProps = still
    ? { speed: 0, rotationIntensity: 0, floatIntensity: 0 }
    : { speed: 1.4, rotationIntensity: 0.25, floatIntensity: 0.6 };

  return (
    <>
      <ambientLight intensity={0.35} />
      <directionalLight position={[3, 5, 4]} intensity={1.6} color={colors.glow} castShadow />
      <directionalLight position={[-4, 2, -2]} intensity={0.6} color={colors.metal} />

      <Rig still={still}>
        <group scale={0.84} position={[0, -0.2, 0]}>
        <Float {...floatProps}>
          <group position={[-0.42, -1.15, 0]} rotation={[0, 0.4, 0.06]}>
            <SerumBottle colors={colors} />
          </group>
        </Float>

        <Float {...floatProps} speed={still ? 0 : 1.1}>
          <group position={[0.62, -1.12, 0.4]} rotation={[0.1, -0.5, -0.16]} scale={0.95}>
            <Lipstick colors={colors} />
          </group>
        </Float>

        </group>
      </Rig>

      {!still && (
        <Sparkles count={28} scale={[4, 3.2, 2]} size={2.2} speed={0.25} opacity={0.55} color={colors.glow} />
      )}

      <ContactShadows position={[0, -1.2, 0]} opacity={0.38} scale={6} blur={2.6} far={2.5} color={colors.shadow} />

      {/* Procedural studio — gives glass & metal something to reflect, no network fetch */}
      <Environment resolution={256} frames={1}>
        <Lightformer form="rect" intensity={2.2} color={colors.glow} position={[0, 5, -2]} scale={[10, 3, 1]} rotation-x={Math.PI / 2} />
        <Lightformer form="rect" intensity={1.4} color={colors.glow} position={[-5, 1, 1]} scale={[3, 6, 1]} rotation-y={Math.PI / 2} />
        <Lightformer form="rect" intensity={1.1} color={colors.metal} position={[5, 1, 1]} scale={[3, 6, 1]} rotation-y={-Math.PI / 2} />
        <Lightformer form="ring" intensity={1.5} color={colors.liquid} position={[0, 1, 6]} scale={2.5} />
      </Environment>
    </>
  );
}

/* ───────────────────────── Canvas wrapper ───────────────────────── */

export default function HeroScene({ colors, still = false }: HeroSceneProps) {
  const wrapper = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(true);
  const [dpr, setDpr] = useState(1.5);

  // Pause rendering when the hero is scrolled out of view (battery + CPU on phones).
  useEffect(() => {
    const el = wrapper.current;
    if (!el) return;
    const io = new IntersectionObserver(([entry]) => setVisible(entry.isIntersecting), {
      rootMargin: "100px",
    });
    io.observe(el);
    return () => io.disconnect();
  }, []);

  return (
    <div ref={wrapper} className="absolute inset-0" aria-hidden="true">
      <Canvas
        shadows
        dpr={[1, dpr]}
        frameloop={visible && !still ? "always" : "demand"}
        camera={{ position: [0, 0.3, 6.6], fov: 30 }}
        gl={{ antialias: true, alpha: true, powerPreference: "high-performance" }}
        style={{ background: "transparent" }}
      >
        <PerformanceMonitor onDecline={() => setDpr(1)} onIncline={() => setDpr(1.75)} />
        <Suspense fallback={null}>
          <Scene colors={colors} still={still} />
        </Suspense>
      </Canvas>
    </div>
  );
}
