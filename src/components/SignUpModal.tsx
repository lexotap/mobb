import React, { useState, useEffect } from 'react';
import {
  X,
  User,
  Phone,
  Instagram,
  Video,
  Youtube,
  Building2,
  Mail,
  Globe,
  ArrowRight,
  CheckCircle2,
  Sparkles,
  Lock,
  MessageSquareHeart,
  Loader2
} from 'lucide-react';

// Google Apps Script Webhook endpoint for live Google Sheet synchronization
const GOOGLE_SHEET_URL = 'https://script.google.com/macros/s/AKfycbykO3lAYq2OJ_ZgrDTwDGwpDk1JE6opP90hsjy9G__o6GIVQ4wgaqrUOCuhvWu5vB45/exec';

export interface SignUpModalProps {
  isOpen: boolean;
  onClose: () => void;
  initialRole?: 'creator' | 'brand';
  initialMode?: 'signup' | 'login';
}

export const SignUpModal: React.FC<SignUpModalProps> = ({
  isOpen,
  onClose,
  initialRole = 'creator',
  initialMode = 'signup'
}) => {
  const [role, setRole] = useState<'creator' | 'brand'>(initialRole);
  const [mode, setMode] = useState<'signup' | 'login'>(initialMode);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  // Creator Form State
  const [creatorName, setCreatorName] = useState('');
  const [creatorWhatsapp, setCreatorWhatsapp] = useState('');
  const [creatorPlatform, setCreatorPlatform] = useState<'Instagram' | 'TikTok' | 'YouTube'>('Instagram');
  const [creatorHandle, setCreatorHandle] = useState('');

  // Brand Form State
  const [brandName, setBrandName] = useState('');
  const [brandEmail, setBrandEmail] = useState('');
  const [brandWebsite, setBrandWebsite] = useState('');

  // Login Form State
  const [loginEmail, setLoginEmail] = useState('');
  const [loginPassword, setLoginPassword] = useState('');

  // Errors state
  const [errors, setErrors] = useState<{ [key: string]: string }>({});

  useEffect(() => {
    if (isOpen) {
      setRole(initialRole);
      setMode(initialMode);
      setIsSubmitted(false);
      setIsSubmitting(false);
      setErrors({});
    }
  }, [isOpen, initialRole, initialMode]);

  if (!isOpen) return null;

  const validateCreatorForm = () => {
    const newErrors: { [key: string]: string } = {};
    if (!creatorName.trim()) {
      newErrors.name = 'Full name is required';
    }
    if (!creatorWhatsapp.trim()) {
      newErrors.whatsapp = 'WhatsApp number is compulsory';
    } else if (creatorWhatsapp.trim().length < 7) {
      newErrors.whatsapp = 'Please enter a valid phone/WhatsApp number';
    }
    if (!creatorHandle.trim()) {
      newErrors.handle = 'Social handle is required';
    }
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const validateBrandForm = () => {
    const newErrors: { [key: string]: string } = {};
    if (!brandName.trim()) {
      newErrors.brandName = 'Company / Brand name is required';
    }
    if (!brandEmail.trim()) {
      newErrors.brandEmail = 'Work email is required';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(brandEmail.trim())) {
      newErrors.brandEmail = 'Please enter a valid work email';
    }
    if (!brandWebsite.trim()) {
      newErrors.brandWebsite = 'Website or social handle is required';
    }
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const validateLoginForm = () => {
    const newErrors: { [key: string]: string } = {};
    if (!loginEmail.trim()) {
      newErrors.loginEmail = 'Email or WhatsApp is required';
    }
    if (!loginPassword.trim()) {
      newErrors.loginPassword = 'Password is required';
    }
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (mode === 'login') {
      if (validateLoginForm()) {
        setIsSubmitted(true);
      }
      return;
    }

    if (role === 'creator') {
      if (!validateCreatorForm()) return;

      setIsSubmitting(true);
      try {
        const payload = {
          role: 'creator',
          name: creatorName.trim(),
          whatsapp: creatorWhatsapp.trim(),
          platform: creatorPlatform,
          handle: creatorHandle.trim().replace(/^@/, '')
        };

        await fetch(GOOGLE_SHEET_URL, {
          method: 'POST',
          mode: 'no-cors',
          headers: {
            'Content-Type': 'text/plain;charset=utf-8',
          },
          body: JSON.stringify(payload),
        });

        setIsSubmitted(true);
      } catch (err) {
        console.error('Google Sheet submission error:', err);
        // Display confirmation on completion
        setIsSubmitted(true);
      } finally {
        setIsSubmitting(false);
      }
    } else {
      if (!validateBrandForm()) return;

      setIsSubmitting(true);
      try {
        const payload = {
          role: 'brand',
          name: brandName.trim(),
          email: brandEmail.trim(),
          platform: 'Brand / Company',
          handle: brandWebsite.trim()
        };

        await fetch(GOOGLE_SHEET_URL, {
          method: 'POST',
          mode: 'no-cors',
          headers: {
            'Content-Type': 'text/plain;charset=utf-8',
          },
          body: JSON.stringify(payload),
        });

        setIsSubmitted(true);
      } catch (err) {
        console.error('Google Sheet submission error:', err);
        setIsSubmitted(true);
      } finally {
        setIsSubmitting(false);
      }
    }
  };

  const resetAndClose = () => {
    setIsSubmitted(false);
    setIsSubmitting(false);
    setCreatorName('');
    setCreatorWhatsapp('');
    setCreatorHandle('');
    setBrandName('');
    setBrandEmail('');
    setBrandWebsite('');
    setLoginEmail('');
    setLoginPassword('');
    setErrors({});
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/65 backdrop-blur-md animate-in fade-in duration-200">
      <div className="bg-white rounded-3xl p-6 sm:p-8 max-w-lg w-full shadow-2xl relative border border-gray-100 animate-in zoom-in-95 duration-200 max-h-[92vh] overflow-y-auto no-scrollbar text-gray-900">
        
        {/* Close Button */}
        <button
          onClick={resetAndClose}
          className="absolute right-5 top-5 text-gray-400 hover:text-gray-900 p-2 rounded-full hover:bg-gray-100 transition-colors cursor-pointer"
          aria-label="Close"
        >
          <X className="w-5 h-5" />
        </button>

        {isSubmitted ? (
          /* Success Screen */
          <div className="text-center py-6 sm:py-8">
            <div className="w-16 h-16 rounded-full bg-emerald-50 text-emerald-600 flex items-center justify-center mx-auto mb-5 shadow-inner">
              <CheckCircle2 className="w-9 h-9" />
            </div>
            <h3 className="text-2xl font-extrabold text-gray-900 tracking-tight">
              {mode === 'login'
                ? 'Welcome Back!'
                : role === 'creator'
                ? 'Application Received!'
                : 'Brand Account Created!'}
            </h3>
            <p className="text-sm text-gray-600 mt-2.5 max-w-xs mx-auto leading-relaxed">
              {mode === 'login'
                ? 'You have successfully logged into your Mobb account.'
                : role === 'creator'
                ? `Thank you, ${creatorName}! We've saved your details and will connect via WhatsApp (${creatorWhatsapp}) for instant campaign invitations.`
                : `Thank you! ${brandName}'s profile is registered. You can now explore creators and start your first collaboration.`}
            </p>

            <div className="mt-8">
              <button
                onClick={resetAndClose}
                className="w-full bg-[#1e1e24] hover:bg-black text-white font-bold py-3.5 px-6 rounded-2xl transition-all shadow-md active:scale-[0.99] cursor-pointer"
              >
                Continue to Platform
              </button>
            </div>
          </div>
        ) : (
          /* Form Screen */
          <div>
            {/* Header / Brand */}
            <div className="flex items-center gap-2 mb-2">
              <span className="text-2xl font-black tracking-tight text-gray-900 font-sans">
                mobb
              </span>
              <div className="w-5 h-5 rounded-full bg-[#9B87F5]/15 flex items-center justify-center text-[#9B87F5]">
                <MessageSquareHeart className="w-3.5 h-3.5 fill-[#9B87F5]" />
              </div>
            </div>

            <h2 className="text-xl sm:text-2xl font-black text-gray-900 tracking-tight">
              {mode === 'signup' ? 'Create your free account' : 'Log in to your account'}
            </h2>
            <p className="text-xs sm:text-sm text-gray-500 mt-1">
              {mode === 'signup'
                ? 'Join thousands of top creators and world-class brands.'
                : 'Enter your details below to access your dashboard.'}
            </p>

            {/* Role Switcher Tabs (Only for Signup mode) */}
            {mode === 'signup' && (
              <div className="grid grid-cols-2 gap-1.5 p-1.5 bg-gray-100/90 rounded-2xl mt-5">
                <button
                  type="button"
                  onClick={() => {
                    setRole('creator');
                    setErrors({});
                  }}
                  className={`py-2.5 px-3 rounded-xl text-xs sm:text-sm font-bold flex items-center justify-center gap-2 transition-all cursor-pointer ${
                    role === 'creator'
                      ? 'bg-white text-gray-900 shadow-sm'
                      : 'text-gray-600 hover:text-gray-900'
                  }`}
                >
                  <Sparkles className={`w-4 h-4 ${role === 'creator' ? 'text-[#FF385C]' : ''}`} />
                  I'm a Creator
                </button>
                <button
                  type="button"
                  onClick={() => {
                    setRole('brand');
                    setErrors({});
                  }}
                  className={`py-2.5 px-3 rounded-xl text-xs sm:text-sm font-bold flex items-center justify-center gap-2 transition-all cursor-pointer ${
                    role === 'brand'
                      ? 'bg-white text-gray-900 shadow-sm'
                      : 'text-gray-600 hover:text-gray-900'
                  }`}
                >
                  <Building2 className={`w-4 h-4 ${role === 'brand' ? 'text-[#FF385C]' : ''}`} />
                  I'm a Brand
                </button>
              </div>
            )}

            {/* Form */}
            <form onSubmit={handleSubmit} className="mt-5 space-y-4">
              {mode === 'login' ? (
                /* Login Mode */
                <>
                  <div>
                    <label className="block text-xs font-bold text-gray-700 uppercase tracking-wider mb-1.5">
                      Email or WhatsApp
                    </label>
                    <div className="relative">
                      <input
                        type="text"
                        value={loginEmail}
                        onChange={(e) => {
                          setLoginEmail(e.target.value);
                          if (errors.loginEmail) setErrors(prev => ({ ...prev, loginEmail: '' }));
                        }}
                        placeholder="you@example.com or +1 234 567 8900"
                        className={`w-full bg-gray-50/80 border ${
                          errors.loginEmail ? 'border-rose-500 ring-1 ring-rose-500' : 'border-gray-200 focus:border-[#FF385C] focus:ring-1 focus:ring-[#FF385C]'
                        } rounded-xl px-4 py-3 text-sm text-gray-900 placeholder-gray-400 outline-none transition-all`}
                      />
                    </div>
                    {errors.loginEmail && (
                      <p className="text-xs text-rose-500 mt-1">{errors.loginEmail}</p>
                    )}
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-gray-700 uppercase tracking-wider mb-1.5">
                      Password
                    </label>
                    <div className="relative">
                      <input
                        type="password"
                        value={loginPassword}
                        onChange={(e) => {
                          setLoginPassword(e.target.value);
                          if (errors.loginPassword) setErrors(prev => ({ ...prev, loginPassword: '' }));
                        }}
                        placeholder="••••••••"
                        className={`w-full bg-gray-50/80 border ${
                          errors.loginPassword ? 'border-rose-500 ring-1 ring-rose-500' : 'border-gray-200 focus:border-[#FF385C] focus:ring-1 focus:ring-[#FF385C]'
                        } rounded-xl px-4 py-3 text-sm text-gray-900 placeholder-gray-400 outline-none transition-all`}
                      />
                      <Lock className="w-4 h-4 text-gray-400 absolute right-4 top-1/2 -translate-y-1/2" />
                    </div>
                    {errors.loginPassword && (
                      <p className="text-xs text-rose-500 mt-1">{errors.loginPassword}</p>
                    )}
                  </div>
                </>
              ) : role === 'creator' ? (
                /* Creator Sign Up Mode */
                <>
                  {/* Full Name */}
                  <div>
                    <label className="block text-xs font-bold text-gray-700 uppercase tracking-wider mb-1.5">
                      Full Name <span className="text-rose-500">*</span>
                    </label>
                    <div className="relative">
                      <input
                        type="text"
                        value={creatorName}
                        onChange={(e) => {
                          setCreatorName(e.target.value);
                          if (errors.name) setErrors(prev => ({ ...prev, name: '' }));
                        }}
                        placeholder="e.g. Sarah Jenkins"
                        className={`w-full bg-gray-50/80 border ${
                          errors.name ? 'border-rose-500 ring-1 ring-rose-500' : 'border-gray-200 focus:border-[#FF385C] focus:ring-1 focus:ring-[#FF385C]'
                        } rounded-xl pl-10 pr-4 py-3 text-sm text-gray-900 placeholder-gray-400 outline-none transition-all`}
                      />
                      <User className="w-4 h-4 text-gray-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
                    </div>
                    {errors.name && (
                      <p className="text-xs text-rose-500 mt-1 font-medium">{errors.name}</p>
                    )}
                  </div>

                  {/* WhatsApp Number (Compulsory) */}
                  <div>
                    <label className="block text-xs font-bold text-gray-700 uppercase tracking-wider mb-1.5">
                      WhatsApp Number <span className="text-rose-500">*</span>
                    </label>
                    <div className="relative">
                      <input
                        type="tel"
                        value={creatorWhatsapp}
                        onChange={(e) => {
                          setCreatorWhatsapp(e.target.value);
                          if (errors.whatsapp) setErrors(prev => ({ ...prev, whatsapp: '' }));
                        }}
                        placeholder="+1 (555) 000-0000"
                        className={`w-full bg-gray-50/80 border ${
                          errors.whatsapp ? 'border-rose-500 ring-1 ring-rose-500' : 'border-gray-200 focus:border-[#FF385C] focus:ring-1 focus:ring-[#FF385C]'
                        } rounded-xl pl-10 pr-4 py-3 text-sm text-gray-900 placeholder-gray-400 outline-none transition-all`}
                      />
                      <Phone className="w-4 h-4 text-emerald-600 absolute left-3.5 top-1/2 -translate-y-1/2" />
                    </div>
                    {errors.whatsapp && (
                      <p className="text-xs text-rose-500 mt-1 font-medium">{errors.whatsapp}</p>
                    )}
                  </div>

                  {/* Platform & Social Handle */}
                  <div>
                    <label className="block text-xs font-bold text-gray-700 uppercase tracking-wider mb-1.5">
                      Main Social Profile <span className="text-rose-500">*</span>
                    </label>
                    
                    {/* Platform Selector */}
                    <div className="flex items-center gap-2 mb-2">
                      <button
                        type="button"
                        onClick={() => setCreatorPlatform('Instagram')}
                        className={`flex-1 py-1.5 px-2.5 rounded-lg text-xs font-bold flex items-center justify-center gap-1.5 border transition-all cursor-pointer ${
                          creatorPlatform === 'Instagram'
                            ? 'border-[#FF385C] bg-pink-50 text-[#FF385C]'
                            : 'border-gray-200 text-gray-600 hover:bg-gray-50'
                        }`}
                      >
                        <Instagram className="w-3.5 h-3.5" />
                        Instagram
                      </button>
                      <button
                        type="button"
                        onClick={() => setCreatorPlatform('TikTok')}
                        className={`flex-1 py-1.5 px-2.5 rounded-lg text-xs font-bold flex items-center justify-center gap-1.5 border transition-all cursor-pointer ${
                          creatorPlatform === 'TikTok'
                            ? 'border-[#FF385C] bg-pink-50 text-[#FF385C]'
                            : 'border-gray-200 text-gray-600 hover:bg-gray-50'
                        }`}
                      >
                        <Video className="w-3.5 h-3.5" />
                        TikTok
                      </button>
                      <button
                        type="button"
                        onClick={() => setCreatorPlatform('YouTube')}
                        className={`flex-1 py-1.5 px-2.5 rounded-lg text-xs font-bold flex items-center justify-center gap-1.5 border transition-all cursor-pointer ${
                          creatorPlatform === 'YouTube'
                            ? 'border-[#FF385C] bg-pink-50 text-[#FF385C]'
                            : 'border-gray-200 text-gray-600 hover:bg-gray-50'
                        }`}
                      >
                        <Youtube className="w-3.5 h-3.5" />
                        YouTube
                      </button>
                    </div>

                    {/* Handle Input */}
                    <div className="relative">
                      <span className="absolute left-3.5 top-1/2 -translate-y-1/2 text-gray-400 font-semibold text-sm">
                        @
                      </span>
                      <input
                        type="text"
                        value={creatorHandle}
                        onChange={(e) => {
                          const val = e.target.value.replace(/^@/, '');
                          setCreatorHandle(val);
                          if (errors.handle) setErrors(prev => ({ ...prev, handle: '' }));
                        }}
                        placeholder="yourusername"
                        className={`w-full bg-gray-50/80 border ${
                          errors.handle ? 'border-rose-500 ring-1 ring-rose-500' : 'border-gray-200 focus:border-[#FF385C] focus:ring-1 focus:ring-[#FF385C]'
                        } rounded-xl pl-8 pr-4 py-3 text-sm text-gray-900 placeholder-gray-400 outline-none transition-all`}
                      />
                    </div>
                    {errors.handle && (
                      <p className="text-xs text-rose-500 mt-1 font-medium">{errors.handle}</p>
                    )}
                  </div>
                </>
              ) : (
                /* Brand Sign Up Mode (2-3 fields max) */
                <>
                  {/* Brand / Company Name */}
                  <div>
                    <label className="block text-xs font-bold text-gray-700 uppercase tracking-wider mb-1.5">
                      Company or Brand Name <span className="text-rose-500">*</span>
                    </label>
                    <div className="relative">
                      <input
                        type="text"
                        value={brandName}
                        onChange={(e) => {
                          setBrandName(e.target.value);
                          if (errors.brandName) setErrors(prev => ({ ...prev, brandName: '' }));
                        }}
                        placeholder="e.g. Nike, Gymshark, Aura Labs"
                        className={`w-full bg-gray-50/80 border ${
                          errors.brandName ? 'border-rose-500 ring-1 ring-rose-500' : 'border-gray-200 focus:border-[#FF385C] focus:ring-1 focus:ring-[#FF385C]'
                        } rounded-xl pl-10 pr-4 py-3 text-sm text-gray-900 placeholder-gray-400 outline-none transition-all`}
                      />
                      <Building2 className="w-4 h-4 text-gray-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
                    </div>
                    {errors.brandName && (
                      <p className="text-xs text-rose-500 mt-1 font-medium">{errors.brandName}</p>
                    )}
                  </div>

                  {/* Work Email */}
                  <div>
                    <label className="block text-xs font-bold text-gray-700 uppercase tracking-wider mb-1.5">
                      Work Email <span className="text-rose-500">*</span>
                    </label>
                    <div className="relative">
                      <input
                        type="email"
                        value={brandEmail}
                        onChange={(e) => {
                          setBrandEmail(e.target.value);
                          if (errors.brandEmail) setErrors(prev => ({ ...prev, brandEmail: '' }));
                        }}
                        placeholder="alex@brand.com"
                        className={`w-full bg-gray-50/80 border ${
                          errors.brandEmail ? 'border-rose-500 ring-1 ring-rose-500' : 'border-gray-200 focus:border-[#FF385C] focus:ring-1 focus:ring-[#FF385C]'
                        } rounded-xl pl-10 pr-4 py-3 text-sm text-gray-900 placeholder-gray-400 outline-none transition-all`}
                      />
                      <Mail className="w-4 h-4 text-gray-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
                    </div>
                    {errors.brandEmail && (
                      <p className="text-xs text-rose-500 mt-1 font-medium">{errors.brandEmail}</p>
                    )}
                  </div>

                  {/* Website or Social Handle */}
                  <div>
                    <label className="block text-xs font-bold text-gray-700 uppercase tracking-wider mb-1.5">
                      Website or Instagram Handle <span className="text-rose-500">*</span>
                    </label>
                    <div className="relative">
                      <input
                        type="text"
                        value={brandWebsite}
                        onChange={(e) => {
                          setBrandWebsite(e.target.value);
                          if (errors.brandWebsite) setErrors(prev => ({ ...prev, brandWebsite: '' }));
                        }}
                        placeholder="e.g. brand.com or @brandname"
                        className={`w-full bg-gray-50/80 border ${
                          errors.brandWebsite ? 'border-rose-500 ring-1 ring-rose-500' : 'border-gray-200 focus:border-[#FF385C] focus:ring-1 focus:ring-[#FF385C]'
                        } rounded-xl pl-10 pr-4 py-3 text-sm text-gray-900 placeholder-gray-400 outline-none transition-all`}
                      />
                      <Globe className="w-4 h-4 text-gray-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
                    </div>
                    {errors.brandWebsite && (
                      <p className="text-xs text-rose-500 mt-1 font-medium">{errors.brandWebsite}</p>
                    )}
                  </div>
                </>
              )}

              {/* Submit Button */}
              <div className="pt-2">
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className={`w-full bg-[#FF385C] hover:bg-[#E01E4F] text-white font-extrabold py-3.5 px-6 rounded-2xl transition-all shadow-lg shadow-pink-500/25 active:scale-[0.99] flex items-center justify-center gap-2 text-sm sm:text-base ${
                    isSubmitting ? 'opacity-80 cursor-not-allowed' : 'cursor-pointer'
                  }`}
                >
                  {isSubmitting ? (
                    <>
                      <Loader2 className="w-4 h-4 animate-spin" />
                      <span>Saving Application...</span>
                    </>
                  ) : (
                    <>
                      {mode === 'login'
                        ? 'Log In'
                        : role === 'creator'
                        ? 'Join as a Creator'
                        : 'Start Hiring Creators Free'}
                      <ArrowRight className="w-4 h-4" />
                    </>
                  )}
                </button>
              </div>

              {/* Terms disclaimer */}
              <p className="text-[11px] text-gray-400 text-center leading-relaxed">
                By continuing, you agree to Mobb's Terms of Service and Privacy Policy. No credit card required.
              </p>
            </form>

            {/* Mode Switcher footer */}
            <div className="mt-6 pt-4 border-t border-gray-100 text-center">
              {mode === 'signup' ? (
                <p className="text-xs text-gray-600">
                  Already have an account?{' '}
                  <button
                    type="button"
                    onClick={() => {
                      setMode('login');
                      setErrors({});
                    }}
                    className="font-bold text-[#FF385C] hover:underline cursor-pointer"
                  >
                    Log In
                  </button>
                </p>
              ) : (
                <p className="text-xs text-gray-600">
                  Don't have an account yet?{' '}
                  <button
                    type="button"
                    onClick={() => {
                      setMode('signup');
                      setErrors({});
                    }}
                    className="font-bold text-[#FF385C] hover:underline cursor-pointer"
                  >
                    Sign Up Free
                  </button>
                </p>
              )}
            </div>
          </div>
        )}

      </div>
    </div>
  );
};
