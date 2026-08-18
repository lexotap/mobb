import React, { useState } from 'react';
import {
  CheckCircle,
  ArrowRight,
  MessageSquare,
  FileText,
  LayoutGrid,
  Workflow,
  Plus,
  Minus,
  Send,
  Paperclip,
  Check,
  UserPlus
} from 'lucide-react';
import { TrustedBrands } from './TrustedBrands';
import { WhatBrandsSay } from './WhatBrandsSay';
import { sofiaJensenImg } from '../avatars';

interface CreatorChatPageProps {
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

export const CreatorChatPage: React.FC<CreatorChatPageProps> = ({ onNavigateHome }) => {
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  const toggleFaq = (index: number) => {
    setOpenFaq(openFaq === index ? null : index);
  };

  const faqList = [
    {
      q: 'Can I message a creator before placing an order?',
      a: 'Yes! You can send direct messages to any creator on Mobb before placing an order to discuss deliverables, custom requirements, timelines, or pricing.'
    },
    {
      q: 'What is Negotiate a Package?',
      a: 'Negotiate a Package lets brands and creators propose, adjust, and confirm custom rates and deliverables directly within the messaging thread before an official order is created.'
    },
    {
      q: 'Can I negotiate usage rights and revision terms on the platform?',
      a: 'Yes. You can specify usage rights (e.g., 30-day or 60-day paid ad usage), revision terms, and content exclusivity inside the platform so everything is on record before payment.'
    },
    {
      q: 'Can my team see creator conversations?',
      a: 'Yes. Everyone in your team workspace can view messages, proposed packages, and agreed terms so team review and approvals happen in one shared inbox.'
    },
    {
      q: 'Do I need to use email to communicate with creators?',
      a: 'No. Everything from initial inquiry, package negotiation, content draft submissions, revision requests, and final payment happens seamlessly inside Mobb.'
    },
    {
      q: 'What platforms does Mobb cover?',
      a: 'Mobb supports creator collaborations across Instagram, TikTok, YouTube, and User-Generated Content (UGC) campaigns.'
    }
  ];

  return (
    <div className="bg-white text-gray-900 font-sans min-h-screen">
      
      {/* ------------------------------------------------------------- */}
      {/* SECTION 1: HERO SECTION                                       */}
      {/* ------------------------------------------------------------- */}
      <section className="max-w-[1240px] mx-auto px-4 sm:px-6 lg:px-8 pt-10 pb-16 lg:pt-16 lg:pb-24">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Left Hero Content */}
          <div className="lg:col-span-6 flex flex-col items-start text-left">
            <h1 style={heroHeadingStyle} className="mb-6 tracking-tight">
              Negotiate, confirm, and hire. All in one place.
            </h1>

            <p className="text-gray-600 text-lg sm:text-xl font-normal leading-relaxed mb-8 max-w-xl">
              Message creators directly inside Mobb. Every conversation, every order, one place.
            </p>

            {/* Feature badges */}
            <div className="flex flex-col sm:flex-row flex-wrap items-start sm:items-center gap-3 mb-10">
              <span className="inline-flex items-center gap-2 px-3.5 py-2 rounded-full bg-gray-100/80 text-xs sm:text-sm font-semibold text-gray-700">
                <CheckCircle className="w-4 h-4 text-emerald-500 shrink-0" />
                Negotiate before any money moves
              </span>
              <span className="inline-flex items-center gap-2 px-3.5 py-2 rounded-full bg-gray-100/80 text-xs sm:text-sm font-semibold text-gray-700">
                <CheckCircle className="w-4 h-4 text-emerald-500 shrink-0" />
                Every conversation stored and on record
              </span>
              <span className="inline-flex items-center gap-2 px-3.5 py-2 rounded-full bg-gray-100/80 text-xs sm:text-sm font-semibold text-gray-700">
                <CheckCircle className="w-4 h-4 text-emerald-500 shrink-0" />
                One place for messages, orders, and payments
              </span>
            </div>

            {/* CTA Button */}
            <button className="inline-flex items-center gap-2 px-7 py-4 rounded-xl bg-[#22252a] hover:bg-black text-white font-bold text-base transition-all shadow-lg hover:shadow-xl group cursor-pointer">
              Get started free
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </button>
          </div>

          {/* Right Visual Card */}
          <div className="lg:col-span-6 flex justify-center">
            <div className="w-full max-w-md bg-white rounded-3xl p-6 sm:p-8 shadow-2xl border border-gray-100/80 relative">
              
              {/* Header Badge */}
              <div className="flex items-center gap-2.5 mb-8">
                <div className="w-8 h-8 rounded-full bg-[#f43f5e] flex items-center justify-center text-white shrink-0">
                  <MessageSquare className="w-4 h-4 fill-white" />
                </div>
                <span className="font-extrabold text-sm text-[#0F172A] uppercase tracking-wider">
                  CHAT & NEGOTIATE
                </span>
              </div>

              {/* Chat Messages */}
              <div className="space-y-4">
                
                {/* Message 1 (Left / Creator proposal) */}
                <div className="flex justify-start">
                  <div className="bg-gray-100 text-gray-800 rounded-2xl rounded-tl-sm px-4 py-3 text-sm font-medium max-w-[85%]">
                    Could we do $600 + 2 reels?
                  </div>
                </div>

                {/* Message 2 (Right / Brand counter proposal) */}
                <div className="flex justify-end">
                  <div className="bg-[#111827] text-white rounded-2xl rounded-tr-sm px-4 py-3 text-sm font-medium max-w-[85%] shadow-sm">
                    How about $500 + 2 reels + 1 story?
                  </div>
                </div>

                {/* Counter Sent Pill Badge */}
                <div className="py-1">
                  <div className="bg-pink-50/90 border border-dashed border-pink-300 rounded-2xl p-3 text-center text-xs font-bold text-[#f43f5e] tracking-wide">
                    <span className="line-through text-gray-400 mr-1.5 font-normal">$600</span>
                    <span>$500 · Counter sent</span>
                  </div>
                </div>

                {/* Message 3 (Left / Agreement) */}
                <div className="flex justify-start">
                  <div className="bg-gray-100 text-gray-800 rounded-2xl rounded-tl-sm px-4 py-3 text-sm font-medium max-w-[85%] flex items-center gap-1.5">
                    Deal — let's do it 🤝
                  </div>
                </div>

              </div>
            </div>
          </div>

        </div>
      </section>

      {/* ------------------------------------------------------------- */}
      {/* SECTION 2: TRUSTED BY LOGOS BAR                               */}
      {/* ------------------------------------------------------------- */}
      <TrustedBrands />

      {/* ------------------------------------------------------------- */}
      {/* SECTION 3: ONE PLATFORM FOR EVERY CONVERSATION                 */}
      {/* ------------------------------------------------------------- */}
      <section className="max-w-[1240px] mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-24">
        <h2 style={sectionHeadingStyle} className="text-center mb-16 tracking-tight max-w-4xl mx-auto">
          One platform for every conversation, campaign, and order
        </h2>

        {/* 4 Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          
          {/* Card 1 */}
          <div className="bg-gray-50/70 border border-gray-100 rounded-2xl p-6 flex flex-col items-start hover:shadow-md transition-all">
            <div className="w-10 h-10 rounded-xl bg-white border border-gray-200 flex items-center justify-center text-gray-700 mb-6 shadow-xs">
              <MessageSquare className="w-5 h-5" />
            </div>
            <h3 className="font-bold text-[#0F172A] text-lg mb-2 leading-snug">
              Conversation tied to the order
            </h3>
            <p className="text-gray-500 text-sm leading-relaxed font-normal">
              Every creator conversation is tied to the order it becomes, not lost in a separate inbox
            </p>
          </div>

          {/* Card 2 */}
          <div className="bg-gray-50/70 border border-gray-100 rounded-2xl p-6 flex flex-col items-start hover:shadow-md transition-all">
            <div className="w-10 h-10 rounded-xl bg-white border border-gray-200 flex items-center justify-center text-gray-700 mb-6 shadow-xs">
              <FileText className="w-5 h-5" />
            </div>
            <h3 className="font-bold text-[#0F172A] text-lg mb-2 leading-snug">
              Terms on the record
            </h3>
            <p className="text-gray-500 text-sm leading-relaxed font-normal">
              Agreed terms are on record the moment you place the order, with no reconciliation needed
            </p>
          </div>

          {/* Card 3 */}
          <div className="bg-gray-50/70 border border-gray-100 rounded-2xl p-6 flex flex-col items-start hover:shadow-md transition-all">
            <div className="w-10 h-10 rounded-xl bg-white border border-gray-200 flex items-center justify-center text-gray-700 mb-6 shadow-xs">
              <LayoutGrid className="w-5 h-5" />
            </div>
            <h3 className="font-bold text-[#0F172A] text-lg mb-2 leading-snug">
              Your team in the loop
            </h3>
            <p className="text-gray-500 text-sm leading-relaxed font-normal">
              Your team reviews conversations and approves orders in the same place, without switching tools
            </p>
          </div>

          {/* Card 4 */}
          <div className="bg-gray-50/70 border border-gray-100 rounded-2xl p-6 flex flex-col items-start hover:shadow-md transition-all">
            <div className="w-10 h-10 rounded-xl bg-white border border-gray-200 flex items-center justify-center text-gray-700 mb-6 shadow-xs">
              <ArrowRight className="w-5 h-5" />
            </div>
            <h3 className="font-bold text-[#0F172A] text-lg mb-2 leading-snug">
              Straight into your workflow
            </h3>
            <p className="text-gray-500 text-sm leading-relaxed font-normal">
              Every negotiation feeds directly into your campaign workflow, from brief to payment
            </p>
          </div>

        </div>

        {/* Center CTA Button */}
        <div className="flex justify-center">
          <button className="inline-flex items-center gap-2 px-7 py-3.5 rounded-xl bg-[#22252a] hover:bg-black text-white font-bold text-sm transition-all shadow-md group cursor-pointer">
            Get started free
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </button>
        </div>
      </section>

      {/* ------------------------------------------------------------- */}
      {/* SECTION 4: DEEP DIVE FEATURES (4 ALTERNATING SECTIONS)        */}
      {/* ------------------------------------------------------------- */}
      <section className="max-w-[1240px] mx-auto px-4 sm:px-6 lg:px-8 py-12 space-y-24">
        
        {/* Feature 1: Talk To Creators Before You Commit To Anything */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Text Left */}
          <div className="lg:col-span-6 flex flex-col items-start text-left">
            <h2 style={sectionHeadingStyle} className="tracking-tight mb-6">
              Talk To Creators Before You Commit To Anything.
            </h2>
            <p className="text-gray-600 text-base sm:text-lg leading-relaxed font-normal">
              Stay on top of every creator relationship without leaving the platform. Send a direct message to any creator on Mobb before placing an order. All conversations are stored on the platform and tied to the creator and the collaboration that follows. No inbox switching, no lost context.
            </p>
          </div>

          {/* Graphic Right (Pink Background Container) */}
          <div className="lg:col-span-6 flex justify-center">
            <div className="w-full max-w-[480px] min-h-[340px] bg-[#fecdd3]/40 rounded-3xl p-6 sm:p-8 flex justify-center items-center">
              <div className="w-full max-w-sm bg-white rounded-2xl shadow-xl border border-gray-100 overflow-hidden text-xs">
                
                {/* Chat Top Bar */}
                <div className="px-3.5 py-2.5 border-b border-gray-100 flex items-center gap-3">
                  <div className="w-7 h-7 rounded-full bg-rose-200 overflow-hidden shrink-0">
                    <img
                      src={sofiaJensenImg}
                      alt="creator profile"
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div>
                    <div className="font-bold text-gray-900 text-xs">@sophiastyle</div>
                    <div className="text-[10px] text-gray-400 font-normal">133k Followers · Fashion & Lifestyle</div>
                  </div>
                </div>

                {/* Chat Message List */}
                <div className="p-3 space-y-2 bg-gray-50/30">
                  <div className="flex justify-start">
                    <div className="bg-gray-100 text-gray-800 rounded-xl rounded-tl-xs px-3 py-2 text-[11px] leading-snug max-w-[88%]">
                      Hi! We're launching a new skincare serum next month and would love to collaborate!
                    </div>
                  </div>

                  <div className="flex justify-end">
                    <div className="bg-[#111827] text-white rounded-xl rounded-tr-xs px-3 py-2 text-[11px] leading-snug max-w-[88%]">
                      Absolutely! Can you share more details about the product and your timeline?
                    </div>
                  </div>

                  <div className="flex justify-start">
                    <div className="bg-gray-100 text-gray-800 rounded-xl rounded-tl-xs px-3 py-2 text-[11px] leading-snug max-w-[88%]">
                      It's a Vitamin C serum. We'd need 1 Instagram Reel + Story in July.
                    </div>
                  </div>

                  <div className="flex justify-end">
                    <div className="bg-[#111827] text-white rounded-xl rounded-tr-xs px-3 py-2 text-[11px] leading-snug max-w-[88%]">
                      That works for me! Let me send over a custom package.
                    </div>
                  </div>
                </div>

                {/* Chat Input Bar */}
                <div className="px-3 py-2 border-t border-gray-100 bg-white flex items-center justify-between text-gray-400">
                  <span className="text-[11px]">Type a message...</span>
                  <div className="flex items-center gap-2">
                    <Paperclip className="w-3.5 h-3.5 cursor-pointer" />
                    <Send className="w-3.5 h-3.5 text-black cursor-pointer" />
                  </div>
                </div>

              </div>
            </div>
          </div>

        </div>


        {/* Feature 2: Negotiate A Custom Package That Works For Both Sides */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Graphic Left (Purple/Indigo Background Container) */}
          <div className="lg:col-span-6 order-2 lg:order-1 flex justify-center">
            <div className="w-full max-w-[480px] min-h-[340px] bg-[#e0e7ff]/60 rounded-3xl p-6 sm:p-8 flex justify-center items-center">
              <div className="w-full max-w-sm bg-white rounded-2xl shadow-xl border border-gray-100 p-5 space-y-3">
                
                {/* Chat bubbles */}
                <div className="flex justify-start">
                  <div className="bg-gray-100 text-gray-800 rounded-2xl rounded-tl-xs px-3.5 py-2.5 text-xs font-medium">
                    Could we do $600 for 2 reels?
                  </div>
                </div>

                <div className="flex justify-end">
                  <div className="bg-[#111827] text-white rounded-2xl rounded-tr-xs px-3.5 py-2.5 text-xs font-medium">
                    How about $500 for 2 reels + 1 story?
                  </div>
                </div>

                <div className="bg-pink-50/90 border border-dashed border-pink-300 rounded-2xl p-2.5 text-center text-xs font-bold text-[#f43f5e]">
                  <span className="line-through text-gray-400 mr-1.5 font-normal">$600</span>
                  <span>$500 · Counter sent</span>
                </div>

                <div className="flex justify-start">
                  <div className="bg-gray-100 text-gray-800 rounded-2xl rounded-tl-xs px-3.5 py-2.5 text-xs font-medium flex items-center gap-1">
                    Deal — let's do it 🤝
                  </div>
                </div>

              </div>
            </div>
          </div>

          {/* Text Right */}
          <div className="lg:col-span-6 flex flex-col items-start text-left order-1 lg:order-2">
            <h2 style={sectionHeadingStyle} className="tracking-tight mb-6">
              Negotiate A Custom Package That Works For Both Sides.
            </h2>
            <p className="text-gray-600 text-base sm:text-lg leading-relaxed font-normal">
              Align on terms that work for both sides before committing. Every campaign has unique requirements. Propose a custom rate and deliverable set directly from a creator's profile to match your brief exactly. Agreed terms are confirmed on the platform before the order is placed and carry through automatically to approval and payment.
            </p>
          </div>

        </div>


        {/* Feature 3: Lock In Rates, Timelines, And Usage Rights */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Text Left */}
          <div className="lg:col-span-6 flex flex-col items-start text-left">
            <h2 style={sectionHeadingStyle} className="tracking-tight mb-6">
              Lock In Rates, Timelines, And Usage Rights Before The Order Starts.
            </h2>
            <p className="text-gray-600 text-base sm:text-lg leading-relaxed font-normal">
              Put every deliverable, timeline, and usage right on record. Before any order begins, confirm requirements, revision terms, timelines, and usage rights inside the platform. Mobb keeps everything on record from the moment you agree, removing ambiguity at the approval and payment stage.
            </p>
          </div>

          {/* Graphic Right (Yellow/Amber Background Container) */}
          <div className="lg:col-span-6 flex justify-center">
            <div className="w-full max-w-[480px] min-h-[340px] bg-[#fef08a]/60 rounded-3xl p-6 sm:p-8 flex justify-center items-center">
              <div className="w-full max-w-sm bg-white rounded-2xl shadow-xl border border-gray-100 p-5 space-y-3 text-xs">
                
                <div className="font-extrabold text-xs sm:text-sm text-gray-900 border-b border-gray-100 pb-2.5">
                  Order terms — @sophiastyle
                </div>

                <div className="space-y-2.5 pt-0.5">
                  <div className="flex justify-between items-center text-gray-600">
                    <span className="font-medium text-gray-500">Deliverables</span>
                    <span className="font-bold text-gray-900">1 Instagram Reel + 3 Stories</span>
                  </div>

                  <div className="flex justify-between items-center text-gray-600">
                    <span className="font-medium text-gray-500">Rate</span>
                    <span className="font-bold text-gray-900">$800 USD</span>
                  </div>

                  <div className="flex justify-between items-center text-gray-600">
                    <span className="font-medium text-gray-500">Timeline</span>
                    <span className="font-bold text-gray-900">July 7–14, 2025</span>
                  </div>

                  <div className="flex justify-between items-center text-gray-600">
                    <span className="font-medium text-gray-500">Usage rights</span>
                    <span className="font-bold text-gray-900">60-day paid ads usage</span>
                  </div>
                </div>

                <button className="w-full mt-3 bg-[#111827] hover:bg-black text-white font-bold py-2.5 px-4 rounded-xl text-xs flex items-center justify-center gap-1.5 transition-colors cursor-pointer">
                  Confirm and place order
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>

              </div>
            </div>
          </div>

        </div>


        {/* Feature 4: Get Your Team Aligned Before You Place The Order */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Graphic Left (Light Gray Background Container) */}
          <div className="lg:col-span-6 order-2 lg:order-1 flex justify-center">
            <div className="w-full max-w-[480px] min-h-[340px] bg-gray-200/70 rounded-3xl p-6 sm:p-8 flex justify-center items-center">
              <div className="w-full max-w-sm bg-white rounded-2xl shadow-xl border border-gray-100 p-5 text-xs">
                
                {/* Search / Header */}
                <div className="flex items-center justify-between gap-3 mb-3">
                  <div className="bg-gray-100 px-3 py-1.5 rounded-lg text-gray-400 text-[11px] flex-1">
                    Search...
                  </div>
                  <button className="bg-black text-white px-2.5 py-1.5 rounded-lg font-bold text-[10px] flex items-center gap-1 shrink-0">
                    <Plus className="w-3 h-3" />
                    Invite Member
                  </button>
                </div>

                {/* Team Table */}
                <div className="space-y-1.5">
                  <div className="grid grid-cols-4 gap-2 text-[10px] font-bold text-gray-400 uppercase tracking-wider pb-1 border-b border-gray-100">
                    <span>Name</span>
                    <span>Status</span>
                    <span>Role</span>
                    <span>Email</span>
                  </div>

                  {/* Member 1 */}
                  <div className="grid grid-cols-4 gap-2 items-center py-1.5 border-b border-gray-50 text-[11px]">
                    <div className="flex items-center gap-1 font-bold text-gray-900">
                      <div className="w-4 h-4 rounded-full bg-pink-100 text-pink-600 flex items-center justify-center text-[8px] font-bold">
                        O
                      </div>
                      OreoLitter
                    </div>
                    <div>
                      <span className="px-1.5 py-0.5 rounded-full bg-emerald-50 text-emerald-600 font-semibold text-[9px]">
                        • Active
                      </span>
                    </div>
                    <div>
                      <span className="px-1.5 py-0.5 rounded-full bg-rose-50 text-rose-600 font-semibold text-[9px]">
                        • Owner
                      </span>
                    </div>
                    <div className="text-gray-400 truncate text-[10px]">rebecca@...</div>
                  </div>

                  {/* Member 2 */}
                  <div className="grid grid-cols-4 gap-2 items-center py-1.5 text-[11px]">
                    <div className="flex items-center gap-1 font-bold text-gray-900">
                      <div className="w-4 h-4 rounded-full bg-blue-100 text-blue-600 flex items-center justify-center text-[8px] font-bold">
                        S
                      </div>
                      Stephanie
                    </div>
                    <div>
                      <span className="px-1.5 py-0.5 rounded-full bg-amber-50 text-amber-600 font-semibold text-[9px]">
                        • Pending
                      </span>
                    </div>
                    <div>
                      <span className="px-1.5 py-0.5 rounded-full bg-blue-50 text-blue-600 font-semibold text-[9px]">
                        • Member
                      </span>
                    </div>
                    <div className="text-gray-400 truncate text-[10px]">stephanie@...</div>
                  </div>
                </div>

              </div>
            </div>
          </div>

          {/* Text Right */}
          <div className="lg:col-span-6 flex flex-col items-start text-left order-1 lg:order-2">
            <h2 style={sectionHeadingStyle} className="tracking-tight mb-6">
              Get Your Team Aligned Before You Place The Order.
            </h2>
            <p className="text-gray-600 text-base sm:text-lg leading-relaxed font-normal">
              Keep your whole team in the loop before the order is confirmed. Invite team members to review conversations and agreed terms before any order is placed. Everyone sees the same information in the same place. Collaboration management happens inside the operating system, not across forwarded email threads.
            </p>
          </div>

        </div>

      </section>

      {/* ------------------------------------------------------------- */}
      {/* SECTION 5: WHAT BRANDS SAY                                    */}
      {/* ------------------------------------------------------------- */}
      <WhatBrandsSay />

      {/* ------------------------------------------------------------- */}
      {/* SECTION 6: FAQ ACCORDION                                      */}
      {/* ------------------------------------------------------------- */}
      <section className="max-w-[880px] mx-auto px-4 sm:px-6 py-16 sm:py-24">
        <h2 style={sectionHeadingStyle} className="text-center mb-12 tracking-tight">
          Questions about messaging and negotiating with creators
        </h2>

        <div className="space-y-4">
          {faqList.map((faq, index) => {
            const isOpen = openFaq === index;
            return (
              <div
                key={index}
                className="border border-gray-200 rounded-2xl overflow-hidden transition-all bg-white"
              >
                <button
                  onClick={() => toggleFaq(index)}
                  className="w-full text-left p-6 flex items-center justify-between gap-4 cursor-pointer hover:bg-gray-50/50 transition-colors"
                >
                  <span className="font-bold text-[#0F172A] text-lg sm:text-xl">
                    {faq.q}
                  </span>
                  <div className="w-8 h-8 rounded-full bg-gray-100 flex items-center justify-center shrink-0 text-gray-600">
                    {isOpen ? <Minus className="w-4 h-4" /> : <Plus className="w-4 h-4" />}
                  </div>
                </button>

                {isOpen && (
                  <div className="px-6 pb-6 pt-0 text-gray-600 text-base leading-relaxed border-t border-gray-100/60 mt-2">
                    {faq.a}
                  </div>
                )}
              </div>
            );
          })}
        </div>

        <div className="text-center mt-10">
          <a
            href="#contact"
            className="inline-flex items-center gap-1.5 text-sm font-semibold text-gray-500 hover:text-gray-900 transition-colors"
          >
            Have another question? Contact sales
            <ArrowRight className="w-4 h-4" />
          </a>
        </div>
      </section>

      {/* ------------------------------------------------------------- */}
      {/* SECTION 7: FINAL DARK CALL TO ACTION CARD                     */}
      {/* ------------------------------------------------------------- */}
      <section className="max-w-[1140px] mx-auto px-4 sm:px-6 lg:px-0 my-16">
        <div className="bg-[#22252a] rounded-[32px] sm:rounded-[40px] p-8 sm:p-12 lg:p-16 text-center text-white shadow-2xl relative overflow-hidden">
          
          <h2 style={darkSectionHeadingStyle} className="max-w-2xl mx-auto mb-4 tracking-tight">
            Every conversation, every order, one place.
          </h2>

          <p className="text-gray-300 text-base sm:text-lg max-w-xl mx-auto mb-8 font-normal leading-relaxed">
            From the first message to the final payment, every collaboration lives inside the same operating system. Nothing gets lost. Nothing leaves the platform.
          </p>

          <button className="inline-flex items-center justify-center px-8 py-4 rounded-2xl bg-white hover:bg-gray-100 text-gray-900 font-extrabold text-base transition-all shadow-lg hover:shadow-xl cursor-pointer">
            Get started free
          </button>
        </div>
      </section>

    </div>
  );
};
