"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";

export function CustomCursor() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isHovering, setIsHovering] = useState(false);
  const [isMobile, setIsMobile] = useState(true);

  useEffect(() => {
    // Check if it's a touch device
    const checkMobile = () => {
      setIsMobile(window.matchMedia("(pointer: coarse)").matches);
    };
    checkMobile();
    window.addEventListener("resize", checkMobile);

    const updateMousePosition = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };

    const handleMouseOver = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      if (
        window.getComputedStyle(target).cursor === "pointer" ||
        target.tagName.toLowerCase() === "button" ||
        target.tagName.toLowerCase() === "a" ||
        target.closest("button") ||
        target.closest("a")
      ) {
        setIsHovering(true);
      } else {
        setIsHovering(false);
      }
    };

    window.addEventListener("mousemove", updateMousePosition);
    window.addEventListener("mouseover", handleMouseOver);

    if (!isMobile) {
      document.body.style.cursor = "none";
      const style = document.createElement("style");
      style.innerHTML = `* { cursor: none !important; }`;
      style.id = "custom-cursor-style";
      document.head.appendChild(style);
    }

    return () => {
      window.removeEventListener("mousemove", updateMousePosition);
      window.removeEventListener("mouseover", handleMouseOver);
      window.removeEventListener("resize", checkMobile);
      const style = document.getElementById("custom-cursor-style");
      if (style) document.head.removeChild(style);
      document.body.style.cursor = "auto";
    };
  }, [isMobile]);

  if (isMobile) return null;

  const variants = {
    default: {
      x: mousePosition.x - 16,
      y: mousePosition.y - 16,
      scale: 1,
      backgroundColor: "transparent",
      borderColor: "rgba(0, 82, 255, 0.4)",
      borderWidth: "1.5px",
      opacity: 0.8,
    },
    hover: {
      x: mousePosition.x - 24,
      y: mousePosition.y - 24,
      scale: 1.4,
      backgroundColor: "rgba(0, 82, 255, 0.08)",
      borderColor: "#0052ff",
      borderWidth: "2px",
      opacity: 1,
    },
  };

  const dotVariants = {
    default: {
      x: mousePosition.x - 3,
      y: mousePosition.y - 3,
      scale: 1,
      opacity: 1,
    },
    hover: {
      x: mousePosition.x - 3,
      y: mousePosition.y - 3,
      scale: 0,
      opacity: 0,
    },
  };

  return (
    <>
      <motion.div
        className="pointer-events-none fixed top-0 left-0 z-[100] h-8 w-8 rounded-full border border-accent transition-colors"
        variants={variants}
        animate={isHovering ? "hover" : "default"}
        transition={{ type: "tween", ease: "backOut", duration: 0.15 }}
      />
      <motion.div
        className="pointer-events-none fixed top-0 left-0 z-[100] h-1.5 w-1.5 rounded-full bg-accent"
        variants={dotVariants}
        animate={isHovering ? "hover" : "default"}
        transition={{ type: "tween", ease: "linear", duration: 0 }}
      />
    </>
  );
}
