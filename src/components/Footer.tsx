interface FooterProps {
  onNavigate?: (page: 'home' | 'search-creators' | 'creator-chat' | 'performance-tracking' | 'campaign-briefs' | 'secure-global-payments' | 'team-workspace' | 'bring-manage-creators' | 'marketing-teams' | 'agencies' | 'founders' | 'ugc-for-ads' | 'influencer-marketing' | 'affiliate-marketing' | 'pricing' | 'for-creators' | 'case-studies') => void;
  onOpenSignUp?: (role?: 'creator' | 'brand') => void;
}

export function Footer({ onNavigate, onOpenSignUp }: FooterProps) {
  return (
    <footer className="w-full bg-[#18181b] text-gray-300 pt-16 pb-8 border-t border-neutral-800 overflow-hidden">
      {/* Top Section: Site Map & Social */}
      <div className="w-full max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-8 pb-12 border-b border-neutral-800">
          
          {/* Column 1: Resources */}
          <div>
            <h3 className="font-bold text-white text-xs tracking-wider uppercase mb-4">
              Resources
            </h3>
            <ul className="space-y-3 text-xs text-neutral-400">
              <li>
                <button onClick={() => onNavigate?.('home')} className="hover:text-accent-pink transition-colors cursor-pointer text-left">
                  Home
                </button>
              </li>
              <li>
                <button onClick={() => onNavigate?.('case-studies')} className="hover:text-accent-pink transition-colors cursor-pointer text-left">
                  Case Studies
                </button>
              </li>
              <li>
                <button onClick={() => onNavigate?.('pricing')} className="hover:text-accent-pink transition-colors cursor-pointer text-left">
                  Resource Hub
                </button>
              </li>
              <li>
                <button onClick={() => onNavigate?.('case-studies')} className="hover:text-accent-pink transition-colors cursor-pointer text-left">
                  2026 Trend Report
                </button>
              </li>
              <li>
                <button onClick={() => onNavigate?.('ugc-for-ads')} className="hover:text-accent-pink transition-colors cursor-pointer text-left">
                  TikTok & UGC Guide
                </button>
              </li>
            </ul>
          </div>

          {/* Column 2: Features */}
          <div>
            <h3 className="font-bold text-white text-xs tracking-wider uppercase mb-4">
              Features
            </h3>
            <ul className="space-y-3 text-xs text-neutral-400">
              <li>
                <button onClick={() => onNavigate?.('campaign-briefs')} className="hover:text-accent-pink transition-colors cursor-pointer text-left">
                  Campaign Briefs
                </button>
              </li>
              <li>
                <button onClick={() => onNavigate?.('performance-tracking')} className="hover:text-accent-pink transition-colors cursor-pointer text-left">
                  Performance Tracking
                </button>
              </li>
              <li>
                <button onClick={() => onNavigate?.('secure-global-payments')} className="hover:text-accent-pink transition-colors cursor-pointer text-left">
                  Secure Global Payments
                </button>
              </li>
              <li>
                <button onClick={() => onNavigate?.('team-workspace')} className="hover:text-accent-pink transition-colors cursor-pointer text-left">
                  Team Workspace
                </button>
              </li>
              <li>
                <button onClick={() => onNavigate?.('bring-manage-creators')} className="hover:text-accent-pink transition-colors cursor-pointer text-left">
                  Bring Your Creators
                </button>
              </li>
            </ul>
          </div>

          {/* Column 3: Use Cases */}
          <div>
            <h3 className="font-bold text-white text-xs tracking-wider uppercase mb-4">
              Use Cases
            </h3>
            <ul className="space-y-3 text-xs text-neutral-400">
              <li>
                <button onClick={() => onNavigate?.('ugc-for-ads')} className="hover:text-accent-pink transition-colors cursor-pointer text-left">
                  UGC for Ads
                </button>
              </li>
              <li>
                <button onClick={() => onNavigate?.('influencer-marketing')} className="hover:text-accent-pink transition-colors cursor-pointer text-left">
                  Influencer Marketing
                </button>
              </li>
              <li>
                <button onClick={() => onNavigate?.('affiliate-marketing')} className="hover:text-accent-pink transition-colors cursor-pointer text-left">
                  Affiliate Marketing
                </button>
              </li>
              <li>
                <button onClick={() => onNavigate?.('marketing-teams')} className="hover:text-accent-pink transition-colors cursor-pointer text-left">
                  Marketing Teams
                </button>
              </li>
              <li>
                <button onClick={() => onNavigate?.('founders')} className="hover:text-accent-pink transition-colors cursor-pointer text-left">
                  Founders & Startups
                </button>
              </li>
            </ul>
          </div>

          {/* Column 4: Platform */}
          <div>
            <h3 className="font-bold text-white text-xs tracking-wider uppercase mb-4">
              Platform
            </h3>
            <ul className="space-y-3 text-xs text-neutral-400">
              <li>
                <button onClick={() => onNavigate?.('search-creators')} className="hover:text-accent-pink transition-colors cursor-pointer text-left">
                  Find Influencers
                </button>
              </li>
              <li>
                <button onClick={() => onNavigate?.('for-creators')} className="hover:text-accent-pink transition-colors cursor-pointer text-left">
                  For Creators
                </button>
              </li>
              <li>
                <button onClick={() => onNavigate?.('pricing')} className="hover:text-accent-pink transition-colors cursor-pointer text-left">
                  Pricing & FAQ
                </button>
              </li>
              <li>
                <button onClick={() => onOpenSignUp?.('brand')} className="hover:text-accent-pink transition-colors cursor-pointer text-left">
                  Join as Brand
                </button>
              </li>
              <li>
                <button onClick={() => onOpenSignUp?.('creator')} className="hover:text-accent-pink transition-colors cursor-pointer text-left">
                  Join as Creator
                </button>
              </li>
            </ul>
          </div>

          {/* Column 5: Connect */}
          <div>
            <h3 className="font-bold text-white text-xs tracking-wider uppercase mb-4">
              Connect
            </h3>
            <ul className="space-y-3 text-xs text-neutral-400">
              <li>
                <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="hover:text-accent-pink transition-colors">
                  Instagram
                </a>
              </li>
              <li>
                <a href="https://tiktok.com" target="_blank" rel="noopener noreferrer" className="hover:text-accent-pink transition-colors">
                  TikTok
                </a>
              </li>
              <li>
                <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="hover:text-accent-pink transition-colors">
                  LinkedIn
                </a>
              </li>
              <li>
                <button onClick={() => onNavigate?.('pricing')} className="hover:text-accent-pink transition-colors cursor-pointer text-left">
                  Contact Support
                </button>
              </li>
            </ul>
          </div>

        </div>
      </div>

      {/* Massive 3X Scale Display Brand Wordmark (Full bleed across viewport) */}
      <div className="w-full select-none overflow-hidden text-center py-4 sm:py-6 my-2 flex items-center justify-center px-4 sm:px-8">
        <svg
          viewBox="0 0 850 210"
          className="w-full max-w-[1600px] h-auto pointer-events-none select-none"
          preserveAspectRatio="xMidYMid meet"
        >
          <text
            x="50%"
            y="75%"
            textAnchor="middle"
            fill="#9B87F5"
            fontFamily="system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif"
            fontWeight="900"
            fontSize="260"
            letterSpacing="-0.07em"
          >
            mobb
          </text>
        </svg>
      </div>

      {/* Bottom Metadata Bar */}
      <div className="w-full max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 pt-4 border-t border-neutral-800 text-[10px] tracking-widest text-neutral-500 uppercase font-semibold">
          <div className="flex items-center gap-4 flex-wrap justify-center sm:justify-start">
            <a href="#privacy" className="hover:text-white transition-colors">
              PRIVACY POLICY
            </a>
            <span className="text-neutral-800">|</span>
            <a href="#terms" className="hover:text-white transition-colors">
              TERMS & CONDITIONS
            </a>
            <span className="text-neutral-800">|</span>
            <a href="#sitemap" className="hover:text-white transition-colors">
              SITEMAP
            </a>
          </div>
          <div className="text-center sm:text-right">
            © COPYRIGHT {new Date().getFullYear()} MOBB INC. ALL RIGHTS RESERVED.
          </div>
        </div>
      </div>
    </footer>
  );
}
