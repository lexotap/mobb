import React from 'react';
import marriottLogo from '../logos/marriott-logo-black-and-white.png';
import klarnaLogo from '../logos/Klarna-Logo-PNG3.png';
import revolutLogo from '../logos/Revolut-Logo.png';
import emaarLogo from '../logos/Emaar-Properties-Logo.png';
import xiaomiLogo from '../logos/xiaomi-logo-black-and-white.png';
import aliexpressLogo from '../logos/aliexpress_logo_icon_247663.png';
import hellofreshLogo from '../logos/icons8-hello-fresh-50.png';
import logoAd80 from '../logos/ad80efb61f5ca8eb4580de3b12bf3050.png';
import logoBae from '../logos/bae61f92cd6cbca4af71516643c466e0.png';
import logoIdj from '../logos/idjSN5F2Nq_1787002922204.png';
import logo1208867 from '../logos/1208867.png';

const BRAND_LOGOS = [
  {
    name: 'Marriott',
    src: marriottLogo,
  },
  {
    name: 'Klarna',
    src: klarnaLogo,
  },
  {
    name: 'Revolut',
    src: revolutLogo,
  },
  {
    name: 'Emaar Properties',
    src: emaarLogo,
  },
  {
    name: 'Xiaomi',
    src: xiaomiLogo,
  },
  {
    name: 'AliExpress',
    src: aliexpressLogo,
  },
  {
    name: 'HelloFresh',
    src: hellofreshLogo,
  },
  {
    name: 'Brand Partner',
    src: logoAd80,
  },
  {
    name: 'Brand Partner',
    src: logoBae,
  },
  {
    name: 'Brand Partner',
    src: logoIdj,
  },
  {
    name: 'Brand Partner',
    src: logo1208867,
  },
];

export const TrustedBrands: React.FC = () => {
  // Duplicate array multiple times for infinite seamless flow
  const duplicatedLogos = [...BRAND_LOGOS, ...BRAND_LOGOS, ...BRAND_LOGOS];

  return (
    <section className="w-full bg-white py-6 sm:py-8 overflow-hidden select-none">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row items-center gap-4 md:gap-8">
        
        {/* Left Label */}
        <div className="shrink-0 text-gray-900 font-bold text-base sm:text-lg tracking-tight whitespace-nowrap flex items-center gap-2">
          <span>Trusted by:</span>
        </div>

        {/* Right Flowing Brands Ticker with Edge Gradient Mask */}
        <div className="relative w-full overflow-hidden mask-linear">
          {/* Gradient Edge Masks */}
          <div className="absolute left-0 top-0 bottom-0 w-12 sm:w-20 bg-gradient-to-r from-white to-transparent z-10 pointer-events-none" />
          <div className="absolute right-0 top-0 bottom-0 w-12 sm:w-20 bg-gradient-to-l from-white to-transparent z-10 pointer-events-none" />

          {/* Marquee Track */}
          <div className="animate-ticker-flow flex items-center gap-12 sm:gap-16 md:gap-20 py-2">
            {duplicatedLogos.map((item, index) => (
              <div
                key={`${item.name}-${index}`}
                className="shrink-0 grayscale opacity-70 hover:grayscale-0 hover:opacity-100 transition-all duration-300 cursor-pointer flex items-center justify-center h-9"
                title={item.name}
              >
                <img
                  src={item.src}
                  alt={item.name}
                  className="max-h-8 max-w-[130px] w-auto h-auto object-contain"
                  loading="lazy"
                />
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
};

