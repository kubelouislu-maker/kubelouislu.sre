import React from 'react';
import { motion } from 'framer-motion';
import { Baby, School, GraduationCap, MapPin, Milestone } from 'lucide-react';
import { useLanguage } from '../LanguageContext';
import { LifeEvent } from '../types';
import GrowthMap from './GrowthMap';

const EventNode: React.FC<{ 
    event: LifeEvent; 
    index: number; 
}> = ({ event, index }) => {
  
  const getIcon = (type: string) => {
    switch (type) {
      case 'birth': return <Baby size={22} />;
      case 'school': return <School size={22} />;
      case 'university': return <GraduationCap size={22} />;
      default: return <Milestone size={22} />;
    }
  };

  const getIconStyles = (type: string) => {
    switch (type) {
        case 'birth': return 'bg-pink-500/10 text-pink-400 border-pink-500/50 shadow-[0_0_10px_rgba(236,72,153,0.1)]';
        case 'school': return 'bg-blue-500/10 text-blue-400 border-blue-500/50 shadow-[0_0_10px_rgba(59,130,246,0.1)]';
        case 'university': return 'bg-sre-primary/10 text-sre-primary border-sre-primary/50 shadow-[0_0_10px_rgba(14,165,233,0.1)]';
        default: return 'bg-slate-700 text-white border-slate-500';
    }
  };

  return (
    <motion.div 
        initial={{ opacity: 0, x: -20 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, delay: index * 0.1 }}
        className="flex gap-6 mb-24 relative group"
    >
      {/* Timeline Spine & Icon */}
      <div className="flex flex-col items-center flex-shrink-0">
          <div className={`w-12 h-12 rounded-full border-2 flex items-center justify-center z-10 ${getIconStyles(event.iconType)}`}>
            {getIcon(event.iconType)}
          </div>
          {/* Vertical Line Segment */}
          <div className="w-[2px] flex-grow bg-slate-800 mt-4 min-h-[150px] group-last:hidden"></div>
      </div>

      {/* Content */}
      <div className="pt-2 pb-12 w-full">
         <span className="font-mono text-sm font-bold tracking-widest text-sre-primary/80">
            {event.year}
         </span>
         
         <div className="mt-2 bg-[#0b1221] border border-slate-800 hover:border-slate-600 p-6 rounded-lg shadow-xl relative overflow-hidden transition-colors">
            <h3 className="text-xl font-bold text-white mb-2">{event.title}</h3>
            
            <div className="flex items-center gap-2 text-xs font-mono text-slate-500 mb-4 uppercase tracking-wider">
               <MapPin size={12} /> {event.location}
            </div>

            <p className="text-slate-400 text-sm leading-relaxed mb-4">{event.description}</p>
            
            {event.details && (
                <div className="space-y-2 bg-slate-900/50 p-4 rounded border border-slate-800/50">
                    {event.details.map((detail, i) => (
                    <div key={i} className="text-xs text-slate-400 flex items-start gap-2 leading-relaxed">
                        <span className="mt-1.5 w-1 h-1 rounded-full bg-sre-primary shrink-0"></span>
                        <span>{detail}</span>
                    </div>
                    ))}
                </div>
            )}
         </div>
      </div>
    </motion.div>
  );
};

const GrowthTimeline: React.FC = () => {
  const { content } = useLanguage();

  return (
    <section className="w-full px-4 md:px-12 lg:px-24 py-12 bg-[#050a14] min-h-screen relative">
      {/* Background decoration */}
      <div className="absolute inset-0 bg-grid opacity-10 pointer-events-none"></div>

      {/* Header */}
      <div className="text-left mb-16 relative z-10 border-b border-slate-800 pb-8 flex justify-between items-end">
        <div>
            <h2 className="text-3xl font-bold text-white mb-2 flex items-center gap-3">
            <Milestone className="text-sre-primary" />
            {content.ui.nav.growth}
            </h2>
            <p className="text-slate-500 font-mono text-xs uppercase tracking-widest">
            // Trajectory & Key Adjustments
            </p>
        </div>
        <div className="hidden md:block font-mono text-xs text-slate-600">
            WUHAN_COORDINATES: [30.5928° N, 114.3055° E]
        </div>
      </div>

      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-24 relative">
         
         {/* Left Column: Timeline */}
         <div className="order-2 lg:order-1">
             {content.growth.map((event: LifeEvent, index: number) => (
                 <EventNode 
                    key={index} 
                    event={event} 
                    index={index}
                 />
             ))}
         </div>

         {/* Right Column: Sticky Map (Static Independent View) */}
         <div className="order-1 lg:order-2 lg:h-[calc(100vh-100px)] lg:sticky lg:top-24 mb-12 lg:mb-0">
             <div className="bg-[#0b1221] border border-slate-800 p-1 rounded-lg shadow-2xl">
                 {/* Map Header */}
                 <div className="flex justify-between items-center bg-slate-950 p-2 border-b border-slate-800 mb-1 rounded-t">
                    <span className="text-[10px] font-mono text-sre-primary font-bold">TRAJECTORY_OVERVIEW</span>
                    <div className="flex gap-1">
                        <span className="w-2 h-2 rounded-full bg-slate-800 border border-slate-600"></span>
                        <span className="w-2 h-2 rounded-full bg-slate-800 border border-slate-600"></span>
                    </div>
                 </div>
                 
                 {/* Map Visualization */}
                 <GrowthMap events={content.growth} />
                 
                 {/* Footer Info */}
                 <div className="mt-2 p-2 font-mono text-[10px] text-slate-500 flex justify-between">
                     <span>SCALE: CITY_WIDE</span>
                     <span>VIEW: STATIC_PATH</span>
                 </div>
             </div>
         </div>

      </div>
    </section>
  );
};

export default GrowthTimeline;