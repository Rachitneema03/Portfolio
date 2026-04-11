"use client";

import React from "react";
import { SectionWrapper } from "../SectionWrapper";
import { Card } from "../Card";
import { Badge } from "../Badge";
import { Button } from "../Button";
import { ExternalLink, Code2 } from "lucide-react";

export function Projects() {
  const projects = [
    {
      title: "Voice Audit",
      desc: "It is a hands-free AI assistant that listens to conversations and automatically converts spoken commitments into actionable tasks and calendar events. (TOP 10 in Glitch THe Grid)",
      tech: ["React", "Firebase", "Google AI Studio"],
      features: "NEW",
      liveLink: "https://voice-audit.vercel.app/",
      codeLink: "https://github.com/Rachitneema03/Voice-Audit.git"
    },
    {
      title: "KrishiMitra-AI",
      desc: "An agentic AI solution for farmers.Designed and deployed real-time crop disease detection and weather insights. (Selected in Top 8 in IBM Skillboost camp)",
      tech: ["Python" , "StreamLit" , "ML" , "TensorFlow"],
      features: "TEAM",
      rotate: "-rotate-1",
      liveLink: "https://krishimitra-ai.streamlit.app/",
      codeLink: "https://github.com/Rachitneema03/KrishiMitra-AI.git"
    },
    // {
    //   title: "Terminal Portfolio",
    //   desc: "Command-line style portfolio turned web app for the ultimate flex.",
    //   tech: ["Vue", "Node.js"],
    //   rotate: "rotate-2",
    //   liveLink: "https://your-live-url.com",
    //   codeLink: "https://github.com/yourusername/terminal-portfolio"
    // },
    // {
    //   title: "Blockchain Explorer",
    //   desc: "View crypto transactions with zero fluff and maximum impact.",
    //   tech: ["React", "Web3.js", "GraphQL"],
    //   rotate: "-rotate-2",
    //   liveLink: "https://your-live-url.com",
    //   codeLink: "https://github.com/yourusername/blockchain-explorer"
    // }
  ];

  return (
    <SectionWrapper id="projects" bg="violet" pattern={true}>
      <div className="flex justify-between items-end mb-16 border-b-8 border-black pb-4 relative">
         <h2 className="text-6xl md:text-8xl font-black uppercase tracking-tighter">
            <span className="text-stroke-bg text-white">Selected Work</span>
         </h2>
         <Badge color="yellow" className="text-2xl py-2 px-4 shadow-[4px_4px_0_0_#000] rotate-3 -translate-y-4 relative z-10">PROJECTS</Badge>
         
         {/* Subtle Easter Egg */}
         <span className="absolute -right-8 top-12 rotate-90 text-[10px] font-mono opacity-20 hover:opacity-100 transition-opacity hidden md:block select-none cursor-default">
           /* Pls don't inspect element */
         </span>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-10">
        {projects.map((p, i) => (
          <Card key={i} bg="white" className={`${p.rotate || ''} flex flex-col h-full relative`}>
            {p.features && (
               <Badge className="absolute -top-3 -left-3 shadow-[2px_2px_0_0_#000]" color="yellow">
                 {p.features}
               </Badge>
            )}
            <h3 className="text-3xl font-black uppercase mb-4 mt-2">{p.title}</h3>
            <p className="font-bold text-lg mb-6 flex-grow">{p.desc}</p>
            
            <div className="flex flex-wrap gap-2 mb-8">
               {p.tech.map(t => (
                 <span key={t} className="px-2 py-1 bg-cream border-2 border-black text-sm font-bold uppercase">{t}</span>
               ))}
            </div>

            <div className="flex gap-4 mt-auto">
               <Button 
                 className="flex-1 flex justify-center items-center gap-2 py-2 text-sm" 
                 variant="primary"
                 onClick={() => p.liveLink && window.open(p.liveLink, '_blank')}
               >
                 <ExternalLink size={18} className="stroke-[3]" /> Live
               </Button>
               <Button 
                 className="flex-1 flex justify-center items-center gap-2 py-2 text-sm bg-black text-white" 
                 variant="accent"
                 onClick={() => p.codeLink && window.open(p.codeLink, '_blank')}
               >
                 <Code2 size={18} className="stroke-[3]" /> Code
               </Button>
            </div>
          </Card>
        ))}
      </div>
    </SectionWrapper>
  );
}
