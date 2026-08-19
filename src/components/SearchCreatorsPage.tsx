import React, { useState } from 'react';
import {
  Search,
  Check,
  ArrowRight,
  Plus,
  Minus,
  CheckCircle2,
  Lock,
  MessageSquare,
  BarChart2,
  Clock,
  Sparkles,
  Users,
  ShoppingBag,
  Sliders,
  ShieldCheck,
  FileText
} from 'lucide-react';
import { WhatBrandsSay } from './WhatBrandsSay';
import { TrustedBrands } from './TrustedBrands';
import { Creator } from '../types';
import {
  dbrkvImg,
  hermanStrydomImg,
  inspoHomeImg,
  ivanaMarketinImg,
  paolaSantanaImg,
  lettersOfTravelImg,
  alicjaWerniewiczImg,
} from '../avatars';

interface SearchCreatorsPageProps {
  onSelectCreator?: (creator: Creator) => void;
  onOpenContact?: (creator: Creator) => void;
}

const headingStyle: React.CSSProperties = {
  fontFamily: 'Inter, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif',
  fontStyle: 'normal',
  fontWeight: 700,
  color: 'rgb(51, 51, 51)',
  fontSize: '48px',
  lineHeight: '60px',
};

const darkHeadingStyle: React.CSSProperties = {
  ...headingStyle,
  color: '#ffffff',
};

