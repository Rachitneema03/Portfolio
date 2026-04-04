import React from "react";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
  variant?: 'primary' | 'secondary' | 'accent' | 'outlined';
  className?: string;
  asChild?: boolean;
}

export function Button({ children, variant = 'primary', className = '', ...props }: ButtonProps) {
  const baseClasses = "font-bold uppercase tracking-wider border-4 border-black px-6 py-3 transition-brutal hover:-translate-y-1 hover:brutalist-shadow-lg active:translate-y-1 active:brutalist-shadow-none brutalist-shadow";
  
  let variantClasses = "";
  switch (variant) {
    case 'primary':
      variantClasses = "bg-yellow text-black";
      break;
    case 'secondary':
      variantClasses = "bg-violet text-black";
      break;
    case 'accent':
      variantClasses = "bg-black text-white";
      break;
    case 'outlined':
      variantClasses = "bg-cream text-black";
      break;
  }

  return (
    <button className={`${baseClasses} ${variantClasses} ${className}`} {...props}>
      {children}
    </button>
  );
}
