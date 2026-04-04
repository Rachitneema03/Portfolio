import React from "react";

interface CardProps {
  children: React.ReactNode;
  className?: string;
  hoverEffect?: boolean;
  bg?: 'white' | 'cream' | 'yellow' | 'violet';
}

export function Card({ children, className = '', hoverEffect = true, bg = 'white' }: CardProps) {
  const bgClasses = {
    white: "bg-white",
    cream: "bg-cream",
    yellow: "bg-yellow",
    violet: "bg-violet"
  };

  const baseClasses = "border-4 border-black p-6 brutalist-shadow transition-brutal";
  const hoverClasses = hoverEffect ? "hover:-translate-y-2 hover:brutalist-shadow-lg" : "";

  return (
    <div className={`${baseClasses} ${bgClasses[bg]} ${hoverClasses} ${className}`}>
      {children}
    </div>
  );
}
