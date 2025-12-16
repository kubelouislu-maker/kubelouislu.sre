import React from 'react';
import { Flame, RefreshCcw, ShieldCheck, ArrowRight, User, Users, Wrench, Server, Database, Box, Layers } from 'lucide-react';
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
    }
  },
  zh: {
    sreTrap: {
      oldWay: "传统模式",
      firefighting: "救火循环陷阱",
      cycleOld: ["告警", "修复", "重复"],
      descOld: "SRE 陷入“琐事”陷阱。精力被动消耗，无暇顾及架构设计。",
      newWay: "BRE 新模式",
      prevention: "架构防御闭环",
      cycleNew: ["设计", "护栏", "安全"],
      descNew: "SRE 致力于“稳定性产品化”。系统实现自愈或从源头规避故障。"
    },
    onePlusN: {
      core: "\"1\" 核心 SRE",
      coreRole: "稳定性产品经理",
      deliver: "交付工具与标准",
      tools: ["一键诊断", "SOP 平台", "风险防御"],
      partners: "\"N\" 合作伙伴",
      partnersRole: "稳定性产品的用户"
    },
    lastMile: {
      infra: "通用基础设施",
      infraSub: "K8s, 云资源, 监控",
      tooling: "“最后一公里”工具",
      toolingDesc: "连接基建数据与业务逻辑的上下文感知桥梁",
      business: "业务逻辑",
      businessSub: "订单, 支付, 用户体系"
    }
  }
};

export const SreTrapDiagram = () => {
  const { language } = useLanguage();
  const t = TEXT[language].sreTrap;

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
  const t = TEXT[language].onePlusN;

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
  const t = TEXT[language].lastMile;

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
