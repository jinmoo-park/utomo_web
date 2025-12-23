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
  Layers,
  Cloud,
  Table,
  BarChartBig,
  Globe,
  Shield,
  GitBranch,
  FileJson,
  Mail,
  CheckCircle
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
      {/* 배경 그리드 (설계도 느낌) */}
      <div className="absolute inset-0 opacity-[0.05]"
           style={{ backgroundImage: `linear-gradient(${THEME.text} 1px, transparent 1px), linear-gradient(90deg, ${THEME.text} 1px, transparent 1px)`, backgroundSize: '40px 40px' }}>
      </div>
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
            고객 문의 요약 보고서 생성 완료!
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

// --- Graphic 2: Data Automation (Enhanced Pipeline Flow) ---
const AutomationGraphic = () => {
  // 애니메이션 변수
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.2, delayChildren: 0.3 }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: { y: 0, opacity: 1, transition: { duration: 0.5 } }
  };

  return (
    <div className="relative w-full min-h-[320px] rounded-2xl bg-zinc-900/50 border border-white/5 overflow-hidden flex flex-col md:flex-row items-center justify-between p-6 md:p-8 gap-6 md:gap-0">
      {/* 배경 그리드 (설계도 느낌) */}
      <div className="absolute inset-0 opacity-[0.05] pointer-events-none"
           style={{ backgroundImage: `linear-gradient(${THEME.text} 1px, transparent 1px), linear-gradient(90deg, ${THEME.text} 1px, transparent 1px)`, backgroundSize: '40px 40px' }}>
      </div>
      {/* 배경 회로도 패턴 */}
      <div className="absolute inset-0 opacity-[0.03] pointer-events-none"
        style={{ backgroundImage: `radial-gradient(circle at 2px 2px, ${THEME.text} 1px, transparent 0)`, backgroundSize: '24px 24px' }}>
      </div>

      {/* 파이프라인 연결선 애니메이션 (데스크탑용 가로, 모바일용 세로) */}
      <svg className="absolute inset-0 w-full h-full pointer-events-none z-0 hidden md:block" viewBox="0 0 400 320" preserveAspectRatio="none">
        <defs>
          <linearGradient id="grad-desktop" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor={THEME.neon} stopOpacity="0" />
            <stop offset="50%" stopColor={THEME.neon} stopOpacity="1" />
            <stop offset="100%" stopColor={THEME.neon} stopOpacity="0" />
          </linearGradient>
        </defs>
        <motion.path
          d="M 80 160 L 320 160"
          stroke="url(#grad-desktop)"
          strokeWidth="2"
          strokeDasharray="6,6"
          fill="none"
          animate={{ strokeDashoffset: [-24, 0] }}
          transition={{ duration: 1.5, repeat: Infinity, ease: "linear" }}
          opacity="0.4"
        />
      </svg>
      <svg className="absolute inset-0 w-full h-full pointer-events-none z-0 md:hidden" viewBox="0 0 320 400" preserveAspectRatio="none">
        <defs>
          <linearGradient id="grad-mobile" x1="0%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" stopColor={THEME.neon} stopOpacity="0" />
            <stop offset="50%" stopColor={THEME.neon} stopOpacity="1" />
            <stop offset="100%" stopColor={THEME.neon} stopOpacity="0" />
          </linearGradient>
        </defs>
        <motion.path
          d="M 160 80 L 160 320"
          stroke="url(#grad-mobile)"
          strokeWidth="2"
          strokeDasharray="6,6"
          fill="none"
          animate={{ strokeDashoffset: [-24, 0] }}
          transition={{ duration: 1.5, repeat: Infinity, ease: "linear" }}
          opacity="0.4"
        />
      </svg>

      {/* Left: Input Sources (Raw Data) */}
      <motion.div variants={containerVariants} initial="hidden" whileInView="visible" className="relative z-10 flex flex-col gap-3 p-4 rounded-xl bg-white/5 border border-white/10 backdrop-blur-sm w-full md:w-auto">
        <h4 className="text-xs text-zinc-400 font-medium mb-1 uppercase tracking-wider text-center md:text-left">Raw Inputs</h4>
        <SourceItem icon={FileText} label="Documents / Emails" variants={itemVariants} />
        <SourceItem icon={Database} label="Legacy DB / ERP" variants={itemVariants} />
        <SourceItem icon={Cloud} label="External APIs" variants={itemVariants} />
      </motion.div>

      {/* Center: AI Processor */}
      <motion.div initial={{ scale: 0.8, opacity: 0 }} whileInView={{ scale: 1, opacity: 1 }} transition={{ delay: 0.5, type: "spring" }} className="relative z-20 flex flex-col items-center justify-center shrink-0">
        <div className="relative w-24 h-24 flex items-center justify-center mb-2">
          {/* 회전하는 외부 링 */}
          <motion.div
            animate={{ rotate: 360 }}
            transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
            className="absolute inset-0 rounded-full border-2 border-dashed border-[#DFFF00]/40"
          />
          {/* 반대로 회전하는 내부 링 */}
          <motion.div
            animate={{ rotate: -360 }}
            transition={{ duration: 12, repeat: Infinity, ease: "linear" }}
            className="absolute inset-2 rounded-full border border-dotted border-[#DFFF00]/20"
          />
          {/* 중앙 코어 */}
          <div className="w-14 h-14 rounded-full bg-[#DFFF00]/10 border border-[#DFFF00] flex items-center justify-center shadow-[0_0_20px_rgba(223,255,0,0.4)] z-10 relative overflow-hidden">
            <motion.div animate={{ y: [-20, 20] }} transition={{duration: 1.5, repeat: Infinity, ease:"linear", repeatType:"mirror"}} className="absolute inset-0 bg-gradient-to-b from-transparent via-[#DFFF00]/30 to-transparent opacity-50" />
            <Zap size={24} className="text-[#DFFF00] relative z-20" />
          </div>
        </div>
        <span className="text-xs font-semibold text-[#DFFF00] tracking-wider uppercase">AI Processing Engine</span>
        <span className="text-[10px] text-zinc-500">Real-time Transformation</span>
      </motion.div>

      {/* Right: Output Data (Structured) */}
      <motion.div variants={containerVariants} initial="hidden" whileInView="visible" className="relative z-10 flex flex-col gap-3 p-4 rounded-xl bg-white/5 border border-white/10 backdrop-blur-sm w-full md:w-auto">
        <h4 className="text-xs text-zinc-400 font-medium mb-1 uppercase tracking-wider text-center md:text-right">Structured Data</h4>
        <OutputItem icon={Table} label="Cleaned Tables" variants={itemVariants} color="#DFFF00" />
        <OutputItem icon={BarChartBig} label="Actionable Insights" variants={itemVariants} color="#DFFF00" />
        <OutputItem icon={CheckCircle2} label="Automated Reports" variants={itemVariants} color="#DFFF00" />
      </motion.div>
    </div>
  );
};

