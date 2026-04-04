import React from "react";
import { SectionWrapper } from "../SectionWrapper";
import { Code2, Database, Layout, Server, Terminal, Smartphone, Globe, Cpu } from "lucide-react";

export function Skills() {
  const skillsList = [
    { name: "React", icon: <Layout size={24} className="stroke-[3]" />, color: "bg-yellow", rotate: "-rotate-2" },
    { name: "Next.js", icon: <Globe size={24} className="stroke-[3]" />, color: "bg-white", rotate: "rotate-2" },
    { name: "TypeScript", icon: <Code2 size={24} className="stroke-[3]" />, color: "bg-violet", rotate: "-rotate-1" },
    { name: "Node.js", icon: <Server size={24} className="stroke-[3]" />, color: "bg-cream", rotate: "rotate-3" },
    { name: "Python", icon: <Cpu size={24} className="stroke-[3]" />, color: "bg-yellow", rotate: "-rotate-3" },
    { name: "Oracle SQL", icon: <Database size={24} className="stroke-[3]" />, color: "bg-white", rotate: "rotate-1" },
    { name: "FIGMA", icon: <Terminal size={24} className="stroke-[3]" />, color: "bg-violet", rotate: "-rotate-2" },
    { name: "Render", icon: <Server size={24} className="stroke-[3]" />, color: "bg-yellow", rotate: "rotate-2" },
    { name: "Tailwind CSS", icon: <Layout size={24} className="stroke-[3]" />, color: "bg-cream", rotate: "-rotate-1" },
    { name: "MongoDB", icon: <Database size={24} className="stroke-[3]" />, color: "bg-white", rotate: "rotate-3" },
    { name: "React Native", icon: <Smartphone size={24} className="stroke-[3]" />, color: "bg-violet", rotate: "-rotate-2" },
    { name: "JavaScript", icon: <Terminal size={24} className="stroke-[3]" />, color: "bg-yellow", rotate: "rotate-1" },
    { name: "Java", icon: <Cpu size={24} className="stroke-[3]" />, color: "bg-cream", rotate: "-rotate-3" },
    { name: "C++", icon: <Code2 size={24} className="stroke-[3]" />, color: "bg-white", rotate: "rotate-2" },
  ];

  return (
    <SectionWrapper id="skills" bg="black" className="text-white">
      <div className="flex flex-col lg:flex-row gap-12 items-center lg:items-start pb-12">
        {/* Left Side: Massive Header */}
        <div className="w-full lg:w-1/3 flex flex-col items-start z-10 relative">
          <h2 className="text-7xl md:text-8xl lg:text-[8rem] font-black uppercase tracking-tighter leading-[0.85] mb-8">
            <span className="text-stroke-bg text-transparent inline-block -rotate-2">Tech</span><br/>
            <span className="bg-yellow text-black px-4 py-2 inline-block rotate-2 shadow-[8px_8px_0_0_#FFF]">Stack</span>
          </h2>
          <p className="text-2xl font-bold border-l-8 border-yellow pl-6 py-2 text-cream">
            My arsenal of languages, frameworks, and tools. Built for speed, scaled for impact.
          </p>
        </div>

        {/* Right Side: Sticker Wall */}
        <div className="w-full lg:w-2/3 flex flex-wrap justify-center lg:justify-start gap-4 md:gap-6 mt-8 lg:mt-0 p-4 relative">
          {/* Decorative Background Grid */}
          <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.1)_2px,transparent_2px),linear-gradient(90deg,rgba(255,255,255,0.1)_2px,transparent_2px)] bg-[size:40px_40px] opacity-20 pointer-events-none"></div>

          {skillsList.map((skill, index) => (
            <div 
              key={index}
              className={`
                ${skill.color} ${skill.rotate} text-black border-4 border-black p-4 
                flex items-center gap-3 cursor-crosshair relative z-10
                transition-transform duration-200 ease-out
                hover:scale-110 hover:rotate-0 hover:z-20
              `}
              style={{
                boxShadow: "6px 6px 0px 0px white"
              }}
            >
              <div className="bg-black text-white p-2 border-2 border-black">
                {skill.icon}
              </div>
              <span className="text-xl md:text-2xl font-black uppercase tracking-wider">{skill.name}</span>
            </div>
          ))}
          
          {/* An extra chaotic sticker */}
          <div className="bg-white text-black border-4 border-black p-4 flex items-center justify-center rotate-6 shadow-[6px_6px_0_0_#FFF] ml-8 mt-4 hover:-rotate-2 transition-brutal hover:scale-110 relative z-10">
             <span className="text-xl md:text-2xl font-black uppercase tracking-wider line-through decoration-4 decoration-red-500">Sleep</span>
          </div>

        </div>
      </div>
    </SectionWrapper>
  );
}
