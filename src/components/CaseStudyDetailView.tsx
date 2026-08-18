import React, { useEffect } from 'react';
import { oliviaPezzenteImg } from '../avatars';
import {
  ArrowLeft,
  ChevronRight,
  Clock,
  Hotel,
  Building2,
  Sparkles,
  TrendingUp,
  Check,
  Target,
  CheckCircle2,
  Play,
  Heart,
  MessageSquare,
  ArrowRight
} from 'lucide-react';

export interface CaseStudyData {
  id: string;
  brandName: string;
  categories: string[];
  title: string;
  stats?: string[];
  bgStyle?: string;
  customGraphicType?: 'wealthsimple' | 'numi' | 'agency' | 'manetheorie' | 'orangetheory' | 'avery' | 'marriott';
  cardImage?: string;
  heroImage?: string;
  heroImageBadge?: string;
  videoUrl?: string;
  readTime?: string;
  industry?: string;
  industryDescription?: string;
  solution?: string;
  solutionHighlights?: string[];
  kpis?: string[];
  results: { metric: string; label: string; detail?: string }[];
  overview: string;
  challenge: string;
  campaignGoals?: string[];
  part1Title?: string;
  part1Sections?: { title: string; content: string }[];
  part1CreatorPreview?: {
    creatorHandle?: string;
    creatorAvatar?: string;
    isPro?: boolean;
    caption?: string;
    videoBgImage?: string;
    videoUrl?: string;
    likes?: string;
    comments?: string;
  };
  part2Title?: string;
  part2Sections?: { title: string; content: string }[];
  keyDeliverables: string[];
  quote: {
    headline?: string;
    text: string;
    author: string;
    role: string;
  };
}

export interface CaseStudyDetailViewProps {
  data: CaseStudyData;
  onBack: () => void;
  onNavigateSearch?: () => void;
  suggestedStudies?: CaseStudyData[];
  onSelectStudy?: (id: string) => void;
}

