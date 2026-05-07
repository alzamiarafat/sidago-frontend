"use client";

import Image from "next/image";
import { useEffect, useMemo, useRef, useState } from "react";
import * as THREE from "three";

function ArrowIcon({ className = "" }) {
  return (
    <svg
      aria-hidden="true"
      className={className}
      fill="none"
      viewBox="0 0 40 40"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M26.049 9.579 25.033 10v9.405H5.807v1.19h19.226v9.524l1.017.42L36.11 20.45l-.002-.842zm.175 11.016v8.084l8.06-8.084zm7.994-1.19-7.994-7.97v7.97z"
        fill="currentColor"
        fillRule="evenodd"
        clipRule="evenodd"
      />
    </svg>
  );
}

function CapabilityOrb() {
  const mountRef = useRef(null);

  useEffect(() => {
    const mount = mountRef.current;

    if (!mount) {
      return undefined;
    }

    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(42, 1, 0.1, 100);
    camera.position.set(0, 0, 4.2);

    const testCanvas = document.createElement("canvas");
    const hasWebGL =
      testCanvas.getContext("webgl2") || testCanvas.getContext("webgl");

    if (!hasWebGL) {
      return undefined;
    }

    let renderer;

    try {
      renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
    } catch {
      return undefined;
    }

    renderer.setClearColor(0x000000, 0);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio || 1, 2));
    renderer.domElement.style.inset = "0";
    renderer.domElement.style.position = "absolute";
    mount.appendChild(renderer.domElement);

    const group = new THREE.Group();
    scene.add(group);

    const core = new THREE.Mesh(
      new THREE.IcosahedronGeometry(1.05, 1),
      new THREE.MeshStandardMaterial({
        color: 0xf075e4,
        metalness: 0.35,
        roughness: 0.36,
        emissive: 0x3a1438,
        emissiveIntensity: 0.65,
      }),
    );
    group.add(core);

    const ringMaterial = new THREE.MeshBasicMaterial({
      color: 0x67f2d8,
      transparent: true,
      opacity: 0.46,
      side: THREE.DoubleSide,
    });

    const rings = [
      new THREE.Mesh(new THREE.TorusGeometry(1.45, 0.012, 12, 96), ringMaterial),
      new THREE.Mesh(new THREE.TorusGeometry(1.74, 0.01, 12, 96), ringMaterial.clone()),
    ];

    rings[0].rotation.x = Math.PI / 2.6;
    rings[1].rotation.y = Math.PI / 2.8;
    rings[1].material.opacity = 0.3;
    rings.forEach((ring) => group.add(ring));

    scene.add(new THREE.AmbientLight(0xffffff, 1.1));
    const keyLight = new THREE.PointLight(0xffffff, 2.4, 8);
    keyLight.position.set(2.5, 2.8, 3.5);
    scene.add(keyLight);

    let frameId;

    const resize = () => {
      const size = Math.max(160, mount.clientWidth);
      renderer.setSize(size, size, false);
      camera.aspect = 1;
      camera.updateProjectionMatrix();
    };

    const animate = () => {
      group.rotation.y += 0.008;
      core.rotation.x += 0.006;
      rings[0].rotation.z += 0.01;
      rings[1].rotation.x += 0.007;
      renderer.render(scene, camera);
      frameId = window.requestAnimationFrame(animate);
    };

    resize();
    animate();
    window.addEventListener("resize", resize);

    return () => {
      window.removeEventListener("resize", resize);
      window.cancelAnimationFrame(frameId);
      renderer.dispose();
      core.geometry.dispose();
      core.material.dispose();
      rings.forEach((ring) => {
        ring.geometry.dispose();
        ring.material.dispose();
      });
      mount.removeChild(renderer.domElement);
    };
  }, []);

  return (
    <div className="relative h-40 w-40 overflow-hidden md:h-48 md:w-48">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-7 animate-spin rounded-full border border-[#67f2d8]/35 bg-[#f075e4]/12 shadow-[inset_0_0_30px_rgba(240,117,228,0.28),0_0_34px_rgba(103,242,216,0.14)] md:inset-8"
        style={{
          animationDuration: "8s",
          transform: "rotateX(58deg) rotateY(28deg) rotateZ(12deg)",
          transformStyle: "preserve-3d",
        }}
      >
        <div className="absolute inset-2 rounded-full border border-[#f075e4]/45" />
        <div className="absolute left-1/2 top-1/2 h-8 w-8 -translate-x-1/2 -translate-y-1/2 rounded-lg bg-[#f075e4]/55 shadow-[0_0_24px_rgba(240,117,228,0.55)]" />
        <div className="absolute left-1/2 top-1/2 h-[72%] w-[18%] -translate-x-1/2 -translate-y-1/2 rounded-full border border-[#67f2d8]/30" />
        <div className="absolute left-1/2 top-1/2 h-[18%] w-[72%] -translate-x-1/2 -translate-y-1/2 rounded-full border border-[#67f2d8]/30" />
      </div>
      <div
        ref={mountRef}
        aria-hidden="true"
        className="pointer-events-none absolute inset-0"
      />
    </div>
  );
}

