import React from 'react';
import { Platform } from '../types';
import {
  Instagram,
  Video,
  Camera,
  Youtube,
  Twitter,
  Tv,
  ShoppingBag,
  Ghost,
  ChevronDown,
} from 'lucide-react';

interface PlatformDropdownProps {
  selectedPlatform: Platform;
  onSelectPlatform: (platform: Platform) => void;
  isOpen: boolean;
  onToggle: () => void;
}

const PLATFORM_ITEMS: { name: Platform; label: string; icon: React.ReactNode }[] = [
  { name: 'Instagram', label: 'Instagram', icon: <Instagram className="w-4 h-4" /> },
  { name: 'User Generated Content', label: 'User Generated Content', icon: <Camera className="w-4 h-4" /> },
  { name: 'TikTok', label: 'TikTok', icon: <Video className="w-4 h-4" /> },
  { name: 'YouTube', label: 'YouTube', icon: <Youtube className="w-4 h-4" /> },
];

export const PlatformDropdown: React.FC<PlatformDropdownProps> = ({
  selectedPlatform,
  onSelectPlatform,
  isOpen,
  onToggle,
}) => {
  const currentItem = PLATFORM_ITEMS.find((p) => p.name === selectedPlatform) || PLATFORM_ITEMS[0];

  return (
    <div className="relative text-gray-900 font-sans">
      {/* Trigger Button */}
      <button
        type="button"
        onClick={onToggle}
        className="flex items-center gap-1.5 sm:gap-2 px-3 sm:px-4 py-1.5 hover:bg-gray-100 rounded-full text-xs sm:text-sm font-semibold text-gray-800 transition-colors cursor-pointer select-none whitespace-nowrap"
      >
        <span className="text-gray-700">{currentItem.icon}</span>
        <span className="truncate">{selectedPlatform === 'User Generated Content' ? 'UGC' : selectedPlatform}</span>
        <ChevronDown className={`w-4 h-4 text-gray-500 transition-transform ${isOpen ? 'rotate-180' : ''}`} />
      </button>

      {/* Popover Menu */}
      {isOpen && (
        <div className="absolute top-full left-0 mt-3 w-64 bg-white rounded-2xl shadow-2xl border border-gray-100 p-2 z-50 animate-fadeIn">
          <div className="flex flex-col gap-0.5">
            {PLATFORM_ITEMS.map((item) => {
              const isSelected = item.name === selectedPlatform;
              return (
                <button
                  key={item.name}
                  type="button"
                  onClick={() => {
                    onSelectPlatform(item.name);
                    onToggle();
                  }}
                  className={`flex items-center gap-3 px-4 py-2.5 rounded-xl font-medium text-sm transition-all text-left cursor-pointer ${
                    isSelected
                      ? 'text-accent-pink font-semibold bg-pink-50/70'
                      : 'text-gray-700 hover:text-gray-900 hover:bg-gray-50'
                  }`}
                >
                  <span className={isSelected ? 'text-accent-pink' : 'text-gray-500'}>
                    {item.icon}
                  </span>
                  <span>{item.label}</span>
                </button>
              );
            })}
          </div>
        </div>
      )}
    </div>
  );
};
