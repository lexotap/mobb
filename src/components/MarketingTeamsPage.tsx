import React, { useState } from 'react';
import {
  Check,
  ArrowRight,
  ChevronDown,
  Users,
  Search,
  Plus,
  BarChart2,
  TrendingUp,
  LayoutGrid,
  CreditCard,
  Layers,
  Sparkles,
  RefreshCw,
  FileText,
  DollarSign
} from 'lucide-react';
import { TrustedBrands } from './TrustedBrands';
import { WhatBrandsSay } from './WhatBrandsSay';
import {
  ivanaMarketinImg,
  oliviaPezzenteImg,
  marimiqadzzeImg,
  niloofarTaghaviImg,
  alicjaWerniewiczImg,
  luiseBlumstengelImg,
  outOfAlexCamImg,
} from '../avatars';

interface MarketingTeamsPageProps {
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

export const MarketingTeamsPage: React.FC<MarketingTeamsPageProps> = ({ onNavigateHome, onNavigateSearch }) => {
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
              One platform for your <span className="text-accent-pink">entire creator program.</span>
            </h1>

            <p className="text-gray-600 text-lg sm:text-xl leading-relaxed mb-8 max-w-xl font-normal">
              Every collaboration type your team runs, managed from search to payment inside Mobb.
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
                Every collaboration type managed in one platform
              </div>

              <div className="bg-gray-100/90 rounded-full px-3.5 py-1.5 text-xs font-medium text-gray-700 flex items-center gap-1.5">
                <span className="w-4 h-4 rounded-full bg-emerald-600 text-white flex items-center justify-center shrink-0">
                  <Check className="w-2.5 h-2.5 stroke-[3]" />
                </span>
                Trusted by marketing teams at brands of every size
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

          {/* Right Hero Graphic - Dark Box with Overlay Badges */}
          <div className="lg:col-span-6 flex justify-center lg:justify-end">
            <div className="w-full max-w-[480px] h-[420px] sm:h-[460px] bg-[#22252a] rounded-[36px] p-6 sm:p-8 relative overflow-hidden flex items-center justify-center shadow-2xl">
              
              {/* Creator Card 1 (Top Left Model) */}
              <div className="absolute top-8 left-8 w-[200px] h-[220px] rounded-2xl overflow-hidden border-2 border-white/10 shadow-2xl">
                <img
                  src={luiseBlumstengelImg}
                  alt="Creator 1"
                  className="w-full h-full object-cover"
                />
              </div>

              {/* Creator Card 2 (Bottom Right Model B&W style) */}
              <div className="absolute bottom-8 right-8 w-[200px] h-[220px] rounded-2xl overflow-hidden border-2 border-white/10 shadow-2xl">
                <img
                  src={outOfAlexCamImg}
                  alt="Creator 2"
                  className="w-full h-full object-cover"
                />
              </div>

              {/* Floating Social Media & Status Badges */}
              
              {/* TikTok Badge */}
              <div className="absolute top-16 left-4 bg-[#f43f5e] text-white text-[11px] font-extrabold px-3 py-1.5 rounded-full shadow-lg flex items-center gap-1.5 z-20">
                <span className="w-2.5 h-2.5 rounded-full bg-black flex items-center justify-center text-[8px]">♪</span>
                TikTok
              </div>

              {/* Instagram Badge */}
              <div className="absolute top-10 right-12 bg-[#f43f5e] text-white text-[11px] font-extrabold px-3.5 py-1.5 rounded-full shadow-lg flex items-center gap-1.5 z-20">
                <span className="text-xs">📸</span>
                Instagram
              </div>

              {/* Approved Badge */}
              <div className="absolute top-1/2 -translate-y-8 left-6 bg-[#16a34a] text-white text-xs font-bold px-3.5 py-1.5 rounded-xl shadow-lg flex items-center gap-2 z-20">
                <span className="w-2 h-2 rounded-full bg-white"></span>
                Approved
              </div>

              {/* Impressions Badge */}
              <div className="absolute top-1/2 -translate-y-4 right-6 bg-[#f43f5e] text-white p-3 rounded-2xl shadow-xl z-20 flex flex-col justify-center">
                <div className="flex items-center gap-1 text-[10px] uppercase font-bold text-rose-100">
                  <BarChart2 className="w-3 h-3" />
                  Impressions
                </div>
                <div className="text-sm font-black mt-0.5">3.1 M</div>
              </div>

              {/* In Escrow Badge */}
              <div className="absolute bottom-16 left-16 bg-[#16a34a] text-white text-xs font-bold px-3.5 py-2 rounded-xl shadow-lg flex items-center gap-2 z-20">
                <span className="w-3.5 h-3.5 rounded-md bg-emerald-800/60 flex items-center justify-center text-[9px] font-mono">$</span>
                In Escrow
              </div>

              {/* Youtube Badge */}
              <div className="absolute bottom-12 right-12 bg-[#f43f5e] text-white text-[11px] font-extrabold px-3 py-1.5 rounded-full shadow-lg flex items-center gap-1.5 z-20">
                <span className="text-xs">▶</span>
                Youtube
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
        <h2 style={sectionHeadingStyle} className="text-center max-w-3xl mx-auto mb-16 tracking-tight">
          Your team is already running a creator program. It just lives in too many places.
        </h2>

        {/* Comparison Diagram Card */}
        <div className="bg-gray-50/80 rounded-[32px] p-6 sm:p-10 border border-gray-200/80 shadow-xs max-w-5xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            
            {/* Left Stack: Disconnected Tools */}
            <div className="lg:col-span-5 space-y-3">
              <div className="text-[11px] font-bold tracking-wider text-gray-400 uppercase mb-2">
                THE STACK TODAY
              </div>

              <div className="grid grid-cols-2 gap-3">
                <div className="bg-white p-3.5 rounded-xl border border-gray-200 shadow-2xs">
                  <div className="text-xs font-extrabold text-gray-900">Discovery tool</div>
                  <div className="text-[11px] text-gray-400 mt-1">One place to find creators</div>
                </div>

                <div className="bg-white p-3.5 rounded-xl border border-gray-200 shadow-2xs">
                  <div className="text-xs font-extrabold text-gray-900">Briefs over email</div>
                  <div className="text-[11px] text-gray-400 mt-1">Threads, attachments, follow-ups</div>
                </div>

                <div className="bg-white p-3.5 rounded-xl border border-gray-200 shadow-2xs">
                  <div className="text-xs font-extrabold text-gray-900">Payments</div>
                  <div className="text-[11px] text-gray-400 mt-1">Processed separately</div>
                </div>

                <div className="bg-white p-3.5 rounded-xl border border-gray-200 shadow-2xs">
                  <div className="text-xs font-extrabold text-gray-900">Performance</div>
                  <div className="text-[11px] text-gray-400 mt-1">Pulled manually</div>
                </div>
              </div>

              <div className="text-xs text-rose-500 font-semibold pt-1 flex items-center gap-1">
                <span>⚡</span> Disconnected — friction at every handoff
              </div>
            </div>

            {/* Middle Arrow */}
            <div className="lg:col-span-2 flex justify-center py-2 lg:py-0">
              <div className="w-10 h-10 rounded-full bg-gray-900 text-white flex items-center justify-center shadow-md">
                <ArrowRight className="w-5 h-5" />
              </div>
            </div>

            {/* Right Stack: Mobb End-to-End */}
            <div className="lg:col-span-5 bg-white p-6 rounded-2xl border border-gray-200 shadow-md">
              <div className="text-[11px] font-bold tracking-wider text-rose-500 uppercase mb-2">
                ONE PLATFORM, END TO END
              </div>
              <div className="text-lg font-black text-gray-900 mb-6">
                mobb
              </div>

              {/* Horizontal Workflow Stepper */}
              <div className="grid grid-cols-6 gap-1 text-center border-t border-b border-gray-100 py-4 mb-4">
                <div>
                  <div className="text-xs font-bold text-gray-800">Search</div>
                </div>
                <div>
                  <div className="text-xs font-bold text-gray-800">Brief</div>
                </div>
                <div>
                  <div className="text-xs font-bold text-gray-800">Hire</div>
                </div>
                <div>
                  <div className="text-xs font-bold text-gray-800">Approve</div>
                </div>
                <div>
                  <div className="text-xs font-bold text-gray-800">Pay</div>
                </div>
                <div>
                  <div className="text-xs font-bold text-gray-800">Track</div>
                </div>
              </div>

              <div className="text-xs text-gray-500 font-medium">
                Mobb replaces that stack with one platform, end to end.
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* ------------------------------------------------------------- */}
      {/* SECTION 4: WHAT CHANGES WHEN YOUR TEAM RUNS ON MOBB      */}
      {/* ------------------------------------------------------------- */}
      <section className="max-w-[1240px] mx-auto px-4 sm:px-6 lg:px-8 space-y-24 py-12">
        
