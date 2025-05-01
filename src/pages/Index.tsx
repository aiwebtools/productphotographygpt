
import React from 'react';
import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import Features from '@/components/Features';
import HowItWorks from '@/components/HowItWorks';
import Testimonials from '@/components/Testimonials';
import Faq from '@/components/Faq';
import Disclaimer from '@/components/Disclaimer';
import Footer from '@/components/Footer';
import ThreeJSBackground from '@/components/ThreeJSBackground';
import ConsentPopup from '@/components/ConsentPopup';

const Index = () => {
  return (
    <div className="min-h-screen bg-cyber-background text-cyber-text">
      <ThreeJSBackground />
      <div className="relative z-10">
        <Navbar />
        <Hero />
        <Features />
        <HowItWorks />
        <Testimonials />
        <Faq />
        <Disclaimer />
      </div>
      <Footer />
      <ConsentPopup />
    </div>
  );
};

export default Index;
