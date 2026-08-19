import React, { useState, useEffect } from 'react';
import { motion } from 'motion/react';
import { Search, UserCheck, MessageSquare, Mail, FileText, TrendingUp, BarChart3, CreditCard } from 'lucide-react';

interface WorkflowStepItem {
  id: string;
  name: string;
  before: string;
  mobb: string;
  icon: React.ReactNode;
  iconBg: string;
}

const STEPS_DATA: WorkflowStepItem[] = [
  {
    id: 'find',
    name: 'Find creators',
    before: '8-12 hrs',
    mobb: '15 min',
    icon: <Search className="w-3 h-3 text-white" />,
    iconBg: 'bg-purple-600',
  },
  {
    id: 'vet',
    name: 'Vet creators',
    before: '5-8 hrs',
    mobb: '10 min',
    icon: <UserCheck className="w-3 h-3 text-white" />,
    iconBg: 'bg-teal-600',
  },
  {
    id: 'reach',
    name: 'Reach out',
    before: '6-9 hrs',
    mobb: '10 min',
    icon: <MessageSquare className="w-3 h-3 text-white" />,
    iconBg: 'bg-[#e05238]',
  },
  {
    id: 'negotiate',
    name: 'Negotiate and email',
    before: '5-7 hrs',
    mobb: '10 min',
    icon: <Mail className="w-3 h-3 text-white" />,
    iconBg: 'bg-blue-600',
  },
  {
    id: 'contract',
    name: 'Contract and sign',
    before: '4-6 hrs',
    mobb: '0 min',
    icon: <FileText className="w-3 h-3 text-white" />,
    iconBg: 'bg-[#232731]',
  },
  {
    id: 'track',
    name: 'Track performance',
    before: '6-8 hrs',
    mobb: '0 min',
    icon: <TrendingUp className="w-3 h-3 text-white" />,
    iconBg: 'bg-emerald-600',
  },
  {
    id: 'reports',
    name: 'Build reports',
    before: '5-8 hrs',
    mobb: '5 min',
    icon: <BarChart3 className="w-3 h-3 text-white" />,
    iconBg: 'bg-amber-500',
  },
  {
    id: 'payment',
    name: 'Process payment',
    before: '4-7 hrs',
    mobb: '5 min',
    icon: <CreditCard className="w-3 h-3 text-white" />,
    iconBg: 'bg-emerald-600',
  },
];

