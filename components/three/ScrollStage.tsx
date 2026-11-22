"use client";

/**
 * Scroll-driven 3D stage for the home page (inspired by "travelling" hero objects).
 *
 * One fixed, full-viewport WebGL canvas sits behind the page. A different cosmetic set
 * per section flies between DOM anchors as you scroll. An anchor is any element with
 * `data-stage`; its on-screen box decides where the products sit and how big they are.
 *
 * Anchor attributes (all optional):
 *   data-stage-fill   fraction of the anchor's height the products fill   (default 0.75, 0 = hide)
 *   data-stage-rot    extra Y rotation in radians                          (default 0)
 *   data-stage-cap    "open" amount 0..1 (cap / lid / wand / stopper)   (default 0)
 *   data-stage-set    which products: glass | compact | mascara | perfume   (default glass)
 *   data-stage-dy     vertical offset (fraction of viewport) while centred (default 0)
 *
 * When neighbouring anchors use different sets, the first shrinks away and the next grows in.
 */

import { Suspense, useEffect, useRef, useState } from "react";
import * as THREE from "three";
import { Canvas, useFrame, useThree } from "@react-three/fiber";
import { ContactShadows, PerformanceMonitor } from "@react-three/drei";
import {
  CompactSet,
  GlassSet,
  MascaraSet,
  PerfumeSet,
  PRODUCT_GROUP_HEIGHT,
  PRODUCT_SETS,
  Studio,
  type ProductSetName,
  type SceneColors,
} from "@/components/three/objects";

interface AnchorData {
  el: HTMLElement;
  fill: number;
  rot: number;
  cap: number;
  set: ProductSetName;
  dy: number;
}

const num = (v: string | undefined, fallback: number) => {
  const n = v === undefined ? NaN : parseFloat(v);
  return Number.isFinite(n) ? n : fallback;
};

function readAnchors(): AnchorData[] {
  return Array.from(document.querySelectorAll<HTMLElement>("[data-stage]")).map((el) => ({
    el,
    fill: num(el.dataset.stageFill, 0.75),
    rot: num(el.dataset.stageRot, 0),
    cap: num(el.dataset.stageCap, 0),
    set: (PRODUCT_SETS as string[]).includes(el.dataset.stageSet ?? "")
      ? (el.dataset.stageSet as ProductSetName)
      : "glass",
    dy: num(el.dataset.stageDy, 0),
  }));
}

const smooth = (t: number) => t * t * (3 - 2 * t);
const lerp = THREE.MathUtils.lerp;

