import { Job, Profile, SkillCategory, Article, LifeEvent } from './types';
import { Terminal, Cloud, Activity, Shield, Cpu, Code, Server, Zap } from 'lucide-react';

export const ICONS = {
  Terminal, Cloud, Activity, Shield, Cpu, Code, Server, Zap
};

// --- DATA: ENGLISH ---

const PROFILE_EN: Profile = {
  name: "KubeLouisLu",
  role: "Senior SRE Specialist",
  experienceYears: 5,
  contact: {
    email: "kubelouislu@gmail.com",
    location: "China"
  },
  summary: "Senior SRE with expertise in enhancing large-scale system reliability through data-driven practices like SLO implementation and root cause analysis (RCA). Proven track record in significantly improving MTTR and incident precision across fintech and social media giants."
};

const SKILLS_EN: SkillCategory[] = [
  {
    category: "Core Reliability",
    items: ["SLO/SLA Design", "Root Cause Analysis", "Disaster Recovery", "Incident Management", "Capacity Planning"]
  },
  {
    category: "Cloud Native & Infra",
    items: ["Kubernetes", "Docker", "TencentCloud", "AliCloud", "Linux Systems", "Redis"]
  },
  {
    category: "Observability",
    items: ["Prometheus", "Grafana", "Distributed Tracing", "Alert Governance", "Full-stack Monitoring"]
  },
  {
    category: "Languages & Tools",
    items: ["Python", "Golang", "Java", "CI/CD Pipelines", "DevOps Toolchains"]
  }
];

const EXPERIENCE_EN: Job[] = [
  {
    company: "AliPay",
    role: "Storage SRE",
    period: "2025.01 - Present",
    logoColor: "text-[#1677FF]",
    highlights: [
      "Titan Migration: Led a large-scale refactoring of the Titan service framework, eliminating legacy technical debt across critical payment and session systems. Established unified risk controls across R&D, SRE, and PM workflows — covering discovery, classification, and defense — and delivered a standardized upgrade strategy balancing stability, version safety, and cross-team delivery efficiency.",
      "Business-Centric Reliability Program: Built a business-oriented reliability framework enhancing stability across payment and digital service domains. Introduced business-tier classification, capacity and risk modeling, and predictive detection for hotspots and expiration trends; optimized key-handling and mixed-deployment strategies to balance system performance, fault isolation, and service continuity."
    ],
    techStack: ["Storage Systems", "Risk Modeling", "Hotspot Detection", "Capacity Planning"],
    achievements: [
      { label: "Stability Strategy", value: "Unified", description: "Standardized upgrade strategy balancing stability & speed." },
      { label: "Risk Control", value: "100%", description: "Coverage across critical payment sessions." }
    ]
  },
  {
    company: "ByteDance",
    role: "SRE Engineer",
    period: "2024.03 - 2025.01",
    logoColor: "text-[#32DE84]",
    highlights: [
      "Accident Precaution: Improved incident resilience: cut MTTA ~90%, MTTI ~50% and MTTR ~80%; increased detection precision ~40%; raised alert coverage for business-critical scenarios to ~98% (from ~50%); and reduced alert noise ~40% by establishing SLOs as the core metric for stability, which guided the design of a global response framework (automated escalation, one-to-one incident→remedy mappings). This strategy, enhanced by scenario-based alert aggregation and a middleware-driven event-lifecycle service for cross-platform deduplication/suppression.",
      "Root Cause Analysis (RCA) System: Reduced MTTI by ~50% and improved RCA precision by ~40% through a four-layer RCA pipeline (access → collection → decision → mitigation) featuring scenario-based knowledge mapping, concurrent metric collection, factor-weighted scoring for root cause ranking, and automated mitigation execution."
    ],
    techStack: ["Global Traffic", "Middleware", "Automated Mitigation", "SLO Engineering"],
    achievements: [
      { label: "MTTA Reduction", value: 90, suffix: "%", change: 90, description: "Drastic cut in Mean Time To Acknowledge." },
      { label: "MTTR Reduction", value: 80, suffix: "%", change: 80, description: "Faster incident resolution speed." },
      { label: "Detection Precision", value: 40, prefix: "+", suffix: "%", change: 40, description: "Improved accuracy of automated alerts." },
      { label: "Alert Coverage", value: 98, suffix: "%", change: 48, description: "Business-critical scenario coverage up from 50%." }
    ]
  },
  {
    company: "Tencent",
    role: "SRE Engineer",
    period: "2020.06 - 2024.03",
    logoColor: "text-[#0052D9]",
    highlights: [
      "Disaster Recovery: Reduced platform RTO ~75% (20→5 min) and cut commit failure rate ~85% by designing an end-to-end DR process (pre-checks, read-only + write-queue, LB tier switchover) and checksum-based recovery.",
      "Alert Governance: Standardized alert schema and centralized ingestion; implemented deduplication and throttling, reducing alert volume by ~40% and increasing actionable alerts."
    ],
    techStack: ["Load Balancers", "Disaster Recovery", "Alerting Systems", "Checksum Recovery"],
    achievements: [
      { label: "RTO Reduction", value: 75, suffix: "%", change: 75, description: "Reduced Recovery Time Objective from 20m to 5m." },
      { label: "Commit Failures", value: 85, suffix: "%", change: 85, description: "Cut commit failure rate significantly." },
      { label: "Alert Volume", value: 40, suffix: "%", change: 40, description: "Reduced total volume via deduplication." }
    ]
  }
];

