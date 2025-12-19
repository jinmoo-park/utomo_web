import React, { useState, useEffect } from 'react';
import {
    ArrowRight,
    LogIn,
    BookOpen,
    ZapOff,
    Mail,
    Phone,
    Menu,
    X
} from 'lucide-react';
import { WorkflowDiagnosisForm } from '@/components/WorkflowDiagnosisForm';
import { Logo } from '@/components/Logo';
import './App.css';

function App() {
    const [calcData, setCalcData] = useState({
        employees: '10',
        hoursPerWeek: '5',
        hourlyWage: '30000'
    });
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    // Scroll Reveal Logic
    useEffect(() => {
        const revealElements = document.querySelectorAll('.reveal');
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('active');
                }
            });
        }, { threshold: 0.1 });

        revealElements.forEach(el => observer.observe(el));
        return () => observer.disconnect();
    }, []);

    const employees = parseInt(calcData.employees) || 0;
    const hoursPerWeek = parseInt(calcData.hoursPerWeek) || 0;
    const hourlyWage = parseInt(calcData.hourlyWage) || 0;

    const monthlyHoursSaved = Math.round(employees * hoursPerWeek * 4 * 0.8);
    const monthlyCostSaved = monthlyHoursSaved * hourlyWage;
    const yearlyCostSaved = monthlyCostSaved * 12;

    const handleFormSubmit = (data: any) => {
        console.log('Workflow diagnosis request submitted:', data);
        alert('진단 신청이 완료되었습니다. 24시간 이내에 연락드리겠습니다.');
    };

    const getDynamicFontSize = (text: string, baseSize: number = 3) => {
        const length = text.length;
        // Use a smaller base size on mobile-like widths (rough estimate)
        const isMobile = typeof window !== 'undefined' && window.innerWidth < 768;
        const adjustedBase = isMobile ? baseSize * 0.7 : baseSize;

        if (length <= 7) return `${adjustedBase}rem`;
        if (length <= 10) return `${adjustedBase * 0.8}rem`;
        if (length <= 13) return `${adjustedBase * 0.6}rem`;
        if (length <= 16) return `${adjustedBase * 0.5}rem`;
        return `${adjustedBase * 0.4}rem`;
    };

    const Utomo = () => <span className="font-croogla">utomo</span>;

    return (
        <div className="app-container">
            {/* Header */}
            <header className="header">
                <div className="container header-content">
                    <a href="/" className="logo-link">
                        <Logo className="logo-svg" />
                    </a>

                    <nav className={`nav ${isMenuOpen ? 'active' : ''}`}>
                        <a href="#why" onClick={() => setIsMenuOpen(false)}>Why <Utomo /></a>
                        <a href="#solutions" onClick={() => setIsMenuOpen(false)}>Solutions</a>
                        <a href="#process" onClick={() => setIsMenuOpen(false)}>Process</a>
                        <a href="#faq" onClick={() => setIsMenuOpen(false)}>FAQ</a>
                        <a href="#contact" className="nav-cta" onClick={() => setIsMenuOpen(false)}>무료 진단 신청</a>
                    </nav>

                    <button className="menu-toggle" onClick={() => setIsMenuOpen(!isMenuOpen)}>
                        {isMenuOpen ? <X size={28} /> : <Menu size={28} />}
                    </button>
                </div>
            </header>

            <main>
                {/* Hero Section */}
                <section className="hero">
                    <div className="hero-background">
                        <img src="/bg.png" alt="" className="hero-bg-img" />
                        <div className="hero-overlay"></div>
                        <div className="hero-glow"></div>
                        <div className="hero-glow-secondary"></div>
                    </div>
                    <div className="container hero-content-overlay">
                        <h1 className="hero-title">
                            가장 강력한 AI는
                            <span className="accent-text"> 당신이 쓰고 있는지조차 모르는 AI</span>입니다.
                        </h1>
                        <p className="hero-subtitle">
                            직원들에게 새로운 툴을 가르치지 마세요. <Utomo />는 당신이 이미 사용 중인 Slack, Notion, Excel 속에 AI를 숨겨 업무 효율을 극대화합니다.
                        </p>
                        <div className="hero-actions">
                            <a href="#contact" className="btn-primary">
                                우리 회사 숨은 비효율 진단받기 <ArrowRight size={22} />
                            </a>
                        </div>
                    </div>
                </section>

                {/* ROI Calculator Section */}
                <section className="section calculator-section">
                    <div className="container reveal">
                        <div className="text-center">
                            <h2 className="section-title"><Utomo /> 도입 효과 계산기</h2>
                            <p className="section-subtitle">
                                우리 회사의 숨은 비용, <Utomo />가 얼마나 아껴줄 수 있을까요?
                            </p>
                        </div>
                        <div className="calc-grid">
                            <div className="premium-card">
                                <div className="premium-card-inner">
                                    <div className="calc-inputs">
                                        <div className="calc-input-group">
                                            <label>반복 업무를 수행하는 직원 수</label>
                                            <input
                                                type="text"
                                                inputMode="numeric"
                                                pattern="[0-9]*"
                                                value={calcData.employees}
                                                onFocus={(e) => e.target.select()}
                                                onChange={(e) => {
                                                    const val = e.target.value.replace(/[^0-9]/g, '');
                                                    setCalcData({ ...calcData, employees: val });
                                                }}
                                            />
                                        </div>
                                        <div className="calc-input-group">
                                            <label>직원 1인당 주간 반복 업무 시간 (시간)</label>
                                            <input
                                                type="text"
                                                inputMode="numeric"
                                                pattern="[0-9]*"
                                                value={calcData.hoursPerWeek}
                                                onFocus={(e) => e.target.select()}
                                                onChange={(e) => {
                                                    const val = e.target.value.replace(/[^0-9]/g, '');
                                                    setCalcData({ ...calcData, hoursPerWeek: val });
                                                }}
                                            />
                                        </div>
                                        <div className="calc-input-group">
                                            <label>평균 시급 (원)</label>
                                            <input
                                                type="text"
                                                inputMode="numeric"
                                                pattern="[0-9]*"
                                                value={calcData.hourlyWage}
                                                onFocus={(e) => e.target.select()}
                                                onChange={(e) => {
                                                    const val = e.target.value.replace(/[^0-9]/g, '');
                                                    setCalcData({ ...calcData, hourlyWage: val });
                                                }}
                                            />
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="premium-card">
                                <div className="premium-card-inner">
                                    <div className="calc-results">
                                        <div className="result-card" style={{ overflow: 'hidden' }}>
                                            <span className="label">월간 절감 시간</span>
                                            <div className="flex items-baseline gap-1 flex-nowrap overflow-hidden">
                                                <span
                                                    className="value"
                                                    style={{
                                                        fontSize: getDynamicFontSize(monthlyHoursSaved.toLocaleString()),
                                                        whiteSpace: 'nowrap'
                                                    }}
                                                >
                                                    {monthlyHoursSaved.toLocaleString()}
                                                </span>
                                                <span className="unit shrink-0">시간</span>
                                            </div>
                                        </div>
                                        <div className="result-card" style={{ overflow: 'hidden' }}>
                                            <span className="label">연간 예상 절감 비용</span>
                                            <div className="flex items-baseline gap-1 flex-nowrap overflow-hidden">
                                                <span
                                                    className="value"
                                                    style={{
                                                        fontSize: getDynamicFontSize(yearlyCostSaved.toLocaleString()),
                                                        whiteSpace: 'nowrap'
                                                    }}
                                                >
                                                    {yearlyCostSaved.toLocaleString()}
                                                </span>
                                                <span className="unit shrink-0">원</span>
                                            </div>
                                        </div>
                                        <p className="calc-note">
                                            * <Utomo />의 평균 자동화율 80%를 기준으로 계산되었습니다.
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Pain Section */}
                <section id="why" className="section">
                    <div className="container">
                        <h2 className="section-title text-center reveal">왜 비싼 AI 툴을 도입하고도 실패할까요?</h2>
                        <div className="pain-grid">
                            <div className="premium-card pain-card reveal delay-1">
                                <div className="premium-card-inner">
                                    <LogIn className="pain-icon" size={48} />
                                    <h3>새로운 로그인</h3>
                                    <p>직원들은 낯선 툴을 켜는 것 자체를 싫어합니다. 기존 업무 환경을 해치지 않는 것이 핵심입니다.</p>
                                </div>
                            </div>
                            <div className="premium-card pain-card reveal delay-2">
                                <div className="premium-card-inner">
                                    <BookOpen className="pain-icon" size={48} />
                                    <h3>학습 곡선</h3>
                                    <p>바쁜 실무자에게 새로운 툴 교육은 또 다른 업무입니다. 배우지 않아도 쓸 수 있어야 합니다.</p>
                                </div>
                            </div>
                            <div className="premium-card pain-card reveal delay-3">
                                <div className="premium-card-inner">
                                    <ZapOff className="pain-icon" size={48} />
                                    <h3>단절된 워크플로우</h3>
                                    <p>AI 결과물을 다시 복사해서 붙여넣는 과정 자체가 비효율입니다. 데이터가 흐르는 길목에 AI가 있어야 합니다.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Solutions Section */}
                <section id="solutions" className="section">
                    <div className="container">
                        <div className="text-center reveal">
                            <h2 className="section-title"><Utomo />가 해결하는 실질적인 문제들</h2>
                            <p className="section-subtitle">
                                단순한 챗봇이 아닙니다. 비즈니스 로직을 이해하고 실행하는 AI 에이전트입니다.
                            </p>
                        </div>
                        <div className="solutions-grid">
                            <div className="premium-card solution-card reveal delay-1">
                                <div className="premium-card-inner">
                                    <div className="solution-icon">💬</div>
                                    <h3>Slack / Teams 연동</h3>
                                    <p>메신저에서 바로 보고서를 요청하거나, 고객 문의에 대한 초안을 작성하고, 팀원들에게 알림을 보냅니다.</p>
                                    <ul className="solution-list">
                                        <li>고객 상담 자동 요약</li>
                                        <li>일일 업무 보고서 자동 생성</li>
                                        <li>사내 지식 베이스 검색</li>
                                    </ul>
                                </div>
                            </div>
                            <div className="premium-card solution-card reveal delay-2">
                                <div className="premium-card-inner">
                                    <div className="solution-icon">📊</div>
                                    <h3>데이터 자동화</h3>
                                    <p>데이터를 일일이 복사해서 붙여넣지 마세요. AI가 맥락을 파악하여 정확한 위치에 데이터를 기록합니다.</p>
                                    <ul className="solution-list">
                                        <li>주문서 데이터 자동 추출</li>
                                        <li>재고 현황 실시간 업데이트</li>
                                        <li>프로젝트 진행률 자동 트래킹</li>
                                    </ul>
                                </div>
                            </div>
                            <div className="premium-card solution-card reveal delay-3">
                                <div className="premium-card-inner">
                                    <div className="solution-icon">⚙️</div>
                                    <h3>커스텀 워크플로우</h3>
                                    <p>우리 회사만의 독특한 업무 프로세스도 문제없습니다. 기존 시스템과 완벽하게 결합됩니다.</p>
                                    <ul className="solution-list">
                                        <li>ERP/CRM 데이터 연동</li>
                                        <li>이메일 기반 업무 자동화</li>
                                        <li>복합 조건부 로직 실행</li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* utomo's Approach Section */}
                <section className="section bg-dark-alt">
                    <div className="container">
                        <div className="approach-item reveal">
                            <div className="approach-text">
                                <span className="badge">No New Tool</span>
                                <h2>쓰던 툴 그대로,<br />AI만 심었습니다.</h2>
                                <p>직원들은 평소처럼 Slack에 메시지를 남기고, 엑셀에 데이터를 입력할 뿐입니다. <Utomo />가 그 뒤에서 조용히 업무를 끝내놓습니다.</p>
                            </div>
                            <div className="approach-visual">
                                <div className="premium-card chat-mockup">
                                    <div className="premium-card-inner">
                                        <div className="chat-bubble user">@utomo 어제 들어온 주문서 엑셀에 정리해줘</div>
                                        <div className="chat-bubble ai">네, 15건의 주문을 '240519_주문현황.xlsx'에 업데이트 완료했습니다.</div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="approach-item reverse reveal">
                            <div className="approach-text">
                                <span className="badge">Zero Learning Curve</span>
                                <h2>말 한마디면<br />충분합니다.</h2>
                                <p>복잡한 프롬프트 엔지니어링? 필요 없습니다. 우리 회사만의 업무 맥락을 이해하는 커스텀 AI가 당신의 언어로 대화합니다.</p>
                            </div>
                            <div className="approach-visual">
                                <div className="premium-card prompt-mockup">
                                    <div className="premium-card-inner">
                                        <div className="old-way">System: Act as a professional data analyst and...</div>
                                        <div className="new-way">"이번 달 매출 보고서 써줘"</div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Process Section */}
                <section id="process" className="section">
                    <div className="container">
                        <div className="text-center reveal">
                            <h2 className="section-title">도입 프로세스</h2>
                            <p className="section-subtitle">
                                단 2주면 우리 회사만의 AI 워크플로우가 완성됩니다.
                            </p>
                        </div>
                        <div className="process-steps">
                            <div className="premium-card process-step reveal delay-1">
                                <div className="premium-card-inner">
                                    <div className="step-number">01</div>
                                    <h3>업무 진단 (Diagnosis)</h3>
                                    <p>현재 업무 중 자동화가 가능한 영역을 식별하고 ROI를 분석합니다.</p>
                                </div>
                            </div>
                            <div className="premium-card process-step reveal delay-2">
                                <div className="premium-card-inner">
                                    <div className="step-number">02</div>
                                    <h3>솔루션 설계 (Design)</h3>
                                    <p>기존 툴과 연동되는 최적의 AI 워크플로우를 설계합니다.</p>
                                </div>
                            </div>
                            <div className="premium-card process-step reveal delay-3">
                                <div className="premium-card-inner">
                                    <div className="step-number">03</div>
                                    <h3>구축 및 통합 (Build)</h3>
                                    <p>AI 에이전트를 구축하고 실제 업무 환경에 통합합니다.</p>
                                </div>
                            </div>
                            <div className="premium-card process-step reveal delay-4">
                                <div className="premium-card-inner">
                                    <div className="step-number">04</div>
                                    <h3>최적화 (Optimize)</h3>
                                    <p>실제 사용 데이터를 바탕으로 성능을 지속적으로 고도화합니다.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* FAQ Section */}
                <section id="faq" className="section bg-dark-alt">
                    <div className="container">
                        <div className="text-center reveal">
                            <h2 className="section-title">자주 묻는 질문</h2>
                        </div>
                        <div className="faq-grid reveal delay-1">
                            <div className="premium-card faq-item">
                                <div className="premium-card-inner">
                                    <h3>Q. 보안은 안전한가요?</h3>
                                    <p>A. 모든 데이터는 엔터프라이즈급 보안 표준을 준수하며, 고객사의 승인 없이 외부로 유출되지 않습니다. 온프레미스 구축 옵션도 제공합니다.</p>
                                </div>
                            </div>
                            <div className="premium-card faq-item">
                                <div className="premium-card-inner">
                                    <h3>Q. 기존에 쓰던 툴을 바꿔야 하나요?</h3>
                                    <p>A. 아니요. <Utomo />의 철학은 'No New Tool'입니다. 현재 사용 중인 Slack, Notion, Excel 등을 그대로 사용하면서 AI 기능만 추가됩니다.</p>
                                </div>
                            </div>
                            <div className="premium-card faq-item">
                                <div className="premium-card-inner">
                                    <h3>Q. 도입 비용은 어떻게 되나요?</h3>
                                    <p>A. 자동화 범위와 복잡도에 따라 다릅니다. 무료 진단 신청을 통해 예상 ROI와 견적을 확인하실 수 있습니다.</p>
                                </div>
                            </div>
                            <div className="premium-card faq-item">
                                <div className="premium-card-inner">
                                    <h3>Q. 개발자가 없는 회사도 가능한가요?</h3>
                                    <p>A. 네, 가능합니다. <Utomo />가 설계부터 구축, 유지보수까지 모든 과정을 전담하여 관리해 드립니다.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Contact Section */}
                <section id="contact" className="section contact-section-premium">
                    <div className="container">
                        <div className="contact-header reveal text-center">
                            <h2 className="section-title">지금 바로 업무 자동화를 시작하세요</h2>
                            <p className="section-subtitle">어떤 업무를 자동화해야 할지 모르겠다면, 저희가 찾아드립니다.</p>
                        </div>
                        <div className="contact-form-container reveal">
                            <WorkflowDiagnosisForm onSubmit={handleFormSubmit} />
                        </div>
                        <div className="contact-footer-info reveal">
                            <div className="info-item">
                                <Mail size={20} />
                                <span>info@utomo.co.kr</span>
                            </div>
                            <div className="info-item">
                                <Phone size={20} />
                                <span>02-6644-6368</span>
                            </div>
                        </div>
                    </div>
                </section>
            </main>

            <footer className="footer">
                <div className="container footer-content">
                    <div className="footer-logo">
                        <Logo className="logo-svg" />
                    </div>
                    <p className="copyright">© 2025 <Utomo />. All rights reserved.</p>
                    <div className="footer-links">
                        <a href="#">개인정보처리방침</a>
                        <a href="#">이용약관</a>
                    </div>
                </div>
            </footer>
        </div>
    );
}

export default App;