        <h2 style={sectionHeadingStyle} className="text-center tracking-tight mb-16">
          What Changes When Your Team Runs On Mobb.
        </h2>

        {/* ROW 1: You Stop Managing Campaigns Across Tools */}
        <div className="feature-grid-row">
          {/* Text Left */}
          <div className="space-y-4 text-left flex flex-col justify-center">
            <h3 style={sectionHeadingStyle} className="tracking-tight mb-2">
              You Stop Managing Campaigns Across Tools
            </h3>
            <p className="text-gray-600 text-base sm:text-lg leading-relaxed font-normal mb-2">
              Every creator search, brief, negotiation, content approval, and payment happens inside the same platform. One account. No switching.
            </p>

            {/* Testimonial Quote Callout */}
            <div className="border-l-2 border-rose-400 pl-4 py-1 my-2">
              <p className="text-xs sm:text-sm text-gray-600 italic leading-relaxed">
                "Mobb's advanced filters allowed us to shortlist 46 highly relevant influencers quickly. We worked with 29 of them across Instagram and TikTok, generating 29 engaging videos and over 3 million impressions."
              </p>
              <div className="text-xs font-extrabold text-gray-900 mt-2">
                Marketing Team, <span className="text-emerald-700 font-bold">Wealthsimple</span>
              </div>
            </div>
          </div>

