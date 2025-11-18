import React, { useState } from 'react';
import SEO from '../components/common/SEO';
// eslint-disable-next-line no-unused-vars
import { motion } from 'framer-motion';
import { ChevronDown, ChevronUp, AlertTriangle, Shield, FileText, Info } from 'lucide-react';

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
                className={`block py-2 px-3 rounded-lg text-sm transition-colors ${
                  activeSection === index
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

export const Disclaimer = () => {
  const [activeSection, setActiveSection] = useState(0);

  const sections = [
    { id: 1, title: '1. General Information', icon: Info },
    { id: 2, title: '2. No Medical or Professional Advice', icon: AlertTriangle },
    { id: 3, title: '3. Service Availability and Accuracy', icon: Shield },
    { id: 4, title: '4. Staff Qualifications and Suitability', icon: FileText },
    { id: 5, title: '5. Third-Party Content and Links', icon: Info },
    { id: 6, title: '6. Limitation of Liability', icon: Shield },
    { id: 7, title: '7. No Warranties', icon: AlertTriangle },
    { id: 8, title: '8. Client Responsibilities', icon: FileText },
    { id: 9, title: '9. Force Majeure', icon: Shield },
    { id: 10, title: '10. Changes to Services', icon: Info },
    { id: 11, title: '11. Jurisdiction and Governing Law', icon: FileText },
    { id: 12, title: '12. Contact Information', icon: Info },
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
        title="Disclaimer - TES Care Group"
        description="Disclaimer for TES Care Group's healthcare staffing services and website usage."
        url="/disclaimer"
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
                Disclaimer
              </h1>
              <p className="text-xl text-white/90 mb-2">
                Last updated: {new Date().toLocaleDateString('en-AU', { year: 'numeric', month: 'long', day: 'numeric' })}
              </p>
              <p className="text-lg text-white/80">
                Important information about the use of our services and website
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
                    <div className="flex items-center gap-3 mb-6">
                      <Info className="text-royal-blue" size={32} />
                      <h2 className="text-3xl font-heading font-bold text-royal-blue">1. General Information</h2>
                    </div>
                    <div className="space-y-4 text-gray-700 leading-relaxed">
                      <p>
                        The information contained on the TES Care Group website, mobile applications, and in our service 
                        communications (collectively, the "Services") is provided on an "as is" and "as available" basis. 
                        While TES Care Group strives to ensure the accuracy, completeness, and currency of information, we 
                        make no representations or warranties of any kind, express or implied, about the completeness, accuracy, 
                        reliability, suitability, or availability of the information, products, services, or related graphics 
                        contained on our Services.
                      </p>
                      <p>
                        Any reliance you place on such information is strictly at your own risk. TES Care Group will not be 
                        liable for any loss or damage, including without limitation, indirect or consequential loss or damage, 
                        or any loss or damage whatsoever arising from loss of data or profits, arising out of, or in connection 
                        with, the use of our Services.
                      </p>
                      <div className="bg-powder-blue/30 rounded-xl p-6 mt-6">
                        <p className="font-semibold text-royal-blue mb-2">Important Notice:</p>
                        <p className="text-sm">
                          This disclaimer applies to all information, services, and content provided by TES Care Group. 
                          By using our Services, you acknowledge that you have read, understood, and agree to be bound by 
                          this Disclaimer.
                        </p>
                      </div>
                    </div>
                  </section>

                  <section id="section-2" className="scroll-mt-24">
                    <div className="flex items-center gap-3 mb-6">
                      <AlertTriangle className="text-royal-blue" size={32} />
                      <h2 className="text-3xl font-heading font-bold text-royal-blue">2. No Medical or Professional Advice</h2>
                    </div>
                    <div className="space-y-4 text-gray-700 leading-relaxed">
                      <p>
                        The information provided through TES Care Group's Services, including but not limited to website 
                        content, service descriptions, staff qualifications, and general information, is for informational 
                        purposes only and does not constitute medical, legal, financial, or professional advice.
                      </p>
                      <div>
                        <p className="font-semibold text-royal-blue mb-3">2.1. Not a Substitute for Professional Judgment</p>
                        <p className="mb-4">
                          Our Services are designed to connect healthcare facilities with qualified staffing professionals. 
                          However:
                        </p>
                        <ul className="list-disc list-inside space-y-2 ml-4 mb-6">
                          <li>We do not provide medical diagnosis, treatment, or clinical decision-making services</li>
                          <li>We do not offer legal, financial, or regulatory compliance advice</li>
                          <li>Information on our website should not be used as a substitute for professional judgment</li>
                          <li>Clients must exercise their own professional judgment in all matters</li>
                        </ul>
                      </div>

                      <div>
                        <p className="font-semibold text-royal-blue mb-3">2.2. Clinical Responsibility</p>
                        <p className="mb-4">
                          While we ensure all staff are qualified and vetted, the ultimate responsibility for:
                        </p>
                        <ul className="list-disc list-inside space-y-2 ml-4 mb-6">
                          <li>Patient care and clinical decisions</li>
                          <li>Facility operations and management</li>
                          <li>Compliance with healthcare regulations and standards</li>
                          <li>Workplace health and safety</li>
                        </ul>
                        <p>
                          Remains with the Client facility and its management. TES Care Group provides staffing services 
                          only and does not assume clinical or operational responsibility for facility operations.
                        </p>
                      </div>

                      <div>
                        <p className="font-semibold text-royal-blue mb-3">2.3. Emergency Situations</p>
                        <p>
                          In emergency or critical situations, you should always seek immediate professional medical assistance 
                          and follow established emergency protocols. Do not rely solely on information from our website or 
                          services in emergency situations.
                        </p>
                      </div>
                    </div>
                  </section>

                  <section id="section-3" className="scroll-mt-24">
                    <div className="flex items-center gap-3 mb-6">
                      <Shield className="text-royal-blue" size={32} />
                      <h2 className="text-3xl font-heading font-bold text-royal-blue">3. Service Availability and Accuracy</h2>
                    </div>
                    <div className="space-y-6 text-gray-700 leading-relaxed">
                      <div>
                        <p className="font-semibold text-royal-blue mb-3">3.1. Service Availability</p>
                        <p className="mb-4">
                          While TES Care Group strives to provide 24/7 staffing support, we cannot guarantee:
                        </p>
                        <ul className="list-disc list-inside space-y-2 ml-4 mb-6">
                          <li>Immediate availability of staff in all circumstances</li>
                          <li>Availability of specific staff members or qualifications at all times</li>
                          <li>Uninterrupted or error-free service delivery</li>
                          <li>Availability in all geographic locations at all times</li>
                          <li>Service availability during extreme circumstances, natural disasters, or force majeure events</li>
                        </ul>
                        <p>
                          Service availability may vary based on demand, location, staff qualifications required, seasonal 
                          factors, public holidays, and other circumstances beyond our reasonable control.
                        </p>
                      </div>

                      <div>
                        <p className="font-semibold text-royal-blue mb-3">3.2. Information Accuracy</p>
                        <p className="mb-4">
                          While we make every effort to ensure the accuracy of information on our website and in our 
                          communications, we cannot guarantee:
                        </p>
                        <ul className="list-disc list-inside space-y-2 ml-4 mb-6">
                          <li>That all information is complete, current, or error-free</li>
                          <li>That website content reflects the most current service offerings or pricing</li>
                          <li>That all staff qualifications and certifications are current at all times</li>
                          <li>That service descriptions fully capture all aspects of our services</li>
                        </ul>
                        <p>
                          Information may be updated, modified, or corrected at any time without notice. We recommend 
                          contacting us directly to confirm current information, pricing, and availability.
                        </p>
                      </div>

                      <div>
                        <p className="font-semibold text-royal-blue mb-3">3.3. Website Functionality</p>
                        <p>
                          We do not warrant that our website will be available at all times, free from errors, viruses, 
                          or other harmful components, or that defects will be corrected. You are responsible for implementing 
                          appropriate security measures and virus protection on your devices.
                        </p>
                      </div>
                    </div>
                  </section>

                  <section id="section-4" className="scroll-mt-24">
                    <div className="flex items-center gap-3 mb-6">
                      <FileText className="text-royal-blue" size={32} />
                      <h2 className="text-3xl font-heading font-bold text-royal-blue">4. Staff Qualifications and Suitability</h2>
                    </div>
                    <div className="space-y-4 text-gray-700 leading-relaxed">
                      <p>
                        TES Care Group conducts comprehensive vetting and qualification checks on all healthcare professionals 
                        provided through our Services. However, we cannot guarantee:
                      </p>
                      <div className="bg-powder-blue/30 rounded-xl p-6 my-6">
                        <p className="font-semibold text-royal-blue mb-3">Our Vetting Process Includes:</p>
                        <ul className="list-disc list-inside space-y-2 text-sm">
                          <li>Verification of professional qualifications and registrations</li>
                          <li>Background checks and police clearances</li>
                          <li>Reference checks from previous employers</li>
                          <li>Assessment of clinical competencies</li>
                          <li>Ongoing compliance monitoring</li>
                        </ul>
                      </div>
                      <p className="font-semibold text-royal-blue mb-3">4.1. No Guarantee of Suitability</p>
                      <p className="mb-4">
                        While we take all reasonable steps to ensure staff qualifications and suitability, we cannot guarantee:
                      </p>
                      <ul className="list-disc list-inside space-y-2 ml-4 mb-6">
                        <li>That staff will be suitable for every specific facility or role</li>
                        <li>That staff will meet all unique facility requirements or preferences</li>
                        <li>That staff performance will meet expectations in all circumstances</li>
                        <li>That staff will be available for extended periods or permanent placement</li>
                        <li>That all certifications and qualifications will remain current indefinitely</li>
                      </ul>

                      <p className="font-semibold text-royal-blue mb-3">4.2. Client Verification</p>
                      <p className="mb-4">
                        Clients are encouraged and may be required to:
                      </p>
                      <ul className="list-disc list-inside space-y-2 ml-4 mb-6">
                        <li>Conduct their own verification of staff qualifications</li>
                        <li>Provide appropriate orientation and training for staff</li>
                        <li>Assess staff suitability for their specific facility and resident needs</li>
                        <li>Monitor staff performance and provide feedback</li>
                        <li>Report any concerns or issues promptly</li>
                      </ul>

                      <p className="font-semibold text-royal-blue mb-3">4.3. Ongoing Monitoring</p>
                      <p>
                        While we conduct ongoing compliance monitoring, the responsibility for day-to-day supervision, 
                        performance management, and ensuring staff meet facility standards remains with the Client. We 
                        encourage open communication and will work with Clients to address any concerns promptly.
                      </p>
                    </div>
                  </section>

                  <section id="section-5" className="scroll-mt-24">
                    <div className="flex items-center gap-3 mb-6">
                      <Info className="text-royal-blue" size={32} />
                      <h2 className="text-3xl font-heading font-bold text-royal-blue">5. Third-Party Content and Links</h2>
                    </div>
                    <div className="space-y-4 text-gray-700 leading-relaxed">
                      <p>
                        Our website and Services may contain links to external websites, resources, or third-party content. 
                        These links are provided for your convenience and information only.
                      </p>
                      <div>
                        <p className="font-semibold text-royal-blue mb-3">5.1. No Endorsement</p>
                        <p className="mb-4">
                          The inclusion of any links does not necessarily imply:
                        </p>
                        <ul className="list-disc list-inside space-y-2 ml-4 mb-6">
                          <li>A recommendation or endorsement of the linked website or its content</li>
                          <li>An affiliation or partnership with the linked website</li>
                          <li>Approval of the views expressed on the linked website</li>
                          <li>Any guarantee of the accuracy or reliability of linked content</li>
                        </ul>
                      </div>

                      <div>
                        <p className="font-semibold text-royal-blue mb-3">5.2. Third-Party Responsibility</p>
                        <p className="mb-4">
                          TES Care Group has no control over:
                        </p>
                        <ul className="list-disc list-inside space-y-2 ml-4 mb-6">
                          <li>The nature, content, and availability of external websites</li>
                          <li>The privacy practices or policies of third-party websites</li>
                          <li>The security of information you provide to third-party websites</li>
                          <li>The accuracy or reliability of third-party content</li>
                        </ul>
                        <p>
                          You access third-party websites at your own risk. We recommend reviewing the privacy policies and 
                          terms of use of any external websites you visit.
                        </p>
                      </div>

                      <div>
                        <p className="font-semibold text-royal-blue mb-3">5.3. Third-Party Services</p>
                        <p>
                          We may use third-party services (such as payment processors, analytics tools, or communication 
                          platforms) to provide our Services. While we select reputable service providers, we are not responsible 
                          for their actions, policies, or practices. Your use of third-party services may be subject to their 
                          own terms and conditions.
                        </p>
                      </div>
                    </div>
                  </section>

                  <section id="section-6" className="scroll-mt-24">
                    <div className="flex items-center gap-3 mb-6">
                      <Shield className="text-royal-blue" size={32} />
                      <h2 className="text-3xl font-heading font-bold text-royal-blue">6. Limitation of Liability</h2>
                    </div>
                    <div className="space-y-6 text-gray-700 leading-relaxed">
                      <p>
                        To the maximum extent permitted by applicable law, TES Care Group, its officers, directors, employees, 
                        agents, and affiliates shall not be liable for any direct, indirect, incidental, special, consequential, 
                        or punitive damages arising from or related to:
                      </p>

                      <div>
                        <p className="font-semibold text-royal-blue mb-3">6.1. Service-Related Claims</p>
                        <ul className="list-disc list-inside space-y-2 ml-4 mb-6">
                          <li>Use or inability to use our Services</li>
                          <li>Unavailability of staff or services</li>
                          <li>Delays in service delivery</li>
                          <li>Errors or omissions in service provision</li>
                          <li>Staff performance or conduct issues</li>
                          <li>Loss of data, profits, or business opportunities</li>
                        </ul>
                      </div>

                      <div>
                        <p className="font-semibold text-royal-blue mb-3">6.2. Website and Technology</p>
                        <ul className="list-disc list-inside space-y-2 ml-4 mb-6">
                          <li>Website downtime, errors, or technical issues</li>
                          <li>Loss or corruption of data</li>
                          <li>Security breaches or unauthorized access</li>
                          <li>Viruses, malware, or other harmful components</li>
                          <li>Incompatibility with your devices or software</li>
                        </ul>
                      </div>

                      <div>
                        <p className="font-semibold text-royal-blue mb-3">6.3. Maximum Liability</p>
                        <p className="mb-4">
                          Our total liability for any claims, whether in contract, tort (including negligence), or otherwise, 
                          shall not exceed:
                        </p>
                        <ul className="list-disc list-inside space-y-2 ml-4 mb-6">
                          <li>The total fees paid by you to TES Care Group in the 12 months preceding the claim, or</li>
                          <li>AU$10,000, whichever is greater</li>
                        </ul>
                      </div>

                      <div>
                        <p className="font-semibold text-royal-blue mb-3">6.4. Australian Consumer Law</p>
                        <p>
                          Nothing in this Disclaimer excludes, restricts, or modifies any rights you may have under the 
                          Australian Consumer Law (ACL) or any other applicable consumer protection legislation. Where the 
                          ACL applies, our liability is limited to the maximum extent permitted by law, including the repair, 
                          replacement, or refund of services where applicable.
                        </p>
                      </div>

                      <div className="bg-yellow-50 border border-yellow-200 rounded-xl p-6 mt-6">
                        <p className="font-semibold text-yellow-800 mb-2">⚠️ Important:</p>
                        <p className="text-sm text-yellow-800">
                          This limitation of liability applies to the fullest extent permitted by law and does not affect 
                          your statutory rights as a consumer under Australian law.
                        </p>
                      </div>
                    </div>
                  </section>

                  <section id="section-7" className="scroll-mt-24">
                    <div className="flex items-center gap-3 mb-6">
                      <AlertTriangle className="text-royal-blue" size={32} />
                      <h2 className="text-3xl font-heading font-bold text-royal-blue">7. No Warranties</h2>
                    </div>
                    <div className="space-y-4 text-gray-700 leading-relaxed">
                      <p>
                        TES Care Group makes no warranties, express or implied, regarding our Services, including but not 
                        limited to:
                      </p>
                      <div className="grid md:grid-cols-2 gap-4 my-6">
                        <div className="bg-powder-blue/20 rounded-xl p-4">
                          <p className="font-semibold text-royal-blue mb-2">Service Warranties</p>
                          <ul className="list-disc list-inside space-y-1 text-sm">
                            <li>Fitness for a particular purpose</li>
                            <li>Merchantability or quality</li>
                            <li>Uninterrupted or error-free service</li>
                            <li>Availability of specific staff</li>
                            <li>Results or outcomes</li>
                          </ul>
                        </div>
                        <div className="bg-powder-blue/20 rounded-xl p-4">
                          <p className="font-semibold text-royal-blue mb-2">Information Warranties</p>
                          <ul className="list-disc list-inside space-y-1 text-sm">
                            <li>Accuracy or completeness</li>
                            <li>Currency or timeliness</li>
                            <li>Reliability or suitability</li>
                            <li>Freedom from errors or omissions</li>
                            <li>Non-infringement of rights</li>
                          </ul>
                        </div>
                      </div>
                      <p>
                        All Services are provided "as is" and "as available" without warranty of any kind. We disclaim all 
                        warranties to the maximum extent permitted by law, except where such warranties cannot be excluded 
                        under the Australian Consumer Law.
                      </p>
                    </div>
                  </section>

                  <section id="section-8" className="scroll-mt-24">
                    <div className="flex items-center gap-3 mb-6">
                      <FileText className="text-royal-blue" size={32} />
                      <h2 className="text-3xl font-heading font-bold text-royal-blue">8. Client Responsibilities</h2>
                    </div>
                    <div className="space-y-4 text-gray-700 leading-relaxed">
                      <p>
                        By using our Services, you acknowledge and agree that you are responsible for:
                      </p>
                      <div>
                        <p className="font-semibold text-royal-blue mb-3">8.1. Accurate Information</p>
                        <p className="mb-4">
                          Providing accurate, complete, and current information when:
                        </p>
                        <ul className="list-disc list-inside space-y-2 ml-4 mb-6">
                          <li>Requesting staff or services</li>
                          <li>Creating accounts or profiles</li>
                          <li>Communicating with us</li>
                          <li>Completing forms or documentation</li>
                        </ul>
                        <p>
                          You are responsible for ensuring all information you provide is accurate and kept up to date. 
                          Inaccurate information may affect service delivery and our ability to meet your needs.
                        </p>
                      </div>

                      <div>
                        <p className="font-semibold text-royal-blue mb-3">8.2. Facility Operations</p>
                        <p className="mb-4">
                          Maintaining appropriate:
                        </p>
                        <ul className="list-disc list-inside space-y-2 ml-4 mb-6">
                          <li>Workplace health and safety standards</li>
                          <li>Insurance coverage and risk management</li>
                          <li>Facility policies and procedures</li>
                          <li>Compliance with healthcare regulations</li>
                          <li>Staff supervision and management</li>
                        </ul>
                      </div>

                      <div>
                        <p className="font-semibold text-royal-blue mb-3">8.3. Use of Services</p>
                        <p className="mb-4">
                          Using our Services:
                        </p>
                        <ul className="list-disc list-inside space-y-2 ml-4">
                          <li>In accordance with applicable laws and regulations</li>
                          <li>In a manner that does not infringe on the rights of others</li>
                          <li>Without attempting to circumvent security measures</li>
                          <li>Without using automated systems to access our Services</li>
                          <li>In compliance with our Terms and Conditions</li>
                        </ul>
                      </div>
                    </div>
                  </section>

                  <section id="section-9" className="scroll-mt-24">
                    <div className="flex items-center gap-3 mb-6">
                      <Shield className="text-royal-blue" size={32} />
                      <h2 className="text-3xl font-heading font-bold text-royal-blue">9. Force Majeure</h2>
                    </div>
                    <div className="space-y-4 text-gray-700 leading-relaxed">
                      <p>
                        TES Care Group shall not be liable for any failure or delay in performance under these Terms or any 
                        Service Agreement resulting from circumstances beyond our reasonable control, including but not limited to:
                      </p>
                      <div className="grid md:grid-cols-2 gap-4 my-6">
                        <div className="bg-powder-blue/20 rounded-xl p-4">
                          <p className="font-semibold text-royal-blue mb-2">Natural Events</p>
                          <ul className="list-disc list-inside space-y-1 text-sm">
                            <li>Natural disasters (floods, fires, earthquakes)</li>
                            <li>Extreme weather conditions</li>
                            <li>Pandemics or health emergencies</li>
                            <li>Acts of God</li>
                          </ul>
                        </div>
                        <div className="bg-powder-blue/20 rounded-xl p-4">
                          <p className="font-semibold text-royal-blue mb-2">Human Events</p>
                          <ul className="list-disc list-inside space-y-1 text-sm">
                            <li>War, terrorism, or civil unrest</li>
                            <li>Government actions or regulations</li>
                            <li>Labor strikes or disputes</li>
                            <li>Transportation disruptions</li>
                          </ul>
                        </div>
                        <div className="bg-powder-blue/20 rounded-xl p-4">
                          <p className="font-semibold text-royal-blue mb-2">Technical Events</p>
                          <ul className="list-disc list-inside space-y-1 text-sm">
                            <li>Internet or telecommunications failures</li>
                            <li>Cyber attacks or security breaches</li>
                            <li>System failures or malfunctions</li>
                            <li>Third-party service disruptions</li>
                          </ul>
                        </div>
                        <div className="bg-powder-blue/20 rounded-xl p-4">
                          <p className="font-semibold text-royal-blue mb-2">Other Events</p>
                          <ul className="list-disc list-inside space-y-1 text-sm">
                            <li>Shortage of qualified staff</li>
                            <li>Unexpected demand surges</li>
                            <li>Regulatory changes</li>
                            <li>Industry-wide disruptions</li>
                          </ul>
                        </div>
                      </div>
                      <p>
                        In the event of force majeure, we will make reasonable efforts to notify you and minimize the impact 
                        on service delivery. We will resume performance as soon as reasonably practicable after the force 
                        majeure event ceases.
                      </p>
                    </div>
                  </section>

                  <section id="section-10" className="scroll-mt-24">
                    <div className="flex items-center gap-3 mb-6">
                      <Info className="text-royal-blue" size={32} />
                      <h2 className="text-3xl font-heading font-bold text-royal-blue">10. Changes to Services</h2>
                    </div>
                    <div className="space-y-4 text-gray-700 leading-relaxed">
                      <p>
                        TES Care Group reserves the right to modify, suspend, or discontinue any aspect of our Services at 
                        any time, with or without notice, including but not limited to:
                      </p>
                      <ul className="list-disc list-inside space-y-2 ml-4 mb-6">
                        <li>Service offerings and features</li>
                        <li>Website content and functionality</li>
                        <li>Pricing and payment terms</li>
                        <li>Service areas and availability</li>
                        <li>Staff qualifications and requirements</li>
                        <li>Terms and conditions</li>
                      </ul>
                      <p>
                        We will make reasonable efforts to notify Clients of material changes, particularly those affecting 
                        existing Service Agreements. However, we are not obligated to provide notice for all changes, and 
                        continued use of our Services after changes constitutes acceptance of the modified Services.
                      </p>
                      <p>
                        We are not liable to you or any third party for any modification, suspension, or discontinuation of 
                        our Services.
                      </p>
                    </div>
                  </section>

                  <section id="section-11" className="scroll-mt-24">
                    <div className="flex items-center gap-3 mb-6">
                      <FileText className="text-royal-blue" size={32} />
                      <h2 className="text-3xl font-heading font-bold text-royal-blue">11. Jurisdiction and Governing Law</h2>
                    </div>
                    <div className="space-y-4 text-gray-700 leading-relaxed">
                      <p>
                        This Disclaimer is governed by and construed in accordance with the laws of Australia, without regard 
                        to its conflict of law provisions.
                      </p>
                      <div>
                        <p className="font-semibold text-royal-blue mb-3">11.1. Australian Jurisdiction</p>
                        <p className="mb-4">
                          Any disputes arising from or related to this Disclaimer or our Services shall be subject to the 
                          exclusive jurisdiction of the courts of Australia, including:
                        </p>
                        <ul className="list-disc list-inside space-y-2 ml-4 mb-6">
                          <li>Federal courts of Australia</li>
                          <li>State and territory courts with appropriate jurisdiction</li>
                          <li>Specialized tribunals where applicable</li>
                        </ul>
                      </div>

                      <div>
                        <p className="font-semibold text-royal-blue mb-3">11.2. Severability</p>
                        <p>
                          If any provision of this Disclaimer is found to be invalid, illegal, or unenforceable by a court 
                          of competent jurisdiction, the remaining provisions shall continue in full force and effect. The 
                          invalid provision shall be modified to the minimum extent necessary to make it valid and enforceable.
                        </p>
                      </div>

                      <div>
                        <p className="font-semibold text-royal-blue mb-3">11.3. Entire Agreement</p>
                        <p>
                          This Disclaimer, together with our Terms and Conditions and Privacy Policy, constitutes the entire 
                          agreement between you and TES Care Group regarding the use of our Services, superseding all prior 
                          agreements and understandings.
                        </p>
                      </div>
                    </div>
                  </section>

                  <section id="section-12" className="scroll-mt-24">
                    <div className="flex items-center gap-3 mb-6">
                      <Info className="text-royal-blue" size={32} />
                      <h2 className="text-3xl font-heading font-bold text-royal-blue">12. Contact Information</h2>
                    </div>
                    <div className="space-y-4 text-gray-700 leading-relaxed">
                      <p>
                        If you have any questions, concerns, or require clarification regarding this Disclaimer, please 
                        contact us:
                      </p>
                      <div className="bg-powder-blue/30 rounded-xl p-6 mt-6">
                        <p className="font-semibold text-royal-blue mb-4">TES Care Group</p>
                        <p className="mb-2">
                          <strong>Email:</strong>{' '}
                          <a href="mailto:info@tescaregroup.com.au" className="text-royal-blue hover:underline">
                            info@tescaregroup.com.au
                          </a>
                        </p>
                        <p className="mb-2">
                          <strong>Phone:</strong>{' '}
                          <a href="tel:+61-XXX-XXX-XXX" className="text-royal-blue hover:underline">
                            +61 430 186 328
                          </a>
                        </p>
                        <p className="mb-2">
                          <strong>Business Hours:</strong> 24/7 for emergency staffing requests
                        </p>
                        <p>
                          <strong>Office Hours:</strong> Monday to Friday, 9:00 AM - 5:00 PM AEST
                        </p>
                      </div>
                      <p className="mt-6">
                        For legal or compliance inquiries, please mark your correspondence as "Legal Inquiry" to ensure 
                        prompt attention.
                      </p>
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
