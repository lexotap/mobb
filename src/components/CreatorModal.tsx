import React, { useState } from 'react';
import { Creator } from '../types';
import {
  X,
  Star,
  MapPin,
  CheckCircle2,
  Instagram,
  Video,
  Camera,
  Youtube,
  Send,
  Sparkles,
  Clock,
  ExternalLink,
} from 'lucide-react';

interface CreatorModalProps {
  creator: Creator | null;
  onClose: () => void;
  onContact: (creator: Creator) => void;
}

export const CreatorModal: React.FC<CreatorModalProps> = ({
  creator,
  onClose,
  onContact,
}) => {
  const [activeTab, setActiveTab] = useState<'overview' | 'packages' | 'portfolio'>('overview');
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  if (!creator) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 bg-black/85 backdrop-blur-md animate-fadeIn overflow-y-auto">
      {/* Lightbox for Portfolio Preview */}
      {selectedImage && (
        <div
          onClick={() => setSelectedImage(null)}
          className="fixed inset-0 z-60 bg-black/90 flex items-center justify-center p-4 cursor-zoom-out"
        >
          <div className="relative max-w-3xl max-h-[85vh] overflow-hidden rounded-2xl border border-[#333]">
            <img
              src={selectedImage}
              alt="Portfolio sample full view"
              className="max-h-[85vh] w-auto object-contain"
            />
            <button
              onClick={() => setSelectedImage(null)}
              className="absolute top-4 right-4 bg-black/80 text-white p-2 rounded-full hover:bg-black"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>
      )}

      {/* Main Modal Container */}
      <div className="relative bg-[#1a1a1a] border border-gray-800 rounded-3xl max-w-2xl w-full text-white shadow-2xl overflow-hidden flex flex-col my-auto max-h-[92vh]">
        {/* Header Banner */}
        <div className="relative h-36 sm:h-44 bg-gradient-to-r from-pink-900/40 via-purple-900/30 to-gray-900 overflow-hidden">
          <img
            src={creator.cardImage}
            alt="Cover"
            className="w-full h-full object-cover opacity-30 blur-sm scale-110"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#1a1a1a] via-[#1a1a1a]/50 to-transparent" />

          {/* Close Button */}
          <button
            onClick={onClose}
            className="absolute top-4 right-4 bg-black/50 hover:bg-black text-gray-300 hover:text-white p-2 rounded-full backdrop-blur-md transition-colors z-20 cursor-pointer"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Profile Card Header Info */}
        <div className="px-6 -mt-16 sm:-mt-20 relative z-10 flex flex-col sm:flex-row items-start sm:items-end justify-between gap-4">
          <div className="flex items-end gap-4">
            <div className="relative">
              <img
                src={creator.avatar}
                alt={creator.name}
                className="w-24 h-24 sm:w-28 sm:h-28 rounded-2xl object-cover ring-4 ring-[#1a1a1a] shadow-xl"
              />
              <div className="absolute -bottom-1 -right-1 bg-pink-500 text-white p-1 rounded-full border-2 border-[#1a1a1a]">
                <Sparkles className="w-3.5 h-3.5" />
              </div>
            </div>

            <div className="mb-1">
              <div className="flex items-center gap-2">
                <h2 className="text-2xl font-bold text-white leading-tight">
                  {creator.name}
                </h2>
                {creator.verified && (
                  <CheckCircle2 className="w-5 h-5 text-pink-500 fill-pink-500/20" />
                )}
              </div>
              <p className="text-sm text-pink-400 font-medium">{creator.handle}</p>
              {creator.following && (
                <p className="text-xs text-gray-300 mt-1 font-medium">
                  <span className="text-white font-bold">{creator.followers}</span> followers
                  <span className="text-gray-500 mx-2">•</span>
                  <span className="text-white font-bold">{creator.following}</span> following
                </p>
              )}
              <div className="flex items-center gap-1 text-xs text-gray-400 mt-1.5">
                <MapPin className="w-3.5 h-3.5 text-gray-500" />
                <span>{creator.location}</span>
              </div>
            </div>
          </div>

          <div className="bg-gray-900/90 border border-gray-800 rounded-2xl px-4 py-2 flex items-center gap-3">
            <div>
              <p className="text-[11px] text-gray-400 uppercase tracking-wider font-semibold">Starting at</p>
              <p className="text-xl font-extrabold text-white">${creator.startingPrice}</p>
            </div>
          </div>
        </div>

        {/* Navigation Tabs inside Modal */}
        <div className="px-6 mt-6 border-b border-gray-800 flex items-center gap-6 text-sm font-medium">
          <button
            onClick={() => setActiveTab('overview')}
            className={`pb-3 relative cursor-pointer ${
              activeTab === 'overview' ? 'text-pink-400 font-semibold' : 'text-gray-400 hover:text-gray-200'
            }`}
          >
            Overview
            {activeTab === 'overview' && (
              <span className="absolute bottom-0 left-0 right-0 h-0.5 bg-pink-500 rounded-full" />
            )}
          </button>
          <button
            onClick={() => setActiveTab('portfolio')}
            className={`pb-3 relative cursor-pointer ${
              activeTab === 'portfolio' ? 'text-pink-400 font-semibold' : 'text-gray-400 hover:text-gray-200'
            }`}
          >
            Photo Samples ({creator.portfolioImages.length})
            {activeTab === 'portfolio' && (
              <span className="absolute bottom-0 left-0 right-0 h-0.5 bg-pink-500 rounded-full" />
            )}
          </button>
          <button
            onClick={() => setActiveTab('packages')}
            className={`pb-3 relative cursor-pointer ${
              activeTab === 'packages' ? 'text-pink-400 font-semibold' : 'text-gray-400 hover:text-gray-200'
            }`}
          >
            Packages ({creator.packages.length})
            {activeTab === 'packages' && (
              <span className="absolute bottom-0 left-0 right-0 h-0.5 bg-pink-500 rounded-full" />
            )}
          </button>
        </div>

        {/* Modal Scrollable Body */}
        <div className="p-6 overflow-y-auto space-y-6">
          {activeTab === 'overview' && (
            <>
              {/* Stats Grid */}
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
                <div className="bg-gray-900/60 border border-gray-800/80 rounded-2xl p-3 text-center">
                  <p className="text-[11px] text-gray-400 uppercase font-semibold">Platform</p>
                  <p className="text-base font-bold text-white mt-0.5 flex items-center justify-center gap-1">
                    {creator.platform}
                  </p>
                </div>
                <div className="bg-gray-900/60 border border-gray-800/80 rounded-2xl p-3 text-center">
                  <p className="text-[11px] text-gray-400 uppercase font-semibold">Followers</p>
                  <p className="text-base font-bold text-white mt-0.5">{creator.followers}</p>
                </div>
                <div className="bg-gray-900/60 border border-gray-800/80 rounded-2xl p-3 text-center">
                  <p className="text-[11px] text-gray-400 uppercase font-semibold">Engagement</p>
                  <p className="text-base font-bold text-emerald-400 mt-0.5">{creator.engagementRate}</p>
                </div>
                <div className="bg-gray-900/60 border border-gray-800/80 rounded-2xl p-3 text-center">
                  <p className="text-[11px] text-gray-400 uppercase font-semibold">Rating</p>
                  <p className="text-base font-bold text-amber-400 mt-0.5 flex items-center justify-center gap-1">
                    <Star className="w-4 h-4 fill-amber-400" />
                    <span>{creator.rating}</span>
                  </p>
                </div>
              </div>

              {/* Bio */}
              <div>
                <h4 className="text-xs uppercase font-bold text-gray-400 tracking-wider mb-2">About Creator</h4>
                <p className="text-gray-300 text-sm leading-relaxed">{creator.bio}</p>
              </div>

              {/* Tags */}
              <div>
                <h4 className="text-xs uppercase font-bold text-gray-400 tracking-wider mb-2">Categories & Niches</h4>
                <div className="flex flex-wrap gap-2">
                  {creator.tags.map((tag) => (
                    <span
                      key={tag}
                      className="bg-gray-800/80 border border-gray-700/60 text-gray-200 text-xs px-3 py-1.5 rounded-full font-medium"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>

              {/* Photo Samples Preview Grid */}
              <div>
                <div className="flex items-center justify-between mb-3">
                  <h4 className="text-xs uppercase font-bold text-gray-400 tracking-wider">Photo Samples & Recent Work</h4>
                  <button
                    onClick={() => setActiveTab('portfolio')}
                    className="text-xs text-pink-400 hover:text-pink-300 font-medium flex items-center gap-1"
                  >
                    View all <ExternalLink className="w-3 h-3" />
                  </button>
                </div>
                <div className="grid grid-cols-3 gap-3">
                  {creator.portfolioImages.slice(0, 3).map((imgUrl, index) => (
                    <div
                      key={index}
                      onClick={() => setSelectedImage(imgUrl)}
                      className="aspect-square rounded-2xl overflow-hidden bg-gray-800 border border-gray-800 relative group cursor-pointer"
                    >
                      <img
                        src={imgUrl}
                        alt={`Sample ${index + 1}`}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                      />
                      <div className="absolute inset-0 bg-black/30 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                        <span className="text-xs font-semibold bg-black/60 px-2.5 py-1 rounded-full text-white">Zoom</span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </>
          )}

          {activeTab === 'portfolio' && (
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
              {creator.portfolioImages.map((imgUrl, index) => (
                <div
                  key={index}
                  onClick={() => setSelectedImage(imgUrl)}
                  className="aspect-[3/4] rounded-2xl overflow-hidden bg-gray-800 border border-gray-800 relative group cursor-pointer"
                >
                  <img
                    src={imgUrl}
                    alt={`Sample ${index + 1}`}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                    <span className="text-xs font-semibold bg-black/70 px-3 py-1.5 rounded-full text-white">
                      Click to Enlarge
                    </span>
                  </div>
                </div>
              ))}
            </div>
          )}

          {activeTab === 'packages' && (
            <div className="space-y-3">
              {creator.packages.map((pkg) => (
                <div
                  key={pkg.id}
                  className="p-4 bg-gray-900/70 border border-gray-800 rounded-2xl flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 hover:border-pink-500/40 transition-colors"
                >
                  <div>
                    <h5 className="font-bold text-white text-base">{pkg.title}</h5>
                    <p className="text-xs text-gray-400 mt-1 max-w-md">{pkg.description}</p>
                    <div className="flex items-center gap-1.5 text-[11px] text-gray-400 mt-2">
                      <Clock className="w-3.5 h-3.5 text-pink-400" />
                      <span>Turnaround time: {pkg.deliveryTime}</span>
                    </div>
                  </div>
                  <div className="text-right sm:self-center shrink-0 w-full sm:w-auto flex sm:flex-col justify-between items-center sm:items-end border-t sm:border-t-0 border-gray-800 pt-3 sm:pt-0">
                    <span className="text-xl font-extrabold text-white">${pkg.price}</span>
                    <button
                      onClick={() => onContact(creator)}
                      className="mt-1 px-4 py-1.5 bg-pink-500/20 hover:bg-pink-500 text-pink-300 hover:text-white rounded-full text-xs font-semibold transition-colors cursor-pointer"
                    >
                      Select Package
                    </button>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>

        {/* Footer Actions */}
        <div className="p-4 sm:p-6 bg-gray-900/90 border-t border-gray-800 flex items-center gap-3">
          <button
            onClick={() => onContact(creator)}
            className="w-full bg-[#f43f5e] hover:bg-[#e11d48] text-white font-bold py-3.5 px-6 rounded-full shadow-lg shadow-pink-500/20 flex items-center justify-center gap-2 text-base transition-all cursor-pointer"
          >
            <Send className="w-4 h-4" />
            <span>Contact Creator</span>
          </button>
        </div>
      </div>
    </div>
  );
};
