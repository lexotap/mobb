import React, { useState, useEffect, useRef } from 'react';
import {
  ArrowRight,
  Sparkles,
  TrendingUp,
  Users,
  CheckCircle2,
  DollarSign,
  Clock,
  X,
  ExternalLink,
  ChevronRight,
  ChevronLeft,
  Building2,
  BarChart3,
  Search,
  ShieldCheck,
  ArrowLeft,
  Share2,
  Download,
  Hotel,
  Target,
  Award,
  Globe,
  Compass,
  Heart,
  MessageSquare,
  Eye,
  EyeOff,
  Lock,
  Key,
  Check,
  Play
} from 'lucide-react';
import { CaseStudyDetailView, CaseStudyData } from './CaseStudyDetailView';
import {
  marriottBonvoyImg,
  marriottCaseStudyImg,
  marriottVideo,
  theDorianCardCoverImg,
  theDorianInsideCoverImg,
  theDorianVideo,
  milleCardCoverImg,
  milleInsideCoverImg,
  milleVideo,
  porscheCardCoverImg,
  porscheInsideCoverImg,
  porscheVideo,
  orakiCardCoverImg,
  orakiInsideCoverImg,
  orakiVideo,
  snagTightsCardCoverImg,
  snagTightsInsideCoverImg,
  snagTightsVideo,
  omnipetCardCoverImg,
  omnipetInsideCoverImg,
  omnipetVideo,
  bakesyCardCoverImg,
  bakesyInsideCoverImg,
  bakesyVideo,
} from '../casestudies';

interface CaseStudiesPageProps {
  onNavigateHome?: () => void;
  onNavigateSearch?: () => void;
  initialStudyId?: string | null;
}

export type CaseStudy = CaseStudyData;

const mainTitleStyle: React.CSSProperties = {
  fontFamily: 'Inter, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif',
  fontStyle: 'normal',
  fontWeight: 700,
  color: 'rgb(51, 51, 51)',
  fontSize: '48px',
  lineHeight: '60px',
};

