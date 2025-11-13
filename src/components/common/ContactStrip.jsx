import React from 'react';
import { Phone, Mail } from 'lucide-react';
import { Button } from './Button';

export const ContactStrip = () => {
  return (
    <section className="bg-navy text-white py-12">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex flex-col md:flex-row items-center gap-6">
            <a href="tel:+61-XXX-XXX-XXX" className="flex items-center gap-2 hover:text-gold transition">
              <Phone size={24} />
              <span className="text-lg">+61 XXX XXX XXX</span>
            </a>
            <a href="mailto:info@tescaregroup.com.au" className="flex items-center gap-2 hover:text-gold transition">
              <Mail size={24} />
              <span className="text-lg">info@tescaregroup.com.au</span>
            </a>
          </div>
          <Button to="/request-staff" variant="secondary">
            Request Staff
          </Button>
        </div>
      </div>
    </section>
  );
};
