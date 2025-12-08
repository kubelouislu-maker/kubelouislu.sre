import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown, ChevronUp, Briefcase, Calendar, Building2, GitCommit, GitBranch, Activity } from 'lucide-react';
import { useLanguage } from '../LanguageContext';
import { Job } from '../types';

// Company Logo Components
const AlipayLogo = () => (
  <svg viewBox="0 0 1024 1024" fill="currentColor" className="w-full h-full text-[#1677FF]">
    <path d="M889.6 195.2h-368c-12.8 0-25.6 12.8-25.6 25.6v51.2c0 12.8 12.8 25.6 25.6 25.6h176c41.6 0 54.4 28.8 35.2 64-19.2 32-51.2 51.2-105.6 51.2H201.6c-28.8 0-41.6-22.4-22.4-51.2 19.2-32 51.2-51.2 105.6-51.2h25.6v-51.2H284.8c-12.8 0-25.6-12.8-25.6-25.6v-51.2c0-12.8 12.8-25.6 25.6-25.6h384c28.8 0 41.6-22.4 22.4-51.2-19.2-32-51.2-51.2-105.6-51.2H201.6C128 51.2 64 115.2 64 188.8v646.4C64 908.8 128 972.8 201.6 972.8h620.8c73.6 0 137.6-64 137.6-137.6V332.8c0-73.6-64-137.6-137.6-137.6z" opacity="0.1"/>
    <path d="M464 64h96v128h-96zM192 192h640v64H192z" />
    <path d="M688 320c0 150.4-89.6 278.4-220.8 348.8L384 896l-86.4-38.4 96-252.8C284.8 556.8 236.8 470.4 227.2 384h96c9.6 48 35.2 96 73.6 134.4 35.2-35.2 60.8-76.8 73.6-121.6H224V320h464v64h-92.8c-16 67.2-51.2 124.8-102.4 172.8 80 32 172.8 28.8 195.2-236.8H688z" />
  </svg>
);

const ByteDanceLogo = () => (
  <svg viewBox="0 0 128 128" fill="none" className="w-full h-full">
    <path d="M28 44h16v40H28z" fill="#3b5998" />
    <path d="M56 24h16v80H56z" fill="#2563eb" />
    <path d="M84 36h16v56H84z" fill="#06b6d4" />
    <path d="M38 56L38 72" stroke="#fff" strokeWidth="4" strokeLinecap="round"/>
    <path d="M66 40L66 88" stroke="#fff" strokeWidth="4" strokeLinecap="round"/>
    <path d="M94 50L94 78" stroke="#fff" strokeWidth="4" strokeLinecap="round"/>
  </svg>
);

const TencentLogo = () => (
  <svg viewBox="0 0 1024 1024" className="w-full h-full" fill="currentColor">
     <path d="M512 64C264.6 64 64 264.6 64 512s200.6 448 448 448 448-200.6 448-448S759.4 64 512 64zm0 820c-205.4 0-372-166.6-372-372s166.6-372 372-372 372 166.6 372 372-166.6 372-372 372z" fill="#0052D9" opacity="0.2" />
     <path d="M720 320H304v96h160v288h96V416h160z" fill="#0052D9" />
  </svg>
);

const getLogo = (company: string) => {
  if (company.toLowerCase().includes('alipay') || company.includes('蚂蚁')) return <AlipayLogo />;
  if (company.toLowerCase().includes('bytedance') || company.includes('字节')) return <ByteDanceLogo />;
  if (company.toLowerCase().includes('tencent') || company.includes('腾讯')) return <TencentLogo />;
  return <Building2 className="text-slate-400" />;
};

