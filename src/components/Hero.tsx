import React from 'react';
import { Download, Sparkles } from 'lucide-react';
import { PERSONAL_DATA } from '../data/portfolioData';
import { GithubIcon, LinkedinIcon, LeetCodeIcon } from './Icons';

export const Hero: React.FC = () => {
  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20 pb-12 bg-[#080808]"
    >
      {/* Background Ambient Glows */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-[#D71927]/15 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute -top-32 right-10 w-96 h-96 bg-[#8E101A]/10 rounded-full blur-[120px] pointer-events-none" />

      {/* Grid Pattern Background */}
      <div className="absolute inset-0 bg-grid-pattern opacity-40 pointer-events-none" />

      {/* GIANT BACKDROP DISPLAY TYPOGRAPHY (Matching Visual Reference) */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none select-none overflow-hidden z-0">
        <h1 className="font-display text-[19vw] leading-none tracking-tight text-[#D71927]/15 font-black uppercase text-center whitespace-nowrap transform -translate-y-6">
          PORTFOLIO
        </h1>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          
          {/* LEFT COLUMN: Editorial Typography & Bio (5 Cols) */}
          <div className="lg:col-span-5 flex flex-col justify-center text-left space-y-6 order-2 lg:order-1">
            {/* Top pill */}
            <div className="flex items-center gap-2.5">
              <span className="w-2.5 h-2.5 rounded-full bg-[#D71927] animate-pulse" />
              <span className="text-xs font-mono uppercase tracking-[0.25em] text-[#D71927] font-semibold">
                SOFTWARE DEVELOPER & AI ENTHUSIAST
              </span>
            </div>

            {/* Title with script accent */}
            <div>
              <p className="font-serif italic text-2xl sm:text-3xl text-[#E5E5E5] mb-1">
                Hello, I'm
              </p>
              <h2 className="font-display text-6xl sm:text-7xl xl:text-8xl font-black text-white tracking-tight leading-[0.9] uppercase">
                ALVINO <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-white via-[#F5F5F5] to-[#A3A3A3]">
                  P SHATTO
                </span>
              </h2>
            </div>

            {/* Sub-headline */}
            <div className="space-y-3">
              <p className="text-sm sm:text-base text-[#D71927] font-mono tracking-wide uppercase font-medium">
                FULL-STACK DEVELOPER &bull; AI SYSTEMS ENGINEER
              </p>
              <p className="text-sm text-[#A0A0A0] leading-relaxed max-w-md">
                I design and construct robust, high-performance web applications and applied AI pipelines. Specializing in Python, FastAPI, React, and production backend microservices.
              </p>
            </div>

            {/* Location & Status Tag */}
            <div className="flex items-center gap-2 text-xs font-mono text-[#777777] border-l-2 border-[#D71927] pl-3 py-0.5">
              <span>THRISSUR, KERALA</span>
              <span>&bull;</span>
              <span className="text-[#A3A3A3]">AVAILABLE GLOBALLY</span>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-wrap items-center gap-3 pt-2">
              <a
                href="#projects"
                className="inline-flex items-center gap-2.5 px-6 py-3 bg-[#D71927] hover:bg-[#F01D2E] text-white text-xs font-mono font-semibold tracking-wider rounded transition-all duration-300 shadow-[0_0_25px_rgba(215,25,39,0.35)] hover:shadow-[0_0_35px_rgba(215,25,39,0.55)] group"
              >
                <span>EXPLORE ARCHITECTURES</span>
                <span className="transform group-hover:translate-x-1 transition-transform">&rarr;</span>
              </a>

              <a
                href={PERSONAL_DATA.links.resume}
                download="Alvino_P_Shatto_Resume.pdf"
                className="inline-flex items-center gap-2 px-5 py-3 bg-[#121212] hover:bg-[#1A1A1A] text-[#E0E0E0] hover:text-white border border-[#262626] hover:border-[#D71927] text-xs font-mono tracking-wider rounded transition-all"
              >
                <Download className="w-3.5 h-3.5 text-[#D71927]" />
                <span>RESUME PDF</span>
              </a>
            </div>

            {/* Verified Social Icons */}
            <div className="flex items-center gap-4 pt-2">
              <span className="text-[11px] font-mono text-[#555] uppercase tracking-widest">VERIFIED LINKS:</span>
              <div className="flex items-center gap-2">
                <a
                  href={PERSONAL_DATA.links.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-8 h-8 rounded bg-[#121212] border border-[#242424] hover:border-[#D71927] hover:text-[#D71927] text-[#999] flex items-center justify-center transition-all"
                  aria-label="GitHub Profile"
                >
                  <GithubIcon className="w-4 h-4" />
                </a>
                <a
                  href={PERSONAL_DATA.links.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-8 h-8 rounded bg-[#121212] border border-[#242424] hover:border-[#D71927] hover:text-[#D71927] text-[#999] flex items-center justify-center transition-all"
                  aria-label="LinkedIn Profile"
                >
                  <LinkedinIcon className="w-4 h-4" />
                </a>
                <a
                  href={PERSONAL_DATA.links.leetcode}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-8 h-8 rounded bg-[#121212] border border-[#242424] hover:border-[#D71927] hover:text-[#D71927] text-[#999] flex items-center justify-center transition-all"
                  aria-label="LeetCode Profile"
                >
                  <LeetCodeIcon className="w-4 h-4" />
                </a>
              </div>
            </div>
          </div>

          {/* CENTER COLUMN: Dramatic Editorial Portrait (4 Cols) */}
          <div className="lg:col-span-4 flex justify-center items-center order-1 lg:order-2">
            <div className="relative group w-full max-w-[340px] sm:max-w-[380px]">
              
              {/* Crimson Backlit Halo */}
              <div className="absolute inset-0 bg-gradient-to-t from-[#D71927]/40 via-[#8E101A]/20 to-transparent rounded-2xl filter blur-2xl transform -translate-y-2 group-hover:blur-3xl transition-all duration-700 pointer-events-none" />

              {/* Portrait Frame Container */}
              <div className="relative z-10 rounded-2xl overflow-hidden border border-[#262626] bg-[#111111] shadow-[0_20px_50px_rgba(0,0,0,0.8)]">
                
                {/* Tech Badge Tag (Top Right) */}
                <div className="absolute top-3 right-3 z-20 px-2.5 py-1 rounded bg-[#080808]/80 backdrop-blur-md border border-[#2E2E2E] flex items-center gap-1.5 text-[10px] font-mono text-[#D71927]">
                  <Sparkles className="w-3 h-3 text-[#D71927]" />
                  <span>ALVINO // 2026</span>
                </div>

                {/* Actual Portrait Photo */}
                <div className="relative aspect-[3/4] overflow-hidden bg-gradient-to-b from-[#180A0C] via-[#121212] to-[#0A0A0A]">
                  {/* Subtle red studio spotlight behind head */}
                  <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-48 h-48 bg-[#D71927]/20 rounded-full blur-2xl pointer-events-none" />

                  <img
                    src="/assets/images/alvino-hero.png"
                    alt="Alvino P Shatto - Developer Portrait"
                    className="relative z-10 w-full h-full object-cover object-top filter contrast-[1.05] brightness-[1.0] group-hover:scale-105 transition-transform duration-700"
                    loading="eager"
                  />
                  {/* Subtle Gradient Fog at base */}
                  <div className="absolute inset-x-0 bottom-0 h-24 bg-gradient-to-t from-[#0E0E0E] via-[#0E0E0E]/60 to-transparent z-10" />
                </div>

                {/* Bottom Card Telemetry Strip */}
                <div className="p-3 bg-[#0E0E0E] border-t border-[#1F1F1F] flex items-center justify-between text-[11px] font-mono text-[#8E8E93]">
                  <span className="flex items-center gap-1 text-[#F5F5F5]">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#D71927]" />
                    <span>CHRIST COLLEGE OF ENG</span>
                  </span>
                  <span className="text-[#D71927] font-semibold">CGPA: 8.6/10</span>
                </div>
              </div>

              {/* Subtle floating studio badge */}
              <div className="absolute -bottom-4 -left-4 z-20 hidden sm:block p-3 rounded-lg bg-[#141414]/90 backdrop-blur-md border border-[#2E2E2E] shadow-xl">
                <p className="text-[10px] font-mono text-[#777] uppercase tracking-wider">ENGINEERING CORE</p>
                <p className="text-xs font-mono font-semibold text-white">PYTHON &bull; FASTAPI &bull; REACT</p>
              </div>
            </div>
          </div>

          {/* RIGHT COLUMN: Key Metrics & Credibility Stats (3 Cols) */}
          <div className="lg:col-span-3 flex flex-col justify-center space-y-6 order-3">
            <div className="border-l border-[#242424] lg:pl-6 space-y-6">
              
              {/* Metric 1 */}
              <div className="group">
                <div className="flex items-baseline gap-2">
                  <span className="font-display text-4xl sm:text-5xl font-black text-[#D71927] group-hover:text-[#F01D2E] transition-colors">
                    8.6
                  </span>
                  <span className="font-mono text-xs text-[#888]">/10 CGPA</span>
                </div>
                <p className="text-xs font-mono text-[#F5F5F5] uppercase tracking-wider mt-1">ACADEMIC DISTINCTION</p>
                <p className="text-[11px] text-[#666] leading-tight">Computer Science & Engineering, Christ College</p>
              </div>

              {/* Metric 2 */}
              <div className="group border-t border-[#1C1C1C] pt-4">
                <div className="flex items-baseline gap-2">
                  <span className="font-display text-4xl sm:text-5xl font-black text-white group-hover:text-[#D71927] transition-colors">
                    6+
                  </span>
                  <span className="font-mono text-xs text-[#D71927]">SYSTEMS</span>
                </div>
                <p className="text-xs font-mono text-[#F5F5F5] uppercase tracking-wider mt-1">CORE ARCHITECTURES</p>
                <p className="text-[11px] text-[#666] leading-tight">AI, Microservices, Computer Vision & MVC</p>
              </div>

              {/* Metric 3 */}
              <div className="group border-t border-[#1C1C1C] pt-4">
                <div className="flex items-baseline gap-2">
                  <span className="font-display text-4xl sm:text-5xl font-black text-[#D71927] group-hover:text-[#F01D2E] transition-colors">
                    88%
                  </span>
                  <span className="font-mono text-xs text-[#888]">NPTEL ELITE</span>
                </div>
                <p className="text-xs font-mono text-[#F5F5F5] uppercase tracking-wider mt-1">PROGRAMMING IN JAVA</p>
                <p className="text-[11px] text-[#666] leading-tight">12-week intensive certification with Elite badge</p>
              </div>

              {/* Metric 4 */}
              <div className="group border-t border-[#1C1C1C] pt-4">
                <div className="flex items-baseline gap-2">
                  <span className="font-display text-4xl sm:text-5xl font-black text-white group-hover:text-[#D71927] transition-colors">
                    2
                  </span>
                  <span className="font-mono text-xs text-[#D71927]">INTERNSHIPS</span>
                </div>
                <p className="text-xs font-mono text-[#F5F5F5] uppercase tracking-wider mt-1">COMPLETED INTERNSHIPS</p>
                <p className="text-[11px] text-[#666] leading-tight">WHITEMATRIX & Cognifyz Technologies</p>
              </div>

            </div>
          </div>

        </div>

        {/* Bottom subtle scroll anchor */}
        <div className="pt-16 flex items-center justify-center">
          <a
            href="#about"
            className="flex flex-col items-center gap-2 text-xs font-mono text-[#555] hover:text-[#D71927] transition-colors group"
            aria-label="Scroll to About section"
          >
            <span className="tracking-widest uppercase text-[10px]">SCROLL TO DISCOVER</span>
            <div className="w-5 h-9 rounded-full border border-[#2B2B2B] group-hover:border-[#D71927] p-1 flex justify-center">
              <span className="w-1 h-2 rounded-full bg-[#D71927] animate-bounce" />
            </div>
          </a>
        </div>
      </div>
    </section>
  );
};
