import React from 'react';
import { Creator } from '../types';
import { Instagram, Video, Camera, Youtube } from 'lucide-react';
import {
  dbrkvImg,
  hermanStrydomImg,
  ivanaMarketinImg,
  janarJuhkovImg,
  joanneBladesImg,
  kolapoImg,
  mamaFurkidzImg,
  murielMangenaImg,
} from '../avatars';

interface CreatorCardProps {
  creator: Creator;
  onClick: (creator: Creator) => void;
}

const DEFAULT_REVIEWS = [
  { avatar: dbrkvImg, comment: 'authentic and insightful' },
  { avatar: hermanStrydomImg, comment: 'pro, beautiful content' },
  { avatar: ivanaMarketinImg, comment: 'great organic video' },
  { avatar: janarJuhkovImg, comment: 'easy to work with' },
  { avatar: kolapoImg, comment: 'high converting UGC!' },
  { avatar: joanneBladesImg, comment: 'super fast turnaround!' },
  { avatar: mamaFurkidzImg, comment: 'top tier aesthetic' },
  { avatar: murielMangenaImg, comment: 'boosted sales 3x!' },
];

export const CreatorCard: React.FC<CreatorCardProps> = ({ creator, onClick }) => {
  const getPlatformIcon = (platform: string) => {
    switch (platform) {
      case 'TikTok':
        return <Video className="w-3.5 h-3.5 text-white" />;
      case 'User Generated Content':
        return <Camera className="w-3.5 h-3.5 text-white" />;
      case 'YouTube':
        return <Youtube className="w-3.5 h-3.5 text-white" />;
      default:
        return <Instagram className="w-3.5 h-3.5 text-white" />;
    }
  };

  // Ensure 8 reviews per card
  let reviews = creator.reviewBadges && creator.reviewBadges.length > 0
    ? creator.reviewBadges
    : DEFAULT_REVIEWS;

  if (reviews.length < 8) {
    reviews = [...reviews, ...DEFAULT_REVIEWS].slice(0, 8);
  }

  const cardIdNum = parseInt(creator.id, 10) || 1;
  // Stagger card start times so cards across grid don't animate synchronously
  const cardStagger = (cardIdNum % 4) * 0.5;
  const cycleDuration = 16; // 16s cycle for 8 reviews = 2s delay per item -> 3 visible simultaneously

  return (
    <div
      onClick={() => onClick(creator)}
      className="group relative rounded-2xl overflow-hidden aspect-[1/1.08] bg-gray-900 border border-gray-800/80 shadow-xl cursor-pointer transform transition-all duration-300 hover:scale-[1.02] hover:shadow-2xl hover:border-pink-500/40 flex flex-col justify-between p-3.5 select-none"
    >
      {/* Background Image */}
      <img
        src={creator.cardImage}
        alt={creator.name}
        className="absolute inset-0 w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-500"
        loading="lazy"
      />

      {/* Dark Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/30 to-black/10" />

      {/* Top Badge: Followers Count */}
      <div className="relative z-10 flex items-center justify-between">
        <div className="bg-black/50 backdrop-blur-md px-2.5 py-1 rounded-full text-xs font-semibold text-white flex items-center gap-1.5 border border-white/15 shadow-md">
          {getPlatformIcon(creator.platform)}
          <span>{creator.followers}</span>
        </div>

        {creator.verified && (
          <div className="badge-pro backdrop-blur-md px-2 py-0.5 rounded-full text-[9px] uppercase font-bold tracking-wider shadow-sm">
            PRO
          </div>
        )}
      </div>

      {/* Animated Floating Customer Review Badges Overlay */}
      <div className="absolute left-3 right-3 bottom-14 h-24 z-20 pointer-events-none overflow-hidden">
        {reviews.map((review, idx) => {
          const delay = cardStagger + idx * 2;
          return (
            <div
              key={idx}
              className="absolute bottom-0 left-0 bg-black/80 backdrop-blur-md border border-white/20 rounded-full px-2.5 py-1 text-white shadow-xl flex items-center gap-1.5 max-w-[90%] animate-float-review"
              style={{
                animationDuration: `${cycleDuration}s`,
                animationDelay: `${delay}s`,
              }}
            >
              <img
                src={review.avatar}
                alt="Reviewer"
                className="w-4 h-4 rounded-full object-cover shrink-0 ring-1 ring-white/50"
              />
              <span className="text-[10px] sm:text-[10.5px] font-medium text-gray-100 truncate tracking-tight">
                "{review.comment}"
              </span>
            </div>
          );
        })}
      </div>

      {/* Bottom Info Overlay */}
      <div className="relative z-10 text-white mt-auto">
        <div className="flex items-end justify-between gap-2 mb-0.5">
          <div className="min-w-0 flex-1">
            <h3 className="font-bold text-xs sm:text-sm text-white leading-tight drop-shadow-sm group-hover:text-pink-200 transition-colors truncate">
              {creator.name}
            </h3>
            <p className="text-[10px] sm:text-[11px] text-gray-300 font-normal truncate mt-0.5 drop-shadow-sm">
              {creator.tags.join(', ')}
            </p>
          </div>
          <span className="font-bold text-xs sm:text-sm text-white tracking-tight shrink-0">
            ${creator.startingPrice}
          </span>
        </div>
      </div>
    </div>
  );
};
