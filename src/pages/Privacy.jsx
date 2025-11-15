import React, { useState } from 'react';
import SEO from '../components/common/SEO';
// eslint-disable-next-line no-unused-vars
import { motion } from 'framer-motion';
import { ChevronDown, ChevronUp, Shield, Lock, Eye, FileText } from 'lucide-react';

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

export const Privacy = () => {
  const [activeSection, setActiveSection] = useState(0);

  const sections = [
    { id: 1, title: '1. Introduction', icon: FileText },
    { id: 2, title: '2. Information We Collect', icon: Eye },
    { id: 3, title: '3. How We Collect Information', icon: Shield },
    { id: 4, title: '4. How We Use Your Information', icon: Lock },
    { id: 5, title: '5. Information Sharing and Disclosure', icon: FileText },
    { id: 6, title: '6. Data Security', icon: Shield },
    { id: 7, title: '7. Data Retention', icon: Lock },
    { id: 8, title: '8. Your Rights and Choices', icon: Eye },
    { id: 9, title: '9. Children\'s Privacy', icon: Shield },
    { id: 10, title: '10. International Data Transfers', icon: FileText },
    { id: 11, title: '11. Changes to This Policy', icon: Lock },
    { id: 12, title: '12. Contact Us', icon: Shield },
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
        title="Privacy Policy - TES Care Group"
        description="Comprehensive privacy policy explaining how TES Care Group collects, uses, and protects your personal information."
        url="/privacy"
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
                Privacy Policy
              </h1>
              <p className="text-xl text-white/90 mb-2">
                Last updated: {new Date().toLocaleDateString('en-AU', { year: 'numeric', month: 'long', day: 'numeric' })}
              </p>
              <p className="text-lg text-white/80">
                Your privacy is important to us. This policy explains how we collect, use, and protect your information.
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
                      <FileText className="text-royal-blue" size={32} />
                      <h2 className="text-3xl font-heading font-bold text-royal-blue">1. Introduction</h2>
                    </div>
                    <div className="space-y-4 text-gray-700 leading-relaxed">
                      <p>
                        TES Care Group ("we", "us", "our") is committed to protecting your privacy and personal information. 
                        This Privacy Policy explains how we collect, use, disclose, store, and safeguard your personal information 
                        when you interact with our website, mobile applications, or use our healthcare staffing services.
                      </p>
                      <p>
                        We are bound by the Australian Privacy Principles (APPs) contained in the Privacy Act 1988 (Cth) and 
                        other applicable privacy laws. This policy applies to all personal information we collect, whether 
                        collected online, over the phone, in person, or through any other means.
                      </p>
                      <p>
                        By using our Services, you consent to the collection and use of your personal information as described 
                        in this Privacy Policy. If you do not agree with any part of this policy, please do not use our Services 
                        or contact us to discuss your concerns.
                      </p>
                      <div className="bg-powder-blue/30 rounded-xl p-6 mt-6">
                        <p className="font-semibold text-royal-blue mb-2">Key Points:</p>
                        <ul className="list-disc list-inside space-y-1 text-sm">
                          <li>We only collect information necessary to provide our services</li>
                          <li>We do not sell your personal information to third parties</li>
                          <li>You have rights to access, correct, and delete your information</li>
                          <li>We implement strong security measures to protect your data</li>
                        </ul>
                      </div>
                    </div>
                  </section>

                  <section id="section-2" className="scroll-mt-24">
                    <div className="flex items-center gap-3 mb-6">
                      <Eye className="text-royal-blue" size={32} />
                      <h2 className="text-3xl font-heading font-bold text-royal-blue">2. Information We Collect</h2>
                    </div>
                    <div className="space-y-6 text-gray-700 leading-relaxed">
                      <div>
                        <p className="font-semibold text-royal-blue mb-3">2.1. Personal Information</p>
                        <p className="mb-3">We collect the following types of personal information:</p>
                        <div className="grid md:grid-cols-2 gap-4 mb-4">
                          <div className="bg-powder-blue/20 rounded-xl p-4">
                            <p className="font-semibold text-royal-blue mb-2">Identity Information</p>
                            <ul className="list-disc list-inside space-y-1 text-sm">
                              <li>Full name</li>
                              <li>Job title and role</li>
                              <li>Organization/facility name</li>
                              <li>Professional qualifications</li>
                            </ul>
                          </div>
                          <div className="bg-powder-blue/20 rounded-xl p-4">
                            <p className="font-semibold text-royal-blue mb-2">Contact Information</p>
                            <ul className="list-disc list-inside space-y-1 text-sm">
                              <li>Email address</li>
                              <li>Phone number</li>
                              <li>Mailing address</li>
                              <li>Emergency contact details</li>
                            </ul>
                          </div>
                        </div>
                      </div>

                      <div>
                        <p className="font-semibold text-royal-blue mb-3">2.2. Service-Related Information</p>
                        <ul className="list-disc list-inside space-y-2 ml-4">
                          <li>Staffing requirements and preferences</li>
                          <li>Shift schedules and availability</li>
                          <li>Service history and usage patterns</li>
                          <li>Feedback, complaints, and communications</li>
                          <li>Payment and billing information</li>
                          <li>Service agreements and contracts</li>
                        </ul>
                      </div>

                      <div>
                        <p className="font-semibold text-royal-blue mb-3">2.3. Technical Information</p>
                        <p className="mb-3">When you visit our website, we automatically collect:</p>
                        <ul className="list-disc list-inside space-y-2 ml-4">
                          <li>IP address and device information</li>
                          <li>Browser type and version</li>
                          <li>Operating system</li>
                          <li>Pages visited and time spent on pages</li>
                          <li>Referring website addresses</li>
                          <li>Cookies and similar tracking technologies (see our Cookie Policy)</li>
                        </ul>
                      </div>

                      <div>
                        <p className="font-semibold text-royal-blue mb-3">2.4. Sensitive Information</p>
                        <p className="mb-3">
                          In some cases, we may collect sensitive information as defined under the Privacy Act, including:
                        </p>
                        <ul className="list-disc list-inside space-y-2 ml-4">
                          <li>Health information (where relevant to staffing requirements)</li>
                          <li>Professional registration numbers (AHPRA, etc.)</li>
                          <li>Police check and working with children check information</li>
                        </ul>
                        <p className="mt-3">
                          We only collect sensitive information with your consent or as required by law, and we handle it 
                          with the highest level of security and confidentiality.
                        </p>
                      </div>
                    </div>
                  </section>

                  <section id="section-3" className="scroll-mt-24">
                    <div className="flex items-center gap-3 mb-6">
                      <Shield className="text-royal-blue" size={32} />
                      <h2 className="text-3xl font-heading font-bold text-royal-blue">3. How We Collect Information</h2>
                    </div>
                    <div className="space-y-4 text-gray-700 leading-relaxed">
                      <p className="font-semibold text-royal-blue mb-3">3.1. Direct Collection</p>
                      <p className="mb-4">We collect information directly from you when you:</p>
                      <ul className="list-disc list-inside space-y-2 ml-4 mb-6">
                        <li>Submit a staffing request through our website or forms</li>
                        <li>Create an account or register for our services</li>
                        <li>Contact us via phone, email, or in person</li>
                        <li>Complete surveys, feedback forms, or questionnaires</li>
                        <li>Subscribe to our newsletters or marketing communications</li>
                        <li>Participate in promotions or events</li>
                      </ul>

                      <p className="font-semibold text-royal-blue mb-3">3.2. Automatic Collection</p>
                      <p className="mb-4">We automatically collect information through:</p>
                      <ul className="list-disc list-inside space-y-2 ml-4 mb-6">
                        <li>Website cookies and tracking technologies</li>
                        <li>Server logs and analytics tools</li>
                        <li>Mobile application usage data</li>
                        <li>Email open and click tracking</li>
                      </ul>

                      <p className="font-semibold text-royal-blue mb-3">3.3. Third-Party Sources</p>
                      <p className="mb-4">We may receive information from:</p>
                      <ul className="list-disc list-inside space-y-2 ml-4">
                        <li>Professional registration bodies (AHPRA, etc.) for verification purposes</li>
                        <li>Background check providers</li>
                        <li>Payment processors and financial institutions</li>
                        <li>Referral partners and business associates</li>
                        <li>Publicly available sources (where relevant and lawful)</li>
                      </ul>
                    </div>
                  </section>

                  <section id="section-4" className="scroll-mt-24">
                    <div className="flex items-center gap-3 mb-6">
                      <Lock className="text-royal-blue" size={32} />
                      <h2 className="text-3xl font-heading font-bold text-royal-blue">4. How We Use Your Information</h2>
                    </div>
                    <div className="space-y-6 text-gray-700 leading-relaxed">
                      <p className="font-semibold text-royal-blue mb-3">4.1. Service Provision</p>
                      <p className="mb-4">We use your information to:</p>
                      <ul className="list-disc list-inside space-y-2 ml-4 mb-6">
                        <li>Process and fulfill your staffing requests</li>
                        <li>Match qualified healthcare professionals with your facility's needs</li>
                        <li>Communicate with you about your requests, including confirmations, updates, and changes</li>
                        <li>Manage your account and service agreements</li>
                        <li>Process payments and manage billing</li>
                        <li>Provide customer support and respond to inquiries</li>
                        <li>Coordinate staff placements and manage schedules</li>
                      </ul>

                      <p className="font-semibold text-royal-blue mb-3">4.2. Service Improvement</p>
                      <p className="mb-4">We analyze information to:</p>
                      <ul className="list-disc list-inside space-y-2 ml-4 mb-6">
                        <li>Improve our services and user experience</li>
                        <li>Develop new services and features</li>
                        <li>Conduct research and analytics</li>
                        <li>Monitor service quality and performance</li>
                        <li>Identify trends and patterns in staffing needs</li>
                      </ul>

                      <p className="font-semibold text-royal-blue mb-3">4.3. Legal and Compliance</p>
                      <p className="mb-4">We use information to:</p>
                      <ul className="list-disc list-inside space-y-2 ml-4 mb-6">
                        <li>Comply with legal obligations and regulatory requirements</li>
                        <li>Respond to legal processes, court orders, or government requests</li>
                        <li>Protect our rights, property, and safety, as well as those of our clients and staff</li>
                        <li>Investigate and prevent fraud, abuse, or illegal activities</li>
                        <li>Enforce our Terms and Conditions and Service Agreements</li>
                      </ul>

                      <p className="font-semibold text-royal-blue mb-3">4.4. Marketing and Communications</p>
                      <p className="mb-4">With your consent, we may use your information to:</p>
                      <ul className="list-disc list-inside space-y-2 ml-4">
                        <li>Send you newsletters, updates, and promotional materials</li>
                        <li>Inform you about new services, features, or special offers</li>
                        <li>Invite you to participate in surveys or feedback programs</li>
                        <li>Notify you about industry news and relevant information</li>
                      </ul>
                      <p className="mt-4">
                        You can opt-out of marketing communications at any time by clicking the unsubscribe link in our emails 
                        or contacting us directly.
                      </p>
                    </div>
                  </section>

                  <section id="section-5" className="scroll-mt-24">
                    <div className="flex items-center gap-3 mb-6">
                      <FileText className="text-royal-blue" size={32} />
                      <h2 className="text-3xl font-heading font-bold text-royal-blue">5. Information Sharing and Disclosure</h2>
                    </div>
                    <div className="space-y-6 text-gray-700 leading-relaxed">
                      <p className="mb-4">
                        We do not sell, rent, or trade your personal information to third parties for their marketing purposes. 
                        We may share your information in the following circumstances:
                      </p>

                      <div>
                        <p className="font-semibold text-royal-blue mb-3">5.1. Service Providers</p>
                        <p className="mb-3">
                          We may share information with trusted third-party service providers who assist us in operating our 
                          business and providing services, including:
                        </p>
                        <ul className="list-disc list-inside space-y-2 ml-4 mb-4">
                          <li>Payment processors and financial institutions</li>
                          <li>Cloud storage and hosting providers</li>
                          <li>Email and communication service providers</li>
                          <li>Analytics and data analysis services</li>
                          <li>Background check and verification services</li>
                          <li>IT support and maintenance providers</li>
                        </ul>
                        <p>
                          These service providers are contractually obligated to protect your information and use it only for 
                          the purposes we specify.
                        </p>
                      </div>

                      <div>
                        <p className="font-semibold text-royal-blue mb-3">5.2. Healthcare Professionals</p>
                        <p>
                          We may share relevant information with healthcare professionals to facilitate staffing assignments, 
                          including facility details, shift requirements, and necessary qualifications. We only share the 
                          minimum information necessary for the assignment.
                        </p>
                      </div>

                      <div>
                        <p className="font-semibold text-royal-blue mb-3">5.3. Business Transfers</p>
                        <p>
                          In the event of a merger, acquisition, reorganization, or sale of assets, your information may be 
                          transferred to the acquiring entity. We will notify you of any such change in ownership or control.
                        </p>
                      </div>

                      <div>
                        <p className="font-semibold text-royal-blue mb-3">5.4. Legal Requirements</p>
                        <p className="mb-3">We may disclose information when required by law, including:</p>
                        <ul className="list-disc list-inside space-y-2 ml-4">
                          <li>In response to court orders, subpoenas, or legal processes</li>
                          <li>To comply with government regulations and reporting requirements</li>
                          <li>To protect our rights, property, or safety</li>
                          <li>To investigate fraud or security issues</li>
                          <li>To enforce our Terms and Conditions</li>
                        </ul>
                      </div>

                      <div>
                        <p className="font-semibold text-royal-blue mb-3">5.5. With Your Consent</p>
                        <p>
                          We may share information with third parties when you have explicitly consented to such sharing, 
                          such as when you request a referral or participate in a partnership program.
                        </p>
                      </div>
                    </div>
                  </section>

                  <section id="section-6" className="scroll-mt-24">
                    <div className="flex items-center gap-3 mb-6">
                      <Shield className="text-royal-blue" size={32} />
                      <h2 className="text-3xl font-heading font-bold text-royal-blue">6. Data Security</h2>
                    </div>
                    <div className="space-y-4 text-gray-700 leading-relaxed">
                      <p>
                        We implement comprehensive technical and organizational security measures to protect your personal 
                        information from unauthorized access, alteration, disclosure, or destruction. Our security measures include:
                      </p>
                      <div className="grid md:grid-cols-2 gap-4 my-6">
                        <div className="bg-powder-blue/20 rounded-xl p-4">
                          <p className="font-semibold text-royal-blue mb-2">Technical Measures</p>
                          <ul className="list-disc list-inside space-y-1 text-sm">
                            <li>SSL/TLS encryption for data transmission</li>
                            <li>Encrypted data storage</li>
                            <li>Secure servers and databases</li>
                            <li>Regular security audits and updates</li>
                            <li>Firewall and intrusion detection systems</li>
                          </ul>
                        </div>
                        <div className="bg-powder-blue/20 rounded-xl p-4">
                          <p className="font-semibold text-royal-blue mb-2">Organizational Measures</p>
                          <ul className="list-disc list-inside space-y-1 text-sm">
                            <li>Access controls and authentication</li>
                            <li>Staff training on data protection</li>
                            <li>Confidentiality agreements</li>
                            <li>Regular security assessments</li>
                            <li>Incident response procedures</li>
                          </ul>
                        </div>
                      </div>
                      <p>
                        Despite our security measures, no method of transmission over the internet or electronic storage is 
                        100% secure. While we strive to protect your information, we cannot guarantee absolute security.
                      </p>
                      <p className="font-semibold text-royal-blue mt-4">
                        If you become aware of any security breach or unauthorized access, please contact us immediately.
                      </p>
                    </div>
                  </section>

                  <section id="section-7" className="scroll-mt-24">
                    <div className="flex items-center gap-3 mb-6">
                      <Lock className="text-royal-blue" size={32} />
                      <h2 className="text-3xl font-heading font-bold text-royal-blue">7. Data Retention</h2>
                    </div>
                    <div className="space-y-4 text-gray-700 leading-relaxed">
                      <p>
                        We retain your personal information only for as long as necessary to fulfill the purposes outlined in 
                        this Privacy Policy, unless a longer retention period is required or permitted by law.
                      </p>
                      <div className="bg-powder-blue/30 rounded-xl p-6 mt-4">
                        <p className="font-semibold text-royal-blue mb-3">Retention Periods:</p>
                        <ul className="list-disc list-inside space-y-2 text-sm">
                          <li><strong>Active Client Records:</strong> Retained while you have an active account or service agreement</li>
                          <li><strong>Service History:</strong> Retained for 7 years for legal and accounting purposes</li>
                          <li><strong>Marketing Communications:</strong> Retained until you unsubscribe or request deletion</li>
                          <li><strong>Website Analytics:</strong> Retained for up to 26 months</li>
                          <li><strong>Legal Requirements:</strong> Some information may be retained longer if required by law</li>
                        </ul>
                      </div>
                      <p className="mt-4">
                        When information is no longer needed, we securely delete or anonymize it in accordance with our 
                        data retention policies and applicable laws.
                      </p>
                    </div>
                  </section>

                  <section id="section-8" className="scroll-mt-24">
                    <div className="flex items-center gap-3 mb-6">
                      <Eye className="text-royal-blue" size={32} />
                      <h2 className="text-3xl font-heading font-bold text-royal-blue">8. Your Rights and Choices</h2>
                    </div>
                    <div className="space-y-6 text-gray-700 leading-relaxed">
                      <p className="mb-4">
                        Under Australian privacy laws, you have several rights regarding your personal information:
                      </p>

                      <div>
                        <p className="font-semibold text-royal-blue mb-3">8.1. Access Rights</p>
                        <p>
                          You have the right to request access to the personal information we hold about you. We will provide 
                          this information within a reasonable timeframe, typically within 30 days of your request.
                        </p>
                      </div>

                      <div>
                        <p className="font-semibold text-royal-blue mb-3">8.2. Correction Rights</p>
                        <p>
                          You have the right to request correction of any inaccurate, incomplete, or out-of-date personal 
                          information. We will take reasonable steps to correct the information promptly.
                        </p>
                      </div>

                      <div>
                        <p className="font-semibold text-royal-blue mb-3">8.3. Deletion Rights</p>
                        <p className="mb-3">
                          You may request deletion of your personal information, subject to:
                        </p>
                        <ul className="list-disc list-inside space-y-2 ml-4">
                          <li>Our legal obligations to retain certain information</li>
                          <li>Ongoing service agreements or contracts</li>
                          <li>Legitimate business interests</li>
                        </ul>
                      </div>

                      <div>
                        <p className="font-semibold text-royal-blue mb-3">8.4. Opt-Out Rights</p>
                        <p>
                          You can opt-out of marketing communications at any time by:
                        </p>
                        <ul className="list-disc list-inside space-y-2 ml-4 mt-2">
                          <li>Clicking the unsubscribe link in our emails</li>
                          <li>Contacting us directly via email or phone</li>
                          <li>Updating your preferences in your account settings</li>
                        </ul>
                      </div>

                      <div>
                        <p className="font-semibold text-royal-blue mb-3">8.5. Complaint Rights</p>
                        <p>
                          If you believe we have breached the Australian Privacy Principles, you may lodge a complaint with 
                          the Office of the Australian Information Commissioner (OAIC) or contact us directly to resolve the issue.
                        </p>
                      </div>

                      <div className="bg-powder-blue/30 rounded-xl p-6 mt-6">
                        <p className="font-semibold text-royal-blue mb-2">To Exercise Your Rights:</p>
                        <p className="text-sm">
                          Contact us at <a href="mailto:privacy@tescaregroup.com.au" className="text-royal-blue hover:underline">privacy@tescaregroup.com.au</a> or 
                          call <a href="tel:+61-XXX-XXX-XXX" className="text-royal-blue hover:underline">+61 XXX XXX XXX</a>. 
                          We will respond to your request within 30 days.
                        </p>
                      </div>
                    </div>
                  </section>

                  <section id="section-9" className="scroll-mt-24">
                    <div className="flex items-center gap-3 mb-6">
                      <Shield className="text-royal-blue" size={32} />
                      <h2 className="text-3xl font-heading font-bold text-royal-blue">9. Children's Privacy</h2>
                    </div>
                    <div className="space-y-4 text-gray-700 leading-relaxed">
                      <p>
                        Our Services are not directed to individuals under the age of 18. We do not knowingly collect personal 
                        information from children. If you are a parent or guardian and believe your child has provided us with 
                        personal information, please contact us immediately, and we will take steps to delete such information.
                      </p>
                    </div>
                  </section>

                  <section id="section-10" className="scroll-mt-24">
                    <div className="flex items-center gap-3 mb-6">
                      <FileText className="text-royal-blue" size={32} />
                      <h2 className="text-3xl font-heading font-bold text-royal-blue">10. International Data Transfers</h2>
                    </div>
                    <div className="space-y-4 text-gray-700 leading-relaxed">
                      <p>
                        Your personal information is primarily stored and processed in Australia. However, some of our service 
                        providers may be located outside Australia. When we transfer information internationally, we ensure 
                        appropriate safeguards are in place, including:
                      </p>
                      <ul className="list-disc list-inside space-y-2 ml-4">
                        <li>Contractual agreements requiring equivalent data protection standards</li>
                        <li>Compliance with applicable privacy laws</li>
                        <li>Use of secure data transfer mechanisms</li>
                        <li>Regular security assessments of international service providers</li>
                      </ul>
                    </div>
                  </section>

                  <section id="section-11" className="scroll-mt-24">
                    <div className="flex items-center gap-3 mb-6">
                      <Lock className="text-royal-blue" size={32} />
                      <h2 className="text-3xl font-heading font-bold text-royal-blue">11. Changes to This Policy</h2>
                    </div>
                    <div className="space-y-4 text-gray-700 leading-relaxed">
                      <p>
                        We may update this Privacy Policy from time to time to reflect changes in our practices, technology, 
                        legal requirements, or for other reasons. We will notify you of any material changes by:
                      </p>
                      <ul className="list-disc list-inside space-y-2 ml-4">
                        <li>Posting the updated policy on our website with a new "Last updated" date</li>
                        <li>Sending an email notification to registered users</li>
                        <li>Displaying a prominent notice on our website</li>
                      </ul>
                      <p className="mt-4">
                        Your continued use of our Services after such changes constitutes acceptance of the updated Privacy Policy. 
                        We encourage you to review this policy periodically to stay informed about how we protect your information.
                      </p>
                    </div>
                  </section>

                  <section id="section-12" className="scroll-mt-24">
                    <div className="flex items-center gap-3 mb-6">
                      <Shield className="text-royal-blue" size={32} />
                      <h2 className="text-3xl font-heading font-bold text-royal-blue">12. Contact Us</h2>
                    </div>
                    <div className="space-y-4 text-gray-700 leading-relaxed">
                      <p>
                        If you have any questions, concerns, or requests regarding this Privacy Policy or our privacy practices, 
                        please contact us:
                      </p>
                      <div className="bg-powder-blue/30 rounded-xl p-6 mt-6">
                        <p className="font-semibold text-royal-blue mb-4">TES Care Group - Privacy Officer</p>
                        <p className="mb-2">
                          <strong>Email:</strong>{' '}
                          <a href="mailto:privacy@tescaregroup.com.au" className="text-royal-blue hover:underline">
                            privacy@tescaregroup.com.au
                          </a>
                        </p>
                        <p className="mb-2">
                          <strong>Phone:</strong>{' '}
                          <a href="tel:+61-XXX-XXX-XXX" className="text-royal-blue hover:underline">
                            +61 XXX XXX XXX
                          </a>
                        </p>
                        <p className="mb-2">
                          <strong>Mail:</strong> [Address to be provided]
                        </p>
                        <p className="mt-4 text-sm">
                          <strong>Office of the Australian Information Commissioner (OAIC):</strong><br />
                          Website: <a href="https://www.oaic.gov.au" target="_blank" rel="noopener noreferrer" className="text-royal-blue hover:underline">www.oaic.gov.au</a><br />
                          Phone: 1300 363 992
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
