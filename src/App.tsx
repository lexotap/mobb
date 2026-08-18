import React, { useState } from 'react';
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
        onNavigate={setCurrentPage}
        onOpenSignUp={handleOpenSignUp}
        onOpenLogin={handleOpenLogin}
      />

      {/* Main Content Area depending on active page */}
      <main>
        {currentPage === 'case-studies' ? (
          <CaseStudiesPage
            onNavigateHome={() => setCurrentPage('home')}
            onNavigateSearch={() => setCurrentPage('search-creators')}
          />
        ) : currentPage === 'for-creators' ? (
          <ForCreatorsPage
            onNavigateHome={() => setCurrentPage('home')}
            onNavigateSearch={() => setCurrentPage('search-creators')}
            onOpenSignUp={handleOpenSignUp}
          />
        ) : currentPage === 'pricing' ? (
          <PricingPage
            onNavigateHome={() => setCurrentPage('home')}
            onNavigateSearch={() => setCurrentPage('search-creators')}
            onNavigateCaseStudies={() => setCurrentPage('case-studies')}
          />
        ) : currentPage === 'affiliate-marketing' ? (
          <AffiliateMarketingPage
            onNavigateHome={() => setCurrentPage('home')}
            onNavigateSearch={() => setCurrentPage('search-creators')}
          />
        ) : currentPage === 'influencer-marketing' ? (
          <InfluencerMarketingPage
            onNavigateHome={() => setCurrentPage('home')}
            onNavigateSearch={() => setCurrentPage('search-creators')}
          />
        ) : currentPage === 'ugc-for-ads' ? (
          <UgcForAdsPage
            onNavigateHome={() => setCurrentPage('home')}
            onNavigateSearch={() => setCurrentPage('search-creators')}
          />
        ) : currentPage === 'founders' ? (
          <FoundersPage
            onNavigateHome={() => setCurrentPage('home')}
            onNavigateSearch={() => setCurrentPage('search-creators')}
          />
        ) : currentPage === 'agencies' ? (
          <AgenciesPage
            onNavigateHome={() => setCurrentPage('home')}
            onNavigateSearch={() => setCurrentPage('search-creators')}
          />
        ) : currentPage === 'marketing-teams' ? (
          <MarketingTeamsPage
            onNavigateHome={() => setCurrentPage('home')}
            onNavigateSearch={() => setCurrentPage('search-creators')}
          />
        ) : currentPage === 'bring-manage-creators' ? (
          <BringManageCreatorsPage
            onNavigateHome={() => setCurrentPage('home')}
            onNavigateSearch={() => setCurrentPage('search-creators')}
          />
        ) : currentPage === 'team-workspace' ? (
          <TeamWorkspacePage
            onNavigateHome={() => setCurrentPage('home')}
            onNavigateSearch={() => setCurrentPage('search-creators')}
          />
        ) : currentPage === 'secure-global-payments' ? (
          <SecureGlobalPaymentsPage
            onNavigateHome={() => setCurrentPage('home')}
            onNavigateSearch={() => setCurrentPage('search-creators')}
          />
        ) : currentPage === 'campaign-briefs' ? (
          <CampaignBriefsPage
            onNavigateHome={() => setCurrentPage('home')}
            onNavigateSearch={() => setCurrentPage('search-creators')}
          />
        ) : currentPage === 'performance-tracking' ? (
          <PerformanceTrackingPage onNavigateHome={() => setCurrentPage('home')} />
        ) : currentPage === 'creator-chat' ? (
          <CreatorChatPage onNavigateHome={() => setCurrentPage('home')} />
        ) : currentPage === 'search-creators' ? (
          <SearchCreatorsPage
            onSelectCreator={handleCardClick}
            onOpenContact={handleOpenContact}
          />
        ) : (
          <>
            <Hero onSelectCreator={handleCardClick} />
            <TrustedBrands />
            <WorkflowSection />
            <StatsSection />
            <PlatformHighlightCard />
            <TimeSavingsCard />
            <WhatBrandsSay />
            <TeamsSection />
            <CtaSection />
          </>
        )}
      </main>

      {/* Footer Section */}
      <Footer />

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
