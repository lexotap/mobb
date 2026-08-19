import React, { useState } from 'react';
import {
  Check,
  ArrowRight,
  Search,
  Percent,
  Tag,
  Repeat,
  Layers,
  Award,
  ShieldCheck,
  FileText,
  DollarSign,
  TrendingUp,
  ChevronDown
} from 'lucide-react';
import { TrustedBrands } from './TrustedBrands';
import { WhatBrandsSay } from './WhatBrandsSay';
import {
  oliviaPezzenteImg,
  niloofarTaghaviImg,
  renateReinsveImg,
  stephenGImg,
  marimiqadzzeImg,
  ivanaMarketinImg,
  hermanStrydomImg,
  alicjaWerniewiczImg,
  lettersOfTravelImg,
  paolaSantanaImg,
} from '../avatars';
import { marriottCaseStudyImg } from '../casestudies';

interface AffiliateMarketingPageProps {
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

export const AffiliateMarketingPage: React.FC<AffiliateMarketingPageProps> = ({ onNavigateSearch }) => {
  const [activeTab, setActiveTab] = useState<number>(1);
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  const toggleFaq = (index: number) => {
    setOpenFaq(openFaq === index ? null : index);
  };

  const toolsTabs = [
    { id: 1, label: '01 Creator Discovery', title: 'Find the Right Creator before You Commit', description: 'Search 500,000+ vetted Creators by platform, niche, audience, and budget. See verified engagement rates and demographics before you commit. Spend less time searching and more time running campaigns.', pills: ['Vetted creators', 'Detailed audience demographics', 'Free to search'] },
    { id: 2, label: '02 AI Campaign Briefs', title: 'AI-Powered Campaign Brief Generator', description: 'Generate clear guidelines in seconds. Include hooks, visual guidelines, file requirements, and brand guardrails without writing from scratch.', pills: ['Instant AI briefs', 'Platform specs', 'Custom deliverables'] },
    { id: 3, label: '03 Order Management', title: 'Track Submissions & Revisions in One Place', description: 'Review creator content submissions directly in your browser. Request edits or accept content with a single click. Centralize all campaign assets.', pills: ['In-browser review', 'Unlimited revisions', 'Asset library'] },
    { id: 4, label: '04 Global Payments', title: 'Escrow Protection & Automated Invoicing', description: 'Hold payments safely until content is approved. Automatically generate tax forms, multi-currency invoices, and receipts for your finance team.', pills: ['Escrow protection', 'Multi-currency', 'Automated receipts'] },
    { id: 5, label: '05 Reporting', title: 'Measure Performance & Campaign ROI', description: 'Track view counts, engagement, click-through rates, and sales conversions across all active affiliate creator campaigns in real time.', pills: ['CTR & ROI metrics', 'Real-time analytics', 'Sales attribution'] },
    { id: 6, label: '06 Team Workspace', title: 'Collaborate with Brand & Marketing Teams', description: 'Invite team members, assign permissions, tag creators for specific campaigns, and export performance reports seamlessly.', pills: ['Multi-user seats', 'Campaign tagging', 'Report export'] },
    { id: 7, label: '07 Creator CRM', title: 'Build a Permanent Roster of Affiliate Creators', description: 'Save top-performing influencers to your brand roster. Rehire winning creators with one click for seasonal launches or ongoing retainers.', pills: ['Saved rosters', '1-click rehire', 'Performance history'] }
  ];

  const faqs = [
    {
      q: 'Is Mobb only for paid sponsorships or can I run pure commission deals with no flat fee?',
      a: 'You can run pure commission deals, flat-fee sponsorships, or hybrid structures combining a base flat fee plus performance commission.'
    },
    {
      q: 'How do I make sure a creator actually posts after I agree on terms?',
      a: 'All terms, deliverables, and timelines are locked in contract before the campaign starts. Funds are safely escrowed, protecting your budget until agreed posts are verified.'
    },
    {
      q: 'Can I scale an affiliate program across multiple creators at the same time?',
      a: 'Yes! You can manage tens or hundreds of creators simultaneously using centralized briefs, bulk messaging, automated contract terms, and unified reporting.'
    },
    {
      q: 'What if a creator\'s content does not meet my brief?',
      a: 'You have full review rights in your order panel. You can request revisions directly in-browser before approving content or releasing payments.'
    },
    {
      q: 'Does Mobb track sales or conversions from creator posts?',
      a: 'Yes! Mobb supports promo code attribution and tracking links to report total views, clicks, and sales generated per affiliate partner.'
    },
    {
      q: 'Can I invite creators I already work with into my affiliate program on Mobb?',
      a: 'Absolutely! You can onboard existing partners to manage contracts, track deliverables, and automate escrow payments in one dashboard.'
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
              Run creator affiliate programs like a performance channel, all on Mobb.
            </h1>

            <p className="text-gray-600 text-lg sm:text-xl leading-relaxed mb-8 max-w-xl font-normal">
              Commission-based deals, discount code campaigns, product affiliate programs, hybrid partnerships. Find the right creators, agree on terms, and manage every affiliate collaboration inside Mobb.
            </p>

            {/* Feature Badges */}
            <div className="flex flex-col sm:flex-row flex-wrap gap-2.5 mb-8">
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
                Commission terms negotiated and confirmed on the platform
              </div>

              <div className="bg-gray-100/90 rounded-full px-3.5 py-1.5 text-xs font-medium text-gray-700 flex items-center gap-1.5">
                <span className="w-4 h-4 rounded-full bg-emerald-600 text-white flex items-center justify-center shrink-0">
                  <Check className="w-2.5 h-2.5 stroke-[3]" />
                </span>
                Free to start, no subscription required to place your first order
              </div>
            </div>

            {/* CTA Button */}
            <button
              onClick={onNavigateSearch}
              className="inline-flex items-center gap-2 bg-[#22252a] hover:bg-black text-white px-8 py-3.5 rounded-xl font-bold text-sm sm:text-base transition-all duration-200 shadow-md cursor-pointer group"
            >
              Start free
              <ArrowRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
            </button>

          </div>

          {/* Right Hero Graphic - Dark Canvas with Creator Agreement Mockup */}
          <div className="lg:col-span-6 flex justify-center lg:justify-end">
            <div className="w-full max-w-[480px] min-h-[460px] bg-[#22252a] rounded-[36px] p-6 sm:p-8 relative overflow-hidden flex items-center justify-center shadow-2xl">
              
              {/* Creator Terms Box */}
              <div className="w-full bg-white rounded-2xl p-5 shadow-2xl border border-gray-100 space-y-4 relative z-10 text-xs">
                
                {/* Creator Header */}
                <div className="flex items-center justify-between bg-gray-50 p-3 rounded-xl">
                  <div className="flex items-center gap-3">
                    <img
                      src={oliviaPezzenteImg}
                      alt="Amara"
                      className="w-10 h-10 rounded-full object-cover"
                    />
                    <div>
                      <div className="font-extrabold text-gray-900 text-sm">Amara Lewis</div>
                      <div className="text-[11px] text-gray-400">@amaralewis · Beauty & Skincare</div>
                    </div>
                  </div>
                  <span className="w-2.5 h-2.5 rounded-full bg-purple-500"></span>
                </div>

                {/* Key Term Metrics */}
                <div className="grid grid-cols-3 gap-2 text-center">
                  <div className="bg-gray-50 p-2.5 rounded-xl">
                    <div className="text-[10px] text-gray-400 font-medium">Commission</div>
                    <div className="text-base font-extrabold text-gray-900 mt-0.5">15%</div>
                  </div>
                  <div className="bg-gray-50 p-2.5 rounded-xl">
                    <div className="text-[10px] text-gray-400 font-medium">Deliverables</div>
                    <div className="text-base font-extrabold text-gray-900 mt-0.5">3 posts</div>
                  </div>
                  <div className="bg-gray-50 p-2.5 rounded-xl">
                    <div className="text-[10px] text-gray-400 font-medium">Term</div>
                    <div className="text-base font-extrabold text-gray-900 mt-0.5">90 days</div>
                  </div>
                </div>

                {/* Agreement Rows */}
                <div className="space-y-2">
                  <div className="flex items-center justify-between p-2.5 bg-gray-50 rounded-xl border border-gray-100">
                    <div className="flex items-center gap-2">
                      <div className="w-6 h-6 rounded-lg bg-rose-50 text-rose-500 flex items-center justify-center">
                        <FileText className="w-3.5 h-3.5" />
                      </div>
                      <div>
                        <div className="font-bold text-gray-900 text-[11px]">Agreement on record</div>
                        <div className="text-[9px] text-gray-400">Confirmed before first post</div>
                      </div>
                    </div>
                    <span className="bg-emerald-100 text-emerald-800 text-[9px] font-bold px-2.5 py-0.5 rounded-full">Agreed</span>
                  </div>

                  <div className="flex items-center justify-between p-2.5 bg-gray-50 rounded-xl border border-gray-100">
                    <div className="flex items-center gap-2">
                      <div className="w-6 h-6 rounded-lg bg-rose-50 text-rose-500 flex items-center justify-center">
                        <ShieldCheck className="w-3.5 h-3.5" />
                      </div>
                      <div>
                        <div className="font-bold text-gray-900 text-[11px]">Content review</div>
                        <div className="text-[9px] text-gray-400">Approve before anything goes live</div>
                      </div>
                    </div>
                    <span className="bg-gray-200 text-gray-700 text-[9px] font-bold px-2.5 py-0.5 rounded-full">2 pending</span>
                  </div>
                </div>

              </div>

              {/* Top Right Floating Badge */}
              <div className="absolute top-6 right-6 bg-[#f43f5e] text-white text-[10px] font-extrabold px-3.5 py-2 rounded-2xl shadow-2xl flex items-center gap-2 z-20">
                <ShieldCheck className="w-4 h-4 shrink-0" />
                <div>
                  <div>Usage rights confirmed</div>
                  <div className="text-[8px] font-normal opacity-90">Locked before order begins</div>
                </div>
              </div>

              {/* Bottom Floating Badge */}
              <div className="absolute bottom-6 left-12 bg-[#f43f5e] text-white text-[11px] font-extrabold px-4 py-2.5 rounded-2xl shadow-2xl flex items-center gap-2 z-20">
                <Percent className="w-4 h-4" />
                <span>Commission-based deals</span>
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
      {/* SECTION 3: STATS CARDS (12:1, 38%, $15.7B)                   */}
      {/* ------------------------------------------------------------- */}
      <section className="max-w-[1240px] mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          
          <div className="bg-gray-50/80 p-8 rounded-3xl border border-gray-200/60 flex flex-col justify-between">
            <div className="text-5xl font-black text-gray-900 mb-3 tracking-tight">12:1</div>
            <div className="text-gray-600 text-sm leading-relaxed font-normal">
              Average ROI on affiliate marketing.
            </div>
          </div>

          <div className="bg-gray-50/80 p-8 rounded-3xl border border-gray-200/60 flex flex-col justify-between">
            <div className="text-5xl font-black text-gray-900 mb-3 tracking-tight">38%</div>
            <div className="text-gray-600 text-sm leading-relaxed font-normal">
              Of marketers rank affiliate among their top customer-acquisition channels.
            </div>
          </div>

          <div className="bg-gray-50/80 p-8 rounded-3xl border border-gray-200/60 flex flex-col justify-between">
            <div className="text-5xl font-black text-gray-900 mb-3 tracking-tight">$15.7B</div>
            <div className="text-gray-600 text-sm leading-relaxed font-normal">
              Projected global affiliate marketing spend by 2027.
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
            The creator partnerships that perform start with the right foundation.
          </h2>
          <p className="text-gray-300 text-sm sm:text-base leading-relaxed max-w-2xl mx-auto font-normal">
            The creator partnerships that drive consistent results share one thing: a clear brief, agreed terms, and a structured process that keeps both sides aligned from day one.
          </p>
          <div className="mt-6 text-sm font-bold text-rose-300">
            Mobb is the infrastructure that makes that possible at scale.
          </div>
        </div>
      </section>

      {/* ------------------------------------------------------------- */}
      {/* SECTION 5: 4 CREATOR AFFILIATE TYPES MANAGED END TO END      */}
      {/* ------------------------------------------------------------- */}
      <section className="max-w-[1240px] mx-auto px-4 sm:px-6 lg:px-8 space-y-24 py-16">
        
        <h2 style={sectionHeadingStyle} className="text-center tracking-tight max-w-3xl mx-auto mb-16">
          Every Type Of Creator Affiliate Collaboration, Managed End To End.
        </h2>

        {/* ITEM 1: Commission-Based Creator Deals */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          <div className="lg:col-span-6 flex flex-col items-start text-left">
            <h3 style={sectionHeadingStyle} className="tracking-tight mb-4">
              Commission-Based Creator Deals
            </h3>
            <p className="text-gray-600 text-base sm:text-lg leading-relaxed font-normal">
              Find creators who fit your brief, agree on commission terms directly inside the platform, and confirm deliverables before any work begins. Mobb keeps every agreed term on record before a creator posts. When a creator drives results, the relationship stays in your account for the next campaign.
            </p>
          </div>

          {/* Graphic Right (Pink Background Container) */}
          <div className="lg:col-span-6 flex justify-center">
            <div className="w-full max-w-[480px] min-h-[320px] bg-[#fecdd3]/40 rounded-3xl p-6 sm:p-8 flex justify-center items-center">
              <div className="w-full max-w-md bg-white rounded-2xl shadow-xl border border-gray-100 p-5 space-y-3 text-xs">
                <div className="flex items-center justify-between border-b pb-2">
                  <div className="flex items-center gap-2">
                    <img src={oliviaPezzenteImg} className="w-6 h-6 rounded-full object-cover" alt="@amaralewis" />
                    <span className="font-bold text-gray-900">@amaralewis</span>
                  </div>
                  <span className="bg-emerald-100 text-emerald-800 text-[9px] font-bold px-2 py-0.5 rounded-full">Terms agreed</span>
                </div>

                <div className="grid grid-cols-3 gap-2 text-center text-[10px]">
                  <div className="bg-gray-50 p-2 rounded-lg">
                    <div className="text-gray-400">Commission</div>
                    <div className="font-bold text-gray-900 text-xs">15%</div>
                  </div>
                  <div className="bg-gray-50 p-2 rounded-lg">
                    <div className="text-gray-400">Deliverables</div>
                    <div className="font-bold text-gray-900 text-xs">3 posts</div>
                  </div>
                  <div className="bg-gray-50 p-2 rounded-lg">
                    <div className="text-gray-400">Term</div>
                    <div className="font-bold text-gray-900 text-xs">90 days</div>
                  </div>
                </div>

                <div className="space-y-1.5 text-[10px]">
                  <div className="flex justify-between items-center p-2 bg-gray-50 rounded-lg">
                    <span className="font-semibold text-gray-700">Agreement on record</span>
                    <span className="text-emerald-600 font-bold">Signed</span>
                  </div>
                  <div className="flex justify-between items-center p-2 bg-gray-50 rounded-lg">
                    <span className="font-semibold text-gray-700">Content review</span>
                    <span className="text-amber-600 font-bold">2 pending</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

        </div>

        {/* ITEM 2: Discount Code Campaigns */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Graphic Left (Purple Background Container) */}
          <div className="lg:col-span-6 order-2 lg:order-1 flex justify-center">
            <div className="w-full max-w-[480px] min-h-[320px] bg-[#e0e7ff]/60 rounded-3xl p-6 sm:p-8 flex justify-center items-center">
              <div className="w-full max-w-md bg-white rounded-2xl shadow-xl border border-gray-100 p-5 space-y-3">
                <div className="flex items-center justify-between border-b pb-2 text-xs font-bold text-gray-900">
                  <span>Campaign · SPRING</span>
                  <span className="bg-emerald-100 text-emerald-800 text-[9px] px-2 py-0.5 rounded-full">Live</span>
                </div>
                <div className="space-y-2 text-xs">
                  <div className="flex items-center justify-between p-2.5 bg-gray-50 rounded-xl">
                    <div className="flex items-center gap-2">
                      <img src={niloofarTaghaviImg} className="w-6 h-6 rounded-full object-cover" alt="Hana" />
                      <div>
                        <div className="font-bold text-gray-900 text-[11px]">Hana Kim</div>
                        <div className="text-[9px] text-gray-400">TikTok · Posted</div>
                      </div>
                    </div>
                    <span className="bg-rose-100 text-rose-700 font-mono font-bold text-[10px] px-2 py-0.5 rounded-md">HANA20</span>
                  </div>

                  <div className="flex items-center justify-between p-2.5 bg-gray-50 rounded-xl">
                    <div className="flex items-center gap-2">
                      <img src={renateReinsveImg} className="w-6 h-6 rounded-full object-cover" alt="Jess" />
                      <div>
                        <div className="font-bold text-gray-900 text-[11px]">Jess Park</div>
                        <div className="text-[9px] text-gray-400">Instagram · Live</div>
                      </div>
                    </div>
                    <span className="bg-rose-100 text-rose-700 font-mono font-bold text-[10px] px-2 py-0.5 rounded-md">JESS15B</span>
                  </div>

                  <div className="flex items-center justify-between p-2.5 bg-gray-50 rounded-xl">
                    <div className="flex items-center gap-2">
                      <img src={stephenGImg} className="w-6 h-6 rounded-full object-cover" alt="Tyler" />
                      <div>
                        <div className="font-bold text-gray-900 text-[11px]">Tyler Brooks</div>
                        <div className="text-[9px] text-gray-400">TikTok · In review</div>
                      </div>
                    </div>
                    <span className="bg-rose-100 text-rose-700 font-mono font-bold text-[10px] px-2 py-0.5 rounded-md">TYLER20</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="lg:col-span-6 flex flex-col items-start text-left order-1 lg:order-2">
            <h3 style={sectionHeadingStyle} className="tracking-tight mb-4">
              Discount Code Campaigns
            </h3>
            <p className="text-gray-600 text-base sm:text-lg leading-relaxed font-normal">
              Brief creators on the code, the messaging, and the posting requirements inside Mobb. Agree on deliverables, confirm the timeline, and track content performance when it goes live. Every discount code collaboration runs through the same structured workflow as your paid campaigns.
            </p>
          </div>

        </div>

        {/* ITEM 3: Product Affiliate Programs */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          <div className="lg:col-span-6 flex flex-col items-start text-left">
            <h3 style={sectionHeadingStyle} className="tracking-tight mb-4">
              Product Affiliate Programs
            </h3>
            <p className="text-gray-600 text-base sm:text-lg leading-relaxed font-normal">
              Build a roster of creators who promote your product on an ongoing basis. Rehire directly from your account history, brief them quickly, and track their content performance over time. Your affiliate creator roster compounds with every campaign.
            </p>
          </div>

          {/* Graphic Right (Yellow Background Container) */}
          <div className="lg:col-span-6 flex justify-center">
            <div className="w-full max-w-[480px] min-h-[320px] bg-[#fef08a]/60 rounded-3xl p-6 sm:p-8 flex justify-center items-center">
              <div className="w-full max-w-md bg-white rounded-2xl shadow-xl border border-gray-100 p-5 space-y-3">
                <div className="flex items-center justify-between border-b pb-2 text-xs font-bold text-gray-900">
                  <span>YourAffiliate Roster</span>
                  <span className="text-[10px] text-gray-500 font-normal">9 creators</span>
                </div>
                <div className="space-y-2 text-xs">
                  <div className="flex items-center justify-between p-2 bg-gray-50 rounded-xl">
                    <div className="flex items-center gap-2">
                      <img src={marimiqadzzeImg} className="w-6 h-6 rounded-full object-cover" alt="Priya" />
                      <div>
                        <div className="font-bold text-[11px]">Priya Nair</div>
                        <div className="text-[9px] text-gray-400">Beauty · 6 posts live</div>
                      </div>
                    </div>
                    <button className="bg-gray-100 hover:bg-gray-200 text-gray-800 text-[9px] font-bold px-2.5 py-1 rounded-lg">↺ Rehire</button>
                  </div>

                  <div className="flex items-center justify-between p-2 bg-gray-50 rounded-xl">
                    <div className="flex items-center gap-2">
                      <img src={ivanaMarketinImg} className="w-6 h-6 rounded-full object-cover" alt="Drea" />
                      <div>
                        <div className="font-bold text-[11px]">Drea Phillips</div>
                        <div className="text-[9px] text-gray-400">Wellness · ongoing</div>
                      </div>
                    </div>
                    <button className="bg-gray-100 hover:bg-gray-200 text-gray-800 text-[9px] font-bold px-2.5 py-1 rounded-lg">↺ Rehire</button>
                  </div>

                  <div className="flex items-center justify-between p-2 bg-gray-50 rounded-xl">
                    <div className="flex items-center gap-2">
                      <img src={niloofarTaghaviImg} className="w-6 h-6 rounded-full object-cover" alt="Hana" />
                      <div>
                        <div className="font-bold text-[11px]">Hana Kim</div>
                        <div className="text-[9px] text-gray-400">Food · 4 posts live</div>
                      </div>
                    </div>
                    <button className="bg-gray-100 hover:bg-gray-200 text-gray-800 text-[9px] font-bold px-2.5 py-1 rounded-lg">↺ Rehire</button>
                  </div>
                </div>
              </div>
            </div>
          </div>

        </div>

        {/* ITEM 4: Hybrid Deals */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Graphic Left (Gray Background Container) */}
          <div className="lg:col-span-6 order-2 lg:order-1 flex justify-center">
            <div className="w-full max-w-[480px] min-h-[320px] bg-gray-200/70 rounded-3xl p-6 sm:p-8 flex justify-center items-center">
              <div className="w-full max-w-md bg-white rounded-2xl shadow-xl border border-gray-100 p-5 space-y-3 text-xs">
                <div className="flex items-center justify-between border-b pb-2 font-bold">
                  <div className="flex items-center gap-2">
                    <img src={hermanStrydomImg} className="w-6 h-6 rounded-full object-cover" alt="Marco" />
                    <span>Marco Liu</span>
                  </div>
                  <span className="bg-emerald-100 text-emerald-800 text-[9px] font-bold px-2 py-0.5 rounded-full">In escrow</span>
                </div>

                <div className="grid grid-cols-3 gap-2 text-[10px] text-center">
                  <div className="bg-gray-50 p-2 rounded-lg">
                    <div className="text-gray-400">Flat fee</div>
                    <div className="font-extrabold text-gray-900 text-xs">$800</div>
                  </div>
                  <div className="bg-gray-50 p-2 rounded-lg">
                    <div className="text-gray-400">Commission</div>
                    <div className="font-extrabold text-gray-900 text-xs">12%</div>
                  </div>
                  <div className="bg-gray-50 p-2 rounded-lg">
                    <div className="text-gray-400">Term</div>
                    <div className="font-extrabold text-gray-900 text-xs">60 days</div>
                  </div>
                </div>

                <div className="space-y-1.5 text-[10px]">
                  <div className="flex justify-between items-center p-2 bg-emerald-50 rounded-lg">
                    <span className="font-semibold text-emerald-900">$800 held in escrow</span>
                    <span className="text-emerald-700 font-bold">Funded</span>
                  </div>
                  <div className="flex justify-between items-center p-2 bg-gray-50 rounded-lg">
                    <span className="font-semibold text-gray-700">12% commission</span>
                    <span className="text-emerald-600 font-bold">Agreed</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="lg:col-span-6 flex flex-col items-start text-left order-1 lg:order-2">
            <h3 style={sectionHeadingStyle} className="tracking-tight mb-4">
              Hybrid Deals
            </h3>
            <p className="text-gray-600 text-base sm:text-lg leading-relaxed font-normal">
              Manage flat fee plus commission arrangements inside the same platform. Agree on the flat fee, confirm the commission terms, and process the flat fee payment through Mobb's built-in escrow. Every hybrid collaboration follows the same structured workflow regardless of how the deal is structured.
            </p>
          </div>

        </div>

      </section>

      {/* ------------------------------------------------------------- */}
      {/* SECTION 6: INTERACTIVE TOOL STACK                             */}
      {/* ------------------------------------------------------------- */}
      <section className="max-w-[1240px] mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <h2 style={sectionHeadingStyle} className="text-center tracking-tight mb-3">
          One Account, From First Message to Final Post.
        </h2>

        {/* Tab Selection Bar */}
        <div className="flex items-center justify-start sm:justify-center gap-2 overflow-x-auto pb-4 mb-10 no-scrollbar mt-8">
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
                    <img src={lettersOfTravelImg} className="w-full h-24 object-cover rounded-xl" alt="C2" />
                    <img src={paolaSantanaImg} className="w-full h-24 object-cover rounded-xl" alt="C3" />
                  </div>
                </div>
              </div>

            </div>
          </div>
        ))}
      </section>

      {/* ------------------------------------------------------------- */}
      {/* SECTION 7: DARK COMPARISON TABLE CARD                         */}
      {/* ------------------------------------------------------------- */}
      <section className="max-w-[1240px] mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="bg-[#22252a] text-white rounded-[36px] p-8 sm:p-12 shadow-2xl">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            
            <div className="lg:col-span-5 space-y-4 text-left">
              <h2 style={darkSectionHeadingStyle} className="tracking-tight">
                Affiliate marketing built on creator relationships, not just links.
              </h2>
              <p className="text-gray-300 text-xs sm:text-sm leading-relaxed font-normal">
                Most affiliate tools are built around tracking. Mobb is built around the creator relationship: finding the right creator, briefing them properly, and managing the collaboration from first message to final post. When a creator drives results, they stay in your account. Brief them again, adjust the commission, scale the relationship. Your affiliate program becomes more efficient with every partnership.
              </p>
              <div className="pt-2 text-rose-300 font-bold text-xs">
                Less time recruiting. More time scaling the partnerships that perform.
              </div>
              <button
                onClick={onNavigateSearch}
                className="inline-flex items-center gap-2 bg-[#f43f5e] hover:bg-[#e11d48] text-white px-6 py-3 rounded-xl font-bold text-xs sm:text-sm transition-all shadow-lg cursor-pointer mt-4"
              >
                Start free →
              </button>
            </div>

            {/* Right Comparison Table */}
            <div className="lg:col-span-7 bg-white text-gray-900 rounded-2xl p-6 shadow-xl border border-gray-200">
              <div className="grid grid-cols-3 gap-2 border-b pb-3 text-xs font-black text-gray-400">
                <span></span>
                <span>TYPICAL AFFILIATE TOOLS</span>
                <span className="text-rose-600">Mobb</span>
              </div>

              <div className="divide-y divide-gray-100 text-[11px]">
                <div className="grid grid-cols-3 gap-2 py-2.5 items-center">
                  <span className="font-bold text-gray-900">Built around</span>
                  <span className="text-gray-500">Tracking links & clicks</span>
                  <span className="font-extrabold text-emerald-700 flex items-center gap-1">
                    <Check className="w-3 h-3 stroke-[3]" /> The creator relationship, end to end
                  </span>
                </div>

                <div className="grid grid-cols-3 gap-2 py-2.5 items-center">
                  <span className="font-bold text-gray-900">Finding creators</span>
                  <span className="text-gray-500">On your own</span>
                  <span className="font-extrabold text-emerald-700 flex items-center gap-1">
                    <Check className="w-3 h-3 stroke-[3]" /> 500,000+ vetted creators in-platform
                  </span>
                </div>

                <div className="grid grid-cols-3 gap-2 py-2.5 items-center">
                  <span className="font-bold text-gray-900">Briefs & terms</span>
                  <span className="text-gray-500">Email & spreadsheets</span>
                  <span className="font-extrabold text-emerald-700 flex items-center gap-1">
                    <Check className="w-3 h-3 stroke-[3]" /> Agreed and on record before posting
                  </span>
                </div>

                <div className="grid grid-cols-3 gap-2 py-2.5 items-center">
                  <span className="font-bold text-gray-900">Content approval</span>
                  <span className="text-gray-500">Little to no control</span>
                  <span className="font-extrabold text-emerald-700 flex items-center gap-1">
                    <Check className="w-3 h-3 stroke-[3]" /> Review & approve before payment
                  </span>
                </div>

                <div className="grid grid-cols-3 gap-2 py-2.5 items-center">
                  <span className="font-bold text-gray-900">Payment safety</span>
                  <span className="text-gray-500">Manual and risky</span>
                  <span className="font-extrabold text-emerald-700 flex items-center gap-1">
                    <Check className="w-3 h-3 stroke-[3]" /> Held in escrow until you approve
                  </span>
                </div>

                <div className="grid grid-cols-3 gap-2 py-2.5 items-center">
                  <span className="font-bold text-gray-900">Scaling up</span>
                  <span className="text-gray-500">Start from scratch each time</span>
                  <span className="font-extrabold text-emerald-700 flex items-center gap-1">
                    <Check className="w-3 h-3 stroke-[3]" /> Roster compounds, rehire in a click
                  </span>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* ------------------------------------------------------------- */}
      {/* SECTION 8: WHAT BRANDS SAY                                    */}
      {/* ------------------------------------------------------------- */}
      <section className="py-8">
        <WhatBrandsSay />
      </section>

      {/* ------------------------------------------------------------- */}
      {/* SECTION 9: FAQ ACCORDION                                      */}
      {/* ------------------------------------------------------------- */}
      <section className="max-w-[800px] mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <h2 style={sectionHeadingStyle} className="text-center tracking-tight mb-12">
          Questions about running creator affiliate programs on Mobb
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
          Have another question? <button onClick={onNavigateSearch} className="text-gray-900 font-bold underline cursor-pointer">Contact sales →</button>
        </div>
      </section>

      {/* ------------------------------------------------------------- */}
      {/* SECTION 10: DARK CTA FOOTER CARD                              */}
      {/* ------------------------------------------------------------- */}
      <section className="max-w-[1140px] mx-auto px-4 sm:px-6 lg:px-0 my-16">
        <div className="bg-[#22252a] rounded-[32px] sm:rounded-[40px] p-8 sm:p-12 lg:p-16 text-center text-white shadow-2xl relative overflow-hidden">
          
          <h2 style={darkSectionHeadingStyle} className="max-w-2xl mx-auto mb-4 tracking-tight">
            Build an affiliate creator program that performs with every partnership.
          </h2>

          <p className="text-gray-400 text-sm sm:text-base max-w-xl mx-auto mb-8 leading-relaxed font-normal">
            Find vetted creators, agree on terms, manage the collaboration, and track content performance inside the same platform where you run your entire creator program.
          </p>

          <div className="flex justify-center">
            <button
              onClick={onNavigateSearch}
              className="inline-flex items-center justify-center bg-white hover:bg-gray-100 text-gray-900 font-bold px-8 py-3.5 rounded-xl transition-all duration-200 shadow-lg text-sm cursor-pointer"
            >
              Start free
            </button>
          </div>
        </div>
      </section>

    </div>
  );
};
