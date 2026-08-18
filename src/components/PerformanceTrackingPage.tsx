import React, { useState } from 'react';
import {
  Check,
  ArrowRight,
  TrendingUp,
  BarChart2,
  ChevronDown,
  Plus,
  ExternalLink,
  Eye,
  Heart,
  Share2,
  Calendar,
  Filter,
  Search
} from 'lucide-react';
import { TrustedBrands } from './TrustedBrands';
import { WhatBrandsSay } from './WhatBrandsSay';
import { dbrkvImg, hermanStrydomImg } from '../avatars';

interface PerformanceTrackingPageProps {
  onNavigateHome?: () => void;
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

export const PerformanceTrackingPage: React.FC<PerformanceTrackingPageProps> = ({ onNavigateHome }) => {
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  const toggleFaq = (index: number) => {
    setOpenFaq(openFaq === index ? null : index);
  };

  const faqItems = [
    {
      q: 'Does tracking happen automatically, or do I have to set it up?',
      a: 'Tracking happens completely automatically for any order placed on Mobb. Once the creator posts content and attaches the link to the order, performance metrics begin pulling automatically without any extra setup required.',
    },
    {
      q: 'Which platforms does Mobb track?',
      a: 'Mobb tracks content posted on Instagram (Reels, Feed Posts, Stories), TikTok (Videos), and YouTube (Shorts & Long-form Videos).',
    },
    {
      q: 'What metrics are tracked?',
      a: 'We track Impressions, Total Views, Likes, Comments, Shares, Saves, Engagement Rate, and Blended CPM across all connected posts.',
    },
    {
      q: 'Can I track content I purchased outside of Mobb?',
      a: 'Yes! Pro and Premium subscribers can manually input post links from external collaborations to track all campaign metrics in one consolidated dashboard.',
    },
    {
      q: 'How long is post data available?',
      a: 'Post performance data is refreshed every 24 hours and stored permanently for as long as your Mobb account remains active.',
    },
    {
      q: 'Can my whole team see the tracking data?',
      a: 'Yes, all members invited to your Team Workspace can view real-time tracking dashboards, filter reports, and export summary analytics.',
    },
    {
      q: 'Do I need to ask creators to share their analytics?',
      a: 'No! Mobb directly integrates with platform APIs to fetch verified engagement and view statistics automatically.',
    },
  ];

  return (
    <div className="w-full bg-white text-gray-900 font-sans pb-24">
      {/* ------------------------------------------------------------- */}
      {/* SECTION 1: HERO SECTION                                       */}
      {/* ------------------------------------------------------------- */}
      <section className="max-w-[1240px] mx-auto px-4 sm:px-6 lg:px-8 pt-12 sm:pt-16 pb-16 sm:pb-24">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* Left Hero Content */}
          <div className="lg:col-span-6 flex flex-col items-start text-left">
            <h1 style={heroHeadingStyle} className="mb-6 tracking-tight">
              See exactly how every piece of content <span className="text-accent-pink">performs.</span>
            </h1>

            <p className="text-gray-600 text-lg sm:text-xl leading-relaxed mb-8 max-w-xl font-normal">
              Track impressions, views, and engagement across every creator post, automatically. All in one dashboard.
            </p>

            {/* Feature Badges */}
            <div className="flex flex-wrap gap-2.5 mb-10">
              <div className="bg-gray-100/90 rounded-full px-3.5 py-1.5 text-xs font-medium text-gray-700 flex items-center gap-1.5">
                <span className="w-4 h-4 rounded-full bg-emerald-600 text-white flex items-center justify-center shrink-0">
                  <Check className="w-2.5 h-2.5 stroke-[3]" />
                </span>
                Automatic tracking on every order
              </div>

              <div className="bg-gray-100/90 rounded-full px-3.5 py-1.5 text-xs font-medium text-gray-700 flex items-center gap-1.5">
                <span className="w-4 h-4 rounded-full bg-emerald-600 text-white flex items-center justify-center shrink-0">
                  <Check className="w-2.5 h-2.5 stroke-[3]" />
                </span>
                Real-time performance data refreshed every 24 hours
              </div>

              <div className="bg-gray-100/90 rounded-full px-3.5 py-1.5 text-xs font-medium text-gray-700 flex items-center gap-1.5">
                <span className="w-4 h-4 rounded-full bg-emerald-600 text-white flex items-center justify-center shrink-0">
                  <Check className="w-2.5 h-2.5 stroke-[3]" />
                </span>
                Instagram, TikTok, and YouTube covered
              </div>
            </div>

            {/* CTA Button */}
            <a
              href="#get-started"
              className="inline-flex items-center gap-2 bg-[#111827] hover:bg-black text-white px-7 py-3.5 rounded-full font-bold text-sm transition-all duration-200 shadow-md hover:shadow-xl cursor-pointer group"
            >
              Get started free
              <ArrowRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
            </a>
          </div>

          {/* Right Hero Graphic - Track & Report Card */}
          <div className="lg:col-span-6 flex justify-center lg:justify-end">
            <div className="w-full max-w-md bg-white rounded-[32px] shadow-[0_20px_50px_rgba(0,0,0,0.08)] p-8 border border-gray-100 relative overflow-hidden">
              
              {/* Header Badge */}
              <div className="flex items-center gap-2 mb-6 text-[#f43f5e] font-extrabold text-xs tracking-wider uppercase">
                <div className="w-6 h-6 rounded-lg bg-rose-100 flex items-center justify-center">
                  <TrendingUp className="w-3.5 h-3.5 text-[#f43f5e]" />
                </div>
                TRACK & REPORT
              </div>

              {/* Stats Row */}
              <div className="grid grid-cols-3 gap-4 mb-10 pb-6 border-b border-gray-100">
                <div>
                  <div className="text-2xl sm:text-3xl font-black text-gray-900 tracking-tight">1.2M</div>
                  <div className="text-xs text-gray-400 font-medium mt-0.5">Reach</div>
                </div>
                <div>
                  <div className="text-2xl sm:text-3xl font-black text-gray-900 tracking-tight">4.2%</div>
                  <div className="text-xs text-gray-400 font-medium mt-0.5">Eng. rate</div>
                </div>
                <div>
                  <div className="text-2xl sm:text-3xl font-black text-gray-900 tracking-tight">48k</div>
                  <div className="text-xs text-gray-400 font-medium mt-0.5">Engaged</div>
                </div>
              </div>

              {/* Bar Chart Graphics */}
              <div className="flex items-end justify-between gap-3 h-44 pt-4">
                <div className="w-1/5 bg-[#111827] rounded-xl h-24 transition-all hover:opacity-90"></div>
                <div className="w-1/5 bg-[#111827] rounded-xl h-36 transition-all hover:opacity-90"></div>
                <div className="w-1/5 bg-[#111827] rounded-xl h-16 transition-all hover:opacity-90"></div>
                <div className="w-1/5 bg-[#f43f5e] rounded-xl h-44 transition-all hover:opacity-90 shadow-md"></div>
                <div className="w-1/5 bg-[#111827] rounded-xl h-28 transition-all hover:opacity-90"></div>
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
      {/* SECTION 3: PERFORMANCE DATA BUILT INTO COLLABORATION          */}
      {/* ------------------------------------------------------------- */}
      <section className="max-w-[1240px] mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-24">
        <h2 style={sectionHeadingStyle} className="text-center mb-16 tracking-tight max-w-4xl mx-auto">
          Performance data built into every collaboration
        </h2>

        {/* 4 Feature Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          
          {/* Card 1: Purple - Know Who Drove Results */}
          <div className="bg-[#e0e7ff]/50 rounded-2xl p-6 flex flex-col justify-between border border-indigo-100/50 hover:shadow-md transition-shadow">
            <div className="bg-white rounded-xl p-4 shadow-sm border border-gray-100 mb-6 space-y-2.5">
              <div className="flex items-center justify-between text-xs">
                <div className="flex items-center gap-2">
                  <div className="w-6 h-6 rounded-full bg-pink-200 flex items-center justify-center font-bold text-[10px] text-pink-700">M</div>
                  <span className="font-semibold text-gray-800 text-[11px]">Maya Lin</span>
                </div>
                <span className="bg-gray-100 text-gray-600 px-2 py-0.5 rounded-md text-[10px] font-medium flex items-center gap-1">
                  <Eye className="w-3 h-3" /> 13.1K views
                </span>
              </div>

              <div className="flex items-center justify-between text-xs">
                <div className="flex items-center gap-2">
                  <div className="w-6 h-6 rounded-full bg-blue-200 flex items-center justify-center font-bold text-[10px] text-blue-700">D</div>
                  <span className="font-semibold text-gray-800 text-[11px]">Dana Obi</span>
                </div>
                <span className="bg-gray-100 text-gray-600 px-2 py-0.5 rounded-md text-[10px] font-medium">
                  ⚡ 2.5 ENG rate
                </span>
              </div>

              <div className="flex items-center justify-between text-xs">
                <div className="flex items-center gap-2">
                  <div className="w-6 h-6 rounded-full bg-purple-200 flex items-center justify-center font-bold text-[10px] text-purple-700">J</div>
                  <span className="font-semibold text-gray-800 text-[11px]">Jonah Reyes</span>
                </div>
                <span className="bg-gray-100 text-gray-600 px-2 py-0.5 rounded-md text-[10px] font-medium">
                  📈 $2.5 CPM
                </span>
              </div>
            </div>

            <div>
              <h3 className="font-bold text-gray-900 text-base mb-1.5">Know Who Drove Results</h3>
              <p className="text-gray-500 text-xs leading-relaxed">
                Know which creators drove results before you brief the next campaign
              </p>
            </div>
          </div>

          {/* Card 2: Pink - No More Screenshots */}
          <div className="bg-[#fecdd3]/40 rounded-2xl p-6 flex flex-col justify-between border border-pink-100/50 hover:shadow-md transition-shadow">
            <div className="bg-white rounded-xl p-4 shadow-sm border border-gray-100 mb-6 min-h-[110px] flex flex-col justify-between">
              <div className="flex items-center gap-1.5 text-[11px] font-semibold text-gray-700">
                <span className="w-2 h-2 rounded-full bg-pink-500"></span>
                Total Views on Instagram
              </div>
              
              {/* Mini Line Graph SVG */}
              <div className="w-full h-12 pt-2">
                <svg className="w-full h-full text-pink-500" viewBox="0 0 100 30" fill="none" stroke="currentColor" strokeWidth="2.5">
                  <path d="M 0 25 Q 20 15 35 22 T 60 8 T 85 12 T 100 2" strokeLinecap="round" />
                </svg>
              </div>
            </div>

            <div>
              <h3 className="font-bold text-gray-900 text-base mb-1.5">No More Screenshots</h3>
              <p className="text-gray-500 text-xs leading-relaxed">
                Stop chasing screenshots. Performance data is pulled directly from the platform
              </p>
            </div>
          </div>

          {/* Card 3: Yellow - One Source Of Truth */}
          <div className="bg-[#fef08a]/50 rounded-2xl p-6 flex flex-col justify-between border border-amber-100/50 hover:shadow-md transition-shadow">
            <div className="bg-white rounded-xl p-4 shadow-sm border border-gray-100 mb-6 space-y-2">
              <div className="flex items-center justify-between text-[11px]">
                <div className="flex items-center gap-1.5">
                  <div className="w-5 h-5 rounded-full bg-gray-200"></div>
                  <span className="font-medium text-gray-800">Marcus Chen</span>
                </div>
                <span className="bg-gray-100 px-1.5 py-0.5 rounded text-[10px] font-semibold text-gray-600">2 posts</span>
              </div>
              <div className="flex items-center justify-between text-[11px]">
                <div className="flex items-center gap-1.5">
                  <div className="w-5 h-5 rounded-full bg-gray-200"></div>
                  <span className="font-medium text-gray-800">Emma</span>
                </div>
                <span className="bg-gray-100 px-1.5 py-0.5 rounded text-[10px] font-semibold text-gray-600">2 posts</span>
              </div>
              <div className="flex items-center justify-between text-[11px]">
                <div className="flex items-center gap-1.5">
                  <div className="w-5 h-5 rounded-full bg-gray-200"></div>
                  <span className="font-medium text-gray-800">Jade Kim</span>
                </div>
                <span className="bg-gray-100 px-1.5 py-0.5 rounded text-[10px] font-semibold text-gray-600">1 post</span>
              </div>
            </div>

            <div>
              <h3 className="font-bold text-gray-900 text-base mb-1.5">One Source Of Truth</h3>
              <p className="text-gray-500 text-xs leading-relaxed">
                Give your team a single source of truth, not a folder of exports
              </p>
            </div>
          </div>

          {/* Card 4: Light Gray - Decide With Data */}
          <div className="bg-gray-100 rounded-2xl p-6 flex flex-col justify-between border border-gray-200/50 hover:shadow-md transition-shadow">
            <div className="bg-white rounded-xl p-4 shadow-sm border border-gray-100 mb-6 text-xs">
              <div className="flex items-center justify-between mb-2">
                <span className="font-bold text-gray-900 text-[11px]">CPM Over Time</span>
                <span className="bg-[#111827] text-white text-[9px] px-2 py-0.5 rounded-full flex items-center gap-1">
                  ⏱ updated 2 minutes ago
                </span>
              </div>
              <div className="text-[10px] text-gray-400 space-y-1">
                <div>30K</div>
                <div>20K</div>
                <div>10K</div>
              </div>
            </div>

            <div>
              <h3 className="font-bold text-gray-900 text-base mb-1.5">Decide With Data</h3>
              <p className="text-gray-500 text-xs leading-relaxed">
                Make the next spend decision with data, not instinct
              </p>
            </div>
          </div>

        </div>

        {/* Center CTA Button */}
        <div className="flex justify-center">
          <a
            href="#get-started"
            className="inline-flex items-center gap-2 bg-[#111827] hover:bg-black text-white px-7 py-3.5 rounded-full font-bold text-sm transition-all duration-200 shadow-md hover:shadow-xl cursor-pointer group"
          >
            Get started free
            <ArrowRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
          </a>
        </div>
      </section>

      {/* ------------------------------------------------------------- */}
      {/* SECTION 4: DEEP DIVES (ALTERNATING ROWS)                      */}
      {/* ------------------------------------------------------------- */}
      <section className="max-w-[1240px] mx-auto px-4 sm:px-6 lg:px-8 space-y-24 py-12">
        
        {/* ROW 1: Know How Every Post Performs */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Text Left */}
          <div className="lg:col-span-6 flex flex-col items-start text-left">
            <h2 style={sectionHeadingStyle} className="tracking-tight mb-6">
              Know How Every Post Performs Without Asking The Creator.
            </h2>
            <p className="text-gray-600 text-base sm:text-lg leading-relaxed font-normal">
              Mobb automatically tracks every piece of content purchased through a direct order or campaign.
              Impressions, views, likes, comments, shares, and saves are pulled directly from platform data and
              updated every 24 hours. You do not need to ask the creator for a screenshot or log into a separate
              analytics tool.
            </p>
          </div>

          {/* Graphic Right (Pink Background) */}
          <div className="lg:col-span-6 flex justify-center">
            <div className="w-full max-w-[480px] min-h-[340px] bg-[#fecdd3]/40 rounded-3xl p-6 sm:p-8 flex justify-center items-center">
              <div className="w-full max-w-md bg-white rounded-2xl shadow-xl border border-gray-100 p-4 space-y-3 text-xs">
                
                {/* Table Row 1 */}
                <div className="p-3 bg-gray-50/80 rounded-xl border border-gray-100 flex items-center justify-between text-[11px] gap-2">
                  <div className="flex items-center gap-2 shrink-0">
                    <img
                      src={dbrkvImg}
                      alt="post thumb"
                      className="w-10 h-10 rounded-lg object-cover"
                    />
                    <div>
                      <div className="font-bold text-gray-900">$1.43 <span className="text-[9px] text-gray-400 font-normal">CPM</span></div>
                      <div className="text-[10px] text-gray-500">840K Impr.</div>
                    </div>
                  </div>

                  <div className="text-center shrink-0">
                    <div className="font-bold text-gray-900">200K</div>
                    <div className="text-[10px] text-gray-400">Engagements</div>
                  </div>

                  <div className="text-right shrink-0">
                    <div className="font-bold text-emerald-600">1.8% ENG</div>
                    <button className="mt-1 px-2.5 py-1 bg-black text-white text-[10px] font-bold rounded-lg flex items-center gap-1 cursor-pointer">
                      <ExternalLink className="w-2.5 h-2.5" /> View Post
                    </button>
                  </div>
                </div>

                {/* Table Row 2 */}
                <div className="p-3 bg-gray-50/80 rounded-xl border border-gray-100 flex items-center justify-between text-[11px] gap-2">
                  <div className="flex items-center gap-2 shrink-0">
                    <img
                      src={hermanStrydomImg}
                      alt="post thumb"
                      className="w-10 h-10 rounded-lg object-cover"
                    />
                    <div>
                      <div className="font-bold text-gray-900">$2.14 <span className="text-[9px] text-gray-400 font-normal">CPM</span></div>
                      <div className="text-[10px] text-gray-500">810K Impr.</div>
                    </div>
                  </div>

                  <div className="text-center shrink-0">
                    <div className="font-bold text-gray-900">200K</div>
                    <div className="text-[10px] text-gray-400">Engagements</div>
                  </div>

                  <div className="text-right shrink-0">
                    <div className="font-bold text-emerald-600">1.8% ENG</div>
                    <button className="mt-1 px-2.5 py-1 bg-black text-white text-[10px] font-bold rounded-lg flex items-center gap-1 cursor-pointer">
                      <ExternalLink className="w-2.5 h-2.5" /> View Post
                    </button>
                  </div>
                </div>

              </div>
            </div>
          </div>

        </div>

        {/* ROW 2: Track Posts Beyond The Ones You Purchased Here */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Graphic Left (Indigo/Purple Background) */}
          <div className="lg:col-span-6 order-2 lg:order-1 flex justify-center">
            <div className="w-full max-w-[480px] min-h-[340px] bg-[#e0e7ff]/60 rounded-3xl p-6 sm:p-8 flex justify-center items-center">
              <div className="w-full max-w-sm bg-white rounded-2xl shadow-xl border border-gray-100 p-5 space-y-3.5 text-xs">
                <div className="font-bold text-sm text-gray-900 border-b border-gray-100 pb-2">Track New Post</div>
                
                <div>
                  <label className="block text-[11px] font-semibold text-gray-600 mb-1">Post URL</label>
                  <input
                    type="text"
                    readOnly
                    value="https://www.tiktok.com/@manetheorie/video/7644648"
                    className="w-full bg-gray-50 border border-gray-200 rounded-lg px-3 py-2 text-[11px] text-gray-700 font-mono"
                  />
                </div>

                <div>
                  <label className="block text-[11px] font-semibold text-gray-600 mb-1">Assign to campaign (optional)</label>
                  <select className="w-full bg-gray-50 border border-gray-200 rounded-lg px-3 py-2 text-[11px] text-gray-700 font-medium">
                    <option>Spring Launch 2026</option>
                  </select>
                </div>

                <button className="w-full bg-[#111827] hover:bg-black text-white font-bold py-2.5 rounded-xl text-xs transition-colors cursor-pointer">
                  Start Tracking
                </button>
              </div>
            </div>
          </div>

          {/* Text Right */}
          <div className="lg:col-span-6 flex flex-col items-start text-left order-1 lg:order-2">
            <h2 style={sectionHeadingStyle} className="tracking-tight mb-6">
              Track Posts Beyond The Ones You Purchased Here.
            </h2>
            <p className="text-gray-600 text-base sm:text-lg leading-relaxed font-normal">
              Pro and Premium subscribers can add post links to track performance on content created outside the platform.
              All tracked posts appear in the same dashboard alongside your Mobb orders.
            </p>
          </div>

        </div>

        {/* ROW 3: Pull The Data Your Team Actually Needs */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Text Left */}
          <div className="lg:col-span-6 flex flex-col items-start text-left">
            <h2 style={sectionHeadingStyle} className="tracking-tight mb-6">
              Pull The Data Your Team Actually Needs.
            </h2>
            <p className="text-gray-600 text-base sm:text-lg leading-relaxed font-normal">
              View performance across individual posts and campaigns in a consolidated dashboard. Filter by creator, platform,
              or campaign. See how each post trended over time, up to three weeks of tracked data per post. Share results
              with your team without exporting from a separate tool.
            </p>
          </div>

          {/* Graphic Right (Yellow Background) */}
          <div className="lg:col-span-6 flex justify-center">
            <div className="w-full max-w-[480px] min-h-[340px] bg-[#fef08a]/60 rounded-3xl p-6 sm:p-8 flex justify-center items-center">
              <div className="w-full max-w-md bg-white rounded-2xl shadow-xl border border-gray-100 p-4 space-y-3 text-xs">
                <div className="flex items-center justify-between pb-2 border-b border-gray-100">
                  <span className="font-bold text-gray-900 text-xs">Campaign Overview</span>
                  <div className="flex gap-1">
                    <span className="bg-gray-100 text-gray-600 px-2 py-0.5 rounded text-[10px] font-semibold">All Time</span>
                    <span className="bg-gray-100 text-gray-600 px-2 py-0.5 rounded text-[10px] font-semibold">Custom</span>
                  </div>
                </div>

                {/* Metrics 4 Grid */}
                <div className="grid grid-cols-4 gap-1.5 text-center">
                  <div className="bg-rose-50 p-2 rounded-lg">
                    <div className="text-[9px] text-rose-500 font-bold">Blended CPM</div>
                    <div className="text-xs font-black text-rose-700">$1.43</div>
                  </div>
                  <div className="bg-blue-50 p-2 rounded-lg">
                    <div className="text-[9px] text-blue-500 font-bold">Total Spend</div>
                    <div className="text-xs font-black text-blue-700">$4,801</div>
                  </div>
                  <div className="bg-amber-50 p-2 rounded-lg">
                    <div className="text-[9px] text-amber-600 font-bold">Total Views</div>
                    <div className="text-xs font-black text-amber-700">698K</div>
                  </div>
                  <div className="bg-purple-50 p-2 rounded-lg">
                    <div className="text-[9px] text-purple-600 font-bold">Total Eng.</div>
                    <div className="text-xs font-black text-purple-700">39.6K</div>
                  </div>
                </div>

                {/* Mini Graph Area */}
                <div className="pt-2">
                  <div className="text-[10px] text-gray-400 font-medium mb-1">Blended CPM Over Time</div>
                  <div className="w-full h-16 bg-gradient-to-t from-gray-50 to-white rounded-lg border border-gray-100 p-1 flex items-end">
                    <svg className="w-full h-full text-indigo-500" viewBox="0 0 100 30" fill="none" stroke="currentColor" strokeWidth="2">
                      <path d="M 0 20 Q 25 28 50 15 T 100 5" />
                    </svg>
                  </div>
                </div>
              </div>
            </div>
          </div>

        </div>

        {/* ROW 4: Understand Which Creators And Formats Deliver Results */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Graphic Left (Light Gray Background) */}
          <div className="lg:col-span-6 order-2 lg:order-1 flex justify-center">
            <div className="w-full max-w-[480px] min-h-[340px] bg-gray-200/70 rounded-3xl p-6 sm:p-8 flex justify-center items-center">
              <div className="w-full max-w-md bg-white rounded-2xl shadow-xl border border-gray-100 p-4 text-[10px] space-y-2">
                
                <div className="font-bold text-gray-900 text-xs mb-2">Creator Leaderboard</div>

                <div className="space-y-1.5">
                  <div className="grid grid-cols-6 gap-1 font-bold text-gray-400 border-b border-gray-100 pb-1">
                    <span className="col-span-2">Creator</span>
                    <span>Posts</span>
                    <span>Views</span>
                    <span>Eng.</span>
                    <span>CPM</span>
                  </div>

                  <div className="grid grid-cols-6 gap-1 items-center py-1 border-b border-gray-50 text-gray-800">
                    <span className="col-span-2 font-bold truncate">Marcus Chen</span>
                    <span>3 posts</span>
                    <span>12.1K</span>
                    <span>4.2K</span>
                    <span className="text-emerald-600 font-bold">$4.10</span>
                  </div>

                  <div className="grid grid-cols-6 gap-1 items-center py-1 border-b border-gray-50 text-gray-800">
                    <span className="col-span-2 font-bold truncate">Emma Rodriguez</span>
                    <span>2 posts</span>
                    <span>10.2K</span>
                    <span>3.1K</span>
                    <span className="text-emerald-600 font-bold">$5.10</span>
                  </div>

                  <div className="grid grid-cols-6 gap-1 items-center py-1 border-b border-gray-50 text-gray-800">
                    <span className="col-span-2 font-bold truncate">Jade Kim</span>
                    <span>1 post</span>
                    <span>11.3K</span>
                    <span>2.1K</span>
                    <span className="text-emerald-600 font-bold">$12.10</span>
                  </div>

                  <div className="grid grid-cols-6 gap-1 items-center py-1 text-gray-800">
                    <span className="col-span-2 font-bold truncate">Alex Torres</span>
                    <span>2 posts</span>
                    <span>10.2K</span>
                    <span>1.1K</span>
                    <span className="text-emerald-600 font-bold">$14.10</span>
                  </div>
                </div>

              </div>
            </div>
          </div>

          {/* Text Right */}
          <div className="lg:col-span-6 flex flex-col items-start text-left order-1 lg:order-2">
            <h2 style={sectionHeadingStyle} className="tracking-tight mb-6">
              Understand Which Creators And Formats Deliver Results.
            </h2>
            <p className="text-gray-600 text-base sm:text-lg leading-relaxed font-normal">
              Compare performance across creators, content types, and campaigns in one view. Identify which posts
              drove the most impressions, which formats had the highest engagement rate, and which creators consistently
              overperform. Use the data to make the next campaign decision, not just document the last one.
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
          Questions about tracking and reporting creator content
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
          <a
            href="#contact-sales"
            className="text-xs font-bold text-gray-500 hover:text-gray-900 inline-flex items-center gap-1 transition-colors"
          >
            Have another question? Contact sales <ArrowRight className="w-3 h-3" />
          </a>
        </div>
      </section>

      {/* ------------------------------------------------------------- */}
      {/* SECTION 7: DARK CTA FOOTER CARD                               */}
      {/* ------------------------------------------------------------- */}
      <section className="max-w-[1140px] mx-auto px-4 sm:px-6 lg:px-0 my-16">
        <div className="bg-[#22252a] rounded-[32px] sm:rounded-[40px] p-8 sm:p-12 lg:p-16 text-center text-white shadow-2xl relative overflow-hidden">
          
          <h2 style={darkSectionHeadingStyle} className="max-w-2xl mx-auto mb-4 tracking-tight">
            Every post tracked. Every result visible.
          </h2>

          <p className="text-gray-400 text-sm sm:text-base max-w-xl mx-auto mb-8 leading-relaxed">
            See impressions, views, and engagement for every piece of content you purchase on Mobb, automatically.
            No screenshots. No chasing creators. No switching tools.
          </p>

          <a
            href="#get-started"
            className="inline-flex items-center justify-center bg-white hover:bg-gray-100 text-gray-900 font-bold px-8 py-3.5 rounded-full transition-all duration-200 shadow-lg text-sm cursor-pointer"
          >
            Get started free
          </a>
        </div>
      </section>
    </div>
  );
};