const THINKING_EN: Article[] = [
  {
    id: "0",
    title: "Transformation to BRE: The Path to Business High Availability",
    date: "2025-05-20",
    readTime: "15 min read",
    tags: ["Transformation", "BRE", "1+N Model"],
    summary: "SREs must evolve from firefighters to Business Reliability Engineers (BRE). By implementing the '1+N' model and productizing the 'last mile' of infrastructure, we can liberate ourselves from toil to focus on architectural prevention.",
    content: [
      "The Reality Check: The 'Silent SRE' in Design Reviews. In my previous experience at Tencent, we implemented a policy where SREs were required to attend requirement reviews and technical assessment meetings. Ideally, this would prevent issues before code was written. However, the reality was stark: SREs rarely contributed meaningful insights. Why? It wasn't a lack of skill.",
      "The Root Cause: Cognitive Overload. The SREs were physically present in the meeting, but their minds were elsewhere. They were worrying about a pending deployment, reacting to a flapping alert, or manually configuring a dashboard for a new service. Energy is conserved; if 90% of an SRE's bandwidth is consumed by operational toil (deployments, monitoring, firefighting), they literally do not have the cognitive surplus to think about architecture. To fix this, we must liberate them.",
      { type: 'diagram', id: 'sre-trap', caption: 'The vicious cycle of toil vs. the virtuous cycle of prevention' },
      "The Strategy: '1+N' Operational Model. We need to restructure the team. '1' represents the Core SRE (Elite/Architect), who acts as the Product Manager of Stability. 'N' represents Outsourcing Partners or Junior Operations, who are the 'Users' of our stability products. The goal is not to dump work on 'N', but to build tools that empower 'N' to handle 90% of the daily operations without escalating to '1'.",
      { type: 'diagram', id: 'one-plus-n', caption: 'The 1+N Model: SRE as Tool Builders, Partners as Operators' },
      "Productizing the 'Last Mile'. This is the most critical step. Central platform teams provide generic tools (like Kubernetes or basic Monitoring), but these are not enough for 'N' to be effective. SREs must build the 'Last Mile'—the specific bridge between generic infrastructure and business logic.",
      "A Concrete Example: Instead of teaching an outsourced engineer how to query logs and trace IDs (which takes 30 mins per incident), an SRE builds a 'One-Click Order Diagnosis Tool'. The tool takes an Order ID, automatically checks the database latency, payment gateway status, and inventory service health, and outputs a simple conclusion: 'Inventory Service Timeout'.",
      { type: 'diagram', id: 'last-mile', caption: 'Bridging the gap between Generic Infra and Business Logic' },
      "The Transformation. By treating stability tools as products and empowering 'N' to use them, the '1' (SRE) is finally freed from the daily noise. Only then can they walk into a design review with a clear mind and say, 'This architecture has a single point of failure; here is how we redesign it.' This is the evolution from SRE to BRE (Business Reliability Engineer)."
    ]
  },
  {
    id: "1",
    title: "Beyond 99.99%: The Philosophy of Reliability",
    date: "2024-12-15",
    readTime: "8 min read",
    tags: ["Philosophy", "SRE"],
    summary: "Reliability isn't just about nines; it's about trust. Exploring why chasing the last 0.01% often yields diminishing returns compared to investing in graceful degradation and user experience.",
    content: [
      "In the world of Site Reliability Engineering, we often become obsessed with 'nines'. We chase 99.99% or even 99.999% availability as the holy grail of system performance. While these metrics are excellent proxies for uptime, they often miss the human element of reliability: Trust.",
      "The Law of Diminishing Returns applies heavily to availability engineering. Moving from three nines (43 minutes of downtime/month) to four nines (4 minutes/month) requires exponential effort and cost. Often, this investment yields little perceptible difference to the end user if the application fails gracefully.",
      "Instead of purely chasing the next nine, we should focus on 'Interactive Reliability'. Does the app tell the user what's wrong? Does it cache data so they can continue working offline? Reliability is a feature, and like any feature, it requires a user-centric design approach.",
      "At scale, 100% uptime is impossible. The goal shouldn't be perfection; it should be resilience. Resilience means the system can absorb shocks—unexpected traffic spikes, hardware failures, or network partitions—and recover without human intervention. It means failing partially rather than catastrophically.",
      "Ultimately, reliability is about the promise we make to our users. If we promise 99.9% and deliver 99.9%, we have succeeded. If we promise 99.999% and deliver 99.99%, we have failed, even if the latter is technically 'better'. Managing expectations through SLOs is just as important as managing the infrastructure itself."
    ]
  },
  {
    id: "2",
    title: "Embracing Chaos: Lessons from 100 Incidents",
    date: "2024-10-02",
    readTime: "12 min read",
    tags: ["Post-Mortem", "Growth"],
    summary: "Every incident is an unscheduled investment in reliability. A reflection on how we moved from a culture of blame to a culture of systemic discovery and resilience engineering.",
    content: [
      "I have participated in over 100 major incident reviews. In the beginning, these meetings were tense. People were afraid. The primary question on everyone's mind was, 'Who broke it?' This is the wrong question.",
      "The right question is, 'How did the system allow this to happen?'",
      "We shifted our culture by treating every incident as an 'unscheduled investment' in our system's reliability. If we already paid the price of downtime, we might as well get the value of the lesson. This mindset shift is crucial for high-performing SRE teams.",
      "Key lessons learned include: 1) Alert fatigue is real and dangerous. If everything is urgent, nothing is urgent. 2) Manual runbooks are dead code; if it's not automated, it will be forgotten or executed incorrectly under pressure. 3) The 'Root Cause' is a myth. Complex systems fail due to a confluence of factors, not a single broken cog.",
      "By embracing chaos engineering—proactively injecting failure into our systems—we verify our assumptions. We don't hope our failover logic works; we prove it works on Tuesday morning so we don't have to wonder about it on Friday night."
    ]
  },
  {
    id: "3",
    title: "SRE as a Culture, Not a Role",
    date: "2024-06-20",
    readTime: "6 min read",
    tags: ["Culture", "DevOps"],
    summary: "Why hiring 'SREs' doesn't fix reliability if developers aren't on call. Discussing the shift of responsibility and the unified risk control model across R&D and Operations.",
    content: [
      "Many organizations make the mistake of hiring SREs to be 'super sysadmins' who clean up after developers. This is an anti-pattern. SRE is not a role that absorbs operational toil; it is a culture that distributes operational responsibility.",
      "If developers throw code over the wall and SREs catch the pager, the feedback loop is broken. Developers never feel the pain of unstable code, so they have no incentive to prioritize stability over features.",
      "We implemented a model where SREs are consultants and platform builders. We build the guardrails, the monitoring platforms, and the deployment pipelines. But the developers drive the car. If the car crashes because they were speeding, they are the ones who get out and fix the tire.",
      "This doesn't mean SREs don't help. We are there for the catastrophic failures, the architectural reviews, and the deep-dive debugging. But day-to-day reliability must be owned by the service owners.",
      "This shift to 'You Build It, You Run It' (with SRE support) has been the single biggest driver of stability in my career. It aligns incentives and fosters a sense of ownership that no amount of tooling can replace."
    ]
  }
];

