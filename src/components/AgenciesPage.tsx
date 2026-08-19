import React from 'react';
import {
  Check,
  ArrowRight,
  ChevronDown,
  Building2,
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
  janarJuhkovImg,
  throughGiuliaLensImg,
  marimiqadzzeImg,
  ivanaMarketinImg,
  niloofarTaghaviImg
} from '../avatars';

interface AgenciesPageProps {
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

export const AgenciesPage: React.FC<AgenciesPageProps> = ({ onNavigateSearch }) => {
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
              Run every client's creator program <span className="text-accent-pink">from one platform.</span>
            </h1>

            <p className="text-gray-600 text-lg sm:text-xl leading-relaxed mb-8 max-w-xl font-normal">
              Discovery, briefs, negotiations, approvals, payments, and reporting. Every client campaign managed end to end inside Mobb.
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
                Every client campaign managed in one account
              </div>

              <div className="bg-gray-100/90 rounded-full px-3.5 py-1.5 text-xs font-medium text-gray-700 flex items-center gap-1.5">
                <span className="w-4 h-4 rounded-full bg-emerald-600 text-white flex items-center justify-center shrink-0">
                  <Check className="w-2.5 h-2.5 stroke-[3]" />
                </span>
                Trusted by agencies running creator programs at scale
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
              
              {/* Creator Card 1 (Top Left Model B&W) */}
              <div className="absolute top-10 left-10 w-[200px] h-[220px] rounded-2xl overflow-hidden border-2 border-white/10 shadow-2xl">
                <img
                  src={janarJuhkovImg}
                  alt="Creator 1"
                  className="w-full h-full object-cover grayscale"
                />
              </div>

              {/* Creator Card 2 (Bottom Right Model Warm Tone) */}
              <div className="absolute bottom-10 right-10 w-[200px] h-[220px] rounded-2xl overflow-hidden border-2 border-white/10 shadow-2xl">
                <img
                  src={throughGiuliaLensImg}
                  alt="Creator 2"
                  className="w-full h-full object-cover"
                />
              </div>

              {/* Floating Pink Tags */}
              
              {/* Discovery Tag */}
              <div className="absolute top-12 right-12 bg-[#f43f5e] text-white text-[11px] font-extrabold px-3.5 py-1.5 rounded-xl shadow-lg flex items-center gap-1.5 z-20">
                <Search className="w-3.5 h-3.5" />
                Discovery
              </div>

              {/* Brief Tag */}
              <div className="absolute top-20 left-6 bg-[#f43f5e] text-white text-[11px] font-extrabold px-3.5 py-1.5 rounded-xl shadow-lg flex items-center gap-1.5 z-20">
                <FileText className="w-3.5 h-3.5" />
                Brief
              </div>

              {/* Negotiate Tag */}
              <div className="absolute top-1/2 -translate-y-2 right-4 bg-[#f43f5e] text-white text-[11px] font-extrabold px-3.5 py-1.5 rounded-xl shadow-lg flex items-center gap-1.5 z-20">
                <span className="text-xs">💬</span>
                Negotiate
              </div>

              {/* Report Tag */}
              <div className="absolute bottom-24 left-6 bg-[#f43f5e] text-white text-[11px] font-extrabold px-3.5 py-1.5 rounded-xl shadow-lg flex items-center gap-1.5 z-20">
                <BarChart2 className="w-3.5 h-3.5" />
                Report
              </div>

              {/* Team Collaboration Tag */}
              <div className="absolute bottom-14 right-14 bg-[#f43f5e] text-white text-[11px] font-extrabold px-3.5 py-1.5 rounded-xl shadow-lg flex items-center gap-1.5 z-20">
                <Users className="w-3.5 h-3.5" />
                Team Collaboration
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
          You are managing five client programs. Each one lives somewhere different.
        </h2>

        {/* Comparison Diagram Card */}
        <div className="bg-gray-50/80 rounded-[32px] p-6 sm:p-10 border border-gray-200/80 shadow-xs max-w-5xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            
            {/* Left Stack: Today, Per Client */}
            <div className="lg:col-span-5 space-y-3">
              <div className="text-[11px] font-bold tracking-wider text-gray-400 uppercase mb-2">
                TODAY, PER CLIENT
              </div>

              <div className="space-y-2">
                <div className="bg-white p-3 rounded-xl border border-gray-200 text-xs font-semibold text-gray-700 flex items-center gap-2">
                  <span className="text-gray-400">📊</span> Creators in a spreadsheet
                </div>

                <div className="bg-white p-3 rounded-xl border border-gray-200 text-xs font-semibold text-gray-700 flex items-center gap-2">
                  <span className="text-gray-400">✉️</span> Briefs over email
                </div>

                <div className="bg-white p-3 rounded-xl border border-gray-200 text-xs font-semibold text-gray-700 flex items-center gap-2">
                  <span className="text-gray-400">💳</span> Payments chased manually
                </div>

                <div className="bg-white p-3 rounded-xl border border-gray-200 text-xs font-semibold text-gray-700 flex items-center gap-2">
                  <span className="text-gray-400">📈</span> Reports pulled from native platforms
                </div>
              </div>

              <div className="text-[11px] text-gray-400 font-medium pt-1">
                ×5 clients = operational load that compounds.
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
                ON MOBB
              </div>
              <div className="text-base font-black text-gray-900 mb-4 flex items-center gap-2">
                mobb <span className="text-xs text-gray-400 font-normal">one account</span>
              </div>

              {/* Bullet points */}
              <div className="space-y-2.5 text-xs font-semibold text-gray-800 mb-5">
                <div className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-rose-500"></span>
                  Creator Discovery
                </div>
                <div className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-rose-500"></span>
                  Campaign Brief
                </div>
                <div className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-rose-500"></span>
                  Creator Hire & negotiation
                </div>
                <div className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-rose-500"></span>
                  Approvals & payments
                </div>
                <div className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-rose-500"></span>
                  Reporting
                </div>
              </div>

              <div className="text-[11px] text-gray-400 font-medium">
                The same structured workflow for every client program.
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* ------------------------------------------------------------- */}
      {/* SECTION 4: WHAT CHANGES WHEN YOUR AGENCY RUNS ON MOBB    */}
      {/* ------------------------------------------------------------- */}
      <section className="max-w-[1240px] mx-auto px-4 sm:px-6 lg:px-8 space-y-24 py-12">
        
