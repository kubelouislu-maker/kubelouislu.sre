import React from 'react';
import { Flame, ShieldCheck, ArrowRight, User, Users, Wrench, Server, Database, Box, Layers, Briefcase, Activity, LineChart } from 'lucide-react';
import { useLanguage } from '../LanguageContext';

const TEXT = {
  en: {
    sreTrap: {
      oldWay: "OLD WAY",
      firefighting: "The Firefighting Loop",
      cycleOld: ["Alert", "Fix", "Repeat"],
      descOld: "SRE is trapped in \"Toil\". Energy is consumed by reaction, leaving zero bandwidth for design.",
      newWay: "NEW WAY (BRE)",
      prevention: "Architectural Prevention",
      cycleNew: ["Design", "Guardrails", "Safety"],
      descNew: "SRE invests time in \"Productizing Stability\". The system heals itself or prevents errors entirely."
    },
    onePlusN: {
      core: "\"1\" Core SRE",
      coreRole: "Product Manager of Stability",
      deliver: "DELIVERS TOOLS & STANDARDS",
      tools: ["Diagnosis Tools", "SOP Platforms", "Risk Defense"],
      partners: "\"N\" Partners",
      partnersRole: "Users of Stability Products"
    },
    lastMile: {
      infra: "Generic Infra",
      infraSub: "K8s, Cloud, Prom",
      tooling: "The Last Mile Tooling",
      toolingDesc: "Context-aware tools bridging infra data to business logic",
      business: "Business Logic",
      businessSub: "Orders, Payments, Users"
    },
    breDef: {
      center: "BRE",
      role1: "Business Architect",
      desc1: "Understands logical architecture & topology.",
      role2: "Availability Engineer",
      desc2: "Owns SLOs, Capacity & Disaster Recovery.",
      role3: "Ops Analyst",
      desc3: "Data-driven optimization via logs & metrics."
    }
  },
  zh: {
    sreTrap: {
      oldWay: "传统 SRE 困境",
      firefighting: "事后救火与响应",
      cycleOld: ["告警", "应急", "重复"],
      descOld: "聚焦于故障后的应急处置，缺乏认知盈余，难以从设计源头提高系统韧性。",
      newWay: "BRE 转型目标",
      prevention: "事前主动防御",
      cycleNew: ["需求", "设计", "预防"],
      descNew: "SRE 深入业务全流程，致力于“稳定性产品化”，让故障可预测、可预防。"
    },
    onePlusN: {
      core: "\"1\" 核心 SRE/BRE",
      coreRole: "稳定性产品经理",
      deliver: "交付产品化工具与 SOP",
      tools: ["智能诊断", "应急平台", "监控运营"],
      partners: "\"N\" 合作伙伴",
      partnersRole: "稳定性产品的运营者"
    },
    lastMile: {
      infra: "通用基础设施",
      infraSub: "公有云, 容器, 中台",
      tooling: "“最后一公里”工具",
      toolingDesc: "连接通用基建与业务逻辑的桥梁 (如: 日志分析, 根因定位)",
      business: "业务逻辑",
      businessSub: "交易, 支付, 核心流程"
    },
    breDef: {
      center: "BRE 核心能力",
      role1: "业务架构师思维",
      desc1: "熟悉业务逻辑架构与部署拓扑，快速识别业务异常。",
      role2: "可用性工程师思维",
      desc2: "制定业务级 SLO/SLA、容量规划、容灾策略及演练。",
      role3: "运营分析师思维",
      desc3: "通过数据分析（监控/日志/反馈）推动系统持续改进。"
    }
  }
};

// Simplified helper to avoid TSX generic parsing issues
function getLocalizedText(lang: string, key: string) {
  const safeLang = (lang === 'en' || lang === 'zh') ? (lang as 'en' | 'zh') : 'zh';
  // Use explicit casting to avoid type complexity in TSX
  return (TEXT[safeLang] as any)[key];
}