const caseStudiesData: CaseStudy[] = [
  {
    id: 'marriott',
    brandName: 'Marriott Bonvoy',
    categories: ['Hospitality'],
    title: "Marriott Bonvoy campaign reaches 11M through Niche Creator partnership",
    stats: ['11M+ reach', '489 content pieces', '2.68M+ engagement', '27 creators'],
    bgStyle: 'bg-gradient-to-br from-[#1c1917] via-[#292524] to-[#0c0a09]',
    customGraphicType: 'marriott',
    readTime: '3 minutes read',
    cardImage: marriottBonvoyImg,
    heroImage: marriottCaseStudyImg,
    heroImageBadge: 'Marriott Bonvoy • EMEA Niche Creator Campaign',
    videoUrl: marriottVideo,
    industry: 'Hospitality, Luxury Travel & Hotels',
    industryDescription: "Marriott Bonvoy encompasses over 30 distinctive hotel brands offering travelers unforgettable stays and curated regional experiences across Europe and worldwide.",
    solutionHighlights: [
      "Targeted selection and contracting of verified European travel & lifestyle Niche Creators",
      "Tailored creator activations covering romantic getaways, pet-friendly stays, and family holidays",
      "Centralized content approval workflows, multi-market licensing, and automated escrow payouts"
    ],
    overview: "Marriott Bonvoy stands as the pinnacle of traveler loyalty programs. Not only does it benefit members, but it also keenly aligns with their interests, making it a top choice for seasoned travelers. Furthermore, Marriott Bonvoy is a brand for everyone—boasting over 30 hotel brands and offering a vast array of distinctive experiences and unrivaled service to cater to all tastes and preferences. By harnessing the power of Niche Creators on Mobb, Marriott Bonvoy optimized its digital marketing campaign, significantly improving KPIs across the board.",
    challenge: "To effectively highlight the Marriott Bonvoy portfolio of hotel brands, the primary objective was to form collaborations with Niche Creators in various European markets. This strategic move was designed to showcase all the different types of hotel experiences (from luxury boutique stays to pet-friendly family retreats) and to strengthen the affiliation between Marriott Bonvoy and its portfolio in EMEA.",
    solution: "Mobb provided a centralized operating system to select, contract, and manage high-engagement Niche Creators. Mobb streamlined the entire campaign workflow—from creator discovery, vetting, and geo-location targeting to content draft approvals, real-time analytics monitoring, and automated escrow payouts.",
    kpis: [
      "Reach a high number of organic & paid interactions across TikTok & Instagram",
      "High cumulative audience reach through targeted influencer collaborations",
      "Increase authentic video content output across diverse hotel locations",
      "Optimize Cost per View (CPV) to reach $0.02—well below standard industry benchmarks"
    ],
    campaignGoals: [
      "Boost Marriott Bonvoy enrollments by showcasing diverse hotel experiences.",
      "Collaborate with creators who make tailored content for different types of travelers.",
      "Highlight the vast selection of Marriott hotels to suit all travel tastes.",
      "Encourage sign-ups by inspiring them with Marriott's portfolio using persuasive calls to action."
    ],
    part1Title: "Part 1: The Ideal Ambassador & European Creator Selection",
    part1Sections: [
      {
        title: "The Selection Process",
        content: "First, selecting the appropriate influencers was predominantly about quality over quantity. Mobb sought creators with authentic, engaged followers and a genuine passion for lifestyle or travel, particularly those active on TikTok and Instagram."
      },
      {
        title: "Identifying the Perfect Niche Creators",
        content: "Secondly, equally important, Marriott Bonvoy tailored experiences for everyone—from pet lovers with dog-friendly hotel stays to couples seeking romantic unique weekend getaways, friend groups on shared adventures, and families looking for kid-friendly spots."
      },
      {
        title: "Choosing the Right Location",
        content: "Lastly, the campaign targeted influencers based in or with a significant following in key European markets including France, Germany, and the UK. Again, this strategy ensured a broad yet highly focused regional reach."
      }
    ],
    part1CreatorPreview: {
      creatorHandle: "@marriottbonvoy",
      creatorAvatar: marriottBonvoyImg,
      isPro: true,
      caption: "Exploring Europe with @marriottbonvoy! 30+ distinctive hotel brands tailored for every traveler journey 🏨✨ #MarriottBonvoy #TravelPartner",
      videoBgImage: marriottBonvoyImg,
      videoUrl: marriottVideo,
      likes: "184.5K",
      comments: "3,280"
    },
    part2Title: "Part 2: The Campaign Journey with Mobb",
    part2Sections: [
      {
        title: "Efficient Selection & Outreach",
        content: "First, our influencer marketing platform finely tuned the campaign brief to Marriott's vision, ensuring seamless satisfaction and an exceptional 85% creator response rate."
      },
      {
        title: "Content Draft & Approval",
        content: "Mobb streamlines content creation and approval workflows, fostering direct collaboration for brand-aligned content that matches Marriott's strict brand standards."
      },
      {
        title: "Advanced Monitoring & Insights",
        content: "Lastly, Mobb provides real-time tracking and ROI insights across platforms, simplifying multi-market campaign performance optimization."
      }
    ],
    results: [
      { metric: '11M+', label: 'Cumulative Audience Reach', detail: 'CPV of $0.02' },
      { metric: '489', label: 'Pieces of Content Published', detail: 'Reels & TikToks' },
      { metric: '2.68M+', label: 'Total Engagements', detail: 'CPE of $0.30' },
      { metric: '27', label: 'Shortlisted Niche Creators', detail: 'EMEA Region' }
    ],
    quote: {
      headline: "A Game Changing Partnership",
      text: "We were glad to be partnering with Mobb on this campaign, which resulted in a strong impact in the targeted markets. Again, their motivation and results-oriented approach has been really appreciated. We look forward to working with Mobb in the future.",
      author: "Cecilia Giraud",
      role: "Director Content Marketing, EMEA @ Marriott"
    },
    keyDeliverables: [
      "489 Travel & Hotel UGC Videos",
      "11M+ Cumulative Audience Reach",
      "10X Lower CPM Than Industry Average",
      "Full Multi-Market License Rights"
    ]
  },
  {
    id: 'the-dorian',
    brandName: 'The Dorian Hotel',
    categories: ['Hospitality & Leisure'],
    title: "The Dorian: Oscar Wilde-Inspired Editorial Production for Calgary's Michelin Key Hotel",
    stats: ['Michelin Key', 'Dark Academia UI', '3.5x Bookings', 'Bujou Studio'],
    bgStyle: 'bg-gradient-to-br from-amber-950 via-stone-900 to-yellow-950',
    customGraphicType: 'marriott',
    readTime: '4 minutes read',
    cardImage: theDorianCardCoverImg,
    heroImage: theDorianInsideCoverImg,
    heroImageBadge: 'The Dorian • Bujou Studio Editorial & Hospitality Launch',
    videoUrl: theDorianVideo,
    industry: 'Luxury Hospitality, Boutique Hotels & High Fashion',
    industryDescription: "Calgary's premier Michelin Key hotel inspired by Oscar Wilde’s 'The Picture of Dorian Gray', blending British sophistication with modern luxury.",
    solutionHighlights: [
      'Produced cinematic dark academia editorial photo & video campaigns blurring hospitality and art direction',
      'Crafted high-fashion digital storytelling and VIP experiential launch collateral',
      'Surged direct luxury suite booking inquiries by 3.5x across North American markets'
    ],
    kpis: [
      "Establish The Dorian as Western Canada's most iconic luxury boutique hotel",
      'Capture Oscar Wilde-inspired dark academia aesthetics in commercial editorial campaigns',
      'Drive high-converting direct suite bookings and luxury event reservations',
      'Earn international Michelin Key hospitality acclaim and luxury editorial press'
    ],
    results: [
      { metric: '3.5x', label: 'Direct Suite Bookings', detail: 'High-Intent Guest Enquiries' },
      { metric: 'Michelin Key', label: 'Hospitality Rating', detail: 'First in Calgary Market' },
      { metric: '2.8M+', label: 'Editorial Impressions', detail: 'Luxury & Lifestyle Reach' },
      { metric: '92%', label: 'Weekend Occupancy Rate', detail: 'Premier Downtown Destination' }
    ],
    overview: "The Dorian, Autograph Collection — Calgary's iconic Michelin Key hotel inspired by Oscar Wilde — partnered with Bujou Studio to direct its editorial production and launch campaign. Bujou Studio crafted high-fashion photography and dark academia visual storytelling that blurred the lines between luxury hospitality and fine art direction.",
    challenge: "Standing out in a saturated luxury hotel landscape requires moving beyond generic room photos. The Dorian needed an opulent visual identity that embodied Oscar Wilde’s literary wit, dramatic elegance, and modern British bespoke tailoring.",
    campaignGoals: [
      "Execute an Oscar Wilde-inspired editorial photo and video shoot in Calgary.",
      "Develop high-fashion marketing collateral for hotel dining, rooftop lounges, and penthouse suites.",
      "Drive direct suite bookings to reduce reliance on third-party OTAs.",
      "Position The Dorian as an architectural and cultural landmark in Western Canada."
    ],
    part1Title: "Part 1: Dark Academia Editorial Production & Literary Craftsmanship",
    part1Sections: [
      {
        title: "Oscar Wilde Visual Storytelling",
        content: "Styled model talent with bespoke British tailoring and moody lighting to reflect the twin personas of Dorian Gray and Oscar Wilde."
      },
      {
        title: "Cinematic Suite & Dining Art Direction",
        content: "Captured rooftop views, velvet lounge seating, and craft cocktail mixology through high-fashion medium format photography."
      },
      {
        title: "Bespoke VIP Launch Collateral",
        content: "Designed printed leather-bound press books, digital suite guides, and interactive guest experience menus."
      }
    ],
    part1CreatorPreview: {
      creatorHandle: "@thedorianhotel",
      creatorAvatar: theDorianCardCoverImg,
      isPro: true,
      caption: "Resist everything except temptation 🍸 Honored to receive Calgary's first Michelin Key! Editorial production by @BujouStudio. #TheDorianHotel #MichelinKey #LuxuryTravel",
      videoBgImage: theDorianInsideCoverImg,
      videoUrl: theDorianVideo,
      likes: "78.4K",
      comments: "1,420"
    },
    part2Title: "Part 2: Michelin Key Distinction & 3.5x Direct Booking Surge",
    part2Sections: [
      {
        title: "3.5x Direct Suite Booking Increase",
        content: "High-fashion editorial visuals on the website and paid social turned casual browsers into high-paying suite guests."
      },
      {
        title: "Calgary's First Michelin Key Recognition",
        content: "Elevated brand prestige earned global hospitality accolades and top feature slots in Vogue and Travel + Leisure."
      },
      {
        title: "92% Average Weekend Occupancy",
        content: "Established The Dorian rooftop lounge and dining rooms as the most sought-after weekend destination in Calgary."
      }
    ],
    keyDeliverables: [
      "Bujou Studio Editorial Photo & Video Production",
      "Dark Academia Art Direction & Fashion Styling",
      "Hospitality Launch PR & Influencer Premieres",
      "Digital Suite Experience & Campaign Collateral"
    ],
    quote: {
      headline: "Blurring the Boundaries Between Luxury Hospitality and Fine Art",
      text: "Bujou Studio captured the literary soul of The Dorian with breathtaking elegance. Their editorial direction helped us achieve Calgary's first Michelin Key and drove a 3.5x lift in direct bookings.",
      author: "Director of Brand Marketing",
      role: "The Dorian Hotel x Bujou Studio"
    }
  },
  {
    id: 'mille',
    brandName: 'Mille Restaurant & Cafe',
    categories: ['Food & Beverage', 'Hospitality & Leisure'],
    title: "Mille: European-Inspired Restaurant Launch & 3x Revenue Growth",
    stats: ['3x Revenue', '94% Capacity', '1.2M Impressions', 'Bujou Launch'],
    bgStyle: 'bg-gradient-to-br from-rose-950 via-pink-900 to-amber-950',
    customGraphicType: 'marriott',
    readTime: '4 minutes read',
    cardImage: milleCardCoverImg,
    heroImage: milleInsideCoverImg,
    heroImageBadge: 'Mille Restaurant • Bujou Studio Full Brand & PR Launch',
    videoUrl: milleVideo,
    industry: 'Fine Dining, Artisanal Bakery & European Cafe',
    industryDescription: 'Modern European restaurant and Parisian-style cafe delivering culinary craftsmanship and elegant dining experiences.',
    solutionHighlights: [
      'Executed end-to-end launch strategy covering brand identity, PR, and VIP tasting events',
      'Mobilized targeted influencer and food critic campaigns generating 1.2M+ viral impressions',
      'Tripled target opening revenue and maintained near 100% reservation occupancy'
    ],
    kpis: [
      "Launch Mille as Calgary's premier destination for European dining and daytime pastries",
      'Build immediate local buzz and viral social proof ahead of grand opening',
      'Fill reservation calendars weeks in advance for dinner and weekend brunch',
      'Drive repeat local food lover traffic and corporate catering inquiries'
    ],
    results: [
      { metric: '3.0x', label: 'Opening Month Revenue', detail: 'Exceeded Target Projections' },
      { metric: '94%', label: 'Average Seat Capacity', detail: 'Consistently Booked Dining' },
      { metric: '1.2M+', label: 'Local Foodie Reach', detail: 'Viral Instagram & TikTok Views' },
      { metric: '4.9★', label: 'Diner Satisfaction', detail: 'Overwhelming Positive Press' }
    ],
    overview: "Mille Restaurant & Cafe, a modern European culinary destination, partnered with Bujou Studio for its full-scale brand launch. Bujou Studio delivered creative direction, digital ad campaigns, media PR, influencer tasting dinners, and launch event production that tripled opening revenue expectations.",
    challenge: "Opening a new high-end restaurant in a competitive dining scene requires creating immediate line-around-the-block anticipation while clearly communicating the dual concept of daytime Parisian cafe and evening European bistro.",
    campaignGoals: [
      "Develop a sophisticated European visual identity and food photography library.",
      "Host exclusive VIP media preview dinners for top food critics and lifestyle creators.",
      "Drive early online reservation bookings via OpenTable and Instagram integration.",
      "Achieve multi-channel coverage across local publications and food blogs."
    ],
    part1Title: "Part 1: Culinary Photography & VIP Influencer Preview Gala",
    part1Sections: [
      {
        title: "Artisanal Food & Interior Photography",
        content: "Captured Mille's handcrafted pastries, natural wine list, and marble dining counters in warm, golden-hour editorial light."
      },
      {
        title: "Exclusive VIP Media Preview Gala",
        content: "Hosted an intimate multi-course tasting event for Calgary's leading culinary journalists, influencers, and city tastemakers."
      },
      {
        title: "Targeted Geo-Fenced Social Campaigns",
        content: "Ran localized short-form video ads showcasing chef preparation and ambient interior aesthetics."
      }
    ],
    part1CreatorPreview: {
      creatorHandle: "@mille.yyc",
      creatorAvatar: milleCardCoverImg,
      isPro: true,
      caption: "European dining elegance in the heart of the city 🥐✨ Unforgettable launch experience crafted by @BujouStudio! #MilleCalgary #YYCFoodies #EuropeanBistro",
      videoBgImage: milleInsideCoverImg,
      videoUrl: milleVideo,
      likes: "42.9K",
      comments: "810"
    },
    part2Title: "Part 2: 3x Revenue Projections & 94% Reservation Capacity",
    part2Sections: [
      {
        title: "3x Opening Month Revenue Target",
        content: "Overwhelming demand from launch PR and viral social campaigns tripled forecasted sales goals."
      },
      {
        title: "94% Seat Capacity Occupancy",
        content: "Mille operated at near maximum dining capacity during both weekday lunches and weekend dinner services."
      },
      {
        title: "1.2 Million+ Local Social Impressions",
        content: "User-generated content from influencer preview guests flooded local social feeds, establishing Mille as an instant culinary hotspot."
      }
    ],
    keyDeliverables: [
      "Bujou Studio Brand Identity & Creative Direction",
      "High-End Culinary & Interior Photography",
      "VIP PR Media Preview & Influencer Gala",
      "Digital Advertising & Social Video Campaigns"
    ],
    quote: {
      headline: "Creating an Instant Culinary Icon in the City",
      text: "Bujou Studio turned our restaurant launch into a cultural event. Their PR, photography, and influencer strategy filled our tables from day one and tripled our revenue expectations.",
      author: "Managing Partner",
      role: "Mille Restaurant x Bujou Studio"
    }
  },
  {
    id: 'porsche-canada',
    brandName: 'Porsche Canada',
    categories: ['Automotive', 'Luxury Goods'],
    title: "Porsche Taycan: High-Fashion Editorial Campaign for All-Electric Luxury Performance",
    stats: ['Porsche Taycan', 'Editorial Drive', '4.2x Engagement', 'Bujou Creative'],
    bgStyle: 'bg-gradient-to-br from-slate-950 via-zinc-900 to-red-950',
    customGraphicType: 'marriott',
    readTime: '4 minutes read',
    cardImage: porscheCardCoverImg,
    heroImage: porscheInsideCoverImg,
    heroImageBadge: 'Porsche Canada • Bujou Studio High-Fashion EV Drive Campaign',
    videoUrl: porscheVideo,
    industry: 'Luxury Automotive, EV Performance & High-Fashion Lifestyle',
    industryDescription: 'Iconic German sports car manufacturer defining electric performance with the Taycan.',
    solutionHighlights: [
      'Directed high-fashion editorial drive shoot capturing Taycan sleek aesthetics in Canadian landscapes',
      'Curated VIP influencer drive experiences connecting luxury performance with eco-conscious HNWIs',
      'Boosted EV test-drive booking requests and social engagement by 4.2x'
    ],
    kpis: [
      'Position the Porsche Taycan as the ultimate luxury electric sports car in Canada',
      'Fuse automotive precision with high-fashion editorial storytelling and luxury lifestyle visuals',
      'Drive qualified dealership test-drive bookings among affluent modern drivers',
      'Elevate digital audience engagement across luxury demographic segments'
    ],
    results: [
      { metric: '4.2x', label: 'Social Engagement Lift', detail: 'Luxury Audience Interactions' },
      { metric: '180%', label: 'Test Drive Requests', detail: 'High-Intent Dealership Leads' },
      { metric: '3.4M', label: 'Editorial Reach', detail: 'High-Fashion & Automotive PR' },
      { metric: '#1', label: 'Luxury EV Perception', detail: 'Top-of-Mind Brand Sentiment' }
    ],
    overview: "Porsche Canada collaborated with Bujou Studio to launch an editorial drive campaign for the all-electric Porsche Taycan. Bujou Studio combined automotive engineering with high-fashion art direction, producing stunning visuals across Western Canadian landscapes and executing a targeted luxury influencer drive experience.",
    challenge: "Electric vehicles are often marketed purely on technical battery specs. Porsche needed to communicate the emotional thrill, luxury craftsmanship, and instant torque of the Taycan to high-net-worth buyers who demand uncompromised performance.",
    campaignGoals: [
      "Produce a magazine-quality editorial photo and video series featuring the Taycan.",
      "Pair high-fashion models and modern luxury aesthetics with sleek Taycan vehicle lines.",
      "Engage top-tier Canadian fashion, design, and business influencers for curated drive days.",
      "Increase test-drive bookings at authorized Porsche Centres across Western Canada."
    ],
    part1Title: "Part 1: High-Fashion Automotive Art Direction & Scenic Drive Series",
    part1Sections: [
      {
        title: "High-Fashion Meets EV Performance",
        content: "Styled contemporary luxury wardrobe looks against the aerodynamic curves of the Taycan, creating a striking contrast between nature and futuristic engineering."
      },
      {
        title: "Curated Influencer Drive Experience",
        content: "Invited prominent Canadian entrepreneurs and fashion leaders for exclusive long-distance test drive journeys through mountain highways."
      },
      {
        title: "Multi-Platform Editorial Distribution",
        content: "Published high-resolution photo essays and short-form video reels across Porsche digital channels and luxury lifestyle press."
      }
    ],
    part1CreatorPreview: {
      creatorHandle: "@porschecanada",
      creatorAvatar: porscheCardCoverImg,
      isPro: true,
      caption: "Electric soul meets uncompromised sports car performance ⚡ Exploring Canadian mountain highways in the Porsche Taycan with @BujouStudio. #PorscheTaycan #PorscheCanada #ElectricSoul",
      videoBgImage: porscheInsideCoverImg,
      videoUrl: porscheVideo,
      likes: "112.8K",
      comments: "2,150"
    },
    part2Title: "Part 2: 4.2x Engagement Growth & 180% Lift in Test Drive Leads",
    part2Sections: [
      {
        title: "4.2x Increase in Digital Engagement",
        content: "High-fashion visuals resonated deeply with modern luxury buyers, driving record comments and shares."
      },
      {
        title: "180% Surge in Porsche Centre Test Drive Requests",
        content: "Targeted digital call-to-actions guided interested prospective buyers directly to dealership sales managers."
      },
      {
        title: "Pioneering Luxury EV Brand Perception",
        content: "The campaign solidified the Taycan as the benchmark for luxury electric vehicles in Canada."
      }
    ],
    keyDeliverables: [
      "Bujou Studio Editorial Fashion & Automotive Production",
      "Scenic Location Scouting & Drive Art Direction",
      "Curated Luxury Influencer Drive Days",
      "Digital Campaign Assets & Social Video Series"
    ],
    quote: {
      headline: "Elevating Electric Performance with High-Fashion Art Direction",
      text: "Bujou Studio brought a fresh, high-fashion perspective to the Porsche Taycan. The editorial drive visuals connected emotionally with luxury buyers and generated a 180% surge in test drive requests.",
      author: "Experiential & Marketing Lead",
      role: "Porsche Canada x Bujou Studio"
    }
  },
  {
    id: 'oraki',
    brandName: 'Oraki Apparel',
    categories: ['E-commerce', 'Consumer Goods & DTC'],
    title: "Oraki: Vancouver Fashion Week Minimalist Pop-Up & Sustainable Retail Growth",
    stats: ['3.2x Foot Traffic', '140% Sales Lift', 'Recycled Fabrics', 'Bujou Experiential'],
    bgStyle: 'bg-gradient-to-br from-stone-950 via-emerald-950 to-neutral-900',
    customGraphicType: 'marriott',
    readTime: '4 minutes read',
    cardImage: orakiCardCoverImg,
    heroImage: orakiInsideCoverImg,
    heroImageBadge: 'Oraki • Bujou Studio Experiential Pop-Up & Brand Campaign',
    videoUrl: orakiVideo,
    industry: 'Sustainable Activewear, Eco Apparel & Retail',
    industryDescription: 'Canadian-designed eco-friendly apparel crafting stylish clothing made entirely from recycled plastic bottles.',
    solutionHighlights: [
      'Designed an immersive minimalist pop-up store during Vancouver Fashion Week showcasing plastic-to-fabric transformations',
      'Integrated digital-to-retail omnichannel touchpoints driving instant e-commerce checkout',
      'Expanded foot traffic by 3.2x and delivered a 140% surge in online store sales'
    ],
    kpis: [
      "Highlight Oraki's eco-conscious mission of turning recycled plastic bottles into luxury apparel",
      'Create an unforgettable experiential retail space during Vancouver Fashion Week',
      'Bridge offline pop-up visitors with online DTC store purchasing funnels',
      'Drive national fashion media coverage and influencer advocacy'
    ],
    results: [
      { metric: '3.2x', label: 'Pop-Up Foot Traffic', detail: 'Vancouver Fashion Week Visitors' },
      { metric: '140%', label: 'Online Sales Growth', detail: 'Omnichannel Conversion Lift' },
      { metric: '100%', label: 'Recycled Fiber Transparency', detail: 'Eco-Mission Storytelling' },
      { metric: '2.1M', label: 'Social Video Views', detail: 'Behind-the-Scenes Craftsmanship' }
    ],
    overview: "Oraki, the Canadian eco-friendly apparel brand making stylish clothes from recycled plastic bottles, partnered with Bujou Studio to create an experiential pop-up during Vancouver Fashion Week. Bujou Studio curated a minimalist pop-up store experience, digital storytelling, and media PR that increased foot traffic by 3.2x and boosted online sales by 140%.",
    challenge: "Sustainable fashion brands often struggle to differentiate themselves in a crowded activewear market. Oraki needed an elevated physical and digital experience that communicated its plastic-to-fabric innovation while maintaining a high-fashion aesthetic.",
    campaignGoals: [
      "Design an architectural, eco-minimalist pop-up store for Vancouver Fashion Week.",
      "Incorporate tactile exhibits showing the journey from recycled plastic bottles to ultra-soft fabric.",
      "Capture high-resolution photo and video assets for digital social ad campaigns.",
      "Drive immediate online checkout via QR codes and VIP pop-up discount codes."
    ],
    part1Title: "Part 1: Eco-Minimalist Pop-Up Architecture & Sustainable Storytelling",
    part1Sections: [
      {
        title: "Recycled Plastic-to-Fabric Tactile Displays",
        content: "Built raw wooden and acrylic installations displaying raw plastic pellets alongside finished recycled leggings and tops."
      },
      {
        title: "Vancouver Fashion Week VIP Creator Lounge",
        content: "Hosted top sustainable fashion influencers and stylists for custom fitting sessions and eco-refreshments."
      },
      {
        title: "Omnichannel QR Code Purchase Touchpoints",
        content: "Enabled pop-up visitors to scan items on display for instant door-step delivery via Oraki’s online store."
      }
    ],
    part1CreatorPreview: {
      creatorHandle: "@orakiclothing",
      creatorAvatar: orakiCardCoverImg,
      isPro: true,
      caption: "From recycled plastic bottles to runway activewear 🌿 Loved bringing our Vancouver Fashion Week pop-up to life with @BujouStudio! #Oraki #SustainableFashion #MadeInCanada",
      videoBgImage: orakiInsideCoverImg,
      videoUrl: orakiVideo,
      likes: "38.6K",
      comments: "690"
    },
    part2Title: "Part 2: 3.2x Foot Traffic Surge & 140% Online E-Commerce Growth",
    part2Sections: [
      {
        title: "3.2x Increase in Pop-Up Visitor Foot Traffic",
        content: "Striking minimalist store design and PR coverage attracted thousands of eco-conscious fashion lovers."
      },
      {
        title: "140% Lift in E-Commerce Sales Volume",
        content: "Omnichannel retargeting ads and pop-up buzz drove record online orders across Canada."
      },
      {
        title: "National Fashion & PR Recognition",
        content: "Featured in leading fashion publications celebrating Canadian sustainable manufacturing innovation."
      }
    ],
    keyDeliverables: [
      "Bujou Studio Experiential Pop-Up Design & Curation",
      "Vancouver Fashion Week PR & VIP Creator Activations",
      "Recycled Manufacturing Tactile Exhibition",
      "Digital Omnichannel Sales Integration"
    ],
    quote: {
      headline: "Translating Environmental Mission into Unforgettable Fashion Retail",
      text: "Bujou Studio distilled our sustainable mission into an exquisite pop-up store at Vancouver Fashion Week. The event drove 3.2x foot traffic and boosted our online sales by 140%.",
      author: "Founder & Creative Director",
      role: "Oraki Apparel x Bujou Studio"
    }
  },
  {
    id: 'snag',
    brandName: 'Snag Tights',
    categories: ['E-commerce', 'Consumer Goods & DTC'],
    title: "Snag Tights: TikTok-Driven Viral Performance Marketing & E-Commerce Scale",
    stats: ['3.8x ROAS', '4.5M Views', 'TikTok Ads', 'DTC E-Commerce'],
    bgStyle: 'bg-gradient-to-br from-pink-950 via-rose-900 to-amber-950',
    customGraphicType: 'marriott',
    readTime: '4 minutes read',
    cardImage: snagTightsCardCoverImg,
    heroImage: snagTightsInsideCoverImg,
    heroImageBadge: 'Snag Tights • Favoured TikTok & Performance Marketing',
    videoUrl: snagTightsVideo,
    industry: 'DTC Apparel, Size-Inclusive Fashion & E-Commerce',
    industryDescription: 'Globally loved size-inclusive tights and apparel brand championing body positivity and genuine comfort.',
    solutionHighlights: [
      'Engineered high-converting TikTok Spark Ads and UGC video creative campaigns',
      'Optimized paid social acquisition funnels resulting in 3.8x Blended ROAS',
      'Scaled international customer acquisition across UK, US, and European markets'
    ],
    kpis: [
      'Position Snag as the leading body-positive size-inclusive tights brand on TikTok',
      'Drive high-volume DTC sales with positive return on ad spend (ROAS)',
      'Leverage creator-led user-generated content (UGC) for authentic community engagement',
      'Decrease customer acquisition cost (CAC) while expanding order volume'
    ],
    results: [
      { metric: '3.8x', label: 'Blended ROAS', detail: 'Paid Social Return' },
      { metric: '4.5M+', label: 'TikTok Video Impressions', detail: 'Viral Creator Campaigns' },
      { metric: '-34%', label: 'Reduction in CAC', detail: 'Optimized Funnel Efficiency' },
      { metric: '180%', label: 'DTC Sales Growth', detail: 'Year-over-Year Scale' }
    ],
    overview: "Snag Tights, the game-changing size-inclusive apparel brand, partnered with Favoured to scale its DTC e-commerce growth through high-energy TikTok ad campaigns and performance marketing funnels. Favoured leveraged creator UGC, Spark Ads, and agile creative testing to unlock a 3.8x ROAS and millions of viral impressions.",
    challenge: "Breaking through ad saturation in fashion requires authentic creative that resonates with real body shapes rather than staged studio shoots. Snag needed high-velocity video production and rapid ad testing to maintain profitability across global markets.",
    campaignGoals: [
      "Build an agile TikTok content engine producing native, authentic UGC videos.",
      "Optimize retargeting and cold interest paid funnels across Meta and TikTok.",
      "Lower CAC while scaling daily ad spend across UK, US, and EU regions.",
      "Maximize subscriber lifetime value (LTV) through SMS and email flows."
    ],
    part1Title: "Part 1: TikTok Spark Ads & Authentic UGC Content Engine",
    part1Sections: [
      {
        title: "Creator-Led Size Inclusive Storytelling",
        content: "Partnered with body-positive micro-creators showcasing Snag's unmatched fit, stretch, and non-roll waistbands across all size ranges."
      },
      {
        title: "Spark Ads & TikTok Trend Hijacking",
        content: "Turned organic viral customer reaction videos into high-converting paid Spark Ads that drove immediate add-to-carts."
      },
      {
        title: "Multi-Market Localization",
        content: "Tailored ad creative messaging and localized offers for growth expansion across North America and mainland Europe."
      }
    ],
    part1CreatorPreview: {
      creatorHandle: "@snagtights",
      creatorAvatar: snagTightsCardCoverImg,
      isPro: true,
      caption: "Tights that actually fit every body, size 2 to 34 💖 Loved scaling our viral TikTok campaigns with @FavouredAgency! #SnagTights #SizeInclusive #BodyPositivity",
      videoBgImage: snagTightsInsideCoverImg,
      videoUrl: snagTightsVideo,
      likes: "128.4K",
      comments: "3,420"
    },
    part2Title: "Part 2: 3.8x ROAS & 34% Lower Customer Acquisition Cost",
    part2Sections: [
      {
        title: "3.8x Blended Return on Ad Spend",
        content: "Creative iteration cycles and bid optimization generated top-tier e-commerce profitability."
      },
      {
        title: "34% Reduction in Acquisition Costs",
        content: "Higher video watch time and CTR lowered overall CAC across all paid channels."
      },
      {
        title: "Sustained DTC E-Commerce Momentum",
        content: "The TikTok growth blueprint established Snag as one of the fastest-growing apparel brands on social."
      }
    ],
    keyDeliverables: [
      "Favoured Performance Marketing & Paid Social Engine",
      "UGC Video Production & Creator Management",
      "TikTok Spark Ads & Meta Growth Strategy",
      "Retention & Email Flow Optimization"
    ],
    quote: {
      headline: "Scaling Authentic Body Positivity into Global E-Commerce Scale",
      text: "Favoured understood our ethos from day one. Their team turned real customer enthusiasm into high-performing TikTok campaigns that unlocked a 3.8x ROAS.",
      author: "Head of Growth",
      role: "Snag Tights x Favoured"
    }
  },
  {
    id: 'omni',
    brandName: 'Omni Pet',
    categories: ['DTC & Subscription', 'E-commerce'],
    title: "Omni: Subscriber Funnel Optimization & 4.2x Growth for Vegan Pet Nutrition",
    stats: ['4.2x LTV Lift', '82% Retention', 'DTC Subscription', 'UK & Europe'],
    bgStyle: 'bg-gradient-to-br from-emerald-950 via-teal-900 to-stone-900',
    customGraphicType: 'marriott',
    readTime: '4 minutes read',
    cardImage: omnipetCardCoverImg,
    heroImage: omnipetInsideCoverImg,
    heroImageBadge: 'Omni • Favoured Performance Marketing & Subscription Scale',
    videoUrl: omnipetVideo,
    industry: 'Sustainable Pet Care, Health Tech & DTC Subscriptions',
    industryDescription: 'UK’s leading vet-formulated plant-based pet food company delivering healthy, sustainable dog food.',
    solutionHighlights: [
      'Redesigned the direct-to-consumer subscription onboarding funnel to reduce churn',
      'Deployed vet-endorsed video ad creative and influencer educational series',
      'Elevated customer lifetime value (LTV) by 4.2x with personalized email & SMS loyalty journeys'
    ],
    kpis: [
      'Educate pet owners on the health and climate benefits of vet-backed plant-based dog food',
      'Streamline the online subscription checkout experience for higher first-time conversions',
      'Reduce subscriber churn rate and increase repeat delivery retention',
      'Drive sustainable monthly recurring revenue (MRR) expansion'
    ],
    results: [
      { metric: '4.2x', label: 'LTV Expansion', detail: 'Subscriber Value Growth' },
      { metric: '82%', label: 'Active Retention Rate', detail: 'Month-6 Subscription Hold' },
      { metric: '210%', label: 'Monthly Recurring Revenue', detail: 'Year-over-Year Scale' },
      { metric: '3.6x', label: 'Meta & Search ROAS', detail: 'Profitable Acquisition Funnel' }
    ],
    overview: "Omni, the UK's pioneering vet-formulated plant-based dog food brand, appointed Favoured to optimize its DTC subscription marketing and customer acquisition engine. Favoured implemented educational video ads, streamlined subscription funnels, and retention-focused automated email journeys that drove a 4.2x lift in customer lifetime value.",
    challenge: "Plant-based pet food is an emerging category requiring high consumer trust and veterinary validation. Omni needed marketing that countered skepticism while converting impulse trial buyers into long-term monthly subscribers.",
    campaignGoals: [
      "Leverage vet testimony and real customer transformation stories in video ads.",
      "A/B test subscription quiz funnels to match dog breeds with ideal portion plans.",
      "Implement automated subscription retention flows on Klaviyo to fight churn.",
      "Scale acquisition spend profitably across Meta, Google Search, and TikTok."
    ],
    part1Title: "Part 1: Vet-Backed Science & Subscription Quiz Onboarding",
    part1Sections: [
      {
        title: "Veterinary Endorsement Video Strategy",
        content: "Produced high-authority video ads featuring veterinarians explaining digestion, coat health, and energy benefits of Omni plant-based food."
      },
      {
        title: "Interactive Dog Meal Plan Quiz",
        content: "Built a customized onboarding survey calculating dog weight, age, and activity level to generate tailored monthly subscription plans."
      },
      {
        title: "Post-Purchase Retention Workflows",
        content: "Deployed automated SMS and email sequences providing feeding transition tips, health trackers, and loyalty rewards."
      }
    ],
    part1CreatorPreview: {
      creatorHandle: "@omni.pet",
      creatorAvatar: omnipetCardCoverImg,
      isPro: true,
      caption: "Vet-crafted plant-based food for happier, healthier dogs 🐶 Scaled our subscriber community with @FavouredAgency! #OmniPet #PlantBasedDog #DogHealth",
      videoBgImage: omnipetInsideCoverImg,
      videoUrl: omnipetVideo,
      likes: "45.1K",
      comments: "930"
    },
    part2Title: "Part 2: 4.2x LTV Lift & 82% Month-6 Subscription Retention",
    part2Sections: [
      {
        title: "4.2x Customer Lifetime Value Growth",
        content: "Optimized subscription tiering and upsell options increased average subscriber duration."
      },
      {
        title: "82% Retention at Month 6",
        content: "Proactive customer support messaging and flexible delivery schedules dramatically lowered subscriber cancellation."
      },
      {
        title: "Category Leadership in Sustainable Pet Care",
        content: "Omni expanded its market footprint across the UK and mainland Europe as the premier vegan dog food."
      }
    ],
    keyDeliverables: [
      "Favoured Subscription Funnel Optimization",
      "Vet-Led Video Ad Creative & Production",
      "Klaviyo Automated Retention & Loyalty Engine",
      "Paid Search & Social Scale Strategy"
    ],
    quote: {
      headline: "Unlocking Rapid Monthly Recurring Revenue in DTC Subscription",
      text: "Favoured transformed our subscriber journey from initial curiosity into long-term customer loyalty. The 4.2x LTV growth accelerated our expansion.",
      author: "Co-Founder & CEO",
      role: "Omni Pet x Favoured"
    }
  },
  {
    id: 'bakesy',
    brandName: 'Bakesy App',
    categories: ['Software & Tech', 'Apps & Mobile'],
    title: "Bakesy: App Store Acquisition & Paid Growth for Home Bakery Management",
    stats: ['120K+ Installs', '4.9★ Rating', '3.4x Subscriptions', 'FoodTech'],
    bgStyle: 'bg-gradient-to-br from-fuchsia-950 via-purple-900 to-pink-950',
    customGraphicType: 'marriott',
    readTime: '4 minutes read',
    cardImage: bakesyCardCoverImg,
    heroImage: bakesyInsideCoverImg,
    heroImageBadge: 'Bakesy • Favoured Mobile App Growth & Paid Social Campaign',
    videoUrl: bakesyVideo,
    industry: 'FoodTech, Small Business SaaS & Mobile App',
    industryDescription: 'All-in-one business management app empowering custom bakers and home confectioners to take orders and accept payments.',
    solutionHighlights: [
      'Designed high-performing mobile App Store Optimization (ASO) and Apple Search Ads',
      'Executed targeted influencer and micro-creator video ads highlighting baker time savings',
      'Achieved 120,000+ iOS & Android app installs with a 3.4x boost in paid monthly subscribers'
    ],
    kpis: [
      'Accelerate mobile app downloads among home bakers and custom cake decorators',
      'Convert free 30-day trial users into active paid monthly software subscribers',
      'Optimize App Store listing assets, previews, and keyword rankings',
      'Establish Bakesy as the #1 operational software for cottage food businesses'
    ],
    results: [
      { metric: '120K+', label: 'App Downloads', detail: 'iOS & Android User Base' },
      { metric: '3.4x', label: 'Paid Subscriber Growth', detail: 'Monthly Recurring Revenue' },
      { metric: '4.9★', label: 'App Store Rating', detail: '6,700+ Organic Reviews' },
      { metric: '58%', label: 'Trial-to-Paid Conversion', detail: 'In-App Onboarding Lift' }
    ],
    overview: "Bakesy, the all-in-one business management mobile app for home bakers, partnered with Favoured to supercharge its app user acquisition and subscription conversion. Favoured executed targeted paid social, micro-influencer campaigns, and App Store Optimization that generated over 120,000 downloads and 3.4x subscriber growth.",
    challenge: "Home bakers often manage orders through messy direct messages and notebooks. Bakesy needed marketing that clearly demonstrated how an app saves hours of administrative headaches and automates professional invoicing.",
    campaignGoals: [
      "Showcase real baker workflow transformations using quick-cut TikTok and Instagram Reels.",
      "Run hyper-targeted interest ad campaigns aiming at home bakery owners and cake artists.",
      "Improve App Store listing conversion rates with custom screenshot graphics.",
      "Drive free-trial activations with contextual push and email onboarding tips."
    ],
    part1Title: "Part 1: Creator-Led Time Savings & App Store Optimization",
    part1Sections: [
      {
        title: "Relatable Home Baker Video Campaigns",
        content: "Produced video ads showing bakers transitioning from chaotic DMs to organized Bakesy custom order forms and automated invoices."
      },
      {
        title: "ASO & Visual App Store Overhaul",
        content: "Redesigned App Store screenshots, feature badges, and preview videos to highlight instant order site creation."
      },
      {
        title: "Apple Search Ads & Meta Mobile App Installs",
        content: "Scaled targeted install campaigns capturing high-intent searches for home business order trackers."
      }
    ],
    part1CreatorPreview: {
      creatorHandle: "@bakesyapp",
      creatorAvatar: bakesyCardCoverImg,
      isPro: true,
      caption: "Turn your passion for baking into a professional streamlined business 🧁 120K+ bakers strong thanks to @FavouredAgency! #Bakesy #HomeBaker #CakeBusiness",
      videoBgImage: bakesyInsideCoverImg,
      videoUrl: bakesyVideo,
      likes: "64.8K",
      comments: "1,120"
    },
    part2Title: "Part 2: 120,000+ Downloads & 3.4x Paid Subscription Surge",
    part2Sections: [
      {
        title: "120,000+ iOS & Android Installs",
        content: "Multi-channel app acquisition funnels established Bakesy as the market leader for cottage food entrepreneurs."
      },
      {
        title: "3.4x Monthly Subscription Revenue Growth",
        content: "Streamlined in-app trial onboarding maximized conversion to $9.99 and $17.99 monthly plans."
      },
      {
        title: "4.9-Star App Store Reputation",
        content: "Delighted user experiences drove thousands of 5-star ratings and viral word-of-mouth growth."
      }
    ],
    keyDeliverables: [
      "Favoured App Growth & ASO Optimization Engine",
      "Meta & Apple Search Ads Paid Acquisition",
      "Short-Form UGC Video Creative & Influencers",
      "In-App Trial Conversion & Onboarding Journeys"
    ],
    quote: {
      headline: "Empowering Thousands of Creative Food Entrepreneurs Worldwide",
      text: "Favoured delivered stellar app store growth. Their video ad creative resonated with home bakers, driving over 120,000 installs and tripling our subscription base.",
      author: "Founder & Chief Product Officer",
      role: "Bakesy App x Favoured"
    }
  },
  {
    id: 'smash',
    brandName: 'SMASH App',
    categories: ['Apps & Mobile', 'Food & Beverage'],
    title: "SMASH: Gen Z Health App Launch & 50,000+ App Installs Campaign",
    stats: ['50K+ Installs', '84% Funnel Lift', 'Gen Z Audience', 'Healthy Food'],
    bgStyle: 'bg-gradient-to-br from-violet-950 via-indigo-900 to-cyan-950',
    customGraphicType: 'marriott',
    readTime: '4 minutes read',
    heroImage: 'https://images.unsplash.com/photo-1504674900247-0877df9cc836?auto=format&fit=crop&w=1600&q=80',
    heroImageBadge: 'SMASH App • Favoured Gen Z App Acquisition Campaign',
    industry: 'Gen Z HealthTech, Mobile App & Food Discount Platform',
    industryDescription: 'Innovative mobile app encouraging young adults and Gen Z to choose healthier restaurant, takeaway, and grocery options with discounts.',
    solutionHighlights: [
      'Architected a Gen Z-focused TikTok and Instagram influencer acquisition strategy',
      'Delivered 50,000+ app installs within initial launch campaign window',
      'Lifted mid-funnel activation and discount redemption rates by 84%'
    ],
    kpis: [
      'Generate mass awareness and app downloads among UK university students and young adults',
      'Drive active engagement and restaurant discount redemptions inside the app',
      'Establish brand partnerships with leading healthy fast-casual food chains',
      'Achieve low Cost-Per-Install (CPI) via viral social trends and creator content'
    ],
    results: [
      { metric: '50,000+', label: 'Verified App Installs', detail: 'UK Young Adult Audience' },
      { metric: '84%', label: 'Mid-Funnel Conversion Lift', detail: 'Discount Voucher Redemptions' },
      { metric: '£0.42', label: 'Average Cost Per Install', detail: 'Ultra-Efficient Acquisition' },
      { metric: '4.8x', label: 'App Store Feature Reach', detail: 'Top Health & Fitness Charts' }
    ],
    overview: "SMASH, the UK app making healthier dining choices affordable for young adults, teamed up with Favoured for a high-impact mobile launch campaign. Favoured produced trendy Gen Z video content, influencer activations, and targeted app install ads that generated over 50,000 downloads and boosted mid-funnel voucher conversion by 84%.",
    challenge: "Young adults often prioritize cheap junk food over healthy options due to price constraints. SMASH needed an energetic, non-preachy brand voice that made saving money on healthy takeaway feel exciting and trendsetting.",
    campaignGoals: [
      "Partner with relatable Gen Z university creators for food haul and discount videos.",
      "Run high-converting Universal App Campaigns (UAC) on Meta, TikTok, and Snapchat.",
      "Optimize in-app onboarding to drive instant first voucher redemptions.",
      "Maintain ultra-low Cost Per Install (CPI) while scaling across UK university cities."
    ],
    part1Title: "Part 1: Gen Z Viral TikTok Creatives & City Student Outreach",
    part1Sections: [
      {
        title: "Trend-Driven Short-Form Video Campaigns",
        content: "Created high-energy TikTok videos showing students unlocking discounts at popular healthy food spots like WASABI, Tossed, and Yo! Sushi."
      },
      {
        title: "Micro-Influencer Campus Ambassadors",
        content: "Mobilized university creators to document their daily SMASH savings and meal picks."
      },
      {
        title: "Snapchat & Meta Mobile Install Scaling",
        content: "Engineered geo-targeted campaigns surrounding major UK university campuses during orientation season."
      }
    ],
    part1CreatorPreview: {
      creatorHandle: "@smashapp_uk",
      creatorAvatar: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=200&q=80",
      isPro: true,
      caption: "Healthy food discounts for young adults! 🥙 50,000+ installs unlocked with @FavouredAgency! #SMASHapp #HealthyEating #StudentDiscounts #UKFood",
      videoBgImage: "https://images.unsplash.com/photo-1504674900247-0877df9cc836?auto=format&fit=crop&w=600&q=80",
      likes: "52.3K",
      comments: "840"
    },
    part2Title: "Part 2: 50,000+ App Downloads & 84% Mid-Funnel Conversion Lift",
    part2Sections: [
      {
        title: "50,000+ Active App Installs",
        content: "Exceeded initial download targets while maintaining an average CPI of just £0.42."
      },
      {
        title: "84% Increase in In-App Voucher Redemptions",
        content: "Interactive push notifications and personalized deal highlights drove repeated restaurant visits."
      },
      {
        title: "Top Chart Ranking on App Store & Google Play",
        content: "Surged into top rankings in the Health & Fitness app category during campaign spikes."
      }
    ],
    keyDeliverables: [
      "Favoured Gen Z App Install Strategy",
      "TikTok, Snapchat & Meta Paid Social Campaigns",
      "Student Micro-Influencer Management",
      "In-App Voucher Conversion & Push Optimization"
    ],
    quote: {
      headline: "Making Healthy Eating Affordable and Fun for Gen Z",
      text: "Favoured nailed the Gen Z tone of voice. Their creative approach drove over 50,000 installs and an 84% increase in voucher redemptions across the UK.",
      author: "Chief Marketing Officer",
      role: "SMASH App x Favoured"
    }
  },
  {
    id: 'beehive',
    brandName: 'Beehive Fintech',
    categories: ['Fintech & B2B', 'Software & Tech'],
    title: "Beehive: Digital Transformation & Peer-to-Peer Lending Portal for MENA SMEs",
    stats: ['4.2x Leads', '68% Conversion', 'P2P Platform', 'Dubai UAE'],
    bgStyle: 'bg-gradient-to-br from-amber-950 via-amber-900 to-stone-900',
    customGraphicType: 'marriott',
    readTime: '4 minutes read',
    heroImage: 'https://images.unsplash.com/photo-1559526324-4b87b5e36e44?auto=format&fit=crop&w=1600&q=80',
    heroImageBadge: 'Beehive • Digital Gravity Corporate Fintech Web Portal',
    industry: 'Fintech, P2P Lending & Financial Services',
    industryDescription: 'MENA region’s first regulated peer-to-peer (P2P) lending platform connecting smart investors with growth-focused SMEs.',
    solutionHighlights: [
      'Engineered a bespoke, secure digital lending web platform with real-time investor yield calculators',
      'Streamlined SME loan application journey reducing onboarding friction by 68%',
      'Integrated institutional compliance, multi-currency support, and live portfolio dashboards'
    ],
    kpis: [
      'Redesign Beehive corporate web platform for seamless SME borrower and investor journeys',
      'Simplify complex P2P financial data into clear, intuitive interactive calculators',
      'Accelerate lead generation and borrower application completion rates in the GCC',
      'Maintain bank-grade security protocols and DFSA compliance standards'
    ],
    results: [
      { metric: '4.2x', label: 'Inbound SME Leads', detail: 'Qualified Borrower Enquiries' },
      { metric: '68%', label: 'Application Velocity', detail: 'Faster Onboarding Flow' },
      { metric: '3.5x', label: 'Investor Registrations', detail: 'Active Regional Backers' },
      { metric: '100%', label: 'DFSA Regulated Compliant', detail: 'Bank-Grade Fintech Security' }
    ],
    overview: "Beehive, the MENA region's leading regulated peer-to-peer lending platform, partnered with Digital Gravity to re-engineer its web portal and investor interface. Digital Gravity created a modern, high-converting digital platform featuring interactive yield calculators, frictionless SME borrower onboarding, and real-time portfolio management tools.",
    challenge: "Financial lending platforms often suffer from dense data clutter and intimidating application forms. Beehive required a clean, transparent digital interface that built immediate institutional trust while making complex financial metrics effortless to navigate.",
    campaignGoals: [
      "Design an ultra-intuitive web interface for both SME borrowers and private/institutional investors.",
      "Develop interactive loan calculators providing instant rate and repayment previews.",
      "Optimize conversion funnels for high-intent corporate borrowers across the UAE and KSA.",
      "Deliver a secure, scalable web architecture built on modern web standards."
    ],
    part1Title: "Part 1: Frictionless Onboarding & Interactive Financial Architecture",
    part1Sections: [
      {
        title: "Dual-Persona User Journey Architecture",
        content: "Digital Gravity mapped out distinct, optimized conversion pathways tailored specifically for SME business owners seeking capital and investors looking for fixed-income yields."
      },
      {
        title: "Interactive Loan & Yield Calculators",
        content: "Integrated dynamic financial estimation widgets allowing prospective borrowers to calculate monthly repayments and investors to model portfolio returns instantly."
      },
      {
        title: "Automated Document Upload & Compliance Verification",
        content: "Streamlined corporate documentation submission with real-time validation and bank-level data encryption."
      }
    ],
    part1CreatorPreview: {
      creatorHandle: "@beehive_official",
      creatorAvatar: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=200&q=80",
      isPro: true,
      caption: "Empowering UAE SMEs with faster, smarter peer-to-peer funding 🐝 Experience our newly transformed digital lending portal designed by @DigitalGravity. #Fintech #P2PLending #Dubai",
      videoBgImage: "https://images.unsplash.com/photo-1559526324-4b87b5e36e44?auto=format&fit=crop&w=600&q=80",
      likes: "42.8K",
      comments: "890"
    },
    part2Title: "Part 2: 4.2x Inbound Leads & 68% Faster Onboarding Velocity",
    part2Sections: [
      {
        title: "4.2x Growth in Qualified Borrower Enquiries",
        content: "The sleek new UX and transparent rate preview tools drove a 420% increase in submitted SME funding applications."
      },
      {
        title: "68% Drop in Onboarding Drop-offs",
        content: "Optimized form step logic and intuitive UI significantly accelerated complete application submissions."
      },
      {
        title: "Regional Industry Recognition",
        content: "The portal transformation solidified Beehive's market leadership as the premier P2P lending fintech in the Middle East."
      }
    ],
    keyDeliverables: [
      "Digital Gravity Corporate UX/UI Redesign",
      "Interactive Financial Yield & Repayment Engine",
      "Bilingual English/Arabic Web Development",
      "Enterprise Security & DFSA Regulatory Compliance"
    ],
    quote: {
      headline: "Redefining Digital Peer-to-Peer Finance in the GCC",
      text: "Digital Gravity transformed Beehive's online experience into an effortless, transparent financial hub. The platform drove a 4.2x increase in qualified leads while simplifying complex P2P lending processes.",
      author: "Chief Technology Officer",
      role: "Beehive Fintech x Digital Gravity"
    }
  },
  {
    id: 'amjaad-holding',
    brandName: 'Amjaad Holding',
    categories: ['Real Estate & PropTech', 'Corporate'],
    title: "Amjaad Holding: Digital Corporate Portal & Multi-Divisional Portfolio Showcase",
    stats: ['3.8x Engagement', '12 Group Entities', 'Bilingual UI', 'Oman & UAE'],
    bgStyle: 'bg-gradient-to-br from-slate-950 via-blue-950 to-amber-950',
    customGraphicType: 'marriott',
    readTime: '4 minutes read',
    heroImage: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=1600&q=80',
    heroImageBadge: 'Amjaad Holding • Digital Gravity Corporate Real Estate Website',
    industry: 'Real Estate Development, Commercial Hubs & Holding Group',
    industryDescription: 'Premier Omani conglomerate and real estate developer managing mega mixed-use, retail, sports, and corporate complexes.',
    solutionHighlights: [
      'Created a unified corporate web portal showcasing 12 subsidiary entities and flagship commercial developments',
      'Engineered interactive 3D project maps, tenant inquiry portals, and investor relation dashboards',
      'Delivered a high-performance bilingual (Arabic & English) web experience reflecting royal Omani heritage'
    ],
    kpis: [
      'Unify Amjaad Holding diverse commercial, retail, and real estate portfolio under one digital umbrella',
      'Enhance investor confidence and corporate brand prestige across GCC markets',
      'Streamline B2B leasing inquiries for flagship retail centers and office towers',
      'Provide seamless multi-device performance and Arabic-first accessibility'
    ],
    results: [
      { metric: '3.8x', label: 'Investor Engagement', detail: 'Time Spent on Portfolio Pages' },
      { metric: '12', label: 'Subsidiaries Unified', detail: 'Real Estate, Retail & Engineering' },
      { metric: '185%', label: 'B2B Leasing Enquiries', detail: 'Commercial & Retail Properties' },
      { metric: '100%', label: 'RTL Arabic Optimization', detail: 'Native GCC Localization' }
    ],
    overview: "Amjaad Holding, one of Oman's premier commercial and real estate development conglomerates, commissioned Digital Gravity to build an elite corporate website. The new portal highlights Amjaad's multi-million dollar mixed-use developments, corporate divisions, and investor opportunities through interactive project showcases and seamless bilingual navigation.",
    challenge: "Managing a multi-sector holding company with diverse real estate and commercial assets often creates fragmented brand messaging. Amjaad needed a prestigious digital home that conveyed scale, structural innovation, and financial strength.",
    campaignGoals: [
      "Develop an executive-tier web architecture reflecting Amjaad's market leadership in Oman and the GCC.",
      "Build an interactive commercial project explorer featuring high-res imagery, site specs, and floor plans.",
      "Implement a bilingual content management infrastructure tailored for GCC corporate governance.",
      "Drive qualified B2B inquiries for commercial retail leasing and joint ventures."
    ],
    part1Title: "Part 1: Unified Group Architecture & Architectural Visuals",
    part1Sections: [
      {
        title: "Multi-Divisional Navigation Hierarchy",
        content: "Structured the site around Amjaad's core pillars: Real Estate Development, Retail Hubs, Commercial Towers, and Engineering Services."
      },
      {
        title: "Interactive Commercial Property Finder",
        content: "Created interactive filtering systems allowing prospective tenants and investors to browse properties by location, square footage, and project status."
      },
      {
        title: "Cultural Heritage & Modern Aesthetics",
        content: "Balanced traditional Omani design motifs with sleek contemporary typography and fluid page transitions."
      }
    ],
    part1CreatorPreview: {
      creatorHandle: "@amjaadholding",
      creatorAvatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=200&q=80",
      isPro: true,
      caption: "Shaping the skyline of Oman with world-class commercial & retail destinations 🏢 Explore our digital holding portal crafted by @DigitalGravity. #AmjaadHolding #OmanRealEstate",
      videoBgImage: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=600&q=80",
      likes: "31.4K",
      comments: "520"
    },
    part2Title: "Part 2: 3.8x Engagement & 185% Increase in B2B Leasing Leads",
    part2Sections: [
      {
        title: "3.8x Surge in Session Duration",
        content: "Visitors spent significantly longer exploring project specs, photo galleries, and corporate milestones."
      },
      {
        title: "185% Growth in Retail & Commercial Leasing Leads",
        content: "Dedicated property enquiry routing connected prospective retail tenants directly with Amjaad leasing directors."
      },
      {
        title: "Bilingual Arabic-First Excellence",
        content: "Flawless right-to-left layout alignment reinforced brand prestige with regional GCC stakeholders."
      }
    ],
    keyDeliverables: [
      "Digital Gravity Custom Corporate Web Development",
      "Bilingual Arabic/English RTL Architecture",
      "Interactive Commercial Real Estate Showcase",
      "CMS for Press Releases & Financial Reporting"
    ],
    quote: {
      headline: "Elevating Corporate Identity and Commercial Leasing Scale",
      text: "Digital Gravity delivered a corporate web presence that perfectly mirrors Amjaad's scale and prestige. The unified portal driven by high-definition asset displays expanded our reach to regional investors.",
      author: "Executive Vice President",
      role: "Amjaad Holding x Digital Gravity"
    }
  },
  {
    id: 'sparkle-tower',
    brandName: 'Sparkle Towers',
    categories: ['Real Estate & PropTech', 'E-commerce'],
    title: "Sparkle Towers: Swarovski-Partnered Luxury Real Estate Web Experience",
    stats: ['$42M Leads', '3D Floorplans', 'Swarovski Co-Brand', 'Dubai Marina'],
    bgStyle: 'bg-gradient-to-br from-indigo-950 via-slate-900 to-purple-950',
    customGraphicType: 'marriott',
    readTime: '4 minutes read',
    heroImage: 'https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&w=1600&q=80',
    heroImageBadge: 'Sparkle Towers • Tebyan x Swarovski x Digital Gravity',
    industry: 'Ultra-Luxury Real Estate, High-Rise Residential & Hospitality',
    industryDescription: 'World-famous Dubai Marina residential development by Tebyan Real Estate, embellished with Swarovski crystals.',
    solutionHighlights: [
      'Designed an ultra-luxury web showcase highlighting the world’s first crystal-embellished residential towers',
      'Built an interactive 360-degree unit explorer and real-time floor plan layout selector',
      'Generated over $42M in qualified buyer leads and VIP private tour bookings'
    ],
    kpis: [
      'Showcase the unique partnership between Tebyan Real Estate and Swarovski in Dubai Marina',
      'Attract high-net-worth international investors and luxury apartment buyers',
      'Provide an immersive digital walkthrough of penthouses, apartments, and resort amenities',
      'Drive high-converting sales leads for local and overseas brokers'
    ],
    results: [
      { metric: '$42M+', label: 'Pipeline Lead Value', detail: 'HNWI Property Enquiries' },
      { metric: '360°', label: 'Interactive Unit Explorer', detail: 'Virtual Marina View Preview' },
      { metric: '240%', label: 'Private Tour Bookings', detail: 'On-Site VIP Appointments' },
      { metric: '8', label: 'Target International Markets', detail: 'GCC, UK, Europe & CIS' }
    ],
    overview: "Sparkle Towers in Dubai Marina, developed by Tebyan Real Estate Development in official partnership with Swarovski, appointed Digital Gravity to design its flagship real estate web platform. Blending crystal brilliance with waterfront luxury, Digital Gravity built an immersive digital showcase complete with 3D unit floor plan viewers and private sales appointment scheduling.",
    challenge: "Selling ultra-luxury real estate to international high-net-worth individuals (HNWIs) requires an online experience that matches the opulent craftsmanship of the physical property, where standard real estate listings fall short.",
    campaignGoals: [
      "Create an opulent digital experience reflecting Swarovski's luxury heritage and Dubai Marina prestige.",
      "Develop interactive 3D floorplan selectors and marina view simulators for prospective buyers.",
      "Capture verified international investor leads with direct CRM routing to sales teams.",
      "Optimize mobile loading speed for rich high-resolution architectural imagery."
    ],
    part1Title: "Part 1: Crystal-Inspired Design & Interactive Marina View Engine",
    part1Sections: [
      {
        title: "Luxury Co-Branded UI Architecture",
        content: "Incorporated Swarovski's signature crystal light aesthetics into dark-mode UI elements, metallic typography, and fluid video headers."
      },
      {
        title: "3D Interactive Apartment & Penthouse Selector",
        content: "Allowed buyers to filter residences by tower (Tower A, Tower B), floor height, bedroom count, and waterfront orientation."
      },
      {
        title: "Resort Amenity Virtual Walkthroughs",
        content: "Highlighted crystal-lit lobbies, infinity pools, private fitness centers, and rooftop gardens through high-definition gallery modules."
      }
    ],
    part1CreatorPreview: {
      creatorHandle: "@sparkletowersdubai",
      creatorAvatar: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=200&q=80",
      isPro: true,
      caption: "Where crystal elegance meets Dubai Marina living 💎 Sparkle Towers by Tebyan in partnership with Swarovski. Explore unit layouts on our new web portal by @DigitalGravity. #DubaiMarina #LuxuryRealEstate",
      videoBgImage: "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&w=600&q=80",
      likes: "58.2K",
      comments: "1,240"
    },
    part2Title: "Part 2: $42M+ Pipeline Lead Value & 240% Sales Tour Surge",
    part2Sections: [
      {
        title: "$42 Million+ in Qualified Buyer Enquiries",
        content: "Targeted digital acquisition campaigns paired with the sleek web platform generated $42M+ in pipeline property interest."
      },
      {
        title: "240% Increase in VIP Site Tour Requests",
        content: "Frictionless tour scheduling tools converted web visitors into live sales suite walkthroughs."
      },
      {
        title: "Global HNWI Buyer Conversion",
        content: "Attracted buyers from the UK, Europe, GCC, and CIS countries seeking iconic Dubai Marina assets."
      }
    ],
    keyDeliverables: [
      "Digital Gravity Luxury Real Estate Web Design",
      "Interactive 3D Unit & Floor Plan Explorer",
      "Swarovski Co-Branded Visual Assets",
      "CRM & Lead Routing Sales Integration"
    ],
    quote: {
      headline: "Capturing the Brilliance of Swarovski in Digital Luxury Real Estate",
      text: "Digital Gravity captured the essence of Sparkle Towers perfectly. The web experience conveyed our partnership with Swarovski with breathtaking sophistication, driving over $42M in qualified buyer leads.",
      author: "Head of Sales & Marketing",
      role: "Tebyan / Sparkle Towers x Digital Gravity"
    }
  },
  {
    id: 'etalon',
    brandName: 'Etalon Real Estate',
    categories: ['Real Estate & PropTech', 'Software & Tech'],
    title: "Etalon: Interactive Real Estate Platform & High-Yield Property Search",
    stats: ['3.2x Traffic', '52% Lead Lift', 'Interactive Map', 'PropTech UI'],
    bgStyle: 'bg-gradient-to-br from-zinc-950 via-slate-900 to-teal-950',
    customGraphicType: 'marriott',
    readTime: '4 minutes read',
    heroImage: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1600&q=80',
    heroImageBadge: 'Etalon • Digital Gravity PropTech Real Estate Platform',
    industry: 'Real Estate Development, Investment & Advisory',
    industryDescription: 'Premier real estate group delivering architectural projects and high-yield property investment portfolios.',
    solutionHighlights: [
      'Engineered a modern, search-centric real estate portal with real-time property filters and map integration',
      'Integrated dynamic ROI estimators and neighborhood amenity discovery tools',
      'Increased monthly web traffic by 3.2x and lifted qualified investor leads by 52%'
    ],
    kpis: [
      'Build an intuitive digital gateway for Etalon premium residential and commercial developments',
      'Provide ultra-fast property search with custom filters (price, area, ROI, completion date)',
      'Enhance user engagement through interactive GIS neighborhood mapping',
      'Boost mobile lead capture for real estate brokers and advisory teams'
    ],
    results: [
      { metric: '3.2x', label: 'Monthly Unique Visitors', detail: 'Organic & Paid Traffic' },
      { metric: '52%', label: 'Lead Conversion Lift', detail: 'High-Intent Buyer Forms' },
      { metric: '1.8s', label: 'Page Load Speed', detail: 'Optimized PropTech Engine' },
      { metric: '45%', label: 'Mobile Lead Growth', detail: 'Responsive Property Portal' }
    ],
    overview: "Etalon Group collaborated with Digital Gravity to re-imagine its real estate digital footprint. Digital Gravity constructed a high-performance PropTech platform featuring interactive map-based search, dynamic property comparison tools, and seamless broker lead routing.",
    challenge: "Legacy real estate websites often suffer from slow search loading, outdated property filters, and clunky mobile navigation. Etalon required an agile, lightning-fast platform that turned browsers into active buyers.",
    campaignGoals: [
      "Develop a responsive, modern real estate web platform with sub-2 second load speeds.",
      "Incorporate an interactive map interface highlighting nearby schools, transit, and retail.",
      "Implement instant mortgage and ROI calculation tools for real estate investors.",
      "Maximize direct inquiry submissions across desktop and mobile devices."
    ],
    part1Title: "Part 1: Map-Centric Property Search & Dynamic Investor Tools",
    part1Sections: [
      {
        title: "Mapbox & GIS Interactive Search Engine",
        content: "Built a custom map view enabling users to explore Etalon developments, filter by neighborhood, and view real-time unit availability."
      },
      {
        title: "Real-Time ROI & Mortgage Estimator",
        content: "Integrated financial widgets allowing buyers to compute rental yields, down payments, and monthly installments on the fly."
      },
      {
        title: "High-Resolution Gallery & Video Walkthroughs",
        content: "Showcased architectural finishes, floor plans, and construction progress updates in a clean grid layout."
      }
    ],
    part1CreatorPreview: {
      creatorHandle: "@etalongroup",
      creatorAvatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=200&q=80",
      isPro: true,
      caption: "Finding your dream investment property just got effortless 🏡 Check out our brand new interactive search portal built by @DigitalGravity. #EtalonRealEstate #PropTech",
      videoBgImage: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=600&q=80",
      likes: "39.1K",
      comments: "780"
    },
    part2Title: "Part 2: 3.2x Traffic Expansion & 52% Lead Conversion Growth",
    part2Sections: [
      {
        title: "320% Traffic Surge",
        content: "SEO-optimized property taxonomies and fast load speeds tripled organic traffic within months."
      },
      {
        title: "52% Increase in Investor Leads",
        content: "Contextual call-to-actions on property pages drove higher lead conversion across all device types."
      },
      {
        title: "Seamless Broker Lead Distribution",
        content: "Automated CRM webhooks routed leads instantly to assigned real estate agents based on property type."
      }
    ],
    keyDeliverables: [
      "Digital Gravity PropTech Web Architecture",
      "Interactive GIS Map & Filter System",
      "ROI & Mortgage Calculator Widget",
      "Automated CRM Lead Routing Pipeline"
    ],
    quote: {
      headline: "Transforming Property Browsing into High-Conversion Investments",
      text: "Digital Gravity revolutionized how buyers interact with Etalon properties online. The map-based search and instant yield calculators yielded a 52% increase in qualified sales inquiries.",
      author: "Director of Digital Marketing",
      role: "Etalon Real Estate x Digital Gravity"
    }
  },
  {
    id: 'swiss-property',
    brandName: 'Swiss Property',
    categories: ['Real Estate & PropTech', 'Corporate'],
    title: "Swiss Property: Sustainable Luxury Boutique Real Estate Digital Showcase",
    stats: ['2.8x Inquiries', 'Sustainable Living', 'Park Villa & La Mer', 'Dubai UAE'],
    bgStyle: 'bg-gradient-to-br from-stone-950 via-emerald-950 to-slate-900',
    customGraphicType: 'marriott',
    readTime: '4 minutes read',
    heroImage: 'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=1600&q=80',
    heroImageBadge: 'Swiss Property • Digital Gravity Eco-Luxury Web Portal',
    industry: 'Sustainable Real Estate, Boutique Residential & Eco-Luxury',
    industryDescription: 'Boutique Swiss real estate developer creating eco-friendly, architecturally sustainable residential communities in Dubai.',
    solutionHighlights: [
      'Crafted a minimalist, eco-luxury digital portal emphasizing Swiss architectural precision and green building standards',
      'Designed interactive sustainable feature breakdowns and energy-efficiency comparisons',
      'Expanded buyer inquiries by 2.8x for flagship developments including Park Villa and La Mer residences'
    ],
    kpis: [
      'Establish Swiss Property as Dubai’s premier eco-friendly boutique real estate developer',
      'Highlight timber architecture, solar integration, and Swiss craftsmanship',
      'Provide immersive digital walkthroughs for luxury villas and boutique apartments',
      'Generate high-intent leads from environmentally conscious home buyers'
    ],
    results: [
      { metric: '2.8x', label: 'Boutique Villa Enquiries', detail: 'Eco-Luxury Homebuyers' },
      { metric: '100%', label: 'Green Architecture Proof', detail: 'Solar & Timber Specs' },
      { metric: '64%', label: 'Organic Traffic Growth', detail: 'Sustainable Real Estate SEO' },
      { metric: '4.2m', label: 'Average Session Duration', detail: 'High Buyer Engagement' }
    ],
    overview: "Swiss Property, a boutique Dubai real estate developer dedicated to Swiss precision and sustainable green architecture, selected Digital Gravity to construct its web presence. The platform showcases flagship eco-villas and residential communities through minimalist design, solar-performance breakdowns, and interactive site plans.",
    challenge: "Communicating the value of sustainable, eco-friendly luxury living requires educating prospective buyers on green materials, energy efficiency, and timber construction without sacrificing visual elegance.",
    campaignGoals: [
      "Design a clean, Swiss-inspired digital aesthetic reflecting environmental harmony and architectural rigor.",
      "Detail eco-friendly innovations including smart energy management, timber framing, and green roofs.",
      "Provide interactive floor plans and masterplan exploration for developments like Park Villa.",
      "Drive direct sales suite consultation requests from affluent eco-conscious buyers."
    ],
    part1Title: "Part 1: Swiss Architectural Precision & Sustainable Feature Highlights",
    part1Sections: [
      {
        title: "Minimalist Swiss Aesthetic UI",
        content: "Employed generous negative space, natural earth tones, and crisp typography echoing Swiss graphic design heritage."
      },
      {
        title: "Eco-Innovation Interactive Breakdowns",
        content: "Created interactive callouts showcasing solar energy capture, timber insulation efficiency, and water recycling systems."
      },
      {
        title: "Masterplan & Villa Floorplan Explorer",
        content: "Provided interactive floor plan overlays enabling prospective buyers to visualize indoor-outdoor living spaces."
      }
    ],
    part1CreatorPreview: {
      creatorHandle: "@swisspropertydubai",
      creatorAvatar: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=200&q=80",
      isPro: true,
      caption: "Where Swiss engineering meets sustainable Dubai living 🍃 Experience our eco-luxury residential developments on our new web platform by @DigitalGravity. #SwissProperty #GreenLiving",
      videoBgImage: "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=600&q=80",
      likes: "34.7K",
      comments: "610"
    },
    part2Title: "Part 2: 2.8x Growth in Buyer Enquiries & Eco-Leadership",
    part2Sections: [
      {
        title: "2.8x Increase in Qualified Buyer Consultations",
        content: "Clear sustainability storytelling resonated with affluent buyers seeking healthy, low-carbon homes."
      },
      {
        title: "64% Growth in Organic Search Reach",
        content: "Optimized content strategy positioned Swiss Property at the top of sustainable real estate searches in the UAE."
      },
      {
        title: "Pioneering Eco-Luxury Brand Positioning",
        content: "The digital platform established Swiss Property as a benchmark for green residential development in Dubai."
      }
    ],
    keyDeliverables: [
      "Digital Gravity Boutique Real Estate Web Design",
      "Sustainable Architectural Feature Infographic System",
      "Interactive Masterplan & Villa Layout Explorer",
      "High-Conversion Sales Suite Booking Engine"
    ],
    quote: {
      headline: "Setting the Standard for Sustainable Luxury Living in Dubai",
      text: "Digital Gravity translated our commitment to Swiss sustainability and architectural precision into a stunning web platform. The eco-storytelling drove a 2.8x increase in buyer inquiries.",
      author: "Managing Director",
      role: "Swiss Property x Digital Gravity"
    }
  },
  {
    id: 'purito',
    brandName: 'Purito Seoul',
    categories: ['Beauty & Personal Care', 'E-commerce'],
    title: "Purito: 1.8M Views & 13,000+ Clicks Across 100+ K-Beauty Content Assets",
    stats: ['1.8M Views', '13K+ Clicks', '100+ Assets', '9 Countries'],
    bgStyle: 'bg-gradient-to-br from-emerald-950 via-teal-900 to-slate-900',
    customGraphicType: 'marriott',
    readTime: '4 minutes read',
    heroImage: 'https://images.unsplash.com/photo-1556228720-195a672e8a03?auto=format&fit=crop&w=1600&q=80',
    heroImageBadge: 'Purito • The Influencer Marketing Factory K-Beauty Campaign',
    industry: 'Skincare, K-Beauty & E-commerce',
    industryDescription: 'Eco-friendly K-Beauty skincare brand famous for its Centella gentle repair serum.',
    solutionHighlights: [
      'Activated 100+ creators across 9 countries including US, UK, Germany, and Poland',
      'Created aesthetic TikTok and Instagram Reels routine videos highlighting Centella Serum',
      'Generated 1.8M combined views and 13,000+ direct clicks to Purito Amazon storefront'
    ],
    kpis: [
      'Drive global awareness for the Centella skincare line across TikTok & Instagram Reels',
      'Boost direct sales on the Purito Amazon USA storefront',
      'Engage skincare communities across 9 international target markets',
      'Build localized, relatable routine content from genuine beauty creators'
    ],
    results: [
      { metric: '1.8M', label: 'Combined Video Views', detail: 'TikTok & Instagram Reels' },
      { metric: '13K+', label: 'Direct Amazon Clicks', detail: 'High-Intent Storefront Traffic' },
      { metric: '100+', label: 'Custom PR Kit Assets', detail: 'Visually Rich K-Beauty Content' },
      { metric: '9', label: 'Global Target Markets', detail: 'US, UK, Germany, Poland & More' }
    ],
    overview: "Purito Seoul partnered with The Influencer Marketing Factory to launch a global influencer campaign showcasing its Centella skincare line. Over 100 beauty creators across 9 countries were equipped with PR kits to create authentic routine videos on TikTok and Instagram, generating 1.8 million views and 13,000+ direct link clicks to Purito's Amazon storefront.",
    challenge: "Standing out in the competitive K-beauty skincare market requires high-volume social proof and localized routine content that drives immediate e-commerce traffic to Amazon.",
    campaignGoals: [
      "Send PR kits to 100+ targeted skincare creators across 9 countries.",
      "Drive 1.5M+ video views across TikTok and Instagram Reels.",
      "Direct high-intent beauty shoppers to Purito's Amazon USA storefront.",
      "Establish long-term brand trust and product sentiment among Gen Z & Millennial consumers."
    ],
    part1Title: "Part 1: Global Creator PR Kits & Localized Routine Storytelling",
    part1Sections: [
      {
        title: "Cross-Market Creator Seeding (9 Countries)",
        content: "PR kits containing the Centella skincare line were dispatched to 100+ vetted beauty influencers across the US, UK, Germany, Poland, Netherlands, and beyond."
      },
      {
        title: "Aesthetic K-Beauty Routine Content",
        content: "Creators produced visually rich 'Get Ready With Me' routine videos, texture close-ups, and genuine first-impression reviews on TikTok and Instagram Reels."
      },
      {
        title: "Amazon Storefront Attribution",
        content: "Embedded call-to-action links in creator bios and stories directed audiences straight to Purito's Amazon USA store for instant checkout."
      }
    ],
    part1CreatorPreview: {
      creatorHandle: "@skincare.glow",
      creatorAvatar: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=200&q=80",
      isPro: true,
      caption: "My holy grail for calming sensitive skin ✨ Trying out the @purito_official Centella Serum for 7 days! Link in bio to grab it on Amazon 🌿 #Purito #Kbeauty",
      videoBgImage: "https://images.unsplash.com/photo-1556228720-195a672e8a03?auto=format&fit=crop&w=600&q=80",
      likes: "128.4K",
      comments: "2,940"
    },
    part2Title: "Part 2: 1.8M Views & 13,000+ Direct Amazon Clicks",
    part2Sections: [
      {
        title: "1.8 Million Organic Video Views",
        content: "Multi-country creator content generated over 1.8 million combined video views across TikTok and Instagram."
      },
      {
        title: "13,000+ Direct Amazon Store Clicks",
        content: "Seamless link integration converted engaged beauty viewers into 13,000+ trackable Amazon storefront clicks."
      },
      {
        title: "100+ High-Quality Reusable Assets",
        content: "Delivered a library of 100+ user-generated K-beauty assets for Purito's paid media and organic channels."
      }
    ],
    keyDeliverables: [
      "The Influencer Marketing Factory End-to-End Campaign Management",
      "100+ Creator Recruitment & PR Kit Distribution",
      "TikTok & Instagram Reels Asset Creation",
      "Multi-Country Amazon Storefront Attribution"
    ],
    quote: {
      headline: "Scaling K-Beauty Globally with Localized Creator Trust",
      text: "The Influencer Marketing Factory amplified our Centella launch across 9 countries seamlessly. 1.8 million views and 13,000+ Amazon clicks proved the power of authentic creator routine storytelling.",
      author: "Global Marketing Director",
      role: "Purito Seoul x The Influencer Marketing Factory"
    }
  },
  {
    id: 'hisense-euro-2024',
    brandName: 'Hisense',
    categories: ['Software & Tech', 'Media & Entertainment'],
    title: "Hisense: 4.2M Views & 12.2K Clicks for UEFA Euro 2024™ 100-Inch TV Launch",
    stats: ['4.2M Views', '12.2K Clicks', '72K Likes', '100" TV Launch'],
    bgStyle: 'bg-gradient-to-br from-emerald-900 via-slate-900 to-blue-950',
    customGraphicType: 'marriott',
    readTime: '4 minutes read',
    heroImage: 'https://images.unsplash.com/photo-1593784991095-a205069470b6?auto=format&fit=crop&w=1600&q=80',
    heroImageBadge: 'Hisense • UEFA Euro 2024™ Influencer Campaign',
    industry: 'Consumer Electronics, Smart TVs & Sports Entertainment',
    industryDescription: 'Global technology company and official sponsor of UEFA Euro 2024™, showcasing flagship 100-inch U8 Smart TVs.',
    solutionHighlights: [
      'Hosted influencer watch parties in North America and flew creators to the Euro Semi-Final in Germany',
      'Partnered with top football personalities including @omarfutgol, @alvaro.romero, and @box2box.show',
      'Generated 4.2M video views, 72,000 likes, and 12,200+ direct clicks'
    ],
    kpis: [
      'Promote the 100-inch Hisense U8 TV as the ultimate home viewing experience for UEFA Euro 2024™',
      'Engage football fans across the US, Mexico, Canada, and Europe',
      'Combine experiential watch parties with on-the-ground semi-final match coverage in Germany',
      'Drive 10K+ click-throughs to Hisense retail partner pages'
    ],
    results: [
      { metric: '4.2M', label: 'Combined Video Views', detail: 'TikTok & Instagram Football Content' },
      { metric: '12.2K', label: 'Direct Retail Clicks', detail: 'Hisense 100" TV Landing Pages' },
      { metric: '72K', label: 'Organic Likes', detail: 'High Fan Engagement' },
      { metric: '4', label: 'Countries Activated', detail: 'US, Mexico, Canada & Germany' }
    ],
    overview: "Hisense teamed up with The Influencer Marketing Factory for its official UEFA Euro 2024™ campaign, highlighting its massive 100-inch U8 Smart TV. Through 'Watch Party' activations in North America and sending top football creators to the Euro Semi-Final match in Germany, the campaign produced 4.2 million video views, 72,000 likes, and over 12,200 link clicks.",
    challenge: "Translating an expensive sports sponsorship into direct consumer excitement and TV sales requires immersive, high-energy content that demonstrates why a 100-inch TV delivers match-day stadium immersion at home.",
    campaignGoals: [
      "Engage global football creators to feature the 100-inch U8 Hisense TV.",
      "Execute high-energy Euro 2024 Watch Parties in the US, Mexico, and Canada.",
      "Send creators to live Euro Semi-Final matches in Germany for real-time matchday content.",
      "Drive 4M+ video views and measurable traffic to TV retailer landing pages."
    ],
    part1Title: "Part 1: Euro 2024 Watch Parties & On-The-Ground Matchday Trips",
    part1Sections: [
      {
        title: "Top Football Creator Roster",
        content: "Partnered with prominent football influencers including @omarfutgol, @alvaro.romero, and @box2box.show to create humorous, high-stakes tournament content."
      },
      {
        title: "Living Room Watch Party Activations",
        content: "Creators transformed their homes into ultimate stadium setups featuring the 100-inch Hisense U8 TV, hosting friends for intense match reaction videos."
      },
      {
        title: "Live Euro Semi-Final Trip to Germany",
        content: "Selected creators were flown to Germany to attend the semi-final match, capturing stadium energy and showcasing Hisense branding throughout the event."
      }
    ],
    part1CreatorPreview: {
      creatorHandle: "@omarfutgol",
      creatorAvatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=200&q=80",
      isPro: true,
      caption: "Watching the Euro Semi-Final on a 100-INCH @hisense_usa TV feels like sitting on the pitch! ⚽📺 Link in bio to upgrade your matchday setup! #HisenseEuro2024 #HisensePartner",
      videoBgImage: "https://images.unsplash.com/photo-1593784991095-a205069470b6?auto=format&fit=crop&w=600&q=80",
      likes: "198.5K",
      comments: "4,310"
    },
    part2Title: "Part 2: 4.2M Views & 12.2K Direct Retail Clicks",
    part2Sections: [
      {
        title: "4.2 Million Tournament Video Views",
        content: "High-energy watch party and matchday Reels generated 4.2 million total video views."
      },
      {
        title: "12,200+ Trackable Retail Clicks",
        content: "Clear call-to-actions yielded over 12,200 link clicks to Hisense 100-inch TV retailer pages."
      },
      {
        title: "72,000 Organic Engagements",
        content: "Audience sentiment was overwhelmingly positive, solidifying Hisense as the go-to brand for sports fans."
      }
    ],
    keyDeliverables: [
      "The Influencer Marketing Factory UEFA Euro 2024™ Strategy",
      "Global Football Creator Sourcing & Event Management",
      "Watch Party & Germany Matchday Production",
      "4.2M View & 12.2K Click Performance Attribution"
    ],
    quote: {
      headline: "Bringing Stadium Immersion to Millions of Football Fans",
      text: "The Influencer Marketing Factory executed a flawless Euro 2024 campaign. Combining home watch parties with live semi-final coverage in Germany brought our 100-inch TV to life and generated over 12.2K clicks.",
      author: "Global Brand Manager",
      role: "Hisense x The Influencer Marketing Factory"
    }
  },
  {
    id: 'envato',
    brandName: 'Envato',
    categories: ['Fintech & B2B', 'Software & Tech'],
    title: "Envato: 8.8M Reach & 557K YouTube Views for Placeit Creative Platform Launch",
    stats: ['8.8M Reach', '557K YT Views', 'Placeit Launch', 'Tech Creators'],
    bgStyle: 'bg-gradient-to-br from-teal-950 via-slate-900 to-emerald-950',
    customGraphicType: 'marriott',
    readTime: '4 minutes read',
    heroImage: 'https://images.unsplash.com/photo-1542744094-3a317272018a?auto=format&fit=crop&w=1600&q=80',
    heroImageBadge: 'Envato • Placeit Influencer Campaign',
    industry: 'Design Software, Digital Assets & Creator Tools',
    industryDescription: 'Leading digital ecosystem for creative assets, templates, and mockup tools for designers and entrepreneurs.',
    solutionHighlights: [
      'Partnered with top tech and entrepreneur creators including @mattgresia, @tori.shoko, and @AureliusTjin',
      'Demonstrated instant logo, mockup, and graphic generation using Envato Placeit',
      'Reached 8.8M TikTok followers and generated 557,000 YouTube views'
    ],
    kpis: [
      'Drive new user registrations for Envato Placeit mockup and logo generator',
      'Target graphic designers, video editors, entrepreneurs, and e-commerce sellers',
      'Produce step-by-step tutorial videos on TikTok and YouTube',
      'Maximize sign-up conversion rate via creator-exclusive promo codes'
    ],
    results: [
      { metric: '8.8M', label: 'TikTok Audience Reach', detail: 'Tech & Business Creators' },
      { metric: '557K', label: 'YouTube Video Views', detail: 'In-Depth Tutorial Format' },
      { metric: '100%', label: 'Hands-On Workflow Proof', detail: 'Instant Mockup & Logo Tools' },
      { metric: '4.9x', label: 'Sign-Up Growth Rate', detail: 'E-commerce & Freelance Cohorts' }
    ],
    overview: "Envato partnered with The Influencer Marketing Factory to drive new user registrations for its Placeit platform. By selecting influential tech, business, and design creators like @mattgresia, @tori.shoko, @AureliusTjin, and @PaolaKBuitrago, the campaign showcased how entrepreneurs and creators can generate professional mockups and logos in seconds, achieving 8.8M TikTok reach and 557,000 YouTube views.",
    challenge: "Entrepreneurs and content creators often waste hours creating mockups or spend thousands on graphic design. Envato needed clear, step-by-step video proof demonstrating how Placeit solves this in under 60 seconds.",
    campaignGoals: [
      "Enlist tech and business influencers on TikTok and YouTube to demonstrate Placeit.",
      "Showcase real-world mockup generation for clothing, merchandise, and digital ads.",
      "Drive high-intent sign-ups and paid subscription conversions.",
      "Achieve multi-million audience reach across TikTok and YouTube."
    ],
    part1Title: "Part 1: Creator Workflow Demos & Instant Mockup Tutorials",
    part1Sections: [
      {
        title: "Targeted Tech & Entrepreneur Casting",
        content: "Recruited trusted business educators and tech reviewers including @mattgresia and @AureliusTjin to target aspiring entrepreneurs and freelancers."
      },
      {
        title: "Real-Time Screen Workflow Demonstrations",
        content: "Creators recorded screen-share videos creating custom apparel mockups, YouTube banners, and brand logos live in under a minute using Placeit."
      },
      {
        title: "High-Converting Promo Code Integration",
        content: "Creators provided exclusive discount links in descriptions and bio links, driving instant user onboarding."
      }
    ],
    part1CreatorPreview: {
      creatorHandle: "@mattgresia",
      creatorAvatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=200&q=80",
      isPro: true,
      caption: "Stop paying $500 for product mockups! 🤯 Here is how I create professional merch mockups in 30 seconds using @envato Placeit. Link in bio! 💻 #Envato #Placeit #BusinessHacks",
      videoBgImage: "https://images.unsplash.com/photo-1542744094-3a317272018a?auto=format&fit=crop&w=600&q=80",
      likes: "210.6K",
      comments: "3,890"
    },
    part2Title: "Part 2: 8.8M TikTok Reach & 557K YouTube Views",
    part2Sections: [
      {
        title: "8.8 Million TikTok Followers Reached",
        content: "High-impact short-form videos reached 8.8 million TikTok followers interested in design and side hustles."
      },
      {
        title: "557,000 Long-Form YouTube Views",
        content: "In-depth YouTube tutorial reviews garnered 557,000 views with high watch time."
      },
      {
        title: "4.9x Increase in New Platform Sign-Ups",
        content: "Step-by-step video proof drove record user acquisition for Envato Placeit."
      }
    ],
    keyDeliverables: [
      "The Influencer Marketing Factory Creator Match Engine",
      "TikTok & YouTube Dedicated Video Campaign Execution",
      "Screen-Share & Workflow Product Demos",
      "8.8M Reach & Subscription Conversion Tracking"
    ],
    quote: {
      headline: "Demonstrating Instant Value to Millions of Creators",
      text: "The Influencer Marketing Factory helped us reach millions of entrepreneurs and creators. Showing Placeit in action on TikTok and YouTube generated 8.8M reach and drove incredible platform sign-ups.",
      author: "Head of Growth Marketing",
      role: "Envato x The Influencer Marketing Factory"
    }
  },  {
    id: 'ricola',
    brandName: 'Ricola',
    categories: ['Beauty & Personal Care', 'E-commerce'],
    title: "Ricola: 26M Impressions & 13.17% Engagement Rate for #CoatYourThroat Campaign",
    stats: ['26M Impressions', '20.5M Reach', '13.17% ER', '62.5K Clicks'],
    bgStyle: 'bg-gradient-to-br from-amber-900 via-yellow-950 to-stone-900',
    customGraphicType: 'marriott',
    readTime: '4 minutes read',
    heroImage: 'https://images.unsplash.com/photo-1584308666744-24d5c474f2ae?auto=format&fit=crop&w=1600&q=80',
    heroImageBadge: 'Ricola • HireInfluence #CoatYourThroat Launch Campaign',
    industry: 'Consumer Health, OTC Care & Wellness',
    industryDescription: 'World-renowned Swiss herbal drop and throat remedy brand expanding into daily voice care with Ricola Throat Balm.',
    solutionHighlights: [
      'Partnered with 18 diverse micro to celeb-tier creators across TikTok and Instagram',
      'Positioned Ricola Throat Balm as an everyday voice-soothing ritual for young Millennials',
      'Generated 26 million total impressions and an outstanding 13.17% engagement rate'
    ],
    kpis: [
      'Introduce Ricola Throat Balm as a daily preventive throat wellness routine',
      'Target young Millennial consumers (ages 24-34) on TikTok and Instagram',
      'Drive high-intent social traffic to retail landing pages with measurable CTR',
      'Achieve benchmark-breaking engagement rates across video and story formats'
    ],
    results: [
      { metric: '26M', label: 'Campaign Impressions', detail: 'Across TikTok & Instagram' },
      { metric: '20.5M', label: 'Total Consumer Reach', detail: 'Target Millennial Audience' },
      { metric: '13.17%', label: 'Engagement Rate', detail: '3x Industry Average' },
      { metric: '62.5K', label: 'Direct Link Clicks', detail: 'High-Intent Retail Traffic' }
    ],
    overview: "Ricola partnered with HireInfluence to launch Ricola Throat Balm through the viral '#CoatYourThroat' campaign. To break away from seasonal cold-and-flu messaging, HireInfluence activated 18 multi-tier creators across Instagram and TikTok, positioning the throat balm as an essential daily voice care routine for singers, teachers, speakers, and active young Millennials.",
    challenge: "Throat drops are traditionally associated purely with seasonal sickness. Ricola needed to reposition throat care as an everyday wellness habit for vocal health, reaching young Millennial audiences in an authentic, lifestyle-driven way.",
    campaignGoals: [
      "Launch Ricola Throat Balm with high-impact video storytelling on TikTok and Instagram.",
      "Activate 18 creators spanning micro to celebrity tiers targeting vocal professionals and young adults.",
      "Drive 20M+ impressions while exceeding standard CPG engagement rate benchmarks.",
      "Generate direct click-throughs to online retail partners."
    ],
    part1Title: "Part 1: Multi-Tier Creator Seeding & Daily Voice Rituals",
    part1Sections: [
      {
        title: "Diverse Influencer Roster (Micro to Celebrity)",
        content: "HireInfluence recruited 18 creators ranging from relatable lifestyle vloggers to high-reach vocal coaches, podcasters, and performers."
      },
      {
        title: "Lifestyle Routine Integration (#CoatYourThroat)",
        content: "Creators demonstrated using Ricola Throat Balm before podcasts, morning routines, workouts, and public speaking events."
      },
      {
        title: "Interactive TikTok & Instagram Reels Formats",
        content: "High-energy voice check challenges and behind-the-scenes vocal prep videos drove massive organic sharing."
      }
    ],
    part1CreatorPreview: {
      creatorHandle: "@voiceandwellness",
      creatorAvatar: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=200&q=80",
      isPro: true,
      caption: "My secret prep before hosting 3 podcast episodes back-to-back 🎙️ Ricola Throat Balm keeps my voice smooth all day! #CoatYourThroat #RicolaPartner",
      videoBgImage: "https://images.unsplash.com/photo-1590602847861-f357a9332bbc?auto=format&fit=crop&w=600&q=80",
      likes: "184.2K",
      comments: "4,120"
    },
    part2Title: "Part 2: 26M Impressions & 13.17% Engagement Dominance",
    part2Sections: [
      {
        title: "26 Million Total Impressions",
        content: "Multi-platform video syndication delivered 26M+ impressions and reached 20.5 million unique consumers."
      },
      {
        title: "13.17% Benchmark-Breaking Engagement Rate",
        content: "Authentic creator storytelling resonated deeply, yielding a 13.17% engagement rate—more than 3x industry standards."
      },
      {
        title: "62,500 Direct Retail Clicks",
        content: "Clear call-to-action overlays produced 62,500 trackable link clicks to purchase Ricola Throat Balm online."
      }
    ],
    keyDeliverables: [
      "HireInfluence End-to-End Campaign Management",
      "18 Multi-Tier Creator Recruitment & Contracting",
      "TikTok & Instagram Reels Production Suite",
      "Real-Time Sentiment & 62.5K Click Attribution Tracking"
    ],
    quote: {
      headline: "Redefining Daily Throat Care via Creator Voice Storytelling",
      text: "HireInfluence transformed how consumers view Ricola. Generating 26M impressions and an incredible 13.17% engagement rate proved that voice wellness is a powerful daily lifestyle topic.",
      author: "Brand Director",
      role: "Ricola x HireInfluence"
    }
  },
  {
    id: 'lee-jeans',
    brandName: 'Lee Jeans',
    categories: ['Apparel & Fashion', 'E-commerce'],
    title: "Lee Jeans: 1.3M Impressions & 304K Views for #LeeInMotion Denim Launch",
    stats: ['1.3M Impressions', '1.2M Reach', '304K Views', '#LeeInMotion'],
    bgStyle: 'bg-gradient-to-br from-blue-950 via-slate-900 to-indigo-950',
    customGraphicType: 'marriott',
    readTime: '3 minutes read',
    heroImage: 'https://images.unsplash.com/photo-1541099649105-f69ad21f3246?auto=format&fit=crop&w=1600&q=80',
    heroImageBadge: 'Lee Jeans • HireInfluence #LeeInMotion Campaign',
    industry: 'Apparel, Denim & Active Lifestyle Fashion',
    industryDescription: 'Iconic American denim brand launching the Extreme Motion collection designed for ultimate comfort and athletic flexibility.',
    solutionHighlights: [
      'Activated high-energy male influencers in sports, dance, motorcycling, and travel',
      'Demonstrated extreme flexibility and range of motion in Lee Extreme Motion denim',
      'Achieved 1.3 million impressions, 1.2M reach, and 304,000 video views on Instagram'
    ],
    kpis: [
      'Showcase the functional flexibility of Lee Extreme Motion denim through dynamic movement',
      'Engage active male Millennial and Gen Z demographics on Instagram',
      'Drive high video completion rates with athletic and movement-focused video content',
      'Strengthen Lee Jeans positioning in modern performance denim'
    ],
    results: [
      { metric: '1.3M', label: 'Total Impressions', detail: 'Dynamic Video Content' },
      { metric: '1.2M', label: 'Unique Consumer Reach', detail: 'Active Lifestyle Audience' },
      { metric: '304K', label: 'Video Views', detail: 'High Completion Rates' },
      { metric: '100%', label: 'Authentic Dynamic Motion', detail: 'Sports, Dance & Action Content' }
    ],
    overview: "Lee Jeans joined forces with HireInfluence to launch the '#LeeInMotion' campaign for the Lee Extreme Motion Men's collection. By recruiting dynamic male influencers—including dancers, parkour athletes, motorcyclists, and travel creators—the campaign vividly proved that Lee denim offers unrivaled comfort and athletic flexibility.",
    challenge: "Traditional denim is often perceived as rigid and restrictive. Lee needed to visually demonstrate the stretch and performance capabilities of the Extreme Motion collection through compelling motion-first social media content.",
    campaignGoals: [
      "Partner with active male lifestyle creators showcasing extreme movement in everyday scenarios.",
      "Drive 1M+ impressions and build visual proof of denim stretch and comfort.",
      "Engage Instagram audiences through high-framerate action video and Reels.",
      "Direct traffic to the Lee Jeans online store."
    ],
    part1Title: "Part 1: Dynamic Creator Casting & Movement Storytelling",
    part1Sections: [
      {
        title: "Athletic & Action-Oriented Creator Selection",
        content: "HireInfluence selected creators specializing in acrobatics, street dance, urban exploration, and extreme sports to put Lee Extreme Motion jeans to the ultimate test."
      },
      {
        title: "#LeeInMotion Visual Demonstrations",
        content: "Creators captured high-energy flips, motorcycle rides, and dance choreography while wearing Lee Extreme Motion jeans, highlighting unrestricted mobility."
      },
      {
        title: "Instagram Video & Story Takeovers",
        content: "Polished video Reels paired with interactive story swipe-ups gave followers direct access to shop the featured denim styles."
      }
    ],
    part1CreatorPreview: {
      creatorHandle: "@movement.mike",
      creatorAvatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=200&q=80",
      isPro: true,
      caption: "Can your jeans do a backflip? 🤸‍♂️ Testing out the new @leejeans Extreme Motion collection. Insane flex and comfort! #LeeInMotion #LeePartner",
      videoBgImage: "https://images.unsplash.com/photo-1541099649105-f69ad21f3246?auto=format&fit=crop&w=600&q=80",
      likes: "92.4K",
      comments: "1,540"
    },
    part2Title: "Part 2: 1.3M Impressions & 304K Video Views",
    part2Sections: [
      {
        title: "1.3 Million High-Impact Impressions",
        content: "The campaign achieved 1.3 million impressions across targeted male lifestyle feeds."
      },
      {
        title: "304,000 Organic Video Views",
        content: "Engaging movement content resulted in over 304,000 complete video views."
      },
      {
        title: "1.2 Million Unique Audience Reach",
        content: "Reached 1.2M active consumers, modernizing brand perception around Lee Jeans performance denim."
      }
    ],
    keyDeliverables: [
      "HireInfluence Influencer Sourcing & Motion Campaign Strategy",
      "High-Action Instagram Reels Video Assets",
      "Full Usage Rights for Digital Ad Amplification",
      "Reach & Video Completion Analytics"
    ],
    quote: {
      headline: "Proving Comfort and Mobility Through High-Motion Video",
      text: "The #LeeInMotion campaign brought our Extreme Motion collection to life. Showing real creators dancing and flipping in Lee jeans delivered 1.3M impressions and proved our product quality instantly.",
      author: "Marketing Director",
      role: "Lee Jeans x HireInfluence"
    }
  },
  {
    id: 'community-coffee',
    brandName: 'Community Coffee',
    categories: ['Food & Beverage', 'E-commerce'],
    title: "Community Coffee: 30.9M Impressions & 551K Engagements at National Restaurant Show",
    stats: ['30.9M Impressions', '551K Engagements', 'Sweet Lemonade', 'Event & Digital'],
    bgStyle: 'bg-gradient-to-br from-amber-950 via-red-950 to-stone-900',
    customGraphicType: 'marriott',
    readTime: '4 minutes read',
    heroImage: 'https://images.unsplash.com/photo-1501339847302-ac426a4a7cbb?auto=format&fit=crop&w=1600&q=80',
    heroImageBadge: 'Community Coffee • HireInfluence National Restaurant Association Show',
    industry: 'Food & Beverage, Specialty Coffee & Foodservice',
    industryDescription: 'Historic American coffee brand debuting new brand identity and Sweet Lemonade line at major industry trade show.',
    solutionHighlights: [
      'Recruited celebrity influencer for live in-booth barista demonstrations in Chicago',
      'Syndicated real-time event content across Twitter and Instagram with live hashtags',
      'Generated 30.9 million total impressions and 551,000 interactive engagements'
    ],
    kpis: [
      'Drive massive foot traffic to Community Coffee booth at National Restaurant Association show',
      'Launch new Sweet Lemonade product line to B2B restaurant buyers and consumers',
      'Amplify physical event activations into viral online social media buzz',
      'Position Community Coffee as an innovative, forward-thinking beverage leader'
    ],
    results: [
      { metric: '30.9M', label: 'Multi-Channel Impressions', detail: 'Event & Social Syndication' },
      { metric: '551K', label: 'Social Engagements', detail: 'Live & Digital Interactions' },
      { metric: '#1', label: 'Trade Show Social Buzz', detail: 'NRA Show Chicago' },
      { metric: '100%', label: 'In-Booth Traffic Surge', detail: 'Live Celebrity Demos' }
    ],
    overview: "Community Coffee collaborated with HireInfluence to debut its fresh brand identity and new 'Sweet Lemonade' product line at the National Restaurant Association Show in Chicago. By pairing a celebrity influencer for live in-booth barista demos with real-time digital syndication, the campaign generated 30.9 million impressions and 551,000 engagements.",
    challenge: "Standing out among thousands of exhibitors at a massive B2B trade show requires more than standard booth displays. Community Coffee needed an integrated experiential campaign that drove physical booth foot traffic while simultaneously generating viral online buzz.",
    campaignGoals: [
      "Recruit a top-tier celebrity creator to host live barista demos at the Chicago trade show.",
      "Drive maximum B2B buyer traffic and attendee participation at the booth.",
      "Syndicate live video and social posts on Twitter and Instagram using official campaign hashtags.",
      "Surpass 25M total digital and event impressions."
    ],
    part1Title: "Part 1: Experiential Booth Activation & Celebrity Hosting",
    part1Sections: [
      {
        title: "Celebrity Barista In-Booth Experience",
        content: "HireInfluence secured a celebrity culinary influencer to conduct live coffee crafting and Sweet Lemonade tasting sessions, drawing packed crowds to the Community Coffee booth."
      },
      {
        title: "Real-Time Trade Show Syndication",
        content: "Dedicated social teams captured live attendee reactions, taste-tests, and behind-the-scenes interviews, streaming content instantly to Twitter and Instagram."
      },
      {
        title: "Sweet Lemonade Product Unveiling",
        content: "Focused creator posts highlighted the refreshing versatility of Community Coffee's new Sweet Lemonade line for foodservice operators."
      }
    ],
    part1CreatorPreview: {
      creatorHandle: "@chef.celebrity",
      creatorAvatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=200&q=80",
      isPro: true,
      caption: "Live at the National Restaurant Show in Chicago with @communitycoffee! ☕🍋 Serving up the incredible new Sweet Lemonade. Come visit booth #402! #CommunityCoffee",
      videoBgImage: "https://images.unsplash.com/photo-1501339847302-ac426a4a7cbb?auto=format&fit=crop&w=600&q=80",
      likes: "142.9K",
      comments: "3,820"
    },
    part2Title: "Part 2: 30.9M Impressions & 551K Engagements",
    part2Sections: [
      {
        title: "30.9 Million Multi-Channel Impressions",
        content: "Blending live event coverage with online creator syndication captured 30.9 million impressions."
      },
      {
        title: "551,000 Social Engagements",
        content: "High-energy live streams and interactive Q&As generated 551K social comments, shares, and likes."
      },
      {
        title: "B2B Lead Generation Success",
        content: "Packed booth crowds translated into record-setting trade show leads and beverage distributor partnerships."
      }
    ],
    keyDeliverables: [
      "HireInfluence Experiential & Digital Event Strategy",
      "Celebrity Talent Contracting & On-Site Management",
      "Live Social Media Streaming & Real-Time Content Production",
      "30.9M Impression & B2B Engagement Analytics"
    ],
    quote: {
      headline: "Bridging Experiential Trade Show Events with Social Scale",
      text: "HireInfluence made Community Coffee the star of the National Restaurant Association show. 30.9 million impressions and 551K engagements proved the power of combining live celebrity activations with real-time social content.",
      author: "Vice President of Marketing",
      role: "Community Coffee x HireInfluence"
    }
  },
  {
    id: 'blues-clues-you',
    brandName: "Blue's Clues & You!",
    categories: ['Media & Entertainment', 'E-commerce'],
    title: "Blue's Clues & You!: 6.1M Impressions & 5.4M Views for 25th Anniversary Push",
    stats: ['6.1M Impressions', '5.4M Video Views', '4.5M Reach', 'Target & Walmart'],
    bgStyle: 'bg-gradient-to-br from-sky-950 via-blue-900 to-indigo-950',
    customGraphicType: 'marriott',
    readTime: '4 minutes read',
    heroImage: 'https://images.unsplash.com/photo-1566576912321-d58ddd7a6088?auto=format&fit=crop&w=1600&q=80',
    heroImageBadge: "Viacom • Blue's Clues & You! 25th Anniversary Campaign",
    industry: 'Media & Entertainment, Children Toys & Retail Merchandising',
    industryDescription: 'Viacom Nickelodeon iconic children franchise celebrating 25 years with new merchandise at major national retailers.',
    solutionHighlights: [
      'Activated 10 premier family & parenting creators on TikTok and Instagram',
      'Tapped into Millennial parent nostalgia while driving retail sales at Target, Walmart, and Amazon',
      'Generated 6.1M impressions, 4.5M reach, and 5.4M complete video views'
    ],
    kpis: [
      'Celebrate Blue\'s Clues 25th Anniversary with nostalgic Millennial parents and toddlers',
      'Drive retail foot traffic and e-commerce sales at Target, Walmart, and Amazon',
      'Engage family creators on TikTok and Instagram with unboxing and play videos',
      'Maximize video view counts and engagement across family demographic segments'
    ],
    results: [
      { metric: '6.1M', label: 'Anniversary Impressions', detail: 'TikTok & Instagram Feeds' },
      { metric: '5.4M', label: 'Total Video Views', detail: 'High View-Through Rate' },
      { metric: '4.5M', label: 'Target Family Reach', detail: 'Millennial Parents & Kids' },
      { metric: '3 Top', label: 'Retail Partners Featured', detail: 'Target, Walmart & Amazon' }
    ],
    overview: "Viacom partnered with HireInfluence to celebrate the 25th Anniversary of Blue's Clues & You!. Tapping into nostalgia among Millennial parents while introducing new toys to their toddlers, HireInfluence deployed 10 top family creators across TikTok and Instagram, delivering 6.1 million impressions and 5.4 million video views.",
    challenge: "Connecting with Millennial parents requires evoking genuine childhood nostalgia while clearly highlighting where to buy modern Blue's Clues & You! merchandise across major retailers like Target, Walmart, and Amazon.",
    campaignGoals: [
      "Activate 10 family & parenting creators on TikTok and Instagram for interactive toy unboxings.",
      "Bridge 90s nostalgia for parents with playful learning for young kids.",
      "Drive retail traffic to Target, Walmart, and Amazon merchandise landing pages.",
      "Achieve high video view counts and brand sentiment."
    ],
    part1Title: "Part 1: Nostalgic Family Storytelling & Retail Merchandising",
    part1Sections: [
      {
        title: "Parenting & Family Creator Selection",
        content: "HireInfluence curated 10 family creators known for authentic parenting vlogs, creative play routines, and retail haul videos."
      },
      {
        title: "Nostalgic Unboxing & Playtime Videos",
        content: "Parents shared nostalgic childhood memories of watching Blue's Clues while showcasing their toddlers unboxing new interactive plush toys and Clue notebooks."
      },
      {
        title: "Direct Retail Linking (Target, Walmart, Amazon)",
        content: "In-video overlays and swipe-up links directed parents straight to featured Blue's Clues items at Target, Walmart, and Amazon."
      }
    ],
    part1CreatorPreview: {
      creatorHandle: "@family.moments",
      creatorAvatar: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=200&q=80",
      isPro: true,
      caption: "I used to watch Blue's Clues every morning after school 💙 Now watching my daughter play with the 25th Anniversary plush toy is magic! Available at @target 🐾 #BluesClues25 #ViacomPartner",
      videoBgImage: "https://images.unsplash.com/photo-1566576912321-d58ddd7a6088?auto=format&fit=crop&w=600&q=80",
      likes: "162.5K",
      comments: "2,980"
    },
    part2Title: "Part 2: 6.1M Impressions & 5.4M Video Views",
    part2Sections: [
      {
        title: "6.1 Million Campaign Impressions",
        content: "Family creators generated 6.1 million impressions across high-converting parenting feeds."
      },
      {
        title: "5.4 Million Complete Video Views",
        content: "Playful, heart-warming video content captured 5.4 million total views with high completion rates."
      },
      {
        title: "Multi-Retailer Sales Lift",
        content: "Direct retail tagging boosted product visibility and sell-through at Target, Walmart, and Amazon."
      }
    ],
    keyDeliverables: [
      "HireInfluence Family Creator Sourcing & Campaign Management",
      "TikTok & Instagram Video Content Rights",
      "Multi-Retailer Attribution (Target, Walmart, Amazon)",
      "6.1M Impression & Video View Performance Tracking"
    ],
    quote: {
      headline: "Honoring 25 Years of Blue's Clues with Authentic Family Joy",
      text: "HireInfluence captured the perfect balance of 90s nostalgia and modern retail excitement. 6.1 million impressions and 5.4 million video views made our 25th Anniversary campaign an overwhelming success.",
      author: "Brand Director",
      role: "Viacom / Nickelodeon x HireInfluence"
    }
  },
  {
    id: 'motley-fool',
    brandName: 'The Motley Fool',
    categories: ['Fintech & B2B', 'E-commerce'],
    title: "The Motley Fool: 500% Monthly Affiliate Growth & 210% YoY Subscription Expansion",
    stats: ['+500%', '210% YoY Growth', '88% Top Sales', '40% Loyalty Rev'],
    bgStyle: 'bg-gradient-to-br from-indigo-950 via-slate-900 to-blue-950',
    customGraphicType: 'marriott',
    readTime: '4 minutes read',
    heroImage: 'https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?auto=format&fit=crop&w=1600&q=80',
    heroImageBadge: 'The Motley Fool • PartnerCentric Affiliate Diversification',
    industry: 'Financial Services, Stock Advising & FinTech Subscriptions',
    industryDescription: 'Pioneering financial guidance and stock investment subscription company empowering millions of retail investors.',
    solutionHighlights: [
      'Diversified affiliate mix beyond standard content review sites into card-linked offer (CLO) providers and millennial finance blogs',
      'Transitioned paid search channels into cost-per-acquisition (CPA) performance frameworks',
      'Strategic loyalty partner promotions driving 40% of total revenue over 3.5 years'
    ],
    kpis: [
      'Scale high-LTV stock advisor subscriptions while diversifying affiliate channel dependencies',
      'Engage younger investor demographics on card-linked rewards platforms and finance apps',
      'Transition non-performing search channels into scalable CPA performance models',
      'Maximize new customer acquisition volume without diluting margin targets'
    ],
    results: [
      { metric: '+500%', label: 'Monthly Affiliate Growth', detail: 'In First 6 Months' },
      { metric: '210%', label: 'Average YoY Growth', detail: 'Sustained Multi-Year Scale' },
      { metric: '88%', label: 'Sales from Top Publishers', detail: 'Diversified High-Intent Cohorts' },
      { metric: '40%', label: 'Revenue from Loyalty Partners', detail: 'New Customer Promotions' }
    ],
    overview: "The Motley Fool partnered with PartnerCentric to transform and scale its affiliate marketing program for stock advising subscriptions. By diversifying beyond traditional review sites and integrating card-linked offer (CLO) publishers alongside millennial finance blogs, PartnerCentric achieved a +500% monthly growth rate in the first 6 months and sustained 210% year-over-year revenue expansion.",
    challenge: "Relying heavily on a limited set of traditional financial review publishers restricted growth and increased channel concentration risk. The Motley Fool needed an expert affiliate agency to recruit high-performing card-linked partners, optimize paid search into CPA performance, and tap into new investor demographics.",
    campaignGoals: [
      "Recruit and onboard high-converting card-linked offer publishers and millennial fintech influencers.",
      "Achieve aggressive monthly subscription growth while maintaining target LTV-to-CAC ratios.",
      "Restructure paid search into scalable performance CPA models.",
      "Diversify revenue share so top-performing publishers deliver sustainable, recurring acquisition."
    ],
    part1Title: "Part 1: Affiliate Diversification & Card-Linked Partner Integration",
    part1Sections: [
      {
        title: "Expanding Beyond Traditional Financial Portals",
        content: "PartnerCentric audited the existing publisher mix and executed a aggressive recruitment strategy, bringing in card-linked offer platforms, reward apps, and personal finance creators targeting Gen Z and Millennial investors."
      },
      {
        title: "Strategic Loyalty & New Customer Promotions",
        content: "By co-creating tailored 'new customer' bonus promotions with premier loyalty publishers, loyalty channels surged to generate 40% of overall program revenue."
      },
      {
        title: "CPA Paid Search Optimization",
        content: "Non-performing paid search campaigns were restructured into risk-free CPA arrangements, ensuring every ad dollar directly drove verified stock advisor subscriptions."
      }
    ],
    part1CreatorPreview: {
      creatorHandle: "@investor.insights",
      creatorAvatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=200&q=80",
      isPro: true,
      caption: "Breaking down my long-term portfolio strategy with @motleyfool 📊 Exclusive subscription perk inside! #MotleyFoolPartner",
      videoBgImage: "https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?auto=format&fit=crop&w=600&q=80",
      likes: "142.8K",
      comments: "3,110"
    },
    part2Title: "Part 2: +500% Monthly Growth & 210% YoY Sustained Scale",
    part2Sections: [
      {
        title: "+500% Average Monthly Growth in First 6 Months",
        content: "Rapid onboarding and channel restructuring ignited a 500%+ monthly subscription growth surge in the initial six months of management."
      },
      {
        title: "210% YoY Multi-Year Subscription Scale",
        content: "Continuous optimization ensured 210% average year-over-year revenue growth across a multi-year partnership."
      },
      {
        title: "High-Intent Publisher Retention",
        content: "Top publishers consistently drove 88%+ of total subscription sales, establishing a resilient affiliate engine for financial subscriptions."
      }
    ],
    keyDeliverables: [
      "PartnerCentric Control Engine & Publisher Auditing",
      "Card-Linked Offer (CLO) & Loyalty Integration",
      "Paid Search to CPA Performance Migration",
      "Multi-Year LTV & Subscription Growth Analytics"
    ],
    quote: {
      headline: "Unlocking Exponential Financial Subscription Scale",
      text: "PartnerCentric completely overhauled our affiliate strategy. Achieving 500% monthly growth in the first 6 months and 210% YoY growth proved that diversifying into card-linked offers and targeted fintech partners was a total game changer.",
      author: "Vice President of Acquisition",
      role: "The Motley Fool x PartnerCentric"
    }
  },
  {
    id: 'partnercentric-luxury-brand',
    brandName: 'Luxury Apparel & Sleepwear',
    categories: ['Luxury & Jewelry', 'E-commerce'],
    title: "Luxury Brand: +600% Revenue Surge & 1,320% YoY Growth via Card-Linked Partnerships",
    stats: ['+600% Revenue', '1,320% YoY', '25X ROAS', 'Prestige Preserved'],
    bgStyle: 'bg-gradient-to-br from-amber-950 via-zinc-900 to-stone-900',
    customGraphicType: 'marriott',
    readTime: '4 minutes read',
    heroImage: 'https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?auto=format&fit=crop&w=1600&q=80',
    heroImageBadge: 'Luxury Brand Success • PartnerCentric Premium Affiliate Strategy',
    industry: 'Prestige Apparel, High-End Sleepwear & Luxury E-commerce',
    industryDescription: 'High-end silk sleepwear and luxury loungewear brand expanding e-commerce presence while protecting brand equity.',
    solutionHighlights: [
      'Expanded affiliate exposure beyond a single legacy publisher into premium card-linked offer (CLO) providers',
      'Custom luxury influencer seeding and editorial fashion listicle placements',
      'Delivered 25X Return on Ad Spend (ROAS) on initial card-linked partner activations'
    ],
    kpis: [
      'Break dependency on a single affiliate partner without compromising luxury brand positioning',
      'Engage high-net-worth consumers via premium credit card loyalty rewards',
      'Scale direct-to-consumer revenue while maintaining strict gross margin targets',
      'Achieve industry-leading Return on Ad Spend (ROAS) across all affiliate tiers'
    ],
    results: [
      { metric: '+600%', label: 'Revenue Surge', detail: 'Compared to Previous Performance' },
      { metric: '1,320%', label: 'YoY Revenue Increase', detail: 'Multi-Channel Affiliate Expansion' },
      { metric: '25X', label: 'Return on Ad Spend (ROAS)', detail: 'First Card-Linked Partner Launch' },
      { metric: '100%', label: 'Brand Prestige Preserved', detail: 'Zero Unapproved Discounting' }
    ],
    overview: "A premier luxury apparel and sleepwear brand partnered with PartnerCentric to overcome growth plateaus and expand its affiliate marketing footprint. By overcoming initial hesitations regarding loyalty programs and deploying curated card-linked offer (CLO) platforms alongside luxury fashion influencers, the brand experienced a +600% revenue surge and an astonishing 1,320% YoY revenue increase.",
    challenge: "Luxury fashion brands often fear that affiliate or loyalty programs will dilute brand prestige through heavy discount codes. The brand was reliant on a single content partner, limiting customer reach and capping revenue.",
    campaignGoals: [
      "Diversify affiliate revenue sources away from a single publisher dependency.",
      "Introduce premium card-linked offer (CLO) partnerships tailored for affluent credit card holders.",
      "Recruit high-end fashion tastemakers and editorial luxury publications.",
      "Drive explosive YoY e-commerce revenue growth with high ROAS."
    ],
    part1Title: "Part 1: Premium Card-Linked Offers & Editorial Creator Seeding",
    part1Sections: [
      {
        title: "Curated Card-Linked Offer (CLO) Strategy",
        content: "PartnerCentric introduced frictionless card-linked cashback rewards embedded directly in premium credit card portals (e.g. Chase, Amex), allowing high-net-worth shoppers to earn rewards without visible coupon codes on site."
      },
      {
        title: "Luxury Creator & Editorial Expansion",
        content: "Onboarded high-end fashion influencers and luxury gift-guide publishers, showcasing the exquisite silk craftsmanship and gift-giving appeal."
      },
      {
        title: "25X ROAS Initial Milestone",
        content: "The brand's first card-linked offer campaign generated a staggering 25X Return on Ad Spend, validating the affluent partner framework."
      }
    ],
    part1CreatorPreview: {
      creatorHandle: "@silk.and.style",
      creatorAvatar: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=200&q=80",
      isPro: true,
      caption: "Indulging in pure luxury ✨ Unboxing the finest 100% mulberry silk sleepwear set. Link in bio to shop! 🌙 #LuxuryStylePartner",
      videoBgImage: "https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?auto=format&fit=crop&w=600&q=80",
      likes: "118.4K",
      comments: "2,430"
    },
    part2Title: "Part 2: +600% Revenue Surge & 1,320% YoY Scaling",
    part2Sections: [
      {
        title: "+600% Overall Revenue Surge",
        content: "Diversifying partner types ignited a +600% surge in affiliate-driven revenue over legacy baselines."
      },
      {
        title: "1,320% Year-over-Year Revenue Expansion",
        content: "The brand sustained a 1,320% YoY revenue jump as card-linked and creator channels matured into primary revenue drivers."
      },
      {
        title: "Protected Brand Equity",
        content: "Selective partner management preserved the brand's ultra-premium image while driving high order values."
      }
    ],
    keyDeliverables: [
      "PartnerCentric Premium Affiliate Management",
      "Frictionless Card-Linked Offer (CLO) Integration",
      "High-Net-Worth Influencer & Editorial Seeding",
      "1,320% YoY Revenue Attribution Analytics"
    ],
    quote: {
      headline: "Scaling Luxury Revenue Without Diluting Prestige",
      text: "PartnerCentric proved that affiliate marketing can be sophisticated and brand-aligned. Achieving 25X ROAS on card-linked offers and a 1,320% YoY revenue increase completely transformed our digital sales strategy.",
      author: "Chief Marketing Officer",
      role: "Luxury Sleepwear Brand x PartnerCentric"
    }
  },
  {
    id: 'partnercentric-wellness-brand',
    brandName: 'Health & Wellness Brand',
    categories: ['Beauty & Personal Care', 'E-commerce'],
    title: "Health & Wellness: Blending Influencer & Affiliate Strategies to Drive 25X ROAS",
    stats: ['25X ROAS', '+340% YoY', 'Micro-Influencers', 'High LTV Customers'],
    bgStyle: 'bg-gradient-to-br from-teal-950 via-slate-900 to-emerald-950',
    customGraphicType: 'marriott',
    readTime: '4 minutes read',
    heroImage: 'https://images.unsplash.com/photo-1540555700478-4be289fbecef?auto=format&fit=crop&w=1600&q=80',
    heroImageBadge: 'Health & Wellness • Integrated Influencer & Performance Strategy',
    industry: 'Health & Wellness, Telehealth & Nutritional Supplements',
    industryDescription: 'Fast-growing health and wellness brand offering personalized wellness routines, supplements, and holistic care.',
    solutionHighlights: [
      'Blended micro-influencer product routines with performance affiliate tracking links',
      'Diversified listicle editorial placements, telehealth review portals, and card-linked offers',
      'Delivered 25X ROAS and +340% YoY customer acquisition growth'
    ],
    kpis: [
      'Acquire high-lifetime-value (LTV) subscribers for wellness and daily supplement regimens',
      'Bridge social media micro-influencer trust with measurable performance affiliate links',
      'Expand editorial listicle presence on top health, skincare, and fitness publications',
      'Drive strong Return on Ad Spend (ROAS) across all top-of-funnel and bottom-of-funnel channels'
    ],
    results: [
      { metric: '25X', label: 'Return on Ad Spend (ROAS)', detail: 'Integrated Creator Affiliate Model' },
      { metric: '+340%', label: 'YoY Revenue Growth', detail: 'Subscription & Regimen Sales' },
      { metric: '4.8x', label: 'LTV Increase', detail: 'High-Retention Wellness Customers' },
      { metric: '150+', label: 'Active Wellness Creators', detail: 'Micro-Influencers & Listicles' }
    ],
    overview: "A leading health and wellness brand partnered with PartnerCentric to merge creator influencer marketing with performance affiliate tracking. By combining micro-influencer skincare/wellness routine content with high-intent listicle publications and card-linked offer partners, PartnerCentric achieved a 25X Return on Ad Spend (ROAS) and +340% YoY customer growth.",
    challenge: "Health and wellness consumers require high trust before purchasing daily supplements or skincare routines. Traditional paid ads were seeing rising customer acquisition costs (CAC), requiring a performance-driven creator model that combined authentic trust with measurable affiliate ROI.",
    campaignGoals: [
      "Unify micro-influencer routine content with affiliate performance tracking.",
      "Secure premium placements on top health, wellness, and lifestyle listicle sites.",
      "Drive recurring subscription sign-ups for daily wellness regimens.",
      "Achieve high ROAS and lower long-term CAC."
    ],
    part1Title: "Part 1: Creator-Led Routine Content & Performance Affiliate Links",
    part1Sections: [
      {
        title: "Authentic Micro-Influencer Routine Integration",
        content: "PartnerCentric onboarded 150+ micro-creators in fitness, skincare, and nutrition to feature the brand in daily 'get ready with me' and morning routine videos equipped with custom discount codes and affiliate tracking links."
      },
      {
        title: "High-Intent Health Editorial Listicles",
        content: "Secured top rankings in 'Best Wellness Supplements' and 'Top Daily Routines' roundups across leading lifestyle magazines."
      },
      {
        title: "Performance Card-Linked Rewards",
        content: "Activated card-linked offer programs with bank partners to incentivize first-time trial among health-conscious shoppers."
      }
    ],
    part1CreatorPreview: {
      creatorHandle: "@wellness.with.maya",
      creatorAvatar: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=200&q=80",
      isPro: true,
      caption: "My non-negotiable morning wellness routine 🌿 Essential supplements that completely changed my energy levels! Link in bio for 20% off #WellnessPartner",
      videoBgImage: "https://images.unsplash.com/photo-1540555700478-4be289fbecef?auto=format&fit=crop&w=600&q=80",
      likes: "94.3K",
      comments: "1,820"
    },
    part2Title: "Part 2: 25X ROAS & Multi-Channel Subscriber Expansion",
    part2Sections: [
      {
        title: "25X Return on Ad Spend (ROAS)",
        content: "Integrating creator content with performance affiliate links yielded an incredible 25X return on marketing spend."
      },
      {
        title: "+340% YoY Revenue Scaling",
        content: "The program drove 340% year-over-year revenue growth, turning one-time buyers into loyal long-term subscribers."
      },
      {
        title: "4.8x Increase in Customer LTV",
        content: "Trust-based creator recommendations led to higher regimen compliance and a 4.8x boost in customer lifetime value."
      }
    ],
    keyDeliverables: [
      "PartnerCentric Integrated Influencer & Affiliate Engine",
      "150+ Health & Wellness Micro-Influencer Management",
      "Top-Tier Editorial Listicle & CLO Distribution",
      "25X ROAS & Subscription LTV Analytics"
    ],
    quote: {
      headline: "Bridging Creator Authenticity with Performance ROI",
      text: "PartnerCentric bridged the gap between brand influencer marketing and performance affiliate driving. Achieving a 25X ROAS and 340% YoY growth transformed how we acquire wellness customers.",
      author: "Head of Growth",
      role: "Health & Wellness Brand x PartnerCentric"
    }
  },
  {
    id: 'intuit-quickbooks',
    brandName: 'Intuit QuickBooks',
    categories: ['Fintech & B2B', 'E-commerce'],
    title: "Intuit QuickBooks: 'Own Your Growth' B2B Creator Engine Drives 434M+ Impressions",
    stats: ['434.7M Impressions', '27.8M Engagements', '3.7M Paid Clicks', 'Global Award Winner'],
    bgStyle: 'bg-gradient-to-br from-emerald-950 via-slate-900 to-teal-950',
    customGraphicType: 'marriott',
    readTime: '4 minutes read',
    heroImage: 'https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?auto=format&fit=crop&w=1600&q=80',
    heroImageBadge: 'Intuit QuickBooks • Own Your Growth B2B Campaign',
    industry: 'Fintech, Accounting & Small Business Solutions',
    industryDescription: 'Global financial technology platform powering small business accounting, payroll, and cash flow management.',
    solutionHighlights: [
      'Multi-tier B2B creator network combining small business owners, accountants, and entrepreneurs',
      'Authentic storytelling campaign ("Own Your Growth") highlighting real small business challenges',
      'Gold Award at Global Influencer Marketing Awards for Best Use of Influencer Marketing in B2B'
    ],
    kpis: [
      'Drive brand reputation, consideration, and trial for QuickBooks small business tools',
      'Build trust through authentic peer-to-peer entrepreneur and CPA testimonials',
      'Generate high-intent traffic to QuickBooks landing pages and instant deposit sign-ups',
      'Pioneer a gold-standard B2B influencer framework for enterprise technology'
    ],
    results: [
      { metric: '434.7M', label: 'Total Impressions', detail: 'Organic & Paid Media Scale' },
      { metric: '27.8M', label: 'Total Engagements', detail: 'Comments, Shares & Reactions' },
      { metric: '3.7M', label: 'Paid Landing Page Views', detail: 'High-Intent B2B Traffic' },
      { metric: 'Gold', label: 'Global Award Winner', detail: 'Best B2B Influencer Campaign' }
    ],
    overview: "Intuit QuickBooks partnered with Collectively to launch an annual, award-winning B2B creator marketing program. Centered around the landmark 'Own Your Growth' campaign, Intuit activated real small business owners, accountants, and startup founders to share authentic stories of overcoming business hurdles with QuickBooks—generating over 434 million impressions and 27 million engagements.",
    challenge: "B2B financial technology marketing often relies on rigid corporate messaging that struggles to resonate with busy entrepreneurs. QuickBooks needed a peer-to-peer storytelling strategy that felt genuine, built deep trust with small business decision-makers, and delivered measurable performance down the funnel.",
    campaignGoals: [
      "Mobilize small business owners, CPAs, and financial advisors to share real growth journeys.",
      "Showcase innovative QuickBooks solutions including Instant Deposit and automated cash flow tracking.",
      "Drive paid and organic landing page traffic with clear calls to action for free trials.",
      "Establish QuickBooks as the gold-standard B2B benchmark for influencer marketing."
    ],
    part1Title: "Part 1: Peer-to-Peer Entrepreneur Storytelling & 'Own Your Growth'",
    part1Sections: [
      {
        title: "Authentic Small Business Advocate Cohort",
        content: "Collectively curated a diverse network of real entrepreneurs, family business founders, and accountants who demonstrated how QuickBooks streamlined their daily financial operations."
      },
      {
        title: "'Own Your Growth' Campaign Execution",
        content: "Creators produced candid video stories detailing the gritty reality of starting a business—highlighting cash flow breakthroughs, instant client invoicing, and tax season preparation."
      },
      {
        title: "Multi-Format Digital Asset Library",
        content: "Content spanned long-form founder interviews, short-form Instagram Reels, and LinkedIn thought leadership posts designed for both B2B decision-makers and freelance solopreneurs."
      }
    ],
    part1CreatorPreview: {
      creatorHandle: "@founder.journal",
      creatorAvatar: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=200&q=80",
      isPro: true,
      caption: "From late-night receipts to $1M in revenue. Here's how @quickbooks helped us own our growth and streamline cash flow 📈💼 #QuickBooksPartner",
      videoBgImage: "https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?auto=format&fit=crop&w=600&q=80",
      likes: "154.2K",
      comments: "3,890"
    },
    part2Title: "Part 2: 434M+ Impressions, Paid Synergy & Global Award Recognition",
    part2Sections: [
      {
        title: "372M Paid & 4.1M Organic Impressions",
        content: "Whitelisted creator ads amplified organic success, driving 372M paid impressions alongside 4.1M organic impressions across social channels."
      },
      {
        title: "3.7 Million Paid Landing Page Views",
        content: "Targeted B2B creator ad extensions directed over 3.7 million qualified business owners directly to QuickBooks product demonstration pages."
      },
      {
        title: "Gold Award for Best B2B Campaign",
        content: "Recognized with Gold at the Global Influencer Marketing Awards for Best Use of Influencer Marketing in B2B, setting a new industry benchmark."
      }
    ],
    keyDeliverables: [
      "Small Business Owner & CPA Creator Network",
      "'Own Your Growth' Campaign Creative Assets",
      "Paid Social Whitelisting & Conversion Funnels",
      "Global Award-Winning B2B Case Analytics"
    ],
    quote: {
      headline: "Setting the Gold Standard for B2B Creator Marketing",
      text: "Partnering with Collectively enabled Intuit QuickBooks to tell real, authentic small business stories at scale. Generating over 434 million impressions and 3.7 million landing page views proved that creator marketing is a powerful engine for enterprise B2B growth.",
      author: "Global Brand & Influencer Marketing Lead",
      role: "Intuit QuickBooks x Collectively"
    }
  },
  {
    id: 'seventh-generation',
    brandName: 'Seventh Generation',
    categories: ['Beauty & Personal Care', 'Purpose Marketing'],
    title: "Seventh Generation: Driving Purpose & Sustainability Across 67 Personality-First Creators",
    stats: ['21.1M Impressions', '141K Engagements', '67 Creators', '20.6% Comment Relevancy'],
    bgStyle: 'bg-gradient-to-br from-green-950 via-slate-900 to-emerald-950',
    customGraphicType: 'marriott',
    readTime: '4 minutes read',
    heroImage: 'https://images.unsplash.com/photo-1585421514284-efb74c2b69ba?auto=format&fit=crop&w=1600&q=80',
    heroImageBadge: 'Seventh Generation • Unilever Sustainable Living',
    industry: 'Eco-Friendly Household & Personal Care',
    industryDescription: 'Unilever eco-friendly household brand pioneering plant-based cleaning and climate action.',
    solutionHighlights: [
      'Year-long activation of 67 personality-first eco and lifestyle creators',
      'Targeted campaign flights for Back-to-School, March to End Fossil Fuels, and Prime Day',
      '20.63% comment relevancy rate—nearly double the 12% industry benchmark'
    ],
    kpis: [
      'Drive eco-conscious brand awareness and product trial across plant-based laundry & cleaning',
      'Align creator storytelling with major cultural moments (Climate March & Back to School)',
      'Generate high-relevancy audience conversations around ingredient transparency',
      'Exceed engagement benchmarks with authentic, personality-led eco-creators'
    ],
    results: [
      { metric: '21.1M', label: 'Total Impressions', detail: 'Year-Long Campaign Reach' },
      { metric: '141K', label: 'Total Engagements', detail: 'Active Likes & Comments' },
      { metric: '67', label: 'Personality Creators', detail: 'Eco & Lifestyle Partners' },
      { metric: '20.6%', label: 'Comment Relevancy Rate', detail: 'VS 12% Industry Benchmark' }
    ],
    overview: "Seventh Generation, the eco-friendly household product pioneer under Unilever, partnered with Collectively for a comprehensive, year-long influencer program. Activating 67 personality-first creators across key moments like Back-to-School, Prime Day, and the March to End Fossil Fuels, Seventh Generation generated 21.1 million impressions and achieved a staggering 20.63% comment relevancy rate.",
    challenge: "In a crowded household cleaning market, Seventh Generation needed to cut through 'greenwashing' noise. The brand required authentic eco-advocates who could weave plant-based cleaning benefits into genuine lifestyle content while inspiring real climate awareness.",
    campaignGoals: [
      "Mobilize 67 personality-first creators who align with Seventh Generation's eco-conscious mission.",
      "Execute synchronized campaign flights around Back-to-School, Amazon Prime Day, and Climate Mobilization.",
      "Foster high-quality audience dialogue regarding non-toxic, plant-based cleaning products.",
      "Achieve industry-leading comment relevancy and brand affinity benchmarks."
    ],
    part1Title: "Part 1: Purpose-Led Creator Sourcing & Seasonal Flights",
    part1Sections: [
      {
        title: "Personality-First Eco Creator Selection",
        content: "Collectively vetted 67 creators whose audiences actively value sustainability, parenting, and conscious living—ensuring authentic brand fit."
      },
      {
        title: "Multi-Moment Flight Strategy",
        content: "Campaigns timed for Back-to-School highlighted clean dorms and nurseries, while Prime Day flights drove immediate e-commerce trial for laundry detergent packs."
      },
      {
        title: "Advocacy Integration (March to End Fossil Fuels)",
        content: "Creators raised awareness for climate action, connecting Seventh Generation's plant-based formulas to broader environmental justice."
      }
    ],
    part1CreatorPreview: {
      creatorHandle: "@eco.home.living",
      creatorAvatar: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=200&q=80",
      isPro: true,
      caption: "Switching to @seventhgeneration plant-based laundry detergent was the easiest eco swap for our family 🌿 Clear ingredients, powerful clean! #SeventhGenPartner",
      videoBgImage: "https://images.unsplash.com/photo-1585421514284-efb74c2b69ba?auto=format&fit=crop&w=600&q=80",
      likes: "87.6K",
      comments: "2,140"
    },
    part2Title: "Part 2: 21.1M Impressions & Double Industry Comment Relevancy",
    part2Sections: [
      {
        title: "21.1 Million Impressions & 141K Engagements",
        content: "Continuous creator storytelling delivered over 21.1 million impressions and 141,000 active social engagements."
      },
      {
        title: "20.63% Comment Relevancy Rate",
        content: "Audience comments overwhelmingly discussed product ingredients, eco-swaps, and purchase intent—nearly doubling the 12% industry benchmark."
      },
      {
        title: "Sustainable Brand Loyalty Engine",
        content: "The year-long program turned casual viewers into loyal Seventh Generation brand advocates across major retail channels."
      }
    ],
    keyDeliverables: [
      "67 Purpose-Driven Eco & Lifestyle Creators",
      "Seasonal Campaign Flight Management",
      "Prime Day & E-commerce Sales Support",
      "Comment Sentiment & Relevancy Analytics"
    ],
    quote: {
      headline: "Authentic Purpose Marketing That Cuts Through",
      text: "Collectively helped Seventh Generation translate our mission into authentic, everyday creator stories. Achieving a 20.6% comment relevancy rate showed that consumers weren't just watching—they were actively engaging with our sustainability message.",
      author: "Integrated Brand Marketing Director",
      role: "Seventh Generation x Collectively"
    }
  },
  {
    id: 'nike-invincible',
    brandName: 'Nike',
    categories: ['E-commerce', 'Global Growth'],
    title: "Nike Invincible: Driving Lower-Funnel Conversions & 7.38% Wishlist Rate with 33 Creators",
    stats: ['7.38% Wishlist Rate', '33 Creators', '+50% Macro Conversion', 'High Lower-Funnel Demand'],
    bgStyle: 'bg-gradient-to-br from-orange-950 via-zinc-900 to-red-950',
    customGraphicType: 'marriott',
    readTime: '4 minutes read',
    heroImage: 'https://images.unsplash.com/photo-1542291026-7eec264c27ff?auto=format&fit=crop&w=1600&q=80',
    heroImageBadge: 'Nike • Invincible Running Shoe Launch',
    industry: 'Athletic Footwear, Performance & Apparel',
    industryDescription: 'Global athletic leader launching maximum-cushioning footwear technology designed to reduce runner injury.',
    solutionHighlights: [
      'Activation of 33 macro and micro running & lifestyle creators',
      'Shoppable product tagging and direct calls-to-action to Nike shop pages',
      'Macro-influencers drove 50% stronger conversion rates for lower-funnel demand'
    ],
    kpis: [
      'Drive lower-funnel product consideration and online shop traffic for NIKE INVINCIBLE',
      'Utilize consumer influencer archetypes to demonstrate shoe cushioning and fit',
      'Maximize "Add to Wishlist" saves and direct e-commerce sales',
      'Benchmark conversion efficiency between macro-influencers and micro-influencers'
    ],
    results: [
      { metric: '7.38%', label: 'Add to Wishlist Rate', detail: 'High Lower-Funnel Intent' },
      { metric: '33', label: 'Macro & Micro Creators', detail: 'Running & Style Partners' },
      { metric: '+50%', label: 'Macro Conversion Rate', detail: 'Outperformed Micro Benchmarks' },
      { metric: '$100K+', label: 'Direct E-commerce Demand', detail: 'High-Intent Shop Traffic' }
    ],
    overview: "Nike partnered with Collectively to launch the groundbreaking NIKE INVINCIBLE running shoe. By mobilizing 33 macro and micro-influencers across fitness, running, and street style archetypes, the campaign paired striking video content with shoppable product tags—generating thousands in direct demand and an exceptional 7.38% cumulative 'Add to Wishlist' rate.",
    challenge: "Launching a premium performance running shoe requires proving superior comfort and injury-prevention technology while converting social excitement into immediate e-commerce purchases. Nike needed a creator activation strategy optimized specifically for lower-funnel shopping actions.",
    campaignGoals: [
      "Mobilize 33 runners and style creators to showcase NIKE INVINCIBLE's maximum cushioning.",
      "Implement product tags and swipe-up shop links across creator Instagram Reels and TikToks.",
      "Test lower-funnel conversion performance across macro vs micro creator tiers.",
      "Drive high-intent traffic to Nike's official shop page and boost wishlist saves."
    ],
    part1Title: "Part 1: Shoppable Video Content & Influencer Archetypes",
    part1Sections: [
      {
        title: "Consumer Influencer Archetype Mix",
        content: "Collectively curated 33 creators ranging from elite marathon runners to urban lifestyle influencers—demonstrating shoe versatility on roads, tracks, and street style outfits."
      },
      {
        title: "Shoppable Product Tagging",
        content: "Every video post featured direct product tags and clear calls-to-action guiding viewers straight to Nike's official footwear product page."
      },
      {
        title: "Cushioning & Motion Visualizer Storytelling",
        content: "Creators focused on slow-motion running foot strikes highlighting the ZoomX foam responsiveness and plush comfort."
      }
    ],
    part1CreatorPreview: {
      creatorHandle: "@runner.marcus",
      creatorAvatar: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&fit=crop&w=200&q=80",
      isPro: true,
      caption: "Logging 10 miles in the new @nike Invincible! The ZoomX foam feels insanely bouncy 👟 Tap the tag to shop on Nike.com! #NikePartner",
      videoBgImage: "https://images.unsplash.com/photo-1542291026-7eec264c27ff?auto=format&fit=crop&w=600&q=80",
      likes: "128.9K",
      comments: "2,760"
    },
    part2Title: "Part 2: 7.38% Wishlist Rate & Macro Creator Conversion Surge",
    part2Sections: [
      {
        title: "7.38% Cumulative Add to Wishlist Rate",
        content: "Shoppable video formats captured immense shopper intent, driving a 7.38% Wishlist save rate among engaged viewers."
      },
      {
        title: "Macro-Influencers Delivered 50% Higher Conversions",
        content: "Campaign analytics revealed macro-influencers delivered a 50% stronger conversion rate than micro-influencer baselines for lower-funnel sales."
      },
      {
        title: "Massive E-commerce Revenue Generation",
        content: "Strategic calls-to-action generated thousands of dollars in direct e-commerce demand during the launch window."
      }
    ],
    keyDeliverables: [
      "33 Running & Lifestyle Creator Partnerships",
      "Shoppable Social Video Production & Tagging",
      "Macro vs Micro Conversion Benchmark Analysis",
      "E-commerce Wishlist & Revenue Attribution"
    ],
    quote: {
      headline: "Converting Social Hype Into Direct Footwear Sales",
      text: "Collectively designed a creator strategy for Nike Invincible that didn't just generate buzz—it directly drove lower-funnel purchases. Achieving a 7.38% Wishlist rate proved the power of shoppable creator content.",
      author: "Global Brand Marketing Manager",
      role: "Nike x Collectively"
    }
  },
  {
    id: 'armani-beauty',
    brandName: 'Armani Beauty',
    categories: ['Beauty & Personal Care', 'Luxury & Jewelry'],
    title: "Armani Beauty: Elevating Cultural Relevance with 75M Impressions & 163 Influencers",
    stats: ['75M Impressions', '913 Creator Posts', '163 Influencers', 'Rank #1 Earned Mentions'],
    bgStyle: 'bg-gradient-to-br from-rose-950 via-slate-900 to-red-950',
    customGraphicType: 'marriott',
    readTime: '4 minutes read',
    heroImage: 'https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?auto=format&fit=crop&w=1600&q=80',
    heroImageBadge: "Armani Beauty • L'Oréal Luxe & Luminous Silk Foundation",
    industry: 'Luxury Beauty, Fragrances & High-End Cosmetics',
    industryDescription: "L'Oréal Luxe prestige cosmetics brand world-famous for Luminous Silk Foundation and Giorgio Armani fragrances.",
    solutionHighlights: [
      'Dual-track creator strategy activating 149 unique creators alongside Creator Relations gifting',
      '913 total creator posts across TikTok and Instagram Reel trends',
      '75 million total impressions driving massive earned brand mention volume'
    ],
    kpis: [
      'Elevate Armani Beauty influencer ranking, earned mentions, and cultural relevance',
      'Drive viral organic mentions for Luminous Silk Foundation & Lip Maestro',
      'Build long-term brand loyalty with top beauty tastemakers and celebrity MUAs',
      'Scale social media impression volume across evergreen and trending content'
    ],
    results: [
      { metric: '75M', label: 'Total Impressions', detail: 'TikTok & Instagram Reach' },
      { metric: '913', label: 'Creator Posts Generated', detail: 'High-Volume Mentions' },
      { metric: '163', label: 'Influencers Activated', detail: '149 Unique + Creator Relations' },
      { metric: 'Top Rank', label: 'Earned Brand Mention Lift', detail: 'Luxe Beauty Leaderboard' }
    ],
    overview: "Armani Beauty, the pinnacle luxury makeup and fragrance house under L'Oréal Luxe, partnered with Collectively to supercharge its influencer ranking and cultural relevance. Through a dual-track campaign strategy activating 163 influencers, Armani Beauty produced 913 posts generating 75 million impressions and establishing dominant earned media volume.",
    challenge: "Maintaining a luxury beauty brand's prestige while achieving viral volume on platforms like TikTok requires delicate execution. Armani Beauty needed an influencer strategy that balanced high-end editorial aesthetics with trending organic social content.",
    campaignGoals: [
      "Activate 149 unique creators for paid content flights and evergreen product reviews.",
      "Execute a dedicated Creator Relations gifting program for existing brand advocates.",
      "Drive massive post volume around flagship products like Luminous Silk Foundation.",
      "Surpass luxury beauty benchmarks for total impressions and earned brand mentions."
    ],
    part1Title: "Part 1: Dual-Track Creator Strategy & Product Gifting",
    part1Sections: [
      {
        title: "Track 1: Paid Creator Activation (149 Influencers)",
        content: "Collectively onboarded 149 unique beauty influencers to produce trending TikTok get-ready-with-me (GRWM) videos and red-carpet glam tutorials."
      },
      {
        title: "Track 2: Creator Relations Gifting Program",
        content: "A VIP seeding tier delivered personalized Armani Beauty gifting suites to top celebrity makeup artists and beauty tastemakers—fostering organic brand love."
      },
      {
        title: "Evergreen & Trending Content Integration",
        content: "Creators showcased Luminous Silk Foundation skin matches, long-wear performance, and luxury packaging aesthetics."
      }
    ],
    part1CreatorPreview: {
      creatorHandle: "@glam.by.sophia",
      creatorAvatar: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=200&q=80",
      isPro: true,
      caption: "Nothing compares to the seamless, glowing finish of @armanibeauty Luminous Silk Foundation ✨ Truly my holy grail for red carpet skin! #ArmaniBeautyPartner",
      videoBgImage: "https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?auto=format&fit=crop&w=600&q=80",
      likes: "215.8K",
      comments: "4,310"
    },
    part2Title: "Part 2: 75 Million Impressions & Dominant Earned Mentions",
    part2Sections: [
      {
        title: "913 Creator Posts & 75 Million Impressions",
        content: "The dual-track approach generated an unprecedented 913 posts, amassing 75 million total social media impressions."
      },
      {
        title: "Industry Leader in Earned Brand Mentions",
        content: "The sustained volume elevated Armani Beauty into top-tier rankings on luxury cosmetics leaderboards."
      },
      {
        title: "Sustained Creator Loyalty & Advocacy",
        content: "Continuous VIP gifting converted temporary campaign partners into permanent, long-term brand ambassadors."
      }
    ],
    keyDeliverables: [
      "163 Beauty & Luxury Influencer Activations",
      "Dual-Track Paid Campaign & VIP Gifting Engine",
      "913 Custom TikTok & Instagram Reels Assets",
      "Earned Brand Mention & Impression Analytics"
    ],
    quote: {
      headline: "Dominating Luxury Beauty Conversations",
      text: "Collectively's dual-track approach allowed Armani Beauty to achieve incredible volume without sacrificing prestige. Generating 75 million impressions across 913 posts elevated our brand to the top of luxury beauty conversations.",
      author: "Vice President of Marketing",
      role: "Armani Beauty x Collectively"
    }
  },
  {
    id: 'mercedes-benz',
    brandName: 'Mercedes-Benz',
    categories: ['Luxury & Automotive', 'E-commerce'],
    title: "Mercedes-Benz: Father's Day Fragrance Campaign Reaches Millions with Upfluence",
    stats: ['3M+ Paid Impressions', '98K+ Engagements', '25 Lifestyle Creators', '2.5K New Followers'],
    bgStyle: 'bg-gradient-to-br from-slate-950 via-zinc-900 to-slate-900',
    customGraphicType: 'marriott',
    readTime: '4 minutes read',
    heroImage: 'https://images.unsplash.com/photo-1618843479313-40f8afb4b4d8?auto=format&fit=crop&w=1600&q=80',
    heroImageBadge: "Mercedes-Benz • Man Fragrance Launch & Father's Day",
    industry: 'Luxury Automotive & Fragrances',
    industryDescription: 'Global luxury automotive titan expanding lifestyle branding through premium fragrance lines and creator giveaways.',
    solutionHighlights: [
      'Recruitment of 25 lifestyle and luxury creators across US, Germany, and France',
      "Father's Day giveaway competitions and unboxing content",
      'Paid social amplification boosting influencer posts to 3M+ impressions and driving retail traffic'
    ],
    kpis: [
      'Drive Father\'s Day sales and brand notoriety for "Mercedes-Benz Man" fragrance',
      'Engage target luxury male & female demographics (ages 20-65) in key markets',
      'Gain organic Instagram followers for the official Mercedes-Benz account',
      'Direct qualified traffic to local perfume retailers via paid social amplification'
    ],
    results: [
      { metric: '3M+', label: 'Paid Social Impressions', detail: 'Amplified Influencer Ads' },
      { metric: '98K+', label: 'Organic Engagements', detail: '7,634 Post Shares' },
      { metric: '2,500', label: 'New Instagram Followers', detail: 'Official Brand Handle' },
      { metric: '872', label: 'Direct Retail Clicks', detail: 'High-Intent Perfume Shoppers' }
    ],
    overview: "Mercedes-Benz partnered with Upfluence to execute an international influencer campaign promoting its flagship fragrance line, 'Mercedes-Benz Man', ahead of Father's Day. By deploying 25 lifestyle and luxury creators across the US, Germany, and France, Mercedes-Benz drove viral giveaway engagement and amplified high-performing posts to achieve over 3 million paid impressions.",
    challenge: "Transitioning a legendary luxury automotive brand into the fragrance market requires maintaining prestige while generating high-volume consumer interest. Mercedes-Benz needed an efficient way to recruit vetted creators, manage giveaway logistics across three countries, and turn organic posts into high-converting paid social ads.",
    campaignGoals: [
      "Recruit 25 top lifestyle creators matching Mercedes-Benz's luxury aesthetic across the US, Germany, and France.",
      "Host engaging Father's Day giveaway competitions to spark social sharing and follower growth.",
      "Amplify top creator posts through paid ad whitelisting to drive local retail clicks.",
      "Exceed benchmark engagement and share rates while building long-term perfume notoriety."
    ],
    part1Title: "Part 1: Multi-Country Creator Sourcing & Father's Day Giveaways",
    part1Sections: [
      {
        title: "Targeted International Creator Sourcing",
        content: "Upfluence identified and onboarded 25 high-affinity lifestyle and fashion creators in the US, Germany, and France who resonated with luxury-minded men and women aged 20-65."
      },
      {
        title: "Viral Giveaway Competitions",
        content: "Creators hosted exclusive Father's Day giveaways featuring 'Mercedes-Benz Man' fragrance bottles, encouraging followers to tag friends, share posts, and follow Mercedes-Benz."
      },
      {
        title: "Luxury Unboxing Storytelling",
        content: "Creators crafted sophisticated unboxing videos highlighting the bottle's sleek design, scent notes, and premium gifting appeal."
      }
    ],
    part1CreatorPreview: {
      creatorHandle: "@gentleman.journal",
      creatorAvatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=200&q=80",
      isPro: true,
      caption: "Celebrating Father's Day with the new @mercedesbenz Man fragrance ✨ Sleek design & timeless scent. Entering the giveaway below! #MercedesBenzPartner",
      videoBgImage: "https://images.unsplash.com/photo-1618843479313-40f8afb4b4d8?auto=format&fit=crop&w=600&q=80",
      likes: "89.4K",
      comments: "2,310"
    },
    part2Title: "Part 2: Paid Social Amplification & Retail Driving Impact",
    part2Sections: [
      {
        title: "Over 98,000 Organic Engagements",
        content: "The campaign sparked massive audience participation, generating 98,000+ organic engagements, 7,634 post shares, and 2,500 new Instagram followers."
      },
      {
        title: "3M+ Paid Impressions via Whitelisted Ads",
        content: "Top-performing organic creator posts were immediately converted into paid social ads, driving an additional 3 million impressions to targeted luxury perfume buyers."
      },
      {
        title: "872 Direct Clicks to Local Retail Partners",
        content: "Paid ad traffic was directed straight to local fragrance retail stockists, closing the gap between social inspiration and in-store purchase."
      }
    ],
    keyDeliverables: [
      "25 International Lifestyle Creators Managed",
      "Father's Day Giveaway Campaign Engine",
      "3M+ Whitelisted Paid Social Ad Impressions",
      "Multi-Market Retail Traffic & Follower Analytics"
    ],
    quote: {
      headline: "Scaling Luxury Lifestyle Branding Across Continents",
      text: "Partnering with Upfluence allowed us to seamlessly activate 25 top creators across 3 countries for Father's Day. Delivering over 3 million impressions and 98,000 organic engagements established Mercedes-Benz Man as a premier gift choice.",
      author: "Brand & Marketing Team",
      role: "Mercedes-Benz Fragrances x Upfluence"
    }
  },
  {
    id: 'fuze-tea',
    brandName: 'Fuze Tea',
    categories: ['Entertainment & Art', 'E-commerce'],
    title: "Fuze Tea: Integrating Twitch & Live Gaming 'Fuze Pauses' with Upfluence",
    stats: ['#1 Peak Stream Viewers', '6 Gaming Creators', 'Twitch Live Streams', 'Cross-Platform IG'],
    bgStyle: 'bg-gradient-to-br from-amber-950 via-zinc-900 to-yellow-950',
    customGraphicType: 'marriott',
    readTime: '4 minutes read',
    heroImage: 'https://images.unsplash.com/photo-1542751371-adc38448a05e?auto=format&fit=crop&w=1600&q=80',
    heroImageBadge: 'Fuze Tea • Coca-Cola Beverage & Twitch Integration',
    industry: 'Food & Beverage, Gaming & Live Streaming',
    industryDescription: 'Coca-Cola portfolio tea beverage brand connecting with Gen Z gamers through live stream interactive integrations.',
    solutionHighlights: [
      'Interactive "Fuze Tea Pause" stream segments with 6 top gaming & lifestyle creators',
      'Live Twitch audience interaction during chilled beverage breaks',
      'Cross-platform amplification on Instagram Stories and Feed'
    ],
    kpis: [
      'Position Fuze Tea as the official relaxing beverage for gaming sessions',
      'Engage hard-to-reach Gen Z gaming audiences on Twitch during live streams',
      'Drive peak viewer retention during branded live stream break segments',
      'Extend campaign reach across Instagram with creator lifestyle content'
    ],
    results: [
      { metric: 'Peak', label: 'Stream Viewer Moments', detail: 'Recorded During Fuze Pauses' },
      { metric: '6', label: 'Top Streamers Onboarded', detail: 'Gaming & Lifestyle Niche' },
      { metric: '2 Platforms', label: 'Multi-Channel Reach', detail: 'Twitch & Instagram' },
      { metric: '100%', label: 'Positive Chat Sentiment', detail: 'Authentic Beverage Placement' }
    ],
    overview: "Fuze Tea, the popular iced tea brand under The Coca-Cola Company, partnered with Upfluence to pioneer a novel Twitch influencer strategy targeting Gen Z gamers. By introducing 'Fuze Tea Pauses' into live stream broadcasts, Fuze Tea created memorable, interactive moments that positioned the drink as the ultimate gaming relaxation beverage.",
    challenge: "Gamers and Gen Z stream viewers actively resist intrusive ads and sponsored interruptions. Fuze Tea needed an organic, entertaining way to integrate into live Twitch gaming broadcasts that felt natural to the streamer's routine and kept live chat engaged.",
    campaignGoals: [
      "Partner with 6 popular gaming and lifestyle streamers to host live 'Fuze Tea Pauses'.",
      "Engage live chat during stream breaks with interactive Q&A and chill sessions.",
      "Drive cross-platform brand awareness by extending Twitch highlights to Instagram.",
      "Establish Fuze Tea as a staple beverage for gaming culture and relaxation."
    ],
    part1Title: "Part 1: The 'Fuze Tea Pause' Twitch Live Concept",
    part1Sections: [
      {
        title: "The 'Fuze Tea Pause' Live Stream Segment",
        content: "During high-energy gaming sessions, streamers took dedicated 'Fuze Tea Pauses'—stepping away from competitive gameplay to crack open a chilled Fuze Tea, chat with viewers, and answer fan questions."
      },
      {
        title: "Authentic Streamer Integration",
        content: "Rather than reciting scripted commercial lines, streamers shared genuine reactions and built organic banter around their favorite Fuze Tea flavors."
      },
      {
        title: "Cross-Platform Instagram Extension",
        content: "Streamers cross-posted stream clips, setup photos, and unboxing packages to Instagram Stories and Reels, ensuring round-the-clock campaign visibility."
      }
    ],
    part1CreatorPreview: {
      creatorHandle: "@gamer.alex",
      creatorAvatar: "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?auto=format&fit=crop&w=200&q=80",
      isPro: true,
      caption: "Taking a quick @fuzetea pause mid-match to refresh and chat with stream! What's your favorite flavor? 🎮🍹 #FuzeTeaPartner",
      videoBgImage: "https://images.unsplash.com/photo-1542751371-adc38448a05e?auto=format&fit=crop&w=600&q=80",
      likes: "95.2K",
      comments: "1,880"
    },
    part2Title: "Part 2: Peak Live Viewer Retention & Gen Z Affinity",
    part2Sections: [
      {
        title: "Highest Viewer Peaks During Fuze Pauses",
        content: "Stream analytics revealed that 'Fuze Tea Pause' segments frequently recorded the highest concurrent viewer peaks of the broadcast, as fans gathered for interactive Q&A."
      },
      {
        title: "100% Positive Live Chat Sentiment",
        content: "Twitch chat buzzed with custom emotes and positive comments, embracing the brand moment as a fun, welcome break in the gaming action."
      },
      {
        title: "Blueprint for Beverage & Gaming Marketing",
        content: "The campaign established a high-converting template for FMCG beverage brands aiming to capture attention on live streaming platforms."
      }
    ],
    keyDeliverables: [
      "6 Twitch Streamer Partnerships Managed",
      "Custom 'Fuze Tea Pause' Live Segment Format",
      "Cross-Platform Instagram Reels & Stories",
      "Live Chat Sentiment & Concurrent Viewer Analytics"
    ],
    quote: {
      headline: "Capturing Gen Z Attention in Real Time",
      text: "Integrating 'Fuze Tea Pauses' into live Twitch streams transformed beverage placement into an interactive fan favorite moment. The campaign set a new benchmark for how FMCG brands engage Gen Z gamers.",
      author: "Digital Activation Team",
      role: "Fuze Tea / Coca-Cola"
    }
  },
  {
    id: 'tiege-hanley',
    brandName: 'Tiege Hanley',
    categories: ['Beauty & Personal Care', 'E-commerce'],
    title: "Tiege Hanley: Tripling Creator Activations & Reducing Research Time by 75%",
    stats: ['3x / +160% Activations', '-75% Outreach Time', '+400% Creator Pool', 'DTC Growth'],
    bgStyle: 'bg-gradient-to-br from-cyan-950 via-slate-900 to-blue-950',
    customGraphicType: 'marriott',
    readTime: '4 minutes read',
    heroImage: 'https://images.unsplash.com/photo-1620916566398-39f1143ab7be?auto=format&fit=crop&w=1600&q=80',
    heroImageBadge: "Tiege Hanley • Men's Skincare & DTC Growth",
    industry: "Men's Grooming, Skincare & DTC E-commerce",
    industryDescription: "Uncomplicated men's skincare subscription brand driving customer acquisition through high-volume creator sponsorships.",
    solutionHighlights: [
      'Data-driven creator discovery & automated audience vetting with Upfluence',
      'Tripled monthly influencer activations (+160% growth)',
      '75% reduction in manual outreach and creator research hours'
    ],
    kpis: [
      'Scale creator partnerships for men\'s skincare subscription boxes',
      'Eliminate manual spreadsheet research and time-consuming cold outreach',
      'Expand qualified creator opportunities by 400% in male grooming & lifestyle',
      'Drive low-CPA DTC customer sign-ups across YouTube and Instagram'
    ],
    results: [
      { metric: '3x', label: 'Influencer Activations', detail: '+160% Campaign Volume' },
      { metric: '-75%', label: 'Research & Outreach Time', detail: 'Automated Discovery' },
      { metric: '+400%', label: 'Qualified Creator Pool', detail: '4x More Opportunities' },
      { metric: 'Data-First', label: 'CPA Optimization', detail: 'Scalable DTC Engine' }
    ],
    overview: "Tiege Hanley, the pioneering DTC brand making men's skincare uncomplicated, partnered with Upfluence to scale its creator marketing program. By automating creator discovery, audience demographic vetting, and campaign workflow, Tiege Hanley tripled its monthly influencer activations while cutting research time by 75%.",
    challenge: "As a subscription-based men's grooming brand reliant on high-volume YouTube and Instagram creator sponsorships, Tiege Hanley faced operational bottlenecks. Manually vetting creators, checking audience demographics, and negotiating deals in spreadsheets limited campaign scale and tied up valuable team bandwidth.",
    campaignGoals: [
      "Automate influencer discovery to uncover creators with male-dominated, engaged audiences.",
      "Triple monthly creator activations to support continuous DTC subscription growth.",
      "Reduce creator research and outreach hours by at least 50%.",
      "Optimize customer acquisition cost (CAC) through data-backed creator selection."
    ],
    part1Title: "Part 1: Automated Discovery & Demographic Vetting",
    part1Sections: [
      {
        title: "Data-Driven Influencer Discovery",
        content: "Tiege Hanley utilized Upfluence's AI search engine to screen thousands of male lifestyle, fitness, and tech creators—filtering specifically for audience age, gender distribution, and engagement authenticity."
      },
      {
        title: "Uncovering 400% More Qualified Opportunities",
        content: "The platform instantly unlocked 4x more relevant creator partnership opportunities, expanding Tiege Hanley's potential pool beyond traditional grooming influencers."
      },
      {
        title: "Streamlined Outreach & Negotiation",
        content: "Outreach templates, automated follow-ups, and in-platform contract management slashed Tiege Hanley's administrative research time by 75%."
      }
    ],
    part1CreatorPreview: {
      creatorHandle: "@grooming.daily",
      creatorAvatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=200&q=80",
      isPro: true,
      caption: "Skincare made simple! Unboxing my monthly @tiegehanley box. Level 1 routine keeps my skin clear with zero hassle 💪 #TiegePartner",
      videoBgImage: "https://images.unsplash.com/photo-1620916566398-39f1143ab7be?auto=format&fit=crop&w=600&q=80",
      likes: "112.3K",
      comments: "1,940"
    },
    part2Title: "Part 2: Tripled Campaign Volume & Scalable DTC Growth",
    part2Sections: [
      {
        title: "160% Surge in Monthly Creator Activations",
        content: "With operational friction removed, Tiege Hanley scaled to tripling its active monthly creator sponsorships (+160% activation volume)."
      },
      {
        title: "Consistent Customer Acquisition Cost (CAC)",
        content: "Data-backed selection ensured every new creator partnership delivered qualified male subscription traffic at predictable acquisition targets."
      },
      {
        title: "Sustainable Long-Term Creator Engine",
        content: "Tiege Hanley established a predictable, high-volume creator engine that fuels its position as an industry leader in men's skincare."
      }
    ],
    keyDeliverables: [
      "Upfluence AI Creator Discovery Engine",
      "Automated Demographic & Audience Vetting",
      "Multi-Channel YouTube & Instagram Sponsorships",
      "CAC & DTC Subscription Attribution Analytics"
    ],
    quote: {
      headline: "Tripling Campaign Scale Without Extra Overhead",
      text: "Upfluence transformed our creator operations. We quadrupled our qualified creator pool, cut research time by 75%, and tripled our active campaign volume while keeping acquisition costs lean.",
      author: "Growth Marketing Director",
      role: "Tiege Hanley x Upfluence"
    }
  },
  {
    id: 'laneige',
    brandName: 'LANEIGE',
    categories: ['Beauty & Personal Care', 'E-commerce'],
    title: "LANEIGE: Scaling Skincare Influencer Marketing to #Top 5 Rank with Traackr",
    stats: ['+951% VIT Growth', '#33 to Top 5 Rank', '72M Video Views', '227% TikTok Surge'],
    bgStyle: 'bg-gradient-to-br from-pink-950 via-slate-900 to-sky-950',
    customGraphicType: 'marriott',
    readTime: '4 minutes read',
    heroImage: 'https://images.unsplash.com/photo-1570172619644-dfd03ed5d881?auto=format&fit=crop&w=1600&q=80',
    heroImageBadge: 'LANEIGE • AmorePacific Skincare & Lip Sleeping Mask',
    industry: 'Beauty, Skincare & K-Beauty',
    industryDescription: 'Global K-beauty powerhouse under AmorePacific famous for Water Bank Moisture Cream and Lip Sleeping Mask.',
    solutionHighlights: [
      'Data-driven creator benchmarking & Traackr Creator Lifecycle tracking',
      'Celebrity ambassador integration (Sydney Sweeney) with micro-influencer cohorts',
      'Multi-channel TikTok & Instagram viral product seeding strategy'
    ],
    kpis: [
      'Rise from #33 to Top 5 in Traackr US Skincare Competitive Leaderboard',
      'Quantify influencer marketing ROI to justify brand budget scaling',
      'Maximize viral social video views for Water Bank & Lip Mask collections',
      'Drive omnichannel online and offline retail sales lift'
    ],
    results: [
      { metric: '+951%', label: 'Creator VIT Growth', detail: 'Value of Earned Media' },
      { metric: '#Top 5', label: 'US Skincare Leaderboard', detail: 'Up from #33 in 2021' },
      { metric: '72M', label: 'Viral Video Views', detail: 'Sydney Sweeney & Creator Campaign' },
      { metric: '+227%', label: 'TikTok Follower Surge', detail: 'Multi-Channel Brand Growth' }
    ],
    overview: "LANEIGE, the flagship K-beauty brand under AmorePacific renowned for its iconic Water Bank Collection and Lip Sleeping Mask, partnered with Traackr to transform its influencer marketing strategy. By grounding campaign planning in Traackr's Competitive Benchmark and Creator Lifecycle data, LANEIGE turned creator activations into a measurable, high-growth engine.",
    challenge: "In a hyper-competitive US skincare market, LANEIGE needed data-driven proof of influencer ROI to justify budget scaling. Standing at #33 on Traackr's US Skincare leaderboard in 2021, the brand required a strategic framework to optimize creator relationships, balance celebrity partnerships with micro-influencers, and systematically climb the ranks.",
    campaignGoals: [
      "Scale LANEIGE into the Top 5 US Skincare brands for Value of Earned Media (VIT).",
      "Leverage Traackr's Competitive Benchmark as a 'north star' to identify strategic creator gaps.",
      "Amplify global ambassador Sydney Sweeney's campaign through synchronized micro-influencer cohorts.",
      "Drive viral product buzz and measurable online/offline conversions across Sephora and DTC channels."
    ],
    part1Title: "Part 1: Data-Driven Benchmarking & Ambassador Amplification",
    part1Sections: [
      {
        title: "Traackr Competitive Benchmark 'North Star'",
        content: "LANEIGE used Traackr's benchmark analytics to evaluate competitors, identify high-performing skincare creators, and optimize creator tiering from micro-influencers to mega-ambassadors."
      },
      {
        title: "Sydney Sweeney Ambassador Synergies",
        content: "When appointing Sydney Sweeney as global ambassador, LANEIGE activated a surrounding wave of micro-influencers to echo behind-the-scenes content—generating 72 million total views and a +227% surge in TikTok followers."
      },
      {
        title: "Creator Lifecycle Tracking",
        content: "Utilizing Traackr's Creator Lifecycle tool, LANEIGE monitored creator engagement over time, cultivating long-term brand advocates rather than one-off transactional posts."
      }
    ],
    part1CreatorPreview: {
      creatorHandle: "@glowwithsydney",
      creatorAvatar: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=200&q=80",
      isPro: true,
      caption: "Unboxing my holy grail @laneige_us Lip Sleeping Mask & Water Bank Cream! Hydration level 100 💦 #LaneigePartner",
      videoBgImage: "https://images.unsplash.com/photo-1570172619644-dfd03ed5d881?auto=format&fit=crop&w=600&q=80",
      likes: "210.4K",
      comments: "4,150"
    },
    part2Title: "Part 2: Multi-Tiered Viral Scale & Leaderboard Breakthrough",
    part2Sections: [
      {
        title: "951% Increase in Creator Performance (VIT)",
        content: "LANEIGE achieved an astronomical +951% increase in creator VIT performance, proving that data-driven creator alignment directly correlates with brand impact."
      },
      {
        title: "Breakthrough into Top 5 US Skincare Brands",
        content: "Rising from #33 in 2021 to a Top 5 spot on Traackr's US Skincare leaderboard by 2024, LANEIGE established itself as a dominant force in modern digital beauty."
      },
      {
        title: "Omnichannel Conversion Lift",
        content: "Collaborations featuring exclusive creator discount codes and in-store video displays drove record online DTC sales and boosted Sephora retail sell-throughs."
      }
    ],
    keyDeliverables: [
      "Traackr Competitive Benchmark & Lifecycle Analytics",
      "Sydney Sweeney Global Ambassador Amplification",
      "Multi-Tier Micro & Macro Creator Seedings",
      "Omnichannel Sephora & DTC Attribution Reporting"
    ],
    quote: {
      headline: "From #33 to Top 5 Skincare Brand",
      text: "Partnering with Traackr gave us the north star we needed to measure creator performance and scale LANEIGE into a top 5 skincare brand. Achieving a 951% VIT increase proved the undeniable impact of data-first influencer marketing.",
      author: "Brand Marketing Team",
      role: "LANEIGE / AmorePacific"
    }
  },
  {
    id: 'pierre-fabre',
    brandName: 'Pierre Fabre USA',
    categories: ['Beauty & Personal Care'],
    title: "Pierre Fabre USA: Building an Expert-Led 'Dermfluencer' Skincare Program",
    stats: ['+189% YoY Reach', '+58% Brand Mentions', '#4 Derm Rank', '+15% Video Views'],
    bgStyle: 'bg-gradient-to-br from-blue-950 via-slate-900 to-teal-950',
    customGraphicType: 'marriott',
    readTime: '4 minutes read',
    heroImage: 'https://images.unsplash.com/photo-1556228720-195a672e8a03?auto=format&fit=crop&w=1600&q=80',
    heroImageBadge: 'Pierre Fabre USA • Avène, Klorane, René Furterer & Ducray',
    industry: 'Dermo-Cosmetics & Expert Skincare',
    industryDescription: 'French dermo-cosmetic leader delivering dermatologist-backed skincare solutions including Eau Thermale Avène.',
    solutionHighlights: [
      'Vetted "Dermfluencer" strategy combining board-certified dermatologists & medical experts',
      'Cleanance ComedoMed & Thermal Spring Water educational video activations',
      'Traackr Creator Segments analysis to measure high-credibility medical engagement'
    ],
    kpis: [
      'Reinforce clinical trust & consumer education in a competitive US skincare market',
      'Expand brand reach and post frequency for Eau Thermale Avène & Klorane',
      'Elevate Pierre Fabre into Top 5 Dermfluencer Leaderboard rankings',
      'Shift from low-trust VIP creators to authentic, medically credible voices'
    ],
    results: [
      { metric: '+189%', label: 'YoY Brand Reach', detail: 'Across US Skincare Audiences' },
      { metric: '+58%', label: 'YoY Brand Mentions', detail: 'Expert & Creator Posts' },
      { metric: '#4', label: 'Dermfluencer Ranking', detail: 'Up from #5 in Leaderboard' },
      { metric: '+15%', label: 'Video Views Growth', detail: 'Clinical Education Content' }
    ],
    overview: "Pierre Fabre Laboratories USA—home to iconic dermo-cosmetic brands Eau Thermale Avène, Klorane, René Furterer, and Ducray—partnered with Traackr to construct an expert-led 'Dermfluencer' creator ecosystem. By prioritizing board-certified dermatologists and medical skincare experts over generic lifestyle influencers, Pierre Fabre elevated consumer trust and clinical credibility across the US.",
    challenge: "In an overcrowded skincare landscape saturated with unverified beauty claims, consumers demand authentic medical backing. Pierre Fabre USA needed a specialized framework to identify, vet, and onboard medically qualified creators ('Dermfluencers') while rigorously tracking educational video engagement across Avène's key product lines.",
    campaignGoals: [
      "Build a high-credibility creator network of board-certified dermatologists and estheticians.",
      "Drive educational content around sensitive skin care, Thermal Spring Water, and Cleanance ComedoMed.",
      "Outperform competitive dermo-cosmetic brands on Traackr's Dermfluencer Leaderboard.",
      "Achieve measurable year-over-year gains in total reach, post mentions, and video view retention."
    ],
    part1Title: "Part 1: 'Dermfluencer' Discovery & Clinical Content Strategy",
    part1Sections: [
      {
        title: "Traackr Creator Segments & Medical Vetting",
        content: "Pierre Fabre used Traackr's Creator Segments Analysis to isolate creators with verified medical credentials, board certifications, and deep audience trust in dermatology."
      },
      {
        title: "Edu-Tainment for Sensitive Skincare",
        content: "Dermfluencers produced in-depth, educational video routines explaining the science behind Avène's Thermal Spring Water and Cleanance ComedoMed peeling treatments for acne-prone skin."
      },
      {
        title: "Shift to High-Credibility Niche Creators",
        content: "By shifting budget from high-cost, low-trust VIP celebrities to hyper-credible medical experts, Pierre Fabre maximized engagement quality and comment intent."
      }
    ],
    part1CreatorPreview: {
      creatorHandle: "@derm.dr.sarah",
      creatorAvatar: "https://images.unsplash.com/photo-1559839734-2b71ea197ec2?auto=format&fit=crop&w=200&q=80",
      isPro: true,
      caption: "Why I recommend @aveneusa Thermal Spring Water to my patients with compromised skin barriers 🩺✨ #AvenePartner #DermApproved",
      videoBgImage: "https://images.unsplash.com/photo-1556228720-195a672e8a03?auto=format&fit=crop&w=600&q=80",
      likes: "142.8K",
      comments: "2,840"
    },
    part2Title: "Part 2: Explosive YoY Reach & Industry-Leading Rankings",
    part2Sections: [
      {
        title: "189% Year-Over-Year Increase in Brand Reach",
        content: "The expert-led creator program dramatically expanded Pierre Fabre's footprint, achieving a 189% YoY surge in total US consumer reach."
      },
      {
        title: "Climbing to #4 on Dermfluencer Leaderboard",
        content: "Pierre Fabre advanced from #5 to #4 on Traackr's prestigious Dermfluencer Leaderboard, surpassing established pharmaceutical skincare competitors."
      },
      {
        title: "58% Increase in Organic & Paid Brand Mentions",
        content: "Dermatologists and skincare advocates generated 58% more brand posts year-over-year, driving a +15% boost in total video view engagement."
      }
    ],
    keyDeliverables: [
      "Board-Certified Dermfluencer Identification",
      "Traackr Creator Segments & Compliance Tracking",
      "Clinical Education Video Asset Library",
      "YoY Reach & Leaderboard Benchmark Analytics"
    ],
    quote: {
      headline: "Medical Credibility Drives Real Impact",
      text: "Partnering with Traackr allowed us to build an expert-led Dermfluencer program grounded in clinical trust. Increasing our reach by 189% YoY and climbing to #4 on the Dermfluencer Leaderboard demonstrates the power of medically backed creator storytelling.",
      author: "Digital Communications Team",
      role: "Pierre Fabre Laboratories USA"
    }
  },
  {
    id: 'loreal-spain',
    brandName: "L'Oréal Spain",
    categories: ['Beauty & Personal Care', 'E-commerce'],
    title: "L'Oréal Spain: Streamlining TikTok Spark Ads & Creator Marketing at Scale",
    stats: ['TikTok Spark Ads', 'Metal Detox Launch', 'Unified ROI', 'Traackr x TikTok'],
    bgStyle: 'bg-gradient-to-br from-amber-950 via-slate-900 to-purple-950',
    customGraphicType: 'marriott',
    readTime: '3 minutes read',
    heroImage: 'https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?auto=format&fit=crop&w=1600&q=80',
    heroImageBadge: "L'Oréal Spain • L'Oréal Professionnel & Metal Detox",
    industry: 'Haircare & Luxury Beauty',
    industryDescription: "Global beauty leader streamlining TikTok paid organic Spark Ads and professional salon launches across Europe.",
    solutionHighlights: [
      'Native Traackr x TikTok One integration for seamless Spark Ad code requests',
      "L'Oréal Professionnel Metal Detox range launch pilot strategy",
      'Side-by-side organic vs paid view tracking aligned with TikTok Ads Manager'
    ],
    kpis: [
      'Eliminate manual creator code exchanges and streamline ad approval workflows',
      'Gain unified visibility into organic performance vs boosted Spark Ad ROI',
      "Establish a replicable framework for scaling TikTok creator ads across L'Oréal brands",
      'Drive high salon professional & consumer engagement for Metal Detox launch'
    ],
    results: [
      { metric: '100%', label: 'Automated Code Handling', detail: 'Zero Manual Exchanges' },
      { metric: '1 Direct', label: 'Dashboard Integration', detail: 'Traackr x TikTok One' },
      { metric: 'Full', label: 'Paid & Organic Alignment', detail: 'Real-Time ROI Attribution' },
      { metric: 'Scalable', label: 'Global Playbook', detail: "Expanded Across L'Oréal Europe" }
    ],
    overview: "L'Oréal Spain, managing iconic hair and beauty portfolios across Southern Europe, partnered with Traackr to pioneer a seamless integration with TikTok One and Spark Ads. Using L'Oréal Professionnel's landmark Metal Detox launch as a pilot, L'Oréal Spain eliminated administrative friction and unlocked real-time performance tracking across both organic creator posts and paid Spark Ads.",
    challenge: "Scaling creator partnerships into paid social Spark Ads traditionally requires tedious back-and-forth email exchanges to obtain ad authorization codes from creators. L'Oréal Spain needed an automated, compliant, and auditable system to request Spark Ad codes directly and analyze organic vs paid video view performance in one centralized location.",
    campaignGoals: [
      "Streamline Spark Ad authorization code collection without manual creator back-and-forth.",
      "Support the relaunch of L'Oréal Professionnel Metal Detox range with top hair creators.",
      "Integrate Traackr with TikTok Ads Manager for unified organic and paid performance reporting.",
      "Create a standardized, compliance-ready playbook for all L'Oréal subsidiaries in Europe."
    ],
    part1Title: "Part 1: Native Traackr x TikTok One Integration & Pilot Launch",
    part1Sections: [
      {
        title: "Direct Spark Ad Code Requests",
        content: "Through Traackr's native integration with TikTok One, L'Oréal Spain requested and managed Spark Ad authorization codes directly inside the platform—eliminating email delays and code expiration errors."
      },
      {
        title: "L'Oréal Professionnel Metal Detox Pilot",
        content: "Top hair stylists and beauty creators produced authentic salon transformation videos demonstrating the Metal Detox treatment, creating a library of high-performing organic assets."
      },
      {
        title: "Automated Compliance & Rights Management",
        content: "The workflow automatically verified usage rights, disclaimers, and music licensing before launching Spark Ad boosts."
      }
    ],
    part1CreatorPreview: {
      creatorHandle: "@hairby.elena",
      creatorAvatar: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=200&q=80",
      isPro: true,
      caption: "Protecting hair color with the NEW @lorealpro Metal Detox treatment! Watch this transformation 💇‍♀️✨ #LOrealProPartner #MetalDetox",
      videoBgImage: "https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?auto=format&fit=crop&w=600&q=80",
      likes: "194.5K",
      comments: "3,120"
    },
    part2Title: "Part 2: Unified Organic & Paid Analytics & Global Scale",
    part2Sections: [
      {
        title: "Side-by-Side Organic & Paid View Attribution",
        content: "L'Oréal Spain gained complete visibility into how organic creator traction converted when boosted via TikTok Spark Ads, with metrics directly synchronized with TikTok Ads Manager."
      },
      {
        title: "Zero Administrative Overhead",
        content: "Campaign managers saved hundreds of operational hours, enabling them to focus on creative optimization and campaign scaling rather than administrative tracking."
      },
      {
        title: "Replicable European Playbook",
        content: "The pilot's success established a gold-standard framework now replicated across L'Oréal Europe for rapid, data-backed creator ad scaling."
      }
    ],
    keyDeliverables: [
      "Traackr x TikTok One Spark Ad Integration",
      "Metal Detox Haircare Creator Assets",
      "Unified Paid & Organic Performance Dashboard",
      "Automated Licensing & Compliance Workflow"
    ],
    quote: {
      headline: "Eliminating Friction in Paid Social Boosts",
      text: "The Traackr x TikTok integration completely transformed how we run Spark Ads for L'Oréal Spain. Managing codes and tracking paid vs organic impact in one dashboard gave us the speed and clarity needed for a record-breaking Metal Detox launch.",
      author: "Digital Advocacy & Media Lead",
      role: "L'Oréal Spain"
    }
  },
  {
    id: 'aliexpress',
    brandName: 'AliExpress',
    categories: ['E-Commerce & Fashion', 'Global Growth'],
    title: "AliExpress: Celebrate in Style — 46 Influencers Generate Millions of Impressions",
    stats: ['4.6M Reach', '1.5M+ Interactions', '46 Creators', 'Chilean Campaign'],
    bgStyle: 'bg-gradient-to-br from-red-950 via-slate-900 to-orange-950',
    customGraphicType: 'marriott',
    readTime: '3 minutes read',
    heroImage: 'https://images.unsplash.com/photo-1483985988355-763728e1935b?auto=format&fit=crop&w=1600&q=80',
    heroImageBadge: 'AliExpress • 9th Anniversary & Chilean Campaign',
    industry: 'Global E-Commerce & Retail Marketplace',
    industryDescription: 'Leading international online marketplace driving brand awareness and app conversions across fashion and lifestyle verticals.',
    solutionHighlights: [
      'Targeted recruitment of 46 fashion & lifestyle Instagram influencers',
      'Exclusive coupon code distribution driving direct site conversions',
      '1.5M+ interactions generated across Chilean fashion audiences'
    ],
    kpis: [
      'Drive social media awareness & site conversions for AliExpress\'s 9th Anniversary',
      'Engage Chile-based fashion & lifestyle consumers with local creator partnerships',
      'Track coupon code redemptions and direct traffic to Trendyol & AliExpress',
      'Maximize social interactions and brand impressions across Instagram Stories and Feed'
    ],
    results: [
      { metric: '4.6M', label: 'Prospective Audience Reach', detail: 'Targeted Fashion Consumers' },
      { metric: '1.5M+', label: 'Total Social Interactions', detail: 'Likes, Comments, Shares, Clicks' },
      { metric: '46', label: 'Instagram Creators Sourced', detail: 'Chilean Fashion & Lifestyle' },
      { metric: '9th', label: 'Anniversary Celebration', detail: 'High-Converting Coupon Campaign' }
    ],
    overview: "For its 9th-year anniversary celebration, global e-commerce titan AliExpress launched a high-impact influencer campaign targeting fashion and lifestyle consumers across Chile. Partnering with Upfluence, AliExpress deployed 46 hyper-targeted Instagram creators to spread brand awareness, share exclusive promotional coupon codes, and drive direct conversions to Trendyol and AliExpress storefronts.",
    challenge: "Breaking through in regional international markets like Chile requires tapping into trusted local voices rather than generic global ads. AliExpress needed an agile way to source 46 vetted Chilean fashion influencers, manage coupon code attribution, and execute an integrated Instagram Story and Feed strategy in celebration of their 9th anniversary.",
    campaignGoals: [
      "Discover and activate 46 high-affinity fashion & lifestyle Instagram creators based in Chile.",
      "Promote AliExpress's 9th Anniversary campaign through engaging Instagram Stories and permanent posts.",
      "Distribute exclusive discount coupon codes to track direct user redemptions and site visits.",
      "Reach millions of prospective shoppers while driving over 1.5 million social interactions."
    ],
    part1Title: "Part 1: Targeted Creator Discovery & Regional Campaign Launch",
    part1Sections: [
      {
        title: "Geofenced Creator Sourcing in Chile",
        content: "Upfluence's discovery database pinpointed 46 top-performing Chilean fashion, beauty, and lifestyle creators whose followers closely matched AliExpress's target shopper demographics."
      },
      {
        title: "Exclusive Coupon Code Strategy",
        content: "Each creator received custom promo coupon codes to share with their followers. This incentivized immediate purchasing behavior during the 9th Anniversary sale while establishing clear conversion attribution."
      },
      {
        title: "Multiformat Instagram Story & Feed Execution",
        content: "Creators produced vibrant try-on hauls, outfit-of-the-day reels, and unboxing Instagram Stories, showcasing how to style affordable fashion looks from AliExpress and Trendyol."
      }
    ],
    part1CreatorPreview: {
      creatorHandle: "@chile.fashionstyle",
      creatorAvatar: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=200&q=80",
      isPro: true,
      caption: "Celebrating @aliexpress 9th Anniversary with my favorite fashion finds! ✨ Use my code CHILE10 for extra discounts! #AliExpressPartner",
      videoBgImage: "https://images.unsplash.com/photo-1483985988355-763728e1935b?auto=format&fit=crop&w=600&q=80",
      likes: "86.3K",
      comments: "1,420"
    },
    part2Title: "Part 2: Millions of Impressions & High-Converting Engagement",
    part2Sections: [
      {
        title: "4.6 Million Audience Reach",
        content: "The 46 Instagram creators introduced AliExpress's 9th Anniversary campaign to 4.6 million prospective fashion shoppers across South America."
      },
      {
        title: "Over 1.5 Million Social Interactions",
        content: "Audience enthusiasm surged, generating over 1.5 million total interactions—including story link taps, comments, shares, and coupon code redemptions."
      },
      {
        title: "Scalable Blueprint for International Expansion",
        content: "The campaign proved that localized creator partnerships with direct coupon incentives offer a highly profitable blueprint for global e-commerce platforms entering target regional markets."
      }
    ],
    keyDeliverables: [
      "46 Chilean Instagram Creators Managed",
      "Custom Coupon Code Attribution Engine",
      "Instagram Story & Feed Outfit Hauls",
      "Full Regional Engagement & Reach Analytics"
    ],
    quote: {
      headline: "Empowering Local Voices for Global E-Commerce Growth",
      text: "Activating 46 targeted Chilean creators for our 9th Anniversary introduced AliExpress to 4.6 million prospective shoppers and generated over 1.5 million interactions. Combining authentic fashion storytelling with custom promo codes delivered massive engagement and measurable conversions.",
      author: "Global Growth Team",
      role: "AliExpress"
    }
  },
  {
    id: 'tiffany',
    brandName: 'Tiffany & Co.',
    categories: ['Luxury & Jewelry', 'E-commerce'],
    title: "Tiffany & Co.: Love & Engagement — Showcasing Timeless Elegance",
    stats: ['11.24% Engagement (+84%)', '14.6% Comment Relevancy', '237.6K Views', '25.6% View Rate'],
    bgStyle: 'bg-gradient-to-br from-teal-950 via-slate-900 to-cyan-950',
    customGraphicType: 'marriott',
    readTime: '3 minutes read',
    heroImage: 'https://images.unsplash.com/photo-1605100804763-247f67b3557e?auto=format&fit=crop&w=1600&q=80',
    heroImageBadge: 'Tiffany & Co. • The Landmark NYC & Love & Engagement',
    industry: 'Luxury Fine Jewelry & Bridal',
    industryDescription: 'Premier American luxury jewelry house renowned for iconic diamond engagement rings, wedding bands, and high jewelry.',
    solutionHighlights: [
      'First-person POV storytelling with curated tastemaker couples',
      'In-person content activation at the Tiffany Landmark Love & Engagement floor',
      'Authentic ring shopping journeys driving 11.24% organic engagement'
    ],
    kpis: [
      'Educate consumers on Tiffany\'s extensive range of engagement rings & wedding bands',
      'Drive high engagement rates above Tiffany\'s 6.11% brand benchmark',
      'Generate high comment relevancy around ring inquiry & brand intent',
      'Showcase authentic, relatable couple engagement stories at The Landmark'
    ],
    results: [
      { metric: '11.24%', label: 'Organic Engagement Rate', detail: '+84% Above 6.11% Benchmark' },
      { metric: '14.60%', label: 'Comment Relevancy Rate', detail: 'Surpassed 12.0% Campaign Goal' },
      { metric: '237.6K', label: 'Total Content Video Views', detail: '25.61% Average View Rate' },
      { metric: '+84%', label: 'Benchmark Outperformance', detail: 'High-Intent Engagement' }
    ],
    overview: "Tiffany & Co., the world's iconic luxury jeweler, partnered with Collectively to elevate desirability and educate modern consumers on their legendary range of engagement rings and wedding bands. Through the 'Love & Engagement' campaign, Tiffany invited diverse tastemaker couples into the flagship Tiffany Landmark in NYC to capture intimate, authentic ring selection journeys.",
    challenge: "Connecting with modern couples seeking engagement jewelry requires balancing Tiffany's timeless heritage with genuine, unscripted emotion. Traditional polished campaign ads often miss the personal intimacy of ring shopping; the campaign needed authentic first-person point-of-view storytelling that felt aspirational yet deeply relatable.",
    campaignGoals: [
      "Engage diverse tastemaker couples to capture real-life ring selection moments at The Landmark.",
      "Highlight the craftsmanship, diamond heritage, and variety of Tiffany engagement rings and bands.",
      "Surpass Tiffany's organic engagement benchmark of 6.11% and drive high comment relevancy.",
      "Inspire modern couples by demystifying the luxury bridal shopping experience."
    ],
    part1Title: "Part 1: Tastemaker Couples & The Landmark Activation",
    part1Sections: [
      {
        title: "Diverse Tastemaker Couple Selection",
        content: "Collectively curated a roster of influential tastemaker couples whose authentic relationships and elevated aesthetic aligned naturally with Tiffany & Co.'s brand identity. Each couple brought an organic audience eager for relationship milestones."
      },
      {
        title: "Immersive First-Person POV Storytelling",
        content: "Couples created first-person point-of-view videos capturing their journey to the Tiffany Landmark on 57th Street and Fifth Avenue. Walking through the dedicated Love & Engagement floor, they tried on iconic diamond settings and shared personal stories."
      },
      {
        title: "Unscripted Emotional Authenticity",
        content: "Rather than structured scripts, creators focused on spontaneous expressions—discussing favorite cuts, ring metal pairings, and the emotional resonance of selecting a lifelong piece."
      }
    ],
    part1CreatorPreview: {
      creatorHandle: "@alexandjordan",
      creatorAvatar: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=200&q=80",
      isPro: true,
      caption: "Visiting the @tiffanyandco Landmark to find the ring of our dreams ✨ Tiffany Blue forever! #TiffanyPartner",
      videoBgImage: "https://images.unsplash.com/photo-1605100804763-247f67b3557e?auto=format&fit=crop&w=600&q=80",
      likes: "128.5K",
      comments: "2,190"
    },
    part2Title: "Part 2: Exceptional Engagement & Benchmark Outperformance",
    part2Sections: [
      {
        title: "84% Outperformance Against Brand Benchmark",
        content: "The organic POV couple content generated a staggering 11.24% engagement rate—surpassing Tiffany & Co.'s benchmark of 6.11% by +84% and proving the magnetic draw of authentic bridal storytelling."
      },
      {
        title: "14.60% High-Intent Comment Relevancy",
        content: "Viewers actively inquired about diamond cuts, band customization, and store appointment booking. The campaign achieved a 14.60% comment relevancy rate, exceeding the 12.0% campaign target."
      },
      {
        title: "High View Retention Across 237.6K Views",
        content: "Content gathered 237.6K total video views with an outstanding 25.61% view rate, demonstrating that audiences watched the full ring shopping experience from start to finish."
      }
    ],
    keyDeliverables: [
      "Tastemaker Couple Content Creators",
      "The Landmark NYC On-Site Filming",
      "First-Person POV Ring Shopping Videos",
      "High-Intent Engagement & Relevancy Reporting"
    ],
    quote: {
      headline: "Demystifying Luxury Bridal Jewelry Through Authentic Love Stories",
      text: "By bringing real tastemaker couples into the Tiffany Landmark Love & Engagement floor, we transformed ring selection into an intimate, inspiring digital experience that resonated deeply with modern couples.",
      author: "Global Brand Team",
      role: "Tiffany & Co. x Collectively"
    }
  },
  {
    id: 'dove',
    brandName: 'Dove',
    categories: ['Beauty & Personal Care', 'Purpose Marketing'],
    title: "Dove & Collectively: Embedding Brand in Culture Across 44 Campaigns",
    stats: ['1.9B Impressions', '44.6M Engagements', '1,047 Creators', '#3 Beauty VIT'],
    bgStyle: 'bg-gradient-to-br from-sky-950 via-slate-900 to-blue-950',
    customGraphicType: 'marriott',
    readTime: '4 minutes read',
    heroImage: 'https://images.unsplash.com/photo-1556228720-195a672e8a03?auto=format&fit=crop&w=1600&q=80',
    heroImageBadge: 'Dove • Unilever Beauty & Personal Care',
    industry: 'Personal Care, Skincare & Purpose',
    industryDescription: 'Global Unilever flagship brand creating body-positive, purpose-driven personal care and skincare campaigns.',
    solutionHighlights: [
      'Always-on creator engine across 44 campaigns & 1,047 creators',
      'Edu-tainment content testing, earned gifting & custom mailer kits',
      'Paid organic amplification surpassing US impression benchmarks by 1.5x'
    ],
    kpis: [
      'Cultivate and scale Dove\'s earned creator community across US & Canada',
      'Exceed engagement & link click benchmarks across 5 product categories',
      'Embed brand messaging into real culture and body-positivity conversations',
      'Drive high-converting paid organic social media amplification'
    ],
    results: [
      { metric: '1.9B', label: 'Total Social Impressions', detail: 'Across 44 Campaigns' },
      { metric: '44.6M', label: 'Total Engagements', detail: 'Likes, Comments, Shares' },
      { metric: '1,047', label: 'Creators Engaged', detail: '2.6K+ Original Posts' },
      { metric: '#3', label: 'Beauty Sector VIT Rank', detail: 'Value of Earned Media' }
    ],
    overview: "In partnership with Collectively, Dove executed an ambitious, always-on creator strategy across 44 distinct campaigns spanning Skin Cleansing, Deodorant, Hair Care, Hand Hygiene, and Purpose Messaging. By embedding the brand directly into culture through authentic 'edu-tainment' creator cohorts and agile testing, Dove connected deeply with diverse audiences across the US and Canada.",
    challenge: "Scaling an iconic global brand like Dove across multiple product categories simultaneously requires balancing brand consistency with authentic creator voice. Managing over 1,000 creators, coordinating custom product mailer shipments, hosting cultural events, and measuring multi-tier ROI across 44 unique campaign briefs demanded a high-scale operational framework.",
    campaignGoals: [
      "Engage 1,000+ diverse creators to generate authentic, culturally resonant content across 5 key product lines.",
      "Scale Dove's earned gifting program with custom physical mailers and experiential brand events.",
      "Utilize paid organic amplification to maximize high-performing creator posts across social channels.",
      "Surpass engagement and click-through benchmarks while boosting Dove's overall Beauty VIT ranking."
    ],
    part1Title: "Part 1: Agile Briefing & 'Edu-tainment' Creator Cohorts",
    part1Sections: [
      {
        title: "Custom Creator Cohorts Across 5 Categories",
        content: "Collectively developed specialized creator cohorts tailored for Skin Cleansing, Deodorant, Hair Care, Hand Hygiene, and Purpose Messaging (including Dove's Real Beauty and Self-Esteem initiatives). Each cohort engaged creators matching specific product benefits and demographic nuances."
      },
      {
        title: "Edu-tainment Content Testing",
        content: "To drive both awareness and education, creators produced engaging 'edu-tainment' content—blending entertaining skincare routines and daily vlogs with key product ingredient benefits and dermatologist-backed care tips."
      },
      {
        title: "Experiential Mailers & Cultural Events",
        content: "Dove activated custom-curated mailer kits and live cultural events, encouraging organic unboxing moments and authentic earned media coverage across Instagram Stories and TikTok."
      }
    ],
    part1CreatorPreview: {
      creatorHandle: "@realbeauty.maya",
      creatorAvatar: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=200&q=80",
      isPro: true,
      caption: "Skin positivity starts with nourishing care ✨ Proud to partner with @dove for real beauty! #DovePartner",
      videoBgImage: "https://images.unsplash.com/photo-1556228720-195a672e8a03?auto=format&fit=crop&w=600&q=80",
      likes: "184.2K",
      comments: "3,410"
    },
    part2Title: "Part 2: Paid Organic Amplification & Record-Breaking Impact",
    part2Sections: [
      {
        title: "Paid Organic Social Amplification",
        content: "Top-performing organic creator posts were immediately boosted via whitelisted paid social ads. In the US, paid organic content crushed impression targets by 1.5x, while Instagram Story CTR outperformed the 2023 industry benchmark by 17%."
      },
      {
        title: "Massive Multichannel Scale",
        content: "Over the course of the partnership, 1,047 creators generated 2.6K unique social posts, driving a staggering 1.9 billion impressions, 44.6 million engagements, and 4.3 million direct link clicks."
      },
      {
        title: "#3 Value of Earned Media (VIT) Ranking", content: "The year-long partnership propelled Dove to the #3 VIT (Value of Earned Media) ranking across the entire competitive Beauty sector, solidifying its position as a cultural and digital powerhouse."
      }
    ],
    keyDeliverables: [
      "44 Integrated Product Campaigns",
      "1,047 Creator Relationships Managed",
      "2.6K+ Custom Creator Assets & Posts",
      "Custom Mailers & Experiential Events",
      "Paid Organic Whitelisting & Amplification"
    ],
    quote: {
      headline: "Connecting Dove to Real Culture at Scale",
      text: "Working with Collectively allowed us to scale Dove's core purpose and product launches across 44 campaigns seamlessly. Engaging over 1,000 creators to generate 1.9 billion impressions and 44.6 million engagements proved the power of authentic creator-led storytelling.",
      author: "Global Brand Team",
      role: "Dove / Unilever"
    }
  },
  {
    id: 'afnan',
    brandName: 'Afnan Perfumes',
    categories: ['Fragrance & Beauty', 'E-commerce'],
    title: "$50K in 5 Months: Afnan's Creator-Led Revenue Win",
    stats: ['$50K+ Revenue', '5 Months', '15% Commission', 'US Expansion'],
    bgStyle: 'bg-gradient-to-br from-amber-950 via-slate-900 to-rose-950',
    customGraphicType: 'agency',
    readTime: '3 minutes read',
    heroImage: 'https://images.unsplash.com/photo-1541643600914-78b084683601?auto=format&fit=crop&w=1600&q=80',
    heroImageBadge: 'Afnan Perfumes • Luxury Fragrance & Beauty',
    industry: 'Luxury Fragrances & Perfume',
    industryDescription: 'Global luxury fragrance brand driving rapid DTC revenue and US expansion through affiliate creator partnerships.',
    solutionHighlights: [
      'Performance hybrid model: Flat fee + 15% sales commission',
      'Targeted creator discovery for US luxury beauty market expansion',
      'Automated multi-currency payouts across global creator networks'
    ],
    kpis: [
      'Transition from non-trackable product gifting to performance revenue driving',
      'Expand brand presence and direct-to-consumer sales in the US market',
      'Implement hybrid affiliate commission structure to maximize creator motivation',
      'Streamline international multi-currency influencer compensation'
    ],
    results: [
      { metric: '$50K+', label: 'Generated DTC Revenue', detail: 'Achieved in First 5 Months' },
      { metric: '15%', label: 'Affiliate Sales Commission', detail: '+ Flat Incentive Fee' },
      { metric: '100s', label: 'Direct Product Orders', detail: 'Tracked via Creator Links' },
      { metric: 'Global', label: 'Multi-Currency Payouts', detail: 'Automated Influencer Payments' }
    ],
    overview: "Afnan Perfumes is a premier international luxury fragrance house renowned for crafting elegant, captivating scents. To scale modern DTC sales and establish a strong foothold in the competitive US beauty market, Afnan evolved its influencer marketing strategy from simple product gifting to a high-impact, performance-driven creator affiliate engine.",
    challenge: "Relying on traditional product gifting provided minimal tracking visibility into actual sales ROI. As Afnan sought to expand into the US market and manage creators across different countries, manual contract management and multi-currency international payments created administrative complexity and slowed creator scaling.",
    campaignGoals: [
      "Shift influencer strategy from passive gifting to measurable, performance-linked revenue generation.",
      "Expand brand reach and drive high-converting traffic among US beauty and fragrance enthusiasts.",
      "Implement a win-win hybrid affiliate compensation model (flat fee + 15% revenue commission).",
      "Automate multi-currency creator payouts and end-to-end sales attribution tracking."
    ],
    part1Title: "Part 1: Performance-Driven Partnerships & US Market Expansion",
    part1Sections: [
      {
        title: "From Gifting to Hybrid Performance Compensation",
        content: "Afnan revolutionized its creator relationships by replacing passive product gifting with an attractive hybrid structure: a base flat fee paired with a 15% commission on every order. This aligned creator incentives directly with sales performance."
      },
      {
        title: "Targeted Discovery in US Luxury Beauty",
        content: "Using intelligent creator discovery filters, Afnan identified high-converting fragrance review creators, beauty vloggers, and lifestyle influencers in the US market with highly engaged, purchase-ready audiences."
      },
      {
        title: "Automated Multi-Currency Payout Engine",
        content: "Operating across global markets required seamless international transactions. Multi-currency payment automation allowed Afnan to pay global creators in their preferred currencies with a single click, eliminating bank fee friction and administrative delay."
      }
    ],
    part1CreatorPreview: {
      creatorHandle: "@scent.diaries",
      creatorAvatar: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=200&q=80",
      isPro: true,
      caption: "My new signature scent from @afnanperfumes ✨ Obsessed with these notes! Tap link in bio for 15% off!",
      videoBgImage: "https://images.unsplash.com/photo-1541643600914-78b084683601?auto=format&fit=crop&w=600&q=80",
      likes: "54.2K",
      comments: "1,120"
    },
    part2Title: "Part 2: Rapid Revenue Growth & Sustainable Affiliate Scaling",
    part2Sections: [
      {
        title: "Over $50K Sales Generated in 5 Months",
        content: "In the first five months of launching the performance affiliate program, Afnan generated over $50,000 in direct website revenue and hundreds of verified orders directly attributable to creator affiliate links."
      },
      {
        title: "Sustained High Creator Engagement",
        content: "The 15% revenue share model incentivized creators to continuously feature Afnan fragrances in organic reviews, unboxings, and scent recommendation roundups rather than one-off posts."
      },
      {
        title: "Scalable DTC Growth Architecture",
        content: "By combining automated creator discovery, performance tracking, and instant global payouts, Afnan built a repeatable revenue engine that continues to expand their global market share."
      }
    ],
    keyDeliverables: [
      "Hybrid Commission (Flat Fee + 15% Share)",
      "Targeted US Creator Discovery Engine",
      "Automated Multi-Currency Global Payouts",
      "Real-Time Sales Attribution Dashboard"
    ],
    quote: {
      headline: "Scaling DTC Fragrance Revenue Through Authentic Creator Partnerships",
      text: "Shifting to a performance-driven creator affiliate strategy transformed our DTC growth trajectory. In just 5 months, we generated over $50,000 in sales and successfully established Afnan in the US fragrance market while automating creator payouts globally.",
      author: "E-Commerce Growth Team",
      role: "Afnan Perfumes"
    }
  },
  {
    id: 'purpleorange',
    brandName: 'Purple Orange Digital',
    categories: ['PR & Influencer Agency', 'Outdoor & Lifestyle'],
    title: "Purple Orange Digital Turns Creator Payments Into a Scalable Engine",
    stats: ['10x Faster Payouts', '100% Tax Compliant', 'Client E-Wallets', 'Zero Admin Friction'],
    bgStyle: 'bg-gradient-to-br from-purple-950 via-slate-900 to-orange-950',
    customGraphicType: 'agency',
    readTime: '3 minutes read',
    heroImage: 'https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?auto=format&fit=crop&w=1600&q=80',
    heroImageBadge: 'Purple Orange Digital Communication • Outdoor & Lifestyle PR Agency',
    industry: 'PR & Influencer Marketing Agency',
    industryDescription: 'Premier active lifestyle, outdoor adventure, and wellness PR agency managing multi-brand creator campaigns.',
    solutionHighlights: [
      'Centralized creator payout engine with dedicated client e-wallets',
      'Automated tax compliance (KYC, W-9, and 1099 generation)',
      '10x faster payout processing across hundreds of active campaigns'
    ],
    kpis: [
      'Eliminate manual contract, invoice, and payment tracking across email threads',
      'Provide transparent client e-wallets with zero budget ambiguity',
      'Ensure 100% tax and legal compliance with automated KYC and W-9 collection',
      'Build strong long-term creator relationships through guaranteed frictionless payouts'
    ],
    results: [
      { metric: '10x', label: 'Faster Payment Processing', detail: 'From Days to One Click' },
      { metric: '100%', label: 'Tax & KYC Compliant', detail: 'Automated W-9 & 1099' },
      { metric: '0', label: 'Payment Delay Friction', detail: 'Guaranteed Creator Trust' },
      { metric: 'Multi-Brand', label: 'Client E-Wallets', detail: 'Clear Budget Isolation' }
    ],
    overview: "Purple Orange Digital Communication is a leading PR, affiliate, and influencer marketing agency specializing in active outdoor, lifestyle, and wellness brands. Managing creator relationships for top-tier outdoor gear and active lifestyle clients requires executing hundreds of contracts, content approvals, and payouts simultaneously. To scale their influencer operations without bloating administrative overhead, Purple Orange deployed a centralized creator payout and wallet infrastructure.",
    challenge: "Before centralizing payouts, the agency faced severe administrative friction. Managing hundreds of contracts, tax documentation (W-9s, 1099s), wire transfers, invoices, and payment records across fragmented tools and lengthy email threads created massive operational overhead. Unclear client budget attribution and delayed payout turnarounds risked damaging relationships with premier creators.",
    campaignGoals: [
      "Centralize all creator payment records, invoices, and contracts into a single unified operating platform.",
      "Eliminate manual accounting overhead and streamline client budget allocations via dedicated client e-wallets.",
      "Automate tax compliance including W-9 collection, KYC verification, and year-end 1099 reporting.",
      "Accelerate payout turnaround times by 10x to foster long-term creator trust and loyalty."
    ],
    part1Title: "Part 1: Dedicated Client E-Wallets & Automated Tax Compliance",
    part1Sections: [
      {
        title: "Client Budget Isolation via E-Wallets",
        content: "Purple Orange established dedicated e-wallets for each of their client brands. This provided instant clarity into available funds, pending creator deliverables, and historical campaign spend—eliminating budget confusion and financial cross-contamination."
      },
      {
        title: "Automated KYC and W-9 Tax Collection",
        content: "Tax compliance was fully automated at creator onboarding. Before any payout was triggered, creators completed quick KYC identity checks and submitted digital W-9 forms. The platform automatically prepares year-end 1099 filings, saving hundreds of accounting hours."
      },
      {
        title: "Single-Click Global Creator Payouts",
        content: "Account managers can now approve deliverables and issue global payouts with a single click. Creators choose their preferred payout method—direct deposit, PayPal, or international wire—and receive instant payment confirmation."
      }
    ],
    part1CreatorPreview: {
      creatorHandle: "@mountain.explorer",
      creatorAvatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=200&q=80",
      isPro: true,
      caption: "Testing the latest outdoor technical gear in the Cascades 🏔️ Thanks to @purpleorange.pr! #sponsored",
      videoBgImage: "https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?auto=format&fit=crop&w=600&q=80",
      likes: "42.1K",
      comments: "890"
    },
    part2Title: "Part 2: Operational Scalability & Strengthened Creator Loyalty",
    part2Sections: [
      {
        title: "10x Acceleration in Payout Processing",
        content: "Transitioning from manual wire transfers and spreadsheet tracking to an automated payout engine reduced processing time by 10x, enabling campaign managers to focus on strategy and creative direction rather than administrative paperwork."
      },
      {
        title: "Stronger Creator Retention and Trust",
        content: "Frictionless, on-time payments positioned Purple Orange as a preferred agency partner among elite outdoor and lifestyle creators, resulting in higher campaign participation rates and repeat collaboration opportunities."
      },
      {
        title: "End-to-End Campaign Visibility",
        content: "With payments, contracts, deliverables, and ROI analytics unified in one system, Purple Orange provides clients with real-time financial reporting and transparent campaign attribution."
      }
    ],
    keyDeliverables: [
      "Dedicated Client E-Wallet Infrastructure",
      "Automated W-9 & 1099 Tax Compliance",
      "1-Click Global Creator Payouts",
      "Unified Contract & Invoice Records"
    ],
    quote: {
      headline: "Transforming Creator Payouts Into a Competitive Advantage",
      text: "Automating creator payments and tax compliance eliminated our biggest operational bottleneck. Our campaign managers save dozens of hours every month, our clients have total visibility into their campaign budgets through dedicated e-wallets, and our creators love getting paid seamlessly on time.",
      author: "Agency Leadership",
      role: "Purple Orange Digital Communication"
    }
  },
  {
    id: 'mercerlabs',
    brandName: 'Mercer Labs',
    categories: ['Entertainment & Art', 'E-commerce'],
    title: "Mercer Labs Drives 6x ROI with Creator Affiliate Program",
    stats: ['6x ROI', '200+ Creators', '15% Response Rate', '10,000+ Reached'],
    bgStyle: 'bg-gradient-to-br from-slate-900 via-indigo-950 to-violet-950',
    customGraphicType: 'agency',
    readTime: '3 minutes read',
    heroImage: 'https://images.unsplash.com/photo-1518709268805-4e9042af9f23?auto=format&fit=crop&w=1600&q=80',
    heroImageBadge: 'Mercer Labs NYC • Museum of Art & Technology',
    industry: 'Museum & Experiential Art',
    industryDescription: 'Immersive museum blending technology and physical art installations in Downtown Manhattan.',
    solutionHighlights: [
      'Cross-referenced customer database to identify influential visitors',
      'Automated geofenced outreach to 10,000+ NYC creators',
      '200+ creators onboarded automatically with unique promo codes'
    ],
    kpis: [
      'Scale direct museum ticket purchases through creator affiliate links',
      'Achieve high response rates across local NYC creator outreach',
      'Automate creator onboarding and unique promo code distribution',
      'Maximize viral UGC video impressions on TikTok & Instagram Reels'
    ],
    results: [
      { metric: '6x', label: 'Return on Investment (ROI)', detail: 'Direct Ticket Sales' },
      { metric: '200+', label: 'Active Creator Affiliates', detail: 'Onboarded Automatically' },
      { metric: '15%', label: 'Outreach Response Rate', detail: '3x Industry Average' },
      { metric: '10,000+', label: 'NYC Creators Targeted', detail: 'Geofenced Campaign' }
    ],
    overview: "Mercer Labs is New York City's premier Museum of Art and Technology—an immersive 36,000-square-foot institution redefining the museum experience through fifteen state-of-the-art experimental exhibition spaces. To accelerate ticket sales and engage culturally connected New Yorkers, Mercer Labs launched an automated creator affiliate program to turn local micro-influencers into passionate museum advocates.",
    challenge: "Managing a large-scale creator campaign manually created massive operational bottlenecks. Generating custom promo codes, tracking individual ticket attribution, contacting thousands of targeted NYC creators, and onboarding affiliates one-by-one was unscalable for the internal marketing team without dedicated automation tools.",
    campaignGoals: [
      "Cross-reference existing customer lists to identify influential visitors and potential brand advocates.",
      "Launch targeted geofenced outreach to over 10,000 creators across the Greater New York City area.",
      "Automate creator onboarding and bulk issue unique affiliate discount codes to track direct ticket revenue.",
      "Drive a measurable, high-return digital campaign delivering a 6x ROI on creator spend."
    ],
    part1Title: "Part 1: Scalable Creator Recruitment & Automated Onboarding",
    part1Sections: [
      {
        title: "Data-Driven Customer & Creator Discovery",
        content: "Mercer Labs began by cross-referencing their visitor database with the creator database. This allowed them to instantly pinpoint existing museum fans who possessed established social followings and authentic passion for art, technology, and NYC culture."
      },
      {
        title: "Geofenced High-Volume Outreach",
        content: "Expanding beyond existing customers, the team launched automated outreach campaigns targeting over 10,000 NYC-based creators. Personalized communication combined with automated follow-ups yielded an extraordinary 15% response rate—triple standard industry benchmarks."
      },
      {
        title: "Seamless Self-Serve Onboarding",
        content: "Over 200 high-fit creators seamlessly enrolled through automated workflows. Each creator was immediately assigned a unique affiliate tracking code and custom booking link without requiring manual admin intervention."
      }
    ],
    part1CreatorPreview: {
      creatorHandle: "@nyc.art.vibes",
      creatorAvatar: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=200&q=80",
      isPro: true,
      caption: "Stepping into the future at @mercer.labs 🪐✨ Use code NYC15 for 15% off tickets!",
      videoBgImage: "https://images.unsplash.com/photo-1509198397868-475647b2a1e5?auto=format&fit=crop&w=600&q=80",
      likes: "98.4K",
      comments: "1,850"
    },
    part2Title: "Part 2: Viral UGC & Automated Affiliate Attribution",
    part2Sections: [
      {
        title: "Immersive Video Content Creation",
        content: "Creators produced visually stunning TikToks and Instagram Reels capturing Mercer Labs' sound-reactive light rooms and 3D projection mapping, providing followers with a compelling glimpse of the physical experience."
      },
      {
        title: "Seamless Ticket Conversion Tracking",
        content: "Every post featured the creator's unique affiliate promo code. Audience members received an exclusive ticket discount, while Mercer Labs captured real-time purchase attribution in their central analytics dashboard."
      },
      {
        title: "6x ROI and Sustainable Growth",
        content: "The creator affiliate engine generated a 6x return on investment from ticket sales. By transforming satisfied visitors and local influencers into active sales partners, Mercer Labs established a self-sustaining viral growth channel."
      }
    ],
    keyDeliverables: [
      "200+ Active NYC Creator Affiliates",
      "Automated Unique Promo Code Generation",
      "Real-time Ticket Attribution Dashboard",
      "Viral Immersive Art TikTok & Reel UGC Assets"
    ],
    quote: {
      headline: "Unlocking Exponential Ticket Sales Growth",
      text: "Partnering with creators through a streamlined affiliate program allowed us to turn authentic enthusiasm for Mercer Labs into measurable ticket revenue. Automating creator recruitment and promo code distribution gave us 6x ROI with minimal operational overhead.",
      author: "Growth Marketing Team",
      role: "Mercer Labs NYC"
    }
  }
];

