import React from 'react';
import { LifeEvent } from '../types';

interface GrowthMapProps {
  events: LifeEvent[];
}

// Abstract River Paths (Yangtze + Han River) for Wuhan
const RiverPath = () => (
  <svg className="absolute inset-0 w-full h-full opacity-20 pointer-events-none" viewBox="0 0 100 100" preserveAspectRatio="none">
    {/* Yangtze River (SW to NE) */}
    <path 
      d="M 0 80 C 20 80, 40 70, 60 50 S 90 20, 100 10" 
      fill="none" 
      stroke="#3b82f6" 
      strokeWidth="3"
      className="drop-shadow-[0_0_5px_rgba(59,130,246,0.5)]"
    />
    {/* Han River (West to merge at center) */}
    <path 
      d="M 0 40 C 20 45, 40 45, 55 52" 
      fill="none" 
      stroke="#3b82f6" 
      strokeWidth="2"
      className="drop-shadow-[0_0_5px_rgba(59,130,246,0.5)]"
    />
  </svg>
);

const GrowthMap: React.FC<GrowthMapProps> = ({ events }) => {
  // Sort events chronologically: Birth (oldest) -> Present (newest)
  // The input 'events' array is usually Newest -> Oldest (Timeline order).
  const chronologicalEvents = [...events].reverse();

  return (
    <div className="w-full h-[400px] md:h-[600px] bg-[#020617] border border-slate-800 rounded-lg relative overflow-hidden shadow-2xl">
      {/* Grid Background */}
      <div className="absolute inset-0 bg-grid opacity-20"></div>
      
      {/* Map Labels (Districts) */}
      <div className="absolute top-4 left-4 text-slate-700 font-mono text-xs font-bold tracking-widest z-0 pointer-events-none">
        HANKOU // <br/> SECTOR 01
      </div>
      <div className="absolute bottom-4 right-4 text-slate-700 font-mono text-xs font-bold tracking-widest text-right z-0 pointer-events-none">
        WUCHANG // <br/> SECTOR 02
      </div>
      <div className="absolute bottom-4 left-4 text-slate-700 font-mono text-xs font-bold tracking-widest z-0 pointer-events-none">
        HANYANG // <br/> SECTOR 03
      </div>

      <RiverPath />

      {/* Trajectory Line & Arrows */}
      <svg className="absolute inset-0 w-full h-full z-10 pointer-events-none">
         <defs>
            {/* Arrow Marker Definition */}
            <marker 
                id="arrow" 
                viewBox="0 0 10 10" 
                refX="5" 
                refY="5"
                markerWidth="4" 
                markerHeight="4"
                orient="auto-start-reverse"
            >
                <path d="M 0 0 L 10 5 L 0 10 z" fill="#0ea5e9" />
            </marker>
         </defs>

         {/* Dashed Base Line */}
         <polyline 
            points={chronologicalEvents.map(e => `${e.coordinates.x}%,${e.coordinates.y}%`).join(' ')}
            fill="none"
            stroke="#1e293b"
            strokeWidth="2"
            strokeDasharray="4 4"
         />

         {/* Directional Path with Arrows */}
         {chronologicalEvents.map((event, i) => {
             if (i === chronologicalEvents.length - 1) return null; // No line from last point
             const nextEvent = chronologicalEvents[i + 1];
             return (
                 <line 
                    key={`line-${i}`}
                    x1={`${event.coordinates.x}%`} 
                    y1={`${event.coordinates.y}%`} 
                    x2={`${nextEvent.coordinates.x}%`} 
                    y2={`${nextEvent.coordinates.y}%`} 
                    stroke="#0ea5e9" 
                    strokeWidth="1.5"
                    markerEnd="url(#arrow)"
                    opacity="0.6"
                 />
             );
         })}
      </svg>

      {/* Points & Labels */}
      {chronologicalEvents.map((event, idx) => {
         // Determine if it's the Start (Birth) or End (University/Present)
         const isStart = idx === 0;
         const isEnd = idx === chronologicalEvents.length - 1;

         return (
            <div 
              key={idx}
              className="absolute transform -translate-x-1/2 -translate-y-1/2 flex flex-col items-center group z-20"
              style={{ left: `${event.coordinates.x}%`, top: `${event.coordinates.y}%` }}
            >
               {/* Label */}
               <div 
                 className={`whitespace-nowrap px-2 py-1 rounded text-[9px] font-mono shadow-lg backdrop-blur-sm mb-2 transition-all duration-300
                    ${isEnd 
                        ? 'bg-sre-primary/20 border border-sre-primary text-sre-primary' 
                        : isStart 
                            ? 'bg-pink-500/20 border border-pink-500 text-pink-400'
                            : 'bg-slate-900/80 border border-slate-700 text-slate-400 opacity-60 group-hover:opacity-100'
                    }
                 `}
               >
                  {event.location}
               </div>

               {/* Dot */}
               <div 
                 className={`rounded-full border-2 transition-transform duration-300 group-hover:scale-125 ${
                    isEnd 
                        ? 'w-4 h-4 bg-sre-primary border-white shadow-[0_0_15px_rgba(14,165,233,0.8)]' 
                        : isStart
                            ? 'w-3 h-3 bg-pink-500 border-white shadow-[0_0_10px_rgba(236,72,153,0.8)]'
                            : 'w-2 h-2 bg-slate-800 border-slate-500'
                 }`}
               />
            </div>
         );
      })}

      {/* Legend / Info */}
      <div className="absolute bottom-2 right-2 flex flex-col items-end gap-1 pointer-events-none">
          <div className="flex items-center gap-2 text-[10px] text-slate-500 font-mono">
             <span className="w-2 h-2 rounded-full bg-pink-500"></span> START
          </div>
          <div className="flex items-center gap-2 text-[10px] text-slate-500 font-mono">
             <span className="w-2 h-2 rounded-full bg-sre-primary"></span> LATEST
          </div>
      </div>
    </div>
  );
};

export default GrowthMap;