export const CaseStudyDetailView: React.FC<CaseStudyDetailViewProps> = ({
  data,
  onBack,
  onNavigateSearch,
  suggestedStudies = [],
  onSelectStudy
}) => {
  // Scroll to top when data changes
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, [data.id]);

  // Fallbacks
  const heroImg = data.heroImage || (data.id === 'marriott' 
    ? "https://images.unsplash.com/photo-1566073771259-6a8506099945?auto=format&fit=crop&w=1600&q=80"
    : "https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=1600&q=80");

  const heroBadge = data.heroImageBadge || `${data.brandName} Campaign Highlights`;

  const solutionList = data.solutionHighlights || [
    "Collaboration with high-engagement Niche Creators",
    "Diverse audience targeting across TikTok and Instagram",
    "End-to-end automated brief, escrow, & content licensing"
  ];

  const defaultKpis = [
    "Maximize organic & paid social audience reach",
    "Optimize engagement rates and cost per click",
    "Generate high-converting UGC video assets"
  ];

  const creatorPreview = data.part1CreatorPreview || {
    creatorHandle: "@sophie.travels",
    creatorAvatar: oliviaPezzenteImg,
    isPro: true,
    caption: `Creating authentic content for @${data.brandName.toLowerCase().replace(/\s+/g, '')} ✨`,
    videoBgImage: "https://images.unsplash.com/photo-1527631746610-bca00a040d60?auto=format&fit=crop&w=600&q=80",
    likes: "142.8K",
    comments: "2,410"
  };

  return (
    <div className="w-full bg-white text-gray-900 font-sans pb-24 animate-fadeIn">
      
      {/* BREADCRUMB & BACK NAVIGATION HEADER */}
      <div className="bg-gray-50 border-b border-gray-200/80 py-4 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 text-xs sm:text-sm">
          
          {/* Breadcrumb path */}
          <div className="flex items-center gap-1.5 text-gray-500 flex-wrap">
            <button
              onClick={onBack}
              className="hover:text-gray-900 transition-colors font-medium cursor-pointer"
            >
              Case Studies
            </button>
            <ChevronRight className="w-3.5 h-3.5 text-gray-400 shrink-0" />
            <span className="text-gray-600 font-medium">{data.categories[0] || 'Brand'}</span>
            <ChevronRight className="w-3.5 h-3.5 text-gray-400 shrink-0" />
            <span className="text-gray-900 font-bold truncate max-w-[280px] sm:max-w-md">{data.title}</span>
          </div>

          {/* Back Button */}
          <button
            onClick={onBack}
            className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white border border-gray-300 text-gray-800 text-xs font-bold hover:bg-gray-100 transition-all cursor-pointer shadow-xs shrink-0"
          >
            <ArrowLeft className="w-3.5 h-3.5 text-[#f43f5e]" />
            <span>Back to Case Studies</span>
          </button>
        </div>
      </div>

      {/* HERO SECTION */}
      <section className="pt-8 sm:pt-12 pb-10 px-4 sm:px-6 lg:px-8 max-w-5xl mx-auto">
        {/* Metadata badges */}
        <div className="flex flex-wrap items-center gap-2.5 mb-5">
          {data.categories.map((cat, idx) => (
            <span
              key={idx}
              className="bg-rose-50 text-[#f43f5e] border border-rose-200/60 text-xs font-extrabold px-3.5 py-1 rounded-full uppercase tracking-wider"
            >
              {cat}
            </span>
          ))}
          {data.readTime && (
            <span className="text-xs text-gray-500 font-medium flex items-center gap-1">
              <Clock className="w-3.5 h-3.5 text-gray-400" />
              {data.readTime}
            </span>
          )}
        </div>

        {/* Full-width Luxury Banner Image */}
        <div className="w-full h-[320px] rounded-3xl overflow-hidden mb-8 shadow-md relative group">
          <img
            src={heroImg}
            alt={`${data.brandName} Campaign Showcase`}
            className="w-full h-[320px] object-cover rounded-3xl transition-transform duration-700 group-hover:scale-105"
            referrerPolicy="no-referrer"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent"></div>
          <div className="absolute bottom-4 left-6 flex items-center gap-2 bg-white/90 backdrop-blur-md px-3.5 py-1.5 rounded-full text-xs font-bold text-slate-800 shadow-sm border border-white/50">
            <Hotel className="w-3.5 h-3.5 text-[#f43f5e]" />
            <span>{heroBadge}</span>
          </div>
        </div>

        {/* Main Title */}
        <h1 className="text-3xl sm:text-5xl font-black text-gray-900 tracking-tight leading-[1.15]">
          {data.title}
        </h1>
      </section>

      {/* TOP HIGHLIGHT CARDS (INDUSTRY / SOLUTION / KPIS) */}
      <section className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
          {/* Industry Card */}
          <div className="bg-slate-50 border border-slate-200 text-slate-900 p-6 rounded-2xl shadow-xs flex flex-col justify-between">
            <div>
              <div className="flex items-center gap-2 text-[#f43f5e] mb-3">
                <Building2 className="w-5 h-5" />
                <span className="text-xs font-extrabold uppercase tracking-widest text-slate-500">Industry</span>
              </div>
              <div className="text-xl font-extrabold text-slate-900">
                {data.industry || data.categories[0]}
              </div>
              <p className="text-xs text-slate-600 mt-2 leading-relaxed">
                {data.industryDescription || "Enterprise brand campaigns scaling digital reach through niche creator activations."}
              </p>
            </div>
            <div className="mt-6 pt-4 border-t border-slate-200 text-[11px] text-slate-500 font-semibold">
              Brand: <span className="text-slate-900 font-bold">{data.brandName}</span>
            </div>
          </div>

          {/* Solution Card */}
          <div className="bg-slate-50 border border-slate-200 text-slate-900 p-6 rounded-2xl shadow-xs flex flex-col justify-between">
            <div>
              <div className="flex items-center gap-2 text-amber-500 mb-3">
                <Sparkles className="w-5 h-5" />
                <span className="text-xs font-extrabold uppercase tracking-widest text-slate-500">Solution</span>
              </div>
              <ul className="space-y-2 text-xs text-slate-700">
                {solutionList.map((item, i) => (
                  <li key={i} className="flex items-start gap-1.5">
                    <Check className="w-3.5 h-3.5 text-emerald-600 shrink-0 mt-0.5" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="mt-6 pt-4 border-t border-slate-200 text-[11px] text-slate-500 font-semibold">
              Platform: <span className="text-[#f43f5e] font-bold">Mobb Operating System</span>
            </div>
          </div>

          {/* KPIs Card */}
          <div className="bg-slate-50 border border-slate-200 text-slate-900 p-6 rounded-2xl shadow-xs flex flex-col justify-between">
            <div>
              <div className="flex items-center gap-2 text-emerald-600 mb-3">
                <TrendingUp className="w-5 h-5" />
                <span className="text-xs font-extrabold uppercase tracking-widest text-slate-500">Key Campaign KPIs</span>
              </div>
              <ul className="space-y-2 text-xs text-slate-700">
                {(data.kpis && data.kpis.length > 0 ? data.kpis : defaultKpis).map((kpi, i) => (
                  <li key={i} className="flex items-start gap-1.5">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#f43f5e] shrink-0 mt-1.5"></span>
                    <span>{kpi}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="mt-6 pt-4 border-t border-slate-200 text-[11px] text-slate-500 font-semibold">
              Performance: <span className="text-emerald-600 font-bold">Verified Results</span>
            </div>
          </div>
        </div>
      </section>

      {/* RESULTS METRICS GRID BAR */}
      <section className="mt-12 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-slate-50 border border-slate-200/80 rounded-3xl p-8 shadow-xs">
          <h2 className="text-center text-xs font-bold text-slate-400 uppercase tracking-widest mb-6">
            VERIFIED CAMPAIGN RESULTS
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
            {data.results.map((res, idx) => (
              <div key={idx} className="space-y-1">
                <div className="text-3xl sm:text-4xl font-black text-[#f43f5e] tracking-tight">
                  {res.metric}
                </div>
                <div className="text-xs font-bold text-slate-900 mt-1">
                  {res.label}
                </div>
                {res.detail && (
                  <div className="text-[11px] text-slate-500 font-medium">
                    {res.detail}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* MAIN BODY CONTENT ARTICLE */}
      <section className="mt-12 max-w-4xl mx-auto px-4 sm:px-6 text-gray-800 text-sm sm:text-base leading-relaxed space-y-10">
        
        {/* Overview Section */}
        <div className="space-y-4">
          <h2 className="text-2xl sm:text-3xl font-extrabold text-gray-900 tracking-tight">
            The Power of Niche Creators: The {data.brandName} Campaign
          </h2>
          <p className="text-gray-600 leading-relaxed text-base">
            {data.overview}
          </p>
        </div>

        {/* Challenge Section */}
        <div className="space-y-4 bg-slate-50 p-6 sm:p-8 rounded-3xl border border-slate-200/60">
          <h3 className="text-xl font-extrabold text-gray-900 tracking-tight flex items-center gap-2">
            <Target className="w-5 h-5 text-[#f43f5e]" />
            <span>The Challenge</span>
          </h3>
          <p className="text-gray-700 leading-relaxed">
            {data.challenge}
          </p>
        </div>

        {/* Campaign Goals */}
        {data.campaignGoals && data.campaignGoals.length > 0 && (
          <div className="bg-slate-900 text-white p-6 sm:p-8 rounded-3xl space-y-4 shadow-lg">
            <h3 className="text-xl font-extrabold text-white tracking-tight flex items-center gap-2">
              <CheckCircle2 className="w-5 h-5 text-rose-400" />
              <span>Core Campaign Goals</span>
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
              {data.campaignGoals.map((goal, idx) => (
                <div key={idx} className="bg-white/10 p-3.5 rounded-2xl border border-white/10 text-xs text-gray-200 flex items-start gap-2.5">
                  <span className="w-5 h-5 rounded-full bg-rose-500 text-white font-bold text-[10px] flex items-center justify-center shrink-0 mt-0.5">
                    {idx + 1}
                  </span>
                  <span className="leading-snug">{goal}</span>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Part 1 Sections - 2-Column Layout with Creator Video Phone Preview */}
        {data.part1Title && (
          <div className="space-y-6 pt-4">
            <div className="inline-block bg-rose-50 text-[#f43f5e] text-xs font-extrabold px-3 py-1 rounded-full uppercase tracking-wider">
              PART 1
            </div>
            <h2 className="text-2xl font-extrabold text-gray-900 tracking-tight">
              {data.part1Title}
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-start">
              {/* Left Column (8 cols): Text Content */}
              <div className="md:col-span-8 space-y-6">
                {data.part1Sections?.map((sec, idx) => (
                  <div key={idx} className="space-y-2">
                    <h4 className="font-extrabold text-gray-900 text-base">
                      {sec.title}
                    </h4>
                    <p className="text-gray-600 leading-relaxed">
                      {sec.content}
                    </p>
                  </div>
                ))}
              </div>

              {/* Right Column (4 cols): Portrait Mobile Phone Preview */}
              <div className="md:col-span-4 flex justify-center">
                <div className="w-full max-w-[260px] bg-slate-900 rounded-[2.5rem] p-3 shadow-2xl border-4 border-slate-800 relative overflow-hidden group">
                  {/* Top Notch Pill */}
                  <div className="w-20 h-3.5 bg-slate-800 rounded-full mx-auto mb-2 flex items-center justify-center">
                    <div className="w-2.5 h-2.5 rounded-full bg-slate-900"></div>
                  </div>

                  {/* Mobile Video Frame */}
                  <div className="relative rounded-[1.8rem] overflow-hidden aspect-[9/16] bg-slate-800">
                    {(creatorPreview.videoUrl || data.videoUrl) ? (
                      <video
                        src={creatorPreview.videoUrl || data.videoUrl}
                        poster={creatorPreview.videoBgImage || heroImg}
                        autoPlay
                        loop
                        muted
                        playsInline
                        controls
                        className="w-full h-full object-cover"
                      />
                    ) : (
                      <>
                        <img
                          src={creatorPreview.videoBgImage}
                          alt="Creator Video Preview"
                          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                          referrerPolicy="no-referrer"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent"></div>

                        {/* Play Icon Center Overlay */}
                        <div className="absolute inset-0 flex items-center justify-center">
                          <div className="w-11 h-11 rounded-full bg-white/30 backdrop-blur-md flex items-center justify-center text-white border border-white/40 shadow-lg group-hover:scale-110 transition-transform">
                            <Play className="w-5 h-5 fill-white ml-0.5" />
                          </div>
                        </div>
                      </>
                    )}

                    {/* Creator Social Overlay */}
                    <div className="absolute bottom-3 left-3 right-3 text-white space-y-1.5 pointer-events-none">
                      <div className="flex items-center gap-1.5">
                        <div className="w-6 h-6 rounded-full bg-[#f43f5e] p-0.5 border border-white shrink-0">
                          <img
                            src={creatorPreview.creatorAvatar}
                            alt="Creator Avatar"
                            className="w-full h-full object-cover rounded-full"
                            referrerPolicy="no-referrer"
                          />
                        </div>
                        <div className="text-[10px] font-bold truncate">{creatorPreview.creatorHandle}</div>
                        {creatorPreview.isPro && (
                          <span className="bg-[#f43f5e] text-white text-[8px] font-extrabold px-1.5 py-0.2 rounded-full">
                            PRO
                          </span>
                        )}
                      </div>
                      <p className="text-[10px] text-slate-200 line-clamp-2 leading-tight font-medium">
                        {creatorPreview.caption}
                      </p>
                      <div className="flex items-center gap-3 text-[9px] text-slate-300 pt-0.5 font-semibold">
                        <span className="flex items-center gap-1">
                          <Heart className="w-3 h-3 text-rose-500 fill-rose-500" /> {creatorPreview.likes}
                        </span>
                        <span className="flex items-center gap-1">
                          <MessageSquare className="w-3 h-3" /> {creatorPreview.comments}
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Part 2 Sections */}
        {data.part2Title && (
          <div className="space-y-6 pt-4 border-t border-gray-100">
            <div className="inline-block bg-rose-50 text-[#f43f5e] text-xs font-extrabold px-3 py-1 rounded-full uppercase tracking-wider">
              PART 2
            </div>
            <h2 className="text-2xl font-extrabold text-gray-900 tracking-tight">
              {data.part2Title}
            </h2>

            {data.part2Sections?.map((sec, idx) => (
              <div key={idx} className="space-y-2">
                <h4 className="font-extrabold text-gray-900 text-base">
                  {sec.title}
                </h4>
                <p className="text-gray-600 leading-relaxed">
                  {sec.content}
                </p>
              </div>
            ))}
          </div>
        )}

        {/* Campaign Deliverables Pills */}
        <div className="pt-6">
          <h3 className="font-extrabold text-gray-900 text-lg mb-3">
            Campaign Deliverables & Assets Included
          </h3>
          <div className="flex flex-wrap gap-2.5">
            {data.keyDeliverables.map((deliv, idx) => (
              <span
                key={idx}
                className="inline-flex items-center gap-2 bg-emerald-50 text-emerald-800 text-xs font-bold px-4 py-2 rounded-xl border border-emerald-200/80 shadow-xs"
              >
                <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                {deliv}
              </span>
            ))}
          </div>
        </div>

        {/* QUOTE TESTIMONIAL BANNER */}
        {data.quote && (
          <div className="bg-rose-50/70 border-l-4 border-[#f43f5e] p-6 sm:p-8 rounded-r-3xl my-10 space-y-4">
            {data.quote.headline && (
              <h3 className="text-lg font-black text-gray-900 not-italic">
                "{data.quote.headline}"
              </h3>
            )}
            <p className="text-base font-medium italic text-gray-800 leading-relaxed">
              "{data.quote.text}"
            </p>
            <div className="pt-2 flex items-center gap-3 not-italic">
              <div className="w-10 h-10 rounded-full bg-[#f43f5e] text-white font-black text-sm flex items-center justify-center shadow-sm">
                {data.quote.author.charAt(0)}
              </div>
              <div>
                <div className="text-sm font-extrabold text-gray-900">{data.quote.author}</div>
                <div className="text-xs text-gray-600 font-medium">{data.quote.role}</div>
              </div>
            </div>
          </div>
        )}

        {/* REDESIGNED BOTTOM CTA CALLOUT BOX */}
        <div className="bg-gradient-to-r from-rose-50 to-orange-50 border border-rose-100 rounded-3xl text-slate-900 p-8 sm:p-12 text-center shadow-md space-y-5 my-12">
          <h3 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight">
            Ready to replicate these results for your brand?
          </h3>
          <p className="text-xs sm:text-sm text-slate-600 max-w-lg mx-auto leading-relaxed">
            Join over 500,000+ brands finding creators, running campaigns, and getting high-performing content on Mobb.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-3 pt-2">
            <button
              onClick={() => {
                if (onNavigateSearch) onNavigateSearch();
              }}
              className="w-full sm:w-auto px-8 py-3.5 bg-[#f43f5e] hover:bg-rose-600 text-white text-xs font-bold rounded-2xl transition-all shadow-md flex items-center justify-center gap-2 cursor-pointer"
            >
              <span>Find Creators Now</span>
              <ArrowRight className="w-4 h-4" />
            </button>
            <button
              onClick={onBack}
              className="w-full sm:w-auto px-6 py-3.5 bg-white hover:bg-slate-50 text-slate-800 text-xs font-bold rounded-2xl transition-all border border-slate-200 shadow-xs cursor-pointer"
            >
              Explore More Case Studies
            </button>
          </div>
        </div>

      </section>

      {/* SUGGESTED / RELATED CASE STUDIES */}
      {suggestedStudies.length > 0 && (
        <section className="mt-20 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 pt-12 border-t border-gray-200">
          <h2 className="text-2xl font-extrabold text-gray-900 tracking-tight mb-8">
            Suggested Case Studies
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {suggestedStudies.map((study) => (
              <div
                key={study.id}
                onClick={() => onSelectStudy && onSelectStudy(study.id)}
                className={`group relative rounded-2xl sm:rounded-3xl overflow-hidden shadow-md hover:shadow-2xl transition-all duration-300 cursor-pointer h-[320px] ${study.bgStyle || 'bg-slate-900'} border border-white/10 flex flex-col justify-end`}
              >
                <div className="absolute inset-0 z-10 bg-gradient-to-t from-black/90 via-black/50 to-transparent"></div>
                <div className="relative z-20 p-5 text-white space-y-2">
                  <div className="flex items-center gap-1.5">
                    {study.categories.map((cat, idx) => (
                      <span
                        key={idx}
                        className="bg-white/25 backdrop-blur-md text-white text-[10px] font-bold px-2.5 py-0.5 rounded-full border border-white/20"
                      >
                        {cat}
                      </span>
                    ))}
                  </div>
                  {study.stats && study.stats.length > 0 && (
                    <div className="text-xs text-white/90 font-medium">
                      {study.stats.join(' • ')}
                    </div>
                  )}
                  <h3 className="text-sm font-extrabold text-white leading-snug group-hover:text-pink-200 transition-colors">
                    {study.title}
                  </h3>
                </div>
              </div>
            ))}
          </div>
        </section>
      )}

    </div>
  );
};
