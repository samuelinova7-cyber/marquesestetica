import React, { useState } from 'react';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { PpfVsCeramicComparison } from './components/PpfVsCeramicComparison';
import { ServicesSection } from './components/ServicesSection';
import { BeforeAfterSlider } from './components/BeforeAfterSlider';
import { PortfolioGallery } from './components/PortfolioGallery';
import { QuoteSection } from './components/QuoteSection';
import { StudioFacility } from './components/StudioFacility';
import { TestimonialsSection } from './components/TestimonialsSection';
import { FaqSection } from './components/FaqSection';
import { Footer } from './components/Footer';
import { FloatingWhatsApp } from './components/FloatingWhatsApp';
import { QuoteSimulatorModal } from './components/QuoteSimulatorModal';

export default function App() {
  const [isQuoteModalOpen, setIsQuoteModalOpen] = useState(false);
  const [selectedServiceId, setSelectedServiceId] = useState<string | undefined>();
  const [selectedVehicleName, setSelectedVehicleName] = useState<string | undefined>();

  const handleOpenQuoteModal = (serviceId?: string, vehicleName?: string) => {
    setSelectedServiceId(serviceId);
    setSelectedVehicleName(vehicleName);
    setIsQuoteModalOpen(true);
  };

  const handleCloseQuoteModal = () => {
    setIsQuoteModalOpen(false);
  };

  return (
    <div className="min-h-screen bg-[#080a0e] text-slate-100 flex flex-col selection:bg-[#d4af37]/30 selection:text-white">
      {/* Top Header */}
      <Header onOpenQuoteModal={() => handleOpenQuoteModal()} />

      {/* Main Page Flow */}
      <main className="flex-grow">
        {/* Hero Section */}
        <Hero onOpenQuoteModal={() => handleOpenQuoteModal()} />

        {/* Core Services Bento */}
        <ServicesSection
          onSelectServiceForQuote={(serviceId) => handleOpenQuoteModal(serviceId)}
        />

        {/* PPF vs Ceramic Coating Technical Decision Guide */}
        <PpfVsCeramicComparison
          onSelectServiceForQuote={(serviceId) => handleOpenQuoteModal(serviceId)}
        />

        {/* Interactive Before & After Slider */}
        <BeforeAfterSlider onOpenQuoteModal={() => handleOpenQuoteModal()} />

        {/* Portfolio & Showcase Gallery */}
        <PortfolioGallery
          onSelectVehicleForQuote={(vehicleName) => handleOpenQuoteModal(undefined, vehicleName)}
        />

        {/* Dedicated On-Page Quote Consultation Section with User Image */}
        <QuoteSection onOpenQuoteModal={() => handleOpenQuoteModal()} />

        {/* Studio & Technical Authority */}
        <StudioFacility onOpenQuoteModal={() => handleOpenQuoteModal()} />

        {/* Customer Testimonials & Reviews */}
        <TestimonialsSection />

        {/* Frequently Asked Questions */}
        <FaqSection />
      </main>

      {/* Footer */}
      <Footer onOpenQuoteModal={() => handleOpenQuoteModal()} />

      {/* Floating WhatsApp CTA */}
      <FloatingWhatsApp onOpenQuoteModal={() => handleOpenQuoteModal()} />

      {/* Interactive Quote Simulator Modal */}
      <QuoteSimulatorModal
        isOpen={isQuoteModalOpen}
        onClose={handleCloseQuoteModal}
        initialServiceId={selectedServiceId}
        initialVehicleName={selectedVehicleName}
      />
    </div>
  );
}
