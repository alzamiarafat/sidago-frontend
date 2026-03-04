"use client";

import React, { useRef, useEffect, useState } from "react";
import * as THREE from "three";

// ─── Single stat card for MOBILE ─────────────────────────────────────────────
function MobileStatCard({ stat }) {
  const cardRef = useRef(null);
  const hoverState = useRef(0);
  const curHover = useRef(0);
  const [hovered, setHovered] = useState(false);

  useEffect(() => {
    if (!cardRef.current) return;

    const W = cardRef.current.clientWidth;
    const H = 130;

    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(75, W / H, 0.1, 1000);
    camera.position.z = 160;

    const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
    renderer.setSize(W, H);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    cardRef.current.appendChild(renderer.domElement);

    const offscreen = document.createElement("canvas");
    offscreen.width = 300;
    offscreen.height = 160;
    const ctx = offscreen.getContext("2d");
    ctx.fillStyle = "white";
    ctx.font = "900 160px blender, sans-serif";
    ctx.textAlign = "center";
    ctx.textBaseline = "middle";
    ctx.fillText(stat.value, offscreen.width / 2, offscreen.height / 2);

    const imgData = ctx.getImageData(
      0,
      0,
      offscreen.width,
      offscreen.height,
    ).data;
    const positions = [];
    const randomDirs = [];

    const frustumH =
      2 * camera.position.z * Math.tan((camera.fov * Math.PI) / 360);
    const frustumW = frustumH * (W / H);
    const SCALE = 0.55;
    const textW = offscreen.width * SCALE;
    const xOffset = -frustumW / 2 + textW / 2 + 2;

    for (let y = 0; y < offscreen.height; y += 2.2) {
      for (let x = 0; x < offscreen.width; x += 2.2) {
        const idx = (Math.floor(x) + Math.floor(y) * offscreen.width) * 4;
        if (imgData[idx] > 128) {
          positions.push(
            (x - offscreen.width / 2) * SCALE + xOffset,
            (offscreen.height / 2 - y) * SCALE,
            0,
          );
          randomDirs.push(
            (Math.random() - 0.5) * 5,
            (Math.random() - 0.5) * 5,
            Math.random() * 10,
          );
        }
      }
    }

    const geo = new THREE.BufferGeometry();
    geo.setAttribute(
      "position",
      new THREE.BufferAttribute(new Float32Array(positions), 3),
    );
    geo.setAttribute(
      "aOffset",
      new THREE.BufferAttribute(new Float32Array(randomDirs), 3),
    );

    const mat = new THREE.ShaderMaterial({
      uniforms: { uHover: { value: 0 } },
      vertexShader: `
        uniform float uHover;
        attribute vec3 aOffset;
        varying float vProg;
        void main() {
          float progress = clamp(uHover, 0.0, 1.0);
          vProg = progress;
          vec3 newPos = position + aOffset * sin(progress * 3.14159);
          vec4 mvPos  = modelViewMatrix * vec4(newPos, 1.0);
          gl_PointSize = 3.0 * (100.0 / -mvPos.z);
          gl_Position  = projectionMatrix * mvPos;
        }
      `,
      fragmentShader: `
        varying float vProg;
        void main() {
          vec3 gray   = vec3(0.35, 0.35, 0.35);
          vec3 orange = vec3(0.906, 0.318, 0.184);
          vec3 color  = mix(gray, orange, vProg);
          float d = distance(gl_PointCoord, vec2(0.5));
          if (d > 0.5) discard;
          gl_FragColor = vec4(color, 1.0);
        }
      `,
      transparent: true,
      depthTest: false,
    });

    const points = new THREE.Points(geo, mat);
    scene.add(points);

    let animId;
    const animate = () => {
      animId = requestAnimationFrame(animate);
      curHover.current += (hoverState.current - curHover.current) * 0.05;
      mat.uniforms.uHover.value = curHover.current;
      renderer.render(scene, camera);
    };
    animate();

    const handleResize = () => {
      if (!cardRef.current) return;
      const nw = cardRef.current.clientWidth;
      renderer.setSize(nw, H);
      camera.aspect = nw / H;
      camera.updateProjectionMatrix();
    };
    window.addEventListener("resize", handleResize);

    return () => {
      cancelAnimationFrame(animId);
      window.removeEventListener("resize", handleResize);
      scene.remove(points);
      geo.dispose();
      mat.dispose();
      if (cardRef.current && renderer.domElement)
        cardRef.current.removeChild(renderer.domElement);
      renderer.dispose();
    };
  }, []);

  const onEnter = () => {
    hoverState.current = 1;
    setHovered(true);
  };
  const onLeave = () => {
    hoverState.current = 0;
    setHovered(false);
  };

  return (
    <div
      onMouseEnter={onEnter}
      onMouseLeave={onLeave}
      onTouchStart={onEnter}
      onTouchEnd={onLeave}
      style={{
        width: "100%",
        cursor: "pointer",
        paddingLeft: "16px",
        paddingRight: "16px",
        boxSizing: "border-box",
        marginBottom: "0px",
      }}
    >
      <div ref={cardRef} style={{ width: "100%", height: "130px" }} />
      <p
        style={{
          fontFamily: "blender, sans-serif",
          fontSize: "11px",
          fontWeight: 700,
          letterSpacing: "0.15em",
          color: hovered ? "#ffffff" : "#888",
          textTransform: "uppercase",
          whiteSpace: "nowrap",
          margin: 0,
          marginTop: "-2px",
          paddingBottom: "2px",
          transition: "color 0.3s ease",
          pointerEvents: "none",
        }}
      >
        {stat.label}
      </p>
      <div
        style={{
          height: "2px",
          width: hovered ? "70%" : "0%",
          backgroundColor: "#D93611",
          boxShadow: hovered ? "0 0 15px #D93611" : "none",
          transition: "width 0.6s cubic-bezier(0.16, 1, 0.3, 1)",
          marginBottom: "6px",
        }}
      />
    </div>
  );
}

