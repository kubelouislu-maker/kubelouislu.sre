import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Terminal, Shield, Cpu, Mail, Phone, Command, Activity, Server } from 'lucide-react';
import { useLanguage } from '../LanguageContext';

const TypewriterText: React.FC<{ text: string; delay?: number }> = ({ text, delay = 0 }) => {
  const [displayedText, setDisplayedText] = useState('');
  
  useEffect(() => {
    setDisplayedText(''); // Reset on text change
    const timeout = setTimeout(() => {
      let i = 0;
      const interval = setInterval(() => {
        setDisplayedText(text.substring(0, i + 1));
        i++;
        if (i === text.length) clearInterval(interval);
      }, 30); // Typing speed
      return () => clearInterval(interval);
    }, delay);
    return () => clearTimeout(timeout);
  }, [text, delay]);

  return <span className="font-mono text-sre-primary break-all">{displayedText}<span className="animate-pulse">_</span></span>;
};

const Hero: React.FC = () => {
  const { content } = useLanguage();
  const ui = content.ui.hero;

  return (
    <section className="relative w-full min-h-[75vh] flex flex-col justify-center items-start px-6 md:px-12 lg:px-24 py-20 overflow-hidden border-b border-slate-800 bg-[#050a14]">
      
      {/* Background Decor: Animated Grid */}
      <div className="absolute inset-0 bg-grid opacity-30 pointer-events-none animate-grid-flow"></div>
      
      {/* Glowing Orbs */}
      <div className="absolute top-[-10%] right-[-5%] w-[300px] md:w-[500px] h-[300px] md:h-[500px] bg-sre-primary/10 rounded-full blur-[80px] md:blur-[120px] pointer-events-none animate-pulse-slow" />
      <div className="absolute bottom-0 left-[-10%] w-[300px] md:w-[400px] h-[300px] md:h-[400px] bg-indigo-600/10 rounded-full blur-[80px] md:blur-[100px] pointer-events-none" />

      <div className="z-10 w-full max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        
        {/* Left: Text Content */}
        <motion.div 
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="w-full"
        >
          {/* Status Badge */}
          <div className="inline-flex items-center space-x-3 bg-slate-900/80 border border-sre-primary/30 px-3 py-2 md:px-4 md:py-2 rounded-sm mb-6 md:mb-8 backdrop-blur-md">
            <div className="relative flex h-3 w-3">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-sre-success opacity-75"></span>
              <span className="relative inline-flex rounded-full h-3 w-3 bg-sre-success"></span>
            </div>
            <span className="text-sre-success text-[10px] md:text-xs font-mono font-bold tracking-widest uppercase">
              {ui.status}
            </span>
          </div>

          <h1 className="text-4xl sm:text-5xl md:text-7xl font-extrabold text-white mb-6 tracking-tighter leading-tight glitch-wrapper break-words">
             <span className="glitch" data-text={content.profile.name}>{content.profile.name}</span>
          </h1>
          
          <div className="h-auto md:h-16 mb-6">
            <h2 className="text-sm sm:text-base md:text-2xl text-slate-400 font-mono flex items-center bg-slate-900/50 p-2 rounded border-l-4 border-sre-primary w-full md:w-fit overflow-hidden">
              <span className="text-sre-primary mr-2 select-none">$</span>
              <TypewriterText text={`${ui.rolePrefix} "${content.profile.role}"`} delay={500} />
            </h2>
          </div>

          <p className="text-slate-400 text-base md:text-lg leading-relaxed mb-10 max-w-xl border-l border-slate-700 pl-4 md:pl-6">
            {content.profile.summary}
          </p>

          <div className="flex flex-col sm:flex-row flex-wrap gap-4">
            <a href={`mailto:${content.profile.contact.email}`} className="flex items-center justify-center px-8 py-4 bg-sre-primary hover:bg-sky-400 text-black font-bold rounded-sm transition-all hover:shadow-[0_0_20px_rgba(56,189,248,0.5)] group w-full sm:w-auto">
              <Command className="w-5 h-5 mr-2" />
              <span>{ui.contact}</span>
            </a>
          </div>
        </motion.div>

        {/* Right: Abstract 3D/Monitor Visual (Hidden on mobile) */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, delay: 0.2 }}
          className="relative hidden lg:block"
        >
           {/* Monitor Frame */}
           <div className="relative z-10 bg-slate-900/80 border border-slate-700 rounded-lg p-1 backdrop-blur-xl shadow-2xl">
              <div className="bg-black/90 rounded border border-slate-800 p-4 font-mono text-xs text-green-500 min-h-[300px] opacity-90 relative overflow-hidden">
                 
                 {/* Fake Terminal Header */}
                 <div className="flex justify-between items-center mb-4 border-b border-slate-800 pb-2">
                    <div className="flex gap-2">
                      <div className="w-3 h-3 rounded-full bg-red-500/50"></div>
                      <div className="w-3 h-3 rounded-full bg-yellow-500/50"></div>
                      <div className="w-3 h-3 rounded-full bg-green-500/50"></div>
                    </div>
                    <div className="text-slate-500">{ui.terminal.title}</div>
                 </div>

                 {/* Terminal Content */}
                 <div className="space-y-2">
                    <p><span className="text-blue-400">➜</span> <span className="text-yellow-400">~</span> {ui.terminal.init}</p>
                    <p className="text-slate-400">{ui.terminal.loading}</p>
                    <p className="text-slate-400">{ui.terminal.connect}</p>
                    <p className="text-green-400">{ui.terminal.success}</p>
                    <p className="text-slate-400">{ui.terminal.fetch}</p>
                    <div className="grid grid-cols-2 gap-4 mt-4 text-slate-300">
                       <div className="border border-green-500/30 p-2 bg-green-500/10">
                          <div>{ui.terminal.uptime}</div>
                          <div className="text-xl font-bold text-green-400">99.999%</div>
                       </div>
                       <div className="border border-blue-500/30 p-2 bg-blue-500/10">
                          <div>{ui.terminal.incidents}</div>
                          <div className="text-xl font-bold text-blue-400">{ui.terminal.active}</div>
                       </div>
                    </div>
                    <p className="animate-pulse mt-4">_</p>
                 </div>

                 {/* Background Scan line in terminal */}
                 <div className="absolute top-0 left-0 w-full h-1 bg-green-500/20 shadow-[0_0_10px_rgba(34,197,94,0.5)] animate-[gridMove_3s_linear_infinite]" style={{animationDuration: '2s'}}></div>
              </div>
           </div>

           {/* Floating Elements behind monitor */}
           <div className="absolute -z-10 top-[-20px] right-[-20px] w-24 h-24 border-t-2 border-r-2 border-sre-primary opacity-50 rounded-tr-3xl"></div>
           <div className="absolute -z-10 bottom-[-20px] left-[-20px] w-24 h-24 border-b-2 border-l-2 border-sre-success opacity-50 rounded-bl-3xl"></div>
        </motion.div>
      </div>

      {/* Scrolling Ticker at Bottom */}
      <div className="absolute bottom-0 w-full bg-slate-900/80 border-t border-slate-800 py-2 overflow-hidden flex">
         <div className="animate-[gridMove_20s_linear_infinite] flex whitespace-nowrap" style={{ animationName: 'marquee', animationDuration: '30s' }}>
            {[...Array(5)].map((_, i) => (
               <div key={i} className="flex gap-12 mx-6 font-mono text-xs md:text-sm text-slate-400">
                  <span className="flex items-center"><Activity size={14} className="mr-2 text-green-500" /> {ui.ticker.status}</span>
                  <span className="flex items-center"><Server size={14} className="mr-2 text-blue-500" /> {ui.ticker.k8s}</span>
                  <span className="flex items-center"><Shield size={14} className="mr-2 text-yellow-500" /> {ui.ticker.security}</span>
                  <span className="flex items-center"><Cpu size={14} className="mr-2 text-purple-500" /> {ui.ticker.cpu}</span>
               </div>
            ))}
         </div>
      </div>
      
      <style>{`
        @keyframes marquee {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
      `}</style>
    </section>
  );
};

export default Hero;