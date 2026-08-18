import React, { useState, useMemo } from 'react';
import { motion } from 'motion/react';
import { Creator, Platform } from '../types';
import { CREATORS, FILTER_TAGS } from '../data/creators';
import { PlatformDropdown } from './PlatformDropdown';
import { CreatorCard } from './CreatorCard';
import {
  Search,
  Star,
  TrendingUp,
  DollarSign,
  Camera,
  ShoppingBag,
  Smile,
  Heart,
  RotateCcw,
} from 'lucide-react';

interface HeroProps {
  onSelectCreator: (creator: Creator) => void;
}

const headlineContainerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.1,
    },
  },
};

const wordFadeSlideVariants = {
  hidden: {
    opacity: 0,
    y: 12,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
      ease: [0.25, 0.1, 0.25, 1],
    },
  },
};

export const Hero: React.FC<HeroProps> = ({ onSelectCreator }) => {
  const [selectedPlatform, setSelectedPlatform] = useState<Platform>('Instagram');
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedFilterId, setSelectedFilterId] = useState<string | null>(null);

  // Filter creators based on platform, search query, and filter tag
  const filteredCreators = useMemo(() => {
    return CREATORS.filter((creator) => {
      // Platform check if a platform option is explicitly selected or if filter is set
      const matchesPlatform =
        selectedPlatform === 'User Generated Content'
          ? true // UGC creators can be found across
          : creator.platform === selectedPlatform || creator.tags.includes(selectedPlatform);

      // Search query check
      const query = searchQuery.toLowerCase().trim();
      const matchesQuery =
        !query ||
        creator.name.toLowerCase().includes(query) ||
        creator.handle.toLowerCase().includes(query) ||
        creator.tags.some((tag) => tag.toLowerCase().includes(query)) ||
        creator.bio.toLowerCase().includes(query);

      // Filter tag check
      let matchesFilterTag = true;
      if (selectedFilterId) {
        const filter = FILTER_TAGS.find((f) => f.id === selectedFilterId);
        if (filter) {
          if (filter.maxPrice) {
            matchesFilterTag = creator.startingPrice <= filter.maxPrice;
          } else if (filter.tagValue) {
            matchesFilterTag =
              creator.platform === filter.tagValue ||
              creator.tags.some((t) => t.toLowerCase() === filter.tagValue?.toLowerCase());
          }
        }
      }

      return matchesPlatform && matchesQuery && matchesFilterTag;
    });
  }, [selectedPlatform, searchQuery, selectedFilterId]);

  const handleFilterClick = (filterId: string) => {
    setSelectedFilterId((prev) => (prev === filterId ? null : filterId));
  };

  const getFilterIcon = (iconName: string) => {
    switch (iconName) {
      case 'Star':
        return <Star className="w-3.5 h-3.5 text-gray-400 group-hover:text-amber-400" />;
      case 'TrendingUp':
        return <TrendingUp className="w-3.5 h-3.5 text-gray-400 group-hover:text-emerald-400" />;
      case 'DollarSign':
        return <DollarSign className="w-3.5 h-3.5 text-gray-400 group-hover:text-green-400" />;
      case 'Camera':
        return <Camera className="w-3.5 h-3.5 text-gray-400 group-hover:text-pink-400" />;
      case 'ShoppingBag':
        return <ShoppingBag className="w-3.5 h-3.5 text-gray-400 group-hover:text-purple-400" />;
      case 'Smile':
        return <Smile className="w-3.5 h-3.5 text-gray-400 group-hover:text-yellow-400" />;
      case 'Heart':
        return <Heart className="w-3.5 h-3.5 text-gray-400 group-hover:text-rose-400" />;
      default:
        return null;
    }
  };

  return (
    <section className="w-full px-2 sm:px-4 md:px-6 lg:px-8 pb-12 pt-2">
      {/* Dark Charcoal Hero Box */}
      <div className="bg-[#2f2f31] rounded-[28px] sm:rounded-[36px] px-4 sm:px-8 lg:px-12 pt-6 sm:pt-9 md:pt-11 pb-4 sm:pb-5 lg:pb-6 text-center text-white relative shadow-2xl overflow-visible border border-gray-800">
        
        {/* Animated Headline - One line */}
        <motion.h1
          variants={headlineContainerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-20px' }}
          className="font-h1 text-center max-w-6xl mx-auto text-white whitespace-nowrap"
        >
          <span className="inline-block text-white">
            <motion.span variants={wordFadeSlideVariants} className="inline-block mr-[0.25em]">
              Hire
            </motion.span>
            <motion.span variants={wordFadeSlideVariants} className="inline-block mr-[0.25em]">
              Top
            </motion.span>
            <motion.span variants={wordFadeSlideVariants} className="inline-block mr-[0.4em] text-accent-pink">
              Creators.
            </motion.span>
            <motion.span variants={wordFadeSlideVariants} className="inline-block mr-[0.25em]">
              Get
            </motion.span>
            <motion.span variants={wordFadeSlideVariants} className="inline-block mr-[0.25em]">
              Content
            </motion.span>
            <motion.span
              variants={wordFadeSlideVariants}
              className="inline-block font-serif-italic text-accent-pink"
            >
              Fast.
            </motion.span>
          </span>
        </motion.h1>

        {/* Subtitle */}
        <p className="hero-subtitle max-w-2xl mx-auto mt-2 sm:mt-2.5">
          Find, book, and pay vetted UGC creators in minutes.
        </p>

        {/* White Pill Search Bar Container */}
        <div className="mt-8 sm:mt-10 w-full max-w-[1080px] mx-auto relative z-30">
          <form
            onSubmit={(e) => e.preventDefault()}
            className="bg-white rounded-full p-1.5 sm:p-2 flex items-center shadow-2xl border border-gray-100 text-gray-900 transition-all focus-within:ring-2 focus-within:ring-pink-500/30"
          >
            {/* Left Platform Dropdown Selector */}
            <PlatformDropdown
              selectedPlatform={selectedPlatform}
              onSelectPlatform={(platform) => setSelectedPlatform(platform)}
              isOpen={isDropdownOpen}
              onToggle={() => setIsDropdownOpen(!isDropdownOpen)}
            />

            {/* Vertical Divider Line */}
            <div className="h-5 w-px bg-gray-200 mx-1 sm:mx-2 shrink-0" />

            {/* Text Input Field */}
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="technology"
              className="w-full bg-transparent border-none text-sm text-gray-900 placeholder-gray-400 focus:outline-none px-2 font-medium"
            />

            {/* Pink Search Action Button */}
            <button
              type="submit"
              className="bg-[#f43f5e] hover:bg-[#e11d48] text-white font-semibold text-sm px-5 sm:px-6 py-2 rounded-full flex items-center gap-2 transition-all cursor-pointer shadow-md hover:shadow-lg active:scale-95 shrink-0 ml-1"
            >
              <Search className="w-4 h-4" />
              <span>Search</span>
            </button>
          </form>
        </div>

        {/* Filter Pills Row - Exact same width as search bar, single line on desktop */}
        <div className="flex flex-wrap lg:flex-nowrap justify-center lg:justify-between items-center gap-1.5 sm:gap-2 mt-4 sm:mt-5 w-full max-w-[1080px] mx-auto text-xs font-medium">
          {FILTER_TAGS.map((filter) => {
            const isActive = selectedFilterId === filter.id;
            const isMobileVisible = filter.id === 'most-viewed' || filter.id === 'ugc';
            return (
              <button
                key={filter.id}
                type="button"
                onClick={() => handleFilterClick(filter.id)}
                className={`group border rounded-full px-3 py-1.5 items-center gap-1.5 transition-all cursor-pointer select-none whitespace-nowrap shrink-0 ${
                  isMobileVisible ? 'flex' : 'hidden lg:flex'
                } ${
                  isActive
                    ? 'bg-pink-500/30 text-white border-pink-400 shadow-sm'
                    : 'bg-white/5 text-gray-200 hover:text-white border-white/20 hover:border-white/40'
                }`}
              >
                {getFilterIcon(filter.iconName)}
                <span>{filter.label}</span>
              </button>
            );
          })}

          {(selectedFilterId || searchQuery) && (
            <button
              onClick={() => {
                setSelectedFilterId(null);
                setSearchQuery('');
              }}
              className="text-pink-400 hover:text-pink-300 text-xs font-semibold underline flex items-center gap-1 ml-1 cursor-pointer whitespace-nowrap shrink-0"
            >
              <RotateCcw className="w-3 h-3" /> Reset
            </button>
          )}
        </div>

        {/* Creator Cards Section: Mobile/Tablet Horizontal Scroll Carousel, Desktop 4-Column Grid */}
        <div className="mt-8 sm:mt-10 w-full max-w-[1080px] mx-auto">
          {filteredCreators.length > 0 ? (
            <div className="flex flex-nowrap overflow-x-auto snap-x snap-mandatory gap-3.5 sm:gap-4 pb-4 pt-1 scroll-smooth no-scrollbar -mx-2 px-2 sm:-mx-4 sm:px-4 md:-mx-6 md:px-6 lg:mx-0 lg:px-0 lg:grid lg:grid-cols-4 lg:gap-5 lg:pb-0 lg:overflow-visible">
              {filteredCreators.map((creator) => (
                <div
                  key={creator.id}
                  className="w-[240px] sm:w-[270px] md:w-[290px] lg:w-full shrink-0 lg:shrink snap-start"
                >
                  <CreatorCard
                    creator={creator}
                    onClick={onSelectCreator}
                  />
                </div>
              ))}
            </div>
          ) : (
            <div className="py-12 bg-gray-900/50 rounded-2xl border border-gray-800 text-center">
              <p className="text-gray-300 font-medium">No creators matched your search query or filter.</p>
              <button
                onClick={() => {
                  setSelectedFilterId(null);
                  setSearchQuery('');
                  setSelectedPlatform('Instagram');
                }}
                className="mt-3 px-4 py-2 bg-pink-500 text-white rounded-full text-xs font-bold hover:bg-pink-600 transition-colors cursor-pointer"
              >
                Show All Creators
              </button>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};
