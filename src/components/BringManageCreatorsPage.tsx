import React, { useState } from 'react';
import {
  Check,
  ArrowRight,
  ChevronDown,
  LayoutGrid,
  CreditCard,
  Users,
  TrendingUp,
  Search,
  Plus,
  Copy,
  Mail,
  FileText,
  DollarSign,
  BarChart2,
  UserPlus
} from 'lucide-react';
import { TrustedBrands } from './TrustedBrands';
import { WhatBrandsSay } from './WhatBrandsSay';

interface BringManageCreatorsPageProps {
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

export const BringManageCreatorsPage: React.FC<BringManageCreatorsPageProps> = () => {
  const [openFaq, setOpenFaq] = useState<number | null>(null);
  const [copiedLink, setCopiedLink] = useState(false);

  const toggleFaq = (index: number) => {
    setOpenFaq(openFaq === index ? null : index);
  };

  const handleCopyLink = () => {
    setCopiedLink(true);
    setTimeout(() => setCopiedLink(false), 2000);
  };

  const faqItems = [
    {
      q: 'Can I manage creators I already work with on Mobb?',
      a: 'Yes! You can import creators you already have existing relationships with into your Mobb account and manage their campaigns, deliverables, and payments in one central place.',
    },
    {
      q: 'How do I add a creator I already work with?',
      a: "Simply generate a unique invitation link or enter their email address in your dashboard. They'll receive an invitation to join your roster or apply directly to your campaign briefs.",
    },
    {
      q: 'Does the creator need a Mobb account to be managed here?',
      a: 'Yes, creators set up a free account so they can securely accept campaign briefs, submit content deliverables for review, and receive payout transfers.',
    },
    {
      q: 'Do imported creators pay the same platform fee?',
      a: 'Imported creators benefit from streamlined payment processing, transparent milestone handling, and tax documentation generation with zero friction.',
    },
    {
      q: 'Can I track performance for content created by my own creators?',
      a: 'Yes, content metrics including views, impressions, engagement rates, and ROI are automatically aggregated in your main performance tracking dashboard alongside marketplace campaigns.',
    },
    {
      q: 'Can my whole team see imported creators?',
      a: 'Absolutely! Once a creator is imported into your account, everyone in your team workspace can view their profile, past deliverables, communication history, and active order statuses.',
    },
    {
      q: 'Is this available on the free plan?',
      a: 'Yes, you can import and test managing off-platform creators on Mobb starting directly from the free plan tier.',
    },
    {
      q: 'How many creators can I import?',
      a: 'There is no cap on how many off-platform creators you can import into your Mobb workspace.',
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
              The creators you already work with, <span className="text-accent-pink">managed in one place.</span>
            </h1>

            <p className="text-gray-600 text-lg sm:text-xl leading-relaxed mb-8 max-w-xl font-normal">
              Already have creator relationships built off-platform? Bring them to Mobb. Track their content, manage payments, and see performance alongside your marketplace creators, so your entire creator roster lives in one place regardless of where those relationships started.
            </p>

            {/* Feature Badges */}
            <div className="flex flex-col sm:flex-row flex-wrap gap-2.5 mb-10">
              <div className="bg-gray-100/90 rounded-full px-3.5 py-1.5 text-xs font-medium text-gray-700 flex items-center gap-1.5">
                <span className="w-4 h-4 rounded-full bg-emerald-600 text-white flex items-center justify-center shrink-0">
                  <Check className="w-2.5 h-2.5 stroke-[3]" />
                </span>
                Full creator roster in one dashboard
              </div>

              <div className="bg-gray-100/90 rounded-full px-3.5 py-1.5 text-xs font-medium text-gray-700 flex items-center gap-1.5">
                <span className="w-4 h-4 rounded-full bg-emerald-600 text-white flex items-center justify-center shrink-0">
                  <Check className="w-2.5 h-2.5 stroke-[3]" />
                </span>
                Unified dashboard for all your creator relationships
              </div>

              <div className="bg-gray-100/90 rounded-full px-3.5 py-1.5 text-xs font-medium text-gray-700 flex items-center gap-1.5">
                <span className="w-4 h-4 rounded-full bg-emerald-600 text-white flex items-center justify-center shrink-0">
                  <Check className="w-2.5 h-2.5 stroke-[3]" />
                </span>
                Full workflow access for every creator you manage
              </div>
            </div>

            {/* CTA Button */}
            <a
              href="#start-free"
              className="inline-flex items-center gap-2 bg-[#22252a] hover:bg-black text-white px-7 py-3.5 rounded-full font-bold text-sm transition-all duration-200 shadow-md hover:shadow-xl cursor-pointer group"
            >
              Get started free
              <ArrowRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
            </a>
          </div>

          {/* Right Hero Graphic - BRING OWN CREATORS AND MANAGE Card */}
          <div className="lg:col-span-6 flex justify-center lg:justify-end">
            <div className="w-full max-w-md bg-white rounded-[32px] shadow-[0_20px_50px_rgba(0,0,0,0.08)] p-7 sm:p-8 border border-gray-100 relative overflow-hidden">
              
              {/* Header Badge */}
              <div className="inline-flex items-center gap-2 mb-6 text-[#f43f5e] font-extrabold text-xs tracking-wider uppercase bg-rose-50 px-3.5 py-1.5 rounded-full">
                <span className="w-5 h-5 rounded-full bg-[#f43f5e] text-white flex items-center justify-center">
                  <Check className="w-3 h-3 stroke-[3]" />
                </span>
                BRING OWN CREATORS AND MANAGE
              </div>

              {/* Search Bar + Invite Button Row */}
              <div className="flex items-center gap-2 mb-6">
                <div className="relative flex-1">
                  <Search className="w-3.5 h-3.5 text-gray-400 absolute left-3 top-3" />
                  <input
                    type="text"
                    readOnly
                    value="Search"
                    className="w-full bg-gray-50/80 border border-gray-200/80 rounded-full pl-8 pr-3 py-2 text-xs text-gray-400 focus:outline-none"
                  />
                </div>
                <button className="bg-black hover:bg-gray-800 text-white font-bold px-3.5 py-2 rounded-full text-xs flex items-center gap-1 shrink-0 transition-colors cursor-pointer">
                  <Plus className="w-3.5 h-3.5" /> Invite Creators
                </button>
              </div>

              {/* Creators List */}
              <div className="space-y-4">
                
                {/* Creator 1: @maya.creates */}
                <div className="flex items-center justify-between pb-3.5 border-b border-gray-100">
                  <div className="flex items-center gap-3">
                    <img
                      src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&q=80&w=120"
                      alt="maya.creates"
                      className="w-11 h-11 rounded-full object-cover shadow-xs"
                    />
                    <div>
                      <div className="font-bold text-gray-900 text-sm">@maya.creates</div>
                      <div className="text-xs text-gray-400 font-medium">142K · Beauty</div>
                    </div>
                  </div>
                  <button className="border border-gray-300 hover:bg-gray-50 text-gray-800 font-bold text-[11px] px-3 py-1.5 rounded-full transition-colors cursor-pointer">
                    Invite to Campaign
                  </button>
                </div>

                {/* Creator 2: @jordan.fit */}
                <div className="flex items-center justify-between pb-3.5 border-b border-gray-100">
                  <div className="flex items-center gap-3">
                    <img
                      src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=120"
                      alt="jordan.fit"
                      className="w-11 h-11 rounded-full object-cover shadow-xs"
                    />
                    <div>
                      <div className="font-bold text-gray-900 text-sm">@jordan.fit</div>
                      <div className="text-xs text-gray-400 font-medium">88K · Lifestyle</div>
                    </div>
                  </div>
                  <button className="border border-gray-300 hover:bg-gray-50 text-gray-800 font-bold text-[11px] px-3 py-1.5 rounded-full transition-colors cursor-pointer">
                    Invite to Campaign
                  </button>
                </div>

                {/* Creator 3: @sam.studios */}
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <img
                      src="https://images.unsplash.com/photo-1517841905240-472988babdf9?auto=format&fit=crop&q=80&w=120"
                      alt="sam.studios"
                      className="w-11 h-11 rounded-full object-cover shadow-xs"
                    />
                    <div>
                      <div className="font-bold text-gray-900 text-sm">@sam.studios</div>
                      <div className="text-xs text-gray-400 font-medium">220K · Beauty</div>
                    </div>
                  </div>
                  <span className="bg-gray-100 text-gray-400 font-semibold text-[11px] px-3.5 py-1.5 rounded-full">
                    Invited
                  </span>
                </div>

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
      {/* SECTION 3: ONE SYSTEM FOR EVERY CREATOR RELATIONSHIP           */}
      {/* ------------------------------------------------------------- */}
      <section className="max-w-[1240px] mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-24">
        <h2 style={sectionHeadingStyle} className="text-center mb-16 tracking-tight">
          One system for every creator relationship you have.
        </h2>

        {/* 4 Value Prop Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          
          {/* Card 1: One Dashboard */}
          <div className="bg-gray-100/70 rounded-2xl p-6 flex flex-col justify-between border border-gray-200/50 hover:shadow-md transition-all">
            <div className="w-10 h-10 rounded-xl bg-white shadow-xs border border-gray-100 flex items-center justify-center mb-6 text-gray-900">
              <LayoutGrid className="w-5 h-5 stroke-[2]" />
            </div>
            <div>
              <h3 className="font-bold text-gray-900 text-base mb-2">One Dashboard</h3>
              <p className="text-gray-500 text-xs sm:text-sm leading-relaxed">
                Your existing creator relationships and your marketplace finds live in the same dashboard
              </p>
            </div>
          </div>

          {/* Card 2: Same Workflow */}
          <div className="bg-gray-100/70 rounded-2xl p-6 flex flex-col justify-between border border-gray-200/50 hover:shadow-md transition-all">
            <div className="w-10 h-10 rounded-xl bg-white shadow-xs border border-gray-100 flex items-center justify-center mb-6 text-gray-900">
              <CreditCard className="w-5 h-5 stroke-[2]" />
            </div>
            <div>
              <h3 className="font-bold text-gray-900 text-base mb-2">Same Workflow</h3>
              <p className="text-gray-500 text-xs sm:text-sm leading-relaxed">
                Off-platform creators go through the same payment, approval, and tracking workflow
              </p>
            </div>
          </div>

          {/* Card 3: Your Whole Team Sees */}
          <div className="bg-gray-100/70 rounded-2xl p-6 flex flex-col justify-between border border-gray-200/50 hover:shadow-md transition-all">
            <div className="w-10 h-10 rounded-xl bg-white shadow-xs border border-gray-100 flex items-center justify-center mb-6 text-gray-900">
              <Users className="w-5 h-5 stroke-[2]" />
            </div>
            <div>
              <h3 className="font-bold text-gray-900 text-base mb-2">Your Whole Team Sees</h3>
              <p className="text-gray-500 text-xs sm:text-sm leading-relaxed">
                Your whole team sees every creator relationship, not just the ones sourced through Mobb
              </p>
            </div>
          </div>

          {/* Card 4: History Builds Up */}
          <div className="bg-gray-100/70 rounded-2xl p-6 flex flex-col justify-between border border-gray-200/50 hover:shadow-md transition-all">
            <div className="w-10 h-10 rounded-xl bg-white shadow-xs border border-gray-100 flex items-center justify-center mb-6 text-gray-900">
              <TrendingUp className="w-5 h-5 stroke-[2]" />
            </div>
            <div>
              <h3 className="font-bold text-gray-900 text-base mb-2">History Builds Up</h3>
              <p className="text-gray-500 text-xs sm:text-sm leading-relaxed">
                Creator history and performance data build up in one place over time, regardless of where the relationship started
              </p>
            </div>
          </div>

        </div>

        {/* Center CTA Button */}
        <div className="flex justify-center">
          <a
            href="#start-free"
            className="inline-flex items-center gap-2 bg-[#22252a] hover:bg-black text-white px-7 py-3.5 rounded-full font-bold text-sm transition-all duration-200 shadow-md hover:shadow-xl cursor-pointer group"
          >
            Get started free
            <ArrowRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
          </a>
        </div>
      </section>

      {/* ------------------------------------------------------------- */}
      {/* SECTION 4: FEATURE DEEP DIVES (4 ALTERNATING ROWS)            */}
      {/* ------------------------------------------------------------- */}
      <section className="max-w-[1240px] mx-auto px-4 sm:px-6 lg:px-8 space-y-24 py-12">
        
        {/* ROW 1: Bring Any Creator Into Mobb In Minutes. */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Text Left */}
          <div className="lg:col-span-6 flex flex-col items-start text-left">
            <h2 style={sectionHeadingStyle} className="tracking-tight mb-6">
              Bring Any Creator Into Mobb In Minutes.
            </h2>
            <p className="text-gray-600 text-base sm:text-lg leading-relaxed font-normal">
              Add creators you already work with by importing them directly into your account. They receive an invitation to join the platform. Once they are in, they sit alongside marketplace creators in the same dashboard with the same workflow tools available.
            </p>
          </div>

          {/* Graphic Right (Pink Background Container) */}
          <div className="lg:col-span-6 flex justify-center">
            <div className="w-full max-w-[480px] min-h-[340px] bg-[#fecdd3]/40 rounded-3xl p-6 sm:p-8 flex justify-center items-center">
              <div className="w-full max-w-md bg-white rounded-2xl shadow-xl border border-gray-100 p-6 space-y-5 text-center">
                
                {/* Email Box Icon */}
                <div className="w-12 h-12 bg-purple-100 text-purple-600 rounded-2xl flex items-center justify-center mx-auto shadow-xs">
                  <Mail className="w-6 h-6" />
                </div>

                <div>
                  <h3 className="font-extrabold text-gray-900 text-sm mb-1">
                    Invite Creators Outside of Mobb to Your Campaign
                  </h3>
                  <p className="text-gray-400 text-xs">
                    Invited creators can view your campaign details and apply if interested.
                  </p>
                </div>

                {/* Invite Link Box */}
                <div className="flex items-center gap-2 p-2 bg-gray-50 rounded-xl border border-gray-200/80">
                  <input
                    type="text"
                    readOnly
                    value="https://mobb.com/invite/crocs-campaign..."
                    className="w-full bg-transparent text-xs text-gray-600 font-mono focus:outline-none truncate px-1"
                  />
                  <button
                    onClick={handleCopyLink}
                    className="bg-white border border-gray-200 text-gray-800 hover:bg-gray-100 font-bold text-xs px-3 py-1.5 rounded-lg shrink-0 flex items-center gap-1 transition-colors cursor-pointer"
                  >
                    <Copy className="w-3 h-3" />
                    {copiedLink ? 'Copied!' : 'Copy Link'}
                  </button>
                </div>

              </div>
            </div>
          </div>

        </div>

        {/* ROW 2: Run Campaigns With Your Own Creators The Same Way You Run Them With Marketplace Creators. */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Graphic Left (Indigo Background Container) */}
          <div className="lg:col-span-6 order-2 lg:order-1 flex justify-center">
            <div className="w-full max-w-[480px] min-h-[340px] bg-[#e0e7ff]/60 rounded-3xl p-6 sm:p-8 flex justify-center items-center">
              <div className="w-full max-w-md bg-white rounded-2xl shadow-xl border border-gray-100 p-5 space-y-4">
                
                {/* Campaign Brief Banner */}
                <div className="flex items-start justify-between bg-orange-50 p-3.5 rounded-xl border border-orange-100">
                  <div className="flex items-start gap-2.5">
                    <span className="w-6 h-6 rounded-lg bg-orange-500 text-white font-black text-xs flex items-center justify-center shrink-0 mt-0.5">
                      b
                    </span>
                    <div>
                      <div className="font-extrabold text-gray-900 text-xs">
                        Skincare Line Summer Launch Brief
                      </div>
                      <div className="text-[11px] text-gray-500 mt-0.5">$500 budget · 3 creators</div>
                    </div>
                  </div>
                  <span className="bg-emerald-100 text-emerald-800 font-extrabold text-[10px] px-2.5 py-1 rounded-full border border-emerald-200 shrink-0">
                    70 applicants
                  </span>
                </div>

                {/* Simulated Brief Skeleton Lines */}
                <div className="space-y-2 pt-1 px-1">
                  <div className="h-3 bg-gray-100 rounded-full w-3/4"></div>
                  <div className="h-3 bg-gray-100 rounded-full w-full"></div>
                  <div className="h-3 bg-gray-100 rounded-full w-5/6"></div>
                </div>

              </div>
            </div>
          </div>

          {/* Text Right */}
          <div className="lg:col-span-6 flex flex-col items-start text-left order-1 lg:order-2">
            <h2 style={sectionHeadingStyle} className="tracking-tight mb-6">
              Run Campaigns With Your Own Creators The Same Way You Run Them With Marketplace Creators.
            </h2>
            <p className="text-gray-600 text-base sm:text-lg leading-relaxed font-normal">
              Create briefs, set deliverables, and manage timelines for your imported creators through the same campaign workflow. You do not need a separate system for creators you already know. Everything runs through Mobb.
            </p>
          </div>

        </div>

        {/* ROW 3: Process Payments For All Your Creators Through The Same Secure System. */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Text Left */}
          <div className="lg:col-span-6 flex flex-col items-start text-left">
            <h2 style={sectionHeadingStyle} className="tracking-tight mb-6">
              Process Payments For All Your Creators Through The Same Secure System.
            </h2>
            <p className="text-gray-600 text-base sm:text-lg leading-relaxed font-normal">
              Every creator you manage gets paid through Mobb's payment infrastructure. Funds held in escrow. Released on approval. Tax documents generated automatically. The same financial workflow applies whether the creator came from the marketplace or from your own roster.
            </p>
          </div>

          {/* Graphic Right (Yellow Background Container) */}
          <div className="lg:col-span-6 flex justify-center">
            <div className="w-full max-w-[480px] min-h-[340px] bg-[#fef08a]/60 rounded-3xl p-6 sm:p-8 flex justify-center items-center">
              <div className="w-full max-w-md bg-white rounded-2xl shadow-xl border border-gray-100 p-4 space-y-2.5 text-xs">
                
                {/* Payment Row 1 */}
                <div className="flex items-center justify-between p-2.5 bg-gray-50 rounded-xl border border-gray-100">
                  <div className="flex items-center gap-2.5">
                    <img src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&q=80&w=100" className="w-7 h-7 rounded-full object-cover" alt="User" />
                    <div>
                      <div className="font-bold text-gray-900 text-xs">@sophiamade</div>
                      <div className="text-[10px] text-gray-400">Los Angeles, CA · USD</div>
                    </div>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="font-extrabold text-gray-900 text-xs">$350</span>
                    <span className="bg-emerald-100 text-emerald-800 text-[10px] font-bold px-2 py-0.5 rounded">Paid</span>
                  </div>
                </div>

                {/* Payment Row 2 */}
                <div className="flex items-center justify-between p-2.5 bg-gray-50 rounded-xl border border-gray-100">
                  <div className="flex items-center gap-2.5">
                    <img src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=100" className="w-7 h-7 rounded-full object-cover" alt="User" />
                    <div>
                      <div className="font-bold text-gray-900 text-xs">@marcojr</div>
                      <div className="text-[10px] text-gray-400">Mexico City · MXN</div>
                    </div>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="font-extrabold text-gray-900 text-xs">$180</span>
                    <span className="bg-emerald-100 text-emerald-800 text-[10px] font-bold px-2 py-0.5 rounded">Paid</span>
                  </div>
                </div>

                {/* Payment Row 3 */}
                <div className="flex items-center justify-between p-2.5 bg-gray-50 rounded-xl border border-gray-100">
                  <div className="flex items-center gap-2.5">
                    <img src="https://images.unsplash.com/photo-1517841905240-472988babdf9?auto=format&fit=crop&q=80&w=100" className="w-7 h-7 rounded-full object-cover" alt="User" />
                    <div>
                      <div className="font-bold text-gray-900 text-xs">@elenabeauty</div>
                      <div className="text-[10px] text-gray-400">Berlin, DE · EUR</div>
                    </div>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="font-extrabold text-gray-900 text-xs">$420</span>
                    <span className="bg-emerald-100 text-emerald-800 text-[10px] font-bold px-2 py-0.5 rounded">Paid</span>
                  </div>
                </div>

                {/* Payment Row 4 */}
                <div className="flex items-center justify-between p-2.5 bg-gray-50 rounded-xl border border-gray-100">
                  <div className="flex items-center gap-2.5">
                    <img src="https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&q=80&w=100" className="w-7 h-7 rounded-full object-cover" alt="User" />
                    <div>
                      <div className="font-bold text-gray-900 text-xs">@riyakumar</div>
                      <div className="text-[10px] text-gray-400">Mumbai, IN · INR</div>
                    </div>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="font-extrabold text-gray-900 text-xs">$95</span>
                    <span className="bg-amber-100 text-amber-800 text-[10px] font-bold px-2 py-0.5 rounded">In review</span>
                  </div>
                </div>

              </div>
            </div>
          </div>

        </div>

        {/* ROW 4: See How All Your Creators Perform In One Dashboard. */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Graphic Left (Light Gray Background Container) */}
          <div className="lg:col-span-6 order-2 lg:order-1 flex justify-center">
            <div className="w-full max-w-[480px] min-h-[340px] bg-gray-200/70 rounded-3xl p-6 sm:p-8 flex justify-center items-center">
              <div className="w-full max-w-md bg-white rounded-2xl shadow-xl border border-gray-100 p-4 space-y-2 text-[11px]">
                
                {/* Roster Table Header */}
                <div className="grid grid-cols-12 font-bold text-gray-400 px-2 py-1 border-b border-gray-100 text-[10px]">
                  <span className="col-span-4">Name</span>
                  <span className="col-span-3">Join Date</span>
                  <span className="col-span-2 text-center">Profile</span>
                  <span className="col-span-3 text-right">Action</span>
                </div>

                {/* Row 1 */}
                <div className="grid grid-cols-12 items-center p-2 bg-gray-50/80 rounded-lg">
                  <div className="col-span-4 flex items-center gap-1.5 font-bold text-gray-900 truncate">
                    <img src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&q=80&w=80" className="w-5 h-5 rounded-full object-cover shrink-0" alt="Sarah" />
                    <span className="truncate">Sarah Johnson</span>
                  </div>
                  <span className="col-span-3 text-gray-500 font-medium text-[10px]">Nov 30, 2024</span>
                  <span className="col-span-2 text-center text-gray-600 font-bold text-[10px] underline cursor-pointer">View</span>
                  <div className="col-span-3 text-right">
                    <button className="bg-white border border-gray-200 text-gray-800 hover:bg-gray-100 font-bold text-[9px] px-2 py-1 rounded transition-colors cursor-pointer">
                      Invite
                    </button>
                  </div>
                </div>

                {/* Row 2 */}
                <div className="grid grid-cols-12 items-center p-2 bg-gray-50/80 rounded-lg">
                  <div className="col-span-4 flex items-center gap-1.5 font-bold text-gray-900 truncate">
                    <img src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=80" className="w-5 h-5 rounded-full object-cover shrink-0" alt="Michael" />
                    <span className="truncate">Michael Chen</span>
                  </div>
                  <span className="col-span-3 text-gray-500 font-medium text-[10px]">Nov 27, 2024</span>
                  <span className="col-span-2 text-center text-gray-600 font-bold text-[10px] underline cursor-pointer">View</span>
                  <div className="col-span-3 text-right">
                    <button className="bg-white border border-gray-200 text-gray-800 hover:bg-gray-100 font-bold text-[9px] px-2 py-1 rounded transition-colors cursor-pointer">
                      Invite
                    </button>
                  </div>
                </div>

                {/* Row 3 */}
                <div className="grid grid-cols-12 items-center p-2 bg-gray-50/80 rounded-lg">
                  <div className="col-span-4 flex items-center gap-1.5 font-bold text-gray-900 truncate">
                    <img src="https://images.unsplash.com/photo-1517841905240-472988babdf9?auto=format&fit=crop&q=80&w=80" className="w-5 h-5 rounded-full object-cover shrink-0" alt="Emily" />
                    <span className="truncate">Emily Rodriguez</span>
                  </div>
                  <span className="col-span-3 text-gray-500 font-medium text-[10px]">Nov 14, 2024</span>
                  <span className="col-span-2 text-center text-gray-600 font-bold text-[10px] underline cursor-pointer">View</span>
                  <div className="col-span-3 text-right">
                    <button className="bg-white border border-gray-200 text-gray-800 hover:bg-gray-100 font-bold text-[9px] px-2 py-1 rounded transition-colors cursor-pointer">
                      Invite
                    </button>
                  </div>
                </div>

                {/* Row 4 */}
                <div className="grid grid-cols-12 items-center p-2 bg-gray-50/80 rounded-lg">
                  <div className="col-span-4 flex items-center gap-1.5 font-bold text-gray-900 truncate">
                    <img src="https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&q=80&w=80" className="w-5 h-5 rounded-full object-cover shrink-0" alt="James" />
                    <span className="truncate">James Wilson</span>
                  </div>
                  <span className="col-span-3 text-gray-500 font-medium text-[10px]">Nov 9, 2024</span>
                  <span className="col-span-2 text-center text-gray-600 font-bold text-[10px] underline cursor-pointer">View</span>
                  <div className="col-span-3 text-right">
                    <button className="bg-white border border-gray-200 text-gray-800 hover:bg-gray-100 font-bold text-[9px] px-2 py-1 rounded transition-colors cursor-pointer">
                      Invite
                    </button>
                  </div>
                </div>

                {/* Row 5 */}
                <div className="grid grid-cols-12 items-center p-2 bg-gray-50/80 rounded-lg">
                  <div className="col-span-4 flex items-center gap-1.5 font-bold text-gray-900 truncate">
                    <img src="https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&q=80&w=80" className="w-5 h-5 rounded-full object-cover shrink-0" alt="Olivia" />
                    <span className="truncate">Olivia Martinez</span>
                  </div>
                  <span className="col-span-3 text-gray-500 font-medium text-[10px]">Oct 24, 2024</span>
                  <span className="col-span-2 text-center text-gray-600 font-bold text-[10px] underline cursor-pointer">View</span>
                  <div className="col-span-3 text-right">
                    <button className="bg-white border border-gray-200 text-gray-800 hover:bg-gray-100 font-bold text-[9px] px-2 py-1 rounded transition-colors cursor-pointer">
                      Invite
                    </button>
                  </div>
                </div>

              </div>
            </div>
          </div>

          {/* Text Right */}
          <div className="lg:col-span-6 flex flex-col items-start text-left order-1 lg:order-2">
            <h2 style={sectionHeadingStyle} className="tracking-tight mb-6">
              See How All Your Creators Perform In One Dashboard.
            </h2>
            <p className="text-gray-600 text-base sm:text-lg leading-relaxed font-normal">
              Content created by your imported creators is tracked alongside your marketplace orders. Impressions, engagement, and views are visible in the same reporting dashboard. You compare performance across your whole roster, not just the creators you found here.
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
          Questions about bringing and managing your own creators on Mobb
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
            All your creator relationships belong in one place.
          </h2>

          <p className="text-gray-400 text-sm sm:text-base max-w-xl mx-auto mb-8 leading-relaxed">
            Import the creators you already work with. Manage campaigns, payments, and performance for your whole roster from one account. No spreadsheets, no separate tools, no missing history.
          </p>

          <a
            href="#start-free"
            className="inline-flex items-center justify-center bg-white hover:bg-gray-100 text-gray-900 font-bold px-8 py-3.5 rounded-full transition-all duration-200 shadow-lg text-sm cursor-pointer"
          >
            Get started free
          </a>
        </div>
      </section>
    </div>
  );
};
