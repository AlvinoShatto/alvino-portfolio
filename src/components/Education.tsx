import React from 'react';
import { GraduationCap, Calendar } from 'lucide-react';
import { EDUCATION_DATA } from '../data/portfolioData';

export const Education: React.FC = () => {
  return (
    <section id="education" className="relative py-24 bg-[#080808] border-t border-[#1C1C1C]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 pb-6 border-b border-[#222]">
          <div>
            <div className="flex items-center gap-2 text-xs font-mono text-[#D71927] uppercase tracking-[0.2em] mb-2">
              <GraduationCap className="w-3.5 h-3.5" />
              <span>// 07. ACADEMIC FOUNDATION</span>
            </div>
            <h2 className="font-display text-4xl sm:text-5xl lg:text-6xl font-black text-white uppercase tracking-tight">
              EDUCATION
            </h2>
          </div>
          <p className="mt-3 md:mt-0 font-mono text-xs text-[#777] max-w-xs text-left md:text-right">
            CONSISTENT ACADEMIC DISTINCTION & ENGINEERING PRINCIPLES
          </p>
        </div>

        {/* 3 Academic Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {EDUCATION_DATA.map((edu, idx) => {
            const isBTech = idx === 0;
            return (
              <div
                key={edu.degree}
                className={`p-6 sm:p-8 rounded-2xl flex flex-col justify-between transition-all duration-300 relative overflow-hidden ${
                  isBTech
                    ? 'bg-[#111111] border-2 border-[#D71927]/60 shadow-[0_0_30px_rgba(215,25,39,0.15)]'
                    : 'bg-[#0E0E0E] border border-[#202020] hover:border-[#333]'
                }`}
              >
                {/* Top Badge for Current Degree */}
                {isBTech && (
                  <div className="absolute top-0 right-0 px-3 py-1 bg-[#D71927] text-white text-[10px] font-mono font-bold tracking-wider rounded-bl-lg uppercase">
                    CURRENT DEGREE
                  </div>
                )}

                <div>
                  <div className="flex items-center gap-2 text-xs font-mono text-[#888] mb-4">
                    <Calendar className="w-3.5 h-3.5 text-[#D71927]" />
                    <span>{edu.period}</span>
                  </div>

                  <h3 className="font-display text-2xl font-bold text-white uppercase tracking-tight leading-snug mb-2">
                    {edu.degree}
                  </h3>

                  <p className="font-mono text-xs text-[#A0A0A0] font-medium mb-4">
                    {edu.institution}
                  </p>

                  <p className="text-xs text-[#777] leading-relaxed mb-6">
                    {edu.description}
                  </p>
                </div>

                <div className="pt-4 border-t border-[#1C1C1C] flex items-center justify-between">
                  <span className="text-[10px] font-mono text-[#666] uppercase">SCORE ACHIEVED:</span>
                  <span className="font-mono text-sm font-black text-[#D71927]">
                    {edu.grade}
                  </span>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};
