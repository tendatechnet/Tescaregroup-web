import { Helmet } from 'react-helmet-async';

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

    return (
        <Helmet>
            {/* Primary Meta Tags */}
            <title>{title}</title>
            <meta name="title" content={title} />
            <meta name="description" content={description} />
            <meta name="keywords" content={keywords} />
            <meta name="author" content="TES Care Group" />
            <meta name="robots" content="index, follow" />
            <meta name="language" content="English" />
            <meta name="revisit-after" content="7 days" />

            {/* Open Graph / Facebook */}
            <meta property="og:type" content={type} />
            <meta property="og:url" content={fullUrl} />
            <meta property="og:title" content={title} />
            <meta property="og:description" content={description} />
            <meta property="og:image" content={imageUrl} />
            <meta property="og:site_name" content="TES Care Group" />
            <meta property="og:locale" content="en_AU" />

            {/* Twitter */}
            <meta name="twitter:card" content="summary_large_image" />
            <meta name="twitter:url" content={fullUrl} />
            <meta name="twitter:title" content={title} />
            <meta name="twitter:description" content={description} />
            <meta name="twitter:image" content={imageUrl} />

            {/* Additional SEO */}
            <meta name="theme-color" content="#002147" />
            <link rel="canonical" href={fullUrl} />

            {/* Structured Data */}
            <script type="application/ld+json">
                {JSON.stringify({
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
                })}
            </script>
        </Helmet>
    );
};

export default SEO;