        <h2 style={sectionHeadingStyle} className="text-center tracking-tight mb-16">
          What Changes When Your Agency Runs On Mobb.
        </h2>

        {/* ROW 1: You Manage Every Client's Creator Program From One Account */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Text Left */}
          <div className="lg:col-span-6 flex flex-col items-start text-left">
            <h3 style={sectionHeadingStyle} className="tracking-tight mb-6">
              You Manage Every Client's Creator Program From One Account
            </h3>
            <p className="text-gray-600 text-base sm:text-lg leading-relaxed font-normal">
              Every search, brief, negotiation, content approval, and payment for every client happens inside the same platform. No separate tools per client. No context switching between accounts.
            </p>
          </div>

          {/* Graphic Right (Pink Background Container) */}
          <div className="lg:col-span-6 flex justify-center">
            <div className="w-full max-w-[480px] min-h-[340px] bg-[#fecdd3]/40 rounded-3xl p-6 sm:p-8 flex justify-center items-center">
              <div className="w-full max-w-md bg-white rounded-2xl shadow-xl border border-gray-100 p-5 space-y-4">
                
                {/* Client Tabs Header */}
                <div className="flex items-center justify-between border-b border-gray-100 pb-2.5 text-xs font-bold text-gray-400">
                  <span className="text-rose-600 border-b-2 border-rose-600 pb-2 -mb-3">Bloom</span>
                  <span>Northpeak</span>
                  <span>Verve</span>
                  <span>Oakline</span>
                </div>

                {/* Dashboard Metrics for Selected Client */}
                <div className="space-y-2.5 pt-2">
                  <div className="flex items-center justify-between p-2.5 bg-gray-50 rounded-xl text-xs">
                    <span className="text-gray-600 font-medium">🔍 Discovery</span>
                    <span className="bg-emerald-100 text-emerald-800 text-[10px] font-bold px-2 py-0.5 rounded">8 shortlisted</span>
                  </div>

                  <div className="flex items-center justify-between p-2.5 bg-gray-50 rounded-xl text-xs">
                    <span className="text-gray-600 font-medium">📄 Briefs</span>
                    <span className="bg-blue-100 text-blue-800 text-[10px] font-bold px-2 py-0.5 rounded">3 sent</span>
                  </div>

                  <div className="flex items-center justify-between p-2.5 bg-gray-50 rounded-xl text-xs">
                    <span className="text-gray-600 font-medium">✔️ Approvals</span>
                    <span className="bg-amber-100 text-amber-800 text-[10px] font-bold px-2 py-0.5 rounded">2 pending</span>
                  </div>

                  <div className="flex items-center justify-between p-2.5 bg-gray-50 rounded-xl text-xs">
                    <span className="text-gray-600 font-medium">💳 Payments</span>
                    <span className="font-extrabold text-gray-900 text-xs">$8.4k escrow</span>
                  </div>
                </div>

