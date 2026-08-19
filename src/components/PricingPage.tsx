import React, { useState, useEffect } from 'react';
import {
  Check,
  Search,
  Megaphone,
  MessageSquare,
  BarChart2,
  CreditCard,
  ChevronDown,
  ChevronUp,
  ChevronLeft,
  ChevronRight,
  Info,
  Building2,
  Sparkles,
  ArrowRight,
  Lock,
  ExternalLink,
  Users,
  ShieldCheck,
  Zap,
  HelpCircle
} from 'lucide-react';
import { TrustedBrands } from './TrustedBrands';
import { WhatBrandsSay } from './WhatBrandsSay';
import {
  dbrkvImg,
  hermanStrydomImg,
  ivanaMarketinImg,
  janarJuhkovImg,
  lettersOfTravelImg,
  paolaSantanaImg,
  alicjaWerniewiczImg,
  niloofarTaghaviImg,
  sofiaJensenImg,
} from '../avatars';
import {
  marriottBonvoyImg,
  theDorianCardCoverImg,
  milleCardCoverImg,
  porscheCardCoverImg,
  porscheInsideCoverImg,
} from '../casestudies';

interface PricingPageProps {
  onNavigateHome?: () => void;
  onNavigateSearch?: () => void;
  onNavigateCaseStudies?: (studyId?: string) => void;
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

export const PricingPage: React.FC<PricingPageProps> = ({
  onNavigateHome,
  onNavigateSearch,
  onNavigateCaseStudies
}) => {
  // Billing cycle state: 'monthly' | 'annual'
  const [billingCycle, setBillingCycle] = useState<'annual' | 'monthly'>('annual');
  // Compare plans matrix view toggle state
  const [comparePlans, setComparePlans] = useState(false);

  // Auto-rotating tab state for "Everything You Need to Run Influencer Marketing in One Place"
  const [activeTab, setActiveTab] = useState(0);
  const [timerResetTrigger, setTimerResetTrigger] = useState(0);

  // FAQ expanded items state
  const [openFaq, setOpenFaq] = useState<number | null>(0);

  // Auto-advance tabs every 3.5 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setActiveTab((prevTab) => (prevTab + 1) % 5);
    }, 3500);

    return () => clearInterval(interval);
  }, [timerResetTrigger]);

  const handleTabClick = (index: number) => {
    setActiveTab(index);
    setTimerResetTrigger((prev) => prev + 1); // Reset timer countdown
  };

  const toggleFaq = (index: number) => {
    setOpenFaq((prev) => (prev === index ? null : index));
  };

  // Pricing details definition
  const plans = [
    {
      name: 'Free',
      subtitle: 'First orders & marketplace exploration.',
      monthlyPrice: 0,
      annualPrice: 0,
      billingText: 'per month',
      popular: false,
      buttonText: 'Join for Free',
      buttonClass: 'bg-white border border-gray-300 text-gray-800 hover:bg-gray-50',
      features: [
        { text: 'Search 500,000+ creators', enabled: true },
        { text: 'Direct hire from profiles', enabled: true },
        { text: 'Secure payments & escrow', enabled: true, tooltip: 'Funds held in escrow until work approved' },
        { text: '10% hiring fee', enabled: true, tooltip: 'Standard marketplace processing fee' },
        { text: 'Campaigns & advanced filters', enabled: false },
        { text: 'Live post analytics', enabled: false },
        { text: 'Audience reports', enabled: false },
      ]
    },
    {
      name: 'Pro',
      subtitle: 'Regular campaigns, multiple creators.',
      monthlyPrice: 299,
      annualPrice: 249, // Save $600/year
      billingText: billingCycle === 'annual' ? '/mo, billed annually' : 'per month',
      popular: true,
      popularLabel: 'Most popular',
      savingsLabel: billingCycle === 'annual' ? 'Save $600/year' : null,
      buttonText: 'Start Pro',
      buttonClass: 'bg-[#f43f5e] text-white hover:bg-rose-600 shadow-md font-bold',
      features: [
        { text: 'Everything in Free, plus', enabled: true, highlight: true },
        { text: 'Post 1 campaign per month', enabled: true, tooltip: 'Publish 1 brief to receive creator applications' },
        { text: 'Advanced search filters', enabled: true },
        { text: 'Chat with creators before hiring', enabled: true, tooltip: 'Message any creator directly before placing an order' },
        { text: 'Track live analytics for 5 posts at a time', enabled: true, tooltip: 'Real-time social analytics tracking' },
        { text: '20 engagement and audience reports', enabled: true },
      ]
    },
    {
      name: 'Premium',
      subtitle: 'Lower fees, more reporting, priority support.',
      monthlyPrice: 399,
      annualPrice: 333, // Save $792/year
      billingText: billingCycle === 'annual' ? '/mo, billed annually' : 'per month',
      popular: false,
      savingsLabel: billingCycle === 'annual' ? 'Save $792/year' : null,
      buttonText: 'Start Premium',
      buttonClass: 'bg-white border border-gray-300 text-gray-800 hover:bg-gray-50',
      features: [
        { text: 'Everything in Pro, plus', enabled: true, highlight: true },
        { text: 'Post unlimited campaigns', enabled: true, tooltip: 'Run as many active campaigns as you need' },
        { text: 'Track live analytics for 15 posts at a time', enabled: true },
        { text: '50 engagement and audience reports', enabled: true },
        { text: '5% hiring fee', enabled: true, tooltip: 'Reduced marketplace processing fee' },
        { text: 'Priority support', enabled: true },
      ]
    },
    {
      name: 'Enterprise / Agencies',
      subtitle: 'Multiple brands, custom reporting, dedicated support.',
      monthlyPrice: 'Custom',
      annualPrice: 'Custom',
      billingText: '',
      popular: false,
      buttonText: 'Book a Demo',
      buttonClass: 'bg-white border border-gray-300 text-gray-800 hover:bg-gray-50',
      features: [
        { text: 'Everything in Premium, plus', enabled: true, highlight: true },
        { text: 'Subaccounts for brands and regions', enabled: true, tooltip: 'Isolate workspace data across clients' },
        { text: 'Team seats and permissions', enabled: true },
        { text: 'White label reporting', enabled: true },
        { text: 'Measure results by campaign, platform, or brand', enabled: true },
        { text: 'Custom billing', enabled: true },
        { text: 'Dedicated strategic team', enabled: true },
      ]
    }
  ];

  // Matrix categories for detailed Compare Plans table view
  const matrixCategories = [
    {
      category: 'SEARCH & HIRING',
      rows: [
        { feature: 'Manually search 500,000+ creators', free: true, pro: true, premium: true, enterprise: true },
        { feature: 'Directly hire creators one-by-one', free: true, pro: true, premium: true, enterprise: true },
        { feature: 'Secure payments & escrow', free: true, pro: true, premium: true, enterprise: true, tooltip: 'Payment held safely until work approved' },
        { feature: 'Hiring fee', free: '10%', pro: '10%', premium: '5%', enterprise: 'Custom', tooltip: 'Marketplace processing fee' },
        { feature: 'Chat with creators before hiring', free: false, pro: true, premium: true, enterprise: true, tooltip: 'Direct message before committing' },
      ]
    },
    {
      category: 'CAMPAIGNS',
      rows: [
        { feature: 'Campaigns per month', free: '—', pro: '1', premium: 'Unlimited', enterprise: 'Unlimited', tooltip: 'Active briefs posted to creator pool' },
        { feature: 'Advanced filters for age, ethnicity, language', free: false, pro: true, premium: true, enterprise: true },
      ]
    },
    {
      category: 'ANALYTICS & REPORTING',
      rows: [
        { feature: 'Track and analyze external posts', free: '—', pro: '5 posts', premium: '15 posts', enterprise: 'Unlimited', tooltip: 'Live tracking of published content' },
        { feature: 'Engagement & audience reports', free: '—', pro: '20', premium: '50', enterprise: 'Unlimited' },
      ]
    },
    {
      category: 'SUPPORT',
      rows: [
        { feature: 'Dedicated account manager', free: '—', pro: '—', premium: true, enterprise: true },
      ]
    },
    {
      category: 'ENTERPRISE & AGENCIES',
      rows: [
        { feature: 'Subaccounts for brands and regions', free: false, pro: false, premium: false, enterprise: true, tooltip: 'Separate client & brand workspaces' },
        { feature: 'Team seats and permissions', free: false, pro: false, premium: false, enterprise: true },
        { feature: 'White label reporting', free: false, pro: false, premium: false, enterprise: true },
        { feature: 'Custom billing & consolidated invoicing', free: false, pro: false, premium: false, enterprise: true, tooltip: 'Single monthly invoice across all teams' },
        { feature: 'Dedicated strategic team', free: false, pro: false, premium: false, enterprise: true },
      ]
    }
  ];

  // Tab content items for "Everything You Need to Run Influencer Marketing in One Place"
  const featureTabs = [
    {
      id: 'discover',
      tabLabel: 'Discover',
      tabIcon: Search,
      title: 'Search 500,000+ vetted creators',
      description: 'Every creator on Mobb is verified before joining the marketplace. Search by platform, niche, location, follower count, and engagement rate. Advanced filters narrow by audience age, language, ethnicity, and more.',
      bullets: [
        'Save shortlists to revisit and compare across campaigns',
        'View audience demographic data and engagement rate on every profile'
      ],
      mockup: (
        <div className="bg-white rounded-3xl p-6 shadow-xl border border-gray-100 relative overflow-hidden">
          <div className="flex items-center gap-2 mb-4 pb-3 border-b border-gray-100">
            <Search className="w-4 h-4 text-gray-400" />
            <span className="text-xs font-medium text-gray-400">Search 500,000+ creators...</span>
          </div>
          <div className="grid grid-cols-2 gap-4">
            <div className="rounded-2xl border border-gray-100 p-3 bg-gray-50/50 hover:bg-white hover:shadow-md transition-all">
              <div className="h-28 rounded-xl bg-cover bg-center mb-3 relative overflow-hidden" style={{ backgroundImage: `url(${dbrkvImg})` }}>
                <span className="absolute top-2 left-2 bg-black/70 backdrop-blur-md text-white text-[11px] font-bold px-2 py-0.5 rounded-full">$220</span>
              </div>
              <div className="font-bold text-xs text-gray-900">Fashion & Beauty Content</div>
              <div className="text-[11px] text-gray-500 mt-0.5">Instagram & TikTok • 88.5k Followers</div>
              <div className="mt-3 flex gap-1.5">
                <button className="flex-1 py-1 bg-[#232323] text-white rounded-lg text-[11px] font-semibold hover:bg-black">View Profile</button>
                <button className="px-2 py-1 bg-emerald-100 text-emerald-800 rounded-lg text-[11px] font-semibold">Accept</button>
              </div>
            </div>

            <div className="rounded-2xl border border-gray-100 p-3 bg-gray-50/50 hover:bg-white hover:shadow-md transition-all">
              <div className="h-28 rounded-xl bg-cover bg-center mb-3 relative overflow-hidden" style={{ backgroundImage: `url(${hermanStrydomImg})` }}>
                <span className="absolute top-2 left-2 bg-black/70 backdrop-blur-md text-white text-[11px] font-bold px-2 py-0.5 rounded-full">$190</span>
              </div>
              <div className="font-bold text-xs text-gray-900">Lifestyle Content Creator</div>
              <div className="text-[11px] text-gray-500 mt-0.5">YouTube & Reels • 112k Followers</div>
              <div className="mt-3 flex gap-1.5">
                <button className="flex-1 py-1 bg-[#232323] text-white rounded-lg text-[11px] font-semibold hover:bg-black">View Profile</button>
                <button className="px-2 py-1 bg-emerald-100 text-emerald-800 rounded-lg text-[11px] font-semibold">Accept</button>
              </div>
            </div>
          </div>
        </div>
      )
    },
    {
      id: 'post-campaigns',
      tabLabel: 'Post Campaigns',
      tabIcon: Megaphone,
      title: 'Post campaigns and receive applications',
      description: 'Write a brief, set targeting criteria, and Mobb distributes it to matching creators who apply with their pricing. No contracts or additional overhead.',
      bullets: [
        'Target by niche, location, and demographics',
        'Instant creator match surfaces best-fit creators for your campaign automatically',
        'Applications arrive with creator pricing',
        'Run multiple campaigns simultaneously'
      ],
      mockup: (
        <div className="bg-white rounded-3xl p-6 shadow-xl border border-gray-100 relative overflow-hidden">
          <div className="flex items-center justify-between mb-4 pb-3 border-b border-gray-100">
            <div className="flex items-center gap-2">
              <span className="w-2.5 h-2.5 rounded-full bg-emerald-500 animate-pulse"></span>
              <span className="text-xs font-bold text-gray-900">Active Campaign: Summer Launch</span>
            </div>
            <span className="text-[11px] bg-pink-100 text-[#f43f5e] font-semibold px-2.5 py-1 rounded-full">18 Applicants</span>
          </div>
          <div className="grid grid-cols-3 gap-3 mb-3">
            <div className="rounded-xl overflow-hidden border border-gray-100 relative group">
              <img src={ivanaMarketinImg} alt="Applicant" className="w-full h-24 object-cover" />
              <div className="p-2 bg-white text-center">
                <div className="text-[10px] font-bold text-gray-900">TikTok Video</div>
                <div className="text-[10px] text-emerald-600 font-extrabold">$160</div>
              </div>
            </div>
            <div className="rounded-xl overflow-hidden border border-gray-100 relative group">
              <img src={janarJuhkovImg} alt="Applicant" className="w-full h-24 object-cover" />
              <div className="p-2 bg-white text-center">
                <div className="text-[10px] font-bold text-gray-900">Instagram Reel</div>
                <div className="text-[10px] text-emerald-600 font-extrabold">$270</div>
              </div>
            </div>
            <div className="rounded-xl overflow-hidden border border-gray-100 relative group">
              <img src={sofiaJensenImg} alt="Applicant" className="w-full h-24 object-cover" />
              <div className="p-2 bg-white text-center">
                <div className="text-[10px] font-bold text-gray-900">Story Series</div>
                <div className="text-[10px] text-emerald-600 font-extrabold">$175</div>
              </div>
            </div>
          </div>
          <div className="bg-gradient-to-r from-pink-50 to-rose-50 p-3 rounded-2xl border border-pink-100 text-center">
            <div className="text-xs font-bold text-gray-900">Instant AI Creator Matching</div>
            <div className="text-[11px] text-gray-500 mt-0.5">Matching criteria matched 142 creators in your niche</div>
          </div>
        </div>
      )
    },
    {
      id: 'chat-negotiate',
      tabLabel: 'Chat & negotiate',
      tabIcon: MessageSquare,
      title: 'Chat and negotiate before you commit',
      description: 'Message creators directly before hiring. Agree on deliverables, timelines, and usage rights before any payment changes hands.',
      bullets: [
        'Discuss requirements and revisions upfront',
        'Invite team members to review collaborations',
        'All communications in one place'
      ],
      mockup: (
        <div className="bg-white rounded-3xl p-6 shadow-xl border border-gray-100 relative overflow-hidden flex gap-4">
          <div className="w-1/3 border-r border-gray-100 pr-3 flex flex-col gap-2">
            <div className="p-2 bg-gray-100 rounded-xl text-xs font-semibold text-gray-800 flex items-center justify-between">
              <span>James Bright</span>
              <span className="w-2 h-2 rounded-full bg-pink-500"></span>
            </div>
            <div className="p-2 hover:bg-gray-50 rounded-xl text-xs text-gray-600">David Moore</div>
            <div className="p-2 hover:bg-gray-50 rounded-xl text-xs text-gray-600">Kenneth Allen</div>
            <div className="p-2 hover:bg-gray-50 rounded-xl text-xs text-gray-600">Vshore Summer</div>
          </div>
          <div className="w-2/3 flex flex-col justify-between">
            <div className="space-y-2">
              <div className="bg-gray-100 p-2.5 rounded-2xl rounded-tl-none max-w-[85%] text-xs text-gray-800">
                Hi! I can deliver the 2 TikTok videos by Friday including usage rights.
              </div>
              <div className="bg-[#232323] text-white p-2.5 rounded-2xl rounded-tr-none max-w-[85%] ml-auto text-xs">
                Sounds perfect! Can we include raw files in the agreement as well?
              </div>
              <div className="bg-gray-100 p-2.5 rounded-2xl rounded-tl-none max-w-[85%] text-xs text-gray-800">
                Yes, absolutely! Order proposal updated with raw content access.
              </div>
            </div>
            <div className="mt-4 pt-3 border-t border-gray-100 flex items-center gap-2">
              <input type="text" placeholder="Type a message or proposal..." className="flex-1 text-xs bg-gray-50 border border-gray-200 rounded-xl px-3 py-2 outline-none" readOnly />
              <button className="bg-[#f43f5e] text-white px-3 py-2 rounded-xl text-xs font-semibold hover:bg-rose-600">Send</button>
            </div>
          </div>
        </div>
      )
    },
    {
      id: 'track-results',
      tabLabel: 'Track Results',
      tabIcon: BarChart2,
      title: 'Track performance as content goes live',
      description: 'Mobb automatically tracks published posts across platforms. No manual reporting or third-party tools required.',
      bullets: [
        'Monitor reach, engagement, and results per creator',
        'Know exactly how each piece of content performs'
      ],
      mockup: (
        <div className="bg-white rounded-3xl p-6 shadow-xl border border-gray-100 relative overflow-hidden">
          <div className="flex items-center justify-between mb-4">
            <div>
              <div className="text-xs text-gray-400 font-medium">Golf Activewear Line Launch</div>
              <div className="text-base font-extrabold text-gray-900">Live Campaign Performance</div>
            </div>
            <button className="px-3 py-1 bg-gray-900 text-white rounded-xl text-xs font-semibold">+ Track New Post</button>
          </div>
          <div className="grid grid-cols-3 gap-3 mb-4">
            <div className="p-3 bg-gray-50 rounded-2xl border border-gray-100">
              <div className="text-xl font-extrabold text-gray-900">3.9M</div>
              <div className="text-[11px] text-gray-500 font-medium">Total Views</div>
            </div>
            <div className="p-3 bg-gray-50 rounded-2xl border border-gray-100">
              <div className="text-xl font-extrabold text-gray-900">4.6M</div>
              <div className="text-[11px] text-gray-500 font-medium">Total Likes</div>
            </div>
            <div className="p-3 bg-gray-50 rounded-2xl border border-gray-100">
              <div className="text-xl font-extrabold text-gray-900">11.4K</div>
              <div className="text-[11px] text-gray-500 font-medium">Total Comments</div>
            </div>
          </div>
          <div className="h-20 bg-gradient-to-t from-pink-50/80 to-transparent rounded-2xl border border-pink-100 flex items-end p-2 gap-1.5">
            <div className="flex-1 bg-[#f43f5e] rounded-t-md h-12"></div>
            <div className="flex-1 bg-[#f43f5e] rounded-t-md h-16"></div>
            <div className="flex-1 bg-[#f43f5e] rounded-t-md h-10"></div>
            <div className="flex-1 bg-[#f43f5e] rounded-t-md h-20"></div>
            <div className="flex-1 bg-[#f43f5e] rounded-t-md h-14"></div>
          </div>
        </div>
      )
    },
    {
      id: 'safe-pay',
      tabLabel: 'Safe Pay',
      tabIcon: CreditCard,
      title: 'Pay securely. Every time.',
      description: 'Payment is held in escrow until you approve the deliverable. Nothing releases until you confirm the work meets your brief.',
      bullets: [
        'Pay only after reviewing and approving the work',
        'Payments and compliance handled in 150 countries',
        'Automated billing and tax documentation'
      ],
      mockup: (
        <div className="bg-white rounded-3xl p-6 shadow-xl border border-gray-100 relative overflow-hidden">
          <div className="flex items-center justify-between pb-3 border-b border-gray-100 mb-3">
            <div className="text-xs font-bold text-gray-900 flex items-center gap-1.5">
              <Lock className="w-3.5 h-3.5 text-emerald-600" />
              <span>Escrow Checkout Protection</span>
            </div>
            <span className="text-[10px] font-bold bg-emerald-100 text-emerald-800 px-2 py-0.5 rounded-full">100% Guaranteed</span>
          </div>
          <div className="space-y-2 mb-4">
            <div className="flex items-center justify-between text-xs p-2 bg-gray-50 rounded-xl">
              <span className="text-gray-700">1x Instagram Story</span>
              <span className="font-bold text-gray-900">$100.00</span>
            </div>
            <div className="flex items-center justify-between text-xs p-2 bg-gray-50 rounded-xl">
              <span className="text-gray-700">1x YouTube Video (34 Seconds)</span>
              <span className="font-bold text-gray-900">$560.00</span>
            </div>
          </div>
          <div className="border-t border-dashed border-gray-200 pt-2 space-y-1 text-xs">
            <div className="flex justify-between text-gray-500">
              <span>Subtotal</span>
              <span>$660.00</span>
            </div>
            <div className="flex justify-between text-gray-500">
              <span>Escrow Fee (5%)</span>
              <span>$33.00</span>
            </div>
            <div className="flex justify-between text-gray-900 font-extrabold text-sm pt-1">
              <span>Total</span>
              <span>$776.16 USD</span>
            </div>
          </div>
          <button className="w-full mt-4 py-2.5 bg-[#232323] text-white rounded-xl text-xs font-bold hover:bg-black transition-all flex items-center justify-center gap-2">
            <Lock className="w-3.5 h-3.5" /> Place Order
          </button>
        </div>
      )
    }
  ];

  // Case Studies List (First Page of Real Case Studies)
  const caseStudies = [
    {
      id: 'marriott',
      title: 'Marriott Bonvoy campaign reaches 11M through Niche Creator partnership',
      image: marriottBonvoyImg,
      badge: 'Marriott Bonvoy'
    },
    {
      id: 'thedorian',
      title: 'The Dorian Autograph Collection Drives 4.2M Impressions via Mobb Creators',
      image: theDorianCardCoverImg,
      badge: 'The Dorian'
    },
    {
      id: 'mille',
      title: 'Mille Milano Scaled High-Converting UGC Across Global Luxury Markets',
      image: milleCardCoverImg,
      badge: 'Mille Milano'
    },
    {
      id: 'porsche',
      title: 'Porsche Connects With Gen-Z Luxury Buyers Through Authentic Influencer Storytelling',
      image: porscheCardCoverImg,
      badge: 'Porsche'
    }
  ];

  // FAQs
  const faqs = [
    {
      question: 'Can I try before I subscribe?',
      answer: 'Yes! You can join Mobb for free to explore over 1.1 million verified creators, search profiles, and hire creators directly with zero monthly subscription commitment.'
    },
    {
      question: 'What is the platform fee?',
      answer: 'On the Free and Pro plans, the platform fee is 10% on transactions. On Premium, the platform fee drops to 5%. Custom processing rates are available for Enterprise accounts.'
    },
    {
      question: 'Can I cancel anytime?',
      answer: 'Yes, monthly subscriptions can be canceled at any time with no long-term contracts. Annual plans are billed annually and offer maximum savings (2 months free).'
    },
    {
      question: 'What is the difference between a direct hire and a campaign?',
      answer: 'A direct hire allows you to message and purchase pre-set packages directly from a specific creator profile. A campaign lets you post a brief publicly so creators submit custom applications with their rates.'
    },
    {
      question: 'What counts as a "tracked post"?',
      answer: 'A tracked post is an active published social post (Instagram Reel, TikTok Video, YouTube) where Mobb pulls real-time analytics including views, likes, comments, and engagement rate.'
    },
    {
      question: 'Can I see a creator\'s audience data before hiring?',
      answer: 'Yes! Pro and Premium plan subscribers get access to detailed audience demographic reports including audience locations, gender split, age distribution, and engagement metrics.'
    },
    {
      question: 'How quickly will I receive creator applications after posting a campaign?',
      answer: 'Most campaigns start receiving qualified creator applications within 24 to 48 hours of being approved on the platform.'
    },
    {
      question: 'When does the platform fee apply?',
      answer: 'The platform fee is added at checkout when you place an order or hire a creator. Payment is held safely in escrow until you review and approve the final content.'
    }
  ];

  return (
    <div className="w-full bg-white text-gray-900 font-sans pb-24">
      
      {/* HERO SECTION */}
      <section className="pt-12 sm:pt-16 pb-12 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto text-center">
        <h1 style={heroHeadingStyle} className="tracking-tight max-w-4xl mx-auto">
          Find Creators. Run Campaigns. Track Results.
          <span className="block text-[#f43f5e] mt-2">One Subscription.</span>
        </h1>

        {/* CONTROLS BAR: Monthly vs Annual Billing + Compare Plans Toggle */}
        <div className="mt-10 sm:mt-12 flex flex-col sm:flex-row items-center justify-between gap-6 max-w-4xl mx-auto bg-gray-50/80 p-3 sm:p-4 rounded-3xl border border-gray-100">
          
          {/* Billing Switcher */}
          <div className="inline-flex items-center bg-gray-200/70 p-1 rounded-2xl">
            <button
              onClick={() => setBillingCycle('annual')}
              className={`flex items-center gap-2 px-5 py-2.5 rounded-xl text-sm font-bold transition-all cursor-pointer ${
                billingCycle === 'annual'
                  ? 'bg-white text-gray-900 shadow-sm'
                  : 'text-gray-600 hover:text-gray-900'
              }`}
            >
              Annual billing
              <span className="bg-[#dcf3e4] text-[#166534] text-xs font-extrabold px-2 py-0.5 rounded-md">
                2 Months Free
              </span>
            </button>

            <button
              onClick={() => setBillingCycle('monthly')}
              className={`px-5 py-2.5 rounded-xl text-sm font-bold transition-all cursor-pointer ${
                billingCycle === 'monthly'
                  ? 'bg-white text-gray-900 shadow-sm'
                  : 'text-gray-600 hover:text-gray-900'
              }`}
            >
              Monthly billing
            </button>
          </div>

          {/* Compare Plans Toggle */}
          <div className="flex items-center gap-3">
            <span className="text-sm font-bold text-gray-800">Compare Plans</span>
            <button
              onClick={() => setComparePlans(!comparePlans)}
              className={`w-12 h-6 rounded-full transition-colors p-0.5 flex items-center cursor-pointer ${
                comparePlans ? 'bg-[#232323]' : 'bg-gray-300'
              }`}
            >
              <div
                className={`w-5 h-5 rounded-full bg-white shadow-md transform transition-transform ${
                  comparePlans ? 'translate-x-6' : 'translate-x-0'
                }`}
              />
            </button>
          </div>
        </div>

        {/* PRICING DISPLAY: CARDS OR COMPARISON MATRIX */}
        {!comparePlans ? (
          /* CARD LAYOUT VIEW */
          <div className="mt-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 text-left max-w-7xl mx-auto items-stretch">
            {plans.map((plan, idx) => (
              <div
                key={idx}
                className={`rounded-3xl p-6 sm:p-7 flex flex-col justify-between transition-all relative ${
                  plan.popular
                    ? 'bg-white border-2 border-[#f43f5e] shadow-xl ring-1 ring-rose-500/20'
                    : 'bg-white border border-gray-200 hover:border-gray-300 hover:shadow-lg'
                }`}
              >
                {/* Popular Badge */}
                {plan.popular && (
                  <div className="absolute -top-3.5 left-1/2 -translate-x-1/2 bg-[#f43f5e] text-white text-xs font-extrabold px-3.5 py-1 rounded-full uppercase tracking-wider shadow-sm">
                    {plan.popularLabel}
                  </div>
                )}

                <div>
                  {/* Plan Name & Subtitle */}
                  <div className="font-extrabold text-2xl text-gray-900">{plan.name}</div>
                  <div className="text-xs text-gray-500 mt-1 min-h-[32px] leading-relaxed">
                    {plan.subtitle}
                  </div>

                  {/* Price */}
                  <div className="mt-6 flex items-baseline gap-1">
                    <span className="text-4xl sm:text-5xl font-black text-gray-900">
                      {typeof plan.monthlyPrice === 'number'
                        ? `$${billingCycle === 'annual' ? plan.annualPrice : plan.monthlyPrice}`
                        : plan.monthlyPrice}
                    </span>
                    {plan.billingText && (
                      <span className="text-xs text-gray-500 font-medium">{plan.billingText}</span>
                    )}
                  </div>

                  {/* Annual Savings Label */}
                  {plan.savingsLabel && (
                    <div className="mt-1 text-xs font-extrabold text-emerald-600">
                      {plan.savingsLabel}
                    </div>
                  )}

                  {/* CTA Button */}
                  <button
                    onClick={() => alert(`Selected ${plan.name} plan`)}
                    className={`w-full mt-6 py-3 rounded-2xl text-sm font-bold transition-all cursor-pointer ${plan.buttonClass}`}
                  >
                    {plan.buttonText}
                  </button>

                  {/* Feature Checklist */}
                  <div className="mt-8 space-y-3.5 border-t border-gray-100 pt-6">
                    {plan.features.map((feat, fIdx) => (
                      <div
                        key={fIdx}
                        className={`flex items-start gap-2.5 text-xs ${
                          feat.enabled ? 'text-gray-800' : 'text-gray-400 line-through'
                        }`}
                      >
                        <div
                          className={`w-4 h-4 rounded-full flex items-center justify-center shrink-0 mt-0.5 ${
                            feat.enabled
                              ? 'bg-gray-900 text-white'
                              : 'bg-gray-100 text-gray-300'
                          }`}
                        >
                          <Check className="w-2.5 h-2.5 stroke-[3]" />
                        </div>
                        <span className={feat.highlight ? 'font-bold text-gray-900' : 'font-medium'}>
                          {feat.text}
                        </span>
                        {feat.tooltip && (
                          <div className="group relative cursor-help shrink-0">
                            <Info className="w-3.5 h-3.5 text-gray-400 hover:text-gray-600" />
                            <div className="absolute left-1/2 -translate-x-1/2 bottom-full mb-1.5 hidden group-hover:block w-48 p-2 bg-gray-900 text-white text-[11px] rounded-lg shadow-xl z-20 pointer-events-none">
                              {feat.tooltip}
                            </div>
                          </div>
                        )}
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        ) : (
          /* COMPARISON MATRIX VIEW */
          <div className="mt-10 bg-white rounded-3xl border border-gray-200 overflow-hidden shadow-xl text-left">
            <div className="overflow-x-auto">
              <table className="w-full text-left border-collapse">
                <thead>
                  <tr className="border-b border-gray-200 bg-gray-50/50">
                    <th className="p-6 text-sm font-bold text-gray-900 w-1/3">Features</th>
                    <th className="p-6 text-center w-1/6">
                      <div className="text-xs text-gray-400 font-bold uppercase tracking-wider">FREE</div>
                      <div className="text-2xl font-black text-gray-900 mt-1">$0</div>
                      <div className="text-[11px] text-gray-500">per month</div>
                      <button className="mt-3 px-4 py-1.5 bg-white border border-gray-300 rounded-xl text-xs font-bold hover:bg-gray-50 w-full">Join for Free</button>
                    </th>
                    <th className="p-6 text-center w-1/6 bg-pink-50/30 border-x border-pink-100">
                      <div className="text-xs text-rose-600 font-bold uppercase tracking-wider">PRO</div>
                      <div className="text-2xl font-black text-gray-900 mt-1">
                        ${billingCycle === 'annual' ? '249' : '299'}
                      </div>
                      <div className="text-[11px] text-gray-500">per month</div>
                      <button className="mt-3 px-4 py-1.5 bg-[#232323] text-white rounded-xl text-xs font-bold hover:bg-black w-full">Start Pro</button>
                    </th>
                    <th className="p-6 text-center w-1/6">
                      <div className="text-xs text-gray-400 font-bold uppercase tracking-wider">PREMIUM</div>
                      <div className="text-2xl font-black text-gray-900 mt-1">
                        ${billingCycle === 'annual' ? '333' : '399'}
                      </div>
                      <div className="text-[11px] text-gray-500">per month</div>
                      <button className="mt-3 px-4 py-1.5 bg-white border border-gray-300 rounded-xl text-xs font-bold hover:bg-gray-50 w-full">Start Premium</button>
                    </th>
                    <th className="p-6 text-center w-1/6">
                      <div className="text-xs text-gray-400 font-bold uppercase tracking-wider">ENTERPRISE</div>
                      <div className="text-2xl font-black text-gray-900 mt-1">Custom</div>
                      <div className="text-[11px] text-gray-500">pricing</div>
                      <button className="mt-3 px-4 py-1.5 bg-white border border-gray-300 rounded-xl text-xs font-bold hover:bg-gray-50 w-full">Book a Demo</button>
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {matrixCategories.map((cat, cIdx) => (
                    <React.Fragment key={cIdx}>
                      <tr className="bg-gray-100/70 border-y border-gray-200">
                        <td colSpan={5} className="px-6 py-2.5 text-xs font-black uppercase tracking-wider text-gray-700">
                          {cat.category}
                        </td>
                      </tr>
                      {cat.rows.map((row, rIdx) => (
                        <tr key={rIdx} className="border-b border-gray-100 hover:bg-gray-50/60 transition-colors">
                          <td className="p-4 sm:px-6 text-xs font-medium text-gray-800 flex items-center gap-1.5">
                            <span>{row.feature}</span>
                            {row.tooltip && (
                              <div className="group relative cursor-help">
                                <Info className="w-3.5 h-3.5 text-gray-400" />
                                <div className="absolute left-0 bottom-full mb-1 hidden group-hover:block w-48 p-2 bg-gray-900 text-white text-[10px] rounded-lg shadow-xl z-20">
                                  {row.tooltip}
                                </div>
                              </div>
                            )}
                          </td>
                          <td className="p-4 text-center text-xs font-semibold text-gray-700">
                            {typeof row.free === 'boolean' ? (
                              row.free ? (
                                <Check className="w-4 h-4 text-emerald-600 mx-auto stroke-[3]" />
                              ) : (
                                <span className="text-gray-300">—</span>
                              )
                            ) : (
                              row.free
                            )}
                          </td>
                          <td className="p-4 text-center text-xs font-semibold text-gray-900 bg-pink-50/20 border-x border-pink-100">
                            {typeof row.pro === 'boolean' ? (
                              row.pro ? (
                                <Check className="w-4 h-4 text-emerald-600 mx-auto stroke-[3]" />
                              ) : (
                                <span className="text-gray-300">—</span>
                              )
                            ) : (
                              row.pro
                            )}
                          </td>
                          <td className="p-4 text-center text-xs font-semibold text-gray-700">
                            {typeof row.premium === 'boolean' ? (
                              row.premium ? (
                                <Check className="w-4 h-4 text-emerald-600 mx-auto stroke-[3]" />
                              ) : (
                                <span className="text-gray-300">—</span>
                              )
                            ) : (
                              row.premium
                            )}
                          </td>
                          <td className="p-4 text-center text-xs font-semibold text-gray-700">
                            {typeof row.enterprise === 'boolean' ? (
                              row.enterprise ? (
                                <Check className="w-4 h-4 text-emerald-600 mx-auto stroke-[3]" />
                              ) : (
                                <span className="text-gray-300">—</span>
                              )
                            ) : (
                              row.enterprise
                            )}
                          </td>
                        </tr>
                      ))}
                    </React.Fragment>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        )}
      </section>

      {/* TRUSTED BY BRAND LOGOS TICKER */}
      <TrustedBrands />

      {/* NOT SURE WHICH PLAN FITS BANNER */}
      <section className="mt-12 max-w-5xl mx-auto px-4">
        <div className="bg-gray-100/80 rounded-3xl p-6 sm:p-8 flex flex-col sm:flex-row items-center justify-between gap-6">
          <div>
            <h3 className="text-lg font-extrabold text-gray-900">Not sure which plan fits?</h3>
            <p className="text-xs sm:text-sm text-gray-600 mt-1 max-w-xl">
              Speak with an expert and learn more about our monthly plans. We'll show you around the platform and answer your questions.
            </p>
          </div>
          <button
            onClick={() => alert('Book a Demo form opened')}
            className="px-6 py-3 bg-[#232323] hover:bg-black text-white rounded-2xl text-xs sm:text-sm font-bold transition-all shadow-sm shrink-0 cursor-pointer"
          >
            Book a Demo
          </button>
        </div>
      </section>

      {/* EVERYTHING YOU NEED TO RUN INFLUENCER MARKETING IN ONE PLACE */}
      <section className="mt-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto">
          <h2 style={sectionHeadingStyle} className="tracking-tight">
            Everything You Need to Run Influencer Marketing in One Place.
          </h2>
          <p className="text-sm text-gray-500 mt-3 leading-relaxed">
            Search creators, post campaigns, track results, and manage your payments. Built for teams that move fast and need results they can measure.
          </p>
        </div>

        {/* AUTO ROTATING / MANUAL TABS BAR */}
        <div className="mt-10 flex flex-wrap items-center justify-center gap-2 bg-gray-100/70 p-2 rounded-2xl max-w-4xl mx-auto">
          {featureTabs.map((tab, idx) => {
            const Icon = tab.tabIcon;
            const isActive = activeTab === idx;
            return (
              <button
                key={tab.id}
                onClick={() => handleTabClick(idx)}
                className={`relative flex items-center gap-2 px-4 py-2.5 rounded-xl text-xs font-bold transition-all cursor-pointer ${
                  isActive
                    ? 'bg-[#232323] text-white shadow-md scale-105'
                    : 'text-gray-600 hover:text-gray-900 hover:bg-white/60'
                }`}
              >
                <Icon className={`w-4 h-4 ${isActive ? 'text-pink-400' : 'text-gray-500'}`} />
                <span>{tab.tabLabel}</span>

                {/* Pink indicator bar on active tab */}
                {isActive && (
                  <span className="absolute bottom-0 left-3 right-3 h-0.5 bg-[#f43f5e] rounded-full animate-pulse" />
                )}
              </button>
            );
          })}
        </div>

        {/* TAB ACTIVE CONTENT SHOWCASE */}
        <div className="mt-8 bg-gray-50/60 rounded-3xl p-6 sm:p-10 border border-gray-100 max-w-5xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
            
            {/* Left Column: Text & Features */}
            <div>
              <h3 className="text-2xl sm:text-3xl font-black text-[#f43f5e] tracking-tight">
                {featureTabs[activeTab].title}
              </h3>
              <p className="text-xs sm:text-sm text-gray-600 mt-3 leading-relaxed">
                {featureTabs[activeTab].description}
              </p>

              <ul className="mt-6 space-y-2.5">
                {featureTabs[activeTab].bullets.map((bullet, bIdx) => (
                  <li key={bIdx} className="flex items-start gap-2.5 text-xs text-gray-800 font-medium">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#f43f5e] mt-1.5 shrink-0"></span>
                    <span>{bullet}</span>
                  </li>
                ))}
              </ul>

              <div className="mt-8">
                <button
                  onClick={() => alert('Book a demo')}
                  className="px-5 py-2.5 bg-[#232323] hover:bg-black text-white text-xs font-bold rounded-xl transition-all cursor-pointer"
                >
                  Book a Demo
                </button>
              </div>
            </div>

            {/* Right Column: Visual Mockup */}
            <div>
              {featureTabs[activeTab].mockup}
            </div>

          </div>
        </div>
      </section>

      {/* CUSTOMER STORIES / BRANDS THAT RUN ON MOBB */}
      <section className="mt-24 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <span className="text-xs font-bold text-[#f43f5e] uppercase tracking-widest bg-pink-100/70 px-3 py-1 rounded-full">
            CUSTOMER STORIES
          </span>
          <h2 style={sectionHeadingStyle} className="mt-3 tracking-tight">
            Brands that Run on Mobb
          </h2>
          <p className="text-xs sm:text-sm text-gray-500 mt-2">
            Here's what teams using Mobb for ongoing creator programs have to say.
          </p>

          {/* Porsche Design Feature Quote Card */}
          <div className="mt-10 bg-white rounded-3xl p-6 sm:p-10 shadow-xl border border-gray-100 text-left grid grid-cols-1 md:grid-cols-12 gap-8 items-center">
            
            {/* Product / Campaign Image */}
            <div className="md:col-span-5 relative rounded-2xl overflow-hidden h-64 sm:h-80 shadow-md">
              <img
                src={porscheInsideCoverImg}
                alt="Porsche Design Luxury Campaign"
                className="w-full h-full object-cover"
              />
              <div className="absolute bottom-3 left-3 bg-black/70 backdrop-blur-md px-3 py-1.5 rounded-xl text-white text-xs font-bold flex items-center gap-1.5">
                <span className="w-2 h-2 rounded-full bg-rose-500 animate-pulse" />
                Porsche Design
              </div>
            </div>

            {/* Quote Body */}
            <div className="md:col-span-7 flex flex-col justify-between">
              <p className="text-base sm:text-xl font-medium text-gray-800 leading-relaxed italic">
                “Mobb allowed us to partner with high-calibre automotive and luxury creators across Europe, driving millions of high-intent impressions with flawless execution and brand safety.”
              </p>

              <div className="mt-6 pt-6 border-t border-gray-100 flex items-center justify-between">
                <div>
                  <div className="font-extrabold text-sm text-gray-900">Head of Brand Partnerships</div>
                  <div className="text-xs text-gray-500 font-medium">Porsche Design Europe</div>
                </div>

                <button
                  onClick={() => onNavigateCaseStudies?.('porsche')}
                  className="px-4 py-2 bg-[#232323] hover:bg-black text-white text-xs font-bold rounded-xl flex items-center gap-2 transition-all cursor-pointer shadow-xs group"
                >
                  <ExternalLink className="w-3.5 h-3.5 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                  View Case Study
                </button>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* CASE STUDIES GRID */}
      <section className="mt-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 style={sectionHeadingStyle} className="mb-8 text-center sm:text-left tracking-tight">
          Case Studies
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {caseStudies.map((cs, idx) => (
            <div
              key={idx}
              onClick={() => onNavigateCaseStudies?.(cs.id)}
              className="group rounded-3xl overflow-hidden border border-gray-200/70 bg-white shadow-sm hover:shadow-xl transition-all cursor-pointer flex flex-col"
            >
              <div className="h-48 relative overflow-hidden">
                <img
                  src={cs.image}
                  alt={cs.badge}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <span className="absolute top-3 left-3 bg-white/90 backdrop-blur-md text-gray-900 text-[10px] font-extrabold px-2.5 py-1 rounded-full shadow-sm">
                  {cs.badge}
                </span>
              </div>
              <div className="p-5 flex-1 flex flex-col justify-between bg-white text-gray-900">
                <h3 className="font-extrabold text-xs sm:text-sm leading-snug text-gray-900 group-hover:text-[#FF385C] transition-colors line-clamp-3">
                  {cs.title}
                </h3>
                <div className="mt-4 flex items-center gap-1 text-xs text-[#FF385C] font-extrabold group-hover:translate-x-1 transition-transform">
                  Read story <ArrowRight className="w-3.5 h-3.5" />
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* FREQUENTLY ASKED QUESTIONS */}
      <section className="mt-24 max-w-4xl mx-auto px-4 sm:px-6">
        <div className="text-center">
          <h2 style={sectionHeadingStyle} className="tracking-tight">
            Frequently Asked Questions
          </h2>
          <p className="text-xs sm:text-sm text-gray-500 mt-2">
            Everything you need to know before subscribing.
          </p>
        </div>

        <div className="mt-10 space-y-3">
          {faqs.map((faq, idx) => {
            const isOpen = openFaq === idx;
            return (
              <div
                key={idx}
                className="border border-gray-200 rounded-2xl overflow-hidden bg-white transition-all"
              >
                <button
                  onClick={() => toggleFaq(idx)}
                  className="w-full text-left p-5 flex items-center justify-between gap-4 font-bold text-sm text-gray-900 hover:bg-gray-50 transition-colors cursor-pointer"
                >
                  <span>{faq.question}</span>
                  {isOpen ? (
                    <ChevronUp className="w-4 h-4 text-gray-500 shrink-0" />
                  ) : (
                    <ChevronDown className="w-4 h-4 text-gray-400 shrink-0" />
                  )}
                </button>

                {isOpen && (
                  <div className="px-5 pb-5 pt-1 text-xs sm:text-sm text-gray-600 border-t border-gray-100 leading-relaxed bg-gray-50/50">
                    {faq.answer}
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </section>

    </div>
  );
};
