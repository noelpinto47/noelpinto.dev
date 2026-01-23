import React, { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";

const ArticleDetail = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [readingProgress, setReadingProgress] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      const docHeight = document.documentElement.scrollHeight - window.innerHeight;
      const scrolled = (scrollTop / docHeight) * 100;
      setReadingProgress(scrolled);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Sample article data - can be replaced with API call
  const article = {
    title: "Architecting Scalable UI Systems",
    date: "Oct 12, 2023",
    readTime: "8 Min Read",
    category: "Engineering",
    excerpt:
      "In the era of component-driven development, the architecture of our user interfaces is just as critical as the backend services that power them.",
  };

  return (
    <div className="bg-background-dark text-text-cream font-sans antialiased min-h-screen flex flex-col">
      {/* Reading Progress Bar */}
      <div className="fixed top-0 left-0 w-full h-1 bg-surface-dark z-50">
        <div
          className="h-full bg-primary transition-all duration-300 shadow-lg"
          style={{
            width: `${readingProgress}%`,
            boxShadow: "0 0 10px rgba(255, 106, 0, 0.5)",
          }}
        ></div>
      </div>

      {/* Main Content */}
      <div className="flex-1 w-full max-w-[1200px] mx-auto px-6 md:px-12 lg:px-20 pt-16 pb-24">
        {/* Navigation */}
        <div className="mb-12">
          <button
            onClick={() => navigate("/journal")}
            className="group inline-flex items-center gap-2 text-sm font-bold tracking-widest text-text-gray hover:text-primary transition-colors duration-200 uppercase"
          >
            <span className="material-symbols-outlined text-lg group-hover:-translate-x-1 transition-transform">
              arrow_back
            </span>
            <span>Back to Journal</span>
          </button>
        </div>

        {/* Article Header */}
        <header className="max-w-[760px] mx-auto text-center mb-10">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-display font-black tracking-tight leading-tight mb-8 text-text-cream">
            {article.title}
          </h1>
          <div className="flex items-center justify-center gap-4 text-xs md:text-sm font-mono tracking-widest text-primary/80 uppercase">
            <span>{article.date}</span>
            <span className="text-text-gray/40">//</span>
            <span>{article.readTime}</span>
            <span className="text-text-gray/40">//</span>
            <span>{article.category}</span>
          </div>
        </header>

        {/* Decorative Divider */}
        <div className="max-w-[800px] mx-auto h-4 w-full mb-16 opacity-50">
          <div
            className="w-full h-full"
            style={{
              backgroundImage:
                "repeating-linear-gradient(-45deg, rgba(237, 224, 207, 0.05), rgba(237, 224, 207, 0.05) 2px, transparent 2px, transparent 10px)",
              borderTop: "1px solid rgba(51, 51, 51, 0.5)",
              borderBottom: "1px solid rgba(51, 51, 51, 0.5)",
            }}
          ></div>
        </div>

        {/* Article Content */}
        <article className="max-w-[700px] mx-auto prose prose-invert leading-relaxed">
          {/* Intro */}
          <p className="text-lg leading-relaxed font-light text-text-cream/90 mb-6">
            {article.excerpt} We often obsess over microservices and database
            sharding, yet leave our frontend codebases to rot in a tangle of
            tight coupling and obscure state logic. This article explores the
            foundational principles of building design systems that truly scale.
          </p>

          <p className="text-text-gray mb-8">
            When we talk about "scale" in UI, we aren't just talking about
            traffic. We are talking about the complexity of the team, the
            breadth of the product suite, and the longevity of the codebase. A
            scalable system allows a new engineer to ship a feature on day one
            without breaking the layout on day two.
          </p>

          {/* Section Header */}
          <h2 className="text-xs font-bold tracking-[0.15em] text-primary uppercase mt-12 mb-6 flex items-center gap-3">
            <span className="w-8 h-px bg-primary/50"></span>
            The Foundation
            <span className="flex-1 h-px bg-border-subtle"></span>
          </h2>

          <p className="text-text-gray mb-6">
            The first step is decoupling. Atomic design principles suggest
            breaking down interfaces into their smallest indivisible parts.
            However, blind adherence to atoms can lead to "prop drilling" hell.
            Instead, we should focus on <span className="text-text-cream font-medium">composition</span> over inheritance.
          </p>

          {/* Code Block */}
          <div className="my-10 rounded-sm overflow-hidden border border-border-subtle bg-surface-dark/30 shadow-lg">
            <div className="flex items-center justify-between px-4 py-2 bg-white/5 border-b border-border-subtle">
              <span className="text-xs font-mono text-text-gray">Card.tsx</span>
              <div className="flex gap-1.5">
                <div className="w-2 h-2 rounded-full bg-border-subtle"></div>
                <div className="w-2 h-2 rounded-full bg-border-subtle"></div>
              </div>
            </div>
            <div className="p-6 overflow-x-auto">
              <pre className="font-mono text-sm leading-relaxed text-text-gray/80">
                <code>{`const Card = ({ children, variant = 'default' }) => {
  return (
    <div className={clsx(
      'rounded-xl p-6 transition-all duration-300',
      variant === 'outlined' ? 'border border-slate-700' : 'bg-slate-800'
    )}>
      {children}
    </div>
  );
};`}</code>
              </pre>
            </div>
          </div>

          <p className="text-text-gray mb-8">
            Notice how the component above doesn't enforce content structure. It
            acts as a shell. This is the essence of a composable API. By
            avoiding rigid props like `title` or `imageSrc`, we allow the
            consumer to decide what goes inside the card.
          </p>

          {/* Image with Caption */}
          <figure className="my-12">
            <div className="rounded-sm overflow-hidden border border-border-subtle bg-surface-dark/30 relative group">
              <div className="absolute inset-0 bg-gradient-to-t from-background-dark/80 to-transparent opacity-60 z-10 pointer-events-none"></div>
              <img
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuDHyxj2hT0WvKwvFTR9KYjttxW4CJDXa9TfXXkFJL9TjpYLgbtZzUyIdeR993EUtmNGMajTWDW9a83m91XCTyzZelF8wEaF9TbEbR6--7DYesD2DBaz9enDs8uQUCRCpdRRoMMIulEp-JCMH5r9lpAN75YYuF4N90fUkpuD6m5JioiVmoel3tsqQ7aNKR46KQDhE7HpF-iAgZCPk0hHjJ93-TbGbyVfVZJgJmckZ2XbV2Gh5LaCWVE9G8hwh9nSjJbehCRrIWMGDXQU"
                alt="System architecture visualization"
                className="w-full h-auto object-cover opacity-70 group-hover:opacity-100 transition-opacity duration-500"
              />
              <div className="absolute top-4 right-4 z-20">
                <span className="material-symbols-outlined text-text-cream/30 text-5xl">
                  grid_4x4
                </span>
              </div>
            </div>
            <figcaption className="mt-3 text-xs text-center font-mono text-text-gray/50 uppercase tracking-widest">
              Figure 1.0 — System Component Topology
            </figcaption>
          </figure>

          {/* Section Header */}
          <h2 className="text-xs font-bold tracking-[0.15em] text-primary uppercase mt-12 mb-6 flex items-center gap-3">
            <span className="w-8 h-px bg-primary/50"></span>
            Visual Regression
            <span className="flex-1 h-px bg-border-subtle"></span>
          </h2>

          <p className="text-text-gray mb-8">
            Once your component library grows beyond 50 elements, manual testing
            becomes impossible. This is where automated visual regression testing
            comes in. Tools like Storybook and Chromatic are not just
            nice-to-haves; they are the safety net that allows you to refactor
            CSS with confidence.
          </p>

          {/* Pull Quote */}
          <blockquote className="my-10 pl-6 border-l-4 border-primary/40 italic text-2xl font-display text-text-cream/90">
            "A design system is a product serving products. Treat it with the
            same rigor you would your core application."
          </blockquote>

          <p className="text-text-gray mb-8">
            We implemented a strict "change requires snapshot update" policy. If
            a pull request modifies a pixel, the CI pipeline halts until a human
            designer reviews and approves the diff. This keeps the gap between
            design (Figma) and code (React) surprisingly narrow.
          </p>

          <p className="text-text-gray">
            Ultimately, architecture is about trade-offs. You trade initial
            velocity for long-term stability. In a startup environment, this can
            be a hard sell, but the technical debt accrued by skipping these
            steps is often paid with compound interest later.
          </p>
        </article>

        {/* Article Footer */}
        <div className="max-w-[700px] mx-auto mt-20 pt-10 border-t border-dashed border-border-subtle">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-6">
            <div>
              <p className="text-xs text-text-gray font-mono mb-2 tracking-widest uppercase">
                End of File
              </p>
              <p className="text-lg font-display font-bold text-text-cream">
                Thanks for reading.
              </p>
            </div>
            <div className="flex items-center gap-3">
              <button className="w-10 h-10 rounded flex items-center justify-center bg-white/5 hover:bg-primary hover:text-white text-text-gray transition-colors border border-border-subtle group">
                <span className="material-symbols-outlined text-sm group-hover:scale-110 transition-transform">
                  share
                </span>
              </button>
              <button className="w-10 h-10 rounded flex items-center justify-center bg-white/5 hover:bg-primary hover:text-white text-text-gray transition-colors border border-border-subtle group">
                <span className="material-symbols-outlined text-sm group-hover:scale-110 transition-transform">
                  bookmark
                </span>
              </button>
              <button className="w-10 h-10 rounded flex items-center justify-center bg-white/5 hover:bg-primary hover:text-white text-text-gray transition-colors border border-border-subtle group">
                <span className="material-symbols-outlined text-sm group-hover:scale-110 transition-transform">
                  thumb_up
                </span>
              </button>
            </div>
          </div>

          {/* Bottom Decorative Stripes */}
          <div
            className="h-2 w-full mt-10 rounded-full opacity-30"
            style={{
              backgroundImage:
                "repeating-linear-gradient(-45deg, rgba(237, 224, 207, 0.05), rgba(237, 224, 207, 0.05) 2px, transparent 2px, transparent 10px)",
            }}
          ></div>
        </div>
      </div>
    </div>
  );
};

export default ArticleDetail;
