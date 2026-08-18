import React, { useState } from 'react';
import {
  Check,
  ArrowRight,
  Search,
  Instagram,
  Video,
  Twitch,
  Youtube,
  Megaphone,
  Gift,
  Repeat,
  ShoppingBag,
  TrendingUp,
  Briefcase,
  Layers,
  Sparkles,
  Users,
  BarChart2,
  Lock,
  Globe
} from 'lucide-react';
import { TrustedBrands } from './TrustedBrands';
import {
  niloofarTaghaviImg,
  janarJuhkovImg,
  alicjaWerniewiczImg,
  hermanStrydomImg,
  murielMangenaImg,
  oliviaPezzenteImg,
  stephenGImg,
} from '../avatars';

interface InfluencerMarketingPageProps {
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

export const InfluencerMarketingPage: React.FC<InfluencerMarketingPageProps> = ({ onNavigateSearch }) => {
  const [activeTab, setActiveTab] = useState<number>(1);
  const [openFaq, setOpenFaq] = useState<number | null>(null);
  const [searchQuery, setSearchQuery] = useState<string>('');

  const toggleFaq = (index: number) => {
    setOpenFaq(openFaq === index ? null : index);
  };

  const handleSearchSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (onNavigateSearch) {
      onNavigateSearch();
    }
  };

  const toolsTabs = [
    { id: 1, label: '01 Creator Discovery', title: 'Find the Right Creator before You Commit', description: 'Search 1.1m+ vetted Creators by platform, niche, audience, and budget. See verified engagement rates and demographics before you commit. Spend less time searching and more time running campaigns.', pills: ['Vetted creators', 'Detailed audience demographics', 'Free to search'] },
    { id: 2, label: '02 AI Campaign Briefs', title: 'AI-Powered Campaign Brief Generator', description: 'Generate clear guidelines in seconds. Include hooks, visual guidelines, file requirements, and brand guardrails without writing from scratch.', pills: ['Instant AI briefs', 'Platform specs', 'Custom deliverables'] },
    { id: 3, label: '03 Order Management', title: 'Track Submissions & Revisions in One Place', description: 'Review creator content submissions directly in your browser. Request edits or accept content with a single click. Centralize all campaign assets.', pills: ['In-browser review', 'Unlimited revisions', 'Asset library'] },
    { id: 4, label: '04 Global Payments', title: 'Escrow Protection & Automated Invoicing', description: 'Hold payments safely until content is approved. Automatically generate tax forms, multi-currency invoices, and receipts for your finance team.', pills: ['Escrow protection', 'Multi-currency', 'Automated receipts'] },
    { id: 5, label: '05 Reporting', title: 'Measure Performance & Campaign ROI', description: 'Track view counts, engagement, click-through rates, and sales conversions across all active influencer campaigns in real time.', pills: ['CTR & ROI metrics', 'Real-time analytics', 'Sales attribution'] },
    { id: 6, label: '06 Team Workspace', title: 'Collaborate with Brand & Marketing Teams', description: 'Invite team members, assign permissions, tag creators for specific campaigns, and export performance reports seamlessly.', pills: ['Multi-user seats', 'Campaign tagging', 'Report export'] },
    { id: 7, label: '07 Creator CRM', title: 'Build a Permanent Roster of Retainer Creators', description: 'Save top-performing influencers to your brand roster. Rehire winning creators with one click for seasonal launches or ongoing retainers.', pills: ['Saved rosters', '1-click rehire', 'Performance history'] }
  ];

