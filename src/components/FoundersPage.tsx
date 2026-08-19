import React from 'react';
import {
  Check,
  ArrowRight,
  Search,
  FileText,
  BarChart2,
  Users,
  RefreshCw,
  Sparkles,
  Zap,
  TrendingUp,
  DollarSign
} from 'lucide-react';
import { TrustedBrands } from './TrustedBrands';
import { WhatBrandsSay } from './WhatBrandsSay';
import {
  niloofarTaghaviImg,
  ivanaMarketinImg,
  kolapoImg,
  janarJuhkovImg,
  sofiaJensenImg,
} from '../avatars';

interface FoundersPageProps {
  onNavigateHome?: () => void;
  onNavigateSearch?: () => void;
}

const heroHeadingStyle: React.CSSProperties = {
  fontFamily: 'Inter, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif',
  fontStyle: 'normal',
  fontWeight: 700,
  color: 'rgb(51, 51, 51)',
  fontSize: '48px',
  lineHeight: '60px',
};

const sectionHeadingStyle: React.CSSProperties = {
  fontFamily: 'Inter, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif',
  fontStyle: 'normal',
  fontWeight: 800,
  color: 'rgb(51, 51, 51)',
  fontSize: '30px',
  lineHeight: '38px',
};

const darkSectionHeadingStyle: React.CSSProperties = {
  ...sectionHeadingStyle,
  color: '#ffffff',
};

