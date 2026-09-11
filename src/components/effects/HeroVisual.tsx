"use client";

import { useEffect, useRef } from "react";

export function HeroVisual() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const prefersReducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)",
    ).matches;
    if (prefersReducedMotion) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let animationId: number;
    let mouseX = -1000;
    let mouseY = -1000;

    const resize = () => {
      canvas.width = canvas.offsetWidth * window.devicePixelRatio;
      canvas.height = canvas.offsetHeight * window.devicePixelRatio;
      ctx.scale(window.devicePixelRatio, window.devicePixelRatio);
    };

    resize();
    window.addEventListener("resize", resize);

    // Architectural node network
    const nodes: Array<{
      x: number;
      y: number;
      baseX: number;
      baseY: number;
      vx: number;
      vy: number;
      radius: number;
      highlight: boolean;
    }> = [];

    const nodeSpacing = 90;
    const cols = Math.ceil(canvas.offsetWidth / nodeSpacing) + 1;
    const rows = Math.ceil(canvas.offsetHeight / nodeSpacing) + 1;

    for (let c = 0; c < cols; c++) {
      for (let r = 0; r < rows; r++) {
        // slight jitter for organic engineering blueprint look
        const jitterX = (Math.random() - 0.5) * 20;
        const jitterY = (Math.random() - 0.5) * 20;
        const x = c * nodeSpacing + jitterX;
        const y = r * nodeSpacing + jitterY;
        nodes.push({
          x,
          y,
          baseX: x,
          baseY: y,
          vx: 0,
          vy: 0,
          radius: Math.random() > 0.88 ? 2.5 : 1.5,
          highlight: Math.random() > 0.85,
        });
      }
    }

    const onMouseMove = (e: MouseEvent) => {
      const rect = canvas.getBoundingClientRect();
      mouseX = e.clientX - rect.left;
      mouseY = e.clientY - rect.top;
    };

    const onMouseLeave = () => {
      mouseX = -1000;
      mouseY = -1000;
    };

    canvas.addEventListener("mousemove", onMouseMove);
    canvas.addEventListener("mouseleave", onMouseLeave);

    const animate = () => {
      const w = canvas.offsetWidth;
      const h = canvas.offsetHeight;
      ctx.clearRect(0, 0, w, h);

      // Connect adjacent nodes
      ctx.lineWidth = 1;
      for (let i = 0; i < nodes.length; i++) {
        const n1 = nodes[i];

        // Spring back to base position
        const dxBase = n1.baseX - n1.x;
        const dyBase = n1.baseY - n1.y;
        n1.vx += dxBase * 0.02;
        n1.vy += dyBase * 0.02;

        // Mouse proximity repulsion / displacement
        const dxMouse = mouseX - n1.x;
        const dyMouse = mouseY - n1.y;
        const distMouse = Math.sqrt(dxMouse * dxMouse + dyMouse * dyMouse);
        if (distMouse < 180) {
          const force = (1 - distMouse / 180) * 8;
          n1.vx -= (dxMouse / distMouse) * force * 0.3;
          n1.vy -= (dyMouse / distMouse) * force * 0.3;
        }

        // Dampen velocity
        n1.vx *= 0.88;
        n1.vy *= 0.88;
        n1.x += n1.vx;
        n1.y += n1.vy;

        // Connect with neighboring nodes within threshold
        for (let j = i + 1; j < nodes.length; j++) {
          const n2 = nodes[j];
          const dx = n1.x - n2.x;
          const dy = n1.y - n2.y;
          const dist = Math.sqrt(dx * dx + dy * dy);

          if (dist < 110) {
            const alpha = 0.12 * (1 - dist / 110);
            ctx.beginPath();
            ctx.moveTo(n1.x, n1.y);
            ctx.lineTo(n2.x, n2.y);
            ctx.strokeStyle = `rgba(0, 82, 255, ${alpha})`;
            ctx.stroke();
          }
        }
      }

      // Draw nodes
      for (const n of nodes) {
        ctx.beginPath();
        ctx.arc(n.x, n.y, n.radius, 0, Math.PI * 2);
        if (n.highlight) {
          ctx.fillStyle = "rgba(0, 82, 255, 0.4)";
        } else {
          ctx.fillStyle = "rgba(100, 116, 139, 0.25)";
        }
        ctx.fill();
      }

      animationId = requestAnimationFrame(animate);
    };

    animate();

    return () => {
      cancelAnimationFrame(animationId);
      window.removeEventListener("resize", resize);
      canvas.removeEventListener("mousemove", onMouseMove);
      canvas.removeEventListener("mouseleave", onMouseLeave);
    };
  }, []);

  return (
    <div className="pointer-events-none absolute inset-0 overflow-hidden">
      {/* Blueprint grid background */}
      <div className="blueprint-grid absolute inset-0 opacity-40" />

      {/* Architectural soft light ambient glows */}
      <div
        className="absolute top-1/4 left-1/2 h-[650px] w-[650px] -translate-x-1/2 -translate-y-1/2 rounded-full opacity-60 blur-[140px]"
        style={{
          background:
            "radial-gradient(circle, rgba(0,82,255,0.08) 0%, rgba(5,150,105,0.04) 50%, rgba(255,255,255,0) 80%)",
        }}
      />
      <div
        className="absolute bottom-10 right-10 h-[500px] w-[500px] rounded-full opacity-40 blur-[120px]"
        style={{
          background:
            "radial-gradient(circle, rgba(0,82,255,0.06) 0%, rgba(255,255,255,0) 70%)",
        }}
      />

      <canvas
        ref={canvasRef}
        className="pointer-events-auto absolute inset-0 h-full w-full"
        aria-hidden="true"
      />
    </div>
  );
}
