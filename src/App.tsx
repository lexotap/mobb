import React, { useState, useEffect } from 'react';
import { Creator } from './types';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { TrustedBrands } from './components/TrustedBrands';
import { WorkflowSection } from './components/WorkflowSection';
import { PlatformHighlightCard } from './components/PlatformHighlightCard';
import { TimeSavingsCard } from './components/TimeSavingsCard';
import { WhatBrandsSay } from './components/WhatBrandsSay';
import { TeamsSection } from './components/TeamsSection';
import { CtaSection } from './components/CtaSection';
import { Footer } from './components/Footer';
import { StatsSection } from './components/StatsSection';
import { CreatorModal } from './components/CreatorModal';
import { ContactModal } from './components/ContactModal';
import { SearchCreatorsPage } from './components/SearchCreatorsPage';
import { CreatorChatPage } from './components/CreatorChatPage';
import { PerformanceTrackingPage } from './components/PerformanceTrackingPage';
import { CampaignBriefsPage } from './components/CampaignBriefsPage';
import { SecureGlobalPaymentsPage } from './components/SecureGlobalPaymentsPage';
import { TeamWorkspacePage } from './components/TeamWorkspacePage';
import { BringManageCreatorsPage } from './components/BringManageCreatorsPage';
import { MarketingTeamsPage } from './components/MarketingTeamsPage';
import { AgenciesPage } from './components/AgenciesPage';
import { FoundersPage } from './components/FoundersPage';
import { UgcForAdsPage } from './components/UgcForAdsPage';
import { InfluencerMarketingPage } from './components/InfluencerMarketingPage';
import { AffiliateMarketingPage } from './components/AffiliateMarketingPage';
import { PricingPage } from './components/PricingPage';
import { ForCreatorsPage } from './components/ForCreatorsPage';
import { CaseStudiesPage } from './components/CaseStudiesPage';
import { SignUpModal } from './components/SignUpModal';

