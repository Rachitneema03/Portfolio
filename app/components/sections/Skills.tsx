import React from "react";
import { SectionWrapper } from "../SectionWrapper";
import { Code2, Database, Layout, Server, Terminal, Smartphone } from "lucide-react";

export function Skills() {
  const skills = [
    { name: "Frontend", icon: <Layout size={32} className="stroke-[3]" />, tech: "React, Next.js, Vue, Tailwind", color: "bg-yellow" },
    { name: "Backend", icon: <Server size={32} className="stroke-[3]" />, tech: "Node.js, Express, Python, Go", color: "bg-cream" },
    { name: "Database", icon: <Database size={32} className="stroke-[3]" />, tech: "PostgreSQL, MongoDB, Redis", color: "bg-violet" },
    { name: "Languages", icon: <Code2 size={32} className="stroke-[3]" />, tech: "TypeScript, Python, Java, C++", color: "bg-white" },
    { name: "DevOps", icon: <Terminal size={32} className="stroke-[3]" />, tech: "Docker, AWS, CI/CD, Linux", color: "bg-yellow" },
    { name: "Mobile", icon: <Smartphone size={32} className="stroke-[3]" />, tech: "React Native, Flutter", color: "bg-cream" },
  ];

  return (
    <SectionWrapper id="skills" bg="black" className="text-white">
      <h2 className="text-5xl md:text-7xl font-black uppercase mb-12 flex items-center gap-4">
        <span className="bg-yellow text-black px-4 py-1 rotate-2">Tech</span>
        <span className="text-stroke-bg text-white">Stack</span>
      </h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {skills.map((skill, index) => (
          <div 
            key={index} 
            className={`${skill.color} text-black border-4 border-white p-6 brutalist-shadow transition-brutal hover:-translate-y-2 hover:brutalist-shadow-lg group flex flex-col h-full`}
            style={{
              boxShadow: "8px 8px 0px 0px white" // custom white shadow for black bg
            }}
          >
            <div className="flex items-center gap-4 mb-4">
              <div className="p-3 bg-black text-white border-2 border-black transform group-hover:scale-110 group-hover:rotate-12 transition-brutal">
                {skill.icon}
              </div>
              <h3 className="text-2xl font-black uppercase">{skill.name}</h3>
            </div>
            <p className="font-bold text-lg mt-auto pt-4 border-t-4 border-black">
              {skill.tech}
            </p>
          </div>
        ))}
      </div>
    </SectionWrapper>
  );
}
