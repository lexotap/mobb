import React, { useState } from 'react';

// Theme definitions for interactive small cards using Case Study Brands
const MARKETING_THEMES = [
  {
    query: 'hospitality & travel',
    items: [
      { name: '@marriottbonvoy', stats: '1.2M · 5.4% ER', price: '$350', color: '#e11d48' },
      { name: '@thedorianhotel', stats: '84.5K · 7.2% ER', price: '$220', color: '#059669' }
    ]
  },
  {
    query: 'fashion & apparel',
    items: [
      { name: '@snagtights', stats: '240K · 6.8% ER', price: '$280', color: '#ec4899' },
      { name: '@orakiclothing', stats: '68.2K · 8.1% ER', price: '$190', color: '#0891b2' }
    ]
  },
  {
    query: 'culinary & lifestyle',
    items: [
      { name: '@mille.yyc', stats: '52.4K · 9.4% ER', price: '$160', color: '#d97706' },
      { name: '@omnipet', stats: '118K · 6.2% ER', price: '$240', color: '#10b981' }
    ]
  }
];

const AGENCY_THEMES = [
  [
    { name: 'Marriott Bonvoy', active: '12 active', char: 'M', bg: '#e11d48' },
    { name: 'Porsche Canada', active: '8 active', char: 'P', bg: '#2563eb', selected: true },
    { name: 'Mille Restaurant', active: '4 active', char: 'M', bg: '#d97706' }
  ],
  [
    { name: 'The Dorian Hotel', active: '6 active', char: 'D', bg: '#059669' },
    { name: 'Snag Tights', active: '15 active', char: 'S', bg: '#ec4899', selected: true },
    { name: 'Oraki Apparel', active: '5 active', char: 'O', bg: '#0891b2' }
  ],
  [
    { name: 'Omni Pet', active: '9 active', char: 'O', bg: '#10b981' },
    { name: 'Wealthsimple', active: '18 active', char: 'W', bg: '#6366f1', selected: true },
    { name: 'Bakesy App', active: '7 active', char: 'B', bg: '#f43f5e' }
  ]
];

const FOUNDER_BRIEFS = [
  {
    title: 'Mille European Launch UGC Brief',
    applicants: '95 applicants',
    budget: '$1,200 budget · 4 creators',
    color: '#d97706',
    char: 'M'
  },
  {
    title: 'Snag Tights TikTok Spark Campaign',
    applicants: '160 applicants',
    budget: '$2,500 budget · 6 creators',
    color: '#ec4899',
    char: 'S'
  },
  {
    title: 'Omni Pet Nutrition Video Activation',
    applicants: '74 applicants',
    budget: '$800 budget · 3 creators',
    color: '#10b981',
    char: 'O'
  }
];

const ENTERPRISE_QUARTERS = [
  { label: 'Q3 program', gain: '↑ 4.2×', color: '#ee8c5a', heights: ['30%', '40%', '35%', '55%', '70%', '90%'] },
  { label: 'Q4 program', gain: '↑ 5.1×', color: '#ec5990', heights: ['45%', '35%', '55%', '70%', '85%', '95%'] },
  { label: 'Q1 program', gain: '↑ 1.8×', color: '#3b82f6', heights: ['20%', '30%', '25%', '45%', '50%', '65%'] },
  { label: 'Q2 program', gain: '↑ 2.9×', color: '#8b5cf6', heights: ['25%', '35%', '30%', '50%', '60%', '80%'] }
];

interface TeamsSectionProps {
  onNavigate?: (page: 'home' | 'search-creators' | 'creator-chat' | 'performance-tracking' | 'campaign-briefs' | 'secure-global-payments' | 'team-workspace' | 'bring-manage-creators' | 'marketing-teams' | 'agencies' | 'founders' | 'ugc-for-ads' | 'influencer-marketing' | 'affiliate-marketing' | 'pricing' | 'for-creators' | 'case-studies') => void;
  onOpenSignUp?: (role?: 'creator' | 'brand') => void;
}

