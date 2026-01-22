import { Helmet } from 'react-helmet-async';

const SEO = ({ title, description, keywords, image, url }) => {
    const defaultTitle = "Madhab Mondal | Full Stack Developer";
    const defaultDescription = "Portfolio of Madhab Mondal, a passionate Full Stack Developer specializing in modern web technologies, React, Node.js, and 3D web experiences.";
    const defaultKeywords = "Madhab Mondal, Full Stack Developer, React Developer, Node.js Developer, Web Developer Portfolio, Creative Developer, 3D Web Design, Three.js, Frontend Engineer, Software Engineer, JavaScript Expert, Custom Web App Development, Hire React Developer";
    const defaultImage = "https://madhab-portfolio-2026.netlify.app/preview.png";
    const defaultUrl = "https://madhab-portfolio-2026.netlify.app/";

    return (
        <Helmet>
            {/* Primary Meta Tags */}
            <title>{title ? `${title} | Madhab Mondal` : defaultTitle}</title>
            <meta name="description" content={description || defaultDescription} />
            <meta name="keywords" content={keywords || defaultKeywords} />
            <meta name="author" content="Madhab Mondal" />

            {/* Open Graph / Facebook */}
            <meta property="og:type" content="website" />
            <meta property="og:url" content={url || defaultUrl} />
            <meta property="og:title" content={title || defaultTitle} />
            <meta property="og:description" content={description || defaultDescription} />
            <meta property="og:image" content={image || defaultImage} />

            {/* Twitter */}
            <meta property="twitter:card" content="summary_large_image" />
            <meta property="twitter:url" content={url || defaultUrl} />
            <meta property="twitter:title" content={title || defaultTitle} />
            <meta property="twitter:description" content={description || defaultDescription} />
            <meta property="twitter:image" content={image || defaultImage} />

            {/* Canonical */}
            <link rel="canonical" href={url || defaultUrl} />
        </Helmet>
    );
};

export default SEO;
