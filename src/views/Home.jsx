import React, { useState, useEffect } from "react";
import ContactService from "../services/contactService";

const Home = () => {
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
  const [activeSection, setActiveSection] = useState("hero");
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [screensaverActive, setScreensaverActive] = useState(false);
  const [currentTime, setCurrentTime] = useState(new Date());
  const [quoteIndex, setQuoteIndex] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
      
      const sections = ["hero", "projects", "clients", "about", "contact"];
      const current = sections.find((section) => {
        const el = document.getElementById(section);
        if (el) {
          const rect = el.getBoundingClientRect();
          return rect.top <= 150 && rect.bottom >= 150;
        }
        return false;
      });
      if (current) setActiveSection(current);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Clock update for screensaver
  useEffect(() => {
    if (screensaverActive) {
      const timer = setInterval(() => {
        setCurrentTime(new Date());
      }, 1000);
      return () => clearInterval(timer);
    }
  }, [screensaverActive]);

  // Close screensaver on ESC key, change quote on Space/Enter
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (screensaverActive) {
        if (e.key === 'Escape') {
          setScreensaverActive(false);
        } else if (e.key === ' ' || e.key === 'Enter' || e.key === 'ArrowRight') {
          e.preventDefault();
          setQuoteIndex((prev) => (prev + 1) % quotes.length);
        }
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [screensaverActive]);

  const quotes = [
    "The only way to do great work is to love what you do. — Steve Jobs",
    "Innovation distinguishes between a leader and a follower. — Steve Jobs",
    "Code is like humor. When you have to explain it, it's bad. — Cory House",
    "First, solve the problem. Then, write the code. — John Johnson",
    "Simplicity is the soul of efficiency. — Austin Freeman",
    "Make it work, make it right, make it fast. — Kent Beck",
    "The best error message is the one that never shows up. — Thomas Fuchs",
    "Any fool can write code that a computer can understand. Good programmers write code that humans can understand. — Martin Fowler"
  ];

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

  const navItems = [
    { id: "hero", label: "Home" },
    { id: "projects", label: "Projects" },
    { id: "clients", label: "Work" },
    { id: "about", label: "About" },
    { id: "contact", label: "Contact" },
    { id: "journal", label: "Journal", isExternal: true, path: "/journal" },
    { id: "resume", label: "Hire", isExternal: true, path: "/resume" },
  ];

  const projects = [
    {
      num: "01",
      title: "FINTECH WALLET",
      category: "iOS / Android",
      year: "2024",
      desc: "Cross-platform mobile wallet with biometric authentication and real-time transaction tracking.",
      tags: ["Flutter", "Firebase", "Stripe"],
    },
    {
      num: "02",
      title: "FITNESS TRACKER",
      category: "Native iOS",
      year: "2024",
      desc: "Health & fitness app with Apple Watch integration, workout analytics, and social challenges.",
      tags: ["Swift UI", "HealthKit", "CloudKit"],
    },
    {
      num: "03",
      title: "E-COMMERCE APP",
      category: "React Native",
      year: "2023",
      desc: "Full-featured shopping experience with AR product preview and one-tap checkout.",
      tags: ["React Native", "Node.js", "AWS"],
    },
    {
      num: "04",
      title: "SOCIAL PLATFORM",
      category: "Android",
      year: "2023",
      desc: "Community-driven platform with real-time messaging, stories, and content discovery.",
      tags: ["Kotlin", "Jetpack", "WebSocket"],
    },
  ];

  const clients = [
    {
      name: "TechCorp Industries",
      logo: "TC",
      project: "Enterprise Mobile Suite",
      desc: "Developed a comprehensive mobile solution for internal operations, improving team productivity by 40%.",
    },
    {
      name: "HealthFirst",
      logo: "HF",
      project: "Patient Portal App",
      desc: "Created HIPAA-compliant patient engagement platform with telemedicine integration.",
    },
    {
      name: "RetailMax",
      logo: "RM",
      project: "Omnichannel App",
      desc: "Built unified shopping experience connecting online and in-store customer journeys.",
    },
    {
      name: "FinanceHub",
      logo: "FH",
      project: "Investment Dashboard",
      desc: "Designed real-time portfolio tracking with AI-powered insights and recommendations.",
    },
  ];

  return (
    <>
      <div className="fixed inset-0 z-0 pointer-events-none overflow-hidden">
        <div
          className="absolute inset-0 opacity-[0.02]"
          style={{
            backgroundImage:
              "linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)",
            backgroundSize: "60px 60px",
          }}
        ></div>
        <div className="absolute top-0 left-[10%] w-px h-full bg-gradient-to-b from-transparent via-border-subtle/20 to-transparent"></div>
        <div className="absolute top-0 left-[50%] w-px h-full bg-gradient-to-b from-transparent via-border-subtle/10 to-transparent"></div>
        <div className="absolute top-0 left-[90%] w-px h-full bg-gradient-to-b from-transparent via-border-subtle/20 to-transparent"></div>
        <div className="absolute top-1/4 -left-48 w-96 h-96 bg-primary/5 rounded-full blur-[150px]"></div>
        <div className="absolute bottom-1/4 -right-48 w-96 h-96 bg-primary/3 rounded-full blur-[150px]"></div>
      </div>

      <main className="bg-background-dark text-text-cream font-sans antialiased min-h-screen flex flex-col scroll-smooth relative z-10">
        <header
          className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
            isScrolled
              ? "bg-background-dark/90 backdrop-blur-xl py-3"
              : "bg-transparent py-3"
          }`}
        >
          <div className="max-w-[1440px] mx-auto px-6 flex justify-between items-center">
            <a
              href="#hero"
              className="text-xl font-display font-bold tracking-tighter text-text-cream hover:text-primary transition-colors group relative"
            >
              NP<span className="text-primary">.</span>
              <span className="absolute -right-2 -top-1 w-1.5 h-1.5 bg-primary rounded-full opacity-0 group-hover:opacity-100 transition-opacity"></span>
            </a>
            
            <nav className="hidden md:flex items-center gap-1">
              {navItems.map((item) => (
                item.isExternal ? (
                  <a
                    key={item.id}
                    href={item.path || "/"}
                    className="relative px-4 py-2 text-xs font-bold tracking-[0.15em] uppercase transition-all duration-300 text-text-gray hover:text-primary"
                  >
                    {item.label}
                  </a>
                ) : (
                  <a
                    key={item.id}
                    href={`#${item.id}`}
                    className={`relative px-4 py-2 text-xs font-bold tracking-[0.15em] uppercase transition-all duration-300 ${
                      activeSection === item.id
                        ? "text-primary"
                        : "text-text-gray hover:text-text-cream"
                    }`}
                  >
                    {item.label}
                    <span
                      className={`absolute bottom-0 left-1/2 -translate-x-1/2 h-0.5 bg-primary transition-all duration-300 ${
                        activeSection === item.id ? "w-4" : "w-0"
                      }`}
                    ></span>
                  </a>
                )
              ))}
            </nav>

            <button 
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="md:hidden flex flex-col gap-1.5 p-2 group z-50"
              aria-label="Toggle menu"
            >
              <span className={`w-5 h-0.5 bg-text-cream transition-all duration-300 ${
                mobileMenuOpen ? 'rotate-45 translate-y-2' : ''
              }`}></span>
              <span className={`w-5 h-0.5 bg-primary transition-all duration-300 ${
                mobileMenuOpen ? 'opacity-0' : ''
              }`}></span>
              <span className={`w-5 h-0.5 bg-text-cream transition-all duration-300 ${
                mobileMenuOpen ? '-rotate-45 -translate-y-2' : ''
              }`}></span>
            </button>
          </div>

          {/* Mobile Menu */}
          <div className={`md:hidden fixed inset-0 bg-background-dark/95 backdrop-blur-xl transition-all duration-300 ${
            mobileMenuOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'
          }`} style={{ top: isScrolled ? '60px' : '68px' }}>
            <nav className="flex flex-col items-center justify-center h-full gap-8 px-6">
              {navItems.map((item, index) => (
                <a
                  key={item.id}
                  href={`#${item.id}`}
                  onClick={() => setMobileMenuOpen(false)}
                  className={`text-2xl font-bold tracking-wide transition-all duration-300 ${
                    activeSection === item.id ? 'text-primary' : 'text-text-cream'
                  }`}
                  style={{
                    transitionDelay: mobileMenuOpen ? `${index * 50}ms` : '0ms'
                  }}
                >
                  {item.label}
                </a>
              ))}
            </nav>
          </div>
        </header>

        <section
          id="hero"
          className="min-h-screen flex flex-col justify-center items-center pt-20 relative"
        >
          <div className="absolute top-24 left-6 hidden lg:block">
            <div className="text-[10px] text-text-gray/50 font-mono tracking-wider">
              <span className="text-primary">//</span> COORDINATES
              <br />
              <span className="text-text-gray/30">LAT: 19.0760° N</span>
              <br />
              <span className="text-text-gray/30">LON: 72.8777° E</span>
            </div>
          </div>
          
          <div className="absolute top-24 right-6 hidden lg:block text-right">
            <div className="text-[10px] text-text-gray/50 font-mono tracking-wider">
              <span className="text-primary">//</span> STATUS
              <br />
              <span className="text-green-500">● AVAILABLE FOR WORK</span>
            </div>
          </div>

          <div className="flex flex-col items-center gap-4 mb-10">
            <div className="flex items-center gap-3 mb-2">
              <div className="h-px w-8 bg-primary"></div>
              <span className="text-primary text-xs font-bold tracking-[0.3em] uppercase font-mono">
                Mobile Application Developer
              </span>
              <div className="h-px w-8 bg-primary"></div>
            </div>
            <h1 className="text-[14vw] md:text-[10vw] lg:text-[140px] font-display font-black leading-[0.85] tracking-tighter text-text-cream relative">
              <span className="relative inline-block">
                NOEL
                <span className="absolute -right-4 top-0 w-2 h-2 bg-primary rounded-full hidden md:block"></span>
              </span>
              <br />
              <span className="flex items-baseline justify-center">
                PINTO
                <span className="text-primary text-[1.2em] leading-none">.</span>
              </span>
            </h1>
          </div>

          <div className="max-w-lg text-center px-4 mb-12">
            <p className="text-text-gray text-base md:text-lg leading-relaxed">
              Crafting <span className="text-text-cream font-medium">high-performance</span>,{" "}
              <span className="text-text-cream font-medium">pixel-perfect</span> native
              experiences for iOS &amp; Android. Based in{" "}
              <span className="text-primary font-semibold">Mumbai, India</span>.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 mb-20">
            <a
              href="#projects"
              className="group relative bg-primary text-white px-8 py-4 text-xs font-bold tracking-[0.2em] uppercase overflow-hidden"
            >
              <span className="relative z-10 flex items-center gap-2">
                View Projects
                <span className="material-symbols-outlined text-sm group-hover:translate-x-1 transition-transform">
                  arrow_forward
                </span>
              </span>
              <div className="absolute inset-0 bg-white transform -translate-x-full group-hover:translate-x-0 transition-transform duration-300"></div>
              <span className="absolute inset-0 z-10 flex items-center justify-center gap-2 text-black opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                View Projects
                <span className="material-symbols-outlined text-sm">arrow_forward</span>
              </span>
            </a>
            <a
              href="#contact"
              className="group border border-text-cream/30 text-text-cream px-8 py-4 text-xs font-bold tracking-[0.2em] uppercase hover:border-primary hover:text-primary transition-colors"
            >
              <span className="flex items-center gap-2">
                Get In Touch
                <span className="material-symbols-outlined text-sm opacity-0 group-hover:opacity-100 -translate-x-2 group-hover:translate-x-0 transition-all">
                  mail
                </span>
              </span>
            </a>
          </div>

          <a
            href="#projects"
            className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-3 opacity-60 hover:opacity-100 transition-opacity group"
          >
            <span className="text-[9px] font-mono tracking-[0.2em] text-text-gray uppercase group-hover:text-primary transition-colors">
              Scroll to Explore
            </span>
            <div className="w-6 h-10 border border-text-gray/50 rounded-full flex justify-center pt-2 group-hover:border-primary transition-colors">
              <div className="w-1.5 h-1.5 bg-primary rounded-full animate-bounce"></div>
            </div>
          </a>
        </section>

        <section id="projects" className="w-full flex flex-col items-center py-32">
          {/* Section Label */}
          <div className="w-full max-w-[1200px] px-4 mb-16">
            <div className="flex items-center gap-4">
              <div className="h-px bg-border-subtle flex-1"></div>
              <h4 className="text-text-gray text-xs font-bold tracking-[0.2em] uppercase whitespace-nowrap">
                // SELECTED WORKS 2023-2024
              </h4>
              <div className="h-px bg-border-subtle flex-1"></div>
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
                    A complete overhaul of the banking experience for Gen Z users, focusing on micro-interactions and data visualization.
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
                    Custom mobile storefront architecture enabling high-performance browsing and AR product previews.
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
                    Real-time biometric data visualization connected to wearable hardware APIs.
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
                    High-fidelity audio streaming platform with social sharing integration.
                  </p>
                </div>
              </article>
            </div>
          </div>
        </section>

        <section id="clients" className="w-full flex flex-col items-center py-32 bg-surface-dark/20 relative">
          <div className="absolute right-6 top-32 hidden lg:block">
            <span className="text-[120px] font-display font-black text-text-cream/[0.02] leading-none">
              02
            </span>
          </div>

          <div className="w-full max-w-[1200px] px-6 mb-16">
            <div className="flex items-center gap-4">
              <div className="h-px bg-gradient-to-r from-transparent via-border-subtle to-transparent flex-1"></div>
              <h2 className="text-text-gray text-xs font-bold tracking-[0.2em] uppercase whitespace-nowrap flex items-center gap-2">
                <span className="text-primary">//</span> CLIENT WORK
              </h2>
              <div className="h-px bg-gradient-to-l from-transparent via-border-subtle to-transparent flex-1"></div>
            </div>
            <p className="text-center text-text-gray/60 text-sm mt-4 max-w-md mx-auto">
              Trusted by businesses to deliver exceptional mobile experiences
            </p>
          </div>

          <div className="w-full max-w-[1200px] px-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {clients.map((client, index) => (
                <div
                  key={index}
                  className="group flex gap-6 p-6 border border-border-subtle/50 hover:border-primary/30 bg-background-dark/50 hover:bg-background-dark transition-all duration-300"
                >
                  <div className="flex-shrink-0 w-16 h-16 bg-surface-dark border border-border-subtle flex items-center justify-center group-hover:border-primary/50 transition-colors">
                    <span className="text-xl font-display font-bold text-text-gray group-hover:text-primary transition-colors">
                      {client.logo}
                    </span>
                  </div>
                  
                  <div className="flex-1">
                    <h3 className="text-sm font-bold text-text-cream mb-1 group-hover:text-primary transition-colors">
                      {client.name}
                    </h3>
                    <p className="text-[10px] font-mono text-primary tracking-wider uppercase mb-3">
                      {client.project}
                    </p>
                    <p className="text-text-gray text-sm leading-relaxed">
                      {client.desc}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-6">
              {[
                { num: "50+", label: "Projects Delivered" },
                { num: "30+", label: "Happy Clients" },
                { num: "5+", label: "Years Experience" },
                { num: "99%", label: "Client Satisfaction" },
              ].map((stat, i) => (
                <div key={i} className="text-center p-6 border border-border-subtle/30 bg-background-dark/30">
                  <span className="text-3xl md:text-4xl font-display font-bold text-primary block mb-2">
                    {stat.num}
                  </span>
                  <span className="text-[10px] font-mono text-text-gray tracking-wider uppercase">
                    {stat.label}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section id="about" className="w-full flex flex-col items-center py-32 relative">
          <div className="absolute left-6 top-32 hidden lg:block">
            <span className="text-[120px] font-display font-black text-text-cream/[0.02] leading-none">
              03
            </span>
          </div>

          <div className="w-full max-w-[1200px] px-6 mb-16">
            <div className="flex items-center gap-4">
              <div className="h-px bg-gradient-to-r from-transparent via-border-subtle to-transparent flex-1"></div>
              <h2 className="text-text-gray text-xs font-bold tracking-[0.2em] uppercase whitespace-nowrap flex items-center gap-2">
                <span className="text-primary">//</span> ABOUT ME
              </h2>
              <div className="h-px bg-gradient-to-l from-transparent via-border-subtle to-transparent flex-1"></div>
            </div>
          </div>

          <div className="w-full max-w-[1200px] px-6">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 mb-24">
              <div className="lg:col-span-4">
                <div className="relative group">
                  <div className="aspect-[3/4] bg-surface-dark border border-border-subtle relative overflow-hidden">
                    <div className="absolute inset-0 bg-gradient-to-br from-primary/10 to-transparent"></div>
                    <div className="absolute inset-0 flex items-center justify-center">
                      <span className="text-[100px] font-display font-black text-text-cream/5">NP</span>
                    </div>
                    <div className="absolute top-0 left-0 w-8 h-8 border-t-2 border-l-2 border-primary"></div>
                    <div className="absolute bottom-0 right-0 w-8 h-8 border-b-2 border-r-2 border-primary"></div>
                  </div>
                  
                  <div className="mt-6 space-y-3">
                    <div className="flex justify-between items-center py-2 border-b border-border-subtle/50">
                      <span className="text-[10px] font-mono text-text-gray uppercase tracking-wider">Location</span>
                      <span className="text-sm text-text-cream">Mumbai, India</span>
                    </div>
                    <div className="flex justify-between items-center py-2 border-b border-border-subtle/50">
                      <span className="text-[10px] font-mono text-text-gray uppercase tracking-wider">Experience</span>
                      <span className="text-sm text-text-cream">5+ Years</span>
                    </div>
                    <div className="flex justify-between items-center py-2 border-b border-border-subtle/50">
                      <span className="text-[10px] font-mono text-text-gray uppercase tracking-wider">Speciality</span>
                      <span className="text-sm text-text-cream">Mobile Development</span>
                    </div>
                  </div>
                </div>
              </div>

              <div className="lg:col-span-8">
                <div className="mb-12">
                  <h3 className="text-3xl md:text-4xl font-display font-bold text-text-cream mb-6 leading-tight">
                    Building the future of mobile,<br />
                    <span className="text-primary">one app at a time.</span>
                  </h3>
                  <p className="text-text-gray leading-relaxed mb-6">
                    I'm a passionate mobile application developer with over 5 years of experience creating 
                    high-performance, user-centric applications. My expertise spans across iOS, Android, and 
                    cross-platform development, with a keen eye for design and attention to detail.
                  </p>
                  <p className="text-text-gray leading-relaxed">
                    When I'm not coding, you'll find me exploring new technologies, contributing to open-source 
                    projects, or sharing knowledge with the developer community. I believe in writing clean, 
                    maintainable code that scales.
                  </p>
                </div>

                <div>
                  <h4 className="text-xs font-bold tracking-[0.2em] text-text-gray uppercase mb-6 flex items-center gap-2">
                    <span className="text-primary">//</span> Experience Timeline
                  </h4>
                  <div className="space-y-6">
                    {[
                      { year: "2022 — Present", role: "Senior Mobile Developer", company: "Freelance" },
                      { year: "2020 — 2022", role: "Mobile Developer", company: "Tech Startup" },
                      { year: "2019 — 2020", role: "Junior Developer", company: "Digital Agency" },
                    ].map((item, i) => (
                      <div key={i} className="group flex gap-6 items-start">
                        <div className="flex-shrink-0 w-32">
                          <span className="text-[10px] font-mono text-primary tracking-wider">{item.year}</span>
                        </div>
                        <div className="flex-1 border-l border-border-subtle pl-6 py-1 group-hover:border-primary transition-colors">
                          <h5 className="text-text-cream font-bold mb-1">{item.role}</h5>
                          <p className="text-text-gray text-sm">{item.company}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            <div>
              <h4 className="text-xs font-bold tracking-[0.2em] text-text-gray uppercase mb-8 flex items-center gap-2">
                <span className="text-primary">//</span> Technical Arsenal
              </h4>
              <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
                {[
                  { category: "Mobile", name: "Swift UI" },
                  { category: "Mobile", name: "Kotlin" },
                  { category: "Cross-Platform", name: "Flutter" },
                  { category: "Cross-Platform", name: "React Native" },
                  { category: "Frontend", name: "TypeScript" },
                  { category: "Backend", name: "Node.js" },
                  { category: "Tools", name: "Git / CI-CD" },
                  { category: "Design", name: "Figma" },
                ].map((skill, i) => (
                  <div
                    key={i}
                    className="group p-5 border border-border-subtle hover:border-primary bg-surface-dark/20 hover:bg-surface-dark/50 transition-all duration-300"
                  >
                    <span className="text-[9px] font-mono text-text-gray/60 uppercase tracking-widest block mb-2">
                      {skill.category}
                    </span>
                    <span className="text-sm font-bold text-text-cream group-hover:text-primary transition-colors uppercase tracking-wide">
                      {skill.name}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section id="contact" className="w-full flex flex-col items-center py-32 bg-surface-dark/20 relative">
          <div className="absolute right-6 top-32 hidden lg:block">
            <span className="text-[120px] font-display font-black text-text-cream/[0.02] leading-none">
              04
            </span>
          </div>

          <div className="w-full max-w-[1200px] px-6 mb-8">
            <div className="flex items-center gap-4">
              <div className="h-px bg-gradient-to-r from-transparent via-border-subtle to-transparent flex-1"></div>
              <h2 className="text-text-gray text-xs font-bold tracking-[0.2em] uppercase whitespace-nowrap flex items-center gap-2">
                <span className="text-primary">//</span> GET IN TOUCH
              </h2>
              <div className="h-px bg-gradient-to-l from-transparent via-border-subtle to-transparent flex-1"></div>
            </div>
          </div>

          <div className="mb-12">
            <div className="inline-flex items-center gap-2 text-[10px] text-primary font-mono tracking-widest border border-primary px-4 py-2 uppercase bg-primary/5">
              <span className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></span>
              Available for New Projects
            </div>
          </div>

          {submitStatus.show && (
            <div
              className={`max-w-[1200px] w-full mx-auto px-6 mb-8 ${
                submitStatus.success
                  ? "text-green-400"
                  : "text-red-400"
              }`}
            >
              <div className={`p-4 border ${submitStatus.success ? "border-green-500/30 bg-green-500/10" : "border-red-500/30 bg-red-500/10"}`}>
                <p className="text-sm font-mono">{submitStatus.message}</p>
              </div>
            </div>
          )}

          <div className="w-full max-w-[1200px] px-6">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-start">
              <div className="lg:col-span-5 flex flex-col gap-10">
                <div>
                  <p className="text-xl md:text-2xl text-text-gray font-display italic leading-relaxed border-l-2 border-primary/50 pl-6">
                    "Great things are built through collaboration. Let's create something extraordinary together."
                  </p>
                </div>

                <div>
                  <h3 className="text-xs font-bold tracking-[0.2em] text-text-gray uppercase mb-4 flex items-center gap-2">
                    <span className="text-primary">//</span> Direct Line
                  </h3>
                  <a
                    className="group block"
                    href="mailto:hello@noelpinto.com"
                  >
                    <div className="text-2xl md:text-3xl font-display text-text-cream group-hover:text-primary transition-colors flex items-center gap-3">
                      hello@noelpinto.com
                      <span className="material-symbols-outlined text-sm opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all text-primary">
                        arrow_outward
                      </span>
                    </div>
                    <div className="h-px w-full bg-border-subtle mt-2 group-hover:bg-primary transition-colors duration-500"></div>
                  </a>
                </div>

                <div className="grid grid-cols-2 gap-8 pt-8 border-t border-border-subtle/50">
                  <div>
                    <h4 className="text-[9px] font-mono tracking-widest text-text-gray mb-4 uppercase opacity-60">
                      Social
                    </h4>
                    <ul className="flex flex-col gap-3 text-xs font-bold tracking-widest">
                      {["GITHUB", "LINKEDIN", "TWITTER"].map((social) => (
                        <li key={social}>
                          <a className="hover:text-primary transition-colors text-text-cream flex items-center gap-2 group" href="#">
                            <span className="w-1 h-1 bg-text-gray rounded-full group-hover:bg-primary transition-colors"></span>
                            [ {social} ]
                          </a>
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div className="flex flex-col justify-end">
                    <div className="text-right">
                      <span className="material-symbols-outlined text-primary/50 mb-2 text-xl">
                        my_location
                      </span>
                      <p className="text-[10px] font-mono text-text-gray leading-tight">
                        Mumbai, India
                        <br />
                        <span className="text-text-gray/50">IST (GMT+5:30)</span>
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="lg:col-span-7">
                <form onSubmit={handleSubmit} className="flex flex-col gap-6 relative bg-background-dark/50 p-8 border border-border-subtle/50">
                  <div className="absolute -top-px -left-px w-4 h-4 border-t border-l border-primary"></div>
                  <div className="absolute -bottom-px -right-px w-4 h-4 border-b border-r border-primary"></div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="group">
                      <label className="block text-[10px] font-bold tracking-[0.2em] text-text-gray mb-3 uppercase group-focus-within:text-primary transition-colors">
                        01 // Your Name
                      </label>
                      <input
                        type="text"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        className={`w-full bg-transparent border-b-2 ${
                          errors.name ? "border-red-500" : "border-text-cream/20"
                        } py-3 text-text-cream placeholder-text-gray/30 focus:border-primary focus:outline-none transition-colors text-sm`}
                        placeholder="John Doe"
                      />
                      {errors.name && (
                        <p className="text-red-400 text-xs mt-2 font-mono">{errors.name}</p>
                      )}
                    </div>

                    <div className="group">
                      <label className="block text-[10px] font-bold tracking-[0.2em] text-text-gray mb-3 uppercase group-focus-within:text-primary transition-colors">
                        02 // Your Email
                      </label>
                      <input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        className={`w-full bg-transparent border-b-2 ${
                          errors.email ? "border-red-500" : "border-text-cream/20"
                        } py-3 text-text-cream placeholder-text-gray/30 focus:border-primary focus:outline-none transition-colors text-sm`}
                        placeholder="john@example.com"
                      />
                      {errors.email && (
                        <p className="text-red-400 text-xs mt-2 font-mono">{errors.email}</p>
                      )}
                    </div>
                  </div>

                  <div className="group">
                    <label className="block text-[10px] font-bold tracking-[0.2em] text-text-gray mb-3 uppercase group-focus-within:text-primary transition-colors">
                      03 // Your Message
                    </label>
                    <textarea
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      className={`w-full bg-transparent border-b-2 ${
                        errors.message ? "border-red-500" : "border-text-cream/20"
                      } py-3 text-text-cream placeholder-text-gray/30 focus:border-primary focus:outline-none transition-colors text-sm resize-none`}
                      placeholder="Tell me about your project..."
                      rows="4"
                    />
                    {errors.message && (
                      <p className="text-red-400 text-xs mt-2 font-mono">{errors.message}</p>
                    )}
                  </div>

                  <div className="flex justify-end pt-4">
                    <button
                      type="submit"
                      disabled={loading}
                      className="group relative bg-primary text-white hover:bg-white hover:text-black transition-all duration-300 py-4 px-10 text-xs font-bold tracking-[0.25em] uppercase overflow-hidden disabled:opacity-50 disabled:cursor-not-allowed"
                    >
                      <span className="relative z-10 flex items-center gap-2">
                        {loading ? "Sending..." : "Send Message"}
                        <span className="material-symbols-outlined text-sm">send</span>
                      </span>
                      <div className="absolute inset-0 bg-white transform -translate-x-full group-hover:translate-x-0 transition-transform duration-300 z-0"></div>
                      <span className="absolute inset-0 z-10 flex items-center justify-center gap-2 text-black opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                        {loading ? "Sending..." : "Send Message"}
                        <span className="material-symbols-outlined text-sm">send</span>
                      </span>
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </section>

        <footer className="w-full border-t border-border-subtle bg-background-dark/80 backdrop-blur-sm">
          <div className="max-w-[1440px] mx-auto px-6 md:pl-24 py-12 flex flex-col md:flex-row justify-between items-start md:items-center gap-8">
            <div className="flex flex-col gap-2">
              <h2 className="text-xl font-display font-bold text-text-cream tracking-tight">
                Let's build something <span className="text-primary">precise.</span>
              </h2>
              <a
                className="text-primary text-sm font-bold hover:underline decoration-2 underline-offset-4"
                href="mailto:hello@noelpinto.com"
              >
                hello@noelpinto.com
              </a>
            </div>
            <div className="flex flex-col items-start md:items-end gap-4">
              <div className="flex gap-4 text-xs font-mono tracking-widest text-text-gray">
                <a className="hover:text-primary transition-colors" href="#">[ LI ]</a>
                <a className="hover:text-primary transition-colors" href="#">[ GH ]</a>
                <a className="hover:text-primary transition-colors" href="#">[ TW ]</a>
              </div>
              <p className="text-[10px] font-mono text-text-gray/50 tracking-wider">
                © 2024 NOEL PINTO — MUMBAI, INDIA
              </p>
            </div>
          </div>
        </footer>

        <a
          className={`fixed bottom-8 right-8 z-50 group flex items-center justify-center size-12 border border-border-subtle bg-background-dark/90 backdrop-blur hover:border-primary transition-all duration-300 ${
            isScrolled ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4 pointer-events-none"
          }`}
          href="#hero"
        >
          <span className="material-symbols-outlined text-text-cream group-hover:text-primary transition-colors text-sm -rotate-90">
            arrow_forward
          </span>
        </a>

        {/* Screensaver CTA Button */}
        <button
          onClick={() => {
            setScreensaverActive(true);
            setQuoteIndex(Math.floor(Math.random() * quotes.length));
          }}
          className="fixed bottom-8 left-8 z-50 group hidden md:flex items-center justify-center size-12 border border-border-subtle bg-background-dark/90 backdrop-blur hover:border-primary transition-all duration-300"
        >
          <img 
            src="https://img.icons8.com/color/48/fire-element--v1.png" 
            alt="fire-element--v1"
            className="w-6 h-6 group-hover:scale-110 transition-all duration-300"
          />
          <span className="absolute left-full ml-3 px-3 py-1.5 bg-background-dark border border-primary text-primary text-xs font-mono tracking-wider whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none">
            SCREEN SAVER
          </span>
        </button>

        {/* Screensaver Overlay */}
        {screensaverActive && (
          <div 
            className="fixed inset-0 z-[100] bg-background-dark flex flex-col cursor-pointer"
            onClick={() => setScreensaverActive(false)}
          >
            {/* Top Bar */}
            <div className="flex justify-between items-start p-8">
              {/* Logo - Top Left */}
              <div className="text-2xl font-display font-bold tracking-tighter text-text-cream">
                NP<span className="text-primary">.</span>
              </div>
              
              {/* Clock - Top Right */}
              <div className="text-right">
                <div className="text-4xl md:text-5xl font-display font-bold text-text-cream tabular-nums">
                  {currentTime.toLocaleTimeString('en-US', { 
                    hour: '2-digit', 
                    minute: '2-digit',
                    second: '2-digit',
                    hour12: false 
                  })}
                </div>
                <div className="text-xs text-text-gray font-mono mt-1 tracking-wider">
                  {currentTime.toLocaleDateString('en-US', { 
                    weekday: 'long',
                    year: 'numeric',
                    month: 'long',
                    day: 'numeric'
                  })}
                </div>
              </div>
            </div>

            {/* Quote - Bottom Center */}
            <div className="flex-1 flex items-end justify-center pb-16 px-8">
              <div className="max-w-3xl text-center">
                <div 
                  onClick={(e) => {
                    e.stopPropagation();
                    setQuoteIndex((prev) => (prev + 1) % quotes.length);
                  }}
                  className="cursor-pointer hover:text-primary transition-colors group"
                >
                  <p className="text-xl md:text-2xl text-text-cream/80 font-display italic leading-relaxed group-hover:text-text-cream">
                    "{quotes[quoteIndex]}"
                  </p>
                </div>
                <div className="mt-6 text-xs text-text-gray/50 font-mono tracking-widest">
                  PRESS ESC OR CLICK ANYWHERE TO EXIT • SPACE/ENTER TO CHANGE QUOTE
                </div>
              </div>
            </div>
          </div>
        )}
      </main>
    </>
  );
};

export default Home;