// 보조 컴포넌트 (소스 아이템)
const SourceItem = ({ icon: Icon, label, variants }: { icon: any, label: string, variants: any }) => (
  <motion.div variants={variants} className="flex items-center gap-3 p-2.5 rounded-lg bg-black/40 border border-white/5">
    <div className="p-1.5 rounded bg-zinc-800/80">
      <Icon size={16} className="text-zinc-400" />
    </div>
    <span className="text-sm text-zinc-300">{label}</span>
  </motion.div>
);

// 보조 컴포넌트 (결과 아이템)
const OutputItem = ({ icon: Icon, label, variants, color }: { icon: any, label: string, variants: any, color: string }) => (
  <motion.div variants={variants} className="flex items-center gap-3 p-2.5 rounded-lg bg-black/40 border border-white/5 md:flex-row-reverse md:text-right">
    <div className="p-1.5 rounded bg-zinc-800/80 relative shrink-0">
      <motion.div initial={{opacity:0}} whileInView={{opacity:1}} transition={{delay:1}} className="absolute -inset-1 bg-[#DFFF00]/5 rounded" style={{ filter: 'blur(3px)' }} />
      <Icon size={16} className="text-[#DFFF00] relative z-10" />
    </div>
    <span className="text-sm text-white font-medium">{label}</span>
  </motion.div>
);

