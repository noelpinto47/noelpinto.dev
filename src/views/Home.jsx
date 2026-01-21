import React from "react";
import { Link } from "react-router-dom";

const Home = () => {
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
      <main className="relative z-10 pt-20 flex flex-col items-center w-full">
        {/* Hero Section */}
        <section className="w-full max-w-[1200px] min-h-[85vh] flex flex-col justify-center items-center px-4 py-20 relative">
          {/* Decor elements */}
          <div className="absolute top-10 left-4 md:left-0 text-[10px] text-text-gray font-mono tracking-widest opacity-50">
            COORD: 19.0760° N, 72.8777° E
          </div>
          <div className="absolute bottom-10 right-4 md:right-0 text-[10px] text-primary font-mono tracking-widest border border-primary px-2 py-1">
            STATUS: AVAILABLE FOR HIRE
          </div>

          {/* Main Title Block */}
          <div className="flex flex-col items-center text-center gap-4 animate-in fade-in slide-in-from-bottom-8 duration-700">
            <h2 className="text-primary text-xs md:text-sm font-bold tracking-[0.4em] uppercase font-sans mb-2">
              "Mobile Applications Engineer"
            </h2>
            <h1 className="text-8xl md:text-9xl lg:text-[10rem] font-display font-black leading-[0.85] tracking-tighter text-text-cream mix-blend-screen">
              NOEL PINTO<span className="text-primary">.</span>
            </h1>
            <div className="h-px w-24 bg-text-gray/30 my-6"></div>
            <p className="max-w-xl text-text-gray font-display text-lg md:text-xl italic leading-relaxed">
              Building precise digital architectures for the handheld web.
              <span className="not-italic text-xs font-sans text-primary ml-2 align-middle border border-primary/30 px-1 rounded-sm">
                V.2.0
              </span>
            </p>
          </div>

          {/* CTA */}
          <div className="mt-16 md:mt-24 group cursor-pointer">
            <div className="flex flex-col items-center gap-2">
              <span className="text-[10px] tracking-[0.2em] text-text-gray group-hover:text-primary transition-colors">
                SCROLL TO EXPLORE
              </span>
              <div className="h-12 w-[1px] bg-gradient-to-b from-primary to-transparent"></div>
            </div>
          </div>
        </section>

        {/* Separator / Meta Header */}
        <div className="w-full max-w-[1440px] px-6 py-10">
          <div className="flex items-center gap-4 w-full">
            <div className="h-px bg-border-subtle flex-1 technical-border"></div>
            <h4 className="text-text-gray text-xs font-bold tracking-[0.2em] uppercase whitespace-nowrap">
              // SELECTED WORKS 2023-2024
            </h4>
            <div className="h-px bg-border-subtle flex-1 technical-border"></div>
          </div>
        </div>

        {/* Project Grid */}
        <section className="w-full max-w-[1200px] px-4 pb-32">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-16">
            {/* Project Card 01 */}
            <article className="group relative flex flex-col gap-4">
              {/* Project Header */}
              <div className="flex justify-between items-end border-b border-border-subtle pb-2">
                <span className="text-4xl font-display font-bold text-text-cream/20 group-hover:text-primary/40 transition-colors">
                  01.
                </span>
                <div className="flex gap-2">
                  <span className="text-[10px] uppercase tracking-wider border border-border-subtle px-2 py-0.5 text-text-gray rounded-sm group-hover:border-primary group-hover:text-primary transition-colors">
                    SwiftUI
                  </span>
                  <span className="text-[10px] uppercase tracking-wider border border-border-subtle px-2 py-0.5 text-text-gray rounded-sm">
                    FinTech
                  </span>
                </div>
              </div>
              {/* Image Container */}
              <div className="relative aspect-[4/3] w-full overflow-hidden bg-surface-dark border border-border-subtle group-hover:border-primary transition-all duration-500 rounded-sm">
                <div className="absolute top-3 left-3 z-10 bg-background-dark/80 backdrop-blur px-2 py-1 text-[9px] text-primary font-mono border border-primary/20">
                  IMG_SRC: APP_DASHBOARD
                </div>
                <div
                  className="w-full h-full bg-cover bg-center transition-all duration-700 grayscale group-hover:grayscale-0 group-hover:scale-105"
                  style={{
                    backgroundImage:
                      "url('https://lh3.googleusercontent.com/aida-public/AB6AXuCRDf6bpV_q-coV0VHdAw06bqeA82oQKno_XuS_CSeyMg7wjb9wiednZxBbKF_-19nqw8okh4jglmo9dAMo5puJhJsE4ADd_VknOKb_Brz01_HWiplqsSxDwwwCI3kZG6f7IUk71xI2yd6AF2DlXKgJRczvrJlUI-ka2o8aSVQ5V6AWlMBNh1KPhYtGqGJruheKRBdiTEzHYtBVoK5_n99C3wY9FUDtzVT9fwYB4BlhT5CQDSwPT-JvKhwEwvcQWOw3CGrjvMt1ke-e')",
                  }}
                >
                  <div className="absolute inset-0 bg-black/20 group-hover:bg-transparent transition-colors"></div>
                </div>
                {/* Hover Action */}
                <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none">
                  <div className="bg-primary text-white text-xs font-bold px-4 py-2 tracking-widest uppercase shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]">
                    [ View Case Study ]
                  </div>
                </div>
              </div>
              {/* Description */}
              <div className="flex flex-col gap-1 mt-2">
                <h3 className="text-2xl font-display text-text-cream font-bold group-hover:text-primary transition-colors">
                  FinTech Pro
                </h3>
                <p className="text-sm text-text-gray font-light max-w-sm">
                  A complete overhaul of the banking experience for Gen Z users,
                  focusing on micro-interactions and data visualization.
                </p>
              </div>
            </article>

            {/* Project Card 02 */}
            <article className="group relative flex flex-col gap-4 md:mt-24">
              {/* Project Header */}
              <div className="flex justify-between items-end border-b border-border-subtle pb-2">
                <span className="text-4xl font-display font-bold text-text-cream/20 group-hover:text-primary/40 transition-colors">
                  02.
                </span>
                <div className="flex gap-2">
                  <span className="text-[10px] uppercase tracking-wider border border-border-subtle px-2 py-0.5 text-text-gray rounded-sm group-hover:border-primary group-hover:text-primary transition-colors">
                    React Native
                  </span>
                  <span className="text-[10px] uppercase tracking-wider border border-border-subtle px-2 py-0.5 text-text-gray rounded-sm">
                    E-Comm
                  </span>
                </div>
              </div>
              {/* Image Container */}
              <div className="relative aspect-[4/3] w-full overflow-hidden bg-surface-dark border border-border-subtle group-hover:border-primary transition-all duration-500 rounded-sm">
                <div className="absolute top-3 left-3 z-10 bg-background-dark/80 backdrop-blur px-2 py-1 text-[9px] text-primary font-mono border border-primary/20">
                  IMG_SRC: PRODUCT_DETAIL
                </div>
                <div
                  className="w-full h-full bg-cover bg-center transition-all duration-700 grayscale group-hover:grayscale-0 group-hover:scale-105"
                  style={{
                    backgroundImage:
                      "url('https://lh3.googleusercontent.com/aida-public/AB6AXuD6DMjTAzqavm3EeHiGqNLdr2sC5XIb8HpISTO7_hclge9Agobl7FsuimPr_gm_0fn_1OSMi10ZGCSgZ82g2ynx94x93HZ-3QqXxcA3TdL9CwbYehwa9kcGh_n3sQBcGfvqzTMVVH3sL9wxhg0hq77foIfMvz7-n9LyJR1EC3KM6YRrnLlJ8OQJacSGfqIyM3zQg99Nn--c-8V6Z0ScUbshNEiB7IqL0cF1CYaI97SbOjaIujenvbm6RfdMs3TRUrB_dN164q5vaCEo')",
                  }}
                >
                  <div className="absolute inset-0 bg-black/20 group-hover:bg-transparent transition-colors"></div>
                </div>
                <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none">
                  <div className="bg-primary text-white text-xs font-bold px-4 py-2 tracking-widest uppercase shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]">
                    [ View Case Study ]
                  </div>
                </div>
              </div>
              {/* Description */}
              <div className="flex flex-col gap-1 mt-2">
                <h3 className="text-2xl font-display text-text-cream font-bold group-hover:text-primary transition-colors">
                  Shopify Mod
                </h3>
                <p className="text-sm text-text-gray font-light max-w-sm">
                  Custom mobile storefront architecture enabling high-performance
                  browsing and AR product previews.
                </p>
              </div>
            </article>

            {/* Project Card 03 */}
            <article className="group relative flex flex-col gap-4">
              {/* Project Header */}
              <div className="flex justify-between items-end border-b border-border-subtle pb-2">
                <span className="text-4xl font-display font-bold text-text-cream/20 group-hover:text-primary/40 transition-colors">
                  03.
                </span>
                <div className="flex gap-2">
                  <span className="text-[10px] uppercase tracking-wider border border-border-subtle px-2 py-0.5 text-text-gray rounded-sm group-hover:border-primary group-hover:text-primary transition-colors">
                    Flutter
                  </span>
                  <span className="text-[10px] uppercase tracking-wider border border-border-subtle px-2 py-0.5 text-text-gray rounded-sm">
                    Health
                  </span>
                </div>
              </div>
              {/* Image Container */}
              <div className="relative aspect-[4/3] w-full overflow-hidden bg-surface-dark border border-border-subtle group-hover:border-primary transition-all duration-500 rounded-sm">
                <div className="absolute top-3 left-3 z-10 bg-background-dark/80 backdrop-blur px-2 py-1 text-[9px] text-primary font-mono border border-primary/20">
                  IMG_SRC: ACTIVITY_TRACKER
                </div>
                <div
                  className="w-full h-full bg-cover bg-center transition-all duration-700 grayscale group-hover:grayscale-0 group-hover:scale-105"
                  style={{
                    backgroundImage:
                      "url('https://lh3.googleusercontent.com/aida-public/AB6AXuDcTJPEmhrVcfbRgFMHTYdGUqSNeUAMT6iKLD0rv6ZAoUXKb6qULxBJwAeRUMYlJx7qGWWxG0cM38VhWnK-79JbUWIZaoGe_THtto-CVx5pwkJ9GKN-PcBZz2WCJA6U0YvV2tJQWmNOr2gASesqn8PJJ4QdoBdWRq62YAY8cELaXxDOCR7d1OPczWZJwzy8jBsKyjUrrAYoPxnbUA6G3siyGbaJVfFxcQ-XqBtGiLXX3OubztoFGqOr54yLZTL7ADDst2T54YOV96TB')",
                  }}
                >
                  <div className="absolute inset-0 bg-black/20 group-hover:bg-transparent transition-colors"></div>
                </div>
                <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none">
                  <div className="bg-primary text-white text-xs font-bold px-4 py-2 tracking-widest uppercase shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]">
                    [ View Case Study ]
                  </div>
                </div>
              </div>
              {/* Description */}
              <div className="flex flex-col gap-1 mt-2">
                <h3 className="text-2xl font-display text-text-cream font-bold group-hover:text-primary transition-colors">
                  Pulse Metrics
                </h3>
                <p className="text-sm text-text-gray font-light max-w-sm">
                  Real-time biometric data visualization connected to wearable
                  hardware APIs.
                </p>
              </div>
            </article>

            {/* Project Card 04 */}
            <article className="group relative flex flex-col gap-4 md:mt-24">
              {/* Project Header */}
              <div className="flex justify-between items-end border-b border-border-subtle pb-2">
                <span className="text-4xl font-display font-bold text-text-cream/20 group-hover:text-primary/40 transition-colors">
                  04.
                </span>
                <div className="flex gap-2">
                  <span className="text-[10px] uppercase tracking-wider border border-border-subtle px-2 py-0.5 text-text-gray rounded-sm group-hover:border-primary group-hover:text-primary transition-colors">
                    KOTLIN
                  </span>
                  <span className="text-[10px] uppercase tracking-wider border border-border-subtle px-2 py-0.5 text-text-gray rounded-sm">
                    MEDIA
                  </span>
                </div>
              </div>
              {/* Image Container */}
              <div className="relative aspect-[4/3] w-full overflow-hidden bg-surface-dark border border-border-subtle group-hover:border-primary transition-all duration-500 rounded-sm">
                <div className="absolute top-3 left-3 z-10 bg-background-dark/80 backdrop-blur px-2 py-1 text-[9px] text-primary font-mono border border-primary/20">
                  IMG_SRC: STREAM_PLAYER
                </div>
                <div
                  className="w-full h-full bg-cover bg-center transition-all duration-700 grayscale group-hover:grayscale-0 group-hover:scale-105"
                  style={{
                    backgroundImage:
                      "url('https://lh3.googleusercontent.com/aida-public/AB6AXuDLQufPiPcmQRSPnAfJJLs6t4SJlSyXlSFkPnnkzxiS9sMwE21XORw7Sx-jxg8xT_DMfCFILA5OP8-6c7LlwVUY5UiPfBXmWfPTXNy74b0hxG5z7f5DrZAq2ekeTYulgO0FEC-72JWiSlAGMgTmQxcmZZNf3AAKfE4G12vO1EWXNcON-T2U1wKG4kFujmKS_8W8Ie6r3C49aaog1MXpt93Kz_2cBygpDE2FmT0dt9dsDNyhVCTvRc3XhvBevAAHY3uNfsP_4AyKsI_K')",
                  }}
                >
                  <div className="absolute inset-0 bg-black/20 group-hover:bg-transparent transition-colors"></div>
                </div>
                <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none">
                  <div className="bg-primary text-white text-xs font-bold px-4 py-2 tracking-widest uppercase shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]">
                    [ View Case Study ]
                  </div>
                </div>
              </div>
              {/* Description */}
              <div className="flex flex-col gap-1 mt-2">
                <h3 className="text-2xl font-display text-text-cream font-bold group-hover:text-primary transition-colors">
                  Sonic Stream
                </h3>
                <p className="text-sm text-text-gray font-light max-w-sm">
                  High-fidelity audio streaming platform with social sharing
                  integration.
                </p>
              </div>
            </article>
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

        {/* Floating Action Button / Scroll Indicator */}
        <a
          className="fixed bottom-8 right-8 z-50 group hidden md:flex items-center justify-center size-14 rounded-full border border-border-subtle bg-background-dark/80 backdrop-blur hover:border-primary transition-colors"
          href="#"
        >
          <span className="material-symbols-outlined text-text-cream group-hover:text-primary transition-colors rotate-90">
            arrow_forward
          </span>
          <div className="absolute -top-1 -right-1 size-3 bg-primary rounded-full animate-pulse"></div>
        </a>
      </main>
    </>
  );
};

export default Home;