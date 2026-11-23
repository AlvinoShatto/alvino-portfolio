import React, { useState } from 'react';
import { 
  Mail, 
  Copy, 
  Check, 
  Download, 
  ArrowUpRight, 
  Phone, 
  MapPin, 
  Sparkles,
  Terminal 
} from 'lucide-react';
import confetti from 'canvas-confetti';
import { PERSONAL_DATA } from '../data/portfolioData';
import { GithubIcon, LinkedinIcon, LeetCodeIcon } from './Icons';

export const Contact: React.FC = () => {
  const [copied, setCopied] = useState(false);

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(PERSONAL_DATA.email);
    setCopied(true);
    confetti({
      particleCount: 80,
      spread: 70,
      origin: { y: 0.8 },
      colors: ['#D71927', '#FFFFFF', '#8E101A']
    });
    setTimeout(() => setCopied(false), 3000);
  };

  const handleResumeDownloadCelebration = () => {
    confetti({
      particleCount: 50,
      spread: 60,
      origin: { y: 0.85 },
      colors: ['#D71927', '#F5F5F5']
    });
  };

  return (
    <footer id="contact" className="relative py-24 bg-[#070707] border-t border-[#1F1F1F] overflow-hidden">
      {/* Background ambient lighting */}
      <div className="absolute bottom-0 right-1/4 w-[600px] h-[400px] bg-[#D71927]/10 rounded-full blur-[150px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Main Grid: Left = Call to action & Direct channels | Right = Tech Device Card (as in Reference) */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start mb-20">
          
          {/* LEFT: Call to action (7 Cols) */}
          <div className="lg:col-span-7 space-y-8">
            
            <div className="flex items-center gap-2 text-xs font-mono text-[#D71927] uppercase tracking-[0.25em]">
              <Sparkles className="w-3.5 h-3.5" />
              <span>// 08. LET'S COLLABORATE</span>
            </div>

            <h2 className="font-display text-5xl sm:text-6xl lg:text-7xl font-black text-white uppercase tracking-tight leading-[0.9]">
              LET’S BUILD <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-white via-[#F5F5F5] to-[#D71927]">
                SOMETHING IMPACTFUL.
              </span>
            </h2>

            <p className="text-sm sm:text-base text-[#A0A0A0] leading-relaxed max-w-xl">
              I am currently open to full-time software engineering roles, internships, and collaborative AI development projects. Whether you have a complex distributed system challenge, a computer vision product, or an innovative startup idea, my inbox is open.
            </p>

            {/* Interactive Email Bar */}
            <div className="p-2 sm:p-3 rounded-xl bg-[#111] border border-[#262626] flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-3 max-w-xl shadow-xl">
              <div className="flex items-center gap-3 px-3 py-1">
                <Mail className="w-5 h-5 text-[#D71927] shrink-0" />
                <span className="font-mono text-sm sm:text-base text-white select-all">
                  {PERSONAL_DATA.email}
                </span>
              </div>

              <div className="flex items-center gap-2">
                <button
                  onClick={handleCopyEmail}
                  className="flex-1 sm:flex-none flex items-center justify-center gap-1.5 px-4 py-2.5 rounded-lg bg-[#181818] hover:bg-[#222] text-xs font-mono text-white border border-[#2E2E2E] hover:border-[#D71927] transition-all"
                  title="Copy email to clipboard"
                >
                  {copied ? (
                    <>
                      <Check className="w-3.5 h-3.5 text-[#00FF66]" />
                      <span className="text-[#00FF66]">COPIED!</span>
                    </>
                  ) : (
                    <>
                      <Copy className="w-3.5 h-3.5 text-[#999]" />
                      <span>COPY</span>
                    </>
                  )}
                </button>

                <a
                  href={`mailto:${PERSONAL_DATA.email}`}
                  className="flex-1 sm:flex-none flex items-center justify-center gap-1.5 px-5 py-2.5 rounded-lg bg-[#D71927] hover:bg-[#F01D2E] text-white text-xs font-mono font-bold tracking-wider transition-all shadow-[0_0_15px_rgba(215,25,39,0.35)]"
                >
                  <span>SEND EMAIL</span>
                  <ArrowUpRight className="w-3.5 h-3.5" />
                </a>
              </div>
            </div>

            {/* Quick Metadata Points */}
            <div className="flex flex-wrap items-center gap-6 text-xs font-mono text-[#888] pt-2">
              <div className="flex items-center gap-2">
                <MapPin className="w-4 h-4 text-[#D71927]" />
                <span>{PERSONAL_DATA.location}</span>
              </div>
              <div className="flex items-center gap-2">
                <Phone className="w-4 h-4 text-[#D71927]" />
                <span>{PERSONAL_DATA.phone}</span>
              </div>
            </div>

          </div>

          {/* RIGHT: High-Tech Verification Terminal Card (5 Cols, matching reference layout) */}
          <div className="lg:col-span-5 space-y-4">
            
            {/* Terminal Card */}
            <div className="rounded-2xl bg-[#0D0D0D] border border-[#242424] p-6 sm:p-8 space-y-6 shadow-2xl relative">
              <div className="flex items-center justify-between pb-4 border-b border-[#1E1E1E]">
                <div className="flex items-center gap-2">
                  <Terminal className="w-4 h-4 text-[#D71927]" />
                  <span className="font-mono text-xs font-bold text-white tracking-widest uppercase">
                    SYSTEM STATUS // ONLINE
                  </span>
                </div>
                <span className="w-2 h-2 rounded-full bg-[#00FF66] animate-pulse" />
              </div>

              {/* Verified Links Channels */}
              <div className="space-y-3">
                <a
                  href={PERSONAL_DATA.links.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3.5 rounded-xl bg-[#141414] hover:bg-[#1A1A1A] border border-[#222] hover:border-[#D71927] flex items-center justify-between group transition-all"
                >
                  <div className="flex items-center gap-3">
                    <div className="p-2 rounded bg-[#0A0A0A] border border-[#262626] group-hover:border-[#D71927] text-white">
                      <GithubIcon className="w-4 h-4" />
                    </div>
                    <div>
                      <p className="font-mono text-xs font-bold text-white group-hover:text-[#D71927] transition-colors">
                        GITHUB
                      </p>
                      <p className="font-mono text-[11px] text-[#777]">
                        github.com/AlvinoShatto
                      </p>
                    </div>
                  </div>
                  <ArrowUpRight className="w-4 h-4 text-[#555] group-hover:text-[#D71927] group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all" />
                </a>

                <a
                  href={PERSONAL_DATA.links.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3.5 rounded-xl bg-[#141414] hover:bg-[#1A1A1A] border border-[#222] hover:border-[#D71927] flex items-center justify-between group transition-all"
                >
                  <div className="flex items-center gap-3">
                    <div className="p-2 rounded bg-[#0A0A0A] border border-[#262626] group-hover:border-[#D71927] text-white">
                      <LinkedinIcon className="w-4 h-4" />
                    </div>
                    <div>
                      <p className="font-mono text-xs font-bold text-white group-hover:text-[#D71927] transition-colors">
                        LINKEDIN
                      </p>
                      <p className="font-mono text-[11px] text-[#777]">
                        linkedin.com/in/alvinoshatto
                      </p>
                    </div>
                  </div>
                  <ArrowUpRight className="w-4 h-4 text-[#555] group-hover:text-[#D71927] group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all" />
                </a>

                <a
                  href={PERSONAL_DATA.links.leetcode}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3.5 rounded-xl bg-[#141414] hover:bg-[#1A1A1A] border border-[#222] hover:border-[#D71927] flex items-center justify-between group transition-all"
                >
                  <div className="flex items-center gap-3">
                    <div className="p-2 rounded bg-[#0A0A0A] border border-[#262626] group-hover:border-[#D71927] text-white">
                      <LeetCodeIcon className="w-4 h-4" />
                    </div>
                    <div>
                      <p className="font-mono text-xs font-bold text-white group-hover:text-[#D71927] transition-colors">
                        LEETCODE
                      </p>
                      <p className="font-mono text-[11px] text-[#777]">
                        leetcode.com/u/Alvino14
                      </p>
                    </div>
                  </div>
                  <ArrowUpRight className="w-4 h-4 text-[#555] group-hover:text-[#D71927] group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all" />
                </a>
              </div>

              {/* Resume Download Box */}
              <div className="pt-2">
                <a
                  href={PERSONAL_DATA.links.resume}
                  download="Alvino_P_Shatto_Resume.pdf"
                  onClick={handleResumeDownloadCelebration}
                  className="w-full flex items-center justify-center gap-2.5 py-3 rounded-xl bg-gradient-to-r from-[#D71927] to-[#8E101A] hover:from-[#F01D2E] hover:to-[#B31217] text-white font-mono text-xs font-bold tracking-wider transition-all shadow-[0_0_20px_rgba(215,25,39,0.3)]"
                >
                  <Download className="w-4 h-4" />
                  <span>DOWNLOAD VERIFIED RESUME PDF</span>
                </a>
              </div>

            </div>

          </div>

        </div>

        {/* BOTTOM SIGNATURE STRIP */}
        <div className="pt-10 border-t border-[#1C1C1C] flex flex-col sm:flex-row items-center justify-between gap-4 text-xs font-mono text-[#666]">
          <div className="flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-[#D71927]" />
            <span className="text-[#A0A0A0]">ALVINO P SHATTO &bull; 2026</span>
          </div>

          <p className="text-center sm:text-right">
            DESIGNED & ENGINEERED WITH REACT, TYPESCRIPT & TAILWIND
          </p>
        </div>

      </div>
    </footer>
  );
};