function Products({ colors, lowQuality }: { colors: SceneColors; lowQuality: boolean }) {
  const group = useRef<THREE.Group>(null);
  const setRefs = useRef<Partial<Record<ProductSetName, THREE.Group | null>>>({});
  const open = useRef(0);
  const anchors = useRef<AnchorData[]>([]);
  const pointer = useRef({ x: 0, y: 0 });
  const { viewport, size } = useThree();

  // (Re)read anchors on mount, resize and once layout settles.
  useEffect(() => {
    const refresh = () => {
      anchors.current = readAnchors();
    };
    refresh();
    const t1 = window.setTimeout(refresh, 600);
    const t2 = window.setTimeout(refresh, 2000);
    window.addEventListener("resize", refresh);
    const onMove = (e: PointerEvent) => {
      pointer.current.x = (e.clientX / window.innerWidth) * 2 - 1;
      pointer.current.y = (e.clientY / window.innerHeight) * 2 - 1;
    };
    window.addEventListener("pointermove", onMove, { passive: true });
    return () => {
      window.clearTimeout(t1);
      window.clearTimeout(t2);
      window.removeEventListener("resize", refresh);
      window.removeEventListener("pointermove", onMove);
    };
  }, []);

  useFrame((state, delta) => {
    const g = group.current;
    const list = anchors.current;
    if (!g || list.length === 0) return;

    const H = size.height;
    const W = size.width;
    const vc = H / 2;

    const boxes = list.map((a) => a.el.getBoundingClientRect());
    const scrollY = window.scrollY;

    // Each anchor is "in focus" at the scroll position that centres it in the viewport.
    // Anchors already above the centre at the top of the page (e.g. the hero arch on
    // phones) are in focus at scroll 0, at their natural position.
    const docCentre = boxes.map((r) => r.top + scrollY + r.height / 2);
    const focusAt = docCentre.map((c) => Math.max(0, c - vc));
    const focusY = docCentre.map((c, i) => c - focusAt[i] + list[i].dy * H);

    let k = focusAt.findIndex((f) => f > scrollY);
    if (k === -1) k = list.length;

    let a: number, b: number, t: number, y: number;
    if (k === 0) {
      // Before the first anchor is centred: ride along with it.
      a = b = 0;
      t = 0;
      y = docCentre[0] - scrollY + list[0].dy * H;
    } else if (k === list.length) {
      a = b = list.length - 1;
      t = 0;
      y = docCentre[a] - scrollY + list[a].dy * H;
    } else {
      a = k - 1;
      b = k;
      t = smooth(THREE.MathUtils.clamp((scrollY - focusAt[a]) / (focusAt[b] - focusAt[a]), 0, 1));
      y = lerp(focusY[a], focusY[b], t);
    }

    const A = list[a];
    const B = list[b];
    const x = lerp(boxes[a].left + boxes[a].width / 2, boxes[b].left + boxes[b].width / 2, t);
    const px = lerp(boxes[a].height * A.fill, boxes[b].height * B.fill, t);

    // Screen px → world units on the z=0 plane.
    const wx = (x / W - 0.5) * viewport.width;
    const wy = -(y / H - 0.5) * viewport.height;
    const scale = Math.max(0.0001, ((px / H) * viewport.height) / PRODUCT_GROUP_HEIGHT);

    g.position.x = THREE.MathUtils.damp(g.position.x, wx, 5, delta);
    g.position.y = THREE.MathUtils.damp(g.position.y, wy, 5, delta);
    const s = THREE.MathUtils.damp(g.scale.x, scale, 5, delta);
    g.scale.setScalar(s);
    g.visible = s > 0.01;

    const time = state.clock.elapsedTime;
    const rot = lerp(A.rot, B.rot, t);
    g.rotation.y = THREE.MathUtils.damp(g.rotation.y, rot + pointer.current.x * 0.3 + Math.sin(time * 0.4) * 0.12, 4, delta);
    g.rotation.x = THREE.MathUtils.damp(g.rotation.x, pointer.current.y * 0.1, 4, delta);

    open.current = lerp(A.cap, B.cap, t);

    // Crossfade product sets by scale: outgoing shrinks over the first half, incoming grows over the second.
    for (const name of PRODUCT_SETS) {
      let target = 0;
      if (A.set === B.set) target = name === A.set ? 1 : 0;
      else if (name === A.set) target = t < 0.5 ? 1 - smooth(t * 2) : 0;
      else if (name === B.set) target = t > 0.5 ? smooth((t - 0.5) * 2) : 0;
      const node = setRefs.current[name];
      if (!node) continue;
      const v = THREE.MathUtils.damp(node.scale.x, target, 7, delta);
      node.scale.setScalar(Math.max(v, 0.0001));
      node.visible = v > 0.01;
      node.position.y = Math.sin(time * 1.1) * 0.04;
    }
  });

  return (
    <group ref={group} scale={0.0001}>
      <group ref={(n) => { setRefs.current.glass = n; }}>
        <GlassSet colors={colors} lowQuality={lowQuality} open={open} />
      </group>
      <group ref={(n) => { setRefs.current.compact = n; }} scale={0.0001} visible={false}>
        <CompactSet colors={colors} open={open} />
      </group>
      <group ref={(n) => { setRefs.current.mascara = n; }} scale={0.0001} visible={false}>
        <MascaraSet colors={colors} lowQuality={lowQuality} open={open} />
      </group>
      <group ref={(n) => { setRefs.current.perfume = n; }} scale={0.0001} visible={false}>
        <PerfumeSet colors={colors} lowQuality={lowQuality} open={open} />
      </group>
      <ContactShadows position={[0, -1.05, 0]} opacity={0.3} scale={5} blur={2.6} far={2.5} color={colors.shadow} frames={lowQuality ? 1 : Infinity} />
    </group>
  );
}

export default function ScrollStage({ colors }: { colors: SceneColors }) {
  const [lowQuality, setLowQuality] = useState(
    () => typeof window !== "undefined" && window.matchMedia("(max-width: 767px)").matches
  );

  return (
    <div className="pointer-events-none fixed inset-0 -z-10" aria-hidden="true">
      <Canvas
        shadows={!lowQuality}
        dpr={lowQuality ? [1, 1.25] : [1, 1.75]}
        camera={{ position: [0, 0, 8], fov: 30 }}
        gl={{ antialias: true, alpha: true, powerPreference: "high-performance" }}
        style={{ background: "transparent" }}
      >
        <PerformanceMonitor onDecline={() => setLowQuality(true)} />
        <Suspense fallback={null}>
          <Studio colors={colors} />
          <Products colors={colors} lowQuality={lowQuality} />
        </Suspense>
      </Canvas>
    </div>
  );
}
