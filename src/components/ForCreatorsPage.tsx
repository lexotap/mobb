import React, { useState } from 'react';
import { sofiaJensenImg, janarJuhkovImg } from '../avatars';
import { TrustedBrands } from './TrustedBrands';
import {
  Check,
  Star,
  ShieldCheck,
  Zap,
  ArrowRight,
  DollarSign,
  Lock,
  CheckCircle2,
  Building2,
  Users,
  Award,
  Wallet,
  Clock,
  Sparkles,
  ExternalLink,
  ChevronRight
} from 'lucide-react';

interface ForCreatorsPageProps {
  onNavigateHome?: () => void;
  onNavigateSearch?: () => void;
  onOpenSignUp?: (role?: 'creator' | 'brand') => void;
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
  fontSize: '36px',
  lineHeight: '45px',
};

const darkSectionHeadingStyle: React.CSSProperties = {
  ...sectionHeadingStyle,
  color: '#ffffff',
};

export const ForCreatorsPage: React.FC<ForCreatorsPageProps> = ({ onNavigateHome, onNavigateSearch, onOpenSignUp }) => {
  const [username, setUsername] = useState('');
  const [bottomUsername, setBottomUsername] = useState('');

  const handleClaimTop = (e: React.FormEvent) => {
    e.preventDefault();
    onOpenSignUp?.('creator');
  };

  const handleClaimBottom = (e: React.FormEvent) => {
    e.preventDefault();
    onOpenSignUp?.('creator');
  };

  return (
    <div className="w-full bg-white text-gray-900 font-sans pb-24">
      {/* HERO SECTION */}
      <section className="pt-10 sm:pt-16 pb-12 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">

          {/* Left Column: Headline & Claim Form */}
          <div className="lg:col-span-7 space-y-6 text-left">

            {/* Pill Badge */}
            <div className="inline-flex items-center gap-2 bg-pink-100/80 text-[#f43f5e] text-xs font-bold px-3.5 py-1 rounded-full">
              <span className="w-2 h-2 rounded-full bg-[#f43f5e]"></span>
              FOR CREATORS
            </div>

            {/* Main Headline */}
            <h1 style={heroHeadingStyle} className="tracking-tight">
              Get Paid to Work With Brands, <span className="text-accent-pink">on Your Terms.</span>
            </h1>

            {/* Subtitle */}
            <p className="text-base sm:text-lg text-gray-600 font-medium max-w-2xl leading-relaxed">
              Your rates, your content, your terms. Receive instant payouts in your local currency, Mobb handles the rest.
            </p>

            {/* Claim Username Input Bar */}
            <div className="pt-4 space-y-2">
              <label className="block text-xs font-bold text-gray-800 uppercase tracking-wider">
                Claim Your Username and Start Getting Hired
              </label>

              <form onSubmit={handleClaimTop} className="flex flex-col sm:flex-row items-center gap-2 max-w-lg">
                <div className="relative w-full flex items-center bg-gray-50 border border-gray-300 rounded-2xl focus-within:border-gray-900 focus-within:ring-1 focus-within:ring-gray-900 transition-all overflow-hidden px-4 py-3">
                  <span className="text-sm font-bold text-gray-400 select-none shrink-0">mobb.com/</span>
                  <input
                    type="text"
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}
                    placeholder="yourname"
                    className="w-full text-sm font-bold text-gray-900 placeholder-gray-400 bg-transparent outline-none ml-0.5"
                  />
                </div>
                <button
                  type="submit"
                  className="w-full sm:w-auto px-8 py-3.5 bg-[#232323] hover:bg-black text-white text-sm font-bold rounded-2xl transition-all shadow-md cursor-pointer shrink-0"
                >
                  Claim
                </button>
              </form>
            </div>

          </div>

          {/* Right Column: Oleksa Creator Graphic Card */}
          <div className="lg:col-span-5 relative">
            <div className="bg-[#22252a] rounded-[36px] p-6 sm:p-8 shadow-2xl relative overflow-hidden">

              {/* Creator Card */}
              <div className="bg-white rounded-2xl p-6 shadow-xl relative z-10">
                {/* Header: Avatar + Info */}
                <div className="flex items-center gap-4 pb-4 border-b border-gray-100">
                  <img
                    src={sofiaJensenImg}
                    alt="Sofia Jensen"
                    className="w-16 h-16 rounded-full object-cover border-2 border-pink-100 shadow-sm"
                  />
                  <div>
                    <div className="flex items-center gap-1.5">
                      <h3 className="font-extrabold text-lg text-gray-900">Sofia Jensen</h3>
                      <span className="w-4 h-4 rounded-full bg-sky-500 text-white text-[10px] flex items-center justify-center font-bold">✓</span>
                    </div>
                    <div className="text-xs text-gray-500 font-medium">Beauty & Lifestyle — Los Angeles, CA</div>
                    <div className="flex items-center gap-2 mt-1 text-xs">
                      <span className="bg-rose-100 text-rose-700 px-1.5 py-0.5 rounded text-[10px] font-bold">▶ 91.3K</span>
                      <span className="flex items-center gap-0.5 font-bold text-gray-800">
                        <Star className="w-3 h-3 text-amber-400 fill-amber-400" /> 5.0
                        <span className="text-gray-400 font-normal">(38 reviews)</span>
                      </span>
                    </div>
                  </div>
                </div>

                {/* Services & Pricing List */}
                <div className="mt-4 space-y-2.5">
                  <div className="flex items-center justify-between p-3 rounded-xl bg-pink-50/80 text-xs font-semibold text-gray-900">
                    <span>1 UGC Product Photo</span>
                    <span className="font-black text-[#FF385C]">$75</span>
                  </div>

                  <div className="flex items-center justify-between p-3 rounded-xl bg-gray-50 text-xs font-semibold text-gray-900">
                    <span>1 UGC Product Video (1 Minute)</span>
                    <span className="font-black text-[#FF385C]">$150</span>
                  </div>

                  <div className="flex items-center justify-between p-3 rounded-xl bg-gray-50 text-xs font-semibold text-gray-900">
                    <span>1 UGC Video Ad</span>
                    <span className="font-black text-[#FF385C]">$250</span>
                  </div>
                </div>

                {/* Book Action Button */}
                <button
                  onClick={() => onOpenSignUp?.('brand')}
                  className="w-full mt-5 py-3 bg-[#22252a] hover:bg-black text-white text-xs font-bold rounded-xl transition-all flex items-center justify-center gap-2 shadow-sm cursor-pointer"
                >
                  <span>Book Sofia</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
              </div>

              {/* Top Creator Floating Badge */}
              <div className="absolute bottom-4 left-4 z-20 bg-[#f43f5e] text-white text-xs font-extrabold px-3.5 py-1.5 rounded-full shadow-lg border-2 border-white flex items-center gap-1.5 animate-bounce">
                <Award className="w-4 h-4" />
                <span>Top Creator</span>
              </div>

            </div>
          </div>

        </div>
      </section>

      {/* BRAND LOGOS TICKER */}
      <TrustedBrands />

      {/* STATS HIGHLIGHT BAR */}
      <section className="mt-12 max-w-6xl mx-auto px-4 sm:px-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="bg-gray-50/80 p-8 rounded-3xl border border-gray-200/60 text-center flex flex-col justify-between shadow-sm">
            <div className="text-4xl sm:text-5xl font-black text-[#f43f5e] tracking-tight">Free</div>
            <div className="text-xs sm:text-sm text-gray-600 font-medium mt-2">No cost to get started</div>
          </div>

          <div className="bg-gray-50/80 p-8 rounded-3xl border border-gray-200/60 text-center flex flex-col justify-between shadow-sm">
            <div className="text-4xl sm:text-5xl font-black text-gray-900 tracking-tight">500,000+</div>
            <div className="text-xs sm:text-sm text-gray-600 font-medium mt-2">Brands hiring creators right now</div>
          </div>

          <div className="bg-gray-50/80 p-8 rounded-3xl border border-gray-200/60 text-center flex flex-col justify-between shadow-sm">
            <div className="text-4xl sm:text-5xl font-black text-gray-900 tracking-tight">$17.2M</div>
            <div className="text-xs sm:text-sm text-gray-600 font-medium mt-2">In brand deals</div>
          </div>
        </div>
      </section>

      {/* COLD PITCHING SECTION */}
      <section className="mt-20 max-w-4xl mx-auto px-4 sm:px-6 text-center">
        <h2 style={sectionHeadingStyle} className="tracking-tight">
          Cold Pitching Brands Should Not Be How You Build A Business.
        </h2>

        <p className="text-xs sm:text-sm text-gray-600 mt-4 leading-relaxed max-w-3xl mx-auto">
          Most creators spend more time chasing deals than doing the work they are paid for. Negotiating rates from scratch. Getting paid late. Managing everything over DM with no protection if something goes wrong.
        </p>

        <p className="text-xs sm:text-sm font-bold text-gray-900 mt-4 max-w-2xl mx-auto">
          Mobb gives you a marketplace where brands come to you and every payment is protected before you start.
        </p>
      </section>

      {/* WHAT CHANGES WHEN YOU JOIN MOBB (6 FEATURE MODULES) */}
      <section className="mt-24 max-w-6xl mx-auto px-4 sm:px-6">
        
        <div className="text-center mb-16 sm:mb-24">
          <h2 style={sectionHeadingStyle} className="tracking-tight">
            What Changes When You Join Collabstr.
          </h2>
        </div>

        <div className="space-y-24 sm:space-y-32">
          {/* FEATURE 01 */}
          <div className="feature-grid-row">
            <div className="space-y-4 text-left flex flex-col justify-center">
              <span className="text-sm font-bold text-[#FF385C]">01</span>
              <h3 className="text-3xl sm:text-4xl font-extrabold text-[#1a1a1a] tracking-tight leading-tight">
                Brands Find You. No More Chasing.
              </h3>
              <p className="text-sm sm:text-base text-gray-500 font-normal leading-relaxed max-w-md">
                Set up your profile once with your rates, platforms, and services. Brands searching for creators like you find your profile and place orders directly. No cold pitching. No waiting for replies. Your profile does the work while you create.
              </p>
            </div>

            <div className="flex justify-center">
              <div className="feature-card-wrapper bg-white border border-gray-100 shadow-[0_15px_45px_rgba(0,0,0,0.06)]">
                <div className="feature-card-inner">
                  <div className="flex items-center gap-4 pb-4 border-b border-gray-100">
                    <div className="w-14 h-14 rounded-full bg-[#1e40af] flex items-center justify-center text-white shrink-0 overflow-hidden shadow-xs">
                      <img
                        src={janarJuhkovImg}
                        alt="Black Snow"
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <div>
                      <div className="font-extrabold text-base sm:text-lg text-gray-900">
                        Black Snow
                      </div>
                      <div className="flex items-center gap-2 text-xs font-semibold text-gray-500 mt-1">
                        <span className="bg-[#1e40af]/10 text-[#1e40af] px-2 py-0.5 rounded font-bold">▶ 151.1K</span>
                        <span className="bg-[#1e40af]/10 text-[#1e40af] px-2 py-0.5 rounded font-bold">📷 129.2K</span>
                        <span className="text-gray-700 font-bold">★ 5.0 <span className="text-gray-400 font-normal">(65 reviews)</span></span>
                      </div>
                    </div>
                  </div>

                  <div className="my-auto space-y-2 py-2">
                    <div className="flex justify-between items-center p-3 bg-[#FFF0F3] rounded-xl text-xs sm:text-sm font-semibold text-gray-900">
                      <span>1 UGC Product Photo</span>
                      <span className="font-black text-gray-900">$50</span>
                    </div>
                    <div className="flex justify-between items-center p-3 bg-white hover:bg-gray-50 rounded-xl text-xs sm:text-sm font-medium text-gray-800 transition-colors">
                      <span>1 TikTok Story</span>
                      <span className="font-bold text-[#FF385C]">$100</span>
                    </div>
                    <div className="flex justify-between items-center p-3 bg-white hover:bg-gray-50 rounded-xl text-xs sm:text-sm font-medium text-gray-800 transition-colors">
                      <span>1 Instagram Story</span>
                      <span className="font-bold text-[#FF385C]">$100</span>
                    </div>
                  </div>

                  <div className="text-[11px] text-gray-400 text-center font-medium pt-1">
                    Direct brand bookings enabled
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* FEATURE 02 */}
          <div className="feature-grid-row">
            <div className="lg:order-2 space-y-4 text-left flex flex-col justify-center">
              <span className="text-sm font-bold text-[#FF385C]">02</span>
              <h3 className="text-3xl sm:text-4xl font-extrabold text-[#1a1a1a] tracking-tight leading-tight">
                Rates Are Set Upfront. No Awkward Negotiation.
              </h3>
              <p className="text-sm sm:text-base text-gray-500 font-normal leading-relaxed max-w-md">
                List your prices for every service type. Brands see your rates before they reach out. Every collaboration starts with both sides already aligned on what the work is worth.
              </p>
            </div>

            <div className="lg:order-1 flex justify-center">
              <div className="feature-card-wrapper bg-[#a798ff] shadow-lg">
                <div className="feature-card-inner">
                  <div className="text-[11px] font-bold text-gray-400 uppercase tracking-wider pb-1">
                    YOUR LISTED SERVICES
                  </div>

                  <div className="space-y-2.5 my-auto">
                    <div className="p-3 bg-white border border-gray-100 rounded-xl flex items-center justify-between shadow-xs">
                      <div>
                        <div className="text-xs sm:text-sm font-bold text-gray-900">Instagram Post + Story</div>
                        <div className="text-[11px] text-gray-400">3 day delivery</div>
                      </div>
                      <span className="text-xs sm:text-sm font-black text-gray-900">$420</span>
                    </div>

                    <div className="p-3 bg-white border border-gray-100 rounded-xl flex items-center justify-between shadow-xs">
                      <div>
                        <div className="text-xs sm:text-sm font-bold text-gray-900">TikTok Video</div>
                        <div className="text-[11px] text-gray-400">5 day delivery</div>
                      </div>
                      <span className="text-xs sm:text-sm font-black text-gray-900">$650</span>
                    </div>

                    <div className="p-3 bg-white border border-gray-100 rounded-xl flex items-center justify-between shadow-xs">
                      <div>
                        <div className="text-xs sm:text-sm font-bold text-gray-900">UGC Bundle — 3 videos</div>
                        <div className="text-[11px] text-gray-400">7 day delivery</div>
                      </div>
                      <span className="text-xs sm:text-sm font-black text-gray-900">$380</span>
                    </div>
                  </div>

                  <div className="bg-[#FFF0F3] border border-[#FFE0E6] text-[#FF385C] p-2.5 rounded-xl text-[11px] font-semibold flex items-center gap-2">
                    <span className="w-3.5 h-3.5 rounded-full border border-[#FF385C] flex items-center justify-center text-[9px] font-bold">i</span>
                    <span>Brands see your rates before they reach out</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* FEATURE 03 */}
          <div className="feature-grid-row">
            <div className="space-y-4 text-left flex flex-col justify-center">
              <span className="text-sm font-bold text-[#FF385C]">03</span>
              <h3 className="text-3xl sm:text-4xl font-extrabold text-[#1a1a1a] tracking-tight leading-tight">
                Every Payment Is Protected Before You Start.
              </h3>
              <p className="text-sm sm:text-base text-gray-500 font-normal leading-relaxed max-w-md">
                Brands pay upfront when they place an order. Collabstr holds the funds in escrow until you deliver and the brand approves. You never create content without payment already secured.
              </p>
            </div>

            <div className="flex justify-center">
              <div className="feature-card-wrapper bg-[#f4a0b6] shadow-lg">
                <div className="feature-card-inner space-y-4">
                  <div className="text-[11px] font-bold text-gray-400 uppercase tracking-wider pb-1 text-center sm:text-left">
                    ORDER #8142 — TIKTOK VIDEO • $650
                  </div>

                  <div className="space-y-4 text-xs sm:text-sm my-auto">
                    {/* Step 1 */}
                    <div className="flex items-start gap-3 relative">
                      <div className="w-5 h-5 rounded-full bg-emerald-500 text-white flex items-center justify-center text-[10px] shrink-0 mt-0.5 font-bold">✓</div>
                      <div>
                        <div className="font-bold text-gray-900">Brand placed order</div>
                        <div className="text-xs text-gray-400 font-normal mt-0.5">$650 moved into escrow immediately</div>
                      </div>
                    </div>

                    {/* Step 2 */}
                    <div className="flex items-start gap-3 relative pl-0">
                      <div className="w-5 h-5 rounded-full bg-emerald-500 text-white flex items-center justify-center text-[10px] shrink-0 mt-0.5 font-bold">✓</div>
                      <div>
                        <div className="font-bold text-gray-900">You created and submitted content</div>
                        <div className="text-xs text-gray-400 font-normal mt-0.5">Brand reviewed and approved</div>
                      </div>
                    </div>

                    {/* Step 3 */}
                    <div className="flex items-start gap-3">
                      <div className="w-5 h-5 rounded-full bg-[#FF385C] text-white flex items-center justify-center text-[10px] shrink-0 mt-0.5 font-bold">$</div>
                      <div>
                        <div className="font-extrabold text-gray-900">$650 released to your account</div>
                        <div className="text-xs text-emerald-600 font-semibold mt-0.5">No invoice. No chasing. Paid.</div>
                      </div>
                    </div>
                  </div>

                  <div className="text-[11px] text-gray-400 text-center font-medium">
                    100% Escrow secured transaction
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* FEATURE 04 */}
          <div className="feature-grid-row">
            <div className="lg:order-2 space-y-4 text-left flex flex-col justify-center">
              <span className="text-sm font-bold text-[#FF385C]">04</span>
              <h3 className="text-3xl sm:text-4xl font-extrabold text-[#1a1a1a] tracking-tight leading-tight">
                Apply To Campaigns From Brands Actively Looking For Creators.
              </h3>
              <p className="text-sm sm:text-base text-gray-500 font-normal leading-relaxed max-w-md">
                Browse active brand campaigns and apply directly with your rates. Every campaign you apply to already has budget confirmed and a brand that is ready to hire.
              </p>
            </div>

            <div className="lg:order-1 flex justify-center">
              <div className="feature-card-wrapper bg-[#a798ff] shadow-lg">
                <div className="feature-card-inner space-y-3.5">
                  <div className="text-[11px] font-bold text-gray-400 uppercase tracking-wider pb-1">
                    OPEN CAMPAIGNS
                  </div>

                  <div className="space-y-3 my-auto">
                    <div className="p-4 bg-white border border-gray-100 rounded-2xl shadow-xs space-y-2">
                      <div className="flex items-center justify-between">
                        <span className="text-xs sm:text-sm font-bold text-gray-900">Wellness Brand UGC</span>
                        <span className="text-[10px] bg-emerald-50 text-emerald-600 font-bold px-2.5 py-0.5 rounded-full border border-emerald-100">Budget confirmed</span>
                      </div>
                      <div className="text-xs text-gray-400">3 x UGC videos — up to $450 each</div>
                      <div className="flex gap-1.5 pt-1">
                        <span className="text-[10px] bg-gray-100 text-gray-600 px-2 py-0.5 rounded-md font-medium">UGC</span>
                        <span className="text-[10px] bg-gray-100 text-gray-600 px-2 py-0.5 rounded-md font-medium">Health</span>
                      </div>
                    </div>

                    <div className="p-4 bg-white border border-gray-100 rounded-2xl shadow-xs space-y-2">
                      <div className="flex items-center justify-between">
                        <span className="text-xs sm:text-sm font-bold text-gray-900">Fintech App — TikTok</span>
                        <span className="text-[10px] bg-emerald-50 text-emerald-600 font-bold px-2.5 py-0.5 rounded-full border border-emerald-100">Budget confirmed</span>
                      </div>
                      <div className="text-xs text-gray-400">TikTok video • 50k+ followers</div>
                      <div className="flex gap-1.5 pt-1">
                        <span className="text-[10px] bg-gray-100 text-gray-600 px-2 py-0.5 rounded-md font-medium">TikTok</span>
                        <span className="text-[10px] bg-gray-100 text-gray-600 px-2 py-0.5 rounded-md font-medium">Finance</span>
                      </div>
                    </div>
                  </div>

                  <div className="text-[11px] text-gray-400 text-center font-medium">
                    Verified brand budgets only
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* FEATURE 05 */}
          <div className="feature-grid-row">
            <div className="space-y-4 text-left flex flex-col justify-center">
              <span className="text-sm font-bold text-[#FF385C]">05</span>
              <h3 className="text-3xl sm:text-4xl font-extrabold text-[#1a1a1a] tracking-tight leading-tight">
                Get Paid Fast, In Your Currency, Your Way.
              </h3>
              <p className="text-sm sm:text-base text-gray-500 font-normal leading-relaxed max-w-md">
                Getting paid is the easy part. Deliver your content, get it approved, and your payment arrives fast. Collabstr pays out in your local currency through the payment method that works for you: PayPal, Venmo, bank transfer, and more. No waiting, no chasing, no wondering. You deliver, it gets approved, you get paid.
              </p>
            </div>

            <div className="flex justify-center">
              <div className="feature-card-wrapper bg-[#f4a0b6] shadow-lg">
                <div className="feature-card-inner space-y-3">
                  <div className="space-y-2.5 my-auto">
                    <div className="bg-white p-3 rounded-xl border border-gray-100 flex items-center justify-between text-xs sm:text-sm font-bold text-gray-900 shadow-xs">
                      <span className="flex items-center gap-3">
                        <span className="w-6 h-6 bg-[#003087] text-white rounded-lg flex items-center justify-center text-[10px] font-black tracking-tighter">PP</span>
                        <span>PayPal</span>
                      </span>
                      <span className="text-[11px] bg-emerald-50 text-emerald-600 px-2.5 py-0.5 rounded-full font-bold border border-emerald-100">Connected</span>
                    </div>

                    <div className="bg-white p-3 rounded-xl border border-gray-100 flex items-center justify-between text-xs sm:text-sm font-bold text-gray-900 shadow-xs">
                      <span className="flex items-center gap-3">
                        <span className="w-6 h-6 bg-[#008CFF] text-white rounded-lg flex items-center justify-center text-xs font-black italic">v</span>
                        <span>Venmo</span>
                      </span>
                      <span className="text-xs text-gray-400 font-medium">Add</span>
                    </div>

                    <div className="bg-white p-3 rounded-xl border border-gray-100 flex items-center justify-between text-xs sm:text-sm font-bold text-gray-900 shadow-xs">
                      <span className="flex items-center gap-3">
                        <span className="w-6 h-6 bg-[#1a1f2c] text-white rounded-lg flex items-center justify-center text-xs font-bold">
                          <Building2 className="w-3.5 h-3.5" />
                        </span>
                        <span>Bank Transfer</span>
                      </span>
                      <span className="text-xs text-gray-400 font-medium">Add</span>
                    </div>
                  </div>

                  <div className="bg-[#FFF0F3] p-3.5 rounded-xl border border-[#FFE0E6] flex items-center justify-between text-xs sm:text-sm">
                    <div>
                      <div className="text-xs font-extrabold text-gray-900">Last payout</div>
                      <div className="text-[11px] text-gray-400">TikTok Video — ClickUp</div>
                    </div>
                    <div className="text-right">
                      <div className="font-black text-[#FF385C] text-sm sm:text-base">$650</div>
                      <div className="text-[10px] text-emerald-600 font-bold">Paid out</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* FEATURE 06 */}
          <div className="feature-grid-row">
            <div className="lg:order-2 space-y-4 text-left flex flex-col justify-center">
              <span className="text-sm font-bold text-[#FF385C]">06</span>
              <h3 className="text-3xl sm:text-4xl font-extrabold text-[#1a1a1a] tracking-tight leading-tight">
                Your Collaboration History Builds Your Reputation.
              </h3>
              <p className="text-sm sm:text-base text-gray-500 font-normal leading-relaxed max-w-md">
                Every completed order, every five-star review, and every brand relationship stays in your account. Your track record on the platform becomes your portfolio.
              </p>
            </div>

            <div className="lg:order-1 flex justify-center">
              <div className="feature-card-wrapper bg-[#a798ff] shadow-lg">
                <div className="feature-card-inner space-y-3.5">
                  <div className="text-[11px] font-bold text-gray-400 uppercase tracking-wider pb-1">
                    CREATOR DASHBOARD
                  </div>

                  <div className="grid grid-cols-3 gap-3">
                    <div className="bg-white border border-gray-100 rounded-2xl p-3 text-center shadow-xs">
                      <div className="text-lg font-black text-gray-900">48</div>
                      <div className="text-[11px] text-gray-400 font-medium">Orders</div>
                    </div>
                    <div className="bg-white border border-gray-100 rounded-2xl p-3 text-center shadow-xs">
                      <div className="text-lg font-black text-gray-900 flex items-center justify-center gap-1">
                        <span className="text-amber-400">★</span>4.9
                      </div>
                      <div className="text-[11px] text-gray-400 font-medium">Rating</div>
                    </div>
                    <div className="bg-[#FFF0F3] border border-[#FFE0E6] rounded-2xl p-3 text-center shadow-xs">
                      <div className="text-lg font-black text-[#FF385C]">$18k</div>
                      <div className="text-[11px] text-gray-500 font-medium">Earned</div>
                    </div>
                  </div>

                  <div className="space-y-2.5 my-auto">
                    <div className="bg-white p-3 rounded-2xl border border-gray-100 text-xs space-y-1 shadow-xs">
                      <div className="text-amber-400 text-xs">★★★★★</div>
                      <p className="text-gray-800 text-xs font-normal">"Incredibly professional and delivered exactly what we needed."</p>
                      <div className="text-[11px] text-gray-400">ClickUp • 2 days ago</div>
                    </div>

                    <div className="bg-white p-3 rounded-2xl border border-gray-100 text-xs space-y-1 shadow-xs">
                      <div className="text-amber-400 text-xs">★★★★★</div>
                      <p className="text-gray-800 text-xs font-normal">"Will book again. Content exceeded our expectations."</p>
                      <div className="text-[11px] text-gray-400">Hopper • 1 week ago</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

      </section>

      {/* BOTTOM CTA BANNER */}
      <section className="mt-24 max-w-6xl mx-auto px-4 sm:px-6">
        <div className="bg-[#22252a] text-white rounded-[36px] p-8 sm:p-14 text-center shadow-2xl relative overflow-hidden">
          <h2 style={darkSectionHeadingStyle} className="tracking-tight max-w-2xl mx-auto">
            Claim Your Username and Start Getting Hired.
          </h2>
          <p className="text-xs sm:text-sm text-gray-300 mt-4 max-w-md mx-auto">
            500,000+ brands are actively looking for creators on Mobb right now.
          </p>

          <form onSubmit={handleClaimBottom} className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-2 max-w-md mx-auto">
            <div className="relative w-full flex items-center bg-white/10 border border-white/20 rounded-2xl focus-within:border-white focus-within:ring-1 focus-within:ring-white transition-all overflow-hidden px-4 py-3">
              <span className="text-sm font-bold text-gray-400 select-none shrink-0">mobb.com/</span>
              <input
                type="text"
                value={bottomUsername}
                onChange={(e) => setBottomUsername(e.target.value)}
                placeholder="yourname"
                className="w-full text-sm font-bold text-white placeholder-gray-500 bg-transparent outline-none ml-0.5"
              />
            </div>
            <button
              type="submit"
              className="w-full sm:w-auto px-8 py-3.5 bg-[#f43f5e] hover:bg-rose-600 text-white text-sm font-bold rounded-2xl transition-all shadow-md cursor-pointer shrink-0"
            >
              Claim
            </button>
          </form>
        </div>
      </section>
    </div>
  );
};
