import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import SEO from "@/components/SEO";
import { motion } from "framer-motion";
import { ArrowLeft, Linkedin, Twitter, MessageCircle } from "lucide-react";
import { Link, useParams, Navigate } from "react-router-dom";
import { getPostBySlug, ContentBlock } from "@/data/blogPosts";

// ── Render a single content block ─────────────────────────────────────────────
const Block = ({ block }: { block: ContentBlock }) => {
  switch (block.type) {
    case "heading":
      return (
        <h2
          className="text-2xl font-bold text-foreground mb-4 mt-12"
          style={{ fontFamily: "'Georgia', 'Times New Roman', serif" }}
        >
          {block.text}
        </h2>
      );
    case "paragraph":
      return (
        <p className="text-base text-muted-foreground leading-relaxed mb-6">
          {block.text}
        </p>
      );
    case "list":
      return (
        <ul className="space-y-3 mb-6 ml-1">
          {block.items.map((item, i) => (
            <li key={i} className="flex gap-3 text-base text-muted-foreground leading-relaxed">
              <span className="w-1.5 h-1.5 rounded-full bg-accent mt-2.5 shrink-0" />
              {item}
            </li>
          ))}
        </ul>
      );
    case "image":
      return (
        <div className="my-10 flex justify-center">
          <div className="w-full rounded-2xl bg-muted p-8 flex items-center justify-center">
            <img
              src={block.src}
              alt={block.alt}
              className="w-full max-w-[360px] opacity-80 mix-blend-multiply"
            />
          </div>
        </div>
      );
    default:
      return null;
  }
};

