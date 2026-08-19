import React, { useState } from 'react';
import {
  Check,
  ArrowRight,
  ChevronDown,
  Megaphone,
  Users,
  DollarSign,
  Layers,
  Sparkles,
  Upload,
  Globe,
  FileText,
  Hand,
  UserCheck,
  BarChart2,
  Sliders,
  Star
} from 'lucide-react';
import { TrustedBrands } from './TrustedBrands';
import { WhatBrandsSay } from './WhatBrandsSay';
import {
  dbrkvImg,
  hermanStrydomImg,
  oliviaPezzenteImg,
  marimiqadzzeImg,
  niloofarTaghaviImg,
  luiseBlumstengelImg,
  sofiaJensenImg,
  renateReinsveImg,
  stephenGImg,
  ivanaMarketinImg,
} from '../avatars';

interface CampaignBriefsPageProps {
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

export const CampaignBriefsPage: React.FC<CampaignBriefsPageProps> = ({ onNavigateHome, onNavigateSearch }) => {
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  const toggleFaq = (index: number) => {
    setOpenFaq(openFaq === index ? null : index);
  };

  const faqItems = [
    {
      q: 'Can I post a campaign on the free plan?',
      a: 'Yes, you can draft and preview your campaign brief for free. Upgrading to a Pro or Premium plan allows your campaign to go live and receive applications from verified creators.',
    },
    {
      q: 'What is AI campaign creation?',
      a: "Mobb's AI campaign assistant takes a simple description or website link and automatically generates a complete, professional brief including deliverable requirements, targeting criteria, and timeline.",
    },
    {
      q: 'Do creators apply with their rates included?',
      a: 'Yes! Every creator application includes their explicit proposed rate, deliverables, and estimated turnaround time, eliminating back-and-forth price negotiations.',
    },
    {
      q: 'What is Instant match?',
      a: 'Instant match instantly scans Mobb’s vetted database of 500,000+ creators as soon as your brief is complete, automatically surfacing the highest-fit creators matching your niche and criteria.',
    },
    {
      q: 'How many campaigns can I run at the same time?',
      a: 'Pro and Premium subscribers can run multiple active campaigns simultaneously across different product lines, platforms, or geographic regions.',
    },
    {
      q: 'What is the difference between a campaign and a direct hire?',
      a: 'A direct hire lets you search the marketplace and order directly from a specific creator. A campaign allows you to broadcast your brief so multiple qualified creators apply to work with you.',
    },
    {
      q: 'Can I set targeting criteria for who sees my campaign?',
      a: 'Yes, you can specify location, platform (Instagram, TikTok, YouTube), follower range, engagement rate, gender, and content niche to ensure only relevant creators view and apply.',
    },
    {
      q: 'What platforms does Mobb cover?',
      a: 'Mobb supports campaigns on Instagram (Reels, Feed Posts, Stories), TikTok (Videos), and YouTube (Shorts & Long-form Videos).',
    },
  ];

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
              Post a campaign brief. <span className="text-accent-pink">Let creators come to you.</span>
            </h1>

            <p className="text-gray-600 text-lg sm:text-xl leading-relaxed mb-8 max-w-xl font-normal">
              Write a brief, and Mobb does the rest. Instant match surfaces the best-fit creators immediately. Then your campaign goes live and more creators apply with their rates included. You choose who fits.
            </p>

            {/* Feature Badges */}
            <div className="flex flex-wrap gap-2.5 mb-10">
              <div className="bg-gray-100/90 rounded-full px-3.5 py-1.5 text-xs font-medium text-gray-700 flex items-center gap-1.5">
                <span className="w-4 h-4 rounded-full bg-emerald-600 text-white flex items-center justify-center shrink-0">
                  <Check className="w-2.5 h-2.5 stroke-[3]" />
                </span>
                AI builds your brief in minutes
              </div>

              <div className="bg-gray-100/90 rounded-full px-3.5 py-1.5 text-xs font-medium text-gray-700 flex items-center gap-1.5">
                <span className="w-4 h-4 rounded-full bg-emerald-600 text-white flex items-center justify-center shrink-0">
                  <Check className="w-2.5 h-2.5 stroke-[3]" />
                </span>
                Instant match surfaces creators immediately
              </div>

              <div className="bg-gray-100/90 rounded-full px-3.5 py-1.5 text-xs font-medium text-gray-700 flex items-center gap-1.5">
                <span className="w-4 h-4 rounded-full bg-emerald-600 text-white flex items-center justify-center shrink-0">
                  <Check className="w-2.5 h-2.5 stroke-[3]" />
                </span>
                Available on Pro and Premium plans
              </div>
            </div>

            {/* CTA Button */}
            <a
              href="#start-campaign"
              className="inline-flex items-center gap-2 bg-[#22252a] hover:bg-black text-white px-7 py-3.5 rounded-full font-bold text-sm transition-all duration-200 shadow-md hover:shadow-xl cursor-pointer group"
            >
              Start your first campaign
              <ArrowRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
            </a>
          </div>

          {/* Right Hero Graphic - Campaign Preview Card */}
          <div className="lg:col-span-6 flex justify-center lg:justify-end">
            <div className="w-full max-w-md bg-white rounded-[32px] shadow-[0_20px_50px_rgba(0,0,0,0.08)] p-7 sm:p-8 border border-gray-100 relative overflow-hidden">
              
              {/* Header Badge */}
              <div className="flex items-center gap-2 mb-6 text-[#f43f5e] font-extrabold text-xs tracking-wider uppercase">
                <div className="w-7 h-7 rounded-full bg-rose-100 flex items-center justify-center">
                  <Megaphone className="w-3.5 h-3.5 text-[#f43f5e]" />
                </div>
                CAMPAIGN
              </div>

              {/* Inner Gray Campaign Card */}
              <div className="bg-gray-100/80 rounded-2xl p-5 mb-6">
                <h3 className="text-xl font-extrabold text-gray-900 mb-3 tracking-tight">
                  Marriott Bonvoy EMEA Campaign
                </h3>

                <div className="flex flex-wrap gap-2">
                  <span className="bg-white text-gray-600 px-3.5 py-1 rounded-full text-xs font-medium shadow-2xs border border-gray-100">
                    Hospitality
                  </span>
                  <span className="bg-white text-gray-600 px-3.5 py-1 rounded-full text-xs font-medium shadow-2xs border border-gray-100">
                    Travel UGC
                  </span>
                  <span className="bg-white text-gray-600 px-3.5 py-1 rounded-full text-xs font-medium shadow-2xs border border-gray-100">
                    €500+
                  </span>
                </div>
              </div>

              {/* Applicants Row */}
              <div className="flex items-center justify-between pt-2">
                <div className="text-gray-500 font-semibold text-sm">Applicants</div>
                <span className="bg-[#f43f5e] text-white text-[11px] font-black px-2.5 py-0.5 rounded-full uppercase tracking-wider">
                  27 NEW
                </span>
              </div>

              {/* Stacked Avatars */}
              <div className="flex items-center gap-3 mt-4">
                <div className="flex -space-x-2.5 overflow-hidden">
                  <img
                    className="inline-block h-10 w-10 rounded-full ring-2 ring-white object-cover"
                    src={dbrkvImg}
                    alt="Applicant"
                  />
                  <img
                    className="inline-block h-10 w-10 rounded-full ring-2 ring-white object-cover"
                    src={hermanStrydomImg}
                    alt="Applicant"
                  />
                  <img
                    className="inline-block h-10 w-10 rounded-full ring-2 ring-white object-cover"
                    src={oliviaPezzenteImg}
                    alt="Applicant"
                  />
                  <img
                    className="inline-block h-10 w-10 rounded-full ring-2 ring-white object-cover"
                    src={marimiqadzzeImg}
                    alt="Applicant"
                  />
                  <img
                    className="inline-block h-10 w-10 rounded-full ring-2 ring-white object-cover"
                    src={niloofarTaghaviImg}
                    alt="Applicant"
                  />
                </div>
                <span className="text-sm font-semibold text-gray-500">+7 more</span>
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
      {/* SECTION 3: INBOUND APPLICATIONS, NOT COLD OUTREACH            */}
      {/* ------------------------------------------------------------- */}
      <section className="max-w-[1240px] mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-24">
        <h2 style={sectionHeadingStyle} className="text-center mb-16 tracking-tight">
          Inbound applications, not cold outreach
        </h2>

        {/* 4 Value Prop Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          
          {/* Card 1: Less cold outreach */}
          <div className="bg-gray-100/70 rounded-2xl p-6 flex flex-col justify-between border border-gray-200/50 hover:shadow-md transition-all">
            <div className="w-10 h-10 rounded-xl bg-white shadow-xs border border-gray-100 flex items-center justify-center mb-6 text-gray-900">
              <Hand className="w-5 h-5 stroke-[2.2]" />
            </div>
            <div>
              <h3 className="font-bold text-gray-900 text-base mb-2">Less cold outreach</h3>
              <p className="text-gray-500 text-xs sm:text-sm leading-relaxed">
                Stop spending hours on outreach and start receiving qualified applications
              </p>
            </div>
          </div>

          {/* Card 2: Applicants who want you */}
          <div className="bg-gray-100/70 rounded-2xl p-6 flex flex-col justify-between border border-gray-200/50 hover:shadow-md transition-all">
            <div className="w-10 h-10 rounded-xl bg-white shadow-xs border border-gray-100 flex items-center justify-center mb-6 text-gray-900">
              <UserCheck className="w-5 h-5 stroke-[2.2]" />
            </div>
            <div>
              <h3 className="font-bold text-gray-900 text-base mb-2">Applicants who want you</h3>
              <p className="text-gray-500 text-xs sm:text-sm leading-relaxed">
                Every applicant has reviewed your brief and wants to work with you
              </p>
            </div>
          </div>

          {/* Card 3: Pricing upfront */}
          <div className="bg-gray-100/70 rounded-2xl p-6 flex flex-col justify-between border border-gray-200/50 hover:shadow-md transition-all">
            <div className="w-10 h-10 rounded-xl bg-white shadow-xs border border-gray-100 flex items-center justify-center mb-6 text-gray-900">
              <DollarSign className="w-5 h-5 stroke-[2.2]" />
            </div>
            <div>
              <h3 className="font-bold text-gray-900 text-base mb-2">Pricing upfront</h3>
              <p className="text-gray-500 text-xs sm:text-sm leading-relaxed">
                Pricing is included with every application, so you negotiate from a position of clarity
              </p>
            </div>
          </div>

          {/* Card 4: Scale your campaigns */}
          <div className="bg-gray-100/70 rounded-2xl p-6 flex flex-col justify-between border border-gray-200/50 hover:shadow-md transition-all">
            <div className="w-10 h-10 rounded-xl bg-white shadow-xs border border-gray-100 flex items-center justify-center mb-6 text-gray-900">
              <Layers className="w-5 h-5 stroke-[2.2]" />
            </div>
            <div>
              <h3 className="font-bold text-gray-900 text-base mb-2">Scale your campaigns</h3>
              <p className="text-gray-500 text-xs sm:text-sm leading-relaxed">
                Run multiple campaigns simultaneously without adding workload
              </p>
            </div>
          </div>

        </div>

        {/* Center CTA Button */}
        <div className="flex justify-center">
          <a
            href="#start-campaign"
            className="inline-flex items-center gap-2 bg-[#22252a] hover:bg-black text-white px-7 py-3.5 rounded-full font-bold text-sm transition-all duration-200 shadow-md hover:shadow-xl cursor-pointer group"
          >
            Start your first campaign
            <ArrowRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
          </a>
        </div>
      </section>

      {/* ------------------------------------------------------------- */}
      {/* SECTION 4: FEATURE DEEP DIVES (4 ALTERNATING ROWS)            */}
      {/* ------------------------------------------------------------- */}
      <section className="max-w-[1240px] mx-auto px-4 sm:px-6 lg:px-8 space-y-24 py-12">
        
        {/* ROW 1: Build A Campaign Brief In Minutes, Not Hours. */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Text Left */}
          <div className="lg:col-span-6 flex flex-col items-start text-left">
            <h2 style={sectionHeadingStyle} className="tracking-tight mb-6">
              Build A Campaign Brief In Minutes, Not Hours.
            </h2>
            <p className="text-gray-600 text-base sm:text-lg leading-relaxed font-normal">
              Describe what you need and AI campaign creation does the rest. Mobb writes your targeting criteria, deliverable requirements, and timeline automatically, so you start from a complete brief instead of a blank page. The moment your brief is ready, Instant match fires and surfaces the best-fit creators automatically.
            </p>
          </div>

          {/* Graphic Right (Pink Background Container) */}
          <div className="lg:col-span-6 flex justify-center">
            <div className="w-full max-w-[480px] min-h-[340px] bg-[#fecdd3]/40 rounded-3xl p-6 sm:p-8 flex justify-center items-center">
              <div className="w-full max-w-sm bg-white rounded-2xl shadow-xl border border-gray-100 p-5 space-y-3.5 text-xs">
                
                <div className="flex items-center justify-between border-b border-gray-100 pb-2">
                  <span className="font-extrabold text-gray-900 text-xs">Briefly Describe Your Campaign</span>
                  <span className="text-gray-400 font-bold text-sm cursor-pointer">×</span>
                </div>

                <div className="bg-gray-50 border border-gray-200/80 rounded-xl p-3 text-[11px] text-gray-600 font-sans italic leading-relaxed">
                  "we're launching a new skincare line and looking for nano influencers in beauty and lifestyle"
                </div>

                <div className="flex gap-2">
                  <button className="flex-1 border border-gray-200 rounded-lg py-1.5 text-[10px] font-semibold text-gray-600 flex items-center justify-center gap-1 hover:bg-gray-50">
                    <Upload className="w-3 h-3" /> Upload Files or Media
                  </button>
                  <button className="flex-1 border border-gray-200 rounded-lg py-1.5 text-[10px] font-semibold text-gray-600 flex items-center justify-center gap-1 hover:bg-gray-50">
                    <Globe className="w-3 h-3" /> Add Website
                  </button>
                </div>

                <button className="w-full bg-[#111827] text-white font-bold py-2.5 rounded-xl text-xs flex items-center justify-center gap-1.5 shadow-md">
                  <Sparkles className="w-3.5 h-3.5 text-pink-400" /> Auto-fill & Edit Campaign Brief
                </button>

                <div className="flex items-center gap-2 text-[10px] text-gray-400 justify-center">
                  <span className="h-px bg-gray-200 flex-1"></span>
                  or
                  <span className="h-px bg-gray-200 flex-1"></span>
                </div>

                <div className="flex gap-2">
                  <button className="flex-1 border border-gray-200 rounded-lg py-1.5 text-[10px] font-semibold text-gray-700 hover:bg-gray-50 flex items-center justify-center gap-1">
                    <FileText className="w-3 h-3 text-gray-400" /> Start Blank
                  </button>
                  <button className="flex-1 border border-gray-200 rounded-lg py-1.5 text-[10px] font-semibold text-gray-700 hover:bg-gray-50 flex items-center justify-center gap-1">
                    <Layers className="w-3 h-3 text-gray-400" /> Duplicate Past Campaign
                  </button>
                </div>

              </div>
            </div>
          </div>

        </div>

        {/* ROW 2: Surface The Best-Fit Creators The Moment Your Brief Is Ready. */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Graphic Left (Purple Background Container) */}
          <div className="lg:col-span-6 order-2 lg:order-1 flex justify-center">
            <div className="w-full max-w-[480px] min-h-[340px] bg-[#e0e7ff]/60 rounded-3xl p-6 sm:p-8 flex justify-center items-center">
              <div className="w-full max-w-md bg-white rounded-2xl shadow-xl border border-gray-100 p-4 space-y-3 text-xs">
                
                {/* Stats Tabs */}
                <div className="flex items-center gap-3 border-b border-gray-100 pb-2.5 text-[11px]">
                  <div className="flex items-center gap-1 font-extrabold text-indigo-600 border-b-2 border-indigo-600 pb-1">
                    Instant match <span className="bg-indigo-100 text-indigo-700 px-1.5 py-0.2 rounded-md text-[10px]">28</span>
                  </div>
                  <div className="flex items-center gap-1 text-gray-400 font-semibold">
                    Applicants <span className="bg-gray-100 text-gray-600 px-1.5 py-0.2 rounded-md text-[10px]">29</span>
                  </div>
                  <div className="flex items-center gap-1 text-gray-400 font-semibold">
                    Shortlist <span className="bg-gray-100 text-gray-600 px-1.5 py-0.2 rounded-md text-[10px]">3</span>
                  </div>
                  <div className="flex items-center gap-1 text-gray-400 font-semibold">
                    Hired <span className="bg-gray-100 text-gray-600 px-1.5 py-0.2 rounded-md text-[10px]">0</span>
                  </div>
                </div>

                {/* Creator Match Items */}
                <div className="space-y-2">
                  
                  {/* Creator 1 */}
                  <div className="p-2.5 bg-gray-50/80 rounded-xl border border-gray-100 flex items-center justify-between">
                    <div className="flex items-center gap-2.5">
                      <img
                        src={luiseBlumstengelImg}
                        alt="Janique Poulin"
                        className="w-9 h-9 rounded-full object-cover shrink-0"
                      />
                      <div>
                        <div className="font-bold text-gray-900 text-[11px] flex items-center gap-1">
                          Janique Poulin <span className="text-[9px] font-medium text-gray-400">• Lifestyle Creator</span>
                        </div>
                        <div className="text-[10px] text-gray-500">📍 Toronto, ON, CA</div>
                      </div>
                    </div>
                    <div className="text-right">
                      <div className="font-extrabold text-gray-900 text-xs">$190</div>
                      <button className="mt-1 px-3 py-1 bg-black text-white text-[10px] font-bold rounded-lg cursor-pointer">
                        Hire
                      </button>
                    </div>
                  </div>

                  {/* Creator 2 */}
                  <div className="p-2.5 bg-gray-50/80 rounded-xl border border-gray-100 flex items-center justify-between">
                    <div className="flex items-center gap-2.5">
                      <img
                        src={sofiaJensenImg}
                        alt="Jenn"
                        className="w-9 h-9 rounded-full object-cover shrink-0"
                      />
                      <div>
                        <div className="font-bold text-gray-900 text-[11px] flex items-center gap-1">
                          Jenn <span className="text-[9px] font-medium text-gray-400">• Food Creator</span>
                        </div>
                        <div className="text-[10px] text-gray-500">📍 New York, NY, US</div>
                      </div>
                    </div>
                    <div className="text-right">
                      <div className="font-extrabold text-gray-900 text-xs">$600</div>
                      <button className="mt-1 px-3 py-1 bg-black text-white text-[10px] font-bold rounded-lg cursor-pointer">
                        Hire
                      </button>
                    </div>
                  </div>

                  {/* Creator 3 */}
                  <div className="p-2.5 bg-gray-50/80 rounded-xl border border-gray-100 flex items-center justify-between">
                    <div className="flex items-center gap-2.5">
                      <img
                        src={renateReinsveImg}
                        alt="Valerie"
                        className="w-9 h-9 rounded-full object-cover shrink-0"
                      />
                      <div>
                        <div className="font-bold text-gray-900 text-[11px] flex items-center gap-1">
                          Valerie Goldberg <span className="text-[9px] font-medium text-gray-400">• Health & Beauty</span>
                        </div>
                        <div className="text-[10px] text-gray-500">⚡ Responsive fast</div>
                      </div>
                    </div>
                    <div className="text-right">
                      <div className="font-extrabold text-gray-900 text-xs">$200</div>
                      <button className="mt-1 px-3 py-1 bg-black text-white text-[10px] font-bold rounded-lg cursor-pointer">
                        Hire
                      </button>
                    </div>
                  </div>

                </div>

              </div>
            </div>
          </div>

          {/* Text Right */}
          <div className="lg:col-span-6 flex flex-col items-start text-left order-1 lg:order-2">
            <h2 style={sectionHeadingStyle} className="tracking-tight mb-6">
              Surface The Best-Fit Creators The Moment Your Brief Is Ready.
            </h2>
            <p className="text-gray-600 text-base sm:text-lg leading-relaxed font-normal">
              As soon as your brief is complete, Instant match surfaces the creators who fit your criteria automatically, ranked by fit score in real time. You can review their profiles and hire the ones that are right for your campaign immediately.
            </p>
          </div>

        </div>

        {/* ROW 3: Reach The Right Creators Without Searching For Them. */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Text Left */}
          <div className="lg:col-span-6 flex flex-col items-start text-left">
            <h2 style={sectionHeadingStyle} className="tracking-tight mb-6">
              Reach The Right Creators Without Searching For Them.
            </h2>
            <p className="text-gray-600 text-base sm:text-lg leading-relaxed font-normal">
              Once your campaign is live, Mobb distributes it to matching creators across the platform. Creators who fit your targeting criteria receive your campaign and can choose to apply. This runs alongside Instant match, so you are receiving applications from two directions at once: creators Mobb surfaced immediately, and creators who found your campaign and applied directly.
            </p>
          </div>

          {/* Graphic Right (Yellow Background Container) */}
          <div className="lg:col-span-6 flex justify-center">
            <div className="w-full max-w-[480px] min-h-[340px] bg-[#fef08a]/60 rounded-3xl p-6 sm:p-8 flex justify-center items-center">
              <div className="w-full max-w-md bg-[#1e2025] rounded-2xl shadow-xl p-6 text-white space-y-4 text-xs border border-gray-800">
                
                <div className="flex items-center justify-between border-b border-gray-800 pb-3">
                  <span className="text-gray-400 text-xs font-medium">Campaign live • 2 hours ago</span>
                  <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></span>
                </div>

                <div className="space-y-3.5 pt-1">
                  <div>
                    <div className="flex justify-between font-bold text-xs mb-1.5">
                      <span className="text-gray-300">Creators reached</span>
                      <span className="text-white">4,280</span>
                    </div>
                    <div className="w-full bg-gray-800 h-2 rounded-full overflow-hidden">
                      <div className="bg-emerald-500 h-full w-[85%] rounded-full"></div>
                    </div>
                  </div>

                  <div>
                    <div className="flex justify-between font-bold text-xs mb-1.5">
                      <span className="text-gray-300">Applications received</span>
                      <span className="text-white">24</span>
                    </div>
                    <div className="w-full bg-gray-800 h-2 rounded-full overflow-hidden">
                      <div className="bg-white h-full w-[55%] rounded-full"></div>
                    </div>
                  </div>

                  <div>
                    <div className="flex justify-between font-bold text-xs mb-1.5">
                      <span className="text-gray-300">Instant matches</span>
                      <span className="text-white">8</span>
                    </div>
                    <div className="w-full bg-gray-800 h-2 rounded-full overflow-hidden">
                      <div className="bg-white h-full w-[35%] rounded-full"></div>
                    </div>
                  </div>
                </div>

              </div>
            </div>
          </div>

        </div>

        {/* ROW 4: Choose From Creators Who Already Want To Work With You. */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Graphic Left (Light Gray Container) */}
          <div className="lg:col-span-6 order-2 lg:order-1 flex justify-center">
            <div className="w-full max-w-[480px] min-h-[340px] bg-gray-200/70 rounded-3xl p-6 sm:p-8 flex justify-center items-center">
              <div className="w-full max-w-md bg-white rounded-2xl shadow-xl border border-gray-100 p-4 space-y-3 text-xs">
                
                {/* Header Banner */}
                <div className="bg-rose-50 border border-rose-100 rounded-xl p-3 text-[11px]">
                  <span className="font-extrabold text-rose-800">Step Into Comfort: Crocs Your Way!</span>
                  <p className="text-rose-600 text-[10px] mt-0.5">Creators that applied to your campaign. Review, negotiate and hire.</p>
                </div>

                {/* Applicants List */}
                <div className="space-y-2">
                  
                  {/* Applicant 1 */}
                  <div className="p-3 bg-gray-50/80 rounded-xl border border-gray-100 flex items-center justify-between">
                    <div className="flex items-center gap-2.5">
                      <img
                        src={stephenGImg}
                        alt="Steenjacobs"
                        className="w-9 h-9 rounded-full object-cover shrink-0"
                      />
                      <div>
                        <div className="font-bold text-gray-900 text-[11px]">Steenjacobs</div>
                        <div className="text-[10px] text-gray-500">Tech & Gaming • Jackson, MS</div>
                      </div>
                    </div>
                    <div className="text-right">
                      <div className="font-extrabold text-gray-900 text-xs">$1,000</div>
                      <button className="mt-1 px-3 py-1 bg-black text-white text-[10px] font-bold rounded-lg cursor-pointer">
                        Hire
                      </button>
                    </div>
                  </div>

                  {/* Applicant 2 */}
                  <div className="p-3 bg-gray-50/80 rounded-xl border border-gray-100 flex items-center justify-between">
                    <div className="flex items-center gap-2.5">
                      <img
                        src={ivanaMarketinImg}
                        alt="Chyna"
                        className="w-9 h-9 rounded-full object-cover shrink-0"
                      />
                      <div>
                        <div className="font-bold text-gray-900 text-[11px]">Chyna</div>
                        <div className="text-[10px] text-gray-500">Fashion, Fitness • Dallas, TX</div>
                      </div>
                    </div>
                    <div className="text-right">
                      <div className="font-extrabold text-gray-900 text-xs">$227</div>
                      <button className="mt-1 px-3 py-1 bg-black text-white text-[10px] font-bold rounded-lg cursor-pointer">
                        Hire
                      </button>
                    </div>
                  </div>

                </div>

              </div>
            </div>
          </div>

          {/* Text Right */}
          <div className="lg:col-span-6 flex flex-col items-start text-left order-1 lg:order-2">
            <h2 style={sectionHeadingStyle} className="tracking-tight mb-6">
              Choose From Creators Who Already Want To Work With You.
            </h2>
            <p className="text-gray-600 text-base sm:text-lg leading-relaxed font-normal">
              Every application arrives with the creator's profile, portfolio, audience data, and proposed rate. Review applicants side by side, compare fit, and accept the ones that match your brief. Creators who apply have already read your requirements and agreed to the terms.
            </p>
          </div>

        </div>

      </section>

      {/* ------------------------------------------------------------- */}
      {/* SECTION 5: WHAT BRANDS SAY (TESTIMONIAL)                      */}
      {/* ------------------------------------------------------------- */}
      <section className="py-12">
        <WhatBrandsSay />
      </section>

      {/* ------------------------------------------------------------- */}
      {/* SECTION 6: FAQ ACCORDION                                      */}
      {/* ------------------------------------------------------------- */}
      <section className="max-w-[880px] mx-auto px-4 sm:px-6 py-16 sm:py-24">
        <h2 style={sectionHeadingStyle} className="text-center mb-12 tracking-tight">
          Questions about posting campaigns and attracting creators
        </h2>

        <div className="divide-y divide-gray-200/80">
          {faqItems.map((item, index) => {
            const isOpen = openFaq === index;
            return (
              <div key={index} className="py-5 transition-colors">
                <button
                  onClick={() => toggleFaq(index)}
                  className="w-full flex items-center justify-between text-left gap-4 group focus:outline-none cursor-pointer"
                >
                  <span className="text-base sm:text-lg font-bold text-gray-900 group-hover:text-pink-600 transition-colors">
                    {item.q}
                  </span>
                  <div
                    className={`w-6 h-6 rounded-full flex items-center justify-center transition-transform duration-200 shrink-0 ${
                      isOpen ? 'rotate-180 text-pink-600' : 'text-gray-400 group-hover:text-gray-600'
                    }`}
                  >
                    <ChevronDown className="w-5 h-5" />
                  </div>
                </button>

                {isOpen && (
                  <div className="mt-3 text-sm text-gray-600 leading-relaxed pr-8">
                    {item.a}
                  </div>
                )}
              </div>
            );
          })}
        </div>

        <div className="text-center mt-10">
          <button
            onClick={onNavigateSearch}
            className="text-xs font-bold text-gray-500 hover:text-gray-900 inline-flex items-center gap-1 transition-colors cursor-pointer"
          >
            Have another question? Contact sales <ArrowRight className="w-3 h-3" />
          </button>
        </div>
      </section>

      {/* ------------------------------------------------------------- */}
      {/* SECTION 7: DARK CTA FOOTER CARD                               */}
      {/* ------------------------------------------------------------- */}
      <section className="max-w-[1140px] mx-auto px-4 sm:px-6 lg:px-0 my-16">
        <div className="bg-[#22252a] rounded-[32px] sm:rounded-[40px] p-8 sm:p-12 lg:p-16 text-center text-white shadow-2xl relative overflow-hidden">
          
          <h2 style={darkSectionHeadingStyle} className="max-w-2xl mx-auto mb-4 tracking-tight">
            Your next campaign is one brief away.
          </h2>

          <p className="text-gray-400 text-sm sm:text-base max-w-xl mx-auto mb-8 leading-relaxed">
            Write a brief, and Instant match surfaces the best-fit creators before your campaign is even published. Rates included with every application.
          </p>

          <button
            onClick={onNavigateSearch}
            className="inline-flex items-center justify-center bg-white hover:bg-gray-100 text-gray-900 font-bold px-8 py-3.5 rounded-full transition-all duration-200 shadow-lg text-sm cursor-pointer"
          >
            Start your first campaign
          </button>
        </div>
      </section>
    </div>
  );
};
