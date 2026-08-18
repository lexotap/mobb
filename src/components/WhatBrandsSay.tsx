import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ChevronLeft, ChevronRight, ArrowUpRight } from 'lucide-react';
import {
  marriottBonvoyImg,
  milleInsideCoverImg,
  omnipetInsideCoverImg,
} from '../casestudies';

interface CaseStudySlide {
  id: string;
  brandName: string;
  mediaType: 'colorCard' | 'image';
  mediaBgColor?: string;
  mediaContent: React.ReactNode;
  quote: string;
  authorName?: string;
  authorTitle: string;
}

const CASE_STUDIES: CaseStudySlide[] = [
  {
    id: 'marriott',
    brandName: 'Marriott Bonvoy',
    mediaType: 'image',
    mediaContent: (
      <div className="relative w-full h-full">
        <img
          src={marriottBonvoyImg}
          alt="Marriott Bonvoy Campaign"
          className="w-full h-full object-cover object-center"
        />
        {/* Badge */}
        <div className="absolute bottom-3 left-3 bg-black/60 backdrop-blur-md text-white text-[10px] px-2.5 py-1 rounded-full font-medium flex items-center gap-1.5 border border-white/20">
          <span className="w-2 h-2 rounded-full bg-rose-500 animate-pulse" />
          Marriott Bonvoy UGC
        </div>
      </div>
    ),
    quote:
      '“We were glad to be partnering with Mobb on this campaign, which resulted in a strong impact in the targeted markets. Again, their motivation and results-oriented approach has been really appreciated. We look forward to working with Mobb in the future.”',
    authorName: 'Cecilia Giraud',
    authorTitle: 'Director Content Marketing, EMEA @ Marriott',
  },
  {
    id: 'mille',
    brandName: 'Mille Restaurant & Cafe',
    mediaType: 'image',
    mediaContent: (
      <div className="relative w-full h-full">
        <img
          src={milleInsideCoverImg}
          alt="Mille Restaurant Launch"
          className="w-full h-full object-cover object-center"
        />
        {/* Badge */}
        <div className="absolute bottom-3 left-3 bg-black/60 backdrop-blur-md text-white text-[10px] px-2.5 py-1 rounded-full font-medium flex items-center gap-1.5 border border-white/20">
          <span className="w-2 h-2 rounded-full bg-amber-500 animate-pulse" />
          Mille European Launch
        </div>
      </div>
    ),
    quote:
      '“Bujou Studio turned our restaurant launch into a cultural event. Their PR, photography, and influencer strategy filled our tables from day one and tripled our revenue expectations.”',
    authorName: 'Managing Partner',
    authorTitle: 'Mille Restaurant & Cafe',
  },
  {
    id: 'omni',
    brandName: 'Omni Pet',
    mediaType: 'image',
    mediaContent: (
      <div className="relative w-full h-full">
        <img
          src={omnipetInsideCoverImg}
          alt="Omni Pet Nutrition"
          className="w-full h-full object-cover object-center"
        />
        {/* Badge */}
        <div className="absolute bottom-3 left-3 bg-black/60 backdrop-blur-md text-white text-[10px] px-2.5 py-1 rounded-full font-medium flex items-center gap-1.5 border border-white/20">
          <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
          Omni Pet DTC Growth
        </div>
      </div>
    ),
    quote:
      '“Favoured transformed our subscriber journey from initial curiosity into long-term customer loyalty. The 4.2x LTV growth accelerated our expansion.”',
    authorName: 'Co-Founder & CEO',
    authorTitle: 'Omni Pet',
  },
];

export function WhatBrandsSay() {
  const [activeIndex, setActiveIndex] = useState(0);

  const handleNext = () => {
    setActiveIndex((prev) => (prev + 1) % CASE_STUDIES.length);
  };

  const handlePrev = () => {
    setActiveIndex((prev) => (prev - 1 + CASE_STUDIES.length) % CASE_STUDIES.length);
  };

  const currentSlide = CASE_STUDIES[activeIndex];

  return (
    <section className="w-full py-12 sm:py-16 bg-white">
      <div className="w-full max-w-[1140px] mx-auto px-4 sm:px-6 lg:px-0">

        {/* Section Title */}
        <h2 className="text-3xl sm:text-4xl font-bold text-center mb-8 sm:mb-10 text-[#0F172A] tracking-tight">
          What Brands Say
        </h2>

        {/* Main Card Container */}
        <div className="max-w-5xl mx-auto bg-[#F4F4F5] sm:bg-[#F8FAFC] rounded-3xl p-6 sm:p-8 lg:p-12 shadow-xs border border-gray-100 min-h-[380px] sm:min-h-[360px] flex flex-col justify-center transition-all duration-300">
          <AnimatePresence mode="wait">
            <motion.div
              key={currentSlide.id}
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              transition={{ duration: 0.35, ease: 'easeInOut' }}
              className="grid grid-cols-1 md:grid-cols-12 gap-6 md:gap-8 items-center"
            >

              {/* Left Column (Visual / Logo / Media Slot) */}
              <div className="md:col-span-4 w-full">
                <div className={`w-full h-[200px] sm:h-[220px] rounded-2xl overflow-hidden shadow-sm flex items-center justify-center ${currentSlide.mediaBgColor || ''}`}>
                  {currentSlide.mediaContent}
                </div>
              </div>

              {/* Right Column (Testimonial & Details) */}
              <div className="md:col-span-8 flex flex-col justify-center">

                {/* Quote Text block with Pink Accent Line */}
                <div className="border-l-2 border-pink-400 pl-5 sm:pl-6 my-1">
                  <p className="text-base sm:text-lg text-slate-700 leading-relaxed mb-5 font-normal">
                    {currentSlide.quote}
                  </p>

                  {/* Author Bio */}
                  <div className="text-xs sm:text-sm text-slate-900">
                    {currentSlide.authorName && (
                      <div className="text-slate-500 font-medium text-xs mb-0.5">
                        {currentSlide.authorName}
                      </div>
                    )}
                    <div className="font-semibold text-slate-900">
                      {currentSlide.authorTitle}
                    </div>
                  </div>
                </div>

                {/* CTA Button */}
                <div className="mt-6">
                  <a
                    href="#case-study"
                    className="bg-[#2B2B2B] hover:bg-black text-white text-xs sm:text-sm px-5 py-2.5 rounded-xl font-medium inline-flex items-center gap-2 transition-all shadow-xs active:scale-95"
                  >
                    <ArrowUpRight className="w-4 h-4" />
                    <span>View Case Study</span>
                  </a>
                </div>

              </div>

            </motion.div>
          </AnimatePresence>
        </div>

        {/* Carousel Navigation Controls */}
        <div className="flex items-center justify-center gap-3 mt-6">
          <button
            onClick={handlePrev}
            aria-label="Previous review"
            className="w-10 h-10 rounded-full border border-slate-300 flex items-center justify-center text-slate-700 hover:bg-slate-100 hover:border-slate-400 transition-all active:scale-90"
          >
            <ChevronLeft className="w-5 h-5" />
          </button>

          <button
            onClick={handleNext}
            aria-label="Next review"
            className="w-10 h-10 rounded-full border border-slate-300 flex items-center justify-center text-slate-700 hover:bg-slate-100 hover:border-slate-400 transition-all active:scale-90"
          >
            <ChevronRight className="w-5 h-5" />
          </button>
        </div>

      </div>
    </section>
  );
}
