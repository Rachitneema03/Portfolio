import React from "react";

interface BadgeProps {
  children: React.ReactNode;
  color?: 'yellow' | 'violet' | 'white' | 'black';
  className?: string;
  rotateOnHover?: boolean;
}

export function Badge({ children, color = 'white', className = '', rotateOnHover = true }: BadgeProps) {
  const bgColors = {
    yellow: "bg-yellow text-black",
    violet: "bg-violet text-black",
    white: "bg-white text-black",
    black: "bg-black text-white",
  };

  const baseClasses = "inline-flex items-center justify-center px-3 py-1 font-bold text-sm tracking-widest uppercase border-4 border-black transition-brutal";
  const hoverClasses = rotateOnHover ? "hover:-rotate-3 hover:scale-105" : "";

  return (
    <span className={`${baseClasses} ${bgColors[color]} ${hoverClasses} ${className}`}>
      {children}
    </span>
  );
}
