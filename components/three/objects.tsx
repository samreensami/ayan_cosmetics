"use client";

/**
 * Shared procedural 3D cosmetics, each sized to roughly PRODUCT_GROUP_HEIGHT and centred
 * on the origin:
 *   GlassSet    — serum dropper bottle + lipstick (cap lifts)
 *   CompactSet  — powder compact whose lid opens to a mirror
 *   MascaraSet  — mascara (wand pulls out) + nail polish
 *   PerfumeSet  — faceted perfume bottle
 * Plus an offline Lightformer studio. Used by HeroScene and ScrollStage.
 *
 * No GLB models or HDR downloads — all geometry is generated, so it weighs ~0 KB.
 */

import { useMemo, useRef, type MutableRefObject } from "react";
import * as THREE from "three";
import { useFrame } from "@react-three/fiber";
import { Environment, Lightformer, RoundedBox } from "@react-three/drei";
import type { ThemeMeta } from "@/lib/themes";

export type SceneColors = ThemeMeta["scene"];

/** Approximate height of the bottle+lipstick group in world units (used to fit anchors). */
export const PRODUCT_GROUP_HEIGHT = 2.35;

/* ───────────────────────── Geometry ───────────────────────── */

function lathe(points: [number, number][], segments: number) {
  return new THREE.LatheGeometry(
    points.map(([x, y]) => new THREE.Vector2(x, y)),
    segments
  );
}

function useBottleGeometry() {
  return useMemo(
    () =>
      lathe(
        [
          [0, 0], [0.5, 0], [0.56, 0.04], [0.58, 0.12], [0.58, 1.05],
          [0.55, 1.2], [0.45, 1.32], [0.26, 1.4], [0.2, 1.44], [0.2, 1.56],
        ],
        64
      ),
    []
  );
}

function useLiquidGeometry() {
  return useMemo(
    () => lathe([[0, 0.06], [0.5, 0.06], [0.53, 0.1], [0.53, 0.82], [0, 0.82]], 48),
    []
  );
}

/** Lipstick bullet: cylinder whose top is cut at an angle. */
function useBulletGeometry() {
  return useMemo(() => {
    const g = new THREE.CylinderGeometry(0.17, 0.17, 0.62, 48, 12);
    const pos = g.attributes.position;
    const v = new THREE.Vector3();
    for (let i = 0; i < pos.count; i++) {
      v.fromBufferAttribute(pos, i);
      if (v.y > 0) v.y = v.y - (0.17 - v.x) * 0.9 * (v.y / 0.31);
      pos.setXYZ(i, v.x, v.y, v.z);
    }
    g.computeVertexNormals();
    return g;
  }, []);
}

/* ───────────────────────── Objects ───────────────────────── */

export function SerumBottle({ colors, lowQuality = false }: { colors: SceneColors; lowQuality?: boolean }) {
  const bottle = useBottleGeometry();
  const liquid = useLiquidGeometry();

  return (
    <group>
      {/* Glass — real transmission on capable devices, cheap translucent glass on phones */}
      <mesh geometry={bottle} castShadow>
        {lowQuality ? (
          <meshPhysicalMaterial
            color="#ffffff"
            roughness={0.08}
            metalness={0}
            clearcoat={1}
            transparent
            opacity={0.32}
            side={THREE.DoubleSide}
            depthWrite={false}
          />
        ) : (
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
        )}
      </mesh>

      <mesh geometry={liquid}>
        <meshPhysicalMaterial
          color={colors.liquid}
          transmission={lowQuality ? 0 : 0.6}
          thickness={1}
          roughness={0.15}
          ior={1.33}
          transparent
          opacity={lowQuality ? 0.85 : 0.92}
        />
      </mesh>

      <mesh position={[0, 1.62, 0]} castShadow>
        <cylinderGeometry args={[0.24, 0.24, 0.16, 48]} />
        <meshStandardMaterial color={colors.metal} metalness={1} roughness={0.22} />
      </mesh>

      <mesh position={[0, 1.92, 0]} scale={[1, 1.55, 1]} castShadow>
        <sphereGeometry args={[0.19, 48, 32]} />
        <meshPhysicalMaterial color={colors.lipstick} roughness={0.45} clearcoat={0.6} />
      </mesh>

      {!lowQuality && (
        <mesh position={[0, 0.95, 0]}>
          <cylinderGeometry args={[0.035, 0.02, 1.3, 16]} />
          <meshPhysicalMaterial color="#ffffff" transmission={1} roughness={0.05} thickness={0.1} transparent />
        </mesh>
      )}
    </group>
  );
}