const categories = ['All', 'E-commerce', 'Beauty & Personal Care', 'Fintech & B2B', 'Luxury & Automotive', 'Luxury & Jewelry', 'Purpose Marketing', 'Hospitality', 'Entertainment & Art', 'PR & Agency'];

export const CaseStudiesPage: React.FC<CaseStudiesPageProps> = ({
  onNavigateHome,
  onNavigateSearch,
  initialStudyId = null
}) => {
  const [selectedCategory, setSelectedCategory] = useState<string>('All');
  const [activeStudyId, setActiveStudyId] = useState<string | null>(initialStudyId);
  const [currentPage, setCurrentPage] = useState<number>(1);
  const [isUnlocked, setIsUnlocked] = useState<boolean>(() => {
    try {
      return sessionStorage.getItem('mobb_casestudies_unlocked') === 'true';
    } catch {
      return false;
    }
  });
  const [isPasswordModalOpen, setIsPasswordModalOpen] = useState<boolean>(false);
  const [pendingPage, setPendingPage] = useState<number | null>(null);
  const [passwordInput, setPasswordInput] = useState<string>('');
  const [passwordError, setPasswordError] = useState<string | null>(null);
  const [showPassword, setShowPassword] = useState<boolean>(false);
  const itemsPerPage = 8;
  const gridRef = useRef<HTMLDivElement>(null);
  const passwordInputRef = useRef<HTMLInputElement>(null);

  // Scroll to top when active study changes
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, [activeStudyId]);

  const activeStudy = caseStudiesData.find(s => s.id === activeStudyId) || null;

  const filteredStudies = caseStudiesData.filter((study) => {
    if (selectedCategory === 'All') return true;
    return study.categories.some(c => c.toLowerCase() === selectedCategory.toLowerCase());
  });

  const totalPages = Math.ceil(filteredStudies.length / itemsPerPage) || 1;
  const paginatedStudies = filteredStudies.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage
  );

  const handleCategorySelect = (category: string) => {
    setSelectedCategory(category);
    setCurrentPage(1);
  };

  const handlePageChange = (newPage: number) => {
    if (newPage >= 1 && newPage <= totalPages) {
      if (newPage > 1 && !isUnlocked) {
        setPendingPage(newPage);
        setPasswordInput('');
        setPasswordError(null);
        setIsPasswordModalOpen(true);
        setTimeout(() => {
          passwordInputRef.current?.focus();
        }, 100);
        return;
      }
      setCurrentPage(newPage);
      if (gridRef.current) {
        gridRef.current.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
    }
  };

  const handlePasswordSubmit = (e?: React.FormEvent) => {
    if (e) e.preventDefault();
    if (passwordInput.trim().toLowerCase() === 'mobb') {
      setIsUnlocked(true);
      try {
        sessionStorage.setItem('mobb_casestudies_unlocked', 'true');
      } catch {
        // ignore
      }
      setIsPasswordModalOpen(false);
      setPasswordError(null);
      const targetPage = pendingPage || 2;
      setCurrentPage(targetPage);
      setPendingPage(null);
      if (gridRef.current) {
        gridRef.current.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
    } else {
      setPasswordError('Incorrect password. Please try again.');
    }
  };

  // RENDER DEDICATED FULL STANDALONE PAGE FOR A SELECTED CASE STUDY
  if (activeStudy) {
    const suggestedStudies = caseStudiesData.filter(s => s.id !== activeStudy.id).slice(0, 3);

    return (
      <CaseStudyDetailView
        data={activeStudy}
        onBack={() => setActiveStudyId(null)}
        onNavigateSearch={onNavigateSearch}
        suggestedStudies={suggestedStudies}
        onSelectStudy={(id) => setActiveStudyId(id)}
      />
    );
  }

  // RENDER CASE STUDIES DIRECTORY / GRID PAGE
  return (
    <div className="w-full bg-white text-gray-900 font-sans pb-24">
      
      {/* HEADER HERO SECTION */}
      <section className="pt-10 sm:pt-16 pb-8 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto text-left">
        {/* Title adhering strictly to typography requirements */}
        <h1 style={mainTitleStyle} className="tracking-tight">
          Real brands. Real results.
        </h1>

        {/* Subtitle */}
        <p className="text-base sm:text-lg text-gray-600 max-w-2xl mt-4 leading-relaxed font-normal">
          See how brands use Mobb to find creators, run and manage campaigns, and get content that performs.
        </p>

        {/* FILTER PILLS BAR */}
        <div className="mt-8 flex flex-wrap items-center gap-2 sm:gap-3">
          {categories.map((category) => {
            const isActive = selectedCategory === category;
            return (
              <button
                key={category}
                onClick={() => handleCategorySelect(category)}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-all cursor-pointer ${
                  isActive
                    ? 'bg-[#22252a] text-white font-bold shadow-sm'
                    : 'bg-transparent text-gray-700 hover:bg-gray-100'
                }`}
              >
                {category}
              </button>
            );
          })}
        </div>
      </section>

      {/* CASE STUDIES GRID */}
      <section ref={gridRef} className="mt-8 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {paginatedStudies.map((study) => {
            const heroMetric = study.results?.[0]?.metric || study.stats?.[0]?.split(' ')?.[0] || '10M+';
            const heroLabel = study.results?.[0]?.label || 'Campaign Reach';
            const mainCategory = study.categories?.[0] || 'E-commerce';

            return (
              <div
                key={study.id}
                onClick={() => setActiveStudyId(study.id)}
                className="group bg-white border border-slate-200/80 shadow-sm hover:shadow-xl hover:-translate-y-1.5 transition-all rounded-3xl p-6 sm:p-8 min-h-[420px] flex flex-col justify-between cursor-pointer overflow-hidden"
              >
                <div>
                  {/* Top Row */}
                  <div className="flex items-center justify-between gap-3 mb-4">
                    <span className="text-base font-bold text-slate-900 tracking-tight">
                      {study.brandName}
                    </span>
                    <span className="text-xs font-medium text-slate-500 bg-slate-100 px-3 py-1 rounded-full whitespace-nowrap">
                      {mainCategory}
                    </span>
                  </div>

                  {/* Card Front Image Picture */}
                  {(study.cardImage || study.heroImage) && (
                    <div className="w-full h-44 rounded-2xl overflow-hidden mb-5 bg-slate-100 relative shadow-xs">
                      <img
                        src={study.cardImage || study.heroImage}
                        alt={`${study.brandName} Case Study`}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                        referrerPolicy="no-referrer"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent" />
                    </div>
                  )}

                  {/* Center (Hero Metric) */}
                  <div className="py-1">
                    <div className="text-4xl sm:text-5xl font-extrabold text-slate-950 tracking-tight">
                      {heroMetric}
                    </div>
                    <div className="text-sm font-medium text-slate-500 mt-1 line-clamp-1">
                      {heroLabel}
                    </div>
                    <h3 className="text-lg sm:text-xl font-bold text-slate-900 line-clamp-2 mt-3 leading-snug">
                      {study.title}
                    </h3>
                  </div>
                </div>

                {/* Bottom Row */}
                <div className="pt-4 border-t border-slate-100 mt-4">
                  <span className="text-sm font-semibold text-slate-900 group-hover:text-rose-600 inline-flex items-center gap-2 transition-colors">
                    Read case study <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                  </span>
                </div>
              </div>
            );
          })}
        </div>

        {/* PAGINATION COMPONENT */}
        {totalPages > 1 && (
          <div className="mt-12 flex items-center justify-center gap-2 sm:gap-3">
            <button
              onClick={() => handlePageChange(currentPage - 1)}
              disabled={currentPage === 1}
              className="px-4 py-2 rounded-xl text-sm font-semibold text-slate-700 bg-white border border-slate-200 hover:bg-slate-50 disabled:opacity-40 disabled:cursor-not-allowed transition-all inline-flex items-center gap-1 cursor-pointer"
            >
              <ChevronLeft className="w-4 h-4" /> Previous
            </button>

            <div className="flex items-center gap-1.5">
              {Array.from({ length: totalPages }, (_, i) => i + 1).map((pageNum) => {
                const isActive = pageNum === currentPage;
                const isLockedPage = pageNum > 1 && !isUnlocked;

                return (
                  <button
                    key={pageNum}
                    onClick={() => handlePageChange(pageNum)}
                    className={`min-w-[40px] h-10 px-3 rounded-xl text-sm font-semibold transition-all flex items-center justify-center gap-1 cursor-pointer ${
                      isActive
                        ? 'bg-slate-950 text-white shadow-sm'
                        : 'text-slate-600 hover:bg-slate-100 bg-white border border-slate-200/60'
                    }`}
                  >
                    <span>{pageNum}</span>
                    {isLockedPage && (
                      <Lock className="w-3 h-3 text-slate-400" />
                    )}
                  </button>
                );
              })}
            </div>

            <button
              onClick={() => handlePageChange(currentPage + 1)}
              disabled={currentPage === totalPages}
              className="px-4 py-2 rounded-xl text-sm font-semibold text-slate-700 bg-white border border-slate-200 hover:bg-slate-50 disabled:opacity-40 disabled:cursor-not-allowed transition-all inline-flex items-center gap-1 cursor-pointer"
            >
              Next <ChevronRight className="w-4 h-4" />
            </button>
          </div>
        )}
      </section>

      {/* PASSWORD PROTECTION MODAL FOR PAGE 2+ */}
      {isPasswordModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/75 backdrop-blur-sm animate-in fade-in duration-200">
          <div className="bg-[#18181b] border border-neutral-800 rounded-3xl p-6 sm:p-8 max-w-md w-full shadow-2xl relative text-white animate-in zoom-in-95 duration-200">
            {/* Close Button */}
            <button
              onClick={() => {
                setIsPasswordModalOpen(false);
                setPasswordError(null);
                setPasswordInput('');
                setPendingPage(null);
              }}
              className="absolute right-5 top-5 text-neutral-400 hover:text-white p-1 rounded-lg hover:bg-neutral-800 transition-colors cursor-pointer"
              aria-label="Close modal"
            >
              <X className="w-5 h-5" />
            </button>

            {/* Lock Icon */}
            <div className="w-14 h-14 rounded-2xl bg-[#FF385C]/10 border border-[#FF385C]/30 flex items-center justify-center mx-auto mb-4 text-accent-pink shadow-[0_0_30px_rgba(255,56,92,0.15)]">
              <Lock className="w-7 h-7" />
            </div>

            {/* Content */}
            <div className="text-center">
              <h3 className="text-xl font-bold text-white tracking-tight">
                Protected Case Studies
              </h3>
              <p className="text-sm text-neutral-400 mt-2 leading-relaxed">
                Access to Page {pendingPage || 2} and extended brand case studies is password protected. Enter the password to continue.
              </p>
            </div>

            {/* Form */}
            <form onSubmit={handlePasswordSubmit} className="mt-6 space-y-4">
              <div>
                <div className="relative">
                  <input
                    ref={passwordInputRef}
                    type={showPassword ? 'text' : 'password'}
                    value={passwordInput}
                    onChange={(e) => {
                      setPasswordInput(e.target.value);
                      if (passwordError) setPasswordError(null);
                    }}
                    placeholder="Enter password..."
                    autoComplete="off"
                    className={`w-full bg-neutral-900/90 border ${
                      passwordError
                        ? 'border-rose-500 ring-1 ring-rose-500'
                        : 'border-neutral-700 focus:border-[#FF385C] focus:ring-1 focus:ring-[#FF385C]'
                    } rounded-xl px-4 py-3.5 pl-11 pr-11 text-white placeholder-neutral-500 text-sm outline-none transition-all`}
                  />
                  <Lock className="w-4 h-4 text-neutral-400 absolute left-4 top-1/2 -translate-y-1/2" />
                  <button
                    type="button"
                    onClick={() => setShowPassword(!showPassword)}
                    className="absolute right-4 top-1/2 -translate-y-1/2 text-neutral-400 hover:text-white transition-colors cursor-pointer"
                    aria-label={showPassword ? 'Hide password' : 'Show password'}
                  >
                    {showPassword ? <EyeOff className="w-4 h-4" /> : <Eye className="w-4 h-4" />}
                  </button>
                </div>

                {passwordError && (
                  <div className="text-xs text-rose-400 text-left flex items-center gap-1.5 mt-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-rose-500 inline-block" />
                    {passwordError}
                  </div>
                )}
              </div>

              <div className="pt-2 flex items-center gap-3">
                <button
                  type="button"
                  onClick={() => {
                    setIsPasswordModalOpen(false);
                    setPasswordError(null);
                    setPasswordInput('');
                    setPendingPage(null);
                  }}
                  className="flex-1 px-4 py-3 rounded-xl text-sm font-semibold text-neutral-400 bg-neutral-800/80 hover:bg-neutral-800 hover:text-white transition-all cursor-pointer"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="flex-1 px-4 py-3 rounded-xl text-sm font-semibold text-white bg-accent-pink hover:bg-[#c44370] shadow-lg shadow-pink-500/20 transition-all cursor-pointer flex items-center justify-center gap-2"
                >
                  Unlock Access <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            </form>
          </div>
        </div>
      )}

    </div>
  );
};