// Coordinates mapped to abstract Wuhan map (0-100 grid)
// Hankou (Top Left), Wuchang (Right/Bottom), Hanyang (Bottom Left)
const GROWTH_EN: LifeEvent[] = [
  {
    year: "2017 - 2021",
    title: "University (The Turning Point)",
    location: "Hubei University",
    description: "A pivotal transition in my academic career.",
    iconType: "university",
    coordinates: { x: 60, y: 35 }, // Wuchang (North-ish)
    details: [
      "Freshman Year: School of Literature, majoring in Editing & Publishing.",
      "Sophomore Year: Transferred to School of Computer & Info Tech, majoring in Software Engineering.",
      "Successfully transitioned from liberal arts to engineering, laying the foundation for my SRE career."
    ]
  },
  {
    year: "2014 - 2017",
    title: "High School",
    location: "Hongshan High School",
    description: "Completed secondary education with a focus on sciences.",
    iconType: "school",
    coordinates: { x: 85, y: 75 }, // Wuchang/Hongshan (East)
    details: [
      "Achieved a perfect score in Gaokao Math: 150/150.",
      "Built strong logical reasoning foundation."
    ]
  },
  {
    year: "2011 - 2014",
    title: "Middle School",
    location: "Hongshan Experimental Foreign Language Middle School",
    description: "Developed early interests in logic and languages.",
    iconType: "school",
    coordinates: { x: 75, y: 85 }, // Hongshan (South)
  },
  {
    year: "2008 - 2011",
    title: "Primary School (Senior)",
    location: "Hongshan Experimental Foreign Language Primary School",
    description: "Completed the latter half of primary education.",
    iconType: "school",
    coordinates: { x: 75, y: 85 }, // Same campus area
  },
  {
    year: "2005 - 2008",
    title: "Primary School (Junior)",
    location: "Huazhong Normal University Affiliated Primary School",
    description: "Started formal education in an academic environment.",
    iconType: "school",
    coordinates: { x: 65, y: 65 }, // Near Huashi (Central Wuchang)
  },
  {
    year: "Oct 21, 1997",
    title: "Hello World",
    location: "Wuhan Maternal and Child Health Hospital",
    description: "Born in the historic city of Wuhan.",
    iconType: "birth",
    coordinates: { x: 40, y: 20 }, // Hankou (North West)
  }
];

const EDUCATION_EN = {
  school: "Hubei University",
  degree: "Bachelor Software Engineering",
  period: "2017 - 2021"
};

// --- DATA: CHINESE ---

