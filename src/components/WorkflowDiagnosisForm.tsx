'use client';

import React, { useState, useEffect, useRef } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { X } from 'lucide-react';
import { IconifyIcon } from '@/components/IconifyIcon';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';

type TTag = {
    key: string;
    name: string;
};

type MultipleSelectProps = {
    tags: TTag[];
    onChange?: (value: TTag[]) => void;
    defaultValue?: TTag[];
};

const MultipleSelect = ({
    tags,
    onChange,
    defaultValue,
}: MultipleSelectProps) => {
    const [selected, setSelected] = useState<TTag[]>(defaultValue ?? []);
    const containerRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        onChange?.(selected);
    }, [selected]);

    const onSelect = (item: TTag) => {
        setSelected((prev) => [...prev, item]);
    };

    const onDeselect = (item: TTag) => {
        setSelected((prev) => prev.filter((i) => i !== item));
    };

    return (
        <AnimatePresence mode={'popLayout'}>
            <div className={'flex w-full flex-col gap-2'}>
                <motion.div
                    layout
                    ref={containerRef}
                    className='selected no-scrollbar flex min-h-[80px] w-full items-start flex-wrap gap-2 rounded-2xl border border-white/10 bg-white/5 p-3 backdrop-blur-sm'
                >
                    <motion.div layout className='flex items-center flex-wrap gap-2'>
                        {selected?.map((item) => (
                            <motion.div
                                layout
                                layoutId={item?.key}
                                key={item?.key}
                                className={'cursor-pointer rounded-xl bg-primary/20 border border-primary/40 px-4 py-2 text-base font-medium text-primary'}
                            >
                                <div className='flex items-center gap-2'>
                                    <motion.span layout className={'text-nowrap'}>
                                        {item?.name}
                                    </motion.span>
                                    <button type="button" onClick={() => onDeselect(item)}>
                                        <X size={14} />
                                    </button>
                                </div>
                            </motion.div>
                        ))}
                    </motion.div>
                </motion.div>
                {tags?.length > selected?.length && (
                    <div className='flex w-full flex-wrap gap-2 rounded-2xl border border-white/10 bg-white/5 p-4 backdrop-blur-sm'>
                        {tags
                            ?.filter((item) => !selected?.some((i) => i.key === item.key))
                            .map((item) => (
                                <motion.div
                                    layout
                                    layoutId={item?.key}
                                    onClick={() => onSelect(item)}
                                    key={item?.key}
                                    className={'cursor-pointer rounded-xl bg-white/5 border border-white/10 px-4 py-2 text-base font-medium text-gray-400 hover:bg-primary/10 hover:border-primary/40 hover:text-primary transition-all'}
                                >
                                    <motion.span layout className={'text-nowrap'}>
                                        {item?.name}
                                    </motion.span>
                                </motion.div>
                            ))}
                    </div>
                )}
            </div>
        </AnimatePresence>
    );
};

interface WorkflowDiagnosisFormProps {
    onSubmit?: (data: any) => void;
}

