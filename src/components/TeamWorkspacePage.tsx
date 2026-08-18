import React, { useState } from 'react';
import {
  Check,
  ArrowRight,
  ChevronDown,
  Users,
  CameraOff,
  LayoutGrid,
  History,
  Plus,
  Search,
  UserCheck,
  CheckCircle2,
  Shield,
  Layers,
  MessageSquare,
  Eye,
  GitBranch
} from 'lucide-react';
import { TrustedBrands } from './TrustedBrands';
import { WhatBrandsSay } from './WhatBrandsSay';
import {
  oliviaPezzenteImg,
  niloofarTaghaviImg,
  janarJuhkovImg,
  sofiaJensenImg,
  ivanaMarketinImg,
  stephenGImg,
} from '../avatars';

interface TeamWorkspacePageProps {
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

export const TeamWorkspacePage: React.FC<TeamWorkspacePageProps> = () => {
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  const toggleFaq = (index: number) => {
    setOpenFaq(openFaq === index ? null : index);
  };

  const faqItems = [
    {
      q: 'How many team members can I invite?',
      a: 'You can invite as many team members as needed depending on your plan tier. Teammates receive individual login credentials and immediate shared access to campaigns and creators.',
    },
    {
      q: 'Does each team member need their own subscription?',
      a: 'No! Team members are invited directly under your primary account workspace. You do not need to purchase separate individual subscriptions for every member on your team.',
    },
    {
      q: 'What can invited team members see?',
      a: 'Invited team members can view all active campaigns, creator shortlists, messaging history, order statuses, and deliverable reviews tied to your workspace account.',
    },
    {
      q: 'Can I control what different team members can access?',
      a: 'Yes, account owners and managers can assign roles (such as Owner, Admin, or Member) to manage permissions and keep sensitive payment or billing details restricted if desired.',
    },
    {
      q: 'What happens to campaign history if a team member leaves?',
      a: "All campaign history, creator communications, brief notes, and payment records stay safely stored in your organization's Mobb account forever.",
    },
    {
      q: 'Can agencies use team collaboration to manage multiple brands?',
      a: 'Yes! Agencies can set up team workspaces or invite clients and campaign managers to collaborate seamlessly across multiple creator initiatives.',
    },
    {
      q: 'Is team collaboration available on the free plan?',
      a: 'Basic team invitation features are available so you can test collaborating with your team right out of the box.',
    },
    {
      q: 'Can team members place orders and approve deliverables?',
      a: 'Yes, team members with manager or member privileges can review submitted content, request revisions, and approve deliverables to keep campaigns moving fast.',
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
              Run your entire creator program <span className="text-accent-pink">as a team.</span>
            </h1>

            <p className="text-gray-600 text-lg sm:text-xl leading-relaxed mb-8 max-w-xl font-normal">
              Invite team members to your Mobb account. Share campaigns, review creators together, and manage every collaboration without email threads or forwarded spreadsheets.
            </p>

            {/* Feature Badges */}
            <div className="flex flex-col sm:flex-row flex-wrap gap-2.5 mb-10">
              <div className="bg-gray-100/90 rounded-full px-3.5 py-1.5 text-xs font-medium text-gray-700 flex items-center gap-1.5">
                <span className="w-4 h-4 rounded-full bg-emerald-600 text-white flex items-center justify-center shrink-0">
                  <Check className="w-2.5 h-2.5 stroke-[3]" />
                </span>
                Invite teammates directly from your account
              </div>

              <div className="bg-gray-100/90 rounded-full px-3.5 py-1.5 text-xs font-medium text-gray-700 flex items-center gap-1.5">
                <span className="w-4 h-4 rounded-full bg-emerald-600 text-white flex items-center justify-center shrink-0">
                  <Check className="w-2.5 h-2.5 stroke-[3]" />
                </span>
                Shared access to campaigns, creators, and analytics
              </div>

              <div className="bg-gray-100/90 rounded-full px-3.5 py-1.5 text-xs font-medium text-gray-700 flex items-center gap-1.5">
                <span className="w-4 h-4 rounded-full bg-emerald-600 text-white flex items-center justify-center shrink-0">
                  <Check className="w-2.5 h-2.5 stroke-[3]" />
                </span>
                One operating system for your whole team
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

          {/* Right Hero Graphic - INVITE & COLLABORATE Card */}
          <div className="lg:col-span-6 flex justify-center lg:justify-end">
            <div className="w-full max-w-md bg-white rounded-[32px] shadow-[0_20px_50px_rgba(0,0,0,0.08)] p-7 sm:p-8 border border-gray-100 relative overflow-hidden">

              {/* Header Badge */}
              <div className="inline-flex items-center gap-2 mb-6 text-[#f43f5e] font-extrabold text-xs tracking-wider uppercase bg-rose-50 px-3 py-1.5 rounded-full">
                <span className="w-5 h-5 rounded-full bg-[#f43f5e] text-white flex items-center justify-center">
                  <Check className="w-3 h-3 stroke-[3]" />
                </span>
                INVITE & COLLABORATE
              </div>

              {/* Members List */}
              <div className="space-y-4 mb-8">

                {/* Member 1: Sophia */}
                <div className="flex items-center justify-between pb-3.5 border-b border-gray-100">
                  <div className="flex items-center gap-3">
                    <img
                      src={oliviaPezzenteImg}
                      alt="Sophia"
                      className="w-11 h-11 rounded-full object-cover shadow-sm"
                    />
                    <div>
                      <div className="font-bold text-gray-900 text-sm">Sophia</div>
                      <div className="text-xs text-gray-400 font-medium">Marketing Lead</div>
                    </div>
                  </div>
                  <span className="bg-[#38a169] text-white text-[11px] font-bold px-3 py-1 rounded-full shadow-xs">
                    Active
                  </span>
                </div>

                {/* Member 2: Jade */}
                <div className="flex items-center justify-between pb-3.5 border-b border-gray-100">
                  <div className="flex items-center gap-3">
                    <img
                      src={niloofarTaghaviImg}
                      alt="Jade"
                      className="w-11 h-11 rounded-full object-cover shadow-sm"
                    />
                    <div>
                      <div className="font-bold text-gray-900 text-sm">Jade</div>
                      <div className="text-xs text-gray-400 font-medium">Influencer Marketing Specialist</div>
                    </div>
                  </div>
                  <span className="bg-[#38a169] text-white text-[11px] font-bold px-3 py-1 rounded-full shadow-xs">
                    Active
                  </span>
                </div>

                {/* Member 3: Sam */}
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <img
                      src={janarJuhkovImg}
                      alt="Sam"
                      className="w-11 h-11 rounded-full object-cover shadow-sm"
                    />
                    <div>
                      <div className="font-bold text-gray-900 text-sm">Sam</div>
                      <div className="text-xs text-gray-400 font-medium">Influencer Marketing Specialist</div>
                    </div>
                  </div>
                  <span className="bg-[#ecc94b] text-white text-[11px] font-bold px-3 py-1 rounded-full shadow-xs">
                    Pending
                  </span>
                </div>

              </div>

              {/* Black Invite Member Button */}
              <button className="w-full bg-[#111827] hover:bg-black text-white font-bold py-3.5 px-4 rounded-xl text-sm transition-colors shadow-md cursor-pointer text-center">
                Invite Member
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
      {/* SECTION 3: ONE ACCOUNT. YOUR WHOLE TEAM.                      */}
      {/* ------------------------------------------------------------- */}
      <section className="max-w-[1240px] mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-24">
        <h2 style={sectionHeadingStyle} className="text-center mb-16 tracking-tight">
          One account. Your whole team.
        </h2>

        {/* 4 Value Prop Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">

          {/* Card 1: Same View For Everyone */}
          <div className="bg-gray-100/70 rounded-2xl p-6 flex flex-col justify-between border border-gray-200/50 hover:shadow-md transition-all">
            <div className="w-10 h-10 rounded-xl bg-white shadow-xs border border-gray-100 flex items-center justify-center mb-6 text-gray-900">
              <Users className="w-5 h-5 stroke-[2]" />
            </div>
            <div>
              <h3 className="font-bold text-gray-900 text-base mb-2">Same View For Everyone</h3>
              <p className="text-gray-500 text-xs sm:text-sm leading-relaxed">
                Every team member works from the same campaign view, not a forwarded Notion doc
              </p>
            </div>
          </div>

          {/* Card 2: No More Screenshots */}
          <div className="bg-gray-100/70 rounded-2xl p-6 flex flex-col justify-between border border-gray-200/50 hover:shadow-md transition-all">
            <div className="w-10 h-10 rounded-xl bg-white shadow-xs border border-gray-100 flex items-center justify-center mb-6 text-gray-900">
              <CameraOff className="w-5 h-5 stroke-[2]" />
            </div>
            <div>
              <h3 className="font-bold text-gray-900 text-base mb-2">No More Screenshots</h3>
              <p className="text-gray-500 text-xs sm:text-sm leading-relaxed">
                No more emailing screenshots of creator profiles to get sign-off
              </p>
            </div>
          </div>

          {/* Card 3: One Place To Manage */}
          <div className="bg-gray-100/70 rounded-2xl p-6 flex flex-col justify-between border border-gray-200/50 hover:shadow-md transition-all">
            <div className="w-10 h-10 rounded-xl bg-white shadow-xs border border-gray-100 flex items-center justify-center mb-6 text-gray-900">
              <LayoutGrid className="w-5 h-5 stroke-[2]" />
            </div>
            <div>
              <h3 className="font-bold text-gray-900 text-base mb-2">One Place To Manage</h3>
              <p className="text-gray-500 text-xs sm:text-sm leading-relaxed">
                Manager review, creator approvals, and payment oversight happen in one place
              </p>
            </div>
          </div>

          {/* Card 4: History That Lasts */}
          <div className="bg-gray-100/70 rounded-2xl p-6 flex flex-col justify-between border border-gray-200/50 hover:shadow-md transition-all">
            <div className="w-10 h-10 rounded-xl bg-white shadow-xs border border-gray-100 flex items-center justify-center mb-6 text-gray-900">
              <GitBranch className="w-5 h-5 stroke-[2]" />
            </div>
            <div>
              <h3 className="font-bold text-gray-900 text-base mb-2">History That Lasts</h3>
              <p className="text-gray-500 text-xs sm:text-sm leading-relaxed">
                Your creator program survives team changes because the system holds the history, not a person
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

        {/* ROW 1: Add Teammates To Your Account And Give Them Access To What They Need. */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">

          {/* Text Left */}
          <div className="lg:col-span-6 flex flex-col items-start text-left">
            <h2 style={sectionHeadingStyle} className="tracking-tight mb-6">
              Add Teammates To Your Account And Give Them Access To What They Need.
            </h2>
            <p className="text-gray-600 text-base sm:text-lg leading-relaxed font-normal">
              Invite team members directly from your Mobb account. Each person logs in with their own credentials and sees the campaigns, creators, and orders your account has active. No shared passwords. No forwarded login links. Everyone in the same place.
            </p>
          </div>

          {/* Graphic Right (Pink Background Container) */}
          <div className="lg:col-span-6 flex justify-center">
            <div className="w-full max-w-[480px] min-h-[340px] bg-[#fecdd3]/40 rounded-3xl p-6 sm:p-8 flex justify-center items-center">
              <div className="w-full max-w-md bg-white rounded-2xl shadow-xl border border-gray-100 p-5 space-y-4">

                {/* Header */}
                <div className="flex items-center justify-between border-b border-gray-100 pb-3">
                  <div>
                    <div className="text-sm font-extrabold text-gray-900">Your Team</div>
                    <div className="text-[11px] text-gray-400">Manage your team in one place</div>
                  </div>
                  <button className="bg-black text-white font-bold px-3 py-1.5 rounded-lg text-xs flex items-center gap-1 shadow-xs hover:bg-gray-800 transition-colors">
                    <Plus className="w-3.5 h-3.5" /> Invite Member
                  </button>
                </div>

                {/* Search Bar */}
                <div className="relative">
                  <Search className="w-3.5 h-3.5 text-gray-400 absolute left-3 top-2.5" />
                  <input
                    type="text"
                    readOnly
                    value="Search"
                    className="w-full bg-gray-50 border border-gray-200 rounded-lg pl-8 pr-3 py-1.5 text-xs text-gray-400 focus:outline-none"
                  />
                </div>

                {/* Team Members Table */}
                <div className="space-y-2 text-xs">
                  <div className="grid grid-cols-4 text-[10px] font-bold text-gray-400 px-1">
                    <span>Name</span>
                    <span>Status</span>
                    <span>Role</span>
                    <span className="truncate">Email</span>
                  </div>

                  <div className="grid grid-cols-4 items-center text-[11px] font-semibold text-gray-800 p-2 bg-gray-50/80 rounded-lg">
                    <div className="flex items-center gap-1.5 truncate">
                      <span className="w-2 h-2 rounded-full bg-pink-500 shrink-0"></span>
                      <span className="truncate">Mobb</span>
                    </div>
                    <span className="text-emerald-600 font-bold text-[10px] bg-emerald-50 px-1.5 py-0.5 rounded border border-emerald-100 inline-block w-fit">
                      Active
                    </span>
                    <span className="text-gray-500 font-normal">Owner</span>
                    <span className="text-gray-400 text-[10px] truncate">rebecca@mobb...</span>
                  </div>

                  <div className="grid grid-cols-4 items-center text-[11px] font-semibold text-gray-800 p-2 bg-gray-50/80 rounded-lg">
                    <div className="flex items-center gap-1.5 truncate">
                      <span className="w-2 h-2 rounded-full bg-indigo-500 shrink-0"></span>
                      <span className="truncate">Invited Member</span>
                    </div>
                    <span className="text-amber-600 font-bold text-[10px] bg-amber-50 px-1.5 py-0.5 rounded border border-amber-100 inline-block w-fit">
                      Pending
                    </span>
                    <span className="text-gray-500 font-normal">Member</span>
                    <span className="text-gray-400 text-[10px] truncate">thiago+test_invit...</span>
                  </div>
                </div>

              </div>
            </div>
          </div>

        </div>

        {/* ROW 2: Review Creators And Campaigns As A Team, Not In Separate Email Threads. */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">

          {/* Graphic Left (Indigo Background Container) */}
          <div className="lg:col-span-6 order-2 lg:order-1 flex justify-center">
            <div className="w-full max-w-[480px] min-h-[340px] bg-[#e0e7ff]/60 rounded-3xl p-6 sm:p-8 flex justify-center items-center">
              <div className="w-full max-w-md bg-white rounded-2xl shadow-xl border border-gray-100 p-5 space-y-4 text-xs">

                {/* Campaign Header Card */}
                <div className="bg-indigo-900 text-white p-3.5 rounded-xl space-y-2">
                  <div className="text-[10px] text-indigo-300 font-bold uppercase tracking-wider">Instagram Campaign</div>
                  <div className="font-black text-sm">Step into Comfort: Crocs Your Way!</div>

                  {/* Stats Row */}
                  <div className="grid grid-cols-4 gap-1 pt-1 text-center border-t border-indigo-800/80 text-[10px]">
                    <div>
                      <div className="font-extrabold text-white">28</div>
                      <div className="text-indigo-300 text-[9px]">Shortlisted</div>
                    </div>
                    <div>
                      <div className="font-extrabold text-white">29</div>
                      <div className="text-indigo-300 text-[9px]">In Review</div>
                    </div>
                    <div>
                      <div className="font-extrabold text-white">3</div>
                      <div className="text-indigo-300 text-[9px]">Approved</div>
                    </div>
                    <div>
                      <div className="font-extrabold text-emerald-400">$1,000</div>
                      <div className="text-indigo-300 text-[9px]">Budget</div>
                    </div>
                  </div>
                </div>

                {/* Team Collaboration Bar */}
                <div className="flex items-center justify-between p-2.5 bg-indigo-50 rounded-xl border border-indigo-100">
                  <div className="flex items-center gap-2">
                    <div className="flex -space-x-2">
                      <img src={sofiaJensenImg} className="w-6 h-6 rounded-full border-2 border-white object-cover" alt="Team" />
                      <img src={ivanaMarketinImg} className="w-6 h-6 rounded-full border-2 border-white object-cover" alt="Team" />
                      <img src={stephenGImg} className="w-6 h-6 rounded-full border-2 border-white object-cover" alt="Team" />
                    </div>
                    <span className="text-[10px] text-indigo-900 font-bold">3 teammates reviewing candidates</span>
                  </div>
                  <span className="text-[10px] text-indigo-600 font-extrabold">Active</span>
                </div>

              </div>
            </div>
          </div>

          {/* Text Right */}
          <div className="lg:col-span-6 flex flex-col items-start text-left order-1 lg:order-2">
            <h2 style={sectionHeadingStyle} className="tracking-tight mb-6">
              Review Creators And Campaigns As A Team, Not In Separate Email Threads.
            </h2>
            <p className="text-gray-600 text-base sm:text-lg leading-relaxed font-normal">
              Shortlisted creators are visible to everyone on your account. Campaign briefs, applications, and deliverables are shared automatically. Your team reviews together, surfaces feedback in one place, and moves to decisions faster.
            </p>
          </div>

        </div>

        {/* ROW 3: See Every Active Order, Campaign, And Creator Relationship Across Your Account. */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">

          {/* Text Left */}
          <div className="lg:col-span-6 flex flex-col items-start text-left">
            <h2 style={sectionHeadingStyle} className="tracking-tight mb-6">
              See Every Active Order, Campaign, And Creator Relationship Across Your Account.
            </h2>
            <p className="text-gray-600 text-base sm:text-lg leading-relaxed font-normal">
              Any team member with access can see all running campaigns, pending deliverables, and order statuses. Managers get full visibility without needing to ask for updates. Nothing lives in a DM or a personal inbox.
            </p>
          </div>

          {/* Graphic Right (Yellow Background Container) */}
          <div className="lg:col-span-6 flex justify-center">
            <div className="w-full max-w-[480px] min-h-[340px] bg-[#fef08a]/60 rounded-3xl p-6 sm:p-8 flex justify-center items-center relative overflow-hidden">
              <div className="w-full max-w-md bg-white rounded-2xl shadow-xl border border-gray-100 p-4 space-y-3 text-xs relative">

                {/* Simulated Cursors Overlay */}
                <div className="absolute top-10 right-12 z-20 bg-gray-900 text-white text-[10px] font-bold px-2.5 py-1 rounded-full shadow-lg flex items-center gap-1">
                  <span className="w-2 h-2 rounded-full bg-pink-400"></span>
                  Stella, Marketing Lead
                </div>

                <div className="absolute bottom-8 left-16 z-20 bg-rose-500 text-white text-[10px] font-bold px-2.5 py-1 rounded-full shadow-lg flex items-center gap-1">
                  <span className="w-2 h-2 rounded-full bg-white"></span>
                  Abell, Influencer Outreach
                </div>

                {/* Creator List */}
                <div className="p-2.5 bg-gray-50 rounded-xl flex items-center justify-between border border-gray-100">
                  <div className="font-bold text-gray-900 text-xs">Sarah Jenkins</div>
                  <span className="bg-emerald-100 text-emerald-800 text-[10px] font-bold px-2 py-0.5 rounded">Invite to campaign</span>
                </div>

                <div className="p-2.5 bg-gray-50 rounded-xl flex items-center justify-between border border-gray-100">
                  <div className="font-bold text-gray-900 text-xs">Michael Chen</div>
                  <span className="bg-gray-200 text-gray-700 text-[10px] font-bold px-2 py-0.5 rounded">View Profile</span>
                </div>

                <div className="p-2.5 bg-gray-50 rounded-xl flex items-center justify-between border border-gray-100">
                  <div className="font-bold text-gray-900 text-xs">Emily Rodriguez</div>
                  <span className="bg-emerald-100 text-emerald-800 text-[10px] font-bold px-2 py-0.5 rounded">Invite to campaign</span>
                </div>

                <div className="p-2.5 bg-gray-50 rounded-xl flex items-center justify-between border border-gray-100">
                  <div className="font-bold text-gray-900 text-xs">James Wilson</div>
                  <span className="bg-gray-200 text-gray-700 text-[10px] font-bold px-2 py-0.5 rounded">View Profile</span>
                </div>

              </div>
            </div>
          </div>

        </div>

        {/* ROW 4: Your Creator Program Does Not Depend On One Person. */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">

          {/* Graphic Left (Light Gray Background Container) */}
          <div className="lg:col-span-6 order-2 lg:order-1 flex justify-center">
            <div className="w-full max-w-[480px] min-h-[340px] bg-gray-200/70 rounded-3xl p-6 sm:p-8 flex justify-center items-center">
              <div className="w-full max-w-md bg-white rounded-2xl shadow-xl border border-gray-100 p-6 flex flex-col items-center justify-center space-y-6">

                {/* Central Account Hub Icon */}
                <div className="w-16 h-16 rounded-full bg-gray-900 text-white flex items-center justify-center shadow-lg border-4 border-gray-100">
                  <Users className="w-8 h-8" />
                </div>

                {/* Dashed Connecting Line */}
                <div className="w-full border-t-2 border-dashed border-gray-300 relative">
                  <span className="absolute -top-1.5 left-1/2 -translate-x-1/2 w-3 h-3 rounded-full bg-gray-400"></span>
                </div>

                {/* Team Avatars Node Row */}
                <div className="flex items-center justify-center gap-3">
                  <div className="w-9 h-9 rounded-full bg-rose-100 text-rose-700 font-extrabold text-xs flex items-center justify-center border border-rose-200 shadow-xs">
                    YH
                  </div>
                  <div className="w-9 h-9 rounded-full bg-indigo-100 text-indigo-700 font-extrabold text-xs flex items-center justify-center border border-indigo-200 shadow-xs">
                    SH
                  </div>
                  <div className="w-9 h-9 rounded-full bg-emerald-100 text-emerald-700 font-extrabold text-xs flex items-center justify-center border border-emerald-200 shadow-xs">
                    DL
                  </div>
                  <div className="w-9 h-9 rounded-full bg-amber-100 text-amber-700 font-extrabold text-xs flex items-center justify-center border border-amber-200 shadow-xs">
                    BC
                  </div>
                  <div className="w-9 h-9 rounded-full bg-purple-100 text-purple-700 font-extrabold text-xs flex items-center justify-center border border-purple-200 shadow-xs">
                    RS
                  </div>
                </div>

              </div>
            </div>
          </div>

          {/* Text Right */}
          <div className="lg:col-span-6 flex flex-col items-start text-left order-1 lg:order-2">
            <h2 style={sectionHeadingStyle} className="tracking-tight mb-6">
              Your Creator Program Does Not Depend On One Person.
            </h2>
            <p className="text-gray-600 text-base sm:text-lg leading-relaxed font-normal">
              Campaign history, creator relationships, messaging, and payment records are stored at the account level. When team members change, nothing is lost. New hires inherit the full context from day one.
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
          Questions about team collaboration on Mobb
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
                    className={`w-6 h-6 rounded-full flex items-center justify-center transition-transform duration-200 shrink-0 ${isOpen ? 'rotate-180 text-pink-600' : 'text-gray-400 group-hover:text-gray-600'
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
            Your creator program should run like a team operation.
          </h2>

          <p className="text-gray-400 text-sm sm:text-base max-w-xl mx-auto mb-8 leading-relaxed">
            Invite teammates. Share campaigns. Manage every creator relationship from one account. No forwarded threads, no siloed inboxes, no single point of failure.
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