interface LipstickProps {
  colors: SceneColors;
  /** 0 = capped, 1 = cap lifted away and bullet twisted up. Read every frame. */
  capLift?: MutableRefObject<number>;
}

export function Lipstick({ colors, capLift }: LipstickProps) {
  const bullet = useBulletGeometry();
  const cap = useRef<THREE.Group>(null);
  const bulletRef = useRef<THREE.Mesh>(null);

  useFrame((_, delta) => {
    const t = capLift ? capLift.current : 1;
    if (cap.current) {
      cap.current.position.y = THREE.MathUtils.damp(cap.current.position.y, 1.02 + t * 1.15, 6, delta);
      cap.current.position.x = THREE.MathUtils.damp(cap.current.position.x, t * 0.35, 6, delta);
      cap.current.rotation.z = THREE.MathUtils.damp(cap.current.rotation.z, -t * 0.5, 6, delta);
    }
    if (bulletRef.current) {
      bulletRef.current.position.y = THREE.MathUtils.damp(bulletRef.current.position.y, 1.0 + t * 0.28, 6, delta);
    }
  });

  return (
    <group>
      <mesh position={[0, 0.34, 0]} castShadow>
        <cylinderGeometry args={[0.25, 0.25, 0.68, 48]} />
        <meshStandardMaterial color={colors.metal} metalness={1} roughness={0.18} />
      </mesh>
      <mesh position={[0, 0.69, 0]}>
        <cylinderGeometry args={[0.255, 0.255, 0.03, 48]} />
        <meshStandardMaterial color={colors.shadow} metalness={0.6} roughness={0.5} />
      </mesh>
      <mesh position={[0, 0.85, 0]} castShadow>
        <cylinderGeometry args={[0.2, 0.2, 0.3, 48]} />
        <meshStandardMaterial color={colors.metal} metalness={1} roughness={0.3} />
      </mesh>
      <mesh ref={bulletRef} geometry={bullet} position={[0, 1.28, 0]} castShadow>
        <meshPhysicalMaterial color={colors.lipstick} roughness={0.32} clearcoat={0.8} clearcoatRoughness={0.25} sheen={0.4} />
      </mesh>

      {/* Cap */}
      {capLift && (
        <group ref={cap} position={[0, 1.02, 0]}>
          <mesh position={[0, 0.42, 0]} castShadow>
            <cylinderGeometry args={[0.26, 0.26, 0.84, 48]} />
            <meshStandardMaterial color={colors.metal} metalness={1} roughness={0.16} />
          </mesh>
          <mesh position={[0, 0.85, 0]}>
            <cylinderGeometry args={[0.2, 0.26, 0.04, 48]} />
            <meshStandardMaterial color={colors.lipstick} metalness={0.3} roughness={0.4} />
          </mesh>
        </group>
      )}
    </group>
  );
}

/** Lights + offline studio environment (no network fetch). */
export function Studio({ colors }: { colors: SceneColors }) {
  return (
    <>
      <ambientLight intensity={0.35} />
      <directionalLight position={[3, 5, 4]} intensity={1.6} color={colors.glow} castShadow />
      <directionalLight position={[-4, 2, -2]} intensity={0.6} color={colors.metal} />
      <Environment resolution={256} frames={1}>
        <Lightformer form="rect" intensity={2.2} color={colors.glow} position={[0, 5, -2]} scale={[10, 3, 1]} rotation-x={Math.PI / 2} />
        <Lightformer form="rect" intensity={1.4} color={colors.glow} position={[-5, 1, 1]} scale={[3, 6, 1]} rotation-y={Math.PI / 2} />
        <Lightformer form="rect" intensity={1.1} color={colors.metal} position={[5, 1, 1]} scale={[3, 6, 1]} rotation-y={-Math.PI / 2} />
        <Lightformer form="ring" intensity={1.5} color={colors.liquid} position={[0, 1, 6]} scale={2.5} />
      </Environment>
    </>
  );
}

/* ───────────────────────── Product sets ───────────────────────── */

/** Every "open" animation (cap, lid, wand) reads this 0..1 value each frame. */
type Openness = MutableRefObject<number>;

const POWDER = "#e7c3a8";
const BRUSH = "#1b1717";

const damp = THREE.MathUtils.damp;

