import { useEffect } from 'react';

const SEO = ({
    title = 'TES Care Group - Professional Healthcare Staffing',
    description = 'Reliable aged-care staffing solutions across Australia. Connecting qualified healthcare professionals with facilities that need them. 24/7 availability for emergency staffing needs.',
    keywords = 'aged care staffing, healthcare staffing, nursing staff, care assistants, aged care facilities, healthcare professionals, staffing agency Australia, emergency staffing, temporary staffing, permanent placements',
    image = '/og-image.jpg',
    url = '',
    type = 'website',
}) => {
    const siteUrl = import.meta.env.VITE_SITE_URL || 'https://tescaregroup.com.au';
    const fullUrl = url ? `${siteUrl}${url}` : siteUrl;
    const imageUrl = image.startsWith('http') ? image : `${siteUrl}${image}`;

    useEffect(() => {
        // Update document title
        document.title = title;

        // Update or create meta tags
        const updateMetaTag = (name, content, isProperty = false) => {
            const attribute = isProperty ? 'property' : 'name';
            let element = document.querySelector(`meta[${attribute}="${name}"]`);

            if (!element) {
                element = document.createElement('meta');
                element.setAttribute(attribute, name);
                document.head.appendChild(element);
            }
            element.setAttribute('content', content);
        };

        // Primary Meta Tags
        updateMetaTag('title', title);
        updateMetaTag('description', description);
        updateMetaTag('keywords', keywords);
        updateMetaTag('author', 'TES Care Group');
        updateMetaTag('robots', 'index, follow');
        updateMetaTag('language', 'English');
        updateMetaTag('revisit-after', '7 days');
        updateMetaTag('theme-color', '#002147');

        // Open Graph / Facebook
        updateMetaTag('og:type', type, true);
        updateMetaTag('og:url', fullUrl, true);
        updateMetaTag('og:title', title, true);
        updateMetaTag('og:description', description, true);
        updateMetaTag('og:image', imageUrl, true);
        updateMetaTag('og:site_name', 'TES Care Group', true);
        updateMetaTag('og:locale', 'en_AU', true);

        // Twitter
        updateMetaTag('twitter:card', 'summary_large_image');
        updateMetaTag('twitter:url', fullUrl);
        updateMetaTag('twitter:title', title);
        updateMetaTag('twitter:description', description);
        updateMetaTag('twitter:image', imageUrl);

        // Canonical URL
        let canonical = document.querySelector('link[rel="canonical"]');
        if (!canonical) {
            canonical = document.createElement('link');
            canonical.setAttribute('rel', 'canonical');
            document.head.appendChild(canonical);
        }
        canonical.setAttribute('href', fullUrl);

        // Structured Data
        let structuredData = document.querySelector('script[type="application/ld+json"]');
        if (!structuredData) {
            structuredData = document.createElement('script');
            structuredData.setAttribute('type', 'application/ld+json');
            document.head.appendChild(structuredData);
        }
        structuredData.textContent = JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'Organization',
            name: 'TES Care Group',
            url: siteUrl,
            logo: `${siteUrl}/logo.png`,
            description: description,
            address: {
                '@type': 'PostalAddress',
                addressCountry: 'AU',
                addressRegion: ['VIC', 'QLD', 'NSW'],
            },
            contactPoint: {
                '@type': 'ContactPoint',
                telephone: '+61-XXX-XXX-XXX',
                contactType: 'Customer Service',
                areaServed: 'AU',
                availableLanguage: 'English',
            },
            sameAs: [
                // Add social media links when available
            ],
        });
    }, [title, description, keywords, imageUrl, fullUrl, type, siteUrl]);

    return null;
};

export default SEO;
