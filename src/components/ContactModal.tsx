import React, { useState } from 'react';
import { Creator } from '../types';
import { X, Send, CheckCircle2, MessageSquare, DollarSign, Calendar } from 'lucide-react';

interface ContactModalProps {
  creator: Creator | null;
  onClose: () => void;
}

export const ContactModal: React.FC<ContactModalProps> = ({ creator, onClose }) => {
  const [brandName, setBrandName] = useState('');
  const [email, setEmail] = useState('');
  const [budget, setBudget] = useState(creator ? creator.startingPrice.toString() : '200');
  const [message, setMessage] = useState('');
  const [isSubmitted, setIsSubmitted] = useState(false);

  if (!creator) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitted(true);
  };

  return (
    <div className="fixed inset-0 z-60 flex items-center justify-center p-4 bg-black/85 backdrop-blur-md animate-fadeIn">
      <div className="relative bg-[#1a1a1a] border border-gray-800 rounded-3xl max-w-lg w-full text-white shadow-2xl p-6 overflow-hidden">
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 bg-gray-900 hover:bg-black text-gray-400 hover:text-white p-2 rounded-full transition-colors cursor-pointer border border-gray-800"
        >
          <X className="w-4 h-4" />
        </button>

        {isSubmitted ? (
          <div className="text-center py-8 space-y-4">
            <div className="w-16 h-16 bg-pink-500/20 text-pink-400 rounded-full flex items-center justify-center mx-auto ring-8 ring-pink-500/10">
              <CheckCircle2 className="w-10 h-10 text-pink-500" />
            </div>
            <h3 className="text-2xl font-bold text-white">Inquiry Sent!</h3>
            <p className="text-sm text-gray-300 max-w-sm mx-auto">
              Your campaign inquiry has been sent to <span className="text-pink-400 font-semibold">{creator.name}</span> ({creator.handle}). They usually respond within 24 hours.
            </p>
            <button
              onClick={onClose}
              className="mt-4 px-6 py-2.5 bg-[#f43f5e] hover:bg-[#e11d48] text-white rounded-full font-bold text-sm transition-colors cursor-pointer"
            >
              Back to Marketplace
            </button>
          </div>
        ) : (
          <div>
            <div className="flex items-center gap-3 pb-4 border-b border-gray-800 mb-5">
              <img
                src={creator.avatar}
                alt={creator.name}
                className="w-12 h-12 rounded-xl object-cover ring-2 ring-pink-500/40"
              />
              <div>
                <h3 className="font-bold text-white text-lg">Contact {creator.name}</h3>
                <p className="text-xs text-pink-400 font-medium">{creator.handle} • Starting at ${creator.startingPrice}</p>
              </div>
            </div>

            <form onSubmit={handleSubmit} className="space-y-4 text-sm">
              <div>
                <label className="block text-[11px] font-bold text-gray-400 uppercase tracking-wider mb-1">
                  Your Brand / Company Name
                </label>
                <input
                  type="text"
                  required
                  placeholder="e.g. Acme Lifestyle Co."
                  value={brandName}
                  onChange={(e) => setBrandName(e.target.value)}
                  className="w-full bg-gray-900 border border-gray-800 rounded-xl px-4 py-2.5 text-white placeholder-gray-500 focus:outline-none focus:border-pink-500 transition-colors"
                />
              </div>

              <div>
                <label className="block text-[11px] font-bold text-gray-400 uppercase tracking-wider mb-1">
                  Contact Email
                </label>
                <input
                  type="email"
                  required
                  placeholder="marketing@yourbrand.com"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-full bg-gray-900 border border-gray-800 rounded-xl px-4 py-2.5 text-white placeholder-gray-500 focus:outline-none focus:border-pink-500 transition-colors"
                />
              </div>

              <div>
                <label className="block text-[11px] font-bold text-gray-400 uppercase tracking-wider mb-1">
                  Offered Campaign Budget ($ USD)
                </label>
                <div className="relative">
                  <span className="absolute left-3.5 top-2.5 text-gray-500 font-bold">$</span>
                  <input
                    type="number"
                    required
                    min={creator.startingPrice}
                    value={budget}
                    onChange={(e) => setBudget(e.target.value)}
                    className="w-full bg-gray-900 border border-gray-800 rounded-xl pl-8 pr-4 py-2.5 text-white placeholder-gray-500 focus:outline-none focus:border-pink-500 transition-colors"
                  />
                </div>
              </div>

              <div>
                <label className="block text-[11px] font-bold text-gray-400 uppercase tracking-wider mb-1">
                  Project Brief & Deliverables
                </label>
                <textarea
                  rows={3}
                  required
                  placeholder="Describe your product, campaign goals, key deliverables (e.g. 1x Reel + 3 photo assets), and timeline..."
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  className="w-full bg-gray-900 border border-gray-800 rounded-xl p-3 text-white placeholder-gray-500 focus:outline-none focus:border-pink-500 transition-colors resize-none"
                />
              </div>

              <button
                type="submit"
                className="w-full mt-2 bg-[#f43f5e] hover:bg-[#e11d48] text-white font-bold py-3 px-6 rounded-full shadow-lg shadow-pink-500/20 flex items-center justify-center gap-2 cursor-pointer transition-all"
              >
                <Send className="w-4 h-4" />
                <span>Send Direct Inquiry</span>
              </button>
            </form>
          </div>
        )}
      </div>
    </div>
  );
};
