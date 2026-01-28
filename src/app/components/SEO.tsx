import { Helmet } from 'react-helmet-async';

interface SEOProps {
  title?: string;
  description?: string;
  keywords?: string;
  ogImage?: string;
  ogType?: string;
  canonical?: string;
}

const defaultMeta = {
  title: 'PowerPreview - Instant OpenGraph Link Preview API',
  description: 'Fast, reliable OpenGraph API for generating instant link previews. Cache-optimized, developer-friendly, and ready to use.',
  keywords: 'opengraph, link preview, api, metadata, og tags, preview generation, link metadata, social cards',
  ogImage: 'https://powerpreview.netlify.app/og-image.png',
  themeColor: '#843dff',
  siteUrl: 'https://powerpreview.netlify.app',
};

export function SEO({
  title,
  description = defaultMeta.description,
  keywords = defaultMeta.keywords,
  ogImage = defaultMeta.ogImage,
  ogType = 'website',
  canonical,
}: SEOProps) {
  const fullTitle = title ? `${title} | PowerPreview` : defaultMeta.title;
  const url = canonical ? `${defaultMeta.siteUrl}${canonical}` : defaultMeta.siteUrl;

  return (
    <Helmet>
      {/* Primary Meta Tags */}
      <title>{fullTitle}</title>
      <meta name="title" content={fullTitle} />
      <meta name="description" content={description} />
      <meta name="keywords" content={keywords} />
      
      {/* Theme Color */}
      <meta name="theme-color" content={defaultMeta.themeColor} />
      
      {/* Open Graph / Facebook */}
      <meta property="og:type" content={ogType} />
      <meta property="og:url" content={url} />
      <meta property="og:title" content={fullTitle} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={ogImage} />
      <meta property="og:site_name" content="PowerPreview" />
      
      {/* Twitter */}
      <meta property="twitter:card" content="summary_large_image" />
      <meta property="twitter:url" content={url} />
      <meta property="twitter:title" content={fullTitle} />
      <meta property="twitter:description" content={description} />
      <meta property="twitter:image" content={ogImage} />
      
      {/* Canonical URL */}
      {canonical && <link rel="canonical" href={url} />}
    </Helmet>
  );
}