              </div>
            </div>
          </div>

        </div>

        {/* ROW 2: You Execute Campaigns Faster For Every Client */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Graphic Left (Indigo Background Container) */}
          <div className="lg:col-span-6 order-2 lg:order-1 flex justify-center">
            <div className="w-full max-w-[480px] min-h-[340px] bg-[#e0e7ff]/60 rounded-3xl p-6 sm:p-8 flex justify-center items-center">
              <div className="w-full max-w-md bg-white rounded-2xl shadow-xl border border-gray-100 p-5 space-y-3 text-xs">
                
                {/* Creator Roster Rows */}
                <div className="space-y-2">
                  <div className="flex items-center justify-between p-2.5 bg-gray-50 rounded-xl border border-gray-100">
                    <div className="flex items-center gap-2">
                      <img src={marimiqadzzeImg} className="w-7 h-7 rounded-full object-cover" alt="Priya" />
                      <div>
                        <div className="font-bold text-gray-900 text-xs">Priya Nair</div>
                        <div className="text-[10px] text-gray-400">Hired 3x · Beauty</div>
                      </div>
                    </div>
                    <button className="bg-white border border-gray-200 text-gray-800 hover:bg-gray-100 font-bold text-[10px] px-2.5 py-1 rounded-lg flex items-center gap-1 cursor-pointer">
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
                    <button className="bg-white border border-gray-200 text-gray-800 hover:bg-gray-100 font-bold text-[10px] px-2.5 py-1 rounded-lg flex items-center gap-1 cursor-pointer">
                      <RefreshCw className="w-2.5 h-2.5 text-gray-500" /> Rehire
                    </button>
                  </div>

                  <div className="flex items-center justify-between p-2.5 bg-gray-50 rounded-xl border border-gray-100">
                    <div className="flex items-center gap-2">
                      <img src={niloofarTaghaviImg} className="w-7 h-7 rounded-full object-cover" alt="Hana" />
                      <div>
                        <div className="font-bold text-gray-900 text-xs">Hana Kim</div>
                        <div className="text-[10px] text-gray-400">Hired 4x · Food</div>
                      </div>
                    </div>
                    <button className="bg-white border border-gray-200 text-gray-800 hover:bg-gray-100 font-bold text-[10px] px-2.5 py-1 rounded-lg flex items-center gap-1 cursor-pointer">
                      <RefreshCw className="w-2.5 h-2.5 text-gray-500" /> Rehire
                    </button>
                  </div>
                </div>

              </div>
            </div>
          </div>

          {/* Text Right */}
          <div className="lg:col-span-6 flex flex-col items-start text-left order-1 lg:order-2">
            <h3 style={sectionHeadingStyle} className="tracking-tight mb-6">
              You Execute Campaigns Faster For Every Client
            </h3>
            <p className="text-gray-600 text-base sm:text-lg leading-relaxed font-normal">
              Every creator you hire for one client stays in your account. Brief them again for another campaign, track their performance history, and build on what worked. The infrastructure your agency builds compounds across every client program you run.
            </p>
          </div>

        </div>

        {/* ROW 3: You Scale Your Client Roster Without Scaling Your Team */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Text Left */}
          <div className="lg:col-span-6 flex flex-col items-start text-left">
            <h3 style={sectionHeadingStyle} className="tracking-tight mb-6">
              You Scale Your Client Roster Without Scaling Your Team
            </h3>
            <p className="text-gray-600 text-base sm:text-lg leading-relaxed font-normal">
              UGC, influencer campaigns, gifting, sponsored posts, affiliate deals. Every collaboration type follows the same workflow inside Mobb. Your team runs more client programs simultaneously without adding operational overhead per campaign.
            </p>
          </div>

          {/* Graphic Right (Yellow Background Container) */}
          <div className="lg:col-span-6 flex justify-center">
            <div className="w-full max-w-[480px] min-h-[340px] bg-[#fef08a]/60 rounded-3xl p-6 sm:p-8 flex justify-center items-center">
              <div className="w-full max-w-md bg-white rounded-2xl shadow-xl border border-gray-100 p-5 space-y-3">
                
                <div className="grid grid-cols-2 gap-3 text-xs">
                  <div className="p-3 bg-gray-50 rounded-xl border border-gray-100">
                    <div className="font-extrabold text-gray-900 text-xs">UGC</div>
                    <div className="text-[10px] text-gray-400 mt-0.5">Same workflow</div>
                  </div>

                  <div className="p-3 bg-gray-50 rounded-xl border border-gray-100">
                    <div className="font-extrabold text-gray-900 text-xs">Influencer</div>
                    <div className="text-[10px] text-gray-400 mt-0.5">Same workflow</div>
                  </div>

