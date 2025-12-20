import React from 'react';
import { motion } from 'framer-motion';
import { 
  MessageSquare, 
  Bot, 
  FileText, 
  Database, 
  Zap, 
  CheckCircle2,
  Share2,
  Layers
} from 'lucide-react';

// --- Color Constants ---
const THEME = {
  bg: '#050505',
  neon: '#DFFF00',
  text: '#ffffff',
  textDim: '#a1a1aa',
  cardBg: 'rgba(255, 255, 255, 0.03)',
  border: 'rgba(255, 255, 255, 0.1)',
};

// --- Graphic 1: Collaboration (Floating UI) ---
const CollaborationGraphic = () => {
  return (
    <div className="relative w-full h-[320px] flex items-center justify-center overflow-hidden rounded-2xl bg-zinc-900/50 border border-white/5">
      {/* Background Decor */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(223,255,0,0.05),transparent_50%)]" />
      
      {/* Slack/Teams Mockup Container */}
      <div className="relative w-[280px] h-[200px]">
        {/* Floating Card 1 (Back) */}
        <motion.div 
          animate={{ y: [0, -10, 0] }}
          transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
          className="absolute top-0 right-[-20px] w-64 p-4 rounded-xl backdrop-blur-md border border-white/10 bg-white/5 shadow-xl z-10"
        >
          <div className="flex items-center gap-3 mb-3">
            <div className="w-8 h-8 rounded-full bg-[#FFAAAA] flex items-center justify-center">
               <MessageSquare size={14} className="text-black" />
            </div>
            <div className="h-2 w-20 bg-white/20 rounded-full" />
          </div>
          <div className="space-y-2">
            <div className="h-2 w-full bg-white/10 rounded-full" />
            <div className="h-2 w-3/4 bg-white/10 rounded-full" />
          </div>
        </motion.div>

        {/* Floating Card 2 (Front - Active) */}
        <motion.div 
          initial={{ y: 20, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="absolute bottom-[-20px] left-[-20px] w-64 p-5 rounded-xl backdrop-blur-xl border border-[rgba(223,255,0,0.3)] bg-[#0A0A0A]/90 shadow-2xl z-20"
        >
          <div className="flex items-center justify-between mb-4">
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 rounded-full bg-[#DFFF00] flex items-center justify-center text-black">
                <Bot size={18} />
              </div>
              <span className="text-sm font-semibold text-white">AI Bot</span>
            </div>
            <span className="text-[10px] text-zinc-500">Just now</span>
          </div>
          <p className="text-sm text-zinc-300 mb-3">
            고객 문의 요약 보고서가 생성되었습니다.
          </p>
          <div className="flex items-center gap-2 p-2 rounded bg-white/5 border border-white/5">
            <FileText size={16} className="text-[#DFFF00]" />
            <span className="text-xs text-white">Daily_Report.pdf</span>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

// --- Graphic 2: Data Automation (Pipeline Flow) ---
const AutomationGraphic = () => {
  return (
    <div className="relative w-full h-[320px] flex items-center justify-center overflow-hidden rounded-2xl bg-zinc-900/50 border border-white/5">
      {/* Animated Particles Path */}
      <svg className="absolute inset-0 w-full h-full" viewBox="0 0 400 320">
        <defs>
          <linearGradient id="grad1" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="transparent" />
            <stop offset="50%" stopColor="#DFFF00" />
            <stop offset="100%" stopColor="transparent" />
          </linearGradient>
        </defs>
        
        {/* Stream Lines */}
        <motion.path 
          d="M0 160 H 400" 
          stroke="url(#grad1)" 
          strokeWidth="1" 
          fill="none"
          strokeDasharray="5,5"
          animate={{ strokeDashoffset: [-100, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
          opacity="0.3"
        />
      </svg>

      {/* Input Side (Chaos) */}
      <div className="absolute left-8 flex flex-col gap-4">
        {[FileText, Database, Share2].map((Icon, i) => (
          <motion.div
            key={i}
            animate={{ x: [0, 10, 0], opacity: [0.5, 1, 0.5] }}
            transition={{ duration: 3, delay: i * 0.5, repeat: Infinity }}
            className="p-2 rounded-lg bg-white/5 border border-white/10"
          >
            <Icon size={20} className="text-zinc-500" />
          </motion.div>
        ))}
      </div>

      {/* Center Processor */}
      <div className="relative z-10 w-24 h-24 flex items-center justify-center">
        <motion.div 
          animate={{ rotate: 360 }}
          transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
          className="absolute inset-0 rounded-full border border-dashed border-[#DFFF00]/30"
        />
        <motion.div 
          animate={{ scale: [1, 1.1, 1] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="w-12 h-12 rounded-full bg-[#DFFF00]/10 border border-[#DFFF00] flex items-center justify-center shadow-[0_0_15px_rgba(223,255,0,0.3)]"
        >
          <Zap size={20} className="text-[#DFFF00]" />
        </motion.div>
      </div>

      {/* Output Side (Ordered) */}
      <div className="absolute right-8 flex flex-col gap-2">
        {[1, 2, 3].map((_, i) => (
          <motion.div
            key={i}
            initial={{ x: 20, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            transition={{ delay: 0.5 + (i * 0.2) }}
            className="w-32 h-8 rounded bg-white/5 border-l-2 border-[#DFFF00] flex items-center px-3"
          >
            <div className="w-2 h-2 rounded-full bg-zinc-500 mr-2" />
            <div className="w-16 h-1 bg-zinc-700 rounded-full" />
          </motion.div>
        ))}
      </div>
    </div>
  );
};

// --- Graphic 3: Custom Workflow (Node Graph) ---
const WorkflowGraphic = () => {
  return (
    <div className="relative w-full h-[320px] flex items-center justify-center overflow-hidden rounded-2xl bg-zinc-900/50 border border-white/5">
      <div className="relative w-[300px] h-[200px]">
        {/* Connection Lines (SVG) */}
        <svg className="absolute inset-0 w-full h-full pointer-events-none z-0">
          <motion.path 
            d="M50 50 C 150 50, 150 150, 250 150" 
            stroke="#333" 
            strokeWidth="2" 
            fill="none" 
          />
          {/* Active Pulse Line */}
          <motion.path 
            d="M50 50 C 150 50, 150 150, 250 150" 
            stroke="#DFFF00" 
            strokeWidth="2" 
            fill="none"
            initial={{ pathLength: 0, opacity: 0 }}
            whileInView={{ pathLength: 1, opacity: 1 }}
            transition={{ duration: 1.5, ease: "easeInOut", repeat: Infinity, repeatDelay: 1 }}
          />
          
          <motion.path d="M50 150 C 100 150, 100 100, 150 100" stroke="#333" strokeWidth="2" fill="none" />
        </svg>

        {/* Nodes */}
        <div className="absolute top-[20px] left-[10px] z-10">
            <NodeLabel icon={Share2} label="Trigger" active />
        </div>
        <div className="absolute top-[70px] left-[110px] z-10">
            <NodeLabel icon={Layers} label="Logic" />
        </div>
        <div className="absolute bottom-[20px] right-[10px] z-10">
            <NodeLabel icon={CheckCircle2} label="Action" active accent />
        </div>
         <div className="absolute bottom-[20px] left-[10px] z-10 opacity-50">
            <NodeLabel icon={FileText} label="Email" />
        </div>
      </div>
    </div>
  );
};

const NodeLabel = ({ icon: Icon, label, active, accent }: { icon: any, label: string, active?: boolean, accent?: boolean }) => (
  <div className={`flex items-center gap-2 px-3 py-2 rounded-lg border ${active ? 'bg-white/10 border-white/30' : 'bg-black/40 border-white/5'} backdrop-blur-sm`}>
    <Icon size={14} className={accent ? 'text-[#DFFF00]' : 'text-zinc-400'} />
    <span className={`text-xs ${accent ? 'text-[#DFFF00]' : 'text-zinc-300'}`}>{label}</span>
  </div>
);


// --- Main Reusable Section Component ---
const FeatureItem = ({ 
  title, 
  description, 
  features, 
  Graphic, 
  reversed 
}: { 
  title: string, 
  description: string, 
  features: string[], 
  Graphic: React.ComponentType, 
  reversed?: boolean 
}) => {
  return (
    <div className={`flex flex-col gap-12 lg:gap-20 items-center ${reversed ? 'lg:flex-row-reverse' : 'lg:flex-row'} mb-24 last:mb-0`}>
      {/* Text Content */}
      <div className="flex-1 w-full space-y-6">
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
        >
            <h3 className="text-3xl font-bold text-white mb-4 leading-tight">{title}</h3>
            <p className="text-zinc-400 text-lg leading-relaxed mb-8">
            {description}
            </p>
            
            <ul className="space-y-4">
            {features.map((feature, idx) => (
                <li key={idx} className="flex items-start gap-3">
                <CheckCircle2 size={20} className="text-[#DFFF00] mt-0.5 shrink-0" />
                <span className="text-zinc-300">{feature}</span>
                </li>
            ))}
            </ul>
        </motion.div>
      </div>

      {/* Visual Graphic */}
      <div className="flex-1 w-full">
         <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
         >
            <Graphic />
         </motion.div>
      </div>
    </div>
  );
};

// --- Page Layout Component ---
export default function FeatureSection() {
  const features = [
    {
      title: "협업툴 연동",
      description: "메신저에서 바로 보고서를 요청하거나, 고객 문의에 대한 초안을 작성하세요. 팀원들에게 알림을 보냅니다.",
      list: ["고객 상담 자동 요약", "일일 업무 보고서 자동 생성", "사내 지식 베이스 검색"],
      Graphic: CollaborationGraphic,
    },
    {
      title: "데이터 자동화",
      description: "데이터를 일일이 복사해서 붙여넣지 마세요. AI가 맥락을 파악하여 정확한 위치에 데이터를 기록합니다.",
      list: ["주문서 데이터 자동 추출", "재고 현황 실시간 업데이트", "프로젝트 진행률 자동 트래킹"],
      Graphic: AutomationGraphic,
    },
    {
      title: "커스텀 워크플로우",
      description: "우리 회사만의 독특한 업무 프로세스도 문제없습니다. 기존 시스템과 완벽하게 결합됩니다.",
      list: ["ERP/CRM 데이터 연동", "이메일 기반 업무 자동화", "복합 조건부 로직 실행"],
      Graphic: WorkflowGraphic,
    },
  ];

  return (
    <section id="solutions" className="w-full bg-[#050505] py-24 px-6 md:px-12 overflow-hidden">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-20 space-y-4">
             <h2 className="text-[#DFFF00] font-semibold tracking-wider uppercase text-sm">Features</h2>
             <p className="text-4xl md:text-5xl font-bold text-white">
                복잡한 업무는 AI에게,<br/>
                당신은 결정만 하세요.
             </p>
        </div>

        <div className="flex flex-col">
          {features.map((item, index) => (
            <FeatureItem
              key={index}
              title={item.title}
              description={item.description}
              features={item.list}
              Graphic={item.Graphic}
              reversed={index % 2 !== 0} // Zig-zag logic
            />
          ))}
        </div>
      </div>
    </section>
  );
}