          {/* Graphic Right (Pink Background Container) */}
          <div className="flex justify-center">
            <div className="feature-card-wrapper bg-[#fecdd3]/40">
              <div className="feature-card-inner space-y-3">
                {/* Step 1 */}
                <div className="p-3 bg-gray-50 rounded-xl flex items-center gap-3 border border-gray-100">
                  <div className="w-7 h-7 rounded-lg bg-pink-100 text-pink-600 flex items-center justify-center font-bold text-xs shrink-0">🔍</div>
                  <div>
                    <div className="font-extrabold text-gray-900 text-xs">Search and shortlist</div>
                    <div className="text-[10px] text-gray-400">550k+ vetted creators</div>
                  </div>
                </div>

                {/* Step 2 */}
                <div className="p-3 bg-gray-50 rounded-xl flex items-center gap-3 border border-gray-100">
                  <div className="w-7 h-7 rounded-lg bg-indigo-100 text-indigo-600 flex items-center justify-center font-bold text-xs shrink-0">📄</div>
                  <div>
                    <div className="font-extrabold text-gray-900 text-xs">Brief and agree terms</div>
                    <div className="text-[10px] text-gray-400">On record before posting</div>
                  </div>
                </div>

                {/* Step 3 */}
                <div className="p-3 bg-gray-50 rounded-xl flex items-center gap-3 border border-gray-100">
                  <div className="w-7 h-7 rounded-lg bg-amber-100 text-amber-600 flex items-center justify-center font-bold text-xs shrink-0">👁️</div>
                  <div>
                    <div className="font-extrabold text-gray-900 text-xs">Review and approve</div>
                    <div className="text-[10px] text-gray-400">Before anything goes live</div>
                  </div>
                </div>

