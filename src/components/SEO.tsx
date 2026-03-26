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
  title = "Zedral — Operational Efficiency Intelligence for Modern Industry",
  description = "Zedral is an AI-powered operational intelligence platform that helps manufacturing companies improve efficiency using computer vision on existing cameras — no new hardware required.",
  keywords = "operational efficiency platform, manufacturing intelligence India, AI shopfloor monitoring, production bottleneck detection, SOP compliance tracking, workstation efficiency AI, factory floor AI, Industry 4.0 India, computer vision manufacturing, real-time production monitoring, manufacturing AI software India",
  image = "https://zedral.com/og-image.png",
  url = "https://zedral.com/",
  type = "website",
  author,
  robots = "index, follow, max-snippet:-1, max-image-preview:large, max-video-preview:-1",
  jsonLd,
  article
}: SEOProps) => {
  const fullTitle = title.includes('Zedral') ? title : `${title} | Zedral`;

  return (
    <Helmet>
      {/* Primary Meta Tags */}
      <title>{fullTitle}</title>
      <meta name="title" content={fullTitle} />
      <meta name="description" content={description} />
      <meta name="keywords" content={keywords} />
      <meta name="robots" content={robots} />
      <link rel="canonical" href={url} />
      {author && <meta name="author" content={author} />}

      {/* Open Graph / Facebook / LinkedIn */}
      <meta property="og:type" content={type} />
      <meta property="og:url" content={url} />
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
      <meta name="twitter:url" content={url} />
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
