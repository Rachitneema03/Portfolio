"use client";

import React, { useRef } from "react";
import { SectionWrapper } from "../SectionWrapper";
import { Card } from "../Card";
import { Badge } from "../Badge";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

export function Experience() {
  const containerRef = useRef<HTMLDivElement>(null);

  const experiences = [
    {
      title: "Technical team",
      org: "Trivera",
      date: "2026",
      desc: "Working on building a platform for Club Event",
      color: "bg-white",
      align: "md:justify-start",
      rotate: "rotate-1",
      badge: "yellow",
      isLeft: true
    },
    {
      title: "NXTWAVE OpenAI Hackathon",
      org: "NXTWAVE + OPENAI",
      date: "2025",
      desc: "Built a iternary planner using AI.",
      color: "bg-violet",
      align: "md:justify-end",
      rotate: "-rotate-2",
      badge: "white",
      isLeft: false
    },
    {
      title: "Volunteer in SFORTI",
      org: "Annual Event",
      date: "2025",
      desc: "Helped in organizing the event and managed the crowd.",
      color: "bg-yellow",
      align: "md:justify-start",
      rotate: "rotate-2",
      badge: "white",
      isLeft: true
    },
    {
      title: "MTech(B.Tech Integrated)",
      org: "International Institute of Professional Studies, DAVV",
      date: "2024 - 2029",
      desc: "Focused on algorithms, and crying over CGPA's.",
      color: "bg-cream",
      align: "md:justify-end",
      rotate: "-rotate-1",
      badge: "violet",
      isLeft: false
    }
  ];

  useGSAP(() => {
    // 1. Animate the central vertical line drawing downwards organically based on scroll
    gsap.fromTo(
      ".timeline-line-inner",
      { height: "0%" },
      {
        height: "100%",
        ease: "none",
        scrollTrigger: {
          trigger: ".timeline-line-container",
          start: "top center",
          end: "bottom center",
          scrub: true,
        }
      }
    );

    // 2. Brutalist slam-in animation for each card as you scroll down
    const items = gsap.utils.toArray<HTMLElement>(".timeline-item");
    
    items.forEach((item, index) => {
      const isLeft = experiences[index].isLeft;
      const card = item.querySelector(".timeline-card");
      const connector = item.querySelector(".timeline-connector");

      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: item,
          start: "top 85%", // Triggers when the top of the item hits 85% down the viewport
          toggleActions: "play none none reverse"
        }
      });

      // Card slams in with a heavy physical bounce
      tl.fromTo(card, 
        { 
          x: isLeft ? -100 : 100, 
          y: 50,
          opacity: 0,
          rotation: isLeft ? -15 : 15,
        },
        {
          x: 0,
          y: 0,
          opacity: 1,
          rotation: 0,
          duration: 0.6,
          ease: "back.out(2)", 
          clearProps: "all" // Extremely important: clears inline transforms after animation so the native CSS hover :hover rotations can take over again!
        }
      );

      // Connector drops in 
      tl.fromTo(connector,
        { scale: 0, rotation: -45 },
        { scale: 1, rotation: 0, duration: 0.4, ease: "back.out(3)" },
        "-=0.4"
      );
    });
  }, { scope: containerRef });

  return (
    <SectionWrapper id="experience" bg="cream">
      <div ref={containerRef}>
        <h2 className="text-5xl md:text-7xl font-black uppercase mb-16 text-center">
          Timeline / <span className="text-stroke-sm relative inline-block">Exp</span>
        </h2>

        <div className="relative max-w-4xl mx-auto overflow-hidden md:overflow-visible">
          {/* Vertical Line Container */}
          <div className="hidden md:block absolute left-1/2 top-4 bottom-8 w-2 transform -translate-x-1/2 -z-10 group timeline-line-container">
            {/* The faint background track */}
            <div 
              className="absolute inset-0 w-full opacity-15"
              style={{ backgroundImage: "linear-gradient(to bottom, black 50%, transparent 50%)", backgroundSize: "100% 20px" }}
            ></div>
            
            {/* The actual active dotted line that grows */}
            <div 
              className="timeline-line-inner absolute top-0 left-0 w-full h-0 origin-top"
              style={{ backgroundImage: "linear-gradient(to bottom, black 50%, transparent 50%)", backgroundSize: "100% 20px", backgroundRepeat: "repeat-y" }}
            ></div>
            
            <span className="absolute -bottom-16 left-1/2 -translate-x-1/2 text-[10px] font-mono whitespace-nowrap opacity-20 hover:opacity-100 rotate-90 transition-opacity select-none tracking-widest cursor-crosshair">
              // TODO: Refactor my entire life
            </span>
          </div>
          
          <div className="space-y-12 pb-16">
            {experiences.map((exp, i) => (
              <div key={i} className={`timeline-item flex ${exp.align} relative w-full`}>
                 {/* Center Timeline Connector */}
                 <div className="timeline-connector hidden md:block absolute left-1/2 top-1/2 w-8 h-8 bg-white border-4 border-black rounded-full transform -translate-x-1/2 -translate-y-1/2 z-10 transition-brutal hover:scale-125 hover:bg-yellow shadow-[4px_4px_0_0_#000]"></div>
                 
                 <div className={`timeline-card w-full md:w-[45%] ${exp.rotate} transition-brutal hover:rotate-0 hover:-translate-y-2`}>
                   <Card bg={exp.color as any} hoverEffect={true} className="flex flex-col relative">
                      <Badge color={exp.badge as any} className="absolute -top-4 shadow-[2px_2px_0_0_#000] rotate-6 right-4 sm:right-auto sm:left-4 z-20">
                        {exp.date}
                      </Badge>
                      <h3 className="text-2xl font-black uppercase mt-4 mb-1 relative z-10">{exp.title}</h3>
                      <h4 className="text-xl font-bold border-b-4 border-black pb-2 mb-4 inline-block">{exp.org}</h4>
                      <p className="font-bold text-lg text-black/80">{exp.desc}</p>
                   </Card>
                 </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </SectionWrapper>
  );
}
