"use client";

import React from "react";
import { SectionWrapper } from "../SectionWrapper";
import { Button } from "../Button";
import { Badge } from "../Badge";
import { ArrowRight, Mail } from "lucide-react";

export function Hero() {
  return (
    <SectionWrapper id="hero" bg="cream" pattern={true} className="min-h-screen flex items-center pt-32 overflow-hidden">
      <div className="flex flex-col md:flex-row justify-between items-center relative w-full">

        {/* Scattered Background floating element */}
        <Badge color="yellow" className="absolute top-0 right-1/2 md:right-1/4 -rotate-6 z-0 hidden md:block opacity-75">
          JUST DEPLOY IT
        </Badge>

        {/* Left: Text heavy (Scattered) */}
        <div className="w-full md:w-1/2 space-y-12 relative z-10 flex flex-col items-start pr-0 md:pr-8">

          <div className="relative">
            <Badge color="violet" className="absolute -top-8 -left-4 -rotate-6 z-20 shadow-[2px_2px_0_0_#000]">
              AVAILABLE FOR WORK
            </Badge>

            <h1 className="text-7xl md:text-[6rem] lg:text-[8rem] xl:text-[10rem] font-black uppercase tracking-tighter leading-[0.85] relative z-10 text-left">
              <span className="inline-block hover:-translate-y-2 transition-transform">Rachit</span><br />
              <span className="text-stroke-bg relative inline-block hover:scale-105 transition-transform duration-200">
                Neema
              </span>
            </h1>
            <div className="absolute -z-10 top-1/2 -translate-y-1/2 -left-4 w-[110%] h-[60%] bg-yellow rotate-2"></div>
          </div>

          <p className="text-2xl font-bold max-w-xl border-4 border-black bg-white p-6 brutalist-shadow-sm rotate-1 relative z-10 hover:-rotate-1 transition-brutal text-left">
            Creative Developer & Digital Architect building unapologetically bold web experiences.
          </p>

          <div className="flex flex-wrap gap-6 pt-4 relative">
            <div className="-rotate-2 hover:rotate-0 transition-brutal">
              <Button 
                variant="primary" 
                className="flex items-center gap-2 text-lg py-4 px-8"
                onClick={() => window.open("/your-resume-link.pdf", "_blank")}
              >
                Resume <ArrowRight size={24} className="stroke-[3]" />
              </Button>
            </div>
            <div className="rotate-3 hover:rotate-0 transition-brutal">
              <Button 
                variant="secondary" 
                className="flex items-center gap-2 text-lg py-4 px-8"
                onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
              >
                <Mail size={24} className="stroke-[3]" /> Contact Me
              </Button>
            </div>
          </div>
        </div>

        {/* Right: Visual chaos + Image Frame */}
        <div className="w-full md:w-1/2 relative h-[600px] mt-16 md:mt-0 flex justify-end items-center">

          {/* Decorative shapes */}
          <div className="absolute top-10 right-0 md:-right-8 w-[80%] h-full max-w-[300px] max-h-[400px] bg-violet border-4 border-black brutalist-shadow-lg rotate-6 transition-brutal hover:rotate-12 z-0"></div>

          <Badge color="yellow" className="absolute bottom-24 right-4 md:right-16 rotate-12 text-3xl py-3 px-6 shadow-[6px_6px_0_0_#000] z-30">
            CREATIVE
          </Badge>

          {/* Profile Image Frame */}
          <div className="relative w-[85%] max-w-[360px] aspect-[4/5] bg-white border-4 border-black brutalist-shadow-lg -rotate-3 transition-brutal hover:rotate-2 z-20 flex flex-col p-4 group mr-0 md:mr-12">
            {/* Replace the src with your image path (e.g., /my-photo.jpg) inside the public folder */}
            <div className="w-full flex-1 border-4 border-black bg-cream overflow-hidden relative grayscale hover:grayscale-0 transition-all duration-500">
              <img
                src="https://res.cloudinary.com/dbg7xnr63/image/upload/f_auto,q_auto/pfp_o32fvj"
                alt="Rachit Neema"
                className="w-full h-full object-cover object-center"
                onError={(e) => {
                  /* Fallback if image is not found */
                  e.currentTarget.style.display = 'none';
                  e.currentTarget.nextElementSibling?.classList.remove('hidden');
                }}
              />
              {/* Fallback pattern when there is no image */}
              <div className="hidden absolute inset-0 bg-[linear-gradient(45deg,transparent_45%,black_45%,black_55%,transparent_55%)] bg-[size:10px_10px] flex items-center justify-center">
                <span className="bg-white border-2 border-black px-4 py-2 font-black uppercase text-xl rotate-[-15deg]">Add Image</span>
              </div>
            </div>

            {/* Polaroid style footer */}
            <div className="mt-4 flex flex-wrap justify-between items-center px-1">
              <span className="font-bold uppercase tracking-widest text-lg">Est. 2026</span>
              <div className="h-4 bg-black rounded-full text-[10px] font-bold text-white flex items-center justify-center transition-all duration-300 overflow-hidden whitespace-nowrap w-4 hover:w-32 cursor-default group hover:px-2">
                 <span className="opacity-0 group-hover:opacity-100 transition-opacity duration-300 delay-100 uppercase">npm run survive</span>
              </div>
            </div>
          </div>

          {/* Overlapping Badge */}
          <div className="absolute top-1/2 left-0 md:-left-8 z-30 w-32 h-32 bg-black rounded-full border-4 border-white transform -translate-y-1/2 flex items-center justify-center hover:scale-110 transition-brutal hover:rotate-180">
            <span className="text-white font-bold text-center leading-tight">FULL<br />STACK</span>
          </div>

        </div>
      </div>
    </SectionWrapper>
  );
}
