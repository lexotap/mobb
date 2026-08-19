import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';

interface ToolIcon {
  id: string;
  name: string;
  x: number; // Desktop orbital offset X from center
  y: number; // Desktop orbital offset Y from center
  mobileX: number; // Mobile orbital offset X
  mobileY: number; // Mobile orbital offset Y
  renderSvg: () => React.ReactNode;
}

const TOOLS: ToolIcon[] = [
  {
    id: 'gmail',
    name: 'Gmail',
    x: -60,
    y: -130,
    mobileX: -20,
    mobileY: -95,
    renderSvg: () => (
      <svg className="w-5 h-5 sm:w-6 sm:h-6" viewBox="0 0 24 24" fill="none">
        <path d="M1.5 18V6c0-1.1.9-2 2-2h17c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2h-17c-1.1 0-2-.9-2-2z" fill="#F2F2F2" />
        <path d="M22.5 6l-10.5 7.5L1.5 6" stroke="#EA4335" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M1.5 6v12h4.5V9.75L12 14.25l6-4.5V18h4.5V6L12 13.5 1.5 6z" fill="#EA4335" />
        <path d="M18 18h4.5V6L18 9v9z" fill="#4285F4" />
        <path d="M1.5 18H6V9L1.5 6v12z" fill="#34A853" />
        <path d="M6 18h12V9.75L12 14.25 6 9.75V18z" fill="#FBBC04" />
      </svg>
    ),
  },
  {
    id: 'paypal',
    name: 'PayPal',
    x: 40,
    y: 130,
    mobileX: 20,
    mobileY: 90,
    renderSvg: () => (
      <svg className="w-5 h-5 sm:w-6 sm:h-6" viewBox="0 0 24 24" fill="none">
        <path d="M7.076 21.337H2.47a.641.641 0 01-.633-.74L4.944 3.72a.856.856 0 01.848-.72h6.248c2.408 0 4.19.508 5.163 1.472.937.93 1.258 2.316.953 4.116-.08.472-.224.965-.432 1.464-.816 1.956-2.457 3.23-4.747 3.684a14.215 14.215 0 01-1.895.127H8.847a.856.856 0 00-.848.72l-1.17 7.156h.247z" fill="#003087" />
        <path d="M18.157 8.592c-.08.472-.224.965-.432 1.464-.816 1.956-2.457 3.23-4.747 3.684a14.215 14.215 0 01-1.895.127H8.847a.856.856 0 00-.848.72l-1.037 6.345a.642.642 0 00.633.745h3.692a.856.856 0 00.848-.72l.85-5.21h1.56c3.21 0 5.717-1.302 6.44-5.07.316-1.644.053-2.986-.835-3.88z" fill="#0079C1" />
      </svg>
    ),
  },
  {
    id: 'quickbooks',
    name: 'QuickBooks',
    x: -200,
    y: -30,
    mobileX: -85,
    mobileY: -20,
    renderSvg: () => (
      <div className="w-6 h-6 sm:w-7 sm:h-7 rounded-full bg-[#2CA01C] flex items-center justify-center text-white font-extrabold text-[10px] sm:text-[11px] tracking-tighter">
        qb
      </div>
    ),
  },
  {
    id: 'docusign',
    name: 'DocuSign',
    x: -120,
    y: 110,
    mobileX: -65,
    mobileY: 70,
    renderSvg: () => (
      <div className="flex flex-col items-center justify-center">
        <div className="flex items-center gap-0.5">
          <div className="w-2 h-2 sm:w-2.5 sm:h-2.5 bg-[#1F3362] rounded-xs" />
          <div className="w-2 h-2 sm:w-2.5 sm:h-2.5 bg-[#FF3B00] rounded-xs" />
        </div>
        <span className="text-[7px] sm:text-[8px] font-bold text-gray-900 tracking-tighter mt-0.5">docusign</span>
      </div>
    ),
  },
  {
    id: 'excel',
    name: 'Excel',
    x: -80,
    y: -20,
    mobileX: -45,
    mobileY: -15,
    renderSvg: () => (
      <div className="w-6 h-6 sm:w-7 sm:h-7 bg-[#107C41] rounded-lg flex items-center justify-center text-white font-black text-xs shadow-xs">
        X
      </div>
    ),
  },
  {
    id: 'chatgpt',
    name: 'ChatGPT',
    x: 100,
    y: -150,
    mobileX: 55,
    mobileY: -90,
    renderSvg: () => (
      <div className="w-6 h-6 sm:w-7 sm:h-7 rounded-lg bg-[#10A37F]/10 border border-[#10A37F]/30 flex items-center justify-center">
        <svg className="w-4 h-4 sm:w-5 sm:h-5 text-[#10A37F]" viewBox="0 0 24 24" fill="currentColor">
          <path d="M22.2819 9.8211a5.9847 5.9847 0 0 0-.5157-4.9108 6.0462 6.0462 0 0 0-6.5098-2.9A6.0651 6.0651 0 0 0 4.9807 4.1818a5.9847 5.9847 0 0 0-3.9977 2.9 6.0462 6.0462 0 0 0 .7427 7.0966 5.98 5.98 0 0 0 .511 4.9107 6.051 6.051 0 0 0 6.5146 2.9001A5.9847 5.9847 0 0 0 13.259 23.99a6.056 6.056 0 0 0 5.7607-3.99 5.98 5.98 0 0 0 3.9977-2.9001 6.056 6.056 0 0 0-.7355-7.2788zm-11.238 12.3392a4.249 4.249 0 0 1-2.5292-.8431l.1436-.0814 3.7915-2.1912a.8858.8858 0 0 0 .4452-.766v-5.3524l1.6038.9288v4.4428a4.2682 4.2682 0 0 1-3.4549 3.8625zm-8.8184-4.83a4.2538 4.2538 0 0 1-.3639-2.633l.1484.0862 3.7915 2.1864a.8954.8954 0 0 0 .8904 0l4.6342-2.676v1.8528l-3.8441 2.22c-1.3405.7708-3.0448.6025-4.2565-.0384zm-1.125-9.8738a4.2586 4.2586 0 0 1 2.1653-1.789l.0048.1675v4.3853a.8858.8858 0 0 0 .4452.766l4.6342 2.676-1.6038.9288-3.8441-2.22a4.2682 4.2682 0 0 1-1.8016-4.9146zm15.4294 3.7628-4.6342-2.676 1.6038-.9288 3.8441 2.22a4.2682 4.2682 0 0 1 1.8016 4.9146 4.2586 4.2586 0 0 1-2.1653 1.7891l-.0048-.1675v-4.3853a.8858.8858 0 0 0-.4452-.766zm2.4176-2.5326-.1484-.0862-3.7915-2.1864a.8954.8954 0 0 0-.8904 0l-4.6342 2.676v-1.8528l3.8441-2.22c1.3405-.7708 3.0448-.6025 4.2565.0384a4.2538 4.2538 0 0 1 .3639 2.633zm-9.3067-7.3972a4.249 4.249 0 0 1 2.5292.8431l-.1436.0814-3.7915 2.1912a.8858.8858 0 0 0-.4452.766v5.3524l-1.6038-.9288v-4.4428a4.2682 4.2682 0 0 1 3.4549-3.8625zm-2.0729 7.378 2.6282-1.5176 2.6282 1.5176v3.0352l-2.6282 1.5176-2.6282-1.5176z" />
        </svg>
      </div>
    ),
  },
  {
    id: 'venmo',
    name: 'Venmo',
    x: 200,
    y: 80,
    mobileX: 85,
    mobileY: 40,
    renderSvg: () => (
      <span className="text-[9px] sm:text-[10px] font-black italic text-[#008CFF] tracking-tight">venmo</span>
    ),
  },
  {
    id: 'instagram',
    name: 'Instagram',
    x: 230,
    y: -20,
    mobileX: 85,
    mobileY: -25,
    renderSvg: () => (
      <svg className="w-5 h-5 sm:w-6 sm:h-6 text-[#E4405F]" viewBox="0 0 24 24" fill="currentColor">
        <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
      </svg>
    ),
  },
  {
    id: 'tiktok',
    name: 'TikTok',
    x: 170,
    y: 150,
    mobileX: 65,
    mobileY: 85,
    renderSvg: () => (
      <svg className="w-5 h-5 sm:w-6 sm:h-6 text-black" viewBox="0 0 24 24" fill="currentColor">
        <path d="M12.525.02c1.31-.02 2.61-.01 3.91-.02.08 1.53.63 3.09 1.75 4.17 1.12 1.11 2.7 1.62 4.24 1.79v4.03c-1.44-.05-2.89-.35-4.2-.97-.57-.26-1.1-.59-1.62-.93-.01 2.92.01 5.84-.02 8.75-.08 1.4-.54 2.79-1.35 3.94-1.31 1.92-3.58 3.17-5.91 3.21-1.43.08-2.86-.31-4.08-1.03-2.02-1.19-3.44-3.37-3.65-5.71-.02-.5-.03-1-.01-1.49.18-1.9 1.12-3.72 2.58-4.96 1.66-1.44 3.98-2.13 6.15-1.72.02 1.48-.04 2.96-.04 4.44-.99-.32-2.15-.23-3.02.37-.63.41-1.11 1.04-1.28 1.76-.23.94.02 1.97.63 2.73.6.77 1.58 1.2 2.56 1.17.93-.01 1.83-.45 2.39-1.18.52-.66.8-1.5.82-2.34.03-4.22.01-8.44.02-12.66z" />
      </svg>
    ),
  },
  {
    id: 'slack',
    name: 'Slack',
    x: -160,
    y: -140,
    mobileX: -65,
    mobileY: -75,
    renderSvg: () => (
      <svg className="w-5 h-5 sm:w-6 sm:h-6" viewBox="0 0 24 24" fill="none">
        <path d="M5.042 15.165a2.528 2.528 0 01-2.52 2.523A2.528 2.528 0 010 15.165a2.527 2.527 0 012.522-2.52h2.52v2.52zM6.313 15.165a2.527 2.527 0 012.521-2.52 2.527 2.527 0 012.521 2.52v6.313A2.528 2.528 0 018.834 24a2.528 2.528 0 01-2.521-2.522v-6.313z" fill="#E01E5A" />
        <path d="M8.834 5.042a2.528 2.528 0 01-2.521-2.52A2.528 2.528 0 018.834 0a2.528 2.528 0 012.521 2.522v2.52H8.834zM8.834 6.313a2.528 2.528 0 012.521 2.521 2.528 2.528 0 01-2.521 2.521H2.522A2.528 2.528 0 010 8.834a2.528 2.528 0 012.522-2.521h6.312z" fill="#36C5F0" />
        <path d="M18.956 8.834a2.528 2.528 0 012.522-2.521A2.528 2.528 0 0124 8.834a2.528 2.528 0 01-2.522 2.521h-2.522V8.834zM17.688 8.834a2.528 2.528 0 01-2.523 2.521 2.527 2.527 0 01-2.52-2.521V2.522A2.527 2.527 0 0115.165 0a2.528 2.528 0 012.523 2.522v6.312z" fill="#2EB67D" />
        <path d="M15.165 18.956a2.528 2.528 0 012.523 2.522A2.528 2.528 0 0115.165 24a2.528 2.528 0 01-2.52-2.522v-2.522h2.52zM15.165 17.688a2.528 2.528 0 01-2.52-2.523 2.528 2.528 0 012.52-2.52h6.313A2.528 2.528 0 0124 15.165a2.528 2.528 0 01-2.522 2.523h-6.313z" fill="#ECB22E" />
      </svg>
    ),
  },
];

