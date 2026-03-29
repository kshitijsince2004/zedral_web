import { Helmet } from 'react-helmet-async';

interface SEOProps {
  title?: string;
  description?: string;
  keywords?: string;
  image?: string;
  url?: string;
  type?: string;
  author?: string;
  robots?: string;
  // Pass one or more JSON-LD objects; each will be injected as application/ld+json
  jsonLd?: Record<string, unknown> | Record<string, unknown>[];
  article?: {
    publishedTime?: string;
    modifiedTime?: string;
    author?: string;
    section?: string;
    tags?: string[];
  };
}

const SEO = ({
  title = "Zedral: Operational Intelligence for Indian Manufacturing",
  description = "Zedral is an Operational Intelligence platform delivering Operational Intelligence for Indian production floors. Detect bottlenecks, improve OEE, ensure Compliance Management. No new hardware required.",
  keywords = "Operational Intelligence India, Operational Intelligence platform, Production Efficiency software, Bottleneck Detection manufacturing, Industry 4.0 India, OEE improvement, Compliance Management manufacturing, operational intelligence B2B, factory floor intelligence, production performance analysis, manufacturing analytics software India",
  image = "https://zedral.com/og-image.png",
  url = "https://zedral.com",
  type = "website",
  author,
  robots = "index, follow, max-snippet:-1, max-image-preview:large, max-video-preview:-1",
  jsonLd,
  article
}: SEOProps) => {
  const fullTitle = title.includes('Zedral') ? title : `${title} | Zedral`;

  // Ensure og:url always matches the canonical URL
  const canonicalUrl = url;

  return (
    <Helmet>
      {/* Primary Meta Tags */}
      <title>{fullTitle}</title>
      <meta name="title" content={fullTitle} />
      <meta name="description" content={description} />
      <meta name="keywords" content={keywords} />
      <meta name="robots" content={robots} />
      <link rel="canonical" href={canonicalUrl} />
      {author && <meta name="author" content={author} />}

      {/* Hreflang — en-IN + x-default */}
      <link rel="alternate" hrefLang="en-IN" href={canonicalUrl} />
      <link rel="alternate" hrefLang="x-default" href={canonicalUrl} />

      {/* Open Graph / Facebook / LinkedIn */}
      <meta property="og:type" content={type} />
      <meta property="og:url" content={canonicalUrl} />
      <meta property="og:title" content={fullTitle} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={image} />
      <meta property="og:image:secure_url" content={image} />
      <meta property="og:image:type" content="image/png" />
      <meta property="og:image:width" content="1200" />
      <meta property="og:image:height" content="630" />
      <meta property="og:image:alt" content={fullTitle} />
      <meta property="og:locale" content="en_IN" />
      <meta property="og:site_name" content="Zedral" />

      {/* Twitter */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:site" content="@ZedralHQ" />
      <meta name="twitter:creator" content="@ZedralHQ" />
      <meta name="twitter:url" content={canonicalUrl} />
      <meta name="twitter:title" content={fullTitle} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={image} />
      <meta name="twitter:image:alt" content={fullTitle} />

      {/* Article specific meta tags (og:article + LinkedIn publisher) */}
      {article && type === 'article' && (
        <>
          <meta property="article:publisher" content="https://www.linkedin.com/company/zedral" />
          <meta property="og:see_also" content="https://www.instagram.com/zedral.in/" />
          {article.publishedTime && (
            <meta property="article:published_time" content={article.publishedTime} />
          )}
          {article.modifiedTime && (
            <meta property="article:modified_time" content={article.modifiedTime} />
          )}
          {article.author && (
            <meta property="article:author" content={article.author} />
          )}
          {article.section && (
            <meta property="article:section" content={article.section} />
          )}
          {article.tags && article.tags.map((tag) => (
            <meta key={tag} property="article:tag" content={tag} />
          ))}
        </>
      )}

      {/* Arbitrary JSON-LD structured data */}
      {jsonLd && (Array.isArray(jsonLd) ? jsonLd : [jsonLd]).map((schema, i) => (
        <script key={i} type="application/ld+json">
          {JSON.stringify(schema)}
        </script>
      ))}
    </Helmet>
  );
};

export default SEO;
