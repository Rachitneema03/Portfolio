import React from "react";
import { SectionWrapper } from "../SectionWrapper";
import { Card } from "../Card";
import { Badge } from "../Badge";

export function About() {
  return (
    <SectionWrapper id="about" bg="white">
      <div className="flex flex-col md:flex-row gap-12">
        <div className="flex-1">
          <h2 className="text-5xl md:text-7xl font-black uppercase mb-8 inline-block relative">
            <span className="relative z-10">About Me</span>
            <div className="absolute bottom-2 left-0 w-110% h-6 bg-yellow -z-10 -rotate-1"></div>
          </h2>
          
          <div className="space-y-6 text-xl font-bold">
            <p className="bg-cream border-4 border-black p-4 brutalist-shadow-sm rotate-1">
              Currently developing real-world projects focused on solving practical problems and building intuitive user experiences
            </p>
            <p>
               while pursuing a second-year degree in Information Technology<span className="bg-violet px-2 py-0.5 border-2 border-black inline-block -rotate-2">modern web tech</span>, turning chaotic ideas into structured, beautiful code.
            </p>
            <p>
              Actively engaged in continuous learning, exploring new concepts, and strengthening analytical and communication abilities through hands-on work.
            </p>
          </div>
        </div>

        <div className="flex-1 grid grid-cols-2 gap-6 items-center">
          <Card bg="yellow" className="rotate-3 h-48 flex flex-col justify-center items-center text-center">
            <h3 className="text-4xl font-black">IT Student</h3>
            <p className="font-bold uppercase tracking-widest mt-2">UnderGrad</p>
            <Badge color="white" className="mt-4 shadow-[2px_2px_0_0_#000] absolute -top-4 -right-4 rotate-12">PRO</Badge>
          </Card>
          <Card bg="violet" className="-rotate-2 h-48 flex flex-col justify-center items-center text-center">
             <h3 className="text-4xl font-black">CONSISTENT BUILDER</h3>
            <p className="font-bold uppercase tracking-widest mt-2">CODE. BREAK. REPEAT.</p>
          </Card>
          <Card bg="cream" className="rotate-1 col-span-2 h-32 flex flex-col justify-center items-center text-center relative group cursor-crosshair">
             <p className="text-2xl font-black italic group-hover:hidden">"Code is just structured thought."</p>
             <div className="hidden group-hover:flex flex-col items-center">
               <p className="text-lg font-black italic line-through decoration-red-500 decoration-4">"Code is just structured thought."</p>
               <p className="text-xl font-bold uppercase mt-1 text-violet">"Code is 90% StackOverflow."</p>
             </div>
          </Card>
        </div>
      </div>
    </SectionWrapper>
  );
}