export default function App() {
  const [currentPage, setCurrentPage] = useState<'home' | 'search-creators' | 'creator-chat' | 'performance-tracking' | 'campaign-briefs' | 'secure-global-payments' | 'team-workspace' | 'bring-manage-creators' | 'marketing-teams' | 'agencies' | 'founders' | 'ugc-for-ads' | 'influencer-marketing' | 'affiliate-marketing' | 'pricing' | 'for-creators' | 'case-studies'>('home');
  const [selectedCreator, setSelectedCreator] = useState<Creator | null>(null);
  const [contactCreator, setContactCreator] = useState<Creator | null>(null);
  const [authModal, setAuthModal] = useState<{
    isOpen: boolean;
    role: 'creator' | 'brand';
    mode: 'signup' | 'login';
  }>({
    isOpen: false,
    role: 'creator',
    mode: 'signup',
  });

  // Sync hash routing
  useEffect(() => {
    const handleHashChange = () => {
      const hash = window.location.hash.replace('#', '');
      const validPages = [
        'search-creators', 'creator-chat', 'performance-tracking', 'campaign-briefs',
        'secure-global-payments', 'team-workspace', 'bring-manage-creators', 'marketing-teams',
        'agencies', 'founders', 'ugc-for-ads', 'influencer-marketing', 'affiliate-marketing',
        'pricing', 'for-creators', 'case-studies'
      ];
      if (validPages.includes(hash)) {
        setCurrentPage(hash as any);
      } else if (!hash || hash === 'home') {
        setCurrentPage('home');
      }
    };

    handleHashChange();
    window.addEventListener('hashchange', handleHashChange);
    return () => window.removeEventListener('hashchange', handleHashChange);
  }, []);

  const navigateTo = (page: typeof currentPage) => {
    setCurrentPage(page);
    window.scrollTo({ top: 0, behavior: 'smooth' });
    if (page === 'home') {
      window.history.pushState(null, '', window.location.pathname);
    } else {
      window.history.pushState(null, '', `#${page}`);
    }
  };

  const handleOpenSignUp = (role: 'creator' | 'brand' = 'creator') => {
    setAuthModal({ isOpen: true, role, mode: 'signup' });
  };

  const handleOpenLogin = () => {
    setAuthModal({ isOpen: true, role: 'creator', mode: 'login' });
  };

  const handleCardClick = (creator: Creator) => {
    setSelectedCreator(creator);
  };

  const handleOpenContact = (creator: Creator) => {
    setSelectedCreator(null); // close detail modal if open
    setContactCreator(creator); // open contact form
  };

  return (
    <div className="min-h-screen bg-white text-gray-900 font-sans antialiased selection:bg-[#FF385C] selection:text-white">
      {/* Top Navigation */}
      <Header
        currentPage={currentPage}
        onNavigate={navigateTo}
        onOpenSignUp={handleOpenSignUp}
        onOpenLogin={handleOpenLogin}
      />

      {/* Main Content Area depending on active page */}
      <main>
        {currentPage === 'case-studies' ? (
          <CaseStudiesPage
            onNavigateHome={() => navigateTo('home')}
            onNavigateSearch={() => navigateTo('search-creators')}
          />
        ) : currentPage === 'for-creators' ? (
          <ForCreatorsPage
            onNavigateHome={() => navigateTo('home')}
            onNavigateSearch={() => navigateTo('search-creators')}
            onOpenSignUp={handleOpenSignUp}
          />
        ) : currentPage === 'pricing' ? (
          <PricingPage
            onNavigateHome={() => navigateTo('home')}
            onNavigateSearch={() => navigateTo('search-creators')}
            onNavigateCaseStudies={() => navigateTo('case-studies')}
          />
        ) : currentPage === 'affiliate-marketing' ? (
          <AffiliateMarketingPage
            onNavigateHome={() => navigateTo('home')}
            onNavigateSearch={() => navigateTo('search-creators')}
          />
        ) : currentPage === 'influencer-marketing' ? (
          <InfluencerMarketingPage
            onNavigateHome={() => navigateTo('home')}
            onNavigateSearch={() => navigateTo('search-creators')}
          />
        ) : currentPage === 'ugc-for-ads' ? (
          <UgcForAdsPage
            onNavigateHome={() => navigateTo('home')}
            onNavigateSearch={() => navigateTo('search-creators')}
          />
        ) : currentPage === 'founders' ? (
          <FoundersPage
            onNavigateHome={() => navigateTo('home')}
            onNavigateSearch={() => navigateTo('search-creators')}
          />
        ) : currentPage === 'agencies' ? (
          <AgenciesPage
            onNavigateHome={() => navigateTo('home')}
            onNavigateSearch={() => navigateTo('search-creators')}
          />
        ) : currentPage === 'marketing-teams' ? (
          <MarketingTeamsPage
            onNavigateHome={() => navigateTo('home')}
            onNavigateSearch={() => navigateTo('search-creators')}
          />
        ) : currentPage === 'bring-manage-creators' ? (
          <BringManageCreatorsPage
            onNavigateHome={() => navigateTo('home')}
            onNavigateSearch={() => navigateTo('search-creators')}
          />
        ) : currentPage === 'team-workspace' ? (
          <TeamWorkspacePage
            onNavigateHome={() => navigateTo('home')}
            onNavigateSearch={() => navigateTo('search-creators')}
          />
        ) : currentPage === 'secure-global-payments' ? (
          <SecureGlobalPaymentsPage
            onNavigateHome={() => navigateTo('home')}
            onNavigateSearch={() => navigateTo('search-creators')}
          />
        ) : currentPage === 'campaign-briefs' ? (
          <CampaignBriefsPage
            onNavigateHome={() => navigateTo('home')}
            onNavigateSearch={() => navigateTo('search-creators')}
          />
        ) : currentPage === 'performance-tracking' ? (
          <PerformanceTrackingPage onNavigateHome={() => navigateTo('home')} />
        ) : currentPage === 'creator-chat' ? (
          <CreatorChatPage onNavigateHome={() => navigateTo('home')} />
        ) : currentPage === 'search-creators' ? (
          <SearchCreatorsPage
            onSelectCreator={handleCardClick}
            onOpenContact={handleOpenContact}
          />
        ) : (
          <>
            <Hero onSelectCreator={handleCardClick} onOpenSignUp={handleOpenSignUp} />
            <TrustedBrands />
            <WorkflowSection />
            <StatsSection />
            <PlatformHighlightCard onNavigate={navigateTo} onOpenSignUp={handleOpenSignUp} />
            <TimeSavingsCard />
            <WhatBrandsSay onNavigate={navigateTo} />
            <TeamsSection onNavigate={navigateTo} onOpenSignUp={handleOpenSignUp} />
            <CtaSection onNavigate={navigateTo} />
          </>
        )}
      </main>

      {/* Footer Section */}
      <Footer onNavigate={navigateTo} onOpenSignUp={handleOpenSignUp} />

      {/* Pop-up Modal for Creator Profile Details */}
      <CreatorModal
        creator={selectedCreator}
        onClose={() => setSelectedCreator(null)}
        onContact={handleOpenContact}
      />

      {/* Pop-up Modal for Direct Creator Contact Inquiry */}
      <ContactModal
        creator={contactCreator}
        onClose={() => setContactCreator(null)}
      />

      {/* Pop-up Modal for Creator & Brand Sign Up / Log In */}
      <SignUpModal
        isOpen={authModal.isOpen}
        onClose={() => setAuthModal(prev => ({ ...prev, isOpen: false }))}
        initialRole={authModal.role}
        initialMode={authModal.mode}
      />
    </div>
  );
}
