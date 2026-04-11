"use client";

import React from "react";
import { SectionWrapper } from "../SectionWrapper";
import { Button } from "../Button";
import { Badge } from "../Badge";
import { Card } from "../Card";
import { Code2, Briefcase, MessageSquare, Mail } from "lucide-react";

export function Contact() {
  return (
    <SectionWrapper id="contact" bg="yellow" className="border-b-0">
      <div className="max-w-4xl mx-auto flex flex-col items-center text-center">
        
        <Badge color="black" className="text-2xl px-6 py-2 rotate-2 mb-8 inline-block shadow-[4px_4px_0_0_#FFF]">
          WHAT ARE YOU WAITING FOR?
        </Badge>

        <h2 className="text-7xl md:text-9xl font-black uppercase mb-12 tracking-tighter leading-none hover:scale-105 transition-brutal cursor-crosshair">
          Let's<br/>
          <span className="text-stroke-bg text-black">Talk.</span>
        </h2>

        <div className="w-full flex flex-col md:flex-row gap-8 mb-16">
           <Card bg="white" className="flex-1 text-left rotate-1">
              <h3 className="text-3xl font-black uppercase mb-6">Drop a line</h3>
              <form action="https://formsubmit.co/rachitneemawork@gmail.com" method="POST" className="flex flex-col gap-6">
                 {/* Security configuration for formsubmit */}
                 <input type="hidden" name="_subject" value="New Portfolio Contact Submission!" />
                 <input type="hidden" name="_template" value="box" />
                 
                 <div className="flex flex-col gap-2">
                   <label className="font-bold uppercase tracking-wider text-sm">Name</label>
                   <input type="text" name="name" required className="border-4 border-black p-3 font-bold focus:outline-none focus:bg-yellow focus:-translate-y-1 focus:brutalist-shadow transition-brutal" placeholder="Your Name" />
                 </div>
                 <div className="flex flex-col gap-2">
                   <label className="font-bold uppercase tracking-wider text-sm">Email</label>
                   <input type="email" name="email" required className="border-4 border-black p-3 font-bold focus:outline-none focus:bg-yellow focus:-translate-y-1 focus:brutalist-shadow transition-brutal" placeholder="Your Email" />
                 </div>
                 <div className="flex flex-col gap-2 relative group cursor-text">
                   <label className="font-bold uppercase tracking-wider text-sm">Message</label>
                   <textarea name="message" required rows={4} className="border-4 border-black p-3 font-bold focus:outline-none focus:bg-yellow focus:-translate-y-1 focus:brutalist-shadow transition-brutal" placeholder="LET'S BUILD SOMETHING BEAUTIFUL..."></textarea>
                   <span className="absolute bottom-2 right-4 text-[10px] opacity-0 group-focus-within:opacity-30 font-mono transition-opacity pointer-events-none">
                     (OR REPORT BUGS)
                   </span>
                 </div>
                 <Button type="submit" variant="accent" className="mt-4 text-xl py-4 flex items-center justify-center gap-2 group relative overflow-hidden">
                    <div className="flex items-center justify-center w-full group-hover:opacity-0 transition-opacity duration-150 relative z-10 pl-6">
                      <Mail size={24} className="stroke-[3] mr-2" />
                      <span>SEND IT</span>
                    </div>
                    <span className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 font-black tracking-widest z-20">YEET IT</span>
                 </Button>
              </form>
           </Card>
           
           <div className="flex flex-col gap-6 justify-center md:w-64">
              <a href="https://github.com/Rachitneema03" target="_blank" rel="noopener noreferrer" className="flex items-center gap-4 p-4 border-4 border-black bg-cream brutalist-shadow transition-brutal hover:-translate-y-1 hover:brutalist-shadow-lg hover:bg-violet group">
                 <Code2 size={32} className="stroke-[3] group-hover:rotate-12 transition-brutal" />
                 <span className="font-bold uppercase text-xl">Github</span>
              </a>
              <a href="https://www.linkedin.com/in/rachit-neema/" target="_blank" rel="noopener noreferrer" className="flex items-center gap-4 p-4 border-4 border-black bg-cream brutalist-shadow transition-brutal hover:-translate-y-1 hover:brutalist-shadow-lg hover:-rotate-2 hover:bg-[#0077b5] hover:text-white group">
                 <Briefcase size={32} className="stroke-[3] group-hover:-rotate-12 transition-brutal" />
                 <span className="font-bold uppercase text-xl">LinkedIn</span>
              </a>
              <a href="https://x.com/rachitneema3" target="_blank" rel="noopener noreferrer" className="flex items-center gap-4 p-4 border-4 border-black bg-cream brutalist-shadow transition-brutal hover:-translate-y-1 hover:brutalist-shadow-lg hover:rotate-2 hover:bg-black hover:text-white group">
                 <MessageSquare size={32} className="stroke-[3] group-hover:rotate-12 transition-brutal" />
                 <span className="font-bold uppercase text-xl">Twitter</span>
              </a>
           </div>
        </div>
      </div>
    </SectionWrapper>
  );
}
