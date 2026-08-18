import React from 'react';
import {
  dbrkvImg,
  hermanStrydomImg,
  ivanaMarketinImg,
  janarJuhkovImg,
} from '../avatars';

export function StatsSection() {
  return (
    <section className="w-full pt-6 sm:pt-8 pb-16 sm:pb-20 bg-white">
      {/* Outer Container matching search bar & workflow width max-w-[1080px] */}
      <div className="w-full max-w-[1080px] mx-auto px-4 sm:px-6 lg:px-0">

        {/* Section Heading */}
        <h2 className="section-title text-center max-w-3xl mx-auto mb-8 sm:mb-10">
          Trusted by Brands Running Creator Programs at Scale.
        </h2>

        {/* Grid Container */}
        <div className="flex flex-col gap-5 sm:gap-6">

          {/* Top Row */}
          <div className="grid grid-cols-1 md:grid-cols-12 gap-5 sm:gap-6">

            {/* Card 1: 1.1m+ Creators on Platform */}
            <div className="md:col-span-7 bg-[#f3f4f6] rounded-[28px] sm:rounded-[32px] p-6 sm:p-8 md:p-10 flex flex-col sm:flex-row items-center justify-between gap-6 overflow-hidden relative shadow-xs h-full min-h-[230px] sm:min-h-[240px]">
              <div className="z-10 text-center sm:text-left my-auto">
                <div className="text-4xl sm:text-5xl font-black text-gray-900 tracking-tight">
                  1.1m+
                </div>
                <p className="text-gray-600 font-semibold text-sm sm:text-base mt-2">
                  Creators on Platform
                </p>
              </div>

              {/* Photos Collage */}
              <div className="relative w-44 h-36 shrink-0 flex items-center justify-center my-auto">
                <div className="absolute top-0 left-2 w-18 h-18 rounded-2xl overflow-hidden border-2 border-pink-500 shadow-md rotate-[-4deg]">
                  <img
                    src={dbrkvImg}
                    alt="Daria"
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="absolute top-2 right-2 w-13 h-13 rounded-2xl overflow-hidden border-2 border-red-500 shadow-md rotate-[6deg]">
                  <img
                    src={hermanStrydomImg}
                    alt="Herman"
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="absolute bottom-1 left-0 w-20 h-14 rounded-2xl overflow-hidden border-2 border-pink-400 shadow-md rotate-[3deg]">
                  <img
                    src={ivanaMarketinImg}
                    alt="Ivana"
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="absolute bottom-0 right-4 w-14 h-18 rounded-2xl overflow-hidden border-2 border-rose-400 shadow-md rotate-[-5deg]">
                  <img
                    src={janarJuhkovImg}
                    alt="Janar"
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
            </div>

            {/* Card 2: 500,000+ Brands Registered */}
            <div className="md:col-span-5 bg-[#f3f4f6] rounded-[28px] sm:rounded-[32px] p-6 sm:p-8 md:p-10 flex flex-col justify-center items-center text-center shadow-xs h-full min-h-[230px] sm:min-h-[240px]">
              <div className="text-4xl sm:text-5xl font-black text-gray-900 tracking-tight">
                500,000+
              </div>
              <p className="text-gray-600 font-semibold text-sm sm:text-base mt-2">
                Brands Registered
              </p>
            </div>

          </div>

          {/* Bottom Row */}
          <div className="grid grid-cols-1 md:grid-cols-12 gap-5 sm:gap-6">

            {/* Card 3: 100,000+ Pieces of Content Delivered */}
            <div className="md:col-span-4 bg-[#f3f4f6] rounded-[28px] sm:rounded-[32px] p-6 sm:p-8 md:p-10 flex flex-col justify-center items-center text-center shadow-xs h-full min-h-[230px] sm:min-h-[240px]">
              <div className="text-4xl sm:text-5xl font-black text-gray-900 tracking-tight">
                100,000+
              </div>
              <p className="text-gray-600 font-semibold text-sm sm:text-base mt-2">
                Pieces of Content Delivered
              </p>
            </div>

            {/* Card 4: 48,000+ 5-star Reviews */}
            <div className="md:col-span-8 bg-[#f3f4f6] rounded-[28px] sm:rounded-[32px] p-6 sm:p-8 md:p-10 flex flex-col sm:flex-row items-center justify-between gap-6 overflow-hidden relative shadow-xs h-full min-h-[230px] sm:min-h-[240px]">
              <div className="z-10 text-center sm:text-left shrink-0 max-w-xs my-auto">
                <div className="text-4xl sm:text-5xl font-black text-gray-900 tracking-tight">
                  48,000+
                </div>
                <p className="text-gray-600 font-semibold text-sm sm:text-base mt-2 leading-snug">
                  5-star Reviews from Active Brands
                </p>
              </div>

              {/* Tilted Floating Dark Review Cards Stack (Matching exact 4-card stack from image) */}
              <div className="relative w-full sm:w-[350px] h-[190px] shrink-0 flex items-center justify-center overflow-visible select-none my-auto">

                {/* Card 1: Michelle (Backmost, z-10) */}
                <div className="absolute right-[90px] sm:right-[120px] top-[-20px] w-[210px] sm:w-[230px] bg-[#2d2e34] text-white p-3 rounded-2xl shadow-lg rotate-[15deg] border border-white/10 z-10">
                  <div className="flex items-center gap-1.5 text-xs font-bold text-gray-200">
                    <span className="w-4 h-4 rounded-full bg-[#eb618a] flex items-center justify-center text-[9px] text-white font-bold">M</span>
                    <span>Michelle</span>
                  </div>
                  <div className="text-amber-400 text-[10px] mt-0.5 tracking-tighter">★★★★★</div>
                  <p className="text-[10px] text-gray-300 mt-0.5 leading-tight line-clamp-2">
                    My first collab campaign and working wit'
                  </p>
                </div>

                {/* Card 2: Tirami (z-20) */}
                <div className="absolute right-[65px] sm:right-[90px] top-[15px] w-[210px] sm:w-[230px] bg-[#2d2e34] text-white p-3 rounded-2xl shadow-xl rotate-[15deg] border border-white/10 z-20">
                  <div className="flex items-center gap-1.5 text-xs font-bold text-gray-200">
                    <span className="w-4 h-4 rounded-full bg-[#eb618a] flex items-center justify-center text-[9px] text-white font-bold">T</span>
                    <span>Tirami</span>
                  </div>
                  <div className="text-amber-400 text-[10px] mt-0.5 tracking-tighter">★★★★★</div>
                  <p className="text-[10px] text-gray-300 mt-0.5 leading-tight line-clamp-2">
                    She's very dedicated, recomended! Great content quality, fast turnaround
                  </p>
                </div>

                {/* Card 3: Firm (z-30) */}
                <div className="absolute right-[40px] sm:right-[60px] top-[50px] w-[210px] sm:w-[230px] bg-[#2d2e34] text-white p-3 rounded-2xl shadow-xl rotate-[15deg] border border-white/10 z-30">
                  <div className="flex items-center gap-1.5 text-xs font-bold text-gray-200">
                    <span className="w-4 h-4 rounded-full bg-[#eb618a] flex items-center justify-center text-[9px] text-white font-bold">F</span>
                    <span>Firm</span>
                  </div>
                  <div className="text-amber-400 text-[10px] mt-0.5 tracking-tighter">★★★★★</div>
                  <p className="text-[10px] text-gray-300 mt-0.5 leading-tight line-clamp-2">
                    Much love to this creator! Delivered a very high quali
                  </p>
                </div>

                {/* Card 4: Daniel (Frontmost, z-40) */}
                <div className="absolute right-[10px] sm:right-[20px] top-[85px] w-[210px] sm:w-[230px] bg-[#2d2e34] text-white p-3 rounded-2xl shadow-2xl rotate-[15deg] border border-white/10 z-40">
                  <div className="flex items-center gap-1.5 text-xs font-bold text-gray-200">
                    <span className="w-4 h-4 rounded-full bg-[#eb618a] flex items-center justify-center text-[9px] text-white font-bold">D</span>
                    <span>Daniel</span>
                  </div>
                  <div className="text-amber-400 text-[10px] mt-0.5 tracking-tighter">★★★★★</div>
                  <p className="text-[10px] text-gray-300 mt-0.5 leading-tight line-clamp-3">
                    Chanel came through in spades. Super communicative, excellent UGC video and support. 100% recommend
                  </p>
                </div>

              </div>

            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