export const SreTrapDiagram = () => {
  const { language } = useLanguage();
  const t = getLocalizedText(language, 'sreTrap');

  if (!t) return null;

  return (
    <div className="bg-[#0b1221] border border-slate-800 rounded-lg p-6 my-8">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {/* The Trap */}
        <div className="relative border border-red-900/30 bg-red-950/10 rounded-lg p-4 flex flex-col items-center text-center">
          <div className="absolute top-0 left-0 bg-red-500 text-black text-[10px] font-bold px-2 py-0.5 rounded-br font-mono">{t.oldWay}</div>
          <div className="w-12 h-12 bg-red-500/20 rounded-full flex items-center justify-center text-red-500 mb-4 mt-2">
            <Flame size={24} />
          </div>
          <h4 className="text-red-400 font-bold mb-2">{t.firefighting}</h4>
          <div className="flex items-center gap-2 text-xs text-slate-400 mb-4">
            <span>{t.cycleOld[0]}</span> <ArrowRight size={12} /> <span>{t.cycleOld[1]}</span> <ArrowRight size={12} /> <span>{t.cycleOld[2]}</span>
          </div>
          <div className="absolute inset-0 border-2 border-red-500/10 rounded-lg animate-pulse pointer-events-none"></div>
          <p className="text-xs text-slate-500 leading-tight">
            {t.descOld}
          </p>
        </div>

        {/* The Goal */}
        <div className="relative border border-green-900/30 bg-green-950/10 rounded-lg p-4 flex flex-col items-center text-center">
          <div className="absolute top-0 left-0 bg-green-500 text-black text-[10px] font-bold px-2 py-0.5 rounded-br font-mono">{t.newWay}</div>
          <div className="w-12 h-12 bg-green-500/20 rounded-full flex items-center justify-center text-green-500 mb-4 mt-2">
            <ShieldCheck size={24} />
          </div>
          <h4 className="text-green-400 font-bold mb-2">{t.prevention}</h4>
          <div className="flex items-center gap-2 text-xs text-slate-400 mb-4">
            <span>{t.cycleNew[0]}</span> <ArrowRight size={12} /> <span>{t.cycleNew[1]}</span> <ArrowRight size={12} /> <span>{t.cycleNew[2]}</span>
          </div>
          <p className="text-xs text-slate-500 leading-tight">
            {t.descNew}
          </p>
        </div>
      </div>
    </div>
  );
};

export const OnePlusNDiagram = () => {
  const { language } = useLanguage();
  const t = getLocalizedText(language, 'onePlusN');

  if (!t) return null;

  return (
    <div className="bg-[#0b1221] border border-slate-800 rounded-lg p-8 my-8 flex flex-col items-center relative overflow-hidden">
      <div className="absolute inset-0 bg-grid opacity-10 pointer-events-none"></div>
      
      {/* 1: SRE Elite */}
      <div className="relative z-10 flex flex-col items-center mb-8">
        <div className="w-16 h-16 bg-sre-primary/20 border-2 border-sre-primary rounded-xl flex items-center justify-center text-sre-primary shadow-[0_0_20px_rgba(14,165,233,0.3)]">
          <User size={32} />
        </div>
        <div className="mt-2 text-center">
          <div className="text-xl font-bold text-white">{t.core}</div>
          <div className="text-xs text-sre-primary font-mono uppercase">{t.coreRole}</div>
        </div>
      </div>

      {/* The Product Layer (Arrow Down) */}
      <div className="relative z-10 w-full max-w-md flex flex-col items-center mb-8">
        <div className="h-8 w-[2px] bg-gradient-to-b from-sre-primary to-slate-700"></div>
        <div className="w-full bg-slate-900 border border-slate-700 rounded p-4 text-center relative">
          <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-slate-800 text-slate-300 text-[10px] px-2 py-0.5 rounded border border-slate-700 whitespace-nowrap">
            {t.deliver}
          </div>
          <div className="flex justify-center gap-4 text-slate-400">
            <div className="flex flex-col items-center">
                <Wrench size={16} className="mb-1 text-yellow-500" />
                <span className="text-[10px]">{t.tools[0]}</span>
            </div>
            <div className="flex flex-col items-center">
                <Layers size={16} className="mb-1 text-purple-500" />
                <span className="text-[10px]">{t.tools[1]}</span>
            </div>
            <div className="flex flex-col items-center">
                <ShieldCheck size={16} className="mb-1 text-green-500" />
                <span className="text-[10px]">{t.tools[2]}</span>
            </div>
          </div>
        </div>
        <div className="h-8 w-[2px] bg-gradient-to-b from-slate-700 to-slate-500"></div>
      </div>

      {/* N: Outsourcing */}
      <div className="relative z-10 flex flex-col items-center">
        <div className="flex gap-4">
          {[1, 2, 3].map(i => (
            <div key={i} className="w-12 h-12 bg-slate-800/50 border border-slate-600 rounded-full flex items-center justify-center text-slate-400">
              <Users size={20} />
            </div>
          ))}
        </div>
        <div className="mt-3 text-center">
          <div className="text-lg font-bold text-slate-300">{t.partners}</div>
          <div className="text-xs text-slate-500 font-mono uppercase">{t.partnersRole}</div>
        </div>
      </div>
    </div>
  );
};