export function TeamsSection({ onNavigate, onOpenSignUp }: TeamsSectionProps) {
  const [marketingIndex, setMarketingIndex] = useState(0);
  const [agencyIndex, setAgencyIndex] = useState(0);
  const [founderIndex, setFounderIndex] = useState(0);
  const [enterpriseIndex, setEnterpriseIndex] = useState(0);

  const cycleMarketing = () => {
    setMarketingIndex((prev) => (prev + 1) % MARKETING_THEMES.length);
  };

  const cycleAgency = () => {
    setAgencyIndex((prev) => (prev + 1) % AGENCY_THEMES.length);
  };

  const cycleFounder = () => {
    setFounderIndex((prev) => (prev + 1) % FOUNDER_BRIEFS.length);
  };

  const cycleEnterprise = () => {
    setEnterpriseIndex((prev) => (prev + 1) % ENTERPRISE_QUARTERS.length);
  };

  const currentMarketing = MARKETING_THEMES[marketingIndex];
  const currentAgency = AGENCY_THEMES[agencyIndex];
  const currentFounder = FOUNDER_BRIEFS[founderIndex];
  const currentEnterprise = ENTERPRISE_QUARTERS[enterpriseIndex];

  return (
    <section className="w-full py-12 sm:py-16 bg-white">
      <div className="w-full max-w-[1140px] mx-auto px-4 sm:px-6 lg:px-0">
        
        {/* Title */}
        <h2 className="text-3xl sm:text-4xl font-bold text-center mb-10 text-[#0F172A] tracking-tight">
          Built for Teams of Every Size
        </h2>

        {/* 4 Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          
          {/* Card 1: Marketing Teams */}
          <div className="bg-[#ea89a4] rounded-[28px] sm:rounded-[32px] p-5 sm:p-6 flex flex-col justify-between h-[410px] sm:h-[430px] shadow-xs transition-all duration-300 hover:translate-y-[-2px] group">
            {/* Interactive Mockup */}
            <div 
              onClick={cycleMarketing}
              className="w-full mb-4 cursor-pointer hover:scale-[1.02] active:scale-[0.99] transition-transform relative"
              title="Click to cycle niche data"
            >
              <div className="bg-white rounded-2xl p-3.5 shadow-sm border border-black/5 w-full h-[160px] flex flex-col justify-between select-none">
                {/* Search bar mockup */}
                <div className="bg-gray-100/80 rounded-xl px-3 py-2 flex items-center justify-between text-xs text-gray-500 mb-2">
                  <div className="flex items-center gap-2">
                    <svg className="w-3.5 h-3.5 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                    </svg>
                    <span className="font-semibold text-gray-700 text-[11px]">{currentMarketing.query}</span>
                  </div>
                  <span className="text-[9px] text-[#ec5990] font-bold uppercase tracking-wider animate-pulse">Cycle ↻</span>
                </div>

                {/* List items */}
                <div className="flex flex-col gap-2">
                  {currentMarketing.items.map((item, idx) => (
                    <div key={idx} className="flex items-center justify-between pt-0.5">
                      <div className="flex items-center gap-2">
                        <span className="w-5 h-5 rounded-full shrink-0" style={{ backgroundColor: item.color }} />
                        <div>
                          <div className="font-bold text-[11px] text-gray-900 leading-tight">{item.name}</div>
                          <div className="text-[9px] text-gray-400">{item.stats}</div>
                        </div>
                      </div>
                      <span className="font-bold text-xs text-gray-900">{item.price}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Bottom Content Area */}
            <div className="flex flex-col justify-between flex-1 text-gray-900">
              <div>
                <h3 className="text-xl sm:text-[22px] font-black tracking-tight mb-2 leading-snug">
                  Marketing Teams
                </h3>
                <p className="text-xs sm:text-[12.5px] text-gray-900/90 leading-relaxed font-normal">
                  Run your entire creator program in one place, from discovery to payment. No tool-switching. No extra coordination.
                </p>
              </div>

              {/* Pill Button */}
              <div className="pt-4">
                <button
                  onClick={() => onOpenSignUp?.('brand')}
                  className="inline-flex items-center justify-center border-1.5 border-gray-900/80 hover:border-black text-gray-900 hover:bg-black/10 font-bold text-xs px-5 py-2 rounded-full transition-all active:scale-95 cursor-pointer"
                >
                  Start Free
                </button>
              </div>
            </div>
          </div>

          {/* Card 2: Agencies */}
          <div className="bg-[#9fb2f5] rounded-[28px] sm:rounded-[32px] p-5 sm:p-6 flex flex-col justify-between h-[410px] sm:h-[430px] shadow-xs transition-all duration-300 hover:translate-y-[-2px] group">
            {/* Interactive Mockup */}
            <div 
              onClick={cycleAgency}
              className="w-full mb-4 cursor-pointer hover:scale-[1.02] active:scale-[0.99] transition-transform relative"
              title="Click to cycle agency data"
            >
              <div className="bg-white rounded-2xl p-2.5 shadow-sm border border-black/5 w-full h-[160px] flex flex-col gap-1.5 justify-center select-none">
                {currentAgency.map((item, idx) => {
                  if (item.selected) {
                    return (
                      <div key={idx} className="flex items-center justify-between p-1.5 rounded-xl bg-[#212328] text-white">
                        <div className="flex items-center gap-2">
                          <span className="w-5 h-5 rounded-md text-white font-bold text-[10px] flex items-center justify-center shrink-0" style={{ backgroundColor: item.bg }}>
                            {item.char}
                          </span>
                          <div>
                            <div className="font-bold text-[11px] text-white leading-tight">{item.name}</div>
                            <div className="text-[9px] text-gray-400">{item.active}</div>
                          </div>
                        </div>
                        <span className="text-[9px] text-[#ec5990] font-bold uppercase mr-1">Cycle ↻</span>
                      </div>
                    );
                  }
                  return (
                    <div key={idx} className="flex items-center justify-between p-1.5 rounded-xl bg-gray-50/80">
                      <div className="flex items-center gap-2">
                        <span className="w-5 h-5 rounded-md text-white font-bold text-[10px] flex items-center justify-center shrink-0" style={{ backgroundColor: item.bg }}>
                          {item.char}
                        </span>
                        <div>
                          <div className="font-bold text-[11px] text-gray-900 leading-tight">{item.name}</div>
                          <div className="text-[9px] text-gray-400">{item.active}</div>
                        </div>
                      </div>
                      <span className="text-gray-400 text-xs">›</span>
                    </div>
                  );
                })}
              </div>
            </div>

            {/* Bottom Content Area */}
            <div className="flex flex-col justify-between flex-1 text-gray-900">
              <div>
                <h3 className="text-xl sm:text-[22px] font-black tracking-tight mb-2 leading-snug">
                  Agencies
                </h3>
                <p className="text-xs sm:text-[12.5px] text-gray-900/90 leading-relaxed font-normal">
                  Manage every client's creator program from one dashboard. More campaigns, less operational overhead.
                </p>
              </div>

              {/* Pill Button */}
              <div className="pt-4">
                <button
                  onClick={() => onNavigate?.('agencies')}
                  className="inline-flex items-center justify-center border-1.5 border-gray-900/80 hover:border-black text-gray-900 hover:bg-black/10 font-bold text-xs px-5 py-2 rounded-full transition-all active:scale-95 cursor-pointer"
                >
                  Talk to Us
                </button>
              </div>
            </div>
          </div>

          {/* Card 3: Founders */}
          <div className="bg-[#b4b0f8] rounded-[28px] sm:rounded-[32px] p-5 sm:p-6 flex flex-col justify-between h-[410px] sm:h-[430px] shadow-xs transition-all duration-300 hover:translate-y-[-2px] group">
            {/* Interactive Mockup */}
            <div 
              onClick={cycleFounder}
              className="w-full mb-4 cursor-pointer hover:scale-[1.02] active:scale-[0.99] transition-transform relative"
              title="Click to cycle founder campaign brief"
            >
              <div className="bg-white rounded-2xl p-3.5 shadow-sm border border-black/5 w-full h-[160px] flex flex-col justify-between select-none">
                <div>
                  <div className="flex items-center justify-between gap-1 mb-1">
                    <div className="flex items-center gap-1.5 min-w-0">
                      <span className="w-4 h-4 rounded-full text-white font-extrabold text-[8px] flex items-center justify-center shrink-0" style={{ backgroundColor: currentFounder.color }}>
                        {currentFounder.char}
                      </span>
                      <span className="font-bold text-[10px] text-gray-900 leading-tight truncate">
                        {currentFounder.title}
                      </span>
                    </div>
                    <span className="bg-[#d4f2e0] text-[#1c7843] text-[8px] font-bold px-1.5 py-0.5 rounded-full shrink-0 flex items-center gap-0.5">
                      <span>✋</span> {currentFounder.applicants.split(' ')[0]}
                    </span>
                  </div>
                  <div className="text-[9px] text-gray-400 pl-5.5 flex justify-between items-center">
                    <span>{currentFounder.budget}</span>
                    <span className="text-[8px] text-[#ec5990] font-bold uppercase tracking-wider">Cycle ↻</span>
                  </div>
                </div>

                {/* Skeleton lines for brief content */}
                <div className="flex flex-col gap-2 pt-1.5">
                  <div className="w-full h-2 bg-gray-100 rounded-full" />
                  <div className="w-3/4 h-2 bg-gray-100 rounded-full" />
                  <div className="w-5/6 h-2 bg-gray-100 rounded-full" />
                  <div className="w-1/2 h-2 bg-gray-100 rounded-full" />
                </div>
              </div>
            </div>

            {/* Bottom Content Area */}
            <div className="flex flex-col justify-between flex-1 text-gray-900">
              <div>
                <h3 className="text-xl sm:text-[22px] font-black tracking-tight mb-2 leading-snug">
                  Founders
                </h3>
                <p className="text-xs sm:text-[12.5px] text-gray-900/90 leading-relaxed font-normal">
                  Launch your first creator campaign without extra hires. Find creators, set a budget, and get content back in days.
                </p>
              </div>

              {/* Pill Button */}
              <div className="pt-4">
                <button
                  onClick={() => onOpenSignUp?.('brand')}
                  className="inline-flex items-center justify-center border-1.5 border-gray-900/80 hover:border-black text-gray-900 hover:bg-black/10 font-bold text-xs px-5 py-2 rounded-full transition-all active:scale-95 cursor-pointer"
                >
                  Start Free
                </button>
              </div>
            </div>
          </div>

          {/* Card 4: Enterprise Teams */}
          <div className="bg-[#f09c73] rounded-[28px] sm:rounded-[32px] p-5 sm:p-6 flex flex-col justify-between h-[410px] sm:h-[430px] shadow-xs transition-all duration-300 hover:translate-y-[-2px] group">
            {/* Interactive Mockup */}
            <div 
              onClick={cycleEnterprise}
              className="w-full mb-4 cursor-pointer hover:scale-[1.02] active:scale-[0.99] transition-transform relative"
              title="Click to cycle enterprise Q program"
            >
              <div className="bg-[#1b1c21] text-white rounded-2xl p-3.5 shadow-sm w-full h-[160px] flex flex-col justify-between select-none">
                {/* Header bar */}
                <div className="flex items-center justify-between text-xs font-semibold text-gray-300">
                  <span className="text-[11px] text-gray-400">{currentEnterprise.label}</span>
                  <div className="flex items-center gap-1.5">
                    <span className="text-emerald-400 text-[11px] font-bold">{currentEnterprise.gain}</span>
                    <span className="text-[8px] text-[#ec5990] font-bold uppercase tracking-wider">Cycle ↻</span>
                  </div>
                </div>

                {/* Bar chart mockup */}
                <div className="flex items-end justify-between gap-1.5 h-16 px-1 my-1">
                  {currentEnterprise.heights.map((h, idx) => {
                    const isLast = idx === currentEnterprise.heights.length - 1;
                    return (
                      <div 
                        key={idx} 
                        className="w-full rounded-sm transition-all duration-300"
                        style={{ 
                          height: h, 
                          backgroundColor: isLast ? currentEnterprise.color : 'rgba(156, 163, 175, 0.25)' 
                        }} 
                      />
                    );
                  })}
                </div>

                {/* Regional badges */}
                <div className="flex items-center gap-1.5 text-[9px] font-semibold text-gray-400">
                  <span className="px-2 py-0.5 rounded-md bg-gray-800 text-gray-300">NA</span>
                  <span className="px-2 py-0.5 rounded-md bg-gray-800 text-gray-300">EU</span>
                  <span className="px-2 py-0.5 rounded-md bg-gray-800 text-gray-300">APAC</span>
                  <span className="text-gray-500 pl-1">+12</span>
                </div>
              </div>
            </div>

            {/* Bottom Content Area */}
            <div className="flex flex-col justify-between flex-1 text-gray-900">
              <div>
                <h3 className="text-xl sm:text-[22px] font-black tracking-tight mb-2 leading-snug">
                  Enterprise Teams
                </h3>
                <p className="text-xs sm:text-[12.5px] text-gray-900/90 leading-relaxed font-normal">
                  Run high-volume programs across markets, brands, and teams, every order auditable.
                </p>
              </div>

              {/* Pill Button */}
              <div className="pt-4">
                <button
                  onClick={() => onNavigate?.('marketing-teams')}
                  className="inline-flex items-center justify-center border-1.5 border-gray-900/80 hover:border-black text-gray-900 hover:bg-black/10 font-bold text-xs px-5 py-2 rounded-full transition-all active:scale-95 cursor-pointer"
                >
                  Talk to Us
                </button>
              </div>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
