import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import SEO from "@/components/SEO";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import { blogPosts } from "@/data/blogPosts";

const NewsBlog = () => {
  const featured = blogPosts[0];
  const rest = blogPosts.slice(1);

  const blogSchema = {
    "@context": "https://schema.org",
    "@type": "Blog",
    "name": "Zedral Insights",
    "description":
      "Expert perspectives on AI in manufacturing, production efficiency, and the future of industrial operations.",
    "url": "https://zedral.com/news",
    "publisher": {
      "@type": "Organization",
      "name": "Zedral",
      "url": "https://zedral.com",
    },
    "blogPost": blogPosts.map((p) => ({
      "@type": "BlogPosting",
      "headline": p.title,
      "url": `https://zedral.com/news/${p.slug}`,
      "datePublished": p.dateISO,
      "author": { "@type": "Organization", "name": p.author },
    })),
  };

  return (
    <div className="min-h-screen">
      <SEO
        title="Insights & News — Manufacturing Intelligence | Zedral"
        description="Expert perspectives on AI in manufacturing, production efficiency, and the future of industrial operations from the Zedral team."
        keywords="manufacturing intelligence blog, AI shopfloor insights, operational efficiency articles, production optimization tips, Indian manufacturing technology"
        url="https://zedral.com/news"
        jsonLd={blogSchema}
      />

      {/* Dark hero section */}
      <div className="bg-primary">
        <Navbar />

        <section className="pt-28 pb-16 md:pt-36 md:pb-20 px-6">
          <div className="max-w-6xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              <span className="inline-flex items-center gap-2 text-[11px] font-medium tracking-[0.2em] uppercase text-primary-foreground/60 border border-primary-foreground/15 rounded-full px-4 py-1.5 mb-10">
                <span className="w-1.5 h-1.5 rounded-full bg-accent" />
                Insights &amp; News
              </span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold leading-[1.08] tracking-tight text-primary-foreground mb-8 max-w-3xl"
              style={{ fontFamily: "'Georgia', 'Times New Roman', serif" }}
            >
              Thinking on{" "}
              <span className="italic font-light text-primary-foreground/45">
                operational
              </span>
              <br />
              <span className="italic font-light text-primary-foreground/45">
                intelligence
              </span>{" "}
              for
              <br />
              modern industry
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="text-sm md:text-base text-primary-foreground/50 max-w-xl leading-relaxed"
            >
              Expert perspectives on AI in manufacturing, production efficiency,
              and the future of industrial operations — from the Zedral team.
            </motion.p>
          </div>
        </section>
      </div>

      {/* Light section */}
      <div className="bg-background">

        {/* Featured Article */}
        <section className="px-6 py-16 md:py-20">
          <div className="max-w-6xl mx-auto">
            <p className="text-[11px] font-medium tracking-[0.2em] uppercase text-muted-foreground mb-8">
              Featured Article
            </p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
            >
              <Link
                to={`/news/${featured.slug}`}
                className="block rounded-2xl border border-border overflow-hidden grid md:grid-cols-2 hover:border-foreground/20 transition-colors group"
              >
                {/* Left: illustration */}
                <div className="relative bg-muted flex items-center justify-center min-h-[280px] md:min-h-[380px] p-10">
                  <span className="inline-flex items-center gap-1.5 absolute top-5 left-5 text-[11px] font-semibold tracking-wide uppercase bg-foreground text-background px-3 py-1 rounded-md">
                    Featured
                  </span>
                  <img
                    src={featured.heroImage}
                    alt={featured.title}
                    className="w-full max-w-[280px] opacity-80 mix-blend-multiply"
                  />
                </div>

                {/* Right: content */}
                <div className="p-8 md:p-10 flex flex-col justify-center">
                  <span className="text-[11px] font-medium tracking-[0.15em] uppercase text-muted-foreground mb-4">
                    {featured.category}
                  </span>
                  <h2
                    className="text-2xl md:text-3xl font-bold text-foreground leading-tight mb-5 group-hover:text-accent transition-colors"
                    style={{ fontFamily: "'Georgia', 'Times New Roman', serif" }}
                  >
                    {featured.title}
                  </h2>
                  <p className="text-sm text-muted-foreground leading-relaxed mb-8">
                    {featured.excerpt}
                  </p>

                  <div className="flex items-center justify-between mt-auto">
                    <div className="flex items-center gap-3">
                      <div className="w-9 h-9 rounded-full bg-accent/20 flex items-center justify-center text-sm font-bold text-accent">
                        Z
                      </div>
                      <div>
                        <p className="text-sm font-medium text-foreground">
                          {featured.author}
                        </p>
                        <p className="text-xs text-muted-foreground">
                          {featured.date}
                        </p>
                      </div>
                    </div>
                    <span className="inline-flex items-center gap-1.5 text-sm font-medium text-accent group-hover:gap-2.5 transition-all">
                      Read article <ArrowRight size={14} />
                    </span>
                  </div>
                </div>
              </Link>
            </motion.div>
          </div>
        </section>

        {/* All Other Articles — Grid */}
        {rest.length > 0 && (
          <section className="px-6 pb-20 md:pb-28">
            <div className="max-w-6xl mx-auto">
              <p className="text-[11px] font-medium tracking-[0.2em] uppercase text-muted-foreground mb-8">
                More Articles
              </p>

              <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {rest.map((post, i) => (
                  <motion.div
                    key={post.slug}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.4, delay: 0.1 * i }}
                  >
                    <Link
                      to={`/news/${post.slug}`}
                      className="flex flex-col h-full rounded-2xl border border-border overflow-hidden hover:border-foreground/20 transition-colors group"
                    >
                      {/* Image area */}
                      <div className="bg-muted flex items-center justify-center p-8 min-h-[180px]">
                        <img
                          src={post.heroImage}
                          alt={post.title}
                          className="w-full max-w-[180px] opacity-80 mix-blend-multiply"
                        />
                      </div>

                      {/* Content */}
                      <div className="p-6 flex flex-col flex-1">
                        <span className="text-[11px] font-medium tracking-[0.15em] uppercase text-muted-foreground mb-3">
                          {post.category}
                        </span>
                        <h3
                          className="text-base font-bold text-foreground leading-snug mb-3 group-hover:text-accent transition-colors"
                          style={{
                            fontFamily: "'Georgia', 'Times New Roman', serif",
                          }}
                        >
                          {post.title}
                        </h3>
                        <p className="text-sm text-muted-foreground leading-relaxed line-clamp-3 mb-6">
                          {post.excerpt}
                        </p>

                        <div className="mt-auto flex items-center justify-between">
                          <div>
                            <p className="text-xs font-medium text-foreground">
                              {post.author}
                            </p>
                            <p className="text-xs text-muted-foreground">
                              {post.date} · {post.readTime}
                            </p>
                          </div>
                          <ArrowRight
                            size={14}
                            className="text-accent opacity-0 group-hover:opacity-100 transition-opacity"
                          />
                        </div>
                      </div>
                    </Link>
                  </motion.div>
                ))}
              </div>
            </div>
          </section>
        )}
      </div>

      <Footer />
    </div>
  );
};

export default NewsBlog;
