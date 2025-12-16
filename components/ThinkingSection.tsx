import React, { useState, useMemo } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Brain, Calendar, Clock, ArrowRight, Hash, Filter, X, Star } from 'lucide-react';
import { useLanguage } from '../LanguageContext';
import { Article } from '../types';

interface ThinkingSectionProps {
   onArticleSelect: (article: Article) => void;
}

const ThinkingSection: React.FC<ThinkingSectionProps> = ({ onArticleSelect }) => {
  const { content } = useLanguage();
  const [activeTag, setActiveTag] = useState<string | null>(null);

  // Extract unique tags from all articles
  const allTags = useMemo(() => {
    const tags = new Set<string>();
    content.thinking.forEach(article => {
      article.tags.forEach(tag => tags.add(tag));
    });
    return Array.from(tags);
  }, [content.thinking]);

  // Filter articles based on active tag
  const filteredArticles = useMemo(() => {
    if (!activeTag) return content.thinking;
    return content.thinking.filter(article => article.tags.includes(activeTag));
  }, [content.thinking, activeTag]);
  
  return (
    <section className="w-full px-6 md:px-12 lg:px-24 py-20 bg-[#050a14] min-h-screen">
       {/* Header */}
       <div className="mb-12 border-l-4 border-sre-primary pl-6 flex flex-col md:flex-row md:justify-between md:items-end gap-6">
          <div>
            <h2 className="text-3xl font-bold text-white mb-2 flex items-center gap-3">
               <Brain className="text-sre-primary" />
               {content.ui.nav.thinking}
            </h2>
            <p className="text-slate-400 font-mono text-sm">
               {content.ui.thinking.subtitle}
            </p>
          </div>

          {/* Tag Filter Bar */}
          <div className="flex flex-wrap gap-2 max-w-md">
             <div className="w-full text-xs font-mono text-slate-500 mb-1 flex items-center gap-2">
                <Filter size={10} /> FILTER_BY_TAG:
             </div>
             
             {/* All / Reset Button */}
             <button
               onClick={() => setActiveTag(null)}
               className={`text-xs px-3 py-1 rounded border transition-all font-mono flex items-center gap-1
                  ${activeTag === null 
                    ? 'bg-sre-primary text-black border-sre-primary font-bold' 
                    : 'bg-slate-900 text-slate-400 border-slate-700 hover:border-slate-500 hover:text-white'
                  }`}
             >
               ALL
             </button>

             {/* Dynamic Tags */}
             {allTags.map(tag => (
               <button
                 key={tag}
                 onClick={() => setActiveTag(activeTag === tag ? null : tag)}
                 className={`text-xs px-3 py-1 rounded border transition-all font-mono flex items-center gap-1
                    ${activeTag === tag 
                      ? 'bg-sre-primary text-black border-sre-primary font-bold shadow-[0_0_10px_rgba(14,165,233,0.3)]' 
                      : 'bg-slate-900 text-slate-400 border-slate-700 hover:border-sre-primary/50 hover:text-white'
                    }`}
               >
                 <Hash size={10} />
                 {tag}
               </button>
             ))}
          </div>
       </div>

       <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3 min-h-[400px] content-start">
          <AnimatePresence mode="popLayout">
            {filteredArticles.length > 0 ? (
                filteredArticles.map((article: Article) => {
                    // Check if this is the featured pinned article (ID '0')
                    const isFeatured = article.id === '0';

                    return (
                        <motion.div
                        layout
                        key={article.id}
                        onClick={() => onArticleSelect(article)}
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 1, scale: 1 }}
                        exit={{ opacity: 0, scale: 0.9 }}
                        transition={{ duration: 0.3 }}
                        className={`
                            border rounded-lg p-6 transition-all group hover:shadow-[0_0_20px_rgba(14,165,233,0.1)] flex flex-col relative overflow-hidden cursor-pointer h-full
                            ${isFeatured 
                                ? 'col-span-1 md:col-span-2 lg:col-span-3 bg-gradient-to-br from-[#0b1221] to-[#11192e] border-sre-primary/40 hover:border-sre-primary' 
                                : 'bg-[#0b1221] border-slate-800 hover:border-sre-primary/50'
                            }
                        `}
                        >
                            {/* Decorative glow / Badge for Featured */}
                            {isFeatured ? (
                                <>
                                    <div className="absolute top-0 right-0 w-32 h-32 bg-sre-primary/10 rounded-bl-full -mr-16 -mt-16 group-hover:bg-sre-primary/20 transition-colors pointer-events-none blur-xl"></div>
                                    <div className="absolute top-4 right-4 flex items-center gap-1 text-xs font-bold text-sre-warning bg-sre-warning/10 px-2 py-1 rounded border border-sre-warning/20">
                                        <Star size={12} fill="currentColor" /> FEATURED_THOUGHT
                                    </div>
                                </>
                            ) : (
                                <div className="absolute top-0 right-0 w-24 h-24 bg-sre-primary/5 rounded-bl-full -mr-12 -mt-12 group-hover:bg-sre-primary/10 transition-colors pointer-events-none"></div>
                            )}

                            {/* Meta */}
                            <div className="flex justify-between items-center text-xs font-mono text-slate-500 mb-4 relative z-10">
                            <div className="flex items-center gap-4">
                                <div className="flex items-center gap-2">
                                    <Calendar size={12} />
                                    {article.date}
                                </div>
                                <div className="flex items-center gap-2">
                                    <Clock size={12} />
                                    {article.readTime}
                                </div>
                            </div>
                            </div>

                            {/* Title */}
                            <h3 className={`font-bold text-slate-200 mb-4 group-hover:text-sre-primary transition-colors relative z-10 ${isFeatured ? 'text-2xl md:text-4xl max-w-4xl leading-tight' : 'text-xl'}`}>
                            {article.title}
                            </h3>

                            {/* Tags */}
                            <div className="flex flex-wrap gap-2 mb-4 relative z-10">
                            {article.tags.map((tag: string, i: number) => (
                                <span 
                                    key={i} 
                                    className={`text-[10px] px-2 py-1 rounded border flex items-center gap-1 transition-colors
                                        ${activeTag === tag 
                                            ? 'bg-sre-primary/20 text-sre-primary border-sre-primary/50' 
                                            : 'bg-slate-900 text-slate-400 border-slate-800'
                                        }`}
                                >
                                    <Hash size={10} /> {tag}
                                </span>
                            ))}
                            </div>

                            {/* Summary */}
                            <p className={`text-slate-400 leading-relaxed mb-6 flex-grow relative z-10 border-l border-slate-800 pl-3 ${isFeatured ? 'text-base md:text-lg max-w-4xl' : 'text-sm'}`}>
                            {article.summary}
                            </p>

                            {/* Link */}
                            <div className="mt-auto pt-4 border-t border-slate-800/50 flex justify-end relative z-10">
                            <span className="text-xs font-mono text-sre-primary flex items-center gap-1 opacity-50 group-hover:opacity-100 transition-opacity">
                                READ_FULL_ENTRY <ArrowRight size={12} />
                            </span>
                            </div>
                        </motion.div>
                    );
                })
            ) : (
                <motion.div 
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    className="col-span-full flex flex-col items-center justify-center p-12 text-slate-500 border border-slate-800 border-dashed rounded-lg"
                >
                    <Filter size={48} className="mb-4 opacity-20" />
                    <p className="font-mono">NO_ENTRIES_FOUND_FOR_TAG: {activeTag}</p>
                    <button 
                        onClick={() => setActiveTag(null)}
                        className="mt-4 text-sre-primary hover:underline text-sm flex items-center gap-2"
                    >
                        <X size={14} /> CLEAR_FILTER
                    </button>
                </motion.div>
            )}
          </AnimatePresence>
       </div>
    </section>
  )
}
export default ThinkingSection;