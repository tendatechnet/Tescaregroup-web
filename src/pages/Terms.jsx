import React, { useState } from 'react';
import SEO from '../components/common/SEO';
// eslint-disable-next-line no-unused-vars
import { motion } from 'framer-motion';
import { ChevronDown, ChevronUp } from 'lucide-react';

const TableOfContents = ({ sections, activeSection, onSectionClick }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="lg:sticky lg:top-24 h-fit">
      <div className="bg-white rounded-2xl shadow-lg border border-gray-100 p-6">
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="lg:hidden w-full flex items-center justify-between font-heading font-semibold text-royal-blue mb-4"
        >
          <span>Table of Contents</span>
          {isOpen ? <ChevronUp size={20} /> : <ChevronDown size={20} />}
        </button>
        <div className={`${isOpen ? 'block' : 'hidden'} lg:block`}>
          <h3 className="font-heading font-semibold text-gray-900 mb-4 hidden lg:block">Table of Contents</h3>
          <nav className="space-y-2">
            {sections.map((section, index) => (
              <a
                key={index}
                href={`#section-${index + 1}`}
                onClick={(e) => {
                  e.preventDefault();
                  onSectionClick(index);
                  setIsOpen(false);
                }}
                className={`block py-2 px-3 rounded-lg text-sm transition-colors ${activeSection === index
                    ? 'bg-powder-blue text-royal-blue font-medium'
                    : 'text-gray-600 hover:bg-powder-blue/50 hover:text-royal-blue'
                  }`}
              >
                {section.title}
              </a>
            ))}
          </nav>
        </div>
      </div>
    </div>
  );
};

