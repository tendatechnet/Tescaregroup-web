import React, { useState } from 'react';
import SEO from '../components/common/SEO';
// eslint-disable-next-line no-unused-vars
import { motion } from 'framer-motion';
import { ChevronDown, ChevronUp, Cookie, Settings, Shield, BarChart } from 'lucide-react';

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

export const Cookies = () => {
  const [activeSection, setActiveSection] = useState(0);

  const sections = [
    { id: 1, title: '1. What Are Cookies?', icon: Cookie },
    { id: 2, title: '2. Types of Cookies We Use', icon: Settings },
    { id: 3, title: '3. How We Use Cookies', icon: BarChart },
    { id: 4, title: '4. Third-Party Cookies', icon: Shield },
    { id: 5, title: '5. Managing Your Cookie Preferences', icon: Settings },
    { id: 6, title: '6. Cookie Consent', icon: Cookie },
    { id: 7, title: '7. Updates to This Policy', icon: Shield },
    { id: 8, title: '8. Contact Us', icon: Cookie },
  ];

  const scrollToSection = (index) => {
    const element = document.getElementById(`section-${index + 1}`);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
      setActiveSection(index);
    }
  };

  const cookieTypes = [
    {
      name: 'Essential Cookies',
      description: 'These cookies are strictly necessary for the website to function properly and cannot be disabled.',
      examples: ['Session management', 'Security authentication', 'Load balancing', 'User preferences'],
      duration: 'Session or up to 1 year',
    },
    {
      name: 'Analytics Cookies',
      description: 'These cookies help us understand how visitors interact with our website by collecting anonymous information.',
      examples: ['Page views and navigation', 'Time spent on pages', 'Traffic sources', 'User demographics'],
      duration: 'Up to 2 years',
    },
    {
      name: 'Functional Cookies',
      description: 'These cookies enable enhanced functionality and personalization, such as remembering your preferences.',
      examples: ['Language preferences', 'Region settings', 'Form data', 'User interface preferences'],
      duration: 'Up to 1 year',
    },
    {
      name: 'Marketing Cookies',
      description: 'These cookies are used to deliver relevant advertisements and track campaign effectiveness.',
      examples: ['Ad targeting', 'Campaign tracking', 'Conversion tracking', 'Social media integration'],
      duration: 'Up to 2 years',
    },
  ];

  return (
    <>
      <SEO
        title="Cookie Policy - TES Care Group"
        description="Comprehensive cookie policy explaining how TES Care Group uses cookies and similar technologies on our website."
        url="/cookies"
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
                Cookie Policy
              </h1>
              <p className="text-xl text-white/90 mb-2">
                Last updated: {new Date().toLocaleDateString('en-AU', { year: 'numeric', month: 'long', day: 'numeric' })}
              </p>
              <p className="text-lg text-white/80">
                Learn how we use cookies and similar technologies to enhance your experience
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
                      <Cookie className="text-royal-blue" size={32} />
                      <h2 className="text-3xl font-heading font-bold text-royal-blue">1. What Are Cookies?</h2>
                    </div>
                    <div className="space-y-4 text-gray-700 leading-relaxed">
                      <p>
                        Cookies are small text files that are placed on your device (computer, tablet, or mobile phone) when 
                        you visit a website. They are widely used to make websites work more efficiently and provide information 
                        to website owners.
                      </p>
                      <p>
                        Cookies allow websites to recognize your device and store some information about your preferences or past 
                        actions. This enables websites to remember your settings, improve your user experience, and provide 
                        personalized content.
                      </p>
                      <div className="bg-powder-blue/30 rounded-xl p-6 mt-6">
                        <p className="font-semibold text-royal-blue mb-3">Key Points:</p>
                        <ul className="list-disc list-inside space-y-2 text-sm">
                          <li>Cookies are harmless text files - they cannot contain viruses or malware</li>
                          <li>They can only be read by the website that created them</li>
                          <li>You can control and manage cookies through your browser settings</li>
                          <li>Disabling cookies may affect website functionality</li>
                        </ul>
                      </div>
                    </div>
                  </section>

                  <section id="section-2" className="scroll-mt-24">
                    <div className="flex items-center gap-3 mb-6">
                      <Settings className="text-royal-blue" size={32} />
                      <h2 className="text-3xl font-heading font-bold text-royal-blue">2. Types of Cookies We Use</h2>
                    </div>
                    <div className="space-y-6">
                      {cookieTypes.map((cookie, index) => (
                        <div key={index} className="bg-powder-blue/20 rounded-xl p-6 border border-powder-blue/30">
                          <h3 className="text-xl font-heading font-bold text-royal-blue mb-2">{cookie.name}</h3>
                          <p className="text-gray-700 mb-4">{cookie.description}</p>
                          <div className="grid md:grid-cols-2 gap-4">
                            <div>
                              <p className="font-semibold text-royal-blue text-sm mb-2">Examples:</p>
                              <ul className="list-disc list-inside space-y-1 text-sm text-gray-700">
                                {cookie.examples.map((example, i) => (
                                  <li key={i}>{example}</li>
                                ))}
                              </ul>
                            </div>
                            <div>
                              <p className="font-semibold text-royal-blue text-sm mb-2">Duration:</p>
                              <p className="text-sm text-gray-700">{cookie.duration}</p>
                            </div>
                          </div>
                        </div>
                      ))}
                    </div>
                  </section>

                  <section id="section-3" className="scroll-mt-24">
                    <div className="flex items-center gap-3 mb-6">
                      <BarChart className="text-royal-blue" size={32} />
                      <h2 className="text-3xl font-heading font-bold text-royal-blue">3. How We Use Cookies</h2>
                    </div>
                    <div className="space-y-4 text-gray-700 leading-relaxed">
                      <p className="font-semibold text-royal-blue mb-3">3.1. Website Functionality</p>
                      <p className="mb-4">
                        Essential cookies enable core website functionality, including:
                      </p>
                      <ul className="list-disc list-inside space-y-2 ml-4 mb-6">
                        <li>Maintaining your session while browsing our website</li>
                        <li>Remembering your login status and preferences</li>
                        <li>Ensuring website security and preventing fraud</li>
                        <li>Enabling form submissions and user interactions</li>
                      </ul>

                      <p className="font-semibold text-royal-blue mb-3">3.2. Analytics and Performance</p>
                      <p className="mb-4">
                        Analytics cookies help us understand how visitors use our website:
                      </p>
                      <ul className="list-disc list-inside space-y-2 ml-4 mb-6">
                        <li>Tracking page views and user navigation patterns</li>
                        <li>Measuring website performance and loading times</li>
                        <li>Identifying popular content and areas for improvement</li>
                        <li>Understanding user demographics and behavior</li>
                      </ul>

                      <p className="font-semibold text-royal-blue mb-3">3.3. Personalization</p>
                      <p className="mb-4">
                        Functional cookies enhance your experience by:
                      </p>
                      <ul className="list-disc list-inside space-y-2 ml-4">
                        <li>Remembering your language and region preferences</li>
                        <li>Storing form data to save you time</li>
                        <li>Customizing content based on your interests</li>
                        <li>Providing location-based services</li>
                      </ul>
                    </div>
                  </section>

                  <section id="section-4" className="scroll-mt-24">
                    <div className="flex items-center gap-3 mb-6">
                      <Shield className="text-royal-blue" size={32} />
                      <h2 className="text-3xl font-heading font-bold text-royal-blue">4. Third-Party Cookies</h2>
                    </div>
                    <div className="space-y-4 text-gray-700 leading-relaxed">
                      <p>
                        In addition to our own cookies, we may use various third-party cookies to report usage statistics, 
                        deliver advertisements, and provide enhanced functionality. These third-party cookies are subject to 
                        their respective privacy policies.
                      </p>
                      <div className="bg-powder-blue/30 rounded-xl p-6 mt-4">
                        <p className="font-semibold text-royal-blue mb-3">Third-Party Services We May Use:</p>
                        <ul className="list-disc list-inside space-y-2 text-sm">
                          <li><strong>Google Analytics:</strong> Website analytics and performance tracking</li>
                          <li><strong>Google Tag Manager:</strong> Tag management and tracking</li>
                          <li><strong>Social Media Platforms:</strong> Social sharing and integration features</li>
                          <li><strong>Payment Processors:</strong> Secure payment processing</li>
                          <li><strong>Customer Support Tools:</strong> Live chat and support services</li>
                        </ul>
                        <p className="text-sm mt-4">
                          For more information about how these third parties use cookies, please refer to their respective 
                          privacy policies and cookie policies.
                        </p>
                      </div>
                    </div>
                  </section>

                  <section id="section-5" className="scroll-mt-24">
                    <div className="flex items-center gap-3 mb-6">
                      <Settings className="text-royal-blue" size={32} />
                      <h2 className="text-3xl font-heading font-bold text-royal-blue">5. Managing Your Cookie Preferences</h2>
                    </div>
                    <div className="space-y-6 text-gray-700 leading-relaxed">
                      <p>
                        You have several options for managing cookies on our website:
                      </p>

                      <div>
                        <p className="font-semibold text-royal-blue mb-3">5.1. Browser Settings</p>
                        <p className="mb-4">
                          Most web browsers allow you to control cookies through their settings. You can:
                        </p>
                        <div className="grid md:grid-cols-2 gap-4 mb-4">
                          <div className="bg-powder-blue/20 rounded-xl p-4">
                            <p className="font-semibold text-royal-blue text-sm mb-2">Chrome</p>
                            <p className="text-sm">Settings → Privacy and Security → Cookies and other site data</p>
                          </div>
                          <div className="bg-powder-blue/20 rounded-xl p-4">
                            <p className="font-semibold text-royal-blue text-sm mb-2">Firefox</p>
                            <p className="text-sm">Options → Privacy & Security → Cookies and Site Data</p>
                          </div>
                          <div className="bg-powder-blue/20 rounded-xl p-4">
                            <p className="font-semibold text-royal-blue text-sm mb-2">Safari</p>
                            <p className="text-sm">Preferences → Privacy → Manage Website Data</p>
                          </div>
                          <div className="bg-powder-blue/20 rounded-xl p-4">
                            <p className="font-semibold text-royal-blue text-sm mb-2">Edge</p>
                            <p className="text-sm">Settings → Cookies and site permissions → Cookies and site data</p>
                          </div>
                        </div>
                      </div>

                      <div>
                        <p className="font-semibold text-royal-blue mb-3">5.2. Cookie Consent Banner</p>
                        <p>
                          When you first visit our website, you'll see a cookie consent banner. You can accept all cookies, 
                          reject non-essential cookies, or customize your preferences. Your choices will be remembered for 
                          future visits.
                        </p>
                      </div>

                      <div>
                        <p className="font-semibold text-royal-blue mb-3">5.3. Opt-Out Tools</p>
                        <p className="mb-4">
                          You can opt-out of certain third-party cookies using:
                        </p>
                        <ul className="list-disc list-inside space-y-2 ml-4">
                          <li>Google Analytics Opt-out: <a href="https://tools.google.com/dlpage/gaoptout" target="_blank" rel="noopener noreferrer" className="text-royal-blue hover:underline">tools.google.com/dlpage/gaoptout</a></li>
                          <li>Network Advertising Initiative: <a href="https://www.networkadvertising.org/choices/" target="_blank" rel="noopener noreferrer" className="text-royal-blue hover:underline">www.networkadvertising.org/choices</a></li>
                          <li>Digital Advertising Alliance: <a href="https://www.aboutads.info/choices/" target="_blank" rel="noopener noreferrer" className="text-royal-blue hover:underline">www.aboutads.info/choices</a></li>
                        </ul>
                      </div>

                      <div className="bg-yellow-50 border border-yellow-200 rounded-xl p-6">
                        <p className="font-semibold text-yellow-800 mb-2">⚠️ Important Note:</p>
                        <p className="text-sm text-yellow-800">
                          Disabling certain cookies may impact website functionality. Essential cookies cannot be disabled 
                          as they are necessary for the website to function properly.
                        </p>
                      </div>
                    </div>
                  </section>

                  <section id="section-6" className="scroll-mt-24">
                    <div className="flex items-center gap-3 mb-6">
                      <Cookie className="text-royal-blue" size={32} />
                      <h2 className="text-3xl font-heading font-bold text-royal-blue">6. Cookie Consent</h2>
                    </div>
                    <div className="space-y-4 text-gray-700 leading-relaxed">
                      <p>
                        When you first visit our website, we will ask for your consent to use non-essential cookies. 
                        You can:
                      </p>
                      <ul className="list-disc list-inside space-y-2 ml-4 mb-6">
                        <li><strong>Accept All:</strong> Allow all cookies including analytics and marketing cookies</li>
                        <li><strong>Reject Non-Essential:</strong> Only allow essential cookies required for website functionality</li>
                        <li><strong>Customize:</strong> Choose which types of cookies you want to allow</li>
                      </ul>
                      <p>
                        Your consent preferences are stored in a cookie, so we can remember your choices for future visits. 
                        You can change your preferences at any time by accessing our cookie settings through the cookie banner 
                        or by contacting us.
                      </p>
                      <p>
                        Essential cookies do not require consent as they are necessary for the website to function. However, 
                        we still inform you about their use in this policy.
                      </p>
                    </div>
                  </section>

                  <section id="section-7" className="scroll-mt-24">
                    <div className="flex items-center gap-3 mb-6">
                      <Shield className="text-royal-blue" size={32} />
                      <h2 className="text-3xl font-heading font-bold text-royal-blue">7. Updates to This Policy</h2>
                    </div>
                    <div className="space-y-4 text-gray-700 leading-relaxed">
                      <p>
                        We may update this Cookie Policy from time to time to reflect changes in our practices, technology, 
                        or legal requirements. When we make material changes, we will:
                      </p>
                      <ul className="list-disc list-inside space-y-2 ml-4">
                        <li>Update the "Last updated" date at the top of this policy</li>
                        <li>Notify you through our website or email</li>
                        <li>Request renewed consent if required by law</li>
                      </ul>
                      <p className="mt-4">
                        We encourage you to review this Cookie Policy periodically to stay informed about how we use cookies 
                        and similar technologies.
                      </p>
                    </div>
                  </section>

                  <section id="section-8" className="scroll-mt-24">
                    <div className="flex items-center gap-3 mb-6">
                      <Cookie className="text-royal-blue" size={32} />
                      <h2 className="text-3xl font-heading font-bold text-royal-blue">8. Contact Us</h2>
                    </div>
                    <div className="space-y-4 text-gray-700 leading-relaxed">
                      <p>
                        If you have any questions, concerns, or requests regarding our use of cookies or this Cookie Policy, 
                        please contact us:
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
                        <p>
                          <strong>Subject Line:</strong> Cookie Policy Inquiry
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
