import React from "react";
import { Link } from "react-router-dom";

const About = () => {
  return (
    <>

      {/* Architectural Vertical Grid Lines (Background) */}
      <div className="fixed inset-0 pointer-events-none z-0 flex justify-center w-full max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="w-full h-full border-l border-r border-[#ffffff05] grid grid-cols-4 gap-4">
          <div className="hidden sm:block border-r border-[#ffffff05] h-full"></div>
          <div className="hidden md:block border-r border-[#ffffff05] h-full"></div>
          <div className="hidden lg:block border-r border-[#ffffff05] h-full"></div>
        </div>
      </div>

      {/* Sticky Navigation */}
      <nav className="fixed top-0 left-0 w-full z-40 bg-background-dark/90 backdrop-blur-sm border-b border-border-subtle">
        <div className="max-w-[1440px] mx-auto px-6 py-4 flex justify-between items-center">
          <div className="flex items-center gap-2">
            <span className="text-xs font-bold tracking-widest text-text-gray font-sans uppercase">
              Fig. 01
            </span>
            <span className="w-px h-4 bg-primary mx-2"></span>
            <Link
              to="/"
              className="text-sm font-bold tracking-wider text-text-cream hover:text-primary transition-colors duration-200"
            >
              [ NOEL PINTO ]
            </Link>
          </div>
          <div className="hidden md:flex gap-8">
            <Link className="group flex flex-col items-center" to="/portfolio">
              <span className="text-xs font-medium tracking-[0.2em] text-text-gray group-hover:text-white transition-colors">
                WORK
              </span>
              <span className="w-0 group-hover:w-full h-[1px] bg-primary transition-all duration-300 mt-1"></span>
            </Link>
            <Link className="group flex flex-col items-center" to="/about">
              <span className="text-xs font-medium tracking-[0.2em] text-white transition-colors">
                ABOUT
              </span>
              <span className="w-full h-[1px] bg-primary mt-1"></span>
            </Link>
            <Link className="group flex flex-col items-center" to="/contact">
              <span className="text-xs font-medium tracking-[0.2em] text-text-gray group-hover:text-white transition-colors">
                CONTACT
              </span>
              <span className="w-0 group-hover:w-full h-[1px] bg-primary transition-all duration-300 mt-1"></span>
            </Link>
          </div>
          <button className="md:hidden text-white">
            <span className="material-symbols-outlined">menu</span>
          </button>
        </div>
      </nav>

      {/* Main Content Wrapper */}
      <main className="relative z-10 pt-20 flex flex-col items-center w-full min-h-screen">
        {/* Hero Section */}
        <section className="w-full max-w-[1200px] px-6 py-24 md:py-32 relative animate-in fade-in duration-700">
          <div className="absolute top-10 right-6 md:right-0 text-[10px] text-text-gray font-mono tracking-widest border border-border-subtle px-2 py-1">
            REF: ABT-2024
          </div>
          <div className="flex flex-col gap-2">
            <h2 className="text-primary text-xs font-bold tracking-[0.4em] uppercase font-sans mb-2 pl-1">
              Engineering Philosophy
            </h2>
            <h1 className="text-7xl md:text-9xl font-display font-black leading-[0.8] tracking-tighter text-text-cream mix-blend-screen">
              ABOUT<span className="text-primary">.</span>
            </h1>
          </div>
          <div className="h-px w-full bg-border-subtle mt-16 technical-border"></div>
        </section>

        {/* Profile Section */}
        <section className="w-full max-w-[1200px] px-6 pb-24">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-12 md:gap-8">
            <div className="md:col-span-3 flex flex-col justify-start">
              <div className="sticky top-32">
                <span className="text-primary font-mono text-sm font-bold tracking-widest border border-primary/30 bg-primary/5 px-3 py-1 inline-block">
                  01_PROFILE
                </span>
                <div className="mt-4 text-[10px] text-text-gray font-mono opacity-50 block border-l border-border-subtle pl-2">
                  LOC: MUMBAI<br />
                  LAT: 19.07° N<br />
                  LON: 72.87° E
                </div>
              </div>
            </div>
            <div className="md:col-span-9 flex flex-col gap-8">
              <p className="text-2xl md:text-4xl font-display font-medium text-text-cream leading-tight">
                "I don't just write code; I engineer resilient digital structures."
              </p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 text-text-gray font-light leading-relaxed text-sm md:text-base">
                <p>
                  With over 6 years of experience in mobile application
                  development, my work sits at the intersection of brutalist
                  efficiency and fluid user interaction. I believe that a great
                  application is defined not just by how it looks, but by the
                  structural integrity of its codebase.
                </p>
                <p>
                  Specializing in cross-platform architectures and native
                  performance optimization, I approach every project with an
                  industrial mindset: measure twice, code once. My philosophy
                  borrows from Virgil Abloh's "3% rule"—taking established
                  patterns and iterating them into something distinct and
                  functional.
                </p>
              </div>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-8 pt-8 border-t border-dashed border-border-subtle">
                <div>
                  <span className="block text-3xl font-display text-text-cream">
                    6+
                  </span>
                  <span className="text-[10px] uppercase tracking-wider text-text-gray font-mono">
                    Years Exp.
                  </span>
                </div>
                <div>
                  <span className="block text-3xl font-display text-text-cream">
                    24
                  </span>
                  <span className="text-[10px] uppercase tracking-wider text-text-gray font-mono">
                    Projects
                  </span>
                </div>
                <div>
                  <span className="block text-3xl font-display text-text-cream">
                    100%
                  </span>
                  <span className="text-[10px] uppercase tracking-wider text-text-gray font-mono">
                    Delivery
                  </span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Separator */}
        <div className="w-full max-w-[1440px] px-6">
          <div className="h-px bg-border-subtle w-full technical-border"></div>
        </div>

        {/* Timeline Section */}
        <section className="w-full max-w-[1200px] px-6 py-24">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-12 md:gap-8">
            <div className="md:col-span-3">
              <div className="sticky top-32">
                <span className="text-text-gray font-mono text-sm font-bold tracking-widest border border-border-subtle px-3 py-1 inline-block">
                  02_TIMELINE
                </span>
              </div>
            </div>
            <div className="md:col-span-9 relative border-l border-dashed border-border-subtle ml-3 md:ml-0 pl-8 md:pl-12 space-y-16">
              {/* Timeline Item 1 */}
              <div className="relative group">
                <div className="absolute -left-[37px] md:-left-[53px] top-1.5 w-3 h-3 bg-background-dark border border-primary rounded-full group-hover:bg-primary transition-colors"></div>
                <span className="text-primary font-mono text-xs tracking-widest mb-1 block">
                  ESTD. 2023 — PRESENT
                </span>
                <h3 className="text-2xl font-display text-text-cream">
                  Senior Mobile Engineer
                </h3>
                <p className="text-sm font-bold text-text-gray uppercase tracking-wider mt-1 mb-4">
                  FinTech Solutions Inc.
                </p>
                <p className="text-text-gray/80 text-sm leading-relaxed max-w-xl">
                  Spearheading the migration of legacy iOS codebases to modular
                  SwiftUI architectures. Reduced build times by 40% and improved
                  crash-free rate to 99.9%.
                </p>
              </div>

              {/* Timeline Item 2 */}
              <div className="relative group">
                <div className="absolute -left-[37px] md:-left-[53px] top-1.5 w-3 h-3 bg-background-dark border border-border-subtle group-hover:border-primary rounded-full transition-colors"></div>
                <span className="text-text-gray font-mono text-xs tracking-widest mb-1 block">
                  ESTD. 2020 — 2023
                </span>
                <h3 className="text-2xl font-display text-text-cream">
                  Product Engineer
                </h3>
                <p className="text-sm font-bold text-text-gray uppercase tracking-wider mt-1 mb-4">
                  Creative App Studio
                </p>
                <p className="text-text-gray/80 text-sm leading-relaxed max-w-xl">
                  Developed award-winning e-commerce applications using Flutter
                  and React Native. Collaborated directly with design teams to
                  implement pixel-perfect UI systems.
                </p>
              </div>

              {/* Timeline Item 3 */}
              <div className="relative group">
                <div className="absolute -left-[37px] md:-left-[53px] top-1.5 w-3 h-3 bg-background-dark border border-border-subtle group-hover:border-primary rounded-full transition-colors"></div>
                <span className="text-text-gray font-mono text-xs tracking-widest mb-1 block">
                  ESTD. 2018 — 2020
                </span>
                <h3 className="text-2xl font-display text-text-cream">
                  Junior Developer
                </h3>
                <p className="text-sm font-bold text-text-gray uppercase tracking-wider mt-1 mb-4">
                  StartUp Inc.
                </p>
                <p className="text-text-gray/80 text-sm leading-relaxed max-w-xl">
                  Assisted in the development of MVP products. Gained proficiency
                  in Kotlin and Java for Android development.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Separator */}
        <div className="w-full max-w-[1440px] px-6">
          <div className="h-px bg-border-subtle w-full technical-border"></div>
        </div>

        {/* Skills Section */}
        <section className="w-full max-w-[1200px] px-6 py-24 pb-32">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-12 md:gap-8">
            <div className="md:col-span-3">
              <div className="sticky top-32">
                <span className="text-text-gray font-mono text-sm font-bold tracking-widest border border-border-subtle px-3 py-1 inline-block">
                  03_SKILLS
                </span>
                <div className="mt-4 text-[10px] text-text-gray font-mono opacity-50 block border-l border-border-subtle pl-2">
                  STACK: FULL<br />
                  TYPE: NATIVE
                </div>
              </div>
            </div>
            <div className="md:col-span-9">
              <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
                {/* Skill Cards */}
                <div className="group border border-border-subtle p-4 hover:border-primary transition-all duration-300 bg-surface-dark/30 hover:bg-surface-dark relative overflow-hidden">
                  <div className="diagonal-stripe absolute top-0 right-0 w-8 h-8 opacity-0 group-hover:opacity-20 transition-opacity"></div>
                  <span className="text-[9px] text-text-gray uppercase tracking-widest block mb-3 font-mono">
                    Mobile
                  </span>
                  <span className="text-base font-bold text-text-cream tracking-wide">
                    SWIFT UI
                  </span>
                </div>

                <div className="group border border-border-subtle p-4 hover:border-primary transition-all duration-300 bg-surface-dark/30 hover:bg-surface-dark relative overflow-hidden">
                  <div className="diagonal-stripe absolute top-0 right-0 w-8 h-8 opacity-0 group-hover:opacity-20 transition-opacity"></div>
                  <span className="text-[9px] text-text-gray uppercase tracking-widest block mb-3 font-mono">
                    Mobile
                  </span>
                  <span className="text-base font-bold text-text-cream tracking-wide">
                    KOTLIN
                  </span>
                </div>

                <div className="group border border-border-subtle p-4 hover:border-primary transition-all duration-300 bg-surface-dark/30 hover:bg-surface-dark relative overflow-hidden">
                  <div className="diagonal-stripe absolute top-0 right-0 w-8 h-8 opacity-0 group-hover:opacity-20 transition-opacity"></div>
                  <span className="text-[9px] text-text-gray uppercase tracking-widest block mb-3 font-mono">
                    Cross-Plat
                  </span>
                  <span className="text-base font-bold text-text-cream tracking-wide">
                    FLUTTER
                  </span>
                </div>

                <div className="group border border-border-subtle p-4 hover:border-primary transition-all duration-300 bg-surface-dark/30 hover:bg-surface-dark relative overflow-hidden">
                  <div className="diagonal-stripe absolute top-0 right-0 w-8 h-8 opacity-0 group-hover:opacity-20 transition-opacity"></div>
                  <span className="text-[9px] text-text-gray uppercase tracking-widest block mb-3 font-mono">
                    Cross-Plat
                  </span>
                  <span className="text-base font-bold text-text-cream tracking-wide">
                    REACT NATIVE
                  </span>
                </div>

                <div className="group border border-border-subtle p-4 hover:border-primary transition-all duration-300 bg-surface-dark/30 hover:bg-surface-dark relative overflow-hidden">
                  <div className="diagonal-stripe absolute top-0 right-0 w-8 h-8 opacity-0 group-hover:opacity-20 transition-opacity"></div>
                  <span className="text-[9px] text-text-gray uppercase tracking-widest block mb-3 font-mono">
                    Core
                  </span>
                  <span className="text-base font-bold text-text-cream tracking-wide">
                    TYPESCRIPT
                  </span>
                </div>

                <div className="group border border-border-subtle p-4 hover:border-primary transition-all duration-300 bg-surface-dark/30 hover:bg-surface-dark relative overflow-hidden">
                  <div className="diagonal-stripe absolute top-0 right-0 w-8 h-8 opacity-0 group-hover:opacity-20 transition-opacity"></div>
                  <span className="text-[9px] text-text-gray uppercase tracking-widest block mb-3 font-mono">
                    Tools
                  </span>
                  <span className="text-base font-bold text-text-cream tracking-wide">
                    GIT / CI-CD
                  </span>
                </div>

                <div className="group border border-border-subtle p-4 hover:border-primary transition-all duration-300 bg-surface-dark/30 hover:bg-surface-dark relative overflow-hidden">
                  <div className="diagonal-stripe absolute top-0 right-0 w-8 h-8 opacity-0 group-hover:opacity-20 transition-opacity"></div>
                  <span className="text-[9px] text-text-gray uppercase tracking-widest block mb-3 font-mono">
                    Design
                  </span>
                  <span className="text-base font-bold text-text-cream tracking-wide">
                    FIGMA
                  </span>
                </div>

                <div className="group border border-border-subtle p-4 hover:border-primary transition-all duration-300 bg-surface-dark/30 hover:bg-surface-dark relative overflow-hidden">
                  <div className="diagonal-stripe absolute top-0 right-0 w-8 h-8 opacity-0 group-hover:opacity-20 transition-opacity"></div>
                  <span className="text-[9px] text-text-gray uppercase tracking-widest block mb-3 font-mono">
                    Backend
                  </span>
                  <span className="text-base font-bold text-text-cream tracking-wide">
                    NODE.JS
                  </span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Footer */}
        <footer className="w-full border-t border-border-subtle bg-background-dark/50 backdrop-blur-sm z-20">
          <div className="max-w-[1440px] mx-auto px-6 py-12 flex flex-col md:flex-row justify-between items-start md:items-end gap-8">
            <div className="flex flex-col gap-4">
              <h2 className="text-text-cream text-2xl font-display font-bold tracking-tight">
                Let's build something precise.
              </h2>
              <a
                className="text-primary text-lg font-sans font-bold hover:underline decoration-2 underline-offset-4 decoration-primary/50"
                href="mailto:hello@noelpinto.com"
              >
                hello@noelpinto.com
              </a>
            </div>
            <div className="flex flex-col items-start md:items-end gap-2 text-text-gray text-xs font-mono tracking-widest">
              <div className="flex gap-4">
                <a className="hover:text-primary transition-colors" href="#">
                  [ LINKEDIN ]
                </a>
                <a className="hover:text-primary transition-colors" href="#">
                  [ GITHUB ]
                </a>
                <a className="hover:text-primary transition-colors" href="#">
                  [ TWITTER ]
                </a>
              </div>
              <p className="mt-4 opacity-50">© 2024 NOEL PINTO. EST. MUMBAI.</p>
            </div>
          </div>
        </footer>

        {/* Floating Action Button / Scroll to Top */}
        <a
          className="fixed bottom-8 right-8 z-50 group hidden md:flex items-center justify-center size-14 rounded-full border border-border-subtle bg-background-dark/80 backdrop-blur hover:border-primary transition-colors"
          href="#"
        >
          <span className="material-symbols-outlined text-text-cream group-hover:text-primary transition-colors -rotate-90">
            arrow_forward
          </span>
          <div className="absolute -top-1 -right-1 size-3 bg-primary rounded-full animate-pulse"></div>
        </a>
      </main>
    </>
  );
};

export default About;