export default function PerformanceCapabilitiesCarousel({ items = [] }) {
  const [activeIndex, setActiveIndex] = useState(0);
  const total = items.length;
  const activeItem = items[activeIndex];

  const progressWidth = useMemo(() => {
    if (!total) {
      return "0%";
    }

    return `${((activeIndex + 1) / total) * 100}%`;
  }, [activeIndex, total]);

  if (!activeItem) {
    return null;
  }

  const prev = () => setActiveIndex((current) => (current - 1 + total) % total);
  const next = () => setActiveIndex((current) => (current + 1) % total);

  return (
    <div className="mt-10 rounded-lg bg-[#101510] p-5 shadow-[0_18px_44px_rgba(0,0,0,0.18)] ring-1 ring-white/[0.06] md:p-6">
      <div className="grid gap-6 lg:grid-cols-[minmax(18rem,0.72fr)_minmax(0,1.28fr)] lg:items-stretch">
        <div className="flex flex-col justify-between gap-8 rounded-md bg-white/[0.025] p-5 ring-1 ring-white/[0.05]">
          <div>
            <div className="font-blender text-[0.66rem] uppercase tracking-[0.24em] text-[#f075e4]/82">
              Sidago Performance
            </div>
            <h3 className="mt-4 max-w-[13ch] text-2xl leading-tight text-white md:text-[2rem]">
              {activeItem.title}
            </h3>
            <p className="mt-4 max-w-[28rem] text-sm leading-relaxed text-gray-off-white/64 md:text-base">
              {activeItem.description}
            </p>
          </div>

          <div className="flex items-end justify-between gap-4">
            <CapabilityOrb />

            <div className="min-w-[9rem]">
              <div className="flex items-center justify-between gap-5">
                <div className="text-sm tracking-[0.08em] text-gray-off-white/66">
                  {String(activeIndex + 1).padStart(2, "0")} /{" "}
                  {String(total).padStart(2, "0")}
                </div>

                <div className="flex gap-2">
                  <button
                    type="button"
                    aria-label="Previous capability"
                    onClick={prev}
                    className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-white/[0.08] bg-transparent text-white/78 transition hover:bg-white/[0.05]"
                  >
                    <ArrowIcon className="h-4 w-4 rotate-180" />
                  </button>
                  <button
                    type="button"
                    aria-label="Next capability"
                    onClick={next}
                    className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-[#f075e4] text-[#111511] transition hover:bg-[#f38ae9]"
                  >
                    <ArrowIcon className="h-4 w-4" />
                  </button>
                </div>
              </div>

              <div className="mt-5">
                <div className="relative h-px w-full bg-white/8">
                  <div
                    className="absolute inset-y-0 left-0 bg-[#f075e4] transition-all duration-500"
                    style={{ width: progressWidth }}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>

        <div
          className="relative min-h-[18rem] overflow-hidden rounded-md bg-[#e8f1f0] ring-1 ring-white/[0.06] md:min-h-[24rem] lg:min-h-[30rem]"
          style={
            activeItem.imageBackground
              ? { backgroundColor: activeItem.imageBackground }
              : undefined
          }
        >
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(255,255,255,0.06),transparent_24%)]" />
          <Image
            key={`${activeItem.image}-${activeItem.imageFit || "cover"}`}
            src={activeItem.image}
            alt={`${activeItem.title} visual`}
            fill
            className="object-contain p-3 transition duration-500 md:p-5"
            sizes="(min-width: 1024px) 44rem, 100vw"
          />
        </div>
      </div>
    </div>
  );
}