export function TimeSavingsCard() {
  // Step index state for sequential step-by-step reveal (0 to 10 where 0-7 are steps, 8 is footer summary, 9 is total time pause, then loop)
  const [visibleCount, setVisibleCount] = useState<number>(0);

  useEffect(() => {
    // Reveal steps one by one every 450ms, then pause at step 10 for 3 seconds before resetting
    const timer = setInterval(() => {
      setVisibleCount((prev) => {
        if (prev >= 10) {
          return 0; // Reset loop
        }
        return prev + 1;
      });
    }, 550);

    return () => clearInterval(timer);
  }, []);

  return (
    <section className="w-full py-6 sm:py-10 bg-white">
      {/* Container matching max-w-[1140px] */}
      <div className="w-full max-w-[1140px] mx-auto px-4 sm:px-6 lg:px-0">
        
        {/* Main Dark Container Card */}
        <div className="bg-[#2a2c30] rounded-[32px] sm:rounded-[40px] p-3 sm:p-4 md:p-4 lg:p-4 shadow-xl border border-gray-800 transition-all duration-300">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-5 lg:gap-6 items-center">
            
            {/* Left White Stage (Table Card) */}
            <div className="lg:col-span-7 w-full h-full flex items-center">
              <div className="bg-white rounded-[24px] sm:rounded-[32px] p-5 sm:p-6 shadow-sm border border-gray-100 w-full h-full min-h-[440px] sm:min-h-[470px] lg:min-h-[500px] my-0 mr-0 flex flex-col justify-between select-none">
                
                {/* Table Content */}
                <div className="w-full flex-1 flex flex-col justify-between">
                  {/* Table Header */}
                  <div className="grid grid-cols-12 items-center pb-2.5 mb-1 border-b border-gray-100 text-[9px] sm:text-[10px] font-bold tracking-wider text-gray-400 uppercase shrink-0">
                    <div className="col-span-6 sm:col-span-7 pl-1">STEP</div>
                    <div className="col-span-3 sm:col-span-2 text-center">BEFORE</div>
                    <div className="col-span-3 text-right text-[#e05285] font-black">MOBB</div>
                  </div>

                  {/* Step Rows */}
                  <div className="flex-1 flex flex-col justify-between divide-y divide-gray-50/80 my-1">
                    {STEPS_DATA.map((step, idx) => {
                      const isVisible = visibleCount > idx;
                      return (
                        <motion.div
                          key={step.id}
                          initial={{ opacity: 0, y: 6 }}
                          animate={isVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: 6 }}
                          transition={{ duration: 0.3, ease: 'easeOut' }}
                          className="grid grid-cols-12 items-center py-2 sm:py-2.5 lg:py-2.5 text-xs font-semibold"
                        >
                          {/* Step Name & Icon */}
                          <div className="col-span-6 sm:col-span-7 flex items-center gap-2.5 pl-1">
                            <span className={`w-5.5 h-5.5 rounded-md ${step.iconBg} flex items-center justify-center shrink-0 shadow-xs`}>
                              {step.icon}
                            </span>
                            <span className="text-gray-900 font-bold text-[11px] sm:text-xs tracking-tight">
                              {step.name}
                            </span>
                          </div>

                          {/* Before Time */}
                          <div className="col-span-3 sm:col-span-2 text-center text-gray-400 font-medium text-[11px] sm:text-xs">
                            <span className={visibleCount >= 9 ? 'line-through text-gray-400/80' : ''}>
                              {step.before}
                            </span>
                          </div>

                          {/* Mobb Time */}
                          <div className="col-span-3 text-right font-black text-[11px] sm:text-xs text-[#e05285]">
                            {step.mobb}
                          </div>
                        </motion.div>
                      );
                    })}
                  </div>
                </div>

                {/* Footer Summary Section (Appears after all 8 steps) */}
                <div className="mt-2 pt-2.5 sm:mt-3 sm:pt-3 border-t border-gray-100/90 shrink-0">
                  {/* Summary Row 1: Tools used */}
                  <motion.div
                    initial={{ opacity: 0 }}
                    animate={visibleCount >= 8 ? { opacity: 1 } : { opacity: 0 }}
                    transition={{ duration: 0.3 }}
                    className="grid grid-cols-12 items-center py-0.5 text-[11px] font-semibold"
                  >
                    <div className="col-span-6 sm:col-span-7 pl-1 text-gray-500 font-medium">Tools used</div>
                    <div className="col-span-3 sm:col-span-2 text-center text-gray-400 font-medium text-[11px]">
                      <span className={visibleCount >= 9 ? 'line-through' : ''}>10 tools</span>
                    </div>
                    <div className="col-span-3 text-right font-black text-[#e05285] text-[11px]">1 platform</div>
                  </motion.div>

                  {/* Summary Row 2: Total time */}
                  <motion.div
                    initial={{ opacity: 0 }}
                    animate={visibleCount >= 9 ? { opacity: 1 } : { opacity: 0 }}
                    transition={{ duration: 0.3 }}
                    className="grid grid-cols-12 items-center pt-1.5 text-xs font-bold"
                  >
                    <div className="col-span-6 sm:col-span-7 pl-1 text-gray-900 font-extrabold text-xs sm:text-[13px]">Total time</div>
                    <div className="col-span-3 sm:col-span-2 text-center text-gray-400 font-semibold text-xs sm:text-[13px]">
                      <span className="line-through decoration-2 decoration-gray-400">43-67 hrs</span>
                    </div>
                    <div className="col-span-3 text-right font-black text-[#e05285] text-xs sm:text-sm">55 min</div>
                  </motion.div>
                </div>

              </div>
            </div>

            {/* Right Content Column */}
            <div className="lg:col-span-5 text-left text-white flex flex-col justify-center p-3 sm:p-5 lg:p-6 lg:pr-6">
              
              {/* Big Hours Headline */}
              <div className="flex items-center gap-3 sm:gap-4 mb-5 flex-wrap">
                <span className="text-4xl sm:text-5xl md:text-[52px] font-black text-gray-500/80 line-through decoration-gray-500 tracking-tight">
                  55 hours
                </span>
                <span className="text-4xl sm:text-5xl md:text-[52px] font-black text-white tracking-tight">
                  55 min
                </span>
              </div>

              {/* Description */}
              <p className="text-gray-300 text-sm sm:text-base leading-relaxed mb-8 font-normal max-w-md">
                Status emails, payment approvals, and manual reporting run automatically on Mobb. Your team gets that time back.
              </p>

              {/* White Action Button */}
              <div>
                <a
                  href="#search"
                  className="inline-flex items-center justify-center bg-white hover:bg-gray-100 text-gray-900 text-sm sm:text-base font-extrabold px-7 py-3.5 rounded-2xl transition-all shadow-md active:scale-95"
                >
                  Get Started Free
                </a>
              </div>

            </div>

          </div>
        </div>

      </div>
    </section>
  );
}