const JobNode: React.FC<{ job: Job; index: number; isLast: boolean; labels: any }> = ({ job, index, isLast, labels }) => {
  const [isOpen, setIsOpen] = useState(true);

  return (
    <div className="relative pl-8 md:pl-0 mb-8">
      {/* Connector Line (Trace) */}
      {!isLast && (
        <div className="absolute left-[39px] md:left-1/2 top-10 bottom-[-40px] w-[2px] bg-slate-800 md:-translate-x-1/2 overflow-hidden">
             <motion.div 
               className="w-full h-[50%] bg-gradient-to-b from-sre-primary to-transparent"
               initial={{ y: '-100%' }}
               whileInView={{ y: '200%' }}
               transition={{ duration: 2, repeat: Infinity, ease: 'linear' }}
             />
        </div>
      )}

      {/* Container */}
      <div className={`flex flex-col md:flex-row items-start ${index % 2 === 0 ? 'md:flex-row-reverse' : ''} w-full relative z-10`}>
        
        {/* Logo Node (Center) */}
        <div className="absolute left-[20px] md:left-1/2 transform -translate-x-1/2 top-6 flex flex-col items-center z-20">
             <motion.div 
               whileHover={{ scale: 1.1, rotate: 5 }}
               className="w-12 h-12 rounded-xl bg-[#0b1221] border border-slate-700 shadow-[0_0_20px_rgba(0,0,0,0.5)] flex items-center justify-center p-2"
             >
                {getLogo(job.company)}
             </motion.div>
        </div>

        {/* Spacer for layout */}
        <div className="w-full md:w-1/2" />
        
        {/* Card Content */}
        <div className={`w-full md:w-1/2 ${index % 2 === 0 ? 'md:pr-16' : 'md:pl-16'} pl-16 pr-4`}>
           <motion.div 
             initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
             whileInView={{ opacity: 1, x: 0 }}
             viewport={{ once: true, margin: "-50px" }}
             className={`bg-[#0b1221] border ${isOpen ? 'border-sre-primary/50 shadow-[0_0_30px_rgba(56,189,248,0.1)]' : 'border-slate-800'} rounded-lg overflow-hidden transition-all duration-300 relative group`}
           >
             {/* Header */}
             <div 
               className="p-6 cursor-pointer hover:bg-slate-900/30 transition-colors"
               onClick={() => setIsOpen(!isOpen)}
             >
               <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-3">
                 <div className="flex items-center gap-3">
                   <h3 className={`text-xl font-bold tracking-tight ${job.logoColor || 'text-white'}`}>{job.company}</h3>
                 </div>
                 <span className="text-[10px] font-mono text-slate-400 bg-slate-900 border border-slate-700 px-2 py-1 rounded mt-2 md:mt-0 flex items-center gap-2">
                    <Calendar size={10} />
                    {job.period}
                 </span>
               </div>

               <div className="flex flex-wrap items-center gap-3 mb-4">
                  <div className="text-sm font-semibold text-white bg-sre-primary/10 px-3 py-1 rounded border border-sre-primary/20 flex items-center gap-2">
                    <Briefcase size={12} /> {job.role}
                  </div>
                  {/* Tech Tags Summary */}
                  <div className="flex flex-wrap gap-1">
                    {job.techStack.slice(0, 3).map(tech => (
                      <span key={tech} className="text-[10px] bg-slate-900 text-slate-500 px-2 py-1 rounded border border-slate-800">
                        {tech}
                      </span>
                    ))}
                    {job.techStack.length > 3 && (
                      <span className="text-[10px] text-slate-600 px-1">+{job.techStack.length - 3}</span>
                    )}
                  </div>
               </div>

               <div className="flex justify-center mt-2 md:hidden">
                 {isOpen ? <ChevronUp size={14} className="text-slate-600" /> : <ChevronDown size={14} className="text-slate-600" />}
               </div>
             </div>

             {/* Expanded Details */}
             <AnimatePresence>
               {isOpen && (
                 <motion.div 
                   initial={{ height: 0, opacity: 0 }}
                   animate={{ height: 'auto', opacity: 1 }}
                   exit={{ height: 0, opacity: 0 }}
                   className="border-t border-slate-800/50 bg-slate-900/10"
                 >
                   <div className="p-6 pt-2">
                     <div className="mb-6">
                       <h4 className="text-[10px] font-bold text-slate-500 uppercase tracking-widest mb-3 flex items-center gap-2 mt-2">
                         <GitBranch size={12} className="text-sre-primary" /> {labels.responsibilities}
                       </h4>
                       <ul className="space-y-3">
                         {job.highlights.map((item, i) => {
                            // Split title from content if it exists (Title: Content) or (Title：Content) for Chinese
                            const separator = item.includes('：') ? '：' : ': ';
                            const parts = item.split(separator);
                            const title = parts.length > 1 ? parts[0] : null;
                            const content = parts.length > 1 ? parts.slice(1).join(separator) : item;
                            
                            return (
                             <li key={i} className="text-sm text-slate-400 pl-4 border-l-2 border-slate-700 hover:border-sre-primary transition-colors leading-relaxed group-item">
                               {title && <span className="text-slate-200 font-semibold block mb-1">{title}</span>}
                               {content}
                             </li>
                           );
                         })}
                       </ul>
                     </div>
                     
                     {job.achievements.length > 0 && (
                        <div>
                           <h4 className="text-[10px] font-bold text-slate-500 uppercase tracking-widest mb-3 flex items-center gap-2">
                             <Activity size={12} className="text-green-500" /> {labels.metrics}
                           </h4>
                           <div className="grid grid-cols-2 gap-3">
                               {job.achievements.map((acc, i) => (
                                 <div key={i} className="bg-slate-950 p-3 rounded border border-slate-800 hover:border-slate-700 transition-all flex flex-col justify-between h-full">
                                   <div className="text-[10px] text-slate-500 uppercase mb-1">{acc.label}</div>
                                   <div className="flex items-end gap-2">
                                     <div className={`font-mono font-bold text-lg ${acc.change && acc.change > 0 ? 'text-green-400' : 'text-white'}`}>
                                       {acc.prefix}{acc.value}{acc.suffix}
                                     </div>
                                     {acc.change && (
                                       <span className="text-[10px] text-green-600 mb-1">
                                          ▲ {acc.change}%
                                       </span>
                                     )}
                                   </div>
                                   <div className="text-[10px] text-slate-600 mt-1 leading-tight">{acc.description}</div>
                                 </div>
                               ))}
                           </div>
                        </div>
                     )}
                   </div>
                 </motion.div>
               )}
             </AnimatePresence>
           </motion.div>
        </div>
      </div>
    </div>
  );
};