// --- Graphic 3: Custom Workflow (Complex Node Tree) ---
const WorkflowGraphic = () => {
  // 노드 위치 정의 (데스크탑용 - 그리드 형태)
  const desktopNodes: Array<{ id: string, x: number, y: number, icon: any, label: string, type: 'trigger' | 'process' | 'action' | 'result' }> = [
    // Level 1: Trigger
    { id: 'start', x: 40, y: 160, icon: Globe, label: 'Webhook', type: 'trigger' },
    
    // Level 2: Processing (Branching)
    { id: 'proc1', x: 160, y: 60, icon: Shield, label: 'Auth Check', type: 'process' },
    { id: 'proc2', x: 160, y: 160, icon: GitBranch, label: 'Router', type: 'process' },
    { id: 'proc3', x: 160, y: 260, icon: FileJson, label: 'Parse Data', type: 'process' },

    // Level 3: Actions
    { id: 'act1', x: 280, y: 80, icon: Database, label: 'Save DB', type: 'action' },
    { id: 'act2', x: 280, y: 240, icon: Mail, label: 'Send Email', type: 'action' },
    
    // Level 4: Result
    { id: 'end', x: 380, y: 160, icon: CheckCircle, label: 'Done', type: 'result' },
  ];

  // 노드 위치 정의 (모바일용 - 더 컴팩트하고 세로로 조정)
  const mobileNodes: Array<{ id: string, x: number, y: number, icon: any, label: string, type: 'trigger' | 'process' | 'action' | 'result' }> = [
    // Level 1: Trigger
    { id: 'start', x: 30, y: 140, icon: Globe, label: 'Webhook', type: 'trigger' },
    
    // Level 2: Processing (Branching)
    { id: 'proc1', x: 100, y: 80, icon: Shield, label: 'Auth', type: 'process' },
    { id: 'proc2', x: 100, y: 140, icon: GitBranch, label: 'Router', type: 'process' },
    { id: 'proc3', x: 100, y: 200, icon: FileJson, label: 'Parse', type: 'process' },

    // Level 3: Actions
    { id: 'act1', x: 170, y: 100, icon: Database, label: 'Save', type: 'action' },
    { id: 'act2', x: 170, y: 180, icon: Mail, label: 'Email', type: 'action' },
    
    // Level 4: Result
    { id: 'end', x: 240, y: 140, icon: CheckCircle, label: 'Done', type: 'result' },
  ];

  // 연결선 정의 함수 (노드 배열에 따라 동적으로 생성)
  const getEdges = (nodeList: typeof desktopNodes) => [
    { from: 'start', to: 'proc1', delay: 0 },
    { from: 'start', to: 'proc2', delay: 0 },
    { from: 'start', to: 'proc3', delay: 0 },
    { from: 'proc1', to: 'act1', delay: 0.5 },
    { from: 'proc2', to: 'act1', delay: 0.5 },
    { from: 'proc2', to: 'act2', delay: 0.5 },
    { from: 'proc3', to: 'act2', delay: 0.5 },
    { from: 'act1', to: 'end', delay: 1.0 },
    { from: 'act2', to: 'end', delay: 1.0 },
  ];

  // 연결선 애니메이션 variants (화면 재진입 시 항상 hidden에서 시작)
  const pathVariants = (delay: number) => ({
    hidden: {
      pathLength: 0,
      opacity: 0,
    },
    visible: {
      pathLength: 1,
      opacity: 1,
      transition: {
        duration: 0.8,
        delay: delay,
        ease: "easeInOut" as const,
      },
    },
  });

  return (
    <div className="relative w-full h-[280px] md:h-[360px] flex items-center justify-center overflow-hidden rounded-2xl bg-zinc-900/50 border border-white/5">
       {/* 배경 그리드 (설계도 느낌) */}
      <div className="absolute inset-0 opacity-[0.05]"
           style={{ backgroundImage: `linear-gradient(${THEME.text} 1px, transparent 1px), linear-gradient(90deg, ${THEME.text} 1px, transparent 1px)`, backgroundSize: '40px 40px' }}>
      </div>

      {/* 데스크탑 뷰 */}
      <div className="relative w-full h-full max-w-[450px] hidden md:block">
        <svg className="absolute inset-0 w-full h-full pointer-events-none">
          {getEdges(desktopNodes).map((edge, i) => {
            const startNode = desktopNodes.find(n => n.id === edge.from)!;
            const endNode = desktopNodes.find(n => n.id === edge.to)!;
            
            // 베지에 곡선 계산
            const pathD = `M ${startNode.x + 20} ${startNode.y + 20} C ${(startNode.x + endNode.x) / 2} ${startNode.y + 20}, ${(startNode.x + endNode.x) / 2} ${endNode.y + 20}, ${endNode.x + 20} ${endNode.y + 20}`;

            return (
              <React.Fragment key={i}>
                {/* 배경 라인 (Inactive) */}
                <path d={pathD} stroke="rgba(255,255,255,0.1)" strokeWidth="2" fill="none" />
                
                {/* 활성 라인 (Active Animation) */}
                <motion.path 
                  d={pathD} 
                  stroke={THEME.neon} 
                  strokeWidth="2" 
                  fill="none"
                  variants={pathVariants(edge.delay)}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: false }}
                />
              </React.Fragment>
            );
          })}
        </svg>

        {/* 노드 렌더링 */}
        {desktopNodes.map((node, i) => (
           <NodeItem key={node.id} node={node} index={i} isMobile={false} />
        ))}
      </div>

      {/* 모바일 뷰 */}
      <div className="relative w-full h-full max-w-[280px] md:hidden">
        <svg className="absolute inset-0 w-full h-full pointer-events-none">
          {getEdges(mobileNodes).map((edge, i) => {
            const startNode = mobileNodes.find(n => n.id === edge.from)!;
            const endNode = mobileNodes.find(n => n.id === edge.to)!;
            
            // 베지에 곡선 계산
            const pathD = `M ${startNode.x + 20} ${startNode.y + 20} C ${(startNode.x + endNode.x) / 2} ${startNode.y + 20}, ${(startNode.x + endNode.x) / 2} ${endNode.y + 20}, ${endNode.x + 20} ${endNode.y + 20}`;

            return (
              <React.Fragment key={i}>
                {/* 배경 라인 (Inactive) */}
                <path d={pathD} stroke="rgba(255,255,255,0.1)" strokeWidth="1.5" fill="none" />
                
                {/* 활성 라인 (Active Animation) */}
                <motion.path 
                  d={pathD} 
                  stroke={THEME.neon} 
                  strokeWidth="1.5" 
                  fill="none"
                  variants={pathVariants(edge.delay)}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: false }}
                />
              </React.Fragment>
            );
          })}
        </svg>

        {/* 노드 렌더링 */}
        {mobileNodes.map((node, i) => (
           <NodeItem key={node.id} node={node} index={i} isMobile={true} />
        ))}
      </div>
    </div>
  );
};