                  <div className="p-3 bg-gray-50 rounded-xl border border-gray-100">
                    <div className="font-extrabold text-gray-900 text-xs">Gifting</div>
                    <div className="text-[10px] text-gray-400 mt-0.5">Same workflow</div>
                  </div>

                  <div className="p-3 bg-gray-50 rounded-xl border border-gray-100">
                    <div className="font-extrabold text-gray-900 text-xs">Sponsored</div>
                    <div className="text-[10px] text-gray-400 mt-0.5">Same workflow</div>
                  </div>
                </div>

                {/* Highlighted Banner */}
                <div className="p-3 bg-rose-50 rounded-xl border border-rose-100 text-rose-700 flex items-center justify-between text-xs font-bold">
                  <div>
                    <div>Affiliate deals</div>
                    <div className="text-[10px] font-normal text-rose-500">Same workflow, every client</div>
                  </div>
                  <ArrowRight className="w-4 h-4 text-rose-600" />
                </div>

              </div>
            </div>
          </div>

        </div>

        {/* ROW 4: You Deliver Reporting Without The Manual Work */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Graphic Left (Light Gray Background Container) */}
          <div className="lg:col-span-6 order-2 lg:order-1 flex justify-center">
            <div className="w-full max-w-[480px] min-h-[340px] bg-gray-200/70 rounded-3xl p-6 sm:p-8 flex justify-center items-center">
              <div className="w-full max-w-md bg-white rounded-2xl shadow-xl border border-gray-100 p-5 space-y-4">
                
                <div className="flex items-center justify-between">
                  <div className="font-extrabold text-gray-900 text-xs">Bloom Skincare - April</div>
                  <span className="text-[10px] font-bold text-emerald-700 bg-emerald-50 px-2 py-0.5 rounded-full flex items-center gap-1">
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse"></span> Live
                  </span>
                </div>

                {/* Pink Bar Visual */}
                <div className="h-16 flex items-end gap-2 bg-gray-50 p-2 rounded-xl">
                  <div className="w-1/5 bg-rose-300 rounded-t h-[40%]"></div>
                  <div className="w-1/5 bg-rose-400 rounded-t h-[70%]"></div>
                  <div className="w-1/5 bg-rose-500 rounded-t h-[100%]"></div>
                  <div className="w-1/5 bg-rose-400 rounded-t h-[60%]"></div>
                  <div className="w-1/5 bg-rose-500 rounded-t h-[90%]"></div>
                </div>

                {/* 3 Metrics Row */}
                <div className="grid grid-cols-3 gap-2 text-center text-xs">
                  <div className="bg-gray-50 p-2 rounded-lg">
                    <div className="font-extrabold text-gray-900">2.4M</div>
                    <div className="text-[9px] text-gray-400">Reach</div>
                  </div>
                  <div className="bg-gray-50 p-2 rounded-lg">
                    <div className="font-extrabold text-gray-900">7.1%</div>
                    <div className="text-[9px] text-gray-400">Engagement</div>
                  </div>
                  <div className="bg-gray-50 p-2 rounded-lg">
                    <div className="font-extrabold text-gray-900">18.3k</div>
                    <div className="text-[9px] text-gray-400">Clicks</div>
                  </div>
                </div>

              </div>
            </div>
          </div>

          {/* Text Right */}
          <div className="lg:col-span-6 flex flex-col items-start text-left order-1 lg:order-2">
            <h3 style={sectionHeadingStyle} className="tracking-tight mb-6">
              You Deliver Reporting Without The Manual Work
            </h3>
            <p className="text-gray-600 text-base sm:text-lg leading-relaxed font-normal">
              Performance data per creator and per post tracked in real time. Pull results for any client campaign inside the same platform where you managed it. No native platform exports. No manually compiled reports before every client call.
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
              The more clients you run on Mobb, the more efficient your agency gets.
            </h2>

            <p className="text-gray-600 text-base sm:text-lg leading-relaxed mb-6 font-normal">
              Every creator hired, every brief sent, and every campaign delivered builds on the last. Creator relationships carry across client programs. Your agency runs more programs than it could before, with the same team.
            </p>

            <div className="text-sm font-extrabold text-gray-900 mb-8">
              Less time on operational overhead. More time growing your clients' roster.
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
            See how agencies run creator programs on Mobb.
          </h2>

          <p className="text-gray-400 text-sm sm:text-base max-w-xl mx-auto mb-8 leading-relaxed">
            Book a demo and see how agencies manage every client's creator program, from first search to final delivery, in one place.
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
