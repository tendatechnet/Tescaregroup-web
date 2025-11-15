import React from 'react';
import SEO from '../components/common/SEO';
import { Hero } from '../components/home/Hero';
import { About } from '../components/home/About';
import { WhyChooseUs } from '../components/home/WhyChooseUs';
import { ServiceHighlights } from '../components/home/ServiceHighlights';
import { Testimonials } from '../components/home/Testimonials';
import { VideoTestimonials } from '../components/home/VideoTestimonials';
import { ContactStrip } from '../components/common/ContactStrip';

export const Home = () => {
  return (
    <>
      <SEO
        title="TES Care Group - Professional Healthcare Staffing"
        description="Reliable aged-care staffing solutions across Australia. Connecting qualified healthcare professionals with facilities that need them. 24/7 availability for emergency staffing needs."
        url="/"
      />
      <div className="min-h-screen">
        <Hero />
        <About />
        <WhyChooseUs />
        <ServiceHighlights />
        {/* <VideoTestimonials /> */}
        <Testimonials />
        <ContactStrip />
      </div>
    </>
  );
};