export function GlassSet({ colors, lowQuality, open }: { colors: SceneColors; lowQuality: boolean; open: Openness }) {
  return (
    <group position={[0, 0.16, 0]}>
      <group position={[-0.42, -1.15, 0]} rotation={[0, 0.4, 0.06]}>
        <SerumBottle colors={colors} lowQuality={lowQuality} />
      </group>
      <group position={[0.62, -1.12, 0.4]} rotation={[0.1, -0.5, -0.16]} scale={0.95}>
        <Lipstick colors={colors} capLift={open} />
      </group>
    </group>
  );
}

/** Round powder compact; the lid hinges open to reveal a mirror and pressed powder. */
export function CompactSet({ colors, open }: { colors: SceneColors; open: Openness }) {
  const lid = useRef<THREE.Group>(null);

  useFrame((_, delta) => {
    if (lid.current) lid.current.rotation.x = damp(lid.current.rotation.x, -open.current * 1.95, 5, delta);
  });

  return (
    <group rotation={[0.55, 0, 0]} position={[0, -0.25, 0]}>
      {/* Base */}
      <mesh castShadow>
        <cylinderGeometry args={[0.95, 0.95, 0.2, 64]} />
        <meshStandardMaterial color={colors.metal} metalness={0.85} roughness={0.32} />
      </mesh>
      {/* Pressed powder */}
      <mesh position={[0, 0.11, 0]}>
        <cylinderGeometry args={[0.8, 0.8, 0.04, 64]} />
        <meshStandardMaterial color={POWDER} roughness={0.95} />
      </mesh>
      {/* Embossed ring on the powder */}
      <mesh position={[0, 0.135, 0]} rotation={[-Math.PI / 2, 0, 0]}>
        <torusGeometry args={[0.45, 0.012, 8, 64]} />
        <meshStandardMaterial color={POWDER} roughness={0.7} />
      </mesh>

      {/* Lid, hinged at the back edge */}
      <group ref={lid} position={[0, 0.1, -0.95]}>
        <group position={[0, 0.05, 0.95]}>
          <mesh castShadow>
            <cylinderGeometry args={[0.97, 0.97, 0.12, 64]} />
            <meshStandardMaterial color={colors.metal} metalness={0.85} roughness={0.3} />
          </mesh>
          {/* Mirror on the underside */}
          <mesh position={[0, -0.065, 0]} rotation={[Math.PI / 2, 0, 0]}>
            <circleGeometry args={[0.82, 64]} />
            {/* A bright, slightly glowing glass mirror (a pure metal mirror reads black against the studio) */}
            <meshPhysicalMaterial color="#f3f0f4" metalness={0.2} roughness={0.08} clearcoat={1} emissive="#ffffff" emissiveIntensity={0.25} />
          </mesh>
          {/* Lipstick-coloured enamel inlay on top */}
          <mesh position={[0, 0.065, 0]} rotation={[-Math.PI / 2, 0, 0]}>
            <circleGeometry args={[0.6, 64]} />
            <meshPhysicalMaterial color={colors.lipstick} roughness={0.3} clearcoat={1} />
          </mesh>
        </group>
      </group>
    </group>
  );
}

