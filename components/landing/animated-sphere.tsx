"use client";

import { useEffect, useRef } from "react";

export function AnimatedSphere() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const frameRef = useRef(0);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const chars = "░▒▓█▀▄▌▐│─┤├┴┬╭╮╰╯";
    let time = 0;
    let width = 0;
    let height = 0;
    let isDark = document.documentElement.classList.contains("dark");
    let isVisible = true;
    let lastTs = 0;

    // Precomputed fill styles (alpha rounded to 0.01) so no strings are built per point
    let fillStyles: string[] = [];
    const buildFillStyles = () => {
      const rgb = isDark ? "255, 255, 255" : "0, 0, 0";
      fillStyles = Array.from({ length: 101 }, (_, i) => `rgba(${rgb}, ${i / 100})`);
    };
    buildFillStyles();

    const resize = () => {
      const dpr = window.devicePixelRatio || 1;
      const rect = canvas.getBoundingClientRect();
      width = rect.width;
      height = rect.height;
      canvas.width = width * dpr;
      canvas.height = height * dpr;
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
    };

    resize();
    window.addEventListener("resize", resize);

    // Cache the theme instead of reading the DOM for every point on every frame
    const themeObserver = new MutationObserver(() => {
      isDark = document.documentElement.classList.contains("dark");
      buildFillStyles();
    });
    themeObserver.observe(document.documentElement, {
      attributes: true,
      attributeFilter: ["class"],
    });

    // Pause drawing while the sphere is off screen
    const visibilityObserver = new IntersectionObserver(([entry]) => {
      isVisible = entry.isIntersecting;
    });
    visibilityObserver.observe(canvas);

    const render = (ts: number) => {
      frameRef.current = requestAnimationFrame(render);
      if (!isVisible) {
        lastTs = 0;
        return;
      }

      // Frame-rate independent: same speed as before at 60fps
      const dt = lastTs ? Math.min((ts - lastTs) / 16.667, 3) : 1;
      lastTs = ts;

      ctx.clearRect(0, 0, width, height);

      const centerX = width / 2;
      const centerY = height / 2;
      const radius = Math.min(width, height) * 0.525;

      ctx.font = "12px monospace";
      ctx.textAlign = "center";
      ctx.textBaseline = "middle";

      const points: { x: number; y: number; z: number; char: string }[] = [];

      // Generate sphere points
      for (let phi = 0; phi < Math.PI * 2; phi += 0.15) {
        for (let theta = 0; theta < Math.PI; theta += 0.15) {
          const x = Math.sin(theta) * Math.cos(phi + time * 0.5);
          const y = Math.sin(theta) * Math.sin(phi + time * 0.5);
          const z = Math.cos(theta);

          // Rotate around Y axis
          const rotY = time * 0.3;
          const newX = x * Math.cos(rotY) - z * Math.sin(rotY);
          const newZ = x * Math.sin(rotY) + z * Math.cos(rotY);

          // Rotate around X axis
          const rotX = time * 0.2;
          const newY = y * Math.cos(rotX) - newZ * Math.sin(rotX);
          const finalZ = y * Math.sin(rotX) + newZ * Math.cos(rotX);

          const depth = (finalZ + 1) / 2;
          const charIndex = Math.floor(depth * (chars.length - 1));

          points.push({
            x: centerX + newX * radius,
            y: centerY + newY * radius,
            z: finalZ,
            char: chars[charIndex],
          });
        }
      }

      // Sort by z for depth
      points.sort((a, b) => a.z - b.z);

      // Draw points
      points.forEach((point) => {
        const alpha = 0.2 + (point.z + 1) * 0.4;
        ctx.fillStyle = fillStyles[Math.round(alpha * 100)];
        ctx.fillText(point.char, point.x, point.y);
      });

      time += 0.02 * dt;
    };

    frameRef.current = requestAnimationFrame(render);

    return () => {
      window.removeEventListener("resize", resize);
      themeObserver.disconnect();
      visibilityObserver.disconnect();
      cancelAnimationFrame(frameRef.current);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="w-full h-full"
      style={{ display: "block" }}
    />
  );
}