  const faqs = [
    {
      q: 'Can I manage different types of creator programs from one account?',
      a: 'Yes! Mobb allows you to run sales campaigns, influencer retainers, product gifting, sponsored posts, and affiliate collaborations seamlessly from a single unified dashboard.'
    },
    {
      q: 'How do I manage creators I work with on retainer?',
      a: 'You can save winning creators to your internal roster, set up recurring monthly briefs, track deliverable completion dates, and automate payments with escrow protection.'
    },
    {
      q: 'How does gifting work on Mobb?',
      a: 'You can create a gifting brief, specify target product requirements, invite vetted creators, collect shipping addresses securely inside the platform, and track when creators post their unboxings.'
    },
    {
      q: 'How do I track performance across multiple creator partnerships?',
      a: 'Mobb provides built-in reporting tools that track engagement, impressions, clicks, orders, and ROI across all your active creator campaigns in real time.'
    },
    {
      q: 'Can I manage creators I already work with outside Mobb?',
      a: 'Yes! You can invite existing influencer contacts into Mobb to centralize contracts, brief management, asset collection, and payment workflows in one place.'
    },
    {
      q: 'What plans include campaign posting?',
      a: 'All accounts can post campaign briefs for free! You only pay when you approve content and release funds to creators.'
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
              One platform for every type of creator collaboration.
            </h1>

            <p className="text-gray-600 text-lg sm:text-xl leading-relaxed mb-8 max-w-xl font-normal">
              Sales campaigns, retainer partnerships, gifting, sponsored posts, brand deals. Every type of influencer collaboration your brand runs lives inside the same platform.
            </p>

            {/* Feature Badges */}
            <div className="flex flex-col sm:flex-row flex-wrap gap-2.5 mb-8">
              <div className="bg-gray-100/90 rounded-full px-3.5 py-1.5 text-xs font-medium text-gray-700 flex items-center gap-1.5">
                <span className="w-4 h-4 rounded-full bg-emerald-600 text-white flex items-center justify-center shrink-0">
                  <Check className="w-2.5 h-2.5 stroke-[3]" />
                </span>
                1.1m+ vetted creators across Instagram, TikTok, and YouTube
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
                Free to start, no subscription required to place your first order
              </div>
            </div>

            {/* Search Bar Input */}
            <form onSubmit={handleSearchSubmit} className="w-full max-w-md mb-4 relative">
              <div className="flex items-center bg-white border border-gray-200 rounded-full p-1.5 shadow-md hover:border-gray-300 transition-all">
                <Search className="w-5 h-5 text-gray-400 ml-3 shrink-0" />
                <input
                  type="text"
                  placeholder="Search 1.1m+ creators by niche, platform"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full px-3 py-2 text-xs sm:text-sm text-gray-900 bg-transparent focus:outline-none"
                />
                <button
                  type="submit"
                  className="bg-[#f43f5e] hover:bg-[#e11d48] text-white font-bold text-xs sm:text-sm px-5 py-2.5 rounded-full cursor-pointer transition-colors shrink-0 shadow-xs"
                >
                  Find Influencers
                </button>
              </div>
            </form>

            {/* Niche Pills */}
            <div className="flex flex-wrap gap-1.5 text-xs font-medium text-gray-500">
              {['Beauty', 'Fitness', 'Tech', 'Food', 'Travel', 'Fashion', 'Gaming'].map((niche) => (
                <button
                  key={niche}
                  onClick={onNavigateSearch}
                  className="bg-gray-100 hover:bg-gray-200 text-gray-700 px-3 py-1 rounded-full cursor-pointer transition-colors"
                >
                  {niche}
                </button>
              ))}
            </div>

          </div>

          {/* Right Hero Graphic - Dark Canvas with Floating Platform Badges */}
          <div className="lg:col-span-6 flex justify-center lg:justify-end">
            <div className="w-full max-w-[480px] h-[440px] sm:h-[480px] bg-[#22252a] rounded-[36px] p-6 sm:p-8 relative overflow-hidden flex items-center justify-center shadow-2xl">
              
              {/* Creator Card Center Left */}
              <div className="absolute top-16 left-12 w-[220px] h-[240px] rounded-2xl overflow-hidden border-2 border-white/10 shadow-2xl z-10">
                <img
                  src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&q=80&w=400"
                  alt="Creator Main"
                  className="w-full h-full object-cover grayscale"
                />
              </div>

              {/* Creator Card Bottom Right */}
              <div className="absolute bottom-12 right-12 w-[200px] h-[220px] rounded-2xl overflow-hidden border-2 border-rose-500/40 shadow-2xl z-10">
                <img
                  src="https://images.unsplash.com/photo-1517841905240-472988babdf9?auto=format&fit=crop&q=80&w=400"
                  alt="Creator Overlay"
                  className="w-full h-full object-cover"
                />
              </div>

              {/* Floating Platform Pills */}
              <div className="absolute top-8 right-16 bg-[#f43f5e] text-white text-[11px] font-extrabold px-3 py-1.5 rounded-xl shadow-xl flex items-center gap-1.5 z-20">
                <Instagram className="w-3.5 h-3.5" /> Instagram
              </div>

              <div className="absolute top-28 left-6 bg-[#f43f5e] text-white text-[11px] font-extrabold px-3 py-1.5 rounded-xl shadow-xl flex items-center gap-1.5 z-20">
                <Video className="w-3.5 h-3.5" /> TikTok
              </div>

              <div className="absolute bottom-40 right-4 bg-[#f43f5e] text-white text-[11px] font-extrabold px-3 py-1.5 rounded-xl shadow-xl flex items-center gap-1.5 z-20">
                <Twitch className="w-3.5 h-3.5" /> Twitch
              </div>

              <div className="absolute bottom-32 left-4 bg-[#f43f5e] text-white text-[11px] font-extrabold px-3 py-1.5 rounded-xl shadow-xl flex items-center gap-1.5 z-20">
                <Users className="w-3.5 h-3.5" /> UGC
              </div>

              <div className="absolute bottom-16 right-16 bg-[#f43f5e] text-white text-[11px] font-extrabold px-3 py-1.5 rounded-xl shadow-xl flex items-center gap-1.5 z-20">
                <Youtube className="w-3.5 h-3.5" /> Youtube
              </div>

              <div className="absolute bottom-6 left-28 bg-[#f43f5e] text-white text-[11px] font-extrabold px-3 py-1 rounded-lg shadow-xl flex items-center gap-1.5 z-20">
                <span className="font-mono text-xs font-black">X</span> X
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
      {/* SECTION 3: STATS CARDS ($5.78, 86%, 11x)                      */}
      {/* ------------------------------------------------------------- */}
      <section className="max-w-[1240px] mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          
          <div className="bg-gray-50/80 p-8 rounded-3xl border border-gray-200/60 flex flex-col justify-between">
            <div className="text-5xl font-black text-gray-900 mb-3 tracking-tight">$5.78</div>
            <div className="text-gray-600 text-sm leading-relaxed font-normal">
              Returned for every $1 spent on influencer marketing.
            </div>
          </div>

          <div className="bg-gray-50/80 p-8 rounded-3xl border border-gray-200/60 flex flex-col justify-between">
            <div className="text-5xl font-black text-gray-900 mb-3 tracking-tight">86%</div>
            <div className="text-gray-600 text-sm leading-relaxed font-normal">
              Of consumers make at least one influencer-inspired purchase a year.
            </div>
          </div>

          <div className="bg-gray-50/80 p-8 rounded-3xl border border-gray-200/60 flex flex-col justify-between">
            <div className="text-5xl font-black text-gray-900 mb-3 tracking-tight">11x</div>
            <div className="text-gray-600 text-sm leading-relaxed font-normal">
              Higher ROI than banner advertising.
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
            From first brief to final payment, every type of creator program runs on Mobb.
          </h2>
          <p className="text-gray-300 text-sm sm:text-base leading-relaxed max-w-2xl mx-auto font-normal">
            No two influencer programs are the same. But the problem often is: each collaboration type ends up managed differently, tracked separately, and paid through a different process. Your creator relationships, your spend, and your results never come together in one place.
          </p>
          <div className="mt-6 text-sm font-bold text-rose-300">
            Mobb changes that. Every type of collaboration, in one platform.
          </div>
        </div>
      </section>

      {/* ------------------------------------------------------------- */}
      {/* SECTION 5: 5 COLLABORATION TYPES HANDLED END TO END           */}
      {/* ------------------------------------------------------------- */}
      <section className="max-w-[1240px] mx-auto px-4 sm:px-6 lg:px-8 space-y-24 py-16">
        
        <h2 style={sectionHeadingStyle} className="text-center tracking-tight max-w-3xl mx-auto mb-16">
          Every Type Of Influencer Collaboration Your Brand Runs, Handled End To End.
        </h2>

        {/* ITEM 1: Sales Campaigns */}
        <div className="feature-grid-row">
          <div className="space-y-4 text-left flex flex-col justify-center">
            <div className="w-10 h-10 rounded-2xl bg-rose-100 flex items-center justify-center text-rose-600 mb-2">
              <Megaphone className="w-5 h-5" />
            </div>
            <h3 style={sectionHeadingStyle} className="tracking-tight mb-2">
              Sales Campaigns
            </h3>
            <p className="text-gray-600 text-base sm:text-lg leading-relaxed font-normal">
              Brief creators, agree on deliverables, and track campaign performance against your sales outcomes. Every brief, agreed rate, and content approval lives on the platform. When a campaign works, the creator and the results stay in your account for next time.
            </p>
          </div>

          {/* Graphic Right (Pink Background Container) */}
          <div className="flex justify-center">
            <div className="feature-card-wrapper bg-[#fecdd3]/40">
              <div className="feature-card-inner space-y-4">
                <div className="flex items-center justify-between border-b border-gray-100 pb-3">
                  <span className="text-xs font-bold text-gray-900">Campaign Overview</span>
                  <span className="text-[10px] font-extrabold bg-gray-100 text-gray-600 px-2 py-0.5 rounded-md">All Time</span>
                </div>

                <div className="grid grid-cols-3 gap-2 text-center">
                  <div className="p-2.5 bg-gray-50 rounded-xl">
                    <div className="text-[10px] text-gray-400 font-medium">Blended CPM</div>
                    <div className="text-sm font-extrabold text-gray-900 mt-0.5">$ 1.43</div>
                  </div>
                  <div className="p-2.5 bg-gray-50 rounded-xl">
                    <div className="text-[10px] text-gray-400 font-medium">Total Spend</div>
                    <div className="text-sm font-extrabold text-gray-900 mt-0.5">$ 4,801</div>
                  </div>
                  <div className="p-2.5 bg-gray-50 rounded-xl">
                    <div className="text-[10px] text-gray-400 font-medium">Total Views</div>
                    <div className="text-sm font-extrabold text-gray-900 mt-0.5">690 K</div>
                  </div>
                </div>

                {/* Simulated Sparkline Curve */}
                <div className="h-16 bg-rose-50/50 rounded-xl p-2 flex items-end justify-between gap-1">
                  {[30, 45, 25, 60, 80, 50, 90, 70, 85].map((h, i) => (
                    <div key={i} style={{ height: `${h}%` }} className="w-full bg-rose-400 rounded-t-sm" />
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* ITEM 2: Creators On Retainer */}
        <div className="feature-grid-row">
          {/* Graphic Left (Indigo Background Container) */}
          <div className="lg:order-1 flex justify-center">
            <div className="feature-card-wrapper bg-[#e0e7ff]/60">
              <div className="feature-card-inner space-y-3">
                <div className="flex items-center justify-between text-xs border-b border-gray-100 pb-2 font-bold text-gray-900">
                  <span>MY CREATORS</span>
                  <span className="text-[10px] text-indigo-600 font-extrabold">Active Retainers</span>
                </div>
                <div className="space-y-2 text-xs">
                  <div className="flex items-center justify-between p-2 bg-gray-50 rounded-xl">
                    <div className="flex items-center gap-2">
                      <img src={niloofarTaghaviImg} className="w-7 h-7 rounded-full object-cover" alt="Jade" />
                      <div>
                        <div className="font-bold text-gray-900 text-[11px]">Jade Kim</div>
                        <div className="text-[9px] text-gray-400">Monthly Retainer</div>
                      </div>
                    </div>
                    <span className="bg-emerald-100 text-emerald-800 font-bold text-[9px] px-2 py-0.5 rounded-full">Active</span>
                  </div>

                  <div className="flex items-center justify-between p-2 bg-gray-50 rounded-xl">
                    <div className="flex items-center gap-2">
                      <img src={janarJuhkovImg} className="w-7 h-7 rounded-full object-cover" alt="Alex" />
                      <div>
                        <div className="font-bold text-gray-900 text-[11px]">Alex Rivers</div>
                        <div className="text-[9px] text-gray-400">Weekly Reels</div>
                      </div>
                    </div>
                    <span className="bg-emerald-100 text-emerald-800 font-bold text-[9px] px-2 py-0.5 rounded-full">Active</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="space-y-4 text-left flex flex-col justify-center lg:order-2">
            <div className="w-10 h-10 rounded-2xl bg-indigo-100 flex items-center justify-center text-indigo-600 mb-2">
              <Repeat className="w-5 h-5" />
            </div>
            <h3 style={sectionHeadingStyle} className="tracking-tight mb-2">
              Creators On Retainer
            </h3>
            <p className="text-gray-600 text-base sm:text-lg leading-relaxed font-normal">
              Build a roster of creators you work with consistently. Rehire directly from your account history, brief them quickly, and track their performance over time. Your roster builds itself over time.
            </p>
          </div>
        </div>

        {/* ITEM 3: Gifting And Product Seeding */}
        <div className="feature-grid-row">
          <div className="space-y-4 text-left flex flex-col justify-center">
            <div className="w-10 h-10 rounded-2xl bg-amber-100 flex items-center justify-center text-amber-600 mb-2">
              <Gift className="w-5 h-5" />
            </div>
            <h3 style={sectionHeadingStyle} className="tracking-tight mb-2">
              Gifting And Product Seeding
            </h3>
            <p className="text-gray-600 text-base sm:text-lg leading-relaxed font-normal">
              Coordinate gifting campaigns through Mobb. Brief the creator on deliverables and posting requirements, share shipping details inside the platform, and track the content once it goes live. Every gifting relationship is on record alongside your paid collaborations.
            </p>
          </div>

          {/* Graphic Right (Yellow Background Container) */}
          <div className="flex justify-center">
            <div className="feature-card-wrapper bg-[#fef08a]/60">
              <div className="feature-card-inner space-y-3">
                <div className="inline-block bg-rose-100 text-rose-700 text-[10px] font-extrabold px-2.5 py-1 rounded-full w-fit">
                  Step Into Comfort: Create Your Way!
                </div>
                <div className="text-xs font-bold text-gray-900">About Your Product / Service</div>
                <p className="text-[10px] text-gray-500 leading-normal">
                  In this campaign, creators will share their personal experience styling and wearing Heyday Footwear, highlighting how the brand offers comfort, versatility, and self-expression in everyday life.
                </p>
                <div className="flex gap-2 pt-1">
                  <button className="flex-1 bg-gray-900 text-white font-bold text-[10px] py-2 rounded-lg">Share Campaign</button>
                  <button className="flex-1 bg-gray-100 text-gray-800 font-bold text-[10px] py-2 rounded-lg">Invite Creators</button>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* ITEM 4: Sponsored Posts And Paid Campaigns */}
        <div className="feature-grid-row">
          {/* Graphic Left (Gray Background Container) */}
          <div className="lg:order-1 flex justify-center">
            <div className="feature-card-wrapper bg-gray-200/70">
              <div className="feature-card-inner space-y-2 text-[10px]">
                <div className="font-bold text-gray-900 border-b pb-1">Best performers across all your creators</div>
                <div className="grid grid-cols-4 gap-1 text-gray-400 font-semibold py-1">
                  <span>CREATOR</span><span>PLATFORM</span><span>ENGAGEMENT</span><span>ROAS</span>
                </div>
                <div className="grid grid-cols-4 gap-1 font-bold text-gray-800 border-t pt-1">
                  <span>Marcus C.</span><span>TikTok</span><span>8.4%</span><span>4.2x</span>
                </div>
                <div className="grid grid-cols-4 gap-1 font-bold text-gray-800">
                  <span>Sonia K.</span><span>Instagram</span><span>6.1%</span><span>3.8x</span>
                </div>
              </div>
            </div>
          </div>

          <div className="space-y-4 text-left flex flex-col justify-center lg:order-2">
            <div className="w-10 h-10 rounded-2xl bg-rose-100 flex items-center justify-center text-rose-600 mb-2">
              <TrendingUp className="w-5 h-5" />
            </div>
            <h3 style={sectionHeadingStyle} className="tracking-tight mb-2">
              Sponsored Posts And Paid Campaigns
            </h3>
            <p className="text-gray-600 text-base sm:text-lg leading-relaxed font-normal">
              Brief creators for specific sponsored posts, confirm deliverables and KPIs inside the platform, and track impressions, engagement, and views per post in real time. Know exactly which posts perform before you invest further.
            </p>
          </div>
        </div>

        {/* ITEM 5: Brand Partnerships And Creator Retainers */}
        <div className="feature-grid-row">
          <div className="space-y-4 text-left flex flex-col justify-center">
            <div className="w-10 h-10 rounded-2xl bg-emerald-100 flex items-center justify-center text-emerald-600 mb-2">
              <Briefcase className="w-5 h-5" />
            </div>
            <h3 style={sectionHeadingStyle} className="tracking-tight mb-2">
              Brand Partnerships And Creator Retainers
            </h3>
            <p className="text-gray-600 text-base sm:text-lg leading-relaxed font-normal">
              Manage longer-term brand collaborations inside the same system where you run campaigns. Negotiate terms, confirm deliverables across multiple posts, track performance over the duration of the partnership, and process payments automatically on approval.
            </p>
          </div>

          {/* Graphic Right (Pink Background Container) */}
          <div className="flex justify-center">
            <div className="feature-card-wrapper bg-[#fecdd3]/40">
              <div className="feature-card-inner space-y-3">
                <div className="bg-gray-50 p-3 rounded-xl border border-gray-100 space-y-2 text-xs">
                  <div className="font-bold text-gray-900">Partnership Brief Agreement</div>
                  <p className="text-gray-500 text-[10px]">6-month retainer: 2 TikToks + 1 Reel per month with full usage rights.</p>
                  <div className="bg-emerald-50 text-emerald-800 text-[10px] font-bold p-1.5 rounded-lg text-center">
                    ✓ Contract Terms Agreed & Escrow Funded
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

      </section>

      {/* ------------------------------------------------------------- */}
      {/* SECTION 6: TESTIMONIAL BLOCK (WEALTHSIMPLE)                  */}
      {/* ------------------------------------------------------------- */}
      <section className="max-w-[1140px] mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="bg-gray-50 rounded-[32px] p-8 sm:p-12 border border-gray-200/60 shadow-xs">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            
            {/* Logo Left */}
            <div className="lg:col-span-4 flex justify-center">
              <div className="w-full max-w-[260px] h-[200px] bg-white rounded-3xl border border-gray-200 flex items-center justify-center shadow-md p-6">
                <span className="text-2xl font-black text-gray-900 tracking-tight">
                  Wealthsimple
                </span>
              </div>
            </div>

            {/* Testimonial Quote Right */}
            <div className="lg:col-span-8 flex flex-col items-start text-left">
              <p className="text-gray-800 text-lg sm:text-xl font-medium leading-relaxed mb-6">
                "Mobb's advanced filters allowed us to shortlist 46 highly relevant influencers quickly. We worked with 29 of them across Instagram and TikTok, generating 29 engaging videos and over 3 million impressions."
              </p>

              {/* Checkmarks Grid */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 mb-6 w-full">
                <div className="flex items-center gap-2.5 text-xs sm:text-sm font-semibold text-gray-700">
                  <span className="w-4 h-4 rounded-full bg-emerald-600 text-white flex items-center justify-center shrink-0">
                    <Check className="w-2.5 h-2.5 stroke-[3]" />
                  </span>
                  29 influencers hired
                </div>

                <div className="flex items-center gap-2.5 text-xs sm:text-sm font-semibold text-gray-700">
                  <span className="w-4 h-4 rounded-full bg-emerald-600 text-white flex items-center justify-center shrink-0">
                    <Check className="w-2.5 h-2.5 stroke-[3]" />
                  </span>
                  29 pieces of content produced
                </div>

                <div className="flex items-center gap-2.5 text-xs sm:text-sm font-semibold text-gray-700">
                  <span className="w-4 h-4 rounded-full bg-emerald-600 text-white flex items-center justify-center shrink-0">
                    <Check className="w-2.5 h-2.5 stroke-[3]" />
                  </span>
                  3 million impressions
                </div>

                <div className="flex items-center gap-2.5 text-xs sm:text-sm font-semibold text-gray-700">
                  <span className="w-4 h-4 rounded-full bg-emerald-600 text-white flex items-center justify-center shrink-0">
                    <Check className="w-2.5 h-2.5 stroke-[3]" />
                  </span>
                  Content whitelisted for paid distribution
                </div>
              </div>

              <div className="text-xs text-gray-500 font-medium mb-6">
                Marketing Team
                <br />
                <span className="font-bold text-gray-900">Wealthsimple</span>
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
      {/* SECTION 7: INTERACTIVE TOOLS STACK                            */}
      {/* ------------------------------------------------------------- */}
      <section className="max-w-[1240px] mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <h2 style={sectionHeadingStyle} className="text-center tracking-tight mb-3">
          The Full Influencer Marketing Tool Stack
        </h2>
        <p className="text-gray-500 text-center text-sm sm:text-base mb-10 max-w-xl mx-auto">
          One account, one dashboard. Switch between every collaboration type without switching tools.
        </p>

        {/* Tab Selection Bar */}
        <div className="flex items-center justify-start sm:justify-center gap-2 overflow-x-auto pb-4 mb-10 no-scrollbar">
          {toolsTabs.map((t) => (
            <button
              key={t.id}
              onClick={() => setActiveTab(t.id)}
              className={`px-4 py-2 rounded-full text-xs font-bold transition-all whitespace-nowrap cursor-pointer ${
                activeTab === t.id
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
                    <img src={alicjaWerniewiczImg} className="w-full h-24 object-cover rounded-xl" alt="C1" />
                    <img src={hermanStrydomImg} className="w-full h-24 object-cover rounded-xl" alt="C2" />
                    <img src={murielMangenaImg} className="w-full h-24 object-cover rounded-xl" alt="C3" />
                  </div>
                </div>
              </div>

            </div>
          </div>
        ))}
      </section>

      {/* ------------------------------------------------------------- */}
      {/* SECTION 8: PREFER CREATORS TO COME TO YOU?                    */}
      {/* ------------------------------------------------------------- */}
      <section className="max-w-[1240px] mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="bg-[#22252a] text-white rounded-[36px] p-8 sm:p-12 shadow-2xl">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            
            <div className="lg:col-span-6 space-y-4 text-left">
              <h2 style={darkSectionHeadingStyle} className="tracking-tight">
                Prefer creators to come to you? Post a brief and let them apply.
              </h2>
              <p className="text-gray-300 text-sm sm:text-base leading-relaxed font-normal">
                Describe the collaboration, set your budget, and vetted creators apply to work with you. Shortlist, hire, and manage every applicant inside the same account where you run your campaigns.
              </p>
              <button
                onClick={onNavigateSearch}
                className="inline-flex items-center gap-2 bg-[#f43f5e] hover:bg-[#e11d48] text-white px-6 py-3 rounded-xl font-bold text-xs sm:text-sm transition-all shadow-lg cursor-pointer"
              >
                Post Campaign →
              </button>
            </div>

            <div className="lg:col-span-6 flex justify-center">
              <div className="w-full max-w-sm bg-white text-gray-900 rounded-2xl p-5 shadow-xl space-y-3">
                <div className="flex items-center justify-between border-b pb-2">
                  <div>
                    <div className="font-extrabold text-xs">Spring Launch - UGC + Reels</div>
                    <div className="text-[10px] text-gray-400">Budget $6,000 · Open</div>
                  </div>
                  <span className="bg-emerald-100 text-emerald-800 text-[9px] font-bold px-2 py-0.5 rounded-full">Live</span>
                </div>

                <div className="flex gap-2 text-[10px] font-bold text-gray-500">
                  <span className="text-rose-600 underline">120 applied</span>
                  <span>14 shortlisted</span>
                </div>

                <div className="space-y-2 text-xs pt-1">
                  <div className="flex items-center justify-between p-2 bg-gray-50 rounded-xl">
                    <div className="flex items-center gap-2">
                      <img src={oliviaPezzenteImg} className="w-6 h-6 rounded-full object-cover" alt="Hana" />
                      <div>
                        <div className="font-bold text-[11px]">Hana Kim</div>
                        <div className="text-[9px] text-gray-400">TikTok · Food · 175K</div>
                      </div>
                    </div>
                    <span className="bg-indigo-100 text-indigo-700 font-bold text-[9px] px-2 py-0.5 rounded-full">Shortlisted</span>
                  </div>

                  <div className="flex items-center justify-between p-2 bg-gray-50 rounded-xl">
                    <div className="flex items-center gap-2">
                      <img src={stephenGImg} className="w-6 h-6 rounded-full object-cover" alt="Tyler" />
                      <div>
                        <div className="font-bold text-[11px]">Tyler Brooks</div>
                        <div className="text-[9px] text-gray-400">TikTok · Streetwear</div>
                      </div>
                    </div>
                    <span className="bg-gray-200 text-gray-700 font-bold text-[9px] px-2 py-0.5 rounded-full">New</span>
                  </div>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* ------------------------------------------------------------- */}
      {/* SECTION 9: ONE PLATFORM STATEMENT                            */}
      {/* ------------------------------------------------------------- */}
      <section className="max-w-[1240px] mx-auto px-4 sm:px-6 lg:px-8 py-12 text-center">
        <h2 style={sectionHeadingStyle} className="tracking-tight mb-4 max-w-2xl mx-auto">
          One platform. Every type of creator collaboration.
        </h2>
        <p className="text-gray-500 text-sm sm:text-base mb-8 max-w-3xl mx-auto font-normal">
          The creators you hire for a sales campaign become your retainer roster. The retainer creators you track become your benchmarks for sponsored posts. Every brief, payment, and performance record builds on the last. Your entire influencer program runs from one account, not five separate tools.
        </p>

        <div className="bg-gray-100/80 p-4 rounded-2xl text-center text-xs text-gray-600 font-medium max-w-2xl mx-auto mb-8">
          Less time managing systems. More time building the partnerships that grow your brand.
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
      {/* SECTION 10: FAQ ACCORDION                                     */}
      {/* ------------------------------------------------------------- */}
      <section className="max-w-[800px] mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <h2 style={sectionHeadingStyle} className="text-center tracking-tight mb-12">
          Questions about managing influencer collaborations on Mobb
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
      {/* SECTION 11: DARK CTA FOOTER CARD                              */}
      {/* ------------------------------------------------------------- */}
      <section className="max-w-[1140px] mx-auto px-4 sm:px-6 lg:px-0 my-16">
        <div className="bg-[#22252a] rounded-[32px] sm:rounded-[40px] p-8 sm:p-12 lg:p-16 text-center text-white shadow-2xl relative overflow-hidden">
          
          <h2 style={darkSectionHeadingStyle} className="max-w-2xl mx-auto mb-4 tracking-tight">
            Every creator collaboration your brand runs, in one place.
          </h2>

          <p className="text-gray-400 text-sm sm:text-base max-w-xl mx-auto mb-8 leading-relaxed font-normal">
            Sales campaigns, retainer partnerships, gifting, sponsored posts, brand deals. One platform. One creator roster. One source of truth.
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
