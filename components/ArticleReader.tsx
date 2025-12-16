import React from 'react';
import { motion } from 'framer-motion';
import { ArrowLeft, Calendar, Clock, Hash, Brain } from 'lucide-react';
import { Article, ArticleContent } from '../types';
import { useLanguage } from '../LanguageContext';
import { SreTrapDiagram, OnePlusNDiagram, LastMileDiagram } from './ArticleDiagrams';

interface ArticleReaderProps {
  article: Article;
  onBack: () => void;
}

const ArticleReader: React.FC<ArticleReaderProps> = ({ article, onBack }) => {
  const { content } = useLanguage();

  const renderContent = (block: ArticleContent, idx: number) => {
    if (typeof block === 'string') {
        return (
            <p key={idx} className="text-slate-300 leading-8 mb-6 font-sans text-lg">
              {block}
            </p>
        );
    }

    // It's a diagram object
    let DiagramComponent = null;
    switch (block.id) {
        case 'sre-trap': DiagramComponent = SreTrapDiagram; break;
        case 'one-plus-n': DiagramComponent = OnePlusNDiagram; break;
        case 'last-mile': DiagramComponent = LastMileDiagram; break;
        default: return null;
    }

    return (
        <div key={idx} className="my-10">
            <DiagramComponent />
            {block.caption && (
                <div className="text-center text-xs font-mono text-slate-500 mt-2 italic">
                    Figure: {block.caption}
                </div>
            )}
        </div>
    );
  };

  return (
    <motion.section 
      initial={{ opacity: 0, x: 20 }}
      animate={{ opacity: 1, x: 0 }}
      exit={{ opacity: 0, x: -20 }}
      className="w-full px-6 md:px-12 lg:px-24 py-20 bg-[#050a14] min-h-screen"
    >
      <div className="max-w-3xl mx-auto">
        {/* Back Button */}
        <button 
          onClick={onBack}
          className="flex items-center gap-2 text-slate-400 hover:text-sre-primary transition-colors mb-8 font-mono text-xs uppercase tracking-wider group"
        >
          <ArrowLeft size={14} className="group-hover:-translate-x-1 transition-transform" />
          {content.ui.thinking.back}
        </button>

        {/* Article Header */}
        <header className="mb-12 border-b border-slate-800 pb-8">
          <div className="flex gap-3 mb-6">
            {article.tags.map((tag, i) => (
              <span key={i} className="text-[10px] bg-sre-primary/10 text-sre-primary px-2 py-1 rounded border border-sre-primary/20 font-mono">
                 #{tag}
              </span>
            ))}
          </div>
          
          <h1 className="text-3xl md:text-5xl font-bold text-white mb-6 leading-tight">
            {article.title}
          </h1>

          <div className="flex items-center gap-6 text-sm font-mono text-slate-500">
             <div className="flex items-center gap-2">
                <Calendar size={14} />
                {article.date}
             </div>
             <div className="flex items-center gap-2">
                <Clock size={14} />
                {article.readTime}
             </div>
             <div className="flex items-center gap-2">
                <Brain size={14} />
                ID: {article.id}
             </div>
          </div>
        </header>

        {/* Article Body */}
        <article className="prose prose-invert prose-lg max-w-none">
          {article.content.map((block, idx) => renderContent(block, idx))}
        </article>
        
        {/* Footer */}
        <div className="mt-16 pt-8 border-t border-slate-800 flex justify-between items-center">
           <div className="h-1 w-20 bg-sre-primary/50 rounded-full"></div>
           <span className="font-mono text-xs text-slate-600">// END OF FILE</span>
        </div>
      </div>
    </motion.section>
  );
};

export default ArticleReader;