const ExperienceTimeline: React.FC = () => {
  const { content } = useLanguage();
  const ui = content.ui.timeline;

  return (
    <section className="relative w-full px-6 md:px-12 lg:px-24 py-20 bg-[#050a14]">
      {/* Background decoration */}
      <div className="absolute inset-0 bg-grid opacity-20 pointer-events-none"></div>

      <div className="text-center mb-20 relative z-10">
        <h2 className="text-4xl font-bold text-white mb-4 font-mono flex items-center justify-center gap-2">
           <span className="text-sre-primary">./</span>{ui.title}
        </h2>
        <div className="flex justify-center items-center gap-4 text-xs font-mono text-slate-500">
           <span className="flex items-center gap-1"><GitCommit size={12}/> {ui.positions}</span>
           <span className="h-3 w-[1px] bg-slate-800"></span>
           <span className="flex items-center gap-1"><Calendar size={12}/> {ui.exp}</span>
           <span className="h-3 w-[1px] bg-slate-800"></span>
           <span className="flex items-center gap-1 text-green-500">{ui.role}</span>
        </div>
      </div>

      <div className="relative max-w-5xl mx-auto">
         {/* Center Vertical Line (Trace Backbone) */}
         <div className="absolute left-[39px] md:left-1/2 top-0 bottom-0 w-[2px] bg-slate-800 transform md:-translate-x-1/2" />
         
         {content.experience.map((job, index) => (
           <JobNode key={index} job={job} index={index} isLast={index === content.experience.length - 1} labels={ui} />
         ))}

         {/* Start Node */}
         <div className="absolute left-[30px] md:left-1/2 bottom-[-10px] transform -translate-x-1/2 w-5 h-5 bg-slate-800 border-2 border-slate-600 rounded-full z-20" />
      </div>
    </section>
  );
};

export default ExperienceTimeline;