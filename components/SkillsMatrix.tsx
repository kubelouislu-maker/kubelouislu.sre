import React from 'react';
import { useLanguage } from '../LanguageContext';
import { motion } from 'framer-motion';
import { Cpu, Server, Database, Code } from 'lucide-react';

const SkillBar: React.FC<{ name: string; percentage: number; delay: number }> = ({ name, percentage, delay }) => {
  return (
    <div className="mb-4">
      <div className="flex justify-between text-xs font-mono mb-1 text-slate-400">
        <span>{name}</span>
        <span className="text-sre-primary">{percentage}%</span>
      </div>
      <div className="h-2 w-full bg-slate-800 rounded-full overflow-hidden relative">
        <motion.div 
          initial={{ width: 0 }}
          whileInView={{ width: `${percentage}%` }}
          viewport={{ once: true }}
          transition={{ duration: 1.5, delay: delay, ease: "easeOut" }}
          className="h-full bg-gradient-to-r from-sre-primary to-blue-600 relative"
        >
          {/* Scanline shine effect inside the bar */}
          <div className="absolute top-0 right-0 bottom-0 w-2 bg-white/50 blur-[2px]" />
        </motion.div>
        
        {/* Background grid lines for the bar */}
        <div className="absolute inset-0 w-full h-full flex justify-between px-1">
            {[...Array(10)].map((_, i) => (
                <div key={i} className="w-[1px] h-full bg-slate-900/50"></div>
            ))}
        </div>
      </div>
    </div>
  );
};

const SkillsMatrix: React.FC = () => {
  const { content } = useLanguage();
  const ui = content.ui.skills;

  // Mapping categories to icons
  const getIcon = (cat: string) => {
    if (cat.includes("Reliability") || cat.includes("稳定性")) return <Cpu size={18} />;
    if (cat.includes("Cloud") || cat.includes("云原生")) return <Server size={18} />;
    if (cat.includes("Observability") || cat.includes("可观测性")) return <Database size={18} />;
    return <Code size={18} />;
  };

  return (
    <section className="w-full px-6 md:px-12 lg:px-24 py-20 bg-[#050a14] border-t border-slate-800">
      <div className="mb-12 border-l-4 border-purple-500 pl-6">
        <h2 className="text-3xl font-bold text-white mb-2 flex items-center gap-3">
          {ui.title}
        </h2>
        <p className="text-slate-400 font-mono text-sm">{ui.subtitle}</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {content.skills.map((skillGroup, idx) => (
          <motion.div 
            key={idx}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: idx * 0.1 }}
            className="bg-[#0b1221] p-6 rounded-sm border border-slate-800 hover:border-slate-600 transition-colors shadow-lg group relative overflow-hidden"
          >
            {/* Hover Glow Background */}
            <div className="absolute inset-0 bg-gradient-to-br from-purple-500/5 to-blue-500/5 opacity-0 group-hover:opacity-100 transition-opacity"></div>
            
            <div className="flex items-center gap-3 mb-6 pb-2 border-b border-slate-800 group-hover:border-slate-600 transition-colors">
              <span className="text-sre-primary p-2 bg-slate-900 rounded">{getIcon(skillGroup.category)}</span>
              <h3 className="text-sm font-bold text-white uppercase tracking-wider">
                {skillGroup.category}
              </h3>
            </div>
            
            <div>
              {skillGroup.items.map((skill, sIdx) => {
                // Mock percentage for visual flair - normally this would come from data
                const randomPct = 85 + (skill.length * 2) % 15; 
                return (
                  <SkillBar 
                    key={sIdx} 
                    name={skill} 
                    percentage={randomPct} 
                    delay={idx * 0.1 + sIdx * 0.1} 
                  />
                );
              })}
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default SkillsMatrix;