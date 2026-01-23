import React from "react";
import { Link } from "react-router-dom";

const Resume = () => {
  return (
    <div className="bg-white text-black antialiased selection:bg-primary selection:text-white font-sans min-h-screen flex flex-col">
      <nav className="w-full border-b-2 border-black sticky top-0 bg-white/95 backdrop-blur-sm z-50">
        <div className="max-w-[1000px] mx-auto px-6 py-4 flex justify-between items-center">
          <div className="flex items-center gap-3">
            <Link className="font-display font-black text-2xl tracking-tighter hover:text-primary transition-colors flex items-center gap-2" to="/">
              NOEL<span className="text-primary">.</span>
              <span className="text-xs text-gray-600 font-mono tracking-widest uppercase opacity-70">
                Hire
              </span>
            </Link>
          </div>
          <div className="flex items-center gap-6">
            <Link className="hidden md:inline-block text-[10px] font-bold tracking-[0.2em] uppercase hover:text-primary transition-colors" to="/">
              [ BACK TO PORTFOLIO ]
            </Link>
            <button className="bg-primary text-white text-xs font-bold px-5 py-2.5 tracking-widest uppercase shadow-[3px_3px_0px_0px_rgba(0,0,0,1)] hover:translate-y-0.5 hover:shadow-[1px_1px_0px_0px_rgba(0,0,0,1)] active:shadow-none transition-all border border-black group flex items-center gap-2"
              onClick={() => window.print()}>
              <span className="material-symbols-outlined text-sm">download</span>
              <span>"DOWNLOAD"</span>
            </button>
          </div>
        </div>
      </nav>

      <main className="flex-grow w-full max-w-[1000px] mx-auto px-6 py-12 md:py-16">
        <header className="mb-16 pb-8 border-b border-gray-200">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-start">
            <div className="col-span-2">
              <h1 className="text-6xl md:text-7xl font-display font-black tracking-tight leading-none mb-4">
                Noel Pinto
              </h1>
              <h2 className="text-xl font-medium text-gray-600 font-display italic">
                Mobile Applications Engineer
              </h2>
              <p className="mt-6 text-sm text-gray-600 leading-relaxed max-w-lg">
                Specialized in building precise digital architectures for the handheld web. Expert in creating fluid, high-performance applications with a focus on micro-interactions and data visualization.
              </p>
            </div>
            <div className="flex flex-col gap-3 font-mono text-[11px] uppercase tracking-wider text-gray-500 md:text-right pt-2">
              <div className="flex md:justify-end items-center gap-2 group">
                <span className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></span>
                <span>Available for hire</span>
              </div>
              <div className="h-px bg-gray-200 w-full my-1"></div>
              <a className="hover:text-primary hover:underline underline-offset-2" href="mailto:hello@noelpinto.com">
                hello@noelpinto.com
              </a>
              <span>+91 98765 43210</span>
              <span>Mumbai, India</span>
              <div className="h-px bg-gray-200 w-full my-1"></div>
              <div className="flex md:justify-end gap-3">
                <a className="hover:text-primary transition-colors" href="#">LINKEDIN</a>
                <span className="text-gray-300">/</span>
                <a className="hover:text-primary transition-colors" href="#">GITHUB</a>
              </div>
            </div>
          </div>
        </header>

        <section className="mb-14">
          <div className="flex items-end gap-4 mb-8">
            <h3 className="font-bold tracking-[0.2em] text-xs uppercase bg-black text-white px-3 py-1.5 shadow-[2px_2px_0px_0px_#999]">
              Experience
            </h3>
            <div className="h-px bg-black flex-1 mb-1.5"></div>
            <span className="font-mono text-[10px] text-gray-400 mb-1">SECTION 01</span>
          </div>
          <div className="space-y-10">
            <article className="grid grid-cols-1 md:grid-cols-4 gap-4">
              <div className="md:col-span-1">
                <span className="font-mono text-xs font-bold text-gray-900 block mb-1">2022 — PRESENT</span>
                <span className="font-mono text-[10px] text-gray-500 uppercase tracking-wide">Mumbai, IN</span>
              </div>
              <div className="md:col-span-3">
                <div className="flex flex-col sm:flex-row sm:items-baseline gap-2 mb-2">
                  <h4 className="font-display font-bold text-lg">Senior Mobile Engineer</h4>
                  <span className="text-sm text-primary font-medium">@ FinTech Global</span>
                </div>
                <p className="text-sm text-gray-700 leading-relaxed mb-3">
                  Leading the iOS migration team for a flagship banking application. Architected a modular navigation system reducing build times by 40%. Implemented a new design system across 15+ screens ensuring pixel-perfect consistency.
                </p>
                <div className="flex flex-wrap gap-2">
                  <span className="border border-gray-200 px-1.5 py-0.5 text-[10px] uppercase tracking-wider text-gray-500">SwiftUI</span>
                  <span className="border border-gray-200 px-1.5 py-0.5 text-[10px] uppercase tracking-wider text-gray-500">Combine</span>
                  <span className="border border-gray-200 px-1.5 py-0.5 text-[10px] uppercase tracking-wider text-gray-500">CI/CD</span>
                </div>
              </div>
            </article>

            <article className="grid grid-cols-1 md:grid-cols-4 gap-4">
              <div className="md:col-span-1">
                <span className="font-mono text-xs font-bold text-gray-900 block mb-1">2019 — 2022</span>
                <span className="font-mono text-[10px] text-gray-500 uppercase tracking-wide">Remote</span>
              </div>
              <div className="md:col-span-3">
                <div className="flex flex-col sm:flex-row sm:items-baseline gap-2 mb-2">
                  <h4 className="font-display font-bold text-lg">Mobile Developer</h4>
                  <span className="text-sm text-gray-500 font-medium">@ Nexus Digital Studios</span>
                </div>
                <p className="text-sm text-gray-700 leading-relaxed mb-3">
                  Developed and maintained 3 high-traffic React Native applications for e-commerce clients. Collaborated closely with product design to implement complex animations and gesture-based interactions.
                </p>
                <div className="flex flex-wrap gap-2">
                  <span className="border border-gray-200 px-1.5 py-0.5 text-[10px] uppercase tracking-wider text-gray-500">React Native</span>
                  <span className="border border-gray-200 px-1.5 py-0.5 text-[10px] uppercase tracking-wider text-gray-500">Redux</span>
                  <span className="border border-gray-200 px-1.5 py-0.5 text-[10px] uppercase tracking-wider text-gray-500">TypeScript</span>
                </div>
              </div>
            </article>
          </div>
        </section>

        <section className="mb-14">
          <div className="flex items-end gap-4 mb-8">
            <h3 className="font-bold tracking-[0.2em] text-xs uppercase border border-black bg-white px-3 py-1.5">
              Selected Projects
            </h3>
            <div className="h-px bg-black flex-1 mb-1.5"></div>
            <span className="font-mono text-[10px] text-gray-400 mb-1">SECTION 02</span>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-10">
            <div>
              <div className="flex justify-between items-baseline border-b border-gray-200 pb-2 mb-3">
                <h4 className="font-display font-bold text-lg">FinTech Pro</h4>
                <span className="text-[10px] font-mono text-primary">[ 2023 ]</span>
              </div>
              <p className="text-xs text-gray-600 mb-3 leading-relaxed">
                A complete overhaul of the banking experience for Gen Z users, focusing on micro-interactions and data visualization.
              </p>
              <div className="flex gap-2">
                <span className="text-[9px] font-bold uppercase tracking-widest text-gray-400">#SwiftUI</span>
                <span className="text-[9px] font-bold uppercase tracking-widest text-gray-400">#Charts</span>
              </div>
            </div>

            <div>
              <div className="flex justify-between items-baseline border-b border-gray-200 pb-2 mb-3">
                <h4 className="font-display font-bold text-lg">Shopify Mod</h4>
                <span className="text-[10px] font-mono text-primary">[ 2022 ]</span>
              </div>
              <p className="text-xs text-gray-600 mb-3 leading-relaxed">
                Custom mobile storefront architecture enabling high-performance browsing and AR product previews.
              </p>
              <div className="flex gap-2">
                <span className="text-[9px] font-bold uppercase tracking-widest text-gray-400">#ReactNative</span>
                <span className="text-[9px] font-bold uppercase tracking-widest text-gray-400">#AR</span>
              </div>
            </div>

            <div>
              <div className="flex justify-between items-baseline border-b border-gray-200 pb-2 mb-3">
                <h4 className="font-display font-bold text-lg">Pulse Metrics</h4>
                <span className="text-[10px] font-mono text-primary">[ 2021 ]</span>
              </div>
              <p className="text-xs text-gray-600 mb-3 leading-relaxed">
                Real-time biometric data visualization connected to wearable hardware APIs via Bluetooth LE.
              </p>
              <div className="flex gap-2">
                <span className="text-[9px] font-bold uppercase tracking-widest text-gray-400">#Flutter</span>
                <span className="text-[9px] font-bold uppercase tracking-widest text-gray-400">#HealthKit</span>
              </div>
            </div>

            <div>
              <div className="flex justify-between items-baseline border-b border-gray-200 pb-2 mb-3">
                <h4 className="font-display font-bold text-lg">Sonic Stream</h4>
                <span className="text-[10px] font-mono text-primary">[ 2020 ]</span>
              </div>
              <p className="text-xs text-gray-600 mb-3 leading-relaxed">
                High-fidelity audio streaming platform with social sharing integration and real-time waveform rendering.
              </p>
              <div className="flex gap-2">
                <span className="text-[9px] font-bold uppercase tracking-widest text-gray-400">#Kotlin</span>
                <span className="text-[9px] font-bold uppercase tracking-widest text-gray-400">#Audio</span>
              </div>
            </div>
          </div>
        </section>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          <section>
            <div className="flex items-end gap-4 mb-6">
              <h3 className="font-bold tracking-[0.2em] text-xs uppercase border-b-2 border-primary pb-1">Education</h3>
              <div className="h-px bg-gray-200 flex-1 mb-1.5"></div>
            </div>
            <div className="space-y-6">
              <div>
                <h4 className="font-display font-bold text-base">B.E. Computer Engineering</h4>
                <p className="text-xs text-gray-500 font-mono mt-1">UNIVERSITY OF MUMBAI • 2015-2019</p>
                <p className="text-xs text-gray-600 mt-2">Graduated with First Class Honours. Focus on Human-Computer Interaction.</p>
              </div>
            </div>
          </section>

          <section>
            <div className="flex items-end gap-4 mb-6">
              <h3 className="font-bold tracking-[0.2em] text-xs uppercase border-b-2 border-primary pb-1">Technical Stack</h3>
              <div className="h-px bg-gray-200 flex-1 mb-1.5"></div>
            </div>
            <div className="grid grid-cols-2 gap-4">
              <div>
                <h5 className="text-[10px] font-bold uppercase tracking-widest text-gray-400 mb-2">Languages</h5>
                <ul className="text-xs text-gray-800 space-y-1 font-medium">
                  <li>Swift / Objective-C</li>
                  <li>Kotlin / Java</li>
                  <li>JavaScript / TypeScript</li>
                  <li>Dart</li>
                </ul>
              </div>
              <div>
                <h5 className="text-[10px] font-bold uppercase tracking-widest text-gray-400 mb-2">Tools</h5>
                <ul className="text-xs text-gray-800 space-y-1 font-medium">
                  <li>Xcode & Android Studio</li>
                  <li>Figma / Sketch</li>
                  <li>Git / GitHub Actions</li>
                  <li>Firebase / AWS Amplify</li>
                </ul>
              </div>
            </div>
          </section>
        </div>
      </main>

      <footer className="mt-auto border-t border-black bg-gray-50">
        <div className="max-w-[1000px] mx-auto px-6 py-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <div className="flex items-center gap-2">
            <span className="font-display font-bold text-lg">NOEL.</span>
            <span className="text-[10px] text-gray-400 font-mono">© 2024</span>
          </div>
          <p className="text-[10px] font-mono uppercase tracking-widest text-gray-400 text-center">
            Printed from www.noelpinto.com
          </p>
          <div className="flex gap-4 opacity-50 hover:opacity-100 transition-opacity">
            <span className="material-symbols-outlined text-sm">qr_code_2</span>
            <span className="text-[10px] font-mono self-center">SCAN FOR PORTFOLIO</span>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Resume;
