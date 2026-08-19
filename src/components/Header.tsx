import React, { useState } from 'react';
import {
  ChevronDown,
  MessageSquareHeart,
  Menu,
  X,
  Search,
  MessageSquare,
  BarChart2,
  FileText,
  CreditCard,
  Users,
  UserPlus,
  Building2,
  Rocket,
  Award,
  Video,
  Megaphone,
  Link2
} from 'lucide-react';

interface HeaderProps {
  currentPage?: string;
  onNavigate?: (page: 'home' | 'search-creators' | 'creator-chat' | 'performance-tracking' | 'campaign-briefs' | 'secure-global-payments' | 'team-workspace' | 'bring-manage-creators' | 'marketing-teams' | 'agencies' | 'founders' | 'ugc-for-ads' | 'influencer-marketing' | 'affiliate-marketing' | 'pricing' | 'for-creators' | 'case-studies') => void;
  onOpenSignUp?: (role?: 'creator' | 'brand') => void;
  onOpenLogin?: () => void;
}

export const Header: React.FC<HeaderProps> = ({
  currentPage = 'search-creators',
  onNavigate,
  onOpenSignUp,
  onOpenLogin
}) => {
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const toggleDropdown = (name: string) => {
    setActiveDropdown((prev) => (prev === name ? null : name));
  };

  const handleNav = (page: 'home' | 'search-creators' | 'creator-chat' | 'performance-tracking' | 'campaign-briefs' | 'secure-global-payments' | 'team-workspace' | 'bring-manage-creators' | 'marketing-teams' | 'agencies' | 'founders' | 'ugc-for-ads' | 'influencer-marketing' | 'affiliate-marketing' | 'pricing' | 'for-creators' | 'case-studies', e?: React.MouseEvent) => {
    if (e) e.preventDefault();
    setActiveDropdown(null);
    setMobileMenuOpen(false);
    if (onNavigate) {
      onNavigate(page);
    }
  };

  return (
    <header className="w-full px-4 sm:px-6 md:px-8 lg:px-12 py-2.5 sm:py-3 flex items-center justify-between bg-white text-gray-900 font-sans z-50 relative border-b border-gray-100 lg:border-b-0">
      {/* Brand Logo */}
      <div className="flex items-center gap-8">
        <a
          href="#"
          onClick={(e) => handleNav('home', e)}
          className="flex items-center gap-1.5 group cursor-pointer"
        >
          <span className="text-2xl font-extrabold tracking-tight text-gray-900 font-sans">
            mobb
          </span>
          <div className="w-6 h-6 rounded-full bg-[#9B87F5]/15 flex items-center justify-center text-[#9B87F5] group-hover:scale-110 transition-transform">
            <MessageSquareHeart className="w-4 h-4 fill-[#9B87F5]" />
          </div>
        </a>

        {/* Navigation Links (Desktop - Large screens only) */}
        <nav className="hidden lg:flex items-center gap-6 text-[15px] font-medium text-gray-700">
          {/* Features Dropdown */}
          <div
            className="relative"
            onMouseEnter={() => setActiveDropdown('features')}
            onMouseLeave={() => setActiveDropdown(null)}
          >
            <button
              onClick={() => toggleDropdown('features')}
              className={`flex items-center gap-1 hover:text-gray-900 py-2 transition-colors cursor-pointer ${
                activeDropdown === 'features' || currentPage === 'search-creators' ? 'text-[#f43f5e] font-semibold' : ''
              }`}
            >
              Features
              <ChevronDown
                className={`w-4 h-4 transition-transform ${
                  activeDropdown === 'features' ? 'rotate-180 text-[#f43f5e]' : 'text-gray-400'
                }`}
              />
            </button>

            {/* Mega Dropdown Menu matching screenshot */}
            {activeDropdown === 'features' && (
              <div className="absolute top-full -left-4 mt-1 w-[680px] bg-white rounded-3xl shadow-2xl border border-gray-100 p-5 z-50 animate-fadeIn text-sm">
                <div className="grid grid-cols-2 gap-x-6 gap-y-2">
                  
                  {/* Left Column Item 1: Search Creators */}
                  <button
                    onClick={(e) => handleNav('search-creators', e)}
                    className="w-full text-left flex items-start gap-3.5 p-3 rounded-2xl hover:bg-pink-50/60 transition-all group cursor-pointer"
                  >
                    <div className="w-10 h-10 rounded-xl bg-[#fce7f3] flex items-center justify-center shrink-0 group-hover:scale-105 transition-transform">
                      <Search className="w-5 h-5 text-[#be185d]" />
                    </div>
                    <div>
                      <div className="font-bold text-[#0F172A] text-[15px] leading-snug group-hover:text-pink-600 transition-colors">
                        Search Creators
                      </div>
                      <div className="text-gray-500 text-xs mt-0.5 font-normal leading-relaxed">
                        Vetted marketplace of 500,000+ creators
                      </div>
                    </div>
                  </button>

                  {/* Right Column Item 1: Secure Global Payments */}
                  <button
                    onClick={(e) => handleNav('secure-global-payments', e)}
                    className="w-full text-left flex items-start gap-3.5 p-3 rounded-2xl hover:bg-gray-50/80 transition-all group cursor-pointer"
                  >
                    <div className="w-10 h-10 rounded-xl bg-[#dbeafe] flex items-center justify-center shrink-0 group-hover:scale-105 transition-transform">
                      <CreditCard className="w-5 h-5 text-[#1d4ed8]" />
                    </div>
                    <div>
                      <div className="font-bold text-[#0F172A] text-[15px] leading-snug group-hover:text-blue-600 transition-colors">
                        Secure Global Payments
                      </div>
                      <div className="text-gray-500 text-xs mt-0.5 font-normal leading-relaxed">
                        Escrow + tax forms handled for you
                      </div>
                    </div>
                  </button>

                  {/* Left Column Item 2: Creator Chat & Management */}
                  <button
                    onClick={(e) => handleNav('creator-chat', e)}
                    className="w-full text-left flex items-start gap-3.5 p-3 rounded-2xl hover:bg-gray-50/80 transition-all group cursor-pointer"
                  >
                    <div className="w-10 h-10 rounded-xl bg-[#f3e8ff] flex items-center justify-center shrink-0 group-hover:scale-105 transition-transform">
                      <MessageSquare className="w-5 h-5 text-[#6b21a8]" />
                    </div>
                    <div>
                      <div className="font-bold text-[#0F172A] text-[15px] leading-snug group-hover:text-purple-600 transition-colors">
                        Creator Chat & Management
                      </div>
                      <div className="text-gray-500 text-xs mt-0.5 font-normal leading-relaxed">
                        Manage deliverables and communication
                      </div>
                    </div>
                  </button>

                  {/* Right Column Item 2: Team Workspace */}
                  <button
                    onClick={(e) => handleNav('team-workspace', e)}
                    className="w-full text-left flex items-start gap-3.5 p-3 rounded-2xl hover:bg-gray-50/80 transition-all group cursor-pointer"
                  >
                    <div className="w-10 h-10 rounded-xl bg-[#fef9c3] flex items-center justify-center shrink-0 group-hover:scale-105 transition-transform">
                      <Users className="w-5 h-5 text-[#854d0e]" />
                    </div>
                    <div>
                      <div className="font-bold text-[#0F172A] text-[15px] leading-snug group-hover:text-amber-600 transition-colors">
                        Team Workspace
                      </div>
                      <div className="text-gray-500 text-xs mt-0.5 font-normal leading-relaxed">
                        Invite team members and work together
                      </div>
                    </div>
                  </button>

                  {/* Left Column Item 3: Performance Tracking */}
                  <button
                    onClick={(e) => handleNav('performance-tracking', e)}
                    className="w-full text-left flex items-start gap-3.5 p-3 rounded-2xl hover:bg-gray-50/80 transition-all group cursor-pointer"
                  >
                    <div className="w-10 h-10 rounded-xl bg-[#dcfce7] flex items-center justify-center shrink-0 group-hover:scale-105 transition-transform">
                      <BarChart2 className="w-5 h-5 text-[#15803d]" />
                    </div>
                    <div>
                      <div className="font-bold text-[#0F172A] text-[15px] leading-snug group-hover:text-emerald-600 transition-colors">
                        Performance Tracking
                      </div>
                      <div className="text-gray-500 text-xs mt-0.5 font-normal leading-relaxed">
                        Real-time reach and ROI dashboards
                      </div>
                    </div>
                  </button>

                  {/* Right Column Item 3: Bring and Manage Creators */}
                  <button
                    onClick={(e) => handleNav('bring-manage-creators', e)}
                    className="w-full text-left flex items-start gap-3.5 p-3 rounded-2xl hover:bg-gray-50/80 transition-all group cursor-pointer"
                  >
                    <div className="w-10 h-10 rounded-xl bg-[#e0f2fe] flex items-center justify-center shrink-0 group-hover:scale-105 transition-transform">
                      <UserPlus className="w-5 h-5 text-[#0369a1]" />
                    </div>
                    <div>
                      <div className="font-bold text-[#0F172A] text-[15px] leading-snug group-hover:text-sky-600 transition-colors">
                        Bring and Manage Creators
                      </div>
                      <div className="text-gray-500 text-xs mt-0.5 font-normal leading-relaxed">
                        One dashboard for your entire creator roster
                      </div>
                    </div>
                  </button>

                  {/* Left Column Item 4: Campaign Briefs & Outreach */}
                  <button
                    onClick={(e) => handleNav('campaign-briefs', e)}
                    className="w-full text-left flex items-start gap-3.5 p-3 rounded-2xl hover:bg-gray-50/80 transition-all group cursor-pointer"
                  >
                    <div className="w-10 h-10 rounded-xl bg-[#fef3c7] flex items-center justify-center shrink-0 group-hover:scale-105 transition-transform">
                      <FileText className="w-5 h-5 text-[#b45309]" />
                    </div>
                    <div>
                      <div className="font-bold text-[#0F172A] text-[15px] leading-snug group-hover:text-amber-600 transition-colors">
                        Campaign Briefs & Outreach
                      </div>
                      <div className="text-gray-500 text-xs mt-0.5 font-normal leading-relaxed">
                        Send branded briefs at scale
                      </div>
                    </div>
                  </button>

                </div>
              </div>
            )}
          </div>

          {/* For Brands Dropdown */}
          <div
            className="relative"
            onMouseEnter={() => setActiveDropdown('brands')}
            onMouseLeave={() => setActiveDropdown(null)}
          >
            <button
              onClick={() => toggleDropdown('brands')}
              className={`flex items-center gap-1 hover:text-gray-900 py-2 transition-colors cursor-pointer ${
                activeDropdown === 'brands' ? 'text-[#f43f5e] font-semibold' : ''
              }`}
            >
              For Brands
              <ChevronDown
                className={`w-4 h-4 transition-transform ${
                  activeDropdown === 'brands' ? 'rotate-180 text-[#f43f5e]' : 'text-gray-400'
                }`}
              />
            </button>
            {activeDropdown === 'brands' && (
              <div className="absolute top-full left-0 mt-1 w-[580px] bg-white rounded-3xl shadow-2xl border border-gray-100 p-5 z-50 animate-fadeIn text-sm">
                <div className="grid grid-cols-2 gap-x-6">
                  
                  {/* Left Column */}
                  <div className="flex flex-col gap-1">
                    {/* Marketing Teams */}
                    <button
                      onClick={(e) => handleNav('marketing-teams', e)}
                      className="w-full text-left flex items-start gap-3.5 p-3 rounded-2xl hover:bg-yellow-50/60 transition-all group cursor-pointer"
                    >
                      <div className="w-10 h-10 rounded-xl bg-[#fef08a] flex items-center justify-center shrink-0 group-hover:scale-105 transition-transform">
                        <Users className="w-5 h-5 text-[#854d0e]" />
                      </div>
                      <div>
                        <div className="font-bold text-[#0F172A] text-[15px] leading-snug group-hover:text-amber-700 transition-colors">
                          Marketing Teams
                        </div>
                        <div className="text-gray-500 text-xs mt-0.5 font-normal leading-relaxed">
                          Collaborate across your whole team
                        </div>
                      </div>
                    </button>

                    {/* Agencies */}
                    <button
                      onClick={(e) => handleNav('agencies', e)}
                      className="w-full text-left flex items-start gap-3.5 p-3 rounded-2xl hover:bg-blue-50/60 transition-all group cursor-pointer"
                    >
                      <div className="w-10 h-10 rounded-xl bg-[#dbeafe] flex items-center justify-center shrink-0 group-hover:scale-105 transition-transform">
                        <Building2 className="w-5 h-5 text-[#1d4ed8]" />
                      </div>
                      <div>
                        <div className="font-bold text-[#0F172A] text-[15px] leading-snug group-hover:text-blue-600 transition-colors">
                          Agencies
                        </div>
                        <div className="text-gray-500 text-xs mt-0.5 font-normal leading-relaxed">
                          Manage every client in one place
                        </div>
                      </div>
                    </button>

                    {/* Founders */}
                    <button
                      type="button"
                      onClick={(e) => handleNav('founders', e)}
                      className="w-full text-left flex items-start gap-3.5 p-3 rounded-2xl hover:bg-orange-50/60 transition-all group cursor-pointer"
                    >
                      <div className="w-10 h-10 rounded-xl bg-[#ffedd5] flex items-center justify-center shrink-0 group-hover:scale-105 transition-transform">
                        <Rocket className="w-5 h-5 text-[#c2410c]" />
                      </div>
                      <div>
                        <div className="font-bold text-[#0F172A] text-[15px] leading-snug group-hover:text-orange-600 transition-colors">
                          Founders
                        </div>
                        <div className="text-gray-500 text-xs mt-0.5 font-normal leading-relaxed">
                          Grow your brand from day one
                        </div>
                      </div>
                    </button>
                  </div>

                  {/* Right Column */}
                  <div className="flex flex-col gap-1">
                    {/* Case Studies */}
                    <button
                      onClick={(e) => handleNav('case-studies', e)}
                      className="w-full text-left flex items-start gap-3.5 p-3 rounded-2xl hover:bg-purple-50/60 transition-all group cursor-pointer"
                    >
                      <div className="w-10 h-10 rounded-xl bg-[#f3e8ff] flex items-center justify-center shrink-0 group-hover:scale-105 transition-transform">
                        <Award className="w-5 h-5 text-[#6b21a8]" />
                      </div>
                      <div>
                        <div className="font-bold text-[#0F172A] text-[15px] leading-snug group-hover:text-purple-600 transition-colors">
                          Case Studies
                        </div>
                        <div className="text-gray-500 text-xs mt-0.5 font-normal leading-relaxed">
                          See how brands win on Mobb
                        </div>
                      </div>
                    </button>
                  </div>

                </div>
              </div>
            )}
          </div>

          {/* Use Cases Dropdown */}
          <div
            className="relative"
            onMouseEnter={() => setActiveDropdown('usecases')}
            onMouseLeave={() => setActiveDropdown(null)}
          >
            <button
              onClick={() => toggleDropdown('usecases')}
              className="flex items-center gap-1 hover:text-gray-900 py-2 transition-colors cursor-pointer"
            >
              Use Cases
              <ChevronDown
                className={`w-4 h-4 text-gray-400 transition-transform ${
                  activeDropdown === 'usecases' ? 'rotate-180' : ''
                }`}
              />
            </button>
            {activeDropdown === 'usecases' && (
              <div className="absolute top-full left-0 mt-1 w-[320px] sm:w-[350px] bg-white rounded-[24px] shadow-2xl border border-gray-100/80 p-2.5 z-50 animate-fadeIn">
                <div className="flex flex-col gap-1">
                  
                  {/* UGC for Ads */}
                  <button
                    onClick={(e) => handleNav('ugc-for-ads', e)}
                    className="w-full text-left flex items-start gap-3.5 p-3 rounded-2xl hover:bg-gray-100/70 transition-all group cursor-pointer"
                  >
                    <div className="w-12 h-12 rounded-2xl bg-[#ffebd9] flex items-center justify-center shrink-0 group-hover:scale-105 transition-transform">
                      <Video className="w-5 h-5 text-gray-900" />
                    </div>
                    <div>
                      <div className="font-bold text-[#0F172A] text-[15px] leading-snug group-hover:text-black transition-colors">
                        UGC for Ads
                      </div>
                      <div className="text-gray-500 text-xs mt-0.5 font-normal leading-relaxed">
                        Creator content for paid social
                      </div>
                    </div>
                  </button>

                  {/* Influencer Marketing */}
                  <button
                    onClick={(e) => handleNav('influencer-marketing', e)}
                    className="w-full text-left flex items-start gap-3.5 p-3 rounded-2xl hover:bg-gray-100/70 transition-all group cursor-pointer"
                  >
                    <div className="w-12 h-12 rounded-2xl bg-[#fbe2e8] flex items-center justify-center shrink-0 group-hover:scale-105 transition-transform">
                      <Megaphone className="w-5 h-5 text-gray-900" />
                    </div>
                    <div>
                      <div className="font-bold text-[#0F172A] text-[15px] leading-snug group-hover:text-black transition-colors">
                        Influencer Marketing
                      </div>
                      <div className="text-gray-500 text-xs mt-0.5 font-normal leading-relaxed">
                        Run campaigns at scale
                      </div>
                    </div>
                  </button>

                  {/* Affiliate Marketing */}
                  <button
                    onClick={(e) => handleNav('affiliate-marketing', e)}
                    className="w-full text-left flex items-start gap-3.5 p-3 rounded-2xl hover:bg-gray-100/70 transition-all group cursor-pointer"
                  >
                    <div className="w-12 h-12 rounded-2xl bg-[#dcf3e4] flex items-center justify-center shrink-0 group-hover:scale-105 transition-transform">
                      <Link2 className="w-5 h-5 text-gray-900" />
                    </div>
                    <div>
                      <div className="font-bold text-[#0F172A] text-[15px] leading-snug group-hover:text-black transition-colors">
                        Affiliate Marketing
                      </div>
                      <div className="text-gray-500 text-xs mt-0.5 font-normal leading-relaxed">
                        Performance-based partnerships
                      </div>
                    </div>
                  </button>

                </div>
              </div>
            )}
          </div>

          <button
            onClick={(e) => handleNav('pricing', e)}
            className="hover:text-gray-900 transition-colors cursor-pointer"
          >
            Pricing
          </button>
          <button
            onClick={(e) => handleNav('for-creators', e)}
            className="hover:text-gray-900 transition-colors cursor-pointer"
          >
            For Creators
          </button>
        </nav>
      </div>

      {/* Right Action Controls: Log in, Sign Up & Mobile Hamburger */}
      <div className="flex items-center gap-2 sm:gap-3">
        <button
          onClick={() => onOpenLogin?.()}
          className="px-3.5 sm:px-5 py-1.5 sm:py-2 rounded-full border border-gray-200 hover:border-gray-300 hover:bg-gray-50 font-semibold text-xs sm:text-sm text-gray-800 transition-all cursor-pointer whitespace-nowrap"
        >
          Log in
        </button>
        <button
          onClick={() => onOpenSignUp?.('creator')}
          className="px-3.5 sm:px-5 py-1.5 sm:py-2 rounded-full bg-[#232323] hover:bg-black text-white font-semibold text-xs sm:text-sm transition-all shadow-sm cursor-pointer whitespace-nowrap"
        >
          Sign Up
        </button>

        {/* Hamburger Toggle Button (Tablet & Mobile only) */}
        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="lg:hidden p-2 rounded-xl text-gray-700 hover:bg-gray-100 transition-colors cursor-pointer ml-1"
          aria-label="Toggle Menu"
        >
          {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile & Tablet Slide-Down Dropdown Menu */}
      {mobileMenuOpen && (
        <div className="absolute top-full left-0 w-full bg-white border-b border-gray-200 shadow-2xl p-5 lg:hidden z-50 flex flex-col gap-4 animate-fadeIn">
          {/* Features Section */}
          <div className="border-b border-gray-100 pb-3">
            <button
              onClick={() => toggleDropdown('features')}
              className="flex items-center justify-between w-full py-1 text-base font-semibold text-gray-800"
            >
              <span>Features</span>
              <ChevronDown className={`w-4 h-4 transition-transform ${activeDropdown === 'features' ? 'rotate-180' : ''}`} />
            </button>
            {activeDropdown === 'features' && (
              <div className="mt-3 pl-1 flex flex-col gap-3 text-sm text-gray-600">
                <button onClick={(e) => handleNav('search-creators', e)} className="flex items-center gap-2.5 py-1 hover:text-gray-900 font-medium text-left w-full cursor-pointer">
                  <span className="w-6 h-6 rounded-lg bg-pink-100 flex items-center justify-center shrink-0"><Search className="w-3.5 h-3.5 text-pink-700" /></span>
                  Search Creators
                </button>
                <button onClick={(e) => handleNav('secure-global-payments', e)} className="flex items-center gap-2.5 py-1 hover:text-gray-900 font-medium text-left w-full cursor-pointer">
                  <span className="w-6 h-6 rounded-lg bg-blue-100 flex items-center justify-center shrink-0"><CreditCard className="w-3.5 h-3.5 text-blue-700" /></span>
                  Secure Global Payments
                </button>
                <button onClick={(e) => handleNav('creator-chat', e)} className="flex items-center gap-2.5 py-1 hover:text-gray-900 font-medium text-left w-full cursor-pointer">
                  <span className="w-6 h-6 rounded-lg bg-purple-100 flex items-center justify-center shrink-0"><MessageSquare className="w-3.5 h-3.5 text-purple-700" /></span>
                  Creator Chat & Management
                </button>
                <button onClick={(e) => handleNav('team-workspace', e)} className="flex items-center gap-2.5 py-1 hover:text-gray-900 font-medium text-left w-full cursor-pointer">
                  <span className="w-6 h-6 rounded-lg bg-amber-100 flex items-center justify-center shrink-0"><Users className="w-3.5 h-3.5 text-amber-700" /></span>
                  Team Workspace
                </button>
                <button onClick={(e) => handleNav('performance-tracking', e)} className="flex items-center gap-2.5 py-1 hover:text-gray-900 font-medium text-left w-full cursor-pointer">
                  <span className="w-6 h-6 rounded-lg bg-emerald-100 flex items-center justify-center shrink-0"><BarChart2 className="w-3.5 h-3.5 text-emerald-700" /></span>
                  Performance Tracking
                </button>
                <button onClick={(e) => handleNav('bring-manage-creators', e)} className="flex items-center gap-2.5 py-1 hover:text-gray-900 font-medium text-left w-full cursor-pointer">
                  <span className="w-6 h-6 rounded-lg bg-sky-100 flex items-center justify-center shrink-0"><UserPlus className="w-3.5 h-3.5 text-sky-700" /></span>
                  Bring and Manage Creators
                </button>
                <button onClick={(e) => handleNav('campaign-briefs', e)} className="flex items-center gap-2.5 py-1 hover:text-gray-900 font-medium text-left w-full cursor-pointer">
                  <span className="w-6 h-6 rounded-lg bg-yellow-100 flex items-center justify-center shrink-0"><FileText className="w-3.5 h-3.5 text-yellow-700" /></span>
                  Campaign Briefs & Outreach
                </button>
              </div>
            )}
          </div>

          {/* For Brands Section */}
          <div className="border-b border-gray-100 pb-3">
            <button
              onClick={() => toggleDropdown('brands')}
              className="flex items-center justify-between w-full py-1 text-base font-semibold text-gray-800"
            >
              <span>For Brands</span>
              <ChevronDown className={`w-4 h-4 transition-transform ${activeDropdown === 'brands' ? 'rotate-180' : ''}`} />
            </button>
            {activeDropdown === 'brands' && (
              <div className="mt-3 pl-1 flex flex-col gap-3 text-sm text-gray-600">
                <button onClick={(e) => handleNav('marketing-teams', e)} className="flex items-center gap-2.5 py-1 hover:text-gray-900 font-medium text-left cursor-pointer">
                  <span className="w-6 h-6 rounded-lg bg-yellow-100 flex items-center justify-center shrink-0"><Users className="w-3.5 h-3.5 text-amber-800" /></span>
                  Marketing Teams
                </button>
                <button onClick={(e) => handleNav('agencies', e)} className="flex items-center gap-2.5 py-1 hover:text-gray-900 font-medium text-left cursor-pointer">
                  <span className="w-6 h-6 rounded-lg bg-blue-100 flex items-center justify-center shrink-0"><Building2 className="w-3.5 h-3.5 text-blue-800" /></span>
                  Agencies
                </button>
                <button onClick={(e) => handleNav('founders', e)} className="flex items-center gap-2.5 py-1 hover:text-gray-900 font-medium text-left cursor-pointer">
                  <span className="w-6 h-6 rounded-lg bg-orange-100 flex items-center justify-center shrink-0"><Rocket className="w-3.5 h-3.5 text-orange-800" /></span>
                  Founders
                </button>
                <button onClick={(e) => handleNav('case-studies', e)} className="flex items-center gap-2.5 py-1 hover:text-gray-900 font-medium text-left cursor-pointer">
                  <span className="w-6 h-6 rounded-lg bg-purple-100 flex items-center justify-center shrink-0"><Award className="w-3.5 h-3.5 text-purple-800" /></span>
                  Case Studies
                </button>
              </div>
            )}
          </div>

          {/* Use Cases Section */}
          <div className="border-b border-gray-100 pb-3">
            <button
              onClick={() => toggleDropdown('usecases')}
              className="flex items-center justify-between w-full py-1 text-base font-semibold text-gray-800"
            >
              <span>Use Cases</span>
              <ChevronDown className={`w-4 h-4 transition-transform ${activeDropdown === 'usecases' ? 'rotate-180' : ''}`} />
            </button>
            {activeDropdown === 'usecases' && (
              <div className="mt-3 pl-1 flex flex-col gap-3 text-sm text-gray-600">
                <button onClick={(e) => handleNav('ugc-for-ads', e)} className="flex items-center gap-2.5 py-1 hover:text-gray-900 font-medium text-left w-full cursor-pointer">
                  <span className="w-6 h-6 rounded-lg bg-[#ffebd9] flex items-center justify-center shrink-0"><Video className="w-3.5 h-3.5 text-gray-900" /></span>
                  UGC for Ads
                </button>
                <button onClick={(e) => handleNav('influencer-marketing', e)} className="flex items-center gap-2.5 py-1 hover:text-gray-900 font-medium text-left w-full cursor-pointer">
                  <span className="w-6 h-6 rounded-lg bg-[#fbe2e8] flex items-center justify-center shrink-0"><Megaphone className="w-3.5 h-3.5 text-gray-900" /></span>
                  Influencer Marketing
                </button>
                <button onClick={(e) => handleNav('affiliate-marketing', e)} className="flex items-center gap-2.5 py-1 hover:text-gray-900 font-medium text-left w-full cursor-pointer">
                  <span className="w-6 h-6 rounded-lg bg-[#dcf3e4] flex items-center justify-center shrink-0"><Link2 className="w-3.5 h-3.5 text-gray-900" /></span>
                  Affiliate Marketing
                </button>
              </div>
            )}
          </div>

          {/* Direct Links */}
          <button
            onClick={(e) => handleNav('pricing', e)}
            className="text-base font-semibold text-gray-800 py-1 hover:text-gray-900 text-left cursor-pointer"
          >
            Pricing
          </button>
          <button
            onClick={(e) => handleNav('for-creators', e)}
            className="text-base font-semibold text-gray-800 py-1 hover:text-gray-900 text-left cursor-pointer"
          >
            For Creators
          </button>

          {/* Mobile Auth Buttons */}
          <div className="pt-2 flex flex-col gap-2 border-t border-gray-100 mt-1">
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenSignUp?.('creator');
              }}
              className="w-full py-2.5 rounded-xl bg-[#232323] hover:bg-black text-white font-bold text-sm text-center transition-all cursor-pointer"
            >
              Sign Up Free
            </button>
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenLogin?.();
              }}
              className="w-full py-2.5 rounded-xl border border-gray-200 hover:bg-gray-50 text-gray-800 font-bold text-sm text-center transition-all cursor-pointer"
            >
              Log In
            </button>
          </div>
        </div>
      )}
    </header>
  );
};

