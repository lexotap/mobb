import React, { useState } from 'react';
import {
  Check,
  ArrowRight,
  ChevronDown,
  ShieldCheck,
  Zap,
  CreditCard,
  FileCheck,
  Play,
  Lock,
  Download,
  CheckCircle2,
  Clock,
  FileText
} from 'lucide-react';
import { TrustedBrands } from './TrustedBrands';
import { WhatBrandsSay } from './WhatBrandsSay';
import {
  lettersOfTravelImg,
  paolaSantanaImg,
  alicjaWerniewiczImg,
  marimiqadzzeImg,
  dbrkvImg,
  hermanStrydomImg,
  ivanaMarketinImg,
  janarJuhkovImg,
} from '../avatars';

interface SecureGlobalPaymentsPageProps {
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

export const SecureGlobalPaymentsPage: React.FC<SecureGlobalPaymentsPageProps> = () => {
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  const toggleFaq = (index: number) => {
    setOpenFaq(openFaq === index ? null : index);
  };

  const faqItems = [
    {
      q: 'What happens to my payment when I place an order?',
      a: 'When you place an order, your funds are securely held in escrow by Mobb. They are not released to the creator until you review and approve the final deliverable.',
    },
    {
      q: 'When does the creator get paid?',
      a: 'Creators are paid automatically the moment you approve their deliverable. Payment is released instantly through our global payout network directly to their account.',
    },
    {
      q: 'Can I request revisions before approving?',
      a: 'Yes! If the deliverable needs adjustments, you can request revisions directly in your Mobb dashboard with specific feedback before releasing payment.',
    },
    {
      q: 'What if I approve content I later want removed?',
      a: 'Once an order is approved and payment is released, the transaction is finalized. However, our 24/7 support team can assist with communication if urgent revisions are requested post-approval.',
    },
    {
      q: 'What fee does Mobb charge on orders?',
      a: 'Mobb charges a transparent platform fee on orders, which covers secure escrow protection, automatic tax document generation, and global multi-currency payouts.',
    },
    {
      q: 'Can I see a record of all my payments?',
      a: 'Yes, every transaction, invoice, receipt, and tax document is logged in your account dashboard and available for instant download or CSV/PDF export.',
    },
    {
      q: 'Does the creator need a Mobb account to receive payment?',
      a: 'Yes, creators set up a Mobb profile and link their payout preferences to receive direct deposits, PayPal, or local currency wire transfers.',
    },
    {
      q: 'What currency does Mobb process payments in?',
      a: 'Mobb processes cards in USD, EUR, GBP, CAD, AUD, and over 100 local currencies, automatically converting and delivering localized payouts to creators.',
    },
    {
      q: 'Does Mobb handle tax documentation?',
      a: 'Yes! Mobb automatically generates 1099-NEC forms, W-8BEN compliance docs, and itemized VAT invoices so your finance team doesn’t have to chase paperwork.',
    },
    {
      q: 'Can Mobb pay creators in other countries?',
      a: 'Yes! Mobb supports direct payouts to verified creators in over 150 countries worldwide with zero manual bank transfer hassle.',
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
              Every creator paid the moment you approve. <span className="text-accent-pink">No manual work required.</span>
            </h1>

            <p className="text-gray-600 text-lg sm:text-xl leading-relaxed mb-8 max-w-xl font-normal">
              Review deliverables, request revisions, and approve in one place. One card on file pays every creator automatically when you approve. No invoices. No wire transfers. No follow-ups.
            </p>

            {/* Feature Badges */}
            <div className="flex flex-col sm:flex-row flex-wrap gap-2.5 mb-10">
              <div className="bg-gray-100/90 rounded-full px-3.5 py-1.5 text-xs font-medium text-gray-700 flex items-center gap-1.5">
                <span className="w-4 h-4 rounded-full bg-emerald-600 text-white flex items-center justify-center shrink-0">
                  <Check className="w-2.5 h-2.5 stroke-[3]" />
                </span>
                Funds held in escrow until you approve
              </div>

              <div className="bg-gray-100/90 rounded-full px-3.5 py-1.5 text-xs font-medium text-gray-700 flex items-center gap-1.5">
                <span className="w-4 h-4 rounded-full bg-emerald-600 text-white flex items-center justify-center shrink-0">
                  <Check className="w-2.5 h-2.5 stroke-[3]" />
                </span>
                One card pays every creator automatically
              </div>

              <div className="bg-gray-100/90 rounded-full px-3.5 py-1.5 text-xs font-medium text-gray-700 flex items-center gap-1.5">
                <span className="w-4 h-4 rounded-full bg-emerald-600 text-white flex items-center justify-center shrink-0">
                  <Check className="w-2.5 h-2.5 stroke-[3]" />
                </span>
                Billing, tax docs, and payouts handled across 150 countries
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

          {/* Right Hero Graphic - Approve & Pay Card */}
          <div className="lg:col-span-6 flex justify-center lg:justify-end">
            <div className="w-full max-w-md bg-white rounded-[32px] shadow-[0_20px_50px_rgba(0,0,0,0.08)] p-7 sm:p-8 border border-gray-100 relative overflow-hidden">
              
              {/* Header Badge */}
              <div className="inline-flex items-center gap-2 mb-6 text-[#f43f5e] font-extrabold text-xs tracking-wider uppercase bg-rose-50 px-3 py-1.5 rounded-full">
                <span className="w-5 h-5 rounded-full bg-[#f43f5e] text-white flex items-center justify-center">
                  <Check className="w-3 h-3 stroke-[3]" />
                </span>
                APPROVE & PAY
              </div>

              {/* Huge Amount & Deliverable */}
              <div className="mb-6">
                <div className="text-4xl sm:text-5xl font-black text-gray-900 tracking-tight">
                  $500.00
                </div>
                <div className="text-gray-500 font-semibold text-sm mt-1">
                  1 Instagram Reel
                </div>
              </div>

              {/* Status Table Details */}
              <div className="space-y-3.5 text-sm border-t border-b border-dashed border-gray-200 py-4 mb-6">
                <div className="flex justify-between items-center">
                  <span className="text-gray-400 font-medium">Status</span>
                  <span className="text-emerald-600 font-bold flex items-center gap-1.5 text-xs">
                    <span className="w-2 h-2 rounded-full bg-emerald-500"></span>
                    Delivered
                  </span>
                </div>

                <div className="flex justify-between items-center">
                  <span className="text-gray-400 font-medium">Creator</span>
                  <span className="text-gray-900 font-extrabold">@maya.creates</span>
                </div>

                <div className="flex justify-between items-center">
                  <span className="text-gray-400 font-medium">Deliverable</span>
                  <span className="text-gray-900 font-bold">1 Reel</span>
                </div>
              </div>

              {/* Green Approve Button */}
              <button className="w-full bg-[#34d399] hover:bg-[#10b981] text-white font-extrabold py-3.5 px-4 rounded-xl text-sm flex items-center justify-center gap-2 transition-colors shadow-md cursor-pointer">
                <Check className="w-4 h-4 stroke-[3]" />
                Approve & Release Payment
              </button>

            </div>
          </div>

        </div>
      </section>

      {/* ------------------------------------------------------------- */}
      {/* SECTION 2: BRAND LOGOS TICKER                                 */}
      {/* ------------------------------------------------------------- */}
      <TrustedBrands />

      {/* ------------------------------------------------------------- */}
      {/* SECTION 3: PAYMENT TIED TO DELIVERY, NOT TRUST                */}
      {/* ------------------------------------------------------------- */}
      <section className="max-w-[1240px] mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-24">
        <h2 style={sectionHeadingStyle} className="text-center mb-16 tracking-tight">
          Payment tied to delivery, not trust
        </h2>

        {/* 4 Value Prop Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          
          {/* Card 1: Budget Protected */}
          <div className="bg-gray-100/70 rounded-2xl p-6 flex flex-col justify-between border border-gray-200/50 hover:shadow-md transition-all">
            <div className="w-10 h-10 rounded-xl bg-white shadow-xs border border-gray-100 flex items-center justify-center mb-6 text-gray-900">
              <ShieldCheck className="w-5 h-5 stroke-[2]" />
            </div>
            <div>
              <h3 className="font-bold text-gray-900 text-base mb-2">Budget Protected</h3>
              <p className="text-gray-500 text-xs sm:text-sm leading-relaxed">
                Your budget is protected from the moment you fund an order
              </p>
            </div>
          </div>

          {/* Card 2: Tied To Delivery */}
          <div className="bg-gray-100/70 rounded-2xl p-6 flex flex-col justify-between border border-gray-200/50 hover:shadow-md transition-all">
            <div className="w-10 h-10 rounded-xl bg-white shadow-xs border border-gray-100 flex items-center justify-center mb-6 text-gray-900">
              <Zap className="w-5 h-5 stroke-[2]" />
            </div>
            <div>
              <h3 className="font-bold text-gray-900 text-base mb-2">Tied To Delivery</h3>
              <p className="text-gray-500 text-xs sm:text-sm leading-relaxed">
                Creators are motivated to deliver because payment is tied to approval
              </p>
            </div>
          </div>

          {/* Card 3: One Card, Every Creator */}
          <div className="bg-gray-100/70 rounded-2xl p-6 flex flex-col justify-between border border-gray-200/50 hover:shadow-md transition-all">
            <div className="w-10 h-10 rounded-xl bg-white shadow-xs border border-gray-100 flex items-center justify-center mb-6 text-gray-900">
              <CreditCard className="w-5 h-5 stroke-[2]" />
            </div>
            <div>
              <h3 className="font-bold text-gray-900 text-base mb-2">One Card, Every Creator</h3>
              <p className="text-gray-500 text-xs sm:text-sm leading-relaxed">
                One card pays every creator. No wire transfers, no individual invoices, no receipts to chase
              </p>
            </div>
          </div>

          {/* Card 4: Paperwork Handled */}
          <div className="bg-gray-100/70 rounded-2xl p-6 flex flex-col justify-between border border-gray-200/50 hover:shadow-md transition-all">
            <div className="w-10 h-10 rounded-xl bg-white shadow-xs border border-gray-100 flex items-center justify-center mb-6 text-gray-900">
              <FileCheck className="w-5 h-5 stroke-[2]" />
            </div>
            <div>
              <h3 className="font-bold text-gray-900 text-base mb-2">Paperwork Handled</h3>
              <p className="text-gray-500 text-xs sm:text-sm leading-relaxed">
                Billing, taxes, and creator payouts are handled automatically so your team does not have to
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
      {/* SECTION 4: FEATURE DEEP DIVES (5 ALTERNATING ROWS)            */}
      {/* ------------------------------------------------------------- */}
      <section className="max-w-[1240px] mx-auto px-4 sm:px-6 lg:px-8 space-y-24 py-12">
        
        {/* ROW 1: See The Deliverable, Request Changes, And Approve When It Is Right. */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Text Left */}
          <div className="lg:col-span-6 flex flex-col items-start text-left">
            <h2 style={sectionHeadingStyle} className="tracking-tight mb-6">
              See The Deliverable, Request Changes, And Approve When It Is Right.
            </h2>
            <p className="text-gray-600 text-base sm:text-lg leading-relaxed font-normal">
              When a creator submits their content, it appears directly in your Mobb dashboard for review. Watch the video, view the post, or read the caption. If it needs changes, request a revision with specific feedback. When it meets your brief, approve it in one click. Payment releases to the creator automatically.
            </p>
          </div>

          {/* Graphic Right (Pink Background Container) */}
          <div className="lg:col-span-6 flex justify-center">
            <div className="w-full max-w-[480px] min-h-[340px] bg-[#fecdd3]/40 rounded-3xl p-6 sm:p-8 flex justify-center items-center">
              <div className="w-full max-w-sm bg-white rounded-2xl shadow-xl border border-gray-100 p-5 space-y-4">
                
                {/* Header Title */}
                <div className="text-xs font-extrabold text-gray-900 border-b border-gray-100 pb-2">
                  Mason Park submitted a new video
                </div>

                {/* Video Player Card */}
                <div className="relative rounded-xl overflow-hidden bg-gray-900 group aspect-video flex items-center justify-center">
                  <img
                    src={lettersOfTravelImg}
                    alt="Video preview"
                    className="w-full h-full object-cover opacity-80"
                  />
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="w-12 h-12 rounded-full bg-white/90 text-gray-900 flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform">
                      <Play className="w-5 h-5 ml-0.5 fill-current" />
                    </div>
                  </div>
                </div>

                {/* Actions */}
                <div className="flex gap-2.5 pt-1">
                  <button className="flex-1 bg-white border border-gray-300 text-gray-700 font-bold py-2 rounded-xl text-xs hover:bg-gray-50 transition-colors">
                    Request Revision
                  </button>
                  <button className="flex-1 bg-[#111827] text-white font-bold py-2 rounded-xl text-xs hover:bg-black transition-colors shadow-sm">
                    Mark Order Complete
                  </button>
                </div>

              </div>
            </div>
          </div>

        </div>

        {/* ROW 2: Your Funds Stay In Escrow Until You Are Satisfied. */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Graphic Left (Indigo Background Container) */}
          <div className="lg:col-span-6 order-2 lg:order-1 flex justify-center">
            <div className="w-full max-w-[480px] min-h-[340px] bg-[#e0e7ff]/60 rounded-3xl p-6 sm:p-8 flex justify-center items-center">
              <div className="w-full max-w-sm bg-white rounded-2xl shadow-xl border border-gray-100 p-5 space-y-4 text-xs">
                
                {/* Escrow Banner */}
                <div className="bg-indigo-50 border border-indigo-100 rounded-xl p-3.5 flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <div className="w-7 h-7 rounded-lg bg-indigo-600 text-white flex items-center justify-center shrink-0">
                      <Lock className="w-3.5 h-3.5" />
                    </div>
                    <div>
                      <div className="font-extrabold text-indigo-900 text-xs">Held in escrow</div>
                      <div className="text-[10px] text-indigo-600 font-medium">Releases when you approve</div>
                    </div>
                  </div>
                  <div className="font-black text-indigo-950 text-sm">$350</div>
                </div>

                {/* Timeline */}
                <div className="space-y-3.5 pl-2 pt-1 border-l-2 border-indigo-100 ml-3">
                  <div className="relative pl-4">
                    <span className="absolute -left-[21px] top-0.5 w-3 h-3 rounded-full bg-indigo-600 ring-4 ring-white"></span>
                    <div className="font-bold text-gray-900 text-xs">Order placed <span className="text-[10px] text-gray-400 font-normal">• May 12</span></div>
                    <div className="text-[10px] text-emerald-600 font-semibold">Funds secured</div>
                  </div>

                  <div className="relative pl-4">
                    <span className="absolute -left-[21px] top-0.5 w-3 h-3 rounded-full bg-indigo-600 ring-4 ring-white"></span>
                    <div className="font-bold text-gray-900 text-xs">Creator accepted <span className="text-[10px] text-gray-400 font-normal">• May 13</span></div>
                  </div>

                  <div className="relative pl-4">
                    <span className="absolute -left-[21px] top-0.5 w-3 h-3 rounded-full bg-indigo-600 ring-4 ring-white"></span>
                    <div className="font-bold text-gray-900 text-xs">Awaiting your approval</div>
                    <div className="text-[10px] text-gray-500">Deliverable submitted</div>
                  </div>

                  <div className="relative pl-4 opacity-40">
                    <span className="absolute -left-[21px] top-0.5 w-3 h-3 rounded-full bg-gray-300 ring-4 ring-white"></span>
                    <div className="font-bold text-gray-700 text-xs">Payment released to creator</div>
                  </div>
                </div>

              </div>
            </div>
          </div>

          {/* Text Right */}
          <div className="lg:col-span-6 flex flex-col items-start text-left order-1 lg:order-2">
            <h2 style={sectionHeadingStyle} className="tracking-tight mb-6">
              Your Funds Stay In Escrow Until You Are Satisfied.
            </h2>
            <p className="text-gray-600 text-base sm:text-lg leading-relaxed font-normal">
              When you place an order, payment is held in escrow by Mobb. It does not reach the creator until you approve the deliverable. If the creator does not deliver, you receive a full refund. Your budget is not at risk at any point in the collaboration.
            </p>
          </div>

        </div>

        {/* ROW 3: One Card On File. Every Creator Paid Automatically. */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Text Left */}
          <div className="lg:col-span-6 flex flex-col items-start text-left">
            <h2 style={sectionHeadingStyle} className="tracking-tight mb-6">
              One Card On File. Every Creator Paid Automatically.
            </h2>
            <p className="text-gray-600 text-base sm:text-lg leading-relaxed font-normal">
              Once you approve a deliverable, Mobb releases payment to the creator through our secure payout infrastructure. You do not coordinate the transfer, send a payment link, or confirm receipt. Creators receive their payout in the format that works for them, across 150 countries.
            </p>
          </div>

          {/* Graphic Right (Yellow Background Container) */}
          <div className="lg:col-span-6 flex justify-center">
            <div className="w-full max-w-[480px] min-h-[340px] bg-[#fef08a]/60 rounded-3xl p-6 sm:p-8 flex justify-center items-center">
              <div className="w-full max-w-sm bg-white rounded-2xl shadow-xl border border-gray-100 p-4 space-y-2.5 text-xs">
                
                {/* Creator Payout Row 1 */}
                <div className="p-3 bg-gray-50/90 rounded-xl flex items-center justify-between border border-gray-100">
                  <div className="flex items-center gap-2.5">
                    <img
                      src={dbrkvImg}
                      alt="Daria"
                      className="w-8 h-8 rounded-full object-cover"
                    />
                    <div>
                      <div className="font-extrabold text-gray-900 text-xs">@dbrkv_</div>
                      <div className="text-[10px] text-gray-400">London, UK • USD</div>
                    </div>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="font-extrabold text-gray-900">$220</span>
                    <span className="bg-emerald-100 text-emerald-700 text-[10px] font-bold px-2 py-0.5 rounded-md">
                      Paid
                    </span>
                  </div>
                </div>

                {/* Creator Payout Row 2 */}
                <div className="p-3 bg-gray-50/90 rounded-xl flex items-center justify-between border border-gray-100">
                  <div className="flex items-center gap-2.5">
                    <img
                      src={hermanStrydomImg}
                      alt="Herman"
                      className="w-8 h-8 rounded-full object-cover"
                    />
                    <div>
                      <div className="font-extrabold text-gray-900 text-xs">@herman.strydom</div>
                      <div className="text-[10px] text-gray-400">Cape Town • ZAR</div>
                    </div>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="font-extrabold text-gray-900">$190</span>
                    <span className="bg-emerald-100 text-emerald-700 text-[10px] font-bold px-2 py-0.5 rounded-md">
                      Paid
                    </span>
                  </div>
                </div>

                {/* Creator Payout Row 3 */}
                <div className="p-3 bg-gray-50/90 rounded-xl flex items-center justify-between border border-gray-100">
                  <div className="flex items-center gap-2.5">
                    <img
                      src={ivanaMarketinImg}
                      alt="Ivana"
                      className="w-8 h-8 rounded-full object-cover"
                    />
                    <div>
                      <div className="font-extrabold text-gray-900 text-xs">@ivana_marketin</div>
                      <div className="text-[10px] text-gray-400">Zagreb • EUR</div>
                    </div>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="font-extrabold text-gray-900">$160</span>
                    <span className="bg-emerald-100 text-emerald-700 text-[10px] font-bold px-2 py-0.5 rounded-md">
                      Paid
                    </span>
                  </div>
                </div>

                {/* Creator Payout Row 4 */}
                <div className="p-3 bg-gray-50/90 rounded-xl flex items-center justify-between border border-gray-100">
                  <div className="flex items-center gap-2.5">
                    <img
                      src={janarJuhkovImg}
                      alt="Janar"
                      className="w-8 h-8 rounded-full object-cover"
                    />
                    <div>
                      <div className="font-extrabold text-gray-900 text-xs">@janar_juhkov</div>
                      <div className="text-[10px] text-gray-400">Tallinn • EUR</div>
                    </div>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="font-extrabold text-gray-900">$270</span>
                    <span className="bg-amber-100 text-amber-700 text-[10px] font-bold px-2 py-0.5 rounded-md">
                      In review
                    </span>
                  </div>
                </div>

              </div>
            </div>
          </div>

        </div>

        {/* ROW 4: Billing, Tax Documentation, And Creator Payouts Handled Automatically. */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Graphic Left (Gray Background Container) */}
          <div className="lg:col-span-6 order-2 lg:order-1 flex justify-center">
            <div className="w-full max-w-[480px] min-h-[340px] bg-gray-200/70 rounded-3xl p-6 sm:p-8 flex justify-center items-center">
              <div className="w-full max-w-sm bg-white rounded-2xl shadow-xl border border-gray-100 p-4 space-y-2.5 text-xs">
                
                {/* Doc 1 */}
                <div className="p-3 bg-gray-50/90 rounded-xl flex items-center justify-between border border-gray-100">
                  <div className="flex items-center gap-2.5">
                    <FileText className="w-4 h-4 text-gray-500" />
                    <div>
                      <div className="font-bold text-gray-900 text-xs">Invoice #INV-20240523</div>
                      <div className="text-[10px] text-gray-400">May 23 • $350</div>
                    </div>
                  </div>
                  <button className="px-2.5 py-1 bg-white border border-gray-200 text-gray-700 rounded-lg text-[10px] font-bold flex items-center gap-1 hover:bg-gray-50">
                    <Download className="w-3 h-3" /> Download
                  </button>
                </div>

                {/* Doc 2 */}
                <div className="p-3 bg-gray-50/90 rounded-xl flex items-center justify-between border border-gray-100">
                  <div className="flex items-center gap-2.5">
                    <FileText className="w-4 h-4 text-gray-500" />
                    <div>
                      <div className="font-bold text-gray-900 text-xs">Invoice #INV-20240517</div>
                      <div className="text-[10px] text-gray-400">May 17 • $180</div>
                    </div>
                  </div>
                  <button className="px-2.5 py-1 bg-white border border-gray-200 text-gray-700 rounded-lg text-[10px] font-bold flex items-center gap-1 hover:bg-gray-50">
                    <Download className="w-3 h-3" /> Download
                  </button>
                </div>

                {/* Doc 3 */}
                <div className="p-3 bg-gray-50/90 rounded-xl flex items-center justify-between border border-gray-100">
                  <div className="flex items-center gap-2.5">
                    <FileText className="w-4 h-4 text-gray-500" />
                    <div>
                      <div className="font-bold text-gray-900 text-xs">1099-NEC : @sophiamade</div>
                      <div className="text-[10px] text-gray-400">Tax year 2024</div>
                    </div>
                  </div>
                  <button className="px-2.5 py-1 bg-white border border-gray-200 text-gray-700 rounded-lg text-[10px] font-bold flex items-center gap-1 hover:bg-gray-50">
                    <Download className="w-3 h-3" /> Download
                  </button>
                </div>

                {/* Doc 4 */}
                <div className="p-3 bg-gray-50/90 rounded-xl flex items-center justify-between border border-gray-100">
                  <div className="flex items-center gap-2.5">
                    <FileText className="w-4 h-4 text-gray-500" />
                    <div>
                      <div className="font-bold text-gray-900 text-xs">1099-NEC : @marcojr</div>
                      <div className="text-[10px] text-gray-400">Tax year 2024</div>
                    </div>
                  </div>
                  <button className="px-2.5 py-1 bg-white border border-gray-200 text-gray-700 rounded-lg text-[10px] font-bold flex items-center gap-1 hover:bg-gray-50">
                    <Download className="w-3 h-3" /> Download
                  </button>
                </div>

              </div>
            </div>
          </div>

          {/* Text Right */}
          <div className="lg:col-span-6 flex flex-col items-start text-left order-1 lg:order-2">
            <h2 style={sectionHeadingStyle} className="tracking-tight mb-6">
              Billing, Tax Documentation, And Creator Payouts Handled Automatically.
            </h2>
            <p className="text-gray-600 text-base sm:text-lg leading-relaxed font-normal">
              Mobb generates tax documents and handles compliance across 150 countries automatically. Your account stores every invoice and receipt. Your finance team gets a clean, complete record without chasing paperwork or coordinating with individual creators.
            </p>
          </div>

        </div>

        {/* ROW 5: Every Transaction Is Logged And Available To Your Team. */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Text Left */}
          <div className="lg:col-span-6 flex flex-col items-start text-left">
            <h2 style={sectionHeadingStyle} className="tracking-tight mb-6">
              Every Transaction Is Logged And Available To Your Team.
            </h2>
            <p className="text-gray-600 text-base sm:text-lg leading-relaxed font-normal">
              All orders, approvals, and payments are recorded in your account. View order history, download receipts, and track spend by creator or campaign. Your finance team gets a clean record without chasing spreadsheets or requesting invoices from creators.
            </p>
          </div>

          {/* Graphic Right (Pink Background Container) */}
          <div className="lg:col-span-6 flex justify-center">
            <div className="w-full max-w-[480px] min-h-[340px] bg-[#fecdd3]/40 rounded-3xl p-6 sm:p-8 flex justify-center items-center">
              <div className="w-full max-w-sm bg-white rounded-2xl shadow-xl border border-gray-100 p-4 space-y-3.5 text-xs">
                
                {/* Stats Summary Header */}
                <div className="grid grid-cols-3 gap-2 text-center pb-2 border-b border-gray-100">
                  <div className="bg-gray-50 p-2 rounded-xl">
                    <div className="font-black text-gray-900 text-sm">$3,840</div>
                    <div className="text-[9px] text-gray-400 uppercase font-semibold">Total spend</div>
                  </div>
                  <div className="bg-gray-50 p-2 rounded-xl">
                    <div className="font-black text-gray-900 text-sm">18</div>
                    <div className="text-[9px] text-gray-400 uppercase font-semibold">Orders</div>
                  </div>
                  <div className="bg-gray-50 p-2 rounded-xl">
                    <div className="font-black text-gray-900 text-sm">16</div>
                    <div className="text-[9px] text-gray-400 uppercase font-semibold">Approved</div>
                  </div>
                </div>

                {/* Logged Table */}
                <div className="space-y-2">
                  <div className="grid grid-cols-4 text-[10px] font-bold text-gray-400 px-1">
                    <span>CREATOR</span>
                    <span>DATE</span>
                    <span>AMOUNT</span>
                    <span className="text-right">STATUS</span>
                  </div>

                  <div className="grid grid-cols-4 items-center text-[11px] font-semibold text-gray-800 p-1.5 bg-gray-50 rounded-lg">
                    <span className="truncate">@sophiamade</span>
                    <span className="text-gray-400 text-[10px]">May 23</span>
                    <span>$350</span>
                    <span className="text-right text-emerald-600 font-bold text-[10px]">Paid</span>
                  </div>

                  <div className="grid grid-cols-4 items-center text-[11px] font-semibold text-gray-800 p-1.5 bg-gray-50 rounded-lg">
                    <span className="truncate">@marcojr</span>
                    <span className="text-gray-400 text-[10px]">May 17</span>
                    <span>$180</span>
                    <span className="text-right text-emerald-600 font-bold text-[10px]">Paid</span>
                  </div>

                  <div className="grid grid-cols-4 items-center text-[11px] font-semibold text-gray-800 p-1.5 bg-gray-50 rounded-lg">
                    <span className="truncate">@elenabeauty</span>
                    <span className="text-gray-400 text-[10px]">May 14</span>
                    <span>$420</span>
                    <span className="text-right text-emerald-600 font-bold text-[10px]">Paid</span>
                  </div>

                  <div className="grid grid-cols-4 items-center text-[11px] font-semibold text-gray-800 p-1.5 bg-gray-50 rounded-lg">
                    <span className="truncate">@riyakumar</span>
                    <span className="text-gray-400 text-[10px]">May 29</span>
                    <span>$95</span>
                    <span className="text-right text-amber-600 font-bold text-[10px]">Pending</span>
                  </div>
                </div>

              </div>
            </div>
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
          Questions about approvals and payments on Mobb
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
            Approve the content. Close the collaboration. Done.
          </h2>

          <p className="text-gray-400 text-sm sm:text-base max-w-xl mx-auto mb-8 leading-relaxed">
            Funds held securely from the first order. Payment released the moment you approve. Every transaction recorded automatically. No invoices, no wire transfers, no follow-ups.
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
