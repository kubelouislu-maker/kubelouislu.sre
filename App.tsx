import React, { useState } from 'react';
import Hero from './components/Hero';
import ImpactDashboard from './components/ImpactDashboard';
import ExperienceTimeline from './components/ExperienceTimeline';
import SkillsMatrix from './components/SkillsMatrix';
import ThinkingSection from './components/ThinkingSection';
import ArticleReader from './components/ArticleReader';
import GrowthTimeline from './components/GrowthTimeline';
import { LanguageProvider, useLanguage } from './LanguageContext';
import { GraduationCap, Github, Linkedin, Mail, Globe, Rocket } from 'lucide-react';
import { Article } from './types';

const MainApp: React.FC = () => {
  const { content, language, toggleLanguage } = useLanguage();
  const [activeTab, setActiveTab] = useState<'resume' | 'startups' | 'thinking' | 'growth'>('resume');
  const [selectedArticle, setSelectedArticle] = useState<Article | null>(null);

  // When changing tabs, clear selected article
  const handleTabChange = (tab: 'resume' | 'startups' | 'thinking' | 'growth') => {
    setActiveTab(tab);
    setSelectedArticle(null);
  };

  return (
    <main className="min-h-screen bg-[#050a14] text-slate-200 selection:bg-sre-primary selection:text-black font-sans relative overflow-x-hidden">
      
      {/* Top Monitoring Bar (Sticky) */}
      <nav className="fixed top-0 left-0 w-full z-50 bg-[#0b1221]/95 backdrop-blur-md border-b border-slate-800 h-14 flex justify-between items-center px-4 md:px-6 shadow-lg">
        
        {/* Brand */}
        <div className="flex items-center gap-2 md:gap-4">
          <div className="font-mono font-bold text-white tracking-tighter text-base md:text-lg flex items-center gap-2">
            <div className="w-6 h-6 bg-gradient-to-br from-sre-primary to-blue-600 rounded flex items-center justify-center text-xs text-black font-bold shrink-0">K</div>
            <span className="truncate max-w-[150px] md:max-w-none">KubeLouisLu<span className="text-sre-primary">.SRE</span></span>
          </div>
          
          {/* Divider */}
          <div className="h-6 w-[1px] bg-slate-700 hidden md:block"></div>

          {/* Breadcrumbs / Menu */}
          <div className="hidden lg:flex gap-6 text-xs font-medium text-slate-400">
             <button 
                onClick={() => handleTabChange('resume')}
                className={`hover:text-white cursor-pointer transition-colors flex items-center gap-2 ${activeTab === 'resume' ? 'text-sre-primary font-bold' : ''}`}
             >
                {content.ui.nav.resume}
             </button>
             <button 
                onClick={() => handleTabChange('startups')}
                className={`hover:text-white cursor-pointer transition-colors flex items-center gap-2 ${activeTab === 'startups' ? 'text-sre-primary font-bold' : ''}`}
             >
                {content.ui.nav.startups}
             </button>
             <button 
                onClick={() => handleTabChange('thinking')}
                className={`hover:text-white cursor-pointer transition-colors flex items-center gap-2 ${activeTab === 'thinking' ? 'text-sre-primary font-bold' : ''}`}
             >
                {content.ui.nav.thinking}
             </button>
             <button 
                onClick={() => handleTabChange('growth')}
                className={`hover:text-white cursor-pointer transition-colors flex items-center gap-2 ${activeTab === 'growth' ? 'text-sre-primary font-bold' : ''}`}
             >
                {content.ui.nav.growth}
             </button>
          </div>
        </div>

        {/* Right Tools */}
        <div className="flex items-center gap-2 md:gap-4">
          {/* Language Switcher */}
          <button 
            onClick={toggleLanguage}
            className="flex items-center gap-1 bg-slate-900 border border-slate-700 hover:border-sre-primary text-slate-300 hover:text-white px-2 py-1 rounded transition-all text-xs font-mono"
          >
            <Globe size={12} />
            {language === 'en' ? '中文' : 'EN'}
          </button>
        </div>
      </nav>

      <div className="pt-14">
        {activeTab === 'resume' && (
          <>
            <Hero />
            <ImpactDashboard />
            <ExperienceTimeline />
            <SkillsMatrix />
          </>
        )}

        {activeTab === 'startups' && (
           <section className="min-h-[80vh] flex flex-col items-center justify-center p-6 bg-[#050a14] relative overflow-hidden">
              <div className="absolute inset-0 bg-grid opacity-20 pointer-events-none"></div>
              
              <div className="z-10 text-center max-w-lg p-10 border border-slate-800 bg-[#0b1221]/80 backdrop-blur rounded-lg shadow-2xl relative group">
                {/* Decorative Elements */}
                <div className="absolute -top-1 -left-1 w-3 h-3 border-t-2 border-l-2 border-sre-primary"></div>
                <div className="absolute -bottom-1 -right-1 w-3 h-3 border-b-2 border-r-2 border-sre-primary"></div>

                <div className="w-16 h-16 bg-sre-primary/10 text-sre-primary rounded-full flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-500">
                  <Rocket size={32} className="animate-pulse" />
                </div>
                
                <h2 className="text-2xl font-bold text-white mb-4 font-mono tracking-tight">{content.ui.nav.startups}</h2>
                <div className="w-12 h-1 bg-sre-primary/50 mx-auto mb-6 rounded-full"></div>
                
                <p className="text-slate-400 text-sm font-mono leading-relaxed">
                  {language === 'en' 
                    ? '// Module initializing. Stand by for launch sequence...' 
                    : '// 模块初始化中。请等待发射序列...'}
                </p>
                <div className="mt-8 flex justify-center gap-2">
                   <span className="w-2 h-2 bg-slate-600 rounded-full animate-bounce delay-75"></span>
                   <span className="w-2 h-2 bg-slate-600 rounded-full animate-bounce delay-150"></span>
                   <span className="w-2 h-2 bg-slate-600 rounded-full animate-bounce delay-300"></span>
                </div>
              </div>
           </section>
        )}

        {activeTab === 'thinking' && (
          selectedArticle ? (
            <ArticleReader article={selectedArticle} onBack={() => setSelectedArticle(null)} />
          ) : (
            <ThinkingSection onArticleSelect={setSelectedArticle} />
          )
        )}

        {activeTab === 'growth' && <GrowthTimeline />}
        
        {/* Education & Footer */}
        <section className="px-6 md:px-12 lg:px-24 py-16 bg-[#020617] border-t border-slate-800">
           <div className="max-w-4xl mx-auto">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
                  <div>
                    <h3 className="text-white font-bold text-xl mb-4 flex items-center gap-2">
                        <GraduationCap className="text-sre-primary" /> {content.ui.footer.education}
                    </h3>
                    <div className="border-l-2 border-slate-800 pl-4">
                        <h4 className="text-slate-200 font-bold">{content.education.school}</h4>
                        <p className="text-slate-400 text-sm">{content.education.degree}</p>
                        <p className="text-slate-500 text-xs font-mono mt-1">{content.education.period}</p>
                    </div>
                  </div>

                  <div className="text-left md:text-right">
                    <h3 className="text-white font-bold text-xl mb-4">{content.ui.footer.connect}</h3>
                    <div className="flex gap-4 justify-start md:justify-end">
                        <a href={`mailto:${content.profile.contact.email}`} className="p-2 bg-slate-800 rounded hover:bg-sre-primary hover:text-black transition-all">
                            <Mail size={20} />
                        </a>
                        <div className="p-2 bg-slate-800 rounded opacity-50 cursor-not-allowed"><Github size={20} /></div>
                        <div className="p-2 bg-slate-800 rounded opacity-50 cursor-not-allowed"><Linkedin size={20} /></div>
                    </div>
                  </div>
              </div>

              <div className="mt-16 pt-8 border-t border-slate-900 text-center text-slate-600 text-xs font-mono">
                 <p>{content.ui.footer.status}</p>
                 <p className="mt-2">© {new Date().getFullYear()} {content.ui.footer.copyright}</p>
              </div>
           </div>
        </section>
      </div>
    </main>
  );
};

const App: React.FC = () => {
  return (
    <LanguageProvider>
      <MainApp />
    </LanguageProvider>
  );
};

export default App;