export const FoundersPage: React.FC<FoundersPageProps> = ({ onNavigateHome, onNavigateSearch }) => {
  return (
    <div className="w-full bg-white text-gray-900 font-sans pb-24">
      
      {/* ------------------------------------------------------------- */}
      {/* SECTION 1: HERO SECTION                                       */}
      {/* ------------------------------------------------------------- */}
      <section className="max-w-[1240px] mx-auto px-4 sm:px-6 lg:px-8 pt-12 sm:pt-16 pb-16 sm:pb-20">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* Left Hero Content */}
          <div className="lg:col-span-6 flex flex-col items-start text-left">
            <h1 style={heroHeadingStyle} className="mb-6 tracking-tight">
              Launch and scale your influencer program <span className="text-accent-pink">without scaling your team.</span>
            </h1>

            <p className="text-gray-600 text-lg sm:text-xl leading-relaxed mb-8 max-w-xl font-normal">
              Find creators, run campaigns, manage payments, and track performance. Everything a full influencer marketing team would do, run by one person.
            </p>

            {/* Feature Badges */}
            <div className="flex flex-col sm:flex-row flex-wrap gap-2.5 mb-10">
              <div className="bg-gray-100/90 rounded-full px-3.5 py-1.5 text-xs font-medium text-gray-700 flex items-center gap-1.5">
                <span className="w-4 h-4 rounded-full bg-emerald-600 text-white flex items-center justify-center shrink-0">
                  <Check className="w-2.5 h-2.5 stroke-[3]" />
                </span>
                500,000+ vetted creators across Instagram, TikTok, and YouTube
              </div>

              <div className="bg-gray-100/90 rounded-full px-3.5 py-1.5 text-xs font-medium text-gray-700 flex items-center gap-1.5">
                <span className="w-4 h-4 rounded-full bg-emerald-600 text-white flex items-center justify-center shrink-0">
                  <Check className="w-2.5 h-2.5 stroke-[3]" />
                </span>
                No team required to get started
              </div>

              <div className="bg-gray-100/90 rounded-full px-3.5 py-1.5 text-xs font-medium text-gray-700 flex items-center gap-1.5">
                <span className="w-4 h-4 rounded-full bg-emerald-600 text-white flex items-center justify-center shrink-0">
                  <Check className="w-2.5 h-2.5 stroke-[3]" />
                </span>
                Free to start, no subscription to place your first order
              </div>
            </div>

            {/* Dual CTA Buttons */}
            <div className="flex items-center gap-3">
              <button
                onClick={onNavigateSearch}
                className="inline-flex items-center gap-2 bg-[#22252a] hover:bg-black text-white px-7 py-3.5 rounded-xl font-bold text-sm transition-all duration-200 shadow-md hover:shadow-xl cursor-pointer group"
              >
                Book a Demo
                <ArrowRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
              </button>

              <button
                onClick={onNavigateSearch}
                className="inline-flex items-center justify-center bg-white border border-gray-300 hover:bg-gray-50 text-gray-900 px-7 py-3.5 rounded-xl font-bold text-sm transition-all duration-200 cursor-pointer"
              >
                Start free
              </button>
            </div>
          </div>

          {/* Right Hero Graphic - Dark Container with Floating Pills */}
          <div className="lg:col-span-6 flex justify-center lg:justify-end">
            <div className="w-full max-w-[480px] h-[420px] sm:h-[460px] bg-[#22252a] rounded-[36px] p-6 sm:p-8 relative overflow-hidden flex items-center justify-center shadow-2xl">
              
              {/* Creator Card 1 (Top Left Model) */}
              <div className="absolute top-10 left-10 w-[200px] h-[220px] rounded-2xl overflow-hidden border-2 border-white/10 shadow-2xl">
                <img
                  src={janarJuhkovImg}
                  alt="Creator 1"
                  className="w-full h-full object-cover"
                />
              </div>

              {/* Creator Card 2 (Bottom Right Model) */}
              <div className="absolute bottom-10 right-10 w-[200px] h-[220px] rounded-2xl overflow-hidden border-2 border-white/10 shadow-2xl">
                <img
                  src={sofiaJensenImg}
                  alt="Creator 2"
                  className="w-full h-full object-cover"
                />
              </div>

              {/* Floating Pink Tags */}
              
              {/* TikTok Tag */}
              <div className="absolute top-16 left-6 bg-[#f43f5e] text-white text-[11px] font-extrabold px-3.5 py-1.5 rounded-xl shadow-lg flex items-center gap-1.5 z-20">
                <span className="font-bold">🎵</span> TikTok
              </div>

              {/* Instagram Tag */}
              <div className="absolute top-10 right-10 bg-[#f43f5e] text-white text-[11px] font-extrabold px-3.5 py-1.5 rounded-xl shadow-lg flex items-center gap-1.5 z-20">
                <span className="font-bold">📷</span> Instagram
              </div>

              {/* Impressions Tag */}
              <div className="absolute top-1/2 -translate-y-2 right-4 bg-[#f43f5e] text-white text-[11px] font-extrabold px-3.5 py-1.5 rounded-xl shadow-lg flex items-center gap-1.5 z-20">
                <BarChart2 className="w-3.5 h-3.5" />
                <div>
                  <div className="text-[9px] font-normal leading-none text-rose-100">Impressions</div>
                  <div className="text-xs font-extrabold">2.1 M</div>
                </div>
              </div>

              {/* Youtube Tag */}
              <div className="absolute bottom-14 right-10 bg-[#f43f5e] text-white text-[11px] font-extrabold px-3.5 py-1.5 rounded-xl shadow-lg flex items-center gap-1.5 z-20">
                <span className="font-bold">▶</span> Youtube
              </div>

            </div>
          </div>

        </div>
      </section>

      {/* ------------------------------------------------------------- */}
      {/* SECTION 2: BRAND LOGOS TICKER                                 */}
      {/* ------------------------------------------------------------- */}
      <TrustedBrands />

      {/* ------------------------------------------------------------- */}
      {/* SECTION 3: PROBLEM / COMPARISON STACK                          */}
      {/* ------------------------------------------------------------- */}
      <section className="max-w-[1240px] mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-24">
        <h2 style={sectionHeadingStyle} className="text-center max-w-3xl mx-auto mb-4 tracking-tight">
          You are running your creator program manually. It is working, but it should not take this long.
        </h2>
        <p className="text-gray-500 text-center text-sm sm:text-base mb-16 max-w-2xl mx-auto">
          Mobb gives you the infrastructure of a full creator program, without the team to run it.
        </p>

        {/* Comparison Diagram Card */}
        <div className="bg-gray-50/80 rounded-[32px] p-6 sm:p-10 border border-gray-200/80 shadow-xs max-w-5xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            
            {/* Left Stack: The Stack Today */}
            <div className="lg:col-span-5 space-y-3">
              <div className="text-[11px] font-bold tracking-wider text-gray-400 uppercase mb-2">
                THE STACK TODAY
              </div>

              <div className="grid grid-cols-2 gap-2.5">
                <div className="bg-white p-3 rounded-xl border border-gray-200 text-xs">
                  <div className="font-bold text-gray-900">Discovery tool</div>
                  <div className="text-[10px] text-gray-400">One place to find creators</div>
                </div>

                <div className="bg-white p-3 rounded-xl border border-gray-200 text-xs">
                  <div className="font-bold text-gray-900">Briefs over email</div>
                  <div className="text-[10px] text-gray-400">Threads, attachments, follow-ups</div>
                </div>

                <div className="bg-white p-3 rounded-xl border border-gray-200 text-xs">
                  <div className="font-bold text-gray-900">Payments</div>
                  <div className="text-[10px] text-gray-400">Processed separately</div>
                </div>

                <div className="bg-white p-3 rounded-xl border border-gray-200 text-xs">
                  <div className="font-bold text-gray-900">Performance</div>
                  <div className="text-[10px] text-gray-400">Pulled manually</div>
                </div>
              </div>

              <div className="text-[11px] text-gray-400 font-medium pt-1 flex items-center gap-1">
                <span className="text-rose-500 font-bold">×</span> Disconnected — friction at every handoff
              </div>
            </div>

            {/* Middle Arrow */}
            <div className="lg:col-span-2 flex justify-center py-2 lg:py-0">
              <div className="w-10 h-10 rounded-full bg-gray-900 text-white flex items-center justify-center shadow-md">
                <ArrowRight className="w-5 h-5" />
              </div>
            </div>

            {/* Right Stack: On Mobb */}
            <div className="lg:col-span-5 bg-white p-6 rounded-2xl border border-gray-200 shadow-md">
              <div className="text-[11px] font-bold tracking-wider text-rose-500 uppercase mb-1">
                ONE PLATFORM, END TO END
              </div>
              <div className="text-base font-black text-gray-900 mb-4">
                mobb
              </div>

              {/* Horizontal workflow steps */}
              <div className="flex items-center justify-between text-[11px] font-bold text-gray-700 border-y border-gray-100 py-3 mb-4">
                <div className="text-center">
                  <div className="text-gray-400 text-[10px]">🔍</div>
                  Search
                </div>
                <div className="text-center">
                  <div className="text-gray-400 text-[10px]">📄</div>
                  Brief
                </div>
                <div className="text-center">
                  <div className="text-gray-400 text-[10px]">👤</div>
                  Hire
                </div>
                <div className="text-center">
                  <div className="text-gray-400 text-[10px]">✔️</div>
                  Approve
                </div>
                <div className="text-center">
                  <div className="text-gray-400 text-[10px]">💳</div>
                  Pay
                </div>
                <div className="text-center">
                  <div className="text-gray-400 text-[10px]">📈</div>
                  Track
                </div>
              </div>

              <div className="text-[11px] text-gray-500 font-normal leading-normal">
                Mobb replaces that stack with one platform, run end to end by one person.
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* ------------------------------------------------------------- */}
      {/* SECTION 4: WHAT CHANGES WHEN YOU RUN ON MOBB            */}
      {/* ------------------------------------------------------------- */}
      <section className="max-w-[1240px] mx-auto px-4 sm:px-6 lg:px-8 space-y-24 py-12">
        
        <h2 style={sectionHeadingStyle} className="text-center tracking-tight mb-16">
          What Changes When You Run On Mobb.
        </h2>

        {/* ROW 1: You Replace The Manual Process With One Platform */}
        <div className="feature-grid-row">
          {/* Text Left */}
          <div className="space-y-4 text-left flex flex-col justify-center">
            <h3 style={sectionHeadingStyle} className="tracking-tight mb-2">
              You Replace The Manual Process With One Platform.
            </h3>
            <p className="text-gray-600 text-base sm:text-lg leading-relaxed font-normal">
              Search vetted creators, send briefs, negotiate terms, approve content, and process payments inside the same platform. No spreadsheets. No chasing. No switching between tools.
            </p>
          </div>

          {/* Graphic Right (Pink Background Container) */}
          <div className="flex justify-center">
            <div className="feature-card-wrapper bg-[#fecdd3]/40">
              <div className="feature-card-inner space-y-3 text-xs">
                
                <div className="flex items-start gap-3 p-2.5 bg-gray-50 rounded-xl">
                  <Search className="w-4 h-4 text-rose-500 shrink-0 mt-0.5" />
                  <div>
                    <div className="font-bold text-gray-900">Search vetted creators</div>
                    <div className="text-[10px] text-gray-400">550K+ profiles, filter by niche & platform</div>
                  </div>
                </div>

                <div className="flex items-start gap-3 p-2.5 bg-gray-50 rounded-xl">
                  <FileText className="w-4 h-4 text-rose-500 shrink-0 mt-0.5" />
                  <div>
                    <div className="font-bold text-gray-900">Send briefs & negotiate terms</div>
                    <div className="text-[10px] text-gray-400">Agree on deliverables before posting</div>
                  </div>
                </div>

                <div className="flex items-start gap-3 p-2.5 bg-gray-50 rounded-xl">
                  <Check className="w-4 h-4 text-rose-500 shrink-0 mt-0.5" />
                  <div>
                    <div className="font-bold text-gray-900">Review and approve</div>
                    <div className="text-[10px] text-gray-400">Before anything goes live</div>
                  </div>
                </div>

                <div className="flex items-start gap-3 p-2.5 bg-gray-50 rounded-xl">
                  <DollarSign className="w-4 h-4 text-rose-500 shrink-0 mt-0.5" />
                  <div>
                    <div className="font-bold text-gray-900">Pay through escrow</div>
                    <div className="text-[10px] text-gray-400">Funds released only on approval</div>
                  </div>
                </div>

              </div>
            </div>
          </div>
        </div>

        {/* ROW 2: You Start Your First Campaign In Minutes, Not Weeks */}
        <div className="feature-grid-row">
          {/* Graphic Left (Indigo Background Container) */}
          <div className="lg:order-1 flex justify-center">
            <div className="feature-card-wrapper bg-[#e0e7ff]/60">
              <div className="feature-card-inner space-y-3 text-xs">
                
                {/* Brief Banner */}
                <div className="flex items-center justify-between border-b border-gray-100 pb-2">
                  <div>
                    <div className="font-extrabold text-gray-900 text-xs">Brief: Summer beauty UGC</div>
                    <div className="text-[10px] text-gray-400">Posted just now · Instant Match on</div>
                  </div>
                  <span className="text-[10px] bg-rose-100 text-rose-700 font-extrabold px-2 py-0.5 rounded-full flex items-center gap-1">
                    ⚡ 3 matched
                  </span>
                </div>

                <div className="text-[10px] font-bold text-gray-500">Best-fit creators applied with their rates included</div>

                {/* Applied Creators */}
                <div className="space-y-2">
                  <div className="flex items-center justify-between p-2 bg-gray-50 rounded-xl">
                    <div className="flex items-center gap-2">
                      <img src={niloofarTaghaviImg} className="w-6 h-6 rounded-full object-cover" alt="Priya" />
                      <div>
                        <div className="font-bold text-gray-900 text-[11px]">Priya Nair</div>
                        <div className="text-[9px] text-gray-400 flex gap-1">
                          <span className="bg-pink-100 text-pink-700 px-1 rounded">Instagram</span>
                          <span className="bg-purple-100 text-purple-700 px-1 rounded">UGC</span>
                        </div>
                      </div>
                    </div>
                    <div className="flex items-center gap-2">
                      <span className="font-extrabold text-gray-900 text-xs">$180</span>
                      <button className="bg-gray-900 text-white font-bold text-[10px] px-2.5 py-1 rounded-lg cursor-pointer">Hire</button>
                    </div>
                  </div>

                  <div className="flex items-center justify-between p-2 bg-gray-50 rounded-xl">
                    <div className="flex items-center gap-2">
                      <img src={ivanaMarketinImg} className="w-6 h-6 rounded-full object-cover" alt="Drea" />
                      <div>
                        <div className="font-bold text-gray-900 text-[11px]">Drea Phillips</div>
                        <div className="text-[9px] text-gray-400 flex gap-1">
                          <span className="bg-stone-200 text-stone-800 px-1 rounded">TikTok</span>
                          <span className="bg-pink-100 text-pink-700 px-1 rounded">Instagram</span>
                        </div>
                      </div>
                    </div>
                    <div className="flex items-center gap-2">
                      <span className="font-extrabold text-gray-900 text-xs">$250</span>
                      <button className="bg-gray-900 text-white font-bold text-[10px] px-2.5 py-1 rounded-lg cursor-pointer">Hire</button>
                    </div>
                  </div>

                  <div className="flex items-center justify-between p-2 bg-gray-50 rounded-xl">
                    <div className="flex items-center gap-2">
                      <img src={kolapoImg} className="w-6 h-6 rounded-full object-cover" alt="Marcus" />
                      <div>
                        <div className="font-bold text-gray-900 text-[11px]">Marcus Lewis</div>
                        <div className="text-[9px] text-gray-400 flex gap-1">
                          <span className="bg-red-100 text-red-700 px-1 rounded">YouTube</span>
                        </div>
                      </div>
                    </div>
                    <div className="flex items-center gap-2">
                      <span className="font-extrabold text-gray-900 text-xs">$320</span>
                      <button className="bg-gray-900 text-white font-bold text-[10px] px-2.5 py-1 rounded-lg cursor-pointer">Hire</button>
                    </div>
                  </div>
                </div>

              </div>
            </div>
          </div>

          {/* Text Right */}
          <div className="space-y-4 text-left flex flex-col justify-center lg:order-2">
            <h3 style={sectionHeadingStyle} className="tracking-tight mb-2">
              You Start Your First Campaign In Minutes, Not Weeks.
            </h3>
            <p className="text-gray-600 text-base sm:text-lg leading-relaxed font-normal">
              Post a campaign brief, and Instant Match surfaces the best-fit creators immediately. Creators apply with their rates included. Review, hire, and have your first creator briefed and working the same day. No cold outreach needed. No back and forth required.
            </p>
          </div>
        </div>

        {/* ROW 3: You Scale The Program Without Scaling The Team */}
        <div className="feature-grid-row">
          {/* Text Left */}
          <div className="space-y-4 text-left flex flex-col justify-center">
            <h3 style={sectionHeadingStyle} className="tracking-tight mb-2">
              You Scale The Program Without Scaling The Team.
            </h3>
            <p className="text-gray-600 text-base sm:text-lg leading-relaxed font-normal">
              UGC for ads, influencer campaigns, gifting, sponsored posts, affiliate deals. Every collaboration type runs the same way inside Mobb. Add more creators, run more campaign types, and grow your program without adding a single hire.
            </p>
          </div>

          {/* Graphic Right (Yellow Background Container) */}
          <div className="flex justify-center">
            <div className="feature-card-wrapper bg-[#fef08a]/60">
              <div className="feature-card-inner space-y-3">
                
                <div className="flex items-center justify-between text-xs font-bold border-b border-gray-100 pb-2">
                  <span className="text-gray-900">Programs running</span>
                  <span className="text-emerald-600 text-[10px] bg-emerald-50 px-2 py-0.5 rounded-full flex items-center gap-1">
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-500"></span> Active workflow
                  </span>
                </div>

                <div className="grid grid-cols-2 gap-3 text-xs">
                  <div className="p-3 bg-gray-50 rounded-xl border border-gray-100 flex items-center gap-2">
                    <span className="text-lg">📷</span>
                    <div>
                      <div className="font-extrabold text-gray-900 text-xs">UGC for ads</div>
                      <div className="text-[10px] text-gray-400">3 active</div>
                    </div>
                  </div>

                  <div className="p-3 bg-gray-50 rounded-xl border border-gray-100 flex items-center gap-2">
                    <span className="text-lg">📷</span>
                    <div>
                      <div className="font-extrabold text-gray-900 text-xs">Influencer</div>
                      <div className="text-[10px] text-gray-400">2 active</div>
                    </div>
                  </div>

                  <div className="p-3 bg-gray-50 rounded-xl border border-gray-100 flex items-center gap-2">
                    <span className="text-lg">🎁</span>
                    <div>
                      <div className="font-extrabold text-gray-900 text-xs">Gifting</div>
                      <div className="text-[10px] text-gray-400">1 active</div>
                    </div>
                  </div>

                  <div className="p-3 bg-gray-50 rounded-xl border border-gray-100 flex items-center gap-2">
                    <span className="text-lg">🔗</span>
                    <div>
                      <div className="font-extrabold text-gray-900 text-xs">Affiliate</div>
                      <div className="text-[10px] text-gray-400">4 active</div>
                    </div>
                  </div>
                </div>

              </div>
            </div>
          </div>
        </div>

        {/* ROW 4: You Build On Every Campaign Instead Of Starting Over */}
        <div className="feature-grid-row">
          {/* Graphic Left (Light Gray Background Container) */}
          <div className="lg:order-1 flex justify-center">
            <div className="feature-card-wrapper bg-gray-200/70">
              <div className="feature-card-inner space-y-3">
                
                <div className="flex items-center justify-between text-xs font-bold">
                  <span className="text-gray-900">Your saved roster</span>
                  <span className="text-gray-400 font-normal text-[10px]">25 creators</span>
                </div>

                <div className="space-y-2">
                  <div className="flex items-center justify-between p-2 bg-gray-50 rounded-xl border border-gray-100">
                    <div className="flex items-center gap-2">
                      <img src={niloofarTaghaviImg} className="w-6 h-6 rounded-full object-cover" alt="Priya" />
                      <div>
                        <div className="font-bold text-gray-900 text-xs">Priya Nair</div>
                        <div className="text-[9px] text-gray-400">Hired 4x · Beauty</div>
                      </div>
                    </div>
                    <button className="bg-white border border-gray-200 text-gray-800 hover:bg-gray-100 font-bold text-[10px] px-2 py-0.5 rounded-lg flex items-center gap-1 cursor-pointer">
                      Rehire
                    </button>
                  </div>

                  <div className="flex items-center justify-between p-2 bg-gray-50 rounded-xl border border-gray-100">
                    <div className="flex items-center gap-2">
                      <img src={ivanaMarketinImg} className="w-6 h-6 rounded-full object-cover" alt="Drea" />
                      <div>
                        <div className="font-bold text-gray-900 text-xs">Drea Phillips</div>
                        <div className="text-[9px] text-gray-400">Hired 2x · Wellness</div>
                      </div>
                    </div>
                    <button className="bg-white border border-gray-200 text-gray-800 hover:bg-gray-100 font-bold text-[10px] px-2 py-0.5 rounded-lg flex items-center gap-1 cursor-pointer">
                      Rehire
                    </button>
                  </div>

                  <div className="flex items-center justify-between p-2 bg-gray-50 rounded-xl border border-gray-100">
                    <div className="flex items-center gap-2">
                      <img src={kolapoImg} className="w-6 h-6 rounded-full object-cover" alt="Marcus" />
                      <div>
                        <div className="font-bold text-gray-900 text-xs">Marcus Lewis</div>
                        <div className="text-[9px] text-gray-400">Hired 3x · Fitness</div>
                      </div>
                    </div>
                    <button className="bg-white border border-gray-200 text-gray-800 hover:bg-gray-100 font-bold text-[10px] px-2 py-0.5 rounded-lg flex items-center gap-1 cursor-pointer">
                      Rehire
                    </button>
                  </div>
                </div>

                <div className="p-2.5 bg-rose-50 border border-rose-100 rounded-xl text-rose-700 text-[11px] font-bold text-center">
                  ✨ Second campaign briefed in minutes, not days
                </div>

              </div>
            </div>
          </div>

          {/* Text Right */}
          <div className="space-y-4 text-left flex flex-col justify-center lg:order-2">
            <h3 style={sectionHeadingStyle} className="tracking-tight mb-2">
              You Build On Every Campaign Instead Of Starting Over.
            </h3>
            <p className="text-gray-600 text-base sm:text-lg leading-relaxed font-normal">
              Every creator relationship, past deliverable, performance record, and payment history stays in your account. The next campaign is faster to brief, easier to hire for, and more predictable to run.
            </p>
          </div>
        </div>

      </section>

      {/* ------------------------------------------------------------- */}
      {/* SECTION 5: WHAT BRANDS SAY                                    */}
      {/* ------------------------------------------------------------- */}
      <section className="py-8">
        <WhatBrandsSay />
      </section>

      {/* ------------------------------------------------------------- */}
      {/* SECTION 6: EFFICIENCY / ONE PERSON PLATFORM                    */}
      {/* ------------------------------------------------------------- */}
      <section className="max-w-[1240px] mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-24">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Text */}
          <div className="lg:col-span-6 flex flex-col items-start text-left">
            <h2 style={sectionHeadingStyle} className="tracking-tight mb-6">
              One person. One platform. A creator program that scales.
            </h2>

            <p className="text-gray-600 text-base sm:text-lg leading-relaxed mb-6 font-normal">
              Every step of your influencer marketing campaign lives in the same place. You are not managing multiple tools or coordinating across inboxes. You are running a complete creator program from one account, the same way a full marketing team would, without the overhead.
            </p>

            <div className="text-sm font-extrabold text-gray-900 mb-8">
              Less time on the process. More time on the brand.
            </div>

            <button
              onClick={onNavigateSearch}
              className="inline-flex items-center gap-2 bg-[#22252a] hover:bg-black text-white px-7 py-3.5 rounded-xl font-bold text-sm transition-all duration-200 shadow-md hover:shadow-xl cursor-pointer group"
            >
              Book a Demo
              <ArrowRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
            </button>
          </div>

          {/* Right Card (Dark Dashboard Widget) */}
          <div className="lg:col-span-6 flex justify-center">
            <div className="w-full max-w-[480px] bg-[#22252a] text-white rounded-[32px] p-6 sm:p-8 space-y-6 shadow-2xl">
              
              <div className="flex items-center justify-between border-b border-gray-800 pb-4">
                <div>
                  <div className="text-xs text-gray-400 font-bold uppercase tracking-wider">Active Collaborations</div>
                  <div className="text-2xl font-black text-white mt-0.5">14 creators</div>
                </div>
                <span className="bg-emerald-500/20 text-emerald-400 text-xs font-bold px-2.5 py-1 rounded-full border border-emerald-500/30">
                  ● Live Pipeline
                </span>
              </div>

              {/* Status List */}
              <div className="space-y-3">
                <div className="flex items-center justify-between text-xs bg-white/5 p-3 rounded-xl">
                  <span className="text-gray-300 font-medium">Briefs Dispatched</span>
                  <span className="font-bold text-white">14 / 14</span>
                </div>
                <div className="flex items-center justify-between text-xs bg-white/5 p-3 rounded-xl">
                  <span className="text-gray-300 font-medium">Content Under Review</span>
                  <span className="font-bold text-amber-400">3 Pending</span>
                </div>
                <div className="flex items-center justify-between text-xs bg-white/5 p-3 rounded-xl">
                  <span className="text-gray-300 font-medium">Approved & Paid</span>
                  <span className="font-bold text-emerald-400">11 Completed</span>
                </div>
              </div>

              <div className="pt-2 text-center text-xs text-gray-400">
                Total Team Headcount: <strong className="text-white">1 Founder</strong>
              </div>

            </div>
          </div>

        </div>
      </section>

      {/* ------------------------------------------------------------- */}
      {/* SECTION 7: DARK CTA FOOTER CARD                               */}
      {/* ------------------------------------------------------------- */}
      <section className="max-w-[1140px] mx-auto px-4 sm:px-6 lg:px-0 my-16">
        <div className="bg-[#22252a] rounded-[32px] sm:rounded-[40px] p-8 sm:p-12 lg:p-16 text-center text-white shadow-2xl relative overflow-hidden">
          
          <h2 style={darkSectionHeadingStyle} className="max-w-2xl mx-auto mb-4 tracking-tight">
            Stop juggling tools. Start scaling your creator collaborations.
          </h2>

          <p className="text-gray-400 text-sm sm:text-base max-w-xl mx-auto mb-8 leading-relaxed font-normal">
            Find vetted creators, run end-to-end campaigns, and pay worldwide, all from a single dashboard built for growing brands.
          </p>

          <div className="flex items-center justify-center gap-3">
            <button
              onClick={onNavigateSearch}
              className="inline-flex items-center gap-2 bg-white hover:bg-gray-100 text-gray-900 font-bold px-7 py-3.5 rounded-xl transition-all duration-200 shadow-lg text-sm cursor-pointer group"
            >
              Book a Demo
              <ArrowRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
            </button>
            <button
              onClick={onNavigateSearch}
              className="inline-flex items-center justify-center bg-white/10 hover:bg-white/20 text-white font-bold px-7 py-3.5 rounded-xl transition-all duration-200 text-sm border border-white/20 cursor-pointer"
            >
              Start free
            </button>
          </div>
        </div>
      </section>

    </div>
  );
};