export const Terms = () => {
  const [activeSection, setActiveSection] = useState(0);

  const sections = [
    { id: 1, title: '1. Agreement to Terms' },
    { id: 2, title: '2. Definitions' },
    { id: 3, title: '3. Services Provided' },
    { id: 4, title: '4. Client Obligations and Responsibilities' },
    { id: 5, title: '5. Staff Qualifications and Vetting' },
    { id: 6, title: '6. Payment Terms and Billing' },
    { id: 7, title: '7. Cancellation and Refund Policy' },
    { id: 8, title: '8. Intellectual Property' },
    { id: 9, title: '9. Limitation of Liability' },
    { id: 10, title: '10. Indemnification' },
    { id: 11, title: '11. Confidentiality' },
    { id: 12, title: '12. Dispute Resolution' },
    { id: 13, title: '13. Modifications to Terms' },
    { id: 14, title: '14. Governing Law' },
    { id: 15, title: '15. Contact Information' },
  ];

  const scrollToSection = (index) => {
    const element = document.getElementById(`section-${index + 1}`);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
      setActiveSection(index);
    }
  };

  return (
    <>
      <SEO
        title="Terms & Conditions - TES Care Group"
        description="Comprehensive terms and conditions for using TES Care Group's healthcare staffing services across Australia."
        url="/terms"
      />
      <div className="min-h-screen bg-gradient-to-b from-white via-powder-blue/5 to-white">
        {/* Hero Section */}
        <section className="bg-gradient-to-br from-royal-blue via-royal-blue-dark to-royal-blue-light text-white py-16">
          <div className="container mx-auto px-4 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="max-w-4xl"
            >
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-heading font-bold mb-4">
                Terms & Conditions
              </h1>
              <p className="text-xl text-white/90 mb-2">
                Last updated: {new Date().toLocaleDateString('en-AU', { year: 'numeric', month: 'long', day: 'numeric' })}
              </p>
              <p className="text-lg text-white/80">
                Please read these terms carefully before using our services
              </p>
            </motion.div>
          </div>
        </section>

        {/* Content Section */}
        <section className="py-16">
          <div className="container mx-auto px-4 lg:px-8">
            <div className="grid lg:grid-cols-4 gap-8 max-w-7xl mx-auto">
              {/* Table of Contents */}
              <div className="lg:col-span-1">
                <TableOfContents sections={sections} activeSection={activeSection} onSectionClick={scrollToSection} />
              </div>

              {/* Main Content */}
              <div className="lg:col-span-3">
                <div className="bg-white rounded-2xl shadow-lg border border-gray-100 p-8 lg:p-12 space-y-12">

                  <section id="section-1" className="scroll-mt-24">
                    <h2 className="text-3xl font-heading font-bold text-royal-blue mb-6">1. Agreement to Terms</h2>
                    <div className="space-y-4 text-gray-700 leading-relaxed">
                      <p>
                        By accessing, browsing, or using the TES Care Group website, mobile application, or any of our services
                        (collectively, the "Services"), you acknowledge that you have read, understood, and agree to be bound by
                        these Terms and Conditions ("Terms") and our Privacy Policy.
                      </p>
                      <p>
                        If you do not agree with any part of these Terms, you must not access or use our Services. These Terms
                        constitute a legally binding agreement between you ("Client", "you", or "your") and TES Care Group
                        ("we", "us", or "our").
                      </p>
                      <p>
                        By submitting a staffing request, creating an account, or using any of our Services, you represent and
                        warrant that you have the legal capacity and authority to enter into this agreement on behalf of yourself
                        or your organization.
                      </p>
                    </div>
                  </section>

                  <section id="section-2" className="scroll-mt-24">
                    <h2 className="text-3xl font-heading font-bold text-royal-blue mb-6">2. Definitions</h2>
                    <div className="space-y-4 text-gray-700 leading-relaxed">
                      <div>
                        <p className="font-semibold text-royal-blue mb-2">2.1. "Services"</p>
                        <p>
                          Refers to all healthcare staffing services provided by TES Care Group, including but not limited to
                          temporary staffing, contract staffing, emergency call-outs, specialized care roles, and related
                          administrative and support services.
                        </p>
                      </div>
                      <div>
                        <p className="font-semibold text-royal-blue mb-2">2.2. "Staff" or "Healthcare Professional"</p>
                        <p>
                          Refers to qualified healthcare workers provided by TES Care Group, including registered nurses, enrolled
                          nurses, personal care assistants, support workers, and other healthcare professionals.
                        </p>
                      </div>
                      <div>
                        <p className="font-semibold text-royal-blue mb-2">2.3. "Client" or "Facility"</p>
                        <p>
                          Refers to the aged-care facility, healthcare organization, disability service provider, or other entity
                          that engages TES Care Group's services.
                        </p>
                      </div>
                      <div>
                        <p className="font-semibold text-royal-blue mb-2">2.4. "Service Agreement"</p>
                        <p>
                          Refers to the specific written agreement between TES Care Group and the Client detailing the terms,
                          conditions, and scope of services for a particular engagement.
                        </p>
                      </div>
                    </div>
                  </section>

                  <section id="section-3" className="scroll-mt-24">
                    <h2 className="text-3xl font-heading font-bold text-royal-blue mb-6">3. Services Provided</h2>
                    <div className="space-y-6 text-gray-700 leading-relaxed">
                      <div>
                        <p className="font-semibold text-royal-blue mb-3">3.1. Scope of Services</p>
                        <p className="mb-3">
                          TES Care Group provides comprehensive healthcare staffing solutions across Australia, including:
                        </p>
                        <ul className="list-disc list-inside space-y-2 ml-4">
                          <li><strong>Temporary Staffing:</strong> Short-term staffing solutions to cover roster gaps, sick leave,
                            holidays, and unexpected absences with same-day placement available.</li>
                          <li><strong>Contract Staffing:</strong> Medium to long-term care professionals available on contract to
                            support your facility's ongoing operational needs.</li>
                          <li><strong>Emergency Call-Outs:</strong> 24/7 rapid-response emergency staffing service for last-minute
                            and urgent care needs in high-demand situations.</li>
                          <li><strong>Specialized Care Roles:</strong> Access to registered nurses, enrolled nurses, AINs, support
                            workers, and other specialized healthcare professionals with specific qualifications and certifications.</li>
                        </ul>
                      </div>
                      <div>
                        <p className="font-semibold text-royal-blue mb-3">3.2. Service Areas</p>
                        <p>
                          Our services are available across New South Wales (NSW), Victoria (VIC), Queensland (QLD), Western
                          Australia (WA), and South Australia (SA), including metropolitan, regional, and rural areas.
                        </p>
                      </div>
                      <div>
                        <p className="font-semibold text-royal-blue mb-3">3.3. Service Availability</p>
                        <p>
                          While we strive to provide 24/7 staffing support, availability may vary based on demand, location,
                          staff qualifications required, and other factors. We cannot guarantee immediate availability in all
                          circumstances but will make every reasonable effort to meet your staffing needs.
                        </p>
                      </div>
                    </div>
                  </section>

                  <section id="section-4" className="scroll-mt-24">
                    <h2 className="text-3xl font-heading font-bold text-royal-blue mb-6">4. Client Obligations and Responsibilities</h2>
                    <div className="space-y-4 text-gray-700 leading-relaxed">
                      <p className="font-semibold text-royal-blue mb-3">4.1. Accurate Information</p>
                      <p className="mb-4">
                        You agree to provide accurate, complete, and current information when requesting staff, including but
                        not limited to:
                      </p>
                      <ul className="list-disc list-inside space-y-2 ml-4 mb-6">
                        <li>Facility name, address, and contact details</li>
                        <li>Specific staffing requirements (role, qualifications, certifications needed)</li>
                        <li>Shift dates, times, and duration</li>
                        <li>Number of staff required</li>
                        <li>Any special requirements, policies, or procedures</li>
                        <li>Emergency contact information</li>
                      </ul>

                      <p className="font-semibold text-royal-blue mb-3">4.2. Workplace Safety</p>
                      <p className="mb-4">
                        You are responsible for ensuring a safe working environment for our staff, including:
                      </p>
                      <ul className="list-disc list-inside space-y-2 ml-4 mb-6">
                        <li>Compliance with all relevant workplace health and safety (WHS) regulations and standards</li>
                        <li>Providing necessary facilities, equipment, and resources for staff to perform their duties safely</li>
                        <li>Conducting appropriate workplace inductions and orientation</li>
                        <li>Maintaining adequate insurance coverage</li>
                        <li>Reporting any incidents, accidents, or safety concerns promptly</li>
                      </ul>

                      <p className="font-semibold text-royal-blue mb-3">4.3. Professional Conduct</p>
                      <p>
                        You agree to treat all TES Care Group staff with respect and professionalism. Any concerns regarding staff
                        performance or conduct should be reported to TES Care Group immediately through our designated channels.
                      </p>
                    </div>
                  </section>

                  <section id="section-5" className="scroll-mt-24">
                    <h2 className="text-3xl font-heading font-bold text-royal-blue mb-6">5. Staff Qualifications and Vetting</h2>
                    <div className="space-y-4 text-gray-700 leading-relaxed">
                      <p className="mb-4">
                        TES Care Group is committed to providing qualified, professional healthcare staff. All staff provided
                        through our Services undergo comprehensive vetting processes, including:
                      </p>
                      <ul className="list-disc list-inside space-y-2 ml-4 mb-6">
                        <li>Verification of professional qualifications and registrations (AHPRA registration where applicable)</li>
                        <li>Background checks and police clearances (Working with Children Checks, National Police Checks)</li>
                        <li>Reference checks from previous employers</li>
                        <li>Verification of work rights and visa status (where applicable)</li>
                        <li>Assessment of clinical competencies and experience</li>
                        <li>Ongoing compliance monitoring and professional development</li>
                      </ul>
                      <p>
                        While we take all reasonable steps to ensure staff qualifications and suitability, the ultimate responsibility
                        for patient care and facility operations remains with the Client. Clients should conduct their own verification
                        and orientation processes as appropriate for their facility.
                      </p>
                    </div>
                  </section>

                  <section id="section-6" className="scroll-mt-24">
                    <h2 className="text-3xl font-heading font-bold text-royal-blue mb-6">6. Payment Terms and Billing</h2>
                    <div className="space-y-4 text-gray-700 leading-relaxed">
                      <p className="font-semibold text-royal-blue mb-3">6.1. Service Fees</p>
                      <p className="mb-4">
                        Service fees will be agreed upon in writing before services commence. Fees may vary based on:
                      </p>
                      <ul className="list-disc list-inside space-y-2 ml-4 mb-6">
                        <li>Type of service (temporary, contract, emergency)</li>
                        <li>Staff qualifications and experience level</li>
                        <li>Shift duration and timing (standard hours, evenings, weekends, public holidays)</li>
                        <li>Location and travel requirements</li>
                        <li>Urgency of request</li>
                      </ul>

                      <p className="font-semibold text-royal-blue mb-3">6.2. Invoicing and Payment</p>
                      <p className="mb-4">
                        Invoices will be issued in accordance with the agreed payment schedule, typically:
                      </p>
                      <ul className="list-disc list-inside space-y-2 ml-4 mb-6">
                        <li>Weekly or fortnightly for ongoing services</li>
                        <li>Within 7 days of service completion for one-off assignments</li>
                        <li>As specified in your Service Agreement</li>
                      </ul>
                      <p className="mb-4">
                        Payment terms are typically net 14 or net 30 days from invoice date, as agreed in your Service Agreement.
                        Payment must be made via the methods specified in the invoice.
                      </p>

                      <p className="font-semibold text-royal-blue mb-3">6.3. Late Payment</p>
                      <p className="mb-4">
                        If payment is not received by the due date:
                      </p>
                      <ul className="list-disc list-inside space-y-2 ml-4 mb-6">
                        <li>We may charge interest on overdue amounts at a rate of 1.5% per month (18% per annum)</li>
                        <li>We may suspend or terminate services until payment is received</li>
                        <li>We reserve the right to recover all costs associated with debt collection</li>
                        <li>Legal action may be taken to recover outstanding amounts</li>
                      </ul>

                      <p className="font-semibold text-royal-blue mb-3">6.4. Disputed Invoices</p>
                      <p>
                        If you dispute any invoice, you must notify us in writing within 7 days of the invoice date, specifying
                        the nature of the dispute. We will work with you to resolve the dispute promptly. Undisputed portions of
                        invoices must still be paid by the due date.
                      </p>
                    </div>
                  </section>

                  <section id="section-7" className="scroll-mt-24">
                    <h2 className="text-3xl font-heading font-bold text-royal-blue mb-6">7. Cancellation and Refund Policy</h2>
                    <div className="space-y-4 text-gray-700 leading-relaxed">
                      <p className="font-semibold text-royal-blue mb-3">7.1. Cancellation by Client</p>
                      <p className="mb-4">
                        Cancellation policies vary by service type:
                      </p>
                      <div className="bg-powder-blue/30 rounded-xl p-6 mb-6 space-y-4">
                        <div>
                          <p className="font-semibold text-royal-blue mb-2">Temporary Staffing:</p>
                          <ul className="list-disc list-inside space-y-1 ml-4 text-sm">
                            <li>More than 24 hours notice: No cancellation fee</li>
                            <li>12-24 hours notice: 50% of agreed fee</li>
                            <li>Less than 12 hours notice: 100% of agreed fee</li>
                          </ul>
                        </div>
                        <div>
                          <p className="font-semibold text-royal-blue mb-2">Emergency Call-Outs:</p>
                          <ul className="list-disc list-inside space-y-1 ml-4 text-sm">
                            <li>More than 4 hours notice: 50% of agreed fee</li>
                            <li>Less than 4 hours notice: 100% of agreed fee</li>
                            <li>After staff arrival: 100% of agreed fee plus travel costs</li>
                          </ul>
                        </div>
                        <div>
                          <p className="font-semibold text-royal-blue mb-2">Contract Staffing:</p>
                          <ul className="list-disc list-inside space-y-1 ml-4 text-sm">
                            <li>As specified in individual Service Agreement</li>
                            <li>Typically requires 2-4 weeks written notice</li>
                          </ul>
                        </div>
                      </div>

                      <p className="font-semibold text-royal-blue mb-3">7.2. Cancellation by TES Care Group</p>
                      <p className="mb-4">
                        We reserve the right to cancel or suspend services if:
                      </p>
                      <ul className="list-disc list-inside space-y-2 ml-4 mb-6">
                        <li>Payment is overdue</li>
                        <li>Client breaches these Terms or Service Agreement</li>
                        <li>Safety concerns arise that cannot be resolved</li>
                        <li>Force majeure events occur</li>
                      </ul>
                      <p>
                        We will provide reasonable notice where possible, except in cases of safety concerns or payment default.
                      </p>

                      <p className="font-semibold text-royal-blue mb-3">7.3. Refunds</p>
                      <p>
                        Refunds may be provided at our discretion in cases where services were not delivered as agreed due to
                        circumstances within our control. Refund requests must be submitted in writing within 30 days of the
                        service date.
                      </p>
                    </div>
                  </section>

                  <section id="section-8" className="scroll-mt-24">
                    <h2 className="text-3xl font-heading font-bold text-royal-blue mb-6">8. Intellectual Property</h2>
                    <div className="space-y-4 text-gray-700 leading-relaxed">
                      <p>
                        All content, materials, logos, trademarks, and intellectual property on the TES Care Group website and
                        in our Services are owned by or licensed to TES Care Group and are protected by Australian and international
                        copyright and trademark laws.
                      </p>
                      <p>
                        You may not reproduce, distribute, modify, create derivative works of, publicly display, or use our
                        intellectual property without our prior written consent. This includes but is not limited to our website
                        content, service descriptions, and marketing materials.
                      </p>
                    </div>
                  </section>

                  <section id="section-9" className="scroll-mt-24">
                    <h2 className="text-3xl font-heading font-bold text-royal-blue mb-6">9. Limitation of Liability</h2>
                    <div className="space-y-4 text-gray-700 leading-relaxed">
                      <p className="font-semibold text-royal-blue mb-3">9.1. General Limitation</p>
                      <p className="mb-4">
                        To the maximum extent permitted by law, TES Care Group's total liability for any claims arising from or
                        related to our Services, whether in contract, tort (including negligence), or otherwise, shall not exceed
                        the total fees paid by the Client to TES Care Group in the 12 months preceding the claim.
                      </p>

                      <p className="font-semibold text-royal-blue mb-3">9.2. Excluded Damages</p>
                      <p className="mb-4">
                        TES Care Group shall not be liable for any indirect, consequential, incidental, special, or punitive
                        damages, including but not limited to:
                      </p>
                      <ul className="list-disc list-inside space-y-2 ml-4 mb-6">
                        <li>Loss of profits, revenue, or business opportunities</li>
                        <li>Loss of data or information</li>
                        <li>Loss of goodwill or reputation</li>
                        <li>Costs of substitute services</li>
                        <li>Any other indirect or consequential losses</li>
                      </ul>

                      <p className="font-semibold text-royal-blue mb-3">9.3. Australian Consumer Law</p>
                      <p>
                        Nothing in these Terms excludes, restricts, or modifies any rights you may have under the Australian
                        Consumer Law (ACL) or any other applicable consumer protection legislation. Where the ACL applies, our
                        liability is limited to the maximum extent permitted by law.
                      </p>
                    </div>
                  </section>

                  <section id="section-10" className="scroll-mt-24">
                    <h2 className="text-3xl font-heading font-bold text-royal-blue mb-6">10. Indemnification</h2>
                    <div className="space-y-4 text-gray-700 leading-relaxed">
                      <p>
                        You agree to indemnify, defend, and hold harmless TES Care Group, its officers, directors, employees,
                        agents, and affiliates from and against any and all claims, damages, losses, liabilities, costs, and
                        expenses (including reasonable legal fees) arising from or related to:
                      </p>
                      <ul className="list-disc list-inside space-y-2 ml-4">
                        <li>Your use of our Services</li>
                        <li>Your breach of these Terms or any Service Agreement</li>
                        <li>Your violation of any law or regulation</li>
                        <li>Your negligence or willful misconduct</li>
                        <li>Any claims made by third parties (including our staff) arising from your actions or omissions</li>
                      </ul>
                    </div>
                  </section>

                  <section id="section-11" className="scroll-mt-24">
                    <h2 className="text-3xl font-heading font-bold text-royal-blue mb-6">11. Confidentiality</h2>
                    <div className="space-y-4 text-gray-700 leading-relaxed">
                      <p>
                        Both parties agree to maintain the confidentiality of all proprietary, confidential, or sensitive information
                        disclosed during the course of our business relationship. This includes but is not limited to:
                      </p>
                      <ul className="list-disc list-inside space-y-2 ml-4 mb-6">
                        <li>Business strategies, financial information, and operational details</li>
                        <li>Staff information and personnel records</li>
                        <li>Client information and facility details</li>
                        <li>Pricing and commercial terms</li>
                      </ul>
                      <p>
                        Confidentiality obligations survive termination of these Terms and any Service Agreement. Information may
                        only be disclosed with written consent or as required by law.
                      </p>
                    </div>
                  </section>

                  <section id="section-12" className="scroll-mt-24">
                    <h2 className="text-3xl font-heading font-bold text-royal-blue mb-6">12. Dispute Resolution</h2>
                    <div className="space-y-4 text-gray-700 leading-relaxed">
                      <p className="font-semibold text-royal-blue mb-3">12.1. Good Faith Negotiation</p>
                      <p className="mb-4">
                        In the event of any dispute, controversy, or claim arising out of or relating to these Terms or our
                        Services, the parties agree to first attempt to resolve the matter through good faith negotiation.
                      </p>

                      <p className="font-semibold text-royal-blue mb-3">12.2. Mediation</p>
                      <p className="mb-4">
                        If negotiation fails, the parties agree to submit the dispute to mediation in accordance with the
                        Australian Commercial Disputes Centre (ACDC) Mediation Rules or similar mediation service. Mediation
                        costs will be shared equally unless otherwise agreed.
                      </p>

                      <p className="font-semibold text-royal-blue mb-3">12.3. Legal Proceedings</p>
                      <p>
                        If mediation is unsuccessful, either party may commence legal proceedings. The parties agree that the
                        courts of Australia shall have exclusive jurisdiction over any disputes, and these Terms shall be
                        governed by the laws of Australia.
                      </p>
                    </div>
                  </section>

                  <section id="section-13" className="scroll-mt-24">
                    <h2 className="text-3xl font-heading font-bold text-royal-blue mb-6">13. Modifications to Terms</h2>
                    <div className="space-y-4 text-gray-700 leading-relaxed">
                      <p>
                        TES Care Group reserves the right to modify, update, or change these Terms at any time. Material changes
                        will be communicated to Clients via email or through our website. Continued use of our Services after
                        such modifications constitutes acceptance of the updated Terms.
                      </p>
                      <p>
                        If you do not agree with any modifications, you must discontinue use of our Services and notify us in
                        writing. Your existing Service Agreements will continue to be governed by the Terms in effect at the
                        time the agreement was entered into, unless both parties agree otherwise.
                      </p>
                    </div>
                  </section>

                  <section id="section-14" className="scroll-mt-24">
                    <h2 className="text-3xl font-heading font-bold text-royal-blue mb-6">14. Governing Law</h2>
                    <div className="space-y-4 text-gray-700 leading-relaxed">
                      <p>
                        These Terms are governed by and construed in accordance with the laws of Australia. Any disputes arising
                        from these Terms or our Services shall be subject to the exclusive jurisdiction of the courts of Australia.
                      </p>
                      <p>
                        If any provision of these Terms is found to be invalid, illegal, or unenforceable, the remaining provisions
                        shall continue in full force and effect.
                      </p>
                    </div>
                  </section>

                  <section id="section-15" className="scroll-mt-24">
                    <h2 className="text-3xl font-heading font-bold text-royal-blue mb-6">15. Contact Information</h2>
                    <div className="space-y-4 text-gray-700 leading-relaxed">
                      <p>
                        If you have any questions, concerns, or require clarification regarding these Terms & Conditions, please
                        contact us:
                      </p>
                      <div className="bg-powder-blue/30 rounded-xl p-6 mt-6">
                        <p className="font-semibold text-royal-blue mb-3">TES Care Group</p>
                        <p className="mb-2">
                          <strong>Email:</strong>{' '}
                          <a href="mailto:info@tescaregroup.com.au" className="text-royal-blue hover:underline">
                            info@tescaregroup.com.au
                          </a>
                        </p>
                        <p className="mb-2">
                          <strong>Phone:</strong>{' '}
                          <a href="tel:+61-XXX-XXX-XXX" className="text-royal-blue hover:underline">
                            +61 XXX XXX XXX
                          </a>
                        </p>
                        <p className="mb-2">
                          <strong>Business Hours:</strong> 24/7 for emergency staffing requests
                        </p>
                        <p>
                          <strong>Office Hours:</strong> Monday to Friday, 9:00 AM - 5:00 PM AEST
                        </p>
                      </div>
                    </div>
                  </section>

                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};
