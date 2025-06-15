
import React from 'react';
import Hero from '../components/Hero';
import MetricsHighlight from '../components/MetricsHighlight';
import ServicesSection from '../components/ServicesSection';
import CaseStudies from '../components/CaseStudies';
import AboutSection from '../components/AboutSection';
import SkillsToolkit from '../components/SkillsToolkit';
import ContactSection from '../components/ContactSection';

const Index = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-blue-50">
      <Hero />
      <MetricsHighlight />
      <ServicesSection />
      <CaseStudies />
      <AboutSection />
      <SkillsToolkit />
      <ContactSection />
    </div>
  );
};

export default Index;
