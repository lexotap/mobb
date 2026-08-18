import React, { useState } from 'react';
import {
  Check,
  ArrowRight,
  ChevronDown,
  ChevronUp,
  Search,
  FileText,
  ShieldCheck,
  DollarSign,
  Sparkles,
  Users,
  BarChart2,
  Lock,
  Globe,
  Briefcase
} from 'lucide-react';
import { TrustedBrands } from './TrustedBrands';
import {
  sofiaJensenImg,
  renateReinsveImg,
  kolapoImg,
  ivanaMarketinImg,
  joanneBladesImg,
  janarJuhkovImg,
  oliviaPezzenteImg,
  paolaSantanaImg,
  stephenGImg,
  marimiqadzzeImg,
} from '../avatars';

interface UgcForAdsPageProps {
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
  fontSize: '32px',
  lineHeight: '40px',
};

const darkSectionHeadingStyle: React.CSSProperties = {
  ...sectionHeadingStyle,
  color: '#ffffff',
};

export const UgcForAdsPage: React.FC<UgcForAdsPageProps> = () => {
  const [activeTab, setActiveTab] = useState<number>(1);
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  const toggleFaq = (index: number) => {
    setOpenFaq(openFaq === index ? null : index);
  };

  const toolsTabs = [
    { id: 1, label: '01 Creator Discovery', title: 'Find the Right Creator before You Commit', description: 'Search 1.1m+ vetted Creators by platform, niche, audience, and budget. See verified engagement rates and demographics before you commit. Spend less time searching and more time running campaigns.', pills: ['Vetted creators', 'Detailed audience demographics', 'Free to search'] },
    { id: 2, label: '02 AI Campaign Briefs', title: 'AI-Powered Campaign Brief Generator', description: 'Generate clear, ad-ready deliverable guidelines in seconds. Include hooks, visual guidelines, raw file formats, and brand guardrails without writing from scratch.', pills: ['Instant AI briefs', 'Raw file specs', 'Custom hooks'] },
    { id: 3, label: '03 Order Management', title: 'Track Submissions & Revisions in One Place', description: 'Review video submissions directly in your browser. Request edits or accept content with a single click. Maintain a central hub for all raw and edited assets.', pills: ['In-browser review', 'Unlimited revisions', 'Asset library'] },
    { id: 4, label: '04 Global Payments', title: 'Escrow Protection & Automated Invoicing', description: 'Hold payments safely until content is approved. Automatically generate tax forms, multi-currency invoices, and receipts for your finance team.', pills: ['Escrow protection', 'Multi-currency', 'Automated receipts'] },
    { id: 5, label: '05 Reporting', title: 'Measure Performance & Ad Attribution', description: 'Track view counts, engagement, click-through rates, and conversion metrics across all your active UGC ad campaigns in real time.', pills: ['CTR & ROI metrics', 'Real-time analytics', 'Ad performance'] },
    { id: 6, label: '06 Team Workspace', title: 'Collaborate with Media Buyers & Creative Strategy', description: 'Invite team members, assign permissions, tag assets for specific ad sets, and export raw videos directly to your ad manager accounts.', pills: ['Multi-user seats', 'Ad-set tagging', 'Direct export'] },
    { id: 7, label: '07 Creator CRM', title: 'Build a Permanent Roster of Winning Creators', description: 'Save top-performing UGC creators to your brand roster. Rehire winning talent in seconds for seasonal launches or new ad concepts.', pills: ['Saved rosters', '1-click rehire', 'Performance history'] }
  ];

  const faqs = [
    {
      q: 'Are usage rights included when I hire a creator?',
      a: 'Yes! Every collaboration on Mobb includes built-in usage rights contracts. Terms specify commercial usage rights for paid ads across Meta, TikTok, YouTube, and digital channels before any work begins.'
    },
    {
      q: 'What content formats do creators produce?',
      a: 'Creators produce raw UGC clips, fully edited TikToks/Reels with trending audio and subtitles, product unboxings, testimonial reviews, hook variations, and high-resolution raw video files.'
    },
    {
      q: 'What makes creator content on Mobb ad-ready?',
      a: 'All creators on Mobb are vetted for lighting, audio clarity, and past brand experience. Brief templates ensure creators deliver 9:16 vertical video with strong opening hooks and clear calls to action.'
    },
    {
      q: 'Can I run multiple UGC campaigns at the same time?',
      a: 'Absolutely. You can run concurrent UGC briefs for different product lines, seasonal promos, or ad hooks all from one central dashboard.'
    },
    {
      q: 'Can I reuse creators from a previous campaign?',
      a: 'Yes! Every creator you work with is saved to your account roster. You can rehire winning creators with a single click and send updated briefs in seconds.'
    }
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
              Find the right creators, get the content, run the ads.
            </h1>

            <p className="text-gray-600 text-lg sm:text-xl leading-relaxed mb-8 max-w-xl font-normal">
              Skip the scattered tools and inboxes. The entire UGC workflow runs inside Mobb.
            </p>

            {/* Feature Badges */}
            <div className="flex flex-col sm:flex-row flex-wrap gap-2.5 mb-10">
              <div className="bg-gray-100/90 rounded-full px-3.5 py-1.5 text-xs font-medium text-gray-700 flex items-center gap-1.5">
                <span className="w-4 h-4 rounded-full bg-emerald-600 text-white flex items-center justify-center shrink-0">
                  <Check className="w-2.5 h-2.5 stroke-[3]" />
                </span>
                1.1m+ vetted creators
              </div>

              <div className="bg-gray-100/90 rounded-full px-3.5 py-1.5 text-xs font-medium text-gray-700 flex items-center gap-1.5">
                <span className="w-4 h-4 rounded-full bg-emerald-600 text-white flex items-center justify-center shrink-0">
                  <Check className="w-2.5 h-2.5 stroke-[3]" />
                </span>
                Usage rights confirmed via built-in contracts
              </div>

              <div className="bg-gray-100/90 rounded-full px-3.5 py-1.5 text-xs font-medium text-gray-700 flex items-center gap-1.5">
                <span className="w-4 h-4 rounded-full bg-emerald-600 text-white flex items-center justify-center shrink-0">
                  <Check className="w-2.5 h-2.5 stroke-[3]" />
                </span>
                Free to start, no subscription required to place your first order
              </div>
            </div>

            {/* CTA Button */}
            <a
              href="#start-free"
              className="inline-flex items-center gap-2 bg-[#22252a] hover:bg-black text-white px-8 py-3.5 rounded-xl font-bold text-sm transition-all duration-200 shadow-md hover:shadow-xl cursor-pointer group"
            >
              Start free
              <ArrowRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
            </a>
          </div>

          {/* Right Hero Graphic - Dark Canvas with Floating Pills */}
          <div className="lg:col-span-6 flex justify-center lg:justify-end">
            <div className="w-full max-w-[480px] h-[420px] sm:h-[460px] bg-[#22252a] rounded-[36px] p-6 sm:p-8 relative overflow-hidden flex items-center justify-center shadow-2xl">

              {/* Creator Card Top Left */}
              <div className="absolute top-8 left-8 w-[210px] h-[220px] rounded-2xl overflow-hidden border-2 border-white/10 shadow-2xl">
                <img
                  src={sofiaJensenImg}
                  alt="Creator 1"
                  className="w-full h-full object-cover"
                />
                <div className="absolute bottom-3 left-3 bg-white/90 backdrop-blur-md text-gray-900 text-[10px] font-extrabold px-2.5 py-1 rounded-full flex items-center gap-1">
                  <span className="w-1.5 h-1.5 rounded-full bg-rose-500"></span> TikTok
                </div>
              </div>

              {/* Creator Card Right */}
              <div className="absolute top-20 right-8 w-[190px] h-[200px] rounded-2xl overflow-hidden border-2 border-rose-500/50 shadow-2xl">
                <img
                  src={renateReinsveImg}
                  alt="Creator 2"
                  className="w-full h-full object-cover"
                />
                <div className="absolute bottom-3 left-3 bg-white/90 backdrop-blur-md text-gray-900 text-[10px] font-extrabold px-2.5 py-1 rounded-full flex items-center gap-1">
                  <span className="w-1.5 h-1.5 rounded-full bg-purple-500"></span> Reels
                </div>
              </div>

              {/* Creator Card Bottom Center */}
              <div className="absolute bottom-6 left-28 w-[180px] h-[190px] rounded-2xl overflow-hidden border-2 border-white/10 shadow-2xl">
                <img
                  src={kolapoImg}
                  alt="Creator 3"
                  className="w-full h-full object-cover"
                />
                <div className="absolute bottom-3 left-3 bg-white/90 backdrop-blur-md text-gray-900 text-[10px] font-extrabold px-2.5 py-1 rounded-full flex items-center gap-1">
                  <span className="w-1.5 h-1.5 rounded-full bg-gray-900"></span> UGC
                </div>
              </div>

              {/* Floating Pink Badge Top Right: Usage rights confirmed */}
              <div className="absolute top-10 right-6 bg-[#f43f5e] text-white text-[11px] font-bold px-3.5 py-2 rounded-2xl shadow-xl flex items-center gap-2 z-20 max-w-[210px]">
                <ShieldCheck className="w-4 h-4 shrink-0" />
                <div>
                  <div className="font-extrabold text-xs leading-snug">Usage rights confirmed</div>
                  <div className="text-[9px] text-rose-100 font-normal">Locked before order begins</div>
                </div>
              </div>

              {/* Floating Pink Badge Bottom Right: Content approved */}
              <div className="absolute bottom-16 right-4 bg-[#f43f5e] text-white text-[11px] font-bold px-3.5 py-2 rounded-2xl shadow-xl flex items-center gap-2 z-20 max-w-[200px]">
                <Check className="w-4 h-4 shrink-0 bg-white text-rose-500 rounded-full p-0.5" />
                <div>
                  <div className="font-extrabold text-xs leading-snug">Content approved</div>
                  <div className="text-[9px] text-rose-100 font-normal">Ready to run as ads</div>
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
      {/* SECTION 3: STATS CARDS (4x, 5x, 85%)                           */}
      {/* ------------------------------------------------------------- */}
      <section className="max-w-[1240px] mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">

          <div className="bg-gray-50/80 p-8 rounded-3xl border border-gray-200/60 flex flex-col justify-between">
            <div className="text-5xl font-black text-gray-900 mb-3 tracking-tight">4x</div>
            <div className="text-gray-600 text-sm leading-relaxed font-normal">
              Creator content drives higher click-through than branded ads.*
            </div>
          </div>

          <div className="bg-gray-50/80 p-8 rounded-3xl border border-gray-200/60 flex flex-col justify-between">
            <div className="text-5xl font-black text-gray-900 mb-3 tracking-tight">5x</div>
            <div className="text-gray-600 text-sm leading-relaxed font-normal">
              UGC is more likely to convert than traditional ad creative.**
            </div>
          </div>

          <div className="bg-gray-50/80 p-8 rounded-3xl border border-gray-200/60 flex flex-col justify-between">
            <div className="text-5xl font-black text-gray-900 mb-3 tracking-tight">85%</div>
            <div className="text-gray-600 text-sm leading-relaxed font-normal">
              Of consumers trust UGC more than brand-produced content.***
            </div>
          </div>

        </div>
      </section>

      {/* ------------------------------------------------------------- */}
      {/* SECTION 4: DARK STATEMENT BANNER                              */}
      {/* ------------------------------------------------------------- */}
      <section className="max-w-[1240px] mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="bg-[#22252a] text-white rounded-[36px] p-8 sm:p-12 text-center max-w-4xl mx-auto shadow-xl">
          <h2 style={darkSectionHeadingStyle} className="mb-6 tracking-tight">
            Running a UGC program means managing more than just creators.
          </h2>
          <p className="text-gray-300 text-sm sm:text-base leading-relaxed max-w-2xl mx-auto font-normal">
            You need the right creator, a clear brief, a contract that covers usage rights, and payment protection if the content does not deliver. Most brands manage each of those steps across DMs, email threads, and separate tools with no single source of truth.
          </p>
          <div className="mt-6 text-sm font-bold text-rose-300">
            Mobb handles all of it in one place.
          </div>
        </div>
      </section>

      {/* ------------------------------------------------------------- */}
      {/* SECTION 5: FOUR THINGS EVERY UGC PROGRAM NEEDS                */}
      {/* ------------------------------------------------------------- */}
      <section className="max-w-[1240px] mx-auto px-4 sm:px-6 lg:px-8 space-y-24 py-16">

        <h2 style={sectionHeadingStyle} className="text-center tracking-tight max-w-3xl mx-auto mb-16">
          Four Things Every UGC Program Needs. All In One Place.
        </h2>

        {/* ITEM 1: Vetted Creators */}
        <div className="feature-grid-row">
          <div className="space-y-4 text-left flex flex-col justify-center">
            <h3 style={sectionHeadingStyle} className="tracking-tight mb-2">
              Vetted Creators Who Produce Ad-Ready Content
            </h3>
            <p className="text-gray-600 text-base sm:text-lg leading-relaxed font-normal">
              Every creator is reviewed by our team for engagement quality, content standards, and past brand experience before they appear in your search results.
            </p>
          </div>

          {/* Graphic Right (Pink Background Container) */}
          <div className="flex justify-center">
            <div className="feature-card-wrapper bg-[#fecdd3]/40">
              <div className="feature-card-inner space-y-3">
                <div className="flex items-center gap-2 border-b border-gray-100 pb-3">
                  <Search className="w-4 h-4 text-gray-400" />
                  <span className="text-xs text-gray-400 font-medium">Search creators</span>
                </div>

                <div className="grid grid-cols-2 gap-3">
                  <div className="p-3 bg-gray-50 rounded-xl border border-gray-100">
                    <img src={ivanaMarketinImg} className="w-10 h-10 rounded-full object-cover mb-2" alt="Ivana" />
                    <div className="font-bold text-gray-900 text-xs">Ivana M.</div>
                    <div className="text-[10px] text-gray-400">UGC · Lifestyle · $180</div>
                    <div className="text-[10px] text-amber-500 font-bold mt-1">★ 5.0</div>
                  </div>

                  <div className="p-3 bg-gray-50 rounded-xl border border-gray-100">
                    <img src={joanneBladesImg} className="w-10 h-10 rounded-full object-cover mb-2" alt="Joanne" />
                    <div className="font-bold text-gray-900 text-xs">Joanne B.</div>
                    <div className="text-[10px] text-gray-400">TikTok · Beauty · $250</div>
                    <div className="text-[10px] text-amber-500 font-bold mt-1">★ 4.9</div>
                  </div>
                </div>

                <div className="p-2 bg-emerald-50 text-emerald-800 rounded-xl text-[10px] font-bold text-center flex items-center justify-center gap-1">
                  <Check className="w-3 h-3 text-emerald-600" /> Every creator reviewed before appearing in results
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* ITEM 2: Contracts and Usage Rights */}
        <div className="feature-grid-row">
          {/* Graphic Left (Indigo Background Container) */}
          <div className="lg:order-1 flex justify-center">
            <div className="feature-card-wrapper bg-[#e0e7ff]/60">
              <div className="feature-card-inner !bg-[#22252a] text-white space-y-3 text-xs">
                <div className="flex items-center gap-2 text-emerald-400 font-bold">
                  <Check className="w-4 h-4" /> You are required to post on your page
                </div>
                <div className="flex items-center gap-2 text-emerald-400 font-bold">
                  <Check className="w-4 h-4" /> Content approval is required before posting
                </div>
                <div className="flex items-center gap-2 text-emerald-400 font-bold">
                  <Check className="w-4 h-4" /> Content will be used for ads
                </div>
                <div className="flex items-center gap-2 text-emerald-400 font-bold">
                  <Check className="w-4 h-4" /> Expected delivery by January 16, 2026
                </div>
                <div className="pt-2 border-t border-gray-700 flex items-center gap-2 text-gray-300 font-semibold">
                  <Check className="w-4 h-4 text-rose-400" /> I agree to the above requirements.
                </div>
              </div>
            </div>
          </div>

          <div className="space-y-4 text-left flex flex-col justify-center lg:order-2">
            <h3 style={sectionHeadingStyle} className="tracking-tight mb-2">
              Contracts And Usage Rights Handled Inside The Platform
            </h3>
            <p className="text-gray-600 text-base sm:text-lg leading-relaxed font-normal">
              Every collaboration includes a built-in contract. Confirm usage rights, deliverable requirements, and permitted channels directly with the creator before any order begins. Everything agreed is on record before any payment is made.
            </p>
          </div>
        </div>

        {/* ITEM 3: Content That Meets Your Brief */}
        <div className="feature-grid-row">
          <div className="space-y-4 text-left flex flex-col justify-center">
            <h3 style={sectionHeadingStyle} className="tracking-tight mb-2">
              Content That Meets Your Brief
            </h3>
            <p className="text-gray-600 text-base sm:text-lg leading-relaxed font-normal">
              Specify format, hooks, messaging direction, and raw file requirements in your brief. Review content inside the platform before approving. Request revisions if needed. Payment releases only when you approve.
            </p>
          </div>

          {/* Graphic Right (Yellow Background Container) */}
          <div className="flex justify-center">
            <div className="feature-card-wrapper bg-[#fef08a]/60">
              <div className="feature-card-inner space-y-4">
                <div className="inline-block bg-indigo-100 text-indigo-700 text-[10px] font-extrabold px-2.5 py-1 rounded-full w-fit">
                  In-progress
                </div>
                <div className="text-xs text-gray-600">
                  You have 1 hour to accept or decline the submissions. <a href="#extend" className="text-indigo-600 underline font-semibold">Request Extension</a>
                </div>
                <div className="space-y-2 pt-2">
                  <button className="w-full bg-[#22252a] text-white font-bold text-xs py-2.5 rounded-xl cursor-pointer hover:bg-black transition-colors">
                    Mark Order Complete
                  </button>
                  <button className="w-full bg-white border border-gray-300 text-gray-800 font-bold text-xs py-2.5 rounded-xl cursor-pointer hover:bg-gray-50 transition-colors">
                    Request Revision
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* ITEM 4: Payment Protection */}
        <div className="feature-grid-row">
          {/* Graphic Left (Gray Background Container) */}
          <div className="lg:order-1 flex justify-center">
            <div className="feature-card-wrapper bg-gray-200/70">
              <div className="feature-card-inner space-y-3">
                <div className="flex items-center justify-between text-xs border-b border-gray-100 pb-2">
                  <span className="font-extrabold text-gray-900">Your roster</span>
                  <span className="text-[10px] font-extrabold text-rose-500">25 on file</span>
                </div>
                <div className="flex items-center gap-2 py-1">
                  <img src={sofiaJensenImg} className="w-6 h-6 rounded-full object-cover" alt="R1" />
                  <img src={janarJuhkovImg} className="w-6 h-6 rounded-full object-cover" alt="R2" />
                  <img src={oliviaPezzenteImg} className="w-6 h-6 rounded-full object-cover" alt="R3" />
                  <span className="text-xs font-bold text-gray-400">+22</span>
                </div>
                <div className="bg-gray-50 p-2.5 rounded-xl text-[10px] text-gray-500 space-y-1 font-mono">
                  <div className="flex justify-between font-bold text-gray-700"><span>CREATOR</span><span>STATUS</span><span>ACTION</span></div>
                  <div className="flex justify-between"><span>Alex T.</span><span className="text-emerald-600">Approved</span><span className="text-gray-900 font-bold">Escrow Released</span></div>
                </div>
              </div>
            </div>
          </div>

          <div className="space-y-4 text-left flex flex-col justify-center lg:order-2">
            <h3 style={sectionHeadingStyle} className="tracking-tight mb-2">
              Payment Protection On Every Order
            </h3>
            <p className="text-gray-600 text-base sm:text-lg leading-relaxed font-normal">
              Funds are held in escrow after you place an order. They release to the creator only when you approve the deliverable. You never pay for content you have not approved.
            </p>
          </div>
        </div>

      </section>

      {/* ------------------------------------------------------------- */}
      {/* SECTION 6: TESTIMONIAL BLOCK (AVERY)                           */}
      {/* ------------------------------------------------------------- */}
      <section className="max-w-[1140px] mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="bg-gray-50 rounded-[32px] p-8 sm:p-12 border border-gray-200/60 shadow-xs">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">

            {/* Logo Left */}
            <div className="lg:col-span-4 flex justify-center">
              <div className="w-full max-w-[260px] h-[200px] bg-white rounded-3xl border border-gray-200 flex items-center justify-center shadow-md p-6">
                <span className="text-3xl font-black text-[#f43f5e] tracking-widest uppercase">
                  AVERY
                </span>
              </div>
            </div>

            {/* Testimonial Quote Right */}
            <div className="lg:col-span-8 flex flex-col items-start text-left">
              <p className="text-gray-800 text-lg sm:text-xl font-medium leading-relaxed mb-6">
                "The quality of creators we find on Mobb is significantly higher than what we get from native platform programs or other UGC channels. The vetting process makes a real difference."
              </p>

              {/* Checkmarks */}
              <div className="space-y-2.5 mb-6">
                <div className="flex items-center gap-2.5 text-xs sm:text-sm font-semibold text-gray-700">
                  <span className="w-4 h-4 rounded-full bg-emerald-600 text-white flex items-center justify-center shrink-0">
                    <Check className="w-2.5 h-2.5 stroke-[3]" />
                  </span>
                  Higher-quality creator content
                </div>

                <div className="flex items-center gap-2.5 text-xs sm:text-sm font-semibold text-gray-700">
                  <span className="w-4 h-4 rounded-full bg-emerald-600 text-white flex items-center justify-center shrink-0">
                    <Check className="w-2.5 h-2.5 stroke-[3]" />
                  </span>
                  Creators personally vetted before you see them
                </div>

                <div className="flex items-center gap-2.5 text-xs sm:text-sm font-semibold text-gray-700">
                  <span className="w-4 h-4 rounded-full bg-emerald-600 text-white flex items-center justify-center shrink-0">
                    <Check className="w-2.5 h-2.5 stroke-[3]" />
                  </span>
                  Structured search replaces unsolicited DM outreach
                </div>
              </div>

              <div className="text-xs text-gray-500 font-medium mb-6">
                Social Media Team
                <br />
                <span className="font-bold text-gray-900">Avery</span>
              </div>

              <a
                href="#case-study"
                className="inline-flex items-center gap-2 bg-[#22252a] hover:bg-black text-white px-6 py-3 rounded-xl font-bold text-xs transition-all shadow-xs cursor-pointer group"
              >
                View case study
                <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 transition-transform" />
              </a>
            </div>

          </div>
        </div>
      </section>

      {/* ------------------------------------------------------------- */}
      {/* SECTION 7: INTERACTIVE TOOLS BEHIND YOUR UGC PIPELINE          */}
      {/* ------------------------------------------------------------- */}
      <section className="max-w-[1240px] mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <h2 style={sectionHeadingStyle} className="text-center tracking-tight mb-3">
          The Tools Behind Your UGC Pipeline
        </h2>
        <p className="text-gray-500 text-center text-sm sm:text-base mb-10 max-w-xl mx-auto">
          Every step of your UGC program lives in one place. No switching tools, no chasing creators.
        </p>

        {/* Tab Selection Bar */}
        <div className="flex items-center justify-start sm:justify-center gap-2 overflow-x-auto pb-4 mb-10 no-scrollbar">
          {toolsTabs.map((t) => (
            <button
              key={t.id}
              onClick={() => setActiveTab(t.id)}
              className={`px-4 py-2 rounded-full text-xs font-bold transition-all whitespace-nowrap cursor-pointer ${activeTab === t.id
                  ? 'bg-gray-900 text-white shadow-md'
                  : 'bg-gray-100 hover:bg-gray-200 text-gray-700'
                }`}
            >
              {t.label}
            </button>
          ))}
        </div>

        {/* Active Tab Preview Card */}
        {toolsTabs.map((t) => t.id === activeTab && (
          <div key={t.id} className="bg-[#e0e7ff]/40 rounded-[32px] p-8 sm:p-12 border border-indigo-100 shadow-sm max-w-5xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">

              <div className="lg:col-span-6 space-y-4">
                <h3 className="text-2xl sm:text-3xl font-extrabold text-gray-900 tracking-tight">
                  {t.title}
                </h3>
                <p className="text-gray-600 text-sm sm:text-base leading-relaxed font-normal">
                  {t.description}
                </p>

                <div className="flex flex-wrap gap-2 pt-2">
                  {t.pills.map((pill, idx) => (
                    <span key={idx} className="bg-white text-rose-600 text-xs font-bold px-3 py-1 rounded-full border border-rose-100 shadow-xs flex items-center gap-1">
                      • {pill}
                    </span>
                  ))}
                </div>
              </div>

              <div className="lg:col-span-6 flex justify-center">
                <div className="w-full max-w-[380px] bg-white p-4 rounded-2xl shadow-xl border border-gray-200 space-y-3">
                  <div className="bg-gray-50 p-2.5 rounded-xl flex items-center gap-2 text-xs text-gray-400">
                    <Search className="w-3.5 h-3.5" />
                    <span>Beauty creators · Under $250 · New York</span>
                  </div>

                  <div className="grid grid-cols-3 gap-2">
                    <img src={paolaSantanaImg} className="w-full h-24 object-cover rounded-xl" alt="Paola" />
                    <img src={marimiqadzzeImg} className="w-full h-24 object-cover rounded-xl" alt="Mariam" />
                    <img src={stephenGImg} className="w-full h-24 object-cover rounded-xl" alt="Stephen" />
                  </div>
                </div>
              </div>

            </div>
          </div>
        ))}
      </section>

      {/* ------------------------------------------------------------- */}
      {/* SECTION 8: UGC THAT GROWS WITH BROADER PROGRAM                 */}
      {/* ------------------------------------------------------------- */}
      <section className="max-w-[1240px] mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <h2 style={sectionHeadingStyle} className="text-center tracking-tight mb-4 max-w-2xl mx-auto">
          UGC that grows with your broader creator program.
        </h2>
        <p className="text-gray-500 text-center text-sm sm:text-base mb-12 max-w-2xl mx-auto">
          Hire creators for UGC and keep them. Every relationship, payment, and content asset stays in your account, ready for the next campaign. Your program compounds. Your overhead does not.
        </p>

        {/* 4 Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
          <div className="bg-rose-50/60 p-5 rounded-2xl border border-rose-100">
            <div className="font-extrabold text-gray-900 text-sm">📄 UGC for ads</div>
            <div className="text-xs text-gray-500 mt-1">Content batches</div>
          </div>

          <div className="bg-indigo-50/60 p-5 rounded-2xl border border-indigo-100">
            <div className="font-extrabold text-gray-900 text-sm">👥 Influencer campaigns</div>
            <div className="text-xs text-gray-500 mt-1">Briefs & reach</div>
          </div>

          <div className="bg-emerald-50/60 p-5 rounded-2xl border border-emerald-100">
            <div className="font-extrabold text-gray-900 text-sm">📊 Affiliate partners</div>
            <div className="text-xs text-gray-500 mt-1">Performance</div>
          </div>

          <div className="bg-amber-50/60 p-5 rounded-2xl border border-amber-100">
            <div className="font-extrabold text-gray-900 text-sm">⭐ Your roster</div>
            <div className="text-xs text-gray-500 mt-1">Saved creators</div>
          </div>
        </div>

        {/* Banner + CTA */}
        <div className="bg-gray-100/80 p-4 rounded-2xl text-center text-xs text-gray-600 font-medium max-w-2xl mx-auto mb-8">
          — Less overhead managing separate tools. More time running campaigns.
        </div>

        <div className="flex justify-center">
          <a
            href="#start-free"
            className="inline-flex items-center gap-2 bg-[#22252a] hover:bg-black text-white px-8 py-3.5 rounded-xl font-bold text-sm transition-all duration-200 shadow-md cursor-pointer group"
          >
            Start free
            <ArrowRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
          </a>
        </div>
      </section>

      {/* ------------------------------------------------------------- */}
      {/* SECTION 9: QUESTIONS ABOUT SOURCING UGC FOR ADS               */}
      {/* ------------------------------------------------------------- */}
      <section className="max-w-[800px] mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <h2 style={sectionHeadingStyle} className="text-center tracking-tight mb-12">
          Questions about sourcing UGC for ads on Mobb
        </h2>

        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="border-b border-gray-200 pb-4 transition-all"
            >
              <button
                onClick={() => toggleFaq(index)}
                className="w-full flex items-center justify-between text-left py-2 font-bold text-gray-900 text-base sm:text-lg cursor-pointer hover:text-rose-600 transition-colors"
              >
                <span>{faq.q}</span>
                <span className="text-xl text-gray-400">
                  {openFaq === index ? '−' : '+'}
                </span>
              </button>
              {openFaq === index && (
                <div className="text-gray-600 text-sm leading-relaxed mt-2 pr-6">
                  {faq.a}
                </div>
              )}
            </div>
          ))}
        </div>

        <div className="text-center mt-12 text-xs text-gray-500 font-medium">
          Have another question? <a href="#contact" className="text-gray-900 font-bold underline">Contact sales →</a>
        </div>
      </section>

      {/* ------------------------------------------------------------- */}
      {/* SECTION 10: DARK CTA FOOTER CARD                              */}
      {/* ------------------------------------------------------------- */}
      <section className="max-w-[1140px] mx-auto px-4 sm:px-6 lg:px-0 my-16">
        <div className="bg-[#22252a] rounded-[32px] sm:rounded-[40px] p-8 sm:p-12 lg:p-16 text-center text-white shadow-2xl relative overflow-hidden">

          <h2 style={darkSectionHeadingStyle} className="max-w-2xl mx-auto mb-4 tracking-tight">
            Build a content pipeline that gets stronger with every campaign.
          </h2>

          <p className="text-gray-400 text-sm sm:text-base max-w-xl mx-auto mb-8 leading-relaxed font-normal">
            Source vetted creators, confirm usage rights, and deploy content to paid ads inside the same platform where you run your entire creator program.
          </p>

          <div className="flex justify-center">
            <a
              href="#start-free"
              className="inline-flex items-center justify-center bg-white hover:bg-gray-100 text-gray-900 font-bold px-8 py-3.5 rounded-xl transition-all duration-200 shadow-lg text-sm cursor-pointer"
            >
              Start free
            </a>
          </div>
        </div>
      </section>

    </div>
  );
};
