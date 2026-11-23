import React from 'react';
import { Briefcase, Calendar, MapPin, ChevronRight } from 'lucide-react';
import { EXPERIENCES_DATA } from '../data/portfolioData';

export const Experience: React.FC = () => {
  return (
    <section id="experience" className="relative py-24 bg-[#0A0A0A] border-t border-[#1F1F1F]">
      {/* Background ambient lighting */}
      <div className="absolute top-1/2 left-10 w-72 h-72 bg-[#D71927]/5 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 pb-6 border-b border-[#222]">
          <div>
            <div className="flex items-center gap-2 text-xs font-mono text-[#D71927] uppercase tracking-[0.2em] mb-2">
              <Briefcase className="w-3.5 h-3.5" />
              <span>// 04. EXPERIENCE TIMELINE</span>
            </div>
            <h2 className="font-display text-4xl sm:text-5xl lg:text-6xl font-black text-white uppercase tracking-tight">
              PROFESSIONAL JOURNEY
            </h2>
          </div>
          <p className="mt-3 md:mt-0 font-mono text-xs text-[#777] max-w-xs text-left md:text-right">
            SOFTWARE ENGINEERING INTERNSHIPS & PRODUCTION CODE DELIVERY
          </p>
        </div>

        {/* Timeline Container */}
        <div className="relative border-l border-[#242424] ml-4 sm:ml-8 pl-6 sm:pl-10 space-y-12">
          
          {EXPERIENCES_DATA.map((exp) => {
            const isCurrent = exp.type === 'Current Role';
            return (
              <div key={exp.company} className="relative group">
                
                {/* Timeline Node Icon / Laser dot */}
                <div
                  className={`absolute -left-[31px] sm:-left-[47px] top-1.5 w-4 h-4 rounded-full border-2 transition-all duration-300 ${
                    isCurrent
                      ? 'bg-[#D71927] border-[#0A0A0A] ring-4 ring-[#D71927]/30 shadow-[0_0_15px_#D71927]'
                      : 'bg-[#181818] border-[#333] group-hover:border-[#D71927] group-hover:bg-[#D71927]'
                  }`}
                />

                {/* Main Card */}
                <div className="p-6 sm:p-8 rounded-2xl bg-[#101010] border border-[#222] hover:border-[#D71927]/60 transition-all duration-300 shadow-xl relative overflow-hidden">
                  
                  {/* Subtle top red glow for current role */}
                  {isCurrent && (
                    <div className="absolute top-0 inset-x-0 h-[2px] bg-gradient-to-r from-transparent via-[#D71927] to-transparent" />
                  )}

                  {/* Header Row */}
                  <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-4 pb-6 border-b border-[#1A1A1A]">
                    <div>
                      <div className="flex flex-wrap items-center gap-2 mb-2">
                        <span className="text-lg sm:text-xl font-display font-black text-white tracking-wide uppercase">
                          {exp.role}
                        </span>
                        {isCurrent && (
                          <span className="px-2.5 py-0.5 rounded-full bg-[#D71927]/15 border border-[#D71927]/40 text-[#D71927] text-[10px] font-mono uppercase tracking-wider font-semibold animate-pulse">
                            ACTIVE INTERNSHIP
                          </span>
                        )}
                      </div>
                      
                      <div className="flex flex-wrap items-center gap-3 text-xs font-mono text-[#A0A0A0]">
                        <span className="text-white font-semibold">{exp.company}</span>
                        <span>&bull;</span>
                        <span className="flex items-center gap-1 text-[#777]">
                          <MapPin className="w-3 h-3 text-[#D71927]" />
                          <span>{exp.location}</span>
                        </span>
                      </div>
                    </div>

                    {/* Period Badge */}
                    <div className="flex items-center gap-2 px-3 py-1.5 rounded-md bg-[#161616] border border-[#262626] text-xs font-mono text-[#D71927] w-fit">
                      <Calendar className="w-3.5 h-3.5" />
                      <span>{exp.period}</span>
                    </div>
                  </div>

                  {/* Bullet Points */}
                  <div className="mt-6 space-y-3">
                    {exp.points.map((point, pIdx) => (
                      <div key={pIdx} className="flex items-start gap-3 text-sm text-[#A8A8A8] leading-relaxed">
                        <ChevronRight className="w-4 h-4 text-[#D71927] shrink-0 mt-0.5" />
                        <span>{point}</span>
                      </div>
                    ))}
                  </div>

                  {/* Technology Tags */}
                  <div className="mt-8 pt-4 border-t border-[#181818] flex flex-wrap items-center gap-2">
                    <span className="text-[11px] font-mono text-[#666] uppercase tracking-wider mr-2">
                      STACK & ENVIRONMENT:
                    </span>
                    {exp.technologies.map((tech) => (
                      <span
                        key={tech}
                        className="px-2.5 py-1 rounded bg-[#161616] border border-[#242424] text-[11px] font-mono text-[#C0C0C0]"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                </div>

              </div>
            );
          })}

        </div>

      </div>
    </section>
  );
};
