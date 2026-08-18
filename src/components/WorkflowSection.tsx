import React, { useState } from 'react';
import { Search, Megaphone, Check, TrendingUp, Users, Plus, ShieldCheck, DollarSign, Calendar, MessageSquare, BarChart3, UserPlus, Layers, ChevronDown } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import {
  lettersOfTravelImg,
  paolaSantanaImg,
  alicjaWerniewiczImg,
  marimiqadzzeImg,
  dbrkvImg,
  hermanStrydomImg,
  inspoHomeImg,
  ivanaMarketinImg,
  janarJuhkovImg,
  joanneBladesImg,
  kolapoImg,
  oliviaPezzenteImg,
  sofiaJensenImg,
  stephenGImg,
  renateReinsveImg,
  simplyMrFrostImg,
} from '../avatars';

interface WorkflowCardData {
  id: string;
  number: string;
  tabLabel: string;
  title: string;
  description: string;
  pills: string[];
  renderGraphic: () => React.ReactNode;
}

const WORKFLOW_STEPS: WorkflowCardData[] = [
  {
    id: '01',
    number: '01',
    tabLabel: 'Creator Discovery',
    title: 'Find the Right Creator before You Commit',
    description: 'Search 1.1m+ vetted Creators by platform, niche, audience, and budget. See verified engagement rates and demographics before you commit. Spend less time searching and more time running campaigns.',
    pills: ['Vetted creators', 'Detailed audience demographics', 'Free to search'],
    renderGraphic: () => (
      <div className="bg-white rounded-3xl p-5 shadow-lg border border-gray-100 flex flex-col justify-between w-full h-[320px] overflow-hidden">
        {/* Search Bar Input */}
        <div className="bg-gray-100/90 rounded-full px-4 py-2 text-xs text-gray-600 flex items-center gap-2 border border-gray-200/60 shrink-0">
          <Search className="w-3.5 h-3.5 text-gray-400 shrink-0" />
          <span className="font-medium truncate">Beauty creators · Under $250 · New York</span>
        </div>

        {/* Grid of Creator Avatars */}
        <div className="grid grid-cols-3 gap-2 mt-1">
          <div className="relative aspect-4/5 rounded-xl overflow-hidden group shadow-xs">
            <img
              src={dbrkvImg}
              alt="Daria"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent p-1.5">
              <span className="text-[10px] font-semibold text-white truncate block">@dbrkv_</span>
            </div>
          </div>

          <div className="relative aspect-4/5 rounded-xl overflow-hidden group shadow-xs">
            <img
              src={hermanStrydomImg}
              alt="Herman"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent p-1.5">
              <span className="text-[10px] font-semibold text-white truncate block">@herman.strydom</span>
            </div>
          </div>

          <div className="relative aspect-4/5 rounded-xl overflow-hidden group shadow-xs">
            <img
              src={inspoHomeImg}
              alt="Inspo Home"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent p-1.5">
              <span className="text-[10px] font-semibold text-white truncate block">@inspo.home</span>
            </div>
          </div>

          <div className="relative aspect-4/5 rounded-xl overflow-hidden group shadow-xs">
            <img
              src={ivanaMarketinImg}
              alt="Ivana"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent p-1.5">
              <span className="text-[10px] font-semibold text-white truncate block">@ivana_marketin</span>
            </div>
          </div>

          <div className="relative aspect-4/5 rounded-xl overflow-hidden group shadow-xs">
            <img
              src={janarJuhkovImg}
              alt="Janar"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent p-1.5">
              <span className="text-[10px] font-semibold text-white truncate block">@janar_juhkov</span>
            </div>
          </div>

          <div className="relative aspect-4/5 rounded-xl overflow-hidden group shadow-xs">
            <img
              src={sofiaJensenImg}
              alt="Sofia"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent p-1.5">
              <span className="text-[10px] font-semibold text-white truncate block">@sofia_jensen</span>
            </div>
          </div>
        </div>
      </div>
    ),
  },
  {
    id: '02',
    number: '02',
    tabLabel: 'AI Campaign Briefs',
    title: 'Post Detailed Campaign Briefs in Minutes. Let Creators Come to You.',
    description: 'Skip the back-and-forth. Describe your campaign and Mobb generates the brief, surfaces matched creators, and shows you their quoted rates before you hire anyone.',
    pills: ['AI campaign', 'Instant Creator Match', 'Pricing Transparency'],
    renderGraphic: () => (
      <div className="bg-white rounded-3xl p-5 sm:p-6 shadow-lg border border-gray-100 flex flex-col justify-between w-full h-[320px] overflow-hidden">
        {/* Campaign Header */}
        <div className="flex items-center gap-2">
          <div className="w-8 h-8 rounded-full bg-rose-500 text-white flex items-center justify-center shrink-0 shadow-xs">
            <Megaphone className="w-4 h-4" />
          </div>
          <span className="text-xs font-bold text-gray-900 tracking-wider uppercase">CAMPAIGN</span>
        </div>

        {/* Campaign Card Box */}
        <div className="bg-gray-50/90 rounded-2xl p-3.5 border border-gray-200/60 my-auto">
          <h4 className="font-bold text-gray-900 text-base mb-2">Summer Skincare Launch</h4>
          <div className="flex items-center gap-2 flex-wrap text-xs text-gray-600 font-medium">
            <span className="bg-white px-3 py-1 rounded-full border border-gray-200 shadow-2xs">Beauty</span>
            <span className="bg-white px-3 py-1 rounded-full border border-gray-200 shadow-2xs">UGC</span>
            <span className="bg-white px-3 py-1 rounded-full border border-gray-200 shadow-2xs">$300+</span>
          </div>
        </div>

        {/* Applicants Row */}
        <div>
          <div className="flex items-center justify-between mb-2">
            <span className="text-xs font-semibold text-gray-500 uppercase tracking-wide">Applicants</span>
            <span className="bg-rose-500 text-white text-[11px] font-bold px-2.5 py-0.5 rounded-full uppercase tracking-wider">
              12 NEW
            </span>
          </div>

          <div className="flex items-center gap-2">
            <div className="flex -space-x-2 overflow-hidden">
              <img className="inline-block h-8 w-8 rounded-full ring-2 ring-white object-cover" src={lettersOfTravelImg} alt="Grischa" />
              <img className="inline-block h-8 w-8 rounded-full ring-2 ring-white object-cover" src={paolaSantanaImg} alt="Paola" />
              <img className="inline-block h-8 w-8 rounded-full ring-2 ring-white object-cover" src={alicjaWerniewiczImg} alt="Alicja" />
              <img className="inline-block h-8 w-8 rounded-full ring-2 ring-white object-cover" src={marimiqadzzeImg} alt="Mariam" />
              <img className="inline-block h-8 w-8 rounded-full ring-2 ring-white object-cover" src={joanneBladesImg} alt="Joanne" />
            </div>
            <span className="text-xs font-semibold text-gray-500 ml-1">+7 more</span>
          </div>
        </div>
      </div>
    ),
  },
  {
    id: '03',
    number: '03',
    tabLabel: 'Order Management',
    title: 'Agree on Deliverables Before Any Money Moves.',
    description: 'Negotiate directly with Creators, agree on deliverables and usage rights, and get everything confirmed before the order starts. Expectations are clear on both sides before you commit.',
    pills: ['Negotiate before committing', 'Deliverable alignment', 'Centralized Platform Communication'],
    renderGraphic: () => (
      <div className="bg-white rounded-3xl p-5 shadow-lg border border-gray-100 flex flex-col justify-between w-full h-[320px] overflow-hidden">
        {/* Chat Profile Header */}
        <div className="flex items-center gap-2.5 pb-2.5 border-b border-gray-100 shrink-0">
          <img
            src={oliviaPezzenteImg}
            alt="Olivia Pezzente"
            className="w-8 h-8 rounded-full object-cover ring-1 ring-gray-200"
          />
          <div>
            <div className="font-bold text-gray-900 text-xs">Olivia Pezzente (@oliviapezzente)</div>
            <div className="text-[10px] text-emerald-600 font-medium flex items-center gap-1">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-500" />
              <span>Active now</span>
            </div>
          </div>
        </div>

        {/* Chat Message Thread */}
        <div className="space-y-2 py-1 text-xs my-auto">
          <div className="bg-gray-100/90 text-gray-800 rounded-2xl rounded-tl-xs px-3.5 py-2 max-w-[88%] font-normal">
            Hi! Love the brief — can we extend usage rights to 90 days?
          </div>

          <div className="bg-gray-900 text-white rounded-2xl rounded-tr-xs px-3.5 py-2 max-w-[88%] ml-auto font-normal">
            Works for us. Locking it into the order.
          </div>

          <div className="bg-gray-100/90 text-gray-800 rounded-2xl rounded-tl-xs px-3.5 py-2 max-w-[88%] font-normal">
            Perfect. Delivering by the 18th.
          </div>

          {/* Status Confirmation Pill */}
          <div className="bg-rose-50 text-rose-700 border border-rose-200/60 rounded-xl px-3 py-1.5 flex items-center gap-1.5 text-[11px] font-semibold w-fit mt-1">
            <Check className="w-3.5 h-3.5 text-rose-600 stroke-[3]" />
            <span>Iris accepted your order</span>
          </div>
        </div>
      </div>
    ),
  },
  {
    id: '04',
    number: '04',
    tabLabel: 'Global Payments',
    title: 'Only Pay When the Work Is Done.',
    description: 'Funds stay in escrow until you approve the content. Once you do, payouts and tax forms to 150 countries are handled automatically.',
    pills: ['Pay after approval', 'Automated tax docs', 'Payments to 150 countries'],
    renderGraphic: () => (
      <div className="bg-white rounded-3xl p-5 sm:p-6 shadow-lg border border-gray-100 flex flex-col justify-between w-full h-[320px] overflow-hidden">
        {/* Order Meta Header */}
        <div>
          <div className="flex items-center justify-between mb-1">
            <span className="text-[10px] font-bold text-gray-400 tracking-wider uppercase">ORDER #48201</span>
            <div className="flex gap-1.5">
              <span className="bg-emerald-50 text-emerald-700 text-[10px] font-semibold px-2 py-0.5 rounded-full">In escrow</span>
              <span className="bg-indigo-50 text-indigo-700 text-[10px] font-semibold px-2 py-0.5 rounded-full">In-progress</span>
            </div>
          </div>

          <div className="font-bold text-gray-900 text-xs sm:text-sm">Mason Park · Fitness Creator</div>
          <div className="text-gray-900 font-extrabold text-base sm:text-lg mt-0.5 mb-2">
            $150 <span className="text-xs font-normal text-gray-500">· 📸 1 Instagram Reel (60s)</span>
          </div>
        </div>

        {/* Escrow Banner */}
        <div className="bg-gray-50 rounded-xl p-3 border border-gray-200/60 my-1">
          <p className="text-xs text-gray-700 font-medium">You have 1 hour to accept or decline this order.</p>
          <a href="#extend" onClick={(e) => e.preventDefault()} className="text-[11px] font-semibold text-gray-500 underline mt-0.5 block hover:text-gray-900">
            Request Extension
          </a>
        </div>

        {/* Action Buttons */}
        <div className="space-y-1.5 shrink-0">
          <button className="w-full bg-gray-900 text-white font-semibold text-xs py-2 rounded-xl shadow-xs hover:bg-black transition-colors">
            Mark Order Complete
          </button>
          <button className="w-full bg-gray-100 text-gray-700 font-semibold text-xs py-2 rounded-xl border border-gray-200 hover:bg-gray-200 transition-colors">
            Request Revision
          </button>
        </div>
      </div>
    ),
  },
  {
    id: '05',
    number: '05',
    tabLabel: 'Reporting',
    title: 'Know Exactly How Each Piece of Content Performs.',
    description: 'See reach, engagement, and ROI across every creator, updated in real time. Say goodbye to messy spreadsheets and manual tracking.',
    pills: ['Real-time results', 'Content tracked automatically', 'Post-level Analytics'],
    renderGraphic: () => (
      <div className="bg-white rounded-3xl p-5 sm:p-6 shadow-lg border border-gray-100 flex flex-col justify-between w-full h-[320px] overflow-hidden">
        {/* Reach Metric */}
        <div className="flex items-start justify-between mb-1">
          <div>
            <div className="text-[10px] font-bold text-gray-400 tracking-wider uppercase">REACH (30D)</div>
            <div className="text-2xl font-extrabold text-gray-900">2.4M</div>
          </div>
          <span className="bg-emerald-50 text-emerald-600 text-xs font-bold px-2.5 py-1 rounded-full flex items-center gap-1">
            ↑ 34%
          </span>
        </div>

        {/* SVG Sparkline / Area Chart */}
        <div className="w-full h-20 my-1">
          <svg className="w-full h-full" viewBox="0 0 300 80" preserveAspectRatio="none">
            <defs>
              <linearGradient id="chartGrad" x1="0" y1="0" x2="0" y2="1">
                <stop offset="0%" stopColor="#f43f5e" stopOpacity="0.35" />
                <stop offset="100%" stopColor="#f43f5e" stopOpacity="0.0" />
              </linearGradient>
            </defs>
            <path
              d="M 0,60 Q 50,45 100,55 T 200,20 T 300,10 L 300,80 L 0,80 Z"
              fill="url(#chartGrad)"
            />
            <path
              d="M 0,60 Q 50,45 100,55 T 200,20 T 300,10"
              fill="none"
              stroke="#f43f5e"
              strokeWidth="3"
              strokeLinecap="round"
            />
          </svg>
        </div>

        {/* Metric Cards Row */}
        <div className="grid grid-cols-3 gap-2 pt-2 border-t border-gray-100 text-center shrink-0">
          <div className="bg-gray-50 rounded-xl p-2">
            <div className="font-extrabold text-gray-900 text-xs sm:text-sm">58K</div>
            <div className="text-[10px] text-gray-500 font-medium">Likes</div>
          </div>
          <div className="bg-gray-50 rounded-xl p-2">
            <div className="font-extrabold text-gray-900 text-xs sm:text-sm">4.8%</div>
            <div className="text-[10px] text-gray-500 font-medium">ER</div>
          </div>
          <div className="bg-gray-50 rounded-xl p-2">
            <div className="font-extrabold text-gray-900 text-xs sm:text-sm">$0.08</div>
            <div className="text-[10px] text-gray-500 font-medium">CPM</div>
          </div>
        </div>
      </div>
    ),
  },
  {
    id: '06',
    number: '06',
    tabLabel: 'Team Workspace',
    title: 'Invite Your Team to Collaborate.',
    description: 'Give your team visibility into every campaign. Assign briefs, route content for approval, and manage payments together from one shared workspace.',
    pills: ['Full campaign visibility', 'Centralized team workspace', 'Built for Teams of all Sizes'],
    renderGraphic: () => (
      <div className="bg-white rounded-3xl p-5 sm:p-6 shadow-lg border border-gray-100 flex flex-col justify-between w-full h-[320px] overflow-hidden">
        <div>
          <div className="flex items-center justify-between mb-2">
            <span className="font-bold text-gray-900 text-xs sm:text-sm">Aurelia workspace</span>
            <span className="text-[11px] text-gray-400 font-medium">5 members</span>
          </div>

          <div className="space-y-1.5">
            <div className="flex items-center justify-between bg-gray-50/80 p-2 rounded-xl border border-gray-100">
              <div className="flex items-center gap-2">
                <div className="w-6 h-6 rounded-full bg-rose-500 text-white font-bold text-[10px] flex items-center justify-center">M</div>
                <div>
                  <div className="text-[11px] font-bold text-gray-900">Maya Lin</div>
                  <div className="text-[9px] text-gray-400">Owner</div>
                </div>
              </div>
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-500" />
            </div>

            <div className="flex items-center justify-between bg-gray-50/80 p-2 rounded-xl border border-gray-100">
              <div className="flex items-center gap-2">
                <div className="w-6 h-6 rounded-full bg-purple-600 text-white font-bold text-[10px] flex items-center justify-center">D</div>
                <div>
                  <div className="text-[11px] font-bold text-gray-900">Dana Obi</div>
                  <div className="text-[9px] text-gray-400">Reviewer</div>
                </div>
              </div>
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-500" />
            </div>

            <div className="flex items-center justify-between bg-gray-50/80 p-2 rounded-xl border border-gray-100">
              <div className="flex items-center gap-2">
                <div className="w-6 h-6 rounded-full bg-blue-500 text-white font-bold text-[10px] flex items-center justify-center">J</div>
                <div>
                  <div className="text-[11px] font-bold text-gray-900">Jonah Reyes</div>
                  <div className="text-[9px] text-gray-400">Approver</div>
                </div>
              </div>
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-500" />
            </div>

            <div className="flex items-center justify-between bg-gray-50/80 p-2 rounded-xl border border-gray-100">
              <div className="flex items-center gap-2">
                <div className="w-6 h-6 rounded-full bg-amber-500 text-white font-bold text-[10px] flex items-center justify-center">P</div>
                <div>
                  <div className="text-[11px] font-bold text-gray-900">Priya Shah</div>
                  <div className="text-[9px] text-gray-400">Billing</div>
                </div>
              </div>
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-500" />
            </div>
          </div>
        </div>

        <button className="w-full mt-2 bg-rose-50 text-rose-700 font-bold text-xs py-2 rounded-xl hover:bg-rose-100 transition-colors flex items-center justify-center gap-1 shrink-0">
          + Invite teammate
        </button>
      </div>
    ),
  },
  {
    id: '07',
    number: '07',
    tabLabel: 'Creator CRM',
    title: 'Manage Every Creator in One Place.',
    description: 'Already working with Creators outside Mobb? Invite them and run the same briefs, payments, and tracking alongside your marketplace hires. One roster. Full visibility.',
    pills: ['Full creator roster', 'Unified Workflow', 'All in one view'],
    renderGraphic: () => (
      <div className="bg-white rounded-3xl p-5 sm:p-6 shadow-lg border border-gray-100 flex flex-col justify-between w-full h-[320px] overflow-hidden">
        <div>
          <div className="font-bold text-gray-900 text-xs sm:text-sm mb-2">Your creator roster</div>

          {/* Filter Pills */}
          <div className="flex gap-1.5 mb-3 text-[10px] font-semibold">
            <span className="bg-gray-900 text-white px-2 py-0.5 rounded-full">All · 28</span>
            <span className="bg-gray-100 text-gray-600 px-2 py-0.5 rounded-full">Marketplace · 18</span>
            <span className="bg-rose-50 text-rose-600 px-2 py-0.5 rounded-full">Off-platform · 10</span>
          </div>

          {/* Roster Items */}
          <div className="space-y-1.5 text-xs">
            <div className="flex items-center justify-between py-1 border-b border-gray-100">
              <span className="font-bold text-gray-900 text-[11px]">Ava Calderon</span>
              <div className="flex items-center gap-1.5">
                <span className="bg-indigo-50 text-indigo-700 text-[9px] font-medium px-1.5 py-0.5 rounded-md">Marketplace</span>
                <span className="font-bold text-gray-700 text-[11px]">4.8%</span>
              </div>
            </div>

            <div className="flex items-center justify-between py-1 border-b border-gray-100">
              <span className="font-bold text-gray-900 text-[11px]">Theo Nakamura</span>
              <div className="flex items-center gap-1.5">
                <span className="bg-rose-50 text-rose-700 text-[9px] font-medium px-1.5 py-0.5 rounded-md">Off-platform</span>
                <span className="font-bold text-gray-700 text-[11px]">3.9%</span>
              </div>
            </div>

            <div className="flex items-center justify-between py-1 border-b border-gray-100">
              <span className="font-bold text-gray-900 text-[11px]">Naomi Bell</span>
              <div className="flex items-center gap-1.5">
                <span className="bg-indigo-50 text-indigo-700 text-[9px] font-medium px-1.5 py-0.5 rounded-md">Marketplace</span>
                <span className="font-bold text-gray-700 text-[11px]">7.1%</span>
              </div>
            </div>

            <div className="flex items-center justify-between py-1">
              <span className="font-bold text-gray-900 text-[11px]">Kai Reyes</span>
              <div className="flex items-center gap-1.5">
                <span className="bg-rose-50 text-rose-700 text-[9px] font-medium px-1.5 py-0.5 rounded-md">Off-platform</span>
                <span className="font-bold text-gray-700 text-[11px]">8.3%</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    ),
  },
];

