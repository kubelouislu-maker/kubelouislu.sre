import React from 'react';
import { motion } from 'framer-motion';
import { ArrowLeft, Calendar, Clock, Hash, Brain, ExternalLink } from 'lucide-react';
import { Article, ArticleContent } from '../types';
import { useLanguage } from '../LanguageContext';
import { SreTrapDiagram, OnePlusNDiagram, LastMileDiagram, BreDefinitionDiagram } from './ArticleDiagrams';

interface ArticleReaderProps {
  article: Article;
  onBack: () => void;
}

const ArticleReader: React.FC<ArticleReaderProps> = ({ article, onBack }) => {
  const { content } = useLanguage();

  // Helper: Parse text for Links AND Bold keywords
  // Order: 1. Split by Links -> 2. Split each part by Bold
  const renderRichText = (text: string) => {
    const urlRegex = /(https?:\/\/[^\s]+)/g;
    const parts = text.split(urlRegex);

    return parts.map((part, i) => {
        if (part.match(urlRegex)) {
            // It's a link
            return (
                <a key={i} href={part} target="_blank" rel="noopener noreferrer" className="text-sre-primary hover:underline inline-flex items-center gap-1">
                    {part.replace(/(^\w+:|^)\/\//, '').substring(0, 20)}... <ExternalLink size={10} />
                </a>
            );
        } else {
            // It's normal text, now check for **bold**
            const boldRegex = /(\*\*.*?\*\*)/g;
            const boldParts = part.split(boldRegex);
            
            return (
                <React.Fragment key={i}>
                    {boldParts.map((subPart, j) => {
                        if (subPart.startsWith('**') && subPart.endsWith('**')) {
                            return (
                                <strong key={j} className="text-sre-primary font-bold">
                                    {subPart.slice(2, -2)}
                                </strong>
                            );
                        }
                        return subPart;
                    })}
                </React.Fragment>
            );
        }
    });
  };

  const renderContent = (block: ArticleContent, idx: number) => {
    if (typeof block === 'string') {
        // H2 Heading Detection
        if (block.startsWith('## ')) {
            return (
                <h2 key={idx} className="text-2xl md:text-3xl font-bold text-white mt-12 mb-6 border-l-4 border-sre-primary pl-6 py-1">
                    {block.replace('## ', '')}
                </h2>
            );
        }

        // H3/List Item Detection (Simple heuristic)
        if (block.match(/^\d+\.\s/) || block.startsWith('• ')) {
             return (
                <div key={idx} className="flex gap-4 mb-6 pl-2">
                    <span className="text-sre-primary font-bold font-mono mt-1 shrink-0">
                        {block.split(' ')[0]}
                    </span>
                    <p className="text-slate-300 leading-8 font-sans text-lg">
                        {renderRichText(block.substring(block.indexOf(' ') + 1))}
                    </p>
                </div>
             );
        }

        // Standard Paragraph
        return (
            <p key={idx} className="text-slate-300 leading-8 mb-6 font-sans text-lg text-justify">
              {renderRichText(block)}
            </p>
        );
    }

    // It's a diagram object
    let DiagramComponent = null;
    switch (block.id) {
        case 'sre-trap': DiagramComponent = SreTrapDiagram; break;
        case 'one-plus-n': DiagramComponent = OnePlusNDiagram; break;
        case 'last-mile': DiagramComponent = LastMileDiagram; break;
        case 'bre-definition': DiagramComponent = BreDefinitionDiagram; break;
        default: return null;
    }

    return (
        <div key={idx} className="my-12 bg-slate-900/30 p-2 md:p-6 rounded-xl border border-slate-800/50">
            <DiagramComponent />
            {block.caption && (
                <div className="text-center text-sm font-mono text-sre-primary/70 mt-4 flex items-center justify-center gap-2">
                    <span className="w-10 h-[1px] bg-sre-primary/30"></span>
                    <span>FIG: {block.caption}</span>
                    <span className="w-10 h-[1px] bg-sre-primary/30"></span>
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
      <div className="max-w-4xl mx-auto">
        {/* Back Button */}
        <button 
          onClick={onBack}
          className="flex items-center gap-2 text-slate-400 hover:text-sre-primary transition-colors mb-8 font-mono text-xs uppercase tracking-wider group bg-slate-900/50 px-4 py-2 rounded-full border border-slate-800 hover:border-sre-primary/50"
        >
          <ArrowLeft size={14} className="group-hover:-translate-x-1 transition-transform" />
          {content.ui.thinking.back}
        </button>

        {/* Article Header */}
        <header className="mb-12 border-b border-slate-800 pb-8">
          <div className="flex gap-3 mb-6 flex-wrap">
            {article.tags.map((tag, i) => (
              <span key={i} className="text-[10px] bg-sre-primary/10 text-sre-primary px-3 py-1 rounded-full border border-sre-primary/20 font-mono tracking-wide">
                 #{tag}
              </span>
            ))}
          </div>
          
          <h1 className="text-3xl md:text-5xl font-bold text-white mb-8 leading-tight tracking-tight">
            {article.title}
          </h1>

          <div className="flex flex-wrap items-center gap-6 text-sm font-mono text-slate-500 bg-slate-900/30 p-4 rounded-lg border border-slate-800/50">
             <div className="flex items-center gap-2">
                <Calendar size={14} className="text-sre-primary" />
                {article.date}
             </div>
             <div className="w-[1px] h-4 bg-slate-700"></div>
             <div className="flex items-center gap-2">
                <Clock size={14} className="text-sre-primary" />
                {article.readTime}
             </div>
             <div className="w-[1px] h-4 bg-slate-700"></div>
             <div className="flex items-center gap-2">
                <Brain size={14} className="text-sre-primary" />
                ID: {article.id}
             </div>
          </div>
        </header>

        {/* Article Body */}
        <article className="prose prose-invert prose-lg max-w-none prose-headings:font-bold prose-a:text-sre-primary">
          {article.content.map((block, idx) => renderContent(block, idx))}
        </article>
        
        {/* Footer */}
        <div className="mt-20 pt-8 border-t border-slate-800 flex justify-between items-center opacity-50">
           <div className="h-1 w-20 bg-sre-primary/50 rounded-full"></div>
           <span className="font-mono text-xs text-slate-600">// END OF FILE // KubeLouisLu.SRE</span>
        </div>
      </div>
    </motion.section>
  );
};

export default ArticleReader;