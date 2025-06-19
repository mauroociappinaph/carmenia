import React, { useState } from 'react';
import Hero from './components/Hero';
import ServicesSection from './components/ServicesSection';
import HowItWorksSection from './components/HowItWorksSection';
import BenefitsSection from './components/BenefitsSection';
import AutomationImpactSection from './components/AutomationImpactSection'; // Added import
import ContactForm from './components/ContactForm';
import Footer from './components/Footer';
// import WhatsAppButton from './components/WhatsAppButton';
// import TelegramButton from './components/TelegramButton';
import { APP_NAME, /* TELEGRAM_BOT_LINK, WHATSAPP_LINK, */ CONTACT_EMAIL, LINKEDIN_PROFILE_URL } from './constants';
import { Analytics } from "@vercel/analytics/react";

const App: React.FC = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const navLinks = [
    { href: '#services', label: 'Servicios' },
    { href: '#how-it-works', label: 'Cómo Trabajamos' },
    { href: '#contact', label: 'Contacto' },
  ];

  return (
    <div className="flex flex-col min-h-screen font-sans">
      <header className="fixed top-0 left-0 right-0 z-50 bg-white/90 backdrop-blur-md shadow-sm">
        <nav className="container mx-auto px-6 py-4 flex justify-between items-center">
          <a href="#" className="text-2xl font-bold text-[#6eb2ed]">
            {APP_NAME}
          </a>
          {/* Desktop Menu */}
          <div className="hidden md:flex space-x-6 items-center">
            {navLinks.map(link => (
              <a key={link.href} href={link.href} className="text-gray-700 hover:text-[#6eb2ed] transition-colors">
                {link.label}
              </a>
            ))}
          </div>
          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              aria-label="Toggle menu"
              className="text-gray-700 hover:text-[#6eb2ed] focus:outline-none"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                {isMobileMenuOpen ? (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7" />
                )}
              </svg>
            </button>
          </div>
        </nav>
        {/* Mobile Menu Dropdown */}
        {isMobileMenuOpen && (
          <div className="md:hidden bg-white shadow-lg absolute top-full left-0 right-0 z-40">
            <div className="flex flex-col space-y-2 px-6 py-4">
              {navLinks.map(link => (
                <a
                  key={link.href}
                  href={link.href}
                  className="text-gray-700 hover:text-[#6eb2ed] transition-colors py-2 block"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  {link.label}
                </a>
              ))}
            </div>
          </div>
        )}
      </header>

      <main className="flex-grow pt-20"> {/* Ensure padding-top accounts for fixed header height */}
        <Hero appName={APP_NAME} /* telegramLink={TELEGRAM_BOT_LINK} */ />
        <ServicesSection />
        <HowItWorksSection />
        <BenefitsSection />
        <AutomationImpactSection /> {/* Added new section */}
        <ContactForm />
      </main>

      <Footer
        appName={APP_NAME}
        contactEmail={CONTACT_EMAIL}
        /* telegramLink={TELEGRAM_BOT_LINK} */
        linkedInUrl={LINKEDIN_PROFILE_URL}
      />
      {/* <WhatsAppButton whatsappLink={WHATSAPP_LINK} />
      <TelegramButton telegramLink={TELEGRAM_BOT_LINK} /> */}
      <Analytics />
    </div>
  );
};

export default App;
