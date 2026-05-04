import { useEffect, useState } from 'react';

import Header from './components/layout/Header.jsx';
import Footer from './components/layout/Footer.jsx';

import Hero from './components/sections/Hero.jsx';
import ServicesMarquee from './components/sections/ServicesMarquee.jsx';
import TrustStrip from './components/sections/TrustStrip.jsx';
import LiveStats from './components/sections/LiveStats.jsx';
import Problem from './components/sections/Problem.jsx';
import Solution from './components/sections/Solution.jsx';
import CustomerSpotlight from './components/sections/CustomerSpotlight.jsx';
import Features from './components/sections/Features.jsx';
import DashboardShowcase from './components/sections/DashboardShowcase.jsx';
import HowItWorks from './components/sections/HowItWorks.jsx';
import ComparisonTable from './components/sections/ComparisonTable.jsx';
import Security from './components/sections/Security.jsx';
import Pricing from './components/sections/Pricing.jsx';
import Roadmap from './components/sections/Roadmap.jsx';
import Testimonials from './components/sections/Testimonials.jsx';
import FAQ from './components/sections/FAQ.jsx';
import FinalCTA from './components/sections/FinalCTA.jsx';
import BottomMarquee from './components/sections/BottomMarquee.jsx';

import ScrollProgress from './components/ui/ScrollProgress.jsx';
import ScrollToTop from './components/ui/ScrollToTop.jsx';
import ChatWidget from './components/ui/ChatWidget.jsx';
import GlobalBackground from './components/ui/GlobalBackground.jsx';
import PrivacyPolicy from './components/legal/PrivacyPolicy.jsx';
import TermsOfService from './components/legal/TermsOfService.jsx';
import RefundPolicy from './components/legal/RefundPolicy.jsx';

export default function App() {
  // Single source of truth for which legal modal is open (or null)
  const [legalModal, setLegalModal] = useState(null);

  useEffect(() => {
    const onOpen = (e) => setLegalModal(e.detail);
    window.addEventListener('legal:open', onOpen);
    return () => window.removeEventListener('legal:open', onOpen);
  }, []);

  return (
    <div className="relative min-h-screen bg-brand-bg">
      <GlobalBackground />
      <ScrollProgress />
      <Header />

      <main className="relative z-10">
        <Hero />
        <ServicesMarquee />
        <TrustStrip />
        <LiveStats />
        <Problem />
        <Solution />
        <CustomerSpotlight />
        <Features />
        <DashboardShowcase />
        <HowItWorks />
        <ComparisonTable />
        <Security />
        <Pricing />
        <Roadmap />
        <Testimonials />
        <FAQ />
        <FinalCTA />
        <BottomMarquee />
      </main>

      <Footer />

      {/* Floating UI */}
      <ChatWidget />
      <ScrollToTop />

      {/* Legal modals (only one renders at a time) */}
      <PrivacyPolicy
        open={legalModal === 'privacy'}
        onClose={() => setLegalModal(null)}
      />
      <TermsOfService
        open={legalModal === 'terms'}
        onClose={() => setLegalModal(null)}
      />
      <RefundPolicy
        open={legalModal === 'refund'}
        onClose={() => setLegalModal(null)}
      />
    </div>
  );
}
