import React from 'react';
import { Phone, Mail } from 'lucide-react';
import { Button } from './Button';

export const ContactStrip = () => {
  return (
    <section className="bg-navy text-white py-12">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center justify-center gap-6">
          <Button to="/request-staff" variant="secondary">
            Request Staff
          </Button>
        </div>
      </div>
    </section>
  );
};