interface PlatformHighlightCardProps {
  onNavigate?: (page: 'home' | 'search-creators' | 'creator-chat' | 'performance-tracking' | 'campaign-briefs' | 'secure-global-payments' | 'team-workspace' | 'bring-manage-creators' | 'marketing-teams' | 'agencies' | 'founders' | 'ugc-for-ads' | 'influencer-marketing' | 'affiliate-marketing' | 'pricing' | 'for-creators' | 'case-studies') => void;
  onOpenSignUp?: (role?: 'creator' | 'brand') => void;
}

export function PlatformHighlightCard({ onNavigate, onOpenSignUp }: PlatformHighlightCardProps) {
  // Animation loop phases: 'logo' (0-1.8s) -> 'burst' (1.8s-4.6s) -> 'implode' (4.6s-5.8s) -> repeat
  const [phase, setPhase] = useState<'logo' | 'burst' | 'implode'>('logo');
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 640);
    };
    checkMobile();
    window.addEventListener('resize', checkMobile);

    const runSequence = () => {
      setPhase('logo');
      const t1 = setTimeout(() => {
        setPhase('burst');
      }, 1800);
      const t2 = setTimeout(() => {
        setPhase('implode');
      }, 4600);
      return () => {
        clearTimeout(t1);
        clearTimeout(t2);
      };
    };

    const cleanupFirst = runSequence();
    const interval = setInterval(runSequence, 6000);

    return () => {
      cleanupFirst();
      clearInterval(interval);
      window.removeEventListener('resize', checkMobile);
    };
  }, []);

  return (
    <section className="w-full py-6 sm:py-10 bg-white">
      {/* Container matching max-w-[1140px] */}
      <div className="w-full max-w-[1140px] mx-auto px-4 sm:px-6 lg:px-0">
        
        {/* Main Pastel Pink Canvas Box */}
        <div className="bg-[#f8cfd6] rounded-[32px] sm:rounded-[40px] p-3 sm:p-4 md:p-4 lg:p-4 shadow-sm transition-all duration-300">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-5 lg:gap-6 items-center">
            
            {/* Left Content Column */}
            <div className="lg:col-span-5 p-3 sm:p-5 lg:p-6 lg:pl-6 flex flex-col justify-center text-left">
              <h2 className="text-3xl sm:text-4xl md:text-[44px] font-black text-gray-900 tracking-tight leading-[1.08] mb-5">
                Replace 10 tools with 1 platform
              </h2>

              <p className="text-gray-800 text-sm sm:text-base leading-relaxed mb-8 font-normal max-w-md">
                Search. Brief. Negotiate. Approve. Pay. Report. Most teams run each of these in a different tool. Mobb runs all of them in one place.
              </p>

              <div>
                <button
                  onClick={() => onNavigate?.('search-creators')}
                  className="inline-flex items-center justify-center bg-[#282a2e] hover:bg-black text-white text-sm sm:text-base font-bold px-7 py-3.5 rounded-2xl transition-all shadow-md active:scale-95 cursor-pointer"
                >
                  Get Started Free
                </button>
              </div>
            </div>

            {/* Right White Stage Column */}
            <div className="lg:col-span-7 w-full h-full flex items-center">
              <div className="bg-white rounded-[24px] sm:rounded-[32px] w-full h-full min-h-[360px] sm:min-h-[410px] md:min-h-[440px] lg:min-h-[460px] my-0 mr-0 relative overflow-hidden flex items-center justify-center p-4 sm:p-6 shadow-xs border border-white/80 select-none">
                
                {/* Central Stage Container */}
                <div className="relative w-full h-full flex items-center justify-center">
                  
                  {/* Central Mobb Platform Logo (Step 1 & Step 4) */}
                  <AnimatePresence>
                    {phase === 'logo' && (
                      <motion.div
                        key="mobb-logo"
                        initial={{ opacity: 0, scale: 0.6 }}
                        animate={{ opacity: 1, scale: 1.05 }}
                        exit={{ opacity: 0, scale: 0.7 }}
                        transition={{ duration: 0.5, ease: 'easeOut' }}
                        className="absolute z-20 flex items-center gap-2"
                      >
                        <span className="text-2xl sm:text-3xl font-black text-gray-900 tracking-tighter">
                          mobb
                        </span>
                        {/* Pink Chat Bubble Icon */}
                        <div className="relative w-6 h-6 sm:w-7 sm:h-7">
                          <div className="absolute top-0 right-0 w-4 h-4 sm:w-5 sm:h-5 bg-[#eb618a] rounded-full opacity-90" />
                          <div className="absolute bottom-0 left-0 w-4 h-4 sm:w-5 sm:h-5 bg-[#eb618a]/70 rounded-full" />
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>

                  {/* 10 Tool Icon Badges (Step 2: Burst Outward, Step 3: Implode Inward) */}
                  {TOOLS.map((tool, idx) => {
                    const isVisible = phase === 'burst';
                    const isImploding = phase === 'implode';
                    const targetX = isMobile ? tool.mobileX : tool.x;
                    const targetY = isMobile ? tool.mobileY : tool.y;

                    return (
                      <motion.div
                        key={tool.id}
                        className="absolute z-10"
                        initial={{ opacity: 0, scale: 0, x: 0, y: 0 }}
                        animate={
                          isVisible
                            ? {
                                opacity: 1,
                                scale: 1,
                                x: targetX,
                                y: targetY,
                              }
                            : isImploding
                            ? {
                                opacity: 0,
                                scale: 0,
                                x: 0,
                                y: 0,
                              }
                            : {
                                opacity: 0,
                                scale: 0,
                                x: 0,
                                y: 0,
                              }
                        }
                        transition={
                          isVisible
                            ? {
                                type: 'spring',
                                stiffness: 90,
                                damping: 12,
                                delay: idx * 0.03, // subtle staggered burst
                              }
                            : isImploding
                            ? {
                                duration: 0.5,
                                ease: 'easeInOut',
                                delay: (TOOLS.length - idx) * 0.02, // concentric implosion
                              }
                            : { duration: 0.3 }
                        }
                      >
                        {/* Responsive Tool Badge Card */}
                        <div className="flex items-center justify-center bg-white rounded-xl sm:rounded-2xl p-2 sm:p-3 shadow-md sm:shadow-lg border border-gray-100/80 hover:scale-110 transition-transform cursor-pointer w-10 h-10 sm:w-13 sm:h-13 min-w-[40px] min-h-[40px] sm:min-w-[52px] sm:min-h-[52px]">
                          {tool.renderSvg()}
                        </div>
                      </motion.div>
                    );
                  })}

                </div>

              </div>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
}
