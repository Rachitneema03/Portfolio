import React from "react";
import { SectionWrapper } from "../SectionWrapper";
import { Card } from "../Card";
import { Badge } from "../Badge";

export function Experience() {
  const experiences = [
    {
      title: "Senior Developer",
      org: "Tech Corp Inc.",
      date: "2023 - PRESENT",
      desc: "Led frontend architecture for robust enterprise applications.",
      color: "bg-white",
      align: "md:justify-start",
      rotate: "rotate-1",
      badge: "yellow"
    },
    {
      title: "Global Hackathon Winner",
      org: "Web3 Summit",
      date: "2022",
      desc: "Built a decentralized voting system in 48 hours.",
      color: "bg-violet",
      align: "md:justify-end",
      rotate: "-rotate-2",
      badge: "white"
    },
    {
      title: "Full Stack Engineer",
      org: "StartUp DAO",
      date: "2020 - 2022",
      desc: "Scaled user base from 0 to 10k using Next.js and Go.",
      color: "bg-yellow",
      align: "md:justify-start",
      rotate: "rotate-2",
      badge: "white"
    },
    {
      title: "B.S. Computer Science",
      org: "State University",
      date: "2016 - 2020",
      desc: "Focused on algorithms, systems, and crying over C pointers.",
      color: "bg-cream",
      align: "md:justify-end",
      rotate: "-rotate-1",
      badge: "violet"
    }
  ];

  return (
    <SectionWrapper id="experience" bg="cream">
      <h2 className="text-5xl md:text-7xl font-black uppercase mb-16 text-center">
        Timeline / <span className="text-stroke-sm relative inline-block">Exp</span>
      </h2>

      <div className="relative max-w-4xl mx-auto">
        {/* Vertical Line */}
        <div className="hidden md:block absolute left-1/2 top-0 bottom-0 w-2 bg-black transform -translate-x-1/2 -z-10 group">
           <span className="absolute -bottom-16 left-1/2 -translate-x-1/2 text-[10px] font-mono whitespace-nowrap opacity-20 hover:opacity-100 rotate-90 transition-opacity select-none tracking-widest cursor-crosshair">
             // TODO: Refactor my entire life
           </span>
        </div>
        
        <div className="space-y-12">
          {experiences.map((exp, i) => (
            <div key={i} className={`flex ${exp.align} relative w-full`}>
               {/* Center Timeline Connector */}
               <div className="hidden md:block absolute left-1/2 top-1/2 w-8 h-8 bg-white border-4 border-black rounded-full transform -translate-x-1/2 -translate-y-1/2 z-10 transition-brutal hover:scale-125 hover:bg-yellow"></div>
               
               <div className={`w-full md:w-[45%] ${exp.rotate} transition-brutal hover:rotate-0 hover:-translate-y-2`}>
                 <Card bg={exp.color as any} hoverEffect={true} className="flex flex-col relative">
                    <Badge color={exp.badge as any} className="absolute -top-4 shadow-[2px_2px_0_0_#000] rotate-6 right-4 sm:right-auto sm:left-4">
                      {exp.date}
                    </Badge>
                    <h3 className="text-2xl font-black uppercase mt-4 mb-1">{exp.title}</h3>
                    <h4 className="text-xl font-bold border-b-4 border-black pb-2 mb-4 inline-block">{exp.org}</h4>
                    <p className="font-bold text-lg">{exp.desc}</p>
                 </Card>
               </div>
            </div>
          ))}
        </div>
      </div>
    </SectionWrapper>
  );
}