const PROFILE_ZH: Profile = {
  name: "KubeLouisLu",
  role: "高级 SRE 专家",
  experienceYears: 5,
  contact: {
    email: "kubelouislu@gmail.com",
    location: "中国"
  },
  summary: "拥有5年经验的高级 SRE，擅长通过 SLO 实施和根因分析（RCA）等数据驱动实践提升大规模系统的可靠性。在金融科技和社交媒体巨头企业中，拥有显著降低 MTTR 和提升故障检测精度的成功实战记录。"
};

const SKILLS_ZH: SkillCategory[] = [
  {
    category: "核心稳定性",
    items: ["SLO/SLA 设计", "根因分析 (RCA)", "容灾建设", "事件管理", "容量规划"]
  },
  {
    category: "云原生与基础架构",
    items: ["Kubernetes", "Docker", "腾讯云", "阿里云", "Linux 系统", "Redis"]
  },
  {
    category: "可观测性",
    items: ["Prometheus", "Grafana", "分布式链路追踪", "告警治理", "全栈监控"]
  },
  {
    category: "语言与工具",
    items: ["Python", "Golang", "Java", "CI/CD 流水线", "DevOps 工具链"]
  }
];

const EXPERIENCE_ZH: Job[] = [
  {
    company: "蚂蚁集团 (AliPay)",
    role: "存储 SRE",
    period: "2025.01 - 至今",
    logoColor: "text-[#1677FF]",
    highlights: [
      "Titan 迁移：主导了 Titan 服务框架的大规模重构，消除了关键支付和会话系统中的遗留技术债务。建立了跨研发、SRE 和 PM 的统一风险控制体系（涵盖发现、分类和防御），并交付了平衡稳定性、版本安全和跨团队交付效率的标准化升级策略。",
      "以业务为中心的可靠性项目：构建了面向业务的可靠性框架，增强了支付和数字服务领域的稳定性。引入了业务分级、容量和风险建模，以及针对热点和过期趋势的预测性检测；优化了密钥处理和混合部署策略，以平衡系统性能、故障隔离和服务连续性。"
    ],
    techStack: ["存储系统", "风险模型", "热点检测", "容量规划"],
    achievements: [
      { label: "稳定性策略", value: "统一化", description: "平衡稳定性与速度的标准化升级策略。" },
      { label: "风险控制", value: "100%", description: "覆盖关键支付会话。" }
    ]
  },
  {
    company: "字节跳动",
    role: "SRE 工程师",
    period: "2024.03 - 2025.01",
    logoColor: "text-[#32DE84]",
    highlights: [
      "事故预防：提升了事故韧性：通过确立 SLO 为核心稳定性指标，将 MTTA 降低约 90%，MTTI 降低约 50%，MTTR 降低约 80%；将检测精度提升约 40%；将业务关键场景的告警覆盖率提升至约 98%（原为约 50%）；并将告警噪音降低约 40%。指导了全球响应框架的设计（自动升级、点对点故障→预案映射）。该策略辅以基于场景的告警聚合及中间件驱动的事件全生命周期服务，实现了跨平台去重与抑制。",
      "根因分析 (RCA) 系统：通过四层 RCA 管道（接入→收集→决策→止损），将 MTTI 降低了约 50%，并将 RCA 精度提高了约 40%。该系统具有基于场景的知识图谱、并发指标收集、用于根因排序的因子加权评分以及自动止损执行功能。"
    ],
    techStack: ["全球流量", "中间件", "自动化止损", "SLO 工程"],
    achievements: [
      { label: "MTTA 降低", value: 90, suffix: "%", change: 90, description: "平均确认时间大幅缩减。" },
      { label: "MTTR 降低", value: 80, suffix: "%", change: 80, description: "故障恢复速度显著提升。" },
      { label: "检测精度", value: 40, prefix: "+", suffix: "%", change: 40, description: "自动化告警准确率提升。" },
      { label: "告警覆盖率", value: 98, suffix: "%", change: 48, description: "核心场景覆盖率从 50% 提升至 98%。" }
    ]
  },
  {
    company: "腾讯",
    role: "SRE 工程师",
    period: "2020.06 - 2024.03",
    logoColor: "text-[#0052D9]",
    highlights: [
      "容灾建设：通过设计端到端容灾流程（预检、只读+写队列、LB 层切换）及基于校验和的恢复机制，将平台 RTO 缩短约 75%（20→5分钟），提交失败率降低约 85%。",
      "告警治理：标准化告警模式并集中接入；实施去重与流控，将告警总量减少约 40% 并增加了可操作告警。"
    ],
    techStack: ["负载均衡", "容灾", "告警系统", "校验恢复"],
    achievements: [
      { label: "RTO 缩短", value: 75, suffix: "%", change: 75, description: "恢复时间目标从 20m 降至 5m。" },
      { label: "提交失败", value: 85, suffix: "%", change: 85, description: "显著降低提交失败率。" },
      { label: "告警总量", value: 40, suffix: "%", change: 40, description: "通过去重降低总量。" }
    ]
  }
];

