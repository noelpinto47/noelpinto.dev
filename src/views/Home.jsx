import React, { useState } from "react";
import ContactService from "../services/contactService";

const Home = () => {
  // Contact form state
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [loading, setLoading] = useState(false);
  const [errors, setErrors] = useState({});
  const [submitStatus, setSubmitStatus] = useState({
    show: false,
    success: false,
    message: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
    if (errors[name]) {
      setErrors((prev) => ({ ...prev, [name]: "" }));
    }
  };

  const validateForm = () => {
    const newErrors = {};
    if (!formData.name.trim()) newErrors.name = "Name is required";
    if (!formData.email.trim()) {
      newErrors.email = "Email is required";
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = "Please enter a valid email address";
    }
    if (!formData.message.trim()) newErrors.message = "Message is required";

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!validateForm()) return;

    setLoading(true);

    try {
      await ContactService.submitContactForm(formData);

      setSubmitStatus({
        show: true,
        success: true,
        message: "Message sent successfully! I'll get back to you soon.",
      });

      setFormData({ name: "", email: "", message: "" });
      setErrors({});

      setTimeout(() => {
        setSubmitStatus((prev) => ({ ...prev, show: false }));
      }, 5000);
    } catch (error) {
      console.error("Form submission error:", error);
      setSubmitStatus({
        show: true,
        success: false,
        message: error.message || "Something went wrong. Please try again later.",
      });

      setTimeout(() => {
        setSubmitStatus((prev) => ({ ...prev, show: false }));
      }, 5000);
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      {/* Fixed Architectural Vertical Lines (Background) */}
      <div className="fixed inset-0 z-0 pointer-events-none overflow-hidden">
        <div className="absolute top-0 left-[10%] w-px h-full bg-border-subtle/30"></div>
        <div className="absolute top-0 left-[50%] w-px h-full bg-border-subtle/20"></div>
        <div className="absolute top-0 left-[90%] w-px h-full bg-border-subtle/30"></div>
      </div>

      <main className="bg-background-dark text-text-cream font-sans antialiased min-h-screen flex flex-col scroll-smooth">
        {/* Sticky Header / Navigation */}
        <header className="fixed top-0 left-0 right-0 z-50 bg-background-dark/80 backdrop-blur-md border-b border-border-subtle">
          <div className="max-w-[1440px] mx-auto px-6 py-4 flex justify-between items-center">
            <a
              href="#hero"
              className="text-xl font-display font-bold tracking-tighter text-text-cream hover:text-primary transition-colors"
            >
              NP<span className="text-primary">.</span>
            </a>
            <nav className="flex items-center gap-8">
              <a
                href="#work"
                className="text-xs font-bold tracking-widest text-text-gray hover:text-primary transition-colors uppercase"
              >
                Work
              </a>
              <a
                href="#about"
                className="text-xs font-bold tracking-widest text-text-gray hover:text-primary transition-colors uppercase"
              >
                About
              </a>
              <a
                href="#contact"
                className="text-xs font-bold tracking-widest text-text-gray hover:text-primary transition-colors uppercase"
              >
                Contact
              </a>
            </nav>
          </div>
        </header>

        {/* ============================== */}
        {/* HERO SECTION */}
        {/* ============================== */}
        <section
          id="hero"
          className="min-h-screen flex flex-col justify-center items-center pt-20 relative"
        >
          {/* Coordinate Decoration */}
          <div className="absolute top-28 left-6 text-[10px] text-text-gray font-mono tracking-wider opacity-50 hidden md:block">
            LAT: 19.0760° N
            <br />
            LON: 72.8777° E
          </div>

          {/* Main Title Block */}
          <div className="flex flex-col items-center gap-1 mb-8">
            <span className="text-primary text-xs font-bold tracking-[0.3em] uppercase font-mono">
              Mobile Application Developer
            </span>
            <h1 className="text-[12vw] md:text-[10vw] lg:text-[120px] font-display font-black leading-[0.85] tracking-tighter text-text-cream relative">
              NOEL
              <br />
              <span className="flex items-baseline">
                PINTO
                <span className="text-primary text-[1.5em] leading-none">.</span>
              </span>
            </h1>
          </div>

          {/* Sub-text */}
          <div className="max-w-md text-center px-4">
            <p className="text-text-gray text-sm font-light leading-relaxed">
              Crafting <span className="text-text-cream font-normal">high-performance</span>,{" "}
              <span className="text-text-cream font-normal">pixel-perfect</span> native
              experiences for iOS &amp; Android. Based in{" "}
              <span className="text-primary font-medium">Mumbai, India</span>.
            </p>
          </div>

          {/* Scroll Indicator */}
          <a
            href="#work"
            className="absolute bottom-12 left-1/2 -translate-x-1/2 flex flex-col items-center gap-3 opacity-70 hover:opacity-100 transition-opacity"
          >
            <span className="text-[9px] font-mono tracking-[0.2em] text-text-gray uppercase">
              Scroll to Explore
            </span>
            <div className="w-6 h-10 border border-text-gray/50 rounded-full flex justify-center pt-2">
              <div className="w-1.5 h-1.5 bg-primary rounded-full animate-bounce"></div>
            </div>
          </a>
        </section>

        {/* ============================== */}
        {/* WORK SECTION */}
        {/* ============================== */}
        <section id="work" className="w-full flex flex-col items-center py-32">
          {/* Section Label */}
          <div className="w-full max-w-[1200px] px-4 mb-16">
            <div className="flex items-center gap-4">
              <div className="h-px bg-border-subtle flex-1 technical-border"></div>
              <h4 className="text-text-gray text-xs font-bold tracking-[0.2em] uppercase whitespace-nowrap">
                // SELECTED WORKS 2023-2024
              </h4>
              <div className="h-px bg-border-subtle flex-1 technical-border"></div>
            </div>
          </div>

          {/* Project Grid */}
          <div className="w-full max-w-[1200px] px-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-16">
              {/* Project Card 01 */}
              <article className="group relative flex flex-col gap-4">
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
                  <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none">
                    <div className="bg-primary text-white text-xs font-bold px-4 py-2 tracking-widest uppercase shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]">
                      [ View Case Study ]
                    </div>
                  </div>
                </div>
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
          </div>
        </section>

        {/* ============================== */}
        {/* ABOUT SECTION */}
        {/* ============================== */}
        <section id="about" className="w-full flex flex-col items-center py-32">
          {/* Section Header */}
          <div className="w-full max-w-[1440px] px-6 mb-16">
            <div className="flex items-center gap-4">
              <div className="h-px bg-border-subtle flex-1 technical-border"></div>
              <h4 className="text-text-gray text-xs font-bold tracking-[0.2em] uppercase whitespace-nowrap">
                // ABOUT ME
              </h4>
              <div className="h-px bg-border-subtle flex-1 technical-border"></div>
            </div>
          </div>

          {/* Profile Section */}
          <div className="w-full max-w-[1200px] px-6 mb-24">
            <div className="grid grid-cols-1 md:grid-cols-12 gap-12 md:gap-8">
              <div className="md:col-span-3">
                <div className="sticky top-32">
                  <span className="text-text-gray font-mono text-sm font-bold tracking-widest border border-border-subtle px-3 py-1 inline-block">
                    01_PROFILE
                  </span>
                </div>
              </div>
              <div className="md:col-span-9">
                <p className="text-2xl md:text-3xl font-display text-text-cream leading-snug mb-8">
                  I'm a{" "}
                  <span className="text-primary">Mobile Application Developer</span>{" "}
                  with a passion for building{" "}
                  <span className="italic">exceptional user experiences</span>.
                </p>
                <p className="text-text-gray leading-relaxed text-base mb-6">
                  Over the past 6+ years, I've specialized in developing native and
                  cross-platform mobile applications for startups and established
                  companies alike. My approach combines meticulous attention to
                  detail with a deep understanding of mobile platform guidelines and
                  performance optimization.
                </p>
                <p className="text-text-gray leading-relaxed text-base">
                  I believe in the power of collaboration between design and
                  engineering. My workflow is centered on creating seamless,
                  accessible, and visually stunning interfaces that delight users
                  and drive business results.
                </p>

                {/* Stats */}
                <div className="flex gap-8 mt-12 pt-8 border-t border-dashed border-border-subtle/50">
                  <div className="flex flex-col">
                    <span className="text-4xl font-display font-black text-primary">
                      6+
                    </span>
                    <span className="text-[10px] text-text-gray uppercase tracking-widest mt-1 font-mono">
                      Years Experience
                    </span>
                  </div>
                  <div className="w-px h-16 bg-border-subtle"></div>
                  <div className="flex flex-col">
                    <span className="text-4xl font-display font-black text-primary">
                      24
                    </span>
                    <span className="text-[10px] text-text-gray uppercase tracking-widest mt-1 font-mono">
                      Projects Shipped
                    </span>
                  </div>
                  <div className="w-px h-16 bg-border-subtle"></div>
                  <div className="flex flex-col">
                    <span className="text-4xl font-display font-black text-primary">
                      100%
                    </span>
                    <span className="text-[10px] text-text-gray uppercase tracking-widest mt-1 font-mono">
                      Client Retention
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Separator */}
          <div className="w-full max-w-[1440px] px-6">
            <div className="h-px bg-border-subtle w-full technical-border"></div>
          </div>

          {/* Timeline Section */}
          <div className="w-full max-w-[1200px] px-6 py-24">
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
          </div>

          {/* Separator */}
          <div className="w-full max-w-[1440px] px-6">
            <div className="h-px bg-border-subtle w-full technical-border"></div>
          </div>

          {/* Skills Section */}
          <div className="w-full max-w-[1200px] px-6 py-24">
            <div className="grid grid-cols-1 md:grid-cols-12 gap-12 md:gap-8">
              <div className="md:col-span-3">
                <div className="sticky top-32">
                  <span className="text-text-gray font-mono text-sm font-bold tracking-widest border border-border-subtle px-3 py-1 inline-block">
                    03_SKILLS
                  </span>
                  <div className="mt-4 text-[10px] text-text-gray font-mono opacity-50 block border-l border-border-subtle pl-2">
                    STACK: FULL
                    <br />
                    TYPE: NATIVE
                  </div>
                </div>
              </div>
              <div className="md:col-span-9">
                <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
                  {[
                    { category: "Mobile", name: "SWIFT UI" },
                    { category: "Mobile", name: "KOTLIN" },
                    { category: "Cross-Plat", name: "FLUTTER" },
                    { category: "Cross-Plat", name: "REACT NATIVE" },
                    { category: "Core", name: "TYPESCRIPT" },
                    { category: "Tools", name: "GIT / CI-CD" },
                    { category: "Design", name: "FIGMA" },
                    { category: "Backend", name: "NODE.JS" },
                  ].map((skill, index) => (
                    <div
                      key={index}
                      className="group border border-border-subtle p-4 hover:border-primary transition-all duration-300 bg-surface-dark/30 hover:bg-surface-dark relative overflow-hidden"
                    >
                      <div className="diagonal-stripe absolute top-0 right-0 w-8 h-8 opacity-0 group-hover:opacity-20 transition-opacity"></div>
                      <span className="text-[9px] text-text-gray uppercase tracking-widest block mb-3 font-mono">
                        {skill.category}
                      </span>
                      <span className="text-base font-bold text-text-cream tracking-wide">
                        {skill.name}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ============================== */}
        {/* CONTACT SECTION */}
        {/* ============================== */}
        <section id="contact" className="w-full flex flex-col items-center py-32">
          {/* Section Header */}
          <div className="w-full max-w-[1440px] px-6 mb-16">
            <div className="flex items-center gap-4">
              <div className="h-px bg-border-subtle flex-1 technical-border"></div>
              <h4 className="text-text-gray text-xs font-bold tracking-[0.2em] uppercase whitespace-nowrap">
                // GET IN TOUCH
              </h4>
              <div className="h-px bg-border-subtle flex-1 technical-border"></div>
            </div>
          </div>

          <div className="w-full max-w-[1200px] px-6">
            {/* Status Badge */}
            <div className="mb-8 flex justify-center">
              <div className="text-[10px] text-primary font-mono tracking-widest border border-primary px-3 py-1.5 uppercase bg-primary/5 shadow-[0_0_15px_rgba(255,106,0,0.1)]">
                Status: Accepting New Clients
              </div>
            </div>

            {/* Status Message */}
            {submitStatus.show && (
              <div
                className={`mb-8 p-4 border rounded ${
                  submitStatus.success
                    ? "bg-green-500/10 border-green-500/30 text-green-400"
                    : "bg-red-500/10 border-red-500/30 text-red-400"
                } animate-in fade-in slide-in-from-top-4 duration-300`}
              >
                <p className="text-sm font-mono">{submitStatus.message}</p>
              </div>
            )}

            {/* Content Grid */}
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-24 items-start">
              {/* Left Column - Info */}
              <div className="lg:col-span-5 flex flex-col gap-12">
                <div>
                  <p className="text-lg md:text-xl text-text-gray font-display italic leading-relaxed border-l-2 border-primary/50 pl-6 py-1">
                    "Building precise digital architectures requires open channels.
                    Initiate the sequence on the right or establish a direct link
                    below."
                  </p>
                </div>

                <div className="space-y-8">
                  <div>
                    <div className="flex items-center gap-4 mb-4">
                      <span className="h-px w-8 bg-border-subtle"></span>
                      <h3 className="text-xs font-bold tracking-[0.2em] text-text-cream uppercase">
                        Direct Connection
                      </h3>
                    </div>
                    <a
                      className="group block w-fit"
                      href="mailto:hello@noelpinto.com"
                    >
                      <div className="text-2xl md:text-3xl font-display text-text-cream group-hover:text-primary transition-colors flex items-center gap-3">
                        <span>hello@noelpinto.com</span>
                        <span className="material-symbols-outlined text-sm opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all text-primary">
                          arrow_outward
                        </span>
                      </div>
                      <div className="h-px w-full bg-border-subtle mt-2 group-hover:bg-primary transition-colors duration-500"></div>
                    </a>
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-8 pt-10 border-t border-dashed border-border-subtle/50 mt-4">
                  <div>
                    <h4 className="text-[9px] font-mono tracking-widest text-text-gray mb-4 uppercase opacity-60">
                      Social_Networks
                    </h4>
                    <ul className="flex flex-col gap-3 text-xs font-bold tracking-widest font-sans">
                      <li>
                        <a
                          className="hover:text-primary transition-colors text-text-cream flex items-center gap-2"
                          href="#"
                        >
                          <span className="w-1 h-1 bg-text-gray rounded-full"></span>{" "}
                          [ GITHUB ]
                        </a>
                      </li>
                      <li>
                        <a
                          className="hover:text-primary transition-colors text-text-cream flex items-center gap-2"
                          href="#"
                        >
                          <span className="w-1 h-1 bg-text-gray rounded-full"></span>{" "}
                          [ LINKEDIN ]
                        </a>
                      </li>
                      <li>
                        <a
                          className="hover:text-primary transition-colors text-text-cream flex items-center gap-2"
                          href="#"
                        >
                          <span className="w-1 h-1 bg-text-gray rounded-full"></span>{" "}
                          [ TWITTER ]
                        </a>
                      </li>
                    </ul>
                  </div>
                  <div className="flex flex-col justify-end">
                    <div className="text-right group cursor-crosshair">
                      <span className="material-symbols-outlined text-primary/50 group-hover:text-primary mb-2 text-xl transition-colors">
                        my_location
                      </span>
                      <p className="text-[10px] font-mono text-text-gray leading-tight group-hover:text-text-cream transition-colors">
                        LAT: 19.0760° N
                        <br />
                        LON: 72.8777° E
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Right Column - Form */}
              <div className="lg:col-span-7">
                <form onSubmit={handleSubmit} className="flex flex-col gap-8 relative">
                  <div className="absolute -top-4 -left-4 w-4 h-4 border-t border-l border-text-gray/20"></div>
                  <div className="absolute -bottom-4 -right-4 w-4 h-4 border-b border-r border-text-gray/20"></div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    {/* Name Field */}
                    <div className="group relative">
                      <label className="block text-[10px] font-bold tracking-[0.2em] text-text-gray mb-3 uppercase group-focus-within:text-primary transition-colors">
                        01 // Identification
                      </label>
                      <input
                        type="text"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        className={`w-full bg-background-dark border ${
                          errors.name ? "border-red-500" : "border-text-cream/30"
                        } p-4 text-text-cream placeholder-text-gray/20 focus:border-primary focus:ring-0 outline-none transition-all duration-300 font-sans text-sm rounded-none hover:border-text-cream/50`}
                        placeholder="ENTER NAME"
                      />
                      {errors.name && (
                        <p className="text-red-400 text-xs mt-2 font-mono">
                          {errors.name}
                        </p>
                      )}
                    </div>

                    {/* Email Field */}
                    <div className="group relative">
                      <label className="block text-[10px] font-bold tracking-[0.2em] text-text-gray mb-3 uppercase group-focus-within:text-primary transition-colors">
                        02 // Return Address
                      </label>
                      <input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        className={`w-full bg-background-dark border ${
                          errors.email ? "border-red-500" : "border-text-cream/30"
                        } p-4 text-text-cream placeholder-text-gray/20 focus:border-primary focus:ring-0 outline-none transition-all duration-300 font-sans text-sm rounded-none hover:border-text-cream/50`}
                        placeholder="ENTER EMAIL"
                      />
                      {errors.email && (
                        <p className="text-red-400 text-xs mt-2 font-mono">
                          {errors.email}
                        </p>
                      )}
                    </div>
                  </div>

                  {/* Message Field */}
                  <div className="group relative">
                    <label className="block text-[10px] font-bold tracking-[0.2em] text-text-gray mb-3 uppercase group-focus-within:text-primary transition-colors">
                      03 // Data Packet
                    </label>
                    <textarea
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      className={`w-full bg-background-dark border ${
                        errors.message ? "border-red-500" : "border-text-cream/30"
                      } p-4 text-text-cream placeholder-text-gray/20 focus:border-primary focus:ring-0 outline-none transition-all duration-300 font-sans text-sm rounded-none resize-none hover:border-text-cream/50`}
                      placeholder="ENTER MESSAGE CONTENT..."
                      rows="6"
                    />
                    {errors.message && (
                      <p className="text-red-400 text-xs mt-2 font-mono">
                        {errors.message}
                      </p>
                    )}
                  </div>

                  {/* Submit Button */}
                  <div className="flex justify-end pt-4">
                    <button
                      type="submit"
                      disabled={loading}
                      className="group relative bg-primary text-white hover:bg-white hover:text-black transition-all duration-300 py-4 px-10 text-xs font-bold tracking-[0.25em] uppercase shadow-[4px_4px_0px_0px_rgba(255,255,255,0.1)] hover:shadow-none border border-transparent overflow-hidden disabled:opacity-50 disabled:cursor-not-allowed"
                    >
                      <span className="relative z-10">
                        {loading ? "SENDING..." : '"Send Message"'}
                      </span>
                      <div className="absolute inset-0 bg-white transform -translate-x-full group-hover:translate-x-0 transition-transform duration-300 ease-in-out z-0"></div>
                    </button>
                  </div>
                </form>
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
          href="#hero"
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

export default Home;
