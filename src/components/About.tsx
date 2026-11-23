import React from 'react';
import { MapPin, Terminal, CheckCircle2 } from 'lucide-react';

export const About: React.FC = () => {
  return (
    <section id="about" className="relative py-24 bg-[#0A0A0A] border-t border-[#1F1F1F]">
      {/* Background Gradients */}
      <div className="absolute top-1/2 left-0 w-80 h-80 bg-[#D71927]/5 rounded-full blur-[100px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 pb-6 border-b border-[#222222]">
          <div>
            <div className="flex items-center gap-2 text-xs font-mono text-[#D71927] uppercase tracking-[0.2em] mb-2">
              <Terminal className="w-3.5 h-3.5" />
              <span>// 02. PROFILE & PHILOSOPHY</span>
            </div>
            <h2 className="font-display text-4xl sm:text-5xl lg:text-6xl font-black text-white uppercase tracking-tight">
              BEYOND THE CODE
            </h2>
          </div>
          <p className="mt-3 md:mt-0 font-mono text-xs text-[#777] max-w-xs text-left md:text-right">
            BRIDGING PRACTICAL COMPUTER VISION, BACKEND SYSTEMS & MODERN WEB INTERFACES
          </p>
        </div>

        {/* 2-Column Editorial Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          
          {/* LEFT COLUMN: Editorial Image & Quote Card (5 Cols) */}
          <div className="lg:col-span-5 space-y-8">
            {/* Framed Photo */}
            <div className="relative group">
              <div className="relative rounded-xl overflow-hidden border border-[#2B2B2B] bg-[#121212] shadow-2xl">
                {/* Crosshairs on corners */}
                <span className="absolute top-2 left-2 z-20 font-mono text-xs text-[#D71927] select-none">+</span>
                <span className="absolute top-2 right-2 z-20 font-mono text-xs text-[#D71927] select-none">+</span>
                <span className="absolute bottom-2 left-2 z-20 font-mono text-xs text-[#D71927] select-none">+</span>
                <span className="absolute bottom-2 right-2 z-20 font-mono text-xs text-[#D71927] select-none">+</span>

                <div className="aspect-[4/5] overflow-hidden">
                  <img
                    src="/assets/images/alvino-about.jpg"
                    alt="Alvino P Shatto - Software Engineer"
                    className="w-full h-full object-cover filter contrast-[1.05] grayscale group-hover:grayscale-0 transition-all duration-700"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0A0A0A] via-transparent to-transparent opacity-80" />
                </div>

                {/* Photo Caption Strip */}
                <div className="p-4 bg-[#141414] border-t border-[#222] flex items-center justify-between text-xs font-mono">
                  <div className="flex items-center gap-2 text-[#A0A0A0]">
                    <MapPin className="w-3.5 h-3.5 text-[#D71927]" />
                    <span>Irinjalakuda, Kerala</span>
                  </div>
                  <span className="text-[#D71927] font-semibold">// 2026</span>
                </div>
              </div>
            </div>

            {/* Editorial Quote Card (Matching Rayhan Aditya Reference Style) */}
            <div className="p-6 rounded-xl bg-gradient-to-br from-[#161616] to-[#0E0E0E] border-l-4 border-[#D71927] border-y border-r border-[#242424] space-y-3">
              <div className="text-3xl text-[#D71927] font-serif leading-none">“</div>
              <p className="text-sm text-[#E0E0E0] italic font-serif leading-relaxed">
                Reliable software is not just about writing syntax that executes; it is about structuring architectures that withstand scale, protect user data, and solve real human problems cleanly.
              </p>
              <div className="pt-2 flex items-center justify-between border-t border-[#242424]">
                <span className="font-mono text-xs text-white font-bold uppercase tracking-wider">
                  ALVINO P SHATTO
                </span>
                <span className="font-mono text-[11px] text-[#D71927]">DEVELOPER &bull; RESEARCHER</span>
              </div>
            </div>
          </div>

          {/* RIGHT COLUMN: Professional Journey & Academic Depth (7 Cols) */}
          <div className="lg:col-span-7 space-y-8">
            {/* Story Paragraphs */}
            <div className="space-y-5 text-sm sm:text-base text-[#A8A8A8] leading-relaxed">
              <p className="text-white text-lg font-medium leading-snug">
                I am a third-year Computer Science and Engineering undergraduate at <span className="text-[#D71927] font-semibold">Christ College of Engineering</span> (CGPA: 8.6/10), passionate about engineering dependable full-stack applications and applied AI systems.
              </p>
              <p>
                My focus spans the entire development lifecycle: from architecting asynchronous REST backends with <span className="text-white font-mono text-xs px-1.5 py-0.5 rounded bg-[#1A1A1A] border border-[#2B2B2B]">FastAPI</span> and <span className="text-white font-mono text-xs px-1.5 py-0.5 rounded bg-[#1A1A1A] border border-[#2B2B2B]">Django REST Framework</span>, to implementing real-time computer vision inference with <span className="text-white font-mono text-xs px-1.5 py-0.5 rounded bg-[#1A1A1A] border border-[#2B2B2B]">MediaPipe</span> and <span className="text-white font-mono text-xs px-1.5 py-0.5 rounded bg-[#1A1A1A] border border-[#2B2B2B]">OpenCV</span>.
              </p>
              <p>
                Through completed software engineering internships at <span className="text-white font-medium">WHITEMATRIX Software Solutions</span> and <span className="text-white font-medium">Cognifyz Technologies</span>, I have worked directly on production codebases, multi-role authentication mechanisms, and cloud service integrations.
              </p>
            </div>

            {/* Core Values / Strengths Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
              <div className="p-4 rounded-lg bg-[#111111] border border-[#222222] hover:border-[#D71927]/60 transition-colors">
                <div className="flex items-center gap-2 text-white font-mono text-xs font-semibold mb-1">
                  <CheckCircle2 className="w-4 h-4 text-[#D71927]" />
                  <span>SYSTEM INTEGRITY</span>
                </div>
                <p className="text-xs text-[#888] leading-normal">
                  Strict schema validations, OAuth 2.0 / JWT security, and relational database constraints.
                </p>
              </div>

              <div className="p-4 rounded-lg bg-[#111111] border border-[#222222] hover:border-[#D71927]/60 transition-colors">
                <div className="flex items-center gap-2 text-white font-mono text-xs font-semibold mb-1">
                  <CheckCircle2 className="w-4 h-4 text-[#D71927]" />
                  <span>APPLIED AI & VISION</span>
                </div>
                <p className="text-xs text-[#888] leading-normal">
                  Hands-on MediaPipe pose telemetry, sentiment classification, and voice synthesis integration.
                </p>
              </div>

              <div className="p-4 rounded-lg bg-[#111111] border border-[#222222] hover:border-[#D71927]/60 transition-colors">
                <div className="flex items-center gap-2 text-white font-mono text-xs font-semibold mb-1">
                  <CheckCircle2 className="w-4 h-4 text-[#D71927]" />
                  <span>ENTERPRISE BACKENDS</span>
                </div>
                <p className="text-xs text-[#888] leading-normal">
                  Layered MVC architectures in Spring Boot, Django REST, and asynchronous FastAPI microservices.
                </p>
              </div>

              <div className="p-4 rounded-lg bg-[#111111] border border-[#222222] hover:border-[#D71927]/60 transition-colors">
                <div className="flex items-center gap-2 text-white font-mono text-xs font-semibold mb-1">
                  <CheckCircle2 className="w-4 h-4 text-[#D71927]" />
                  <span>HACKATHON ENDURANCE</span>
                </div>
                <p className="text-xs text-[#888] leading-normal">
                  Proven rapid-prototyping track record in 24h & 36h national hackathons (Realm Hack '26, FISAT).
                </p>
              </div>
            </div>

            {/* Quick Metadata Matrix */}
            <div className="p-4 rounded-xl bg-[#0E0E0E] border border-[#1F1F1F] font-mono text-xs space-y-2">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-[#A0A0A0]">
                <div>
                  <span className="text-[#666] block text-[10px] uppercase">DEGREE / INSTITUTE</span>
                  <span className="text-white font-medium">B.Tech CSE &bull; Christ College (2024–2028)</span>
                </div>
                <div>
                  <span className="text-[#666] block text-[10px] uppercase">CURRENT STATUS</span>
                  <span className="text-[#D71927] font-semibold">Available for Roles & Internships</span>
                </div>
                <div>
                  <span className="text-[#666] block text-[10px] uppercase">PRIMARY LANGUAGES</span>
                  <span className="text-white font-medium">Python, Java, C++, C, JavaScript</span>
                </div>
                <div>
                  <span className="text-[#666] block text-[10px] uppercase">COMMUNICATION</span>
                  <span className="text-white font-medium">English, Malayalam, Hindi</span>
                </div>
              </div>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