const THINKING_ZH: Article[] = [
  {
    id: "0",
    title: "新时代下以业务高保为核心目标的 SRE 角色转型：BRE 的定义与路径探讨",
    date: "2025-05-20",
    readTime: "15 分钟阅读",
    tags: ["SRE转型", "BRE", "1+N模式", "深度思考"],
    summary: "在数字化时代，业务系统的稳定性和连续性成为首要目标。传统SRE模式往往困于事后救火，缺乏事前防御思维。本文探讨 SRE 如何向 BRE（业务可靠性工程）转型，通过“1+N”团队模式和“最后一公里”工具链，从源头防范风险，实现业务高可用。",
    content: [
      "在数字化时代，业务系统的稳定性和连续性成为首要目标。但传统SRE（Site Reliability Engineering）模式下，运维人员往往更多地关注故障响应和应急处理，而缺乏对故障预防的思维。例如，Google提出的“故障无感化”理念强调，要做到故障发生时系统依然平稳，就必须在**事前扎实开展稳定性建设**。目前，许多企业的研发团队在产品设计阶段并未充分考虑稳定性和异常场景，SRE团队往往被独立于研发之外，成为事后救火的角色。这导致设计之初易被遗漏的稳定性隐患未能提前发现。为此，需要将SRE角色向“**业务可靠性工程（BRE, Business Reliability Engineering）**”方向转型，深入业务场景和研发全流程，从源头防范稳定性问题。",
      "## 存在的问题与原因",
      "以往SRE角色定位倾向于事后响应：传统运维只聚焦于故障发生后的应急处置，缺乏**事前风险防范**的思维。实际中，很多场景下SRE直到事故发生才介入，才开始排查和修复问题，未能从设计源头提高系统韧性。",
      "SRE与研发/产品分离导致稳定性考量不足：SRE团队往往独立于产品研发组织之外，只在项目后期（甚至上线后）才参与。研发和产品团队本身并不习惯用稳定性思维来思考功能设计，导致很多业务场景下设计时未考虑异常情况。因此，稳定性隐患在需求定义、架构评审阶段没有被暴露。",
      { type: 'diagram', id: 'sre-trap', caption: '传统 SRE 困境与 BRE 转型目标对比' },
      "SRE角色与BRE转型需求：在强调业务连续性的行业（如金融领域），有专家提出运维角色必须深入懂业务，否则运维团队“就失去了灵魂”。Google的观点也启发我们：在“SRE”中，强调“**可靠性**”（R）和“**业务连续性**”比强调单纯的技术实施（E）更重要，有人因此将其称为“**BRE**”（Business Reliability Engineering）。BRE要求运维人员既要有可靠性保障的工程能力，更要懂业务逻辑、掌握系统部署和上下游关系等全局信息。",
      "## BRE的定义与目标",
      "“**BRE**”即**业务可靠性工程师**角色，其核心是以**业务高可用**为导向，将可靠性工程理念贯穿于业务研发的全过程。BRE不同于传统运维或单纯的SRE，其职责包括：深入理解核心业务功能和流程、提前在设计阶段识别风险、制定可用性方案，并持续优化系统稳定性。具体而言：",
      "1. BRE要像**业务架构师**一样，熟悉应用系统的逻辑架构和部署拓扑，当核心业务功能发生异常时能够快速发现并响应。",
      "2. BRE要像**可用性工程师**一样，擅长制定并执行业务级的SLO/SLA策略、容量规划、容灾策略和应急演练等，确保业务在各种复杂场景下保持连续。",
      "3. BRE也需具备“**运营分析师**”思维，通过数据分析（监控、日志、用户反馈）了解系统运行状态并推动持续改进。",
      { type: 'diagram', id: 'bre-definition', caption: 'BRE 角色的三大核心支柱' },
      "总之，BRE角色强调在系统上线前就介入，在架构设计和编码阶段**前置稳定性方案**。这样，稳定性不再是“事后补救”，而是在业务设计之初就纳入考虑、从产品层面解决的问题。",
      "## 实现路径",
      "要将SRE转型为以业务高保为核心的BRE，需要从组织分工和工具体系两方面着力：",
      "1. 在恰当阶段介入需求与设计",
      "Google等业界实践表明，应让SRE/BRE尽早参与到设计评审中。实际上，有报告指出“没有SRE参与评审的架构方案不允许通过”，以强制机制确保稳定性要求被提出。可惜现实中，SRE常被繁重的日常事务分散注意力：他们需要提供监控系统、自动化发布平台、文档平台、容灾系统等基础设施，并制定运维规范，同时承担容错演练、OnCall值班、应急响应等任务。这些“守护现网”的职责使得SRE难以全身心投入到需求评审。为此，需要有意识地释放SRE的部分日常负担，让他们能参与到设计评审和业务需求阶段。具体做法可以是将部分监控运维任务外包或工具化，由其他团队负责日常运维监控和应急，使SRE/BRE有更多时间进行业务梳理和架构把控。",
      "2. “**1+N**”团队模式",
      "在人才配置上，一方面（“1”）要求核心SRE/BRE工程师具备工匠精神，将自己负责的稳定性产品像打磨业务产品一样细致打磨。也就是说，SRE/BRE必须以**产品思维**对待稳定性工具和流程，不断优化告警规则、演练预案、工具界面等每个细节，力求高可靠性。另一方面（“N”）涉及外包/第三方运维同学——他们不是来替我们“擦屁股”的，而是我们稳定性产品的使用者和运营者。这些运营同学就像BRE的客户，他们日常负责通过我们的监控系统、应急平台等工具来发现和处理问题。因此，我们应把外包运维视为合作伙伴：提供简单易用的稳定性产品和清晰的SOP，让他们能够自助解决大多数事故。通过1+N模式，核心SRE/BRE专注于**产品化建设**，外包同学专注于**稳定性运营**，共同提升业务连续性。",
      { type: 'diagram', id: 'one-plus-n', caption: '1+N 模式：核心 SRE 建设工具，合作伙伴负责运营' },
      "3. 打磨“**业务最后一公里**”的稳定性工具链",
      "要兼顾投入产出比，应重点发力业务链路的最终环节。基础设施层面的能力（如公有云、容器、数据库中间件等）已有中台产品提供保障，我们要做的是将这些能力延伸到业务侧的“**最后一公里**”。例如，在故障排查上，日志体系往往被称为企业排障的“最后一公里”。典型案例：某核心交易系统一天出现少量交易失败，监控指标只能发现有异常但无法给出细节；工程师对比成功和失败的交易日志后才定位到故障根因是第三方服务的通信错误。由此可见，精细的日志收集与分析对于业务稳定至关重要。",
      "基于此思路，我们可以开发各种工具化方案，使稳定性场景体系化、自动化。例如，引入**AI故障分析工具**来辅助根因分析和复盘：最新研究展示了“智能复盘Agent”可以自动聚合监控告警、会议记录、变更单等多维信息，自动生成故障概述和分析报告。这样，一旦发生故障，运维人员和外包团队可以通过简单的操作即可获取问题原因和建议的改进措施，大大提高效率。我们应善用各类技术（如AI、全链路压测、混沌工程等）构建完整的稳定性工具链，并把“业务最后一公里”的事务以产品化形式打磨出来，让这些工具自主完成故障检测、报警、定位到恢复的闭环。",
      { type: 'diagram', id: 'last-mile', caption: '跨越“最后一公里”：从通用基建到业务逻辑' },
      "最终实现**主动防御**与需求导向。当上述稳定性场景都由成体系的产品和流程覆盖后，SRE/BRE团队的时间就会被极大释放。他们可以真正投入到业务需求评审和系统设计阶段，提出稳定性改进建议，甚至参与业务架构的讨论。这样，团队的关注点就从被动响应转向主动防御：不断“让故障可预测、可预防”。最终目标是形成一个闭环：开发人员在设计和开发时就参考可靠性工具和预案，SRE/BRE则通过持续的监控和分析保障业务持续可用。在这个转型过程中，SRE/BRE团队从“事后救火”升级为“**事前护航**”，确保业务从上线伊始就具备高可用性保障。",
      "通过以上举措，SRE角色将更贴近业务本身，实现从“技术驱动”向“业务驱动”的转变。我们可以预见，随着BRE理念的落地，企业稳定性保障能力将更加成熟，系统故障将变为可控风险，真正做到防患于未然。"
    ]
  },
  {
    id: "1",
    title: "超越 99.99%：可靠性的哲学",
    date: "2024-12-15",
    readTime: "8 分钟阅读",
    tags: ["哲学", "SRE"],
    summary: "可靠性不仅仅是几个 9，而是关乎信任。探讨为什么相比于投资优雅降级和用户体验，盲目追求最后 0.01% 的可用性往往会导致边际收益递减。",
    content: [
      "在 SRE（站点可靠性工程）的世界里，我们经常痴迷于“几个9”。我们将 99.99% 甚至 99.999% 的可用性视为系统性能的圣杯。虽然这些指标是衡量正常运行时间的绝佳代理，但它们往往忽略了可靠性中的人性因素：信任。",
      "收益递减法则在可用性工程中体现得淋漓尽致。从三个9（每月停机43分钟）提升到四个9（每月停机4分钟）需要指数级的努力和成本。通常，如果应用程序能够优雅地降级，这种投入对最终用户来说并没有明显的感知差异。",
      "与其单纯追求下一个“9”，我们不如关注“交互式可靠性”。当系统出错时，它是否告知了用户？它是否缓存了数据以便用户可以离线工作？可靠性是一种功能，就像任何功能一样，它需要以用户为中心的设计方法。",
      "在大规模系统中，100% 的在线是不可能的。目标不应该是完美，而应该是韧性。韧性意味着系统能够吸收冲击——意外的流量激增、硬件故障或网络分区——并在无需人工干预的情况下恢复。这意味着部分降级，而不是灾难性崩溃。",
      "归根结底，可靠性是我们向用户做出的承诺。如果我们承诺 99.9% 并交付了 99.9%，我们就成功了。如果我们承诺 99.999% 但只交付了 99.99%，即使后者在技术上“更好”，我们也失败了。通过 SLO 管理预期与管理基础设施本身同样重要。"
    ]
  },
  {
    id: "2",
    title: "拥抱混乱：100次故障后的反思",
    date: "2024-10-02",
    readTime: "12 分钟阅读",
    tags: ["复盘", "成长"],
    summary: "每一次故障都是一次计划外的可靠性投资。反思我们如何从指责文化转向系统性发现和韧性工程文化。",
    content: [
      "我参与过 100 多次重大事故的复盘。起初，这些会议气氛紧张。人们感到害怕。每个人心中的主要问题是：“谁弄坏了它？”这是一个错误的问题。",
      "正确的问题是，“系统是如何允许这种情况发生的？”",
      "我们转变了文化，将每一次事故都视为对系统可靠性的“计划外投资”。既然我们已经付出了停机的代价，不妨从中获取教训的价值。这种思维方式的转变对高性能 SRE 团队至关重要。",
      "学到的关键教训包括：1）告警疲劳是真实且危险的。如果一切都很紧急，那就没有什么是紧急的。2）手动操作手册是死代码；如果不自动化，在压力下它就会被遗忘或执行错误。3）“根本原因”是一个神话。复杂系统的故障往往是多种因素的综合作用，而不是单个齿轮的断裂。",
      "通过拥抱混沌工程——主动向系统中注入故障——我们验证了我们的假设。我们不寄希望于故障转移逻辑能够工作；我们在周二早上证明它能工作，这样我们就不用在周五晚上担心它了。"
    ]
  },
  {
    id: "3",
    title: "SRE 是一种文化，而非角色",
    date: "2024-06-20",
    readTime: "6 分钟阅读",
    tags: ["文化", "DevOps"],
    summary: "如果开发人员不参与 On-call，单纯招聘 SRE 并不能解决可靠性问题。讨论研发与运维之间责任的转移以及统一的风险控制模型。",
    content: [
      "许多组织犯的一个错误是，聘请 SRE 作为“超级系统管理员”来为开发人员善后。这是一种反模式。SRE 不是一个吸收运维琐事的角色；它是一种分配运维责任的文化。",
      "如果开发人员把代码扔过墙，而由 SRE 接传呼机，反馈循环就断了。开发人员永远感受不到不稳定代码带来的痛苦，因此他们没有动力优先考虑稳定性而非功能。",
      "我们实施了一种模式，SRE 是顾问和平台构建者。我们构建护栏、监控平台和部署流水线。但开发人员是驾驶员。如果车因为超速而撞毁，下车换轮胎的是他们。",
      "这并不意味着 SRE 不提供帮助。我们会在灾难性故障、架构审查和深度调试时出现。但日常的可靠性必须由服务所有者拥有。",
      "向“谁构建，谁运行”（在 SRE 支持下）的转变是我职业生涯中稳定性的最大推动力。它统一了激励机制，并培养了一种任何工具都无法替代的主人翁感。"
    ]
  }
];