// ─── Desktop renderer ─────────────────────────────────────────────────────────
function DesktopStatsBar({ statsData }) {
  const containerRef = useRef(null);
  const pointsRefs = useRef([]);
  const hoverStates = useRef(new Array(statsData.length).fill(0));
  const currentHover = useRef(new Array(statsData.length).fill(0));
  // ✅ useState so label re-renders on hover
  const [hoveredIdx, setHoveredIdx] = useState(-1);

  useEffect(() => {
    if (!containerRef.current) return;

    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(
      75,
      containerRef.current.clientWidth / 300,
      0.1,
      1000,
    );
    camera.position.z = 160;

    const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
    renderer.setSize(containerRef.current.clientWidth, 300);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    containerRef.current.appendChild(renderer.domElement);

    const createPoints = (text, xCenter) => {
      const canvas = document.createElement("canvas");
      canvas.width = 300;
      canvas.height = 160;
      const ctx = canvas.getContext("2d");
      ctx.fillStyle = "white";
      ctx.font = "900 160px blender, sans-serif";
      ctx.textAlign = "center";
      ctx.textBaseline = "middle";
      ctx.fillText(text, canvas.width / 2, canvas.height / 2);

      const imgData = ctx.getImageData(0, 0, canvas.width, canvas.height).data;
      const positions = [];
      const randomDirs = [];

      for (let y = 0; y < canvas.height; y += 2.2) {
        for (let x = 0; x < canvas.width; x += 2.2) {
          const idx = (Math.floor(x) + Math.floor(y) * canvas.width) * 4;
          if (imgData[idx] > 128) {
            positions.push(
              (x - canvas.width / 2) * 0.6 + xCenter,
              (canvas.height / 2 - y) * 0.6,
              0,
            );
            randomDirs.push(
              (Math.random() - 0.5) * 5,
              (Math.random() - 0.5) * 5,
              Math.random() * 10,
            );
          }
        }
      }

      const geo = new THREE.BufferGeometry();
      geo.setAttribute(
        "position",
        new THREE.BufferAttribute(new Float32Array(positions), 3),
      );
      geo.setAttribute(
        "aOffset",
        new THREE.BufferAttribute(new Float32Array(randomDirs), 3),
      );

      const mat = new THREE.ShaderMaterial({
        uniforms: { uHover: { value: 0 } },
        vertexShader: `
          uniform float uHover;
          attribute vec3 aOffset;
          varying float vProg;
          void main() {
            float progress = clamp(uHover,0.0,1.0);
            vProg = progress;
            vec3 newPos = position + aOffset * sin(progress * 3.14159);
            vec4 mvPos  = modelViewMatrix * vec4(newPos,1.0);
            gl_PointSize = 3.0 * (100.0 / -mvPos.z);
            gl_Position  = projectionMatrix * mvPos;
          }
        `,
        fragmentShader: `
          varying float vProg;
          void main() {
            vec3 gray   = vec3(0.6,0.6,0.6);
            vec3 orange = vec3(0.906, 0.318, 0.184);
            vec3 finalColor = mix(gray,orange,vProg);
            float d = distance(gl_PointCoord,vec2(0.5));
            if(d>0.5) discard;
            gl_FragColor = vec4(finalColor,1.0);
          }
        `,
        transparent: true,
        depthTest: false,
      });

      const points = new THREE.Points(geo, mat);
      scene.add(points);
      return points;
    };

    const frustumHeight =
      2 * camera.position.z * Math.tan((camera.fov * Math.PI) / 360);
    const frustumWidth = frustumHeight * camera.aspect;

    statsData.forEach((stat, i) => {
      const xCenter =
        -frustumWidth / 2 + ((i + 0.5) / statsData.length) * frustumWidth;
      pointsRefs.current[i] = createPoints(stat.value, xCenter);
    });

    const animate = () => {
      requestAnimationFrame(animate);
      pointsRefs.current.forEach((p, i) => {
        currentHover.current[i] +=
          (hoverStates.current[i] - currentHover.current[i]) * 0.05;
        p.material.uniforms.uHover.value = currentHover.current[i];
      });
      renderer.render(scene, camera);
    };
    animate();

    const handleResize = () => {
      if (!containerRef.current) return;
      const newWidth = containerRef.current.clientWidth;
      renderer.setSize(newWidth, 300);
      camera.aspect = newWidth / 300;
      camera.updateProjectionMatrix();
    };
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
      pointsRefs.current.forEach((p) => scene.remove(p));
      if (containerRef.current && renderer.domElement)
        containerRef.current.removeChild(renderer.domElement);
      renderer.dispose();
    };
  }, []);

  // ✅ Both ref (for Three.js) AND state (for React label re-render)
  const handleHover = (index, entering) => {
    hoverStates.current[index] = entering ? 1 : 0;
    setHoveredIdx(entering ? index : -1);
  };

  return (
    <section
      style={{ width: "100%", position: "relative", overflow: "hidden" }}
    >
      <div ref={containerRef} style={{ height: "300px", width: "100%" }} />
      {statsData.map((stat, i) => (
        <div
          key={i}
          onMouseEnter={() => handleHover(i, true)}
          onMouseLeave={() => handleHover(i, false)}
          style={{
            position: "absolute",
            top: 0,
            left: `${(i / statsData.length) * 100}%`,
            width: `${100 / statsData.length}%`,
            height: "100%",
            cursor: "pointer",
            zIndex: 20,
          }}
        >
          <div
            style={{
              position: "absolute",
              bottom: "60px",
              width: "100%",
              textAlign: "center",
              pointerEvents: "none",
            }}
          >
            <p
              style={{
                fontFamily: "blender, sans-serif",
                fontSize: "14px",
                fontWeight: 700,
                letterSpacing: "0.15em",
                // ✅ uses hoveredIdx state — re-renders correctly
                color: hoveredIdx === i ? "#ffffff" : "#555",
                textTransform: "uppercase",
                whiteSpace: "pre-line",
                transition: "color 0.3s ease",
                margin: 0,
              }}
            >
              {stat.label}
            </p>
            <div
              style={{
                marginTop: "3px",
                height: "2px",
                width: hoveredIdx === i ? "100%" : "0%",
                backgroundColor: "#D93611",
                boxShadow: hoveredIdx === i ? "0 0 15px #D93611" : "none",
                transition: "width 0.6s cubic-bezier(0.16, 1, 0.3, 1)",
                pointerEvents: "none",
              }}
            />
          </div>
        </div>
      ))}
    </section>
  );
}

// ─── Root export ──────────────────────────────────────────────────────────────
export default function StatsBar({ statsData }) {
  const [isMobile, setIsMobile] = useState(
    typeof window !== "undefined" ? window.innerWidth < 768 : false,
  );

  useEffect(() => {
    const check = () => setIsMobile(window.innerWidth < 768);
    check();
    window.addEventListener("resize", check);
    return () => window.removeEventListener("resize", check);
  }, []);

  if (isMobile) {
    return (
      <section
        key="mobile"
        style={{ width: "100%", paddingTop: "4px", paddingBottom: "4px" }}
      >
        {statsData.map((stat, i) => (
          <MobileStatCard key={i} stat={stat} />
        ))}
      </section>
    );
  }

  return <DesktopStatsBar key="desktop" statsData={statsData} />;
}