export const WorkflowDiagnosisForm: React.FC<WorkflowDiagnosisFormProps> = ({ onSubmit }) => {
    const [formData, setFormData] = useState({
        companyName: '',
        contactPerson: '',
        phoneNumber: '',
        email: '',
        tools: [] as TTag[],
        problemDescription: '',
    });

    const [isHovering, setIsHovering] = useState(false);
    const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
    const containerRef = useRef<HTMLDivElement>(null);
    const blobRef = useRef<HTMLDivElement>(null);

    const toolOptions: TTag[] = [
        { key: 'slack', name: 'Slack' },
        { key: 'notion', name: 'Notion' },
        { key: 'excel', name: 'Excel' },
        { key: 'email', name: 'Email' },
        { key: 'asana', name: 'Asana' },
        { key: 'jira', name: 'Jira' },
        { key: 'teams', name: 'Microsoft Teams' },
        { key: 'google-workspace', name: 'Google Workspace' },
        { key: 'monday', name: 'Monday' },
        { key: 'figma', name: 'Figma' },
        { key: 'kakaotalk', name: 'Kakaotalk' },
        { key: 'telegram', name: 'Telegram' },
        { key: 'etc', name: 'etc.' },
    ];

    useEffect(() => {
        const handleMouseMove = (e: MouseEvent) => {
            if (containerRef.current) {
                const rect = containerRef.current.getBoundingClientRect();
                const x = e.clientX - rect.left;
                const y = e.clientY - rect.top;
                setMousePosition({ x, y });
            }
        };

        document.addEventListener('mousemove', handleMouseMove);
        return () => {
            document.removeEventListener('mousemove', handleMouseMove);
        };
    }, []);

    useEffect(() => {
        if (blobRef.current && isHovering) {
            blobRef.current.style.transform = `translate(${mousePosition.x - 150}px, ${mousePosition.y - 150}px)`;
        }
    }, [mousePosition, isHovering]);

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const { name, value } = e.target;
        setFormData((prev) => ({ ...prev, [name]: value }));
    };

    const handleToolsChange = (tools: TTag[]) => {
        setFormData((prev) => ({ ...prev, tools }));
    };

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        
        // 최소 하나의 도구가 선택되었는지 확인
        if (!formData.tools || formData.tools.length === 0) {
            alert('최소 하나 이상의 업무 도구를 선택해주세요.');
            return;
        }
        
        onSubmit?.(formData);
        console.log('Form submitted:', formData);
    };

    return (
        <div
            ref={containerRef}
            onMouseEnter={() => setIsHovering(true)}
            onMouseLeave={() => setIsHovering(false)}
            className="relative w-full overflow-hidden bg-black/40 rounded-3xl border border-primary/10 p-0.5 md:p-1 hover:border-primary transition-all duration-300"
        >
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[size:20px_20px]" />

            <div
                ref={blobRef}
                className="absolute w-[300px] h-[300px] rounded-full opacity-30 blur-3xl transition-transform duration-100 ease-out pointer-events-none"
                style={{
                    background: 'radial-gradient(circle, rgba(223,255,0,0.4) 0%, rgba(223,255,0,0.1) 50%, transparent 100%)',
                }}
            />

            <div
                className="absolute inset-0 opacity-20 pointer-events-none"
                style={{
                    background: `radial-gradient(circle at ${mousePosition.x}px ${mousePosition.y}px, rgba(223,255,0,0.15) 0%, transparent 50%)`,
                }}
            />

            <div className="relative z-10 w-full">
                <div className="relative rounded-2xl bg-black/60 backdrop-blur-xl overflow-hidden">
                    <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-primary/5" />

                    <div className="relative p-[10px] md:p-10">
                        <div className="mb-8 text-center">
                            <motion.div
                                initial={{ scale: 0.9, opacity: 0 }}
                                whileInView={{ scale: 1, opacity: 1 }}
                                viewport={{ once: true }}
                                className="inline-flex items-center justify-center w-14 h-14 mb-4 rounded-full bg-gradient-to-br from-primary to-primary/80 shadow-lg shadow-primary/20"
                            >
                                <IconifyIcon icon="solar:buildings-2-linear" width="28px" height="28px" className="text-black" />
                            </motion.div>
                            <h2 className="text-2xl md:text-4xl font-extrabold text-white mb-3 tracking-tight">
                                무료 워크플로우 진단 신청
                            </h2>
                            <p className="text-gray-400 text-base md:text-lg max-w-2xl mx-auto leading-relaxed px-4">
                                귀사의 업무 프로세스를 분석하여 최적의 자동화 솔루션을 제안해 드립니다.
                            </p>
                        </div>

                        <form onSubmit={handleSubmit} className="space-y-6">
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                <div className="space-y-2">
                                    <Label htmlFor="companyName" className="text-gray-400 text-sm md:text-base font-medium flex items-center gap-2 mb-2">
                                        <IconifyIcon icon="solar:buildings-2-linear" width="16px" height="16px" className="text-primary" />
                                        회사명
                                    </Label>
                                    <Input
                                        id="companyName"
                                        name="companyName"
                                        value={formData.companyName}
                                        onChange={handleChange}
                                        placeholder="utomo 주식회사"
                                        required
                                        className="bg-white/5 border-white/10 text-white text-lg md:text-xl font-semibold h-14 md:h-16 px-4 md:px-6 rounded-2xl placeholder:text-gray-600 focus:border-primary focus:ring-primary/20 transition-all"
                                    />
                                </div>

                                <div className="space-y-2">
                                    <Label htmlFor="contactPerson" className="text-gray-400 text-sm md:text-base font-medium flex items-center gap-2 mb-2">
                                        <IconifyIcon icon="solar:user-linear" width="16px" height="16px" className="text-primary" />
                                        담당자명
                                    </Label>
                                    <Input
                                        id="contactPerson"
                                        name="contactPerson"
                                        value={formData.contactPerson}
                                        onChange={handleChange}
                                        placeholder="홍길동"
                                        required
                                        className="bg-white/5 border-white/10 text-white text-lg md:text-xl font-semibold h-14 md:h-16 px-4 md:px-6 rounded-2xl placeholder:text-gray-600 focus:border-primary focus:ring-primary/20 transition-all"
                                    />
                                </div>
                            </div>

                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                <div className="space-y-2">
                                    <Label htmlFor="phoneNumber" className="text-gray-400 text-sm md:text-base font-medium flex items-center gap-2 mb-2">
                                        <IconifyIcon icon="solar:phone-calling-linear" width="16px" height="16px" className="text-primary" />
                                        연락처
                                    </Label>
                                    <Input
                                        id="phoneNumber"
                                        name="phoneNumber"
                                        type="tel"
                                        value={formData.phoneNumber}
                                        onChange={handleChange}
                                        placeholder="010-0000-0000"
                                        required
                                        className="bg-white/5 border-white/10 text-white text-lg md:text-xl font-semibold h-14 md:h-16 px-4 md:px-6 rounded-2xl placeholder:text-gray-600 focus:border-primary focus:ring-primary/20 transition-all"
                                    />
                                </div>

                                <div className="space-y-2">
                                    <Label htmlFor="email" className="text-gray-400 text-sm md:text-base font-medium flex items-center gap-2 mb-2">
                                        <IconifyIcon icon="solar:letter-linear" width="16px" height="16px" className="text-primary" />
                                        이메일
                                    </Label>
                                    <Input
                                        id="email"
                                        name="email"
                                        type="email"
                                        value={formData.email}
                                        onChange={handleChange}
                                        placeholder="info@utomo.co.kr"
                                        required
                                        className="bg-white/5 border-white/10 text-white text-lg md:text-xl font-semibold h-14 md:h-16 px-4 md:px-6 rounded-2xl placeholder:text-gray-600 focus:border-primary focus:ring-primary/20 transition-all"
                                    />
                                </div>
                            </div>

                            <div className="space-y-2">
                                <Label className="text-gray-400 text-sm md:text-base font-medium mb-2 block">
                                    현재 사용 중인 도구 (복수 선택)
                                </Label>
                                <MultipleSelect
                                    tags={toolOptions}
                                    onChange={handleToolsChange}
                                    defaultValue={[]}
                                />
                            </div>

                            <div className="space-y-2">
                                <Label htmlFor="problemDescription" className="text-gray-400 text-sm md:text-base font-medium mb-2 block">
                                    해결하고 싶은 업무 과제
                                </Label>
                                <Textarea
                                    id="problemDescription"
                                    name="problemDescription"
                                    value={formData.problemDescription}
                                    onChange={handleChange}
                                    placeholder="현재 겪고 계신 업무상의 병목 현상이나 자동화가 필요한 부분을 자유롭게 적어주세요."
                                    required
                                    className="min-h-[120px] md:min-h-[150px] bg-white/5 border-white/10 text-white text-base md:text-lg font-medium p-4 md:p-6 rounded-2xl placeholder:text-gray-600 focus:border-primary focus:ring-primary/20 resize-none transition-all"
                                />
                            </div>

                            <Button
                                type="submit"
                                className="w-full bg-primary hover:bg-primary-hover text-black font-extrabold py-6 md:py-8 rounded-2xl shadow-[0_0_40px_rgba(223,255,0,0.2)] transition-all duration-300 hover:shadow-[0_0_60px_rgba(223,255,0,0.4)] hover:scale-[1.01] md:hover:scale-[1.02] text-lg md:text-xl"
                            >
                                진단 리포트 신청하기
                            </Button>
                        </form>

                        <div className="mt-6 text-center text-xs text-gray-500">
                            신청 후 24시간 이내에 전문 컨설턴트가 연락드립니다.
                        </div>
                    </div>
                </div>
            </div>

        </div>
    );
};
