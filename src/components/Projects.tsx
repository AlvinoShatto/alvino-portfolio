import React, { useState } from 'react';
import { 
  ExternalLink, 
  Play, 
  Check, 
  ChevronRight, 
  Maximize2, 
  X,
  Code2
} from 'lucide-react';
import { PROJECTS_DATA, type Project } from '../data/portfolioData';
import { GithubIcon } from './Icons';

export const Projects: React.FC = () => {
  const [activeProject, setActiveProject] = useState<Project>(PROJECTS_DATA[0]);
  const [selectedCaseStudy, setSelectedCaseStudy] = useState<Project | null>(null);

  return (
    <section id="projects" className="relative py-24 bg-[#080808] border-t border-[#1C1C1C]">
      {/* Background ambient crimson glow */}
      <div className="absolute top-1/4 right-0 w-[500px] h-[500px] bg-[#D71927]/5 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 pb-6 border-b border-[#222]">
          <div>
            <div className="flex items-center gap-2 text-xs font-mono text-[#D71927] uppercase tracking-[0.2em] mb-2">
              <Code2 className="w-3.5 h-3.5" />
              <span>// 05. CASE STUDIES & ARCHITECTURES</span>
            </div>
            <h2 className="font-display text-4xl sm:text-5xl lg:text-6xl font-black text-white uppercase tracking-tight">
              FEATURED PROJECTS
            </h2>
          </div>
          <p className="mt-3 md:mt-0 font-mono text-xs text-[#777] max-w-sm text-left md:text-right">
            DIGITAL CASE STUDIES &bull; PRODUCTION CODEBASES &bull; VERIFIED DEPLOYMENTS
          </p>
        </div>

        {/* Project Selector Bar (Tabbed / Numbered Navigation) */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-2 mb-10">
          {PROJECTS_DATA.map((proj) => {
            const isSelected = activeProject.id === proj.id;
            return (
              <button
                key={proj.id}
                onClick={() => setActiveProject(proj)}
                className={`p-3 rounded-lg text-left transition-all duration-200 border ${
                  isSelected
                    ? 'bg-[#161616] border-[#D71927] shadow-[0_0_15px_rgba(215,25,39,0.3)]'
                    : 'bg-[#0E0E0E] border-[#1E1E1E] hover:border-[#333] hover:bg-[#121212]'
                }`}
              >
                <div className="flex items-center justify-between text-xs font-mono mb-1">
                  <span className={isSelected ? 'text-[#D71927] font-bold' : 'text-[#555]'}>
                    {proj.number}
                  </span>
                  {proj.liveUrl && (
                    <span className="w-1.5 h-1.5 rounded-full bg-[#00FF66] animate-pulse" title="Live Deployment" />
                  )}
                  {proj.videoUrl && (
                    <span className="w-1.5 h-1.5 rounded-full bg-[#FF0000]" title="Video Demonstration" />
                  )}
                </div>
                <p className={`font-mono text-xs font-semibold truncate ${isSelected ? 'text-white' : 'text-[#8E8E93]'}`}>
                  {proj.title}
                </p>
              </button>
            );
          })}
        </div>

        {/* Main Interactive Showcase Stage (Selected Project) */}
        <div className="rounded-2xl bg-[#0E0E0E] border border-[#222] overflow-hidden shadow-2xl relative">
          
          {/* Window Chrome Header Bar */}
          <div className="px-5 py-3.5 bg-[#141414] border-b border-[#202020] flex items-center justify-between">
            <div className="flex items-center gap-2">
              <span className="w-3 h-3 rounded-full bg-[#262626]" />
              <span className="w-3 h-3 rounded-full bg-[#262626]" />
              <span className="w-3 h-3 rounded-full bg-[#262626]" />
              <span className="ml-3 font-mono text-xs text-[#777]">
                SYS.ARCH // {activeProject.id.toUpperCase()}.spec
              </span>
            </div>

            <div className="flex items-center gap-3">
              <span className="text-[10px] font-mono text-[#D71927] uppercase tracking-wider hidden sm:inline">
                {activeProject.category}
              </span>
              <button
                onClick={() => setSelectedCaseStudy(activeProject)}
                className="flex items-center gap-1 px-2.5 py-1 rounded bg-[#1C1C1C] hover:bg-[#D71927] text-white text-[11px] font-mono transition-colors"
                title="Expand Full Case Study"
              >
                <Maximize2 className="w-3 h-3" />
                <span className="hidden sm:inline">EXPAND SPEC</span>
              </button>
            </div>
          </div>

          {/* Main Stage Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-0">
            
            {/* Left Column: Project Overview & Specs (7 Cols) */}
            <div className="lg:col-span-7 p-6 sm:p-10 space-y-6 flex flex-col justify-between">
              <div>
                {/* Category & Project Index */}
                <div className="flex items-center gap-3 mb-2">
                  <span className="font-display text-4xl text-[#D71927] font-black">
                    {activeProject.number}
                  </span>
                  <div className="h-4 w-[1px] bg-[#333]" />
                  <span className="text-xs font-mono text-[#A3A3A3] uppercase tracking-wider">
                    {activeProject.category}
                  </span>
                </div>

                {/* Title & Subtitle */}
                <h3 className="font-display text-3xl sm:text-4xl lg:text-5xl font-black text-white uppercase tracking-tight leading-none mb-2">
                  {activeProject.title}
                </h3>
                <p className="text-sm font-mono text-[#D71927] font-medium mb-5">
                  {activeProject.subtitle}
                </p>

                {/* Description */}
                <p className="text-sm sm:text-base text-[#A8A8A8] leading-relaxed mb-6">
                  {activeProject.description}
                </p>

                {/* Architectural Highlights */}
                <div className="space-y-2.5 mb-6">
                  <span className="text-xs font-mono text-[#F5F5F5] uppercase tracking-wider block font-semibold">
                    KEY ENGINEERING DELIVERABLES:
                  </span>
                  {activeProject.contribution.map((item, idx) => (
                    <div key={idx} className="flex items-start gap-2.5 text-xs text-[#A0A0A0]">
                      <Check className="w-4 h-4 text-[#D71927] shrink-0 mt-0.5" />
                      <span>{item}</span>
                    </div>
                  ))}
                </div>

                {/* Tech Badges */}
                <div className="pt-2">
                  <span className="text-[11px] font-mono text-[#666] uppercase tracking-wider block mb-2">
                    TECHNOLOGIES USED:
                  </span>
                  <div className="flex flex-wrap gap-1.5">
                    {activeProject.techStack.map((tech) => (
                      <span
                        key={tech}
                        className="px-2.5 py-1 rounded bg-[#171717] border border-[#262626] text-xs font-mono text-[#E0E0E0]"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="pt-8 border-t border-[#1C1C1C] flex flex-wrap items-center gap-3">
                {activeProject.liveUrl && (
                  <a
                    href={activeProject.liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-5 py-2.5 bg-[#D71927] hover:bg-[#F01D2E] text-white text-xs font-mono font-semibold tracking-wider rounded transition-all shadow-[0_0_20px_rgba(215,25,39,0.4)] group"
                  >
                    <span>LAUNCH LIVE SYSTEM</span>
                    <ExternalLink className="w-3.5 h-3.5 transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                  </a>
                )}

                {activeProject.videoUrl && (
                  <a
                    href={activeProject.videoUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-5 py-2.5 bg-[#B31217] hover:bg-[#D71927] text-white text-xs font-mono font-semibold tracking-wider rounded transition-all"
                  >
                    <Play className="w-3.5 h-3.5 fill-current" />
                    <span>WATCH VIDEO DEMO</span>
                  </a>
                )}

                <a
                  href={activeProject.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-4 py-2.5 bg-[#141414] hover:bg-[#1C1C1C] text-[#E0E0E0] hover:text-white border border-[#2B2B2B] hover:border-[#D71927] text-xs font-mono tracking-wider rounded transition-all"
                >
                  <GithubIcon className="w-3.5 h-3.5 text-[#D71927]" />
                  <span>VIEW REPOSITORY</span>
                </a>
              </div>
            </div>

            {/* Right Column: Architectural Terminal & Interactive Preview (5 Cols) */}
            <div className="lg:col-span-5 bg-[#0A0A0A] border-t lg:border-t-0 lg:border-l border-[#202020] p-6 sm:p-8 flex flex-col justify-between">
              
              {/* Telemetry Metrics Bar */}
              <div className="grid grid-cols-3 gap-2 mb-6">
                {activeProject.metrics?.map((m, idx) => (
                  <div key={idx} className="p-3 rounded bg-[#111111] border border-[#202020] text-center">
                    <span className="text-[10px] font-mono text-[#777] block uppercase">{m.label}</span>
                    <span className="text-xs sm:text-sm font-mono font-bold text-[#D71927] mt-0.5 block">{m.value}</span>
                  </div>
                ))}
              </div>

              {/* Simulated Live Architectural Interface Preview */}
              <div className="rounded-xl bg-[#0F0F0F] border border-[#222] p-4 font-mono text-xs text-[#999] space-y-3 relative overflow-hidden shadow-inner">
                <div className="flex items-center justify-between pb-2 border-b border-[#1C1C1C] text-[10px] text-[#666]">
                  <span className="flex items-center gap-1.5 text-[#D71927]">
                    <span className="w-2 h-2 rounded-full bg-[#D71927] animate-pulse" />
                    <span>SIMULATED RUNTIME TELEMETRY</span>
                  </span>
                  <span>NODE: US-EAST</span>
                </div>

                {activeProject.id === 'rehabsense-ai' && (
                  <div className="space-y-2 text-[11px]">
                    <div className="flex justify-between text-[#888]">
                      <span>OpenCV Video Capture:</span>
                      <span className="text-[#00FF66]">Active @ 30 FPS</span>
                    </div>
                    <div className="flex justify-between text-[#888]">
                      <span>MediaPipe Landmarks:</span>
                      <span className="text-white">33 Anatomical Vectors</span>
                    </div>
                    <div className="flex justify-between text-[#888]">
                      <span>Biomechanical Joint Calc:</span>
                      <span className="text-[#D71927]">Elbow: 142&deg; | Knee: 89&deg;</span>
                    </div>
                    <div className="flex justify-between text-[#888]">
                      <span>FastAPI Async Loop:</span>
                      <span className="text-white">&lt; 38ms latency</span>
                    </div>
                    <div className="mt-2 p-2 rounded bg-[#080808] border border-[#1A1A1A] text-[10px] text-[#777]">
                      <code>GET /api/v1/telemetry/session-active &bull; 200 OK [JSON]</code>
                    </div>
                  </div>
                )}

                {activeProject.id === 'white-matrix' && (
                  <div className="space-y-2 text-[11px]">
                    <div className="flex justify-between text-[#888]">
                      <span>OAuth Provider:</span>
                      <span className="text-white">Google & LinkedIn 2.0</span>
                    </div>
                    <div className="flex justify-between text-[#888]">
                      <span>Session Token:</span>
                      <span className="text-[#00FF66]">HMAC-SHA256 Signed JWT</span>
                    </div>
                    <div className="flex justify-between text-[#888]">
                      <span>Role Access:</span>
                      <span className="text-[#D71927]">ROLE_VERIFIED_VOTER</span>
                    </div>
                    <div className="flex justify-between text-[#888]">
                      <span>Double-Vote Constraint:</span>
                      <span className="text-white">DB Trigger Enforced</span>
                    </div>
                    <div className="mt-2 p-2 rounded bg-[#080808] border border-[#1A1A1A] text-[10px] text-[#777]">
                      <code>POST /auth/oauth/callback &bull; 200 AUTHORIZED</code>
                    </div>
                  </div>
                )}

                {activeProject.id === 'skillforge-ai' && (
                  <div className="space-y-2 text-[11px]">
                    <div className="flex justify-between text-[#888]">
                      <span>Evaluation Logic:</span>
                      <span className="text-white">Multi-Step Reasoning</span>
                    </div>
                    <div className="flex justify-between text-[#888]">
                      <span>Skill Gap Analysis:</span>
                      <span className="text-[#D71927]">Recursive Profiler</span>
                    </div>
                    <div className="flex justify-between text-[#888]">
                      <span>API Layer:</span>
                      <span className="text-[#00FF66]">FastAPI Async Endpoints</span>
                    </div>
                    <div className="mt-2 p-2 rounded bg-[#080808] border border-[#1A1A1A] text-[10px] text-[#777]">
                      <code>POST /api/eval/reasoning-bench &bull; 200 OK</code>
                    </div>
                  </div>
                )}

                {activeProject.id === 'mindguard-ai' && (
                  <div className="space-y-2 text-[11px]">
                    <div className="flex justify-between text-[#888]">
                      <span>Frontend Client:</span>
                      <span className="text-white">Next.js 14 + TypeScript</span>
                    </div>
                    <div className="flex justify-between text-[#888]">
                      <span>Sentiment Ingestion:</span>
                      <span className="text-[#00FF66]">Flask Microservice</span>
                    </div>
                    <div className="flex justify-between text-[#888]">
                      <span>Risk Assessment:</span>
                      <span className="text-[#D71927]">Automated Triage Tier</span>
                    </div>
                    <div className="mt-2 p-2 rounded bg-[#080808] border border-[#1A1A1A] text-[10px] text-[#777]">
                      <code>GET /wellness/triage/status &bull; LOW RISK</code>
                    </div>
                  </div>
                )}

                {activeProject.id === 'smart-placement-portal' && (
                  <div className="space-y-2 text-[11px]">
                    <div className="flex justify-between text-[#888]">
                      <span>Backend Engine:</span>
                      <span className="text-white">Django REST Framework</span>
                    </div>
                    <div className="flex justify-between text-[#888]">
                      <span>Database Engine:</span>
                      <span className="text-[#00FF66]">Relational MySQL</span>
                    </div>
                    <div className="flex justify-between text-[#888]">
                      <span>Eligibility Filter:</span>
                      <span className="text-[#D71927]">Automated Criteria Match</span>
                    </div>
                    <div className="mt-2 p-2 rounded bg-[#080808] border border-[#1A1A1A] text-[10px] text-[#777]">
                      <code>GET /api/v1/jobs/eligible &bull; 14 Drives Match</code>
                    </div>
                  </div>
                )}

                {activeProject.id === 'car-rental-service' && (
                  <div className="space-y-2 text-[11px]">
                    <div className="flex justify-between text-[#888]">
                      <span>Core Framework:</span>
                      <span className="text-white">Java 17 &bull; Spring Boot</span>
                    </div>
                    <div className="flex justify-between text-[#888]">
                      <span>Security Layer:</span>
                      <span className="text-[#00FF66]">Spring Security Form Auth</span>
                    </div>
                    <div className="flex justify-between text-[#888]">
                      <span>Data Persistence:</span>
                      <span className="text-[#D71927]">Hibernate ORM / JPA</span>
                    </div>
                    <div className="mt-2 p-2 rounded bg-[#080808] border border-[#1A1A1A] text-[10px] text-[#777]">
                      <code>BOOKING_SERVICE: Transaction committed [ACID OK]</code>
                    </div>
                  </div>
                )}
              </div>

              {/* Bottom Quick-Jump to Other Projects */}
              <div className="mt-6 pt-4 border-t border-[#1C1C1C] flex items-center justify-between text-xs font-mono">
                <span className="text-[#555]">SELECTED PROJECT {activeProject.number} / 06</span>
                <button
                  onClick={() => {
                    const currentIndex = PROJECTS_DATA.findIndex(p => p.id === activeProject.id);
                    const nextIndex = (currentIndex + 1) % PROJECTS_DATA.length;
                    setActiveProject(PROJECTS_DATA[nextIndex]);
                  }}
                  className="flex items-center gap-1 text-[#D71927] hover:text-white transition-colors"
                >
                  <span>NEXT ARCHITECTURE</span>
                  <ChevronRight className="w-4 h-4" />
                </button>
              </div>

            </div>

          </div>
        </div>

        {/* Extended Case Study Modal Drawer */}
        {selectedCaseStudy && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md">
            <div className="bg-[#121212] border border-[#2E2E2E] rounded-2xl max-w-2xl w-full p-6 sm:p-8 space-y-6 max-h-[90vh] overflow-y-auto relative shadow-2xl">
              
              <button
                onClick={() => setSelectedCaseStudy(null)}
                className="absolute top-4 right-4 p-2 text-[#777] hover:text-white rounded-lg bg-[#1A1A1A] border border-[#282828]"
              >
                <X className="w-5 h-5" />
              </button>

              <div className="border-b border-[#242424] pb-4">
                <span className="text-xs font-mono text-[#D71927] uppercase tracking-wider">
                  CASE STUDY SPECIFICATION // {selectedCaseStudy.number}
                </span>
                <h3 className="text-2xl sm:text-3xl font-display font-black text-white mt-1 uppercase">
                  {selectedCaseStudy.title}
                </h3>
                <p className="text-xs font-mono text-[#8E8E93] mt-1">
                  {selectedCaseStudy.subtitle}
                </p>
              </div>

              <div className="space-y-4 text-sm text-[#A0A0A0]">
                <div>
                  <h4 className="text-xs font-mono text-white uppercase tracking-wider mb-2 font-semibold">
                    PROJECT ARCHITECTURE & PURPOSE
                  </h4>
                  <p className="leading-relaxed">{selectedCaseStudy.description}</p>
                </div>

                <div>
                  <h4 className="text-xs font-mono text-white uppercase tracking-wider mb-2 font-semibold">
                    INDIVIDUAL CONTRIBUTIONS
                  </h4>
                  <ul className="space-y-2">
                    {selectedCaseStudy.contribution.map((c, i) => (
                      <li key={i} className="flex items-start gap-2">
                        <Check className="w-4 h-4 text-[#D71927] shrink-0 mt-0.5" />
                        <span>{c}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div>
                  <h4 className="text-xs font-mono text-white uppercase tracking-wider mb-2 font-semibold">
                    FEATURES & CAPABILITIES
                  </h4>
                  <ul className="space-y-2">
                    {selectedCaseStudy.features.map((f, i) => (
                      <li key={i} className="flex items-start gap-2">
                        <ChevronRight className="w-4 h-4 text-[#D71927] shrink-0 mt-0.5" />
                        <span>{f}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              <div className="pt-4 border-t border-[#242424] flex items-center justify-end gap-3">
                <a
                  href={selectedCaseStudy.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-4 py-2 bg-[#1C1C1C] hover:bg-[#D71927] text-white text-xs font-mono rounded transition-colors"
                >
                  VISIT GITHUB REPOSITORY
                </a>
              </div>
            </div>
          </div>
        )}

      </div>
    </section>
  );
};