export const WorkflowSection: React.FC = () => {
  const [activeStepId, setActiveStepId] = useState<string>('01');

  const activeStep = WORKFLOW_STEPS.find((s) => s.id === activeStepId) || WORKFLOW_STEPS[0];

  return (
    <section className="w-full pt-10 sm:pt-14 pb-6 sm:pb-8 bg-white">
      {/* Outer Container matching search bar max-w-[1080px] */}
      <div className="w-full max-w-[1080px] mx-auto px-4 sm:px-6 lg:px-0">

        {/* Section Heading */}
        <h2 className="section-title text-center mb-8 sm:mb-10">
          Everything in One Workflow
        </h2>

        {/* DESKTOP VIEW: Numbered Navigation Pill Bar + Single Lavender Card Canvas */}
        <div className="hidden lg:block">
          {/* Navigation Pill Bar */}
          <div className="w-full flex justify-center mb-8 sm:mb-10 px-2">
            <div className="bg-[#2d2f34] rounded-full p-1.5 flex items-center justify-center gap-1 overflow-x-auto no-scrollbar max-w-full shadow-inner border border-white/5">
              {WORKFLOW_STEPS.map((step) => {
                const isActive = step.id === activeStepId;
                return (
                  <button
                    key={step.id}
                    onClick={() => setActiveStepId(step.id)}
                    className={`flex items-center gap-2 px-3.5 py-2 rounded-full transition-all duration-200 shrink-0 select-none text-[13px] whitespace-nowrap ${isActive
                      ? 'bg-white text-gray-900 font-semibold shadow-xs ring-1 ring-black/5'
                      : 'text-gray-300 hover:text-white font-normal hover:bg-white/5'
                      }`}
                  >
                    <span
                      className={`w-4.5 h-4.5 rounded-full flex items-center justify-center text-[10px] font-bold shrink-0 ${isActive
                        ? 'bg-[#e05285] text-white'
                        : 'bg-[#43464e] text-gray-300'
                        }`}
                    >
                      {step.number}
                    </span>
                    <span>{step.tabLabel}</span>
                  </button>
                );
              })}
            </div>
          </div>

          {/* Main Desktop Card Canvas (Light Lavender Box) */}
          <div className="w-full max-w-[1080px] mx-auto bg-[#dcdffb] rounded-[32px] p-10 md:p-12 shadow-sm transition-all duration-300 min-h-[480px] flex items-center">
            <div className="grid grid-cols-12 gap-10 md:gap-12 items-center w-full">
              {/* Left Content Column */}
              <div className="col-span-7 flex flex-col justify-center">
                <h3 className="text-3xl md:text-4xl font-semibold text-gray-900 tracking-tight leading-[1.15] mb-4">
                  {activeStep.title}
                </h3>
                <p className="text-gray-700 text-base leading-relaxed mb-8 max-w-xl font-normal">
                  {activeStep.description}
                </p>
                <div className="flex flex-wrap gap-2.5">
                  {activeStep.pills.map((pill, idx) => (
                    <div
                      key={idx}
                      className="bg-[#edeefd]/90 text-gray-900 text-sm font-semibold px-3.5 py-1.5 rounded-full flex items-center gap-2 border border-indigo-200/50 shadow-2xs"
                    >
                      <span className="w-2 h-2 rounded-full bg-[#e05285] shrink-0" />
                      <span>{pill}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Right Graphic Mockup Column */}
              <div className="col-span-5 w-full">
                {activeStep.renderGraphic()}
              </div>
            </div>
          </div>
        </div>

        {/* MOBILE & TABLET VIEW: Vertical Accordion List (lg:hidden) */}
        <div className="lg:hidden flex flex-col gap-3.5 w-full max-w-[1080px] mx-auto">
          {WORKFLOW_STEPS.map((step) => {
            const isExpanded = activeStepId === step.id;
            return (
              <div
                key={step.id}
                className="rounded-2xl sm:rounded-3xl overflow-hidden border border-gray-200/80 bg-white shadow-xs transition-all duration-200"
              >
                {/* Accordion Header */}
                <button
                  onClick={() => setActiveStepId(isExpanded ? '' : step.id)}
                  className={`w-full flex items-center justify-between p-4 sm:p-5 text-left transition-colors duration-200 ${isExpanded
                    ? 'bg-[#23252a] text-white'
                    : 'bg-[#2d2f34] text-white hover:bg-[#23252a]'
                    }`}
                >
                  <div className="flex items-center gap-3">
                    <span
                      className={`w-6 h-6 sm:w-7 sm:h-7 rounded-full flex items-center justify-center text-xs font-bold shrink-0 ${isExpanded ? 'bg-[#e05285] text-white' : 'bg-[#43464e] text-gray-300'
                        }`}
                    >
                      {step.number}
                    </span>
                    <span className="font-bold text-sm sm:text-base tracking-tight">{step.tabLabel}</span>
                  </div>
                  <ChevronDown
                    className={`w-5 h-5 text-gray-300 transition-transform duration-300 shrink-0 ${isExpanded ? 'rotate-180 text-white' : ''
                      }`}
                  />
                </button>

                {/* Accordion Body with Smooth Motion Animation */}
                <AnimatePresence initial={false}>
                  {isExpanded && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3, ease: 'easeInOut' }}
                      className="overflow-hidden"
                    >
                      <div className="bg-[#dcdffb] p-5 sm:p-8 flex flex-col gap-6 border-t border-white/20">
                        <div>
                          <h3 className="text-xl sm:text-2xl font-semibold text-gray-900 tracking-tight leading-snug mb-3">
                            {step.title}
                          </h3>
                          <p className="text-gray-700 text-xs sm:text-sm leading-relaxed mb-5 font-normal">
                            {step.description}
                          </p>

                          {/* Bullet Pills */}
                          <div className="flex flex-wrap gap-2">
                            {step.pills.map((pill, idx) => (
                              <div
                                key={idx}
                                className="bg-[#edeefd]/90 text-gray-900 text-xs font-semibold px-3 py-1 rounded-full flex items-center gap-1.5 border border-indigo-200/50 shadow-2xs"
                              >
                                <span className="w-1.5 h-1.5 rounded-full bg-[#e05285] shrink-0" />
                                <span>{pill}</span>
                              </div>
                            ))}
                          </div>
                        </div>

                        {/* Graphic Mockup */}
                        <div className="w-full">
                          {step.renderGraphic()}
                        </div>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};
