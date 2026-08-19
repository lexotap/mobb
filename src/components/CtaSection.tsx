interface CtaSectionProps {
  onNavigate?: (page: 'home' | 'search-creators' | 'creator-chat' | 'performance-tracking' | 'campaign-briefs' | 'secure-global-payments' | 'team-workspace' | 'bring-manage-creators' | 'marketing-teams' | 'agencies' | 'founders' | 'ugc-for-ads' | 'influencer-marketing' | 'affiliate-marketing' | 'pricing' | 'for-creators' | 'case-studies') => void;
}

export function CtaSection({ onNavigate }: CtaSectionProps) {
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
          <p className="text-gray-400 text-sm sm:text-base max-w-xl mx-auto mb-8 leading-relaxed">
            Search 500,000+ vetted creators right now. See audience demographics, pricing, and engagement rate before you commit. Your first order is one search away.
          </p>

          <div className="flex items-center justify-center">
            <button
              onClick={() => onNavigate?.('search-creators')}
              className="inline-flex items-center justify-center bg-white hover:bg-gray-100 text-gray-900 font-bold px-8 py-3.5 rounded-xl transition-all duration-200 shadow-lg text-sm cursor-pointer"
            >
              Search Creators
            </button>
          </div>

          <div className="mt-8 flex flex-wrap items-center justify-center gap-6 text-xs text-gray-400 font-medium">
            <span>500,000+ vetted creators</span>
            <span className="hidden sm:inline text-gray-600">•</span>
            <span>Transparent creator fees</span>
          </div>

        </div>

      </div>
    </section>
  );
}