const GROWTH_ZH: LifeEvent[] = [
  {
    year: "2017 - 2021",
    title: "大学（转折点）",
    location: "湖北大学",
    description: "学术生涯的关键转型期。",
    iconType: "university",
    coordinates: { x: 60, y: 35 },
    details: [
      "大一：文学院，编辑出版专业。",
      "大二：转入计算机与信息技术学院，软件工程专业。",
      "成功完成从文科到工科的跨越，为 SRE 职业生涯奠定基础。"
    ]
  },
  {
    year: "2014 - 2017",
    title: "高中",
    location: "洪山高中",
    description: "完成了以理科为重点的高中教育。",
    iconType: "school",
    coordinates: { x: 85, y: 75 },
    details: [
      "高考数学获得满分：150/150。",
      "建立了扎实的理科逻辑思维基础。"
    ]
  },
  {
    year: "2011 - 2014",
    title: "初中",
    location: "洪山实验外国语初中",
    description: "培养了早期的逻辑思维与语言兴趣。",
    iconType: "school",
    coordinates: { x: 75, y: 85 },
  },
  {
    year: "2008 - 2011",
    title: "小学（高年级）",
    location: "洪山实验外国语小学",
    description: "完成了小学后半段的教育。",
    iconType: "school",
    coordinates: { x: 75, y: 85 },
  },
  {
    year: "2005 - 2008",
    title: "小学（低年级）",
    location: "华中师范大学附属小学",
    description: "在浓厚的学术氛围中开始正规教育。",
    iconType: "school",
    coordinates: { x: 65, y: 65 },
  },
  {
    year: "1997年10月21日",
    title: "你好，世界",
    location: "武汉市妇幼保健院",
    description: "出生于历史文化名城武汉。",
    iconType: "birth",
    coordinates: { x: 40, y: 20 }, // Abstract coordinates (Hankou)
  }
];