export const LastMileDiagram = () => {
  const { language } = useLanguage();
  const t = getLocalizedText(language, 'lastMile');

  if (!t) return null;

  return (
    <div className="bg-[#0b1221] border border-slate-800 rounded-lg p-6 my-8 overflow-x-auto">
      <div className="min-w-[500px] flex items-center justify-between gap-4">
        
        {/* Infra */}
        <div className="w-1/4 p-4 bg-slate-900 border border-slate-700 rounded-lg text-center opacity-60">
          <Server size={24} className="mx-auto text-blue-500 mb-2" />
          <div className="text-xs font-bold text-slate-400">{t.infra}</div>
          <div className="text-[10px] text-slate-600">{t.infraSub}</div>
        </div>

        {/* The Gap */}
        <div className="flex-grow flex flex-col items-center relative px-2">
          <div className="w-full border-t-2 border-dashed border-slate-700 absolute top-1/2"></div>
          
          {/* The Solution */}
          <div className="relative z-10 bg-sre-primary/10 border border-sre-primary text-sre-primary p-3 rounded shadow-[0_0_15px_rgba(14,165,233,0.2)]">
              <div className="flex items-center gap-2 font-bold text-xs">
                  <Box size={14} /> {t.tooling}
              </div>
              <div className="text-[10px] mt-1 text-slate-300 max-w-[150px] leading-tight text-center">
                  {t.toolingDesc}
              </div>
          </div>
        </div>

        {/* Business */}
        <div className="w-1/4 p-4 bg-slate-900 border border-slate-700 rounded-lg text-center">
          <Database size={24} className="mx-auto text-yellow-500 mb-2" />
          <div className="text-xs font-bold text-white">{t.business}</div>
          <div className="text-[10px] text-slate-400">{t.businessSub}</div>
        </div>
      </div>
    </div>
  );
};

export const BreDefinitionDiagram = () => {
    const { language } = useLanguage();
    const t = getLocalizedText(language, 'breDef');
  
    if (!t) return null;
  
    const Card = ({ title, desc, icon, color }: any) => (
      <div className={`bg-slate-900/50 border border-${color}-500/30 p-4 rounded-lg flex flex-col items-center text-center relative overflow-hidden group hover:bg-slate-900/80 transition-colors`}>
        <div className={`absolute top-0 w-full h-1 bg-${color}-500/50`}></div>
        <div className={`w-10 h-10 rounded-full bg-${color}-500/20 text-${color}-400 flex items-center justify-center mb-3 group-hover:scale-110 transition-transform`}>
          {icon}
        </div>
        <h4 className="text-sm font-bold text-slate-200 mb-2">{title}</h4>
        <p className="text-[10px] text-slate-400 leading-tight">{desc}</p>
      </div>
    );
  
    return (
      <div className="bg-[#0b1221] border border-slate-800 rounded-lg p-6 my-8 relative">
         <div className="text-center mb-6">
            <h3 className="text-xl font-bold text-white tracking-widest">{t.center}</h3>
         </div>
         <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
             <Card 
               title={t.role1} 
               desc={t.desc1} 
               icon={<Briefcase size={18} />} 
               color="blue" 
             />
             <Card 
               title={t.role2} 
               desc={t.desc2} 
               icon={<Activity size={18} />} 
               color="green" 
             />
             <Card 
               title={t.role3} 
               desc={t.desc3} 
               icon={<LineChart size={18} />} 
               color="purple" 
             />
         </div>
         {/* Connecting Lines (Desktop only) */}
         <div className="hidden md:block absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-[2px] bg-gradient-to-r from-transparent via-slate-700 to-transparent -z-0"></div>
      </div>
    );
  };