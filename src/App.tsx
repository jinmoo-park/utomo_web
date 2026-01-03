import React, { useState, useEffect } from 'react';
import {
    ArrowRight,
    LogIn,
    BookOpen,
    ZapOff,
    Mail,
    Phone,
    Menu,
    X,
    ChevronDown,
    ChevronUp
} from 'lucide-react';
import { IconifyIcon } from '@/components/IconifyIcon';
import { WorkflowDiagnosisForm } from '@/components/WorkflowDiagnosisForm';
import { Logo } from '@/components/Logo';
import FeatureSection from '@/components/FeatureSection';
import './App.css';

function App() {
    const [calcData, setCalcData] = useState({
        employees: '10',
        hoursPerWeek: '5',
        hourlyWage: '30000'
    });
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [expandedCards, setExpandedCards] = useState<number[]>([]);
    
    const toggleCard = (index: number) => {
        setExpandedCards(prev => 
            prev.includes(index) 
                ? prev.filter(i => i !== index)
                : [...prev, index]
        );
    };

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

    // Premium Card Mouse Glow Effect
    useEffect(() => {
        const handleMouseMove = (e: MouseEvent) => {
            const cards = document.querySelectorAll('.premium-card');
            cards.forEach((card) => {
                const rect = card.getBoundingClientRect();
                const x = e.clientX - rect.left;
                const y = e.clientY - rect.top;
                
                const glow = card.querySelector('.mouse-glow') as HTMLElement;
                if (glow) {
                    glow.style.left = `${x}px`;
                    glow.style.top = `${y}px`;
                }
            });
        };

        document.addEventListener('mousemove', handleMouseMove);
        return () => {
            document.removeEventListener('mousemove', handleMouseMove);
        };
    }, []);


    const employees = parseInt(calcData.employees) || 0;
    const hoursPerWeek = parseInt(calcData.hoursPerWeek) || 0;
    const hourlyWage = parseInt(calcData.hourlyWage) || 0;

    const monthlyHoursSaved = Math.round(employees * hoursPerWeek * 4 * 0.8);
    const monthlyCostSaved = monthlyHoursSaved * hourlyWage;
    const yearlyCostSaved = monthlyCostSaved * 12;

    const handleFormSubmit = async (data: any) => {
        try {
            const response = await fetch('/api/send-email', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(data),
            });

            const result = await response.json();

            if (response.ok) {
                alert('진단 신청이 완료되었습니다. 24시간 이내에 연락드리겠습니다.');
            } else {
                alert('이메일 전송에 실패했습니다. 다시 시도해주세요.');
                console.error('Error:', result);
            }
        } catch (error) {
            console.error('Error:', error);
            alert('서버 연결에 실패했습니다. 잠시 후 다시 시도해주세요.');
        }
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
                            <span className="accent-text"> 쓰고 있는지조차 모르는 AI</span>입니다.
                        </h1>
                        <p className="hero-subtitle">
                            직원들에게 새로운 툴을 가르치지 마세요. <Utomo />는 이미 사용 중인 Slack, Notion, Sheet 속에 AI를 숨겨 업무 효율을 극대화합니다.
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
                                <div className="mouse-glow"></div>
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
                                <div className="mouse-glow"></div>
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
                                <div className="mouse-glow"></div>
                                <div className="premium-card-inner">
                                    <div className="pain-icon-wrapper">
                                        <div className="pain-icon" dangerouslySetInnerHTML={{ __html: '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><g fill="none" stroke="currentColor" stroke-width="1.5"><circle cx="10" cy="6" r="4"/><path stroke-linecap="round" d="M20.414 11.414L19 10m0 0l-1.414-1.414M19 10l1.414-1.414M19 10l-1.414 1.414M17.998 18q.002-.246.002-.5c0-2.485-3.582-4.5-8-4.5s-8 2.015-8 4.5S2 22 10 22c2.231 0 3.84-.157 5-.437"/></g></svg>' }} />
                                    </div>
                                    <h3>새로운 툴에 대한 거부감</h3>
                                    <div className="pain-visual">
                                        <div className="pain-stat-number">73%</div>
                                    </div>
                                    <p>직원들은 낯선 툴을 켜는 것 자체를 싫어합니다. 낯선 환경은 업무 효율을 떨어뜨린다고 인식합니다. 낯선 인터페이스는 학습 비용을 발생시킵니다.</p>
                                    <div className="pain-warning">
                                        <div className="warning-icon-svg" dangerouslySetInnerHTML={{ __html: '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><g fill="none"><circle cx="18.5" cy="4.5" r="2.5" stroke="currentColor" stroke-width="1.5"/><path stroke="currentColor" stroke-linecap="round" stroke-width="1.5" d="m9 17l-1 1.2c-.738.886-1.107 1.328-1.61 1.564S5.31 20 4.157 20H3"/><path fill="currentColor" d="M13.65 22a.75.75 0 0 0 1.5 0zm-1.086-5.754l.453-.598zm1.185 1.015l.587-.466zm.557 1.12l.726-.186zm-.802-6.826a.75.75 0 0 0-1.009-1.11zm-2.652 1.61l.703.26zm.07 1.555l-.678.323zm2.728 5.219v2.06h1.5v-2.06zm-1.539-3.095c.664.502.888.679 1.05.884l1.175-.934c-.308-.387-.717-.69-1.319-1.146zm3.039 3.095c0-.755.005-1.264-.118-1.744l-1.453.373c.065.254.07.538.07 1.37zm-1.989-2.211c.197.247.34.534.418.84l1.453-.373a3.75 3.75 0 0 0-.696-1.4zm-.666-7.283c-.42.381-.945.836-1.354 1.224c-.21.198-.41.398-.573.586c-.149.172-.327.4-.42.649l1.407.521c-.008.021.014-.035.146-.187c.116-.134.276-.295.471-.48c.4-.38.865-.778 1.332-1.203zm.522 5.203c-.487-.37-.817-.62-1.055-.832c-.234-.208-.321-.33-.363-.418l-1.355.645c.168.35.424.63.72.894c.293.26.68.552 1.147.907zm-2.868-2.744a2.75 2.75 0 0 0 .095 2.139l1.355-.645a1.25 1.25 0 0 1-.044-.973zM5.436 8.82l-.37-.652zm-1.807.164a.75.75 0 1 0 .742 1.304zm9.778-1.627l-.286.693zm-2.96-.715l-.055-.748zM21 12.75a.75.75 0 1 0 0-1.5zm-5.232-3.213l-.67.335zM5.065 8.168l-1.436.816l.742 1.304l1.435-.816zm8.627-1.505c-1.344-.553-2.08-.857-3.3-.769l.11 1.496c.823-.06 1.255.099 2.62.66zm-7.886 2.81c2.502-1.422 3.552-2 4.695-2.083l-.109-1.496c-1.56.114-2.949.923-5.327 2.274zm13.949 3.276H21v-1.5h-1.245zm-4.658-2.878a5.21 5.21 0 0 0 4.658 2.878v-1.5A3.71 3.71 0 0 1 16.439 9.2zm1.342-.67a5.33 5.33 0 0 0-2.747-2.538l-.57 1.387c.86.354 1.564 1 1.975 1.821z"/></g></svg>' }} />
                                        <span className="warning-text">도입 초기 이탈률 급증</span>
                                    </div>
                                </div>
                            </div>
                            <div className="premium-card pain-card reveal delay-2">
                                <div className="mouse-glow"></div>
                                <div className="premium-card-inner">
                                    <div className="pain-icon-wrapper">
                                        <div className="pain-icon" dangerouslySetInnerHTML={{ __html: '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><g fill="none" stroke="currentColor" stroke-width="1.5"><path d="M9.783 3.5a5.17 5.17 0 0 1 4.434 0l6.691 3.137c1.456.682 1.456 3.044 0 3.726l-6.69 3.137a5.17 5.17 0 0 1-4.435 0l-6.691-3.137c-1.456-.682-1.456-3.044 0-3.726z"/><path stroke-linecap="round" d="M2 8.5V14m17-2.5v5.125c0 1.008-.503 1.952-1.385 2.44C16.146 19.88 13.796 21 12 21s-4.146-1.121-5.615-1.934C5.504 18.577 5 17.633 5 16.626V11.5"/></g></svg>' }} />
                                    </div>
                                    <h3>감당하기 힘든 학습 곡선</h3>
                                    <div className="pain-visual">
                                        <div className="learning-chart">
                                            <div className="chart-row">
                                                <div className="chart-label">기본 교육</div>
                                                <div className="chart-progress basic chart-progress-quarter"></div>
                                            </div>
                                            <div className="chart-row">
                                                <div className="chart-label">심화 실습</div>
                                                <div className="chart-progress intermediate chart-progress-three-quarter"></div>
                                            </div>
                                            <div className="chart-row">
                                                <div className="chart-label">평균 2주 소요</div>
                                                <div className="chart-progress advanced chart-progress-full"></div>
                                            </div>
                                        </div>
                                    </div>
                                    <p>바쁜 실무자에게 교육은 부담입니다. 이미 바쁜 업무 시간에 새로운 툴 사용법을 익히기 위해 2주 이상의 시간을 투자해야 합니다.</p>
                                    <div className="pain-warning">
                                        <div className="warning-icon-svg" dangerouslySetInnerHTML={{ __html: '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="m22 18l-7.38-7.335c-.997-.991-1.496-1.487-2.115-1.487s-1.117.496-2.115 1.488l-.24.238c-.997.992-1.497 1.489-2.116 1.489s-1.118-.497-2.115-1.49L2 7m20 11v-5.546M22 18h-5.582"/></svg>' }} />
                                        <span className="warning-text">업무 생산성 일시적 저하</span>
                                    </div>
                                </div>
                            </div>
                            <div className="premium-card pain-card reveal delay-3">
                                <div className="mouse-glow"></div>
                                <div className="premium-card-inner">
                                    <div className="pain-icon-wrapper">
                                        <div className="pain-icon" dangerouslySetInnerHTML={{ __html: '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><g fill="none"><circle cx="5" cy="5" r="3" stroke="currentColor" stroke-width="1.5"/><circle cx="19" cy="19" r="3" stroke="currentColor" stroke-width="1.5"/><path fill="currentColor" d="M11 4.25a.75.75 0 0 0 0 1.5zM13 19l.53.53a.75.75 0 0 0 0-1.06zm4.206-10.313l.402.633zM6.794 15.313l.403.632zm5.236 1.657a.75.75 0 0 0-1.06 1.06zm-1.06 3a.75.75 0 0 0 1.06 1.06zm-.567-6.064a.75.75 0 0 0-.806-1.266zm2.797-3.559a.75.75 0 0 0 .806 1.266zm2.932-6.097H11v1.5h5.132zM13 18.25H7.868v1.5H13zm.53.22l-1.5-1.5l-1.06 1.06l1.5 1.5zm-1.06 0l-1.5 1.5l1.06 1.06l1.5-1.5zm-4.602-.22c-1.25 0-1.726-1.633-.671-2.305l-.805-1.265c-2.321 1.477-1.275 5.07 1.476 5.07zm8.264-12.5c1.25 0 1.726 1.633.671 2.305l.805 1.265c2.321-1.477 1.275-5.07-1.476-5.07zm-6.535 6.89l-3.205 2.04l.805 1.265l3.206-2.04zm7.206-4.585L13.2 10.347l.806 1.266l3.602-2.293z"/></g></svg>' }} />
                                    </div>
                                    <h3>단절된 워크플로우</h3>
                                    <div className="pain-visual">
                                        <div className="workflow-diagram">
                                            <div className="workflow-box">AI</div>
                                            <div className="workflow-arrow broken">
                                                <span className="arrow-line"></span>
                                                <div className="arrow-x" dangerouslySetInnerHTML={{ __html: '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path fill="currentColor" d="M10.03 8.97a.75.75 0 0 0-1.06 1.06L10.94 12l-1.97 1.97a.75.75 0 1 0 1.06 1.06L12 13.06l1.97 1.97a.75.75 0 0 0 1.06-1.06L13.06 12l1.97-1.97a.75.75 0 1 0-1.06-1.06L12 10.94z"/><path fill="currentColor" fill-rule="evenodd" d="M12.057 1.25h-.114c-2.309 0-4.118 0-5.53.19c-1.444.194-2.584.6-3.479 1.494c-.895.895-1.3 2.035-1.494 3.48c-.19 1.411-.19 3.22-.19 5.529v.114c0 2.309 0 4.118.19 5.53c.194 1.444.6 2.584 1.494 3.479c.895.895 2.035 1.3 3.48 1.494c1.411.19 3.22.19 5.529.19h.114c2.309 0 4.118 0 5.53-.19c1.444-.194 2.584-.6 3.479-1.494c.895-.895 1.3-2.035 1.494-3.48c.19-1.411.19-3.22.19-5.529v-.114c0-2.309 0-4.118-.19-5.53c-.194-1.444-.6-2.584-1.494-3.479c-.895-.895-2.035-1.3-3.48-1.494c-1.411-.19-3.22-.19-5.529-.19M3.995 3.995c.57-.57 1.34-.897 2.619-1.069c1.3-.174 3.008-.176 5.386-.176s4.086.002 5.386.176c1.279.172 2.05.5 2.62 1.069c.569.57.896 1.34 1.068 2.619c.174 1.3.176 3.008.176 5.386s-.002 4.086-.176 5.386c-.172 1.279-.5 2.05-1.069 2.62c-.57.569-1.34.896-2.619 1.068c-1.3.174-3.008.176-5.386.176s-4.086-.002-5.386-.176c-1.279-.172-2.05-.5-2.62-1.069c-.569-.57-.896-1.34-1.068-2.619c-.174-1.3-.176-3.008-.176-5.386s.002-4.086.176-5.386c.172-1.279.5-2.05 1.069-2.62" clip-rule="evenodd"/></svg>' }} />
                                            </div>
                                            <div className="workflow-box">Work</div>
                                        </div>
                                    </div>
                                    <p>Ctrl+C, Ctrl+V의 반복은 비효율적입니다. AI가 생성한 결과를 다시 업무 시스템에 복사-붙여넣기하는 과정에서 데이터 흐름이 단절됩니다.</p>
                                    <div className="pain-warning">
                                        <div className="warning-icon-svg" dangerouslySetInnerHTML={{ __html: '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><g fill="none"><circle cx="12" cy="12" r="10" stroke="currentColor" stroke-width="1.5"/><path stroke="currentColor" stroke-linecap="round" stroke-width="1.5" d="M12 7v6"/><circle cx="12" cy="16" r="1" fill="currentColor"/></g></svg>' }} />
                                        <span className="warning-text">데이터 정합성 오류 발생</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Solutions Section */}
                <FeatureSection />

                {/* Revenue Pipelines Section */}
                <section className="section bg-dark-alt revenue-pipelines-section">
                    <div className="container">
                        <div className="text-center reveal">
                            <h2 className="section-title">이렇게 자동화해볼 수 있어요.</h2>
                            <p className="section-subtitle">단순 반복이 아닙니다. 상황을 읽고, 맥락을 파악하고, 사람처럼 움직입니다.</p>
                        </div>
                        
                        <div className="revenue-pipelines-container">
                            <div className="revenue-pipelines-list">
                                <div className={`revenue-pipeline-card premium-card ${expandedCards.includes(0) ? 'expanded' : ''}`}>
                                    <div className="mouse-glow"></div>
                                    <div className="premium-card-inner">
                                        <div 
                                            className="pipeline-card-header"
                                            onClick={() => toggleCard(0)}
                                        >
                                            <div className="pipeline-header-content">
                                                <div className="pipeline-card-number">01</div>
                                                <div className="pipeline-header-text">
                                                    <h3 className="pipeline-card-title">인플루언서 시딩 '관리' 비서</h3>
                                                    <p className="pipeline-card-subtitle">"DM 100개 보낼 멘트 짜느라 머리 싸매지 마세요. 복사만 하세요."</p>
                                                </div>
                                            </div>
                                            <button className="pipeline-toggle-btn" aria-label="펼치기/접기">
                                                {expandedCards.includes(0) ? <ChevronUp size={24} /> : <ChevronDown size={24} />}
                                            </button>
                                        </div>
                                        
                                        <div className={`pipeline-card-content ${expandedCards.includes(0) ? 'expanded' : ''}`}>
                                            <div className="pipeline-flow">
                                                <div className="pipeline-step">
                                                    <div className="pipeline-step-label">Input</div>
                                                    <div className="pipeline-step-content">인플루언서 계정 리스트 (Google Sheet)</div>
                                                </div>
                                                <div className="pipeline-arrow">→</div>
                                                <div className="pipeline-step">
                                                    <div className="pipeline-step-label">AI Action</div>
                                                    <div className="pipeline-step-content">최근 게시물 사진과 캡션을 분석 → <strong>"OO님, 최근 다녀오신 캠핑 사진 색감이 너무 좋네요!"</strong> 같은 <strong>초개인화 DM 멘트</strong> 100개 생성</div>
                                                </div>
                                                <div className="pipeline-arrow">→</div>
                                                <div className="pipeline-step">
                                                    <div className="pipeline-step-label">Output</div>
                                                    <div className="pipeline-step-content">마케터는 생성된 멘트를 복사해서 보내기만 하면 끝. (관리 시트 자동 업데이트)</div>
                                                </div>
                                            </div>
                                            
                                            <div className="pipeline-pain-point">
                                                <svg className="pipeline-pain-point-icon" xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24"><g fill="none" stroke="currentColor" strokeWidth="1.5"><circle cx="12" cy="12" r="10"/><path strokeLinecap="round" strokeLinejoin="round" d="m8 12l2-1.5L8 9m8 3l-2-1.5L16 9m0 7l-1.333-1l-1.334 1L12 15l-1.333 1l-1.334-1L8 16"/></g></svg>
                                                <strong>Pain Point:</strong> 인플루언서 100명의 피드를 다 보고 맞춤형 멘트를 쓰자니 하루가 꼬박 걸리고, 엑셀 정리하다 지칩니다.
                                            </div>
                                            
                                            <div className="pipeline-impact">
                                                <span className="impact-label">Impact:</span>
                                                <span className="impact-value">단순 반복 작업 시간 <strong>70% 단축</strong></span>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <div className={`revenue-pipeline-card premium-card ${expandedCards.includes(1) ? 'expanded' : ''}`}>
                                    <div className="mouse-glow"></div>
                                    <div className="premium-card-inner">
                                        <div 
                                            className="pipeline-card-header"
                                            onClick={() => toggleCard(1)}
                                        >
                                            <div className="pipeline-header-content">
                                                <div className="pipeline-card-number">02</div>
                                                <div className="pipeline-header-text">
                                                    <h3 className="pipeline-card-title">'읽씹' 고객 살려내는 심폐소생술</h3>
                                                    <p className="pipeline-card-subtitle">"거절당한 게 아닙니다. 바빠서 잊혀진 겁니다. 다시 두드리세요."</p>
                                                </div>
                                            </div>
                                            <button className="pipeline-toggle-btn" aria-label="펼치기/접기">
                                                {expandedCards.includes(1) ? <ChevronUp size={24} /> : <ChevronDown size={24} />}
                                            </button>
                                        </div>
                                        
                                        <div className={`pipeline-card-content ${expandedCards.includes(1) ? 'expanded' : ''}`}>
                                            <div className="pipeline-flow">
                                            <div className="pipeline-step">
                                                <div className="pipeline-step-label">Trigger</div>
                                                <div className="pipeline-step-content">견적서 발송 후 '5일간' 메일 수신 없음 감지</div>
                                            </div>
                                            <div className="pipeline-arrow">→</div>
                                            <div className="pipeline-step">
                                                <div className="pipeline-step-label">AI Action</div>
                                                <div className="pipeline-step-content">뻔한 독촉 메일 대신, 고객사 관련 최신 업계 뉴스나 유용한 정보를 섞어 <strong>"부담 없는 안부 인사"</strong> 메일 초안을 생성</div>
                                            </div>
                                            <div className="pipeline-arrow">→</div>
                                            <div className="pipeline-step">
                                                <div className="pipeline-step-label">Output</div>
                                                <div className="pipeline-step-content">담당자 승인 버튼 클릭 시 즉시 발송</div>
                                            </div>
                                        </div>
                                        
                                        <div className="pipeline-pain-point">
                                            <svg className="pipeline-pain-point-icon" xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24"><g fill="none" stroke="currentColor" strokeWidth="1.5"><circle cx="12" cy="12" r="10"/><path strokeLinecap="round" strokeLinejoin="round" d="m8 12l2-1.5L8 9m8 3l-2-1.5L16 9m0 7l-1.333-1l-1.334 1L12 15l-1.333 1l-1.334-1L8 16"/></g></svg>
                                            <strong>Pain Point:</strong> 견적서를 보내고 일주일째 답이 없으면 영업 사원은 거절이라 생각하고 포기합니다. 사실 고객은 단순히 깜빡했을 뿐일 수 있습니다.
                                        </div>
                                        
                                            <div className="pipeline-impact">
                                                <span className="impact-label">Impact:</span>
                                                <span className="impact-value">죽은 리드의 <strong>20%</strong> 회생. 놓칠 뻔한 계약 회수</span>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <div className={`revenue-pipeline-card premium-card ${expandedCards.includes(2) ? 'expanded' : ''}`}>
                                    <div className="mouse-glow"></div>
                                    <div className="premium-card-inner">
                                        <div 
                                            className="pipeline-card-header"
                                            onClick={() => toggleCard(2)}
                                        >
                                            <div className="pipeline-header-content">
                                                <div className="pipeline-card-number">03</div>
                                                <div className="pipeline-header-text">
                                                    <h3 className="pipeline-card-title">검색 상위 노출을 위한 SEO 공장</h3>
                                                    <p className="pipeline-card-subtitle">"키워드만 던지세요. 구글 1페이지를 장악할 글은 AI가 씁니다."</p>
                                                </div>
                                            </div>
                                            <button className="pipeline-toggle-btn" aria-label="펼치기/접기">
                                                {expandedCards.includes(2) ? <ChevronUp size={24} /> : <ChevronDown size={24} />}
                                            </button>
                                        </div>
                                        
                                        <div className={`pipeline-card-content ${expandedCards.includes(2) ? 'expanded' : ''}`}>
                                            <div className="pipeline-flow">
                                            <div className="pipeline-step">
                                                <div className="pipeline-step-label">Input</div>
                                                <div className="pipeline-step-content">타겟 키워드 입력</div>
                                            </div>
                                            <div className="pipeline-arrow">→</div>
                                            <div className="pipeline-step">
                                                <div className="pipeline-step-label">AI Action</div>
                                                <div className="pipeline-step-content">현재 구글 상위 노출 글들의 구조(헤딩, 글자 수)를 분석하여, SEO 점수가 가장 높은 형태로 원고 작성 + 이미지 생성</div>
                                            </div>
                                            <div className="pipeline-arrow">→</div>
                                            <div className="pipeline-step">
                                                <div className="pipeline-step-label">Output</div>
                                                <div className="pipeline-step-content">블로그(Wordpress/Tistory)에 '임시 저장' 상태로 자동 등록</div>
                                            </div>
                                        </div>
                                        
                                        <div className="pipeline-pain-point">
                                            <svg className="pipeline-pain-point-icon" xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24"><g fill="none" stroke="currentColor" strokeWidth="1.5"><circle cx="12" cy="12" r="10"/><path strokeLinecap="round" strokeLinejoin="round" d="m8 12l2-1.5L8 9m8 3l-2-1.5L16 9m0 7l-1.333-1l-1.334 1L12 15l-1.333 1l-1.334-1L8 16"/></g></svg>
                                            <strong>Pain Point:</strong> 광고비는 비싼데 검색 유입이 없습니다. 블로그 글 하나 제대로 쓰려면 시간과 노력이 필요해서 꾸준한 포스팅이 불가능합니다.
                                        </div>
                                        
                                        <div className="pipeline-impact">
                                            <span className="impact-label">Impact:</span>
                                            <span className="impact-value">광고비 <strong>0원</strong>으로 잠재 고객 유입 폭증</span>
                                        </div>
                                        </div>
                                    </div>
                                </div>

                                <div className={`revenue-pipeline-card premium-card ${expandedCards.includes(3) ? 'expanded' : ''}`}>
                                    <div className="mouse-glow"></div>
                                    <div className="premium-card-inner">
                                        <div 
                                            className="pipeline-card-header"
                                            onClick={() => toggleCard(3)}
                                        >
                                            <div className="pipeline-header-content">
                                                <div className="pipeline-card-number">04</div>
                                                <div className="pipeline-header-text">
                                                    <h3 className="pipeline-card-title">초개인화 콜드메일</h3>
                                                    <p className="pipeline-card-subtitle">"복사 붙여넣기 한 제안서는 휴지통으로 직행합니다."</p>
                                                </div>
                                            </div>
                                            <button className="pipeline-toggle-btn" aria-label="펼치기/접기">
                                                {expandedCards.includes(3) ? <ChevronUp size={24} /> : <ChevronDown size={24} />}
                                            </button>
                                        </div>
                                        
                                        <div className={`pipeline-card-content ${expandedCards.includes(3) ? 'expanded' : ''}`}>
                                            <div className="pipeline-flow">
                                            <div className="pipeline-step">
                                                <div className="pipeline-step-label">Input</div>
                                                <div className="pipeline-step-content">타겟 고객의 링크드인/홈페이지 URL</div>
                                            </div>
                                            <div className="pipeline-arrow">→</div>
                                            <div className="pipeline-step">
                                                <div className="pipeline-step-label">AI Action</div>
                                                <div className="pipeline-step-content">프로필을 읽고 "최근 승진 축하드립니다", "올리신 AI 칼럼 인상 깊었습니다" 등 <strong>후킹 포인트(Ice Breaking)</strong>를 찾아내 세상에 하나뿐인 첫 문장을 작성</div>
                                            </div>
                                            <div className="pipeline-arrow">→</div>
                                            <div className="pipeline-step">
                                                <div className="pipeline-step-label">Output</div>
                                                <div className="pipeline-step-content">이메일 발송 툴에 개인화 변수가 적용된 초안 업로드</div>
                                            </div>
                                        </div>
                                        
                                        <div className="pipeline-pain-point">
                                            <svg className="pipeline-pain-point-icon" xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24"><g fill="none" stroke="currentColor" strokeWidth="1.5"><circle cx="12" cy="12" r="10"/><path strokeLinecap="round" strokeLinejoin="round" d="m8 12l2-1.5L8 9m8 3l-2-1.5L16 9m0 7l-1.333-1l-1.334 1L12 15l-1.333 1l-1.334-1L8 16"/></g></svg>
                                            <strong>Pain Point:</strong> 잠재 고객 리스트 100명에게 똑같은 회사소개서를 뿌립니다. 오픈율 3%, 회신율 0%. 스팸 신고만 당하고 브랜드 이미지만 나빠집니다.
                                        </div>
                                        
                                        <div className="pipeline-impact">
                                            <span className="impact-label">Impact:</span>
                                            <span className="impact-value">콜드메일 회신율 <strong>300%</strong> 상승</span>
                                        </div>
                                        </div>
                                    </div>
                                </div>

                                <div className={`revenue-pipeline-card premium-card ${expandedCards.includes(4) ? 'expanded' : ''}`}>
                                    <div className="mouse-glow"></div>
                                    <div className="premium-card-inner">
                                        <div 
                                            className="pipeline-card-header"
                                            onClick={() => toggleCard(4)}
                                        >
                                            <div className="pipeline-header-content">
                                                <div className="pipeline-card-number">05</div>
                                                <div className="pipeline-header-text">
                                                    <h3 className="pipeline-card-title">미팅 전 3분, 고객사 비밀 공략집</h3>
                                                    <p className="pipeline-card-subtitle">"고객사 홈페이지 뉴스란 뒤적거리느라 시간 쓰지 마세요."</p>
                                                </div>
                                            </div>
                                            <button className="pipeline-toggle-btn" aria-label="펼치기/접기">
                                                {expandedCards.includes(4) ? <ChevronUp size={24} /> : <ChevronDown size={24} />}
                                            </button>
                                        </div>
                                        
                                        <div className={`pipeline-card-content ${expandedCards.includes(4) ? 'expanded' : ''}`}>
                                            <div className="pipeline-flow">
                                            <div className="pipeline-step">
                                                <div className="pipeline-step-label">Input</div>
                                                <div className="pipeline-step-content">슬랙에 /조사 [고객사 URL] 입력</div>
                                            </div>
                                            <div className="pipeline-arrow">→</div>
                                            <div className="pipeline-step">
                                                <div className="pipeline-step-label">AI Action</div>
                                                <div className="pipeline-step-content">최근 뉴스(3개월), 링크드인, 신년사를 크롤링하고 인공지능이이 분석하여 제안 포인트 도출</div>
                                            </div>
                                            <div className="pipeline-arrow">→</div>
                                            <div className="pipeline-step">
                                                <div className="pipeline-step-label">Output</div>
                                                <div className="pipeline-step-content">영업 사원에게 <strong>'A4 1장 분량의 공략 리포트'</strong>가 DM으로 도착</div>
                                            </div>
                                        </div>
                                        
                                        <div className="pipeline-pain-point">
                                            <svg className="pipeline-pain-point-icon" xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24"><g fill="none" stroke="currentColor" strokeWidth="1.5"><circle cx="12" cy="12" r="10"/><path strokeLinecap="round" strokeLinejoin="round" d="m8 12l2-1.5L8 9m8 3l-2-1.5L16 9m0 7l-1.333-1l-1.334 1L12 15l-1.333 1l-1.334-1L8 16"/></g></svg>
                                            <strong>Pain Point:</strong> 미팅 전 준비 부족으로 아이스브레이킹에 실패하고, 고객의 진짜 고민을 모른 채 자사 제품 자랑만 하다가 돌아옵니다.
                                        </div>
                                        
                                        <div className="pipeline-impact">
                                            <span className="impact-label">Impact:</span>
                                            <span className="impact-value">미팅 성공률 <strong>2배</strong> 상승. '준비된 파트너' 이미지 구축</span>
                                        </div>
                                        </div>
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
                                <div className="mouse-glow"></div>
                                <div className="premium-card-inner">
                                    <div className="step-number">01</div>
                                    <h3>업무 진단</h3>
                                    <p>현재 업무 중 자동화가 가능한 영역을 식별하고 ROI를 분석합니다.</p>
                                </div>
                            </div>
                            <div className="premium-card process-step reveal delay-2">
                                <div className="mouse-glow"></div>
                                <div className="premium-card-inner">
                                    <div className="step-number">02</div>
                                    <h3>솔루션 설계</h3>
                                    <p>기존 툴과 연동되는 최적의 AI 워크플로우를 설계합니다.</p>
                                </div>
                            </div>
                            <div className="premium-card process-step reveal delay-3">
                                <div className="mouse-glow"></div>
                                <div className="premium-card-inner">
                                    <div className="step-number">03</div>
                                    <h3>구축 및 통합</h3>
                                    <p>AI 에이전트를 구축하고 실제 업무 환경에 통합합니다.</p>
                                </div>
                            </div>
                            <div className="premium-card process-step reveal delay-4">
                                <div className="mouse-glow"></div>
                                <div className="premium-card-inner">
                                    <div className="step-number">04</div>
                                    <h3>최적화</h3>
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
                                <div className="mouse-glow"></div>
                                <div className="premium-card-inner">
                                    <h3>Q. 보안은 안전한가요?</h3>
                                    <p>A. 모든 데이터는 엔터프라이즈급 보안 표준을 준수하며, 고객사의 승인 없이 외부로 유출되지 않습니다. 온프레미스 구축 옵션도 제공합니다.</p>
                                </div>
                            </div>
                            <div className="premium-card faq-item">
                                <div className="mouse-glow"></div>
                                <div className="premium-card-inner">
                                    <h3>Q. 기존에 쓰던 툴을 바꿔야 하나요?</h3>
                                    <p>A. 아니요. <Utomo />의 철학은 'No New Tool'입니다. 현재 사용 중인 Slack, Notion, Excel 등을 그대로 사용하면서 AI 기능만 추가됩니다.</p>
                                </div>
                            </div>
                            <div className="premium-card faq-item">
                                <div className="mouse-glow"></div>
                                <div className="premium-card-inner">
                                    <h3>Q. 도입 비용은 어떻게 되나요?</h3>
                                    <p>A. 자동화 범위와 복잡도에 따라 다릅니다. 무료 진단 신청을 통해 예상 ROI와 견적을 확인하실 수 있습니다.</p>
                                </div>
                            </div>
                            <div className="premium-card faq-item">
                                <div className="mouse-glow"></div>
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
