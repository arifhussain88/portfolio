"use client";

import { motion } from "framer-motion";
import { ReactNode, useRef } from "react";

type MagneticButtonProps = {
  children: ReactNode;
  className?: string;
  href?: string;
  onClick?: () => void;
  variant?: "primary" | "secondary" | "ghost";
  external?: boolean;
  type?: "button" | "submit" | "reset";
  disabled?: boolean;
};

export function MagneticButton({
  children,
  className = "",
  href,
  onClick,
  variant = "primary",
  external = false,
  type = "button",
  disabled = false,
}: MagneticButtonProps) {
  const ref = useRef<HTMLAnchorElement & HTMLButtonElement>(null);

  const baseStyles =
    "relative inline-flex items-center justify-center gap-2 rounded-full px-6 py-3 text-sm font-medium transition-all duration-300 cursor-pointer select-none tracking-tight";

  const variants = {
    primary:
      "bg-accent text-white shadow-sm hover:bg-accent-dim hover:shadow-[0_8px_25px_rgba(0,82,255,0.22)] active:scale-[0.98]",
    secondary:
      "border border-border bg-surface text-foreground shadow-[0_1px_3px_rgba(0,0,0,0.04)] hover:border-accent/60 hover:bg-surface-elevated hover:text-accent active:scale-[0.98]",
    ghost: "text-muted hover:text-accent hover:bg-surface-elevated/80",
  };

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!ref.current) return;
    const rect = ref.current.getBoundingClientRect();
    const x = e.clientX - rect.left - rect.width / 2;
    const y = e.clientY - rect.top - rect.height / 2;
    ref.current.style.transform = `translate(${x * 0.15}px, ${y * 0.15}px)`;
  };

  const handleMouseLeave = () => {
    if (!ref.current) return;
    ref.current.style.transform = "translate(0, 0)";
  };

  const combinedClass = `${baseStyles} ${variants[variant]} ${className}`;

  if (href) {
    return (
      <motion.a
        ref={ref}
        href={href}
        className={combinedClass}
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
        whileTap={{ scale: 0.97 }}
        {...(external ? { target: "_blank", rel: "noopener noreferrer" } : {})}
      >
        {children}
      </motion.a>
    );
  }

  return (
    <motion.button
      ref={ref}
      type={type}
      disabled={disabled}
      className={`${combinedClass} disabled:cursor-not-allowed disabled:opacity-60`}
      onClick={onClick}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      whileTap={{ scale: disabled ? 1 : 0.97 }}
    >
      {children}
    </motion.button>
  );
}
