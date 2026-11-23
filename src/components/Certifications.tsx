import React from 'react';
import { Award, Trophy, Zap, CheckCircle2, Shield, Sparkles } from 'lucide-react';
import { CERTIFICATIONS_DATA, HACKATHONS_DATA, WORKSHOPS_DATA } from '../data/portfolioData';

export const Certifications: React.FC = () => {
  return (
    <section id="credentials" className="relative py-24 bg-[#0A0A0A] border-t border-[#1F1F1F]">
      {/* Ambient Lighting */}
      <div className="absolute top-1/3 left-1/3 w-96 h-96 bg-[#D71927]/5 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 pb-6 border-b border-[#222]">
          <div>
            <div className="flex items-center gap-2 text-xs font-mono text-[#D71927] uppercase tracking-[0.2em] mb-2">
              <Award className="w-3.5 h-3.5" />
              <span>// 06. VERIFIED CREDENTIALS & ENDEAVORS</span>
            </div>
            <h2 className="font-display text-4xl sm:text-5xl lg:text-6xl font-black text-white uppercase tracking-tight">
              HONORS & HACKATHONS
            </h2>
          </div>
          <p className="mt-3 md:mt-0 font-mono text-xs text-[#777] max-w-sm text-left md:text-right">
            NPTEL ELITE SCORES &bull; NATIONAL COMPETITIVE HACKATHONS &bull; TECHNICAL MASTERCLASSES
          </p>
        </div>

        {/* 2-Column Grid: Left = Certifications & Accreditations | Right = Hackathons & Workshops */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
          
          {/* LEFT: Certifications (6 Cols) */}
          <div className="lg:col-span-6 space-y-6">
            <div className="flex items-center gap-2 text-xs font-mono text-white tracking-widest uppercase pb-2 border-b border-[#222]">
              <Shield className="w-4 h-4 text-[#D71927]" />
              <span>PROFESSIONAL CERTIFICATIONS</span>
            </div>

            <div className="space-y-4">
              {CERTIFICATIONS_DATA.map((cert, idx) => (
                <div
                  key={idx}
                  className="p-5 rounded-xl bg-[#101010] border border-[#202020] hover:border-[#D71927]/50 transition-all duration-300 group flex items-start justify-between gap-4"
                >
                  <div className="space-y-1">
                    <span className="text-[10px] font-mono text-[#777] uppercase tracking-wider block">
                      {cert.issuer}
                    </span>
                    <h3 className="font-mono text-sm font-semibold text-white group-hover:text-[#D71927] transition-colors">
                      {cert.title}
                    </h3>
                    {cert.score && (
                      <div className="flex items-center gap-1.5 pt-1">
                        <CheckCircle2 className="w-3.5 h-3.5 text-[#D71927]" />
                        <span className="font-mono text-xs text-[#F5F5F5] font-medium">
                          Score: <span className="text-[#D71927] font-bold">{cert.score}</span>
                        </span>
                      </div>
                    )}
                  </div>

                  <span className="px-2.5 py-1 rounded bg-[#161616] border border-[#2A2A2A] text-xs font-mono text-[#888] shrink-0">
                    {cert.year}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* RIGHT: Hackathons & Arena Competitions (6 Cols) */}
          <div className="lg:col-span-6 space-y-6">
            <div className="flex items-center gap-2 text-xs font-mono text-white tracking-widest uppercase pb-2 border-b border-[#222]">
              <Trophy className="w-4 h-4 text-[#D71927]" />
              <span>NATIONAL HACKATHONS & RECOGNITION</span>
            </div>

            <div className="space-y-4">
              {HACKATHONS_DATA.map((hack, idx) => (
                <div
                  key={idx}
                  className="p-5 rounded-xl bg-[#101010] border border-[#202020] hover:border-[#D71927]/50 transition-all duration-300 group"
                >
                  <div className="flex items-center justify-between gap-2 mb-1">
                    <div className="flex items-center gap-2">
                      <Zap className="w-4 h-4 text-[#D71927]" />
                      <h3 className="font-mono text-sm font-bold text-white group-hover:text-[#D71927] transition-colors">
                        {hack.title}
                      </h3>
                    </div>
                    <span className="px-2 py-0.5 rounded bg-[#161616] border border-[#2A2A2A] text-[10px] font-mono text-[#A0A0A0]">
                      {hack.year}
                    </span>
                  </div>

                  <p className="text-xs text-[#888] font-mono mb-2">
                    {hack.event} {hack.duration && `&bull; ${hack.duration}`}
                  </p>

                  <div className="inline-block px-2.5 py-1 rounded bg-[#D71927]/10 border border-[#D71927]/30 text-[#D71927] text-[11px] font-mono font-medium">
                    {hack.highlight}
                  </div>
                </div>
              ))}
            </div>
          </div>

        </div>

        {/* WORKSHOPS & MASTERCLASSES LEDGER (Full Width Strip) */}
        <div className="mt-16 p-8 rounded-2xl bg-[#0E0E0E] border border-[#202020]">
          <div className="flex items-center gap-2 text-xs font-mono text-[#D71927] uppercase tracking-widest mb-6 pb-3 border-b border-[#1E1E1E]">
            <Sparkles className="w-3.5 h-3.5" />
            <span>TECHNICAL WORKSHOPS & PROFESSIONAL DEVELOPMENT</span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {WORKSHOPS_DATA.map((ws, i) => (
              <div key={i} className="p-4 rounded-lg bg-[#141414] border border-[#222] hover:border-[#333] transition-colors">
                <span className="text-[10px] font-mono text-[#D71927] block mb-1">{ws.year}</span>
                <p className="font-mono text-xs font-semibold text-white leading-snug">{ws.title}</p>
                <p className="text-[11px] text-[#777] font-mono mt-1">{ws.organization}</p>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
};