// ── Main page ─────────────────────────────────────────────────────────────────
const BlogDetail = () => {
  const { slug } = useParams<{ slug: string }>();
  const post = getPostBySlug(slug ?? "");

  // 404 redirect if slug not found
  if (!post) return <Navigate to="/news" replace />;

  const postUrl = `https://zedral.com/news/${post.slug}`;

  // Estimate word count from text-based content blocks
  const wordCount = post.content.reduce((acc, block) => {
    if (block.type === "paragraph" || block.type === "heading") {
      return acc + block.text.split(/\s+/).length;
    }
    if (block.type === "list") {
      return acc + block.items.join(" ").split(/\s+/).length;
    }
    return acc;
  }, 0);

  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": [
      { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://zedral.com" },
      { "@type": "ListItem", "position": 2, "name": "Insights & News", "item": "https://zedral.com/news" },
      { "@type": "ListItem", "position": 3, "name": post.title, "item": `https://zedral.com/news/${post.slug}` }
    ]
  };

  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    "headline": post.title,
    "description": post.seo.description ?? post.excerpt,
    "image": "https://zedral.com/og-image.png",
    "thumbnailUrl": "https://zedral.com/og-image.png",
    "author": {
      "@type": "Organization",
      "name": "Zedral",
      "url": "https://zedral.com",
      "sameAs": [
        "https://www.linkedin.com/company/zedral",
        "https://www.instagram.com/zedral.in/",
        "https://twitter.com/ZedralHQ"
      ]
    },
    "publisher": {
      "@type": "Organization",
      "name": "Zedral",
      "url": "https://zedral.com",
      "logo": {
        "@type": "ImageObject",
        "url": "https://zedral.com/og-image.png",
        "width": 1200,
        "height": 630
      },
    },
    "datePublished": post.dateISO,
    "dateModified": post.dateISO,
    "mainEntityOfPage": {
      "@type": "WebPage",
      "@id": postUrl,
    },
    "url": postUrl,
    "keywords": post.tags.join(", "),
    "articleSection": post.category,
    "inLanguage": "en-IN",
    "wordCount": wordCount,
  };

  return (
    <div className="min-h-screen">
      <SEO
        title={post.seo.title ?? post.title}
        description={post.seo.description ?? post.excerpt}
        keywords={post.seo.keywords}
        url={postUrl}
        type="article"
        author={post.author}
        jsonLd={[articleSchema, breadcrumbSchema]}
        article={{
          publishedTime: `${post.dateISO}T00:00:00+05:30`,
          modifiedTime: `${post.dateISO}T00:00:00+05:30`,
          author: post.author,
          section: post.category,
          tags: post.tags,
        }}
      />

      {/* Dark header */}
      <div className="bg-primary">
        <Navbar />

        <section className="pt-28 pb-16 md:pt-36 md:pb-20 px-6">
          <div className="max-w-4xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4 }}
            >
              <Link
                to="/news"
                className="inline-flex items-center gap-2 text-sm text-primary-foreground/50 hover:text-primary-foreground/80 transition-colors mb-10"
              >
                <ArrowLeft size={16} />
                Back to Insights
              </Link>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="mb-6"
            >
              <span className="text-[11px] font-medium tracking-[0.2em] uppercase text-accent">
                {post.category}
              </span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.15 }}
              className="text-3xl sm:text-4xl md:text-5xl font-bold leading-[1.12] tracking-tight text-primary-foreground mb-8"
              style={{ fontFamily: "'Georgia', 'Times New Roman', serif" }}
            >
              {post.title}
            </motion.h1>

            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: 0.25 }}
              className="flex items-center gap-4"
            >
              <div className="flex items-center gap-3">
                <div className="w-9 h-9 rounded-full bg-accent/20 flex items-center justify-center text-sm font-bold text-accent">
                  Z
                </div>
                <div>
                  <p className="text-sm font-medium text-primary-foreground/80">
                    {post.author}
                  </p>
                  <p className="text-xs text-primary-foreground/40">{post.date}</p>
                </div>
              </div>
              <span className="text-xs text-primary-foreground/35 ml-auto">
                {post.readTime}
              </span>
            </motion.div>
          </div>
        </section>
      </div>

      {/* Light content */}
      <div className="bg-background">
        <article className="px-6 py-16 md:py-20">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="max-w-3xl mx-auto"
          >
            {/* Hero illustration */}
            <div className="flex justify-center mb-12">
              <div className="w-full max-w-md rounded-2xl bg-muted p-8 flex items-center justify-center">
                <img
                  src={post.heroImage}
                  alt={post.title}
                  className="w-full max-w-[300px] opacity-80 mix-blend-multiply"
                />
              </div>
            </div>

            {/* Dynamic content blocks */}
            {post.content.map((block, i) => (
              <Block key={i} block={block} />
            ))}

            {/* Social Share */}
            <div className="flex items-center gap-3 mt-12 pt-8 border-t border-border">
              <span className="text-xs font-medium tracking-[0.15em] uppercase text-muted-foreground mr-1">Share</span>
              <a
                href={`https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(postUrl)}`}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Share on LinkedIn"
                className="inline-flex items-center gap-1.5 px-4 py-2 rounded-full border border-border text-xs font-medium text-muted-foreground hover:text-foreground hover:border-foreground/30 transition-colors"
              >
                <Linkedin size={13} /> LinkedIn
              </a>
              <a
                href={`https://twitter.com/intent/tweet?url=${encodeURIComponent(postUrl)}&text=${encodeURIComponent(post.title)}&via=ZedralHQ`}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Share on X (Twitter)"
                className="inline-flex items-center gap-1.5 px-4 py-2 rounded-full border border-border text-xs font-medium text-muted-foreground hover:text-foreground hover:border-foreground/30 transition-colors"
              >
                <Twitter size={13} /> X
              </a>
              <a
                href={`https://api.whatsapp.com/send?text=${encodeURIComponent(post.title + " " + postUrl)}`}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Share on WhatsApp"
                className="inline-flex items-center gap-1.5 px-4 py-2 rounded-full border border-border text-xs font-medium text-muted-foreground hover:text-foreground hover:border-foreground/30 transition-colors"
              >
                <MessageCircle size={13} /> WhatsApp
              </a>
            </div>

            {/* CTA */}
            <div className="border-t border-border pt-10 mt-10">
              <div className="bg-muted rounded-2xl p-8 md:p-10 text-center">
                <p className="text-[11px] font-medium tracking-[0.2em] uppercase text-muted-foreground mb-3">
                  See it in action
                </p>
                <h3
                  className="text-xl md:text-2xl font-bold text-foreground mb-3"
                  style={{ fontFamily: "'Georgia', 'Times New Roman', serif" }}
                >
                  Ready to uncover your factory's hidden potential?
                </h3>
                <p className="text-sm text-muted-foreground mb-6 max-w-md mx-auto">
                  Zedral gives you station-level visibility from your existing
                  infrastructure, no new hardware, no disruption.
                </p>
                <Link
                  to="/contact"
                  className="inline-flex items-center gap-2 bg-foreground text-background px-6 py-3 rounded-full text-sm font-medium hover:bg-foreground/90 transition-colors"
                >
                  Get in Touch
                </Link>
              </div>
            </div>
          </motion.div>
        </article>
      </div>

      <Footer />
    </div>
  );
};

export default BlogDetail;