export const SearchCreatorsPage: React.FC<SearchCreatorsPageProps> = ({
  onSelectCreator,
  onOpenContact,
}) => {
  // FAQ accordion state
  const [openFaq, setOpenFaq] = useState<number | null>(0);

  const toggleFaq = (index: number) => {
    setOpenFaq(openFaq === index ? null : index);
  };

  const faqs = [
    {
      question: 'Do I need to subscribe to search creators?',
      answer:
        'No, searching and browsing creator profiles on Mobb is 100% free with no subscription or credit card required. You only pay when you decide to hire a creator for a campaign.',
    },
    {
      question: 'Can I see pricing before I reach out to a creator?',
      answer:
        'Yes! Every creator profile displays transparent starting rates for specific deliverables (e.g., Instagram Reels, TikTok videos, UGC content) so there are no unexpected costs or hidden fees.',
    },
    {
      question: 'How do I know the audience data is accurate?',
      answer:
        'Mobb directly integrates with official platform APIs (Instagram, TikTok, YouTube) to fetch real-time analytics, verified follower counts, engagement rates, and authentic demographic breakdowns.',
    },
    {
      question: 'I already work with creators. Can I manage them on Mobb too?',
      answer:
        'Absolutely. You can invite your external creators to your Mobb dashboard to centralize communication, contracts, deliverables, and escrow payments in one streamlined workspace.',
    },
    {
      question: 'What platforms does Mobb cover?',
      answer:
        'Mobb supports Instagram, TikTok, YouTube, UGC content creators, User-Generated Video, and cross-platform influencer marketing.',
    },
    {
      question: 'What is the difference between a direct hire and a campaign?',
      answer:
        'A direct hire allows you to reach out to a specific creator immediately, while a campaign lets you broadcast a brief to multiple creators who can apply directly to your listing.',
    },
  ];

  return (
    <div className="w-full bg-white text-gray-900 font-sans antialiased overflow-hidden">
      {/* ------------------------------------------------------------- */}
      {/* SECTION 1: HERO SECTION                                        */}
      {/* ------------------------------------------------------------- */}
      <section className="max-w-[1240px] mx-auto px-4 sm:px-6 lg:px-8 pt-8 sm:pt-12 pb-16 lg:pb-24">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center">

          {/* Left Hero Content */}
          <div className="lg:col-span-6 flex flex-col items-start text-left">
            <h1
              style={{
                fontFamily: 'Inter, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif',
                fontStyle: 'normal',
                fontWeight: 700,
                color: 'rgb(51, 51, 51)',
                fontSize: '48px',
                lineHeight: '60px',
              }}
              className="mb-6 tracking-tight"
            >
              The Right Creator For Your Campaign Is <span className="text-accent-pink">Already Here.</span>
            </h1>

            <p className="text-gray-600 text-base sm:text-lg lg:text-[19px] leading-relaxed mb-8 max-w-xl">
              Search 500,000+ vetted creators by platform, niche, audience, and budget. View full profiles with real pricing before you commit to anything.
            </p>

            {/* Checkmark Badges */}
            <div className="flex flex-wrap gap-2.5 mb-9">
              <div className="inline-flex items-center gap-1.5 bg-[#f0fdf4] text-[#166534] border border-[#bbf7d0] px-3.5 py-1.5 rounded-full text-xs sm:text-sm font-semibold">
                <div className="w-4 h-4 rounded-full bg-[#16a34a] text-white flex items-center justify-center">
                  <Check className="w-2.5 h-2.5 stroke-[3]" />
                </div>
                Free to search
              </div>

              <div className="inline-flex items-center gap-1.5 bg-[#f0fdf4] text-[#166534] border border-[#bbf7d0] px-3.5 py-1.5 rounded-full text-xs sm:text-sm font-semibold">
                <div className="w-4 h-4 rounded-full bg-[#16a34a] text-white flex items-center justify-center">
                  <Check className="w-2.5 h-2.5 stroke-[3]" />
                </div>
                Transparent pricing on every profile
              </div>

              <div className="inline-flex items-center gap-1.5 bg-[#f0fdf4] text-[#166534] border border-[#bbf7d0] px-3.5 py-1.5 rounded-full text-xs sm:text-sm font-semibold">
                <div className="w-4 h-4 rounded-full bg-[#16a34a] text-white flex items-center justify-center">
                  <Check className="w-2.5 h-2.5 stroke-[3]" />
                </div>
                Audience demographics visible before you hire
              </div>
            </div>

            {/* Hero CTA Button */}
            <a
              href="#search-grid"
              className="inline-flex items-center justify-center gap-2.5 bg-[#22252a] hover:bg-black text-white font-bold text-base px-7 py-4 rounded-2xl shadow-lg hover:scale-[1.02] active:scale-[0.98] transition-all cursor-pointer"
            >
              <span>Search Creators Free</span>
              <ArrowRight className="w-5 h-5" />
            </a>
          </div>

          {/* Right Hero Visual Card */}
          <div className="lg:col-span-6 w-full">
            <div className="bg-white rounded-[32px] p-6 sm:p-8 border border-gray-100 shadow-[0_20px_50px_rgba(0,0,0,0.08)] relative select-none">

              {/* Header Badge: SEARCH */}
              <div className="flex items-center gap-3 mb-6">
                <div className="w-10 h-10 rounded-full bg-[#f43f5e] text-white flex items-center justify-center shadow-md">
                  <Search className="w-5 h-5 stroke-[2.5]" />
                </div>
                <span className="text-lg font-black text-gray-900 tracking-wider">
                  SEARCH
                </span>
              </div>

              {/* Search Pill Bar */}
              <div className="w-full bg-white rounded-full border border-gray-200/90 shadow-xs px-5 py-3.5 mb-5 flex items-center justify-between">
                <span className="text-gray-500 font-medium text-sm sm:text-base">
                  beauty and lifestyle
                </span>
                <div className="w-6 h-6 rounded-full bg-gray-100 flex items-center justify-center text-gray-400">
                  <Search className="w-3.5 h-3.5" />
                </div>
              </div>

              {/* Filter Chips */}
              <div className="flex flex-wrap gap-2 mb-8">
                <span className="bg-[#f1f5f9] text-gray-700 text-xs font-semibold px-3.5 py-1.5 rounded-full">
                  Instagram
                </span>
                <span className="bg-[#f1f5f9] text-gray-700 text-xs font-semibold px-3.5 py-1.5 rounded-full">
                  New York
                </span>
                <span className="bg-[#f1f5f9] text-gray-700 text-xs font-semibold px-3.5 py-1.5 rounded-full">
                  Under $250
                </span>
                <span className="bg-[#f1f5f9] text-gray-700 text-xs font-semibold px-3.5 py-1.5 rounded-full">
                  1k+ followers
                </span>
              </div>

              {/* Creator List Rows */}
              <div className="space-y-4">
                {/* Creator Row 1 */}
                <div className="flex items-center justify-between pt-2 pb-3 border-b border-gray-100">
                  <div className="flex items-center gap-3.5">
                    <img
                      src={dbrkvImg}
                      alt="Daria"
                      className="w-12 h-12 rounded-full object-cover shadow-xs"
                    />
                    <div>
                      <h4 className="font-extrabold text-gray-900 text-base leading-tight">
                        @dbrkv_
                      </h4>
                      <p className="text-gray-500 text-xs font-medium mt-0.5">
                        88.5K · Fashion
                      </p>
                    </div>
                  </div>
                  <button className="bg-black hover:bg-gray-800 text-white font-bold text-xs sm:text-sm px-5 py-2 rounded-full shadow-xs transition-transform hover:scale-105 cursor-pointer">
                    Hire
                  </button>
                </div>

                {/* Creator Row 2 */}
                <div className="flex items-center justify-between py-2 border-b border-gray-100">
                  <div className="flex items-center gap-3.5">
                    <img
                      src={hermanStrydomImg}
                      alt="Herman"
                      className="w-12 h-12 rounded-full object-cover shadow-xs"
                    />
                    <div>
                      <h4 className="font-extrabold text-gray-900 text-base leading-tight">
                        @herman.strydom
                      </h4>
                      <p className="text-gray-500 text-xs font-medium mt-0.5">
                        112K · Fitness
                      </p>
                    </div>
                  </div>
                  <button className="bg-black hover:bg-gray-800 text-white font-bold text-xs sm:text-sm px-5 py-2 rounded-full shadow-xs transition-transform hover:scale-105 cursor-pointer">
                    Hire
                  </button>
                </div>

                {/* Creator Row 3 */}
                <div className="flex items-center justify-between pt-2">
                  <div className="flex items-center gap-3.5">
                    <img
                      src={inspoHomeImg}
                      alt="Inspo Home"
                      className="w-12 h-12 rounded-full object-cover shadow-xs"
                    />
                    <div>
                      <h4 className="font-extrabold text-gray-900 text-base leading-tight">
                        @inspo.home
                      </h4>
                      <p className="text-gray-500 text-xs font-medium mt-0.5">
                        240K · Home & Decor
                      </p>
                    </div>
                  </div>
                  <span className="bg-[#f1f5f9] text-gray-500 font-bold text-xs sm:text-sm px-5 py-2 rounded-full">
                    Invited
                  </span>
                </div>
              </div>

            </div>
          </div>

        </div>
      </section>

      {/* ------------------------------------------------------------- */}
      {/* SECTION 2: TRUSTED BY LOGOS BAR                               */}
      {/* ------------------------------------------------------------- */}
      <TrustedBrands />

      {/* ------------------------------------------------------------- */}
      {/* SECTION 3: AN ACTIVE MARKETPLACE WITH VETTED CREATORS         */}
      {/* ------------------------------------------------------------- */}
      <section className="max-w-[1240px] mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-20">
        <h2 style={headingStyle} className="text-center mb-12 tracking-tight">
          An Active Marketplace With Vetted Creators
        </h2>

        {/* 4 Feature Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-10">

          {/* Card 1: Purple Card */}
          <div className="bg-[#f3e8ff] rounded-[28px] p-6 flex flex-col justify-between h-[360px] border border-purple-100/50 shadow-xs hover:shadow-md transition-shadow">
            <div>
              <h3 className="font-black text-[#0F172A] text-xl leading-snug mb-2">
                Find Vetted Creators In One Place
              </h3>
              <p className="text-gray-600 text-xs sm:text-sm leading-relaxed mb-6">
                Not scattered across platforms and spreadsheets
              </p>
            </div>

            {/* Visual Mockup */}
            <div className="bg-white rounded-2xl p-3.5 shadow-sm border border-purple-100/80">
              <div className="w-full bg-gray-50 rounded-full border border-gray-200 px-3 py-1.5 text-[11px] text-gray-500 mb-3 flex items-center justify-between">
                <span>Beauty & skincare, Instagram</span>
                <Search className="w-3 h-3 text-gray-400" />
              </div>
              <div className="flex items-center -space-x-2">
                <img
                  src={paolaSantanaImg}
                  alt="Avatar"
                  className="w-8 h-8 rounded-full border-2 border-white object-cover"
                />
                <img
                  src={lettersOfTravelImg}
                  alt="Avatar"
                  className="w-8 h-8 rounded-full border-2 border-white object-cover"
                />
                <img
                  src={alicjaWerniewiczImg}
                  alt="Avatar"
                  className="w-8 h-8 rounded-full border-2 border-white object-cover"
                />
                <div className="w-8 h-8 rounded-full bg-purple-100 text-purple-700 font-bold text-xs flex items-center justify-center border-2 border-white">
                  +99
                </div>
              </div>
            </div>
          </div>

          {/* Card 2: Pink Card */}
          <div className="bg-[#fce7f3] rounded-[28px] p-6 flex flex-col justify-between h-[360px] border border-pink-100/50 shadow-xs hover:shadow-md transition-shadow">
            <div>
              <h3 className="font-black text-[#0F172A] text-xl leading-snug mb-2">
                Real Pricing And Data
              </h3>
              <p className="text-gray-600 text-xs sm:text-sm leading-relaxed mb-6">
                See real pricing, real audience data, and real engagement before you commit
              </p>
            </div>

            {/* Visual Mockup */}
            <div className="bg-white rounded-2xl p-3.5 shadow-sm border border-pink-100/80">
              <div className="flex items-center justify-between mb-2">
                <div className="flex items-center gap-2">
                  <img
                    src={ivanaMarketinImg}
                    alt="Ivana"
                    className="w-7 h-7 rounded-full object-cover"
                  />
                  <div>
                    <div className="text-[11px] font-bold text-gray-900 leading-none">Ivana Marketin</div>
                    <div className="text-[9px] text-gray-400">@ivana_marketin</div>
                  </div>
                </div>
                <span className="bg-pink-100 text-pink-700 text-[10px] font-extrabold px-2 py-0.5 rounded-full">
                  $160
                </span>
              </div>
              <div className="grid grid-cols-3 gap-1 bg-gray-50 p-2 rounded-xl text-center text-[9px] font-bold text-gray-700">
                <div>
                  <div className="text-gray-400 font-semibold text-[8px]">REACH</div>
                  182K
                </div>
                <div>
                  <div className="text-gray-400 font-semibold text-[8px]">ENGAGE</div>
                  6.4%
                </div>
                <div>
                  <div className="text-gray-400 font-semibold text-[8px]">AUDIENCE</div>
                  F-25
                </div>
              </div>
            </div>
          </div>

          {/* Card 3: Yellow Card */}
          <div className="bg-[#fef9c3] rounded-[28px] p-6 flex flex-col justify-between h-[360px] border border-amber-100/50 shadow-xs hover:shadow-md transition-shadow">
            <div>
              <h3 className="font-black text-[#0F172A] text-xl leading-snug mb-2">
                Skip Cold Outreach Entirely
              </h3>
              <p className="text-gray-600 text-xs sm:text-sm leading-relaxed mb-6">
                Creators on Mobb are expecting brand contact
              </p>
            </div>

            {/* Visual Mockup */}
            <div className="bg-white rounded-2xl p-3.5 shadow-sm border border-amber-100/80 space-y-2">
              <div className="flex items-start gap-2 bg-gray-50 p-2 rounded-xl text-[10px]">
                <div className="w-5 h-5 rounded-full bg-black text-white font-black text-[8px] flex items-center justify-center shrink-0">
                  N
                </div>
                <p className="text-gray-700 leading-tight">
                  Hi Ava — would love to send you our Spring drop.
                </p>
              </div>
              <div className="flex items-center justify-end">
                <div className="bg-black text-white px-2.5 py-1 rounded-xl text-[10px] font-bold flex items-center gap-1">
                  <span>Yes — let's do it. I'm in.</span>
                  <Check className="w-3 h-3 text-green-400" />
                </div>
              </div>
            </div>
          </div>

          {/* Card 4: Light Grey Card */}
          <div className="bg-[#f1f5f9] rounded-[28px] p-6 flex flex-col justify-between h-[360px] border border-gray-200/50 shadow-xs hover:shadow-md transition-shadow">
            <div>
              <h3 className="font-black text-[#0F172A] text-xl leading-snug mb-2">
                Search To Hire, In One Session
              </h3>
              <p className="text-gray-600 text-xs sm:text-sm leading-relaxed mb-6">
                Go from search to hired creator in the same session
              </p>
            </div>

            {/* Visual Mockup */}
            <div className="bg-white rounded-2xl p-3.5 shadow-sm border border-gray-200/80 space-y-2 text-[10px]">
              <div className="flex items-center justify-end text-gray-400 font-bold text-[9px] gap-1">
                <Clock className="w-3 h-3" /> 15 min
              </div>
              <div className="flex items-center justify-between bg-gray-50 px-2.5 py-1.5 rounded-xl">
                <span className="font-medium text-gray-700">Search 12 creators</span>
                <span className="text-gray-400 font-mono text-[9px]">2:14</span>
              </div>
              <div className="flex items-center justify-between bg-gray-50 px-2.5 py-1.5 rounded-xl">
                <span className="font-medium text-gray-700">Send brief</span>
                <span className="text-gray-400 font-mono text-[9px]">5:48</span>
              </div>
              <div className="flex items-center justify-between bg-emerald-50 text-emerald-800 px-2.5 py-1.5 rounded-xl font-bold">
                <span className="flex items-center gap-1"><Check className="w-3 h-3 text-emerald-600" /> Creator hired</span>
                <span className="font-mono text-[9px]">8:32</span>
              </div>
            </div>
          </div>

        </div>

        {/* Center CTA Button */}
        <div className="text-center">
          <a
            href="#search-grid"
            className="inline-flex items-center justify-center gap-2.5 bg-[#22252a] hover:bg-black text-white font-bold text-sm sm:text-base px-7 py-3.5 rounded-2xl shadow-md hover:scale-105 transition-all"
          >
            <span>Search Creators Free</span>
            <ArrowRight className="w-4 h-4" />
          </a>
        </div>
      </section>

      {/* ------------------------------------------------------------- */}
      {/* SECTION 4: FEATURE DEEP DIVES (01, 02, 03)                     */}
      {/* ------------------------------------------------------------- */}
      <section className="max-w-[1240px] mx-auto px-4 sm:px-6 lg:px-8 py-12 space-y-20 sm:space-y-28">

        {/* Step 01 / SEARCH AND FILTER */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
          <div className="lg:col-span-6 flex flex-col items-start">
            <span className="text-[#f43f5e] font-extrabold text-xs uppercase tracking-wider mb-3">
              01 / SEARCH AND FILTER
            </span>
            <h3 style={headingStyle} className="tracking-tight mb-4">
              Find The Right Creator Before You Commit.
            </h3>
            <p className="text-gray-600 text-base leading-relaxed">
              Filter 500,000+ vetted creators by platform, niche, location, follower count, engagement rate, audience age, language, and ethnicity. Results narrow in real time, so you move from a broad category to a qualified shortlist in a single session.
            </p>
          </div>

          <div className="lg:col-span-6 w-full">
            <div className="bg-[#fce7f3] rounded-[32px] p-6 sm:p-8 flex items-center justify-center">
              {/* Dashboard Preview Graphic */}
              <div className="bg-white rounded-2xl shadow-xl border border-pink-100 p-4 w-full max-w-md">
                <div className="text-xs font-bold text-gray-400 uppercase mb-3">Influencers</div>
                <div className="grid grid-cols-3 gap-3">
                  <div className="rounded-xl overflow-hidden border border-gray-100 shadow-xs">
                    <img src={dbrkvImg} className="w-full h-24 object-cover" alt="Daria" />
                    <div className="p-2 text-[10px] font-bold text-gray-800">@dbrkv_ <span className="text-gray-400 block font-normal">$220</span></div>
                  </div>
                  <div className="rounded-xl overflow-hidden border border-gray-100 shadow-xs">
                    <img src={hermanStrydomImg} className="w-full h-24 object-cover" alt="Herman" />
                    <div className="p-2 text-[10px] font-bold text-gray-800">@herman.strydom <span className="text-gray-400 block font-normal">$190</span></div>
                  </div>
                  <div className="rounded-xl overflow-hidden border border-gray-100 shadow-xs">
                    <img src={inspoHomeImg} className="w-full h-24 object-cover" alt="Inspo Home" />
                    <div className="p-2 text-[10px] font-bold text-gray-800">@inspo.home <span className="text-gray-400 block font-normal">$280</span></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Step 02 / VIEW AND VERIFY */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
          <div className="lg:col-span-6 order-2 lg:order-1 w-full">
            <div className="bg-[#f3e8ff] rounded-[32px] p-6 sm:p-8 flex items-center justify-center">
              {/* Analytics Preview Graphic */}
              <div className="bg-white rounded-2xl shadow-xl border border-purple-100 p-5 w-full max-w-md text-xs">
                <div className="flex items-center justify-between mb-3">
                  <span className="font-bold text-gray-900">Analytics</span>
                  <span className="text-purple-600 font-bold bg-purple-50 px-2 py-0.5 rounded-md text-[10px]">TikTok</span>
                </div>
                <div className="grid grid-cols-3 gap-2 bg-gray-50 p-2.5 rounded-xl mb-4 text-center">
                  <div>
                    <div className="font-black text-gray-900 text-sm">6.1k</div>
                    <div className="text-[9px] text-gray-400 font-medium">Followers</div>
                  </div>
                  <div>
                    <div className="font-black text-gray-900 text-sm">385</div>
                    <div className="text-[9px] text-gray-400 font-medium">Average Views</div>
                  </div>
                  <div>
                    <div className="font-black text-purple-600 text-sm">0.7%</div>
                    <div className="text-[9px] text-gray-400 font-medium">Engagement</div>
                  </div>
                </div>
                <div className="space-y-1.5 text-[10px]">
                  <div className="font-bold text-gray-700">Audience Location</div>
                  <div className="flex items-center justify-between text-gray-500">
                    <span>🇨🇦 Canada</span> <span className="font-bold text-gray-800">24%</span>
                  </div>
                  <div className="w-full bg-gray-100 h-1.5 rounded-full overflow-hidden mb-1">
                    <div className="bg-purple-600 h-full w-[24%]" />
                  </div>
                  <div className="flex items-center justify-between text-gray-500">
                    <span>🇰🇪 Kenya</span> <span className="font-bold text-gray-800">13%</span>
                  </div>
                  <div className="w-full bg-gray-100 h-1.5 rounded-full overflow-hidden">
                    <div className="bg-purple-400 h-full w-[13%]" />
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="lg:col-span-6 order-1 lg:order-2 flex flex-col items-start">
            <span className="text-[#f43f5e] font-extrabold text-xs uppercase tracking-wider mb-3">
              02 / VIEW AND VERIFY
            </span>
            <h3 style={headingStyle} className="tracking-tight mb-4">
              See Exactly Who You Are Hiring Before Any Money Moves.
            </h3>
            <p className="text-gray-600 text-base leading-relaxed">
              Every creator profile shows verified engagement rate, average views over the last 30 days, audience demographics (age, gender, location breakdown), starting price per content type, and portfolio. Mobb pulls this data directly from connected platform accounts, so what you see reflects actual performance, not self-reported numbers.
            </p>
          </div>
        </div>

        {/* Step 03 / TRUST AND HIRE */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
          <div className="lg:col-span-6 flex flex-col items-start">
            <span className="text-[#f43f5e] font-extrabold text-xs uppercase tracking-wider mb-3">
              03 / TRUST AND HIRE
            </span>
            <h3 style={headingStyle} className="tracking-tight mb-4">
              Every Creator Is Vetted. Your Search Starts With Confidence.
            </h3>
            <p className="text-gray-600 text-base leading-relaxed">
              Mobb's team manually reviews creators for engagement quality, content standards, and past brand experience before they appear in search results. Every creator has opted in and gone through an identity verification process. Spend your time finding the right fit, not checking if the results are real.
            </p>
          </div>

          <div className="lg:col-span-6 w-full">
            <div className="bg-[#fef9c3] rounded-[32px] p-6 sm:p-8 flex items-center justify-center">
              {/* Authenticity Verification Graphic */}
              <div className="bg-white rounded-2xl shadow-xl border border-amber-100 p-5 w-full max-w-md">
                <div className="space-y-3">
                  <div className="flex items-center justify-between p-3 bg-red-50/60 rounded-xl border border-red-100">
                    <span className="font-extrabold text-gray-900 text-sm">38.4%</span>
                    <span className="text-xs font-semibold text-gray-600 flex items-center gap-1.5">
                      Suspicious Followers <span className="w-2.5 h-2.5 rounded-full bg-red-400" />
                    </span>
                  </div>
                  <div className="flex items-center justify-between p-3 bg-emerald-50/60 rounded-xl border border-emerald-100">
                    <span className="font-extrabold text-gray-900 text-sm">61.7%</span>
                    <span className="text-xs font-semibold text-gray-600 flex items-center gap-1.5">
                      Real Followers <span className="w-2.5 h-2.5 rounded-full bg-emerald-500" />
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

      </section>

      {/* ------------------------------------------------------------- */}
      {/* SECTION 5: MORE CAPABILITIES                                   */}
      {/* ------------------------------------------------------------- */}
      <section className="max-w-[1240px] mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <h2 style={headingStyle} className="text-center mb-12 tracking-tight">
          More Capabilities
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">

          {/* Card 1: Match and Surface */}
          <div className="bg-[#fce7f3] rounded-[32px] p-8 flex flex-col justify-between border border-pink-100/60">
            <div>
              <div className="w-12 h-12 rounded-2xl bg-white flex items-center justify-center shadow-sm mb-6 text-pink-600">
                <ShoppingBag className="w-6 h-6" />
              </div>
              <h3 className="font-black text-[#0F172A] text-2xl leading-tight mb-3">
                Match and Surface
              </h3>
              <p className="text-gray-600 text-sm leading-relaxed mb-8">
                Get to the right creator without searching manually. Describe your campaign criteria and Instant match returns the best-fit creators automatically, ranked by fit score in real time. The more specific your brief, the tighter the match.
              </p>
            </div>
            <button className="bg-white/80 hover:bg-white text-gray-900 font-bold px-6 py-2.5 rounded-full text-xs shadow-xs border border-gray-200/60 w-fit transition-all cursor-pointer">
              Start Searching
            </button>
          </div>

          {/* Card 2: Save and Compare */}
          <div className="bg-[#f3e8ff] rounded-[32px] p-8 flex flex-col justify-between border border-purple-100/60">
            <div>
              <div className="w-12 h-12 rounded-2xl bg-white flex items-center justify-center shadow-sm mb-6 text-purple-600">
                <Sliders className="w-6 h-6" />
              </div>
              <h3 className="font-black text-[#0F172A] text-2xl leading-tight mb-3">
                Save and Compare
              </h3>
              <p className="text-gray-600 text-sm leading-relaxed mb-8">
                Save creators and decide as a team, not alone. Add creators to a shortlist and compare profiles side by side. Shortlists are saved to your account and visible to every team member on the same plan. Review and sign-off happen in one place, not a forwarded spreadsheet.
              </p>
            </div>
            <button className="bg-white/80 hover:bg-white text-gray-900 font-bold px-6 py-2.5 rounded-full text-xs shadow-xs border border-gray-200/60 w-fit transition-all cursor-pointer">
              Start Searching
            </button>
          </div>

          {/* Card 3: Bring and Manage */}
          <div className="bg-[#f1f5f9] rounded-[32px] p-8 flex flex-col justify-between border border-gray-200/60">
            <div>
              <div className="w-12 h-12 rounded-2xl bg-white flex items-center justify-center shadow-sm mb-6 text-gray-800">
                <Users className="w-6 h-6" />
              </div>
              <h3 className="font-black text-[#0F172A] text-2xl leading-tight mb-3">
                Bring and Manage
              </h3>
              <p className="text-gray-600 text-sm leading-relaxed mb-8">
                Manage every creator relationship in one place, not just the ones you found here. Invite creators you're already working with off-platform to Mobb. Your external creators and marketplace creators live in the same dashboard, with the same workflow tools. One view of every creator relationship you have, wherever it started.
              </p>
            </div>
            <button className="bg-white/80 hover:bg-white text-gray-900 font-bold px-6 py-2.5 rounded-full text-xs shadow-xs border border-gray-200/60 w-fit transition-all cursor-pointer">
              Start Searching
            </button>
          </div>

        </div>
      </section>

      {/* ------------------------------------------------------------- */}
      {/* SECTION 6: WHAT BRANDS SAY                                     */}
      {/* ------------------------------------------------------------- */}
      <WhatBrandsSay />

      {/* ------------------------------------------------------------- */}
      {/* SECTION 7: QUESTIONS ABOUT FINDING AND HIRING CREATORS (FAQ)   */}
      {/* ------------------------------------------------------------- */}
      <section className="max-w-[880px] mx-auto px-4 sm:px-6 py-16">
        <h2 style={headingStyle} className="text-center mb-10 tracking-tight">
          Questions about finding and hiring creators
        </h2>

        <div className="divide-y divide-gray-100">
          {faqs.map((faq, index) => {
            const isOpen = openFaq === index;
            return (
              <div key={index} className="py-5">
                <button
                  onClick={() => toggleFaq(index)}
                  className="w-full flex items-center justify-between text-left font-bold text-gray-900 text-base sm:text-lg hover:text-[#f43f5e] transition-colors cursor-pointer group"
                >
                  <span className="pr-4">{faq.question}</span>
                  <div className="w-6 h-6 rounded-full bg-gray-50 group-hover:bg-pink-50 flex items-center justify-center text-gray-500 shrink-0">
                    {isOpen ? <Minus className="w-4 h-4 text-[#f43f5e]" /> : <Plus className="w-4 h-4" />}
                  </div>
                </button>

                {isOpen && (
                  <div className="mt-3 text-gray-600 text-sm sm:text-base leading-relaxed animate-fadeIn">
                    {faq.answer}
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* Contact Sales Link */}
        <div className="mt-10 text-center">
          <a
            href="#contact"
            className="inline-flex items-center gap-1.5 text-sm font-bold text-gray-600 hover:text-gray-900 transition-colors"
          >
            <span>Have another question? Contact sales</span>
            <ArrowRight className="w-4 h-4" />
          </a>
        </div>
      </section>

      {/* ------------------------------------------------------------- */}
      {/* SECTION 8: FINAL CTA CARD                                      */}
      {/* ------------------------------------------------------------- */}
      <section className="max-w-[1140px] mx-auto px-4 sm:px-6 lg:px-0 my-16">
        <div className="bg-[#22252a] rounded-[32px] sm:rounded-[40px] p-8 sm:p-12 lg:p-16 text-center text-white shadow-2xl relative overflow-hidden">

          <h2 style={darkHeadingStyle} className="max-w-2xl mx-auto mb-4 tracking-tight">
            Your creator program starts with finding the right people.
          </h2>

          <p className="text-gray-300 text-sm sm:text-base md:text-lg max-w-xl mx-auto mb-8 font-normal leading-relaxed">
            Search 500,000+ vetted creators for free. Pricing visible on every profile. No subscription required to browse.
          </p>

          <a
            href="#search-grid"
            className="inline-flex items-center justify-center bg-white hover:bg-gray-100 text-gray-900 font-bold text-base px-8 py-4 rounded-full shadow-lg hover:scale-105 active:scale-95 transition-all cursor-pointer"
          >
            Search Creators Free
          </a>

        </div>
      </section>
    </div>
  );
};
