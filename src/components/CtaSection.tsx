import React from 'react';

export function CtaSection() {
  return (
    <section className="w-full py-6 sm:py-10 bg-white">
      {/* Container matching max-w-[1140px] */}
      <div className="w-full max-w-[1140px] mx-auto px-4 sm:px-6 lg:px-0">
        
        {/* Dark Container Card */}
        <div className="bg-[#2a2c30] rounded-[32px] sm:rounded-[40px] px-6 py-8 sm:px-10 sm:py-11 md:px-14 md:py-13 text-center flex flex-col items-center justify-center shadow-xl border border-gray-800 transition-all duration-300">
          
          {/* Main Headline */}
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-[46px] font-black text-white tracking-tight leading-[1.12] mb-3.5 max-w-3xl">
            Your Next Creator Collaboration <br className="hidden sm:inline" />
            is <span className="italic font-serif font-normal text-[#e05285] px-1">Three Minutes</span> away.
          </h2>

          {/* Subtitle Description */}
          <p className="text-gray-300 text-xs sm:text-sm md:text-base leading-relaxed mb-6 max-w-2xl font-normal">
            Search 1.1m+ vetted creators right now. See audience demographics, pricing, and engagement rate before you commit. Your first order is one search away.
          </p>

          {/* Action Button */}
          <div className="mb-6">
            <a
              href="#search"
              className="inline-flex items-center justify-center bg-white hover:bg-gray-100 text-gray-900 font-extrabold text-xs sm:text-sm px-7 py-3 rounded-2xl transition-all shadow-md active:scale-95"
            >
              Search Creators Free
            </a>
          </div>

          {/* Sub-features Footer */}
          <div className="flex items-center justify-center gap-4 sm:gap-8 text-xs text-gray-400 font-medium flex-wrap">
            <span>Free to start</span>
            <span className="hidden sm:inline text-gray-600">•</span>
            <span>1.1m+ vetted creators</span>
            <span className="hidden sm:inline text-gray-600">•</span>
            <span>Transparent creator fees</span>
          </div>

        </div>

      </div>
    </section>
  );
}