const EDUCATION_ZH = {
  school: "湖北大学",
  degree: "软件工程学士",
  period: "2017 - 2021"
};

// --- UI STRINGS ---

const UI_EN = {
  hero: {
    status: "System Operational // Open To Work",
    rolePrefix: "role --set",
    contact: "Initiate Contact",
    terminal: {
      title: "root@kubelouis-server:~",
      init: "initializing SRE_dashboard...",
      loading: "[INFO] Loading modules: Kubernetes, Prometheus, Grafana",
      connect: "[INFO] Connecting to cluster: ali-cloud-production",
      success: "[SUCCESS] Connection established (Latency: 12ms)",
      fetch: "[INFO] Fetching metrics...",
      uptime: "UPTIME",
      incidents: "INCIDENTS",
      active: "0 Active"
    },
    ticker: {
      status: "SYSTEM_STATUS: HEALTHY",
      k8s: "K8S_CLUSTERS: 56 NODES",
      security: "SECURITY_SCORE: A+",
      cpu: "CPU_LOAD: 42%"
    }
  },
  nav: {
    resume: "SRE Profile",
    startups: "Exploration",
    thinking: "Thinking",
    growth: "Growth"
  },
  impact: {
    title: "Observability & Impact",
    subtitle: "> SELECT * FROM achievements WHERE impact = 'HIGH_AVAILABILITY'",
    metrics: {
      mttr: { label: "MTTR Reduction", sub: "vs. Baseline" },
      precision: { label: "Alert Precision", sub: "+40% Accuracy" },
      recovery: { label: "Recovery Time", sub: "From 20 min" },
      noise: { label: "Noise Reduction", sub: "Deduplication" }
    },
    charts: {
      incident: "Incident Lifecycle Latency",
      rto: "RTO & System Latency",
      ack: "ACKNOWLEDGE",
      identify: "IDENTIFY",
      resolve: "RESOLVE",
      window: "Time Window: Last 12h",
      trigger: "Failover Triggered at 08:00"
    }
  },
  timeline: {
    title: "work_experience",
    positions: "3 Positions",
    exp: "5 Years Exp",
    role: "HEAD OF SRE",
    responsibilities: "Key Responsibilities & Impact",
    metrics: "Performance Metrics"
  },
  skills: {
    title: "Resource Allocation & Stack",
    subtitle: "> checking_dependencies..."
  },
  thinking: {
    subtitle: "// Exploring the philosophy of reliability & systems",
    back: "Back to List"
  },
  footer: {
    education: "Education",
    connect: "Connect",
    status: "STATUS: OPERATIONAL | VERSION: 2.5.0 | REGION: CN-NORTH",
    copyright: "KubeLouisLu. Crafted with React, Framer Motion & Tailwind."
  }
};

