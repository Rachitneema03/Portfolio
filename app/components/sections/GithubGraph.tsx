"use client";

import React from "react";
import { SectionWrapper } from "../SectionWrapper";
import { GitHubCalendar } from "react-github-calendar";
import { Tooltip } from "react-tooltip";

export function GithubGraph() {
  const [mounted, setMounted] = React.useState(false);

  React.useEffect(() => {
    setMounted(true);
  }, []);

  const explicitTheme = {
    light: ['#FFFDF5', '#fce883', '#fadc46', '#FFD93D', '#C4B5FD'],
    dark: ['#FFFDF5', '#fce883', '#fadc46', '#FFD93D', '#C4B5FD'],
  };

  return (
    <SectionWrapper id="github" bg="white" pattern={true}>
      <div className="w-full max-w-7xl mx-auto flex flex-col items-center">
        <div className="w-full bg-white border-8 border-black p-4 md:p-8 brutalist-shadow-lg relative mb-12">
          
          <div className="absolute -top-6 -left-6 bg-yellow border-4 border-black px-4 py-2 rotate-3 shadow-[4px_4px_0_0_#000] z-10">
            <h3 className="text-2xl font-black uppercase">Contributions</h3>
          </div>
          
          <div className="absolute -top-4 -right-4 bg-violet border-4 border-black px-4 py-1 -rotate-6 shadow-[2px_2px_0_0_#000] z-10 group cursor-help">
            <span className="font-bold uppercase tracking-widest text-sm group-hover:opacity-0 transition-opacity">Real Data</span>
            <span className="absolute inset-0 flex items-center justify-center font-black uppercase text-[10px] opacity-0 group-hover:opacity-100 transition-opacity text-center leading-none">Terminally<br/>Online</span>
          </div>

          <div className="mt-8 flex justify-center overflow-x-auto pb-4 github-calendar-wrapper font-bold min-h-[200px]">
             <div className="min-w-fit">
               {mounted ? (
                 <>
                   <GitHubCalendar 
                     username="Rachitneema03" 
                     theme={explicitTheme}
                     colorScheme="light"
                     blockSize={22}
                     blockMargin={8}
                     fontSize={16}
                     renderBlock={(block, activity) => 
                       React.cloneElement(block, {
                         'data-tooltip-id': 'github-tooltip',
                         'data-tooltip-html': `${activity.count} contributions on ${activity.date}`,
                       })
                     }
                   />
                   <Tooltip id="github-tooltip" className="brutalist-tooltip" />
                 </>
               ) : (
                 <div className="flex items-center justify-center h-48 w-full">
                    <span className="text-xl font-black uppercase animate-pulse">Loading Commits...</span>
                 </div>
               )}
             </div>
          </div>
          
        </div>
      </div>

      <style dangerouslySetInnerHTML={{__html: `
        .github-calendar-wrapper rect {
           stroke: black;
           stroke-width: 1.5px;
           rx: 0;
           ry: 0;
           transition: transform 0.15s ease, stroke-width 0.15s ease;
        }
        .github-calendar-wrapper rect:hover {
           stroke-width: 3px;
        }
        .github-calendar-wrapper text {
           font-family: inherit;
           font-weight: 900;
           fill: black !important;
        }
        
        /* Force tooltips to match the brutalist aesthetic */
        .react-tooltip.brutalist-tooltip {
           font-family: var(--font-sans) !important;
           font-weight: bold !important;
           border: 4px solid black !important;
           border-radius: 0 !important;
           background-color: white !important;
           color: black !important;
           box-shadow: 4px 4px 0px 0px black !important;
           font-size: 14px !important;
           text-transform: uppercase !important;
           opacity: 1 !important;
           padding: 8px 12px !important;
        }
      `}} />
    </SectionWrapper>
  );
}