/** Mascara tube with a wand that slides out, beside a nail polish bottle. */
export function MascaraSet({ colors, lowQuality, open }: { colors: SceneColors; lowQuality: boolean; open: Openness }) {
  const wand = useRef<THREE.Group>(null);

  useFrame((_, delta) => {
    if (wand.current) wand.current.position.y = damp(wand.current.position.y, 0.62 + open.current * 0.85, 5, delta);
  });

  return (
    <group position={[0, -0.05, 0]}>
      {/* Mascara, tilted */}
      <group position={[-0.35, -0.55, 0]} rotation={[0, 0, 0.22]}>
        <mesh castShadow>
          <cylinderGeometry args={[0.16, 0.16, 1.25, 48]} />
          <meshPhysicalMaterial color={colors.lipstick} roughness={0.25} clearcoat={1} />
        </mesh>
        <mesh position={[0, 0.6, 0]}>
          <cylinderGeometry args={[0.165, 0.165, 0.06, 48]} />
          <meshStandardMaterial color={colors.metal} metalness={1} roughness={0.2} />
        </mesh>

        <group ref={wand} position={[0, 0.62, 0]}>
          {/* Handle / cap */}
          <mesh position={[0, 0.42, 0]} castShadow>
            <cylinderGeometry args={[0.16, 0.16, 0.84, 48]} />
            <meshStandardMaterial color={colors.metal} metalness={1} roughness={0.18} />
          </mesh>
          {/* Rod */}
          <mesh position={[0, -0.25, 0]}>
            <cylinderGeometry args={[0.03, 0.03, 0.5, 12]} />
            <meshStandardMaterial color={colors.shadow} metalness={0.4} roughness={0.5} />
          </mesh>
          {/* Brush */}
          <mesh position={[0, -0.62, 0]}>
            <cylinderGeometry args={[0.075, 0.06, 0.42, 16, 6]} />
            <meshStandardMaterial color={BRUSH} roughness={1} />
          </mesh>
        </group>
      </group>

      {/* Nail polish */}
      <group position={[0.55, -0.85, 0.35]} rotation={[0.05, -0.4, -0.08]}>
        <RoundedBox args={[0.62, 0.62, 0.42]} radius={0.12} smoothness={4} position={[0, 0.31, 0]} castShadow>
          {lowQuality ? (
            <meshPhysicalMaterial color={colors.lipstick} roughness={0.15} clearcoat={1} transparent opacity={0.9} />
          ) : (
            <meshPhysicalMaterial
              color={colors.lipstick}
              transmission={0.35}
              thickness={0.5}
              roughness={0.08}
              clearcoat={1}
              attenuationColor={colors.lipstick}
              attenuationDistance={0.6}
            />
          )}
        </RoundedBox>
        <mesh position={[0, 0.68, 0]}>
          <cylinderGeometry args={[0.11, 0.11, 0.12, 32]} />
          <meshStandardMaterial color={colors.metal} metalness={1} roughness={0.2} />
        </mesh>
        <mesh position={[0, 1.02, 0]} castShadow>
          <cylinderGeometry args={[0.13, 0.15, 0.6, 32]} />
          <meshStandardMaterial color={colors.shadow} metalness={0.3} roughness={0.35} />
        </mesh>
      </group>
    </group>
  );
}

/** Faceted perfume bottle with a jewel cap. The cap lifts with `open`. */
export function PerfumeSet({ colors, lowQuality, open }: { colors: SceneColors; lowQuality: boolean; open: Openness }) {
  const cap = useRef<THREE.Group>(null);

  useFrame((_, delta) => {
    if (cap.current) cap.current.position.y = damp(cap.current.position.y, 0.72 + open.current * 0.35, 5, delta);
  });

  return (
    <group position={[0, -0.25, 0]} rotation={[0, Math.PI / 6, 0]}>
      {/* Glass body — hexagonal prism */}
      <mesh castShadow position={[0, -0.15, 0]}>
        <cylinderGeometry args={[0.7, 0.78, 1.25, 6]} />
        {lowQuality ? (
          <meshPhysicalMaterial color="#ffffff" roughness={0.05} clearcoat={1} transparent opacity={0.35} depthWrite={false} />
        ) : (
          <meshPhysicalMaterial
            color="#ffffff"
            transmission={1}
            thickness={0.9}
            roughness={0.02}
            ior={1.5}
            clearcoat={1}
            attenuationColor={colors.liquid}
            attenuationDistance={1.2}
            flatShading
          />
        )}
      </mesh>
      {/* Perfume inside */}
      <mesh position={[0, -0.3, 0]}>
        <cylinderGeometry args={[0.62, 0.69, 0.95, 6]} />
        <meshPhysicalMaterial color={colors.liquid} roughness={0.12} clearcoat={1} transparent opacity={0.95} flatShading />
      </mesh>
      {/* Neck */}
      <mesh position={[0, 0.56, 0]}>
        <cylinderGeometry args={[0.16, 0.2, 0.18, 32]} />
        <meshStandardMaterial color={colors.metal} metalness={1} roughness={0.2} />
      </mesh>
      {/* Jewel cap */}
      <group ref={cap} position={[0, 0.72, 0]}>
        <mesh position={[0, 0.32, 0]} castShadow>
          <octahedronGeometry args={[0.42, 0]} />
          <meshPhysicalMaterial color={colors.lipstick} roughness={0.1} clearcoat={1} flatShading metalness={0.2} />
        </mesh>
      </group>
    </group>
  );
}

export type ProductSetName = "glass" | "compact" | "mascara" | "perfume";
export const PRODUCT_SETS: ProductSetName[] = ["glass", "compact", "mascara", "perfume"];