const UI_ZH = {
  hero: {
    status: "系统运行正常 // 寻求机会",
    rolePrefix: "角色 --设定",
    contact: "建立联系",
    terminal: {
      title: "root@kubelouis-server:~",
      init: "正在初始化 SRE_仪表盘...",
      loading: "[信息] 加载模块: Kubernetes, Prometheus, Grafana",
      connect: "[信息] 连接集群: 阿里云-生产环境",
      success: "[成功] 连接已建立 (延迟: 12ms)",
      fetch: "[信息] 获取指标中...",
      uptime: "运行时间",
      incidents: "故障事件",
      active: "0 当前活跃"
    },
    ticker: {
      status: "系统状态: 健康",
      k8s: "K8S集群: 56 节点",
      security: "安全评分: A+",
      cpu: "CPU负载: 42%"
    },
  },
  nav: {
    resume: "SRE 履历",
    startups: "个人探索",
    thinking: "深度思考",
    growth: "成长经历"
  },
  impact: {
    title: "可观测性与影响力",
    subtitle: "> SELECT * FROM achievements WHERE impact = 'HIGH_AVAILABILITY'",
    metrics: {
      mttr: { label: "MTTR 降低", sub: "对比基线" },
      precision: { label: "告警准确率", sub: "+40% 准确度" },
      recovery: { label: "恢复耗时", sub: "从 20 分钟降至" },
      noise: { label: "噪音抑制", sub: "去重率" }
    },
    charts: {
      incident: "事件生命周期延迟",
      rto: "RTO 与系统延迟",
      ack: "确认",
      identify: "定位",
      resolve: "解决",
      window: "时间窗口: 过去 12小时",
      trigger: "08:00 触发故障切换"
    }
  },
  timeline: {
    title: "工作经历",
    positions: "3 段经历",
    exp: "5 年经验",
    role: "SRE 负责人",
    responsibilities: "核心职责与影响力",
    metrics: "绩效指标"
  },
  skills: {
    title: "技能栈与资源分配",
    subtitle: "> 正在检查依赖..."
  },
  thinking: {
    subtitle: "// 探索可靠性与系统架构的哲学",
    back: "返回列表"
  },
  footer: {
    education: "教育经历",
    connect: "联系方式",
    status: "状态: 运行中 | 版本: 2.5.0 | 区域: CN-NORTH",
    copyright: "KubeLouisLu. 由 React, Framer Motion & Tailwind 强力驱动。"
  }
};

export const DATA = {
  en: { 
    profile: PROFILE_EN, 
    skills: SKILLS_EN, 
    experience: EXPERIENCE_EN, 
    thinking: THINKING_EN, 
    growth: GROWTH_EN,
    education: EDUCATION_EN, 
    ui: UI_EN 
  },
  zh: { 
    profile: PROFILE_ZH, 
    skills: SKILLS_ZH, 
    experience: EXPERIENCE_ZH, 
    thinking: THINKING_ZH, 
    growth: GROWTH_ZH,
    education: EDUCATION_ZH, 
    ui: UI_ZH 
  }
};