import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

const Journal = () => {
  const navigate = useNavigate();
  const [activeFilter, setActiveFilter] = useState("all");

  const handleNavClick = (path) => {
    if (path.startsWith("#")) {
      // Navigate to home with hash
      navigate("/" + path);
    } else {
      navigate(path);
    }
  };

  const articles = [
    {
      id: 1,
      num: "01",
      date: "Oct 12",
      category: "Engineering",
      readTime: "5 Min Read",
      title: "The Architecture of State Management",
      description:
        "An in-depth look at managing complex data flows in modern iOS applications using unidirectional flow patterns and composable architecture principles.",
    },
    {
      id: 2,
      num: "02",
      date: "Sept 28",
      category: "Process",
      readTime: "8 Min Read",
      title: "Refactoring Legacy Codebases",
      description:
        "Strategies for modernizing Objective-C applications without breaking production. We discuss the strangler fig pattern and incremental adoption.",
    },
    {
      id: 3,
      num: "03",
      date: "Aug 15",
      category: "UI/UX",
      readTime: "4 Min Read",
      title: "UI Animations at 120fps",
      description:
        "Optimizing render loops for ProMotion displays. How to ensure your custom transitions feel buttery smooth on the latest hardware.",
    },
    {
      id: 4,
      num: "04",
      date: "July 02",
      category: "Career",
      readTime: "10 Min Read",
      title: "The Senior Engineer Mindset",
      description:
        "Moving beyond code: mentorship, system design, and driving technical decisions that impact the entire organization.",
    },
  ];

  const filters = [
    { id: "all", label: "All Topics" },
    { id: "swiftui", label: "SwiftUI" },
    { id: "system", label: "System Design" },
    { id: "career", label: "Career" },
    { id: "tutorials", label: "Tutorials" },
  ];

  return (
    <div className="bg-background-dark text-text-cream font-sans antialiased min-h-screen flex flex-col">
      {/* Header */}
      <header className="fixed top-0 left-0 right-0 z-50 transition-all duration-500 bg-background-dark/90 backdrop-blur-xl py-3">
        <div className="max-w-[1440px] mx-auto px-6 flex justify-between items-center">
          <Link
            to="/"
            className="text-xl font-display font-bold tracking-tighter text-text-cream hover:text-primary transition-colors group relative flex items-center gap-2"
          >
            NP<span className="text-primary">.</span>
            <span className="text-xs text-text-gray font-mono tracking-widest uppercase opacity-60">
              Journal
            </span>
            <span className="absolute -right-2 -top-1 w-1.5 h-1.5 bg-primary rounded-full opacity-0 group-hover:opacity-100 transition-opacity"></span>
          </Link>

          <nav className="hidden md:flex items-center gap-1">
            <Link
              to="/"
              className="relative px-4 py-2 text-xs font-bold tracking-[0.15em] uppercase transition-all duration-300 text-text-gray hover:text-text-cream"
            >
              Home
            </Link>
            <button
              onClick={() => handleNavClick("#projects")}
              className="relative px-4 py-2 text-xs font-bold tracking-[0.15em] uppercase transition-all duration-300 text-text-gray hover:text-text-cream"
            >
              Projects
            </button>
            <button
              onClick={() => handleNavClick("#clients")}
              className="relative px-4 py-2 text-xs font-bold tracking-[0.15em] uppercase transition-all duration-300 text-text-gray hover:text-text-cream"
            >
              Work
            </button>
            <button
              onClick={() => handleNavClick("#about")}
              className="relative px-4 py-2 text-xs font-bold tracking-[0.15em] uppercase transition-all duration-300 text-text-gray hover:text-text-cream"
            >
              About
            </button>
            <button
              onClick={() => handleNavClick("#contact")}
              className="relative px-4 py-2 text-xs font-bold tracking-[0.15em] uppercase transition-all duration-300 text-text-gray hover:text-text-cream"
            >
              Contact
            </button>
            <Link
              to="/journal"
              className="relative px-4 py-2 text-xs font-bold tracking-[0.15em] uppercase transition-all duration-300 text-primary"
            >
              Journal
              <span className="absolute bottom-0 left-1/2 -translate-x-1/2 h-0.5 bg-primary transition-all duration-300 w-4"></span>
            </Link>
            <Link
              to="/resume"
              className="relative px-4 py-2 text-xs font-bold tracking-[0.15em] uppercase transition-all duration-300 text-text-gray hover:text-primary"
            >
              Hire
            </Link>
          </nav>

          <button 
            className="md:hidden flex flex-col gap-1.5 p-2 group z-50"
            aria-label="Toggle menu"
          >
            <span className="w-5 h-0.5 bg-text-cream transition-all duration-300"></span>
            <span className="w-5 h-0.5 bg-primary transition-all duration-300"></span>
            <span className="w-5 h-0.5 bg-text-cream transition-all duration-300"></span>
          </button>
        </div>
      </header>

      {/* Main Content */}
      <main className="flex-1 flex justify-center py-20 lg:py-24 px-6 pt-24">
        <div className="w-full max-w-[1200px] flex flex-col lg:flex-row gap-12">
          {/* Sidebar Filters */}
          <aside className="w-full lg:w-64 shrink-0">
            <div className="flex flex-col gap-8">
              {/* Filter Header */}
              <div className="flex flex-col gap-1 border-b border-border-subtle pb-6 lg:border-none lg:pb-0">
                <h3 className="text-text-cream text-xs font-bold tracking-[0.2em] uppercase">
                  Filter
                </h3>
                <p className="text-text-gray text-[10px] font-light tracking-wider italic">
                  "BY CATEGORY"
                </p>
              </div>

              {/* Filter Buttons */}
              <div className="flex flex-row lg:flex-col gap-3 flex-wrap">
                {filters.map((filter) => (
                  <button
                    key={filter.id}
                    onClick={() => setActiveFilter(filter.id)}
                    className={`group flex items-center justify-between px-4 py-3 border rounded transition-all w-full text-left text-xs font-bold tracking-widest uppercase ${
                      activeFilter === filter.id
                        ? "border-primary bg-primary/10 text-text-cream"
                        : "border-border-subtle text-text-gray hover:border-text-cream hover:text-text-cream bg-transparent"
                    }`}
                  >
                    <span>{filter.label}</span>
                    {activeFilter === filter.id && (
                      <span className="material-symbols-outlined text-sm text-primary">
                        check_circle
                      </span>
                    )}
                    {activeFilter !== filter.id && (
                      <span className="material-symbols-outlined text-sm opacity-0 group-hover:opacity-100 transition-opacity">
                        arrow_forward
                      </span>
                    )}
                  </button>
                ))}
              </div>

              {/* Newsletter */}
              <div className="mt-8 p-6 bg-surface-dark/20 border border-border-subtle rounded hidden lg:flex flex-col gap-4">
                <div>
                  <p className="text-text-cream text-lg font-display font-bold">
                    Newsletter
                  </p>
                  <p className="text-text-gray text-xs mt-2 font-sans">
                    Get the latest articles directly to your inbox.
                  </p>
                </div>
                <div className="flex flex-col gap-2">
                  <input
                    type="email"
                    placeholder="email@address.com"
                    className="bg-background-dark border border-border-subtle text-text-cream text-sm px-3 py-2 focus:outline-none focus:border-primary placeholder:text-text-gray/30 font-sans"
                  />
                  <button className="bg-primary hover:bg-primary/80 text-white text-xs font-bold uppercase tracking-widest py-2 transition-colors">
                    Subscribe
                  </button>
                </div>
              </div>
            </div>
          </aside>

          {/* Main Content */}
          <section className="flex-1 flex flex-col w-full">
            {/* Page Header */}
            <div className="mb-12 flex flex-col gap-2 relative">
              <div className="absolute -top-6 -left-6 text-[120px] lg:text-[180px] font-black text-text-cream/[0.03] select-none pointer-events-none leading-none">
                2024
              </div>
              <h1 className="text-5xl lg:text-7xl font-display font-black text-text-cream tracking-tighter relative z-10">
                JOURNAL<span className="text-primary">.</span>
              </h1>
              <div className="flex items-center gap-3 relative z-10 pl-1">
                <div className="h-px w-12 bg-primary"></div>
                <p className="text-text-gray text-sm lg:text-base font-light tracking-[0.1em] uppercase">
                  "Published Works"
                </p>
              </div>
            </div>

            {/* Articles List */}
            <div className="flex flex-col gap-6">
              {articles.map((article) => (
                <article
                  key={article.id}
                  className="group flex flex-col md:flex-row gap-6 p-6 border border-border-subtle bg-background-dark/50 hover:border-primary/50 hover:bg-surface-dark/30 transition-all duration-300 relative overflow-hidden"
                >
                  {/* Article Number */}
                  <div className="shrink-0 md:w-16">
                    <span className="text-4xl md:text-5xl font-display font-black text-text-cream/10 group-hover:text-primary/20 transition-colors">
                      {article.num}
                    </span>
                  </div>

                  {/* Content */}
                  <div className="flex-1 flex flex-col gap-3">
                    <div className="flex flex-wrap items-center gap-x-3 gap-y-1 text-[10px] md:text-xs font-bold tracking-widest text-text-gray uppercase">
                      <span className="text-primary">{article.date}</span>
                      <span className="w-px h-3 bg-text-gray/30"></span>
                      <span>{article.category}</span>
                      <span className="w-px h-3 bg-text-gray/30"></span>
                      <span>{article.readTime}</span>
                    </div>
                    <h3 className="text-2xl md:text-3xl font-display font-bold text-text-cream leading-tight group-hover:text-primary transition-colors cursor-pointer">
                      {article.title}
                    </h3>
                    <p className="text-text-gray font-sans text-sm md:text-base leading-relaxed max-w-2xl">
                      {article.description}
                    </p>
                  </div>

                  {/* Read Button */}
                  <div className="flex items-end justify-start md:justify-end shrink-0 md:w-36 pt-4 md:pt-0">
                    <Link 
                      to={`/journal/${article.id}`}
                      className="w-full md:w-auto group/btn flex items-center justify-center gap-2 px-4 py-2 border border-text-gray/30 text-text-cream text-xs font-bold uppercase tracking-widest hover:border-primary hover:text-primary transition-all"
                    >
                      <span>Read Article</span>
                      <span className="material-symbols-outlined text-sm group-hover/btn:translate-x-1 transition-transform">
                        arrow_forward
                      </span>
                    </Link>
                  </div>
                </article>
              ))}
            </div>

            {/* Load More */}
            <div className="mt-12 flex justify-center w-full">
              <button className="flex items-center justify-center gap-2 px-8 py-3 border-b border-text-gray/30 hover:border-primary text-text-gray hover:text-primary text-sm font-bold uppercase tracking-widest transition-all">
                <span>Load Older Entries</span>
                <span className="material-symbols-outlined text-lg">expand_more</span>
              </button>
            </div>
          </section>
        </div>
      </main>

      {/* Footer */}
      <footer className="border-t border-border-subtle bg-background-dark/50 backdrop-blur-sm">
        <div className="max-w-[1440px] mx-auto px-6 lg:px-20 py-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-text-gray/50 text-xs uppercase tracking-wider font-mono">
            © 2024 NOEL PINTO — MUMBAI, INDIA
          </p>
          <div className="flex gap-6">
            <a
              href="#"
              className="text-text-gray/50 hover:text-primary transition-colors"
            >
              <span className="material-symbols-outlined">code</span>
            </a>
            <a
              href="#"
              className="text-text-gray/50 hover:text-primary transition-colors"
            >
              <span className="material-symbols-outlined">mail</span>
            </a>
            <a
              href="#"
              className="text-text-gray/50 hover:text-primary transition-colors"
            >
              <span className="material-symbols-outlined">rocket_launch</span>
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Journal;
