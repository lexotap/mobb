import React from 'react';

export function Footer() {
  return (
    <footer className="w-full bg-[#18181b] text-gray-300 pt-16 pb-8 border-t border-neutral-800 overflow-hidden">
      {/* Top Section: Site Map & Social */}
      <div className="w-full max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 md:grid-cols-5 gap-8 pb-12 border-b border-neutral-800">
          
          {/* Column 1: Resources */}
          <div>
            <h3 className="font-bold text-white text-xs tracking-wider uppercase mb-4">
              Resources
            </h3>
            <ul className="space-y-3 text-xs text-neutral-400">
              <li>
                <a href="#blog" className="hover:text-accent-pink transition-colors">
                  Blog
                </a>
              </li>
              <li>
                <a href="#resource-hub" className="hover:text-accent-pink transition-colors">
                  Resource Hub
                </a>
              </li>
              <li>
                <a href="#ebook" className="hover:text-accent-pink transition-colors">
                  TikTok Ebook
                </a>
              </li>
              <li>
                <a href="#report" className="hover:text-accent-pink transition-colors">
                  2026 Report
                </a>
              </li>
              <li>
                <a href="#case-studies" className="hover:text-accent-pink transition-colors">
                  Case Studies
                </a>
              </li>
            </ul>
          </div>

          {/* Column 2: Tools */}
          <div>
            <h3 className="font-bold text-white text-xs tracking-wider uppercase mb-4">
              Tools
            </h3>
            <ul className="space-y-3 text-xs text-neutral-400">
              <li>
                <a href="#price-calculator" className="hover:text-accent-pink transition-colors">
                  Price Calculator
                </a>
              </li>
              <li>
                <a href="#ig-fake-checker" className="hover:text-accent-pink transition-colors">
                  IG Fake Checker
                </a>
              </li>
              <li>
                <a href="#tt-fake-checker" className="hover:text-accent-pink transition-colors">
                  TikTok Fake Checker
                </a>
              </li>
              <li>
                <a href="#ig-er-calculator" className="hover:text-accent-pink transition-colors">
                  IG ER Calculator
                </a>
              </li>
              <li>
                <a href="#brief-template" className="hover:text-accent-pink transition-colors">
                  Brief Template
                </a>
              </li>
            </ul>
          </div>

          {/* Column 3: Discover */}
          <div>
            <h3 className="font-bold text-white text-xs tracking-wider uppercase mb-4">
              Discover
            </h3>
            <ul className="space-y-3 text-xs text-neutral-400">
              <li>
                <a href="#find-influencers" className="hover:text-accent-pink transition-colors">
                  Find Influencers
                </a>
              </li>
              <li>
                <a href="#top-influencers" className="hover:text-accent-pink transition-colors">
                  Top Influencers
                </a>
              </li>
              <li>
                <a href="#search-influencers" className="hover:text-accent-pink transition-colors">
                  Search Influencers
                </a>
              </li>
              <li>
                <a href="#buy-shoutouts" className="hover:text-accent-pink transition-colors">
                  Buy Shoutouts
                </a>
              </li>
            </ul>
          </div>

          {/* Column 4: Support */}
          <div>
            <h3 className="font-bold text-white text-xs tracking-wider uppercase mb-4">
              Support
            </h3>
            <ul className="space-y-3 text-xs text-neutral-400">
              <li>
                <a href="#contact" className="hover:text-accent-pink transition-colors">
                  Contact Us
                </a>
              </li>
              <li>
                <a href="#how-it-works" className="hover:text-accent-pink transition-colors">
                  How It Works
                </a>
              </li>
              <li>
                <a href="#faq" className="hover:text-accent-pink transition-colors">
                  FAQ
                </a>
              </li>
            </ul>
          </div>

          {/* Column 5: Social */}
          <div>
            <h3 className="font-bold text-white text-xs tracking-wider uppercase mb-4">
              Social
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
            fill="#FF385C"
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
