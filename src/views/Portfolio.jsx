import React from 'react';
import { Link } from 'react-router-dom';

const Portfolio = () => {
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
              Fig. 02
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
              <span className="text-xs font-medium tracking-[0.2em] text-white transition-colors">
                WORKS
              </span>
              <span className="w-full h-[1px] bg-primary mt-1"></span>
            </Link>
            <Link className="group flex flex-col items-center" to="/about">
              <span className="text-xs font-medium tracking-[0.2em] text-text-gray group-hover:text-white transition-colors">
                ABOUT
              </span>
              <span className="w-0 group-hover:w-full h-[1px] bg-primary transition-all duration-300 mt-1"></span>
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
        <section className="w-full max-w-[1200px] px-6 py-24 md:pt-32 md:pb-16 relative">
          <div className="absolute top-10 right-6 md:right-0 text-[10px] text-text-gray font-mono tracking-widest border border-border-subtle px-2 py-1">
            ARCHIVE: 2018-24
          </div>
          <div className="flex flex-col gap-2">
            <h2 className="text-primary text-xs font-bold tracking-[0.4em] uppercase font-sans mb-2 pl-1">
              Selected Engineering Cases
            </h2>
            <h1 className="text-7xl md:text-9xl font-display font-black leading-[0.8] tracking-tighter text-text-cream mix-blend-screen">
              WORKS<span className="text-primary">.</span>
            </h1>
          </div>
          <div className="h-px w-full bg-border-subtle mt-16 technical-border"></div>
        </section>

        {/* Projects Section */}
        <section className="w-full max-w-[1200px] px-6 pb-32">
          <div className="flex flex-col gap-16 md:gap-32">
            {/* Project 01 - QUANTUM_BANK */}
            <div className="group relative">
              <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-center">
                <div className="md:col-span-5 order-2 md:order-1">
                  <div className="mb-6">
                    <span className="text-primary font-mono text-sm font-bold tracking-widest block mb-4">
                      [ 01 ] "QUANTUM_BANK" // FINTECH
                    </span>
                    <div className="flex gap-4 mb-4">
                      <div className="flex flex-col">
                        <span className="text-[9px] text-text-gray uppercase tracking-widest font-mono">
                          Tech Stack
                        </span>
                        <span className="text-xs font-bold text-text-cream tracking-wider uppercase">
                          SwiftUI / Combine / MVVM
                        </span>
                      </div>
                      <div className="w-px h-8 bg-border-subtle mx-2"></div>
                      <div className="flex flex-col">
                        <span className="text-[9px] text-text-gray uppercase tracking-widest font-mono">
                          Year
                        </span>
                        <span className="text-xs font-bold text-text-cream tracking-wider uppercase">
                          2024
                        </span>
                      </div>
                    </div>
                    <p className="text-text-gray text-sm leading-relaxed max-w-md">
                      High-performance banking application focusing on real-time
                      transaction processing and biometrically secured wallet
                      architectures.
                    </p>
                  </div>
                  <a
                    className="inline-flex items-center gap-2 px-4 py-2 border border-primary/40 text-primary text-xs font-bold tracking-widest hover:bg-primary hover:text-white transition-all duration-300"
                    href="#"
                  >
                    VIEW CASE STUDY{" "}
                    <span className="material-symbols-outlined text-sm">
                      arrow_outward
                    </span>
                  </a>
                </div>
                <div className="md:col-span-7 order-1 md:order-2 flex justify-center md:justify-end">
                  <div className="relative w-[280px] h-[580px] bg-surface-dark rounded-[3rem] device-frame overflow-hidden group-hover:scale-[1.02] transition-transform duration-500">
                    <div className="absolute inset-0 bg-[#0a0a0a] flex flex-col p-6">
                      <div className="w-12 h-1 bg-white/20 rounded-full self-center mb-8"></div>
                      <div className="w-full h-32 bg-primary/10 rounded-2xl mb-4 border border-primary/20 flex flex-col p-4 justify-between">
                        <div className="h-2 w-16 bg-primary/40 rounded"></div>
                        <div className="h-6 w-32 bg-primary/80 rounded"></div>
                      </div>
                      <div className="grid grid-cols-2 gap-4">
                        <div className="h-24 bg-surface-dark/50 rounded-2xl border border-white/5"></div>
                        <div className="h-24 bg-surface-dark/50 rounded-2xl border border-white/5"></div>
                      </div>
                      <div className="mt-4 h-48 bg-surface-dark/50 rounded-2xl border border-white/5"></div>
                    </div>
                    <div className="absolute inset-0 diagonal-stripe-overlay opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none flex items-center justify-center">
                      <div className="bg-primary text-white font-mono font-bold text-xs tracking-widest py-2 px-4 shadow-2xl">
                        OPEN_ARCHIVE
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="mt-16 h-px w-full dashed-separator"></div>
            </div>

            {/* Project 02 - FLUX_STREAM */}
            <div className="group relative">
              <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-center">
                <div className="md:col-span-7 flex justify-center md:justify-start">
                  <div className="relative w-[280px] h-[580px] bg-surface-dark rounded-[3rem] device-frame overflow-hidden group-hover:scale-[1.02] transition-transform duration-500">
                    <div className="absolute inset-0 bg-[#0a0a0a] flex flex-col p-6">
                      <div className="w-12 h-1 bg-white/20 rounded-full self-center mb-8"></div>
                      <div className="flex items-center gap-4 mb-8">
                        <div className="size-12 rounded-full bg-text-cream/10"></div>
                        <div className="space-y-2">
                          <div className="h-2 w-24 bg-text-cream/40 rounded"></div>
                          <div className="h-2 w-16 bg-text-cream/20 rounded"></div>
                        </div>
                      </div>
                      <div className="space-y-4">
                        <div className="h-12 w-full border-b border-white/10 flex items-center justify-between">
                          <div className="h-2 w-20 bg-white/20"></div>
                          <div className="h-4 w-4 rounded-full bg-primary/40"></div>
                        </div>
                        <div className="h-12 w-full border-b border-white/10 flex items-center justify-between">
                          <div className="h-2 w-32 bg-white/20"></div>
                          <div className="h-4 w-4 rounded-full bg-primary/40"></div>
                        </div>
                        <div className="h-12 w-full border-b border-white/10 flex items-center justify-between">
                          <div className="h-2 w-24 bg-white/20"></div>
                          <div className="h-4 w-4 rounded-full bg-primary/40"></div>
                        </div>
                      </div>
                    </div>
                    <div className="absolute inset-0 diagonal-stripe-overlay opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none flex items-center justify-center">
                      <div className="bg-primary text-white font-mono font-bold text-xs tracking-widest py-2 px-4 shadow-2xl">
                        EXPLORE_UX
                      </div>
                    </div>
                  </div>
                </div>
                <div className="md:col-span-5">
                  <div className="mb-6">
                    <span className="text-primary font-mono text-sm font-bold tracking-widest block mb-4">
                      [ 02 ] "FLUX_STREAM" // MULTIMEDIA
                    </span>
                    <div className="flex gap-4 mb-4">
                      <div className="flex flex-col">
                        <span className="text-[9px] text-text-gray uppercase tracking-widest font-mono">
                          Tech Stack
                        </span>
                        <span className="text-xs font-bold text-text-cream tracking-wider uppercase">
                          Flutter / Dart / Firebase
                        </span>
                      </div>
                      <div className="w-px h-8 bg-border-subtle mx-2"></div>
                      <div className="flex flex-col">
                        <span className="text-[9px] text-text-gray uppercase tracking-widest font-mono">
                          Year
                        </span>
                        <span className="text-xs font-bold text-text-cream tracking-wider uppercase">
                          2023
                        </span>
                      </div>
                    </div>
                    <p className="text-text-gray text-sm leading-relaxed max-w-md">
                      A decentralized media streaming engine built for creators,
                      featuring sub-second latency and custom video encoding
                      pipelines.
                    </p>
                  </div>
                  <a
                    className="inline-flex items-center gap-2 px-4 py-2 border border-primary/40 text-primary text-xs font-bold tracking-widest hover:bg-primary hover:text-white transition-all duration-300"
                    href="#"
                  >
                    VIEW CASE STUDY{" "}
                    <span className="material-symbols-outlined text-sm">
                      arrow_outward
                    </span>
                  </a>
                </div>
              </div>
              <div className="mt-16 h-px w-full dashed-separator"></div>
            </div>

            {/* Project 03 - URBAN_METER */}
            <div className="group relative">
              <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-center">
                <div className="md:col-span-5 order-2 md:order-1">
                  <div className="mb-6">
                    <span className="text-primary font-mono text-sm font-bold tracking-widest block mb-4">
                      [ 03 ] "URBAN_METER" // LOGISTICS
                    </span>
                    <div className="flex gap-4 mb-4">
                      <div className="flex flex-col">
                        <span className="text-[9px] text-text-gray uppercase tracking-widest font-mono">
                          Tech Stack
                        </span>
                        <span className="text-xs font-bold text-text-cream tracking-wider uppercase">
                          Kotlin / Jetpack Compose
                        </span>
                      </div>
                      <div className="w-px h-8 bg-border-subtle mx-2"></div>
                      <div className="flex flex-col">
                        <span className="text-[9px] text-text-gray uppercase tracking-widest font-mono">
                          Year
                        </span>
                        <span className="text-xs font-bold text-text-cream tracking-wider uppercase">
                          2022
                        </span>
                      </div>
                    </div>
                    <p className="text-text-gray text-sm leading-relaxed max-w-md">
                      Real-time fleet management system for metropolitan
                      logistics, optimized for offline-first data synchronization.
                    </p>
                  </div>
                  <a
                    className="inline-flex items-center gap-2 px-4 py-2 border border-primary/40 text-primary text-xs font-bold tracking-widest hover:bg-primary hover:text-white transition-all duration-300"
                    href="#"
                  >
                    VIEW CASE STUDY{" "}
                    <span className="material-symbols-outlined text-sm">
                      arrow_outward
                    </span>
                  </a>
                </div>
                <div className="md:col-span-7 order-1 md:order-2 flex justify-center md:justify-end">
                  <div className="relative w-[280px] h-[580px] bg-surface-dark rounded-[3rem] device-frame overflow-hidden group-hover:scale-[1.02] transition-transform duration-500">
                    <div className="absolute inset-0 bg-[#0a0a0a] flex flex-col items-center justify-center p-6">
                      <div className="w-12 h-1 bg-white/20 rounded-full absolute top-6"></div>
                      <div className="size-48 border-[12px] border-primary/20 rounded-full flex items-center justify-center relative">
                        <div className="size-40 border-4 border-dashed border-primary/40 rounded-full animate-[spin_10s_linear_infinite]"></div>
                        <div className="absolute inset-0 flex flex-col items-center justify-center">
                          <div className="text-primary text-4xl font-display font-black">
                            74%
                          </div>
                          <div className="text-[8px] text-white/40 tracking-widest font-mono">
                            ACTIVE_FLEET
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="absolute inset-0 diagonal-stripe-overlay opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none flex items-center justify-center">
                      <div className="bg-primary text-white font-mono font-bold text-xs tracking-widest py-2 px-4 shadow-2xl">
                        ANALYZE_DATA
                      </div>
                    </div>
                  </div>
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
                Ready to start the next build?
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
          className="fixed bottom-8 right-8 z-50 group flex items-center justify-center size-14 rounded-full border border-border-subtle bg-background-dark/80 backdrop-blur hover:border-primary transition-colors"
          href="#"
        >
          <span className="material-symbols-outlined text-text-cream group-hover:text-primary transition-colors -rotate-90">
            arrow_forward
          </span>
          <div className="absolute -top-1 -right-1 size-2 bg-primary rounded-full"></div>
        </a>
      </main>
    </>
  );
};

export default Portfolio;