                {/* Step 4 */}
                <div className="p-3 bg-gray-50 rounded-xl flex items-center gap-3 border border-gray-100">
                  <div className="w-7 h-7 rounded-lg bg-emerald-100 text-emerald-600 flex items-center justify-center font-bold text-xs shrink-0">💳</div>
                  <div>
                    <div className="font-extrabold text-gray-900 text-xs">Pay through escrow</div>
                    <div className="text-[10px] text-gray-400">Released on approval</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* ROW 2: You Run More Campaign Types Simultaneously */}
        <div className="feature-grid-row">
          {/* Graphic Left (Indigo Background Container) */}
          <div className="lg:order-1 flex justify-center">
            <div className="feature-card-wrapper bg-[#e0e7ff]/60">
              <div className="feature-card-inner space-y-4">
                <div className="flex items-center justify-between border-b border-gray-100 pb-3">
                  <div className="font-extrabold text-gray-900 text-sm">Programs running</div>
                  <span className="text-[10px] font-bold text-indigo-600 bg-indigo-50 px-2.5 py-1 rounded-full">
                    Same workflow
                  </span>
                </div>

                {/* 4 Program Types Grid */}
                <div className="grid grid-cols-2 gap-3">
                  <div className="p-3 bg-gray-50 rounded-xl border border-gray-100">
                    <div className="text-[10px] text-rose-500 font-extrabold mb-1">📹 UGC</div>
                    <div className="font-bold text-gray-900 text-xs">8 active</div>
                  </div>

                  <div className="p-3 bg-gray-50 rounded-xl border border-gray-100">
                    <div className="text-[10px] text-indigo-500 font-extrabold mb-1">🌟 Influencer</div>
                    <div className="font-bold text-gray-900 text-xs">5 active</div>
                  </div>

                  <div className="p-3 bg-gray-50 rounded-xl border border-gray-100">
                    <div className="text-[10px] text-amber-500 font-extrabold mb-1">🎁 Gifting</div>
                    <div className="font-bold text-gray-900 text-xs">3 active</div>
                  </div>

                  <div className="p-3 bg-gray-50 rounded-xl border border-gray-100">
                    <div className="text-[10px] text-emerald-500 font-extrabold mb-1">🔗 Affiliate</div>
                    <div className="font-bold text-gray-900 text-xs">6 active</div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Text Right */}
          <div className="space-y-4 text-left flex flex-col justify-center lg:order-2">
            <h3 style={sectionHeadingStyle} className="tracking-tight mb-2">
              You Run More Campaign Types Simultaneously
            </h3>
            <p className="text-gray-600 text-base sm:text-lg leading-relaxed font-normal">
              UGC, influencer campaigns, gifting, sponsored posts, affiliate deals. Every collaboration type follows the same structured workflow. Your team runs multiple programs at once without doubling the operational load.
            </p>
          </div>
        </div>

        {/* ROW 3: You Know Which Creators To Invest In Next */}
        <div className="feature-grid-row">
          {/* Text Left */}
          <div className="space-y-4 text-left flex flex-col justify-center">
            <h3 style={sectionHeadingStyle} className="tracking-tight mb-2">
              You Know Which Creators To Invest In Next
            </h3>
            <p className="text-gray-600 text-base sm:text-lg leading-relaxed font-normal">
              Performance data per creator and per post tracked in real time, inside the same platform where you manage campaigns. No manual pulls. No separate reporting tool.
            </p>
          </div>

          {/* Graphic Right (Yellow Background Container) */}
          <div className="flex justify-center">
            <div className="feature-card-wrapper bg-[#fef08a]/60">
              <div className="feature-card-inner space-y-4 text-xs">
                <div className="flex items-center justify-between border-b border-gray-100 pb-3">
                  <div className="font-extrabold text-gray-900">Performance · per creator</div>
                  <span className="text-[10px] font-bold text-emerald-700 bg-emerald-50 px-2 py-0.5 rounded-full flex items-center gap-1">
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse"></span> Live
                  </span>
                </div>

                {/* Stats Header */}
                <div className="grid grid-cols-3 gap-2 bg-gray-50 p-2.5 rounded-xl border border-gray-100 text-center">
                  <div>
                    <div className="text-[10px] text-gray-400">Impressions</div>
                    <div className="font-extrabold text-gray-900 text-xs">412K</div>
                  </div>
                  <div>
                    <div className="text-[10px] text-gray-400">Engagement</div>
                    <div className="font-extrabold text-gray-900 text-xs">6.8%</div>
                  </div>
                  <div>
                    <div className="text-[10px] text-gray-400">Top creator</div>
                    <div className="font-extrabold text-gray-900 text-xs">Drea</div>
                  </div>
                </div>

                {/* Performance Creator List */}
                <div className="space-y-2">
                  <div className="flex items-center justify-between p-2 bg-gray-50 rounded-lg">
                    <div className="flex items-center gap-2">
                      <img src={ivanaMarketinImg} className="w-6 h-6 rounded-full object-cover" alt="Drea" />
                      <div>
                        <div className="font-bold text-gray-900 text-[11px]">Drea Phillips</div>
                        <div className="text-[9px] text-gray-400">Reel · 142K views</div>
                      </div>
                    </div>
                    <div className="w-16 h-1.5 bg-rose-500 rounded-full"></div>
                  </div>

                  <div className="flex items-center justify-between p-2 bg-gray-50 rounded-lg">
                    <div className="flex items-center gap-2">
                      <img src={oliviaPezzenteImg} className="w-6 h-6 rounded-full object-cover" alt="Hana" />
                      <div>
                        <div className="font-bold text-gray-900 text-[11px]">Hana Kim</div>
                        <div className="text-[9px] text-gray-400">Post · 9.1% eng.</div>
                      </div>
                    </div>
                    <div className="w-12 h-1.5 bg-rose-400 rounded-full"></div>
                  </div>

                  <div className="flex items-center justify-between p-2 bg-gray-50 rounded-lg">
                    <div className="flex items-center gap-2">
                      <img src={marimiqadzzeImg} className="w-6 h-6 rounded-full object-cover" alt="Amara" />
                      <div>
                        <div className="font-bold text-gray-900 text-[11px]">Amara Lewis</div>
                        <div className="text-[9px] text-gray-400">Story · 61K views</div>
                      </div>
                    </div>
                    <div className="w-8 h-1.5 bg-rose-300 rounded-full"></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* ROW 4: You Build A Roster That Compounds Over Time */}
        <div className="feature-grid-row">
          {/* Graphic Left (Light Gray Background Container) */}
          <div className="lg:order-1 flex justify-center">
            <div className="feature-card-wrapper bg-gray-200/70">
              <div className="feature-card-inner space-y-3 text-xs">
                <div className="flex items-center justify-between border-b border-gray-100 pb-2.5">
                  <div className="font-extrabold text-gray-900">Your saved roster</div>
                  <span className="text-[10px] text-gray-400 font-bold">31 creators</span>
                </div>

                {/* Creator Roster Rows */}
                <div className="space-y-2">
                  <div className="flex items-center justify-between p-2.5 bg-gray-50 rounded-xl border border-gray-100">
                    <div className="flex items-center gap-2">
                      <img src={niloofarTaghaviImg} className="w-7 h-7 rounded-full object-cover" alt="Priya" />
                      <div>
                        <div className="font-bold text-gray-900 text-xs">Priya Nair</div>
                        <div className="text-[10px] text-gray-400">Hired 3x · Beauty</div>
                      </div>
                    </div>
                    <button className="bg-white border border-gray-200 text-gray-800 hover:bg-gray-100 font-bold text-[10px] px-2.5 py-1 rounded-lg flex items-center gap-1">
                      <RefreshCw className="w-2.5 h-2.5 text-gray-500" /> Rehire
                    </button>
                  </div>

                  <div className="flex items-center justify-between p-2.5 bg-gray-50 rounded-xl border border-gray-100">
                    <div className="flex items-center gap-2">
                      <img src={ivanaMarketinImg} className="w-7 h-7 rounded-full object-cover" alt="Drea" />
                      <div>
                        <div className="font-bold text-gray-900 text-xs">Drea Phillips</div>
                        <div className="text-[10px] text-gray-400">Hired 2x · Wellness</div>
                      </div>
                    </div>
                    <button className="bg-white border border-gray-200 text-gray-800 hover:bg-gray-100 font-bold text-[10px] px-2.5 py-1 rounded-lg flex items-center gap-1">
                      <RefreshCw className="w-2.5 h-2.5 text-gray-500" /> Rehire
                    </button>
                  </div>

                  <div className="flex items-center justify-between p-2.5 bg-gray-50 rounded-xl border border-gray-100">
                    <div className="flex items-center gap-2">
                      <img src={alicjaWerniewiczImg} className="w-7 h-7 rounded-full object-cover" alt="Hana" />
                      <div>
                        <div className="font-bold text-gray-900 text-xs">Hana Kim</div>
                        <div className="text-[10px] text-gray-400">Hired 4x · Food</div>
                      </div>
                    </div>
                    <button className="bg-white border border-gray-200 text-gray-800 hover:bg-gray-100 font-bold text-[10px] px-2.5 py-1 rounded-lg flex items-center gap-1">
                      <RefreshCw className="w-2.5 h-2.5 text-gray-500" /> Rehire
                    </button>
                  </div>
                </div>

                <div className="p-2 bg-rose-50 rounded-lg text-rose-700 text-[10px] font-bold text-center">
                  ✨ Second campaign briefed in minutes, not days
                </div>
              </div>
            </div>
          </div>

          {/* Text Right */}
          <div className="space-y-4 text-left flex flex-col justify-center lg:order-2">
            <h3 style={sectionHeadingStyle} className="tracking-tight mb-2">
              You Build A Roster That Compounds Over Time
            </h3>
            <p className="text-gray-600 text-base sm:text-lg leading-relaxed font-normal">
              Every creator you hire, every collaboration history, and every performance record stays in your account. The second campaign is faster than the first. Your team does more without adding headcount.
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
      {/* SECTION 6: EFFICIENCY / PROGRESSION SECTION                    */}
      {/* ------------------------------------------------------------- */}
      <section className="max-w-[1240px] mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-24">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Text */}
          <div className="lg:col-span-6 flex flex-col items-start text-left">
            <h2 style={sectionHeadingStyle} className="tracking-tight mb-6">
              The more you run on Mobb, the more efficient your team gets.
            </h2>

            <p className="text-gray-600 text-base sm:text-lg leading-relaxed mb-6 font-normal">
              Every creator hired, every brief sent, and every payment processed builds on the last. Your creator roster grows. Your campaigns get faster. Your team runs more programs than it could before, with the same headcount.
            </p>

            <div className="text-sm font-extrabold text-gray-900 mb-8">
              Less time managing the process. More time running the campaigns.
            </div>

            <button
              onClick={onNavigateSearch}
              className="inline-flex items-center gap-2 bg-[#22252a] hover:bg-black text-white px-7 py-3.5 rounded-xl font-bold text-sm transition-all duration-200 shadow-md hover:shadow-xl cursor-pointer group"
            >
              Book a Demo
              <ArrowRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
            </button>
          </div>

          {/* Right Progress Card (Dark Container) */}
          <div className="lg:col-span-6 flex justify-center">
            <div className="w-full max-w-[480px] bg-[#22252a] text-white rounded-[32px] p-6 sm:p-8 space-y-6 shadow-2xl">
              
              {/* Campaign 01 */}
              <div className="bg-[#2d3139] p-4 rounded-2xl space-y-2">
                <div className="flex items-center justify-between text-xs font-bold">
                  <span>Campaign 01</span>
                  <span className="text-gray-400 font-normal text-[11px]">👤 0 saved creators</span>
                </div>
                <div className="text-[11px] text-gray-400">Setup from scratch</div>
                <div className="w-full h-2 bg-gray-700 rounded-full overflow-hidden">
                  <div className="w-1/3 h-full bg-rose-400"></div>
                </div>
              </div>

              {/* Campaign 02 */}
              <div className="bg-[#2d3139] p-4 rounded-2xl space-y-2">
                <div className="flex items-center justify-between text-xs font-bold">
                  <span>Campaign 02</span>
                  <span className="text-gray-400 font-normal text-[11px]">👤 12 saved creators</span>
                </div>
                <div className="text-[11px] text-gray-400">Rehire + brief in minutes</div>
                <div className="w-full h-2 bg-gray-700 rounded-full overflow-hidden">
                  <div className="w-2/3 h-full bg-rose-400"></div>
                </div>
              </div>

              {/* Campaign 03 */}
              <div className="bg-[#2d3139] p-4 rounded-2xl space-y-2">
                <div className="flex items-center justify-between text-xs font-bold">
                  <span>Campaign 03</span>
                  <span className="text-gray-400 font-normal text-[11px]">👤 31 saved creators</span>
                </div>
                <div className="text-[11px] text-gray-400">Roster ready, terms templated</div>
                <div className="w-full h-2 bg-gray-700 rounded-full overflow-hidden">
                  <div className="w-full h-full bg-rose-400"></div>
                </div>
              </div>

              <div className="text-[11px] text-rose-300 font-medium text-center">
                ✨ Each campaign starts further ahead than the last
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
            See what changes when your team runs on Mobb.
          </h2>

          <p className="text-gray-400 text-sm sm:text-base max-w-xl mx-auto mb-8 leading-relaxed">
            Book a demo and see how marketing teams manage their entire creator program, from first search to final payment, in one place.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
            <button
              onClick={onNavigateSearch}
              className="w-full sm:w-auto inline-flex items-center justify-center bg-white hover:bg-gray-100 text-gray-900 font-bold px-8 py-3.5 rounded-xl transition-all duration-200 shadow-lg text-sm cursor-pointer"
            >
              Book a Demo
            </button>
            <button
              onClick={onNavigateSearch}
              className="w-full sm:w-auto inline-flex items-center justify-center bg-transparent border border-gray-600 hover:bg-gray-800 text-white font-bold px-8 py-3.5 rounded-xl transition-all duration-200 text-sm cursor-pointer"
            >
              Start free
            </button>
          </div>
        </div>
      </section>

    </div>
  );
};
