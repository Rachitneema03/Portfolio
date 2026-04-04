import React from "react";

interface SectionWrapperProps {
  id?: string;
  children: React.ReactNode;
  bg?: 'cream' | 'yellow' | 'violet' | 'white' | 'black';
  className?: string;
  pattern?: boolean;
}

export function SectionWrapper({ id, children, bg = 'cream', className = '', pattern = false }: SectionWrapperProps) {
  const bgColors = {
    cream: "bg-cream",
    yellow: "bg-yellow",
    violet: "bg-violet",
    white: "bg-white",
    black: "bg-black text-white",
  };

  // Simple grid pattern or halftone using CSS background
  const patternClass = pattern ? (bg === 'black' ? 'bg-[linear-gradient(rgba(255,255,255,0.1)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.1)_1px,transparent_1px)] bg-[size:40px_40px]' : 'bg-[linear-gradient(rgba(0,0,0,0.1)_1px,transparent_1px),linear-gradient(90deg,rgba(0,0,0,0.1)_1px,transparent_1px)] bg-[size:40px_40px]') : '';

  return (
    <section id={id} className={`w-full py-24 px-6 md:px-12 lg:px-24 border-b-8 border-black ${bgColors[bg]} ${patternClass} ${className}`}>
      <div className="max-w-7xl mx-auto">
        {children}
      </div>
    </section>
  );
}