// 개별 노드 컴포넌트
const NodeItem = ({ node, index, isMobile }: { node: { id: string, x: number, y: number, icon: any, label: string, type: 'trigger' | 'process' | 'action' | 'result' }, index: number, isMobile: boolean }) => {
  // 노드 등장 타이밍 계산 (열 위치에 따라 순차적)
  const delay = node.type === 'trigger' ? 0 
              : node.type === 'process' ? 0.4
              : node.type === 'action' ? 0.9
              : 1.4;

  const isTrigger = node.type === 'trigger';
  const isResult = node.type === 'result';
  const Icon = node.icon;

  // 노드 애니메이션 variants (화면 재진입 시 항상 hidden에서 시작)
  const nodeVariants = {
    hidden: {
      scale: 0,
      opacity: 0,
    },
    visible: {
      scale: 1,
      opacity: 1,
      transition: {
        delay: delay,
        type: "spring" as const,
        stiffness: 200,
        damping: 15,
      },
    },
  };

  return (
    <motion.div
      className={`absolute flex flex-col items-center gap-1.5 md:gap-2 ${isMobile ? 'w-[70px]' : 'w-[100px]'} transform -translate-x-1/2 -translate-y-1/2`}
      style={{ left: node.x, top: node.y }}
      variants={nodeVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: false }}
    >
      {/* 아이콘 박스 */}
      <div className={`
        relative flex items-center justify-center ${isMobile ? 'w-8 h-8' : 'w-10 h-10'} rounded-xl border shadow-lg z-10
        ${isTrigger || isResult 
          ? `bg-[#DFFF00] border-[#DFFF00] text-black` 
          : 'bg-zinc-900 border-zinc-700 text-zinc-400'
        }
      `}>
         {/* 활성 노드일 때 빛나는 효과 */}
         {(isTrigger || isResult) && (
            <div className="absolute inset-0 bg-[#DFFF00] blur-md opacity-40 rounded-xl animate-pulse" />
         )}
         <Icon size={isMobile ? 14 : 18} />
      </div>

      {/* 라벨 */}
      <div className={`
        px-1.5 md:px-2 py-0.5 md:py-1 rounded ${isMobile ? 'text-[9px]' : 'text-[10px]'} font-medium border backdrop-blur-md
        ${isTrigger || isResult 
            ? 'bg-[#DFFF00]/10 border-[#DFFF00]/30 text-[#DFFF00]' 
            : 'bg-black/40 border-white/5 text-zinc-500'
        }
      `}>
        {node.label}
      </div>
    </motion.div>
  );
};


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
             <h2 className="section-title">신경 쓰지 않아도 업무는 빈틈없이 흘러갑니다.</h2>
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